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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","9f9d941cf9e1e256bd3a3fa617b3de27"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","fd39c8b0c49b33214140738fe0a77018"],["2020/01/18/Wordpress自定义页脚/index.html","28de133f01ceac70089a2f365ae52eaf"],["2020/01/19/关于coding/index.html","b79269255ca61a6ca05b586180b10a90"],["2020/01/23/2020-01-23-今日武汉封城/index.html","59fc5eb1ed9767266b9b29fa1a3ee4ed"],["2020/03/12/妈妈写给宝贝的话/index.html","008470f6cc96b0fa511e051f3dc11fd0"],["2020/03/20/磨人的小天使/index.html","4acfde1be4fc757c30668fda060cc11a"],["2020/05/03/hello-world/index.html","3e5a09eee5a7a30a53f66db668f5e5fe"],["2020/05/04/AGV的用法/index.html","5cf08cc09df3fbe566e333fd57f772b8"],["2020/05/04/Github创建文件夹/index.html","14e0cfb97c0ca726ddb5fa9f4b051b8f"],["2020/05/04/Move的用法/index.html","1ff363d930e5033cfdcf60154a0fd15f"],["2020/05/04/PlantSimulation常规操作/index.html","b3e49d5fa1fe53e98f39a9c80093d6ca"],["2020/05/04/TransferStation的用法/index.html","bd1b93eaa192d413f2f78709b39d5b32"],["2020/05/04/Wordpress问题解决/index.html","5bee62dd4759d2980e176c20e19c0380"],["2020/05/04/ubuntu安装配置hexo/index.html","ab47ad7c63f796f084091d8dcb4905e2"],["2020/05/04/无科学环境连接谷歌账户/index.html","9470d945284dd52004af25446dd04c6c"],["2020/05/05/Markdown的一些小技巧/index.html","58c470f4cc0528d2acc68306a0b0c6f2"],["2020/05/05/导入cad作为背景图/index.html","67a042e5703edeec4060b7633ef2292d"],["2020/05/05/推动或拉动的生产模式/index.html","f26ecd6a529a31686fc3818da02a0c6e"],["2020/05/07/在摊位下上网课的小女孩/index.html","16a33a283308090700adc48b4c316fb7"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","253e303bf21cb266cbfec60169eed63c"],["2020/05/10/ubuntu server配置方法/index.html","f843b2536e6a0ce81fbf27c68f6967bf"],["2020/05/10/ubuntu安装百度客户端/index.html","9c198ff6ce3f8901a4ad99e2823ed2a5"],["2020/05/12/ubuntu server修改获取ip方式/index.html","640c21a1e5ffefbe392ec6a8d4dd0e7a"],["2020/05/12/ubuntu server基础命令/index.html","30e02f6a225045815a378f620e9e97fc"],["about/index.html","4733a112f95258aeb6e7ce82c066b78c"],["archives/2020/01/index.html","aa249916be632fbd33cffeea4469aec0"],["archives/2020/03/index.html","c45152581baac01beb219c30ec9311b5"],["archives/2020/05/index.html","3d6b816dc64f267ad4438ab0173202fe"],["archives/2020/05/page/2/index.html","62889a6420e9d3123f1a2e58ad39a908"],["archives/2020/index.html","57bafdd71c0243318e443521e1754633"],["archives/2020/page/2/index.html","172e9cd1fe57d13ced4ec3c20ef76660"],["archives/2020/page/3/index.html","ca121138911f48011e6b0d21b3e7c244"],["archives/index.html","942be279f2690eb7be8678f5c331a0e0"],["archives/page/2/index.html","698c27dc6449b3a7cd29e80f5fa573a5"],["archives/page/3/index.html","ebbd7fafb034f851431f4e0027208f89"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","28d8f3f1781f0a5f060d1706e146b973"],["categories/Code/index.html","64130126fb8a620af3a82405c96acef7"],["categories/Plant-Simulation/SimTalk/index.html","ab4dd97976f0211e796eccb2bb676bcd"],["categories/Plant-Simulation/index.html","f7253aea72c9122cbdf3a5dfacab0fdd"],["categories/Plant-Simulation/实体/index.html","f261627206931701a29b8b6fad8dbf48"],["categories/Plant-Simulation/常规操作/index.html","5990487eb50477708f151941bc830911"],["categories/Plant-Simulation/模型/index.html","91f0f6acbf9a40c6071d154c791ddb2e"],["categories/Plant-Simulation/背景/index.html","d2ffb323571d3166ee77d7b047bc4a48"],["categories/coding/index.html","9618df502bc1d5f737a73d00a58eb0ce"],["categories/index.html","212056b809169f27d658cf0530675edf"],["categories/ubuntu/index.html","a73aa18c80e7ddc1b8a7701a32182987"],["categories/ubuntu/ip/index.html","3805640b71b1550dcde7d42fc0f4af9f"],["categories/ubuntu/下载/index.html","cc8bb15e4aaba591d66379f518fd3aec"],["categories/ubuntu/命令/index.html","d90ebfd5ba44b3d48f5f407dfb55e836"],["categories/ubuntu/配置/index.html","992506b08f8f1b722d31ab2af454875b"],["categories/博客/Wordpress/index.html","f6853f4b3ce634361b74624662479be6"],["categories/博客/hexo/index.html","21a789ea1495431d78c0c7e421e2ac85"],["categories/博客/index.html","f8d93d3f10250e715c4c6d4874073da4"],["categories/宝贝/BB/index.html","d3e98376792324ec1e34c3c05c30e4dc"],["categories/宝贝/MM/index.html","d6c9b6adbb5798dff6b1ae2ee18f77b1"],["categories/宝贝/index.html","49ab395eb91bfa11f6d53dd26d1bb2da"],["categories/思考/index.html","2dab2c2d5ba599281897df1a6f5d3b59"],["categories/思考/职业规划/index.html","d082f293ea65b9a2ae0a2ad75de0443e"],["categories/科学/index.html","2d7103d6864da6e4c00bcbea268c22b3"],["categories/科学/手机/index.html","aaeccc38c559206b9cffff7a7a3ef8e8"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a2821855f623b75bcdd5ae6a68430a83"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","82d8978d9456ca34ab7e658c3856d154"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","d56b9ff39ba484b324ee60b1e23ee0d7"],["link/index.html","fe5b12043bb1469f2041d564a59b9671"],["movies/index.html","0ed2895e3d6a51d92067723c5f7c7f26"],["music/index.html","0c310d8a1dfc774422306f4331bbdd28"],["page/2/index.html","b537bd2bed30e7482afdf416a947d1f7"],["page/3/index.html","639d58e0ad8f162b35eed1820d7e1f74"],["tags/AGV/index.html","1233550eb8e0cf0d35d7cb396c6dc172"],["tags/Github/index.html","f4989c1d8fcaef3c02f15a12911651b5"],["tags/Move/index.html","eaf12b9972277148d61960964482e1ba"],["tags/Plant-Simulation/index.html","d66b23ae448caaf01154a91f91d4c4c7"],["tags/Wordpress/index.html","b7795885dc73351177c7f5a17dba0d8e"],["tags/cad/index.html","44358323cf25bb60719ef5e503f327d7"],["tags/coding/index.html","fcc6a925ca8ab8a9f914cc505a3b21be"],["tags/hexo/index.html","5e48384ce54d44cb058d8eede1641987"],["tags/index.html","7d0f110b5361bc3d528a1be97d6de2fd"],["tags/transferstation/index.html","87fb702c1e37c904d2e0728d99824d30"],["tags/ubuntu/index.html","a2fc8c8633eb9eb4eba6aeec3ac444bd"],["tags/写给宝贝的话/index.html","fe771a54357772f3973c6f2653138b22"],["tags/原创/index.html","1a0f0f3a3de7bfbe4dc45e3480fadb52"],["tags/学习/index.html","b73e65703e3d504dcbc28b4c724ded23"],["tags/宝塔/index.html","a50b50a32c018e767e7e3c4fb7296eab"],["tags/生产模式/index.html","24e84f6682d948d8c4456572ba902399"],["tags/百度客户端/index.html","6edabc4ad7c2fe02bac163faddb2c005"],["tags/科学/index.html","502f29caa7cd85ff6ef46d114205a76b"]];
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







