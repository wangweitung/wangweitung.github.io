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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","9eb029a3d592a86f8e9d62d1dbffa7af"],["2020/03/12/妈妈写给宝贝的话/index.html","9f996538c2c32ceb3f773f79be13241a"],["2020/03/20/磨人的小天使/index.html","5beae44e6a15546b1418832aa8176ecf"],["2020/05/03/hello-world/index.html","c8e2c348609258fe7309d6eaca10468b"],["2020/05/04/AGV的用法/index.html","d189a448b65d9865a371883a631ee7c8"],["2020/05/04/Github创建文件夹/index.html","19398efc04da8a775e4b939dc12346dd"],["2020/05/04/Move的用法/index.html","30b0cb4d4a7dba471577026d686c1ffe"],["2020/05/04/PlantSimulation常规操作/index.html","92de7fce0fd85e845e76b50de48bfdd6"],["2020/05/04/TransferStation的用法/index.html","86b01cbe37ccbc4b674a9e29f1909bd3"],["2020/05/04/Wordpress问题解决/index.html","4a1f9af9fe484c8fe6641a465115e105"],["2020/05/04/无科学环境连接谷歌账户/index.html","f9ba2987e88c4c53cc100b39a60e2f4c"],["2020/05/05/Markdown的一些小技巧/index.html","a6612dabed5f8d9d0e1fa481744cf8b4"],["2020/05/05/导入cad作为背景图/index.html","3df42b6af79b5a4088f75ce746f5bc9c"],["2020/05/05/推动或拉动的生产模式/index.html","690abe28e22b4c6aec40c8101c19e60d"],["2020/05/07/在摊位下上网课的小女孩/index.html","74ebcd12f53cb14f0c8aca70d0a56a84"],["about/index.html","e22955f8c8dfc0dab397426173d327e4"],["archives/2020/01/index.html","6150c7980ab52be5de5ab97b80ffcc00"],["archives/2020/03/index.html","1f36e0f77a0b478d378914766b5ebc87"],["archives/2020/05/index.html","7a06182b980709f5e0afa50980de29fe"],["archives/2020/05/page/2/index.html","ef615679dc13f8a1b8194f4114eb14e3"],["archives/2020/index.html","268969d2954996a474766c5f6c1074a4"],["archives/2020/page/2/index.html","25dc87e2edd4cb296ed5ccc5a75d0a3e"],["archives/index.html","ea9b28a617d5421eb0d48ad51771d952"],["archives/page/2/index.html","2a7da5b1a83e3b06e042e683b255d110"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","5447b870b9d8358f76dd23c3f3bb2ba4"],["categories/Code/index.html","0d4e5b8f1ab326bc76f133e7c89e6533"],["categories/Plant-Simulation/SimTalk/index.html","09c6a4d6ed41d62c0e0c9b77dd1115cc"],["categories/Plant-Simulation/index.html","b76fdd5ebce7aa8620f64764a401ac08"],["categories/Plant-Simulation/实体/index.html","6ad2e17e0e21fbf90785f73468d6298c"],["categories/Plant-Simulation/常规操作/index.html","f2dbddc98c16ba16b720357b3c98ed36"],["categories/Plant-Simulation/模型/index.html","700f2091648e6c07c8b4151455504b81"],["categories/Plant-Simulation/背景/index.html","4c8df33556a122a9b8c317437c5900da"],["categories/index.html","6dbaabe8c11ee28b9c7fde09e9b91b9e"],["categories/写给宝贝的话/BB/index.html","7f50dfab7c7c9be19257d4eb969b464d"],["categories/写给宝贝的话/index.html","a085a0918ef8cc05951b61b697df662d"],["categories/博客/Wordpress/index.html","705d5f29ca2a2ee74510a3e79e27c911"],["categories/博客/hexo/index.html","8c8510c63d20ed3327e3a95693eb8817"],["categories/博客/index.html","66c32278f2d98539f4a3654e1d6ecc7f"],["categories/宝贝/BB/index.html","f01ec65f64e4859e7d1f591f176befdb"],["categories/宝贝/MM/index.html","2fefa4130dfe9ed2a334253bccb8a516"],["categories/宝贝/index.html","651cbf5f6d393b4838a9223c52b8dcc1"],["categories/科学/index.html","ce95e497837f39f02ce5095f63854607"],["categories/科学/手机/index.html","b00cfe2472b015a12059bdf22a600ce1"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","157ead7570cb823c0c50172550b5b10f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","18933a8a2d7e7b7c1d7bf3fea0e51234"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","d5355a2496c1510a6a7d7c352128cafa"],["link/index.html","15f3172abcf3d73b8b9fd6da0391e5bb"],["movies/index.html","7bf0041f227a62ae11587520cc6d2d2f"],["music/index.html","203cce3da1e0837c44de8e09ec76cca5"],["page/2/index.html","a9889478051721ba037f4c552d6b6c01"],["tags/AGV/index.html","26860a29d2c2d49fede7ddea324f3d18"],["tags/Github/index.html","6cd716cf4c1028ca7917c204647768e3"],["tags/Move/index.html","d500b175fda26ee1fea4e5b933d3a2b0"],["tags/Plant-Simulation/index.html","17c5080d410da602dfa793f0c9311f34"],["tags/Wordpress/index.html","bf471182b4c0b0b8c036a1c65db213bc"],["tags/cad/index.html","91edf701f45e5b65f11b7180e2e8c819"],["tags/hexo/index.html","b6c06ccdeeee682fbf2823f36fb86e8b"],["tags/index.html","5983a4b7ac7f86624a1373f8e6638f07"],["tags/transferstation/index.html","f24fe4cb82e6a798804fe682dd31c4df"],["tags/写给宝贝的话/index.html","5e291f96022d1794fd443e559850feee"],["tags/学习/index.html","05d3d1ea84a5e11cc1acb378786a9406"],["tags/生产模式/index.html","0ef5895b6ed300b3c91f42bbe3843566"],["tags/科学/index.html","3307012dfd0f2a421bd5805d5c1e7a37"]];
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







