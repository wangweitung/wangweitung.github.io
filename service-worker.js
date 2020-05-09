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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","95213a850126706bdd32302ac4394d9f"],["2020/03/12/妈妈写给宝贝的话/index.html","30d556181c93d055363d97a05b6ac9a4"],["2020/03/20/磨人的小天使/index.html","8ac45cb560946b8b18b026a4b68ad010"],["2020/05/03/hello-world/index.html","20f7325b2a161a026767bf2213ca7d73"],["2020/05/04/AGV的用法/index.html","02ea11d7af6c2231544faf58e3f1a425"],["2020/05/04/Github创建文件夹/index.html","28b08ef8abd059965d1fbc9f3072bc5a"],["2020/05/04/Move的用法/index.html","947eb91d8db8be32e186db8b95f86c6b"],["2020/05/04/PlantSimulation常规操作/index.html","41852ab69865b905fb21de5d99e1b90f"],["2020/05/04/TransferStation的用法/index.html","f637148793a9f87436a8016573afc003"],["2020/05/04/Wordpress问题解决/index.html","fd56cb85290cea7a68b52df10cc73b88"],["2020/05/04/ubuntu安装配置hexo/index.html","f193f59c8727e6b3da20d77d14fe9e4e"],["2020/05/04/无科学环境连接谷歌账户/index.html","074d1fae72ac6a693744db3aedcb0452"],["2020/05/05/Markdown的一些小技巧/index.html","d6494a0eb8538a66b02b335261654f23"],["2020/05/05/导入cad作为背景图/index.html","27404e379029c974d9fb310fbb8929cc"],["2020/05/05/推动或拉动的生产模式/index.html","14389f915d84cdd1b51aa95440f199df"],["2020/05/07/在摊位下上网课的小女孩/index.html","707636496dbcba9f8f5cea755d6927a2"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","9051743e0816575a674f3beccd7ed29a"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","66632335d18cd55141ade9bacf18356b"],["archives/2020/03/index.html","6df3ac23d3b5ee1b23fa24b34645b3c0"],["archives/2020/05/index.html","fbceff45e0a827d6a9095a4fef295b01"],["archives/2020/05/page/2/index.html","26e83a05c00a2c698b197aaf022139bc"],["archives/2020/index.html","ef41ec0b5ec9fa5b257e4bf664a607c8"],["archives/2020/page/2/index.html","ef8f08f2bf363756125417ff8812ad12"],["archives/index.html","8415a71e692224a619feccedd8caabe6"],["archives/page/2/index.html","205fa0aa41e667838ac2e223a588151e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","5556bd3ca73e20a53bc29c7a9653cfd4"],["categories/Code/index.html","848809a81f4f8f8e5513034cfc6200d1"],["categories/Plant-Simulation/SimTalk/index.html","c2855861451949cd8d41798b63c5f947"],["categories/Plant-Simulation/index.html","e2fca239beef4a964613bd2c746a6288"],["categories/Plant-Simulation/实体/index.html","f15e673d766b4377abfe49134eb75596"],["categories/Plant-Simulation/常规操作/index.html","d711443c7d11a71c5b02f2d1222a835f"],["categories/Plant-Simulation/模型/index.html","cbad9a29d4c8abb89f5a01a53e8923c1"],["categories/Plant-Simulation/背景/index.html","0540cf0a0b4e5b94b3fe326dc87fa40f"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","fb4bdba7af0164434fbbd4692e58c197"],["categories/博客/hexo/index.html","0c7d8f673f228b095339e4c5ce84c59b"],["categories/博客/index.html","876ed1b3c77cb64015e62aa1da736ce8"],["categories/宝贝/BB/index.html","8dd47209173edb030c53dc31e1212748"],["categories/宝贝/MM/index.html","3134faf8dd92a0b3e82cb481d0e98e3f"],["categories/宝贝/index.html","f9491084943bc14ac40f6d1d5e4ed7b7"],["categories/科学/index.html","939e560b2bafebb449a3584462cc0e5c"],["categories/科学/手机/index.html","ab23f7e29a80a495f446e6ee88bea976"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4f5ac7d412b53ffd06e382359f1d89f3"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","17bbd55bb30574b3cd9a759768098936"],["tags/AGV/index.html","4d45af4680807bcd406e48b152d8ecd6"],["tags/Github/index.html","cd1150bdcaa0fb3f8066722d2de45992"],["tags/Move/index.html","d6ef97d6257b028141533a7eac10e56e"],["tags/Plant-Simulation/index.html","9eb895c35af456eafbc6a25cf03634ef"],["tags/Wordpress/index.html","3d84828355b4a4e091e53c2414511a49"],["tags/cad/index.html","7447f452c09c5c55fab6839eef54d877"],["tags/hexo/index.html","2617f2611010e112d3c743725d680005"],["tags/index.html","0e7b43aed13bec1271a69732d18d6994"],["tags/transferstation/index.html","3ad7026d5af00fed1e91d1a85b18b4c0"],["tags/写给宝贝的话/index.html","f266e4dbebf19744d529fbf79263e04d"],["tags/原创/index.html","e7ce1e4f6a33f7063b16f571b7670da2"],["tags/学习/index.html","3084f4199e1f4a226e3e068ee30fc91a"],["tags/宝塔/index.html","d505524809ce64e5d50eea823cf78c4a"],["tags/生产模式/index.html","0cf23f32993b3f570d75c0f7151f1ea9"],["tags/科学/index.html","7ca47d67e9772dc46a99cc6e43ac9b3d"]];
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







