'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
".git/config": "ea6555a3c366387ad8e31300d3471c56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a7379cd218ca533eb819eec2ee0ed64f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2b07fbca13d695ebbc13400557ed4b3",
".git/logs/refs/heads/main": "06963662605678ea0420db3cb6e26062",
".git/logs/refs/remotes/origin/main": "e33720abfe07480f6d465706a004b073",
".git/objects/01/1765d4776ce0c31aa9ea4523b1d3880c19687b": "b18060ff4dc94de7b9a78e3d48d15d43",
".git/objects/01/2020a2d46cbfb083310539cb5e939bd72e2175": "5673fc820f00b70ebd2c01325f4cf288",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/f7989cd935eb53331b59f6c1c08dd37c455b53": "70bb0e849ac9391da1aa8c165602f419",
".git/objects/05/d5fa93a3520070a6a07f2a619a9bc0ae860978": "18ef79712ef560b3fa0a0a52bed3a332",
".git/objects/1d/3abe0cd96e4ee8d63a0da31e70475803bf025a": "5b1dc868e604a419661f9cb339773abd",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2b/925ca856aa607b2b8ca6adeb05b3e3b500c93c": "8999ddbcdfcf730fca825f6887f4d8f3",
".git/objects/2c/ad3325f9067db669ee1e2b8254455cc48c32d5": "befe7b08f3562cfe73ef35efe5e2b1e9",
".git/objects/33/eab8e70b4ecc0ec7757feb518b91343a7eabeb": "69ec49d361d3ad05408a0cfd38ca3c9d",
".git/objects/3b/6700cd35a8cd9e9a28b6f63b12b68683b23c2e": "bcd15db707a67ee20f476f054b24334f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/a6af6a29b54dccef3e3e1d9c4e6f1011a85785": "50244df530017cb5d5bf97aac5ab5e1f",
".git/objects/4a/50428ca0a65124f08d67cb96b5863ae5d7ed31": "76aaf6e3389cf9636664bd5abec2ae57",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/400ed18b6c66ad856d77d955714be665aa44fe": "7cfc02fd722925f7fdfbf51158b68cbe",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/e2746e9dea67bf11961c5b802bf0075bbadae9": "040f4106c0086e6ff2154275829c6fc7",
".git/objects/57/926f566af48a831ed328e57463fb6dba8c4412": "cc0043d679b239c819d6c055d88aec3f",
".git/objects/60/70137906529c077e6d7cb5d411e963a0bebee8": "bd02090446b2fe33338ed8886b48705e",
".git/objects/60/e93d93275a982ca9ea316a94baa03fa0fd690f": "a55c746058b70896094cc08403f944b9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/68ef65bb17629a6a57c25bad3d84626101c892": "a200aa37ae8e02b623e3bb40ed252ca3",
".git/objects/74/33f5b3494f14543147f760439dcdf439eb0e0a": "d4f1d7740b6abb17c5d3b17164da956c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/84/3f5605cc02e124c4242cbd74f5c8963fba083b": "8ef45a9b0ccca196e998dafc9d39b020",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/262c5237bf668edc498650e5e39c3acf39867f": "d70c5aea6b0b0da4669c50753dc4108a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b3730fe3fba31d244fa64435c49918fff44588": "d78a455dabc27aef995825b3243362f9",
".git/objects/92/0fc88d774857e6ad5f834e6ea093086dc4fdbc": "44e930f1d0886e7c2d5f59c5c7197ff3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/04237064c0bade23176cd05f75fc9c89f92fc4": "4ce5a88703d8d86338fa5e5569831866",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/af74f22e501a33765cdfa08e35c461ff9cd853": "a8b892cf40e10b31a986d3946340a7b9",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/af/c3d7f40777ee1048f4e0ace63b70257ad05d34": "9147eddbe8a028e893dd0bb5e139ce35",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/890184f63df149af929756d00fa6601e3233ab": "35c45041fd6f54d68de610d22d2b5573",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/8eced9df62d657dfe1a53b548b2d3522108e28": "1718ac137f90b7cc2bb1673c97650c3a",
".git/objects/de/a34dac992bd9943078f9eda1773b2190a0474d": "3363d13e4b9f2ca3ca38e210e8d33c09",
".git/objects/e0/1f430e1d3d3dea0847625c8311dcfe7403f111": "f2a224e353b4e77444b5685d434691d7",
".git/objects/e2/0de6e805d249d66b253adfcaa3a77f4579256f": "a8b9e0877c82a0f859d5ae6acdf8d1ff",
".git/objects/e3/cfca7fac8cae7482299d16af799ba1d159ade7": "fb51bf6990dc43e50b0f098cacd969d5",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/2fd7df1ab3d390785aca4b5f22a844b0f613a5": "8ba4b11ac19fff89bab46d2389dc2398",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/41051f0bc866f083ed5492610891409d12ed5a": "a438b20b19a347ced74470367a7f3343",
".git/objects/fc/5e2c9888f50c2ab924e68616c94a62ca42f22d": "668e4d3b44734da5b93c6ed4cc084dcc",
".git/objects/fd/93fc0ff68f4f44945eaefe68e77168441847de": "4192c2cf44068355106fc377f3fe23db",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "f859c07a37e5493362e891c620c94c15",
".git/refs/remotes/origin/main": "f859c07a37e5493362e891c620c94c15",
"assets/AssetManifest.bin": "677b3d7064a273a5348dc644e0652910",
"assets/AssetManifest.bin.json": "d2bcaf851ff845550e5e10686ead0c5a",
"assets/AssetManifest.json": "4b2ce31ce0cc9781fc8418cc8b194ce9",
"assets/assets/branding/favicon.png": "8d00f3cc7dd9385674d6bfc895208a13",
"assets/assets/branding/splash_icon.png": "8d00f3cc7dd9385674d6bfc895208a13",
"assets/assets/quiz.json": "179a6d0aebedf1542e6d1a456012f16a",
"assets/assets/tutorials.json": "4f137c71a2b16b36b438d3021b014882",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "06fd6840e7cd582e428cd0d0f32c805b",
"assets/NOTICES": "f46365d76bf6f68e9a3ef2573bc3f1c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "8d00f3cc7dd9385674d6bfc895208a13",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "cc09be7604fbfae82e6c42c9de48a444",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2801d18a3b0575d8e16ed97dcfcaa19a",
"/": "2801d18a3b0575d8e16ed97dcfcaa19a",
"main.dart.js": "63d05ed03204f3693e8d04e1ed955cee",
"manifest.json": "d5166f11481823267a5b8151af18c3ca",
"splash/img/dark-1x.png": "31e4f983286f30fa9c67e712023d69ea",
"splash/img/dark-2x.png": "ba2b4a1a36b7b8fc74795821831a53fc",
"splash/img/dark-3x.png": "6bb64a775aacf187fbcd593c3c169fa2",
"splash/img/dark-4x.png": "09d09b08102fa983474f63e9cec88d9d",
"splash/img/light-1x.png": "31e4f983286f30fa9c67e712023d69ea",
"splash/img/light-2x.png": "ba2b4a1a36b7b8fc74795821831a53fc",
"splash/img/light-3x.png": "6bb64a775aacf187fbcd593c3c169fa2",
"splash/img/light-4x.png": "09d09b08102fa983474f63e9cec88d9d",
"version.json": "d14989bc3f191cc1384be04169ed1d36"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
