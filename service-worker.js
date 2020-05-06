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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","99c8567b3a3b84d828fa6dd8ba3c0481"],["2020/03/12/妈妈写给宝贝的话/index.html","85b4eb0ade743dd4453fbc9675525e25"],["2020/03/20/磨人的小天使/index.html","77a6336d11a552134e5f613bc19fafef"],["2020/05/03/hello-world/index.html","a6a69591c8fced1243bf31ed6b3d2ad5"],["2020/05/04/AGV的用法/index.html","1cad4d8f8c1074c2accdb548d651e7e2"],["2020/05/04/Github创建文件夹/index.html","f224e1b80e367135a3e0a19ceb6ddd3c"],["2020/05/04/Move的用法/index.html","c75cc1538437254ef5191b7c248b64fc"],["2020/05/04/PlantSimulation常规操作/index.html","1623e248d44c1c15644e0f0a67fe929b"],["2020/05/04/TransferStation的用法/index.html","2aee5f2ee87b46bfa2dfd9b7b777babe"],["2020/05/04/Wordpress问题解决/index.html","a17b5eb3d6409710363d7e40013b1265"],["2020/05/04/无科学环境连接谷歌账户/index.html","30a507d4b1d265e71dd37eb55679f64c"],["2020/05/05/Markdown的一些小技巧/index.html","f9544e2d3f99db6488fbb7479921fa1b"],["2020/05/05/导入cad作为背景图/index.html","f78eb59ca839351aadae4b49119483d3"],["2020/05/05/推动或拉动的生产模式/index.html","b8c819f4c4803edfc29e596e05c6f181"],["about/index.html","85f923280fa8fd00ede4596643ac54cf"],["archives/2020/01/index.html","2e0aad76b6b45092be11591b67bc7f21"],["archives/2020/03/index.html","c81685e16c23d9aa088252188cb1da75"],["archives/2020/05/index.html","a0e77d0e25433f286ed04b47ca3c0a33"],["archives/2020/05/page/2/index.html","dac5c9b03128a4839b919d6370e87ba7"],["archives/2020/index.html","a60cbcdb42a28cbdc23416e20722fb47"],["archives/2020/page/2/index.html","e740da579910506e60df54ec126ba8ff"],["archives/index.html","cd7251aa5bd44f335b289bc6e4786f96"],["archives/page/2/index.html","62a4d25c349ba8d0035ceb4e7c041c65"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","705ba9b15970ed7e3d98078ecf5c5306"],["categories/Code/index.html","1552007d6d15f727228574a8aed65580"],["categories/Plant-Simulation/SimTalk/index.html","71ee9c48feddf50be0659a50680d3bfe"],["categories/Plant-Simulation/index.html","949330764e39c82f43da0732e4418973"],["categories/Plant-Simulation/实体/index.html","6ece003fb2b19c1e62ed36c8cc9fb1ae"],["categories/Plant-Simulation/常规操作/index.html","bf24246d89179601dd61cde9f952e099"],["categories/Plant-Simulation/模型/index.html","1bb06c09d93573355e75c917e478c482"],["categories/Plant-Simulation/背景/index.html","2378c0e56d6f7ed6d2321ab09c9a1c02"],["categories/index.html","2b3bf3409c8869398b7e83b2cbbe2e91"],["categories/博客/Wordpress/index.html","583288cf68513f721f7cccba177c160e"],["categories/博客/hexo/index.html","e20d0e3d4169ca1dba83f2eab8809144"],["categories/博客/index.html","9fada88214f601cf4e6b548099c55f59"],["categories/宝贝/BB/index.html","64536dc3d18a04c6e3d167ba1e2c8528"],["categories/宝贝/MM/index.html","3fc9719fb43477a75831a432f36319ce"],["categories/宝贝/index.html","7ca9b04a9cf123800c8c6a8b771be9c0"],["categories/科学/index.html","ac341dea98b8fc4f50da4f36dbb586f9"],["categories/科学/手机/index.html","80a9297dfa58ef5ff1179499fda94ee0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","91bdd0e253c8b308f9305c527a313744"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","2838df01e1eb90d89bc2eb7279e99f20"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","437114ece347983053ab6ca3940f1646"],["link/index.html","1a71732687ea23962ddda119b9a60f44"],["movies/index.html","64bec70258d5e06c92f5e6ea75078b75"],["music/index.html","d681b0f155d154a6f46122b465cd0d62"],["page/2/index.html","8c42af19402ac9776fda3d816fadf368"],["tags/AGV/index.html","f114e1fa18d39133ac88913d96603757"],["tags/Github/index.html","2b3df3775024a1faff970783d9a543f0"],["tags/Move/index.html","9e74abaf04dcc0dff928c7c0ea14d2e4"],["tags/Plant-Simulation/index.html","5b84305ad83727ec2fab298731c60eb6"],["tags/Wordpress/index.html","73f2c1dfa59dfa912c5547f567d7b8dc"],["tags/cad/index.html","978fc17f26118625980e7ef9ba01a818"],["tags/hexo/index.html","b2db47d8aff1d7f063c729c15421deb1"],["tags/index.html","cada60bf753b4705f9fea78bc3eb6410"],["tags/transferstation/index.html","c9204df54a0250083b7b6d3ffbb53267"],["tags/写给宝贝的话/index.html","6a46e123c68e012cfc89ce3b55b22934"],["tags/生产模式/index.html","2c6ad28baa17e18c9528b0da07abfc20"],["tags/科学/index.html","08384393f1d7dc74556d4578ef0a0754"]];
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







