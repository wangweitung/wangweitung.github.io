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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","2e5ec0d6651eb65588335e95687d598c"],["2020/03/12/妈妈写给宝贝的话/index.html","3a5b10a967c2953d84e0c00a6a3e6d3e"],["2020/03/20/磨人的小天使/index.html","c0dadf9b81dee4fcfd96a59418dfedc0"],["2020/05/03/hello-world/index.html","94cebc14e45733d5a36daa36b4aed84c"],["2020/05/04/AGV的用法/index.html","0d5a40359ca031e921c0affc6f5c42ba"],["2020/05/04/Github创建文件夹/index.html","15734ed9ca56a10ed9bd7bf1ee211b15"],["2020/05/04/Move的用法/index.html","9c88f9fe9f0152b141b0aae5801d9520"],["2020/05/04/PlantSimulation常规操作/index.html","49f1442bd0f5bf1afaf9d0fa60d74fb9"],["2020/05/04/TransferStation的用法/index.html","7b7f70e5949446b4bb71fabe6c2c98c0"],["2020/05/04/Wordpress问题解决/index.html","9ced53df51e78f96a696c2024806eb2b"],["2020/05/04/ubuntu安装配置hexo/index.html","6150dffff91afddeb1369d711dfc36e7"],["2020/05/04/无科学环境连接谷歌账户/index.html","2ad1e120094196bd14b11b348570d8b0"],["2020/05/05/Markdown的一些小技巧/index.html","e96eb40681cdf28aadcf710cfd9db209"],["2020/05/05/导入cad作为背景图/index.html","5fed7ac873b3a70de180d370dc317f51"],["2020/05/05/推动或拉动的生产模式/index.html","a9b381ef6a8bc4889a82ffbb62076caa"],["2020/05/07/在摊位下上网课的小女孩/index.html","619a29dedf66867d137b28e7e98320ea"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","831c085e35b2dee4a6a0f31ada5eab52"],["2020/05/10/ubuntu安装百度客户端/index.html","bffffefefa30a24f797c5fd8b2521f8f"],["about/index.html","6b64b7e6ca3b94bb76cf0a870d2d1855"],["archives/2020/01/index.html","e0b622fe4835b5ba20b74dbf41e708db"],["archives/2020/03/index.html","3931b19cf539a7251f2d3d0639964601"],["archives/2020/05/index.html","4b9ce99185de574f4a6babea7c27fcb8"],["archives/2020/05/page/2/index.html","67bc834c68178a59db4ede332181fa2f"],["archives/2020/index.html","52554d6d7ea0be0352efefc097e8fac6"],["archives/2020/page/2/index.html","02a9619961315946ef3d0251c17e4811"],["archives/index.html","5db6313cc25c78a9d9e8f455ffb4f218"],["archives/page/2/index.html","640b7bd6e35ea6b44c55df802956de23"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","b983f6b88636abde70a9aeceab70b7ed"],["categories/Code/index.html","f04bd93b10980ebd92af56f586e67bfc"],["categories/Plant-Simulation/SimTalk/index.html","06f25f07f2d24df0e34e35e6c4e1acb9"],["categories/Plant-Simulation/index.html","13103b3f2ede4dab887c6d0d163a7a8b"],["categories/Plant-Simulation/实体/index.html","bd41030ca9c2985fc6dfe608ff3888ed"],["categories/Plant-Simulation/常规操作/index.html","391703c6ecb8aa44931f169b2f45c611"],["categories/Plant-Simulation/模型/index.html","954b45ebe04e60f9916c556aece68802"],["categories/Plant-Simulation/背景/index.html","4f5bbb1d59b2f71bdf5c7c3b67566057"],["categories/index.html","8c16f9c37691920d65cb5f3e72b8f265"],["categories/ubuntu/index.html","54920f5e0dc733958e49c2606f877c38"],["categories/ubuntu/下载/index.html","90f69ebd1ec61f4b5abbea98eb52795d"],["categories/博客/Wordpress/index.html","c42ffea6d24c6dafc54cefecc345c8ed"],["categories/博客/hexo/index.html","e7175608177d8df184356879642bbf95"],["categories/博客/index.html","8b5bd08dee30f02ee65724d5428cab72"],["categories/宝贝/BB/index.html","0f179f5e7b562f612c932154732393f5"],["categories/宝贝/MM/index.html","ed7db498a3c0fd716b9db27d1107924b"],["categories/宝贝/index.html","8f41595781f449cadd9653d91963e489"],["categories/科学/index.html","a607392abcd7a05b82afea770b469088"],["categories/科学/手机/index.html","dd067c3697fd4b34ee2a9b718905cd8e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","abcb922758f27bf60813d24a591256bc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","5d20d33bccb3fbb52e11261a4cd20241"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","41f7f9b8739e7e9490c63ed571babf7e"],["link/index.html","78cd4b626b5b8a103c0c4f3305aab0e3"],["movies/index.html","ef0705e6f8fbd5bba31da582adeab115"],["music/index.html","acb2df91b2439ea7c66ece1625d4df28"],["page/2/index.html","c235f9ac2cd1f183e5afba50314a3e41"],["tags/AGV/index.html","eaa80168005481540732cf82ffebeb70"],["tags/Github/index.html","809d0ec26e0268ab29cf08e2a1cbf2f2"],["tags/Move/index.html","fc09ae2d63d917b8f4dd63795ef99d3e"],["tags/Plant-Simulation/index.html","ed3b3bf7320e709a382ff981465d404f"],["tags/Ubuntu/index.html","835850a629536381e97332d49b36605d"],["tags/Wordpress/index.html","e1ddf6550fa0c3d2104ca435628234a3"],["tags/cad/index.html","46de3a9546a0c96cd4ff02808a03fe6f"],["tags/hexo/index.html","e0ff0e463464843ca01f494755ac1331"],["tags/index.html","73a03284238fad4a65ef70b68273ea84"],["tags/transferstation/index.html","a8636811072e3bb8a48fae87bf2ffe40"],["tags/写给宝贝的话/index.html","2d36c8c2d59cd8daaa2930644b863270"],["tags/原创/index.html","4ecba56d5bc9bd068c2484e6349bb47b"],["tags/学习/index.html","17d5d6ccf9929fc958f51d8f1af7397c"],["tags/宝塔/index.html","32f330fbb50493041f793f8326880c34"],["tags/生产模式/index.html","f8b8ed3045b581ec6fe809f44163fd4c"],["tags/百度客户端/index.html","da0145f0cf0092061dbb249a5eec6e80"],["tags/科学/index.html","2af67ba3b06f067740d0fac2b7d15b53"]];
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







