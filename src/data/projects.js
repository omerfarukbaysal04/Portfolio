// Central project data source.
//
// Every project listed here automatically gets:
//   - a card on the home page (Projects section)
//   - a detail page at /projects/<slug>
//
// Translatable fields use the shape { en: '...', tr: '...' } (or { en: [], tr: [] }
// for lists). Use the `tr(field)` helper from LanguageContext to read them.
//
// To add a new project, append an object below. Fields:
//   slug        (required) URL segment, e.g. /projects/stajio — unique & kebab-case
//   title       (required) Display name (not translated)
//   category    (required) one of: 'cyber' | 'game' | 'web'
//   tagline     (required) { en, tr } short one-liner shown on the card
//   media       (required) { type: 'video' | 'image', src: '...' }
//   tech        (required) array of tech/tag strings (not translated)
//   links       (required) array of { label: { en, tr }, url, type }
//   overview    (optional) { en, tr } longer intro (defaults to tagline)
//   features    (optional) { en: [], tr: [] } bullet points
//   role        (optional) { en, tr }
//   status      (optional) { en, tr }
//   year        (optional) string
//   gallery     (optional) array of image paths under /public

export const categoryKeys = ['all', 'cyber', 'game', 'web'];

export const projects = [
  {
    slug: 'stajio',
    title: 'Stajio',
    category: 'web',
    tagline: {
      en: 'A community-driven engineering internship platform where the best listings rise to the top through community upvotes.',
      tr: 'İyi ilanların topluluk oylarıyla öne çıktığı, topluluk odaklı bir mühendislik staj platformu.',
    },
    overview: {
      en: "Stajio (“Türkiye'nin Staj Topluluğu”) is a community-driven platform that connects students and early-career professionals with internship opportunities across Turkey. It works on the same principle as Product Hunt: anyone can post a listing, the community upvotes them, and the highest-quality listings get highlighted. Listings are organized by field and work type, and expired ones are automatically archived to keep the board fresh and relevant.",
      tr: "Stajio (“Türkiye'nin Staj Topluluğu”), öğrencileri ve kariyerinin başındaki profesyonelleri Türkiye genelindeki staj fırsatlarıyla buluşturan, topluluk odaklı bir platformdur. Product Hunt mantığıyla çalışır: herkes ilan paylaşabilir, topluluk bunları oylar ve en kaliteli ilanlar öne çıkarılır. İlanlar alana ve çalışma tipine göre düzenlenir; süresi dolan ilanlar panoyu güncel tutmak için otomatik olarak arşivlenir.",
    },
    media: { type: 'video', src: 'https://www.youtube.com/embed/TrZ-o8HLp4Q' },
    tech: ['Next.js', 'Supabase', 'Tailwind', 'Full Stack'],
    links: [
      { label: { en: 'View on Website', tr: 'Web Sitesinde Gör' }, url: 'https://stajio-baysal.vercel.app/', type: 'live' },
    ],
    features: {
      en: [
        'Community upvoting that surfaces the highest-quality internship listings, Product Hunt style',
        'Open posting — anyone can publish an internship listing',
        'Listings categorized by field: Software, Cybersecurity, Game Development, Data/AI, Engineering, Design and more',
        'Work-type filters for Remote, Hybrid and On-site positions',
        'Sorting by Hot, New, Weekly and Upcoming',
        'Automatic archiving of expired listings',
      ],
      tr: [
        'En kaliteli staj ilanlarını öne çıkaran, Product Hunt tarzı topluluk oylaması',
        'Açık paylaşım — herkes staj ilanı yayınlayabilir',
        'Alana göre kategoriler: Yazılım, Siber Güvenlik, Oyun Geliştirme, Veri/Yapay Zekâ, Mühendislik, Tasarım ve daha fazlası',
        'Uzaktan, Hibrit ve Ofiste pozisyonlar için çalışma tipi filtreleri',
        'Popüler (Hot), Yeni, Haftalık ve Yaklaşan sıralaması',
        'Süresi dolan ilanların otomatik arşivlenmesi',
      ],
    },
    role: { en: 'Full Stack Developer', tr: 'Full Stack Geliştirici' },
    status: { en: 'Live', tr: 'Yayında' },
    gallery: [],
  },
  {
    slug: 'the-watchtower',
    title: 'The Watchtower',
    category: 'cyber',
    tagline: {
      en: 'A self-hosted cybersecurity monitoring tool that continuously scans targets and reports vulnerabilities, misconfigurations and exposure.',
      tr: 'Hedefleri sürekli tarayıp zafiyetleri, yapılandırma hatalarını ve dışa açık noktaları raporlayan, kendi sunucunda barındırılan bir siber güvenlik izleme aracı.',
    },
    overview: {
      en: 'The Watchtower is a self-hosted security monitoring platform that continuously scans your infrastructure for vulnerabilities and misconfigurations. It performs port and service detection, matches findings against known CVEs, inspects SSL/TLS and security headers, validates DNS/email records, and discovers exposed subdomains. Results are stored as scan history, turned into PDF reports, and pushed to Telegram when something critical is found — giving you continuous monitoring without expensive commercial tooling.',
      tr: "The Watchtower, altyapını zafiyetler ve yapılandırma hataları için sürekli tarayan, kendi sunucunda barındırılan bir güvenlik izleme platformudur. Port ve servis tespiti yapar, bulguları bilinen CVE'lerle eşleştirir, SSL/TLS ve güvenlik başlıklarını inceler, DNS/e-posta kayıtlarını doğrular ve dışa açık alt alan adlarını keşfeder. Sonuçlar tarama geçmişi olarak saklanır, PDF raporlara dönüştürülür ve kritik bir bulgu çıktığında Telegram'a bildirim gönderilir — pahalı ticari araçlara ihtiyaç duymadan sürekli izleme sağlar.",
    },
    media: { type: 'video', src: 'https://www.youtube.com/embed/ex7Gkg-O8vI' },
    tech: ['Python', 'FastAPI', 'Nmap', 'SQLite', 'Docker', 'Security'],
    links: [
      { label: { en: 'View on GitHub', tr: "GitHub'da Gör" }, url: 'https://github.com/omerfarukbaysal04/The-Watchtower', type: 'github' },
    ],
    features: {
      en: [
        'Automated background scanning with customizable intervals per target',
        'Port & service detection via Nmap with version fingerprinting',
        'CVE vulnerability matching with CVSS scores (Vulners)',
        'SSL/TLS certificate analysis including expiry tracking and configuration checks',
        'Security header inspection (HSTS, X-Frame-Options, CSP)',
        'DNS/email security checks for SPF and DMARC records',
        'Passive subdomain discovery via certificate transparency logs',
        'Scan history (up to 30 records per target) with comparison views',
        'PDF report generation with actionable recommendations',
        'Telegram notifications for critical CVE and exploit detection',
        'REST API with Swagger docs and session-based authentication',
      ],
      tr: [
        'Hedef başına özelleştirilebilir aralıklarla otomatik arka plan taraması',
        'Nmap ile port ve servis tespiti, sürüm parmak izi çıkarma',
        'CVSS puanlı CVE zafiyet eşleştirmesi (Vulners)',
        'Süre takibi ve yapılandırma kontrolü dahil SSL/TLS sertifika analizi',
        'Güvenlik başlığı incelemesi (HSTS, X-Frame-Options, CSP)',
        'SPF ve DMARC kayıtları için DNS/e-posta güvenlik kontrolleri',
        'Sertifika şeffaflık günlükleri üzerinden pasif alt alan adı keşfi',
        'Karşılaştırma görünümlü tarama geçmişi (hedef başına 30 kayıta kadar)',
        'Önerilerle birlikte PDF rapor oluşturma',
        'Kritik CVE ve exploit tespitinde Telegram bildirimleri',
        'Swagger dokümantasyonlu REST API ve oturum tabanlı kimlik doğrulama',
      ],
    },
    role: { en: 'Solo Developer', tr: 'Bağımsız Geliştirici' },
    status: { en: 'Active Development', tr: 'Aktif Geliştirme' },
    gallery: [],
  },
  {
    slug: 'baysal-nac-system',
    title: 'Baysal NAC System',
    category: 'cyber',
    tagline: {
      en: 'An API-driven Network Access Control system built on the AAA architecture, integrating FreeRADIUS with a custom FastAPI policy engine.',
      tr: 'AAA mimarisi üzerine kurulu, FreeRADIUS’u özel bir FastAPI politika motoruyla bütünleştiren, API odaklı bir Ağ Erişim Kontrolü (NAC) sistemi.',
    },
    overview: {
      en: 'Baysal NAC System is a modern, API-driven Network Access Control system built on the AAA (Authentication, Authorization, Accounting) architecture. It integrates FreeRADIUS with a custom FastAPI policy engine so that network access decisions are made dynamically: users are authenticated, assigned the right VLAN based on their group, and their sessions are tracked in real time. PostgreSQL stores credentials and session data while Redis keeps active sessions fast to query.',
      tr: "Baysal NAC System, AAA (Kimlik Doğrulama, Yetkilendirme, Hesap Tutma) mimarisi üzerine kurulu, modern ve API odaklı bir Ağ Erişim Kontrolü sistemidir. FreeRADIUS'u özel bir FastAPI politika motoruyla bütünleştirir; böylece ağ erişim kararları dinamik olarak verilir: kullanıcılar doğrulanır, grubuna göre doğru VLAN'a atanır ve oturumları gerçek zamanlı izlenir. PostgreSQL kimlik bilgilerini ve oturum verilerini saklarken, Redis aktif oturumları hızlı sorgulanır tutar.",
    },
    media: { type: 'image', src: '/ns.png' },
    tech: ['Python', 'FastAPI', 'FreeRADIUS', 'PostgreSQL', 'Redis', 'Docker'],
    links: [
      { label: { en: 'View on GitHub', tr: "GitHub'da Gör" }, url: 'https://github.com/omerfarukbaysal04/baysal-nac-system', type: 'github' },
    ],
    features: {
      en: [
        'Dynamic VLAN assignment based on user group (admin, employee, guest)',
        'Secure authentication with bcrypt password verification and rate limiting',
        'Real-time session tracking with Accounting-Start/Stop records and metrics',
        'API-driven AAA workflows exposed over RESTful endpoints',
        'FreeRADIUS ↔ FastAPI integration via the rlm_rest module',
        'PostgreSQL for persistent credential and session storage',
        'Redis caching for fast in-memory session tracking',
        'Containerized deployment with Docker Compose and health checks',
      ],
      tr: [
        'Kullanıcı grubuna göre (admin, çalışan, misafir) dinamik VLAN ataması',
        'bcrypt parola doğrulama ve hız sınırlama ile güvenli kimlik doğrulama',
        'Accounting-Start/Stop kayıtları ve metriklerle gerçek zamanlı oturum izleme',
        'RESTful uç noktalar üzerinden API odaklı AAA iş akışları',
        'rlm_rest modülü aracılığıyla FreeRADIUS ↔ FastAPI entegrasyonu',
        'Kalıcı kimlik bilgisi ve oturum depolaması için PostgreSQL',
        'Hızlı bellek içi oturum izleme için Redis önbellekleme',
        'Docker Compose ve sağlık kontrolleriyle konteynerli dağıtım',
      ],
    },
    role: { en: 'Solo Developer', tr: 'Bağımsız Geliştirici' },
    status: { en: 'Open Source', tr: 'Açık Kaynak' },
    gallery: [],
  },
  {
    slug: 'cyber-security-tools',
    title: 'Cyber Security Tools',
    category: 'cyber',
    tagline: {
      en: 'A collection of custom-built Python tools for network scanning, packet capture, MAC manipulation and other penetration testing fundamentals.',
      tr: 'Ağ taraması, paket yakalama, MAC değiştirme ve diğer sızma testi temelleri için özel olarak geliştirilmiş Python araçları koleksiyonu.',
    },
    overview: {
      en: 'A collection of custom-built, educational cybersecurity tools written in Python for authorized penetration testing and learning. The toolkit covers practical networking and offensive-security fundamentals — from network reconnaissance and packet analysis to MAC spoofing and cryptography demos — and is built to run on a Linux environment such as Kali. The tools are intended strictly for learning and legal penetration testing with permission.',
      tr: 'Yetkili sızma testi ve öğrenme amacıyla Python ile geliştirilmiş, eğitim odaklı siber güvenlik araçlarından oluşan bir koleksiyon. Araç seti; ağ keşfi ve paket analizinden MAC sahteciliğine ve kriptografi gösterimlerine kadar uygulamalı ağ ve saldırı güvenliği temellerini kapsar ve Kali gibi bir Linux ortamında çalışacak şekilde tasarlanmıştır. Araçlar yalnızca öğrenme ve izinli, yasal sızma testleri için tasarlanmıştır.',
    },
    media: { type: 'image', src: '/ns.png' },
    tech: ['Python', 'Scapy', 'pynput', 'cryptography', 'Networking', 'Security'],
    links: [
      { label: { en: 'View on GitHub', tr: "GitHub'da Gör" }, url: 'https://github.com/omerfarukbaysal04/Cyber-Security-Tools', type: 'github' },
    ],
    features: {
      en: [
        'MAC Changer — modify a network interface MAC address for spoofing',
        'Bay Net Discover — ARP-based network reconnaissance to map connected devices',
        'MITM ARP Spoofing — ARP poisoning between a target and the gateway',
        'Packet Sniffer — capture network traffic and extract HTTP data',
        'Keylogger — capture keystrokes and email logs periodically',
        'Ransomware Simulator — encrypt/decrypt files to demonstrate ransomware behaviour',
      ],
      tr: [
        'MAC Changer — sahtecilik için ağ arayüzü MAC adresini değiştirme',
        'Bay Net Discover — bağlı cihazları haritalamak için ARP tabanlı ağ keşfi',
        'MITM ARP Spoofing — hedef ile ağ geçidi arasında ARP zehirlemesi',
        'Packet Sniffer — ağ trafiğini yakalama ve HTTP verisini çıkarma',
        'Keylogger — tuş vuruşlarını yakalama ve günlükleri periyodik e-postalama',
        'Ransomware Simulator — fidye yazılımı davranışını göstermek için dosya şifreleme/çözme',
      ],
    },
    role: { en: 'Solo Developer', tr: 'Bağımsız Geliştirici' },
    status: { en: 'Open Source', tr: 'Açık Kaynak' },
    gallery: [],
  },
  {
    slug: 'a-fox-story',
    title: 'A Fox Story',
    category: 'game',
    tagline: {
      en: 'A story-driven 2D platformer rogue-like about Foxi, a fox cursed from birth who sets out to find his brother.',
      tr: "Doğuştan lanetli bir tilki olan Foxi'nin kardeşini bulmak için yola çıktığı, hikâye odaklı 2D platform rogue-like oyunu.",
    },
    overview: {
      en: "Foxi, a fox cursed from birth, sets out to find his brother. A Fox Story is a story-driven 2D platformer with rogue-like elements, with a narrative I wrote myself and built entirely from free assets. It's the very first game I ever made — a complete solo project from concept to release.",
      tr: 'Doğuştan lanetli bir tilki olan Foxi, kardeşini bulmak için yola çıkar. A Fox Story, hikâyesini kendim yazdığım ve tamamen ücretsiz varlıklardan oluşturduğum, rogue-like ögeleri olan hikâye odaklı bir 2D platform oyunudur. Yaptığım ilk oyundur — fikirden yayına kadar tamamen bağımsız bir proje.',
    },
    media: { type: 'video', src: 'https://www.youtube.com/embed/STD92cmPuUk' },
    tech: ['Unity', 'C#', '2D Platformer', 'Rogue-like'],
    links: [
      { label: { en: 'Play on itch.io', tr: "itch.io'da Oyna" }, url: 'https://baysalgames.itch.io/a-fox-story', type: 'store' },
    ],
    features: {
      en: [
        'Story-driven 2D platformer with rogue-like elements',
        'Original narrative written by me',
        'Built solo in Unity using free assets',
        'My first complete game, from concept to release',
      ],
      tr: [
        'Rogue-like ögeleri olan, hikâye odaklı 2D platform oyunu',
        'Tarafımdan yazılmış özgün hikâye',
        "Unity'de ücretsiz varlıklarla bağımsız olarak geliştirildi",
        'Fikirden yayına kadar yaptığım ilk tam oyun',
      ],
    },
    role: { en: 'Solo Game Developer', tr: 'Bağımsız Oyun Geliştirici' },
    status: { en: 'Published', tr: 'Yayınlandı' },
    gallery: [],
  },
  {
    slug: 'glide-ball',
    title: 'Glide Ball',
    category: 'game',
    tagline: {
      en: 'A physics-based mobile platforming challenge that tests your reflexes with smooth controls and precise movement.',
      tr: 'Akıcı kontroller ve hassas hareketle reflekslerini sınayan, fizik tabanlı bir mobil platform mücadelesi.',
    },
    overview: {
      en: 'Are you ready for a physics-based platforming challenge? Glide Ball tests your reflexes with smooth controls and precise movement. Guide your ball carefully, overcome obstacles, and chase the highest score. Built in Unity and published on the Google Play Store for mobile.',
      tr: "Fizik tabanlı bir platform mücadelesine hazır mısın? Glide Ball, akıcı kontroller ve hassas hareketle reflekslerini sınar. Topunu dikkatlice yönlendir, engelleri aş ve en yüksek skorun peşine düş. Unity ile geliştirildi ve mobil için Google Play Store'da yayınlandı.",
    },
    media: { type: 'video', src: 'https://www.youtube.com/embed/tW3ahjArIHI' },
    tech: ['Unity', 'C#', 'Mobile', 'Physics'],
    links: [
      { label: { en: 'Google Play Store', tr: 'Google Play Store' }, url: 'https://play.google.com/store/apps/details?id=com.BaysalGames.Bally', type: 'play' },
    ],
    features: {
      en: [
        'Physics-based ball movement with smooth, precise controls',
        'Reflex-testing obstacle courses',
        'High-score chasing for replayability',
        'Released on the Google Play Store for mobile',
      ],
      tr: [
        'Akıcı, hassas kontrollerle fizik tabanlı top hareketi',
        'Refleks sınayan engel parkurları',
        'Tekrar oynanabilirlik için yüksek skor takibi',
        "Mobil için Google Play Store'da yayınlandı",
      ],
    },
    role: { en: 'Solo Game Developer', tr: 'Bağımsız Oyun Geliştirici' },
    status: { en: 'Published on Google Play', tr: "Google Play'de Yayında" },
    gallery: [],
  },
  {
    slug: 'dodge-the-asteroids',
    title: 'Dodge the Asteroids!',
    category: 'game',
    tagline: {
      en: 'An arcade space shooter where you pilot a spaceship, dodge incoming asteroids and blast them apart.',
      tr: 'Bir uzay gemisini yönettiğin, gelen asteroitlerden kaçıp onları parçaladığın arcade uzay nişancı oyunu.',
    },
    overview: {
      en: 'In this arcade space shooter you control a spaceship navigating an asteroid field. The goal is to avoid damage from incoming asteroids while destroying them to survive as long as possible. A compact, reflex-focused Unity project.',
      tr: 'Bu arcade uzay nişancı oyununda bir asteroit alanında ilerleyen bir uzay gemisini kontrol edersin. Amaç, mümkün olduğunca uzun süre hayatta kalmak için gelen asteroitlerden hasar almadan kaçınırken onları yok etmektir. Derli toplu, reflekse dayalı bir Unity projesi.',
    },
    media: { type: 'image', src: '/dta.jpg' },
    tech: ['Unity', 'C#', 'Space Shooter'],
    links: [
      { label: { en: 'Play on itch.io', tr: "itch.io'da Oyna" }, url: 'https://baysalgames.itch.io/dodge-the-asteroids', type: 'store' },
    ],
    features: {
      en: [
        'Pilot a spaceship through an asteroid field',
        'Dodge incoming asteroids to avoid damage',
        'Destroy asteroids to survive',
        'Fast, arcade-style reflex gameplay',
      ],
      tr: [
        'Bir asteroit alanında uzay gemisi kullan',
        'Gelen asteroitlerden hasar almamak için kaç',
        'Hayatta kalmak için asteroitleri yok et',
        'Hızlı, arcade tarzı refleks oynanışı',
      ],
    },
    role: { en: 'Solo Game Developer', tr: 'Bağımsız Oyun Geliştirici' },
    status: { en: 'Published', tr: 'Yayınlandı' },
    gallery: [],
  },
  {
    slug: 'cost-of-redemption',
    title: 'Cost of Redemption',
    category: 'game',
    tagline: {
      en: 'A dramatic 2D pixel-art game where every choice matters, following a loyal guardian torn between past and present.',
      tr: 'Her seçimin önem taşıdığı; geçmişiyle bugünü arasında kalmış sadık bir muhafızı izleyen, dramatik bir 2D piksel sanat oyunu.',
    },
    overview: {
      en: 'Step into the shoes of a troubled yet loyal guardian, caught between the shadows of a haunting past and the dangers of the present. Cost of Redemption is a dramatic 2D pixel-art game built around choice-driven storytelling, where every decision you make shapes the path ahead.',
      tr: 'Geçmişin gölgeleriyle bugünün tehlikeleri arasında sıkışmış, sorunlu ama sadık bir muhafızın yerine geç. Cost of Redemption, verdiğin her kararın önündeki yolu şekillendirdiği, seçim odaklı anlatıma dayanan dramatik bir 2D piksel sanat oyunudur.',
    },
    media: { type: 'image', src: '/cor.png' },
    tech: ['Unity', 'C#', 'Pixel Art', 'Narrative'],
    links: [
      { label: { en: 'Play on itch.io', tr: "itch.io'da Oyna" }, url: 'https://baysalgames.itch.io/cost-of-redemption', type: 'store' },
    ],
    features: {
      en: [
        'Dramatic, narrative-driven 2D pixel-art game',
        'Choice-based storytelling where every decision matters',
        'Atmospheric story of a guardian torn between past and present',
        'Hand-crafted pixel-art visuals',
      ],
      tr: [
        'Dramatik, anlatı odaklı 2D piksel sanat oyunu',
        'Her kararın önem taşıdığı seçim tabanlı hikâye anlatımı',
        'Geçmişiyle bugünü arasında kalmış bir muhafızın atmosferik hikâyesi',
        'Elle hazırlanmış piksel sanat görselleri',
      ],
    },
    role: { en: 'Solo Game Developer', tr: 'Bağımsız Oyun Geliştirici' },
    status: { en: 'Published', tr: 'Yayınlandı' },
    gallery: [],
  },
  {
    slug: 'kitap-vitrini',
    title: 'Kitap Vitrini',
    category: 'web',
    tagline: {
      en: 'A full-stack book showcase web application built with React, ASP.NET Core and MS SQL for a university course project.',
      tr: 'React, ASP.NET Core ve MS SQL ile bir üniversite ders projesi olarak geliştirilmiş, full-stack bir kitap vitrini web uygulaması.',
    },
    overview: {
      en: 'Kitap Vitrini (“Book Showcase”) is a full-stack web application for browsing and displaying a catalog of books. It pairs a React + TypeScript frontend with an ASP.NET Core backend and an MS SQL database. It was built as a university web development course project — and was my first proper full-stack website.',
      tr: 'Kitap Vitrini, bir kitap kataloğunu görüntülemek ve sergilemek için geliştirilmiş full-stack bir web uygulamasıdır. React + TypeScript arayüzünü ASP.NET Core arka ucu ve MS SQL veritabanıyla birleştirir. Bir üniversite web geliştirme ders projesi olarak hazırlandı — ve ilk düzgün full-stack web sitemdi.',
    },
    media: { type: 'video', src: 'https://www.youtube.com/embed/7pRuS0D2ePo' },
    tech: ['React', 'TypeScript', 'ASP.NET Core', 'MS SQL', 'Full Stack'],
    links: [
      { label: { en: 'View on GitHub', tr: "GitHub'da Gör" }, url: 'https://github.com/omerfarukbaysal04/Kitap-Vitrini', type: 'github' },
    ],
    features: {
      en: [
        'Book catalog browsing and showcase interface',
        'React + TypeScript frontend',
        'ASP.NET Core backend with an MS SQL database',
        'Full-stack architecture (separate frontend and backend)',
        'Built as a university web development course project',
      ],
      tr: [
        'Kitap kataloğu gezinme ve vitrin arayüzü',
        'React + TypeScript arayüz',
        'MS SQL veritabanlı ASP.NET Core arka uç',
        'Full-stack mimari (ayrı arayüz ve arka uç)',
        'Üniversite web geliştirme ders projesi olarak geliştirildi',
      ],
    },
    role: { en: 'Full Stack Developer', tr: 'Full Stack Geliştirici' },
    status: { en: 'University Project', tr: 'Üniversite Projesi' },
    gallery: [],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
