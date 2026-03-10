const CACHE = 'nutriplan-v5';
const BASE = '/NutriPlan';
const ASSETS = [
  '/NutriPlan/',
  '/NutriPlan/index.html',
  '/NutriPlan/manifest.json',
  '/NutriPlan/icon-192.png',
  '/NutriPlan/icon-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.allSettled(ASSETS.map(url => c.add(url)))
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Solo manejar peticiones de este repo
  if(!url.pathname.startsWith('/NutriPlan')) return;

  // index.html: network-first
  if(url.pathname === '/NutriPlan/' || url.pathname === '/NutriPlan/index.html'){
    e.respondWith(
      fetch(e.request, {cache:'no-cache'})
        .then(res=>{
          if(res && res.status===200){
            caches.open(CACHE).then(c=>c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(()=>caches.match(e.request))
    );
    return;
  }

  // Resto: cache-first
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached) return cached;
      return fetch(e.request).then(res=>{
        if(res && res.status===200){
          caches.open(CACHE).then(c=>c.put(e.request, res.clone()));
        }
        return res;
      }).catch(()=>caches.match('/NutriPlan/index.html'));
    })
  );
});

self.addEventListener('notificationclick', e=>{
  e.notification.close();
  e.waitUntil(clients.openWindow('/NutriPlan/'));
});
