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

var precacheConfig = [["about/index.html","fd79dad7e548dfe841859cbc272b0c40"],["archives/2020/01/index.html","608bd4ea79b0850766a4fe3f0a25174c"],["archives/2020/03/index.html","2a2cdf99e326fccc88b9206e70d6f543"],["archives/2020/05/index.html","00f396d36f1b4f4e95b0e4f4280cbd7c"],["archives/2020/05/page/2/index.html","a6ab053cfc08dedfc9824e76d2ff81ab"],["archives/2020/index.html","877b79969978642540103806ef5a962a"],["archives/2020/page/2/index.html","00320f9da8727a92f71a937953c3c099"],["archives/2020/page/3/index.html","8a5657d70183f98906685ccf54f22620"],["archives/index.html","4d339b6136a230698fcbd2f554cf8c83"],["archives/page/2/index.html","0c04459b7e4d7299a098f39c648b7531"],["archives/page/3/index.html","e7cbcb8fc2d3507cc80022128dfd97ae"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","ddb677a8a6574e3e158de86c3591a61a"],["categories/Code/index.html","3bfa8bab7599ab6ac6238201e63f7454"],["categories/Plant-Simulation/SimTalk/index.html","96a81dd68ed452a3cf908d2e2975bab8"],["categories/Plant-Simulation/index.html","7d714f54dfba4e68f2381c56323d12c6"],["categories/Plant-Simulation/实体/index.html","48573f44c1945555525c4c4e8aaa04f0"],["categories/Plant-Simulation/常规操作/index.html","635b6d9af11dfb9353211a5e14aad569"],["categories/Plant-Simulation/模型/index.html","446ae71d09cda89a7a766674b6fb7ca7"],["categories/Plant-Simulation/背景/index.html","45df5c5bc4c7fd49bd9f3c98c5c90a2e"],["categories/coding/index.html","945490cb0c6c245cf9b923d835d26b2d"],["categories/index.html","aeae73ee75ac301deb423a98ea9cc005"],["categories/ubuntu/index.html","178eba55539eaa4e7eced5b141d49ee5"],["categories/ubuntu/ip/index.html","89f6de57dd6741aeaa98d3687cc837a4"],["categories/ubuntu/下载/index.html","2c500867fc7956a9a90a463603a6598a"],["categories/ubuntu/命令/index.html","9f338aaa48fc84aa9644d7d691cd3e99"],["categories/ubuntu/配置/index.html","477354e9e40cc24344115bc94453ad24"],["categories/博客/Wordpress/index.html","f26cb06540fe99680c30555477774ffb"],["categories/博客/hexo/index.html","976b7f7e6831c8b1e759a6ee6ed3aaac"],["categories/博客/index.html","0a00f5c892c912d2c350c13365814972"],["categories/博客/统计/index.html","cb4ef8e44a410d834a014e08ef2c056f"],["categories/宝贝/BB/index.html","ad8adb50f86fdbf4dbdf9520f64970b0"],["categories/宝贝/MM/index.html","6b23672a994aaaaa9cd2f6582386a3eb"],["categories/宝贝/index.html","2d2fbc99f647c8a0959c24dceba04156"],["categories/思考/index.html","e71931209edc934116a895a5a87e7c02"],["categories/思考/职业规划/index.html","e643cf7ce70f1923d63d04c525dcf99d"],["categories/科学/index.html","bc33acc583b12084e93f6b328b497f9b"],["categories/科学/手机/index.html","9948683a7636baa88ea8e8c40ca2f83e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1a119d3be9714ab5ddaef54781f6208a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4223770403db549d79d9637704c87b8b"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","8637b9398c78c7dd95d22457a13ba0e2"],["movies/index.html","2b0e38729274daddef897215d2f93e1f"],["music/index.html","b167a7f7309fec00946f1eefd41744e1"],["page/2/index.html","3fa43281b6e30daf8d6fbbef01b4924b"],["page/3/index.html","2e2f21c6f655a000219ed432502a6483"],["posts/20200115A1.html","92a84fcfc3b7965df653ba1c1b5d93e6"],["posts/20200116A1.html","f2f81cd201062fd1712b56c2755c6e6e"],["posts/20200118A1.html","ee3b7b021a95548842edb8ac7482d419"],["posts/20200119A1.html","8917e3a5c578152f958f92f219fffa1e"],["posts/20200123A1.html","ab40d8e658609f4525a7c40dbde47bac"],["posts/20200312A1.html","eb66af8614656c551079da9eb508b467"],["posts/20200320A1.html","c579ecd3841ca83c187edb118ba58a42"],["posts/20200503A1.html","e5412d62f19c617c8cf71ab3ca0c3e3c"],["posts/20200504A1.html","7b033a810820883791fb714188624144"],["posts/20200504A2.html","cae6c3109b64e7880f18b721f1b5eb71"],["posts/20200504A3.html","97af9f53b1836e91f7af295c52c58507"],["posts/20200504A4.html","1c1157c1ff6c3ae1146f3885b1294725"],["posts/20200504A5.html","ae6453477e2954d8b361efe9278db357"],["posts/20200504A6.html","df3dbda0ab9b8e42b1c9053e4d9ef535"],["posts/20200504A7.html","e7d9277b7c6d0a61c5c3e8dddbb3503b"],["posts/20200504A8.html","c90f6f267735d4f7dabb26c8f9174a89"],["posts/20200505A1.html","0bd97673a56a24f73c2f5701cfa1c692"],["posts/20200505A2.html","3385f5dbc1cedb2f0f95bd91aa542490"],["posts/20200505A3.html","68b9f54ab4a12d7b3445517fa2b7c352"],["posts/20200507A1.html","ca987e4c9cc6d70e4f72cb5c0f0492f1"],["posts/20200509A1.html","0084c0724ff68246e334e7af30b894e6"],["posts/20200510A1.html","c6b2e8f796fa8a22a4d93e9ddf24e02a"],["posts/20200510A2.html","00273a2c7d35a46d6d0b4a7170c9e221"],["posts/20200512A1.html","14c7c48ad20c81bd778caae2319c80f7"],["posts/20200512A2.html","ff42f43fd85ac1f89e36c87060b1ebde"],["posts/20200513A1.html","7ec019e7faa5bce54bcdaa16530536b4"],["tags/AGV/index.html","98a7f98cfc2da09bbe25b761e7f707df"],["tags/Github/index.html","1be8d79504b79e422f4b972edc16f9d4"],["tags/Move/index.html","127922fd07739fd0d9879376c0fecd9b"],["tags/Plant-Simulation/index.html","9b47e9e22102db2d9aa0ed55fe2e0530"],["tags/Wordpress/index.html","4c189a8ebad03ac7eede380749d13784"],["tags/cad/index.html","7ac06563a9f96f5ffe55c610dfb45323"],["tags/coding/index.html","4ce0cdf888b9d5a142020b128c63de2d"],["tags/hexo/index.html","ac178b2302b1dbb6f0c690c8b892b091"],["tags/index.html","73b70edfbbf53335c5ce5209856acbf0"],["tags/transferstation/index.html","10ee0a7fb3aeca9e5ee7b5554e9254f1"],["tags/ubuntu/index.html","ef7c76eebfb630a25e074c8948d7fcc2"],["tags/写给宝贝的话/index.html","ea8f9338e390a54ccc77aeccffc71ff3"],["tags/原创/index.html","8f01a3611e275c86b079fc7925dffd24"],["tags/学习/index.html","5708c75eeb53bb7482b4556a09ebf7ab"],["tags/宝塔/index.html","9dccc10065d8fcc812dba94506fc201e"],["tags/生产模式/index.html","6463ff14d8ce0c869ba6712ea0d7da8d"],["tags/百度客户端/index.html","01fbac4e00681962ed0b1c0f8ddc4c36"],["tags/科学/index.html","36395283de64dddd1a8c0b22c1bc2857"],["tags/统计/index.html","42d0e39f60364358997709cf54d02db5"]];
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







