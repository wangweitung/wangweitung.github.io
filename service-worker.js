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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","5a63111c628836e7a0da63da66925d62"],["2020/03/12/妈妈写给宝贝的话/index.html","c1c66d72850039b3289fbf890e33cfd6"],["2020/03/20/磨人的小天使/index.html","28411db4544e67510cb0ec2de055fc24"],["2020/05/03/hello-world/index.html","21c5a866824d335d3a965e4df327bf0b"],["2020/05/04/AGV的用法/index.html","2d6358eb681e14aeada1bd34f016d361"],["2020/05/04/Github创建文件夹/index.html","ef94c57327f0cf8c5a87a5007533c299"],["2020/05/04/Move的用法/index.html","007bf490f9081ada9fb6431be509638d"],["2020/05/04/PlantSimulation常规操作/index.html","cbed2c3c96fc5295bb263b228200a870"],["2020/05/04/TransferStation的用法/index.html","f60ab753809a41f66d1b1a802038b615"],["2020/05/04/Wordpress问题解决/index.html","5ae53ffac72421f8bd71851faac9e9ac"],["2020/05/04/ubuntu安装配置hexo/index.html","7e3dd166caf490f4e8a8f537e388631c"],["2020/05/04/无科学环境连接谷歌账户/index.html","907f41a1f7f924d30af28c579ddea4a1"],["2020/05/05/Markdown的一些小技巧/index.html","8fce1616e2108ce4c9f9c8c422321f92"],["2020/05/05/导入cad作为背景图/index.html","16ad1bd9eab0690cd1860601d8ee1c05"],["2020/05/05/推动或拉动的生产模式/index.html","9161438a752371666b1b853438eb3261"],["2020/05/07/在摊位下上网课的小女孩/index.html","13275c852e2f6d4d9c185577bd764e19"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","d30d4552824f0d16467d9e8558c2e935"],["2020/05/10/ubuntu server配置方法/index.html","dd97264f6b7ce9436474728824771f53"],["2020/05/10/ubuntu安装百度客户端/index.html","84e15b6cf87dcf42e572d0fd2da2c398"],["about/index.html","d19fd21676ba83e0717ab91deaec674a"],["archives/2020/01/index.html","2e583fc93b378419123e53fc77b9767d"],["archives/2020/03/index.html","497d1629f384ab9674f7bd7e42d2718e"],["archives/2020/05/index.html","7669da17b4078b91f04068df4f9f321f"],["archives/2020/05/page/2/index.html","0b8e91be66db1df332f3e5a9a1b78317"],["archives/2020/index.html","5e49e647b0cbf2dfecc6ccfb2950c4dd"],["archives/2020/page/2/index.html","ba7f919e2ec81aa5e6b53b8483fcc3a7"],["archives/index.html","282969c0bd0a8dcb540d96a6bb2c695d"],["archives/page/2/index.html","689795542607b1e447f83d987de44714"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","973ad1a36f29c82f44be94b8173b6106"],["categories/Code/index.html","f991c375de137e2fd280f3ff2768f2ea"],["categories/Plant-Simulation/SimTalk/index.html","ab50dd7f0a116dba33bee1ad996a0858"],["categories/Plant-Simulation/index.html","6c96dd716aecef4c9d26d8cea5d05df0"],["categories/Plant-Simulation/实体/index.html","fe1de955f7f0b9e1e2c9d32a85b55f07"],["categories/Plant-Simulation/常规操作/index.html","92752b84c68e871cb0206cfafe2e1c4c"],["categories/Plant-Simulation/模型/index.html","47ea34fcda02d068339c161d0cb40e69"],["categories/Plant-Simulation/背景/index.html","0ca1b690f824a312d65a96cd55301c97"],["categories/index.html","cec8bae31d971b8070d3994bc4a0e194"],["categories/ubuntu/index.html","d88979ef934b3eacbfbb979571174bce"],["categories/ubuntu/下载/index.html","9d9ee608bd46c2b308066a165a7a2de0"],["categories/ubuntu/配置/index.html","a595216e1c21775c7aa4646ac77d0207"],["categories/博客/Wordpress/index.html","b817d02400e2f88b762a364e20501031"],["categories/博客/hexo/index.html","c9e42b0282d95ea0ba94b2cb0ff92581"],["categories/博客/index.html","6f856d88aa598cdeebeb962f9ba95691"],["categories/宝贝/BB/index.html","db4570f20271096f34f520a5dfc1a131"],["categories/宝贝/MM/index.html","5b830bce52045ccbf1361e6433dacb41"],["categories/宝贝/index.html","cc92143fa0b9ea7b9ef0f79cf19e8a10"],["categories/科学/index.html","41ffd1605d97664d3b4c030d78e9d30e"],["categories/科学/手机/index.html","bb4f264fad867debc53a38d3fbfec78b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","95873ec2d6ef2e3ed4646eaaefd77de3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","015f8c42f81de63b82292ae6554774a6"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1202cc42d6395665006f9546721c0bee"],["link/index.html","1c2e39159810127a9680b730d5eb4e42"],["movies/index.html","1f53199682fc512bbf0b72412d3fa219"],["music/index.html","b812bf1f1795a0ae4ef48846197fe4ba"],["page/2/index.html","9fff6a89749263ec861a7131146d3e82"],["tags/AGV/index.html","33b3e73b79c59daa3fe556f0fbbadff8"],["tags/Github/index.html","74c17ee9d8c60f05c3fdf55dbb9af6b7"],["tags/Move/index.html","4eeb7eacde24da76f4c5d64f91714413"],["tags/Plant-Simulation/index.html","3e4f6a3779992b23a3a146d4a65e5791"],["tags/Ubuntu/index.html","c92607ba07b2c2d51a5ad8e9ac4497b2"],["tags/Wordpress/index.html","72a91e138d5aa983be99b82d0fb0ec0f"],["tags/cad/index.html","e8f79359b7feea773980a077a2fbd457"],["tags/hexo/index.html","8dbae8341a6442b8054f68da3b988044"],["tags/index.html","341b9022aa6238a1a82cbeedf8da4812"],["tags/transferstation/index.html","66d348abf37ff8fe0301e9025ec09478"],["tags/ubuntu/index.html","1ba91aa14f78e2593abf073ecc0be603"],["tags/写给宝贝的话/index.html","1b15143c00cb41e587b6bc973acdf029"],["tags/原创/index.html","5834d32297c163669961a5334b432018"],["tags/学习/index.html","5ae88931687dab4f454ba46aa0007390"],["tags/宝塔/index.html","5f023cd7d3f9b37b3c06021be896c1e7"],["tags/生产模式/index.html","4efafff4cf9cda19084b7aae01382bbc"],["tags/百度客户端/index.html","5697b50efd03339e399168b1471803f4"],["tags/科学/index.html","0d051a988b92103a145bf8b903cedb45"]];
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







