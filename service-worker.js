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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","3f568090b2dc86cb0a5fe62d51377cff"],["2020/03/12/妈妈写给宝贝的话/index.html","d35a5287c73e1e1ae0bec8cddd58d6be"],["2020/03/20/磨人的小天使/index.html","d47663bffa906ffeffc0e642713aadb4"],["2020/05/03/hello-world/index.html","c74f45e325ad9e2a53b786823a4f2a9a"],["2020/05/04/AGV的用法/index.html","5b413ac19799b249daacf3bc72d78a75"],["2020/05/04/Github创建文件夹/index.html","66b6990cdf9d136814856c60c081009c"],["2020/05/04/Move的用法/index.html","c4386bb8159f4472adfb88e25cd0bf1e"],["2020/05/04/PlantSimulation常规操作/index.html","0eb4e62a4b8969d64d857bb41e68d675"],["2020/05/04/TransferStation的用法/index.html","378c4728c82a74ade37f41b99699620a"],["2020/05/04/Wordpress问题解决/index.html","026a5bd835b9ea527f8057553f996682"],["2020/05/04/ubuntu安装配置hexo/index.html","84f12beb217687ee4fb4f55115c355f6"],["2020/05/04/无科学环境连接谷歌账户/index.html","2f563b0ce65c5630df046f25b7bdfb46"],["2020/05/05/Markdown的一些小技巧/index.html","c7e40963a543cb82305884a7aa13b908"],["2020/05/05/导入cad作为背景图/index.html","b8b663c71227b0306bedecd5d6738200"],["2020/05/05/推动或拉动的生产模式/index.html","6b9d1a4804eafd4fbee5e7bc29dc1e35"],["2020/05/07/在摊位下上网课的小女孩/index.html","c631b9a20cfb2ec80685c35ffcb75f27"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","660b3c5d832e51aaa85a505b44854eb7"],["2020/05/10/ubuntu server配置方法/index.html","2715af79b7f4884cc59068bd6174e860"],["2020/05/10/ubuntu安装百度客户端/index.html","7fe54df0700f10c376876df77644da51"],["about/index.html","50b433c48f329c6adad20c52fabfd10c"],["archives/2020/01/index.html","42937a51b4eb02ab1ce16d7053fffc30"],["archives/2020/03/index.html","60df8d5590e248dfc97be10e780f33d3"],["archives/2020/05/index.html","609caa299a4e4125a3805b0e1343f30a"],["archives/2020/05/page/2/index.html","589755e4a6a6e37e9f400afdd44ce2a2"],["archives/2020/index.html","42bf3965692d6930d65e867a8b9fd8d7"],["archives/2020/page/2/index.html","05c8f088725b1007ac7aa1c5d60e0b83"],["archives/index.html","b189168a50d97c6b8292cc37c958a102"],["archives/page/2/index.html","1ca81b7886c82028c20638d8d0041f99"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","eef9b6a5d4f06fec6bad7fd8f7de1dd2"],["categories/Code/index.html","b85347dd83fc760dddf34c1acdf7dcdf"],["categories/Plant-Simulation/SimTalk/index.html","ee116ad8619a317f4275bc9706fde8b3"],["categories/Plant-Simulation/index.html","3e7249067ec060f841c63ed34881224b"],["categories/Plant-Simulation/实体/index.html","a2c6d808df3de5af6800dbbb358234ce"],["categories/Plant-Simulation/常规操作/index.html","6e6d2a88b2d2e78e634ceb36ac81d164"],["categories/Plant-Simulation/模型/index.html","012e1a8bdab32963cbae6761d67a0576"],["categories/Plant-Simulation/背景/index.html","d0b2a6517b085a0ee44582f1df2de7e0"],["categories/index.html","1e93c5162df2a06cc24d874c8fbc779e"],["categories/ubuntu/index.html","0102fb0f9e604b469a0a68e0ed78914f"],["categories/ubuntu/下载/index.html","ea9655741d02f99a7b3637741b9207a4"],["categories/ubuntu/配置/index.html","616b08244c050b3aa1b50dac8d9d66ff"],["categories/博客/Wordpress/index.html","df846fdbcfa6e1d9cbcecc58da3ea96f"],["categories/博客/hexo/index.html","dcb302e856a31a171edc37d3afdfb288"],["categories/博客/index.html","e9dd67af7d35221d1ae0b8e9af847b74"],["categories/宝贝/BB/index.html","55ae9c84d7b46115edf8bab2cac34cf1"],["categories/宝贝/MM/index.html","90e167497c0a838681cab117223ece4a"],["categories/宝贝/index.html","8af98d4d3af3a2a06b5afd501339de24"],["categories/科学/index.html","e3b2a0c8b3bf8b59b6c8e2b151f8e135"],["categories/科学/手机/index.html","ce21d593bd6fbfb729bd2ee57e27c19e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7b4963cec416f9c2c60d193038324d94"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","69654feb1726caa2a7b40c15806c8453"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","4d8391993a3ee25c237bbe422c1a2d4c"],["link/index.html","f0c7df0e2527ff6a151083e854c5c2f5"],["movies/index.html","110e8c540113b6cb3855377d5895bb05"],["music/index.html","8b50da124437298c2bdb5e23fa9b2e23"],["page/2/index.html","4a7e2eef838c2bf59b328d99c97a2b64"],["tags/AGV/index.html","339d0dba96bc1422b7620a4762c375ac"],["tags/Github/index.html","b6d49ff69a377a02d9fc69cb78858364"],["tags/Move/index.html","88f19a817153f3566a4059f4ddcb1380"],["tags/Plant-Simulation/index.html","d2239ca66b25f6454e283338165d82ba"],["tags/Wordpress/index.html","606ba917fb17ef0041c352a5e2996dba"],["tags/cad/index.html","315d5a3909a2e9955bfd95ff0b129b26"],["tags/hexo/index.html","e70f52319860d4441f91483c94d5d14e"],["tags/index.html","428163597b4d6dfb387e465e19fad403"],["tags/transferstation/index.html","fae9e0bb8cb0da55b25f158ed47898cc"],["tags/ubuntu/index.html","066a9b51b38eb09630b92c02a8a037c2"],["tags/写给宝贝的话/index.html","462fcf9f1a90a02271baa3fc944ca810"],["tags/原创/index.html","655050d940705aafdc218414a3f06e64"],["tags/学习/index.html","d0fda317d766dac1b3fbbdf2711d1ffd"],["tags/宝塔/index.html","de3beb9f7306e621a613396bfaa5b2cd"],["tags/生产模式/index.html","7f9a35001b74cee9f2b72544595d5cf5"],["tags/百度客户端/index.html","d43b4e4c307c658b75f00c5046681565"],["tags/科学/index.html","b06edc87706bb24c3efa5067f97a3120"]];
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







