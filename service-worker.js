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

var precacheConfig = [["about/index.html","6190fcaccdac15760008bccf3439781d"],["archives/2019/12/index.html","e999dc0f963738dc46689e4deb836b45"],["archives/2019/index.html","75ee24243d9143faf2f0ee365d70df4f"],["archives/2020/01/index.html","3fb7784dd7bcee4b265bd7cfd5790401"],["archives/2020/02/index.html","40898351b8f888e8f37add96ffe24bbf"],["archives/2020/03/index.html","38ac4f256ab9f9c7d2de5c93b3112f04"],["archives/2020/05/index.html","c1c3f9993fc60cbe33bebcdda1948eff"],["archives/2020/05/page/2/index.html","1017c4f6098afe84ab8e20d97b5328ea"],["archives/2020/05/page/3/index.html","10acb266ba144bc98bc5983319a26a77"],["archives/2020/index.html","3fe4d514d2842e6d9fc9c81cdac761bb"],["archives/2020/page/2/index.html","dab9a7b54275db02fca67d08f46fc34a"],["archives/2020/page/3/index.html","3292e19849befa95d1adb2d3f15ff22a"],["archives/2020/page/4/index.html","476ef3abf1f070c66f6e6c3aa4bb906d"],["archives/index.html","6d48786522f4d45e7d46075b7342d6d4"],["archives/page/2/index.html","466b2c55a86913e99c612b1e570dee4b"],["archives/page/3/index.html","538febfa4eddb87f0a3d0c97da1b91f3"],["archives/page/4/index.html","7e5a1fdba01f4c23913c935cfacbc13f"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","34988bc3143f6531205afacbd1460d29"],["categories/Code/index.html","3cf0845a01cd02b20e88c9dbfafe1dc9"],["categories/Plant-Simulation/SimTalk/index.html","477e259dfb19e38e1455237c9319dcdf"],["categories/Plant-Simulation/index.html","8c469dfd23eaf49b581f7041a91c5790"],["categories/Plant-Simulation/实体/index.html","c230b8cc2931b8b0e47d7b25b78f273a"],["categories/Plant-Simulation/常用代码/index.html","9a2b394da1b5fdff45a62417ff531088"],["categories/Plant-Simulation/常规操作/index.html","de2e48ff20c291d015aa8a814dc6d459"],["categories/Plant-Simulation/模型/index.html","cde6cb60865e4c61a1e514eeef9c544d"],["categories/Plant-Simulation/背景/index.html","2cf339a0ac8c2af841b9b01f2d35e42b"],["categories/index.html","6911625f9bab13e166ddbb87d6c86deb"],["categories/ubuntu/index.html","da5f7aa604182dac20672767843f0968"],["categories/ubuntu/ip/index.html","b204279d63e69826132f44b6e8cf19f8"],["categories/ubuntu/下载/index.html","78c9cde60732957e1559e54e8251c87a"],["categories/ubuntu/命令/index.html","1da0b10426f065039fddb305303a75c7"],["categories/ubuntu/配置/index.html","9cd01ba5fab664825a1e243e10ffa83d"],["categories/博客/Wordpress/index.html","68b0e5cc29f99108c51a875e1dd94717"],["categories/博客/hexo/index.html","06c2589230f44a44c0b2ae00503d4a7f"],["categories/博客/index.html","4a60c06d9d0c4c8fab119bd39a7a574d"],["categories/博客/统计/index.html","a442410ec6607a028c1d0c90d0ab4989"],["categories/宝贝/BB/index.html","5733f5032947ac5f5557c26b3c39f500"],["categories/宝贝/MM/index.html","f6022a462897780023cea035fa9a006f"],["categories/宝贝/index.html","2b109bc2374a5d9f9a5881accbe5bf6c"],["categories/思考/index.html","a084db957755d76408e2ddda07ba606c"],["categories/思考/职业规划/index.html","6763feb6c141acdc5d1e4ee712c556d7"],["categories/科学/OpenWRT/index.html","2fc6c27b1c584fbc3d6fb9fd62577794"],["categories/科学/index.html","3c8b1d0b8aa8bbd9a66dd9dbf8c42da0"],["categories/科学/手机/index.html","03d1117fd41329385c033df3d7e176d9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3d601e3c6c3b1446562113acac3ce8b8"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","31c8c46cfdad0cb6ddb2c93957a1db62"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","fbfe608710500c677eab527f1ce624cf"],["movies/index.html","fc6f3d304804d9b10137c18713c00c02"],["music/index.html","4cb17e4fa543d95d552c3469fb48aa7b"],["page/2/index.html","56d424beeb5f8a2276283d9d65186f40"],["page/3/index.html","98f14dd876db9f6a27b7f3efd203abd6"],["page/4/index.html","21d42dfecc1bd3ed25083b94a361cda0"],["posts/20191204A1.html","7fb472a9a02c5637cb45ba6da6e7d431"],["posts/20200115A1.html","de06fce89d77da2d3cfad02dec22abb8"],["posts/20200116A1.html","cec0fa2d021a8753bb62aae0d935cae0"],["posts/20200118A1.html","2253f27ba54ac0f9a11d50b170e56162"],["posts/20200119A1.html","7f642d65c5e038771315af0ddc309d82"],["posts/20200119A2.html","ac4871137d453f59c9907c3f3ef21a92"],["posts/20200123A1.html","d214b808ab8121012be5c799a73f3ffd"],["posts/20200204A1.html","c9b5a998591a5ce782de05c5d55c58b6"],["posts/20200312A1.html","704df8a050be8313954d5d3b0882e030"],["posts/20200320A1.html","2565df89816b7283f7f463ca64d12558"],["posts/20200322A1.html","afbd34851add48dfb4b91a0d3d9f0658"],["posts/20200503A1.html","6ff54fa72220f878b3d9acd35c99e3d8"],["posts/20200504A1.html","c7a4ce6f905fb2fc48a8cde3faee0895"],["posts/20200504A2.html","030dfc615eaa4d2fac2529f246f79070"],["posts/20200504A3.html","dcf2774f2f81dbc44cd6b187f36fbdef"],["posts/20200504A4.html","92298d4845ec6c45bfd7855de1876fc7"],["posts/20200504A5.html","f59e840c57ead674da777fe75acf26ff"],["posts/20200504A6.html","04790c8dfc41d8beb116167fca519e3d"],["posts/20200504A7.html","d3818e81b629526e47c07b333f8a422d"],["posts/20200504A8.html","19c3d75436994e1306c761a9bdfc3904"],["posts/20200505A1.html","ca6ba85d7cbf408bddbd6534176bfa07"],["posts/20200505A2.html","86d15e1a5c83009d1d790ce5c23aa877"],["posts/20200505A3.html","e5d6501dde503c03b878f83f11f9ec77"],["posts/20200507A1.html","31b37ba445113f0b3dca5a1f99821240"],["posts/20200509A1.html","9be686f727b33c5014f1256bab827aa5"],["posts/20200510A1.html","43a14ab11c6f0716227f900748812318"],["posts/20200510A2.html","fe84f2de15d6673e1513da267adb2004"],["posts/20200512A1.html","e689404a2e379a136000e3b87eef40d6"],["posts/20200512A2.html","db78191739b07283970efecc33be29eb"],["posts/20200513A1.html","f165b017937021acabefa128593e24cb"],["posts/20200513A2.html","2fa3a75e304ccaf60b93f26a76efdd32"],["posts/20200514A1.html","1fb4afb9d5bb72f83acd11c7e84afef7"],["tags/AGV/index.html","35f42aaff5a139b6c6986cfcf2c24bd1"],["tags/Github/index.html","12ad0f08cb2277bb24dc9a8370c3f2fb"],["tags/Move/index.html","9de3d58ae3f948f2e1ec0be288326960"],["tags/OpenWRT/index.html","a45003c38282b848abac61cfc39d1355"],["tags/Plant-Simulation/index.html","51bc3b4cf5b5c3c5b01e9eae2e5f4438"],["tags/Wordpress/index.html","ab96419686e7236ddd82343d91ad6e7a"],["tags/cad/index.html","e8f94e0316e318ceab9cf8640f0f1828"],["tags/coding/index.html","65e4f01c5b3d0992e705b33b07b41ad1"],["tags/hexo/index.html","222b9ba45a566262fef5a67e3209ebd1"],["tags/index.html","b5a55d74110720843bcbaa6eb5351434"],["tags/transferstation/index.html","6bdbd1ea32eb6bf17be698c21f1c5d73"],["tags/ubuntu/index.html","173f4fb7fd72c590edbb8fdfa7ec05d9"],["tags/写给宝贝的话/index.html","031c1f39bcdfdb0d4b4a8399e0be095a"],["tags/原创/index.html","e52383daa034fc845ee0c4cfa57d94d2"],["tags/学习/index.html","9c7f57a60f68862e33eaf211991ad516"],["tags/宝塔/index.html","dc4bdde537821d2aadca50d8e8638906"],["tags/生产模式/index.html","d174f9f94c3a3d9ac3d03541e69386eb"],["tags/百度客户端/index.html","1d0e56ec287ddc7f6cd4f3f185975bc6"],["tags/科学/index.html","dd054e24863b1cf17c7c2f11759880aa"],["tags/统计/index.html","00f5c04d13e076fcc0b18918a0168763"],["tags/编译/index.html","5a6a70d9f1d43a984eb29943e2fc0ec6"]];
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







