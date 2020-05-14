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

var precacheConfig = [["Ubuntu打开防火墙.html","b2974e9c3301e982e49e2dad38b4fdfc"],["about/index.html","0070987a0dc17907913fec1cd8861922"],["archives/2019/12/index.html","133de9d6b5fda311ce225bafb01c58df"],["archives/2019/index.html","6507f2d5e5249c5defa222d51d2c9129"],["archives/2020/01/index.html","9a9302dd43558751729acf05a3a754b8"],["archives/2020/02/index.html","c61caef5a0dbacc88e0293238585906c"],["archives/2020/03/index.html","9bf63d995dcff5fcb69053d4d0db2fc2"],["archives/2020/05/index.html","0b82ff9d37d64e3d46a80cee8df053e6"],["archives/2020/05/page/2/index.html","2fe5b7ff6fbda609170f8f06220fc4af"],["archives/2020/05/page/3/index.html","50d48a51bc84bcdf29ea2889c35cc9cd"],["archives/2020/index.html","ecdd4d013a3f63aa50e3cc53d824b04e"],["archives/2020/page/2/index.html","f41ab6a153d82cc267893289ccd0e950"],["archives/2020/page/3/index.html","ce45d311dbd3b8c7654fc994f8157304"],["archives/2020/page/4/index.html","724415bf0d232ab7e449e14f5493a8a6"],["archives/index.html","52d228789e4aba9a19f370d121f5ec20"],["archives/page/2/index.html","f99e02e98d80d1f790d149adc1b4ab88"],["archives/page/3/index.html","d9d042c03321e8cc05d3fcfccae30a81"],["archives/page/4/index.html","aac416a0130a73ae835de3bd2d778586"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","67748b0af3eb68d5539552fe23593476"],["categories/Code/index.html","22eaf4c9139c0c93770af22ed1f7e597"],["categories/Plant-Simulation/SimTalk/index.html","11d21d76349eba0f9a0d2583cfe57887"],["categories/Plant-Simulation/index.html","998ec15e1b14fe219bf92a0913754e73"],["categories/Plant-Simulation/实体/index.html","ea4e422fc9bc77547bfca609971932a9"],["categories/Plant-Simulation/常用代码/index.html","241ef8aa457cb259747d8d750cd2fc5c"],["categories/Plant-Simulation/常规操作/index.html","693416ae63263ce1d9e1047e25c88fdf"],["categories/Plant-Simulation/模型/index.html","0cb3d317d36b3edf1d2c26c7cb3c76f8"],["categories/Plant-Simulation/背景/index.html","a57253bbc51e5df4ec015d082d120439"],["categories/index.html","d5548c3b54cd79795b40e3403f2c9de9"],["categories/ubuntu/index.html","21b3b58de785a9a4746767c59fa61cd7"],["categories/ubuntu/ip/index.html","9af2543b7c5792b106025e34c590b0ce"],["categories/ubuntu/下载/index.html","f31cbb9814c279e3ee960619e05bc565"],["categories/ubuntu/命令/index.html","7f54197fef1bdca593c2bfb060df3d93"],["categories/ubuntu/配置/index.html","8a48c69b7ac4ac7e653824b23340db0a"],["categories/博客/Wordpress/index.html","e4f2da801a0d4c258eecede187efe634"],["categories/博客/hexo/index.html","6ebd1767c274f8bad756a9df5e900858"],["categories/博客/index.html","0e7245c588c1da931084e33e27787bf1"],["categories/博客/typecho/index.html","bf7c3b67705f0b05cb369d1628d54983"],["categories/博客/统计/index.html","16d9b85437cc215ba6e84ca9590f501e"],["categories/宝贝/BB/index.html","f59e65458bf1912640e3d75e6e6951e6"],["categories/宝贝/MM/index.html","bec0d1f3ebc180eca6681143a1884563"],["categories/宝贝/index.html","1e8a224cadb2056b24fc73d6e9d02c36"],["categories/思考/index.html","ba4c4772d53923a4603ae259e32a8cf6"],["categories/思考/职业规划/index.html","ff2a75779b78f5d769a57d4ce81ee49e"],["categories/科学/OpenWRT/index.html","bc26cecaf83af14382590eb443668cc4"],["categories/科学/index.html","3e63b9aabed5998fff8d8812dbc99982"],["categories/科学/手机/index.html","966c946e338c268db4fc742bc89c8a4c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3f2128633afabc9eb236abcb795d889a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","ba2f281ebfa03abc6f881fe605411723"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","e76d59eebc5daa7f351c230db84c741c"],["movies/index.html","4a11d7103c3325fcc9f025ffee462d89"],["music/index.html","410244f6db3492653269dd6f44e4dcf7"],["page/2/index.html","d4ec301382c3f24581ae5275758d8ffa"],["page/3/index.html","928c0f9e88a2b04a293f72a317519969"],["page/4/index.html","0e5501df691e12806c75a797aaac6a0e"],["posts/20191204A1.html","c52dcc117bd0b8c657756259c71f6915"],["posts/20200115A1.html","e801b3e6c3b75ad0e6d0372913fdc173"],["posts/20200116A1.html","fc7513c05a72c90624769dda05da7efd"],["posts/20200118A1.html","a7ed20b66ef7c2a147c22261f2c8f4f1"],["posts/20200119A1.html","893d1faad5f05139e04d73039751b9c8"],["posts/20200119A2.html","dcf56bb45c6d95cb4798b59c68f113a6"],["posts/20200123A1.html","589aa8c991d547256a2fcd46a45bf605"],["posts/20200204A1.html","d8648008d8260367be7876d8a4b78fd4"],["posts/20200312A1.html","8a50a2a240890a8a7c6f049a225ff747"],["posts/20200320A1.html","077bb002c849a6aa5f59acef917c2ffb"],["posts/20200322A1.html","fc66febbbf613143ba816f72b6e0430c"],["posts/20200503A1.html","4d39596a0512badd0882b1f1348eca5c"],["posts/20200504A1.html","303005a830fa0bc561e68cd86bf2f5a5"],["posts/20200504A2.html","3ff77285bef381d9adefc36b1cbbe8b9"],["posts/20200504A3.html","ff23d16c7677c08967caad263c17797a"],["posts/20200504A4.html","408201271969e2caf693c4c253d932f0"],["posts/20200504A5.html","b587c30a790408fd0b07041aaffafe0e"],["posts/20200504A6.html","34e7bd2d11012429326c198b8fb1a2b5"],["posts/20200504A7.html","1a5f5060883e65ebc50e28639b5cacfc"],["posts/20200504A8.html","490054e5fdf1afc563ef8f1d201f30d9"],["posts/20200505A1.html","a95bb498979bce0b691cc231ef10915c"],["posts/20200505A2.html","b3022b4973e4adcdc7b1aba6fdfb509c"],["posts/20200505A3.html","bd83bcadd4a3c61a304819c9a668fbfc"],["posts/20200507A1.html","323f06aaf4cfaca54e240e68d40c666b"],["posts/20200509A1.html","0c568c03f17279f37bde4d440556f7f4"],["posts/20200510A1.html","895787858bda64d20aa2eb320d134b72"],["posts/20200510A2.html","c20334ff6a3b46cade508dc918f31b29"],["posts/20200512A1.html","48a5a18b767fbf2fb8480cfe5aa70eb8"],["posts/20200512A2.html","a455dc28d8595f4a3aa842255c5699eb"],["posts/20200513A1.html","f2685911b6ded6291ec0730815d3b469"],["posts/20200513A2.html","d874adcf3c2a62554f9b335c34691e95"],["posts/20200514A1.html","cdccd07ce99617ecdf05f9051b852f3a"],["posts/20200514A2.html","d0d4e5e836f120e0bbe99af3691252e6"],["posts/20200514A3.html","d3f6e3c5fd73defd2b2dc026af4a1d81"],["posts/20200514A4.html","8424ef544758b0e8673a0c01b581ad5f"],["tags/AGV/index.html","24d16106e94f67f0fdb3540014f45262"],["tags/Github/index.html","baaf21ed7e9cabbbe378b0fd612b5c1c"],["tags/Move/index.html","86dee34c05241842d3a8d8357203bbc2"],["tags/OpenWRT/index.html","aef999f8b10576894d7da49aa7985793"],["tags/Plant-Simulation/index.html","78ea7860e1007628461a4e0789df8c1c"],["tags/Wordpress/index.html","ca00ec4a63e68d441319e1005f95a1f6"],["tags/cad/index.html","5c3e8062a59b0c73194e5beb5deee3ca"],["tags/coding/index.html","ea75d119272315a3427a8165e64ef2ae"],["tags/hexo/index.html","2f97d09f064ec61c1565f1c13092c694"],["tags/index.html","9904bbd0cac89c55c41598140560b30c"],["tags/transferstation/index.html","b6dd1759deb352efa543a417f59d78fd"],["tags/typecho/index.html","185d3577b5bbf312613688336e2cd9d8"],["tags/ubuntu/index.html","699ab87c360fe83112d7013dd01ca4e7"],["tags/写给宝贝的话/index.html","b87b6268a89c5188fc9fe4bde4d9c8c2"],["tags/原创/index.html","d57e1e295e7acca1e9582bf3130ebc99"],["tags/学习/index.html","bbfbfa3e9257fe4e56328ad74b09ca7e"],["tags/宝塔/index.html","4cfc663fe483332a550076482a131a64"],["tags/生产模式/index.html","1060c2a4de4a125e0fb476b4e9b78224"],["tags/百度客户端/index.html","98ab87e9b334a3bb287caf02f5889197"],["tags/科学/index.html","eb1e0ffefa4edbaf83c5ca0ad091d3e3"],["tags/统计/index.html","c2512f62cd0ce2df9f2d2b7945efadc1"],["tags/编译/index.html","c1d2545a92a93ce957bcedd691e95485"]];
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







