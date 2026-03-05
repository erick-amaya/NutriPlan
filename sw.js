const CACHE = 'nutriplan-v2';
const ASSETS = ['/', '/index.html', '/manifest.json', '/sw.js', '/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => {
      // Cache each asset individually, don't fail if one is missing
      return Promise.allSettled(ASSETS.map(url => c.add(url)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache successful responses
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
