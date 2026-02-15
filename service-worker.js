// Service Worker para Parte Diario de Novedades - PWA
const CACHE_NAME = 'parte-policia-v1.0.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Archivos en caché');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Eliminando caché antigua');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptar peticiones (estrategia Cache First)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, devolver de caché
        if (response) {
          return response;
        }
        
        // Si no está en caché, hacer petición de red
        return fetch(event.request).then(response => {
          // Verificar respuesta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clonar respuesta
          const responseToCache = response.clone();
          
          // Añadir al caché
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // Si falla, devolver página offline (opcional)
        return caches.match('./index.html');
      })
  );
});

// Sincronización en segundo plano (para guardar datos offline)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-partes') {
    event.waitUntil(
      // Aquí se podrían sincronizar partes guardados offline
      Promise.resolve()
    );
  }
});

// Notificaciones push (opcional para futuro)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nuevo mensaje',
    icon: './icons/icon-192x192.png',
    badge: './icons/icon-72x72.png',
    vibrate: [200, 100, 200]
  };
  
  event.waitUntil(
    self.registration.showNotification('Parte Diario PM', options)
  );
});
