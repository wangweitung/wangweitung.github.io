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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","57b62bc429d588ddf5882485f27611e5"],["2020/03/12/妈妈写给宝贝的话/index.html","ee4f0aa243f9bcd5a273334ef001d28f"],["2020/03/20/磨人的小天使/index.html","a8faf02bd91a3d88f86a5bac85971d4f"],["2020/05/03/hello-world/index.html","0abf96aaa3ea7bc21db30943b8002600"],["2020/05/04/AGV的用法/index.html","18a2336623fb254f0659a7ce941d329e"],["2020/05/04/Github创建文件夹/index.html","6e6240e242367cb38f9dc038dff56ad6"],["2020/05/04/Move的用法/index.html","55e054f236281549d745f2685714baed"],["2020/05/04/PlantSimulation常规操作/index.html","95a181dee5cddac32e3bc1d42f337953"],["2020/05/04/TransferStation的用法/index.html","f30d14ba157a0eadeb1e38409c3f576f"],["2020/05/04/Wordpress问题解决/index.html","009cbb604041abdf175bb2473daef99b"],["2020/05/04/无科学环境连接谷歌账户/index.html","55f578ad332dcef49a8f4c67b6349f22"],["2020/05/05/Markdown的一些小技巧/index.html","595c90f5b3820cbea10fd79c057dd52d"],["2020/05/05/导入cad作为背景图/index.html","aedf862ba95a959b82f00b622577eb57"],["2020/05/05/推动或拉动的生产模式/index.html","a748b745c312eb09580608dd5d5fb5b7"],["about/index.html","8e2434db65580f78c892cd8ad0f2eaa2"],["archives/2020/01/index.html","9e80c7e268fe03bccf2de8178f983833"],["archives/2020/03/index.html","f6c98b5ea0c145dfe9cd855d725b6e40"],["archives/2020/05/index.html","47fc05a9d028588f991b5b820953b3ff"],["archives/2020/05/page/2/index.html","acd51ddb3ddd0d7807e81e0f8d476903"],["archives/2020/index.html","38970fd039d144df03025f76733d591d"],["archives/2020/page/2/index.html","9c1807c693af48f0c7f62a65153d2be0"],["archives/index.html","26b0800ff296a8ca2dec7919760ab59a"],["archives/page/2/index.html","812727b669ae5c934fe1cdca2ff3395b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","f5d41658a4e43be9edaabd770363823f"],["categories/Code/index.html","9fa28cc10a27245bb0f1fa26f0b1f74a"],["categories/Plant-Simulation/SimTalk/index.html","cb2430cc59998912a5773def6d1fc7e5"],["categories/Plant-Simulation/index.html","8f7c0b8f6aa13679051390a17616b0b8"],["categories/Plant-Simulation/实体/index.html","307fc4d588ccd6025b57961c2cbeb55b"],["categories/Plant-Simulation/常规操作/index.html","5036316d79b4b14fcb237055b8715dfe"],["categories/Plant-Simulation/模型/index.html","3d0fb49c714a5a3f31e9cf15171e0f27"],["categories/Plant-Simulation/背景/index.html","5813e7549e4781a91d7501bbd4d52e07"],["categories/index.html","21db026deba0bd86d92e320a0e873d7b"],["categories/博客/Wordpress/index.html","4f9d210441d7aa558c04d3e8b78b9c25"],["categories/博客/hexo/index.html","5198ab5c64c2ad5ba95dc7ef802c6ed4"],["categories/博客/index.html","5bfafbaa8ff38499443eefe0d6796a6f"],["categories/宝贝/BB/index.html","f58aeb3780d525321e90614f8fd4a052"],["categories/宝贝/MM/index.html","609220a5e28f148e1dd8923c93ff24c4"],["categories/宝贝/index.html","60f800ca71c9d7da0626dff6f7af39aa"],["categories/科学/index.html","a78daeea95c66294b888ba306246c48c"],["categories/科学/手机/index.html","36d122ba2e59682857cfdc8c4c331d79"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c3ec80cb8b72449fd18bfcab9b011cd4"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["page/2/index.html","2d6ef6c80319c4c588a643ca7886b365"],["tags/AGV/index.html","b371512549e050d0ce0b7ee1d81582ca"],["tags/Github/index.html","e38a29e0340b0fbf5c47e743fb0f31c2"],["tags/Move/index.html","1b2f06ac881dbd376464ba4c21330c76"],["tags/Plant-Simulation/index.html","d9671d17e6bcd5b6464bb38d6ffa9cd1"],["tags/Wordpress/index.html","4c67b37d29a133c4892a6ae1e5b81690"],["tags/cad/index.html","aa30d01e61684e7e90cb98756c000b69"],["tags/hexo/index.html","1728f1ff2610a59d4647a950a34ad2f3"],["tags/index.html","8c645db4baeb5bc46f9b65dff0b30550"],["tags/transferstation/index.html","ba603f5d546f3dcd43d880c73dc30f5d"],["tags/写给宝贝的话/index.html","9a29923e025960fe3729f0db412df819"],["tags/生产模式/index.html","c600f411388f04f54c28e25a99060bd8"],["tags/科学/index.html","1bbd259afa01cce4c5fa791d76f74796"]];
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







