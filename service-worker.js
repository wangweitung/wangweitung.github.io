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

var precacheConfig = [["about/index.html","bbe456269798015fb44d7c4feb6dca65"],["archives/2019/12/index.html","c30b2cc50e6ff19ab9ad6667d65f7bc3"],["archives/2019/index.html","3b94b3babb9cf8a90934903bb7d5fd91"],["archives/2020/01/index.html","cec59e59eb80234ba10328b5de87b7cc"],["archives/2020/03/index.html","1ab311d54b44340030781627d7740ec0"],["archives/2020/05/index.html","e109bdfd2a1fb0278fce2ea665ca8585"],["archives/2020/05/page/2/index.html","cdeac99e8f86c2d1ed64562463d9263a"],["archives/2020/index.html","fc08641673e848eb1611419dbc75d2ae"],["archives/2020/page/2/index.html","0a41ea1fa44a083ada52b973ba99a31c"],["archives/2020/page/3/index.html","5d37e9ce6d1c1d573c6ed0481d649f58"],["archives/index.html","e8b6b5d73df6279915c5ba7b54ec10e9"],["archives/page/2/index.html","eeb3bd1f70a22099aaf22441086153d6"],["archives/page/3/index.html","af1b41668df5ffa4e2090bdfaa84740d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","7d5af84a7b3b211c93e62b3bfd460eb8"],["categories/Code/index.html","be7174edf244b2512e5c89bd731e01a8"],["categories/Plant-Simulation/SimTalk/index.html","9afb7e767f19d681832d4c0f1d86db7f"],["categories/Plant-Simulation/index.html","5d9332555600d7efeb7d1b34e3587add"],["categories/Plant-Simulation/实体/index.html","ff53e02d445efbfce8547ab8a1c42382"],["categories/Plant-Simulation/常规操作/index.html","f60379e3c42ee27eef004408fac36e95"],["categories/Plant-Simulation/模型/index.html","9754fbd824511e76c71fb90aec637467"],["categories/Plant-Simulation/背景/index.html","ec58822fece10ea53910ab06ac5b5bd4"],["categories/index.html","13ccf757ad54fe0a8b70bd5e4da01871"],["categories/ubuntu/index.html","c1a75379c54b6eb3c3d8e9436e320ba7"],["categories/ubuntu/ip/index.html","c5b3929e6da9ab983fdbd27f36a0a3dc"],["categories/ubuntu/下载/index.html","5cdf6e1b77d649baffc9edaedca67903"],["categories/ubuntu/命令/index.html","19f7676a79ed3833e57280dad39e05b0"],["categories/ubuntu/配置/index.html","540258a5a9bc2362e5594c8067cf9e78"],["categories/博客/Wordpress/index.html","588abe2d23465cb92719e882b7588856"],["categories/博客/hexo/index.html","305a1612ee6e63a907c181e75185e9db"],["categories/博客/index.html","d9fb0203c27dd7b67ee97c3f9de996b0"],["categories/博客/统计/index.html","20d334c2e2b0afffe9e57d0b954ee8cd"],["categories/宝贝/BB/index.html","eb6ad7077db13405b83be97efdbedaa3"],["categories/宝贝/MM/index.html","f90ebcbffee902bef2ff4fb9dd3b6209"],["categories/宝贝/index.html","b7b1ba66b35dbc528c4674e9c21b2068"],["categories/思考/index.html","3c0b481dae113ea70dab0191699faf4c"],["categories/思考/职业规划/index.html","812c179b322d07d61879acf42df02bd3"],["categories/科学/index.html","50ac54dad388ab3b2df45fdd8545ee43"],["categories/科学/手机/index.html","d183c58dfb491d4387a4161772744e8d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3df421cde10ef78dbdd92b618955285b"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0dec69ac13df5e912c701536a62eeb23"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ae445c7eaf3ff66753b0ed0e72f78525"],["movies/index.html","4fccf752ae80269ad7ffe67fbd81c5b6"],["music/index.html","825d1e445e85d62f18cb43bbbe1099eb"],["page/2/index.html","f26ec4478572fecaf895e5d73581eb81"],["page/3/index.html","9e49009960fc8e8f61a0862609445e85"],["posts/20191204A1.html","e00ce48b85e6fdd8f3f6bde10518e3c1"],["posts/20200115A1.html","c6307c9db8c34b5bfebc98dbe9aa745a"],["posts/20200116A1.html","dac1b398d16d72a407bdad7f75a617d9"],["posts/20200118A1.html","7325965e1e5d1b6c13cd36a67d28e833"],["posts/20200119A1.html","009fd06e78d72e99cd7a40fb5eb7bbb0"],["posts/20200119A2.html","87a7d8e50d70086b621d77f734a5f145"],["posts/20200123A1.html","7b317d69e6892efe3d5ab3aff02de62b"],["posts/20200312A1.html","26efb040058ffbc396c05bd45cd99d0b"],["posts/20200320A1.html","d705d38a68f0bdd674f25ccc3afe9eb0"],["posts/20200503A1.html","aa861dbb55dc89caf0d02f4204791342"],["posts/20200504A1.html","9f07a0c794aecd94e113f1ec0c3adf2d"],["posts/20200504A2.html","32f3644b0ed023169380119916d9d4e8"],["posts/20200504A3.html","35cc9da9b8a3e881b4e5a0fa48a8b2b1"],["posts/20200504A4.html","61b40425726239a3f4d324dfa257cb5d"],["posts/20200504A5.html","59f99b7e03db7321af14b5f9ec527554"],["posts/20200504A6.html","ac5e3e1d8e68ad384b7b0caa22d2b9e3"],["posts/20200504A7.html","fb2698ad2da1f7e9c88d184615711675"],["posts/20200504A8.html","748751028ec56a6e622e0d67b98d97c7"],["posts/20200505A1.html","426e13b15a54733fe5081694815704b9"],["posts/20200505A2.html","3c996912e2b7be066259ac756a3dc14a"],["posts/20200505A3.html","0b346bc3a72d1bb3d86808c40b9c8651"],["posts/20200507A1.html","df462ef7f3ee7b913543d86262dc6a69"],["posts/20200509A1.html","dbc5966af391d0a54a55199d2e3ac00f"],["posts/20200510A1.html","a4dfcb7539fd9ff98028d20981cc388b"],["posts/20200510A2.html","31b680f820e5395180f3cebe7828fa6b"],["posts/20200512A1.html","a93f1ae9a403392d009d8041ab0dd9f8"],["posts/20200512A2.html","49041d170b738ce8ad277d46a5424146"],["posts/20200513A1.html","36aa3e64c857a15d23add998cf2f140c"],["tags/AGV/index.html","dd9da01f8a96dd57a514404cff7f767f"],["tags/Github/index.html","918781ab863779a87cc7d54f3ac5920a"],["tags/Move/index.html","47b3ff860de5c8ceda13718afdb44454"],["tags/Plant-Simulation/index.html","12a556eb060162cf0a0c57feda98971c"],["tags/Wordpress/index.html","af9122db730f450387426e7b63e8774e"],["tags/cad/index.html","78fd1bd043ede34935dd1e5ff401f609"],["tags/coding/index.html","c8e194657888ea30257b11e3fbd15d61"],["tags/hexo/index.html","8a2c60b1e02e65cf57313661e66a80c7"],["tags/index.html","d0f543c939bba43ec46c8057d1aee629"],["tags/transferstation/index.html","802bf1c660635a6c1b9f15d880c9dffe"],["tags/ubuntu/index.html","1288065221b7b5405c5d60eee15c9cc6"],["tags/写给宝贝的话/index.html","c3c810aa7069229b338118b3e5446867"],["tags/原创/index.html","8482089c022eefc04569f094024c5d1f"],["tags/学习/index.html","154579393264e92697009455ef78c91b"],["tags/宝塔/index.html","57de2a5843d4a749277e09701279b2af"],["tags/生产模式/index.html","7f0a42affd867bd5e7ac4eaca56ea9a6"],["tags/百度客户端/index.html","c727aec4f4f6b905a4bf52963fb1c5b1"],["tags/科学/index.html","8869b7c2f8fb10b4c069e561e99a2d39"],["tags/统计/index.html","978ecf9e3e3268d5ed769fbd7d250b5b"]];
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







