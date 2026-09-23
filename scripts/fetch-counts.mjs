// Build-time social follower refresh.
// Only YouTube subscribers are reliably readable server-side, so only that is
// auto-updated (from the channel page). Instagram's public og:description returns
// a STALE cached number, and X / LinkedIn block server requests (login wall /
// HTTP 999) — so Instagram, X and LinkedIn stay MANUAL. Edit those in
// src/data/social-counts.json.
//
// A fetch failure keeps the existing value; the script always exits 0 so a build
// never breaks.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'social-counts.json');
const HEADERS = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Accept-Language': 'en-US,en;q=0.9' };

const parseCount = (s) => {
  const m = String(s).replace(/ /g, ' ').match(/([\d][\d.,]*)\s*([KMB])?/i);
  if (!m) return null;
  let n = parseFloat(m[1].replace(/,/g, ''));
  if (!Number.isFinite(n)) return null;
  const suf = (m[2] || '').toUpperCase();
  if (suf === 'K') n *= 1e3;
  else if (suf === 'M') n *= 1e6;
  else if (suf === 'B') n *= 1e9;
  return Math.round(n);
};

const counts = JSON.parse(readFileSync(OUT, 'utf8'));

const tryFetch = async (label, url, extract) => {
  try {
    const res = await fetch(url, { headers: HEADERS });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const raw = extract(html);
    const n = raw != null ? parseCount(raw) : null;
    if (n == null) throw new Error('not found');
    counts[label] = n;
    console.log(`[fetch-counts] ${label}: ${n}`);
  } catch (err) {
    console.warn(`[fetch-counts] ${label} skipped (${err.message}); keeping ${counts[label]}`);
  }
};

await tryFetch('youtube', 'https://www.youtube.com/@omerfarukbaysall', (h) => {
  const m = h.match(/([\d.,]+[KMB]?)\s+subscribers/i);
  return m ? m[1] : null;
});

writeFileSync(OUT, JSON.stringify(counts, null, 2) + '\n');
console.log('[fetch-counts] wrote social-counts.json');
