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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","bb47d102d08cfb1bc39efbee97803147"],["2020/03/12/妈妈写给宝贝的话/index.html","57c99ad6ae1bdf02e95a0c57af59a598"],["2020/03/20/磨人的小天使/index.html","b610eb34a7cb2fec3a6e00d91fddcb75"],["2020/05/03/hello-world/index.html","ff5f54498b78ac534e81924e14a02b6e"],["2020/05/04/AGV的用法/index.html","1f9de68361cb012bc29605edcdafeb06"],["2020/05/04/Github创建文件夹/index.html","4d053eaa82d17ccb7af6916c39cfd70f"],["2020/05/04/Move的用法/index.html","30e7912f98358be59d591a6a47aca446"],["2020/05/04/PlantSimulation常规操作/index.html","8f0fe515c87ef0082e6927aaec78fc1f"],["2020/05/04/TransferStation的用法/index.html","88f3f52a9a4834b21b270808ecc63616"],["2020/05/04/Wordpress问题解决/index.html","8e18de2fdc29a70f2edc8a67b94be744"],["2020/05/04/无科学环境连接谷歌账户/index.html","eb48b7e2610f37fd8345548422a3736a"],["2020/05/05/Markdown的一些小技巧/index.html","09b327c8405bf9a6602a8b6858520083"],["2020/05/05/导入cad作为背景图/index.html","c70deecc9b5ea48cceb62c94d3f7efa9"],["2020/05/05/推动或拉动的生产模式/index.html","d64e01454ad9f1a59865ff2c22626f11"],["about/index.html","5af5de4f03690e3627a8107e21a0d1ea"],["archives/2020/01/index.html","10d58e147642fdc6c859bce26ac949fb"],["archives/2020/03/index.html","0da0da892de7f14162da210aae639f98"],["archives/2020/05/index.html","dcef79c5fb4f58516b5032d503f58147"],["archives/2020/05/page/2/index.html","985edc05e89660c32c6b83670d36679f"],["archives/2020/index.html","c07d78b116175d2e3c53bb23fc322d5c"],["archives/2020/page/2/index.html","310c45f6b7fe2c2b9bcaff8fb9d80238"],["archives/index.html","001d6349dc532a395f56f8e7e3d0b458"],["archives/page/2/index.html","813d5855db495fe182f8740da3c44948"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","4c6cc556462b55afa776b6ceef7452f7"],["categories/Code/index.html","cfe61e13d54adac7e1c7c8436fc59f64"],["categories/Plant-Simulation/SimTalk/index.html","7fdab29ee249f747af001d067e9afa82"],["categories/Plant-Simulation/index.html","b88bc7366543b7b04c069db8671dc196"],["categories/Plant-Simulation/实体/index.html","e2e5eb04b61ce92cd05b1275dc14d9f7"],["categories/Plant-Simulation/常规操作/index.html","6bd35123d3d1284a6f7d183e251934c5"],["categories/Plant-Simulation/模型/index.html","d1e5d2dbdd49d229885416f402c7e0b4"],["categories/Plant-Simulation/背景/index.html","58608a06f81376e02305424116be3112"],["categories/index.html","b94c3244f9eab43bd7e2dea625e6ee78"],["categories/博客/Wordpress/index.html","9903dec89bfad4fa8bf30698dbc68188"],["categories/博客/hexo/index.html","3b760b856e48dbf1bb8eedb39d775518"],["categories/博客/index.html","242c5eea3e8769a02139fc9c9c200034"],["categories/宝贝/BB/index.html","338c5834799582bb282862747b746331"],["categories/宝贝/MM/index.html","6b052d08902a41fa66a2b8e9a377e77c"],["categories/宝贝/index.html","a75d4d6e5cf34441d7e1e04a00f9f292"],["categories/科学/index.html","509eeb43842b23be0eb4610f794cacad"],["categories/科学/手机/index.html","8190dc10e32949d9bded1f06229cfe46"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d7ad079fb88db373c12ed51d2f88ae5e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","709de800a82341176e63559359afd624"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","5391dc3c7d5d3c0cc0c8ee978c565516"],["link/index.html","374de52ca81022757a79591a2d3ba14d"],["movies/index.html","2f0bf19f298af272e161aa628a74ec2e"],["music/index.html","e44ce3b3169ea999861cd8d117ede552"],["page/2/index.html","700f5d7e109e8b277c7bb226566987f0"],["tags/AGV/index.html","ea71fe35194f1a01a2007420846b724e"],["tags/Github/index.html","d45553a32490e98c9504df350be58576"],["tags/Move/index.html","1694a25f264ab0051b84cac097c81ebf"],["tags/Plant-Simulation/index.html","001721f03855b29b2c4e0fbcd8d87727"],["tags/Wordpress/index.html","928b94a9b823f76ee7168f4135158760"],["tags/cad/index.html","c0671395c088779e642e1b920978204e"],["tags/hexo/index.html","2e0b398b58be93ba3e6acb9c8102ea7e"],["tags/index.html","9436a1c3c37faa75ea6cc08d3c1ed2c2"],["tags/transferstation/index.html","4156cb746aa6ff4c0d3632ca1f439bd7"],["tags/写给宝贝的话/index.html","14a3c9f6a8a66d45fb0c00037cc1a80c"],["tags/生产模式/index.html","83dea2a68ea2c075acc52b2136065f76"],["tags/科学/index.html","715ed294747752817d49a6c5004bbadb"]];
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







