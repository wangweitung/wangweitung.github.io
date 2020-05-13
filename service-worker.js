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

var precacheConfig = [["about/index.html","fc08edc285f3e5e34ca6faf1d029ab28"],["archives/2019/12/index.html","1a551a71231b1bc3e5152ce0e21dc3a2"],["archives/2019/index.html","f997b80668daec9645704aba90f464b6"],["archives/2020/01/index.html","3a07b499a2d95736386e8eba122373bb"],["archives/2020/02/index.html","eed3b385bf921f6538413052ac3f5f55"],["archives/2020/03/index.html","73b686ea36ecc157e6c93c13f2c74473"],["archives/2020/05/index.html","793fb0f4966f92a565d5be13047fcffe"],["archives/2020/05/page/2/index.html","04153825ea9401701e500a46fc1273cd"],["archives/2020/index.html","4aec480d40e59b1e5cdf5dcd5bbf13ab"],["archives/2020/page/2/index.html","085392118fb39d818039ad5efa1caa63"],["archives/2020/page/3/index.html","4312b3ffd00e06468d4b516b7c49b447"],["archives/index.html","2722a6116d3a817b6e1ef07ed4855202"],["archives/page/2/index.html","578c0d0277a6dea2c86d2e33b41c7e94"],["archives/page/3/index.html","984ad030bb6e7a661fa32be79fe78ac8"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","15e37f0ec2007d8285bab2721335a22b"],["categories/Code/index.html","a3ba75f0fbcbf49819c2e9e0dd41abbc"],["categories/OpenWRT/index.html","69626afa51fe19f4c04def8ad48a9c04"],["categories/Plant-Simulation/SimTalk/index.html","dfb8942c8c7dd6bb0613e1a45693f11a"],["categories/Plant-Simulation/index.html","d41bdba48cadad6b9a34c4110e3771d0"],["categories/Plant-Simulation/实体/index.html","b7554db377f160e456f372ae6288561f"],["categories/Plant-Simulation/常规操作/index.html","60b73809a9ad61a67ca6af08eb9291af"],["categories/Plant-Simulation/模型/index.html","c55e3d120b694668f6f77539032e1683"],["categories/Plant-Simulation/背景/index.html","f781b3103780f2dc94c2ddec0fdfbfd8"],["categories/index.html","07002dbc89a48632117e794363d67097"],["categories/ubuntu/index.html","bfd8350a4dac9dac75a200fb304998bf"],["categories/ubuntu/ip/index.html","b685c0351d783140b993d510fabcf1ed"],["categories/ubuntu/下载/index.html","70ad5c3ebe845236e731eb098e5c5c30"],["categories/ubuntu/命令/index.html","40518e4aebf2145d569d125e966761fb"],["categories/ubuntu/配置/index.html","1db472653d8590d3c61765d8f9ca29cb"],["categories/博客/Wordpress/index.html","8424f05df6e1646511fcf2a7cbd3fcfe"],["categories/博客/hexo/index.html","932eec3f3124ef7231c5a66506ec17d9"],["categories/博客/index.html","acefaa2294d879a72a17b497a21785ad"],["categories/博客/统计/index.html","384ed4e7e71d00dc31111d5140244dd4"],["categories/宝贝/BB/index.html","91e20854e2d242891e22d5579e74cb8a"],["categories/宝贝/MM/index.html","f15fc2f257b41e1cff946a56a8bc6c20"],["categories/宝贝/index.html","1ce1fd1e6046a0c47ee03d20d035bb90"],["categories/思考/index.html","eaa16fa4440846208ef355df3b52ce04"],["categories/思考/职业规划/index.html","54f82bdb9d1745121c4c378171c9327b"],["categories/科学/index.html","cdf799e7c8f89e75a7458c6bc471a3e1"],["categories/科学/手机/index.html","026822336d07fcc05e20ad6c0af47403"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","9978b29181c3ae87cc1b9511bcefe6ce"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","a0d66b886650c347f2a8f47335c775e0"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","46dca6fb8b41c87e70780f1b7ad9a9c8"],["movies/index.html","ee1fe80dd3ada0cfc7f10b9c9645ba27"],["music/index.html","c2c517657d73821b4b8a9dbc89b383f6"],["page/2/index.html","8ad652a655077ced42a57b46efed4252"],["page/3/index.html","ce203882ca2c6f9b66a4ecfa1f596490"],["posts/20191204A1.html","3a723378a20b6536511088844ebcce20"],["posts/20200115A1.html","c79225eb3e1e8ac4765f73e1c1622a8f"],["posts/20200116A1.html","fbc7176a6e31693dfd9182a552f51ae5"],["posts/20200118A1.html","84ae9f5b33afc532a016640a89624820"],["posts/20200119A1.html","68064a3bf3d6868e920e51e7de5989b2"],["posts/20200119A2.html","fd913ef491af83dcfb1ac8b0501dfa2c"],["posts/20200123A1.html","02a5d4fd03e23f6b29e85b6470b42228"],["posts/20200204A1.html","201a75e56d47cbded3406478c136fb8e"],["posts/20200312A1.html","d48d82e00ef938c9f8a4622c714ddc84"],["posts/20200320A1.html","ba5c694a099f541c6d29c739ba436fcf"],["posts/20200503A1.html","8e114e4c7d043e42ac0deb0fa49681cb"],["posts/20200504A1.html","1c78ee5332f1587252067363b5b32c5b"],["posts/20200504A2.html","e35ae18510a1769b901abca3b608e4b2"],["posts/20200504A3.html","7b87bff7941cab79cd7fef3af5191c69"],["posts/20200504A4.html","57c95c02c7d572c413201250093de3ec"],["posts/20200504A5.html","a7e5a475c9127d7907d176c4345f0cfc"],["posts/20200504A6.html","49f69558510afab847ff678088c2b39e"],["posts/20200504A7.html","989cbc9c35bbac8d1a71a2c51c3c5733"],["posts/20200504A8.html","0420214b509719a49cbb7979da6c70db"],["posts/20200505A1.html","c708179112bf5e97feebc0198673fc58"],["posts/20200505A2.html","bb47d391a31789f2d3faf04427fe13d2"],["posts/20200505A3.html","0fab63b38d34823451f61ed6c2c0339c"],["posts/20200507A1.html","7213d1ef9d74ac41587c1884c3f1a340"],["posts/20200509A1.html","487056223629c1993e6a57b9059cdaba"],["posts/20200510A1.html","04bfd5001f5afab54415a9d707749c47"],["posts/20200510A2.html","050c9d82be5908351983e050c7d4ad06"],["posts/20200512A1.html","6881431810f23a7f07e19a8c8cd41ed7"],["posts/20200512A2.html","f3e2cd104dc784fbf7cd620721b398c6"],["posts/20200513A1.html","d98a58c7b9515bf97be10f0114789ea9"],["tags/AGV/index.html","0f60de862de26cd5bc831a6f65282740"],["tags/Github/index.html","b21ce30069e17c60a8218f88b9a73e42"],["tags/Move/index.html","26619ba23459b3c678cecc8687e2d438"],["tags/OpenWRT/index.html","34415eb69a18dd2c8b3fc5de86b532a3"],["tags/Plant-Simulation/index.html","008c7c030badaa9dba10ee045f38723e"],["tags/Wordpress/index.html","38d5350b26473ec1486a2681a4cee0a6"],["tags/cad/index.html","911ba7348846e6192dfa097dbf8fbd42"],["tags/coding/index.html","1cf36a4ff85653b1a083cec8738a09a5"],["tags/hexo/index.html","cdde2f6c3729dd49f72e96ae729af411"],["tags/index.html","cd17e0702ca86fdd888a1f211afa210e"],["tags/transferstation/index.html","be8f715b479b38f198b3d63f144270d6"],["tags/ubuntu/index.html","251f6989bae1f3a3112bee2606939864"],["tags/写给宝贝的话/index.html","9774ab3da581441a5f36f31fd96b74e9"],["tags/原创/index.html","e6901cf00d2fd16ec4c97a0cfc142267"],["tags/学习/index.html","2655a75b00e0b7e0517870ced0fba694"],["tags/宝塔/index.html","e5918f1bd1f0c5af2eaa56cc31cc1ae8"],["tags/生产模式/index.html","feedf1c9464fb5143491471d0573b24a"],["tags/百度客户端/index.html","b675ccb734bae776599ed13ccdc4da78"],["tags/科学/index.html","0ea3c31bec1596b0e0d8d123c9ecba6c"],["tags/统计/index.html","85d3d75836f38f15af50026aaf61ee3c"]];
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







