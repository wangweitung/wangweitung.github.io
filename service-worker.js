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

var precacheConfig = [["about/index.html","408a0b3ef8f371988ad116320b36d644"],["archives/2019/12/index.html","7ab7c915379fdde3efe92f8154e10721"],["archives/2019/index.html","d3d2cbaa9e16f97ee6fcc19bc2e78d05"],["archives/2020/01/index.html","f3480ac5d212517a8c85a02fee91f545"],["archives/2020/02/index.html","34cde71c3df03fb41b666ce0a721f36f"],["archives/2020/03/index.html","d38c7236235c6eef5337bcc0e52598a9"],["archives/2020/05/index.html","0bd29a45937b9ada230ac55706811ef9"],["archives/2020/05/page/2/index.html","408b0a182e534021158b7e3ddc10a6bd"],["archives/2020/05/page/3/index.html","ba42704c9abeba9817f76c7a04540082"],["archives/2020/index.html","bbda79ecd54a51290a18ea19ce35175b"],["archives/2020/page/2/index.html","131235fa2729b47a4347e557f8d98216"],["archives/2020/page/3/index.html","34301d1005253c6ffec472c958110f5b"],["archives/2020/page/4/index.html","327be244a1c8926548ede101580ccf50"],["archives/index.html","cf97a6dfd7c8b18c2d313c644c40817d"],["archives/page/2/index.html","e7a57096c46706686803d7fab0649ca8"],["archives/page/3/index.html","b68c6dcc8957ed475eb35b595e79b62f"],["archives/page/4/index.html","a0d3ae8bfbead1c89df484880b14843e"],["archives/page/5/index.html","f524c0879ca79ed47940a54f8d9cdcff"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","5ce66d09dcc5c6ac78a83f67f40db694"],["categories/Code/index.html","9047d87cf0cb35ace3dc2f331c34772e"],["categories/Plant-Simulation/SimTalk/index.html","73f28afaae02c459b6f50ef8578cca22"],["categories/Plant-Simulation/index.html","b7f1dcd6c712afbdb7a65126bdc3509e"],["categories/Plant-Simulation/实体/index.html","0474dddd06b3bf79d51c020e4a8fa3ea"],["categories/Plant-Simulation/常用代码/index.html","fbe39670b2dbddb63554fe586ac85600"],["categories/Plant-Simulation/常规操作/index.html","78ca5fc24843d512abad0ac9231d458b"],["categories/Plant-Simulation/模型/index.html","a948faec4745a2a11447deaf4e25ea9c"],["categories/Plant-Simulation/背景/index.html","fb08130381e3c7187c5a1c9ab7da435c"],["categories/index.html","671a716c57cf0c48bbded21f5ca70c94"],["categories/nas/index.html","f9a2d3e4712e81043776aa14bcf0a315"],["categories/ubuntu/index.html","d0a9ab835f8aad18b4be69a9f9700d66"],["categories/ubuntu/ip/index.html","cc43d0bd6d57e15f36ad1e5105718ab6"],["categories/ubuntu/下载/index.html","92eb60b666b8b33bb585dd016113071c"],["categories/ubuntu/命令/index.html","3e529ad3191c841b7cb69daae2805778"],["categories/ubuntu/配置/index.html","12c0d135e1bdc2468453d7f28af0bb92"],["categories/仿真/index.html","b7c24eb9af3ac5ed53ddc400b8298606"],["categories/博客/Wordpress/index.html","8925157f8030bfa55de26da28e106f00"],["categories/博客/hexo/index.html","4fa56acae8ede519efd5b2c8adf08edf"],["categories/博客/index.html","65613663a1f8edfe6eb8463143281c3a"],["categories/博客/page/2/index.html","a80a2c988cfcdc24efa68fe8aa7e94e5"],["categories/博客/typecho/index.html","5f19bb75ccd1cc70ad4ca1b916f876fd"],["categories/博客/统计/index.html","59a6cbd813eac72334ca7b56d4c2dc33"],["categories/宝贝/BB/index.html","2ea5aaeec09e2bf396c8a89d1529f672"],["categories/宝贝/MM/index.html","f27b9b30f6912ba60d09e004b5d21098"],["categories/宝贝/index.html","820ccae3d4d90fdcac14b29096354b27"],["categories/思考/index.html","76a3718bdfb3b6f1993dfd73093ff168"],["categories/思考/职业规划/index.html","a1aa2377371bd97b088fb1f1eeb5361b"],["categories/科学/OpenWRT/index.html","cf5361cb1043fd42b0c5e5637aeb1959"],["categories/科学/index.html","abca93e9b6713a0193715d50dc6c3bd1"],["categories/科学/手机/index.html","102e9e78d01c0c2e8e84612b14835e9e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8342d20a0cd4e4c686f0b48ea2e00ac4"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f3baa21419f202ad0136435cf2546dcf"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","a3fb495f6cecee8cc198b8ba9b451832"],["movies/index.html","45c07485762b1112bd7768b65416b216"],["music/index.html","e533d41afebef4c5bce8c8e25a65fe3a"],["page/2/index.html","2eb4413786a3c66278d8ba04c8b8eec8"],["page/3/index.html","95668e281b7ace2f016f0c275c445159"],["page/4/index.html","0e9a6d0c305814049ce2608f60d8381b"],["page/5/index.html","0824d8c26b3d97b210848f2e1cf730eb"],["posts/20191204A1.html","13077e8afef906acb04f821205fc3033"],["posts/20200115A1.html","b4ac0bd1e21f6dd2d2dc4d8873bd7428"],["posts/20200116A1.html","d10435ee6ab3b4754637af2af7ad2abe"],["posts/20200118A1.html","38adb03f3edd9d376682919153ce1ec2"],["posts/20200119A1.html","93bce66d0fce0a296646bd8e7e8d17b8"],["posts/20200119A2.html","0eaa152f0a519921291038cd143a85de"],["posts/20200123A1.html","51617b09ba5d0f9014127823433b23a5"],["posts/20200204A1.html","da22503a79e8a0554cf2754e0669f9ca"],["posts/20200312A1.html","5d9636fdb380d8ee7d66926cb1415e7f"],["posts/20200320A1.html","06246991a3a18bb49267d3383a956c74"],["posts/20200322A1.html","1c5a4aecd3fb0c21b8acc624bef5fa3b"],["posts/20200503A1.html","f8620c010d4c8616ce642ce847ea3d97"],["posts/20200504A1.html","7c10fbbd10fceec4a7eef99ec8da0d0a"],["posts/20200504A2.html","01af40922c51cd8defcf47be75f74858"],["posts/20200504A3.html","fd2934500b4884619e08f6992543a3f7"],["posts/20200504A4.html","02d8279eee719aefd4ac96f674b3dc2c"],["posts/20200504A5.html","fb609c6a32c744e2da38884969b7c28d"],["posts/20200504A6.html","a82c5aea6733413feede5aa334776704"],["posts/20200504A7.html","0796b104b88b3603c48fed5e00f2622f"],["posts/20200504A8.html","548408bce06b11aaa631ca9b2993c193"],["posts/20200505A1.html","8ee1a0b238804e8081b306cc6d8d8ae5"],["posts/20200505A2.html","7a43794d2c26c6536961db6024583420"],["posts/20200505A3.html","0699ddb3611b67406dbab5191f13853c"],["posts/20200507A1.html","98aac2fe4c74d85a39deeb2c9194bc69"],["posts/20200509A1.html","ef43b1911870f5e7fd3412d421b28555"],["posts/20200510A1.html","42f44ea5f24e4b02e45ccd2bd1c231b6"],["posts/20200510A2.html","1e90f7328dfb66aaf3af13ca54c9602a"],["posts/20200512A1.html","a2f64ba16cc79fcd5ca5991d56ebb019"],["posts/20200512A2.html","b54da9726d05ecc7eac2e3e6450b5fb7"],["posts/20200513A1.html","3e2961cf82cc29c7308bc1669192b0c9"],["posts/20200513A2.html","02b0af0cc43f4b63ab138a735256f1d2"],["posts/20200514A1.html","9c9de3cfb930a9157016f5e8995c62f7"],["posts/20200514A10.html","655c5504414af35e0a0b8e96c1e72883"],["posts/20200514A2.html","672d3a406317a05b8fb68af1effb6567"],["posts/20200514A3.html","a087b277919829429a6c8d66b10f6798"],["posts/20200514A4.html","8c8cdc8681db39c53ff13192efc8e8ca"],["posts/20200514A5.html","9c08d276bba4f1450e148a6d09aa7971"],["posts/20200514A6.html","63b983b0a3f7a301bb305b3acec515cb"],["posts/20200514A7.html","59e883a01488f59679262a3d44a69a91"],["posts/20200514A8.html","ba5d0bbb245105795e6b6f5ed827e5ba"],["posts/20200514A9.html","12ae665b5a671a80444a7a942a08f901"],["tags/AGV/index.html","a9bb12b58db4f124fbbc0d6ecbef08d3"],["tags/Github/index.html","f3b91c86347c182dc1fc0f6653f15eb5"],["tags/Move/index.html","5c08e028400c7d2391e0905081bc7f29"],["tags/OpenWRT/index.html","53f98c729988ee2339c28855d2cad131"],["tags/Plant-Simulation/index.html","12145503310ba39393985f850c0e9521"],["tags/Wordpress/index.html","53bc83b2bfce4a86f8b86d98c873529c"],["tags/cad/index.html","32e9abe97e7cc1c42bdd331ace331a5d"],["tags/coding/index.html","3a6b295a8dc57e0c4b336338a1c34a73"],["tags/h5ai/index.html","ebbb23932dbd6e45b61fa496720b0b70"],["tags/hexo/index.html","0b2c6b10fecae5653c0837f044f23f5b"],["tags/index.html","6a87b743a6c52bae0dfc262e7da023b1"],["tags/nas/index.html","b27880b6b27153198455707ca6d67ab0"],["tags/tpyecho/index.html","41316264ca8a00991e7eda4031eabfe7"],["tags/transferstation/index.html","8275f8fc8c6d89d8c4b98a5ae7f412fe"],["tags/typecho/index.html","6b43af7bdb41e4e41602af1a205ac8bf"],["tags/ubuntu/index.html","90511baeb638502f1ab205059e8d35fd"],["tags/仿真/index.html","c13aca3d7f099a43c17bf261970b42cc"],["tags/写给宝贝的话/index.html","0994a7f2aa800b5c179aee5b41a53e6e"],["tags/原创/index.html","7f06b3cd5b30d9b4d8d479a23fa5a6bb"],["tags/学习/index.html","1e80f38d2a3a67e4b326fbfcdda5dcd2"],["tags/宝塔/index.html","506344d762048e829bb32ea34b2bdb2f"],["tags/生产模式/index.html","39b9cf4ba955687eacad5f738ce2d96d"],["tags/百度客户端/index.html","dcda3cd229c038e297253954dfa1d5fd"],["tags/科学/index.html","22b9a222588b516b2b1ee614cd7cdd84"],["tags/统计/index.html","228619cec2f5fb57dab591ca5b68efec"],["tags/编译/index.html","93c911e9de8f37d5e8ba2412fd1f1e4f"]];
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







