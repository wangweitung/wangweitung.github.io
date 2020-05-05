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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","99c8567b3a3b84d828fa6dd8ba3c0481"],["2020/03/12/妈妈写给宝贝的话/index.html","85b4eb0ade743dd4453fbc9675525e25"],["2020/03/20/磨人的小天使/index.html","77a6336d11a552134e5f613bc19fafef"],["2020/05/03/hello-world/index.html","a6a69591c8fced1243bf31ed6b3d2ad5"],["2020/05/04/AGV的用法/index.html","1cad4d8f8c1074c2accdb548d651e7e2"],["2020/05/04/Github创建文件夹/index.html","f224e1b80e367135a3e0a19ceb6ddd3c"],["2020/05/04/Move的用法/index.html","c75cc1538437254ef5191b7c248b64fc"],["2020/05/04/PlantSimulation常规操作/index.html","1623e248d44c1c15644e0f0a67fe929b"],["2020/05/04/TransferStation的用法/index.html","2aee5f2ee87b46bfa2dfd9b7b777babe"],["2020/05/04/Wordpress问题解决/index.html","21b5d5387914dce5983ef51c10a7b209"],["2020/05/04/无科学环境连接谷歌账户/index.html","30a507d4b1d265e71dd37eb55679f64c"],["2020/05/05/Markdown的一些小技巧/index.html","f9544e2d3f99db6488fbb7479921fa1b"],["2020/05/05/导入cad作为背景图/index.html","f78eb59ca839351aadae4b49119483d3"],["2020/05/05/推动或拉动的生产模式/index.html","b8c819f4c4803edfc29e596e05c6f181"],["about/index.html","e6ab19af29ba5183e536b37d8481018c"],["archives/2020/01/index.html","36329a4aca8d1c933f7703b6f518567c"],["archives/2020/03/index.html","79c5096fce04574799dba65a652537ed"],["archives/2020/05/index.html","615a83cdd685f909d868edf45fb5b0f0"],["archives/2020/05/page/2/index.html","b75d57335cf2ec3a9553b1f551f45217"],["archives/2020/index.html","06ea3ab7eba5c94526186ca86916d016"],["archives/2020/page/2/index.html","31ba55dd1cd47eaec7865bddde7ea5b1"],["archives/index.html","ad01679dc564e059f2a3e468ee522846"],["archives/page/2/index.html","07c25f70f04492954680796af6993eb7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","d2ae225288cb0d3503e56975b85d653a"],["categories/Code/index.html","fafc004f46d034879a2fb61ded753bee"],["categories/Plant-Simulation/SimTalk/index.html","25738f77dc06308aa5a550797de2cd5b"],["categories/Plant-Simulation/index.html","24ce2eec20c7cb649fb955aecd77b8b7"],["categories/Plant-Simulation/实体/index.html","ead54bceee56a2d56c91af0fbf5a87e2"],["categories/Plant-Simulation/常规操作/index.html","2f0b1479286cce12380f62d728aa0f37"],["categories/Plant-Simulation/模型/index.html","291321c639476a1fbff5ea84c58d05bd"],["categories/Plant-Simulation/背景/index.html","e615d95632100146c204566889cefd8f"],["categories/index.html","ca826739cf41edefe464553c8d415b66"],["categories/博客/Wordpress/index.html","94d96fb78379724fb9a18d5d21e96c09"],["categories/博客/hexo/index.html","aee563dbeaa75904e218502b0628c209"],["categories/博客/index.html","dc3750dc21ea212a01fede8cab75112a"],["categories/宝贝/BB/index.html","1107c516360edca7ac1f6de42769c8b2"],["categories/宝贝/MM/index.html","7dcc1854c933d2ea4b4bf2468e57b5b7"],["categories/宝贝/index.html","3f02eb0c7a7f99643cc0ec9976f7fd6d"],["categories/科学/index.html","cd5ee7c6d0dbed7a18458ed1f2740f95"],["categories/科学/手机/index.html","781c9ff4887cb6d9aded11047bbdb2d5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","226dfeb9a420d1bc218c75e15609bdee"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","493636f2233d347b7bb45af41df5882b"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","3156d94bf9a658d8fd3f60ffca31ead7"],["link/index.html","357a95c043c4be37dd5f4a76efeff6e0"],["movies/index.html","05dde050e721862b2405edd95d38dabf"],["music/index.html","f062b192460d37713ed86fcc7efe046a"],["page/2/index.html","246a5cdad0a936bc86937c9fd3bf1e28"],["tags/AGV/index.html","0e610b1c9803db9e71ea941260abb7a5"],["tags/Github/index.html","f7bf92eb364892080815247dfcbfff6b"],["tags/Move/index.html","bb9127569ebf8efcd2252994a7fe023b"],["tags/Plant-Simulation/index.html","52b60f145ecc7474e5d0965289fbabd6"],["tags/Wordpress/index.html","8a6c37a9386f6db90c639c8683aafb05"],["tags/cad/index.html","3197fc5431cddb5af4eefd8489b535ba"],["tags/hexo/index.html","57a6a1eca51750760423869346fcc791"],["tags/index.html","ee863988e1a926223aea34ffb616e1d3"],["tags/transferstation/index.html","8720db30fdbdade32a39a8ff8a64f693"],["tags/写给宝贝的话/index.html","31858b353065afe630e0b7b6f7b182d8"],["tags/生产模式/index.html","4d67676b2ab2cb868fc3ac81c0037f7e"],["tags/科学/index.html","603684a0b882d2158462725f0f6e2d46"]];
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







