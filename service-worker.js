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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","b1d3a6222fd880944ef9d18e0c52c652"],["2020/03/12/妈妈写给宝贝的话/index.html","a044ec9387119910b24ee5391257bd55"],["2020/03/20/磨人的小天使/index.html","dfd05e30c4f1d35a9e8c678fbd4e7c77"],["2020/05/03/hello-world/index.html","5bdfee96ccb92955565c365e0286cea1"],["2020/05/04/AGV的用法/index.html","0a5e45740d3f57e900db1b6368888348"],["2020/05/04/Github创建文件夹/index.html","e7035792c2889c9d7f47b3523fe87f50"],["2020/05/04/Move的用法/index.html","1e47567d16882ec9351221fde38b4a59"],["2020/05/04/PlantSimulation常规操作/index.html","798862dcaf6afc52dd52701da055e358"],["2020/05/04/TransferStation的用法/index.html","7ec0b5da4d97f9c9482732d1adf5af32"],["2020/05/04/Wordpress问题解决/index.html","0a91342a65bc182c717885242f4c4e03"],["2020/05/04/ubuntu安装配置hexo/index.html","a5f3da278a2cf8384d0640a902921dab"],["2020/05/04/无科学环境连接谷歌账户/index.html","b126deed407f34f89ed95c420fbb4d9d"],["2020/05/05/Markdown的一些小技巧/index.html","c11721f4976524177ca1c7e4d08d8293"],["2020/05/05/导入cad作为背景图/index.html","d49535a1819269d3465ef17a484384d4"],["2020/05/05/推动或拉动的生产模式/index.html","9c69925ffc42805cd55f90d36f14e2c2"],["2020/05/07/在摊位下上网课的小女孩/index.html","ee89f679c101d67368c2239a47283b21"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","715c7ef56a2fb86e02b9af6eef9fe293"],["about/index.html","9b4ea17246b1d14fd3128de8d5c6d1bf"],["archives/2020/01/index.html","34ec8d260d65feba5c04fae4f781f511"],["archives/2020/03/index.html","98129dbd14b824d885aea88b9de008b8"],["archives/2020/05/index.html","867bcf4e05b6f50d726621f7966a09ae"],["archives/2020/05/page/2/index.html","c2dff539303a7a8dc03da9849cb9ea10"],["archives/2020/index.html","608b6d0f97e20e7ecf7c2d4bb1dac6b0"],["archives/2020/page/2/index.html","39dfe697b72a1370410f94b4424e43fd"],["archives/index.html","ea317320a55c3d55fc01ca7401974862"],["archives/page/2/index.html","71ff173cbc168ed197c2633de9f97fa8"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","dc8934d6eb5ad711eb13e004f8c50c02"],["categories/Code/index.html","d61f01c03cb8b83ae5d33b856c44478d"],["categories/Plant-Simulation/SimTalk/index.html","c8c9ec5b9224b50b81125a602d61bf2f"],["categories/Plant-Simulation/index.html","64bcb61f7feddccd88d9d672cd3529d4"],["categories/Plant-Simulation/实体/index.html","aeb78c31149daac25103b83525bb8ac7"],["categories/Plant-Simulation/常规操作/index.html","2580dd6e71d1ce7eb1f1c89d34ad9f86"],["categories/Plant-Simulation/模型/index.html","7b0490f34918e57777f57837e6782952"],["categories/Plant-Simulation/背景/index.html","ae3471211c478c8df609f32d62e8f32f"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","3fc9c6b988d8f508684451bc1961814f"],["categories/博客/hexo/index.html","c20c08578b4e931c3158bfc2b529eb49"],["categories/博客/index.html","8035c94d5954b4ff87e85657a41fc91d"],["categories/宝贝/BB/index.html","a2f37ce72d3a3ac681515562cf960544"],["categories/宝贝/MM/index.html","88b49f5062d8fe3dc7630d5b57170752"],["categories/宝贝/index.html","e7ea34e71f4d0cbcd52f41797636e63f"],["categories/科学/index.html","9ca529659b46b902833b40b3b4f3a0ad"],["categories/科学/手机/index.html","cf81010bc14797ee17eaca39d6c87e9e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e4a08066a5991f2d78107b50c1bc6c71"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","e875f59f690527733f1b76e96ccb2297"],["tags/AGV/index.html","1791c96effd9384b79d779e64e2e6298"],["tags/Github/index.html","5f3500e523ec200b2ad5ac4e1ee24828"],["tags/Move/index.html","08967eadb9fb7f98caaba8375640b48e"],["tags/Plant-Simulation/index.html","9f61e8eb9b886f34249130dbd060469d"],["tags/Wordpress/index.html","94f03fd41da3d260b89b72211d60c487"],["tags/cad/index.html","ca16383f1125da144024ad4ed80d71cc"],["tags/hexo/index.html","dd341517812aa69bd41b85e7ca9975c9"],["tags/index.html","d6f98e007d6a856f9f4698976a543df9"],["tags/transferstation/index.html","d3832403760729539729fbf16a267b90"],["tags/写给宝贝的话/index.html","5fd6fcc5e31ac59daeac510d4f4d8eba"],["tags/原创/index.html","1701bfc155642ed3bae8b79325b79d6b"],["tags/学习/index.html","22c23cb0cfe4fab7e61e8dd263eacc8d"],["tags/宝塔/index.html","bd32e9033cbe19c5d2cf3d632b82388e"],["tags/生产模式/index.html","d4fcf291771d042f11fbcc113a98faa2"],["tags/科学/index.html","9527c768ed6a157cc8c4aa5e924caf8a"]];
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







