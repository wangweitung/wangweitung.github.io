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

var precacheConfig = [["about/index.html","1ac662758e25fc09f15459f20660c0fc"],["archives/2020/01/index.html","0df5ebf5e29d36be1011ba623d5b8d85"],["archives/2020/03/index.html","8866641ae7d77fc9ff3cca35bde92224"],["archives/2020/05/index.html","cdfd82ed203a84830754c3c6c8924ed2"],["archives/2020/05/page/2/index.html","3aefa63221377cd70e15a85e05f58663"],["archives/2020/index.html","020bfb5a8b289eaaa10e099e3e2bf870"],["archives/2020/page/2/index.html","8d405a59af74bd948ffae7c422ae249e"],["archives/2020/page/3/index.html","a183f75f4a90f5f3a70c8fe5780127e2"],["archives/index.html","26f97d8d2b04108cbd92fa86a3c44b83"],["archives/page/2/index.html","d792ca8d9973cde7c1b43ecf86fcc97d"],["archives/page/3/index.html","b10e68d300b52d418ab95091e16b89da"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","e94ffb3208cb4194ae184e16ada391ba"],["categories/Code/index.html","c90b27b85abd541510d23c3cd3a640a4"],["categories/Plant-Simulation/SimTalk/index.html","738bb7618a2b8d281c16d2c75c99ff11"],["categories/Plant-Simulation/index.html","e979d684649f869847dc073a0dfcd4fa"],["categories/Plant-Simulation/实体/index.html","9e8a2c30047b1ad08bfcd8c7ccc464a8"],["categories/Plant-Simulation/常规操作/index.html","b7240a609e87b854aaa93e4bd8d7d930"],["categories/Plant-Simulation/模型/index.html","17185269a6da2b8893ec07b7294811c4"],["categories/Plant-Simulation/背景/index.html","28a5303f7eb63d9f7df6ebe1b71b67aa"],["categories/index.html","0cb54fa47be83c2abfe4bb4aa2d7c4eb"],["categories/ubuntu/index.html","6e611132e4ae8812de7a70321c47edba"],["categories/ubuntu/ip/index.html","d91d35124bc2520276bb2f31c823404c"],["categories/ubuntu/下载/index.html","671cee9853fd2b25a36caac7025e6860"],["categories/ubuntu/命令/index.html","d5a84ea7c950f8b64956f267cd112e65"],["categories/ubuntu/配置/index.html","2b35758c90509fefb24eaf1b162f2e77"],["categories/博客/Wordpress/index.html","15a9078f6549c4aa615160ca43621193"],["categories/博客/hexo/index.html","13c6827659bae78a98143ffa6b34cfcc"],["categories/博客/index.html","4b54e0c59ec1104643a3462204f505d3"],["categories/博客/统计/index.html","04cc1b5b6ef27c2cc987e5c9582ca2e2"],["categories/宝贝/BB/index.html","2f1511ab194425c8665c023153d6f414"],["categories/宝贝/MM/index.html","c2fa949264866f9848626c6c83e8a7c1"],["categories/宝贝/index.html","2d120e54d4f3cb8c9ce0549b58844baa"],["categories/思考/index.html","9d2825432a9af4e13c571078fca3d78e"],["categories/思考/职业规划/index.html","342009368f08415af97f2e61e63c2c1f"],["categories/科学/index.html","4e315db9c4948501dabea7f75ba5b8ce"],["categories/科学/手机/index.html","4bf2fe6445a7cd309e7f574c35085058"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c7aba8618b6ed217a04de6a8dda65cbf"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","573e388d817ce3926e003adede81347c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","9b5fdab2d8f99f8357a4d000035ff8f1"],["movies/index.html","d651d68fc410c80fb670fcd96ee2980c"],["music/index.html","5c4ea7c2e963c06ff374488bfc2b683d"],["page/2/index.html","3480a64394df52c36c75020895ec64a8"],["page/3/index.html","91a96c9e7ff40f33afa0719fb9b6851d"],["posts/20200115A1.html","90b1cd393d891740eb14fd0960f1950c"],["posts/20200116A1.html","971fe0c6f99680cbef9501d508502fba"],["posts/20200118A1.html","a72feab06fbafa88188668c58c07abb2"],["posts/20200119A1.html","f5f1f0d02a82f37af69d92718e53d98a"],["posts/20200119A2.html","26b719a726a78076f845104abf27a0eb"],["posts/20200123A1.html","d8e15efaba81c6b1db9f2db74f46f095"],["posts/20200312A1.html","7ac5568ad0a3f3d6783c2b3ecfc30191"],["posts/20200320A1.html","c084fd5b4e1ffa866bd8318d00e4fe09"],["posts/20200503A1.html","3de21a15f30ac5854d309eb08bddd4e0"],["posts/20200504A1.html","9fa60c8a2ef3d87bf611c88949279dde"],["posts/20200504A2.html","073a21c0127b4f5fce2147efd087b83e"],["posts/20200504A3.html","33c659701766f7fff24f561d0ae2c73f"],["posts/20200504A4.html","7d4769a092dde9050d5e3c0fc2e38e34"],["posts/20200504A5.html","92af86cccb5c6687cdfae27306880bc3"],["posts/20200504A6.html","8c77bc22eaf745b51f0ea5123b2ba25f"],["posts/20200504A7.html","f8513418a5657a6e35402afbc4468651"],["posts/20200504A8.html","db2ad8ece8158c898bb449247b61c76c"],["posts/20200505A1.html","2afa9f849d00a0f05505a2249ffecee7"],["posts/20200505A2.html","bc402961f0b867fe9e0b31eaebc05bad"],["posts/20200505A3.html","fd4597f64fb1b69056cb50fae92becc2"],["posts/20200507A1.html","5ab244eaffdf436a46b2cfde6e24f433"],["posts/20200509A1.html","31e01c764be7beacc21cef318db6fa65"],["posts/20200510A1.html","b4d5216f850dc409fb20590e946de4e9"],["posts/20200510A2.html","0f2891d8f42530789b1131ed50366edf"],["posts/20200512A1.html","b19b6c60fb89c749a528d7df074d36c8"],["posts/20200512A2.html","80a0b5c907c068a1d9b6b927bd2fbcc4"],["posts/20200513A1.html","b74527b0231d42efbd47553ce0761cca"],["tags/AGV/index.html","b3cad1f4c3cb861f36c075ec4762cef3"],["tags/Github/index.html","342d481239414a26ea133f75c8572e12"],["tags/Move/index.html","7a5ccdd8833917858288e376f8cbb9e9"],["tags/Plant-Simulation/index.html","03eb5cb66c9378e13cbb8fc41deb02ae"],["tags/Wordpress/index.html","74efb51c958b19a3a7cdca84288af4d9"],["tags/cad/index.html","576f510ef88327b951a1a6f7dea9f92c"],["tags/coding/index.html","5ce96eb8444bcb88d4fe94f0dc693d8f"],["tags/hexo/index.html","1972746b1147ce3c1b7b9e0a8d3e4ba3"],["tags/index.html","7903e27e936a194e269c83c5bb66a54d"],["tags/transferstation/index.html","c0f1d53451db23f432440f75f3c7865b"],["tags/ubuntu/index.html","136b589c9008f0f89c09b59997441849"],["tags/写给宝贝的话/index.html","b7446034188439aa722152b151c84d76"],["tags/原创/index.html","64e335ba4180dfc85dcb5ca51a268cb9"],["tags/学习/index.html","e66c8ae592a8741ca8f8ad5b5f18263f"],["tags/宝塔/index.html","df681a9620546a9fa8df235898d7fffa"],["tags/生产模式/index.html","cbfb7fc8ce9cefa15b80c4f9b7ef4fbb"],["tags/百度客户端/index.html","1290e970240338dc7aad300d14111a74"],["tags/科学/index.html","ca7bcf938d3f6c1c0aa4456b06c0f2d6"],["tags/统计/index.html","11de307861778221bd1c533ccfcb915a"]];
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







