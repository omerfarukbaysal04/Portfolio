// "What I do" slides shown on the right side of the hero.
// icon: key resolved in HeroStage; projects: slugs from src/data/projects.js.
export const highlights = [
  {
    icon: 'shield',
    title: {
      en: 'Penetration testing & security tools',
      tr: 'Sızma testi ve güvenlik araçları',
    },
    desc: {
      en: 'I build tools that look at networks and systems through an attacker’s eyes to find what is exposed before someone else does.',
      tr: 'Ağları ve sistemleri saldırgan gözüyle inceleyip açıkları başkasından önce bulan araçlar geliştiriyorum.',
    },
    bullets: {
      en: ['Autonomous pentesting with LLM agents', 'Continuous vulnerability & CVE scanning', 'Network access control (AAA / VLAN)'],
      tr: ['LLM ajanlarıyla otonom sızma testi', 'Sürekli zafiyet ve CVE taraması', 'Ağ erişim kontrolü (AAA / VLAN)'],
    },
    projects: ['pentez-ai', 'the-watchtower', 'cyber-security-tools'],
  },
  {
    icon: 'brain',
    title: {
      en: 'AI-powered products',
      tr: 'Yapay zekâ destekli ürünler',
    },
    desc: {
      en: 'Applications that put LLMs to work on everyday problems — from a health assistant to building management.',
      tr: 'LLM’leri gündelik problemlere bağlayan uygulamalar — sağlık asistanından site yönetimine.',
    },
    bullets: {
      en: ['Medical document analysis & voice assistant', 'Photo + text fault diagnosis', 'Scores, risks and recommended actions'],
      tr: ['Tıbbi belge analizi ve sesli asistan', 'Fotoğraf + metinle arıza teşhisi', 'Skor, risk ve aksiyon önerileri'],
    },
    projects: ['tanilog', 'apart-ai', 'pentez-ai'],
  },
  {
    icon: 'code',
    title: {
      en: 'Full-stack web apps',
      tr: 'Full-stack web uygulamaları',
    },
    desc: {
      en: 'End-to-end products, from the interface to the database — built, deployed and live.',
      tr: 'Arayüzden veritabanına uçtan uca ürünler — geliştirilmiş, dağıtılmış ve yayında.',
    },
    bullets: {
      en: ['Next.js, React & vanilla JS', 'Node.js, PostgreSQL & Supabase', 'Deployed on Vercel & Render'],
      tr: ['Next.js, React ve vanilla JS', 'Node.js, PostgreSQL ve Supabase', 'Vercel ve Render üzerinde yayında'],
    },
    projects: ['apart-ai', 'stajio', 'tanilog'],
  },
  {
    icon: 'gamepad',
    title: {
      en: 'Game development',
      tr: 'Oyun geliştirme',
    },
    desc: {
      en: 'I design and ship story-driven and physics-based games in Unity.',
      tr: 'Unity ile hikâye odaklı ve fizik tabanlı oyunlar tasarlayıp yayınlıyorum.',
    },
    bullets: {
      en: ['4 published games', 'Live on Google Play and itch.io', '2D platformers, pixel art, narrative'],
      tr: ['4 yayınlanmış oyun', 'Google Play ve itch.io’da yayında', '2D platform, pixel art, anlatı'],
    },
    projects: ['glide-ball', 'cost-of-redemption', 'a-fox-story', 'dodge-the-asteroids'],
  },
];
