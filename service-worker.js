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

var precacheConfig = [["about/index.html","c7ca0d196f0aebcbcb235da20e618012"],["archives/2019/12/index.html","d9945cde72d71bc97f2363cf22f59a8c"],["archives/2019/index.html","71c43349898285f89ac1b5679a3fde8e"],["archives/2020/01/index.html","af5bfb0e8d4fc818c6e8dec2054e9741"],["archives/2020/02/index.html","1923734e4d6f18cce743ef31fe09be4e"],["archives/2020/03/index.html","0c4ab9b1789ce55ea898e8175d269505"],["archives/2020/05/index.html","b22a468d31add4fb07e95e514e93489f"],["archives/2020/05/page/2/index.html","0289a5dc30d9a0b6e8d0bd344c86b583"],["archives/2020/05/page/3/index.html","444094bd0611eef60ba7231d0d45c219"],["archives/2020/index.html","7c4f345a3d9594c29a787f0ca94cbe1e"],["archives/2020/page/2/index.html","d917be1b4f4231743e0f8ac946dfd799"],["archives/2020/page/3/index.html","8453e5aa5c09e04fa108ed8a451b3469"],["archives/2020/page/4/index.html","d24bbf26b1efbdab7841a986e38bfee6"],["archives/index.html","092dab0f5ee1e510d59d6497b11cc4a2"],["archives/page/2/index.html","b4a3cde9e32b5cbf91d4d005af7d29a1"],["archives/page/3/index.html","a4589f46433fb1a9a3e4662002c16a3c"],["archives/page/4/index.html","912cf7b8890d9fe4b96721daaf31105f"],["archives/page/5/index.html","d87e9111c67e4b2a1a65ee6d11981cd7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","356781ec0b5ebe1f7a163848ee1031b7"],["categories/Code/index.html","04c29dce2e9377ca6891d417f3aa778f"],["categories/Plant-Simulation/SimTalk/index.html","d161f2a390a0cb99d1931217abd0c78f"],["categories/Plant-Simulation/index.html","f16321e2260d156e01d1b5eb3f50c238"],["categories/Plant-Simulation/实体/index.html","5ab2ec3ca14cac699958b5523ac86abc"],["categories/Plant-Simulation/常用代码/index.html","e1cd162a347007fce1c7d971214b4e63"],["categories/Plant-Simulation/常规操作/index.html","58ddbe5ef43ca2fda02cc9fed339836e"],["categories/Plant-Simulation/模型/index.html","48f3c2f1a1902f11908cf22f29cbce64"],["categories/Plant-Simulation/背景/index.html","02a971490bfad82e5f8868c1347c4229"],["categories/index.html","539092501f5a60b4c9640aba8edc1c7b"],["categories/nas/index.html","6ad6c644495beb9f6f0bbcacb06a6f18"],["categories/ubuntu/index.html","c19a5b0ef9c36f784920fcc8439c54b6"],["categories/ubuntu/ip/index.html","7e1ec4175907eb3dbbcd5980cecba0c0"],["categories/ubuntu/下载/index.html","9478a24abf48f126f086a06aa6782de4"],["categories/ubuntu/命令/index.html","5fa823f4509bff064f0bd6087b19c5aa"],["categories/ubuntu/配置/index.html","f06fcc03407c65bbe9408b2c0cb67e61"],["categories/仿真/index.html","ca2fbaf7fae1a8588e78c973d6074a34"],["categories/博客/Wordpress/index.html","1a0029b4e2728838ae75459bc6b7c20f"],["categories/博客/hexo/index.html","8795773d3eb23a901257551f2f18bed3"],["categories/博客/index.html","d7ea3ebf09ba437ea207c5c0096d1f8f"],["categories/博客/page/2/index.html","6c223b45393df51df8bf1c5851817641"],["categories/博客/typecho/index.html","dcbcb713bd66858f2e7db1ada6fbddca"],["categories/博客/统计/index.html","69a033b54110097ec1c51bb3e6b429e9"],["categories/宝贝/BB/index.html","51b695398bab72cebfa3011f3ff53316"],["categories/宝贝/MM/index.html","39944b0041c7d00be47dd488ded4066b"],["categories/宝贝/index.html","08fbfb6056f9e8da209b050298a23397"],["categories/思考/index.html","19bfaefb1a1feb8056cbbccbdd6070c7"],["categories/思考/职业规划/index.html","8f202acacd8b600e8b0b09412dfb8630"],["categories/科学/OpenWRT/index.html","be49479ce10df07dd6acfd546ec23c9a"],["categories/科学/index.html","6ac49f08157f31e9d36b9a48d9a147e1"],["categories/科学/手机/index.html","159aa27136935ae356a3a73175c786a9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","31c1413aed81f29cbe08319dc0374636"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","6909a0dbf04810ee3892b40d4c1be751"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d75aa29d5644c0f8bcf51c2a37262996"],["movies/index.html","52fe3982b488438ef35918977a51ac27"],["music/index.html","523c31688e83fc0c5aec7bbd6b166f56"],["page/2/index.html","2ee22d4a018c70426d34bfc8b1419cdd"],["page/3/index.html","f6763ab04d81b079cedf3f88b177ba28"],["page/4/index.html","656920493ea8cd3d0c1642e0feebcece"],["page/5/index.html","588e482a3594574ec7bad90d66660fa8"],["posts/20191204A1.html","13077e8afef906acb04f821205fc3033"],["posts/20200115A1.html","b4ac0bd1e21f6dd2d2dc4d8873bd7428"],["posts/20200116A1.html","d10435ee6ab3b4754637af2af7ad2abe"],["posts/20200118A1.html","38adb03f3edd9d376682919153ce1ec2"],["posts/20200119A1.html","93bce66d0fce0a296646bd8e7e8d17b8"],["posts/20200119A2.html","0eaa152f0a519921291038cd143a85de"],["posts/20200123A1.html","51617b09ba5d0f9014127823433b23a5"],["posts/20200204A1.html","da22503a79e8a0554cf2754e0669f9ca"],["posts/20200312A1.html","5d9636fdb380d8ee7d66926cb1415e7f"],["posts/20200320A1.html","06246991a3a18bb49267d3383a956c74"],["posts/20200322A1.html","1c5a4aecd3fb0c21b8acc624bef5fa3b"],["posts/20200503A1.html","f8620c010d4c8616ce642ce847ea3d97"],["posts/20200504A1.html","7c10fbbd10fceec4a7eef99ec8da0d0a"],["posts/20200504A2.html","01af40922c51cd8defcf47be75f74858"],["posts/20200504A3.html","fd2934500b4884619e08f6992543a3f7"],["posts/20200504A4.html","02d8279eee719aefd4ac96f674b3dc2c"],["posts/20200504A5.html","fb609c6a32c744e2da38884969b7c28d"],["posts/20200504A6.html","a82c5aea6733413feede5aa334776704"],["posts/20200504A7.html","0796b104b88b3603c48fed5e00f2622f"],["posts/20200504A8.html","548408bce06b11aaa631ca9b2993c193"],["posts/20200505A1.html","8ee1a0b238804e8081b306cc6d8d8ae5"],["posts/20200505A2.html","7a43794d2c26c6536961db6024583420"],["posts/20200505A3.html","0699ddb3611b67406dbab5191f13853c"],["posts/20200507A1.html","98aac2fe4c74d85a39deeb2c9194bc69"],["posts/20200509A1.html","ef43b1911870f5e7fd3412d421b28555"],["posts/20200510A1.html","42f44ea5f24e4b02e45ccd2bd1c231b6"],["posts/20200510A2.html","1e90f7328dfb66aaf3af13ca54c9602a"],["posts/20200512A1.html","a2f64ba16cc79fcd5ca5991d56ebb019"],["posts/20200512A2.html","b54da9726d05ecc7eac2e3e6450b5fb7"],["posts/20200513A1.html","3e2961cf82cc29c7308bc1669192b0c9"],["posts/20200513A2.html","02b0af0cc43f4b63ab138a735256f1d2"],["posts/20200514A1.html","9c9de3cfb930a9157016f5e8995c62f7"],["posts/20200514A10.html","71eafeaa86caa546904975d336efedd6"],["posts/20200514A2.html","672d3a406317a05b8fb68af1effb6567"],["posts/20200514A3.html","a087b277919829429a6c8d66b10f6798"],["posts/20200514A4.html","8c8cdc8681db39c53ff13192efc8e8ca"],["posts/20200514A5.html","9c08d276bba4f1450e148a6d09aa7971"],["posts/20200514A6.html","90e29abe8636658f45819acbe0c3a126"],["posts/20200514A7.html","59e883a01488f59679262a3d44a69a91"],["posts/20200514A8.html","ba5d0bbb245105795e6b6f5ed827e5ba"],["posts/20200514A9.html","f2ec782e4ced9a590e9304029bbdeb75"],["tags/AGV/index.html","d4159c5ea90715df4d97e1e78adb4238"],["tags/Github/index.html","a32c44d7b8c7b80d222b5e677e9f3bc6"],["tags/Move/index.html","940c24ba4f616dace5a6c9ef92d6fc95"],["tags/OpenWRT/index.html","f800df9f8197cc627ca1979c93c2a888"],["tags/Plant-Simulation/index.html","578491dbf8c03d783b812c0cc57d4fb5"],["tags/Wordpress/index.html","7138278fdbc8d7a2986afa52c42ad9ba"],["tags/cad/index.html","44d45d3e4705e0a57213bc17a3f58b4b"],["tags/coding/index.html","66dcab1b00339a87f4b8f0af87a95e8b"],["tags/h5ai/index.html","8d3c37e5c51d28209c1d0b83855ee0b8"],["tags/hexo/index.html","1c30085625c8425ae6587e896afb0359"],["tags/index.html","dccf2ce3d6bf183fa2ad693b768469b2"],["tags/nas/index.html","6bcea0c98c3e935704f96523af5d4e73"],["tags/tpyecho/index.html","17898ccbce0f9ae5ccf20f4353e6776f"],["tags/transferstation/index.html","54aabed90bc29e1b5877ed8bcf5d1230"],["tags/typecho/index.html","0ba5d8436a6a853725fa953c4cc43946"],["tags/ubuntu/index.html","508a1c2cbf140a8cc7dc6f6cfe011e2e"],["tags/仿真/index.html","ba6915f2575c565917e4ca5bc6c29e6e"],["tags/写给宝贝的话/index.html","20d03d0b4a06a0c09610d3ca0a64fb6b"],["tags/原创/index.html","883ef897b225c6dcbded0ae869348ea5"],["tags/学习/index.html","e5845aca1306c26e5adab500d87a22c8"],["tags/宝塔/index.html","8a8b0ed195c247540eac7a819769a991"],["tags/生产模式/index.html","500b973b06b3bfa2ea34a97f8df4895b"],["tags/百度客户端/index.html","df49c083c20c96ca7ada4decdff0b88c"],["tags/科学/index.html","43c8b0620ff08f219f41a55a698825f0"],["tags/统计/index.html","90c9c8334341138de675273717ec7327"],["tags/编译/index.html","ee6845786eae101813577a05c99513f1"]];
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







