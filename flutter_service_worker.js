// La app anterior (Flutter) registró este service worker, que guarda la app
// vieja en caché. Esta versión lo reemplaza: borra esa caché, se da de baja
// y recarga las pestañas abiertas para que carguen la app nueva.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const claves = await caches.keys()
      await Promise.all(claves.map((c) => caches.delete(c)))
      await self.registration.unregister()
      const ventanas = await self.clients.matchAll({ type: 'window' })
      ventanas.forEach((v) => v.navigate(v.url))
    })(),
  )
})
