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

var precacheConfig = [["about/index.html","dc6284c3aa7cb5a1d1ea5cc19a7f41bf"],["archives/2019/12/index.html","04536e6651c5470010bb1c97da5a5d1c"],["archives/2019/index.html","e018827f9a850ad10dcc1f3975ef330d"],["archives/2020/01/index.html","17796b33bf3b2c26e898d92d698e7755"],["archives/2020/02/index.html","5098f54da577694e0037a33bc726eea1"],["archives/2020/03/index.html","2b8fea9fc8ba4dc71e728f577285cec8"],["archives/2020/05/index.html","df0dcf3e1b8b7f1b97f0b4606d45fe57"],["archives/2020/05/page/2/index.html","dfd31bd3083a2bfe2671017deec5060f"],["archives/2020/05/page/3/index.html","677e2910b0b3f45511a84cc2de8810b8"],["archives/2020/index.html","202cd57bc5bec59c6d38a6b737b5285c"],["archives/2020/page/2/index.html","c047d1b0fef4c3d1c40dc25fee18dbd5"],["archives/2020/page/3/index.html","da03acf304e37f406bd9e8455f31af55"],["archives/2020/page/4/index.html","055ae113e93b6cd974d5668d9c9bce16"],["archives/index.html","f78bf6b118c8fe0d5189b087bfcef2e9"],["archives/page/2/index.html","56a12e9ab6c4fdd0968beaa83e027515"],["archives/page/3/index.html","724fbf54b7ef5a77bc8474e062e5b801"],["archives/page/4/index.html","edc2ff5d73ccdb75972fb44703ae7b11"],["archives/page/5/index.html","125dc2914950e4c3cb3362971082f26f"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","d826f850c94c1096e7fa0c1bdef6f014"],["categories/Code/index.html","8e5536b910d70e99017d5702e442865d"],["categories/Plant-Simulation/SimTalk/index.html","a6fb539f5421bb22ad9f76441924d7f5"],["categories/Plant-Simulation/index.html","345b5b4e546584922eb48259748eb898"],["categories/Plant-Simulation/实体/index.html","3fc0719a13ba8b854bb4d36e94adcd8c"],["categories/Plant-Simulation/常用代码/index.html","34b73b688f26973ac5ef9e2215afd4a2"],["categories/Plant-Simulation/常规操作/index.html","678055cb9070ecb880bdb4edf077ab74"],["categories/Plant-Simulation/模型/index.html","664647663bcc861c67cf74a8a646df23"],["categories/Plant-Simulation/背景/index.html","bc3a37a965cef828c3a46f100bbb9180"],["categories/index.html","40bc0a392742f5d57904a3aa57be237d"],["categories/nas/index.html","3bb2f2f0e9585b0be888cee11e02df48"],["categories/ubuntu/index.html","2d33c10d5a547f858129e412327adbd9"],["categories/ubuntu/ip/index.html","525a78614d8209bf5f84b4395e07663d"],["categories/ubuntu/下载/index.html","213df5cb55e0c7022833799a234f853b"],["categories/ubuntu/命令/index.html","8ac3e390dedac6b37fb793a2d2f5dc5d"],["categories/ubuntu/配置/index.html","b1fca9dfe0129611382baf06c97b71f5"],["categories/仿真/index.html","363c18683091f91a41885eb788330b4d"],["categories/博客/Wordpress/index.html","2ed9b95c22a6bbdd59541916bf4e668b"],["categories/博客/hexo/index.html","f8033efc92d29efd411a7688d5afebe6"],["categories/博客/index.html","a8e5cd24bc74da4fd156f8ace7dbb58b"],["categories/博客/page/2/index.html","a22078a77f937a7777a88d914337c06e"],["categories/博客/typecho/index.html","a543859821c80ac01ae9d65f7b984b98"],["categories/博客/统计/index.html","6088c19623313326b257315a989a7534"],["categories/宝贝/BB/index.html","50b09c3de8ad283756ccd65a5e869a5d"],["categories/宝贝/MM/index.html","ef9cb7195205549a2f840a2fe985b48e"],["categories/宝贝/index.html","42bbebfa46e3a55f5031dda3d56e6ef3"],["categories/思考/index.html","bf8efe319a1700ee1fd0871a2fb0a91b"],["categories/思考/职业规划/index.html","ef9889c5e53196ef488dedc629a294eb"],["categories/科学/OpenWRT/index.html","03941452859645d5e6f1287c624640d0"],["categories/科学/index.html","f0ef4b3e57cb70a4374dd93d1cb630a2"],["categories/科学/手机/index.html","a328f9d7db712a2e79428a2d9116a79f"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","aca8cb5a161198d2c06d40460b9772e6"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","91ba8aefa84f0dc4ce64589786002f58"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","7cc47340bf7e95b55499cbc59412e3d2"],["movies/index.html","2fdcf72db71a7b429ee8ddcd8b8706a8"],["music/index.html","11eef0b406ff8a56e2e85dad9cace682"],["page/2/index.html","dffbb8dfe9e78e8afbf0dfc9a5136737"],["page/3/index.html","7507856743a31f302e06fa35f52e9028"],["page/4/index.html","8258458740cb0f1d79d0c2c3cbfa3ed8"],["page/5/index.html","d8ca4985cd81e97d66fe66be20c3669b"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","eb776ee20c9e3f3d77fbf81d8378d8bb"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","4ba37bb82de0f4a5c73d6578ee69c0ee"],["tags/Github/index.html","d9276e243ab9ce655bc0d4e15164f056"],["tags/Move/index.html","61fda8210a762414de0479d1d932a43e"],["tags/OpenWRT/index.html","46d1437581d8af5d99085beae02f98a8"],["tags/Plant-Simulation/index.html","918e0b36a2e74bb5cd9820b5284695a3"],["tags/Wordpress/index.html","62d0eec8e41188738314e8faebc15faf"],["tags/cad/index.html","a10dee42c54e03c7edc5e30e3626cc7f"],["tags/coding/index.html","6f26904d20535c3d455423ac68e559e3"],["tags/h5ai/index.html","44dd863896f7c9d784d2263bc2ee9e89"],["tags/hexo/index.html","2ac8eb4ff4a1efaa4372c8bf0074a8fb"],["tags/index.html","92dfad03107aae7b4ce90429ba9c49e6"],["tags/nas/index.html","5d3b88bb7dbfe9608661ac136c27b100"],["tags/tpyecho/index.html","835cbbcc9b2c95ddac496c136dd156ee"],["tags/transferstation/index.html","acd229442805eea4ea20a4f4c319035a"],["tags/typecho/index.html","fa3651271c5b6c0460a46b1d60b09ad3"],["tags/ubuntu/index.html","092ea262cf0af4af0ec9e8c30717cfb3"],["tags/仿真/index.html","033e3da9ce92ecfd41887816e76d7b05"],["tags/写给宝贝的话/index.html","93d64840f55847b65d3929308ed74c72"],["tags/原创/index.html","b41c61896254d7d872aa79002e2dde2f"],["tags/学习/index.html","1ea97c1ff5544d580c1b8c647a2515d1"],["tags/宝塔/index.html","8e2b66d9b4360d9affd3fad9897db4df"],["tags/生产模式/index.html","47d5df0b8017f01271750c73fedcb565"],["tags/百度客户端/index.html","19c1aff5cd6b6417a462cc4178e8813a"],["tags/科学/index.html","74847ad0473c3948a67a12909f989c3d"],["tags/统计/index.html","022a99e96b0b62ef142ae65a18244929"],["tags/编译/index.html","e5f3bd2acd8a8734092c341ac43bfc19"]];
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







