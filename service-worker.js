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

var precacheConfig = [["about/index.html","e8cb07eb476d62357bef4a6a75f3d558"],["archives/2019/12/index.html","3c77fa8401db358e85d8ba6a92038163"],["archives/2019/index.html","8b20dd518cce758749d7d7b3b0e4744b"],["archives/2020/01/index.html","3a75044bd5719fb6e45c6b7390dab0b4"],["archives/2020/02/index.html","befb7f7c71116c8ae04c42d05eb04c7d"],["archives/2020/03/index.html","d103791b34e5f4db4d4248924b231893"],["archives/2020/05/index.html","c05383f6c0bed1afaa9a8b3fff60f24f"],["archives/2020/05/page/2/index.html","8904e8fda081a802fb20a7034d335960"],["archives/2020/05/page/3/index.html","545395347e2f47907db6549a302dc0c0"],["archives/2020/05/page/4/index.html","4eed9e046109923058f28176b0fb267d"],["archives/2020/index.html","199d72713458992d6917f49f1738726e"],["archives/2020/page/2/index.html","af3a9d9e34da305b29e60a60c1053cb7"],["archives/2020/page/3/index.html","59d2a54e45b552eccaf7480451b87777"],["archives/2020/page/4/index.html","30a7b6dda8507f94bae4abe244dadff3"],["archives/2020/page/5/index.html","b6dcf07f5afb3748c68e2224c735f03a"],["archives/index.html","489596bcb394d121475c3b2f3da5b778"],["archives/page/2/index.html","66e424daaa79a098f3a1c2c88d5ebf68"],["archives/page/3/index.html","c4ba4c2cfa2744c3f3a21878292ff1ff"],["archives/page/4/index.html","11380b32a591ced12c1a4cc675d2f0c4"],["archives/page/5/index.html","64554141445073e0c38cf76c79d7f35e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","395756bad166f36b9574a1b1d75487a2"],["categories/Code/index.html","29b90e983ae7bb620e1bc375d164d98e"],["categories/OpenWRT/index.html","c89faa57f27f5b05719fc7f22d304100"],["categories/Plant-Simulation/SimTalk/index.html","6d7e9141ee19ea1ccbff7d5f4bda75b9"],["categories/Plant-Simulation/index.html","e61bae51e59b5510f781da2d3567fc74"],["categories/Plant-Simulation/实体/index.html","4078629d0449751955a0ee209643d807"],["categories/Plant-Simulation/常用代码/index.html","8b2f6a4a75da213bae83a2328ca9e0a4"],["categories/Plant-Simulation/常规操作/index.html","434976f16f6b3a670867b9692a32f44e"],["categories/Plant-Simulation/模型/index.html","3d355634b323d83f8800939af7fe08a9"],["categories/Plant-Simulation/背景/index.html","9a3b8abbfc39911e40dc501f31ef2c58"],["categories/index.html","a1cf8d67fd6529fbe01d72a92806104d"],["categories/nas/index.html","e6c9d80b8580b0e3403b5d8696b5dbf0"],["categories/ubuntu/index.html","8db48823eaedc941a8d8de7792165d43"],["categories/ubuntu/ip/index.html","b410c2c24bc38a98e93662ade3486603"],["categories/ubuntu/下载/index.html","21ca1573bc88f80bf5356809d1082a33"],["categories/ubuntu/命令/index.html","049a238c9af396e476ac868829676e25"],["categories/ubuntu/配置/index.html","86cf6db26a5e8f1a21c7f352c3220656"],["categories/博客/Wordpress/index.html","e453d62afd5dbe1a1b04937c64a23da9"],["categories/博客/hexo/index.html","9e1626d3101cc332ceb4a2e0a4d40f13"],["categories/博客/index.html","ff983667206aaed5e117144409e23abc"],["categories/博客/page/2/index.html","258cff44fcf317a3d87b180da8e0c0eb"],["categories/博客/typecho/index.html","0a654d0b5d95273a70e1a635be5b2dbf"],["categories/博客/统计/index.html","447b7e47cc128690824ea7918adcc69f"],["categories/宝贝/BB/index.html","7a346c0ffdb3d804ef513ac6e6e7d42f"],["categories/宝贝/MM/index.html","2ae4b610c96704dd5b3aca0a322e71a1"],["categories/宝贝/index.html","96df58059edd4deb135c37f8ef295b58"],["categories/思考/index.html","f75a2b2324832f9c48a2ed21a6bc1f1a"],["categories/思考/职业规划/index.html","1179ab5fe973bee9eb335265492bbc4e"],["categories/科学/OpenWRT/index.html","78403e56d1d56e4cdf355546f4a55766"],["categories/科学/index.html","6b391ede2550540ddbc934bacf3adaae"],["categories/科学/手机/index.html","5951db9a8418ecf418f46775f0d0efec"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ab6e44aa194ce08e380be6ec8f7b5cfc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c1a7c374e2acd081d2b595da9fb3369f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","f7e0658e0fb83a4fef56d41fa21587ff"],["movies/index.html","9b786b132c4b34a072b30499b2d816ba"],["music/index.html","8273f63b0e9a68622289bdafaff44a4f"],["page/2/index.html","08e58bc19d4f1e10963407c2ffbb3460"],["page/3/index.html","e02299191608a1aed740801cf182eb91"],["page/4/index.html","f89c7e20f1a6ed86e36c756ae3ca305d"],["page/5/index.html","96ac5e26319dbc0c655f26c9874c73e5"],["posts/2019/12/04/00/35.html","09e84ec01531caebc86d72fc23faf998"],["posts/2020/01/15/20/18.html","3fffe15b14bc4ce600939919ccc75db8"],["posts/2020/01/16/22/18.html","faf0fb4f504816c51e4101b4cfbde78b"],["posts/2020/01/18/22/18.html","38de52a071be3045fd565adffc8a4c68"],["posts/2020/01/19/08/29.html","610c0819f0ad66c169f039ef019b85ab"],["posts/2020/01/19/22/18.html","d7000191052090c29cddc7632598b09a"],["posts/2020/01/23/22/16.html","3987378db278d6fb38ef72fa7e64ba93"],["posts/2020/02/04/20/18.html","ebfa74047522d9ae6fb8bb418222d152"],["posts/2020/03/12/00/20.html","9a0ef0b1ca8c4d5dd78324bf6d8a9a94"],["posts/2020/03/20/22/12.html","d239c5383ee7066821816456997d6ee6"],["posts/2020/03/22/18/24.html","712ca0cb241be5b215b0cac8dd9787cc"],["posts/2020/05/03/22/12.html","243e6bf70a851bcbf494691346ed31b3"],["posts/2020/05/04/00/05.html","5584c8698be1573a6a1ecb06f9d045b7"],["posts/2020/05/04/00/09.html","aad2102728ea2b8189988030423d9809"],["posts/2020/05/04/00/15.html","a7b85ef0a001d11373021619b07d81c5"],["posts/2020/05/04/14/58.html","f3bf460ac5429eadb880a988e807b234"],["posts/2020/05/04/17/01.html","d491c981adf469a21fa435f74a3fba78"],["posts/2020/05/04/17/19.html","307cdce3697f9a4230f45e059a3cb5fb"],["posts/2020/05/04/18/18.html","ed7c51cec30536346a1c54c0158a6956"],["posts/2020/05/04/18/24.html","525261669bebc4aa732277a3920c0e9b"],["posts/2020/05/05/11/12.html","fff29f39efac3ea5e5d7a349403d871c"],["posts/2020/05/05/13/20.html","9a98649bf711abe0c127d8e7f124d591"],["posts/2020/05/05/15/20.html","6e255b36acd466b9da4f72f77c8c7f84"],["posts/2020/05/07/21/21.html","012f26de4137c71dafa8abcbef57f7a3"],["posts/2020/05/09/12/20.html","bfa542d2b89cf3ac676833ae324c2019"],["posts/2020/05/10/18/18.html","7a5d1f6aa6b1ba5e876c02da0d4499d5"],["posts/2020/05/10/22/18.html","e1af0493c50a23f3ad7a48f232e51130"],["posts/2020/05/12/20/18.html","5635c231face2c02815edf32dcb30147"],["posts/2020/05/12/21/18.html","87050aa048e2ef0616560e950d609a9e"],["posts/2020/05/13/20/18.html","65bebcb405b03924bf846476bda7a744"],["posts/2020/05/13/23/58.html","d02b7548bc5704f8dff660289098dc4a"],["posts/2020/05/14/11/18.html","66b028eb7e5aeda62f9a955da80dde85"],["posts/2020/05/14/12/18.html","89e103ad98f3864c1eef61bb2847f80b"],["posts/2020/05/14/20/18.html","adfd60800edb5982ed36e2a0c37b41ac"],["posts/2020/05/14/20/58.html","b6d179a71a092fa00cef1475c8d666aa"],["posts/2020/05/14/21/58.html","02a45a9572e3aeb253927bc7aa4a891b"],["posts/2020/05/14/22/58.html","17c6a6aa19710486e47dc7d305cc75e5"],["posts/2020/05/14/23/46.html","e3b690a378ea28fbba4076d6bc42d9b2"],["posts/2020/05/14/23/56.html","3495d89fc3ec910ed9a4f3c4b4f2fdcf"],["posts/2020/05/14/23/58.html","ff88ba460e63f31079729ac5e3691324"],["posts/2020/05/14/23/59.html","79e655b985504f36c2dc351a180db695"],["posts/2020/05/16/20/40.html","b843cfd330abeaf6f64898efeb92f886"],["posts/2020/05/16/21/40.html","37c3b65a46438dbae10e7f593d5861f9"],["posts/2020/05/17/21/03.html","98e3ddf05b3f41c0edf6332a6cc12e75"],["posts/2020/05/17/22/42.html","af8edb91df3dd070961ed60d6d8facc2"],["posts/2020/05/24/07/03.html","605285c685b7ff5f0bb671c72b9743a8"],["tags/AGV/index.html","f0fccd3beac66192f3ae6ad27110ab6d"],["tags/Github/index.html","1f195ae9d4b072f80d17f7844e63ce46"],["tags/Move/index.html","1231308b4426292b3dc1489682b02bbb"],["tags/OpenWRT/index.html","6fe6c491cb93f8fd3efb8cabc8ded67f"],["tags/Plant-Simulation/index.html","acb3a669f30ad3652bda23d9e881aeba"],["tags/Wordpress/index.html","3cb4c2d433171bf718c54468237a6bbb"],["tags/buntu/index.html","ca60b8399e6a9fdc8f721c2830601dac"],["tags/cad/index.html","80a7d824e85b558a8e81d1b9846c3023"],["tags/coding/index.html","4bc4cbca31fa0733a9317b88f3adc271"],["tags/h5ai/index.html","402fc37702f80928006414eb3d2184fe"],["tags/hexo/index.html","efb293ad3cc2befc934bead80bdc8d97"],["tags/hosts/index.html","74e893b054ec35272e50453a07fb5208"],["tags/index.html","9242b4218b023c58903142dda395be23"],["tags/lychee/index.html","542153a9f27f6313aa54e2e0d7a5842e"],["tags/nas/index.html","947ffa00233b23cd1cb7726f73445d3e"],["tags/tpyecho/index.html","f8449ab0c132028542af5327e447a62b"],["tags/transferstation/index.html","0a80993eae823687c144614173ae5fac"],["tags/typecho/index.html","c5a7d011d47d49cc8dee5e2f5ccd92b6"],["tags/ubuntu/index.html","77b18c272be3134b97797b6f0cf51c9d"],["tags/写给宝贝的话/index.html","52cdbe305e5b543f5e7db5caffdad9eb"],["tags/原创/index.html","1bfdcef3eaa42d87a17946607fcfe324"],["tags/学习/index.html","eba316b5244bdd54cf7e845b829c1f26"],["tags/宝塔/index.html","978d50ec9a9c736b9b3820726f44a73c"],["tags/生产模式/index.html","bdc651b264af688dde97c9fc2da7174c"],["tags/百度客户端/index.html","640fd1975f271afb0565f6b8566cfe46"],["tags/科学/index.html","3dffbc95ca55d4e0d50ada60b9cad126"],["tags/统计/index.html","025662eea39b912f4dc3efbc7061612e"],["tags/编译/index.html","30a10afbd719607bd577717b04a63d70"]];
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







