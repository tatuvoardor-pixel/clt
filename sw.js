// Service Worker — Calculadora CLT Noturna
// Estratégia: network-first (busca rede primeiro, cai no cache se offline)
const CACHE = "clt-noturna-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

// Instala e pré-cacheia
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos (só os que NÃO são o atual)
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Prioridade à rede
self.addEventListener("fetch", (e) => {
  Se (e.request.method !== "GET") retornar;
  e.respondWith(
    buscar(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        retornar res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
