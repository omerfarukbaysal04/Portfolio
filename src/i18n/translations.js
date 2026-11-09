// UI string translations. Project content lives in src/data/projects.js
// (translatable fields there are { en, tr } objects).

export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      description:
        'Computer Engineering graduate from Pamukkale University. I build across three fields: games in Unity, LLM-powered full-stack web apps and Python-based cybersecurity tools.',
    },
    about: {
      pre: 'About',
      hi: 'Me',
      p1: "I'm a Computer Engineering graduate from Pamukkale University. A passion for creating things and telling stories has driven me since childhood, and it led me to game development, web development and cybersecurity. What I enjoy most is turning what I learn into something concrete and functional.",
      p2a: "Game development is my main passion. I'm a graduate of the 3rd term of the Google Games and Apps Academy, and I design story-driven and physics-based games in Unity. I've made four games so far; one of them is published on the ",
      p2LinkGooglePlay: 'Google Play Store',
      p2b: ", and I publish the rest on ",
      p2LinkItch: 'itch.io',
      p2c: ".",
      p3: "Alongside games, I build LLM-powered full-stack web apps such as TanıLog, ApartAI and Stajio, all live. On the security side, during my web penetration testing internship at BTYÖN I turned PortSwigger Web Security Academy labs into 25 pentest reports with CVSS v3.1 scoring and built Teknopanorama, a security-awareness platform; for my graduation thesis I designed PENTEZ-AI, an LLM-driven autonomous penetration testing tool.",
    },
    projects: {
      pre: 'My',
      hi: 'Projects',
      categories: {
        all: 'All',
        cyber: 'Cyber Security',
        game: 'Game Development',
        web: 'Web',
      },
      viewDetails: 'View Details',
      prev: 'Previous project',
      next: 'Next project',
      stores: {
        itch: {
          title: 'itch.io — Baysal Games',
          desc: 'All my games in one place. Play them in the browser or download them.',
        },
        play: {
          title: 'Google Play Store',
          desc: 'Get Glide Ball on your Android device from the Google Play Store.',
        },
      },
      labsCard: {
        title: 'Web Penetration Testing Lab Reports',
        desc: 'Pentest-style reports for PortSwigger Web Security Academy labs, grouped by topic.',
      },
    },
    labs: {
      title: 'Web Penetration Testing Lab Reports',
      shortTitle: 'Pentest Lab Reports', // hero mini card, must fit on one line
      titlePre: 'Web Penetration Testing',
      titleHi: 'Lab Reports',
      intro:
        'Pentest-style reports I wrote while solving PortSwigger Web Security Academy labs. Each one covers the finding, its CVSS risk, a step-by-step proof of concept and how to fix it.',
      note: 'The reports are written in Turkish. Labs from',
      stats: { reports: 'Reports', topics: 'Topics', source: 'Lab platform' },
      topics: 'Topics',
      report: 'report',
      reports: 'reports',
      allTopics: 'All Topics',
      openTab: 'Open in New Tab',
      download: 'Download',
      mobileHint: 'PDF preview works best on a larger screen. You can open the report in a new tab.',
      risk: { critical: 'Critical', high: 'High', medium: 'Medium', low: 'Low' },
      notFoundPre: 'Topic',
      notFoundHi: 'Not Found',
      notFoundText: "The report topic you are looking for doesn't exist.",
    },
    contact: {
      pre: "Let's",
      hi: 'Connect',
      desc: "If you are interested in my work or would like to get in touch about anything, feel free to reach out. I'd love to hear from you!",
      cv: 'Download CV',
      orEmail: 'or email me directly:',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending…',
        success: "Thanks! Your message has been sent — I'll get back to you soon.",
        error: 'Something went wrong. Please try again or email me directly.',
      },
    },
    whoami: {
      pre: 'Who',
      hi: 'am I?',
      role: 'Computer Engineering graduate · Pamukkale University',
      summary:
        "A passion for creating things and telling stories has driven me since childhood, which led me to game development, cybersecurity and web development. Game development is my main passion; alongside it, I've built LLM-powered full-stack web projects and Python-based cybersecurity tools. What I enjoy most is turning what I learn into something concrete and functional.",
      facts: [
        'Computer Engineering graduate, Pamukkale University',
        '4 published games on Google Play and itch.io',
        '3 live full-stack web apps: TanıLog, ApartAI, Stajio',
        'Web pentest internship · 25 lab reports',
      ],
      more: 'Read more about me',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    detail: {
      back: 'All Projects',
      overview: 'Overview',
      features: 'Key Features',
      gallery: 'Gallery',
      notFoundTitlePre: 'Project',
      notFoundTitleHi: 'Not Found',
      notFoundText: "The project you are looking for doesn't exist or may have been moved.",
      meta: {
        category: 'Category',
        role: 'Role',
        status: 'Status',
        year: 'Year',
      },
    },
    notFound: {
      titlePre: 'Page',
      titleHi: 'Not Found',
      text: "The page you are looking for doesn't exist or may have been moved.",
      backHome: '← Back to Home',
    },
    // Labels for screen readers / tooltips
    a11y: {
      backToTop: 'Back to top',
      toggleMenu: 'Toggle menu',
      scrollToTop: 'Scroll to top',
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      lightTitle: 'Light Mode',
      darkTitle: 'Dark Mode',
    },
  },

  tr: {
    nav: {
      about: 'Hakkımda',
      projects: 'Projeler',
      contact: 'İletişim',
    },
    hero: {
      description:
        'Pamukkale Üniversitesi Bilgisayar Mühendisliği mezunuyum. Üç alanda üretiyorum: Unity ile oyunlar, LLM destekli full-stack web uygulamaları ve Python tabanlı siber güvenlik araçları.',
    },
    about: {
      pre: 'Hakkımda',
      hi: '',
      p1: "Pamukkale Üniversitesi Bilgisayar Mühendisliği mezunuyum. Çocukluğumdan beri bir şeyler yaratma ve hikâye anlatma tutkusu beni motive ediyor; bu tutku beni oyun geliştirme, web geliştirme ve siber güvenlik alanlarına yöneltti. En çok zevk aldığım şey, öğrendiklerimi somut ve işlevsel bir şeye dönüştürmek.",
      p2a: "Ana tutku alanım oyun geliştirme. Google Oyun ve Uygulama Akademisi'nin 3. dönem mezunuyum ve Unity ile hikâye odaklı ve fizik tabanlı oyunlar tasarlıyorum. Şu ana kadar dört oyun yaptım; bunlardan biri ",
      p2LinkGooglePlay: 'Google Play Store',
      p2b: "'da yayında, diğerlerini ",
      p2LinkItch: 'itch.io',
      p2c: " üzerinde yayınlıyorum.",
      p3: "Bunun yanında TanıLog, ApartAI ve Stajio gibi LLM destekli full-stack web uygulamaları geliştirip yayına aldım. Siber güvenlik tarafında ise BTYÖN'deki web sızma testi stajımda PortSwigger Web Security Academy lablarını CVSS v3.1 puanlamalı 25 sızma testi raporuna dönüştürdüm ve Teknopanorama adlı bir güvenlik farkındalık platformu geliştirdim; bitirme tezimde de LLM destekli otonom bir sızma testi aracı olan PENTEZ-AI'ı tasarladım.",
    },
    projects: {
      pre: 'Projelerim',
      hi: '',
      categories: {
        all: 'Tümü',
        cyber: 'Siber Güvenlik',
        game: 'Oyun Geliştirme',
        web: 'Web',
      },
      viewDetails: 'Detayları Gör',
      prev: 'Önceki proje',
      next: 'Sonraki proje',
      stores: {
        itch: {
          title: 'itch.io — Baysal Games',
          desc: 'Tüm oyunlarım tek bir yerde. Tarayıcıda oyna ya da indir.',
        },
        play: {
          title: 'Google Play Store',
          desc: "Glide Ball'u Google Play Store'dan Android cihazına indir.",
        },
      },
      labsCard: {
        title: 'Web Sızma Testi Lab Raporları',
        desc: 'PortSwigger Web Security Academy lablarına ait, konulara göre gruplanmış sızma testi raporları.',
      },
    },
    labs: {
      title: 'Web Sızma Testi Lab Raporları',
      shortTitle: 'Pentest Lab Raporları', // hero mini kartı, tek satıra sığmalı
      titlePre: 'Web Sızma Testi',
      titleHi: 'Lab Raporları',
      intro:
        'PortSwigger Web Security Academy lablarını çözerken yazdığım sızma testi formatındaki raporlar. Her rapor bulguyu, CVSS risk seviyesini, adım adım kavram kanıtını (PoC) ve çözüm önerisini içeriyor.',
      note: 'Raporlar Türkçe yazılmıştır. Lab platformu:',
      stats: { reports: 'Rapor', topics: 'Konu', source: 'Lab platformu' },
      topics: 'Konular',
      report: 'rapor',
      reports: 'rapor',
      allTopics: 'Tüm Konular',
      openTab: 'Yeni Sekmede Aç',
      download: 'İndir',
      mobileHint: 'PDF önizlemesi büyük ekranda daha iyi çalışır. Raporu yeni sekmede açabilirsin.',
      risk: { critical: 'Kritik', high: 'Yüksek', medium: 'Orta', low: 'Düşük' },
      notFoundPre: 'Konu',
      notFoundHi: 'Bulunamadı',
      notFoundText: 'Aradığın rapor konusu mevcut değil.',
    },
    contact: {
      pre: 'İletişime',
      hi: 'Geç',
      desc: 'Çalışmalarımla ilgileniyorsan ya da herhangi bir konuda iletişime geçmek istersen çekinmeden ulaş. Senden haber almayı çok isterim!',
      cv: 'CV İndir',
      orEmail: 'ya da doğrudan e-posta gönder:',
      form: {
        name: 'Adın',
        email: 'E-posta',
        message: 'Mesajın',
        send: 'Mesaj Gönder',
        sending: 'Gönderiliyor…',
        success: 'Teşekkürler! Mesajın iletildi, en kısa sürede dönüş yapacağım.',
        error: 'Bir şeyler ters gitti. Tekrar dene ya da doğrudan e-posta gönder.',
      },
    },
    whoami: {
      pre: 'Ben',
      hi: 'Kimim?',
      role: 'Bilgisayar Mühendisliği mezunu · Pamukkale Üniversitesi',
      summary:
        'Çocukluğumdan beri bir şeyler yaratma ve hikâye anlatma tutkusu beni motive ediyor; bu tutku beni oyun geliştirme, siber güvenlik ve web geliştirme alanlarına yöneltti. Ana tutku alanım oyun geliştirme; bunun yanında LLM destekli full-stack web projeleri ve Python tabanlı siber güvenlik araçları geliştirdim. En çok zevk aldığım şey, öğrendiklerimi somut ve işlevsel bir şeye dönüştürmek.',
      facts: [
        'Bilgisayar Mühendisliği mezunu, Pamukkale Üniversitesi',
        "Google Play ve itch.io'da 4 yayınlanmış oyun",
        'Canlıda 3 full-stack web uygulaması: TanıLog, ApartAI, Stajio',
        'Web sızma testi stajı · 25 lab raporu',
      ],
      more: 'Hakkımda devamını oku',
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
    },
    detail: {
      back: 'Tüm Projeler',
      overview: 'Genel Bakış',
      features: 'Öne Çıkan Özellikler',
      gallery: 'Galeri',
      notFoundTitlePre: 'Proje',
      notFoundTitleHi: 'Bulunamadı',
      notFoundText: 'Aradığın proje mevcut değil veya taşınmış olabilir.',
      meta: {
        category: 'Kategori',
        role: 'Rol',
        status: 'Durum',
        year: 'Yıl',
      },
    },
    notFound: {
      titlePre: 'Sayfa',
      titleHi: 'Bulunamadı',
      text: 'Aradığın sayfa mevcut değil veya taşınmış olabilir.',
      backHome: '← Ana Sayfaya Dön',
    },
    // Ekran okuyucu / ipucu metinleri
    a11y: {
      backToTop: 'Başa dön',
      toggleMenu: 'Menüyü aç/kapat',
      scrollToTop: 'Yukarı çık',
      toLight: 'Açık temaya geç',
      toDark: 'Koyu temaya geç',
      lightTitle: 'Açık Tema',
      darkTitle: 'Koyu Tema',
    },
  },
};
