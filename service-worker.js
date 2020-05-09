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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","9f19b5732c92ef085d29757d19af8b85"],["2020/03/12/妈妈写给宝贝的话/index.html","06feb46a80b12b52aeea6b1836fe1dc0"],["2020/03/20/磨人的小天使/index.html","d5420d0f1fa8785017de13dc7eb81ab2"],["2020/05/03/hello-world/index.html","de30671127f711cc5f266968811c913a"],["2020/05/04/AGV的用法/index.html","83e4dc286fe2abca390be74926c1b077"],["2020/05/04/Github创建文件夹/index.html","45e8933ae83a342077769e7e6556ac2d"],["2020/05/04/Move的用法/index.html","c808f9b352f98c5f21dc0f61f05b522c"],["2020/05/04/PlantSimulation常规操作/index.html","72dc27166c42a2a691454df7bc47285f"],["2020/05/04/TransferStation的用法/index.html","a373c3978d5ebe7f31c71a3bd80479cf"],["2020/05/04/Wordpress问题解决/index.html","01c2a882091288e40bf08ca3c6136bbd"],["2020/05/04/ubuntu安装配置hexo/index.html","6f3c0f4ffc94c4a4b90c99b9fe2cfad9"],["2020/05/04/无科学环境连接谷歌账户/index.html","297f56ab32bb576c91b7bd8e1fbbae7e"],["2020/05/05/Markdown的一些小技巧/index.html","d90207d0e1a552e53ac492552ce79f1a"],["2020/05/05/导入cad作为背景图/index.html","988e5cc20ebf323b8ce47336690cdb50"],["2020/05/05/推动或拉动的生产模式/index.html","21f73af97987c694a20e0865177b31d7"],["2020/05/07/在摊位下上网课的小女孩/index.html","c3d90c8a6c55784dda31f9f162c34cf1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","bd352d8ddb4d2ecbbd7b44d1978c1d02"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","e7798d0bd465130b2bf0f6c2a700ee95"],["archives/2020/03/index.html","681c757b413451f22fde1474cde14dc8"],["archives/2020/05/index.html","d44f521f40d9829bddf02c71b32003dd"],["archives/2020/05/page/2/index.html","bd3b51ba5bc1f0310b1fd3f12cafa685"],["archives/2020/index.html","8f4b29013d515ebd5456bcd60876059c"],["archives/2020/page/2/index.html","e9e2d028ceceb6b4b190500540b3e154"],["archives/index.html","f6e9e4c5a6b68275e9fdd88db40fc009"],["archives/page/2/index.html","712210a57a1d613da62cf80fca129a84"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","b70194a3d0d6d7c1c15c9844f7d02cad"],["categories/Code/index.html","fa0c287abf8a2f5c4e68f553de040cc2"],["categories/Plant-Simulation/SimTalk/index.html","e632a1bcacbd1ff0e3e17efa1bc6fc6c"],["categories/Plant-Simulation/index.html","96c48261d3dd4ff44e9f1fa9ea680b05"],["categories/Plant-Simulation/实体/index.html","5d57c2ab5a1b8d4f7ba49955b3a96664"],["categories/Plant-Simulation/常规操作/index.html","85f1e318873994781da482b34cd9c8df"],["categories/Plant-Simulation/模型/index.html","561117710ff9c6ec61206ca0b68076ea"],["categories/Plant-Simulation/背景/index.html","e099e4434d4f1c178267bc847c587492"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","c6e75c57ac6947ad4f8937d361f5a009"],["categories/博客/hexo/index.html","651295e5ede4524a7b043f7008d09306"],["categories/博客/index.html","8257534ecba4a9abcc146575d6c28b8c"],["categories/宝贝/BB/index.html","8a4af7c516a45f1d6a742fc8819fc122"],["categories/宝贝/MM/index.html","ff8e0d2137ceb9d5f32e5f0b5624a513"],["categories/宝贝/index.html","f283022b264331b84ce960edac2a7512"],["categories/科学/index.html","c1d50c622af9a7f902deb71e76ae8684"],["categories/科学/手机/index.html","85639e3129d4ba072958f590c2406ca7"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","1b7a72fc5ecad60271909e472c9236a0"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","c9e94cfe4de590ac547af212dba7b9a7"],["tags/AGV/index.html","1afd2d38b5078a0c1d76b58f4a191286"],["tags/Github/index.html","8aaea008aafe74201e94b470b2cd920b"],["tags/Move/index.html","5797d1781f6fad540b278251408ebc26"],["tags/Plant-Simulation/index.html","c64607cb34a243aab8600b0f25a663d6"],["tags/Wordpress/index.html","44d8da17e9998eac8e1d33f49c05d33c"],["tags/cad/index.html","449fa5e1ceb977aba606d727d39a5d41"],["tags/hexo/index.html","31e723c6cc7ef634d64423617753415a"],["tags/index.html","882c2caa45c16efbc95945bb93aaffca"],["tags/transferstation/index.html","89891a1c32b5144c8ee3e96f18a5149d"],["tags/写给宝贝的话/index.html","9bad5082cc0a0f5a32ed550eda6a7bca"],["tags/原创/index.html","ccfd58131cc90d84205ea329bf11ce82"],["tags/学习/index.html","570c3e99179ff6f4a76bf13f989bc523"],["tags/宝塔/index.html","84b6b4b968a84ded9582cd573315df36"],["tags/生产模式/index.html","0ea3f8379c197cf29a7ff24195b55db8"],["tags/科学/index.html","243b87abd688f32987a131dd8fceb801"]];
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







