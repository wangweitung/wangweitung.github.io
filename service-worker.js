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

var precacheConfig = [["about/index.html","76a47b3d24cdbb3b2a8180cf2f2b5d5c"],["archives/2019/12/index.html","34ebf362366f08b3399248b84e2bb621"],["archives/2019/index.html","d4f373205361f5a9554930e74883760e"],["archives/2020/01/index.html","d6cc0e5d34961d0498a2805441a2d7f7"],["archives/2020/02/index.html","c8a4b05789da35c7e0c5a7f81be5f061"],["archives/2020/03/index.html","06ff420720065bbca0622953a4337db1"],["archives/2020/05/index.html","8c94147e2801c8893d25c743fbbfecf4"],["archives/2020/05/page/2/index.html","8caf38761f9e9034756e9756adf3988c"],["archives/2020/05/page/3/index.html","ee430b46e0e68f8476a79917f3771c13"],["archives/2020/index.html","a699e968ff15727bf11d21ab1f33e50b"],["archives/2020/page/2/index.html","e3bb66a3a3d5ca5d2f0e6ce8cf582c2f"],["archives/2020/page/3/index.html","3006ec2cab23fe6ed59b9443814f09f9"],["archives/2020/page/4/index.html","14f3d2d960b86e5dd0f39929db14d3ac"],["archives/index.html","e7db68990174a361f3b67e8cd3da2635"],["archives/page/2/index.html","2b1276800affd7ea9dc8af33f6f532de"],["archives/page/3/index.html","ad0febaa1f755bb6e22f96bb09b4c63b"],["archives/page/4/index.html","7cfd1ce0d6a70c2c2414e00d3e89f9cc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","3ee0c11e18aef196f0daa33c11ba8733"],["categories/Code/index.html","a741e41a0f6feded8f249cfc46951055"],["categories/Plant-Simulation/SimTalk/index.html","07b52374bcca6807e6e5c8870508e0f2"],["categories/Plant-Simulation/index.html","18fba5df7342c9540ab3f077ec211c47"],["categories/Plant-Simulation/实体/index.html","0c6ffb8b1397c4f59df5dd91f6f79134"],["categories/Plant-Simulation/常用代码/index.html","d7080dee8a591b4a10612ebdb9ab3d84"],["categories/Plant-Simulation/常规操作/index.html","897661b8dddb4bde342adc5eef0aa0f2"],["categories/Plant-Simulation/模型/index.html","de6ddad27be5a72f85d9c436a3ec407d"],["categories/Plant-Simulation/背景/index.html","7227c8ddc62149c390057b86eda03af3"],["categories/index.html","6b100b0c84a9ed817c3f2f533ebed9c7"],["categories/nas/index.html","6aea0ebcce5e394296df80c471217e86"],["categories/ubuntu/index.html","ff5876570559048659dd77a202909a86"],["categories/ubuntu/ip/index.html","54e3910e452c0a706c9604f826133e31"],["categories/ubuntu/下载/index.html","888ef1c1566eca663e170f4aef6f3e36"],["categories/ubuntu/命令/index.html","d663ba24cf7738594c8ea8c1a4bf22a3"],["categories/ubuntu/配置/index.html","daa8a3d28a4f50663c7b9a1330c032f1"],["categories/博客/Wordpress/index.html","c64334466a351e948b53788bcabc2c68"],["categories/博客/hexo/index.html","b2579556b09619cc8969de5b972cfef1"],["categories/博客/index.html","7f46f372ad1c833779dfa14268d5f737"],["categories/博客/typecho/index.html","01a578f6256983b5f3a7139140383ae2"],["categories/博客/统计/index.html","e561092345f30813bbe5e6a833f13da1"],["categories/宝贝/BB/index.html","87879b441a8baf7cdbaca6ec13ef0c32"],["categories/宝贝/MM/index.html","7dd3244815a0a0acc12bb76c7567a272"],["categories/宝贝/index.html","80397e43625a600afce5332190b25753"],["categories/思考/index.html","e3164223e0b3371cb6b21275058451a5"],["categories/思考/职业规划/index.html","af74c4e0cc159384eaad26919f6b3b71"],["categories/科学/OpenWRT/index.html","48e70c6e8c930a8e8b46451477f2342e"],["categories/科学/index.html","b68fdef8eb2cf090157fc6443d5a9517"],["categories/科学/手机/index.html","f94626ff2184abee835a6ca0685428a0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","9c16a29f04907dcb8f2d1809fcb744ea"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","56c7dd10b1aa106758c369a3c24560f0"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","333822600ce3d1b423bf31ba8c55117f"],["movies/index.html","59b4411dcd31f719cde4d7a1f6b279fe"],["music/index.html","85afa95238373fbceeaf3a9ae5344449"],["page/2/index.html","0b1a162663d2c04b52ad47e2a64e96bd"],["page/3/index.html","8793a2876242247f8522e80fa188ec44"],["page/4/index.html","4ac08957553778bfc61475cd75d024a6"],["posts/20191204A1.html","4e42b7995804b643a83ec460f6034d3b"],["posts/20200115A1.html","a730eae6f4c385311e0100e2a613922e"],["posts/20200116A1.html","ca7953c7f32b11bd1f2845109cfba31b"],["posts/20200118A1.html","a1243c4ff2548d98ecb841ad9a389756"],["posts/20200119A1.html","85f05f10a52ccb4953e695ca679b8639"],["posts/20200119A2.html","d8618a4d209a472f5a56307b968a7ae0"],["posts/20200123A1.html","1d8b1d79a69c827f566ab69fa677ebbf"],["posts/20200204A1.html","4c73e1acd97e2d2bd7bb81d575d9e624"],["posts/20200312A1.html","401a6a8f88cac904657ff47540a5a776"],["posts/20200320A1.html","8d34e57e59b9050c601ff956b6613b02"],["posts/20200322A1.html","b32f9b1c2b36e35a74e83fb6328d2da6"],["posts/20200503A1.html","ea064908b91a2e908a1a8912cf679f9e"],["posts/20200504A1.html","d6b2def5b6302d36430f5d9714c99ba0"],["posts/20200504A2.html","ed29860a0cf04c7144248cc369996629"],["posts/20200504A3.html","54b47ca11d220da75f36ca4e9886a0cb"],["posts/20200504A4.html","79434ae1ef9908cfcdab26f0ffc368f2"],["posts/20200504A5.html","d7190867ffd080eb58e8b4888b80f2ab"],["posts/20200504A6.html","6c0bf4bb2d8fdc1bd19dc8c1332aeeaf"],["posts/20200504A7.html","06b8e53bb17efb05ea06519bf3bd2b8c"],["posts/20200504A8.html","90131e7a19ec1046406a46db75e6882b"],["posts/20200505A1.html","202d512be745dd5be0bd419670c8c665"],["posts/20200505A2.html","7ac407b5381e13b788eef1008b63ccb6"],["posts/20200505A3.html","b5283fcf09e7cbf0315a49425f491d5c"],["posts/20200507A1.html","1da379ba2a4cdbcd36dc21a0b749c1f7"],["posts/20200509A1.html","1dae9f12c409a8cb9c8480c9f02c4a8e"],["posts/20200510A1.html","f2e1166ded12569aef06c3c15f4a4886"],["posts/20200510A2.html","0fa35ffad52d427973985febd23ed0e1"],["posts/20200512A1.html","860b7102d3c471cd063b3282102a6405"],["posts/20200512A2.html","93ad1d0d4558ae563590b361fc4a4426"],["posts/20200513A1.html","27914bcc68165115d6128f47618f0a32"],["posts/20200513A2.html","347e2b27a40a5e551f07b69812a2854c"],["posts/20200514A1.html","902ea1247a203c4debd0aad1a10370fc"],["posts/20200514A2.html","b62028d8466f5d951384eb17b2942738"],["posts/20200514A3.html","ea510ddaea72ae728d8988e6b02efb7d"],["posts/20200514A4.html","3442929d36c51d36077b420d5a409cda"],["posts/20200514A5.html","709a62cb0fb644b3ba38f38d5640574f"],["posts/20200514A6.html","8997610d76e204cc79261d1633a38645"],["posts/20200514A7.html","a9028d591397b62bb9fed10eff1ff562"],["tags/AGV/index.html","f7b67010c462fb146f1b6e8f2b874db0"],["tags/Github/index.html","8c76d97a5471f9e29b3daec88942f2ba"],["tags/Move/index.html","327d8c1f19899ba896c2d8cc5d25ce91"],["tags/OpenWRT/index.html","fd4775e5a7ad41a4bc7c56331d45264c"],["tags/Plant-Simulation/index.html","bba9931f6e3cc6f42c3b49b43c3a4598"],["tags/Wordpress/index.html","e0ce38e9ec4b9f02cdc7198e6992ef3d"],["tags/cad/index.html","23dc1e5da4dcefd52b48351f9ccaa704"],["tags/coding/index.html","44a62bd0820608b80c4ae94ecc937f4b"],["tags/h5ai/index.html","66e7163f5bafca57c3af5d6c25e4cef7"],["tags/hexo/index.html","ba9e492ec255e15cc4ecb2d0d8f1f933"],["tags/index.html","40378c6b572cae657274bff4f63c3a28"],["tags/nas/index.html","4660aae59f771407b27250216c7f197b"],["tags/tpyecho/index.html","a56568cc2d87081cc6adc434eafbc781"],["tags/transferstation/index.html","ef1cf57f1a5799ce73f5a9e5bfd442e6"],["tags/typecho/index.html","f28b2cfeac31212c53fc0b429026cb1c"],["tags/ubuntu/index.html","c711595cba1b35c810fb42e12bff7a7b"],["tags/写给宝贝的话/index.html","a02945909cf612bd199d1945af5c5855"],["tags/原创/index.html","93208dda7e500489a321cfb989be6b7e"],["tags/学习/index.html","b5884510899467783b3c005a7510036d"],["tags/宝塔/index.html","e522a0901eb85713fcc672e47df53180"],["tags/生产模式/index.html","41b00e539221f2d0c7897d5d4e947346"],["tags/百度客户端/index.html","0fc64e58d5aa86b580f94790acc28ca3"],["tags/科学/index.html","cf03b9c09c17bfb650983414ff4a38ca"],["tags/统计/index.html","a1a19291e0c7299f9654849eef23a671"],["tags/编译/index.html","4260d4a33344e9cd45cf71b0106e6c01"]];
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







