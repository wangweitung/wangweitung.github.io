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

var precacheConfig = [["about/index.html","bbe456269798015fb44d7c4feb6dca65"],["archives/2019/12/index.html","13de785d611dc0c791ac82d1f0f554a4"],["archives/2019/index.html","5f2762f2bc61c075e23d4aa23b411cdc"],["archives/2020/01/index.html","376fd816ab522bec7475301759d3e7af"],["archives/2020/03/index.html","569186fb6d7666bcaec1feda086235cf"],["archives/2020/05/index.html","7898d03bf870904e6fae43beb467d729"],["archives/2020/05/page/2/index.html","99a0faf75c03d6ef018b3d23367922f1"],["archives/2020/index.html","cb7a49f8ff34afdb41472e290097518e"],["archives/2020/page/2/index.html","42a7c89d8a19ed62d6b34d05d13687a1"],["archives/2020/page/3/index.html","49a9bd4f4b92f6189b7a638119f3cbfa"],["archives/index.html","ee5d0eac3434c53c6e4ee76d4c09d3a3"],["archives/page/2/index.html","2442f052a79cdbcbb4703bf12f67b9e5"],["archives/page/3/index.html","8e141f188a8f4b81cfae620066983f9e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","532dbf842e87c3adbc92647f3b9dcea4"],["categories/Code/index.html","b614a42c1ea1e8124e2ebf04d43c9621"],["categories/Plant-Simulation/SimTalk/index.html","744c5cb4cdaaaf1ef43765d6def49d30"],["categories/Plant-Simulation/index.html","29f16b7b8fb0c4688be2c9fbec4cac9d"],["categories/Plant-Simulation/实体/index.html","f3d51df520b739f26fdd2af9a625cdf4"],["categories/Plant-Simulation/常规操作/index.html","347eee1b61bef6052befb1ac33b46b24"],["categories/Plant-Simulation/模型/index.html","62edfff7f6c8a3df458be379b5c999b4"],["categories/Plant-Simulation/背景/index.html","0fefa7018316364ad54a60ba9f9a3acb"],["categories/index.html","13ccf757ad54fe0a8b70bd5e4da01871"],["categories/ubuntu/index.html","51ec8113e647d01f46d6fd57c499b756"],["categories/ubuntu/ip/index.html","316b338a89ed7ad1ff4b1c2f6709dc8e"],["categories/ubuntu/下载/index.html","030605275f1d8ce1b8bc622738889021"],["categories/ubuntu/命令/index.html","521cb1a53fb6c535c31eff21267377a2"],["categories/ubuntu/配置/index.html","4a4391664fb960782ca25e861c3dc13a"],["categories/博客/Wordpress/index.html","acef7f9821efe481e51c62d0a8c83b71"],["categories/博客/hexo/index.html","884912c8bed2c623c0395125ea16333b"],["categories/博客/index.html","0f5cf4c78b2adbe043811d392dc694c6"],["categories/博客/统计/index.html","b52849c29f403705c6dd08a3ce674395"],["categories/宝贝/BB/index.html","234ec0735e80cef5e68ace6e432c20fa"],["categories/宝贝/MM/index.html","820a8338b327d13233543e4948d9928f"],["categories/宝贝/index.html","392a58a13dfc6041b766f159d3d9577a"],["categories/思考/index.html","9650c922fa2632bbdac236a47c7ce359"],["categories/思考/职业规划/index.html","d80d2b4dd9aeb2709cf4392900594a73"],["categories/科学/index.html","7d48679ce7e4e538db94bca7bc1e6d68"],["categories/科学/手机/index.html","aeed032f1c69966f028fc27ba95a0795"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3df421cde10ef78dbdd92b618955285b"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4f2484f4038bc47acb0407ae822e508e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ae445c7eaf3ff66753b0ed0e72f78525"],["movies/index.html","4fccf752ae80269ad7ffe67fbd81c5b6"],["music/index.html","825d1e445e85d62f18cb43bbbe1099eb"],["page/2/index.html","f3d1e059e51590d9ee9210e9a000a46b"],["page/3/index.html","1e8b0d69f497f7f7220c3bc72c7adc4e"],["posts/20191204A1.html","b0e357d1ae3d94873e76699b24f65900"],["posts/20200115A1.html","c6307c9db8c34b5bfebc98dbe9aa745a"],["posts/20200116A1.html","dac1b398d16d72a407bdad7f75a617d9"],["posts/20200118A1.html","7325965e1e5d1b6c13cd36a67d28e833"],["posts/20200119A1.html","009fd06e78d72e99cd7a40fb5eb7bbb0"],["posts/20200119A2.html","62a7b4b0c436489759494d951c24aecc"],["posts/20200123A1.html","401c6b865640517c29e1ec43fc28fb08"],["posts/20200312A1.html","ded373f68a33a46ad45ee7fd8641d20c"],["posts/20200320A1.html","f40a3fdad5e9f2d993473a567e27f98f"],["posts/20200503A1.html","ac48929a96c2489186323f0bdadd9b14"],["posts/20200504A1.html","9f07a0c794aecd94e113f1ec0c3adf2d"],["posts/20200504A2.html","32f3644b0ed023169380119916d9d4e8"],["posts/20200504A3.html","35cc9da9b8a3e881b4e5a0fa48a8b2b1"],["posts/20200504A4.html","61b40425726239a3f4d324dfa257cb5d"],["posts/20200504A5.html","59f99b7e03db7321af14b5f9ec527554"],["posts/20200504A6.html","ac5e3e1d8e68ad384b7b0caa22d2b9e3"],["posts/20200504A7.html","fb2698ad2da1f7e9c88d184615711675"],["posts/20200504A8.html","748751028ec56a6e622e0d67b98d97c7"],["posts/20200505A1.html","426e13b15a54733fe5081694815704b9"],["posts/20200505A2.html","3c996912e2b7be066259ac756a3dc14a"],["posts/20200505A3.html","0b346bc3a72d1bb3d86808c40b9c8651"],["posts/20200507A1.html","df462ef7f3ee7b913543d86262dc6a69"],["posts/20200509A1.html","dbc5966af391d0a54a55199d2e3ac00f"],["posts/20200510A1.html","a4dfcb7539fd9ff98028d20981cc388b"],["posts/20200510A2.html","31b680f820e5395180f3cebe7828fa6b"],["posts/20200512A1.html","a93f1ae9a403392d009d8041ab0dd9f8"],["posts/20200512A2.html","49041d170b738ce8ad277d46a5424146"],["posts/20200513A1.html","36aa3e64c857a15d23add998cf2f140c"],["tags/AGV/index.html","922e9c95e7d671e28c26d4b306171bfc"],["tags/Github/index.html","d8aff65d72282a369324fdfa2533c3bd"],["tags/Move/index.html","94141e3d5f72e9b15f1aeb315ea19142"],["tags/Plant-Simulation/index.html","07bbea6b72660140191427fe7c446dac"],["tags/Wordpress/index.html","5ab5cb40e214737d64e55008620c35a2"],["tags/cad/index.html","8548a761e6635d73601ae547aba0c46e"],["tags/coding/index.html","1b98647c3dd014ed8fb51e8cfefcdf80"],["tags/hexo/index.html","abc0fd713e46ae7fb45624e24d47d0b6"],["tags/index.html","5b7c8dbb64abc1e992d105f47836393e"],["tags/transferstation/index.html","757aa2924381824096cefe9d86922dbc"],["tags/ubuntu/index.html","4878412880f2baf8d50a53bc2ebe8155"],["tags/写给宝贝的话/index.html","c8a95b15fa2d81428ab762e3be7b4f24"],["tags/原创/index.html","8edee8a7814dc66c0da9a95fe79b8d17"],["tags/学习/index.html","d3128f3804f7d02e03424414bb7326c8"],["tags/宝塔/index.html","49b60c2fa99c90b6c9ad0cbc750bc228"],["tags/生产模式/index.html","22f700e8a2afbc1bedf06695dda44289"],["tags/百度客户端/index.html","4ff42c52b72ab748e807393345fba338"],["tags/科学/index.html","b0b9270d6f729bf62ca6366d9b0ef38f"],["tags/统计/index.html","0da512f3e4416277bd70cb932a8ddddb"]];
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







