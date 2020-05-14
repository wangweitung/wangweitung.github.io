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

var precacheConfig = [["about/index.html","3e9d2dbcbf2735b1ddddcaf0bb280368"],["archives/2019/12/index.html","c576b4a7c4355ba8d37f090e4a0053b7"],["archives/2019/index.html","8bf4e16778441fcde1bc01eb6eb0701d"],["archives/2020/01/index.html","d74fa6b30c0b9a4519ca08a5262cefa8"],["archives/2020/02/index.html","b3302a2556fbbe72b22a6bb1113de954"],["archives/2020/03/index.html","a1058951c92fc4c0488ac1227e23a0af"],["archives/2020/05/index.html","2e2a24f34fbc64c9e0535aecac6c6cd2"],["archives/2020/05/page/2/index.html","86e741db90b032067d287b9bdf91201f"],["archives/2020/05/page/3/index.html","3263e543dfd87a5778c4d1a75ee4c1e0"],["archives/2020/index.html","e675cbcaa27ef1c82342289b659ef0ba"],["archives/2020/page/2/index.html","ba70277be49ee652a12c47d8ac513f4e"],["archives/2020/page/3/index.html","b594f8c29db8ba13561afa0d36273f4c"],["archives/2020/page/4/index.html","946b697e234e1e5c0aa429e4505788be"],["archives/index.html","e8a965ae3037950bfad586a409c5c051"],["archives/page/2/index.html","958db7a8bb1261f0192e099f97d8dce8"],["archives/page/3/index.html","91208deac963642bbe9e86270d4e48fa"],["archives/page/4/index.html","d65161f69ad1fda3bb1f028c0d767aa0"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","4dcb4957aa6e66bc1d8722b7c7831574"],["categories/Code/index.html","6213279d12cfe50bcd288bd70437e50f"],["categories/Plant-Simulation/SimTalk/index.html","a53314418b313d6bef740185f4825cdd"],["categories/Plant-Simulation/index.html","82322feb04eda662162dc61f8f23be82"],["categories/Plant-Simulation/实体/index.html","acde9006ad6d4179dd9093bd534a6d01"],["categories/Plant-Simulation/常用代码/index.html","0b0e734ec91e4dd22ee255f2da065152"],["categories/Plant-Simulation/常规操作/index.html","e9d93c9c575701a42841f5d92c1cbee1"],["categories/Plant-Simulation/模型/index.html","72e10e2600f14a32669af2d51d145cd9"],["categories/Plant-Simulation/背景/index.html","ecbbe570cf96187a64d1279a08579325"],["categories/index.html","e38361e0f3c409a8b0942d7987ad4fda"],["categories/ubuntu/index.html","e1c32fd95602002cb1cc3af2fc902f12"],["categories/ubuntu/ip/index.html","1993d2c97f5104874bc572774829593b"],["categories/ubuntu/下载/index.html","ce96bf9a299d89ec7171cff733dcef85"],["categories/ubuntu/命令/index.html","6e29fb229d42095f7117702e339e61ae"],["categories/ubuntu/配置/index.html","24169b145664197f8a3b90e4644be579"],["categories/博客/Wordpress/index.html","17fef5f5a5cc17d91b0f1fcbccd749aa"],["categories/博客/hexo/index.html","a4b0e5e4126af3ae0a470807222eb80b"],["categories/博客/index.html","b8f112621897599b694c44df7adecbe1"],["categories/博客/统计/index.html","b240f173ffc16f95314fce6bae1ddfd7"],["categories/宝贝/BB/index.html","403b3fcf6145cb8cfa16e837e710c05f"],["categories/宝贝/MM/index.html","458066904accd6e08bf913ccbf9d7d9b"],["categories/宝贝/index.html","2dadd91fa27bfbe2d7abb559f6ffd22a"],["categories/思考/index.html","fc9fc14b935291f80ed7d5170a3ad4ca"],["categories/思考/职业规划/index.html","7b5fc2fb66760e61ede43a9051cf922a"],["categories/科学/OpenWRT/index.html","f4bdc12ce1799f7ff25237824b32ca16"],["categories/科学/index.html","c1a3605a77c9bc10405f4d934d9e8e18"],["categories/科学/手机/index.html","5b35343a50ee65b65230a1d98810b68d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","4e6fa03221b7b097005f2e97b5654b75"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c56d9f3fb2ff847bcf9fb5815f0deb01"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","c7173e2ade4128d7411b3e3d14e8677f"],["movies/index.html","073f4103f53c821c5921ec24c9b6ee98"],["music/index.html","ffc0aaafd3243038d9afb9e174879caa"],["page/2/index.html","874034d28c4e16b62ca7acf28b5a5748"],["page/3/index.html","762ea4e70c76b4597adca58cb93e1b90"],["page/4/index.html","e60060e08d513bc38d3c69ceb2493c86"],["posts/20191204A1.html","64e8a77375f0cbac8ae3e8464068fb40"],["posts/20200115A1.html","140ff4984cdab73c050ce3264611bb3a"],["posts/20200116A1.html","b3df3437afbb6787acc2b97ff0700dc4"],["posts/20200118A1.html","870b5afbe4f7e95e6b1990310a5b1515"],["posts/20200119A1.html","9218c69ab6bf5e8b349b2f6c435cc905"],["posts/20200119A2.html","061a135aa7fabb7c3111781a2b3086ac"],["posts/20200123A1.html","b060a5305bf12acf7ddee09dd4b788c8"],["posts/20200204A1.html","6a24193ca8a6f5fc829b340dd75493d3"],["posts/20200312A1.html","5e0ff773564b8272edea35e46143e2f0"],["posts/20200320A1.html","9d47eebcb7a3dec49c096917ca174a00"],["posts/20200322A1.html","3177d05795e86af76c7979ae1e92935c"],["posts/20200503A1.html","6acc6d72a91a67a26e9ea4e34e504b20"],["posts/20200504A1.html","5a9c06e41a12da72940f7c4f03e50b18"],["posts/20200504A2.html","58b0e508973c0e05093c34c499796571"],["posts/20200504A3.html","48ecf4f6f1cf0506a4e3f28e6d145e4b"],["posts/20200504A4.html","959ec925cb605301db49d3a2808130d2"],["posts/20200504A5.html","e540aef52ed257a79ba3935ffa4d4689"],["posts/20200504A6.html","4dc5925ea35602adf2a1a9bda86c6dbc"],["posts/20200504A7.html","f429287136636f8cf1768cff3b23427d"],["posts/20200504A8.html","c99e812248fdeaf572bc92b274826c60"],["posts/20200505A1.html","3269f268c7b406482d972619d63b4e2f"],["posts/20200505A2.html","63ee421f961b8cd36a8db43dfdf5d825"],["posts/20200505A3.html","e692c2fb68afe3d7ff7af05ab9a2ba5d"],["posts/20200507A1.html","6df1bc89e911e577d80dc00e3d3486da"],["posts/20200509A1.html","3eaad2c7ff0b458816459c31b7f14c48"],["posts/20200510A1.html","2ee927dc02c980fb828b7fa931aa0691"],["posts/20200510A2.html","db3c7e09388c4b547bd859c2e813a0c4"],["posts/20200512A1.html","fd63fb01a6098c8df45546bb9256fba8"],["posts/20200512A2.html","8fec9a20af5f1c4ae3a0a0c6fc3cbf78"],["posts/20200513A1.html","327e3e94c8e01aa982e895959aaa24f8"],["posts/20200513A2.html","5d14b44f90697125fa14d71e461f5041"],["posts/20200514A1.html","aca5ea381b35c549310d466fcd3a7a18"],["posts/20200514A2.html","fefd712fc6c93f9dc52f42124659315c"],["tags/AGV/index.html","a490c957d79ecbcead66668272204aad"],["tags/Github/index.html","a0d7f2b06d91b436031d1abf922a38e9"],["tags/Move/index.html","2160ca9724f245ce5a9c194380c76ccb"],["tags/OpenWRT/index.html","aed4219233fe3517c70e82f01345e262"],["tags/Plant-Simulation/index.html","60c355b2733771d9d0c82547c913cb7e"],["tags/Wordpress/index.html","a01638e08bd6333acaa0fd13e3b6a1a9"],["tags/cad/index.html","301b1eab79c44540e06ea416ff69b389"],["tags/coding/index.html","53dd5465d5a7f3c47c517667fb9cab15"],["tags/hexo/index.html","36917c0dbe30275513aa3d9356291222"],["tags/index.html","8ceb13772a66ef49b17f6294d287eb09"],["tags/transferstation/index.html","e2a6e95c41da52d0dd9ed0298ea399e5"],["tags/ubuntu/index.html","c090fe661b8953a148eed2d9742b3ab9"],["tags/写给宝贝的话/index.html","cd4aec62238246c02dc93122f0409736"],["tags/原创/index.html","513c7bdd73549900529b4b7703d3b97b"],["tags/学习/index.html","6b2592a8925ca6aa94c1f790af1ec42d"],["tags/宝塔/index.html","062d26e9556283c0dcbeedf838a780f7"],["tags/生产模式/index.html","e427cf45dc27d857bcf60a38c2eee910"],["tags/百度客户端/index.html","15c956fa9ec200d780e250ed7c9060b9"],["tags/科学/index.html","9ce6b7c4adbf56e9c930cfd1526a4480"],["tags/统计/index.html","9ff5386aa0583898a321e95d83f7a922"],["tags/编译/index.html","814e8aa9838d2fe26334c975d6e2d28f"]];
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







