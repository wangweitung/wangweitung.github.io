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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","9f19b5732c92ef085d29757d19af8b85"],["2020/03/12/妈妈写给宝贝的话/index.html","06feb46a80b12b52aeea6b1836fe1dc0"],["2020/03/20/磨人的小天使/index.html","d5420d0f1fa8785017de13dc7eb81ab2"],["2020/05/03/hello-world/index.html","de30671127f711cc5f266968811c913a"],["2020/05/04/AGV的用法/index.html","83e4dc286fe2abca390be74926c1b077"],["2020/05/04/Github创建文件夹/index.html","45e8933ae83a342077769e7e6556ac2d"],["2020/05/04/Move的用法/index.html","c808f9b352f98c5f21dc0f61f05b522c"],["2020/05/04/PlantSimulation常规操作/index.html","72dc27166c42a2a691454df7bc47285f"],["2020/05/04/TransferStation的用法/index.html","a373c3978d5ebe7f31c71a3bd80479cf"],["2020/05/04/Wordpress问题解决/index.html","01c2a882091288e40bf08ca3c6136bbd"],["2020/05/04/ubuntu安装配置hexo/index.html","6f3c0f4ffc94c4a4b90c99b9fe2cfad9"],["2020/05/04/无科学环境连接谷歌账户/index.html","297f56ab32bb576c91b7bd8e1fbbae7e"],["2020/05/05/Markdown的一些小技巧/index.html","d90207d0e1a552e53ac492552ce79f1a"],["2020/05/05/导入cad作为背景图/index.html","988e5cc20ebf323b8ce47336690cdb50"],["2020/05/05/推动或拉动的生产模式/index.html","21f73af97987c694a20e0865177b31d7"],["2020/05/07/在摊位下上网课的小女孩/index.html","c3d90c8a6c55784dda31f9f162c34cf1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","bd352d8ddb4d2ecbbd7b44d1978c1d02"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","b22ff75135033e6fdd2c6cb73c391b54"],["archives/2020/03/index.html","9ce250712bbdfe7cebd80b16a20bb130"],["archives/2020/05/index.html","9a5919ab117c8e315c356421d905e914"],["archives/2020/05/page/2/index.html","0df37a24748330faa50cd61719e5c2bb"],["archives/2020/index.html","0eb5b722305f480d484f01072734e712"],["archives/2020/page/2/index.html","98392d036775a49dbff5dba58183711b"],["archives/index.html","ec6e84780fa49222d4c8f15322cf1672"],["archives/page/2/index.html","cc02d302ae5d296b2c12d7e64c5782c3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","e43b0f28df8bf257bc744e3f412ac9e6"],["categories/Code/index.html","0f76cc78e7faf3b760f133374028b65c"],["categories/Plant-Simulation/SimTalk/index.html","9b8fc5f69533a70bf83cc45823615a90"],["categories/Plant-Simulation/index.html","1515b354a44adb48636c384af8e28441"],["categories/Plant-Simulation/实体/index.html","a7598fdec5fe7cac18eb8175550d1f29"],["categories/Plant-Simulation/常规操作/index.html","2406a00da010eb5effc22985cbfefe19"],["categories/Plant-Simulation/模型/index.html","6f8c5726ae3c9939e63e2e02fa5e6276"],["categories/Plant-Simulation/背景/index.html","3e6e9b127bc291f6f260fff51acef276"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","887f9ca72d2c5b51455a2c7c2118bc58"],["categories/博客/hexo/index.html","2e7f43472310e68c2d98372143e2cb18"],["categories/博客/index.html","5326d010d0f43bc36ab2adb2dd34c90d"],["categories/宝贝/BB/index.html","6d0481243c9d6621a569845e926aaca3"],["categories/宝贝/MM/index.html","439d31b2485f62fa89c129839d30c58f"],["categories/宝贝/index.html","66f31c18fcc40420007f14aefc986862"],["categories/科学/index.html","84e1e66661ef6888b5878f39e8857f8f"],["categories/科学/手机/index.html","7c12ab362a23bd375ec27afc29fa2261"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","677516b4afd2d2707cba6b505ef70103"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","80803347c1b3ab4616eb83faa21b0d8a"],["tags/AGV/index.html","6402182c8a4d5a99d291c1a0ebb73630"],["tags/Github/index.html","90936748091f64890833e0e155886f59"],["tags/Move/index.html","fa494c695f76327ff2bb50d6043e832c"],["tags/Plant-Simulation/index.html","e827790bd7edec090ad01825014cc852"],["tags/Wordpress/index.html","a4cb2c2c35728c12ce1c5c80bc33fdb4"],["tags/cad/index.html","5960af15945698fcb37ef4cdfbc58dcf"],["tags/hexo/index.html","afb9ec8c0d4a1b69c1c218faca8fa958"],["tags/index.html","284c60538a87716be59e01d48168cf3c"],["tags/transferstation/index.html","8e969771291a70570cdba7c7c9cf6625"],["tags/写给宝贝的话/index.html","739cd2856822b0b950478bb8d6255817"],["tags/原创/index.html","02c8fc7d30e2baf3a90a6f0ad37e8f5b"],["tags/学习/index.html","b1aef719638ea7a92c5cc8903286dcd0"],["tags/宝塔/index.html","b52eb20059b41510019b786b8b9c750c"],["tags/生产模式/index.html","b4db5553bcd50ebfbf4b128b5b2ffcc4"],["tags/科学/index.html","fa344361189f7a6e9fdecba950fbfbce"]];
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







