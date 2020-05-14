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

var precacheConfig = [["about/index.html","76a47b3d24cdbb3b2a8180cf2f2b5d5c"],["archives/2019/12/index.html","d07de76ca3c70f0688c68e81f5ce5ec6"],["archives/2019/index.html","e662ae32d2faba0064eed0fa2baad2e1"],["archives/2020/01/index.html","b3c8029b0ba97fa34e9b5519e751f366"],["archives/2020/02/index.html","c088c62a089ace7e24c8bca5ce4afb90"],["archives/2020/03/index.html","86649f3c621d95235eaa4efe9f5a115e"],["archives/2020/05/index.html","5ba65b03fa11fa8c8e70b00cff789030"],["archives/2020/05/page/2/index.html","ef647c0b408bc87d0668a72c3456e654"],["archives/2020/05/page/3/index.html","53e65ea649558f0b1a51b452bb6a70dc"],["archives/2020/index.html","1be966b24995f370cb5c157fd31b5cf9"],["archives/2020/page/2/index.html","829753f56283991d14190e516f00f7a5"],["archives/2020/page/3/index.html","2c3d4a2b3ced8e379ae7c11e62851e1f"],["archives/2020/page/4/index.html","5676ee5068171fd345862476d7af78fe"],["archives/index.html","dcac70ed93df9308ba384e7a3d756098"],["archives/page/2/index.html","cce57fbd8a4cac857fb717eef5bd6f7f"],["archives/page/3/index.html","5878e2152b1a6a74967456bda6bc4373"],["archives/page/4/index.html","8f2dd75043cf775d59e1da9ccba02e80"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","2b56bdfb1d4cd8eb546dca9f52458bcb"],["categories/Code/index.html","06d4400e4825f8444d0e84e84d233eee"],["categories/Plant-Simulation/SimTalk/index.html","bcdcf6cbfb8a4ada617a39ac1c06cfa6"],["categories/Plant-Simulation/index.html","21dcbdcb45372a3cf8cb730babe34bd9"],["categories/Plant-Simulation/实体/index.html","707ba2456ea775e04c27e64aa59a044c"],["categories/Plant-Simulation/常用代码/index.html","89088e5f633aa0201374b2e2044510b5"],["categories/Plant-Simulation/常规操作/index.html","79d0393e803a39a7a8a39ce9980c4815"],["categories/Plant-Simulation/模型/index.html","2d500583d627c0e46bb80f74ebbbcc4f"],["categories/Plant-Simulation/背景/index.html","3385704c218b40eaa50800f5af5373c1"],["categories/index.html","6b100b0c84a9ed817c3f2f533ebed9c7"],["categories/nas/index.html","fb2dac4bf6c5413ef3c1e0461f35c7f1"],["categories/ubuntu/index.html","55f25722d9a3de9e815483b094914983"],["categories/ubuntu/ip/index.html","80a657ef7735bcc890eceaaa25c01d3d"],["categories/ubuntu/下载/index.html","d508f05507d2d3d9acc6eae9cc9cfba5"],["categories/ubuntu/命令/index.html","b286b4ddb3b597eef7353478939f8c60"],["categories/ubuntu/配置/index.html","dbb5142518c028eb178300a2abbbff68"],["categories/博客/Wordpress/index.html","2170c6a42433b5ede767a65bdb83950a"],["categories/博客/hexo/index.html","0b590f3bf43831ef67f0a5f492bdff0b"],["categories/博客/index.html","2f222003de97a9890ede38040bb34192"],["categories/博客/typecho/index.html","a111191d44949fe06edc084a75430911"],["categories/博客/统计/index.html","4cb95217bb772d8d8d67b6d02c1d78af"],["categories/宝贝/BB/index.html","0ecb7233a4c8e513ca92304855437e7a"],["categories/宝贝/MM/index.html","aa5a6c3d96825ea01e5728be690c859f"],["categories/宝贝/index.html","10ab114b9b7eb9d0b7b5c1ddcfe7c138"],["categories/思考/index.html","49c3ae09866e8bd3146b51b8b05fe063"],["categories/思考/职业规划/index.html","07cf9bc859b2dbf734bde3d9e5c2fa9e"],["categories/科学/OpenWRT/index.html","794bd73435165e3475bdd73e7d25b0ba"],["categories/科学/index.html","b1df953404e6019efb96590b8ff4b053"],["categories/科学/手机/index.html","315a398167111cfec63ce082c45a5431"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","9c16a29f04907dcb8f2d1809fcb744ea"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f0e4572a558c873cc6ddfc717ce58c18"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","333822600ce3d1b423bf31ba8c55117f"],["movies/index.html","59b4411dcd31f719cde4d7a1f6b279fe"],["music/index.html","85afa95238373fbceeaf3a9ae5344449"],["page/2/index.html","243a0e74fb737b12287e0c2e31090e8f"],["page/3/index.html","801bed236f4fa26893101ccc61b31aae"],["page/4/index.html","bf329f95e0b2112bd29aa274754f1d78"],["posts/20191204A1.html","4e42b7995804b643a83ec460f6034d3b"],["posts/20200115A1.html","a730eae6f4c385311e0100e2a613922e"],["posts/20200116A1.html","ca7953c7f32b11bd1f2845109cfba31b"],["posts/20200118A1.html","a1243c4ff2548d98ecb841ad9a389756"],["posts/20200119A1.html","85f05f10a52ccb4953e695ca679b8639"],["posts/20200119A2.html","d8618a4d209a472f5a56307b968a7ae0"],["posts/20200123A1.html","1d8b1d79a69c827f566ab69fa677ebbf"],["posts/20200204A1.html","4c73e1acd97e2d2bd7bb81d575d9e624"],["posts/20200312A1.html","401a6a8f88cac904657ff47540a5a776"],["posts/20200320A1.html","8d34e57e59b9050c601ff956b6613b02"],["posts/20200322A1.html","b32f9b1c2b36e35a74e83fb6328d2da6"],["posts/20200503A1.html","ea064908b91a2e908a1a8912cf679f9e"],["posts/20200504A1.html","d6b2def5b6302d36430f5d9714c99ba0"],["posts/20200504A2.html","ed29860a0cf04c7144248cc369996629"],["posts/20200504A3.html","54b47ca11d220da75f36ca4e9886a0cb"],["posts/20200504A4.html","79434ae1ef9908cfcdab26f0ffc368f2"],["posts/20200504A5.html","d7190867ffd080eb58e8b4888b80f2ab"],["posts/20200504A6.html","6c0bf4bb2d8fdc1bd19dc8c1332aeeaf"],["posts/20200504A7.html","06b8e53bb17efb05ea06519bf3bd2b8c"],["posts/20200504A8.html","90131e7a19ec1046406a46db75e6882b"],["posts/20200505A1.html","202d512be745dd5be0bd419670c8c665"],["posts/20200505A2.html","7ac407b5381e13b788eef1008b63ccb6"],["posts/20200505A3.html","b5283fcf09e7cbf0315a49425f491d5c"],["posts/20200507A1.html","1da379ba2a4cdbcd36dc21a0b749c1f7"],["posts/20200509A1.html","1dae9f12c409a8cb9c8480c9f02c4a8e"],["posts/20200510A1.html","f2e1166ded12569aef06c3c15f4a4886"],["posts/20200510A2.html","0fa35ffad52d427973985febd23ed0e1"],["posts/20200512A1.html","860b7102d3c471cd063b3282102a6405"],["posts/20200512A2.html","93ad1d0d4558ae563590b361fc4a4426"],["posts/20200513A1.html","27914bcc68165115d6128f47618f0a32"],["posts/20200513A2.html","347e2b27a40a5e551f07b69812a2854c"],["posts/20200514A1.html","902ea1247a203c4debd0aad1a10370fc"],["posts/20200514A2.html","b62028d8466f5d951384eb17b2942738"],["posts/20200514A3.html","ea510ddaea72ae728d8988e6b02efb7d"],["posts/20200514A4.html","3442929d36c51d36077b420d5a409cda"],["posts/20200514A5.html","709a62cb0fb644b3ba38f38d5640574f"],["posts/20200514A6.html","8997610d76e204cc79261d1633a38645"],["posts/20200514A7.html","a9028d591397b62bb9fed10eff1ff562"],["tags/AGV/index.html","1cc17bfb213ab1aeb8825465c5d03cc5"],["tags/Github/index.html","6f6b53d66d542b3b86087751fa90f42a"],["tags/Move/index.html","a095ffbadb7abff1361655ea82d95982"],["tags/OpenWRT/index.html","932392e1a7f27c62e41e18e92cbca085"],["tags/Plant-Simulation/index.html","743b90709cb138bd8f284a9a60b74738"],["tags/Wordpress/index.html","7216e647fa853d1eb20c60a71892047a"],["tags/cad/index.html","d944b6f625a44d5495ba62e88d9dbe3b"],["tags/coding/index.html","86aeb40ace73a116952b9532f14a2f95"],["tags/h5ai/index.html","c7a436ac7e88c9c8e48a3d53b2d99310"],["tags/hexo/index.html","b1178b9696093c0b98727cd2ae92c5ca"],["tags/index.html","556b29aaeded1c98459fe7d6516c5034"],["tags/nas/index.html","c70ef1e1b2a56671b4b504bb62dd76fd"],["tags/tpyecho/index.html","de5477a2163306c2971277b1b8eedafe"],["tags/transferstation/index.html","55f5931e2bae354cf6618cad230143f8"],["tags/typecho/index.html","01a225198fd36e53a0d43586d09b829b"],["tags/ubuntu/index.html","b66790d4a125c133166c601b8d07a185"],["tags/写给宝贝的话/index.html","39345c509c67c2b22d7318765bdebd93"],["tags/原创/index.html","f57f8697412d624116d8e692a0a92b26"],["tags/学习/index.html","74e9830773bd3f7343cb046a624d894a"],["tags/宝塔/index.html","afe6a1ed312d087ad0b2f7fbb850b06b"],["tags/生产模式/index.html","b08b7a83990d096b3fd50b8184fe3a00"],["tags/百度客户端/index.html","1e79120b54e15a1b70a2406a83508d07"],["tags/科学/index.html","952c8db0a59756dabc3a9794f77cb551"],["tags/统计/index.html","e9a5269be75c0d99fc4be8dcb69dd37c"],["tags/编译/index.html","2f866306f394d92185fe75ef4fa448e6"]];
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







