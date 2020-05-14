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

var precacheConfig = [["Ubuntu打开防火墙.html","f530e6b180b055e68ff24a113915d46d"],["about/index.html","6296281c587f1e57b57a8ef2e4c694a5"],["archives/2019/12/index.html","dc17d82a1a0582c286e7c26138851fca"],["archives/2019/index.html","6ab3bf3b30cb89ef748c67929c9e9403"],["archives/2020/01/index.html","765c15771080a52cb82aba94d226c6a2"],["archives/2020/02/index.html","aa3afc79bd47603f0287b34859fc3d19"],["archives/2020/03/index.html","9a6478b7e2253f1dd438086de45eec30"],["archives/2020/05/index.html","5be94bd478e31a559edebee053ebc4c8"],["archives/2020/05/page/2/index.html","e84b2c712cd443d0f077ed921c901a76"],["archives/2020/05/page/3/index.html","f998e8100e8b687acbe8ed3924ebb30f"],["archives/2020/index.html","b5123c066259e7463dc704213ce25a75"],["archives/2020/page/2/index.html","9b9ce1e2c52859c44638652ffdfac929"],["archives/2020/page/3/index.html","737a1924667f28663f6fdebc5a2549d1"],["archives/2020/page/4/index.html","b651a11d395e47d7c3434ce30e3e3f69"],["archives/index.html","e7a33554d80ca32c3c965a668d317eb0"],["archives/page/2/index.html","d1a551b1cddd3f070cdd9c20cee250c1"],["archives/page/3/index.html","3c59d6f787b38eef0814cd8bcb60b596"],["archives/page/4/index.html","003c905fb0f904d2b296321366dc38f4"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","5cea2804291d8ccfda3aac2b84e21b25"],["categories/Code/index.html","b08d270452cb25849cd85db6f74aec07"],["categories/Plant-Simulation/SimTalk/index.html","022d48369a269251ae9a316a3b20352d"],["categories/Plant-Simulation/index.html","f506bb9e60f8870f671e3f369c306e61"],["categories/Plant-Simulation/实体/index.html","b2ef7ccc995f959b6451cfb611dc9aca"],["categories/Plant-Simulation/常用代码/index.html","3cafd6251a6f7524537e2f53b8d731a4"],["categories/Plant-Simulation/常规操作/index.html","1c29535383380c1df63549e148f37716"],["categories/Plant-Simulation/模型/index.html","c70989e9bd6f1ca9750acf79cf6f6afc"],["categories/Plant-Simulation/背景/index.html","2dcfc95b71265df477064876a3be750f"],["categories/index.html","634dfd507b32aed7d9443e7cd16108e9"],["categories/ubuntu/index.html","13ffd4f644846fb52312ba9062bdb65c"],["categories/ubuntu/ip/index.html","f9b21ae45a80bdcdb20ebd247472c5f4"],["categories/ubuntu/下载/index.html","2a89d0f44e30cfded2e58321338ca4a8"],["categories/ubuntu/命令/index.html","b68dae63e39be3a0bcc338d5ec481106"],["categories/ubuntu/配置/index.html","429a29c8776f10f11d060565456b3354"],["categories/博客/Wordpress/index.html","c5ed219aee99089eff8b7a7dc25242ad"],["categories/博客/hexo/index.html","6eec2eb1ad530c374ad26376a9dcf703"],["categories/博客/index.html","270a0a0c2a894cc6b518e935ec5a3597"],["categories/博客/typecho/index.html","8b67766b216fc7c0cfd865aed92fbc98"],["categories/博客/统计/index.html","5a0727ab147d2f6c143f86f01b64eb20"],["categories/宝贝/BB/index.html","c1e81371b33c3a2780c90ade99a759a3"],["categories/宝贝/MM/index.html","3592c2e5a91849025f5758e32645a640"],["categories/宝贝/index.html","b6df466bccc6185184bd93160a886cfc"],["categories/思考/index.html","85048a2c456f41a0ae0b179a31095a97"],["categories/思考/职业规划/index.html","d609a6c744083a6915ada2fcd2740249"],["categories/科学/OpenWRT/index.html","3b7f057c52bb079f8e18ec1db1064ffb"],["categories/科学/index.html","891bfddb4762e0ace84e3977fe13e544"],["categories/科学/手机/index.html","56408ecc0521daef030acb4ee0544258"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c826abe6d2e6c785007292e34a244057"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c1af3e0bb5acfa203aaa06e55e01199c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","3cb57190df9aa9da1f04a6994ddb3613"],["movies/index.html","2c4e11ed403de6d4556321097a600705"],["music/index.html","711620021a6ce753cf64131caafd577d"],["page/2/index.html","c40d6e3b2d0ebbb90efd3ec0d9ef266c"],["page/3/index.html","1f9d39712ac103d164e4c2943c9e9268"],["page/4/index.html","8f3415a1120fc537bce4058f78159cbd"],["posts/20191204A1.html","e1ffd9b6c46dbaa252585f93dc7a8f3e"],["posts/20200115A1.html","e199af216dbed744458d9ce72a40add1"],["posts/20200116A1.html","e468e1417d623485b141ee29faf0e3af"],["posts/20200118A1.html","3a7eb5e38761e746b6ba2b218b860717"],["posts/20200119A1.html","dd1418aa9a648833c6ce99c1f66c18ab"],["posts/20200119A2.html","60a69ab27ec722a2c415f6b2a1519af8"],["posts/20200123A1.html","51f3a1edb161b536ac22b22b3ffefeba"],["posts/20200204A1.html","6a86946e5eebf7d2158b00326fbd421e"],["posts/20200312A1.html","955489cf6c45b0d6ed5b1751397feac2"],["posts/20200320A1.html","ed75e8b7bd110473130d4e8c61b5b302"],["posts/20200322A1.html","adb907223a8db99186fd5c483be96400"],["posts/20200503A1.html","43e855924a5e08b83a6a235d3b7218c8"],["posts/20200504A1.html","d367e20aa88403c2cd6d7e36f53a635d"],["posts/20200504A2.html","73f903c91eb64aa66d7d59a20734f13a"],["posts/20200504A3.html","53daf53404f2dcc4e5e9ace75d0e3682"],["posts/20200504A4.html","f5869817fbe6b8bd39a60425921ddb87"],["posts/20200504A5.html","b585e60d645605312349b5f5b05859ac"],["posts/20200504A6.html","0f514d9357a6887fa3618f5e00177083"],["posts/20200504A7.html","b1adb8570db30101a49753d305eebacd"],["posts/20200504A8.html","e3fd31fe21f1478534f8c70436f51fe6"],["posts/20200505A1.html","c5637aa0089c1ec409afbb8a817c4a7b"],["posts/20200505A2.html","17f58e47d9db6e9792ea7c01192400f1"],["posts/20200505A3.html","788c9a2144794dbf260d183b854df006"],["posts/20200507A1.html","bcaa29e1c1aa5fcd92a79930c7973618"],["posts/20200509A1.html","ce02d1dff4995a28cc21cad48a85010f"],["posts/20200510A1.html","c26837381a80ae825e092851401b146f"],["posts/20200510A2.html","0c3792ce467f9a012138c13226398966"],["posts/20200512A1.html","010fb1b459371386d1d9415f04fba30a"],["posts/20200512A2.html","2e1308583848a8ef62aed570c07457b4"],["posts/20200513A1.html","846e7c42af519e2007f99e786f28e951"],["posts/20200513A2.html","1c756dcbebdf4ef052c410014412513d"],["posts/20200514A1.html","24f808b218619bdfda8f64e3fda28edb"],["posts/20200514A2.html","47e1f8322341e8506c9fb82b14411b20"],["posts/20200514A3.html","86af9a2d2b6be1178acf09f11b057211"],["posts/20200514A4.html","7f0ff44efb1f80867712de1201f7215b"],["tags/AGV/index.html","c72df0b142d01cb5687694ec58f1cce2"],["tags/Github/index.html","1fdccde102859c3f473d365f98190c46"],["tags/Move/index.html","d2327e74d744f22998f4ca521816c5c2"],["tags/OpenWRT/index.html","56d85dae4fb2f7eb87b8b15145f6c49b"],["tags/Plant-Simulation/index.html","7ab479f2e60d375d2b46590e024edc30"],["tags/Wordpress/index.html","f30d37ac53046066d7d7af7217c5ed65"],["tags/cad/index.html","44f38166bd0e75a679ad8f3089813c7e"],["tags/coding/index.html","4ab5efbbb3b4b7f2f4f6b0d7ed5aa641"],["tags/hexo/index.html","52be689ec0a319b31732ecabc9a8c8dd"],["tags/index.html","d7ee814bfb90eae93648341a17249930"],["tags/transferstation/index.html","2f204559a440cf8f5179211101be2deb"],["tags/typecho/index.html","59c165ee2995e27bd374a1121c0ad9a2"],["tags/ubuntu/index.html","f643e2448c1a46bde4effd66b384b432"],["tags/写给宝贝的话/index.html","03918b48aaca21b23c8e0ab839e03234"],["tags/原创/index.html","37c702b88fef0934c7cb2b10aa51d060"],["tags/学习/index.html","dcd750681d1d496b0a2131b10c3ab0ac"],["tags/宝塔/index.html","7fca9747128272af198bcecf1fcbb0a8"],["tags/生产模式/index.html","b2b21d4a997960101cddc418b5fd307a"],["tags/百度客户端/index.html","f5c0796f48feaa4956b7562a82299a8a"],["tags/科学/index.html","eaaf917020467c250cf897a9e025158f"],["tags/统计/index.html","b7e2544f2a1038cb31d1f1dfae397228"],["tags/编译/index.html","8b5b5269d614c0070b9806512f9172a2"]];
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







