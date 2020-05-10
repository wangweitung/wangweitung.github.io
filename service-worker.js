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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","5a63111c628836e7a0da63da66925d62"],["2020/03/12/妈妈写给宝贝的话/index.html","c1c66d72850039b3289fbf890e33cfd6"],["2020/03/20/磨人的小天使/index.html","28411db4544e67510cb0ec2de055fc24"],["2020/05/03/hello-world/index.html","21c5a866824d335d3a965e4df327bf0b"],["2020/05/04/AGV的用法/index.html","2d6358eb681e14aeada1bd34f016d361"],["2020/05/04/Github创建文件夹/index.html","ef94c57327f0cf8c5a87a5007533c299"],["2020/05/04/Move的用法/index.html","007bf490f9081ada9fb6431be509638d"],["2020/05/04/PlantSimulation常规操作/index.html","cbed2c3c96fc5295bb263b228200a870"],["2020/05/04/TransferStation的用法/index.html","f60ab753809a41f66d1b1a802038b615"],["2020/05/04/Wordpress问题解决/index.html","5ae53ffac72421f8bd71851faac9e9ac"],["2020/05/04/ubuntu安装配置hexo/index.html","7e3dd166caf490f4e8a8f537e388631c"],["2020/05/04/无科学环境连接谷歌账户/index.html","907f41a1f7f924d30af28c579ddea4a1"],["2020/05/05/Markdown的一些小技巧/index.html","8fce1616e2108ce4c9f9c8c422321f92"],["2020/05/05/导入cad作为背景图/index.html","16ad1bd9eab0690cd1860601d8ee1c05"],["2020/05/05/推动或拉动的生产模式/index.html","9161438a752371666b1b853438eb3261"],["2020/05/07/在摊位下上网课的小女孩/index.html","13275c852e2f6d4d9c185577bd764e19"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","d30d4552824f0d16467d9e8558c2e935"],["2020/05/10/ubuntu server配置方法/index.html","dd97264f6b7ce9436474728824771f53"],["2020/05/10/ubuntu安装百度客户端/index.html","84e15b6cf87dcf42e572d0fd2da2c398"],["about/index.html","d19fd21676ba83e0717ab91deaec674a"],["archives/2020/01/index.html","87eaee6540fb9258f1dc17f0c1379c03"],["archives/2020/03/index.html","4fcddb103e8eb83ebc889ea52711801e"],["archives/2020/05/index.html","2156bb445480379a3a35248bfd7ed61c"],["archives/2020/05/page/2/index.html","9ae9a3d841d17be9cb1a83d45594d58a"],["archives/2020/index.html","ae1b50599c9356371b9b8892426b4487"],["archives/2020/page/2/index.html","6371b659c7a63af648acfdcc47aa38e9"],["archives/index.html","b6aec605a13c61cbf5d444ff763da3bc"],["archives/page/2/index.html","02654b5a24dbcba65f3ae118ca1dc8e3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","70251e02065826af949896f58ebc364b"],["categories/Code/index.html","c85f948739e58aef9d81d289f4c7451d"],["categories/Plant-Simulation/SimTalk/index.html","1d874c8ce0daa0c0d83fc6e65c49ceac"],["categories/Plant-Simulation/index.html","aea18f8a49b0f1df52a167e98ae8c094"],["categories/Plant-Simulation/实体/index.html","b49704985f54d7a7e22862b6d9be2d2a"],["categories/Plant-Simulation/常规操作/index.html","d221c615e59e0b3e4f34a486982e112a"],["categories/Plant-Simulation/模型/index.html","c59a4402e60246d4bc7e7e24589191fb"],["categories/Plant-Simulation/背景/index.html","b9a49988fd31d6233d55d432decb094a"],["categories/index.html","cec8bae31d971b8070d3994bc4a0e194"],["categories/ubuntu/index.html","e696404c7790164f7d58014bbdecfa1e"],["categories/ubuntu/下载/index.html","4b898bc3419df631db0e9b38795f2eb7"],["categories/ubuntu/配置/index.html","53fdb159502108d10588c749ad606eaa"],["categories/博客/Wordpress/index.html","e8dd1ee3e56deea83d72bd623cf9a267"],["categories/博客/hexo/index.html","4c331bf1111199f9ca13f2b6b12c06de"],["categories/博客/index.html","a4dfdc2f9d94883e99c29d9c302bc50c"],["categories/宝贝/BB/index.html","4ed4c97a387496de01f42ceeb7a767af"],["categories/宝贝/MM/index.html","dd435304f698b612bb1cf290a434baa0"],["categories/宝贝/index.html","1ba67152a7a97316e919d97933779b39"],["categories/科学/index.html","ab50800517cf7ba9de9b4ee80aba9a7c"],["categories/科学/手机/index.html","bf531dce9dc25a2041da9e620bdc585a"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","95873ec2d6ef2e3ed4646eaaefd77de3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d94c17c40af426a44cd95634cca6062d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","1202cc42d6395665006f9546721c0bee"],["link/index.html","1c2e39159810127a9680b730d5eb4e42"],["movies/index.html","1f53199682fc512bbf0b72412d3fa219"],["music/index.html","b812bf1f1795a0ae4ef48846197fe4ba"],["page/2/index.html","b36b73728b8d44e94cbcd46f7f67ba32"],["tags/AGV/index.html","6cec63bd9a3322e4c9a997a3eca8e85b"],["tags/Github/index.html","8f9a3a5efda77cc13536c56853817464"],["tags/Move/index.html","2a5da0250b27371c33b3cec174b898ef"],["tags/Plant-Simulation/index.html","e9cb9325108239c9c902d7609b86564d"],["tags/Ubuntu/index.html","aa67fe12810e2d6810c8e5f0e9523598"],["tags/Wordpress/index.html","1794e579895b465a8131511b60526732"],["tags/cad/index.html","1545469a700eaabc54357ed122538a71"],["tags/hexo/index.html","99e2ce87f81accdf5bed120ab22cac1a"],["tags/index.html","304700ed9dcc87bf9f5fd13f823981af"],["tags/transferstation/index.html","ec1afcc7b44614685a12d805662e757c"],["tags/ubuntu/index.html","2c2a72de88220afd8d4f97d6a351b04c"],["tags/写给宝贝的话/index.html","16c5268792ccd22b8753b865b8cd2dab"],["tags/原创/index.html","6a60c734c2acbe1e1c159c44a039f38f"],["tags/学习/index.html","eef08992c81ba98c2e47a6fef61dcb80"],["tags/宝塔/index.html","69b2ea16c93ad1485878b1fd4549f556"],["tags/生产模式/index.html","da55761eca5c206362d3789ce787b737"],["tags/百度客户端/index.html","34dfb35aa872cf8460dc76238050f327"],["tags/科学/index.html","66cc4c30fe40dde04972a79ccf0c6f75"]];
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







