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

var precacheConfig = [["Ubuntu打开防火墙.html","b11da55368b9782f333c0a797b7a9c9e"],["about/index.html","bb327bd2a202d8abea7f2a88b0b530c7"],["archives/2019/12/index.html","f7bb84154901a8380a2d49cc02ca9ea1"],["archives/2019/index.html","a95856aae4d1af2a181c04f1ac1dd51f"],["archives/2020/01/index.html","3d0d375bc2a594538374becad9d4ca8a"],["archives/2020/02/index.html","c18c9480bb329ead2c3525e694f5afcd"],["archives/2020/03/index.html","05dbe8aec63cbd3302b89d5ce975c3b1"],["archives/2020/05/index.html","6d2ff49c363da4bc3c2347d8358c9fad"],["archives/2020/05/page/2/index.html","6bc8a5a5577d0c24309559fd6e03af7d"],["archives/2020/05/page/3/index.html","661ba28c80260301bf98a9ad1af4acf2"],["archives/2020/index.html","33ec81eac686851a3279f92d81256831"],["archives/2020/page/2/index.html","e01af6c4a011f0ffc61748b5fc2b263f"],["archives/2020/page/3/index.html","52e15114649234042ca027d3c77c78ac"],["archives/2020/page/4/index.html","8d15edc5070824abdf76806f15b23d8b"],["archives/index.html","8e87c4fd19544f5c2660931530025e7f"],["archives/page/2/index.html","324cac2565a6ff1f74283cb58b7ab3c5"],["archives/page/3/index.html","f2258804b3c67c52a140ce0985d9f1aa"],["archives/page/4/index.html","7731f6abaf40c7967786df44a7efc227"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","769308e41f65f5cd247e208fc858b3df"],["categories/Code/index.html","0bb2f3a7db7bfeb7f4a5d82802036a90"],["categories/Plant-Simulation/SimTalk/index.html","86bddfbeb3cefa7fb845434b8220fad9"],["categories/Plant-Simulation/index.html","d056a49dbd2a2bf04bf833a057f159f0"],["categories/Plant-Simulation/实体/index.html","69688b5c8cf71b6f244b6dff9ccf480e"],["categories/Plant-Simulation/常用代码/index.html","e299f3c09a8d94e30170f2981e3b809b"],["categories/Plant-Simulation/常规操作/index.html","a053ffaed5198cfc31a472db346d0982"],["categories/Plant-Simulation/模型/index.html","4f4ac533cd29f5d8809e6e659deedd53"],["categories/Plant-Simulation/背景/index.html","ffaa9ff6c8ea666e55d09bf7e6601e3c"],["categories/index.html","9f6351cc362431518ba797514352f871"],["categories/ubuntu/index.html","57ad2a9b4496dc118a8dc914854e5e02"],["categories/ubuntu/ip/index.html","6dbee0ab2a444ce35d28254a6c46552e"],["categories/ubuntu/下载/index.html","eb0ae69ebe2a409183f9888a704a5bb8"],["categories/ubuntu/命令/index.html","14fb255da9f375ecfe2fe2ae2bf10309"],["categories/ubuntu/配置/index.html","0959253fd008a59317f83804e9b4d7a7"],["categories/博客/Wordpress/index.html","05185ce7afcabfc9730bd99267dbe5a2"],["categories/博客/hexo/index.html","8ad5fc36380de72c85332794b739f9dc"],["categories/博客/index.html","16c59cdc495fcf1c41b23e01506eb8ef"],["categories/博客/typecho/hexo/index.html","6df34565df1477e35c021e6677c0f4cc"],["categories/博客/typecho/index.html","fa3b1974f2b4c24caaa1bcf16b477c97"],["categories/博客/统计/index.html","c9fb6282478a6723a1b8295a15b3bfa6"],["categories/宝贝/BB/index.html","dbc9f80384662d365b5bfdc959b71042"],["categories/宝贝/MM/index.html","26591dd23aedb5dfd50b495a3dcd67ad"],["categories/宝贝/index.html","0388c494997e5ddadab65128d99b8c40"],["categories/思考/index.html","19f0a9325b9f4d883bc933c052c0a22a"],["categories/思考/职业规划/index.html","b067d2823bcc0f5f443a3fff50be39d4"],["categories/科学/OpenWRT/index.html","e2afc3c476921ade5d6018b6e688d6b5"],["categories/科学/index.html","a06980d22f583f91ea4eb99b75afb45e"],["categories/科学/手机/index.html","9de31bbeb7bcf1b04cd655f7c60a01b0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e573cb23b74e9f604ca70125675bd0fd"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","897303a99c6d876e14619ae92f059f34"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6b255950ddd530bf2f190f4e06eb7b1b"],["movies/index.html","e6463036b385e26bee487159ed68aef8"],["music/index.html","8ea7546e48a63fec6af6e55d7472cbd8"],["page/2/index.html","d0ffd879d392266df17543e515aab1d8"],["page/3/index.html","e4ddcee1d430fcb0ed476416687240d2"],["page/4/index.html","f21671ecb8ea97a765db4ebb2ab68125"],["posts/20191204A1.html","df30752fc21ecaa0e4c1f1915c4c682f"],["posts/20200115A1.html","224784022c6f7912df009e5f7c126db6"],["posts/20200116A1.html","2e96608eb8de483f39e2961477f4142e"],["posts/20200118A1.html","251535dc1d8b3a0e569129016d788432"],["posts/20200119A1.html","40cc3e364738bf6ef0d326a392fd886b"],["posts/20200119A2.html","35dfa5accd9e646c6f65945bacf8fbc3"],["posts/20200123A1.html","40518ecb57e1fc42e4d1f0c88647be0c"],["posts/20200204A1.html","30e3de02fa335c84906db2b30557fdb5"],["posts/20200312A1.html","460171c7a24c5430887a4d133dfe091a"],["posts/20200320A1.html","d59eb69d7e76f8b826407fd9c7488a35"],["posts/20200322A1.html","38dd90a2a83b3d58554df7fed7816012"],["posts/20200503A1.html","973e8a0d8c1244302b86246f09eb2054"],["posts/20200504A1.html","817a6479ee8225877d797e692a2b8ef9"],["posts/20200504A2.html","3abef5fb0219fa185fad4c8f5a7ef45f"],["posts/20200504A3.html","dc41cd013b8abc8eb169d8187c554309"],["posts/20200504A4.html","a407f9e2b856866199611a1d4cfc859f"],["posts/20200504A5.html","404edbd3ef42269b6019363c781b9ca9"],["posts/20200504A6.html","ec86ee370ecf4fee31af7ac8943655ab"],["posts/20200504A7.html","fad2251f9ae23db37181f6343707272b"],["posts/20200504A8.html","00d8719459c4e714d5a74949a70b5a6e"],["posts/20200505A1.html","77bba0e54951a7cef6b360247d54d7a8"],["posts/20200505A2.html","d4d0d6d9e751d3d9afb797955d09e400"],["posts/20200505A3.html","f2a423d2946c36cecf3a0ca3a8dd8d31"],["posts/20200507A1.html","297ffa34b11f3bd7c3452e53b1196216"],["posts/20200509A1.html","7ea9cdf1dfe160aad857f187a9ba1b94"],["posts/20200510A1.html","448df79113442d7c1353d59ef6e446a5"],["posts/20200510A2.html","0b62f8ab429b5d3b88297d181b1a94b8"],["posts/20200512A1.html","9f4fb685ef8c18b98ea1098b5e63234f"],["posts/20200512A2.html","9c1e5040bb8f0fd7144f3851ab382c7e"],["posts/20200513A1.html","b807a772295f5ce4dca293ee614658e8"],["posts/20200513A2.html","e6acced7b479af36f3d82aca57d65320"],["posts/20200514A1.html","4ef001ec0b9d1b0ec57b7789a64eba2c"],["posts/20200514A2.html","9b3a850b286f3fd6df8e7a3d4dacb303"],["posts/20200514A3.html","975884fb8374bcf021a954a5b9862ca7"],["posts/20200514A4.html","1fa5259eb88ded18efc2656623526591"],["posts/20200514A5.html","1746d7813dbc0ded0690387174ecac50"],["tags/AGV/index.html","cb3043bb8bae9fa1b076797dab661152"],["tags/Github/index.html","2a0738c07fef430060d3f23eecb9965a"],["tags/Move/index.html","05b24c88ae1c5405c476c77fcb96fc3c"],["tags/OpenWRT/index.html","0648ad303ff4e22aba8f29a53b5afb04"],["tags/Plant-Simulation/index.html","f378c30dafae22e4ad174066e09e4983"],["tags/Wordpress/index.html","64f79621b3da443fa61bca925a33c9ce"],["tags/cad/index.html","0c67a293cbcc7e93e98186133fb48058"],["tags/coding/index.html","fcd5ddfde8ebcc2bd758239230eb2715"],["tags/hexo/index.html","c6da0ab41cadbd89fdc2f0f51f5d339b"],["tags/index.html","147799466c0f753605806ef70cf5e89e"],["tags/tpyecho/index.html","927e55f1cd6f4eb28e89b94e8a70e504"],["tags/transferstation/index.html","c1bf988a725751761ad07a64e8435ad0"],["tags/typecho/index.html","90809c0a9d7386c7dbd232f929834510"],["tags/ubuntu/index.html","83e5a03423c892c27236dc92cfd55217"],["tags/写给宝贝的话/index.html","f562da0e2d6c2f5da81ee1c73e912e48"],["tags/原创/index.html","000aa61d40933d538fa10fbe4713fafa"],["tags/学习/index.html","c45be2ef60763e421c1e4aee54f6c743"],["tags/宝塔/index.html","1ab0a939bc128704669a40b27e9bfd03"],["tags/生产模式/index.html","7f084092f8de5cf3c5f4e457fd2d6eb7"],["tags/百度客户端/index.html","d49944ed005a8f06d4b6cbba2565727f"],["tags/科学/index.html","5e27fc5673400f4889820e578f788660"],["tags/统计/index.html","526818b01603bac3e1d3863540a82c9d"],["tags/编译/index.html","56678f7e2c8faea3552baa37dc41118a"]];
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







