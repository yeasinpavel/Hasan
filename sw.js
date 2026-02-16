const CACHE_NAME = 'ht-vault-v2';
const ASSETS = [
  './',
  './index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
