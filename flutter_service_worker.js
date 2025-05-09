'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "4866d47eb7e2082b2600bc2cafd1cbc6",
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
".git/index": "732a7e57510e7b54cd6920e93710ccee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a94741269f1fd7d2760025583fae6b31",
".git/logs/refs/heads/main": "a94741269f1fd7d2760025583fae6b31",
".git/logs/refs/remotes/web/main": "e691187c783b7ccbe76e3fdb38e8a054",
".git/objects/00/bdee54e6158d06d579c121125e631981fb47d2": "5046e842e3e44902ccf62d8961e85fc0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/37f3dd006e7e3c9eef9ba8db63c640972be033": "904a7a994ec26b80d1c4bebdc5b6b8f6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/12/402c1d14b50226f2a668b78cea9422cc972b50": "614112a593a7f95445301ea377d4b2b9",
".git/objects/12/9fc1dc8ce70f24fda138093776f7b4aaf3402d": "73c756f93299e515dd592c5122a9060c",
".git/objects/17/8909eed3f5bacd855f874dd700a9a41e33a3f4": "c1c8d1193935e5d268f48ff4ea885449",
".git/objects/17/c70d9398cc980a22f9ca7b78a9bfc273b9d025": "4ad73dce0db3016aef785d587fa688d1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/0cefbf9e951540d305977ab8060987bfa39917": "6d9688f2d92b5fa91d0715092dd2cce8",
".git/objects/28/ec82d402705d3a924af6aacf1652a21aed8296": "05892651e817a5593e9b6cb917e85229",
".git/objects/2b/f4998ddd703f896f69537a5014207bd1aced1e": "92a5921d7cda1ef509ac99d873c58292",
".git/objects/2e/d9d637137863fe4440983216e7f3f4229c0e65": "8d6ddc8d6ed8c91683aeb54a4534eb32",
".git/objects/31/daa6271895139a8784c6b8de7f82e9d5973a76": "799a558175e704de02a86aa338fd761b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/824ef0cbe80824d9f04a10782914776995815e": "816e6038ddb042ddf154bca2d96fe0f2",
".git/objects/33/d9903f0666c53064c5236662670f57630760c6": "00c4bc973434d49636a442649cbad8ab",
".git/objects/35/1c8dbf010a9c2ea529cf6cfd890afc5ad92578": "61d62f71cbcc32c565c9ebf9aafb0c65",
".git/objects/38/e519ecef1ef49714ea8070f1913b758ad49114": "b6ae5fbff1063aa116c3c874f40e4f91",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3e/2b436c160ce189f499ec6c94240fdcf9a77658": "6402b057f6dba782f858f2827bc0f59b",
".git/objects/3f/035a1bdef7ec3a518d3d75545b1bfa636614c9": "6feb99bc7e70001f5390a70fed0ffca6",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/1d7f47ead46b8134cc9e6d2542c19b8eca4087": "c2aec16f0332633e281abaa3da4b6ceb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e49e3a88009ff1b837ffe90318a971e37b5a7c": "d2f492f559ce22b446db03f9d5bf19e2",
".git/objects/4b/74801a1b75a267760ca1daffee25995f84d780": "855f02b4094ea41f140fbea14291b3b1",
".git/objects/4c/e2a5f2d8129220e0feebc8d10e969a2d4b6843": "ce4bdea3e4f8a1e8558faad1e5f3023a",
".git/objects/4e/7d5c91c230843aac18f86685ad5c40b53a1c58": "f5bec6a1e753a749adbdcaac1c09df42",
".git/objects/51/8df3a40eebb13883e366eca4f0f68439042084": "c3d96411f9823acb788194c7aede2bc6",
".git/objects/52/d4d149f2f651803816783cdbfec85ec4271009": "7d889343601cac098eedcfaaf6c086e0",
".git/objects/56/c734bc63f0f203baca8f150720a1150fe0dba3": "5809192dd8310e6a1cc7172ad1cc80d8",
".git/objects/56/f6769deaa0734bf38dd4045307667c85a3b7fc": "b59788d923da6184d7d200b6ed1659c1",
".git/objects/57/df1960969c9a20483c59204b09b891c12e4076": "5a5f0cbe4f8a067d7194bb67cb4ed04f",
".git/objects/58/3a863e71ba1dfc3200849d9b1cae75660d34d6": "dad5558401630163a2441785032996eb",
".git/objects/5a/554527ce3449cea52d934461677026c44568e2": "23776118a127e4260a22f5014397d8ac",
".git/objects/5c/07df925cb3641559de678e5dd2087f16fa4021": "eb68c664d12e7e8435db86cc3dbaf92d",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/66/2cac86eb4d4a7c8209121c6ef6638da3749732": "196b9a0eab734691cdf472483871f3be",
".git/objects/68/b0994925ab0303f581d19a4294f7d3ad8f3033": "399b92c32c31025f67cfd670390fd10d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/7f5f7db2e18e5f8aad289c1757a0cd079f4b25": "2c7c9dc091f87039aae6ab54e35cb689",
".git/objects/77/612c0e13750e5da4b707e554654f7681a52266": "809704cb8abd86bfa079fe9f00c3fad5",
".git/objects/79/79b588a56ebc7acd5c3062fde019f0c4db7b7e": "86592a88c12c8b6cbefc4fc44ad33d64",
".git/objects/80/aae35a8bc1804b67d3b7a991318892c3637003": "9ea4a586d4f709a568e9fa21cedf8903",
".git/objects/83/4969398531c814459e9bca8304bd11b7e9924b": "a0523bb7a0cf23f1628d2665b8ba2553",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/2d6f0bcce2a300dda17975c0ac558bff7da529": "03ff323791377c3da5abe95b11ba439d",
".git/objects/88/cb72c132bacf8bd607954c17e5b8c30382ef68": "8765d25d19bf338e50af4b2cd2fb2466",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/20522633b4de95081c49a9407a92f38e26098b": "ab4b663c2f82d5063172c6845c53c9ca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/6887834fde2842922ecb8c35a96227eadd46b3": "dac075018de8923c51775231b0b4ca9b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/1c940c000efb367b4ab46a0cf8c28fa632af7e": "fa5b00554b155833fbcfb779c1b0943b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/81f9ce90fd2fce7f8a0fdf9145d01065160dbc": "63d29fd3744df85c6d4a9d63e02c02a0",
".git/objects/95/685e171b5edffdb50a36b9b1c899edb67f9388": "dab304fac6b7a45fbcd10b4f388d4c87",
".git/objects/95/daa0293c23bca8fbef6655639ba7e066b09709": "eefbaba2b5776d0b3db30c980d9d1afa",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/8bd6ac8577fa98161c536dda1aa78137804b1a": "e2c0c66051138aae81b308ef9d0e1145",
".git/objects/9c/fd0cc457bc2109ea8cbfb7135b2c315592171d": "972cdef57901fee57878b8ee73d14054",
".git/objects/9e/f590afc1daec1b0374c83e5530cbd4277e413c": "744339bbbb92f2558aaae3fb112bdaf1",
".git/objects/9f/973bfda821bd5adfb6341eb2dcff8e99d2d3ce": "c404494238d621c4fa8c679b0d16e2ee",
".git/objects/a4/590228c5eb57184000eb3aa1653c7232732529": "8e77bd5c0b36924b4a226b155025a224",
".git/objects/ac/1d0c2863fa8f71daa3f3c3a31930215815faeb": "1daedc0bfd46f2101842c64f0df2f372",
".git/objects/ac/c6ef4d679a3210450f667fa6acf640505fe2d8": "cad1ff8b0577ae308e100f618e4d1eae",
".git/objects/ad/953b285f9310760af70eac047d64de1b864dbf": "51cbbbcb67400102aa84fa6738568c05",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/39e7a431793037e1e7f4869f7f9552dcfda0d8": "1085e2a43ce675dbe863e05a3428d0e9",
".git/objects/b5/adc8f75d7a32bad10dd53fc892dd0516cd947c": "6a483681293f0ea82dee4c7fb77ad0f8",
".git/objects/b5/d23c8693bb315670d1246d23576e74be3e903f": "fa84021f49e43ec23c9bdbed4f1ecec5",
".git/objects/b5/e7094c95bd3278181d168304aa75e8a10e7243": "4722645543d8506df9022161c3903cf9",
".git/objects/b6/7a650ff0feb5cd9fe894ad54c24b3d2c6378b3": "48d0f7b7a2b2d4e5639e04eb1216fd76",
".git/objects/b6/fefdf4a6b15814b62da609127b7169fe99403a": "6f8ab9bafae11a2560da199cc3b479bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5e30d5b90c902d77439aaec3127b3344a3b77b": "888c9b89441b665f47e99ac3f9016b52",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/14b98ad9b1900130d595067050a3042002fc90": "dfddb5b4ae87fe994e74bd44dc5cdd7b",
".git/objects/c0/5fe50373a6f7fec46ff029c5e2d84f0442563b": "651334196b68e80474e3a71e659c9af1",
".git/objects/c1/4341cf188230b62c5c84e8862e02334c318673": "ed30b9abf04ee3a824c343ad64743c0f",
".git/objects/ca/5102ed8ba5930814d6e2f1b941950a3d4eb309": "af22f544f66a5e968ce173224d181bbf",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/a842f953bba9ea1446fedf4290cbc93256b2a5": "40919d936faafa14a5c91c245db32cc9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/2c7d44e7ba3149475fef2c85b043df79847dd3": "c1db5949038f3c8dd5cddd0274986a85",
".git/objects/db/55b0d8ee552d121de51ee08905bf877f4e8c69": "ccf9b8df16b9f77c45ce726c44024b0b",
".git/objects/de/ceafa7b8f94d9135226dac8a80ff1e601db732": "8962a5161f015e35b9ad44cb8bfaa4c0",
".git/objects/e1/eb75b1bce08e0016b8900ffcdd1aa3d968a0b8": "de58930dbaae287adefd41f81234fd61",
".git/objects/e9/02a21012275a39eba153b52284a6ec351ef371": "3c0df34a7c7db6e66b71644caa45f3ef",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/24cf45886a74d64f8fbf02a83649ba4c03fa17": "2bc246789659d3ce4ea710abeca33f98",
".git/objects/ed/4348bdddc50de48983bb7712bc20329a08168f": "8a721260fa23d9eb27e131a0643df1af",
".git/objects/f1/a35420bed8fa7b509e5882a3db7d74614b722b": "c519a898773c88266f149fde0d10b2d7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3f365fb8ad1ebfbd7f477cb38ae4517cf164d0": "425224057b412b7d6d8b80a7d2ff3bd4",
".git/objects/f6/0cc72841c4d3796a8060540a5333dc6e849185": "da596b10539128942117fd764bb28915",
".git/objects/fc/79b2699453061e42d462a1d1075a0ebfb5a1fd": "10112f7ad52dd8e340ff4f61a48c62dd",
".git/refs/heads/main": "0e412195a8cdfbefdb7fabad9eaf84f8",
".git/refs/remotes/web/main": "0e412195a8cdfbefdb7fabad9eaf84f8",
"assets/AssetManifest.bin": "80b4724224cc7a2142e3bb9dfd289a7f",
"assets/AssetManifest.bin.json": "65c95c63dd413fdb638e485cf3cebd55",
"assets/AssetManifest.json": "18557a63c9f764b5e05a03708880a7b8",
"assets/assets/images/imagen.jpg": "5ccf70b17432d1fb6f662436d835b18a",
"assets/assets/images/wpp.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "abba2d04cd37fe6091c6ba97efebc815",
"assets/NOTICES": "711bfebf5d96812cfe59b0a2344d2983",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4d667f46d21a1362ce3bc1744d70c347",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86f444e3f90b3ef485482c74db889ca1",
"/": "86f444e3f90b3ef485482c74db889ca1",
"main.dart.js": "be14b3c374d3fcf6ee77303fd32c8d21",
"manifest.json": "4be9f1bf6b0351c56aab242ea1aa34a7",
"version.json": "7d81c1fe70fa05e8ed2a35f889938591"};
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
