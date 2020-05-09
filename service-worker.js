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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","95213a850126706bdd32302ac4394d9f"],["2020/03/12/妈妈写给宝贝的话/index.html","30d556181c93d055363d97a05b6ac9a4"],["2020/03/20/磨人的小天使/index.html","8ac45cb560946b8b18b026a4b68ad010"],["2020/05/03/hello-world/index.html","20f7325b2a161a026767bf2213ca7d73"],["2020/05/04/AGV的用法/index.html","02ea11d7af6c2231544faf58e3f1a425"],["2020/05/04/Github创建文件夹/index.html","28b08ef8abd059965d1fbc9f3072bc5a"],["2020/05/04/Move的用法/index.html","947eb91d8db8be32e186db8b95f86c6b"],["2020/05/04/PlantSimulation常规操作/index.html","41852ab69865b905fb21de5d99e1b90f"],["2020/05/04/TransferStation的用法/index.html","f637148793a9f87436a8016573afc003"],["2020/05/04/Wordpress问题解决/index.html","fd56cb85290cea7a68b52df10cc73b88"],["2020/05/04/ubuntu安装配置hexo/index.html","f193f59c8727e6b3da20d77d14fe9e4e"],["2020/05/04/无科学环境连接谷歌账户/index.html","074d1fae72ac6a693744db3aedcb0452"],["2020/05/05/Markdown的一些小技巧/index.html","d6494a0eb8538a66b02b335261654f23"],["2020/05/05/导入cad作为背景图/index.html","27404e379029c974d9fb310fbb8929cc"],["2020/05/05/推动或拉动的生产模式/index.html","14389f915d84cdd1b51aa95440f199df"],["2020/05/07/在摊位下上网课的小女孩/index.html","707636496dbcba9f8f5cea755d6927a2"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","9051743e0816575a674f3beccd7ed29a"],["about/index.html","9b4ea17246b1d14fd3128de8d5c6d1bf"],["archives/2020/01/index.html","2b10f7c7f7f22eef75608302bda97afb"],["archives/2020/03/index.html","802fea6045d5c5d6699eaac923ac6e8e"],["archives/2020/05/index.html","ef3549ac6623e4f4112e136f6334ac67"],["archives/2020/05/page/2/index.html","520556190d2848f198317115a4dfc238"],["archives/2020/index.html","cf27591076f7e11b23c3380cb1f786ec"],["archives/2020/page/2/index.html","1c65e823aeb995b209c0b9c51dada7a3"],["archives/index.html","dbd7645519ada56288e0642c0d709261"],["archives/page/2/index.html","eda9ed876c7c5b67b8b90966206e02df"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","d8d0abf0b36b8fccc9e8cc04e026fc4b"],["categories/Code/index.html","de018c4a92f2ca9d92ac3df5d5e8a17a"],["categories/Plant-Simulation/SimTalk/index.html","b3d4501010b28baf2f0621f4aa15fae9"],["categories/Plant-Simulation/index.html","2bc17532087076c73440d839383a43ce"],["categories/Plant-Simulation/实体/index.html","e6616676aca29d1115523dfe9216501c"],["categories/Plant-Simulation/常规操作/index.html","8e3721bfe86e4843a753e6bd88ca02c6"],["categories/Plant-Simulation/模型/index.html","68cdc431d799f3fdcab68e10b271d870"],["categories/Plant-Simulation/背景/index.html","1ccf6d7349069c1956c9b79329f2187e"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","a1f919e2477cbb3f725f8068da57cb89"],["categories/博客/hexo/index.html","24d5489ec75e276afc019f62caaabdf3"],["categories/博客/index.html","bf5a8d7483359b7365984842bc5dbaef"],["categories/宝贝/BB/index.html","944a4c13cd9b6a72e4717c8f831f2890"],["categories/宝贝/MM/index.html","2bd14d6b5ceb0597cd84d390fa02c767"],["categories/宝贝/index.html","46ec303de0101c500811dabdc313b2c9"],["categories/科学/index.html","ac615ddb69fc73d89e35d76920107eb1"],["categories/科学/手机/index.html","607647448781c5e49328bb8349c63b52"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","df5540aacc63a2ce7ad1ae3068736e4f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","592b57c930335fbd0a310f68bcb32c59"],["tags/AGV/index.html","5ceb8a5cbdb1e8829cd4f44bb5086107"],["tags/Github/index.html","4b30d9d9480b06f3e3482d601696f88e"],["tags/Move/index.html","139fe7a09d4798ac964e45513c26b6df"],["tags/Plant-Simulation/index.html","8e580c6f4143bc8a3d4fb6db5174fbf9"],["tags/Wordpress/index.html","89da9e0132d553568ba12e5aa9778384"],["tags/cad/index.html","385bbd5f0d4cba7c2b1fca41a8cda7bd"],["tags/hexo/index.html","17b74bf915abbcc0d691615375fb6774"],["tags/index.html","c38e095844a31c081c45e9b81e0af173"],["tags/transferstation/index.html","14d83cd1ce34db076ac6455ff90c3c7c"],["tags/写给宝贝的话/index.html","de34b237d6c77520454fb43b79c5562c"],["tags/原创/index.html","60ac2d066e2d0707a7b4adf6ff0b1b69"],["tags/学习/index.html","342a4ecefe9398bbceab69f7f0ef427a"],["tags/宝塔/index.html","7c78d4e4772a29831702b9d813652c57"],["tags/生产模式/index.html","cc1b96247e68ab398a693f0a951e22a6"],["tags/科学/index.html","de08804ea4cc7a030f6c2871ab5838d2"]];
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







