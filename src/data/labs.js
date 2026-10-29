// PortSwigger Web Security Academy lab reports, grouped by topic.
//
// Every topic gets a card on /labs and its own page at /labs/<slug>, where the
// reports open in an inline PDF viewer. PDFs live in public/reports/<slug>/.
//
// Topic fields:
//   slug     (required) URL segment, e.g. /labs/sql-injection
//   title    (required) topic name (not translated)
//   cwe      (optional) main CWE id shown on the card
//   desc     (required) { en, tr } one-line description
//   reports  (required) array of:
//              title  lab name as it appears on PortSwigger (not translated)
//              file   path under /public
//              risk   'critical' | 'high' | 'medium' | 'low'
//              cvss   (optional) CVSS v3.1 base score as a string

export const LABS_URL = 'https://portswigger.net/web-security';
export const LABS_COVER = '/reports/cover.jpg';

export const labTopics = [
  {
    slug: 'sql-injection',
    title: 'SQL Injection',
    cwe: 'CWE-89',
    desc: {
      en: 'Hidden data retrieval, login bypass, UNION-based extraction and blind injection.',
      tr: 'Gizli veriye erişim, giriş atlatma, UNION tabanlı veri çekme ve blind injection.',
    },
    reports: [
      { title: 'SQL injection in WHERE clause allowing retrieval of hidden data', file: '/reports/sql-injection/where-clause-hidden-data.pdf', risk: 'critical', cvss: '7.5' },
      { title: 'SQL injection allowing login bypass', file: '/reports/sql-injection/login-bypass.pdf', risk: 'critical', cvss: '9.4' },
      { title: 'UNION attack: determining the number of columns', file: '/reports/sql-injection/union-column-count.pdf', risk: 'high', cvss: '7.5' },
      { title: 'UNION attack: finding a column containing text', file: '/reports/sql-injection/union-text-column.pdf', risk: 'high', cvss: '7.5' },
      { title: 'UNION attack: retrieving data from other tables', file: '/reports/sql-injection/union-other-tables.pdf', risk: 'critical', cvss: '9.4' },
      { title: 'UNION attack: retrieving multiple values in a single column', file: '/reports/sql-injection/union-multiple-values.pdf', risk: 'critical', cvss: '9.4' },
      { title: 'Blind SQL injection with conditional responses', file: '/reports/sql-injection/blind-conditional-responses.pdf', risk: 'critical', cvss: '9.8' },
    ],
  },
  {
    slug: 'os-command-injection',
    title: 'OS Command Injection',
    cwe: 'CWE-78',
    desc: {
      en: 'Running system commands through unsanitized input, including blind time-based detection.',
      tr: 'Filtrelenmeyen girdiler üzerinden sistem komutu çalıştırma ve zaman tabanlı blind tespit.',
    },
    reports: [
      { title: 'OS command injection, simple case', file: '/reports/os-command-injection/simple-case.pdf', risk: 'critical' },
      { title: 'Blind OS command injection with time delays', file: '/reports/os-command-injection/blind-time-delays.pdf', risk: 'critical' },
    ],
  },
  {
    slug: 'access-control',
    title: 'Access Control',
    cwe: 'CWE-285',
    desc: {
      en: 'Vertical and horizontal privilege escalation, IDOR and flawed multi-step processes.',
      tr: 'Dikey ve yatay yetki yükseltme, IDOR ve hatalı çok adımlı süreçler.',
    },
    reports: [
      { title: 'Vertical privilege escalation', file: '/reports/access-control/vertical-privilege-escalation.pdf', risk: 'critical', cvss: '9.4' },
      { title: 'Horizontal privilege escalation', file: '/reports/access-control/horizontal-privilege-escalation.pdf', risk: 'high', cvss: '8.2' },
      { title: 'Access control vulnerabilities in multi-step processes', file: '/reports/access-control/multi-step-processes.pdf', risk: 'high', cvss: '8.1' },
    ],
  },
  {
    slug: 'information-disclosure',
    title: 'Information Disclosure',
    cwe: 'CWE-200',
    desc: {
      en: 'Leaking sensitive data through error messages, debug pages, backups and version control.',
      tr: 'Hata mesajları, debug sayfaları, yedek dosyalar ve versiyon kontrolü üzerinden hassas veri sızıntısı.',
    },
    reports: [
      { title: 'Information disclosure vulnerabilities', file: '/reports/information-disclosure/information-disclosure.pdf', risk: 'critical', cvss: '9.1' },
    ],
  },
  {
    slug: 'ssrf',
    title: 'SSRF',
    cwe: 'CWE-918',
    desc: {
      en: 'Making the server send requests to internal systems and bypassing SSRF filters.',
      tr: 'Sunucuya iç sistemlere istek attırma ve SSRF filtrelerini atlatma.',
    },
    reports: [
      { title: 'Server-side request forgery labs', file: '/reports/ssrf/ssrf.pdf', risk: 'critical', cvss: '9.4' },
    ],
  },
  {
    slug: 'csrf',
    title: 'CSRF',
    cwe: 'CWE-352',
    desc: {
      en: 'Forcing actions on behalf of a logged-in user and bypassing token, SameSite and Referer defenses.',
      tr: 'Oturum açmış kullanıcı adına işlem yaptırma; token, SameSite ve Referer savunmalarını atlatma.',
    },
    reports: [
      { title: 'CSRF vulnerability with no defenses', file: '/reports/csrf/no-defenses.pdf', risk: 'high', cvss: '8.1' },
      { title: 'Bypassing CSRF token validation', file: '/reports/csrf/token-validation-bypass.pdf', risk: 'high', cvss: '8.1' },
      { title: 'Bypassing SameSite cookie restrictions', file: '/reports/csrf/samesite-bypass.pdf', risk: 'high', cvss: '8.1' },
      { title: 'Bypassing Referer-based CSRF defenses', file: '/reports/csrf/referer-bypass.pdf', risk: 'high', cvss: '8.1' },
    ],
  },
  {
    slug: 'clickjacking',
    title: 'Clickjacking',
    cwe: 'CWE-1021',
    desc: {
      en: 'Tricking users into clicking hidden elements inside a framed page.',
      tr: 'Kullanıcıyı çerçeve içindeki gizli öğelere tıklamaya yönlendirme.',
    },
    reports: [
      { title: 'Clickjacking labs', file: '/reports/clickjacking/clickjacking.pdf', risk: 'medium', cvss: '6.5' },
    ],
  },
  {
    slug: 'dom-based',
    title: 'DOM-based Vulnerabilities',
    cwe: 'CWE-79',
    desc: {
      en: 'Client-side flaws: DOM XSS via web messages, open redirection and cookie manipulation.',
      tr: 'İstemci tarafı zafiyetler: web mesajlarıyla DOM XSS, open redirection ve cookie manipülasyonu.',
    },
    reports: [
      { title: 'DOM XSS using web messages', file: '/reports/dom-based/xss-web-messages.pdf', risk: 'medium', cvss: '6.1' },
      { title: 'DOM-based open redirection', file: '/reports/dom-based/open-redirection.pdf', risk: 'medium', cvss: '6.1' },
      { title: 'DOM-based cookie manipulation', file: '/reports/dom-based/cookie-manipulation.pdf', risk: 'medium', cvss: '6.1' },
    ],
  },
];

export const reportCount = labTopics.reduce((n, topic) => n + topic.reports.length, 0);
