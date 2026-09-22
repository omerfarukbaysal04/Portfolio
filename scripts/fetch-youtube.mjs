// Build-time YouTube refresh.
// Fetches the channel's RSS feed and writes the latest videos to
// src/data/youtube.json, so the Social section stays current on every build
// (e.g. each Netlify deploy) without manual edits.
//
// On ANY failure (offline, network/SSL error, empty feed) it leaves the existing
// youtube.json untouched and exits 0, so the build never breaks.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const CHANNEL_ID = 'UCgHK1rZFe-g4HZGNm4PqsTg';
const COUNT = 6;
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'youtube.json');

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)));

try {
  const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const xml = await res.text();

  const entries = [
    ...xml.matchAll(/<entry>[\s\S]*?<yt:videoId>([^<]+)<\/yt:videoId>[\s\S]*?<title>([^<]+)<\/title>/g),
  ];
  const videos = entries.slice(0, COUNT).map((m) => ({ id: m[1], title: decode(m[2]) }));
  if (videos.length === 0) throw new Error('no entries parsed');

  await writeFile(OUT, JSON.stringify(videos, null, 2) + '\n');
  console.log(`[fetch-youtube] updated youtube.json with ${videos.length} videos`);
} catch (err) {
  console.warn(`[fetch-youtube] skipped (${err.message}); keeping existing youtube.json`);
  process.exit(0);
}
