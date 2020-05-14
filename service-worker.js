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

var precacheConfig = [["about/index.html","408a0b3ef8f371988ad116320b36d644"],["archives/2019/12/index.html","98c9e42dbea14ac9167d65cfbde8c129"],["archives/2019/index.html","d2e4a3c1433fed01fc167e40d59ecb15"],["archives/2020/01/index.html","8a138b4a3a8f6f1cfb304cc7286ef4c3"],["archives/2020/02/index.html","b7d08b3c2058a2c70f379ed76fba93f5"],["archives/2020/03/index.html","857a565847e357b439fef28e75d1165d"],["archives/2020/05/index.html","25abcb4f25c777cf411a714db27c6a4e"],["archives/2020/05/page/2/index.html","0a3ff1b1a3b11c05dc38ca4eea83edd4"],["archives/2020/05/page/3/index.html","f75dd59cb5de9c568960c85d3ee91a54"],["archives/2020/index.html","e66ab280249a5b026b14769a171c3dd6"],["archives/2020/page/2/index.html","864d6ebd09790010ca4b7e8c6aab4aea"],["archives/2020/page/3/index.html","c569762864e4284d73eede521b8db98e"],["archives/2020/page/4/index.html","0b7cb0347f83b4ab89c68bfba7a13bb7"],["archives/index.html","489801d5da405841be50e69bad559005"],["archives/page/2/index.html","bba8be84880270b1a7ba6b8540f7a2e4"],["archives/page/3/index.html","0e40b646bdf96c218c2d71e090a7ccb5"],["archives/page/4/index.html","79626d776eed49aa680ab1a5869ec231"],["archives/page/5/index.html","28b37ca1fc73068e3eb07597b0909332"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","843dac638b7e8846c7d7ef8598e2b611"],["categories/Code/index.html","5f41e86a4c3b31238b054e7a0e5d26b7"],["categories/Plant-Simulation/SimTalk/index.html","170984437d06162e0665823950b423e6"],["categories/Plant-Simulation/index.html","b5dc338efbe60cdab42c3d4c2678f548"],["categories/Plant-Simulation/实体/index.html","27a39ddff1a4e6cc721ed35965c5a5b1"],["categories/Plant-Simulation/常用代码/index.html","889f93584213ec02f5a8e1382610191e"],["categories/Plant-Simulation/常规操作/index.html","b64e30fcbd4655c2da478221fc654271"],["categories/Plant-Simulation/模型/index.html","27de5f87555db61880f90fa03c9d7dc1"],["categories/Plant-Simulation/背景/index.html","5de17b8049231614788593dda0734e63"],["categories/index.html","671a716c57cf0c48bbded21f5ca70c94"],["categories/nas/index.html","874ae0864cd4e3e1028a7d66c51ea405"],["categories/ubuntu/index.html","2e3407f60755f6e3e371494aa509c158"],["categories/ubuntu/ip/index.html","77877f453109fa574ac4c715bfc8d2f5"],["categories/ubuntu/下载/index.html","e1a8be10095a97917bed81e5e3be051c"],["categories/ubuntu/命令/index.html","3f3ad02e89f26388dd32ea8c1183030f"],["categories/ubuntu/配置/index.html","f6154784f48a0b217f71a470a5b046aa"],["categories/仿真/index.html","104543576a12cb5f406d523d29d42f93"],["categories/博客/Wordpress/index.html","0376192f899c029c8936522f64962087"],["categories/博客/hexo/index.html","73a994aa5b1dd8592d0ed724a3014ce2"],["categories/博客/index.html","b41d4e3a9bc2ffe3f1b759c720bb0f63"],["categories/博客/page/2/index.html","a079ac07d0189f0c35044d7c1d71cf2f"],["categories/博客/typecho/index.html","8a8023cb7bc062bd595c144d58960f7d"],["categories/博客/统计/index.html","ed828656fa5e555668d6d1fe6c8bc15c"],["categories/宝贝/BB/index.html","f9aa30a227fae608e108d4982e7c7b0c"],["categories/宝贝/MM/index.html","af0d6c402d0f01262c45248cf45711d1"],["categories/宝贝/index.html","d06c705a90b921c5764ec5446a9ded9c"],["categories/思考/index.html","e8f60ba41071496509418352a3a9c214"],["categories/思考/职业规划/index.html","08281a90cd0c7004c1d4b56c20c79910"],["categories/科学/OpenWRT/index.html","92f2e954659622a28835e5a403517e69"],["categories/科学/index.html","8a7c63aef516b491c41c5d6248f820ca"],["categories/科学/手机/index.html","c2240ff3eeaaf2fac1e042da2b16f0e0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8342d20a0cd4e4c686f0b48ea2e00ac4"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","7ee983a24e5064a98c07f7eae3ff5ab2"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","a3fb495f6cecee8cc198b8ba9b451832"],["movies/index.html","45c07485762b1112bd7768b65416b216"],["music/index.html","e533d41afebef4c5bce8c8e25a65fe3a"],["page/2/index.html","784d431bb8cfcc714e96baf99bb4c45f"],["page/3/index.html","52fbd8c1084e77a065494b169a2b414c"],["page/4/index.html","91b5fa7ef7b55a5ec9a0b8c9bd17db33"],["page/5/index.html","1beea3d65e94d6e6da4de08cb0be6c22"],["posts/20191204A1.html","13077e8afef906acb04f821205fc3033"],["posts/20200115A1.html","b4ac0bd1e21f6dd2d2dc4d8873bd7428"],["posts/20200116A1.html","d10435ee6ab3b4754637af2af7ad2abe"],["posts/20200118A1.html","38adb03f3edd9d376682919153ce1ec2"],["posts/20200119A1.html","93bce66d0fce0a296646bd8e7e8d17b8"],["posts/20200119A2.html","0eaa152f0a519921291038cd143a85de"],["posts/20200123A1.html","51617b09ba5d0f9014127823433b23a5"],["posts/20200204A1.html","da22503a79e8a0554cf2754e0669f9ca"],["posts/20200312A1.html","5d9636fdb380d8ee7d66926cb1415e7f"],["posts/20200320A1.html","06246991a3a18bb49267d3383a956c74"],["posts/20200322A1.html","1c5a4aecd3fb0c21b8acc624bef5fa3b"],["posts/20200503A1.html","f8620c010d4c8616ce642ce847ea3d97"],["posts/20200504A1.html","7c10fbbd10fceec4a7eef99ec8da0d0a"],["posts/20200504A2.html","01af40922c51cd8defcf47be75f74858"],["posts/20200504A3.html","fd2934500b4884619e08f6992543a3f7"],["posts/20200504A4.html","02d8279eee719aefd4ac96f674b3dc2c"],["posts/20200504A5.html","fb609c6a32c744e2da38884969b7c28d"],["posts/20200504A6.html","a82c5aea6733413feede5aa334776704"],["posts/20200504A7.html","0796b104b88b3603c48fed5e00f2622f"],["posts/20200504A8.html","548408bce06b11aaa631ca9b2993c193"],["posts/20200505A1.html","8ee1a0b238804e8081b306cc6d8d8ae5"],["posts/20200505A2.html","7a43794d2c26c6536961db6024583420"],["posts/20200505A3.html","0699ddb3611b67406dbab5191f13853c"],["posts/20200507A1.html","98aac2fe4c74d85a39deeb2c9194bc69"],["posts/20200509A1.html","ef43b1911870f5e7fd3412d421b28555"],["posts/20200510A1.html","42f44ea5f24e4b02e45ccd2bd1c231b6"],["posts/20200510A2.html","1e90f7328dfb66aaf3af13ca54c9602a"],["posts/20200512A1.html","a2f64ba16cc79fcd5ca5991d56ebb019"],["posts/20200512A2.html","b54da9726d05ecc7eac2e3e6450b5fb7"],["posts/20200513A1.html","3e2961cf82cc29c7308bc1669192b0c9"],["posts/20200513A2.html","02b0af0cc43f4b63ab138a735256f1d2"],["posts/20200514A1.html","9c9de3cfb930a9157016f5e8995c62f7"],["posts/20200514A10.html","fad729ae78a0a56c278fe9b485bf8f4b"],["posts/20200514A2.html","672d3a406317a05b8fb68af1effb6567"],["posts/20200514A3.html","a087b277919829429a6c8d66b10f6798"],["posts/20200514A4.html","8c8cdc8681db39c53ff13192efc8e8ca"],["posts/20200514A5.html","9c08d276bba4f1450e148a6d09aa7971"],["posts/20200514A6.html","63b983b0a3f7a301bb305b3acec515cb"],["posts/20200514A7.html","59e883a01488f59679262a3d44a69a91"],["posts/20200514A8.html","ba5d0bbb245105795e6b6f5ed827e5ba"],["posts/20200514A9.html","12ae665b5a671a80444a7a942a08f901"],["tags/AGV/index.html","9555d819c836fce71f83361d4ffc7cb3"],["tags/Github/index.html","73b1448a8a8cc2aa7be1b40326000482"],["tags/Move/index.html","0e6a39da71b9f4473c8c11bb7f450753"],["tags/OpenWRT/index.html","c79d57eb02fe2252455f35bd803a7d5d"],["tags/Plant-Simulation/index.html","f6a26ae3ace1956161bb3cfd7f7cf225"],["tags/Wordpress/index.html","55c9c4e3f3d19763616c6c80e0048d2a"],["tags/cad/index.html","3da51a158f97fe81d01af77171cce5bc"],["tags/coding/index.html","32be4055c2e15ca4276404466b7f37a8"],["tags/h5ai/index.html","705d6f094a9c6012a4a78d73de431abd"],["tags/hexo/index.html","626d3a2c52db713f900c632796e4b818"],["tags/index.html","cdc7025fd6129d0e49ff984b12aa3e17"],["tags/nas/index.html","7b38fe4dc0021b421736440a0dda0814"],["tags/tpyecho/index.html","37907eba8e3edde602781fc287020f53"],["tags/transferstation/index.html","0791add094c69aa9df79b7ec801f39e8"],["tags/typecho/index.html","54f4f043109e814c1beac0f44615788c"],["tags/ubuntu/index.html","7e834d32c24c54323abb43c6efbd4b2a"],["tags/仿真/index.html","931a2ec7eba6dd57c288cbb2127b4cbf"],["tags/写给宝贝的话/index.html","e7accff3f4039a34e8ab5006825a4f6e"],["tags/原创/index.html","2ef3b919f9dfef64d8bd6db5a51357c7"],["tags/学习/index.html","6cb5e7925503f4a4d7edb87c3289817c"],["tags/宝塔/index.html","708e946fa1419b1328771dc83829c637"],["tags/生产模式/index.html","0d24e182ea801a1d6459d80bb61b80d5"],["tags/百度客户端/index.html","c2d50f567e4e7e46c602f148305de43d"],["tags/科学/index.html","424c8b9cb619a0bc695245e00f61f60d"],["tags/统计/index.html","2973bb2f37c8878378394b032f31fc07"],["tags/编译/index.html","25dda4fc48baa6ecbfc5f466f44daca4"]];
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







