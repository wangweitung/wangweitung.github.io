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

var precacheConfig = [["about/index.html","b638439520db6315594e033ad1f2413a"],["archives/2019/12/index.html","471efe9f468811a08e683566bb842b42"],["archives/2019/index.html","046a1b2d904f417dc318b327e49e4f54"],["archives/2020/01/index.html","232ea17b19a411729da14b89c074cba3"],["archives/2020/02/index.html","a65b64f1ab452cc0f7ede580a32ffbb1"],["archives/2020/03/index.html","846bbe46dfda4d785024ca3474278008"],["archives/2020/05/index.html","8cdfbee6ccd1573223dfd19ae72289ff"],["archives/2020/05/page/2/index.html","941ca7483ff26cad23c25ccb0d1acfa8"],["archives/2020/index.html","a164363a04952a652697c1553e9a5412"],["archives/2020/page/2/index.html","a833335ec0fef1abd33976fd7e4eab0b"],["archives/2020/page/3/index.html","b460ef72d091eb48d5dba119887adaa9"],["archives/index.html","1712b5b5d26bce9bcd97b59222ba8e1f"],["archives/page/2/index.html","c4c9edd5467be1f359d860dc0ff847d6"],["archives/page/3/index.html","da9db2999fb6fe361e66f766115eb973"],["archives/page/4/index.html","28fcc203a700e4277cca9f5c003e1d18"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","88b30ca1675a06d2dd871f339be7b992"],["categories/Code/index.html","cb8a32043de66854ed65b5626a64b672"],["categories/OpenWRT/index.html","f1b60e67d59285fc12905eb27afb9d99"],["categories/Plant-Simulation/SimTalk/index.html","330556d19e3270c903252f8d7c6772b0"],["categories/Plant-Simulation/index.html","1d9a1b3c17cac448dd58ef22892a8265"],["categories/Plant-Simulation/实体/index.html","43edf9637592e8313ad2e4d7e71d6da3"],["categories/Plant-Simulation/常用代码/index.html","2e6dd6e60cd63d7e52431c80d792fca2"],["categories/Plant-Simulation/常规操作/index.html","21a3c4597e69122355ebc796fb0b2bce"],["categories/Plant-Simulation/模型/index.html","90cb9e42d7a288e458ee4dbc8eb60850"],["categories/Plant-Simulation/背景/index.html","b4462edf7f7a9fbe789f68c4355081bd"],["categories/index.html","8e9620888c7e0d48ef025a7d87d6ed53"],["categories/ubuntu/index.html","2f58784cd7a0da74dfb18630fec8ea11"],["categories/ubuntu/ip/index.html","23e0b3cb994890016cb2d4c7344f837e"],["categories/ubuntu/下载/index.html","37fbdd8ad48d86b2d172885f6a56bf02"],["categories/ubuntu/命令/index.html","fa5ac22e712cabd1275694071ad9b0be"],["categories/ubuntu/配置/index.html","58543e81e40e4537369cb5de7b9b419f"],["categories/博客/Wordpress/index.html","baf27b890c3838d473f658995f695bf9"],["categories/博客/hexo/index.html","577211abc58b83bb8169e09dc0685fd5"],["categories/博客/index.html","605ecb2b4a5dc05a8482f06f5a68568a"],["categories/博客/统计/index.html","6bcfdbf2ce69eda17a6cc98311413e99"],["categories/宝贝/BB/index.html","f31e945b82ef94bf0a48aa15a7f4ef71"],["categories/宝贝/MM/index.html","4f0de26466ec4a35bbcf00efd636b441"],["categories/宝贝/index.html","e772f7c7ebe97976d67d7fd873a0bb17"],["categories/思考/index.html","5a2349922072309c4676ad2eebe0042d"],["categories/思考/职业规划/index.html","d798c153f9928c90396055fd33d06cc7"],["categories/科学/OpenWRT/index.html","c69c5c4026dd7891dbec42ed729c521b"],["categories/科学/index.html","e8c7b2d96aa1fc7dd51fd100ed2a8700"],["categories/科学/手机/index.html","11909fd6f541a6a3a7a351dbb141dded"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e8c65c5dae7d48a3733c0f60737d4b22"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","774324ce50473847485f467720c05f9d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","676a9e64e34ab825589caba10f0155e5"],["movies/index.html","80ce2f34dbeb08a988c3678c0e5359b2"],["music/index.html","c877e47dbd1973d69f96ac1d5924bd42"],["page/2/index.html","bfb362f0a236c7a873e81e6b5d75e09e"],["page/3/index.html","b5d95e681c134803f838a9eb9d5805f2"],["page/4/index.html","6ef26cfa6dfbda968fa008fb36e43a2e"],["posts/20191204A1.html","b1f231f1d73770f015aaac22da3482da"],["posts/20200115A1.html","246644d583905a45bbd2db0cff8b0fa9"],["posts/20200116A1.html","ba1e2153641b4ff3179c9c048884c88a"],["posts/20200118A1.html","def3630c0d68e8f4f6d1b56b0d4c238e"],["posts/20200119A1.html","531bcac9b6ec7e63b3c12392fd8db51e"],["posts/20200119A2.html","7ed84291cbdd7a9b9c2a643d4a23d891"],["posts/20200123A1.html","220838f39f7fbc3ffccd51115e3b0510"],["posts/20200204A1.html","07adebb97c9f74261ddb52365f38e4f6"],["posts/20200312A1.html","84b1f2a6f3381404d7813a1eb3de7130"],["posts/20200320A1.html","71414fd1dcdb225219206db5db564586"],["posts/20200322A1.html","5550b7d42d74ed46d90f9fa9b7836d47"],["posts/20200503A1.html","735009ed2766a77253ca500137661054"],["posts/20200504A1.html","1ded399a20df8af84ce442e55952c716"],["posts/20200504A2.html","282f04dd360edab6d67ca57d104940ee"],["posts/20200504A3.html","5e9aae3fe2c6609c70facedb7e6813b5"],["posts/20200504A4.html","95666f61be6982080439ab6ff25a6fa8"],["posts/20200504A5.html","cb82a2256263266d89a77112a4ab58a6"],["posts/20200504A6.html","538220f9c346099e3d63e05e54b257e3"],["posts/20200504A7.html","b357d3e67ae79f8a98d8d0d0c08f751f"],["posts/20200504A8.html","09081e3362923ed2c02f6dc8c812ca9b"],["posts/20200505A1.html","30456392bf209011ae2eeb5f40a81407"],["posts/20200505A2.html","4874aa1ade1871b13fc0b64ffa68e596"],["posts/20200505A3.html","1d7290f7dd416abf58980dab5bd07e1d"],["posts/20200507A1.html","5a1654486ffa336f2a7fb395661b8a9e"],["posts/20200509A1.html","94469076cd492d0316b59a5ce4242902"],["posts/20200510A1.html","74218c5bd54fa2fbeab2e46bea6f6efe"],["posts/20200510A2.html","03447568a538636a3779dbf7fb862118"],["posts/20200512A1.html","2fff360b21deef1689f41f18450066b1"],["posts/20200512A2.html","6326d954bbad76d1c876ddaa4a58adbb"],["posts/20200513A1.html","9e64a1a8198c26ee6e770de5119f22fa"],["posts/20200513A2.html","7b6f7f6bb0b90e0debcac84efec57fa7"],["tags/AGV/index.html","37492073eb3bfe4577758dc2180a11e8"],["tags/Github/index.html","e5bdb3b9fcb9d1af6819bdd3a1a55e9a"],["tags/Move/index.html","d2515e8ee1320b4ffd23ae267b56a68a"],["tags/OpenWRT/index.html","3c5a1033a6473a6d61e0257bbf5f1b22"],["tags/Plant-Simulation/index.html","8da02d14bef2b76fe57cf98f97b7a893"],["tags/Wordpress/index.html","f4ff4a980d61f79152ac3a9f72349413"],["tags/cad/index.html","27820439a2f0b8b1a89add14d7ce5ef8"],["tags/coding/index.html","6d57c53e0583eca391c0ae8cb3e950e6"],["tags/hexo/index.html","393cd754704a275d853a32c63c130254"],["tags/index.html","f8ffe21908b53757eba85f626cf1c8cc"],["tags/transferstation/index.html","057dd2816a6143d4c420b2f00e4703f4"],["tags/ubuntu/index.html","2f636b1a791413c6f21cd722c68e21aa"],["tags/写给宝贝的话/index.html","fae9e879ba3a64415548b5d8dc71617c"],["tags/原创/index.html","e519079754f579bc4cab16199171bcf3"],["tags/学习/index.html","eef79b5a45298402c69fe12fc24385bb"],["tags/宝塔/index.html","08cfb382cc5d8ba80757cbd915783aa9"],["tags/生产模式/index.html","ca0bdfeb2c2f8cb6dafbfb177ff9d63c"],["tags/百度客户端/index.html","193002a83dccb0f5320e69e6fca657f9"],["tags/科学/index.html","39b9dbf354d5d8f7eef93a9ebfa01288"],["tags/统计/index.html","2430e2adecf316e83670cc110cf2176f"],["tags/编译/index.html","9ea963d5691d58810efb7e660b248419"]];
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







