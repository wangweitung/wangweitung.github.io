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

var precacheConfig = [["2020/01/19/关于coding/index.html","a9862a06fb264cf53530de64320f8c51"],["2020/01/23/2020-01-23-今日武汉封城/index.html","4bbaa797023e3c73e65338e445ba90e1"],["2020/03/12/妈妈写给宝贝的话/index.html","23f478b5f403bdddcd44fb51cdf1b316"],["2020/03/20/磨人的小天使/index.html","429fda77bb890df634eb57b03076199e"],["2020/05/03/hello-world/index.html","c0602cacd2a189e62ee5c56afaa8e502"],["2020/05/04/AGV的用法/index.html","8e5be147ee4d43495d8a7583bd88a6c1"],["2020/05/04/Github创建文件夹/index.html","b561156a52c98b1f8a80dcde6527b439"],["2020/05/04/Move的用法/index.html","a9e98821865d5f5b9dd29ebea708a38e"],["2020/05/04/PlantSimulation常规操作/index.html","76e031a5834d1557c870667c52eb40af"],["2020/05/04/TransferStation的用法/index.html","6f7cbf7e216ce818d5ebb936d48f6a16"],["2020/05/04/Wordpress问题解决/index.html","ad6541ea11cf77c06f5805a69a581b89"],["2020/05/04/ubuntu安装配置hexo/index.html","297e55e2d8878f01bf7f996b4676ec35"],["2020/05/04/无科学环境连接谷歌账户/index.html","814e7d0b0c05c75d6c70ccc06e564aea"],["2020/05/05/Markdown的一些小技巧/index.html","9fcbd17c1e6cf5bcde895babfa1da274"],["2020/05/05/导入cad作为背景图/index.html","39c3667641c06213e2257539c64947d3"],["2020/05/05/推动或拉动的生产模式/index.html","4dc141d83d0fbf488b04cdfbca802724"],["2020/05/07/在摊位下上网课的小女孩/index.html","db833870a8c2d6e415bfff53da80c3c2"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","0e6f389ce12433ededfc0b0b91e9e4bc"],["2020/05/10/ubuntu server配置方法/index.html","a763205e90b013f76c484437441af8f7"],["2020/05/10/ubuntu安装百度客户端/index.html","755869676df94ef6de01ec0c1568a9ea"],["2020/05/12/ubuntu server修改获取ip方式/index.html","77c046ab423350ce2a4924ee6ca520f4"],["2020/05/12/ubuntu server基础命令/index.html","24c6beaa9aab5b8c6625d6c20199be98"],["about/index.html","d7b7941db7c743d483da9a8830af2838"],["archives/2020/01/index.html","678bbe8793497ac6889ab39b41411424"],["archives/2020/03/index.html","2c7ddff6780047f799fe060dda2ad7d3"],["archives/2020/05/index.html","62d8b6b18350c0aad0d7fb3339308b49"],["archives/2020/05/page/2/index.html","654d44ce7434774aa67747dab7ef8dca"],["archives/2020/index.html","e523ff7b0c00940cd81a167674725005"],["archives/2020/page/2/index.html","ded7626f8fadcea650e5b6aa25c4e08d"],["archives/2020/page/3/index.html","38fd36d774d7c1e2dc57caea3230e49f"],["archives/index.html","e6e65a410f747989b536541b7d7f369a"],["archives/page/2/index.html","5072b84b1abce2e3ecdb285a8e3476aa"],["archives/page/3/index.html","828b23fdb4156d1770c46a25be7efe15"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","b5d566f2c74f7d9c76c1a582b6eb2f2a"],["categories/Code/index.html","e05f14b0fc55b58fd898d5f400c99097"],["categories/Plant-Simulation/SimTalk/index.html","37b785fb5d44c92bf652a4f9a028c137"],["categories/Plant-Simulation/index.html","a87ebfa2ef42cdfeafe0bec22428cf2b"],["categories/Plant-Simulation/实体/index.html","b7c66fcf0ad9d335e8d33276a1909a70"],["categories/Plant-Simulation/常规操作/index.html","29498914baf3eabf95d3d529ced1b94b"],["categories/Plant-Simulation/模型/index.html","a7a93fb5b7c5b871e160e04f8cdfa666"],["categories/Plant-Simulation/背景/index.html","94d34086dd52bfcdb5598366553424d1"],["categories/coding/index.html","99bc74f29dd740806f23035e22a8f7ab"],["categories/index.html","e7230d0a8073a0814940a8dc4292d8eb"],["categories/ubuntu/index.html","5010c5865d0560c2b892703e76ba1a77"],["categories/ubuntu/ip/index.html","c6340ef6e549b2c077b1c220995123e3"],["categories/ubuntu/下载/index.html","42a190808548045b4310b7f32a207407"],["categories/ubuntu/命令/index.html","41a60abc31d6d2133b68b92b3d441bf8"],["categories/ubuntu/配置/index.html","f6898bb05cd164ff04d2aa06057a0f07"],["categories/博客/Wordpress/index.html","5900dba16d589a114c6da7f1f3962282"],["categories/博客/hexo/index.html","25550979075705db00efa22aca87ad5c"],["categories/博客/index.html","c1888c68a3e688e4fb06a136ce1b36c2"],["categories/宝贝/BB/index.html","0e1cd57dc719ca543866d363be0cabdb"],["categories/宝贝/MM/index.html","21b5889748725c10b63fcca9f580e74a"],["categories/宝贝/index.html","2f6f063f9047ebb57b921ff060089661"],["categories/科学/index.html","24f74a4d54685338058f21ac425c9e8e"],["categories/科学/手机/index.html","1580f2efdc26cec54de75b8ad23ba756"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","563becbccb50f66352af5cb81e4b2774"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","a9bf9873f6a59084cd04c6a65f728b67"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","752fee8825330a7210ee6a40c1bfff66"],["link/index.html","6c0cb697871a9ddd48777cd6fede14c3"],["movies/index.html","f363b22dc2ae17ead22345904799c13b"],["music/index.html","29a9b2bce3ce74186e08675d3f03d101"],["page/2/index.html","c1f176044fe9034ccbab1ba0e7ce954b"],["page/3/index.html","4287c7c973d3e1dd01adc617f58dcd42"],["tags/AGV/index.html","345a0c6ec83989b5c0ff7c77fa79f530"],["tags/Github/index.html","a7b8675a770853fae967165e579af671"],["tags/Move/index.html","056f662e22af52a041882e456ef5c1a3"],["tags/Plant-Simulation/index.html","87854edaf7af7f9a6f8ce4b296e084b7"],["tags/Wordpress/index.html","fbed0c9ff2f1b38563a911f8ee60c9a2"],["tags/cad/index.html","a74bcb60d95ecc6c2b28f669ab7c3458"],["tags/coding/index.html","42bdbd6bc7dd8637b9840e79dab5e65d"],["tags/hexo/index.html","cfb2d03e4528b1bd6fa84a12f7d57017"],["tags/index.html","d3b3af468639a6ac0cdb0e225c2c9e99"],["tags/transferstation/index.html","872e12bbbec72c907e0a2b11bf70a714"],["tags/ubuntu/index.html","530bcbf9e04b81c6b415155d9d96c7ca"],["tags/写给宝贝的话/index.html","ed8251f0db07d8c38cfcfce24a06ec61"],["tags/原创/index.html","69a6904143a602edc6f7cd7cb8ed83ee"],["tags/学习/index.html","1d0165e1bf87498cc026e6822c73a332"],["tags/宝塔/index.html","f17cb86916c63b993150a4d2b9a79556"],["tags/生产模式/index.html","d1900b3e480005265bc6139ff09a80f7"],["tags/百度客户端/index.html","f083a73f7e74fc28957896ffb2822ccd"],["tags/科学/index.html","0372afe6759c424e022d56815a69f5bf"]];
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







