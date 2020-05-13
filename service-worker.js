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

var precacheConfig = [["about/index.html","70f57b278dce4b414835ec8fcc5eb0e2"],["archives/2020/01/index.html","7f21fcf35081f25f787b9dcb5155800b"],["archives/2020/03/index.html","7710a0e90935688ee5fc3f746676eb61"],["archives/2020/05/index.html","6b0508678146828aff07cd91fd5d6fd5"],["archives/2020/05/page/2/index.html","bde0b8a107206be6c684e440c1c030b1"],["archives/2020/index.html","b9fb8c9fb0f2cb11c48ea4f4f66fd977"],["archives/2020/page/2/index.html","d5748abe34640e7b654c01bfcd7a1cc9"],["archives/2020/page/3/index.html","fbb221848096406cf1143474705582f0"],["archives/index.html","360bd52170bce062465ace78c259aa3e"],["archives/page/2/index.html","ff2ba00c22838a4db75ec98e4d5c2464"],["archives/page/3/index.html","b24ad5a32f4631459ee1aaf747348956"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","c23186e618dcfac9620f10203b225b3c"],["categories/Code/index.html","7c3b20c9e9bf5ae43a424a346237b88d"],["categories/Plant-Simulation/SimTalk/index.html","e11b829213c839e872bb7ddc4dfd7a56"],["categories/Plant-Simulation/index.html","490dd1c942bf6b6511509999e5dc8703"],["categories/Plant-Simulation/实体/index.html","48a2abbf8e3f325608387e2c11e89fe5"],["categories/Plant-Simulation/常规操作/index.html","c13bfda861f43aa20b59d395f175e526"],["categories/Plant-Simulation/模型/index.html","c97d967c044ae56b09d7bb587c367b9a"],["categories/Plant-Simulation/背景/index.html","250104d690d3923fb967834da40f5c5f"],["categories/coding/index.html","5d8330be510cce0e08aeafb5823a56d9"],["categories/index.html","577c2e707b8d8b059b991f204bf0266c"],["categories/ubuntu/index.html","92f26f329963cdb09242a1425a02af56"],["categories/ubuntu/ip/index.html","cc567aaef5ba17f8e0e1a442ab3c4cd9"],["categories/ubuntu/下载/index.html","863a865ea1bc7a170f5b6b8ce151ae6c"],["categories/ubuntu/命令/index.html","d6570af3d544ec5fa698881bb4c0c12e"],["categories/ubuntu/配置/index.html","7ece583cce424523112144e6e5e55536"],["categories/博客/Wordpress/index.html","ea62c79f528537f86d5942197dc9d84e"],["categories/博客/hexo/index.html","8266883892b41637080e13087a37a813"],["categories/博客/index.html","8b550629900d34d4bd42118d3a84f582"],["categories/宝贝/BB/index.html","3732b90581c06f9af0eeccf479226236"],["categories/宝贝/MM/index.html","fae9f346b40a817b81fadc90c1391306"],["categories/宝贝/index.html","bed0e77d69c46c2a55e7eb646bc3df0c"],["categories/思考/index.html","43e411761e3e602badef884961bfabdb"],["categories/思考/职业规划/index.html","69ace1c0aa53eedca9674aa9685a462b"],["categories/科学/index.html","582dd0bf1a11aa98e6b07ccbb757fece"],["categories/科学/手机/index.html","8cf0ce3800095866657f7030a6d98e8d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8f381a2d49a59133b301e96dc63ee9d9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","440df900af412afa0fcef0685360f507"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","773097179eacaa8eeec28b389329b073"],["movies/index.html","424a48120d898cd5114df01a2d7192de"],["music/index.html","1246b508373d675c81873b4c74875d3f"],["page/2/index.html","9af399e571c11c48af804f646b71e8a4"],["page/3/index.html","41050bac2ac8a6835d18174160a20629"],["posts/20200115A1.html","04a192929bca7acb7800e1a1c2eeb882"],["posts/20200116A1.html","17274730ba95c98d7efd85e39eec0c68"],["posts/20200118A1.html","0eb3b578e18572de835b26b7ad4dcb3f"],["posts/20200119A1.html","bf8ca341aec378cb91feb31616868e2c"],["posts/20200123A1.html","b252ce079a9c86fd69a046a692fc8140"],["posts/20200312A1.html","9ab9959fa53f134cd38e3663a0c8c8d3"],["posts/20200320A1.html","caf6f47bc55ec6937f4364d4d75919dd"],["posts/20200503A1.html","608bf0dda409d881099e4fc2ad633c15"],["posts/20200504A1.html","9d5579de20e0d6cf0853657bbd0dffe6"],["posts/20200504A2.html","3daa2ae42eda88cf384080aa80ff7537"],["posts/20200504A3.html","3b161a7a884842307f27ca1a7652689d"],["posts/20200504A4.html","30f10e6378918ec146373dbfd14083ab"],["posts/20200504A5.html","260609b8e4eb961d0e2ba56389530aba"],["posts/20200504A6.html","c212a437b797141263255dc0ecb4b81f"],["posts/20200504A7.html","ceb0120fde9fbb32348abedac5210bad"],["posts/20200504A8.html","2ad5c9dd6af1896f1f8551b18d26b71d"],["posts/20200505A1.html","f39568e606bd45510db559de2f714e06"],["posts/20200505A2.html","b23635fc68cef9f7f8bd6355e70001e9"],["posts/20200505A3.html","3c550e155c43c82c91ebc3e0f3e21f0b"],["posts/20200507A1.html","cabab0487f8dab5cf1f01b6feca1a010"],["posts/20200509A1.html","634a52c5b1339c77a2da72cbf7a50fcf"],["posts/20200510A1.html","30f220f9ed1af12ec0b61ed831b9a318"],["posts/20200510A2.html","d23ed1f0caffe3ec6b3ec267ddc2c2df"],["posts/20200512A1.html","b032091f1c0ee11d0a07a70df4ed46cd"],["posts/20200512A2.html","6f318b92fced2ef89ea29c86beb60bd6"],["tags/AGV/index.html","68371ebbddf8e23a65bd22b1febfd5d7"],["tags/Github/index.html","66b9801cdd17559181ff2f46317d1ad5"],["tags/Move/index.html","27c8ce644f9a88d68659e7a0f9c4145d"],["tags/Plant-Simulation/index.html","b13916e33f1e9ee6d0bf6f1781ebb132"],["tags/Wordpress/index.html","f3e4814cb794019920a6498c561ad58e"],["tags/cad/index.html","f26fca6edb57a19b8e57b31f9d1694c3"],["tags/coding/index.html","fe09a9c6c039be8910eada2ebe2189f9"],["tags/hexo/index.html","575c484826193ce71cad0690714bdd2b"],["tags/index.html","73d15cb10fc906b944762b74c65fa1f3"],["tags/transferstation/index.html","46d88b8234211fba14c8fde68f887244"],["tags/ubuntu/index.html","d8447f020ad327d6d2dc26e5df3903d9"],["tags/写给宝贝的话/index.html","2e0b16693d791a5142dd12b33f8842be"],["tags/原创/index.html","265da053f5b6fe39d51b0991b1bd3066"],["tags/学习/index.html","83c6d5e78fc8d36677e8e1148b275abb"],["tags/宝塔/index.html","fa387acd793b56d7ae52ad3f1c3b6014"],["tags/生产模式/index.html","10d88714b4fade13f28a234bba1f9f26"],["tags/百度客户端/index.html","12198f1b43c3829a4835da6693a61bc9"],["tags/科学/index.html","d34b9cad92284557a63dabc5554788c3"]];
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







