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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","b5509b0cdd6165fd3b9636e403916253"],["2020/03/12/妈妈写给宝贝的话/index.html","495d02faeba9497afdc76cb4ebe47771"],["2020/03/20/磨人的小天使/index.html","ee9cda75176f9bddc1cd06d68b76a6ae"],["2020/05/03/hello-world/index.html","70f26fa925a3ce215760393a03fc7f3c"],["2020/05/04/AGV的用法/index.html","56fb47d9cf183c58ae0ee1e1bf64297e"],["2020/05/04/Github创建文件夹/index.html","54abc209125db6a1935c550cadb2d34a"],["2020/05/04/Move的用法/index.html","533ad61e8229aa2721361ce27fabd19b"],["2020/05/04/PlantSimulation常规操作/index.html","e6fd6b608ead8213113706ea579d68b4"],["2020/05/04/TransferStation的用法/index.html","e323db48b997844841eb0c25732e59fe"],["2020/05/04/Wordpress问题解决/index.html","7c177ee1a974b7cd2c0b26cd78f414bd"],["2020/05/04/ubuntu安装配置hexo/index.html","5191e609173cb67d49de4442807e5c8b"],["2020/05/04/无科学环境连接谷歌账户/index.html","d5cda7fd03e079fbdd8b8a2579742787"],["2020/05/05/Markdown的一些小技巧/index.html","70491f37022100e80a07884ea18efd49"],["2020/05/05/导入cad作为背景图/index.html","0dfa28222a9146f858065540a3f52a42"],["2020/05/05/推动或拉动的生产模式/index.html","14cd86121e7882a01d16a1f1cee841ee"],["2020/05/07/在摊位下上网课的小女孩/index.html","1261c2dc1eae89e44b592441a1cdf637"],["about/index.html","0a4e94700f3bc43b7467f29fbfc0d132"],["archives/2020/01/index.html","c5ae8b993f09ce6734b060d1f9d179b6"],["archives/2020/03/index.html","84814fc65cc1b774d32debb1fdedc1e0"],["archives/2020/05/index.html","78d493b6d784ebbea907cd2c0996e884"],["archives/2020/05/page/2/index.html","c37fcaa28bd2b20235fa00530fd20e9f"],["archives/2020/index.html","dae1931de6163b39b820be4fa3aa75a1"],["archives/2020/page/2/index.html","be72a7e4728c1a0884fdaeb57a09d5ea"],["archives/index.html","20fe473ae296e317b74f0691b547340c"],["archives/page/2/index.html","de8788124a0d2c8fb1c115d49cabbe40"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","3f3b366324fed9e969889918c8275345"],["categories/Code/index.html","77ac000ac74de0b4d16193f1ff0ec2c4"],["categories/Plant-Simulation/SimTalk/index.html","aa4e1a881240a89aa43346704d2cd05f"],["categories/Plant-Simulation/index.html","5da45b47de54193a1b5722e71d929123"],["categories/Plant-Simulation/实体/index.html","af5393467b96e98a263daedd5108c030"],["categories/Plant-Simulation/常规操作/index.html","beb246b7d323844ddf0b403b128c05c3"],["categories/Plant-Simulation/模型/index.html","cf2481540a6a1d0654daab6a2596daa2"],["categories/Plant-Simulation/背景/index.html","a5f870e9f1c16316b408095561a8120a"],["categories/index.html","e83e192347bddf3bd1a67c645ee20a68"],["categories/写给宝贝的话/BB/index.html","5a3a239a04f20eda38eb380db4a1b76c"],["categories/写给宝贝的话/index.html","05226294bd7c23d87db9678da55f4130"],["categories/博客/Hexo/index.html","57b4395b3821af9f77667d5651c6b8e5"],["categories/博客/Wordpress/index.html","997dce41949ba52773a2d3ce41ec16cd"],["categories/博客/hexo/index.html","4bfc90f02214476f7eb80ced9d2fd542"],["categories/博客/index.html","125f90745fd48691ee548a6a6e79efcb"],["categories/宝贝/BB/index.html","7f7d3d8f3c768fd3d0b826cac8c66b25"],["categories/宝贝/MM/index.html","835e98616efa7b0a5be7c67b5a3df5c9"],["categories/宝贝/index.html","f03063dfbfd21b0b32e626b7c4b89712"],["categories/科学/index.html","2b305e0ddc791bb3d67b25a72cddf4fb"],["categories/科学/手机/index.html","6a229ac28491ec4fadd2fe050f471964"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","bf039b9f5de0c5840e25c5d14b59f192"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e270e06ca228a037b7c2a1e36660d9b3"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","527e2c85a11e36786df81f54ebe2eb0f"],["link/index.html","5d9de41755d0bf5c145995aa9019ae6a"],["movies/index.html","39e5afabe850c80ab2c8c1e8e66e3b28"],["music/index.html","4b909d74dd0dad1bc36785c50e38dc7a"],["page/2/index.html","6797420b8102553b26fab926c2c98f66"],["tags/AGV/index.html","9e087c01728533ebbcd7c62f025cdd0d"],["tags/Github/index.html","8f79ead3c7458992b973470612be5a62"],["tags/Move/index.html","064a26632e0946d539015784d6100e67"],["tags/Plant-Simulation/index.html","264e58f2e4b40790d1f82d1512ce6cca"],["tags/Wordpress/index.html","28e3330254927be91a8d5e9c9451f934"],["tags/cad/index.html","58642a41c34b35746e740c10453c265c"],["tags/hexo/index.html","89f443893178894a5ef17334abf4443d"],["tags/index.html","984326e6987c19ee2d862394d55907d4"],["tags/transferstation/index.html","0ad1f41e5cf2150212a868a8f21243e3"],["tags/写给宝贝的话/index.html","94888d1845586227d91ec50d4b09d035"],["tags/学习/index.html","24d689bb97eaba39797023c85dc00600"],["tags/生产模式/index.html","7e5103548bdf523f18299119728b7486"],["tags/科学/index.html","6162f539dc91e2852de43d555c70ec7a"]];
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







