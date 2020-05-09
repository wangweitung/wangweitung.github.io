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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","22af3a4ab8a1b83e5651fe841b3a6fc8"],["2020/03/12/妈妈写给宝贝的话/index.html","ef2a9fee74914a27ebe4b2030ae81ea0"],["2020/03/20/磨人的小天使/index.html","b9f97c139b8dc8ed569d54c248a2335f"],["2020/05/03/hello-world/index.html","6839fb5fc1a01b5ce61957c3110f8924"],["2020/05/04/AGV的用法/index.html","0f8b1fef6414e23aa1d9e0d0564aa1fd"],["2020/05/04/Github创建文件夹/index.html","5474f760a9bcfcd06ba02d0036bde191"],["2020/05/04/Move的用法/index.html","feaf5ed5deced67979e395fa569e94fa"],["2020/05/04/PlantSimulation常规操作/index.html","899f2779c560aa988e6e8628de6ad735"],["2020/05/04/TransferStation的用法/index.html","c169091a1e89f30c2875db07f7d405ca"],["2020/05/04/Wordpress问题解决/index.html","e015366e38f798221aee0e851b820047"],["2020/05/04/ubuntu安装配置hexo/index.html","31fb8f79efc3d61b055816d19ccc26c1"],["2020/05/04/无科学环境连接谷歌账户/index.html","5943e70aa645565ab0361c9b0d100997"],["2020/05/05/Markdown的一些小技巧/index.html","9c7bd60d42aa28e4c8915096cc83f336"],["2020/05/05/导入cad作为背景图/index.html","ce2a28e6ff715d775d6a1c7779be550a"],["2020/05/05/推动或拉动的生产模式/index.html","5e5f5b1fbd14158a7130dfef52ba2d2f"],["2020/05/07/在摊位下上网课的小女孩/index.html","adc35ed162e3b75808857a75a2df9dea"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","e69e43bfb272b9c31a65b258e1238762"],["2020/05/10/ubuntu安装百度客户端/index.html","d791cd9536f9e23d41d862f4d67a199f"],["about/index.html","1cde52f80bfb46b9c91e6dcac9fdb9b9"],["archives/2020/01/index.html","b44a37a2f3a89be96807a1fb310c1692"],["archives/2020/03/index.html","4a8cafdf22cc11378fc86ed32b2ca0cd"],["archives/2020/05/index.html","1baef975419fe98c95ce203598a4a87e"],["archives/2020/05/page/2/index.html","a786426118768b57c1fbcccda846c9bc"],["archives/2020/index.html","f8756221f2d40ddfa1a198a898ab5c8b"],["archives/2020/page/2/index.html","20d57760b6b4527e0ca70a56aef38259"],["archives/index.html","cd8da8bf6f45dccfc836a48c96ce8db1"],["archives/page/2/index.html","92b66119b2860a811eff3e2132bb995f"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","56f65b9b125bbfb6a32bfc46e34004d9"],["categories/Code/index.html","9851059fafe98bd077946583c6f0fde8"],["categories/Plant-Simulation/SimTalk/index.html","8c77f419e265d7328df4038dd247f2b3"],["categories/Plant-Simulation/index.html","1f16987f07bda125f845622daac8fc13"],["categories/Plant-Simulation/实体/index.html","96b0711e76869053ef36f5cd54f1a39d"],["categories/Plant-Simulation/常规操作/index.html","85c910d1290e6d6eafcf7f615ebac2c1"],["categories/Plant-Simulation/模型/index.html","567d4dceda882afc918f51984211fe1e"],["categories/Plant-Simulation/背景/index.html","0649bd7bc4f8a6bf60ea4ca68c1bb363"],["categories/index.html","c23a3890ea85a6867c50e2b8d36ca151"],["categories/ubuntu/index.html","ae455ad4d842af7dc91378ccbe7bfd09"],["categories/ubuntu/下载/index.html","31e1d4ff1baf5e338094336a47d537a5"],["categories/博客/Wordpress/index.html","a2b47bee82468ac43e9d94f71782999c"],["categories/博客/hexo/index.html","549727373d09cd8dab0a426bf0a61bfa"],["categories/博客/index.html","51b06d589f2c6293969fa98092ae25ed"],["categories/宝贝/BB/index.html","5d96a9c48ac451fae5ff1fe27d16584e"],["categories/宝贝/MM/index.html","729be7e0aa1089f30e053f8f04aaeb7f"],["categories/宝贝/index.html","3679eab88de3fd5759e012996c82fb70"],["categories/科学/index.html","16bf2fc8a7d379de45974079b2996994"],["categories/科学/手机/index.html","9a0d7893fa47092ea7814549c15a6a86"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","41e18480e6d0aff73fcbc7440fc0aec9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","288ba6966ea491d924702d5f86a8f8ec"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","96b757f9caec63bad37327451426f38e"],["link/index.html","4a41912c8028ec4a880e20cfc54a6444"],["movies/index.html","0a7459e6e4a50684236958a429da2275"],["music/index.html","f917942fc7f6b166c16c1770ac3d161c"],["page/2/index.html","17dacd9b1d0d735ceb32e8cfee0695a8"],["tags/AGV/index.html","6fb1dc27de8a27aee1b56bc22d258b20"],["tags/Github/index.html","451eb8b167ab7e164089611c2bb58608"],["tags/Move/index.html","25efab5d8f6e9b5d933d585d2a5aca44"],["tags/Plant-Simulation/index.html","8cff94ee1c6c1848fae32b8cd25132e1"],["tags/Ubuntu/index.html","439db4638bdb150004de435519fb482b"],["tags/Wordpress/index.html","a73322951d3e9c88f51d36c45f30919a"],["tags/cad/index.html","a72499e8be4e12dbef20ef436c0f6d8c"],["tags/hexo/index.html","38f7a403bbd92bf9cf89f4e871148420"],["tags/index.html","cfea805c74658500f68af7b4c5d73c09"],["tags/transferstation/index.html","0d51d0c61bea9318344e7cd5e11ade38"],["tags/写给宝贝的话/index.html","6b5ea61d9d25dfe3b872a2dd3f8cacb3"],["tags/原创/index.html","fe97efb6e57c976a23064138dfe9169a"],["tags/学习/index.html","b742917d0e21f50445f650b5cf408a35"],["tags/宝塔/index.html","65cfd8da24da9219c66d55679c66c3da"],["tags/生产模式/index.html","c95ce660c5f29b889e4f4a2a744b44aa"],["tags/百度客户端/index.html","d2ed2783f84dae4ff1c56587fe5d9740"],["tags/科学/index.html","6cb4fcaf9d9daa97f54253b5f33d3923"]];
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







