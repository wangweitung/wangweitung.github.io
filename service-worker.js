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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","b5509b0cdd6165fd3b9636e403916253"],["2020/03/12/妈妈写给宝贝的话/index.html","495d02faeba9497afdc76cb4ebe47771"],["2020/03/20/磨人的小天使/index.html","ee9cda75176f9bddc1cd06d68b76a6ae"],["2020/05/03/hello-world/index.html","70f26fa925a3ce215760393a03fc7f3c"],["2020/05/04/AGV的用法/index.html","2de6a92aa85b1e96b41617958b68f812"],["2020/05/04/Github创建文件夹/index.html","54abc209125db6a1935c550cadb2d34a"],["2020/05/04/Move的用法/index.html","533ad61e8229aa2721361ce27fabd19b"],["2020/05/04/PlantSimulation常规操作/index.html","7fe5d44681f8416eb916587fd7b5d334"],["2020/05/04/TransferStation的用法/index.html","e323db48b997844841eb0c25732e59fe"],["2020/05/04/Wordpress问题解决/index.html","7c177ee1a974b7cd2c0b26cd78f414bd"],["2020/05/04/ubuntu安装配置hexo/index.html","5191e609173cb67d49de4442807e5c8b"],["2020/05/04/无科学环境连接谷歌账户/index.html","d5cda7fd03e079fbdd8b8a2579742787"],["2020/05/05/Markdown的一些小技巧/index.html","b5807ac6e449e89738a3238eef1132ed"],["2020/05/05/导入cad作为背景图/index.html","0dfa28222a9146f858065540a3f52a42"],["2020/05/05/推动或拉动的生产模式/index.html","14cd86121e7882a01d16a1f1cee841ee"],["2020/05/07/在摊位下上网课的小女孩/index.html","1261c2dc1eae89e44b592441a1cdf637"],["about/index.html","b147518cb7a489b5a7fe462f2d06f719"],["archives/2020/01/index.html","b9be54a64f4d185120eb805f1cba779b"],["archives/2020/03/index.html","b1634c68feb6ef052a405323ed6c3f2f"],["archives/2020/05/index.html","7fdea875c65ad2ee8ddd38b3b49f6d5c"],["archives/2020/05/page/2/index.html","d4d886d9a7803c7473b6015c7b4e61df"],["archives/2020/index.html","7a765ca3be65078f29a712401c584718"],["archives/2020/page/2/index.html","1a3f362cafd6a57ea45c5d43d26d239b"],["archives/index.html","d4051b972a5183b6c81fd6737bd72fc6"],["archives/page/2/index.html","be8edc982543a597a64ff860a47c0ccd"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","8e9e17fc9793132b83daddd7762fde4e"],["categories/Code/index.html","9adbcdd9d1bc44799333c530f013d169"],["categories/Plant-Simulation/SimTalk/index.html","fa4c8e8cd10502b82cd290a5d66f30e0"],["categories/Plant-Simulation/index.html","055e73291c4bda00ff3499dbb72699a0"],["categories/Plant-Simulation/实体/index.html","0386c618f455be71a85f8a7d421214f1"],["categories/Plant-Simulation/常规操作/index.html","6a8068ee715f0d02ac0cfbba8eabb686"],["categories/Plant-Simulation/模型/index.html","c67d25da540d9a84da13d8d75743c1f6"],["categories/Plant-Simulation/背景/index.html","dbc30b3770f27b4ab87b71d81b0f97fe"],["categories/index.html","3488ddb0635982db82cbf90a2e6d9538"],["categories/写给宝贝的话/BB/index.html","42b7733900fcaa05c4e43b0e5a5d5176"],["categories/写给宝贝的话/index.html","2bbbf4fd4c97cc9b20597bda2ebba0ef"],["categories/博客/Hexo/index.html","011a20cd4d9b9fce96ea0608fe972aa1"],["categories/博客/Wordpress/index.html","728860322f379e30bc265ac69cd24f04"],["categories/博客/hexo/index.html","9107647a66fcb155e305cf040fd0214f"],["categories/博客/index.html","fa5fa61afb2d0f238724e2db1990f760"],["categories/宝贝/BB/index.html","e6bf194a4b2ca4025c7150cdc32212d2"],["categories/宝贝/MM/index.html","7ae0a1639c83d4438ae675de067bf296"],["categories/宝贝/index.html","f976f0c42cef30b5cc5b1a3913c7ec9a"],["categories/科学/index.html","9a3e885729bd56d15ea4d3b3c1cdec3b"],["categories/科学/手机/index.html","9cce8792cbf48febc89c6cb722cbffc8"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","22f653423f07ab61b944040972d8f008"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","43e1198720cd5a22c8308533348a3cf3"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","c09ee79a0ba9696f9a216a5a328c4f3f"],["link/index.html","e4896e0ef4df9a30457f8db7dc510555"],["movies/index.html","178f6d603f39bcb96d9689cb19e909b0"],["music/index.html","41418c2d0484b3f420478b079fe9d8b4"],["page/2/index.html","40f8210de6577904c8f5d567ba5f0bec"],["tags/AGV/index.html","114bc4f79c035b1845327a5e3e141a74"],["tags/Github/index.html","9aa77e904e801ecf601e751fa6d0d3f7"],["tags/Move/index.html","07507e92aa0ab6fd847c8a02d77d316d"],["tags/Plant-Simulation/index.html","1eb1f39a83584e818eb3decee8fc7903"],["tags/Wordpress/index.html","30e88188f3db2b86f5aa3c647d3c9696"],["tags/cad/index.html","dcc48d86fcf906692f4d1cfb3a315823"],["tags/hexo/index.html","1bf2b906e246251209d33eb2993038ba"],["tags/index.html","9517ba14184c8aa7acc9b6b35023c25c"],["tags/transferstation/index.html","dc330226ddcba0bb69396d2d7a5ff12d"],["tags/写给宝贝的话/index.html","e1c1c2b651f47b2089130afed788c612"],["tags/学习/index.html","74d643976c0f753b644190347b8267b2"],["tags/生产模式/index.html","e06804ae84e3a4d31a657e1e008d052d"],["tags/科学/index.html","ea673281619b404d704ddafeeaf35cab"]];
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







