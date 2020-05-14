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

var precacheConfig = [["Ubuntu打开防火墙.html","278cecb900999843c01391c93bdaffc9"],["about/index.html","26bc08ed4e3df4dda55898dd1743a358"],["archives/2019/12/index.html","df2bbc115db28483bc921076a4b9d99f"],["archives/2019/index.html","831973576bb3c5b7a71ea12dc256275d"],["archives/2020/01/index.html","59afc6aadf779d00bf14d35e4193c07c"],["archives/2020/02/index.html","08a3498e449952e5b9a670fda1de3e6d"],["archives/2020/03/index.html","af837dabcdb845d35f58d5f58de2e9d0"],["archives/2020/05/index.html","8698c2170df70d8414cfa7b1e566b3aa"],["archives/2020/05/page/2/index.html","a3ea275077c04f4df43279b7d5ca07a4"],["archives/2020/05/page/3/index.html","a3b2fe3944dc140169b66245751ae27d"],["archives/2020/index.html","5b5752eef670514fd2c07c6b4e3cc69a"],["archives/2020/page/2/index.html","0ebd96e053e34623a7c802227f9d1177"],["archives/2020/page/3/index.html","661a54a0e5843a8c1f8881a17cb1fe87"],["archives/2020/page/4/index.html","f82bb179862d8cea605cfc3bd100ffce"],["archives/index.html","edf753b7432d034f743d3318490412e3"],["archives/page/2/index.html","5ae70f7b37250c64856095571f432b94"],["archives/page/3/index.html","32c2ec894bd95db9f4811b43f71c60a3"],["archives/page/4/index.html","931d699d56efe38c95e79e3d38198bbb"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","85808a7b728ae27b806f27bdf12adbfe"],["categories/Code/index.html","41da611d57677dad2605a240a611603e"],["categories/Plant-Simulation/SimTalk/index.html","df54e29f2dacf7fd395e4bcc1fe9174f"],["categories/Plant-Simulation/index.html","a6edcc626ed30b4592a5d7d39b23ea99"],["categories/Plant-Simulation/实体/index.html","363eaec740d309576ca1701d086e21f0"],["categories/Plant-Simulation/常用代码/index.html","ce8350fe77efda2cf9459d676c17c32c"],["categories/Plant-Simulation/常规操作/index.html","60961c978fab09b43029cd1b23cddfae"],["categories/Plant-Simulation/模型/index.html","27ca67642ba1d533779f60ef98844c76"],["categories/Plant-Simulation/背景/index.html","df1d952b38649dffac25d7bb7f7e7745"],["categories/index.html","8cde83b0d84b4c7d889500cf43d47997"],["categories/ubuntu/index.html","a7dd4b6d8010c154598feee74f640528"],["categories/ubuntu/ip/index.html","0517ff2fd018fd7f912c8182fb91f7b8"],["categories/ubuntu/下载/index.html","4bef141c457c242ed46919c96978bb8e"],["categories/ubuntu/命令/index.html","022e18f81a9f8b6fdee9cfa4793d64f7"],["categories/ubuntu/配置/index.html","8b6301f171d19c1fe54f766798009afd"],["categories/博客/Wordpress/index.html","929dda3733361c20fa86ac2bf42809ec"],["categories/博客/hexo/index.html","20f9b4bd7d17145206e741f14acac6cf"],["categories/博客/index.html","cd0527c3ee079927f061625b9337bb92"],["categories/博客/typecho/hexo/index.html","ff94df1c56740ffce3cb64b9a95e4a0a"],["categories/博客/typecho/index.html","1ca3665351045d7e74a48970b8bfed87"],["categories/博客/统计/index.html","d5bd74d026904dd2e3f1801526dbc65e"],["categories/宝贝/BB/index.html","1ddcd17181f394ca553fe2f3843656ea"],["categories/宝贝/MM/index.html","4bbe7792153a8b01bda8c85866ccae84"],["categories/宝贝/index.html","f909ab423f2cccd1a212c3e7128aede4"],["categories/思考/index.html","51b77cb18696b2e269b4261fc88564eb"],["categories/思考/职业规划/index.html","36a11651e8f544a47208eafa44d477f5"],["categories/科学/OpenWRT/index.html","4efd932c3234f99b76000c6fe83a4383"],["categories/科学/index.html","0becafa0ff110be0c670acc65066c587"],["categories/科学/手机/index.html","9737f95eddab752e224d5349f0613b7a"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","4382ec1b81bb861de0e0b6cc491a6c84"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","dde1165bfece2be0ffbc0b5cc45f9824"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","3b7b9230e95b027750888c1e5885662b"],["movies/index.html","09a0bab52139614e973bac22d9394456"],["music/index.html","a3be490da63607b2e1891d567387253a"],["page/2/index.html","1eb25092faf244a8a65b0ee078c257a3"],["page/3/index.html","61577fb0e9b54e03281918ed31e5b599"],["page/4/index.html","6de847936e939899ef32eb11b0be9bf9"],["posts/20191204A1.html","5b7d8e60f66df6a94d03e4ad38f2d362"],["posts/20200115A1.html","cea873949957eeac7c79e4a8f8ab61d2"],["posts/20200116A1.html","3b0e292d2f8a7769fef96726dcbbb66e"],["posts/20200118A1.html","1f189f401fabe30c544c1f22e91a3dc8"],["posts/20200119A1.html","8b80fd7b18c1d69f0b27a313e3153c51"],["posts/20200119A2.html","13f06417a899f45464bf84dc75bf1508"],["posts/20200123A1.html","f5ef5905742e7bbab658047eee177c19"],["posts/20200204A1.html","f8ed58f33f1bee1900f280660e323c27"],["posts/20200312A1.html","21ebd7739ca591ccb2e5d5bfdf167d20"],["posts/20200320A1.html","15f46059ea2e97026153c75e839d1600"],["posts/20200322A1.html","7abcf261ae3d7e6547a2f5c79221763a"],["posts/20200503A1.html","b9ae54933f22d9f9aa68404ec9580d86"],["posts/20200504A1.html","eb57fd20aa03279ccdcf21d0bb06bd99"],["posts/20200504A2.html","72142e6aa3fa6e9e971ba306d97852d2"],["posts/20200504A3.html","919111b257c996ada1cf5df3d0623c1e"],["posts/20200504A4.html","f1650c3763e69fd9d932e9551796b43c"],["posts/20200504A5.html","910de8c4f9512f25e8dfd5dc110015bb"],["posts/20200504A6.html","07329abfb5e33da370a8d272a9a55368"],["posts/20200504A7.html","ba422bd69b9c81ca9f37cf72e8097f07"],["posts/20200504A8.html","a7e723bdd119da9f8ffe08e650ea0bd6"],["posts/20200505A1.html","a4a81bcd0cd1fdc968d50158770028cc"],["posts/20200505A2.html","6ef2808abe9f854047519be8877b4e48"],["posts/20200505A3.html","370a7e9b5b8e5448dc93f1ccba574ab2"],["posts/20200507A1.html","e7f1d541fd2dcb3933adc2c5f3290a5d"],["posts/20200509A1.html","cb3e873e9db3a288453b48b10619107e"],["posts/20200510A1.html","122b34f8b29c7c2f62f983afc0d75e34"],["posts/20200510A2.html","503427563a4dc3fcd41d0ed59b9aa023"],["posts/20200512A1.html","79668cede32c09044ab7838c26b6688f"],["posts/20200512A2.html","b9ba3ef5943b6e11e06b0cfe13f44f3d"],["posts/20200513A1.html","7bd7230076563f43031130d5c48a389b"],["posts/20200513A2.html","6f4853eb96674a1420f43d15329e20b0"],["posts/20200514A1.html","00dd6d90281bd7af6fb0820d36e20db8"],["posts/20200514A2.html","926c389b75c95b34c422c3d8e6f3607d"],["posts/20200514A3.html","a1658d8c70cf983e4571c29ffe48a2d1"],["posts/20200514A4.html","21be2f661dc37693ad5e8a4a19c5adff"],["tags/AGV/index.html","36e8ed769ac2f3a913bdc0a1e7b3e265"],["tags/Github/index.html","80361506d5298960123880e865b48497"],["tags/Move/index.html","bd2cf7ff50f83ac9ade89ece3196cad5"],["tags/OpenWRT/index.html","3aacb830e0c1b4537ac9e32614232689"],["tags/Plant-Simulation/index.html","cced21719944bb75e692e15d57465c77"],["tags/Wordpress/index.html","a4d6a95d794d376558f3be91843b8404"],["tags/cad/index.html","d5335d1c5ef1e633e40a78b89c931421"],["tags/coding/index.html","ef955c97c7244167a29f5e6520371adc"],["tags/hexo/index.html","a5960ec6ec64d7f8a9d1c296d3e9930c"],["tags/index.html","c1a462ce23d64594af61742beccb0b96"],["tags/transferstation/index.html","97279a310a4efd5b7a6fd2c9b9c66449"],["tags/typecho/index.html","fdc26059a75251ef3d6534277b95e49b"],["tags/ubuntu/index.html","305665e406aa94b47b8539788ffe0f3c"],["tags/写给宝贝的话/index.html","c0b8848bb8cfec75b025f9c022a23bee"],["tags/原创/index.html","3485603d9efac39657f362c99b2856ee"],["tags/学习/index.html","90643dd0834825edeb147aeb3cf299b0"],["tags/宝塔/index.html","b82fd1dbe107c03563c80438106551d4"],["tags/生产模式/index.html","b1b15a6f56647485402f8bdc21904907"],["tags/百度客户端/index.html","19206387dbf525844a89e2e45494d9ac"],["tags/科学/index.html","94f7d6b74e4daa5de4b047fda774fcce"],["tags/统计/index.html","50369ad7f82a47b55fb2820ddfbaa57a"],["tags/编译/index.html","b60f11d757d29d2d64e7776245eb6051"]];
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







