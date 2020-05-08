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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","b5509b0cdd6165fd3b9636e403916253"],["2020/03/12/妈妈写给宝贝的话/index.html","495d02faeba9497afdc76cb4ebe47771"],["2020/03/20/磨人的小天使/index.html","ee9cda75176f9bddc1cd06d68b76a6ae"],["2020/05/03/hello-world/index.html","2fa1c2d00d596b3ec4684a029c77ed38"],["2020/05/04/AGV的用法/index.html","73c70303bfb9e0cca110cfaedb91a816"],["2020/05/04/Github创建文件夹/index.html","0fbfd1e090c852ca19cf89d1a8f2d95f"],["2020/05/04/Move的用法/index.html","533ad61e8229aa2721361ce27fabd19b"],["2020/05/04/PlantSimulation常规操作/index.html","021363431f8dc4ab3cdfe63745cb8e75"],["2020/05/04/TransferStation的用法/index.html","e323db48b997844841eb0c25732e59fe"],["2020/05/04/Wordpress问题解决/index.html","f60f2398ac95c12a77caa8926a821e3e"],["2020/05/04/ubuntu安装配置hexo/index.html","3e0f1f498579ffb1fbafa931d255b937"],["2020/05/04/无科学环境连接谷歌账户/index.html","d5cda7fd03e079fbdd8b8a2579742787"],["2020/05/05/Markdown的一些小技巧/index.html","02a6a516c3cf5b16b51e4b3ef8961010"],["2020/05/05/导入cad作为背景图/index.html","0dfa28222a9146f858065540a3f52a42"],["2020/05/05/推动或拉动的生产模式/index.html","14cd86121e7882a01d16a1f1cee841ee"],["2020/05/07/在摊位下上网课的小女孩/index.html","1261c2dc1eae89e44b592441a1cdf637"],["about/index.html","b147518cb7a489b5a7fe462f2d06f719"],["archives/2020/01/index.html","ab7faaa87992fa0749396b047f3d9a58"],["archives/2020/03/index.html","d513e442caf25fe1c03d839c0a00b493"],["archives/2020/05/index.html","f15f5d857457bd69d31e72ba072c4e1f"],["archives/2020/05/page/2/index.html","48964fbf5df213794660fdf09af64344"],["archives/2020/index.html","7b527494246de3a7d82a9c059224137b"],["archives/2020/page/2/index.html","780ca5f68a3128aaf1dad99bb12ce6a3"],["archives/index.html","4ef03c5cc588b8ffbf41739003b2a6e3"],["archives/page/2/index.html","4286d6cb6ef26b2c433878fd1c9e9587"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","3291b53d1d2e14d04e9e1b3d507bef94"],["categories/Code/index.html","cbadc049bd1dc2fb03a9b5b3264f3a70"],["categories/Plant-Simulation/SimTalk/index.html","80d1c8d9b72d071a49a6793dfd615087"],["categories/Plant-Simulation/index.html","3dc8f880ca0f7c2d51db3bcdd57ef5dc"],["categories/Plant-Simulation/实体/index.html","b3af12a09fd2febda3df866470f3c4a6"],["categories/Plant-Simulation/常规操作/index.html","465fafb95c212b077e5a9fd44ee1c6c3"],["categories/Plant-Simulation/模型/index.html","d2baca51816e528b1555cdf87fbe6d26"],["categories/Plant-Simulation/背景/index.html","e55ffd530908d1c5c909a10006d5d22c"],["categories/index.html","3488ddb0635982db82cbf90a2e6d9538"],["categories/写给宝贝的话/BB/index.html","30bc832d6b2c41ae9b1eddca94f4524c"],["categories/写给宝贝的话/index.html","29da618e685fe48bd0bdc73e27db216c"],["categories/博客/Hexo/index.html","903dc1ec80109e17ae891d4a1fa21521"],["categories/博客/Wordpress/index.html","1a4f1ed720876825dc311d38c402144b"],["categories/博客/hexo/index.html","9c77a397cb7bf15d358876fda65d8b93"],["categories/博客/index.html","85a72b7c3bf843ef6ea95e67b1ad0478"],["categories/宝贝/BB/index.html","e095d1345b2f81cac8bc393f5c935302"],["categories/宝贝/MM/index.html","cfd991014e168589d1cb098cb675cb94"],["categories/宝贝/index.html","98a7117743b00efc706b68489eea90d5"],["categories/科学/index.html","9f992520c9739d2d81ae4e6672472b28"],["categories/科学/手机/index.html","a72f12b0f9d3c7c9f235ca10c6331a9f"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","22f653423f07ab61b944040972d8f008"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c940b74af11a6d4947689d48098c8005"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","c09ee79a0ba9696f9a216a5a328c4f3f"],["link/index.html","e4896e0ef4df9a30457f8db7dc510555"],["movies/index.html","178f6d603f39bcb96d9689cb19e909b0"],["music/index.html","41418c2d0484b3f420478b079fe9d8b4"],["page/2/index.html","529e921249b6df0a21cb122ba4b9cc8a"],["tags/AGV/index.html","535ed144ed6a83db429fdae27715777c"],["tags/Github/index.html","ee22179980332491e75fc149c3a57af1"],["tags/Move/index.html","82867a6cbdef82d21cb0d2e58128be6d"],["tags/Plant-Simulation/index.html","0de1419c793f3bc85f2125b0874d6538"],["tags/Wordpress/index.html","a0d57c696e42268bbb932d2efb4bffd7"],["tags/cad/index.html","b4457a8b8cbc9f98214a6ce4dfd3ee19"],["tags/hexo/index.html","8affadf09a97764b1ab25434712637ce"],["tags/index.html","a16842554ccc29bdafc710187bb27f21"],["tags/transferstation/index.html","7f0d211b2647705f2ae22bd89debba10"],["tags/写给宝贝的话/index.html","781c3fc99b00e454a3099b97559e1ab8"],["tags/学习/index.html","bde666dcb0fae7d2271fede1fdbe36d7"],["tags/生产模式/index.html","25a51333d25afbbb58914759a22fcc2d"],["tags/科学/index.html","c32745e844a18f837f87c75d0aca28e4"]];
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







