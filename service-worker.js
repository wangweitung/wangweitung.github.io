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

var precacheConfig = [["about/index.html","a8f9ce306aac44108ceaed8164702c43"],["archives/2019/12/index.html","5c55781d4592df3ab44a2288fa7383e3"],["archives/2019/index.html","1ba02a76a79376ad05e8ac3ec026c1ff"],["archives/2020/01/index.html","3a9c4ce4eff8bc01a9664667cdf6e885"],["archives/2020/02/index.html","051949054c1c4c361bd0bb3cfae1ae0f"],["archives/2020/03/index.html","3037e7052106e8c9bbc5198a5b4ac41c"],["archives/2020/05/index.html","0f7636af154ee342ada166076c6da885"],["archives/2020/05/page/2/index.html","62f24d80521f3a2f3c6f71fa939b9ced"],["archives/2020/index.html","404015fe5d8936a31cade8e91f5123d3"],["archives/2020/page/2/index.html","02cd95885eb2a850394059f7435413b3"],["archives/2020/page/3/index.html","ec347f793300f8d574051b285c10bfc3"],["archives/index.html","130cbd4c6b90b6069154a0c48ce99c8c"],["archives/page/2/index.html","595278037d342c978dac05b29c0adb5c"],["archives/page/3/index.html","2cd00bddaf3fcc5280c8fb650dbe4c9c"],["archives/page/4/index.html","1ce80ac6b7e6a027a32c08c90e1f7951"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","4040ee8afab5ab1f79052af5cc64eb2a"],["categories/Code/index.html","8f4516f4dcdf46e4a7c4239eb4f03012"],["categories/Plant-Simulation/SimTalk/index.html","04d62f05e0834f7fb12208e7fd19bead"],["categories/Plant-Simulation/index.html","6ad40fe18d8c057c903881c58b865f1b"],["categories/Plant-Simulation/实体/index.html","3657017d5f0406e3933d99d86df9f28c"],["categories/Plant-Simulation/常用代码/index.html","c850701525c81d375b6d1b646f4687bb"],["categories/Plant-Simulation/常规操作/index.html","45015c5f80e081b3d7aa4fff70eb97ff"],["categories/Plant-Simulation/模型/index.html","1745b391ce2b2d7a43fc901a22587e0d"],["categories/Plant-Simulation/背景/index.html","ed08eeaa1ec8d6dc6bb14932e7139197"],["categories/index.html","1560dfbc5756fd88ea3ebb00424c3d1b"],["categories/ubuntu/index.html","f693601f3ee5b27a29779eeb9b84e9f8"],["categories/ubuntu/ip/index.html","688a7d104158c0aa3ee16afdb2ed0b44"],["categories/ubuntu/下载/index.html","ca9e52ff56ab2410fcda161ca4d1fe89"],["categories/ubuntu/命令/index.html","202478ccf840ee53c1fd0ebb34f97960"],["categories/ubuntu/配置/index.html","a909fd8e90c2943afe355433e7f657ea"],["categories/博客/Wordpress/index.html","33056a59c677146c62df222bd892d768"],["categories/博客/hexo/index.html","75649a83379341bc79b87993a33a2d65"],["categories/博客/index.html","4eb22f148032c1ddb1799de50986cbd9"],["categories/博客/统计/index.html","e1c0dd292b55045b9f1d598cbdb439c8"],["categories/宝贝/BB/index.html","1817b1d9a4408c938738e61e4164c81c"],["categories/宝贝/MM/index.html","a67bd651c6c43b2f7799fc420625b976"],["categories/宝贝/index.html","13cbd9d79399a8d65d17f2461244c7e1"],["categories/思考/index.html","c5d9949d722529cfc655c90dc837090c"],["categories/思考/职业规划/index.html","3e71d9ffa1cc54135b0d7b798e2b13fc"],["categories/科学/OpenWRT/index.html","d47347113e85b620dda6be51ec09fe14"],["categories/科学/index.html","4fc16c4f5723bd9b9a904f16e3c92496"],["categories/科学/手机/index.html","baa6d62e04b9a72442868c1d3a32779f"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","0912155ad3ded43f06036f118d38661e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","782c168ef8332c1aa2a068171dd4c0e6"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","75c1fbdd3b3821852c77d47d347c364b"],["movies/index.html","9ac20b47fcab7ffc8aabe3d6a114bbb4"],["music/index.html","5ae52e9ed3d9126de1f1b9032aa22339"],["page/2/index.html","0ad9dd87e7615b2f666a8532bccd7073"],["page/3/index.html","445bff8feb83675530f6255ae5a618ab"],["page/4/index.html","8bd3c0da237c16b22e77b6f1c51e3d1d"],["posts/20191204A1.html","729c1629c0840172a81bb5f8ab4d06ad"],["posts/20200115A1.html","ec6afa9d121a6fe0a30159d951322e14"],["posts/20200116A1.html","617bd4add9a9ec3bb1f924a3dd4d3565"],["posts/20200118A1.html","51b376390fae79b4f5ee77001ba80ec3"],["posts/20200119A1.html","26a96069a5b53074b40e15f566e9d284"],["posts/20200119A2.html","aa4e4df6347a393ea48121b2a1a5c840"],["posts/20200123A1.html","7828fe16b6656fbfad13da11cdd9f07f"],["posts/20200204A1.html","f13375a350eef75c49798607b9678044"],["posts/20200312A1.html","df9d43ea90291af23eebee981f209efd"],["posts/20200320A1.html","51ae1b69dcada15cdbdda6846af0c7e3"],["posts/20200322A1.html","1a5075362d2274cede67eee672afbdc9"],["posts/20200503A1.html","32a2a960fef18cb8c24979722b3a4179"],["posts/20200504A1.html","3831dd03bed7a467875d3c7de74e3184"],["posts/20200504A2.html","360f302dbc86cfd948f23ab96e8791e5"],["posts/20200504A3.html","3a2dc4c699e9b987e14ecd1c87a72291"],["posts/20200504A4.html","aef6889c228dd1e961a158ff63e8b283"],["posts/20200504A5.html","eb3c5f4142afbeb2ea7c26811c1bb462"],["posts/20200504A6.html","a1cc4121592d0f1b741dc4dfdde64679"],["posts/20200504A7.html","eb7c0031e3c0a0b53dee3e36b226fbd6"],["posts/20200504A8.html","1e4732a63f3a5f7b76e53bec26e3f2c4"],["posts/20200505A1.html","6d7da6773a3995a051b0f9f9a4d9a90b"],["posts/20200505A2.html","8568b7e2c8591bf6b8a2487917981eb8"],["posts/20200505A3.html","c8262506ac71a1fbeb010f2e6933d3e1"],["posts/20200507A1.html","1784bc132ddb33b9b63e0d80c6a79aa8"],["posts/20200509A1.html","bdfe951cb7eb8c039461393ce212e738"],["posts/20200510A1.html","7e45d67828838d32fcc63dd4c8aba101"],["posts/20200510A2.html","b1af8cf7a9dd00209852285674b6cfc4"],["posts/20200512A1.html","d1fdad5d9766de04bdde3ac1ecdcec22"],["posts/20200512A2.html","5f705932db58ab464c552cbed6a5846f"],["posts/20200513A1.html","aba3bc99b728aec73da18db8c34960ae"],["posts/20200513A2.html","bb13c712a4b216428b37b393b07397c5"],["tags/AGV/index.html","6f0ce88aa192fd33ab35ba81a13a10e1"],["tags/Github/index.html","9873d859a1e667b1becc849d608b8c90"],["tags/Move/index.html","01580671a2d1ee2cb4df0740f9f49652"],["tags/OpenWRT/index.html","ef9fa3a995ef940898ec1f93355b2252"],["tags/Plant-Simulation/index.html","ccad923e61c6ef00c0dcc433c9e13036"],["tags/Wordpress/index.html","cb9922d4715f90a112909b0bb958ad74"],["tags/cad/index.html","5c78b9dd3efd1063e4b2da8aa3f448c6"],["tags/coding/index.html","4776d0b3130f10fce86673420bed361d"],["tags/hexo/index.html","24f7c8cdb131044295af5705b26c030d"],["tags/index.html","5514f01fda6b82a5c2300f6205316850"],["tags/transferstation/index.html","96250d1f31074a968f32b21893a824b8"],["tags/ubuntu/index.html","a1a513d9ac8e941a4b6d7607e3a74b35"],["tags/写给宝贝的话/index.html","091081b007429feaede1e720f2608fcd"],["tags/原创/index.html","2c64cd848dae7e861ab936b893a894e6"],["tags/学习/index.html","caf4ee82b0e932d07401a3661834e8e1"],["tags/宝塔/index.html","988780a5b78b52b7b189a59b35bbabd8"],["tags/生产模式/index.html","531367ea9ec693592fcf082a18915b1d"],["tags/百度客户端/index.html","341d2ffdec7614808ee91f1ddb6ea50d"],["tags/科学/index.html","59818478a9e5ad43e0d748bdc2a1437a"],["tags/统计/index.html","17789e70d80272a2b7b471539f071394"],["tags/编译/index.html","a4969bfe7724fa958cc905a47a3e6028"]];
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







