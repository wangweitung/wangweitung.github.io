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

var precacheConfig = [["about/index.html","d49ac4fc27c25eb48b77a47dc44c08f0"],["archives/2020/01/index.html","8d726757cfd63126c74925ba34f9c1ab"],["archives/2020/03/index.html","f56d675b5d65e4a7ca3af3d777b19219"],["archives/2020/05/index.html","f058f510f60545df01703d10206cdd81"],["archives/2020/05/page/2/index.html","493fdc827f476c1544fc031afd251b99"],["archives/2020/index.html","c8e89fecf709b9ceee5cf4373621a4c8"],["archives/2020/page/2/index.html","397861f7becf9c3a62103c1ee63ad7f7"],["archives/2020/page/3/index.html","0e4f3a0257e7556d7d2ea049782a981b"],["archives/index.html","95d480dc7cb47145f29852fb12bb2bf7"],["archives/page/2/index.html","ba83a6999ef55a3957ce24f46b3d6072"],["archives/page/3/index.html","685ba8f21866cde256a0fa5e77f4e076"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","60743780809c702b16de05b00c4cecad"],["categories/Code/index.html","6877b1c3842b70b3e6cfcd3a017777ee"],["categories/Plant-Simulation/SimTalk/index.html","ba647199c637ae26b7c02b6628ae2bf3"],["categories/Plant-Simulation/index.html","103021747b9b2afbd28520dc41275c9c"],["categories/Plant-Simulation/实体/index.html","91b845123a040d93f3fe0d32706f08a1"],["categories/Plant-Simulation/常规操作/index.html","0d55fcb0f2ca14c487842af271a1f5fe"],["categories/Plant-Simulation/模型/index.html","d47ff2e2be3be1b71e430026a2ac3cf0"],["categories/Plant-Simulation/背景/index.html","5df4e9197b727411b3e3d92a3f2d01e8"],["categories/coding/index.html","6d3419d0ae63efb19204b86d006aa0bc"],["categories/index.html","6db423c81b66bea72c992cd3b4a494d6"],["categories/ubuntu/index.html","366a1dd9069748f66991203dfa3a523a"],["categories/ubuntu/ip/index.html","6a033cb513d7a96d6f2d002b269d822f"],["categories/ubuntu/下载/index.html","85df59dcea9b2becd10c6bd60d025cd6"],["categories/ubuntu/命令/index.html","ca7f4f6a14dffc4def4d208782d720c4"],["categories/ubuntu/配置/index.html","ff837f785f357fd4523a0a5db0b48cf9"],["categories/博客/Wordpress/index.html","8ffcb206c94fe41ba4290f1ff444a0f4"],["categories/博客/hexo/index.html","e7637d809054c2e942e683b0b09e9c24"],["categories/博客/index.html","5719539bc16d9a1e2d21e52b01c3bea6"],["categories/宝贝/BB/index.html","cdaf260e050eb15fecf2e505f5fbc9a5"],["categories/宝贝/MM/index.html","0c5e96598b7e9ab68f4a0921a6758a81"],["categories/宝贝/index.html","2d88d0f1ca213ecb504ab6a9aa6dec7b"],["categories/思考/index.html","e54288d7dfe7cad0623d92330a434128"],["categories/思考/职业规划/index.html","ece8bac2aefa2e3f4ce72962165dce3a"],["categories/科学/index.html","d10359a78c9375f381f4d3782e45f607"],["categories/科学/手机/index.html","519745babaa03305a190928f06ad6075"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","4cda667677b14b71625120ee6ab181c7"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","03362a75a77e0657d76700d080769213"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","bed622ea5fcb455c8a06b2d5c0326ff2"],["movies/index.html","8e5b7c2bb8fe726a38cb0feb3ae38793"],["music/index.html","e73753a56e478ade3253c0765bad93f9"],["page/2/index.html","d579eebf518cf0a76fb63a26cd47697c"],["page/3/index.html","56704bbc146715038bff573a9dd0acea"],["posts/undefined.html","02a07b404ab01b591a01f3e9a34d994e"],["tags/AGV/index.html","a0ca363a0800315fbe074e0cd17e0cac"],["tags/Github/index.html","546f9997f5250b6ab05e3f77b025b69e"],["tags/Move/index.html","f29a4b8e776f80e81f3590d838114bef"],["tags/Plant-Simulation/index.html","1d9f218d659a1fbb43932247d7763186"],["tags/Wordpress/index.html","56853e7988417de59979bfe831989f8a"],["tags/cad/index.html","0dcab4b2d1d23e816da7f2b869852522"],["tags/coding/index.html","db6cb8f681b0fa0d785246add3fe95f8"],["tags/hexo/index.html","9c75a7021ef8d501919944ab6cb233c4"],["tags/index.html","353858f1019ddae1f19feaf8479737f6"],["tags/transferstation/index.html","fcb8a0dc1603bb77cde53549d1990fd2"],["tags/ubuntu/index.html","6ae95fc9214ca42357cc164959bb5ab7"],["tags/写给宝贝的话/index.html","0089463450867f6fd71c17e150968344"],["tags/原创/index.html","cf1da5fc212955fd6238549ff62528e7"],["tags/学习/index.html","ca88fd848cc2b8af4682e659ab380b80"],["tags/宝塔/index.html","40ccd52de6d665e15cc785e430d6cd85"],["tags/生产模式/index.html","4a2861483c7b154819c928ad2261d515"],["tags/百度客户端/index.html","7bc3c638d25b959dcfa5f7ab08b57fb7"],["tags/科学/index.html","f8d9f9c4bc69581ea9be2db1e025d405"]];
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







