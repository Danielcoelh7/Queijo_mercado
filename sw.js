const CACHE_NAME = 'coelho-queijos-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './icon-192.png',
  './icon-512.png'
  // Adicione aqui os nomes das fotos dos seus produtos se quiser que funcionem offline
  // Ex: './mel.jpg', './ovo.jpg'
];

// Instalação (Cachear arquivos)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Busca (Servir do cache se tiver, senão busca na internet)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});