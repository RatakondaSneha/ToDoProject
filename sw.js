importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    '/index.htm',
    '/js/myList.js',
    '/img/add_img.jpg',
    '/img/add.svg',
    '/css/file.css'

]);

workbox.routing.registerRoute(
    /\.htm(l?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'html-cache',
    })
);
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'js-cache',
    })
);
workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache',
    })
);


