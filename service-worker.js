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

var precacheConfig = [["about/index.html","a0af4f3b7be1bfcecc2414a29c409345"],["archives/2019/12/index.html","aaecd7f8d018b1985d90b45fa0eb3b82"],["archives/2019/index.html","3d07c6ce5a898cfde8481416ed4bd45f"],["archives/2020/01/index.html","3de9d12fe9125a38792c617a8555e65e"],["archives/2020/02/index.html","eee6476183af765a55db6346b43dca03"],["archives/2020/03/index.html","9a580599bc4dd031948f77a064f12255"],["archives/2020/05/index.html","e47fc79b72c1f09df7a045ed126863ae"],["archives/2020/05/page/2/index.html","61b4c150431787a49f4f8e2f2c43651a"],["archives/2020/05/page/3/index.html","0d1bf43306c650fc1aa6dd7d4a7ee789"],["archives/2020/index.html","90d095732dd228182e521ecc5807fe1a"],["archives/2020/page/2/index.html","ca6ef8bb9abc318a27e5bb411d1592a8"],["archives/2020/page/3/index.html","57188fa51e602564314128a0d3a085dc"],["archives/2020/page/4/index.html","c476723465b2ff2f7a6a0ca5ff54b10f"],["archives/index.html","b0727e555e6fb83a32f60ee1bcc8e603"],["archives/page/2/index.html","d38decb38f1ee9a80fcab451717809cd"],["archives/page/3/index.html","680e25c15fb30bb0110797efccecf111"],["archives/page/4/index.html","c7245f3e6cf72ec4d07572c1045ad60b"],["archives/page/5/index.html","c23cde58e2b4fa2750a8e1598ab9a1c7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","993251b531abcd279ee161f86a9a9d80"],["categories/Code/index.html","e0de285f21cd442155c67c48f1dc6aef"],["categories/Plant-Simulation/SimTalk/index.html","a4eb15fbfa153ac2be23cf9495c470f0"],["categories/Plant-Simulation/index.html","a9c4923556fb3d857c2567ec48540d85"],["categories/Plant-Simulation/实体/index.html","51fa68cf230796416e3ea7e94e454867"],["categories/Plant-Simulation/常用代码/index.html","b9e8d19f3ad5a65aeeffb0a6d8766a0c"],["categories/Plant-Simulation/常规操作/index.html","db9db4ed0730c0a6ba6db77a71760508"],["categories/Plant-Simulation/模型/index.html","55f0d590c5090259f64fb7316b523b70"],["categories/Plant-Simulation/背景/index.html","c94a6f298ad2e7ee66b60d12b9d1e050"],["categories/index.html","3d740509f6ecb2e5ccd3baf2e2057aa0"],["categories/nas/index.html","d99a600fe96f35f30a26d0562a3e4f29"],["categories/ubuntu/index.html","4b21c330bb84e908fe62498061e0b930"],["categories/ubuntu/ip/index.html","a34fbc229889b37a9ba9951219f14560"],["categories/ubuntu/下载/index.html","5065d0927b9253a7ef78f111cfe811bd"],["categories/ubuntu/命令/index.html","ff1536871959f66702ed91f6d3ef5439"],["categories/ubuntu/配置/index.html","6500dcb6f039e5883e56bf767918788f"],["categories/仿真/index.html","960b08e8f6fdecf54ecd7f090215806c"],["categories/博客/Wordpress/index.html","2141609fdb33c969834bb5f13e25b821"],["categories/博客/hexo/index.html","5696565b32f022929c04ee6211e44a42"],["categories/博客/index.html","18f6d9933e15b446d651b1faa1bf00ba"],["categories/博客/page/2/index.html","eddf3b324143d31ca39a10d482bf700e"],["categories/博客/typecho/index.html","315e6c738542198678e1a3e0f41e7afa"],["categories/博客/统计/index.html","84924299ce3b06f64aa747e549b396d9"],["categories/宝贝/BB/index.html","b3d31d565f0a07074a1a75b0b4717793"],["categories/宝贝/MM/index.html","10b9c033d525ee7ea9f5763415b946a8"],["categories/宝贝/index.html","7d650874ea0881bfdccb20beec2366e2"],["categories/思考/index.html","ffdbe2a419b38aaab6f8ee6ae1cfdeb9"],["categories/思考/职业规划/index.html","ba92f7e83b979fe4d3166389082f2d24"],["categories/科学/OpenWRT/index.html","f5685c32537534fd511ad6ee803f94f4"],["categories/科学/index.html","d54156fd3eeb852003c9ff49d1c6e8fd"],["categories/科学/手机/index.html","09a1d41ff1bedc5c16cfe8b04bbda21e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b8186d7873ebd0af430543ba3d7c4409"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","b2c8dda8480ed145a00d5a70942089ff"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b0831f98b227d02957368b9423dd8039"],["movies/index.html","03171826b0e9c00ae4b2f6cddfb376b9"],["music/index.html","1764958f3719f47fe7b6488da90496ec"],["page/2/index.html","83affa149a3188ce9aa712f1e2f1cc24"],["page/3/index.html","9f76aa40d3729ca253e1c7ca3eb25d0d"],["page/4/index.html","4c49fc33a7451de153d6e8ff89c8cea9"],["page/5/index.html","e9687a5590f84d0c85ecff5b0361ec27"],["posts/20191204A1.html","13077e8afef906acb04f821205fc3033"],["posts/20200115A1.html","b4ac0bd1e21f6dd2d2dc4d8873bd7428"],["posts/20200116A1.html","d10435ee6ab3b4754637af2af7ad2abe"],["posts/20200118A1.html","38adb03f3edd9d376682919153ce1ec2"],["posts/20200119A1.html","93bce66d0fce0a296646bd8e7e8d17b8"],["posts/20200119A2.html","0eaa152f0a519921291038cd143a85de"],["posts/20200123A1.html","51617b09ba5d0f9014127823433b23a5"],["posts/20200204A1.html","da22503a79e8a0554cf2754e0669f9ca"],["posts/20200312A1.html","5d9636fdb380d8ee7d66926cb1415e7f"],["posts/20200320A1.html","06246991a3a18bb49267d3383a956c74"],["posts/20200322A1.html","1c5a4aecd3fb0c21b8acc624bef5fa3b"],["posts/20200503A1.html","f8620c010d4c8616ce642ce847ea3d97"],["posts/20200504A1.html","7c10fbbd10fceec4a7eef99ec8da0d0a"],["posts/20200504A2.html","01af40922c51cd8defcf47be75f74858"],["posts/20200504A3.html","fd2934500b4884619e08f6992543a3f7"],["posts/20200504A4.html","02d8279eee719aefd4ac96f674b3dc2c"],["posts/20200504A5.html","fb609c6a32c744e2da38884969b7c28d"],["posts/20200504A6.html","a82c5aea6733413feede5aa334776704"],["posts/20200504A7.html","0796b104b88b3603c48fed5e00f2622f"],["posts/20200504A8.html","548408bce06b11aaa631ca9b2993c193"],["posts/20200505A1.html","8ee1a0b238804e8081b306cc6d8d8ae5"],["posts/20200505A2.html","7a43794d2c26c6536961db6024583420"],["posts/20200505A3.html","0699ddb3611b67406dbab5191f13853c"],["posts/20200507A1.html","98aac2fe4c74d85a39deeb2c9194bc69"],["posts/20200509A1.html","ef43b1911870f5e7fd3412d421b28555"],["posts/20200510A1.html","42f44ea5f24e4b02e45ccd2bd1c231b6"],["posts/20200510A2.html","1e90f7328dfb66aaf3af13ca54c9602a"],["posts/20200512A1.html","a2f64ba16cc79fcd5ca5991d56ebb019"],["posts/20200512A2.html","b54da9726d05ecc7eac2e3e6450b5fb7"],["posts/20200513A1.html","3e2961cf82cc29c7308bc1669192b0c9"],["posts/20200513A2.html","02b0af0cc43f4b63ab138a735256f1d2"],["posts/20200514A1.html","9c9de3cfb930a9157016f5e8995c62f7"],["posts/20200514A10.html","2056bd7c53aada2d30528b912e047e83"],["posts/20200514A2.html","672d3a406317a05b8fb68af1effb6567"],["posts/20200514A3.html","a087b277919829429a6c8d66b10f6798"],["posts/20200514A4.html","8c8cdc8681db39c53ff13192efc8e8ca"],["posts/20200514A5.html","9c08d276bba4f1450e148a6d09aa7971"],["posts/20200514A6.html","634ee5d4d2bf843dc54dd035b2ac2a03"],["posts/20200514A7.html","59e883a01488f59679262a3d44a69a91"],["posts/20200514A8.html","ba5d0bbb245105795e6b6f5ed827e5ba"],["posts/20200514A9.html","acac0baf4d2609e9ef195c439b6b97e1"],["tags/AGV/index.html","45c245759efc59e14ba01e70190cdfac"],["tags/Github/index.html","3da9fc67faedb0dcc6cdfe1054a01ac3"],["tags/Move/index.html","bab93726773d7a6c94c5a570235f04c2"],["tags/OpenWRT/index.html","6c125b415e6675431739d881512e946b"],["tags/Plant-Simulation/index.html","07cebd6a78e82a90b4fdd9f70b32ffb3"],["tags/Wordpress/index.html","ab5f7417f99e2d904f20e8a7e1e54339"],["tags/cad/index.html","4cdde3aca77816e3a4fcd972102811c2"],["tags/coding/index.html","c7915afa47da98165318ab66870f8bb0"],["tags/h5ai/index.html","7d80cd5f0bc6fc4b19a26135cd300511"],["tags/hexo/index.html","57e0e1fe8fc89524ccf2797522c70add"],["tags/index.html","9843f8965eaec8b67ac8dbd711efefab"],["tags/nas/index.html","b753f37e84e0e541bd95ffed65c98ffc"],["tags/tpyecho/index.html","87f596b88a74825af24eb4ff960ae087"],["tags/transferstation/index.html","b7850c9ee5549866a439a45bcb36055e"],["tags/typecho/index.html","34109681c5a16087f6faf7ebedebbacf"],["tags/ubuntu/index.html","284e09485de36e967bc0e8dd9cf18c08"],["tags/仿真/index.html","db9b8a565ae7285089354255ee8112a5"],["tags/写给宝贝的话/index.html","2954593265b015858e2ff12d3e759047"],["tags/原创/index.html","70163b5aae039b872be0a011d20921dd"],["tags/学习/index.html","24e2cc9a15e7583fcdd9c1bd5f47fb20"],["tags/宝塔/index.html","62ed2670939d34bff5c88073f6b3da5d"],["tags/生产模式/index.html","8b2a93b1baedc104364252d9b8698a2b"],["tags/百度客户端/index.html","a5d99a4dd69fd3ce5e1d04e3f1589f78"],["tags/科学/index.html","3518e884b888ce5e4873c860ec58df25"],["tags/统计/index.html","9fa28e8fadd7d6626c0f14870f97611b"],["tags/编译/index.html","82cfe7c82364925847477c05ecaf0444"]];
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







