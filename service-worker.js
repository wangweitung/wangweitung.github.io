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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","aa9703dca90d261f36d1a0a1860eccba"],["2020/03/12/妈妈写给宝贝的话/index.html","dfe44204207b5ac03115db510d1f9922"],["2020/03/20/磨人的小天使/index.html","7540da720d4154ca7665fa8d60ff4118"],["2020/05/03/hello-world/index.html","6c5aa14a1134ec0edab7c8cbac38ca0a"],["2020/05/04/AGV的用法/index.html","0fd770d42d2aceff178004b8f5f64d16"],["2020/05/04/Github创建文件夹/index.html","6db7b4f4d944e0438f3c8d7c50c1de87"],["2020/05/04/Move的用法/index.html","2901cf0fabdcc4de484161cd08532d86"],["2020/05/04/PlantSimulation常规操作/index.html","f1e47c4a8d737f4fba2519fe4b3bd3a8"],["2020/05/04/TransferStation的用法/index.html","4fdef77ebb8000612faa4433b95ce410"],["2020/05/04/Wordpress问题解决/index.html","5244cf81cb206d1a482234441992972c"],["2020/05/04/ubuntu安装配置hexo/index.html","11861cb5627110bd0334f23b3efbce92"],["2020/05/04/无科学环境连接谷歌账户/index.html","c734f9c95e39729dd40053f070655e7d"],["2020/05/05/Markdown的一些小技巧/index.html","9da91791e3c5d0d052ba6a810c6d664f"],["2020/05/05/导入cad作为背景图/index.html","c483b5bd30251c5bef51327488c4862e"],["2020/05/05/推动或拉动的生产模式/index.html","1efdb8cf23218b3cf6ed3cd051bd3995"],["2020/05/07/在摊位下上网课的小女孩/index.html","628e990047e0989584308a2d8b49a44e"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","1cf5d30b41360d742d89d572bd6dedf4"],["2020/05/10/ubuntu server配置方法/index.html","fd7d56f8fa158d4e1efc18ce89fdfb25"],["2020/05/10/ubuntu安装百度客户端/index.html","c48d516c1f1c4cdb8adfba97ab67cdf6"],["2020/05/12/ubuntu server修改获取ip方式/index.html","3f76aa2190982673369666864c6acef5"],["2020/05/12/ubuntu server基础命令/index.html","994f0a96f2e6fd7f321e6eed32a5ad46"],["about/index.html","2affec0b2791ff4e8b85b927ef2b2f04"],["archives/2020/01/index.html","e7e0eb4bb08533272039bd08608b2a29"],["archives/2020/03/index.html","9030a0d47772aad77b3cb7ce51094f6c"],["archives/2020/05/index.html","c263009790e5dc46261a39034dfe08e4"],["archives/2020/05/page/2/index.html","c8d9b79e5e484951825c3b3042ee276b"],["archives/2020/index.html","7cec2ae0fbd90cc48372afc507456b2d"],["archives/2020/page/2/index.html","8f4e4ff380e34374d6dae7a09b430253"],["archives/2020/page/3/index.html","0ccbdd0b2f3c0f48296f358b94cfd79e"],["archives/index.html","3990163dfee175b7c78f473f6049ea17"],["archives/page/2/index.html","8d50cb6b4891871344c849c4e53b3ae8"],["archives/page/3/index.html","94d1e7ed6b1304022fbc8bad8b0c001b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","bce9d183c8823dac3446892400c2ffd2"],["categories/Code/index.html","5526393997b5b877265b0b08d21e0ce5"],["categories/Plant-Simulation/SimTalk/index.html","c85fc8ad825472c53dfc8a5e4f016b32"],["categories/Plant-Simulation/index.html","f42a215a76f3dcac5b088722ab39c391"],["categories/Plant-Simulation/实体/index.html","8dc60389d6f1a22e1f442bd8d534d0a3"],["categories/Plant-Simulation/常规操作/index.html","ceec8710cfd037b419bb7b7cc4dbca8f"],["categories/Plant-Simulation/模型/index.html","90373654aa7ca4126092c75c90db866c"],["categories/Plant-Simulation/背景/index.html","4f65ff331a4c62b2be208e6816df388b"],["categories/index.html","e934c32903a8998d59939ade4594602f"],["categories/ubuntu/index.html","2696afdf6540b14b6fc7ba5810c8dc4b"],["categories/ubuntu/ip/index.html","fce536c6d285a1b05e182671daccbfe1"],["categories/ubuntu/下载/index.html","94c524c6294bbe2205f981a8e96357f4"],["categories/ubuntu/命令/index.html","89d285a7cfae246e3b980299d0cec65a"],["categories/ubuntu/配置/index.html","a59c5054336d8b88aa6e3ac87a9e4fb8"],["categories/博客/Wordpress/index.html","bfd608d3af9752c47332dcf7bd553b29"],["categories/博客/hexo/index.html","32d7f3da90c2aae2743f509f38d36ce1"],["categories/博客/index.html","b502715fe5f66d51bb4f02e8e341f493"],["categories/宝贝/BB/index.html","8c8c0d6092c73ce3b520c47b18c2958c"],["categories/宝贝/MM/index.html","d1f5f9850231da9c0f1c764198988446"],["categories/宝贝/index.html","9555ce6cbf25c02a247f0cb01da4785d"],["categories/科学/index.html","ffc458a3040369e6318059b1b830d9b3"],["categories/科学/手机/index.html","432771428a9fe669b0f5be5839331e99"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","0c00ff10eee5fd490e3058f5012d2c7a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","393da30b9442af88f5ce8143dd3cc11e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","71eb951e67fb1fa81d1e0bc17924e779"],["link/index.html","feb72a853f492e5c41b43dbf9047b22f"],["movies/index.html","1c218ec1afcbd639cd60f26cbfc212a2"],["music/index.html","e231efcae4b3582f11325a28cadefa58"],["page/2/index.html","e0731f079773eda148008e23c014f3f5"],["page/3/index.html","9ac4ca02f31c192fa4328f086fba8343"],["tags/AGV/index.html","0deef407b9e1ebd7e1e0d2bfb035d3b6"],["tags/Github/index.html","0fbac437879b56334e9935b0816dd8c1"],["tags/Move/index.html","64ca2f154f27696ecc12dd0cf03d14bf"],["tags/Plant-Simulation/index.html","264c08714bc5c4b358bf88b1ecf2ce04"],["tags/Wordpress/index.html","2ef4650ab60dbce5035af217050f5815"],["tags/cad/index.html","af29ca38c07671e428bb31db5aeb0b31"],["tags/hexo/index.html","454fbdee9eda6d9c1d13aa7d8e5cec0d"],["tags/index.html","ca9165b8e5887e39bb1bc64ca40380a8"],["tags/transferstation/index.html","ca0503aa2458f0a58305d4266f878a66"],["tags/ubuntu/index.html","acc6168bbe99344c0c38d397dad4b472"],["tags/写给宝贝的话/index.html","67ccf041886d94b477ea0d87aeccc18d"],["tags/原创/index.html","e4d037cbd695fba4a855f1d905b97d65"],["tags/学习/index.html","6ef1eb8bdc74e3d54bb001375d9948a2"],["tags/宝塔/index.html","d226e27874edb9a1bff96f7ac4b338b3"],["tags/生产模式/index.html","c057e98a9340f048c6dae1b3eeb3b088"],["tags/百度客户端/index.html","9fcdad7f5c03b38bcdaf5bd7a1ced5b5"],["tags/科学/index.html","a3dbe9e9a88f2f9fc9bc5dd5e1f3e1a0"]];
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







