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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","ace147f40f84850f98a4a976b316e07e"],["2020/03/12/妈妈写给宝贝的话/index.html","0450b89ab0b7223f8f878c67fe8afdcf"],["2020/03/20/磨人的小天使/index.html","d7d52bf2bee89e9f34f67f51f42e0b6f"],["2020/05/03/hello-world/index.html","4f7c15dbdfc464cd756f9d0abf01b4b0"],["2020/05/04/AGV的用法/index.html","5bebef04fe1d65f2b37b53e4e862b1e6"],["2020/05/04/Github创建文件夹/index.html","5b7d947bb0c9bcb9a32cd8f8b7b8445e"],["2020/05/04/Move的用法/index.html","42b5531ad11450b7e0015e5adafaacf2"],["2020/05/04/PlantSimulation常规操作/index.html","e3294998cca2e01d8b0b27131d731937"],["2020/05/04/TransferStation的用法/index.html","77e11c7aab2f688d7d4ef59ca57dbde6"],["2020/05/04/Wordpress问题解决/index.html","0d700a9868bf7eb6bcf3a958898e972a"],["2020/05/04/无科学环境连接谷歌账户/index.html","ad131b9db2a40521a8fd3b182fdb67d9"],["2020/05/05/Markdown的一些小技巧/index.html","8232b3bbc73d666eb9cc057b8221ba28"],["2020/05/05/导入cad作为背景图/index.html","37b7780e30e3ce001cdaf5328a1f8e86"],["2020/05/05/推动或拉动的生产模式/index.html","bcd9da03a27be82fb9562db9f9d6be12"],["2020/05/07/在摊位下上网课的小女孩/index.html","0baf70fc807596486707226160107277"],["about/index.html","be2124f5ada5bf90408df4355ea29d12"],["archives/2020/01/index.html","310c84de7a473b31001bd95e2bc4642c"],["archives/2020/03/index.html","c81752323b8e0e074957b062d16a7898"],["archives/2020/05/index.html","18dddc080177427c713b7faf0a20ad38"],["archives/2020/05/page/2/index.html","d263573ac8ba85adf88165fed603b303"],["archives/2020/index.html","8aa17d9986d187be9e07bc10f258e2d3"],["archives/2020/page/2/index.html","95cd8c4162a216fc4222894be44259ed"],["archives/index.html","c96067f4cbc8dc1fde3bc4a26d916b2a"],["archives/page/2/index.html","cbf8a34a634f1e23d050471892c5b941"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","9f5a699c5b6661fb84f32642ba3d3a03"],["categories/Code/index.html","75627919d64920265ed5c4df92c973aa"],["categories/Plant-Simulation/SimTalk/index.html","4f6ec44e75a328b82ab290efae45190f"],["categories/Plant-Simulation/index.html","f7cd48b03f35bf39e62b2c52ebd36e6b"],["categories/Plant-Simulation/实体/index.html","2d32eb4f1b61a1012fc614bbf69cea3d"],["categories/Plant-Simulation/常规操作/index.html","d66a6eefdfa2206bc0a8d7cdca7d33bd"],["categories/Plant-Simulation/模型/index.html","cf8fa658b02e4897f715862eff942d86"],["categories/Plant-Simulation/背景/index.html","d3727260d4f0a26d70b7a0fb8d88601b"],["categories/index.html","9009d74fa42d1e5bfe6476ac9a6cd017"],["categories/写给宝贝的话/BB/index.html","f207bf55a31d6d8b021a7cbea41caafa"],["categories/写给宝贝的话/index.html","599c4b61608bc7ecb8f63a4c09674492"],["categories/博客/Wordpress/index.html","b524eb810b62734f5d7531c2b74ef83a"],["categories/博客/hexo/index.html","9da0a9287468aae538a8e452cf445bcd"],["categories/博客/index.html","3362349fe961946581f86a3afaf594b5"],["categories/宝贝/BB/index.html","06b4ab53762215b8e36e2327d37a568b"],["categories/宝贝/MM/index.html","8406ef5ac29458b9d81564102f8ddd37"],["categories/宝贝/index.html","b07d5d73fea8c22e482cdf0b6489d8e5"],["categories/科学/index.html","4d7ff985a1a911becf0f85e134dacc4e"],["categories/科学/手机/index.html","1208ddd30e1a849ba3bb76c1ddcde28d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","2832601bbc967cac52200a5a80351c9d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","3e2ee481e9427da205aad65c5c556181"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","5e4a154860ecc1ef36e72f7406dd3b81"],["link/index.html","d78c54403d594a7c3b0c157c3a4bacfe"],["movies/index.html","267c477f78dfdfb637246aa5f2367c95"],["music/index.html","74ea1d4bec3216e356e5cfa2aef92ca7"],["page/2/index.html","0bcc0c805daf5878bc54b1ab6f37a233"],["tags/AGV/index.html","86a0f677cb71a34f6c1c54f9dba7a7f3"],["tags/Github/index.html","8c7f6d0941a1bf8f25d3f78ac5711dd9"],["tags/Move/index.html","7f34ec13c304295e951003b1f3b51291"],["tags/Plant-Simulation/index.html","ad7b933fbead406d87cb50de98d1061b"],["tags/Wordpress/index.html","606db69e1a64dbdff51326e9141d7a02"],["tags/cad/index.html","96938eb0b796d05accbdfbf04ea3b7d3"],["tags/hexo/index.html","06e4d8eda3d8cce35a76b7c20a5883ec"],["tags/index.html","d4c284a4a35407c28e0def8bce978581"],["tags/transferstation/index.html","d5d01c5430cb1fdf13b4df0935354924"],["tags/写给宝贝的话/index.html","8f9f873a0cd61b67d9def03619d2e1d9"],["tags/学习/index.html","c3250b62453c9570532fe71670ed7bc2"],["tags/生产模式/index.html","beab63715e306aa859151a31ea49d716"],["tags/科学/index.html","045dc4e4519f10f16bb1343e9cc243d8"]];
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







