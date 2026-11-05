/* Organisationsplan: network-first for app files, offline fallback; never cache user data. */
const CACHE='orgplan-code-v0.2.11';
const ASSETS=['./','./index.html','./style.css','./app.js','./excel.js','./jszip.min.js','./manifest.webmanifest','./icon.svg','./version.json'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('orgplan-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try {
   const response=await fetch(req,{cache:'no-store'});
   if(response.ok&&new URL(req.url).pathname.startsWith(new URL(self.registration.scope).pathname))await cache.put(req,response.clone());
   return response;
  } catch(err) {
   const cached=await caches.match(req,{ignoreSearch:true});
   if(cached)return cached;
   if(req.mode==='navigate'){const home=await cache.match('./index.html');if(home)return home}
   throw err;
  }
 })());
});
