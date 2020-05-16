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

var precacheConfig = [["about/index.html","90fa36e4ed0e0c065c652e7dca1152f1"],["archives/2019/12/index.html","ec00820318d0cc8267a7a6afa95148d7"],["archives/2019/index.html","92dd32f5dee6e67a3d91580c1a11c5dd"],["archives/2020/01/index.html","3afabb3192c0ecd3787776ca8ce3a39d"],["archives/2020/02/index.html","be50baf0353c9a1e50eae1dc387c0c2f"],["archives/2020/03/index.html","19a57dcd4a594d13c0a896ff929bd27f"],["archives/2020/05/index.html","b14d37e3f971b882f34a5e5e59e1c37c"],["archives/2020/05/page/2/index.html","511ed59242da9dbe55f7f3b31e04ee70"],["archives/2020/05/page/3/index.html","54c0e03be358f046a9ec23867b5fa91c"],["archives/2020/index.html","f1d97d50e380eceb701c3794c24c4782"],["archives/2020/page/2/index.html","725c6036029e5ce5e965f90c040e8102"],["archives/2020/page/3/index.html","5142ad24990a1b4cbef72e3f139e353d"],["archives/2020/page/4/index.html","fbb15d514c186f6baf815991f4a24a86"],["archives/index.html","58dd3a8c7dbcedab282752e0ee52316f"],["archives/page/2/index.html","eb07a3404817e00e888847db3b19ba62"],["archives/page/3/index.html","3baa2c3daa5d8035e1ee5ff33e61b824"],["archives/page/4/index.html","5b96ea63b228188cdb3fe5944cda3c55"],["archives/page/5/index.html","e358fab95cff7da537ceb62d0fc4e651"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","0f52fac2ca7a611d23ed0162bf8ebd29"],["categories/Code/index.html","07b941f9804f0c611ca6e1a18f65050f"],["categories/Plant-Simulation/SimTalk/index.html","a524ba65f3193ad143db068bc7ed559b"],["categories/Plant-Simulation/index.html","42607b063c5c964b3b233c2249314ad3"],["categories/Plant-Simulation/实体/index.html","05d61f2ddcd2713aec1189c7d5bb5bd7"],["categories/Plant-Simulation/常用代码/index.html","ac8a142ca1e9c43f3c4564654f074a62"],["categories/Plant-Simulation/常规操作/index.html","79816db473fd96e6fa62d2a72ef9b5b9"],["categories/Plant-Simulation/模型/index.html","e62a424d4e7463d535efb8e36f7df91a"],["categories/Plant-Simulation/背景/index.html","50e123a62eb644457b1b36ae136a82f4"],["categories/index.html","4b1003315ff5c4c7271e52590f8afe6a"],["categories/nas/index.html","ce91a43fba9f673d4c4b6a1d71c202d2"],["categories/ubuntu/index.html","ae5f71babe811dbd3d67cb410180525d"],["categories/ubuntu/ip/index.html","aacbe3a5a997d5a3799cf16dde483094"],["categories/ubuntu/下载/index.html","7bb63dfd6cb6c4a1af4621faad70cf58"],["categories/ubuntu/命令/index.html","5730856b1968cceb0b176744a5426699"],["categories/ubuntu/配置/index.html","c0466e4bebeae93f82ff56c3abe1929d"],["categories/博客/Wordpress/index.html","17d6d485307406b60d88bf19e196115f"],["categories/博客/hexo/index.html","e94cfa8650a27bdb545df405428b544d"],["categories/博客/index.html","99476bbda3c4b63e23cec711fe10d1ea"],["categories/博客/page/2/index.html","a12310b46c4a31a4991b9774e774a31b"],["categories/博客/typecho/index.html","f545f37f2de5246c471ce06403e9f807"],["categories/博客/统计/index.html","24f5ebbd0baaff46da68c592086a245a"],["categories/宝贝/BB/index.html","4fb3b394e592f38d50bf29c8822f7492"],["categories/宝贝/MM/index.html","b3f581a31715f99ff9e3d10c6518ea72"],["categories/宝贝/index.html","764f5a1db085296ccaba30e704c77002"],["categories/思考/index.html","a3a1c6ee02c5be05fdb2636e20b4357d"],["categories/思考/职业规划/index.html","5a9981a8d64f0f05c4a7f3d43028ab79"],["categories/科学/OpenWRT/index.html","654fc44243667ad14694cb372c682dce"],["categories/科学/index.html","370b1a1d692d25a3d1f78ee9c8cdfe3b"],["categories/科学/手机/index.html","8f8f9b01c9e31fc9dfdbc86c95214032"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c3001411e410420cb4920f4abf655455"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e29b7b5175aa35919bfc805614ebbce5"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","cf5b591b2638211231700d059c7cbd5f"],["movies/index.html","cf58342a1586200cdcfdc1d3cb183655"],["music/index.html","239d595d5724f776631b5cba25321fed"],["page/2/index.html","13b756ec5c8cad889662a498b1c39bc4"],["page/3/index.html","4f460635eb9052b4a287be05cfdd91b1"],["page/4/index.html","87559e955ab7f153987d8e7ad8d75970"],["page/5/index.html","69cd417fbb1bfe9166de95488419c939"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","445e9986a3737b49e600ac5c78befe82"],["posts/2020/05/04/00/05.html","284345c5b263e9491e0e71f86832c5f7"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","30d0cd11bf0d0183046e23291bf1d4aa"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","9653ede70f29d0415d85d4801abfe03b"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","3a8787a950452957d7d325fa869105c6"],["posts/2020/05/14/20/58.html","981e8807792c16ca5cbb5ae18529d5d2"],["posts/2020/05/14/21/58.html","bab657f3ba7cee973e3a5e474351ee9c"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","c6d425b7f27ddf502702235823f54039"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","5f82d2cd43306eb703c736584eab0961"],["tags/Github/index.html","9a28f6b7bdc400c79bbf6ed75c8da218"],["tags/Move/index.html","59c4313c25c98a2c56ee50ea1dcf3d71"],["tags/OpenWRT/index.html","3dadfcdec1bc84abaa2da7aa26f5c1d5"],["tags/Plant-Simulation/index.html","e81600ce1fcc6390f8fd423998da96b4"],["tags/Wordpress/index.html","4b52f9411373366402a169d7ede734d6"],["tags/cad/index.html","845a01041d41b3eb7b3a409328959be4"],["tags/coding/index.html","4e16ff8bf81a548643ae3eeed56ab22e"],["tags/h5ai/index.html","f77ad152ce90d5e8b56a703df6743e5c"],["tags/hexo/index.html","90466c48f64c688408743a6aa82f0141"],["tags/index.html","0fdf94df769c01adba99e031904e50b5"],["tags/nas/index.html","5c1a0dd6c5ba8783f06cc4031c9cff08"],["tags/tpyecho/index.html","c42870b86b760bba980372c6b15ad012"],["tags/transferstation/index.html","5cfa39dc8bff0551c6f9da45442f7498"],["tags/typecho/index.html","bf725b88c9373f059c5c510bcae2200c"],["tags/ubuntu/index.html","24148c6bf69dd45c2b8303ef86186e4c"],["tags/写给宝贝的话/index.html","fe16bf29d6e82c35c267735551e65366"],["tags/原创/index.html","9990b2d0c9728cf6460ac5a598584752"],["tags/学习/index.html","e2c66b6ba0b7d89adb0be99b4fd2db34"],["tags/宝塔/index.html","bfbe7db00cc01b28000112e724dce614"],["tags/生产模式/index.html","30cd68748fc6b518e59699cdc794a236"],["tags/百度客户端/index.html","4161bcce4e06cdd7e07d8f8ac0dfbc65"],["tags/科学/index.html","91f2897113c49843070b97e584155520"],["tags/统计/index.html","929773eb2877c6001aea9c590f3f8036"],["tags/编译/index.html","aa85b14545e0a51d67cb633f6bac1fd4"]];
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







