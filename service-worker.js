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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","b31e91215447c5742d1a992da9668090"],["2020/03/12/妈妈写给宝贝的话/index.html","91e7b061782785c0de5c6b93b16c7c0a"],["2020/03/20/磨人的小天使/index.html","8dd0a74b2baa2b0e843fd90371b23a70"],["2020/05/03/hello-world/index.html","a2c85b4d5c7ad7070847fe5c54e6846d"],["2020/05/04/AGV的用法/index.html","934f6a9f149adc45dc784bcdf97c8f6d"],["2020/05/04/Github创建文件夹/index.html","410b64c80544a073f3939a51a878c0c3"],["2020/05/04/Move的用法/index.html","92bd57c5076e7ebd45d4df23dc66c46d"],["2020/05/04/PlantSimulation常规操作/index.html","5db513bc4efa693735d26c052e561f3a"],["2020/05/04/TransferStation的用法/index.html","463a060e687ea4594a9265a3ce26d844"],["2020/05/04/Wordpress问题解决/index.html","f508dbfa1fe683ce29e192e93132e324"],["2020/05/04/ubuntu安装配置hexo/index.html","b4662e9da8d23f36efd4f892beb9f944"],["2020/05/04/无科学环境连接谷歌账户/index.html","685bd08fba9779ffdd2c784a9f29ac6c"],["2020/05/05/Markdown的一些小技巧/index.html","f326dc82a507dd423d7c112fb64454ba"],["2020/05/05/宝塔面板设置自动更新hexo博客/index.html","2455420f069c9f4d601e411cfe446a90"],["2020/05/05/导入cad作为背景图/index.html","6da33dd422958774a585f0518a18843c"],["2020/05/05/推动或拉动的生产模式/index.html","f09108472c48988470b0c19f423d7f61"],["2020/05/07/在摊位下上网课的小女孩/index.html","b10624f8ba765e5333e3768bce26ae83"],["about/index.html","e608c749e1544901cdaf52afb7bc73ef"],["archives/2020/01/index.html","4b09d9a80c9c1c5f3f44f25e98b61dbd"],["archives/2020/03/index.html","4911ce0faa0124f91f63c36b2546e317"],["archives/2020/05/index.html","2d78754ea889ec3ccb8a1dfdff2b786b"],["archives/2020/05/page/2/index.html","375e64acabdd6d51f803b68dc1576954"],["archives/2020/index.html","84c8074ad9eafaffff247f74327065d2"],["archives/2020/page/2/index.html","175b72a0e536574a5c9837317273ec01"],["archives/index.html","f1048da93756a6492f8c4dd364b52347"],["archives/page/2/index.html","5c61bff72c8a5e487cabe200c041cf3a"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","1593f8c577cebffad28859a765588fd6"],["categories/Code/index.html","d67c6256ca4438abf48ca9abf0a9d255"],["categories/Plant-Simulation/SimTalk/index.html","a1874798dd7a7b11e908882ac40fa02c"],["categories/Plant-Simulation/index.html","da8863089662c2cdea9718e556683052"],["categories/Plant-Simulation/实体/index.html","1289e68c6a6654fedff59b28c646b829"],["categories/Plant-Simulation/常规操作/index.html","3444d3382186393aca71bc4506becf53"],["categories/Plant-Simulation/模型/index.html","7f237b2bc25bc49df222708fd565249a"],["categories/Plant-Simulation/背景/index.html","b9b18fb24c70701a05617ae7c4d0c947"],["categories/index.html","5dcde463ab01dd40fbb5a12aa8a7403c"],["categories/博客/Hexo/index.html","5c2347471f174b0c052b43edad2ac5c8"],["categories/博客/Wordpress/index.html","800866ec681c08034697949700b723a4"],["categories/博客/hexo/index.html","cba3a01c04349a3166f2b8d286f8738a"],["categories/博客/index.html","17fc62a9675fee00ad240533a10674e0"],["categories/宝贝/BB/index.html","973ed2f8ce0f062cdbc43a09d12a85b6"],["categories/宝贝/MM/index.html","bc0a74b9a8510514d75c3cf654071ac4"],["categories/宝贝/index.html","d7a3bef34ff6bf57028d83345a940c1b"],["categories/科学/index.html","a7ad3e059f6e4925f1169b73669de283"],["categories/科学/手机/index.html","d6039eb8b669f733a51dc323b7cbdce3"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1788cf61c1cfbc40ae9f2b82e53c3e0e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f1327bb95c4930c5f7cea99d98e39aec"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","0fb43b52740556c972608c2e08c586ba"],["link/index.html","b7cff09c2d9a9d9ae333cb73e76338d5"],["movies/index.html","e1cdcbc3cc84c96fe2f5134947b6a3c2"],["music/index.html","d5363f7630a376a4eebcdd00884ab3b6"],["page/2/index.html","b054654b821c46c7bb9c766943185f01"],["tags/AGV/index.html","48ffe6f03de88e36284b57561f3d49b3"],["tags/Github/index.html","12b348d1944c6f507c9e3f3304272f30"],["tags/Move/index.html","d7db5e60d52930005b214bbb4537e419"],["tags/Plant-Simulation/index.html","98e0db7caeb2598f3312dfa527d3ab1b"],["tags/Wordpress/index.html","01109d493289f2c8e3fd244301e3992a"],["tags/cad/index.html","7b9dff598cbb6ee3a1146cfcd005a35d"],["tags/hexo/index.html","aa9c3697dfcee24a1022ed5578bc95cd"],["tags/index.html","a4b87cfacf6a9af9883eb070e80f9a30"],["tags/transferstation/index.html","6524a64e843fa769f236bd0370658825"],["tags/写给宝贝的话/index.html","32e7bf0822fbedef5e1f8c4ceadcf923"],["tags/学习/index.html","e4e4ae8df4bf17fbcd1a2ea8afa3dbc7"],["tags/宝塔/index.html","605dcc59c45e8a85131d825e71809c8c"],["tags/生产模式/index.html","a1aa487ac10886acdbed0ed5ad86e692"],["tags/科学/index.html","0a28ddc31dadb42936d349e54deee981"]];
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







