const filesToCache = [
    '.',
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'data/restaurants.json',
    'js/main.js',
    'js/restaurant_info.js',
    'js/dbhelper.js',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg'
];

const staticCacheName = 'v1';

self.addEventListener('install', (event) => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
        .then( (cache) => {
            return cache.addAll(filesToCache);
        })
    );
});