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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","9f19b5732c92ef085d29757d19af8b85"],["2020/03/12/妈妈写给宝贝的话/index.html","06feb46a80b12b52aeea6b1836fe1dc0"],["2020/03/20/磨人的小天使/index.html","d5420d0f1fa8785017de13dc7eb81ab2"],["2020/05/03/hello-world/index.html","de30671127f711cc5f266968811c913a"],["2020/05/04/AGV的用法/index.html","83e4dc286fe2abca390be74926c1b077"],["2020/05/04/Github创建文件夹/index.html","45e8933ae83a342077769e7e6556ac2d"],["2020/05/04/Move的用法/index.html","c808f9b352f98c5f21dc0f61f05b522c"],["2020/05/04/PlantSimulation常规操作/index.html","72dc27166c42a2a691454df7bc47285f"],["2020/05/04/TransferStation的用法/index.html","a373c3978d5ebe7f31c71a3bd80479cf"],["2020/05/04/Wordpress问题解决/index.html","01c2a882091288e40bf08ca3c6136bbd"],["2020/05/04/ubuntu安装配置hexo/index.html","6f3c0f4ffc94c4a4b90c99b9fe2cfad9"],["2020/05/04/无科学环境连接谷歌账户/index.html","297f56ab32bb576c91b7bd8e1fbbae7e"],["2020/05/05/Markdown的一些小技巧/index.html","d90207d0e1a552e53ac492552ce79f1a"],["2020/05/05/导入cad作为背景图/index.html","988e5cc20ebf323b8ce47336690cdb50"],["2020/05/05/推动或拉动的生产模式/index.html","21f73af97987c694a20e0865177b31d7"],["2020/05/07/在摊位下上网课的小女孩/index.html","c3d90c8a6c55784dda31f9f162c34cf1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","bd352d8ddb4d2ecbbd7b44d1978c1d02"],["about/index.html","ddbac602008ca7b0e2d1aea248b05515"],["archives/2020/01/index.html","a008d2631cb747bb031020b7086357c2"],["archives/2020/03/index.html","9db7b368c639b3e9535cda93d5aeb6b2"],["archives/2020/05/index.html","ff23c21b28324e18eec3f7054071f2bb"],["archives/2020/05/page/2/index.html","97b4ee4c871fbcff97a22657585d2428"],["archives/2020/index.html","8e47aab6280cb7b1cdc2fa232a91af38"],["archives/2020/page/2/index.html","770193aa2557e223aecbfa8e1e6c630e"],["archives/index.html","8305896a067a7d54dac0f228675aa453"],["archives/page/2/index.html","436090d116c39e4380bce55b0cc08a52"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","ea490303a3e549f2b212f29240104a3b"],["categories/Code/index.html","4c54bfa87cc253d69fefe19c0696acdd"],["categories/Plant-Simulation/SimTalk/index.html","b6bc13c46f49664760dd6822a3481d36"],["categories/Plant-Simulation/index.html","1c234469b3e032b08300d18cf9146868"],["categories/Plant-Simulation/实体/index.html","57436bf5f715017f3a63fe5aa44d23d9"],["categories/Plant-Simulation/常规操作/index.html","160e87ade89397e184c13939dcaf13c7"],["categories/Plant-Simulation/模型/index.html","67a3074e72c60ab73e25938b0166e712"],["categories/Plant-Simulation/背景/index.html","18df9d0e9048068872cb59b6539fb6d4"],["categories/index.html","a552cf540d0373c85930acd6d00d9a1d"],["categories/博客/Wordpress/index.html","da5ef3b46e5a9e52df5d336570ff10cb"],["categories/博客/hexo/index.html","0ed85f433e7b0b7bed51df1273ba8240"],["categories/博客/index.html","5e98c82063ecb2ae85293cfbe098ef4f"],["categories/宝贝/BB/index.html","36a3d0dbe6464cde954c2d79b4132f6e"],["categories/宝贝/MM/index.html","22b6d056c525694cacb4e8842356baed"],["categories/宝贝/index.html","22bbca824212b9c9932d7438157726f4"],["categories/科学/index.html","47453e7fa31023731c682c4b61a511c8"],["categories/科学/手机/index.html","0dc157e1af6795c6581cf71c7bf22ab5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","38d2d7b10f32e6acacc5828a69a3efd1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e700bb8f60ad202155d96f77ada170c2"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1a8167f37d8ef8d5b10f90f5c019badd"],["link/index.html","affb3e16f44ec5d2a02272890f2b5690"],["movies/index.html","f844ff4351f5ac6a3a8984f61b8c0b2e"],["music/index.html","67f894c8af68ea2af619a3f3ec0372ef"],["page/2/index.html","dc3ee3d641cd4eef6be6006d478723c0"],["tags/AGV/index.html","2e208401e37ffee99f41df48446dd442"],["tags/Github/index.html","e166d70d034020279fa3c2b2bb909b80"],["tags/Move/index.html","9d06d5739d816db0f727b2821a30f239"],["tags/Plant-Simulation/index.html","fdab4760802c10ec7a4821b48a35500a"],["tags/Wordpress/index.html","ba598142edd543f8240f336b354a33c4"],["tags/cad/index.html","015fca29081e37cc9eed45a8e07a3492"],["tags/hexo/index.html","be2bf4d17cc568666960513def12e333"],["tags/index.html","37714d8f0155b74c457ebc96502ff891"],["tags/transferstation/index.html","2836bc5f588737a4db97be6e9cc54dab"],["tags/写给宝贝的话/index.html","f2280d58743e3176cb573349360c6cd3"],["tags/原创/index.html","7132cdd46e0dd491e097d145814559af"],["tags/学习/index.html","f2b81139979a998396fbe8e78c444222"],["tags/宝塔/index.html","792c5083366f8cd50aa33a9d4ff543b9"],["tags/生产模式/index.html","22cf4012d382f29a93cc50bc61b10d39"],["tags/科学/index.html","afdea529cd7bb308f7cd3d9f8fe6d70b"]];
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







