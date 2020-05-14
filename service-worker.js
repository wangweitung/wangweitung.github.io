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

var precacheConfig = [["about/index.html","dbd58f8dab354c9566dfe33c6683bbbf"],["archives/2019/12/index.html","c17bf60b315357c5d63ae2b5f5c15124"],["archives/2019/index.html","7b002233ed5c2d17a2fd8daed421be64"],["archives/2020/01/index.html","409f460bb9b8bd0b7d332e4717e3f986"],["archives/2020/02/index.html","6f548e9a7188d061d8b14b2c838dccd0"],["archives/2020/03/index.html","09cd101e692e1d7cad3b53dbbcdae754"],["archives/2020/05/index.html","c31e748ffd51705f149a64baf3953b0e"],["archives/2020/05/page/2/index.html","87f09d56360bedc8682b16bb92f0cccd"],["archives/2020/05/page/3/index.html","f6def7dfa1d5cf7a8ed907ad7ea1e583"],["archives/2020/index.html","6a6e1aec5c19fea908f144346c567b04"],["archives/2020/page/2/index.html","31c149135c269898b3a16094367fa73d"],["archives/2020/page/3/index.html","0a3a00c180ee62bd1df8fc573a47c4be"],["archives/2020/page/4/index.html","235e0669c2b2e1f12fd0121d23368f2a"],["archives/index.html","253b437320607f85995a249f4ddd3774"],["archives/page/2/index.html","7d76027663bffd1036a8ea5dd3b98f20"],["archives/page/3/index.html","ba658964c5b7eeb3063a3ba36a8c67bd"],["archives/page/4/index.html","5a33f9c3d7bc89c73187ba28192b2328"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","d1af533716669f7bfb5c8dae550434f8"],["categories/Code/index.html","be3da2666550079e4c5a3ab3612665e6"],["categories/Plant-Simulation/SimTalk/index.html","379dd88ca961b6b6fd1ab0bab4a03cbb"],["categories/Plant-Simulation/index.html","5da71d8b1c26b20b4b27dfa6084e02bf"],["categories/Plant-Simulation/实体/index.html","a058b9b6931454aff42209f651d0ca71"],["categories/Plant-Simulation/常用代码/index.html","466b3d4333d0d4a565def5d4536bdf92"],["categories/Plant-Simulation/常规操作/index.html","307d4e3d8f64a63ddf1979a33cacf0f4"],["categories/Plant-Simulation/模型/index.html","ada3928e6f139ab9c5f90ee9d03f3ede"],["categories/Plant-Simulation/背景/index.html","f5448e6a4c33d14066213a610ab0d00f"],["categories/index.html","b8be0ff9c8c4a1886f3247e094e66bbc"],["categories/nas/index.html","208a3682cda25409ec912a2f3f199721"],["categories/ubuntu/index.html","07daa2ae58089dbc9754890b7e08980a"],["categories/ubuntu/ip/index.html","f3f98f69b0fe2aa85e289c5851f1eed6"],["categories/ubuntu/下载/index.html","3538a00018c25b5a00f1b090b52d98d6"],["categories/ubuntu/命令/index.html","612719cf5b0d2427c3cf3cfc6054874f"],["categories/ubuntu/配置/index.html","57c9392e00ca79e07b2bb3d3e072a292"],["categories/博客/Wordpress/index.html","38443bc2709241d6684d2b4bfd8bf5a4"],["categories/博客/hexo/index.html","4f2710c9fc47e7600230b51c1c8ea1fd"],["categories/博客/index.html","963737b98d7b8cff3602fbccb7c3ce46"],["categories/博客/typecho/index.html","5511c7c0ef6772eaf0b5f34d7dcef5ca"],["categories/博客/统计/index.html","ab03b5a5b958036f4dbedbe96201acff"],["categories/宝贝/BB/index.html","0b57eaf2af95f849d106f3d98de9dc71"],["categories/宝贝/MM/index.html","bb6f6952188f8ff5097e324bfbdc87f6"],["categories/宝贝/index.html","ebc1ea6642025a2d5e57c9f0f3f0cfb5"],["categories/思考/index.html","16ca035d7e8498e8f6b223161fa55697"],["categories/思考/职业规划/index.html","c7c835e59bb5665866cb6c36a6842690"],["categories/科学/OpenWRT/index.html","847e361eeb93df85c2804d48dfe823d1"],["categories/科学/index.html","a397fe8db78750c9f7a2b68054019f4b"],["categories/科学/手机/index.html","f9b422a2a5bec1446f92dc3a8476cbef"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","f4387d0bde44dd82e6b055cc03e08455"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","84a474f17143bf38bf0033575ed6239d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","8bf95eb11d96765fe0755855629d3960"],["movies/index.html","bed0cc5f11b625f67e125171f3b8597e"],["music/index.html","957cfff56caaa8a9295dc34bd0118689"],["page/2/index.html","420e5d8940489b7b169525e29dc34231"],["page/3/index.html","164f1edb555dccc8a12425e1b000e90e"],["page/4/index.html","532f4c38424f8e26259876ff84831840"],["posts/20191204A1.html","4e42b7995804b643a83ec460f6034d3b"],["posts/20200115A1.html","a730eae6f4c385311e0100e2a613922e"],["posts/20200116A1.html","ca7953c7f32b11bd1f2845109cfba31b"],["posts/20200118A1.html","a1243c4ff2548d98ecb841ad9a389756"],["posts/20200119A1.html","85f05f10a52ccb4953e695ca679b8639"],["posts/20200119A2.html","d8618a4d209a472f5a56307b968a7ae0"],["posts/20200123A1.html","1d8b1d79a69c827f566ab69fa677ebbf"],["posts/20200204A1.html","4c73e1acd97e2d2bd7bb81d575d9e624"],["posts/20200312A1.html","401a6a8f88cac904657ff47540a5a776"],["posts/20200320A1.html","8d34e57e59b9050c601ff956b6613b02"],["posts/20200322A1.html","b32f9b1c2b36e35a74e83fb6328d2da6"],["posts/20200503A1.html","ea064908b91a2e908a1a8912cf679f9e"],["posts/20200504A1.html","d6b2def5b6302d36430f5d9714c99ba0"],["posts/20200504A2.html","ed29860a0cf04c7144248cc369996629"],["posts/20200504A3.html","54b47ca11d220da75f36ca4e9886a0cb"],["posts/20200504A4.html","79434ae1ef9908cfcdab26f0ffc368f2"],["posts/20200504A5.html","d7190867ffd080eb58e8b4888b80f2ab"],["posts/20200504A6.html","6c0bf4bb2d8fdc1bd19dc8c1332aeeaf"],["posts/20200504A7.html","06b8e53bb17efb05ea06519bf3bd2b8c"],["posts/20200504A8.html","90131e7a19ec1046406a46db75e6882b"],["posts/20200505A1.html","202d512be745dd5be0bd419670c8c665"],["posts/20200505A2.html","7ac407b5381e13b788eef1008b63ccb6"],["posts/20200505A3.html","b5283fcf09e7cbf0315a49425f491d5c"],["posts/20200507A1.html","1da379ba2a4cdbcd36dc21a0b749c1f7"],["posts/20200509A1.html","1dae9f12c409a8cb9c8480c9f02c4a8e"],["posts/20200510A1.html","894a1b7f3e54cea5b108cb92259253ab"],["posts/20200510A2.html","5a5ed4f134b57e53d9ecdeadb4da0df5"],["posts/20200512A1.html","44034a138a8fd234061507da233cbd75"],["posts/20200512A2.html","93ad1d0d4558ae563590b361fc4a4426"],["posts/20200513A1.html","27914bcc68165115d6128f47618f0a32"],["posts/20200513A2.html","347e2b27a40a5e551f07b69812a2854c"],["posts/20200514A1.html","902ea1247a203c4debd0aad1a10370fc"],["posts/20200514A2.html","b62028d8466f5d951384eb17b2942738"],["posts/20200514A3.html","ea510ddaea72ae728d8988e6b02efb7d"],["posts/20200514A4.html","3442929d36c51d36077b420d5a409cda"],["posts/20200514A5.html","709a62cb0fb644b3ba38f38d5640574f"],["posts/20200514A6.html","8997610d76e204cc79261d1633a38645"],["posts/20200514A7.html","a9028d591397b62bb9fed10eff1ff562"],["tags/AGV/index.html","3d110db1279828e8498d4386d6bab68e"],["tags/Github/index.html","01c0e84e5584130d13ac0606e27ef6ac"],["tags/Move/index.html","a93dfacb6177cf971fd2e0fe9982fd33"],["tags/OpenWRT/index.html","6b7917505bb6f6969e0b54fe97bb941b"],["tags/Plant-Simulation/index.html","34b7ccd0f0cd0e694f8aaedbf52ff1be"],["tags/Wordpress/index.html","5ceb87b5c993621683a0c2837c66c8e1"],["tags/cad/index.html","29d57fcd25435558afcbf5b05547ddb0"],["tags/coding/index.html","7fa5f1fb400a3e96d0fd6c711e3d7fc6"],["tags/h5ai/index.html","3c08ebbd757ec4a5508d3f20735d2027"],["tags/hexo/index.html","eaf58fd37035f26adade43b91cbc2625"],["tags/index.html","22f1eb8dec32d61a6ab415f64a48ed45"],["tags/nas/index.html","74a7e251f61436d680cb3389f44e7121"],["tags/tpyecho/index.html","4fd2d5bec2918d99a620b63ca3e1917a"],["tags/transferstation/index.html","6cd1ff2d5ff4a173fc7d78f76137a526"],["tags/typecho/index.html","164a5fcfa1350f24acb564ad9824324f"],["tags/ubuntu/index.html","15616b2eb7db60244a7a83ecb8019c1c"],["tags/写给宝贝的话/index.html","8733531767e675d268159191825514cf"],["tags/原创/index.html","ed357ebb13625b7ec732a1a2e194731b"],["tags/学习/index.html","11915ca2f87d3651123ccc102aedd360"],["tags/宝塔/index.html","d061dfbb238ec85998015c1043f3fc00"],["tags/生产模式/index.html","4f62d20beb9d44022a9f24624d9f197a"],["tags/百度客户端/index.html","587d56849beb76ec1b3b15f108d6b76c"],["tags/科学/index.html","455ea55ea18d23434c69415b2a3e512a"],["tags/统计/index.html","7f4d666d68cf18a3e4b3dd2d46b649f3"],["tags/编译/index.html","9be7c2b6c6189ba8d4e47868a26a4f7f"]];
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







