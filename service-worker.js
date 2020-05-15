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

var precacheConfig = [["about/index.html","cdc7f9426918aaccaeb3c50fa3bfe51f"],["archives/2019/12/index.html","a4fb556e6c1512cd404b03e2657c39bb"],["archives/2019/index.html","e029e6ee7284f41399d4525dd142e142"],["archives/2020/01/index.html","ec49cc6c9c6a91d6428d890860975f16"],["archives/2020/02/index.html","174a097aadd036a3c61e73d6f40e0a6f"],["archives/2020/03/index.html","89019672d1a1d9959338f58522b7533f"],["archives/2020/05/index.html","a3ca7bf6891da2233945ac15fb6a7a95"],["archives/2020/05/page/2/index.html","55d1b87bc73e450b2225490e30729ceb"],["archives/2020/05/page/3/index.html","109e689d07acd50bd699c9076a16f0e3"],["archives/2020/index.html","b8b0f491234700581b5e8750bb38496c"],["archives/2020/page/2/index.html","f4d18cc0c9f37a175813b96be70686ca"],["archives/2020/page/3/index.html","fc46c1bf8e9682a7b2d11c14212a8c26"],["archives/2020/page/4/index.html","73dffdbd0faab248a769227d395c0140"],["archives/index.html","148d061a1c27d6a4adfda5c2081ef2b3"],["archives/page/2/index.html","cf8487d7024a2cf8e33766168a05eb2d"],["archives/page/3/index.html","c3b568231edb6a26ffe79ed7715306c0"],["archives/page/4/index.html","2bb4cfc38d0af411b937ab02dc51cd5e"],["archives/page/5/index.html","904d08811a85de4fe5fc3da9b80f3fe5"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","91ac79f0847c9e6073da2963f0963d0d"],["categories/Code/index.html","f56abc2040aeb55398544463ab90e38f"],["categories/Plant-Simulation/SimTalk/index.html","c0ebcd07dd1bfeaa6a443192da8e184f"],["categories/Plant-Simulation/index.html","f7454ea9cc4bf6d1827bd5d9d0f68734"],["categories/Plant-Simulation/实体/index.html","7c60292552f47bf630a9a707d11716a9"],["categories/Plant-Simulation/常用代码/index.html","35f31b81327a24f0361578ad4b8f6368"],["categories/Plant-Simulation/常规操作/index.html","cdf01e666f87e29e8c122208ccbb1f5f"],["categories/Plant-Simulation/模型/index.html","508be1c690622bc97499069990042df4"],["categories/Plant-Simulation/背景/index.html","3f5321579d9c8c53471514b262eb390d"],["categories/index.html","e4e831a951bdb89f2ef8b1b5f8ae39f2"],["categories/nas/index.html","eae3208a72f04868f93dc9fccf47c158"],["categories/ubuntu/index.html","d711032f12d161177fedb7cf3de192d4"],["categories/ubuntu/ip/index.html","6ea02fb5ba7c824eaa797eb4a5133fdf"],["categories/ubuntu/下载/index.html","fbfba9a2c39468ef5bc353d29091eb3f"],["categories/ubuntu/命令/index.html","038a329ed6dd451132389cb58bb16d9b"],["categories/ubuntu/配置/index.html","40643a0e25c6f7659545d91c3e0cf247"],["categories/仿真/index.html","2be7ef8beb7fb3476fe38b9ea4a5b627"],["categories/博客/Wordpress/index.html","5f94924abec71e4696c7c8e7af0fa776"],["categories/博客/hexo/index.html","17ed8731f8f7806bb3279a7675af506d"],["categories/博客/index.html","66deb8e1e2347408c399571a372005c1"],["categories/博客/page/2/index.html","e9b5ae5c899fc8ea029dde9f681e92fd"],["categories/博客/typecho/index.html","17f67def0c4b35e92ac22a0a81411638"],["categories/博客/统计/index.html","4c4d9dc162f54456ca61f3549f1b9f15"],["categories/宝贝/BB/index.html","e850dba23f2bddfbc96997e02a85d2ae"],["categories/宝贝/MM/index.html","ae045b77875038d3446180c93ab44d85"],["categories/宝贝/index.html","29081e5565f0853fb8793a4b00566b87"],["categories/思考/index.html","df870d9da3f84e51873efdb46e34dca1"],["categories/思考/职业规划/index.html","8f8c763428c39a0d54d89c004d78227f"],["categories/科学/OpenWRT/index.html","ab3eaf147c8a89dce78f8678ac0b045d"],["categories/科学/index.html","a4eafb92af62075286c817c29a9ff0a8"],["categories/科学/手机/index.html","44d4ca7c8a552479d2bca9cbe9b9d61f"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c940af99b125128b0516fe254dd319da"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","a0007d63fd6c020c03f9a68443fc61ab"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","69c83576e271852dca501e0c44fd43d6"],["movies/index.html","9c81c87aaa278c2b8db09b9acba539ca"],["music/index.html","dcb6596d766cb39a695cc5b09ae74b12"],["page/2/index.html","7e1e3f60e428919ff1aa04276a14795d"],["page/3/index.html","8cc97f527f5b464cd2935ee5a529296b"],["page/4/index.html","40ecc726953ad84c1a4208ec42fea643"],["page/5/index.html","623a24c180c9f7e1e2a53e9f6719c820"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","a66b1f2791087efbc4aff0cb002fa593"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","956010d15286ba2619c1b4410898e88f"],["tags/Github/index.html","cc51a52b6e7d8626a8d740fad0d8a78f"],["tags/Move/index.html","403aa5258a1a7c876058d743eb42c379"],["tags/OpenWRT/index.html","bed299f7b7aca70effd8b711fbbd8fc2"],["tags/Plant-Simulation/index.html","0ed5282cf12150df116e1c4af968bf13"],["tags/Wordpress/index.html","62b762fae0b4941c4a628baab1734a7d"],["tags/cad/index.html","f38ba11dbb6003aee6139aed895478dd"],["tags/coding/index.html","9c036fc7da2ee606372df2227fe397fb"],["tags/h5ai/index.html","6295f72e73ec59ff9d697095a959689f"],["tags/hexo/index.html","02aefcd5e9108a323e955c01db08d0da"],["tags/index.html","578bbf673a58f00bd512eeb033ef92d4"],["tags/nas/index.html","8de1088bf6dfd685130655ebb392a67b"],["tags/tpyecho/index.html","2bde2716ea4cac16286980ccc6bcd60b"],["tags/transferstation/index.html","d61002a2e7a572c51bb4d0bfa0deed4b"],["tags/typecho/index.html","73d6b9bd9d4949f27473b53d8bbb13ed"],["tags/ubuntu/index.html","8c4779af59bbf22d68b0bcedf6723f62"],["tags/仿真/index.html","35922ad2447b36a52bb86b60b5be7d80"],["tags/写给宝贝的话/index.html","826bc0fdf165a0bdfe90c08048a49542"],["tags/原创/index.html","61cd0795ba3fab5fcdee337d2a8d6020"],["tags/学习/index.html","b85d89bfdf62907800f0f05f1ace91c7"],["tags/宝塔/index.html","bf11e330c1c4f3fb724f31087300890b"],["tags/生产模式/index.html","6bcadb1cb3117716bd4a982a79e7ec18"],["tags/百度客户端/index.html","484929a50357e60795be4976ac57418e"],["tags/科学/index.html","2d3ee1472f2ca46ab1ae5c63c339332e"],["tags/统计/index.html","6fe9341e068ac03b9eacec3d05e032d7"],["tags/编译/index.html","9b25ca4f7668fccb12828314c7e2542d"]];
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







