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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","cac9083cf00948866f05c96cf3341257"],["2020/03/12/妈妈写给宝贝的话/index.html","1e4007c00eea12138045aaa312f4212c"],["2020/03/20/磨人的小天使/index.html","db2030da80eb3c0696376be1e660781a"],["2020/05/03/hello-world/index.html","d9c2d6e5f145b1c6c6bea16a14af36c7"],["2020/05/04/AGV的用法/index.html","9e41573d710ba98e94a3a31fa11b6bb9"],["2020/05/04/Github创建文件夹/index.html","08be61fd7a58c6dab04b725f2c37d7b1"],["2020/05/04/Move的用法/index.html","65dc4d2c1aeb5723961c86d63eeae208"],["2020/05/04/PlantSimulation常规操作/index.html","4918fa2565764da6f98570c23e6a6d3a"],["2020/05/04/TransferStation的用法/index.html","2c6a0c39c263eaeb05ad4953035723bd"],["2020/05/04/Wordpress问题解决/index.html","dbeacf3af45ba6b52cf751ad84f49baa"],["2020/05/04/无科学环境连接谷歌账户/index.html","35cc41f873e5099b1bdd0d6c507d4a51"],["2020/05/05/Markdown的一些小技巧/index.html","e6f734b4d65b9abb7bee59fb561354b5"],["2020/05/05/导入cad作为背景图/index.html","93129a6ed91301f05327c5a6849ec04c"],["2020/05/05/推动或拉动的生产模式/index.html","3eb7037129ed7ff0209c537d1ed78e4a"],["about/index.html","9a4d50e3dcb98e694acb85c6386f275c"],["archives/2020/01/index.html","ffb472517beb3560bef3faa6b20100f9"],["archives/2020/03/index.html","9290e1a9689e279e30b926546d67c512"],["archives/2020/05/index.html","3504812bafcf82222817993812cbc256"],["archives/2020/05/page/2/index.html","588ff70b2fb9f67f7206a90fd7425dbd"],["archives/2020/index.html","28fc8caaf08d05a7f4d6503e67b1d493"],["archives/2020/page/2/index.html","44968450338e66b43f67a8ac39854c75"],["archives/index.html","63b62780bb9936707c51f67891b8ea01"],["archives/page/2/index.html","ed00b3e6449b3cbf25794697b228fa1c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","be69e0ab5112934b4c6d761a6c056bc2"],["categories/Code/index.html","65df07ca3dce8230ca1bf571b697d278"],["categories/Plant-Simulation/SimTalk/index.html","a7ea478825081831464437c9cce5297d"],["categories/Plant-Simulation/index.html","bdac2768a21fbad0e332a1c1b0c7b5f3"],["categories/Plant-Simulation/实体/index.html","f980b43d5be25821dfde802b189837a1"],["categories/Plant-Simulation/常规操作/index.html","6a2b10632ddd9a64b839974c63dd902d"],["categories/Plant-Simulation/模型/index.html","e768b56c87df33d34516570effd93cef"],["categories/Plant-Simulation/背景/index.html","1b515d9ad910ab9e56a177fbaa042558"],["categories/index.html","484817dadf8bbe107eeeb38b03c1a30d"],["categories/博客/Wordpress/index.html","b9514521f73cb882f9b9deb3611a19a4"],["categories/博客/hexo/index.html","42abeee0913a626c2004c2b2d03c07e6"],["categories/博客/index.html","6dc829b0c82fb634e7c5cd988c3d46a0"],["categories/宝贝/BB/index.html","c1c55537e0d3e2bc85d40a2d1086f0f9"],["categories/宝贝/MM/index.html","9f057b65669838f9fb4470231464d044"],["categories/宝贝/index.html","e757915e0e27ce16a2462898ae984365"],["categories/科学/index.html","7f21b732db304b61581bd9e34db453fd"],["categories/科学/手机/index.html","0cbeb142656a9ccf0b037b45f28e194b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","34bbf2d652bc72c6dc79b706ce678cf2"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["page/2/index.html","9f23dec93f44a5e91132c2b0303a6aff"],["tags/AGV/index.html","c59c55a0a1150162be33569870b43caa"],["tags/Github/index.html","2c8a0a05a8c9900c1e3047cc22168d0d"],["tags/Move/index.html","2f9807bc5ecc858a20161c1071cc6fc1"],["tags/Plant-Simulation/index.html","fdae62cf2b104e0b9f0ec15ee2a34dcc"],["tags/Wordpress/index.html","289f5684afaa28060027ab451e3cf72d"],["tags/cad/index.html","396afa5d5a861f6235918b3b24a4e65a"],["tags/hexo/index.html","19abe535f1d9ca621ff3c10a48b0c116"],["tags/index.html","f31beade6b47f359ef54cea0d1a8ed17"],["tags/transferstation/index.html","938031e6860addaf30fcd1b4c90c60a7"],["tags/写给宝贝的话/index.html","8a22c0c2e38420f923c532a020cd6829"],["tags/生产模式/index.html","e209070b663f05a4eb0190ab82eb7cde"],["tags/科学/index.html","6f057016f9df2a8974dd55242e583c3a"]];
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







