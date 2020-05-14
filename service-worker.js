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

var precacheConfig = [["about/index.html","1c855e35896a0513f4e30c6679176953"],["archives/2019/12/index.html","38110bb44ff6618e4af7360636cc6141"],["archives/2019/index.html","7532dd0312b75a152a1278a70b4e4b8f"],["archives/2020/01/index.html","964367ead63ad5e18ded73db908e0a21"],["archives/2020/02/index.html","893a4e2caff56b383ec2e5523639077d"],["archives/2020/03/index.html","b8338676602cf760d8120429820620fe"],["archives/2020/05/index.html","4caac621f2975718b56a3a0bb9aaafdb"],["archives/2020/05/page/2/index.html","430c5241fff7a2b4e153f221d39bdc5b"],["archives/2020/05/page/3/index.html","a01f07d036e305c7d7b871f5a48eeec3"],["archives/2020/index.html","9a690c24225ba322e1a28129330350b3"],["archives/2020/page/2/index.html","3336dd8fa4d791353d47221402047100"],["archives/2020/page/3/index.html","dfb792ac0bdf56b4d8b112e2e31f9243"],["archives/2020/page/4/index.html","e7eee07a632a07d8e908b4d68c74c213"],["archives/index.html","815a5090958da577a4eb2befcfe8e350"],["archives/page/2/index.html","dc0d85b81c0263b962e4f2e9a78ade29"],["archives/page/3/index.html","21bc4db7d070d1254700ab432f8472ed"],["archives/page/4/index.html","f1bd993e99b549b53f19e83cc70003a3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","0705ae15e202d6e7feb59741fc585671"],["categories/Code/index.html","5ed51b5fd16f7f1825a25193a9324ab8"],["categories/Plant-Simulation/SimTalk/index.html","2acbb91a87c32b31a26a97ff96b6f993"],["categories/Plant-Simulation/index.html","7992a24e87090b585080dd8416b587e6"],["categories/Plant-Simulation/实体/index.html","022efdc4f421736dcef9197c679e2815"],["categories/Plant-Simulation/常用代码/index.html","09148a205a7e8f92195ba426ac7819f9"],["categories/Plant-Simulation/常规操作/index.html","d5c8144f0c0819457a2772fb136099e9"],["categories/Plant-Simulation/模型/index.html","f81f1edde24e45555ed7c36469cb0901"],["categories/Plant-Simulation/背景/index.html","257642441bd3e8e5c4f36c986774426d"],["categories/index.html","1b38d80121a5c246305b23a5d34c6dd0"],["categories/nas/index.html","572e71d4eb8331d63cec1b0faef95434"],["categories/ubuntu/index.html","a47f1e10de2a8be0691c25f0e2e468aa"],["categories/ubuntu/ip/index.html","bea3dac6f85ba8c66494c1047e5b4f60"],["categories/ubuntu/下载/index.html","1461dda14247f333a2e51fe2495f2f5a"],["categories/ubuntu/命令/index.html","f797b75ba38b000a164ae6936b63a021"],["categories/ubuntu/配置/index.html","147204aa77aa5272b39e422beac28c70"],["categories/博客/Wordpress/index.html","f279c41bc8f893726e40cbb26fa1d10c"],["categories/博客/hexo/index.html","12344f14186ad2fc681b0d065edb0dc6"],["categories/博客/index.html","32bcc687cd5dec43cdf09cf84c683f76"],["categories/博客/typecho/index.html","a02da6369180dac5bc86987ab34710c6"],["categories/博客/统计/index.html","1ef3b1b6fbf229c6cadd77644d2c78fd"],["categories/宝贝/BB/index.html","b66ae4b20a06baebf2df715dd243a003"],["categories/宝贝/MM/index.html","5e1f8fc7a3ba9a67506ba720d63ad33a"],["categories/宝贝/index.html","6839e28c56bdadcaa0b2a2b270ead287"],["categories/思考/index.html","c103f0a1671f10b451100e4113afb238"],["categories/思考/职业规划/index.html","ac51af4ef257678c06c148589c60511d"],["categories/科学/OpenWRT/index.html","07e704f079972abb20fb3f4009401150"],["categories/科学/index.html","81c36879e8ad60814bb06bc3dfdc2de8"],["categories/科学/手机/index.html","c16cf69299c38ac57105163cfb43fddf"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3a70a25defe7c21f67e092bcf77556f8"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","df55b5d6d18abd3dff027334f5a54582"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","f4d537e5dc81c6276c5300a7f1480d6d"],["movies/index.html","4faaf5b1c2e463c88ee195a733906957"],["music/index.html","a3f84c7b2ce39182305d8101b2a04a73"],["page/2/index.html","cbdac4447fa6f6d3070908c414724631"],["page/3/index.html","c87eda80c050f3041323aa1b929b6cf6"],["page/4/index.html","51ee4bb959fe1672f940660da6dd7eda"],["posts/20191204A1.html","4e42b7995804b643a83ec460f6034d3b"],["posts/20200115A1.html","a730eae6f4c385311e0100e2a613922e"],["posts/20200116A1.html","ca7953c7f32b11bd1f2845109cfba31b"],["posts/20200118A1.html","a1243c4ff2548d98ecb841ad9a389756"],["posts/20200119A1.html","85f05f10a52ccb4953e695ca679b8639"],["posts/20200119A2.html","d8618a4d209a472f5a56307b968a7ae0"],["posts/20200123A1.html","1d8b1d79a69c827f566ab69fa677ebbf"],["posts/20200204A1.html","4c73e1acd97e2d2bd7bb81d575d9e624"],["posts/20200312A1.html","401a6a8f88cac904657ff47540a5a776"],["posts/20200320A1.html","8d34e57e59b9050c601ff956b6613b02"],["posts/20200322A1.html","b32f9b1c2b36e35a74e83fb6328d2da6"],["posts/20200503A1.html","ea064908b91a2e908a1a8912cf679f9e"],["posts/20200504A1.html","d6b2def5b6302d36430f5d9714c99ba0"],["posts/20200504A2.html","ed29860a0cf04c7144248cc369996629"],["posts/20200504A3.html","54b47ca11d220da75f36ca4e9886a0cb"],["posts/20200504A4.html","79434ae1ef9908cfcdab26f0ffc368f2"],["posts/20200504A5.html","d7190867ffd080eb58e8b4888b80f2ab"],["posts/20200504A6.html","6c0bf4bb2d8fdc1bd19dc8c1332aeeaf"],["posts/20200504A7.html","06b8e53bb17efb05ea06519bf3bd2b8c"],["posts/20200504A8.html","90131e7a19ec1046406a46db75e6882b"],["posts/20200505A1.html","202d512be745dd5be0bd419670c8c665"],["posts/20200505A2.html","7ac407b5381e13b788eef1008b63ccb6"],["posts/20200505A3.html","b5283fcf09e7cbf0315a49425f491d5c"],["posts/20200507A1.html","1da379ba2a4cdbcd36dc21a0b749c1f7"],["posts/20200509A1.html","1dae9f12c409a8cb9c8480c9f02c4a8e"],["posts/20200510A1.html","f2e1166ded12569aef06c3c15f4a4886"],["posts/20200510A2.html","0fa35ffad52d427973985febd23ed0e1"],["posts/20200512A1.html","860b7102d3c471cd063b3282102a6405"],["posts/20200512A2.html","93ad1d0d4558ae563590b361fc4a4426"],["posts/20200513A1.html","27914bcc68165115d6128f47618f0a32"],["posts/20200513A2.html","347e2b27a40a5e551f07b69812a2854c"],["posts/20200514A1.html","902ea1247a203c4debd0aad1a10370fc"],["posts/20200514A2.html","b62028d8466f5d951384eb17b2942738"],["posts/20200514A3.html","ea510ddaea72ae728d8988e6b02efb7d"],["posts/20200514A4.html","3442929d36c51d36077b420d5a409cda"],["posts/20200514A5.html","709a62cb0fb644b3ba38f38d5640574f"],["posts/20200514A6.html","8997610d76e204cc79261d1633a38645"],["posts/20200514A7.html","a9028d591397b62bb9fed10eff1ff562"],["tags/AGV/index.html","2ae797a022d7f02c79ad5326e49da9f4"],["tags/Github/index.html","a175ae062383bfef84cd1fd1dd23cdbc"],["tags/Move/index.html","0d221746516ba6eff12e760505dd55c1"],["tags/OpenWRT/index.html","5931a971ef7b37ec866c33cf44ad07bd"],["tags/Plant-Simulation/index.html","7ef02f54ba5b4d74cbfd99aa08df3041"],["tags/Wordpress/index.html","2a50806bf87746952e14d581930acf1a"],["tags/cad/index.html","a82b2cc8ce10e10da556377fe3d2aeed"],["tags/coding/index.html","4d1b4aaf6fd59d35c18672cc56f462c6"],["tags/h5ai/index.html","f6e4bb1421de53ec4d27512f5ee8ae62"],["tags/hexo/index.html","cab53121f02d69a139982f41ffe0401f"],["tags/index.html","1762b5ae26a203072d579d869875bced"],["tags/nas/index.html","4841beb68f8158a1c6b78b039d3aac2d"],["tags/tpyecho/index.html","acf9ae1fd3c70818742427f8c29d7ced"],["tags/transferstation/index.html","36ddfa8ad61acb4b5e81e845db1c7bae"],["tags/typecho/index.html","64ddbe76f68e5ddbb6a8333ca0fd3d94"],["tags/ubuntu/index.html","ccc7d547ba6a99fce5e874a2f063fb9a"],["tags/写给宝贝的话/index.html","40ad163236e1b8454dfed5a64d984781"],["tags/原创/index.html","e426e4769441618c1a17d8721aaf7ba8"],["tags/学习/index.html","04ba685e251ce3ba9d42e7fa35559d23"],["tags/宝塔/index.html","d3ca7b51e81b1bfd3b8e036bb3d3dd4e"],["tags/生产模式/index.html","50a01af97d48ae1041478dad043a4c72"],["tags/百度客户端/index.html","b7c36a7d9387db9922b8e7fa92adad70"],["tags/科学/index.html","ade75014db8141528d0961167a79ebfd"],["tags/统计/index.html","bbf5e56bf10c801e34687ccc96902605"],["tags/编译/index.html","34c8713810210c2a2794326200d3a14a"]];
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







