'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ec9d5592862facf21c1bd4ae2f4f3139",
"index.html": "0d463374cf844f81d7328cd20198e0f2",
"/": "0d463374cf844f81d7328cd20198e0f2",
"main.dart.js": "96986b0451973fb1b69fd4b75a37d9f0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bcecce2cff5af925fdd67b6fc4305d88",
"assets/AssetManifest.json": "0ef7f928092e73e9e06c04e4a6f098ac",
"assets/NOTICES": "19cd26ee1ba6357347d5da9cf44c0ed0",
"assets/FontManifest.json": "69262a22d5e3442c76ad568214c133b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "55780473c763a7d4bdddf6e6e7acdfda",
"assets/fonts/MaterialIcons-Regular.otf": "a79fe0dd8484686cbb072328af6d67e2",
"assets/assets/svg/logo.png": "71ea0fc92ef0346aad291216fa0dcf8c",
"assets/assets/svg/logo-b.png": "3d5ebc09fcd5606cb627a98a4388aa9b",
"assets/assets/icons/info.png": "a87fbce765c8abaa64262e7a4b06c562",
"assets/assets/icons/paste-null.png": "9ac4c79b34b6175bbc7198a6e2e2abbb",
"assets/assets/icons/paste-all.png": "df31cc14f3330f93c4b3888d4d49ba10",
"assets/assets/icons/allinea-uscite-didattiche.png": "b3e85e78225c5062f5d2902d0240681e",
"assets/assets/icons/allinea-assenti-sostituzioni.png": "dc6ead2df0ca18267a99cd5c37709684",
"assets/assets/icons/add_day.png": "1a0266fe9e72d6ad2082937d2701ab4d",
"assets/assets/icons/remove_day.png": "474ab237d1cf01d4cb7105d935f1bcb0",
"assets/assets/icons/sostituzioni-per-docente.png": "a09c88c52b7eaecd6c57e21c95312aba",
"assets/assets/icons/apri-foglio-firme.png": "399f5e0c1fc0bc1ca9ad09608a199a1c",
"assets/assets/icons/gestione-docenti.png": "c291093406e0363c341bac41fef88c91",
"assets/assets/icons/num-docenti.png": "7d0c810979e5ceae08fe7e48ea240ef4",
"assets/assets/icons/foglio-firme.png": "63489e2ada4f74723247d9346092fe21",
"assets/assets/icons/print.png": "70b79b56ab00c6a8c50b879257fbc513",
"assets/assets/icons/invio-codice-pin.png": "032ca30f8485ea89954e852381dc787d",
"assets/assets/icons/cancella-docenti.png": "452477e145f521878fcdaf0a416c0565",
"assets/assets/icons/stats.png": "582a996b524713de848b5b19d9aac5e2",
"assets/assets/icons/scambia-ora.png": "181be978ee8aba27f2e165c43ea0801a",
"assets/assets/icons/undo-null.png": "fb1f00946729f69628bc5ab0ff2040c1",
"assets/assets/icons/gestione-credito-ore.png": "69a33b04fb0bd9b4eacdfd0a3592e8e4",
"assets/assets/icons/paste-all-null.png": "a6c0027ad4ea458adfad6afedf6af50b",
"assets/assets/icons/monte-ore-settimanali.png": "d539272ff9c6dcce6b364bcece9036ba",
"assets/assets/icons/undo.png": "6887a7053c12d513e8511e7ad7079277",
"assets/assets/icons/gestione-supplenti.png": "c61d003b310b472518bef21ac9984229",
"assets/assets/icons/modifica-note.png": "de6af3e290aeef53281974bb48536ae9",
"assets/assets/icons/paste.png": "a02df44a8a7c096ff64b5f057abb245d",
"assets/assets/icons/prime-ore-docenti.png": "6ebc185bc474fc53724929d40b1d6543",
"assets/assets/icons/gestione-assenze.png": "c132c2259e5a9142f8e865cfd70f877d",
"assets/assets/icons/invita-docenti.png": "e938736ce41d44ca19efa5f55ac7f160",
"assets/assets/icons/copy.png": "950276654c0c7a89ba61670603b81431",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "9fb6d71fc9edf9db455adeb04da9795c",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "7dae244963714ee2b16fcbab46661792",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
