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

var precacheConfig = [["about/index.html","dd848fce8ab1a0f080c8decc02f0ac53"],["archives/2019/12/index.html","3a94999e419290fc735af50605bcd7c9"],["archives/2019/index.html","d14f4a30c8dfc4ad29c7ffdf8c59867c"],["archives/2020/01/index.html","53a451cdf5a6ceacb90cc92cf56cbc3c"],["archives/2020/02/index.html","15af3adf499e363b10c125184523912e"],["archives/2020/03/index.html","305516fd63a0a67a7465334096b8063c"],["archives/2020/05/index.html","14ad7c159481184a4a948463780a8236"],["archives/2020/05/page/2/index.html","a67138d829096ec497be5fd927c7ddc7"],["archives/2020/05/page/3/index.html","c5164fd7da2367200fec903324fd3f56"],["archives/2020/index.html","20310d7047ce76753b7900ec05835e11"],["archives/2020/page/2/index.html","ac50b0748d70b38ec23fa1e49337a40c"],["archives/2020/page/3/index.html","d17cd08e42292880d330ec90c33a37bd"],["archives/2020/page/4/index.html","e235e5c9d213d9af1fbc1d1bec0f73a6"],["archives/index.html","95d453133f15d6f95ec58fb346d7a966"],["archives/page/2/index.html","9e1a4b7b563cfed2bf7c7d3fe93bf4a0"],["archives/page/3/index.html","caf50e375e47ae5d864b045cc3ed31f7"],["archives/page/4/index.html","b0973b7528c84e279444ee5601abebff"],["archives/page/5/index.html","40233536a2221bb3c7dfd62c146d2cd6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","1ed9c74386892fa289e89d3bc21dce70"],["categories/Code/index.html","d80a60c0e04fd7612a72dcf1efca7e3e"],["categories/Plant-Simulation/SimTalk/index.html","361a4821358cab3c48987d15d34b43de"],["categories/Plant-Simulation/index.html","69ffcf0849d88ff4fa4ff160dda4db19"],["categories/Plant-Simulation/实体/index.html","8e4f1bbfd01a5adbf8bd2748c781a4d5"],["categories/Plant-Simulation/常用代码/index.html","28afa00106e56cd38d697ff642a9ae24"],["categories/Plant-Simulation/常规操作/index.html","6a76dd67a8f47f77f7efc7e8edbf7005"],["categories/Plant-Simulation/模型/index.html","d538cc687bef9a73d597dc3ee314fe4d"],["categories/Plant-Simulation/背景/index.html","7918c53d5c15791a252f20c010dcb2b3"],["categories/index.html","4938ccbb9175507a75e3ddc77ff23dee"],["categories/nas/index.html","87f91188ffe68819655ea0f5f1a46ca1"],["categories/ubuntu/index.html","114065c3aa28a9cb44e5970f5cd55cb7"],["categories/ubuntu/ip/index.html","117563a26693651f13cded9ba2362b83"],["categories/ubuntu/下载/index.html","95656cabbe37e285d2b501c77c76430c"],["categories/ubuntu/命令/index.html","33c3d65f9846daa90eca3107a424b512"],["categories/ubuntu/配置/index.html","6267bf786eb475a9c472216a57807494"],["categories/仿真/index.html","6187ee7ad5d247cb7d8b2e2400dda581"],["categories/博客/Wordpress/index.html","e0c09a79e8ef01158779985d7a225ba0"],["categories/博客/hexo/index.html","62e2030c9e90b6eccc7893f70ff4a96d"],["categories/博客/index.html","6a926fe59d1110b0260106e5566ae54f"],["categories/博客/page/2/index.html","d12ac86baa44849b5ab797a9b7a4fe7e"],["categories/博客/typecho/index.html","ef95f0b407f54705a57d4cb4f1aed3d2"],["categories/博客/统计/index.html","f72f2e08df6e8e2a553d6802001df51d"],["categories/宝贝/BB/index.html","7b9b8d2ec8bc095016338b13f4a08573"],["categories/宝贝/MM/index.html","d48077faa783afafe7336f48c251f2b1"],["categories/宝贝/index.html","bb702380d3fb75a111b1c02c71983984"],["categories/思考/index.html","527afffce5e9807c5ef94318b7db91d0"],["categories/思考/职业规划/index.html","b8c9eb33767c84710093553e7dc95738"],["categories/科学/OpenWRT/index.html","c3eb538e9557e769c112e69083c3e1cd"],["categories/科学/index.html","e75768f8c586e4f125c80504057d8634"],["categories/科学/手机/index.html","27bf28b9f47ade08fcce4ea1f1bbbcd3"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1906cfd2993053d1f557d1fcfddbd840"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c53f531ae7ebbbc8e389579511914122"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6f920418ae57fdab0ae3f9196cb52187"],["movies/index.html","12cc3b5e4da5a838393c76c84a92711c"],["music/index.html","ffb82e5f728ab33e861938320ee1f870"],["page/2/index.html","e22f6640d7d4c5c7ced32607e26ea028"],["page/3/index.html","78b46ac87eb31a973a73a27bfe2e47cd"],["page/4/index.html","71f8a43940c02576113bee0abae65217"],["page/5/index.html","bac1e713f604dd9e88a1aec98e30ece3"],["posts/20191204A1.html","13077e8afef906acb04f821205fc3033"],["posts/20200115A1.html","b4ac0bd1e21f6dd2d2dc4d8873bd7428"],["posts/20200116A1.html","d10435ee6ab3b4754637af2af7ad2abe"],["posts/20200118A1.html","38adb03f3edd9d376682919153ce1ec2"],["posts/20200119A1.html","93bce66d0fce0a296646bd8e7e8d17b8"],["posts/20200119A2.html","0eaa152f0a519921291038cd143a85de"],["posts/20200123A1.html","51617b09ba5d0f9014127823433b23a5"],["posts/20200204A1.html","da22503a79e8a0554cf2754e0669f9ca"],["posts/20200312A1.html","5d9636fdb380d8ee7d66926cb1415e7f"],["posts/20200320A1.html","06246991a3a18bb49267d3383a956c74"],["posts/20200322A1.html","1c5a4aecd3fb0c21b8acc624bef5fa3b"],["posts/20200503A1.html","f8620c010d4c8616ce642ce847ea3d97"],["posts/20200504A1.html","7c10fbbd10fceec4a7eef99ec8da0d0a"],["posts/20200504A2.html","01af40922c51cd8defcf47be75f74858"],["posts/20200504A3.html","fd2934500b4884619e08f6992543a3f7"],["posts/20200504A4.html","02d8279eee719aefd4ac96f674b3dc2c"],["posts/20200504A5.html","fb609c6a32c744e2da38884969b7c28d"],["posts/20200504A6.html","a82c5aea6733413feede5aa334776704"],["posts/20200504A7.html","0796b104b88b3603c48fed5e00f2622f"],["posts/20200504A8.html","548408bce06b11aaa631ca9b2993c193"],["posts/20200505A1.html","8ee1a0b238804e8081b306cc6d8d8ae5"],["posts/20200505A2.html","7a43794d2c26c6536961db6024583420"],["posts/20200505A3.html","0699ddb3611b67406dbab5191f13853c"],["posts/20200507A1.html","98aac2fe4c74d85a39deeb2c9194bc69"],["posts/20200509A1.html","ef43b1911870f5e7fd3412d421b28555"],["posts/20200510A1.html","42f44ea5f24e4b02e45ccd2bd1c231b6"],["posts/20200510A2.html","1e90f7328dfb66aaf3af13ca54c9602a"],["posts/20200512A1.html","a2f64ba16cc79fcd5ca5991d56ebb019"],["posts/20200512A2.html","b54da9726d05ecc7eac2e3e6450b5fb7"],["posts/20200513A1.html","3e2961cf82cc29c7308bc1669192b0c9"],["posts/20200513A2.html","02b0af0cc43f4b63ab138a735256f1d2"],["posts/20200514A1.html","9c9de3cfb930a9157016f5e8995c62f7"],["posts/20200514A10.html","742b64a88a41c6d2143c8eeabab13c61"],["posts/20200514A2.html","672d3a406317a05b8fb68af1effb6567"],["posts/20200514A3.html","a087b277919829429a6c8d66b10f6798"],["posts/20200514A4.html","8c8cdc8681db39c53ff13192efc8e8ca"],["posts/20200514A5.html","9c08d276bba4f1450e148a6d09aa7971"],["posts/20200514A6.html","af2456df7dab6c8eeff21be5e6c140eb"],["posts/20200514A7.html","59e883a01488f59679262a3d44a69a91"],["posts/20200514A8.html","ba5d0bbb245105795e6b6f5ed827e5ba"],["posts/20200514A9.html","cfaff8b0c60e0f0f6aa0a853e0e8bfd9"],["tags/AGV/index.html","8fbff958e4b8f9905806054300e38ea2"],["tags/Github/index.html","b953fe4bb0702090f1784dab43f1d352"],["tags/Move/index.html","9c0958915d1dc39cc09a1e8e082535e3"],["tags/OpenWRT/index.html","ec7d5ecb8356f9b8c4a1089d08e5f66c"],["tags/Plant-Simulation/index.html","6d3acf32925c10c48d3351a22d23fd73"],["tags/Wordpress/index.html","dceafeb60d73b02b0fffb3d0e96988e8"],["tags/cad/index.html","632d872f81d7a9ba5fea947f56388a32"],["tags/coding/index.html","e4803ab81a05b445134c151955e3fe4d"],["tags/h5ai/index.html","9a06bdbaffbb03a0bbe8c05aef77aa67"],["tags/hexo/index.html","945e6f52240b80f87e1cecd959a36a91"],["tags/index.html","6d14bf9f79659c70c6c7530cea265166"],["tags/nas/index.html","91cfee73995d1b22c62fbed34a75ff37"],["tags/tpyecho/index.html","24b2769acc46b103e5b3ddce81ba31a5"],["tags/transferstation/index.html","40a80cf43bb1886e6711f6614bb01cfd"],["tags/typecho/index.html","60fa8548d3646540806344b0a1637fe5"],["tags/ubuntu/index.html","08e1a361dd4d10641cd2ed0b6d180b41"],["tags/仿真/index.html","1ffdf57609a57f13935577e4abc4e14e"],["tags/写给宝贝的话/index.html","b24ec2950f93c10d060c7ca6b026d35d"],["tags/原创/index.html","42dfb6636e6cba3fa7b44bba3a78816a"],["tags/学习/index.html","3e5f5f02f8c15fe58fa519da9a20dcbf"],["tags/宝塔/index.html","eb204d7cff95400dc25a4be3b22b6666"],["tags/生产模式/index.html","3600c13439341b1775639e2f19fb2d19"],["tags/百度客户端/index.html","d1c74383f483464772648a46df905fbc"],["tags/科学/index.html","b504d36c3ffe8f7db760002465e79e8c"],["tags/统计/index.html","d5727dc3dbeb14896e0aa760e1a8dd44"],["tags/编译/index.html","bc48f4f5029dbfa63858178bcd5ecd3f"]];
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







