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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","3b75ebc9966fc90388c9a0b3a305cd85"],["2020/03/12/妈妈写给宝贝的话/index.html","ca4b610df178323c0036d56a1133e9cf"],["2020/03/20/磨人的小天使/index.html","2e05aeee181969acccbd686ba15b6926"],["2020/05/03/hello-world/index.html","2c514d9c5fff880c7cf793d95fce97a8"],["2020/05/04/AGV的用法/index.html","ddea8f125e1efe492a11aaf6952c431f"],["2020/05/04/Github创建文件夹/index.html","bd2beaee7e0cd2714c2f0ffc02213e2f"],["2020/05/04/Move的用法/index.html","787edf4cf90e428eda16ad61918218ab"],["2020/05/04/PlantSimulation常规操作/index.html","6e76bdff63147184f0f1e7d928555929"],["2020/05/04/TransferStation的用法/index.html","d09a8da620b56f35177e08cdc499c702"],["2020/05/04/Wordpress问题解决/index.html","c27c0d125bce8422bccc86018e158b58"],["2020/05/04/ubuntu安装配置hexo/index.html","e98576226f3d2520a5a061e8c59d9dd9"],["2020/05/04/无科学环境连接谷歌账户/index.html","6579e13ddb9745826113d5efffe94d24"],["2020/05/05/Markdown的一些小技巧/index.html","2d215ae0042f64c593039d8b14f53ff8"],["2020/05/05/导入cad作为背景图/index.html","6bb21d73d814f4c77d8f5645184399ee"],["2020/05/05/推动或拉动的生产模式/index.html","c6db40d0d0fa986c1e754b2e217fc194"],["2020/05/07/在摊位下上网课的小女孩/index.html","363ecb81912554534711abc92ef60ff8"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","99c707b012d945c57538a74f2e0665ce"],["2020/05/10/ubuntu安装百度客户端/index.html","e5c7cab7ae1776c11875179ad0b5ec13"],["about/index.html","6b64b7e6ca3b94bb76cf0a870d2d1855"],["archives/2020/01/index.html","99a11c922388a73249235f1fdf7b868a"],["archives/2020/03/index.html","49e6de1276c33090045bef4112488b7b"],["archives/2020/05/index.html","db4e664f8aa2ccb8cf24e77275853fce"],["archives/2020/05/page/2/index.html","719aa668b0d42b6929296efe653d4548"],["archives/2020/index.html","618568b0b9f4ab33d25192463c085a5a"],["archives/2020/page/2/index.html","986f02268c437becdbaa561de8f85a1b"],["archives/index.html","1beb84cfc37e856b55a5fa18e9c15ac6"],["archives/page/2/index.html","90f5ae77632568296539b171a53098f3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","dc41dfdd1dfa23d643d0bae36d4d33a5"],["categories/Code/index.html","3d3a8cd48059f25e0ba16ba895955df0"],["categories/Plant-Simulation/SimTalk/index.html","0a5e62b8e8fdc50259dfff7a1188e05f"],["categories/Plant-Simulation/index.html","ee6a13731f84851a32399f33d9ef2d08"],["categories/Plant-Simulation/实体/index.html","bf9ecdfc4f0a95129349fa3227d5f8e2"],["categories/Plant-Simulation/常规操作/index.html","f4c19fb3845d91727645bd5ca06ea77b"],["categories/Plant-Simulation/模型/index.html","35a8f7a1a8067b70e7d0f187a3e70298"],["categories/Plant-Simulation/背景/index.html","6e7c8a0c57ffccf23f504f04995fc6e0"],["categories/index.html","8c16f9c37691920d65cb5f3e72b8f265"],["categories/ubuntu/index.html","2e3884be5cf0c9a233f47b175c9d8b67"],["categories/ubuntu/下载/index.html","2f58a7ce2a93e625939591dfd50d9d80"],["categories/博客/Wordpress/index.html","983ce343fa337fdae613e66757fe9040"],["categories/博客/hexo/index.html","8e136d4c6ec6a262ea47301b95336a1c"],["categories/博客/index.html","d19d5b1784b638f38da1694cae0ef56c"],["categories/宝贝/BB/index.html","a794d06028a5c0931b592cec3f98000e"],["categories/宝贝/MM/index.html","950253585738e8bd7a5dc96589377287"],["categories/宝贝/index.html","cde06321e97671035c49a75040b94dd0"],["categories/科学/index.html","de4a6fcdeec7a58765252f4ac1c95ff7"],["categories/科学/手机/index.html","80832fb63869e009316ae337747df1bd"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","abcb922758f27bf60813d24a591256bc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","876e6d95c9741d74e9f69aec092874f0"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","41f7f9b8739e7e9490c63ed571babf7e"],["link/index.html","78cd4b626b5b8a103c0c4f3305aab0e3"],["movies/index.html","ef0705e6f8fbd5bba31da582adeab115"],["music/index.html","acb2df91b2439ea7c66ece1625d4df28"],["page/2/index.html","6ee34e5e69ffcb5c75a1687edc9eb364"],["tags/AGV/index.html","c2e0410ca9b06005b12fa464c3e40f5d"],["tags/Github/index.html","6bc13dc7bfcc567189fcba26a4f32964"],["tags/Move/index.html","3cabfd7dc436d1127c1bded1128896a0"],["tags/Plant-Simulation/index.html","9b1a39c76a20dc22edeb0b1b831ebef6"],["tags/Ubuntu/index.html","af2b5f445f35221683c72480f7bc90e5"],["tags/Wordpress/index.html","4b5a0503507bde8d9cc5da2dff460b44"],["tags/cad/index.html","b4016af0654078a00f801c3138f1f400"],["tags/hexo/index.html","e872a6d9010fce9d5b021eaf1a2b226b"],["tags/index.html","fa139f0ec8ea9aa0c9c5ba82ea00f629"],["tags/transferstation/index.html","f6e9e244d575b741b3588c2cad684c9d"],["tags/写给宝贝的话/index.html","694087b5ca2b0631f10f108378b69b38"],["tags/原创/index.html","bce945b1e2b66d48f41b85d2a80e69e7"],["tags/学习/index.html","429bde05d157e1d4ecdfdf3ffcc2baad"],["tags/宝塔/index.html","330ea21757e78b7229d60bf0cb9144a8"],["tags/生产模式/index.html","3f359969d41e497a862190690531cf29"],["tags/百度客户端/index.html","caf7ebcc14e773e2eb48879d2db09451"],["tags/科学/index.html","d1b12210e4e5f1beb1d5c1feaf17259c"]];
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







