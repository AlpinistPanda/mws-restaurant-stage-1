/**

*/
// importScripts('/cache-polyfill.js');


self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('restaurant').then(function(cache) {
            return cache.addAll([
                '/',
                'js/main.js',
                'css/styles.css',
                'data/restaurants.json',
                'restaurant.html',
                'index.html',
                'js/dbhelper.js',
                'js/restaurant_info.js'
            ]);
        })
    );
});


self.addEventListener('fetch', function(event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function(response) {

            return response || fetch(event.request);

        })

    );

});
