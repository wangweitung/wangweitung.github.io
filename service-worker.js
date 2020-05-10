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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","2e5ec0d6651eb65588335e95687d598c"],["2020/03/12/妈妈写给宝贝的话/index.html","3a5b10a967c2953d84e0c00a6a3e6d3e"],["2020/03/20/磨人的小天使/index.html","c0dadf9b81dee4fcfd96a59418dfedc0"],["2020/05/03/hello-world/index.html","94cebc14e45733d5a36daa36b4aed84c"],["2020/05/04/AGV的用法/index.html","0d5a40359ca031e921c0affc6f5c42ba"],["2020/05/04/Github创建文件夹/index.html","15734ed9ca56a10ed9bd7bf1ee211b15"],["2020/05/04/Move的用法/index.html","9c88f9fe9f0152b141b0aae5801d9520"],["2020/05/04/PlantSimulation常规操作/index.html","49f1442bd0f5bf1afaf9d0fa60d74fb9"],["2020/05/04/TransferStation的用法/index.html","7b7f70e5949446b4bb71fabe6c2c98c0"],["2020/05/04/Wordpress问题解决/index.html","9ced53df51e78f96a696c2024806eb2b"],["2020/05/04/ubuntu安装配置hexo/index.html","6150dffff91afddeb1369d711dfc36e7"],["2020/05/04/无科学环境连接谷歌账户/index.html","2ad1e120094196bd14b11b348570d8b0"],["2020/05/05/Markdown的一些小技巧/index.html","e96eb40681cdf28aadcf710cfd9db209"],["2020/05/05/导入cad作为背景图/index.html","5fed7ac873b3a70de180d370dc317f51"],["2020/05/05/推动或拉动的生产模式/index.html","a9b381ef6a8bc4889a82ffbb62076caa"],["2020/05/07/在摊位下上网课的小女孩/index.html","619a29dedf66867d137b28e7e98320ea"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","831c085e35b2dee4a6a0f31ada5eab52"],["2020/05/10/ubuntu安装百度客户端/index.html","bffffefefa30a24f797c5fd8b2521f8f"],["about/index.html","6b64b7e6ca3b94bb76cf0a870d2d1855"],["archives/2020/01/index.html","944d095792fa48db9c84937bb4c52072"],["archives/2020/03/index.html","2336ef34c6d3c9071f4f9a72746ae92c"],["archives/2020/05/index.html","6e940695bd6cb2078eb025c7594dddc2"],["archives/2020/05/page/2/index.html","8705dae44769be65e26d2cd9fb71fed6"],["archives/2020/index.html","7828aa05a1a247516aaf4a234f53e144"],["archives/2020/page/2/index.html","566a7c4204a58ab36e1fd03c2208aa2a"],["archives/index.html","995164de29aba4cdd312d1ebff498427"],["archives/page/2/index.html","00073ad825242573adbbff06c14036af"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","8a440249cd7d605437fe4c8c0799cf28"],["categories/Code/index.html","2499225ed3584e1785adb5466abff67e"],["categories/Plant-Simulation/SimTalk/index.html","21e52e01d061a9d626341e9ae7761180"],["categories/Plant-Simulation/index.html","4003f1845f5847bea042485fca2667aa"],["categories/Plant-Simulation/实体/index.html","34bac1a3fb001a057a46a5e036901d23"],["categories/Plant-Simulation/常规操作/index.html","f7d307b3e5c1120743b7d64d503093df"],["categories/Plant-Simulation/模型/index.html","94e3a41bfc30a6c722a5e7b494fe760d"],["categories/Plant-Simulation/背景/index.html","18a90b3d40da273ec57fd38d3a5ddb8b"],["categories/index.html","8c16f9c37691920d65cb5f3e72b8f265"],["categories/ubuntu/index.html","676abd96d0a6d8b87e1e72e915c77c39"],["categories/ubuntu/下载/index.html","890c4d7e850ef646fb45acaa25a5439a"],["categories/博客/Wordpress/index.html","3a5de50b4091dd5fa7023cbb6113008c"],["categories/博客/hexo/index.html","4c41458a646387195267e1158eb9dbc6"],["categories/博客/index.html","aebd7fc8f276351c7f1e236fc92892f3"],["categories/宝贝/BB/index.html","0a284bee8004f3a89b5a3f897cd806ce"],["categories/宝贝/MM/index.html","4ead3c3265b7e8b5f75d2ef93fcffa1b"],["categories/宝贝/index.html","cab493f31e14eb7313fb8ef0b4f0f314"],["categories/科学/index.html","40abf2204108769713cb2ead976f7c29"],["categories/科学/手机/index.html","ac9e7548151354e08c34e72f4a6c4b48"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","abcb922758f27bf60813d24a591256bc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d943d686bc9e481a115e8b614f9ca654"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","41f7f9b8739e7e9490c63ed571babf7e"],["link/index.html","78cd4b626b5b8a103c0c4f3305aab0e3"],["movies/index.html","ef0705e6f8fbd5bba31da582adeab115"],["music/index.html","acb2df91b2439ea7c66ece1625d4df28"],["page/2/index.html","46894bc7de5c7b7d04e3ad3602f93a83"],["tags/AGV/index.html","51c4e113db5cfd5057047ffd8a227b05"],["tags/Github/index.html","0c5e284bc228507890f230412d98df6c"],["tags/Move/index.html","fabdbe232ca439ac8fc8683423288bee"],["tags/Plant-Simulation/index.html","be2c64fcad5d063fbc6054eb584e29c1"],["tags/Ubuntu/index.html","e0c2bc35d03ecce213714128be080d1d"],["tags/Wordpress/index.html","d361f7e0492c6ef156e4bd0934c547b2"],["tags/cad/index.html","0fa7432caf004165a3867c6b9a751e47"],["tags/hexo/index.html","2a6e4a80badeb3250027c51f879e9a73"],["tags/index.html","ef4a93a1e4d3a8789065f7e5c2e04667"],["tags/transferstation/index.html","0d6b6a9f2e320f2e17ca9ea3b60a6b4c"],["tags/写给宝贝的话/index.html","d2a048a5b5032558280c78b287ff4177"],["tags/原创/index.html","ef3e8676248c946d2a133b3f0706e67d"],["tags/学习/index.html","8cf122938528733c6ad1606f207126e7"],["tags/宝塔/index.html","f59d5852f64bad7f88cfc39d395b8fba"],["tags/生产模式/index.html","58e5e143a12b9992f5d326d09914b440"],["tags/百度客户端/index.html","4b4c5c7771d6e16fb8ac721fc0fad3b4"],["tags/科学/index.html","6f2a650f1bd12f27a29d262feb83b9d3"]];
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







