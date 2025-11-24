var cacheName = 'petstore-v1';
var catcheFiles = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'images/cat1.jpg',
    'images/catfood.jpg',
    'images/cattoy.jpg',
    'images/dogfood.jpg',
    'images/dogtoy.jpg',
    'images/icon-store-512.png',
    'images/rabbitfood.jpg'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (r) {
    e.respondWith(
        caches.match(e.request).then(function (r) {
            return r || fetch(e.request).then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});