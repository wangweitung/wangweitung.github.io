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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","57b62bc429d588ddf5882485f27611e5"],["2020/03/12/妈妈写给宝贝的话/index.html","ee4f0aa243f9bcd5a273334ef001d28f"],["2020/03/20/磨人的小天使/index.html","a8faf02bd91a3d88f86a5bac85971d4f"],["2020/05/03/hello-world/index.html","2da6a110c1aba1894f9b6c3220d46dc9"],["2020/05/04/AGV的用法/index.html","18a2336623fb254f0659a7ce941d329e"],["2020/05/04/Github创建文件夹/index.html","6e6240e242367cb38f9dc038dff56ad6"],["2020/05/04/Move的用法/index.html","4a0de63c56ab3db32d1ea4c1a6877698"],["2020/05/04/PlantSimulation常规操作/index.html","95a181dee5cddac32e3bc1d42f337953"],["2020/05/04/TransferStation的用法/index.html","9a1c8150f002f3593f2d91293699678e"],["2020/05/04/Wordpress问题解决/index.html","6a59b58373daaaee7d6a3d5b9895c14b"],["2020/05/04/无科学环境连接谷歌账户/index.html","4a88a39399b0f63354d1ea017c389ef7"],["2020/05/05/Markdown的一些小技巧/index.html","595c90f5b3820cbea10fd79c057dd52d"],["2020/05/05/导入cad作为背景图/index.html","aedf862ba95a959b82f00b622577eb57"],["2020/05/05/推动或拉动的生产模式/index.html","a748b745c312eb09580608dd5d5fb5b7"],["about/index.html","8e2434db65580f78c892cd8ad0f2eaa2"],["archives/2020/01/index.html","8bd8725c4dae88caacc2617d4900eae6"],["archives/2020/03/index.html","71c0bc94470a6171c2ca578780163fe7"],["archives/2020/05/index.html","b6387d53e1c800b780dfbd3b2553de0f"],["archives/2020/05/page/2/index.html","41a141c40f03d823990af665e86b3867"],["archives/2020/index.html","11acf976933065c7c3f454992a137cef"],["archives/2020/page/2/index.html","ebfd66c7637311493d800b26f7b3c27d"],["archives/index.html","0da08a0d4ffef8aa72b0bff28927087f"],["archives/page/2/index.html","da61e88734f4304412a9e3ff1810e272"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","6b3ddde5851061462feb48556aa4b930"],["categories/Code/index.html","c99432961bd6d7e61f1852c4787bb811"],["categories/Plant-Simulation/SimTalk/index.html","0f19f6862655dfb37be998f42394aa43"],["categories/Plant-Simulation/index.html","9050526d31b9c2000bfa925ef59c744b"],["categories/Plant-Simulation/实体/index.html","1df692ed61f6bbba37ebe6f1acec646a"],["categories/Plant-Simulation/常规操作/index.html","56219cee2f53e3c1ed2b9b51262c1e97"],["categories/Plant-Simulation/模型/index.html","68bf33c64151f588de352e3b4ce3eff4"],["categories/Plant-Simulation/背景/index.html","efdc34c581e99ebb9f7e2b0275857ac9"],["categories/index.html","21db026deba0bd86d92e320a0e873d7b"],["categories/博客/Wordpress/index.html","8d88b21c7b6f598516aa8e4eecad9d57"],["categories/博客/hexo/index.html","53005ea5b7436c1d03eae3fe3adbf527"],["categories/博客/index.html","a050cb11ee3bc4cfae5d287ef9ce9424"],["categories/宝贝/BB/index.html","16166f050352cc9a8a1b1cdf9b4e1969"],["categories/宝贝/MM/index.html","a348b9e3c71991addf0dcb27ce4ed4d7"],["categories/宝贝/index.html","15a0d05c1d01f389422440ab0560e2ab"],["categories/科学/index.html","65661d175e9ab851cc731207c2aababb"],["categories/科学/手机/index.html","fa527acd5ac3b07bc10a959e1b64daa0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d42ccdee770d05ff7aeb59a47988b467"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","76919cf379eff0ced544668903a7da51"],["link/index.html","a79a43ba993d99fbddcffd62ed787adf"],["movies/index.html","6bd477a5f3f3ef9ffde43ae49fd6979d"],["music/index.html","1d616b12971da4fef4bf22fc48c3dbf8"],["page/2/index.html","d38d414b7cb4020ad7b9540eadc17e86"],["tags/AGV/index.html","da1be427b7792b460993e0414d0da1dd"],["tags/Github/index.html","cdb8bf95697662a36822f91a2b16c354"],["tags/Move/index.html","360d1680100d171ea52694993a14597f"],["tags/Plant-Simulation/index.html","3b859ce04137b2bcaec5f7802818c41b"],["tags/Wordpress/index.html","c685ccb3a6c809723531732c97040061"],["tags/cad/index.html","a314a22843c138e42f6c1f81aaa8829f"],["tags/hexo/index.html","60d84f2b185350e1d616eed226a88f4e"],["tags/index.html","8f4d05baf9c805455941e70be3fdff37"],["tags/transferstation/index.html","416e7c58cf1295f677969631088050ea"],["tags/写给宝贝的话/index.html","c35bd822209b533f7b22d02f92030b8b"],["tags/生产模式/index.html","ae1a6e54cdadce1bded18d5611945161"],["tags/科学/index.html","ec312d7f0899c33922cd5ee8c24a24e2"]];
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







