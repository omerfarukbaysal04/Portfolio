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
        'Computer Engineering graduate from Pamukkale University. I work on web application security and penetration testing, and build AI-powered full-stack web apps.',
    },
    about: {
      pre: 'About',
      hi: 'Me',
      p1: "I'm a Computer Engineering graduate from Pamukkale University, focused on web application security. During my web penetration testing internship at BTYÖN, I turned PortSwigger Web Security Academy labs into 25 pentest reports with CVSS v3.1 scoring, and built Teknopanorama, a security-awareness platform that shows web attacks side by side with their defenses. For my graduation thesis I designed PENTEZ-AI, an LLM-driven autonomous penetration testing tool for smart traffic infrastructure.",
      p2a: "I also build AI-powered full-stack web apps, and I enjoy developing games with Unity. I've made four games so far; one of them is published on the ",
      p2LinkGooglePlay: 'Google Play Store',
      p2b: ", and I publish the rest on ",
      p2LinkItch: 'itch.io',
      p2c: '.',
      p3: 'My goal is to grow in application security and secure software development, combining continuous learning with hands-on work, while still making the creative projects that fuel my passion for technology.',
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
        'I focus on web application security and penetration testing, and turn what I learn into tools and products: AI-powered full-stack web apps and an LLM-driven pentest tool. Outside security, I build games with Unity.',
      facts: [
        'Computer Engineering graduate, Pamukkale University',
        'Web pentest internship · 25 lab reports',
        '4 published games on Google Play and itch.io',
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
        'Pamukkale Üniversitesi Bilgisayar Mühendisliği mezunuyum. Web uygulama güvenliği ve sızma testi üzerine çalışıyor, yapay zekâ destekli full-stack web uygulamaları geliştiriyorum.',
    },
    about: {
      pre: 'Hakkımda',
      hi: '',
      p1: "Pamukkale Üniversitesi Bilgisayar Mühendisliği mezunuyum. BTYÖN'deki web sızma testi stajımda PortSwigger Web Security Academy lablarını CVSS v3.1 puanlamalı 25 sızma testi raporuna dönüştürdüm ve web saldırılarını savunmalarıyla birlikte gösteren Teknopanorama adlı bir güvenlik farkındalık platformu geliştirdim. Bitirme tezimde akıllı trafik altyapıları için LLM destekli otonom bir sızma testi aracı olan PENTEZ-AI'ı tasarladım.",
      p2a: 'Bunların yanında yapay zekâ destekli full-stack web uygulamaları geliştiriyor, Unity ile oyun yapmaktan da keyif alıyorum. Şu ana kadar dört oyun yaptım; bunlardan biri ',
      p2LinkGooglePlay: 'Google Play Store',
      p2b: "'da yayında, diğerlerini ",
      p2LinkItch: 'itch.io',
      p2c: " üzerinde yayınlıyorum.",
      p3: 'Hedefim, sürekli öğrenmeyi uygulamalı çalışmayla birleştirerek uygulama güvenliği ve güvenli yazılım geliştirme alanında ilerlemek; aynı zamanda teknolojiye olan tutkumu besleyen yaratıcı projeler üretmeye devam etmek.',
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
        'Odağım web uygulama güvenliği ve sızma testi; öğrendiklerimi araçlara ve ürünlere dönüştürüyorum: yapay zekâ destekli full-stack web uygulamaları ve LLM destekli bir sızma testi aracı. Güvenliğin dışında Unity ile oyun geliştiriyorum.',
      facts: [
        'Bilgisayar Mühendisliği mezunu, Pamukkale Üniversitesi',
        'Web sızma testi stajı · 25 lab raporu',
        "Google Play ve itch.io'da 4 yayınlanmış oyun",
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
