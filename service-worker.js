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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","150d174ca389d9f280532e62af0947bf"],["2020/03/12/妈妈写给宝贝的话/index.html","9f414bac529a873b9ee9a7b355424988"],["2020/03/20/磨人的小天使/index.html","a501e766e46e682f12223ec84e0e86c9"],["2020/05/03/hello-world/index.html","755cb78365589e488a3297df25d25c41"],["2020/05/04/AGV的用法/index.html","db0a9da611d6b723a636f94716b92630"],["2020/05/04/Github创建文件夹/index.html","c101c0b7dbc6324a05ce4faccf19b168"],["2020/05/04/Move的用法/index.html","847537e95ad5dcecbf153ff14224c93a"],["2020/05/04/PlantSimulation常规操作/index.html","934a8d2e5b8789f4c760d67798fd553b"],["2020/05/04/TransferStation的用法/index.html","acc4b3018b0ea204d893c3a0fb174dff"],["2020/05/04/Wordpress问题解决/index.html","40355966544c2b905e9a4ee41bb06a23"],["2020/05/04/ubuntu安装配置hexo/index.html","e788a9a4076be654e64259a2491f9841"],["2020/05/04/无科学环境连接谷歌账户/index.html","8d617368cdb2779b77c5a11d16872d0c"],["2020/05/05/Markdown的一些小技巧/index.html","9baebc9931e4441bb3034c48f4d52f43"],["2020/05/05/导入cad作为背景图/index.html","c28b0f3c47f3aeac98412278cac7d87b"],["2020/05/05/推动或拉动的生产模式/index.html","2e929c0740106163081b2d527088006c"],["2020/05/07/在摊位下上网课的小女孩/index.html","a316368c1c4b18da7a02101bda2aff9d"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","25663abab613ef7750a6dccebced6e4f"],["about/index.html","62e9f571296587f29ea98f54b2f6f71b"],["archives/2020/01/index.html","b460fc38e34a2dda37769061ab537b96"],["archives/2020/03/index.html","0067232a028f8799476c1eee7cb1bd0b"],["archives/2020/05/index.html","61de736be1b66004cd5ea6470327a49d"],["archives/2020/05/page/2/index.html","54552c6f352fa93efe147f5b7bf763cf"],["archives/2020/index.html","a46a736d3a5a41a845c8c12eaf1a2f05"],["archives/2020/page/2/index.html","c6b8cea95b0069dd9f38ce22175b8063"],["archives/index.html","d45e3cdbbe521ec20adcd8b77d991284"],["archives/page/2/index.html","2c01ba9bcc10d398c7346bb8698da2fb"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","1e6e5c4309fa388729923bf2a7ac58af"],["categories/Code/index.html","c554c2db5b3f34a38e5c884eb6ff5dee"],["categories/Plant-Simulation/SimTalk/index.html","bfc4e2f55426e5066ad41e5d9ea88f07"],["categories/Plant-Simulation/index.html","b7464321b9715caf90beeefe994ec2a6"],["categories/Plant-Simulation/实体/index.html","efdabebae1b864a9fb9a513c9b4a54f8"],["categories/Plant-Simulation/常规操作/index.html","5d9dc8f497a039bc3188016ebaa58f33"],["categories/Plant-Simulation/模型/index.html","9238c104bdccc1f03d953a36e9218707"],["categories/Plant-Simulation/背景/index.html","985d2da81530755c5e17d911bbdb8744"],["categories/index.html","0ef2762485091c673a3d58394a7d2dfe"],["categories/博客/Hexo/index.html","90036c46394e602be55dda25a3b073a8"],["categories/博客/Wordpress/index.html","d300a6afbff3ae14b048aac96100286e"],["categories/博客/hexo/index.html","7f1456cf5f1906fbd8e3edd787c50fb5"],["categories/博客/index.html","f374de9b9267eb4450efe15bfd29b13c"],["categories/宝贝/BB/index.html","dd1232543c5ec894a62591efb566c25f"],["categories/宝贝/MM/index.html","2182412fe7c16d8971e2e3691ba4479f"],["categories/宝贝/index.html","e18022f16c328f8bce651353749f620b"],["categories/科学/index.html","c7b147575b8845259789743f308ad21e"],["categories/科学/手机/index.html","e3f88eddcf3807886f15f97e1c0d9c39"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","89187942c3a102a12054643bb73c739c"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e970f374e537574a7d4243b7b27d43ba"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","0ff40435449f0a30b05c2695586e8483"],["link/index.html","26ce7311195ed998b21fbf0dbf692ac2"],["movies/index.html","d029b9af748cdd91a1531d738c54d5fd"],["music/index.html","e004cf27edec5c6cf0f5a22dfe608f9d"],["page/2/index.html","bdbfe421a868a43bce9c63d7715584bc"],["tags/AGV/index.html","21b3c42eafc773ddeb7998f785b88537"],["tags/Github/index.html","b7a1eee1f6843da04ccab86e05fa09b8"],["tags/Move/index.html","80e9bf1b4b6a722b3c2dd1679a0463b9"],["tags/Plant-Simulation/index.html","5cd09d233e5edc343cfe441598ba1552"],["tags/Wordpress/index.html","21b69caadf5b55915d647f5a413d48d8"],["tags/cad/index.html","7809243280d0401bc5349f9a9ea3cc3a"],["tags/hexo/index.html","8420c764288502d7d68b0050c4ed8561"],["tags/index.html","c9f84076eb5ea24f22709dab71dc728b"],["tags/transferstation/index.html","af3cc99b483a0765569dfaab583362e4"],["tags/写给宝贝的话/index.html","909328edb825fa772b2133354361f3a1"],["tags/原创/index.html","f78d3e56edd890446567291e48b9aab3"],["tags/学习/index.html","c3f5297f78c7d32b277383a6e874078c"],["tags/宝塔/index.html","b736e62d1b5616b8394c3befe91f3992"],["tags/生产模式/index.html","e7fac4b035dda32b0b76d9f437e12efb"],["tags/科学/index.html","ac9ba4e44e1c5c598b67e7bf1e854f2b"]];
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







