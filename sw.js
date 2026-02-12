// sw.js - Service Worker mínimo para habilitar PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Necesario para que Chrome considere la app instalable
});