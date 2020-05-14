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

var precacheConfig = [["about/index.html","18c614b36e7491cee5e5a19baccdda95"],["archives/2019/12/index.html","f0b9daea19bd307024fc52665e012299"],["archives/2019/index.html","1ca9e9188c9e1bfe500b35d3c5cee13c"],["archives/2020/01/index.html","980aca10eab344b6315efa35d84ec1c0"],["archives/2020/02/index.html","1efa89b0b30bbe7403a623ec7f505bb1"],["archives/2020/03/index.html","b2ba248476be92aa45eb23b2623c9c4a"],["archives/2020/05/index.html","adfeeefde0a1151590c24dffe9f049ce"],["archives/2020/05/page/2/index.html","22b0fbb2e92344ccffd8b004d32777c1"],["archives/2020/05/page/3/index.html","9326fe8da5c078a177669f7529192ddc"],["archives/2020/index.html","1aad009b5789a9ca4b64c64162412178"],["archives/2020/page/2/index.html","934c7784d499d68c412a73e543414134"],["archives/2020/page/3/index.html","31c2a9d7436b039c156659a0954f83d3"],["archives/2020/page/4/index.html","2285b8bd7d820aa5778188a0b18ce898"],["archives/index.html","5a5afb506dc077591b79d5fb25e01745"],["archives/page/2/index.html","21c28aa545ea8c00b5ce0b51f0ed9aba"],["archives/page/3/index.html","f84815f09d07879a858f59a97e6b487c"],["archives/page/4/index.html","c70d076171679652ce59578d3135acd0"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","483cb15fa65a02bbba0ee42ee116fefd"],["categories/Code/index.html","d1d452c7c15bea992a86c8849c13776a"],["categories/Plant-Simulation/SimTalk/index.html","3adc0d62a4cccab86d8f5df68034a3e9"],["categories/Plant-Simulation/index.html","83a81cdca081063f2117a2108c841088"],["categories/Plant-Simulation/实体/index.html","178f3abbe8801324237dc6910e4d4b6b"],["categories/Plant-Simulation/常用代码/index.html","e48521d234a83d9a28ce5e2c11c0addd"],["categories/Plant-Simulation/常规操作/index.html","231f6e2015338d73a482e3302f42d89d"],["categories/Plant-Simulation/模型/index.html","944483deae23e95e5627fda2fe808876"],["categories/Plant-Simulation/背景/index.html","ee14df321a461069c1e6562750c109e4"],["categories/index.html","4de612060d86e50582cffaf752d17017"],["categories/ubuntu/index.html","12d4affa20a0e6a77c7db098c58b0505"],["categories/ubuntu/ip/index.html","9e53e485f747de76615e37887b42f771"],["categories/ubuntu/下载/index.html","7a9f12029a14fb91a3fbd415f13d8d10"],["categories/ubuntu/命令/index.html","f1422a9fceecb8ecb6af6caad9bd056a"],["categories/ubuntu/配置/index.html","d4ab6e7722d8ab57af17eea6b9664587"],["categories/博客/Wordpress/index.html","96137e9a632ad2f7c17e648de04adc88"],["categories/博客/hexo/index.html","8cf4dafd9f2b481b3f079b987543b407"],["categories/博客/index.html","e53966a3df76a6cb22f5df206aec1896"],["categories/博客/统计/index.html","5e19e4b8ac40d81bc04113fc390dc856"],["categories/宝贝/BB/index.html","f2f27f678ef3735c133efd7647c1c5d1"],["categories/宝贝/MM/index.html","48ff1030926fe55cb0165e0e6a52168d"],["categories/宝贝/index.html","97abcd29ee2dbfd82b5a7b52eb787aad"],["categories/思考/index.html","57348efd7c036cdcb62e2fa2c1568003"],["categories/思考/职业规划/index.html","2db911a95d7fd812c7c569c03b7b87ea"],["categories/科学/OpenWRT/index.html","9694e289789880c7dd28ed0a39a3715c"],["categories/科学/index.html","ffc4589998fff6955bdd091e75984c80"],["categories/科学/手机/index.html","1ce8e74a24b1d4f7cf7b9ac99c6db327"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","2d9bf29f32428d20e98d7e435b1a8f99"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","864f4bb26495036a4fd54832fc995791"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","bbda73cee28ea765ec9de01e1adbed7a"],["movies/index.html","805973ade410bc14e0c9c8052457f53a"],["music/index.html","cb2951539f97bff030aef4050081fb86"],["page/2/index.html","cfc26085a05cb2f83d68dd00a79c8ce2"],["page/3/index.html","7a39d85cc3cc0f8a034f6dd0a9c91cb5"],["page/4/index.html","09f0e4205dfc3cdbe446f59bcfa904c2"],["posts/20191204A1.html","e3d32a8ef3ff323375031598af85de1e"],["posts/20200115A1.html","505d7e1882c23bdf6f1eb37c2326991e"],["posts/20200116A1.html","2edf988a574ac13c3facec500112d951"],["posts/20200118A1.html","4db1a125d9e1d36443645e51a3fa3b96"],["posts/20200119A1.html","f5a11602aef3d3e264d3c662c1d3cb94"],["posts/20200119A2.html","20e8a1cadbf939fe9bdaaee22e449418"],["posts/20200123A1.html","7e99d4eefcc0aed1bde4904a13977dc1"],["posts/20200204A1.html","975b626f74a058f249d6aa61858920fe"],["posts/20200312A1.html","3b5d48c4a8204ee5cf77294a0d1badf4"],["posts/20200320A1.html","0de640e0986e081f850a966f85de05ad"],["posts/20200322A1.html","f9d906a66c419bff1485b38280cce2d0"],["posts/20200503A1.html","610016f09330282266b050bf086ef36c"],["posts/20200504A1.html","071470d98e703a49649f974f700931a3"],["posts/20200504A2.html","a8208d6458e81a14d99aea1ab1de1561"],["posts/20200504A3.html","b3244f124ea7d99a846615953f89ee2d"],["posts/20200504A4.html","039f0d653d1d1b02d569a76de3275e04"],["posts/20200504A5.html","a1026b09fabc554d8a78b0ed7274b3d7"],["posts/20200504A6.html","db69f3c3ebc3b173097e1c55f35bbcd1"],["posts/20200504A7.html","49bf62a5f9fc931c8aebc5e656c8d962"],["posts/20200504A8.html","8e73340f5ff4456f5e3e4476ed2c2e4a"],["posts/20200505A1.html","663cfb3c4c8fe21530a3866a56df48da"],["posts/20200505A2.html","f12b0410e5f8b5bfd7117f01051e32fd"],["posts/20200505A3.html","7fd135203e8cb98c083db74a5607ffd2"],["posts/20200507A1.html","617e31da2e98669fd372b075b7742a6c"],["posts/20200509A1.html","dae9ab674dc84521c02aca5d1871f9d8"],["posts/20200510A1.html","aecefe16257321a7c9763320a151e61f"],["posts/20200510A2.html","bbb07a0953cf7c6561487c4b6783adb4"],["posts/20200512A1.html","06cc1a52baa6682139564fc3f7865bcc"],["posts/20200512A2.html","4f9cc81a43bd4646792eebe5d7647907"],["posts/20200513A1.html","c6fe5d7f59d2e3143924b3a83382bc51"],["posts/20200513A2.html","adebdc409f5cad7fb05307ed066f74dd"],["posts/20200514A1.html","e3ac14a1325eb809659afae8abb5e951"],["tags/AGV/index.html","256749091a7e49f3ea1df3bd192305f6"],["tags/Github/index.html","40dce9b63a90dced79a7246260b42d7a"],["tags/Move/index.html","62e0bcb41fa6b24991c438bdd44183d0"],["tags/OpenWRT/index.html","b6f8362f1f80e8a94ebd0d58e6865e86"],["tags/Plant-Simulation/index.html","2592f3d82965caa76658bc90625c20f5"],["tags/Wordpress/index.html","884af09604e5ed70e069cbb7b4e4e18e"],["tags/cad/index.html","9403aeeef8acee6ea68a7f1a1d11c3df"],["tags/coding/index.html","f8f5cd82f1d0c0df22fa51ed54f133c6"],["tags/hexo/index.html","15eab42272daff09f360b1b4ba744165"],["tags/index.html","69e9a76a1aaa8e5f86c36e6773d907ac"],["tags/transferstation/index.html","e4240e26ba2dc8eb45f3eca6dfe4aa2e"],["tags/ubuntu/index.html","ae75f8279f4a8910fdc01192944967b3"],["tags/写给宝贝的话/index.html","798f3d0752e3b4db8792919ea4ab8c58"],["tags/原创/index.html","aea9f60a0dbe878d25f43e2ba7b261c8"],["tags/学习/index.html","5f9d875185480ca58056314ba2c210be"],["tags/宝塔/index.html","d353b604240e0691e1da7f74441ede77"],["tags/生产模式/index.html","3062f180a3c2075c1f7ac374d607fe80"],["tags/百度客户端/index.html","6a8f196607ad26310d69ff08d6c93556"],["tags/科学/index.html","3cc458a991dbdfdcddf93185455493b0"],["tags/统计/index.html","dbf830a42ab11b6b83debe1330df570e"],["tags/编译/index.html","a9efd5cd92c7932bdd26d3f640988d8d"]];
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







