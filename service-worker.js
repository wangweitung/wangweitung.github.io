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

var precacheConfig = [["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","dcad55ba23c07898b6a02163e0fdd2ed"],["2020/01/19/关于coding/index.html","8015b346d91fe602cf630918bfa5ea33"],["2020/01/23/2020-01-23-今日武汉封城/index.html","448decd61d347fccc33b1d1d88168fb1"],["2020/03/12/妈妈写给宝贝的话/index.html","78eab85e3ea4b93c0ac2164bfaf42eca"],["2020/03/20/磨人的小天使/index.html","06f96bfc904d8c80467143d35cb56e4a"],["2020/05/03/hello-world/index.html","17ff9a7dc21af37923cbd5986dd4de6b"],["2020/05/04/AGV的用法/index.html","4c3c7814180b3b5f73131c2a8f426287"],["2020/05/04/Github创建文件夹/index.html","d0f5aec427cef32f738cff1a522b4849"],["2020/05/04/Move的用法/index.html","ce5d7a158c838357f9d02785c9219dc8"],["2020/05/04/PlantSimulation常规操作/index.html","304ae09ef3f38e7dc4425bb56cfc83cc"],["2020/05/04/TransferStation的用法/index.html","5218e1137474ec9b80185eedd4e7833a"],["2020/05/04/Wordpress问题解决/index.html","74fe6447453465cc36eb643eca65d6c4"],["2020/05/04/ubuntu安装配置hexo/index.html","ea33a7ec03bb51a7badca371d4576fdc"],["2020/05/04/无科学环境连接谷歌账户/index.html","feaa0d0a8503e1fe722c020aa95d2e02"],["2020/05/05/Markdown的一些小技巧/index.html","9f0acbf07b8ded8e30942a4cf0df4075"],["2020/05/05/导入cad作为背景图/index.html","7c8e3a423b68e3ee92caec526376cd31"],["2020/05/05/推动或拉动的生产模式/index.html","24861cd7cd426429d2871419495ab33b"],["2020/05/07/在摊位下上网课的小女孩/index.html","a5504e0dd9d4bf121066f5406fdf9e62"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","08af633875438b4465fb2d0f23b534a4"],["2020/05/10/ubuntu server配置方法/index.html","9ab1a7a38cd1ef96e8a9b52a6ef8882c"],["2020/05/10/ubuntu安装百度客户端/index.html","0bd7033b69428047ab3a64ce82b01c45"],["2020/05/12/ubuntu server修改获取ip方式/index.html","e2b428b979dbfed11321b18c00dbafd9"],["2020/05/12/ubuntu server基础命令/index.html","ff352321801c86d85e6f6519faf90c1e"],["about/index.html","a3c18fb44db79a6dbc9eddc0ba0870f2"],["archives/2020/01/index.html","e8d83e0cebe9f63d31f56ca6777bc3d9"],["archives/2020/03/index.html","43d7002374fb8e624d18b112d69f535f"],["archives/2020/05/index.html","0319793cf177085871456d6a811546e8"],["archives/2020/05/page/2/index.html","396505d9caa60732e2687b92c5ac3627"],["archives/2020/index.html","920a66fc37ac346982990c27d6396313"],["archives/2020/page/2/index.html","a92e312fb73a464097928e3bf90aa57b"],["archives/2020/page/3/index.html","9e4368c73c8c459de31e9eee1a2af8b2"],["archives/index.html","111980024e859c2d216b360bdb582ad5"],["archives/page/2/index.html","0e233152784c71866c9a34333a10a9fe"],["archives/page/3/index.html","736e9447944c93e76be74a7c072a7840"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","e33f3aa0dd49bffdedb4436901271ac2"],["categories/Code/index.html","99f1e07012e5196ed58e910793c68965"],["categories/Plant-Simulation/SimTalk/index.html","51f6424d31604a0616525739ff384da4"],["categories/Plant-Simulation/index.html","ff450fe60dc1742dd75056399a0f2420"],["categories/Plant-Simulation/实体/index.html","da52144b47bc571bab525c3837b05a05"],["categories/Plant-Simulation/常规操作/index.html","294df5b23e719a972149dfc7a30ccc30"],["categories/Plant-Simulation/模型/index.html","2fbbe5f1be5514f98c9f29897d0d51e3"],["categories/Plant-Simulation/背景/index.html","477c39f7b196fc231c025e664069bcaa"],["categories/coding/index.html","d237e5c11f8808580c68c1bf7a801d62"],["categories/index.html","c05f8c1f88e95b5e5c3c0dd21eec8730"],["categories/ubuntu/index.html","d00699d5ef1a3dea9ed869114ab3976a"],["categories/ubuntu/ip/index.html","097f8f9f788d133bc6d552f68ed45ec5"],["categories/ubuntu/下载/index.html","8b5e50ac7fde5f043fa27cae0fd122b6"],["categories/ubuntu/命令/index.html","04be3a3977db2260dc7d3f8c233b9183"],["categories/ubuntu/配置/index.html","93d6378a69c330b0c9b4fa5762240d06"],["categories/博客/Wordpress/index.html","14e1066953e3491c854c4c60f8a586ea"],["categories/博客/hexo/index.html","6123e11869fabfa2e547e3fee063362d"],["categories/博客/index.html","e045826326927ef751c44aaea98dadb5"],["categories/宝贝/BB/index.html","b3b1ae46e124253d99dbd06b59ce731b"],["categories/宝贝/MM/index.html","6ad704079fdaf6a1aec100e7288a1bb4"],["categories/宝贝/index.html","d2569f4df2fab4cea27dbc49e34589f1"],["categories/科学/index.html","47328f1670381257bf97576a80111e86"],["categories/科学/手机/index.html","d536d8fefd6baa5f369b36318ced7169"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","2b9d72f8eb87bb8368b2e688718afe06"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","5c0dbcc3eb31d436cf8d85d1e3d183c9"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","dda9a0f167a1789cbbd496890dd31074"],["link/index.html","86be617b52b75397d43b2aa6e1614c8d"],["movies/index.html","3ccbcec676dbb3283fe8a788c2846c4e"],["music/index.html","8151e988c60b14c0fd0758a65aaeffa2"],["page/2/index.html","98ab33bc001caf09358a81bc513460c9"],["page/3/index.html","dc43f9d4a70a49f774301af6d031d83d"],["tags/AGV/index.html","76202da3ec65adf9e9fc79a2fc52588a"],["tags/Github/index.html","3bd9963ed8ae61af8137eff7cf12b4ec"],["tags/Move/index.html","edab8b5f563184c54330ff3d16e6b965"],["tags/Plant-Simulation/index.html","5e747e32014ea53c04c200f1f8159382"],["tags/Wordpress/index.html","8c29535e06428b05704f6d44d2bce058"],["tags/cad/index.html","c6d3847b23884b666b5d146bc4860057"],["tags/coding/index.html","19d70efe96a021161aba56fcae2cf596"],["tags/hexo/index.html","8a0604d71c871579d767ee1f0ffda81a"],["tags/index.html","249d44f7647c8c2128af5e3c04d5f0fa"],["tags/transferstation/index.html","a9b4e536d12f273498e31a148f09a111"],["tags/ubuntu/index.html","03281f8899ea892178fadd57d513269c"],["tags/写给宝贝的话/index.html","32eeacd9ad585d566c5e25338facbaf1"],["tags/原创/index.html","e2b6f66a086b57b47f37eb99c793d9dc"],["tags/学习/index.html","5903fe8c93f78affc25d1ee3723b371f"],["tags/宝塔/index.html","1029f2f0e46026ebfc90d6483ad8cf67"],["tags/生产模式/index.html","ae00332b2cf9567cd1a6aa30ee6cd65e"],["tags/百度客户端/index.html","2c91643a42136cf25ec22254316c8f49"],["tags/科学/index.html","7d94bfeca693a8416f13c962d53bd93b"]];
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







