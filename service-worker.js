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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","3f568090b2dc86cb0a5fe62d51377cff"],["2020/03/12/妈妈写给宝贝的话/index.html","d35a5287c73e1e1ae0bec8cddd58d6be"],["2020/03/20/磨人的小天使/index.html","d47663bffa906ffeffc0e642713aadb4"],["2020/05/03/hello-world/index.html","c74f45e325ad9e2a53b786823a4f2a9a"],["2020/05/04/AGV的用法/index.html","5b413ac19799b249daacf3bc72d78a75"],["2020/05/04/Github创建文件夹/index.html","66b6990cdf9d136814856c60c081009c"],["2020/05/04/Move的用法/index.html","c4386bb8159f4472adfb88e25cd0bf1e"],["2020/05/04/PlantSimulation常规操作/index.html","0eb4e62a4b8969d64d857bb41e68d675"],["2020/05/04/TransferStation的用法/index.html","378c4728c82a74ade37f41b99699620a"],["2020/05/04/Wordpress问题解决/index.html","026a5bd835b9ea527f8057553f996682"],["2020/05/04/ubuntu安装配置hexo/index.html","84f12beb217687ee4fb4f55115c355f6"],["2020/05/04/无科学环境连接谷歌账户/index.html","2f563b0ce65c5630df046f25b7bdfb46"],["2020/05/05/Markdown的一些小技巧/index.html","c7e40963a543cb82305884a7aa13b908"],["2020/05/05/导入cad作为背景图/index.html","b8b663c71227b0306bedecd5d6738200"],["2020/05/05/推动或拉动的生产模式/index.html","6b9d1a4804eafd4fbee5e7bc29dc1e35"],["2020/05/07/在摊位下上网课的小女孩/index.html","c631b9a20cfb2ec80685c35ffcb75f27"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","4fd89eb83245a9424bb08eef08b91078"],["2020/05/10/ubuntu server配置方法/index.html","2715af79b7f4884cc59068bd6174e860"],["2020/05/10/ubuntu安装百度客户端/index.html","7fe54df0700f10c376876df77644da51"],["about/index.html","5878d57de2cbafa9e2caba5cb9b47860"],["archives/2020/01/index.html","509c0e161ad9dbbc934b7264bb28820a"],["archives/2020/03/index.html","7d2ed973c8bd09f34ce69136071961c5"],["archives/2020/05/index.html","6247168e341743d78712cbd35569a700"],["archives/2020/05/page/2/index.html","74564811fab1ae623cb3aa5b903bcfaf"],["archives/2020/index.html","4511038423d7ea714b5ba2a9b5212188"],["archives/2020/page/2/index.html","c4f611e16cc22d5a76c6ebd6d76fa3e9"],["archives/index.html","3ee6b488a0d56f1599f85982ddaea18f"],["archives/page/2/index.html","d0cbf59df8573f8a2787c6ecff58e8b2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","416d2d6b1f057622b7f0fbbc8b68ffd4"],["categories/Code/index.html","5dd141e736a99b32316fb1adddd4fa33"],["categories/Plant-Simulation/SimTalk/index.html","4e24bf001b41a4179ebd48633770a978"],["categories/Plant-Simulation/index.html","048139dc2329792a48c004b4b1071381"],["categories/Plant-Simulation/实体/index.html","97f329fa361d031f48357d942d5ec105"],["categories/Plant-Simulation/常规操作/index.html","3165793359068e6bde0525dc31065990"],["categories/Plant-Simulation/模型/index.html","b28e427115e7a4e3d643da6555bae04c"],["categories/Plant-Simulation/背景/index.html","8b50499bb47db9eb2a0b2c0c8bd769c5"],["categories/index.html","118647646a1ccb9d06577f6e43bc8449"],["categories/ubuntu/index.html","371512f1ed23d6cea3674e65c1c9d0e3"],["categories/ubuntu/下载/index.html","ba1d031539fc26b84cc96bf10f82cd37"],["categories/ubuntu/配置/index.html","d303003009f4f399fc8c1fbfa547e53b"],["categories/博客/Wordpress/index.html","82ca5d0bb3f53d88b165014ada19584f"],["categories/博客/hexo/index.html","f683d9daf69788c24b0d29a52b9eec83"],["categories/博客/index.html","f66c11b3c4b58ecd03083fd5b6983aea"],["categories/宝贝/BB/index.html","819d2848e2428011f9bc97bf6bf53669"],["categories/宝贝/MM/index.html","0e12b1c6a7b88c75cc08b838a2b1dd1d"],["categories/宝贝/index.html","c404aafa39360cf2ab4822d783b77e92"],["categories/科学/index.html","2850a8a410fa87b7c37b402f50ccf2e0"],["categories/科学/手机/index.html","d5776b5542e46da369ccf7babcbb700d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d2f8bd10eecd1f894eaae54e008b6b99"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4a23431185998aff85d8e55d6d1537f1"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","a3b269157d5a89589ed465497f83ed6a"],["link/index.html","a960d3d10ced1ac6b91a7556dacdb2c5"],["movies/index.html","1fe78f92fbea29febacdd23bd5ab72b7"],["music/index.html","f1136575cf332b3af26882b01c52bcb3"],["page/2/index.html","90e5142d661fd1b18b9c0d48897bd7ea"],["tags/AGV/index.html","a1db07a5a8e3a83fa3a0441a1854c35d"],["tags/Github/index.html","5d62886db7ec4bce3513046b873ebba5"],["tags/Move/index.html","6e822a37e63e81df2d07433c830bd2f3"],["tags/Plant-Simulation/index.html","19e039568a0d2ca6af576c5a0ead6138"],["tags/Wordpress/index.html","0a0a07a09da061de7a8f127b24b0fda3"],["tags/cad/index.html","31117cc5fd3725ef1081f89433912ad2"],["tags/hexo/index.html","28bb409b3686beaccdcf9f4f6e0a3976"],["tags/index.html","48d3ecce961ec1dd2f42962de9ee2af7"],["tags/transferstation/index.html","48c61f775dd7910a752462e8754608db"],["tags/ubuntu/index.html","76f97684b28cf54940aef7ab1c8b58ba"],["tags/写给宝贝的话/index.html","3073f07818bfb5d18af105a919fd06f9"],["tags/原创/index.html","fd748740ec8c4c8f807d4cc8127575c0"],["tags/学习/index.html","928f2bf3b158ec70504bb23e477fbaa5"],["tags/宝塔/index.html","2c13e19d084d4a6a9131958f0f04b94d"],["tags/生产模式/index.html","edf57b9bb9142cbed3bb525836528b7a"],["tags/百度客户端/index.html","cfa41131fb36eb3d7a41bd15de8ec8a7"],["tags/科学/index.html","1ec23e0feca1a077b4bf287dc0aff2d0"]];
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







