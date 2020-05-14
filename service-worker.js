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

var precacheConfig = [["Ubuntu打开防火墙.html","31e042a3c85e470b892afb6f9342b327"],["about/index.html","04fffe7e8229ee8fa82174e4386ede20"],["archives/2019/12/index.html","c97e796aeb3b4c22901a06d5cfa4afcf"],["archives/2019/index.html","832782f310424456cbda779c0ceaae2a"],["archives/2020/01/index.html","11c765a6eff0d11cdad1065296447895"],["archives/2020/02/index.html","56b70c11ec4ee6e528c0416bb6f73ffb"],["archives/2020/03/index.html","47975b691c9eb1121739491746ae6021"],["archives/2020/05/index.html","7ec8cf9c36267d11278c759742c0d546"],["archives/2020/05/page/2/index.html","2275893cef3d53578672874ea68c0bc6"],["archives/2020/05/page/3/index.html","c2f57b75c9ef725df7a4a27b628ce6da"],["archives/2020/index.html","cc880115aee01b2f4b39474f83cb8817"],["archives/2020/page/2/index.html","8b1472860e7727a81b753c5fe287756a"],["archives/2020/page/3/index.html","f3e8720f78247d60fe42b2073e7446b8"],["archives/2020/page/4/index.html","ef263b88214e1466c971fa4d89bb11be"],["archives/index.html","1b15be7ab3b10e01c1921e41a89b5057"],["archives/page/2/index.html","779f7cd8cfc061f4e12ccc55ed11e81f"],["archives/page/3/index.html","872c6cd173de77b56ccaee858cb22969"],["archives/page/4/index.html","6b5baa93bfeee3029a27a7fc29fb1796"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","1e730ebcf819a421d9964b9f228cd1b8"],["categories/Code/index.html","6fe895793cd8c11ee9f6817ff147f647"],["categories/Plant-Simulation/SimTalk/index.html","4050d7b4048066d0d05ccac6531c90e3"],["categories/Plant-Simulation/index.html","52941c3f17d1cceb0ccbbd5b20e5eb10"],["categories/Plant-Simulation/实体/index.html","2ad2e4ece0cc2e8c76e68671f70a36a1"],["categories/Plant-Simulation/常用代码/index.html","8e09c7ac7cf193ab938711a7e6670dad"],["categories/Plant-Simulation/常规操作/index.html","8a414f545c8e9d381da9644eca47aa93"],["categories/Plant-Simulation/模型/index.html","85389b7ead4c3f954996d6437b832e46"],["categories/Plant-Simulation/背景/index.html","453c8de0ed6a50f73ff88d4e0348be07"],["categories/index.html","441d2ca59141567cc922c27327a6a95d"],["categories/ubuntu/index.html","851ef44c2f90e84b3b84132c70303c8a"],["categories/ubuntu/ip/index.html","ba986a57b40f34634ea0fe3ad06313cf"],["categories/ubuntu/下载/index.html","c9ff202447ed1535fbc7fb3c603887eb"],["categories/ubuntu/命令/index.html","cf917e437058537e1ce5176ec4ce99ef"],["categories/ubuntu/配置/index.html","8d237ea5c0ded40aa72780c111ecad10"],["categories/博客/Wordpress/index.html","4af0d0ca1d37a76c5ed5935bf22ecb09"],["categories/博客/hexo/index.html","9c531c59bce630c6cb9c4bf867b186f3"],["categories/博客/index.html","69643e8769e1f91dfb365aadd87fb207"],["categories/博客/typecho/hexo/index.html","c42be241edc6da3a0341435a331d9b6d"],["categories/博客/typecho/index.html","cd91d9173e505d016be1b1205de65dcb"],["categories/博客/统计/index.html","deeb3e1bce9b533b50848ce18ff70669"],["categories/宝贝/BB/index.html","5258ee9dd9f4e4f24f8c5c5a5cacaa46"],["categories/宝贝/MM/index.html","355df2c9ae51c0aeb9dd72c49ade757c"],["categories/宝贝/index.html","d8126d419dcefaf0f17b64075d730539"],["categories/思考/index.html","ce6ee708ec3eed5dba0d607c0857f27d"],["categories/思考/职业规划/index.html","3da7f49d118d76511ec475ee80606b18"],["categories/科学/OpenWRT/index.html","40bca695b624dd50604fc58330e42a7d"],["categories/科学/index.html","e869cd4542c4070ce484b917a1e2204d"],["categories/科学/手机/index.html","b40139721244c2b186266994d31a6ebb"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8a0f0073ff4e0cd8f9c8d5cc74a696f8"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","92c7bc5ec3c64db829e4d7bc6141285e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b3b857da19271ccc57047c7742ef2052"],["movies/index.html","313751b2055ad46623942a9d7a520908"],["music/index.html","2db7fd59b0983e2fa977d2a78577ead5"],["page/2/index.html","4baa50d7d3fe7e4e383a226c55897d3f"],["page/3/index.html","908853241052225ac434e5404491a5a7"],["page/4/index.html","a2b80945803219d754f6adb2f0ae4ba4"],["posts/20191204A1.html","21b4e5b086e0905d0f593162602d4850"],["posts/20200115A1.html","373c7fb0eb91d46e092ee56c8cd65c78"],["posts/20200116A1.html","5fb54f5246d4e6561f9f9d97c281ce55"],["posts/20200118A1.html","1faee25aaf93d9b2b87d050d944db8ec"],["posts/20200119A1.html","5c004b6ddaae33ba51c1b7702017ebe6"],["posts/20200119A2.html","5bdb51081f5440528da2cbc4a67581f0"],["posts/20200123A1.html","64251e7473c650c691ab06c2219ab4e7"],["posts/20200204A1.html","8b9ae1fc3906103aa1eff6774feb7e91"],["posts/20200312A1.html","3f125935e75942651c9d674af85fd5e0"],["posts/20200320A1.html","50683aa5c4b14c379f51bd4cb75db461"],["posts/20200322A1.html","90c14b50d1f60ec9956c0b1f22022f99"],["posts/20200503A1.html","c505379988308ffceac8ce73b366e188"],["posts/20200504A1.html","eeecbd9d280cb5974c094e267b90e550"],["posts/20200504A2.html","7da90e2a360a5d55677d684e0679318a"],["posts/20200504A3.html","217f09384e61b119e492069bce8bf86b"],["posts/20200504A4.html","2546ab78cc6f5852b44da2c9635f4de4"],["posts/20200504A5.html","91b2daf195d55a0b6c2c49918ecc9dd1"],["posts/20200504A6.html","50a446dd510eee46b2229706225047a8"],["posts/20200504A7.html","c89113932904e8a8b87c04e92899a197"],["posts/20200504A8.html","7e0c4066754e07ffa156a47e4e410279"],["posts/20200505A1.html","ff4e978330140fa0128488446d7b0f9e"],["posts/20200505A2.html","f76ab8dcd337fa55bfda9d5535d5a48e"],["posts/20200505A3.html","9f46623aa22536451abf9dcebf0489f9"],["posts/20200507A1.html","cfde2ca8db4b32cd6f598803b9eb051f"],["posts/20200509A1.html","8707ea177aa9f7e84b775f7fefd147d7"],["posts/20200510A1.html","b391c02bcc601ff812ba2ca1014f38d1"],["posts/20200510A2.html","d2abf023e82390a99078b9df67d5b5eb"],["posts/20200512A1.html","b7016d8a07ba3a14f3b9923fcb3e3413"],["posts/20200512A2.html","0db45bb9b19458e1717be2646938ccf7"],["posts/20200513A1.html","d0764c5fc576d7230195c26bb1161fc2"],["posts/20200513A2.html","be9c07699ee2e93f00cb3ea7f112cd54"],["posts/20200514A1.html","20fe27765b230ef11f4db4de113edb8f"],["posts/20200514A2.html","c16f5bfbfc642027b13f0912be93a69f"],["posts/20200514A3.html","a2e3f700aa6dec78b5a917fb4d4f47ed"],["posts/20200514A4.html","0f8fa28af53842f653fbb4711e88c060"],["tags/AGV/index.html","b8cf93a937a6522169a9c7315ad03f9a"],["tags/Github/index.html","1ee6166a43dee82705229a98ee23bcab"],["tags/Move/index.html","e2db0d144408d556875b066069f3556e"],["tags/OpenWRT/index.html","bdcb268a9b25c9ccce4efeb05ade01eb"],["tags/Plant-Simulation/index.html","ef0bef10bc690135830b4cb61d7ed2a5"],["tags/Wordpress/index.html","60a3b56e1e9c9193f755d77337ecaacb"],["tags/cad/index.html","65242ef377f95d95fe4b8ea872ad6926"],["tags/coding/index.html","5160d1d797365d440296442b8d1e0bbc"],["tags/hexo/index.html","f2f49edb80a5272c94cb9fb16134a369"],["tags/index.html","312be92c84797381be54c95a4ce0355b"],["tags/transferstation/index.html","b0a52e1e37b5010dc0c9370ec883f0ef"],["tags/typecho/index.html","2fa6033c789473aeb754f1f2411d3627"],["tags/ubuntu/index.html","953a7ae68bfec09472e4e4c056dc01c1"],["tags/写给宝贝的话/index.html","c79d07180a5b2751d0ac6f3cfdc661b5"],["tags/原创/index.html","fa570d70f6de635d8d271322e082feb6"],["tags/学习/index.html","556cf5a6236e7ee06f909efabede2811"],["tags/宝塔/index.html","be3f0730361f8521b1b9e4816abd3bed"],["tags/生产模式/index.html","88645b449ddffdacf518126b600a7e02"],["tags/百度客户端/index.html","c15093f378d13d98126dba0b19f41fdf"],["tags/科学/index.html","7bab1cc97776aed81b1cdc5b625eb48d"],["tags/统计/index.html","d785b179aa1b8e5761f8b03e7ea19921"],["tags/编译/index.html","488f760ac5ffd9575627d954a26995ee"]];
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







