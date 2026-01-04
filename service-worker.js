const CACHE_NAME = 'ericks-restaurant-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './images/app_icon.png'
];

// Install service worker
self.addEventListener('install', event=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate service worker
self.addEventListener('activate', event=>{
  event.waitUntil(
    caches.keys().then(keys=>{
      return Promise.all(
        keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
      );
    })
  );
});

// Fetch cached files
self.addEventListener('fetch', event=>{
  event.respondWith(
    caches.match(event.request).then(response=>{
      return response || fetch(event.request);
    })
  );
});
