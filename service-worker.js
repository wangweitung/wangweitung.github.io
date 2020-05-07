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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","ba62d99413d6307bdc078ca33fcd4cab"],["2020/03/12/妈妈写给宝贝的话/index.html","b50b6b70fb26a3a06bee2930744bf207"],["2020/03/20/磨人的小天使/index.html","7bb8e49a111cbb61a81dd281993c0c5d"],["2020/05/03/hello-world/index.html","6ba44010a25db04d6b4eca95c1a8bc5a"],["2020/05/04/AGV的用法/index.html","998cbdbe21c46bccbcf21bdaa3b9dab1"],["2020/05/04/Github创建文件夹/index.html","7ef42ed98612b546fa858f1d4734d3bd"],["2020/05/04/Move的用法/index.html","29dffb5a202c6e60c2e66f59b7de0696"],["2020/05/04/PlantSimulation常规操作/index.html","4e2bcd53fa94bb14b7d5e0e4c83bea63"],["2020/05/04/TransferStation的用法/index.html","3681be81d7bec42502529d44625d4c80"],["2020/05/04/Wordpress问题解决/index.html","7dec0bae1d8d4e92c2fea2af9614fce8"],["2020/05/04/无科学环境连接谷歌账户/index.html","6780729142b382907f96c529f0cb96c4"],["2020/05/05/Markdown的一些小技巧/index.html","e76c9b1a022581dfe3e29fc77542973a"],["2020/05/05/导入cad作为背景图/index.html","77ef4014642fdacdd7116b4caddc5858"],["2020/05/05/推动或拉动的生产模式/index.html","1c2b4b14252cce2151bb14f83f2086c3"],["2020/05/07/在摊位下上网课的小女孩/index.html","36547343afbfc9197c046ff137e4299e"],["about/index.html","68d5979db601fb84ad7ecb998aadfae7"],["archives/2020/01/index.html","0f8da4bc86a9d30aca4b3329c474001e"],["archives/2020/03/index.html","e9da39d76910e74453f2cbc455be13f9"],["archives/2020/05/index.html","1e3267ea9b00efc1c64332cae1dff05e"],["archives/2020/05/page/2/index.html","893a8ad5854fbd9d57dcc314e0e49365"],["archives/2020/index.html","ad208b19b945a16da5eadb9d88fc4a02"],["archives/2020/page/2/index.html","11b9f79cb428d08a8108e6f4f3273ed9"],["archives/index.html","4663bcae6d3f2d9b3156724bbe55e3aa"],["archives/page/2/index.html","ade4385c03c4aebea5dcb384585744bc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","299b6b94813f85c859c4b45cff32d990"],["categories/Code/index.html","525706e80a17c5a29a95a275e354487b"],["categories/Plant-Simulation/SimTalk/index.html","ffa02031d0cb0dbb09c7d5b62733fae0"],["categories/Plant-Simulation/index.html","a33867f3b88d80540ab70905bc383003"],["categories/Plant-Simulation/实体/index.html","48bc567c5796aed72b3076a980f7d604"],["categories/Plant-Simulation/常规操作/index.html","0cc5d6b5ae23e129b8e599aeb4e0be55"],["categories/Plant-Simulation/模型/index.html","89ae899103c6679a04601f33b9a848cf"],["categories/Plant-Simulation/背景/index.html","e8e7d95565fade358b0679e8a995b6fe"],["categories/index.html","7d96aadaa290a9fb66bfd3801ab8a00c"],["categories/写给宝贝的话/BB/index.html","326ad3cd2a3c76a1b347e3738653b7c7"],["categories/写给宝贝的话/index.html","07ce997d5b05161198a604faa3661936"],["categories/博客/Wordpress/index.html","6c0c721fa805a33ba527043689d5eef2"],["categories/博客/hexo/index.html","3fcc8b9bc05d0eabaa1f6e144f630ea6"],["categories/博客/index.html","cc88648972367ca8ab19cc6f33956e11"],["categories/宝贝/BB/index.html","8c111008d07cb0a78fda751896c3a768"],["categories/宝贝/MM/index.html","339be90900eaf0be3afeec4fb9d7aea9"],["categories/宝贝/index.html","119a699562500a3f28e7905e5e5072d8"],["categories/科学/index.html","9d7e2e63fab1dac11fe0375f9b39e87e"],["categories/科学/手机/index.html","e574f8e1585abb15e4dd1aa48094c150"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","07f5c72e6ff139b1dfbc989706bd0051"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","cb744987ea9a82df7bfa71ae84a74406"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","d0fcbef4d7976913bdc6aeab329bccbc"],["link/index.html","7dc8e3712c43e085c83ac4dddeb73f1a"],["movies/index.html","0c04dd243e13ec6986b1cb45ad617fcf"],["music/index.html","5e564e3a61132f3a29ee1d3fc26d67a5"],["page/2/index.html","ffc479a4c4410dc8b8f46e7ed28dc5fe"],["tags/AGV/index.html","fbe1d498aed1084e49229b9ad0158a16"],["tags/Github/index.html","080fc4c6df396fa5c33bb4dfb233d937"],["tags/Move/index.html","f243443e527c6b002b9ba921c22f8640"],["tags/Plant-Simulation/index.html","2e0cd8843d40cb427838a10d2a30aec9"],["tags/Wordpress/index.html","bb78610f559a803354905d6a2d3b98b7"],["tags/cad/index.html","a6d0a30710aa0b4e70eb949ede2fa574"],["tags/hexo/index.html","d77e64856f4c00f4888cffdecc61c58f"],["tags/index.html","f153177e81e19926e669c297bd902c4e"],["tags/transferstation/index.html","8e67ec5af0aad8703510334f1429753d"],["tags/写给宝贝的话/index.html","d2f6e07eda9c9b66d31d88f4434e0a0b"],["tags/学习/index.html","e3a8e9fae467bf80d24eb47c97c51f3d"],["tags/生产模式/index.html","30525de3aef4c37bbfe457048fedffa7"],["tags/科学/index.html","b27c196bc9cca491f8010008d14dc711"]];
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







