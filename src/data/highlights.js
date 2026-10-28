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
    projects: ['pentez-ai', 'the-watchtower'],
  },
  {
    icon: 'brain',
    title: {
      en: 'AI-powered products',
      tr: 'Yapay zekâ destekli ürünler',
    },
    desc: {
      en: 'Applications that put LLMs to work on real problems — from decision-making agents to a health assistant.',
      tr: 'LLM’leri gerçek problemlere bağlayan uygulamalar — karar veren ajanlardan sağlık asistanına.',
    },
    bullets: {
      en: ['LLM-driven decision layers', 'Medical document analysis & voice assistant', 'Multi-agent, blackboard architecture'],
      tr: ['LLM tabanlı karar katmanları', 'Tıbbi belge analizi ve sesli asistan', 'Çoklu ajan, blackboard mimarisi'],
    },
    projects: ['tanilog', 'pentez-ai'],
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
      en: ['React, Next.js & TypeScript', 'FastAPI, ASP.NET Core & Supabase', 'Containerised deploys with Docker'],
      tr: ['React, Next.js ve TypeScript', 'FastAPI, ASP.NET Core ve Supabase', 'Docker ile konteynerli dağıtım'],
    },
    projects: ['stajio', 'kitap-vitrini'],
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
    projects: ['glide-ball', 'a-fox-story'],
  },
];
