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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","57b62bc429d588ddf5882485f27611e5"],["2020/03/12/妈妈写给宝贝的话/index.html","ee4f0aa243f9bcd5a273334ef001d28f"],["2020/03/20/磨人的小天使/index.html","a8faf02bd91a3d88f86a5bac85971d4f"],["2020/05/03/hello-world/index.html","d13438dbb7d4f5f79845d934b1cfc673"],["2020/05/04/AGV的用法/index.html","519230918bc854757b6acaf1de0b00d2"],["2020/05/04/Github创建文件夹/index.html","b1334b03e45b984cd63d982e4ce6329c"],["2020/05/04/Move的用法/index.html","b644a50da901024ca30f3fafd9946509"],["2020/05/04/PlantSimulation常规操作/index.html","af97f0002eee42d31dab789cfb4c1c81"],["2020/05/04/TransferStation的用法/index.html","4dc87c62e0002bd7e574a52d3fb5ed91"],["2020/05/04/Wordpress问题解决/index.html","bd62cfd13940f10d138d570c7e3bfbac"],["2020/05/04/无科学环境连接谷歌账户/index.html","bc429735ded86b8eaa0080e04ff02955"],["2020/05/05/Markdown的一些小技巧/index.html","139bca83ee0d994b308b3177f9776839"],["2020/05/05/导入cad作为背景图/index.html","8bc3fe777a7fe3777b0ee5b14621b450"],["2020/05/05/推动或拉动的生产模式/index.html","aa64aacc909a51c1b4ca11111b0272e9"],["about/index.html","8e2434db65580f78c892cd8ad0f2eaa2"],["archives/2020/01/index.html","239595e89b3792bb301a0bdaf525ec11"],["archives/2020/03/index.html","01f9a575dc7a18ef4b3868550cafbf32"],["archives/2020/05/index.html","08e2417ab71c903151e3f3d0ee5317da"],["archives/2020/05/page/2/index.html","1f2c0266515df484bee351e8cc9abe04"],["archives/2020/index.html","b89e395c89b5ba3eca0badfec66ab517"],["archives/2020/page/2/index.html","753e5e7f15e6f0d80227cbc2f0e4d761"],["archives/index.html","c82635688d677aaf9c585490eacbf643"],["archives/page/2/index.html","b447efbab205bf590733b17a845638d0"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","63327298023442cbebf82576f8c2a8a5"],["categories/Code/index.html","37765d09fe91f35dac1161f99a669f53"],["categories/Plant-Simulation/SimTalk/index.html","7e0fac0682b17ebf1ed7b643cf6cd178"],["categories/Plant-Simulation/index.html","4ab2d8043f44161a100e01927e2d21ab"],["categories/Plant-Simulation/实体/index.html","3fd385ee4e12fa4ab449d4164c4b3ff8"],["categories/Plant-Simulation/常规操作/index.html","ac451d236b65bf18b3de0dad2cb91b83"],["categories/Plant-Simulation/模型/index.html","1b16ad60e080113cd5c4c384c4d84578"],["categories/Plant-Simulation/背景/index.html","aad73752b85bff437620ce671ae98a74"],["categories/index.html","21db026deba0bd86d92e320a0e873d7b"],["categories/博客/Wordpress/index.html","fb223fcf0bce2a4acd046fa0d063de09"],["categories/博客/hexo/index.html","4c5aa2ce585d6e35de8064b31778b54e"],["categories/博客/index.html","74a7fe362e80ee647d94dcc391d82b20"],["categories/宝贝/BB/index.html","d6123d7ca2304f260aef5249fe1e5216"],["categories/宝贝/MM/index.html","3258538ca55756d9081483057b5c1bff"],["categories/宝贝/index.html","0cb21293318722ab651b05048f6b9668"],["categories/科学/index.html","fe6fe8b066411c7d833740ba14b96a7a"],["categories/科学/手机/index.html","31f303634ea6c676586f2489321a5480"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","2359c6c3d535daa8dc0dea6c4cc07f50"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["page/2/index.html","7f263bdbffe03307bf4ad5c9e81fd9f9"],["tags/AGV/index.html","64550c98bcd50d1123d41af1dae6c616"],["tags/Github/index.html","41f5d134be51cd2177b94139fc518aa9"],["tags/Move/index.html","243252ef2796a75ed1f268681504c727"],["tags/Plant-Simulation/index.html","29fee812bd2fb89cd422fc24c7781df8"],["tags/Wordpress/index.html","3eee7855c95726a1fbae01d2a93a0c01"],["tags/cad/index.html","751230872d02f88899da409ff8a2d3d1"],["tags/hexo/index.html","fa246a606de4348fa7c3258e4dcb6799"],["tags/index.html","9da2ccd582d15bf2e955b88133e957bb"],["tags/transferstation/index.html","8f343557ce5b607df174775a0507b9a5"],["tags/写给宝贝的话/index.html","aa4a73d4f6b43d987029ab0273d7ac5b"],["tags/生产模式/index.html","807b204ff59c961fffc27cd9ac6cab8a"],["tags/科学/index.html","0e35fc0865b0ef4df0523b4a8077f81c"]];
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







