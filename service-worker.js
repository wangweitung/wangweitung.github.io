/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index.html","91ef0549e40c7d63f9f1ae315e37d310"],["archives/2019/12/index.html","ba498a4ea0bb0c308135ce3b5639e3fb"],["archives/2019/index.html","e7e4ae41d12ccde852995874b3acbf6e"],["archives/2020/01/index.html","a0e30ece4be408ebc0a04b3bae8cf2c6"],["archives/2020/02/index.html","d5e24b6dce1f6dc23c43a5608c361cbf"],["archives/2020/03/index.html","ab7315e16da4c1e8f4fd144da6678814"],["archives/2020/05/index.html","6e59d7f56d62ee38d459fda0cea590e0"],["archives/2020/05/page/2/index.html","f943cd89837dae35dc1aea1ccdf2b0a7"],["archives/2020/05/page/3/index.html","75ee1c3d33d65b1ea4354a6cca66661f"],["archives/2020/index.html","b8df5872d6915548d8558d2c02a45731"],["archives/2020/page/2/index.html","8320394d0783ff9cdeeaa5e9b374599b"],["archives/2020/page/3/index.html","1a6a608dc09aa2053b4edc1004e6b381"],["archives/2020/page/4/index.html","ab80ada99932d136ab106847ddede42f"],["archives/index.html","1978a32e90a5c706f5142ab548ac4547"],["archives/page/2/index.html","1cbadd193c7bf7cb2d706aadb81c3b13"],["archives/page/3/index.html","8df3727ed7b94d0e9b8a1967e7fa9124"],["archives/page/4/index.html","63085010fdf75282fdd4d13c36972356"],["archives/page/5/index.html","8f56c7719c6aca4ecd51e1e3adedeab2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","2f1b5977fcbdeede7872cf05d3a2099f"],["categories/Code/index.html","5f098931fb61effc5164b2ea4b014b4f"],["categories/Plant-Simulation/SimTalk/index.html","761c9b52eafd3a1caf5cbfd7eb909166"],["categories/Plant-Simulation/index.html","7a80b573fe5aac92fc39bc59d8e88e53"],["categories/Plant-Simulation/实体/index.html","f8e0502dca5621d8e49b74ef1bba2ce5"],["categories/Plant-Simulation/常用代码/index.html","1cef1941856ae8adcfffcb04a9a9fb24"],["categories/Plant-Simulation/常规操作/index.html","d88277116882fb9a802601efd0f97757"],["categories/Plant-Simulation/模型/index.html","2d60639f2c135de4d468aa0f0919fe50"],["categories/Plant-Simulation/背景/index.html","3b6f6b853a654999a6bba64140e57eee"],["categories/index.html","b08d2fd861fe90e9f2d650d9048086d1"],["categories/nas/index.html","e6247293f8a2016cfac5019b46d046e2"],["categories/ubuntu/index.html","8d0350befa7093f2ab4baec5c223cad0"],["categories/ubuntu/ip/index.html","f171a35563725a939cc74f428d681f66"],["categories/ubuntu/下载/index.html","b754107e216e79f48d6b4c1ce21510f6"],["categories/ubuntu/命令/index.html","91b2298810ff13adae74ee95aaa7a0ce"],["categories/ubuntu/配置/index.html","c0b0c3f31644a3bb4001a7d9c820b6ef"],["categories/仿真/index.html","4fa4f2fa79c583826e0d583c5e27c216"],["categories/博客/Wordpress/index.html","cc7e763363f3cdcf5e53352c223a1291"],["categories/博客/hexo/index.html","c8f353d44b2796c047739626517202cf"],["categories/博客/index.html","d27be9a66ed671fba418280ade5d413e"],["categories/博客/page/2/index.html","e7ad9452626f8204a67a51e202e47416"],["categories/博客/typecho/index.html","eb79ae081eece437d59618eeeb788b6e"],["categories/博客/统计/index.html","065e8e44f95efb1980353073d2b59ab3"],["categories/宝贝/BB/index.html","2ff4061151fe959d38c43d0c3a943da1"],["categories/宝贝/MM/index.html","e09cc2b5e4f19c544fc31c2a9805ec5a"],["categories/宝贝/index.html","2277b171ca52b1bdabe8736f6d5d4c51"],["categories/思考/index.html","4deec3970f3ea1035fc9e3b42b0038eb"],["categories/思考/职业规划/index.html","31b43fe536424f53610ddc57d34af269"],["categories/科学/OpenWRT/index.html","11a977a1b67e8fd02977693522006b70"],["categories/科学/index.html","ccbda0b06a1cf170a1c8bb26cae46923"],["categories/科学/手机/index.html","49397e05d17a0a03827d392b8131846c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6addc228656805162ac4225364eaef78"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d410d04bbe643d5a35e2874f96594e5e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4b6d5b2e5d4352bb4320661ea44ab479"],["movies/index.html","6086e991d3bf9a874a64a183c146e3dc"],["music/index.html","ad99b15746772d9ee645532abb9ec5b1"],["page/2/index.html","a763cf155e9cb6be28e833f4b2a565e9"],["page/3/index.html","1ecc95f84760f861ecc565393f6ecab8"],["page/4/index.html","e82c756847672389ed094867b6312192"],["page/5/index.html","7ea2b14038c2b8658b4ea3a19fa96011"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","a9f9ff32f4a1068312985051c3093518"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","e6619bd36670b5d8e016fcab67dac2f2"],["tags/Github/index.html","3e269813198ac06cbb07421356015627"],["tags/Move/index.html","f2910e6088dbd26b4562200f14e6ff33"],["tags/OpenWRT/index.html","eeb6e8942e2366747ee74024b4a60dc6"],["tags/Plant-Simulation/index.html","0b5615bafe059c0bffc9e7f6309a3aa9"],["tags/Wordpress/index.html","6be1f7911075874e24ba9be0efce1cb6"],["tags/cad/index.html","6a1604a2fec8839baf6749eb35afa142"],["tags/coding/index.html","66208493a81e2e370886cd2dce854d12"],["tags/h5ai/index.html","b535103a8dd3cae97f2886bee0a31197"],["tags/hexo/index.html","f5f559c6ff7585b81537efaa1cd4fcb0"],["tags/index.html","d15a1d2eed594e502ec019c010706c5d"],["tags/nas/index.html","f789f05f946563ad220353383909ebbd"],["tags/tpyecho/index.html","495768547e45c6990a1d4739df41d380"],["tags/transferstation/index.html","c1b0c580cd88ad00592dda79caba74d4"],["tags/typecho/index.html","1ceb74d8390edb11c473c57d0db533ff"],["tags/ubuntu/index.html","29731478df0f88dd9a12b20fe800712f"],["tags/仿真/index.html","6010b3c8cc73cae95a77a5c92f86ccb0"],["tags/写给宝贝的话/index.html","ff0f29074bab56d6af1bd378deba8f83"],["tags/原创/index.html","dfefa4de5dd21082f9bb1242a878b1c1"],["tags/学习/index.html","095a547f7116fab3322be04772375086"],["tags/宝塔/index.html","79b50506793ac8f887aede8e5fb5413c"],["tags/生产模式/index.html","cf4d9c629e828bdfc5d660b62c71200a"],["tags/百度客户端/index.html","2f91e8c0f3a6fedf62191289cd9861f7"],["tags/科学/index.html","a1f2fde4b00e0f00e007bf1a28378652"],["tags/统计/index.html","84148f3fe6df280452abb3a409c5fdd4"],["tags/编译/index.html","d36a7efe3dada3ad1c7807be74012a1b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







