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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","95213a850126706bdd32302ac4394d9f"],["2020/03/12/妈妈写给宝贝的话/index.html","30d556181c93d055363d97a05b6ac9a4"],["2020/03/20/磨人的小天使/index.html","8ac45cb560946b8b18b026a4b68ad010"],["2020/05/03/hello-world/index.html","20f7325b2a161a026767bf2213ca7d73"],["2020/05/04/AGV的用法/index.html","02ea11d7af6c2231544faf58e3f1a425"],["2020/05/04/Github创建文件夹/index.html","28b08ef8abd059965d1fbc9f3072bc5a"],["2020/05/04/Move的用法/index.html","947eb91d8db8be32e186db8b95f86c6b"],["2020/05/04/PlantSimulation常规操作/index.html","41852ab69865b905fb21de5d99e1b90f"],["2020/05/04/TransferStation的用法/index.html","f637148793a9f87436a8016573afc003"],["2020/05/04/Wordpress问题解决/index.html","fd56cb85290cea7a68b52df10cc73b88"],["2020/05/04/ubuntu安装配置hexo/index.html","f193f59c8727e6b3da20d77d14fe9e4e"],["2020/05/04/无科学环境连接谷歌账户/index.html","074d1fae72ac6a693744db3aedcb0452"],["2020/05/05/Markdown的一些小技巧/index.html","d6494a0eb8538a66b02b335261654f23"],["2020/05/05/导入cad作为背景图/index.html","27404e379029c974d9fb310fbb8929cc"],["2020/05/05/推动或拉动的生产模式/index.html","14389f915d84cdd1b51aa95440f199df"],["2020/05/07/在摊位下上网课的小女孩/index.html","707636496dbcba9f8f5cea755d6927a2"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","9051743e0816575a674f3beccd7ed29a"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","1bc1fefbeb5106b5e5c620d6cb665f50"],["archives/2020/03/index.html","4349662c409c9694e640cb5f7ad634aa"],["archives/2020/05/index.html","a695c4c5ecd7cf6332a55a9f1736f220"],["archives/2020/05/page/2/index.html","00cc3aeebdf73b454475728189ecf037"],["archives/2020/index.html","20bc09f83c56c5383d8e65a7843096bc"],["archives/2020/page/2/index.html","35dc97660fe67a516bcbf2a9f661e034"],["archives/index.html","11194a1fd95e8c920d23009fb70212f3"],["archives/page/2/index.html","c23523ddd0d69e267d53dd8db9fa92b3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","8c52ddfbe9357eaaa8779c40e2d576f2"],["categories/Code/index.html","45d88e9eb2cff018c50bf7aae3b5bf16"],["categories/Plant-Simulation/SimTalk/index.html","995c598a7102626a2fc85cca1a1a35a2"],["categories/Plant-Simulation/index.html","aa201ab7f81e45d77de3e6329b42a97f"],["categories/Plant-Simulation/实体/index.html","bb5a19bffe6fe3c207ceb51516efeaa7"],["categories/Plant-Simulation/常规操作/index.html","08d3f2ee1df85cbc3d3c7e98e339c648"],["categories/Plant-Simulation/模型/index.html","be3e08fff22f5df17002d1db3a3e791f"],["categories/Plant-Simulation/背景/index.html","00d98bedf0699663adc6429a3d19dca9"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","3c5b4b505ff41d8931c34c09f81e02b6"],["categories/博客/hexo/index.html","313bfe55fa04af18cc4c9f387d6bbd7f"],["categories/博客/index.html","7f0563fb83c6b1342111a43ad4076adb"],["categories/宝贝/BB/index.html","f1d6f337649028a835b5f824f6b5829f"],["categories/宝贝/MM/index.html","fa9f2b56495429fff8aeb2c1a9103916"],["categories/宝贝/index.html","04c7edeec74926f65e7c5189bb21155d"],["categories/科学/index.html","a5557b0941cf02087b08c2381adfc96a"],["categories/科学/手机/index.html","a879dcb761ea51508b384331db8c6a97"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","b6fe0f93333e7dea9af352d43e7db7f8"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","e52fc0376df239a1167cbe2b8c99ea79"],["tags/AGV/index.html","d7b602bef40da46127f708859d0dfd57"],["tags/Github/index.html","e0ba524b17250ebdd36ff06bec119bb6"],["tags/Move/index.html","64ce2f34a2eba3493859fe070eb46734"],["tags/Plant-Simulation/index.html","43ab74f5e8ebb082f06bf05d80a8f7cc"],["tags/Wordpress/index.html","3ffa885ecfee9c5a7eb75454199f4dd2"],["tags/cad/index.html","ac4833c3c7d089a4568aba1253160c47"],["tags/hexo/index.html","f92a809855796f57963816e2220fec58"],["tags/index.html","3c5ca6d91c1383724d973ab94b15198f"],["tags/transferstation/index.html","935e35a208d57cdce568eb997f818b7f"],["tags/写给宝贝的话/index.html","a4f5d8d8809859927ad6fcc1953faebd"],["tags/原创/index.html","bcf582dc33049e766819db1486514da1"],["tags/学习/index.html","b3fcf5e6f6826fe7bae2066d0a4407af"],["tags/宝塔/index.html","baa8e7131cedc5e0a7bc8d2e655b7106"],["tags/生产模式/index.html","064b1e7bcccefa8120670173c96a8db8"],["tags/科学/index.html","7e4dce57e0eb78fe03ea330e08cc297b"]];
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







