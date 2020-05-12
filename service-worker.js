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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","00fdb8ee2078616b7a8cc7c01d9cb97f"],["2020/03/12/妈妈写给宝贝的话/index.html","f31f69831300347ea90d512d9c482ac8"],["2020/03/20/磨人的小天使/index.html","ea1dcf9d5550f2e475d211c884a3c738"],["2020/05/03/hello-world/index.html","b7344c5885862244070aa0468cd646f6"],["2020/05/04/AGV的用法/index.html","1f1389671f69c5d0ddf4c875b3d61f33"],["2020/05/04/Github创建文件夹/index.html","d185171dbb6e903573bc7aecfaa26b15"],["2020/05/04/Move的用法/index.html","2d9741dea752d8b929b3fa25aa5c94b8"],["2020/05/04/PlantSimulation常规操作/index.html","a46d5a0ad0c4a82f5cba2588fde62178"],["2020/05/04/TransferStation的用法/index.html","6146b68ec6ea1f847e3e8bcaa4e6ca28"],["2020/05/04/Wordpress问题解决/index.html","7abcf999a7c42fefa0b1653254fba602"],["2020/05/04/ubuntu安装配置hexo/index.html","0a4bfed0d88b5e82b451482bd4034b28"],["2020/05/04/无科学环境连接谷歌账户/index.html","452c450dc799eea864eac4b42110f68d"],["2020/05/05/Markdown的一些小技巧/index.html","dd42640526b4cb4c0871db8752f0aa67"],["2020/05/05/导入cad作为背景图/index.html","8e221897e0456a69a6667d273a080b44"],["2020/05/05/推动或拉动的生产模式/index.html","67990225c6f7a04162ffce3973e678d9"],["2020/05/07/在摊位下上网课的小女孩/index.html","85de07c2fcae53e2d3bb8866b8b06687"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","b22fc50a10fd498ebc54a6eaa5397b99"],["2020/05/10/ubuntu server配置方法/index.html","4fec640c28c5d97b1ec77f8ac9af4ec7"],["2020/05/10/ubuntu安装百度客户端/index.html","8c022cfd532b00a6cdd3d63464d1a51f"],["2020/05/12/ubuntu server基础命令/index.html","0eb784109f24e6e4ef6e8338b71e25c6"],["about/index.html","1f378a996419a41b4f29969a5e732fd9"],["archives/2020/01/index.html","a4882165729527e8b1bfc519bb9f2521"],["archives/2020/03/index.html","9961a477045d61a89519ab613689af1f"],["archives/2020/05/index.html","c351b9c32d3ed7511d0fa8e04e20f087"],["archives/2020/05/page/2/index.html","6cda493e11e98c2f9098d714d795dcc9"],["archives/2020/index.html","97c42dcaa1edff01b399747e2f548b7e"],["archives/2020/page/2/index.html","1347f8dc228e66332b687a2f7e0bbb16"],["archives/index.html","813444fb864bc43bad094ca662bd08e2"],["archives/page/2/index.html","d297bfbea921c7177e1897fd17d9f232"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","6df3bd55aab4a641803eb7409e632269"],["categories/Code/index.html","aa4988dea3ba67b313d1bb71e76ad07d"],["categories/Plant-Simulation/SimTalk/index.html","97d4aced9810c1079a8dc8494756dd08"],["categories/Plant-Simulation/index.html","f15773265d2b8fbfe44b70d6d60637ca"],["categories/Plant-Simulation/实体/index.html","d4e827bb21d1722d34f1ef1be96add00"],["categories/Plant-Simulation/常规操作/index.html","4976319b1933f60f78268454d446c9d9"],["categories/Plant-Simulation/模型/index.html","b04c51623b7ff2a3fd118e344aff6e80"],["categories/Plant-Simulation/背景/index.html","1b9b0f9f339acaa6aef717d7a2f1daed"],["categories/index.html","b8e16aebd8aa8a1aa10c614ba04f5249"],["categories/ubuntu/index.html","32fc416787aceb6fc25370e08f8c48c8"],["categories/ubuntu/下载/index.html","6bc4ede99d62c2e0dd75ecacc402b8e7"],["categories/ubuntu/命令/index.html","8e129873cfa82020e24c629a0c76278d"],["categories/ubuntu/配置/index.html","27c5bdb4ec706052e9fd6b86b0069767"],["categories/博客/Wordpress/index.html","d0c34c778cab00e472da11c28e27dff8"],["categories/博客/hexo/index.html","c9e8b036af8ba7711a38a532310f0281"],["categories/博客/index.html","b770242748b725141e144e6c715f2e98"],["categories/宝贝/BB/index.html","82ccb32338c995d102c854fe60c0ec87"],["categories/宝贝/MM/index.html","6f7c3c1bb59882d50632e28c6b67df7f"],["categories/宝贝/index.html","0cdc804399448c44d5d2616ef1ac1a57"],["categories/科学/index.html","f0662ce72757c58fc6632e7890503f31"],["categories/科学/手机/index.html","b3904c17d5bc66cd2ef66f0d95687386"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5289209a2695a05a8f32330556386fee"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","db5f976e4ba2f206ceb83e156a8f7043"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","9f8d8bef4b10a8eec467d1e67370c538"],["link/index.html","ecc23b708dfc12fd284ab228f7d882a1"],["movies/index.html","ff03ca2d5bbacdfa7444dfd8a1830d3f"],["music/index.html","9843a0320fd543533c22d5e0f4b08efa"],["page/2/index.html","2768cb5ad38bd1b95f29f3cf90af7d91"],["tags/AGV/index.html","0615e6b42f8708f63e18ffa5fedce452"],["tags/Github/index.html","d6858ec386dfb33fc47235e8edea0872"],["tags/Move/index.html","8ea5b1b4921d325577abb09cc1e06e63"],["tags/Plant-Simulation/index.html","d97cf7ae3a410dfebfd8bb7d68a1df14"],["tags/Wordpress/index.html","38b99dd967af19903215e48c57daa3e1"],["tags/cad/index.html","9925aaa4aeaf9b109e7b864fac251e6f"],["tags/hexo/index.html","a104343609ae9a3cf11d192140560bf1"],["tags/index.html","1d6f5728bfee0dfadd3a8d9c4f677be2"],["tags/transferstation/index.html","dacbee0847a3b78a46dd2a360edcc35a"],["tags/ubuntu/index.html","826512a096958dcfcc713e109270029f"],["tags/写给宝贝的话/index.html","1c8035b08548eb6accb15537ad78080f"],["tags/原创/index.html","c8cd81d4d02ada1ba3a905b54aa4bd7f"],["tags/学习/index.html","ef9109fd6fba4d05860de9842b63809e"],["tags/宝塔/index.html","79d9c39edbbd618b8dbedb831f06972f"],["tags/生产模式/index.html","d62504e6599b1fadd7c6768e5f9d9df0"],["tags/百度客户端/index.html","57b9ed862301d4bd26a325ebc39664f0"],["tags/科学/index.html","1d7de94b83d090f8c4b6c0d0429489a2"]];
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







