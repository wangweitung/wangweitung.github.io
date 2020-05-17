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

var precacheConfig = [["about/index.html","ef728f3873cdeb967353d2710f508f58"],["archives/2019/12/index.html","2896a5370d772a54135b695abb64aa89"],["archives/2019/index.html","f194c1419a8a751af9350027753b119e"],["archives/2020/01/index.html","ab4c7da88539d5836c9affa394eec889"],["archives/2020/02/index.html","6d713fec3432780340d5a0c76fcdd9e3"],["archives/2020/03/index.html","7cf1cc56c270bed830180b4b58bb3c9c"],["archives/2020/05/index.html","b4d93f9cab5a523c8c975359086239e3"],["archives/2020/05/page/2/index.html","33cdf2ece9e2a372a4859b495fb8f638"],["archives/2020/05/page/3/index.html","79f3135f60d46e5d607bfd92e891fdbb"],["archives/2020/05/page/4/index.html","5fd769eb148d4c83a778ccd61d9d633e"],["archives/2020/index.html","26fe44c241c6beb70307b9fbfe9ddc81"],["archives/2020/page/2/index.html","aedd91a437d042c5817f2baa54965973"],["archives/2020/page/3/index.html","3170e1f341746c89e900cddb6d0021c7"],["archives/2020/page/4/index.html","e83a32fe7744ed8d32827b046b4b62c0"],["archives/2020/page/5/index.html","b2b8e890abd22d0ea7de118731f7946e"],["archives/index.html","33ba2fb328dd5506e8d7592ffa861b92"],["archives/page/2/index.html","81ed2bd736ddb59eabd75ee9ac64fd1b"],["archives/page/3/index.html","384bd75550ece5939446b49a55e35479"],["archives/page/4/index.html","3e1174e6eb3ee5e58c6e960ec712d64e"],["archives/page/5/index.html","0f7d7eb97ccf3d80db7667a265548a24"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","90f07ad92db2baf4032e77a560f29e5f"],["categories/Code/index.html","8123ab94342d85b6686933aa2ea924b1"],["categories/Plant-Simulation/SimTalk/index.html","24ba2f79585f35f7ab428f0df3e8bb20"],["categories/Plant-Simulation/index.html","40c5a1174ed85c4b575ebe6072dfc9ff"],["categories/Plant-Simulation/实体/index.html","a75e52c0d2dabd5fc5317007ea397cde"],["categories/Plant-Simulation/常用代码/index.html","5831f462d2af3cf061c96a259386ef10"],["categories/Plant-Simulation/常规操作/index.html","0b09298ce0e407f7b1d71c7f419a89bc"],["categories/Plant-Simulation/模型/index.html","9b24b517766f4ed64245fe4f37d61fd9"],["categories/Plant-Simulation/背景/index.html","1cdb3bf45bee4e83ea1ee03624660de7"],["categories/index.html","9d4189375f00c2dd931a0101adde0530"],["categories/nas/index.html","7d9088c89319eece7b30077bc0ae699d"],["categories/ubuntu/index.html","0298dea23ceb1f37f16dde84e34b09f9"],["categories/ubuntu/ip/index.html","3af8c9b921364f96e0ef32b8a96a0c0d"],["categories/ubuntu/下载/index.html","4e7acbc752e4b6d3a058b135e4a6e484"],["categories/ubuntu/命令/index.html","56cf81e16c3a70b73f1af5c60bdd2ed9"],["categories/ubuntu/配置/index.html","347bf0d57ea0ca992112f8d93e5c25aa"],["categories/博客/Wordpress/index.html","dca9e6332c54b63d2718feb3aed508d1"],["categories/博客/hexo/index.html","6fccf86355ff128ab7d191861e1d92f8"],["categories/博客/index.html","aa4b61219ee8e819b1b329b2cfe39926"],["categories/博客/page/2/index.html","9c4d3f8d6dfe39f99d4e1f522a1e3b84"],["categories/博客/typecho/index.html","a4cd6423db276a08e0b7a5539d230955"],["categories/博客/统计/index.html","9c2036a35706c5229f52bf532595303f"],["categories/宝贝/BB/index.html","1a0d5a1a2f2f926d0696c5013629620e"],["categories/宝贝/MM/index.html","8dff3d06e4dfad23e1a32bdee623bb61"],["categories/宝贝/index.html","323c91f58e3e96a10140f235e9bce377"],["categories/思考/index.html","692c28c961c070048ad7b32a004c9a60"],["categories/思考/职业规划/index.html","f0f42f213703a4031621090811944ed1"],["categories/科学/OpenWRT/index.html","139eb07a1bcf0bed6cc59f630f184afa"],["categories/科学/index.html","d0ddd96f1ff90b47c018a29e265abe14"],["categories/科学/手机/index.html","f29af41cfc7a38e54b9301aff85b33e3"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a87e8d5102ba15db4189a714bd10a0ce"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c169a2471ae3b96247a82700bcce1741"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d589ddd1bc51184c9b525daf8e19d01c"],["movies/index.html","ff2568658617473f42c402dc199fbece"],["music/index.html","a1c85eedbb91fc4dafd2d4fec83fec19"],["page/2/index.html","9f6b5304e2c013a68bc459c63763c76d"],["page/3/index.html","4aac0a872045e8a2059a5f1a8ec1559b"],["page/4/index.html","59b5d70687cd91e9b26f48771e806d18"],["page/5/index.html","f02860b7b834a0b20eed8dcb1cda5453"],["posts/2019/12/04/00/35.html","da7f43722614d17d57fc04673388a79f"],["posts/2020/01/15/20/18.html","292435724170e236b2174c9236e0a0a9"],["posts/2020/01/16/22/18.html","661e44edfdb12aff668c6516de638ac9"],["posts/2020/01/18/22/18.html","584c9ee8a3405129a02bab22da1fc260"],["posts/2020/01/19/08/29.html","bc9735be35d31c3ad25e251d6d108cd5"],["posts/2020/01/19/22/18.html","1e210f0409133344ba5db489634903f8"],["posts/2020/01/23/22/16.html","fa9acfacb3ef4cbebc478f4bb29bf36c"],["posts/2020/02/04/20/18.html","9d4e993506d5fabd8c28c38b06492400"],["posts/2020/03/12/00/20.html","4fe669db6f327525053386be68581811"],["posts/2020/03/20/22/12.html","472a5c6fe055cfff29ddc1364f8d27af"],["posts/2020/03/22/18/24.html","121334c84913b2fa3ec914d65c0d46a7"],["posts/2020/05/03/22/12.html","f62eb66506893280cacdf76cd213a28f"],["posts/2020/05/04/00/05.html","cfc529d1a8722cc016890e9156f18dea"],["posts/2020/05/04/00/09.html","e6dc7c7c0fe20b894e04de50beab45c1"],["posts/2020/05/04/00/15.html","d39a983595edf8a2baee50ee0ea07b85"],["posts/2020/05/04/14/58.html","cd42d03c96fefdf90eef7d6c6c8c7fdf"],["posts/2020/05/04/17/01.html","5b86375a5e0d2dfb73f7c71fd72a8498"],["posts/2020/05/04/17/19.html","264c71ed04727047412da9ae618594f6"],["posts/2020/05/04/18/18.html","eae02a9895fd9cf461c3c34f4ff34876"],["posts/2020/05/04/18/24.html","6edf7c3eefea61f30ccc0a6e54e5de81"],["posts/2020/05/05/11/12.html","21d4d13843c647176e016eb77a49d9da"],["posts/2020/05/05/13/20.html","8cb502fe030f71a40fc44fe7690c07eb"],["posts/2020/05/05/15/20.html","c7cd77003013a208dfc42aa32f88228c"],["posts/2020/05/07/21/21.html","f8fc6311b71f6d999717a8a1ee0bfe58"],["posts/2020/05/09/12/20.html","bc756140b7dc68ddd255e72dc916c256"],["posts/2020/05/10/18/18.html","3ff3ab580fd0b8cb86b17ea5a9c94053"],["posts/2020/05/10/22/18.html","b291ccc9cc1ce5d94fa57707e6406593"],["posts/2020/05/12/20/18.html","ef0d377e12d8f1e8b1e89a0678dc6fc6"],["posts/2020/05/12/21/18.html","60d3d46febd573244c5bde486c3bfe44"],["posts/2020/05/13/20/18.html","4933981c672a30b4f60f98ee28458204"],["posts/2020/05/13/23/58.html","088234a0addec0ef3600d7abd90a6e45"],["posts/2020/05/14/11/18.html","4a2d82afa46ecc1e51212cd5e2d792ea"],["posts/2020/05/14/12/18.html","aaa67ffdf27d53d86334e257fd696cfb"],["posts/2020/05/14/20/18.html","2d37b912b41ea31a4effd4f802f495c8"],["posts/2020/05/14/20/58.html","897e807ba7540278840c29fb4fab5c83"],["posts/2020/05/14/21/58.html","fab9a704f3fc4598a107121135a50d76"],["posts/2020/05/14/22/58.html","76a445a65babf2ee64272c5cd7b228bb"],["posts/2020/05/14/23/46.html","68ea776e09223cb77536d370fbd10adb"],["posts/2020/05/14/23/56.html","ba79309dd3becf1c1b59b386f7da567f"],["posts/2020/05/14/23/58.html","9aebb3042f69c8e50cff4a88443bef16"],["posts/2020/05/14/23/59.html","40c83a1a40665a6f25f5946c7fbaca19"],["posts/2020/05/16/20/40.html","dbc01c8a6a28a899f7485c791fee65ff"],["posts/2020/05/16/21/40.html","3f84914b4313e57e8d5220f4c2e4a2ac"],["posts/2020/05/17/21/03.html","5373d179d31d6e1eb81bc958947e00d9"],["tags/AGV/index.html","0386763980574a154b44fa2034dc90c0"],["tags/Github/index.html","abec302d70a7ea7bab1fe546841b4480"],["tags/Move/index.html","4b06a80c485211b57b62315fbbda1888"],["tags/OpenWRT/index.html","1d1fdfb7b60276644e291c0c8a542672"],["tags/Plant-Simulation/index.html","e88dff3d9a6a24dd664c23d67332c044"],["tags/Wordpress/index.html","5a76b0de09db645475ddaaa5c0748b07"],["tags/cad/index.html","375b6ecc7c3eaa49b829d5673d039855"],["tags/coding/index.html","618797e4f19ff27c4430051dc8b6e182"],["tags/h5ai/index.html","88a90b4133018948ca34ec7510ea123e"],["tags/hexo/index.html","519e645b6b86a5c419e2120de2c2fc5d"],["tags/index.html","f895ce47eb947abfb481ed15d44becf4"],["tags/lychee/index.html","4cbda44b937ba3aa92a932018b344270"],["tags/nas/index.html","4b4752e9bf208486f9ea42269f5e37bc"],["tags/tpyecho/index.html","6f535b5a339c4b04cd42b55a56fa4dab"],["tags/transferstation/index.html","4fdc04254088ac7cd759f4ecfbf982ef"],["tags/typecho/index.html","4ec9e740101757cfcc74605e1cfc067d"],["tags/ubuntu/index.html","a1c2c3b82119f445981c4ae50f31a40b"],["tags/写给宝贝的话/index.html","97f266f056f3d6dc8208a60d32a0cd1f"],["tags/原创/index.html","66c9bafc78fb181bcf80d215f58c8e93"],["tags/学习/index.html","a402fcd16ff1a0cdab4ba6e9f45f5ac6"],["tags/宝塔/index.html","bf6f9c2517bcbb2d22549270624e800f"],["tags/生产模式/index.html","8a365c287fd6b5d0ee0a1c0f31f0d75b"],["tags/百度客户端/index.html","5bc40c689b72a7c9f9785dc0c07f7782"],["tags/科学/index.html","89a3f4dda5796dce0f0212ffb75499d4"],["tags/统计/index.html","457df85cd6a8bc38b92bceeba87f1a37"],["tags/编译/index.html","5a4366e073a56d59b78d5d3d7cd011ee"]];
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







