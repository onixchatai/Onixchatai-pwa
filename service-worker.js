self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('onixchatai-cache-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'services.html',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
