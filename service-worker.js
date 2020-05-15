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

var precacheConfig = [["about/index.html","cdc7f9426918aaccaeb3c50fa3bfe51f"],["archives/2019/12/index.html","4d76afb5bfb7a28676e42c1d08b12283"],["archives/2019/index.html","63376f7990203895a30b573cc410c6dc"],["archives/2020/01/index.html","d95e39dff27e58b36c1dba3fab356708"],["archives/2020/02/index.html","e1e61b506ada0428d4dbbaf03bc69e02"],["archives/2020/03/index.html","3d791b632ca68af401227f616c9e9df0"],["archives/2020/05/index.html","3e51de4e32a5907928c1d82842c35386"],["archives/2020/05/page/2/index.html","d3853c57bb42bc9dbdf6f9070c21a1a5"],["archives/2020/05/page/3/index.html","b9adc00b353fd006bc9f99be883b18ae"],["archives/2020/index.html","a6adbef9377653cdea7986f91040c130"],["archives/2020/page/2/index.html","a0d6f5505fdea2ea9c7ca3b7aebdde93"],["archives/2020/page/3/index.html","99bb46ea9301cc42c6ba74ec39792418"],["archives/2020/page/4/index.html","3700e39fa851644892ac2beab0c520de"],["archives/index.html","f89465f83c2f78d958c1b57d6efac10d"],["archives/page/2/index.html","9eabb9e1ce1a19b72d3c4a0ed778a33a"],["archives/page/3/index.html","52c5f000cf223e79adf25cc09463e9e8"],["archives/page/4/index.html","f9142b98fba15718f57d0806a92c7bde"],["archives/page/5/index.html","8a1b6bddda3deaab1a26a12a836e74cc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","e4885a7133e0c9b55db76ee506289993"],["categories/Code/index.html","0ccd0a1424a6549181c61cc22a3c123e"],["categories/Plant-Simulation/SimTalk/index.html","66ef0d771bba14e36135b395f1db720c"],["categories/Plant-Simulation/index.html","01a1ecc1fb94c34cd76b5dc02aeb2400"],["categories/Plant-Simulation/实体/index.html","a0bcc13853cfaeff112569dad99da376"],["categories/Plant-Simulation/常用代码/index.html","4fbf587a021e3d8961bfc67512646594"],["categories/Plant-Simulation/常规操作/index.html","b99fd1488142d8ffab9bb265e1ca4775"],["categories/Plant-Simulation/模型/index.html","2cab31cdb9a29a6b06d940de8e6d9c8c"],["categories/Plant-Simulation/背景/index.html","a927883bb2384d004c1eeed4ab593e89"],["categories/index.html","e4e831a951bdb89f2ef8b1b5f8ae39f2"],["categories/nas/index.html","91145e1549039dd72ea5c9f69a2dc621"],["categories/ubuntu/index.html","b5244d0d22596849d984c375fda84309"],["categories/ubuntu/ip/index.html","e8f5ad7d6615e426e6061be8c56e390a"],["categories/ubuntu/下载/index.html","a1028694d81c46a0f92c491891bffea0"],["categories/ubuntu/命令/index.html","fd6b692e0bda074c67521b17e416a0d3"],["categories/ubuntu/配置/index.html","0247f7b11f1c31f92f37593b392517ed"],["categories/仿真/index.html","af8fb0adf29431368b29d8c356151084"],["categories/博客/Wordpress/index.html","c6f889c4be435c6ad72d0438e71ea99e"],["categories/博客/hexo/index.html","d06b5ae4168fa6380c226c361b5c22e9"],["categories/博客/index.html","1a295495e3e1921b0c2b02e93ace6233"],["categories/博客/page/2/index.html","a8e54267f331383779fae1d6de8bcec1"],["categories/博客/typecho/index.html","619edaabed6a6d81528ad6d05439821a"],["categories/博客/统计/index.html","078fe9258407ab322e860a069f659a2f"],["categories/宝贝/BB/index.html","88c34133d2b550847e156091fd28d316"],["categories/宝贝/MM/index.html","c823d511e59ab9a2e93c0fbf3d581745"],["categories/宝贝/index.html","9632d3ce7eb8c2fbfa0f760fe1ac03bb"],["categories/思考/index.html","c089d906dcbe9e75d66f2675548d1493"],["categories/思考/职业规划/index.html","d629c6d340c9aa76f7ea8aa429f3c8c6"],["categories/科学/OpenWRT/index.html","acf04cae62a9d6f7e44dae51fec73adc"],["categories/科学/index.html","77fcf72d5f487ba1e3fd205cfc08130b"],["categories/科学/手机/index.html","eaf2303f3ab3c741402e185d0ded2197"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c940af99b125128b0516fe254dd319da"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","531473fa9671ea3c6444782e31b1e12f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","69c83576e271852dca501e0c44fd43d6"],["movies/index.html","9c81c87aaa278c2b8db09b9acba539ca"],["music/index.html","dcb6596d766cb39a695cc5b09ae74b12"],["page/2/index.html","010798e05cba26a1aa00b9eafc3d8a66"],["page/3/index.html","7d1aca43593dc0e757134889c300ceab"],["page/4/index.html","b15d89b4394582aef14e9d08e85ce8d3"],["page/5/index.html","95cd2b9c0870bd861ed6a9f8b1c141df"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","5bd797e5c8945efdbe208d8238fdbd45"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","e9d0750ea8bff1773b1240d66354ac45"],["tags/Github/index.html","67851c17b9a98bda10cbb24f36f9a652"],["tags/Move/index.html","280be3358d1faad2319e4c5db061d033"],["tags/OpenWRT/index.html","7772cb28c7601c3747e0f6ba6b62cea0"],["tags/Plant-Simulation/index.html","dd2f7a38c2dda2bec6cf305191d7116f"],["tags/Wordpress/index.html","ab49bd48055209ccbf4db8ec55131685"],["tags/cad/index.html","169c3e19811a27dbabcea68690f5fffe"],["tags/coding/index.html","66986ee57c3b0e0beeebf5f278c165cc"],["tags/h5ai/index.html","0100ca61c01a85091419a8f787f3126c"],["tags/hexo/index.html","b0528c0a45fdee4b49ff4e36f663c256"],["tags/index.html","2ed4d8c381cdc5434dfe6ee4c08c390a"],["tags/nas/index.html","eab5c1b70c9737e09bd52259e2756dd5"],["tags/tpyecho/index.html","02a6ad58de7dfb7d64404dc2051c8722"],["tags/transferstation/index.html","8b2c38af79c4034f65a7647dcd8c5580"],["tags/typecho/index.html","3b0ea1f4289579fffa0164a4a2f78a58"],["tags/ubuntu/index.html","6f592d999963e89fd900dcdde1eca7ad"],["tags/仿真/index.html","c3129adb0fc8599dc26d8144058889cc"],["tags/写给宝贝的话/index.html","cb2288ba7433bd45beeb24143b735247"],["tags/原创/index.html","567127c14df6b29011857449a4842252"],["tags/学习/index.html","d80a1c4a4c5d8ad39023ed2ce086f85a"],["tags/宝塔/index.html","a7baf6bf54735272bdfae31e654dd76a"],["tags/生产模式/index.html","453cc355ced3f41c1b4ce6b775f42203"],["tags/百度客户端/index.html","e15038eb76f8a0700994e6e1bd2f5b3f"],["tags/科学/index.html","66f5bd92b4034dde5f2b85849aafc4ff"],["tags/统计/index.html","5e55cb4a66d9d7fc4244d2a4c8c7f922"],["tags/编译/index.html","50c8578ece3cee77e701e527e7fd727b"]];
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







