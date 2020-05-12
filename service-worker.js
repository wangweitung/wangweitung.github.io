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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","f936a33bd5b601782145a0f5f8516a7b"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","ef08f4e37b61c838bd53ba7fccf4f211"],["2020/01/18/Wordpress自定义页脚/index.html","28de133f01ceac70089a2f365ae52eaf"],["2020/01/19/关于coding/index.html","90f0aa1e23a2e84d02ae4bb10cb69027"],["2020/01/23/2020-01-23-今日武汉封城/index.html","0ffcb4b6eadadf2cb4f8cfe5a53c4690"],["2020/03/12/妈妈写给宝贝的话/index.html","febc4ec4b1e61db0f234c3cd425ccb02"],["2020/03/20/磨人的小天使/index.html","5a8448d34bd98396b2df5b6a43346b84"],["2020/05/03/hello-world/index.html","59260cceb85e10266f05735b5ac72646"],["2020/05/04/AGV的用法/index.html","5cf08cc09df3fbe566e333fd57f772b8"],["2020/05/04/Github创建文件夹/index.html","14e0cfb97c0ca726ddb5fa9f4b051b8f"],["2020/05/04/Move的用法/index.html","1ff363d930e5033cfdcf60154a0fd15f"],["2020/05/04/PlantSimulation常规操作/index.html","b3e49d5fa1fe53e98f39a9c80093d6ca"],["2020/05/04/TransferStation的用法/index.html","bd1b93eaa192d413f2f78709b39d5b32"],["2020/05/04/Wordpress问题解决/index.html","aaf6a3364f77fe0fb8ee58d7c33d37dc"],["2020/05/04/ubuntu安装配置hexo/index.html","7d1eb23beae15e61833dea30dc5f635c"],["2020/05/04/无科学环境连接谷歌账户/index.html","9470d945284dd52004af25446dd04c6c"],["2020/05/05/Markdown的一些小技巧/index.html","a027bb48bb67564851d0467a3cd1fe5a"],["2020/05/05/导入cad作为背景图/index.html","67a042e5703edeec4060b7633ef2292d"],["2020/05/05/推动或拉动的生产模式/index.html","f26ecd6a529a31686fc3818da02a0c6e"],["2020/05/07/在摊位下上网课的小女孩/index.html","5743edb8bcb9aa0b7ef02a2885c8aca5"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","70162d87c4922dd377777c31e86f2543"],["2020/05/10/ubuntu server配置方法/index.html","fe8fb49b417ac4f456841c4c086e228b"],["2020/05/10/ubuntu安装百度客户端/index.html","5036a303f89368b3e759339e5a6baaaf"],["2020/05/12/ubuntu server修改获取ip方式/index.html","f2bb881c3df303946b1cadfac53496ee"],["2020/05/12/ubuntu server基础命令/index.html","f26d2c683a2a1ed3038075b21c6abd21"],["about/index.html","4733a112f95258aeb6e7ce82c066b78c"],["archives/2020/01/index.html","5db466e8457cac6d32fbfebea47164bf"],["archives/2020/03/index.html","dd47115de85f193548701794dd1edb18"],["archives/2020/05/index.html","7510b6ef1a5cecb200f4a02f4ce27659"],["archives/2020/05/page/2/index.html","56e2128fec2ab135fdbdd207df9f7000"],["archives/2020/index.html","ad5b4f671e3be85397f6eccc35744843"],["archives/2020/page/2/index.html","47bb7cc6a9ad5969c367cfab9c4204e7"],["archives/2020/page/3/index.html","7ff2c90bccd58cc177b4c19e3f43d9de"],["archives/index.html","b22095638f4da7fa1c1e46efd54fd028"],["archives/page/2/index.html","f77bb5de6f9c97f5b4b78ace738bb180"],["archives/page/3/index.html","ca6862f2a1a0bf24110af4565698c194"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","797f02e25e46c8e23325000e78dedf43"],["categories/Code/index.html","c4374c4ed757968ebf2bae166b69f3dc"],["categories/Plant-Simulation/SimTalk/index.html","6bc80d5b92d97ea1b0b4838fc9caec3f"],["categories/Plant-Simulation/index.html","3676f2535317d2d70eb39bedc86d8e22"],["categories/Plant-Simulation/实体/index.html","00ed6d86e6306bf0c3c72c0f541c1818"],["categories/Plant-Simulation/常规操作/index.html","c8ad17c835966f15466e17c31cc3ad68"],["categories/Plant-Simulation/模型/index.html","8fc034c3f959e2823e1f81dbc550186e"],["categories/Plant-Simulation/背景/index.html","54a9da5e81432f835ae88aba1e2ddcdf"],["categories/coding/index.html","b266b775b9d999bd620cc7da87d89f64"],["categories/index.html","212056b809169f27d658cf0530675edf"],["categories/ubuntu/index.html","baf7fda4a2298e82bf78add1fd9934e7"],["categories/ubuntu/ip/index.html","f4af90b78a89440f58f5e53fa15f6504"],["categories/ubuntu/下载/index.html","6e5ad91b026eee6ad6265a516f65185e"],["categories/ubuntu/命令/index.html","5fa91ef36b9514bd25d2150fc47a5ec2"],["categories/ubuntu/配置/index.html","9a66b6cd4f9577637a26303ada20f975"],["categories/博客/Wordpress/index.html","fc1ee86d2b5a24d3d2ba29bbd1af498f"],["categories/博客/hexo/index.html","b30ffe0221d0032d6c8c593672615de0"],["categories/博客/index.html","a7362ebd332bd45dff8a80b13c92af4d"],["categories/宝贝/BB/index.html","4b0f77cddbe7bc2ad10138cbe9269bfe"],["categories/宝贝/MM/index.html","fa65601f9e81d695150dca5c82c59da3"],["categories/宝贝/index.html","98008a46de05bbffe280dedc9d61ec21"],["categories/思考/index.html","2f1b00812f95a1e2112c77a8533c2a35"],["categories/思考/职业规划/index.html","b183b48103b7a53ffa0c7f0045a000fb"],["categories/科学/index.html","0466f8396a788c58b8e4bc542d82d7f6"],["categories/科学/手机/index.html","1c03c9d4fbe74e6dc301450dc157ab11"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a2821855f623b75bcdd5ae6a68430a83"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e5355dd9b8b1f74e400f59f3e29735c7"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","d56b9ff39ba484b324ee60b1e23ee0d7"],["link/index.html","fe5b12043bb1469f2041d564a59b9671"],["movies/index.html","0ed2895e3d6a51d92067723c5f7c7f26"],["music/index.html","0c310d8a1dfc774422306f4331bbdd28"],["page/2/index.html","96e3f3b47ca1451b7c17f990b8cfb56f"],["page/3/index.html","deee2fdfbd3d895cc22f4a996db1a89a"],["tags/AGV/index.html","792a0070d3c97c55f6017a96dfade061"],["tags/Github/index.html","720ec4f2c5d668804e8506fe37efa892"],["tags/Move/index.html","db30f5d883565e639c809d70540df043"],["tags/Plant-Simulation/index.html","04dae30a2714f6dfd3c9372544917b8f"],["tags/Wordpress/index.html","c095140c1e4d690af6e4754391e0fdff"],["tags/cad/index.html","f8a4d5aa4c7c77f16cb4ebdf75528681"],["tags/coding/index.html","2224517e4bbce8359ad3121628a4101c"],["tags/hexo/index.html","e9dbd623fc84015790ce4dc6550757a8"],["tags/index.html","772c83d04f061d037daae06a4c15b492"],["tags/transferstation/index.html","f0aeb73478bd00be3aadbb9a73bb7dab"],["tags/ubuntu/index.html","57a3ce8c21b5ab3f28f18a74bc620f47"],["tags/写给宝贝的话/index.html","7d1252ec7587e3d848c06f25f5aa3e22"],["tags/原创/index.html","33123601541b83aef3f252de8bea1a00"],["tags/学习/index.html","50d16328f67f6f4f9895d091755b07e0"],["tags/宝塔/index.html","12d4ca0a997c529432b9bec5cf02743f"],["tags/生产模式/index.html","73419677d9d3fff3a42ad5faa9931873"],["tags/百度客户端/index.html","ef3d69ee2b43becb1bba118151023b95"],["tags/科学/index.html","9b37fd9f87c018cff287526bcc650f44"]];
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







