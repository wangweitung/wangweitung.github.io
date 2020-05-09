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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","95213a850126706bdd32302ac4394d9f"],["2020/03/12/妈妈写给宝贝的话/index.html","30d556181c93d055363d97a05b6ac9a4"],["2020/03/20/磨人的小天使/index.html","8ac45cb560946b8b18b026a4b68ad010"],["2020/05/03/hello-world/index.html","20f7325b2a161a026767bf2213ca7d73"],["2020/05/04/AGV的用法/index.html","02ea11d7af6c2231544faf58e3f1a425"],["2020/05/04/Github创建文件夹/index.html","28b08ef8abd059965d1fbc9f3072bc5a"],["2020/05/04/Move的用法/index.html","947eb91d8db8be32e186db8b95f86c6b"],["2020/05/04/PlantSimulation常规操作/index.html","41852ab69865b905fb21de5d99e1b90f"],["2020/05/04/TransferStation的用法/index.html","f637148793a9f87436a8016573afc003"],["2020/05/04/Wordpress问题解决/index.html","fd56cb85290cea7a68b52df10cc73b88"],["2020/05/04/ubuntu安装配置hexo/index.html","f193f59c8727e6b3da20d77d14fe9e4e"],["2020/05/04/无科学环境连接谷歌账户/index.html","074d1fae72ac6a693744db3aedcb0452"],["2020/05/05/Markdown的一些小技巧/index.html","d6494a0eb8538a66b02b335261654f23"],["2020/05/05/导入cad作为背景图/index.html","27404e379029c974d9fb310fbb8929cc"],["2020/05/05/推动或拉动的生产模式/index.html","14389f915d84cdd1b51aa95440f199df"],["2020/05/07/在摊位下上网课的小女孩/index.html","707636496dbcba9f8f5cea755d6927a2"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","9051743e0816575a674f3beccd7ed29a"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","7ca9bf69f4ee82ecba5b07c31eb8cb31"],["archives/2020/03/index.html","42ea04a7099724f151d7b1d7cd377660"],["archives/2020/05/index.html","a64455d81fc296341656b968986cd5e3"],["archives/2020/05/page/2/index.html","439e473a6b1752a04f92262e8ecd1ef8"],["archives/2020/index.html","d20878a0e9d84048a6ca0fe3e8203d28"],["archives/2020/page/2/index.html","3f8aa65b2a8b526e394b5f54c0ae8325"],["archives/index.html","409d6854144fc360acedff605deb3a47"],["archives/page/2/index.html","1462326d837c71d73c2dd5d2cbf324ad"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","7316b81efe7e3d68e4b6da8c07c5ce62"],["categories/Code/index.html","3a399b9cee648f2f34c4e9a071e89449"],["categories/Plant-Simulation/SimTalk/index.html","ec0f30b16b5b5d725c5a1a107a3771a1"],["categories/Plant-Simulation/index.html","dae99598ce2a9aca307fcefcd9caa8c5"],["categories/Plant-Simulation/实体/index.html","64acd13493150a565f99924017f20e68"],["categories/Plant-Simulation/常规操作/index.html","f301a2b378cf0edbdaca5732f5591b43"],["categories/Plant-Simulation/模型/index.html","623be9fea1299c5ccaf4272783535148"],["categories/Plant-Simulation/背景/index.html","2ce67772853d489f74af3398367f024a"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","1be7fe55a426d40d114f4a49a507c8db"],["categories/博客/hexo/index.html","cb6d78ca991eb7caaed030f3c8e84973"],["categories/博客/index.html","6a08dc13b5b568897ba6ead5a25cca58"],["categories/宝贝/BB/index.html","fc07112b98b4f94babc82e5d2369a9d7"],["categories/宝贝/MM/index.html","9115fbfdad42b388cf09a82384608568"],["categories/宝贝/index.html","044dac324667e568b1073ce08bfbe6e4"],["categories/科学/index.html","4d9066402bf44240639c05289909edbc"],["categories/科学/手机/index.html","e98ac8481050d74980406acd7e28baa9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","55db6b6f742a1fae356d6d9dd08df6f5"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","c5c38196ca8cbd4ae68af2e9d22d8398"],["tags/AGV/index.html","86c95691d40d63a6df55c8a500f6fbe2"],["tags/Github/index.html","7833f7bbf6a4f2263a3948bf24448ab7"],["tags/Move/index.html","393aed97567d8c926a15503ec905678f"],["tags/Plant-Simulation/index.html","ab3d295dd56f5d45c3b20c2226d035b2"],["tags/Wordpress/index.html","054d2a625bfc8bd0fe501039107b2f4c"],["tags/cad/index.html","2ba36eb48046babd1d0d71a0347b0e9d"],["tags/hexo/index.html","70e0d0161db730d2ccdbba5acbfe39cf"],["tags/index.html","704a0c91b470c1f31e7f8619d24801a7"],["tags/transferstation/index.html","7dee28ecc8d7a167d1a3e6f51ec15d9f"],["tags/写给宝贝的话/index.html","e3b7441f63dcf0d8e2b51d6b6e8447c0"],["tags/原创/index.html","6229d6fc83ca3281663a0047d8e6c8a4"],["tags/学习/index.html","77e25193e7a2f6f83befe036abe01fc5"],["tags/宝塔/index.html","deb2756376e1d475b80d171b4e00cbfd"],["tags/生产模式/index.html","fd1c78f127d6ec16aab214820870713f"],["tags/科学/index.html","daf73901c31b8487ae1049af32a210f1"]];
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







