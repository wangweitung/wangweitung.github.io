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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","9f19b5732c92ef085d29757d19af8b85"],["2020/03/12/妈妈写给宝贝的话/index.html","06feb46a80b12b52aeea6b1836fe1dc0"],["2020/03/20/磨人的小天使/index.html","d5420d0f1fa8785017de13dc7eb81ab2"],["2020/05/03/hello-world/index.html","de30671127f711cc5f266968811c913a"],["2020/05/04/AGV的用法/index.html","83e4dc286fe2abca390be74926c1b077"],["2020/05/04/Github创建文件夹/index.html","45e8933ae83a342077769e7e6556ac2d"],["2020/05/04/Move的用法/index.html","c808f9b352f98c5f21dc0f61f05b522c"],["2020/05/04/PlantSimulation常规操作/index.html","72dc27166c42a2a691454df7bc47285f"],["2020/05/04/TransferStation的用法/index.html","a373c3978d5ebe7f31c71a3bd80479cf"],["2020/05/04/Wordpress问题解决/index.html","01c2a882091288e40bf08ca3c6136bbd"],["2020/05/04/ubuntu安装配置hexo/index.html","6f3c0f4ffc94c4a4b90c99b9fe2cfad9"],["2020/05/04/无科学环境连接谷歌账户/index.html","297f56ab32bb576c91b7bd8e1fbbae7e"],["2020/05/05/Markdown的一些小技巧/index.html","d90207d0e1a552e53ac492552ce79f1a"],["2020/05/05/导入cad作为背景图/index.html","988e5cc20ebf323b8ce47336690cdb50"],["2020/05/05/推动或拉动的生产模式/index.html","21f73af97987c694a20e0865177b31d7"],["2020/05/07/在摊位下上网课的小女孩/index.html","c3d90c8a6c55784dda31f9f162c34cf1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","bd352d8ddb4d2ecbbd7b44d1978c1d02"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","fb2d05a36afb8fd549c1fa3bb365f99f"],["archives/2020/03/index.html","2f2f48cad69db6ceb9d7b1c743c337a5"],["archives/2020/05/index.html","7ffa473f88fa8149b7749874eeb3b1c1"],["archives/2020/05/page/2/index.html","ce037e814074f1da73818728b8e4fb35"],["archives/2020/index.html","b70a6a5ecd893b077321bf5d6a918088"],["archives/2020/page/2/index.html","c6c697f8c7b9e819840468199b31957a"],["archives/index.html","5766daece818c060bda6a71c5af65513"],["archives/page/2/index.html","ced00badba996673fbf78c91a7390969"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","22fa0789eb29a6f991b974333c2e5230"],["categories/Code/index.html","e74a22b22ff8b3e0ef38f87f1989832e"],["categories/Plant-Simulation/SimTalk/index.html","1e9f07da084d5f6c1d96834b2ce72fdf"],["categories/Plant-Simulation/index.html","9b2629829eb50e490f62f2e46c313296"],["categories/Plant-Simulation/实体/index.html","352bdfb98273b6fd1620227128da0dde"],["categories/Plant-Simulation/常规操作/index.html","9f047bf1c704ca1449b91b805076637f"],["categories/Plant-Simulation/模型/index.html","4b9f043638831a4b18d166e05987a452"],["categories/Plant-Simulation/背景/index.html","2c9ae37f505a914d71213125901c83ea"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","494a4588f7a496f85cc72f2913ae6dec"],["categories/博客/hexo/index.html","1cb63b0a1c5b516512078be2adec7f1c"],["categories/博客/index.html","6c2e977d6947011e2815545f6345b2b0"],["categories/宝贝/BB/index.html","d918dce68b9eee8d591acf5c77906b16"],["categories/宝贝/MM/index.html","02b2cc0dca4f609df3d8ea8590464d19"],["categories/宝贝/index.html","90cd68fef3c886251a0050199c0a244e"],["categories/科学/index.html","f40646c2e189b639fd2d7b74b6d4cf55"],["categories/科学/手机/index.html","c503c102a7150f7ce6bb3637ea1f6bde"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f162e0facc006a8e8a6dcf39197a9d54"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","7276c8ede08c6795716461376419d9a0"],["tags/AGV/index.html","8345edeaef0c205e9ddd9874ab1afc4e"],["tags/Github/index.html","2c2a85954c81ec330e21ae7f17b8ff0e"],["tags/Move/index.html","28f472efd967fe50a35de32002b1099e"],["tags/Plant-Simulation/index.html","5c1d78281a4a1320376d924cb67e1ab9"],["tags/Wordpress/index.html","3a3bb9bce4aa75b5c5d2443119c8028d"],["tags/cad/index.html","06d48a6bf6726ef64baf6df45c5d93e8"],["tags/hexo/index.html","2f5b8890ed300c13b726fad540451074"],["tags/index.html","81d938193c76e179374a422fe31633b7"],["tags/transferstation/index.html","466f32d9ac9e9d1302cc81ef41c8a8d5"],["tags/写给宝贝的话/index.html","e02af952cadb5a93ef6b834ec01ca087"],["tags/原创/index.html","6f46ae0586dcd8e3a3dcbfc3c6e7f63e"],["tags/学习/index.html","a9cac0e5237818551f4ab4dbffac2664"],["tags/宝塔/index.html","3b31e22a8baff8d9690979b23f36d3c4"],["tags/生产模式/index.html","d29c2d012f3b07fe32f0ae7549f15379"],["tags/科学/index.html","fb9aefb0f766ab609c0f9f7de6d71bfb"]];
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







