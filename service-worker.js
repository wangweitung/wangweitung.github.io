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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","6919542f2c76251f9e1e006a23526807"],["2020/03/12/妈妈写给宝贝的话/index.html","c2ec581cc837c1b9e07499685e804344"],["2020/03/20/磨人的小天使/index.html","8cda873359cc010fd6e78c45f7c6117b"],["2020/05/03/hello-world/index.html","609c098f566fb38924783fa910120ced"],["2020/05/04/AGV的用法/index.html","7eff85735608a0ea3d9d7b228147bf40"],["2020/05/04/Github创建文件夹/index.html","3004cc3b25d6403d826625954c0bdab8"],["2020/05/04/Move的用法/index.html","7ec6c318cbee6fce612ebfafe4237a8e"],["2020/05/04/PlantSimulation常规操作/index.html","a8d2b47304e690a45e6415f9c7b6cc6a"],["2020/05/04/TransferStation的用法/index.html","7907b2b24fdbbe8bcb4ce2491808546a"],["2020/05/04/Wordpress问题解决/index.html","5d0785c2b190396ca0091f8c19c4eeec"],["2020/05/04/ubuntu安装配置hexo/index.html","ba3ee4208280dd1f3da3c4b318e6a84e"],["2020/05/04/无科学环境连接谷歌账户/index.html","65842e205b03609b1ba91fdf053e46aa"],["2020/05/05/Markdown的一些小技巧/index.html","533e1a15c4a2d8ab0a6db8c5324e19f4"],["2020/05/05/导入cad作为背景图/index.html","830ae1b7d27edd77cef8cd3df70602f5"],["2020/05/05/推动或拉动的生产模式/index.html","c5e7713b957fc1eb2db73a9b7d1908e9"],["2020/05/07/在摊位下上网课的小女孩/index.html","c8eb32438116878c8c522b07cb2050e5"],["about/index.html","986737413ff905b9d170e36d3bec4588"],["archives/2020/01/index.html","e75b9b7bdb8671a1936871a0d84f75e2"],["archives/2020/03/index.html","ce35e71f07c159b0f037d2d4a4bf4cfa"],["archives/2020/05/index.html","0e337c72d3e574cf3b460a8e7352ca16"],["archives/2020/05/page/2/index.html","56b211197e0ebf2dd026dbc69a76e8ba"],["archives/2020/index.html","225aa89a774840d2c6442ae6fcfac431"],["archives/2020/page/2/index.html","f2049259c15a90a48c20f6ef0760903d"],["archives/index.html","675d526c42d3c810abbe49009939a06b"],["archives/page/2/index.html","5f295e076210b999b5a9aad8d0be668d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","600cc8f64f8f7d4a316d78f876783665"],["categories/Code/index.html","73d59367390536315110daca154a3d7b"],["categories/Plant-Simulation/SimTalk/index.html","c4bf285a0329c44124aae420dedd100e"],["categories/Plant-Simulation/index.html","3e6ea7351adadd2392622936c1e1f1fb"],["categories/Plant-Simulation/实体/index.html","1d4678ce922e36fba51b2a4116f94508"],["categories/Plant-Simulation/常规操作/index.html","4ee64d878660759ea9892e01957d9718"],["categories/Plant-Simulation/模型/index.html","b4d5a1684c71f412a90971db6517b57f"],["categories/Plant-Simulation/背景/index.html","17b5f4307f5459d820c6a3badae2a9f3"],["categories/index.html","33c5078de609f998bc4beedcc56f30c8"],["categories/博客/Hexo/index.html","f9763e8ad277c2175d295372d77638ba"],["categories/博客/Wordpress/index.html","47759ef4ac406dd78516441ebad77612"],["categories/博客/hexo/index.html","60f5434c6c8f4942864b39c5c4fc4d84"],["categories/博客/index.html","b967dec4d5b76c0b04deed67af6cfa2b"],["categories/宝贝/BB/index.html","5c9f3c6a1f410c9c17d42a9cf84284dc"],["categories/宝贝/MM/index.html","ac6beb135f004e4d28c535363339d985"],["categories/宝贝/index.html","756084083928a03ebe141e0989a14564"],["categories/科学/index.html","bceac80d9fb54526b584df78f1dc532f"],["categories/科学/手机/index.html","6c5e6b583bf2fa8602ee91cbcb084f10"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","eedeee2d6c1a05dc08d62339fee03916"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","aa878958c6c709e6d2746b426fa96476"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","5f860eb53cc5be09f55d0118fc57bcc1"],["link/index.html","69297a5382e0cc162147d8feab43407a"],["movies/index.html","60428df629996e196b7857037a64f424"],["music/index.html","2db98b72e6de5e99aa27a861cd04711d"],["page/2/index.html","fdb987fc19a00949509382626eb11713"],["tags/AGV/index.html","11b797be6c9b9c59ecc50855d0ed91c5"],["tags/Github/index.html","5eed831b30bc038afe6e033683271194"],["tags/Move/index.html","7fce4b924225f2f51ec676d025acab93"],["tags/Plant-Simulation/index.html","70a4f5cea54f2073dbe9fd28e276f06b"],["tags/Wordpress/index.html","cc2ca1b7210a606fee1aab1f0a8caef7"],["tags/cad/index.html","d0a590e93d0c626254647cbc74c87bd3"],["tags/hexo/index.html","babb8754a1dd4a978c259c7a96964d9b"],["tags/index.html","a130bce680f8ed33697029fb1e7cb132"],["tags/transferstation/index.html","d0cf5021ea8638a5d4fece1ceea736ce"],["tags/写给宝贝的话/index.html","ceedf87340f90624abc0712e35665057"],["tags/学习/index.html","a7800cd929d00a9d0f60994c26bae301"],["tags/生产模式/index.html","4816aaa1fc37e53a069e1f7716b5a39b"],["tags/科学/index.html","c93cd9197d3d1c92c390a4fa38e191af"]];
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







