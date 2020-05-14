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

var precacheConfig = [["Ubuntu打开防火墙.html","279f8c03b4a2388d6acecb3b08e46850"],["about/index.html","14dfee4a0d9a268cc434e3179e37376d"],["archives/2019/12/index.html","f702bec0051e3a3f6cae697af0db60b4"],["archives/2019/index.html","92dd3a947e73c0651978f0d0052eb855"],["archives/2020/01/index.html","85adbe430b9dbef5f30a0c41f0aa3408"],["archives/2020/02/index.html","efa1f39c7c16ee6d8b51b6b8973d5df7"],["archives/2020/03/index.html","48c4f178e7e884ed0b4a8076755dfd66"],["archives/2020/05/index.html","b70cc74f16f7c98d1e08235f097d4894"],["archives/2020/05/page/2/index.html","68e0c5e185cf322bf6fbb2feae53f8ca"],["archives/2020/05/page/3/index.html","ed28db5042f815ea2219a856fcdf3bd8"],["archives/2020/index.html","a95e7f652208d1ed048ccf3ed51e3e7b"],["archives/2020/page/2/index.html","784a7d66ad30be51583572dcdbba3076"],["archives/2020/page/3/index.html","1212e3ddc3651bfa4cbcd4fc7ccd5630"],["archives/2020/page/4/index.html","51555f6af79b817c6b3c501820435c04"],["archives/index.html","f6ae4baf8ac6407f42b58ca248f3d5a6"],["archives/page/2/index.html","4e5df883ccf18ac4422a03541a061e3a"],["archives/page/3/index.html","51513c8ca01f218b5d8057b10082250a"],["archives/page/4/index.html","c7f400cd4b11166912c7541d9d0d2bc3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","62ae1d36989bb5c609523a059a3f9206"],["categories/Code/index.html","54f9151835088f55d86e8bb4e48e01a2"],["categories/Plant-Simulation/SimTalk/index.html","bc12030cc07fbc5904c3077dc6fe99b2"],["categories/Plant-Simulation/index.html","4a1e59267dd36777d2c84e94b21efaae"],["categories/Plant-Simulation/实体/index.html","671c236003f3cacc0855ca52b52716c5"],["categories/Plant-Simulation/常用代码/index.html","4632105169c810e957f2bc08e47cc229"],["categories/Plant-Simulation/常规操作/index.html","e216b1d3b844af23faf6ba8b511f4743"],["categories/Plant-Simulation/模型/index.html","c55d76fef58d96512de59a8b36adcc16"],["categories/Plant-Simulation/背景/index.html","1d0545d99a4cae2fdc55b66b06b8ad8a"],["categories/index.html","d8f31bc68078181656476c84212de0e7"],["categories/ubuntu/index.html","5e5ac66a7d9e9715751e3d7babb7f21f"],["categories/ubuntu/ip/index.html","516b1e3198575b725787f140fb2814b0"],["categories/ubuntu/下载/index.html","435dfb59f5b6b83fc8b91fae062bab32"],["categories/ubuntu/命令/index.html","6b24a45df976e045131eb9088f93208d"],["categories/ubuntu/配置/index.html","65fd9d8542fe84785bc5081036b50f77"],["categories/博客/Wordpress/index.html","468d2871e04beb2785b18abc4f23eee9"],["categories/博客/hexo/index.html","5906c9cec4edc57800b140005e931743"],["categories/博客/index.html","ec8ba82d20d4fd73e7f32d723a10468b"],["categories/博客/typecho/hexo/index.html","308eb5bbe1d785b13f99e977c5c28d08"],["categories/博客/typecho/index.html","98c41c14a61b31496fa1efdbb47c94d9"],["categories/博客/统计/index.html","aefeda98368d9e805d6b665a286a6a96"],["categories/宝贝/BB/index.html","f737e3947b53bc91f9fc5ab0d27278e2"],["categories/宝贝/MM/index.html","5697c6e743bc305655c04a021cb18c81"],["categories/宝贝/index.html","fe3309a355d4a9a49e66b7af19c04bc5"],["categories/思考/index.html","952516adcb467a5e4da39a80c82ed205"],["categories/思考/职业规划/index.html","95b7312b51c3be3dea108df3b0f9ddb1"],["categories/科学/OpenWRT/index.html","d35edfcc33e1e6a19119761adb0e61e7"],["categories/科学/index.html","672bf2677c53722a7d504f5ba6d9ae63"],["categories/科学/手机/index.html","2f7fbb34261bc290e4c1b20ee365a683"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8f6016eaa467b896391661b06d3d0113"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","02dcb7754c0e2a96c7ee6ecfe899408a"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","2416d8ffa96b26c3b01c27585dfb4b7e"],["movies/index.html","05b2deab803f0f6a9cff2ea33fa1072c"],["music/index.html","85fc2affcb2a5f6d4a21fee35f6073e2"],["page/2/index.html","3d922f9c28bbb45e5ae34b436399884c"],["page/3/index.html","53c761f93d5222ab08099828b5e4f96a"],["page/4/index.html","3f91959e83d3cc52f70d7874f540aa0e"],["posts/20191204A1.html","7339adafc5db53c06108a2cd13813909"],["posts/20200115A1.html","5cbc198149936621dd082df611022e6e"],["posts/20200116A1.html","896aa2831486d89acdae8a10719c32b8"],["posts/20200118A1.html","0215d7e38b5dcf873d27e070cbc2410c"],["posts/20200119A1.html","73fd175ccb4b54558d771d1183a5179d"],["posts/20200119A2.html","c11572d8656ef80dc2cb2e45a0ce4845"],["posts/20200123A1.html","12fc516f28df28e82ca0d098d8284dd1"],["posts/20200204A1.html","02c7405b98073fcbc49c18006328b445"],["posts/20200312A1.html","c15a681a02ae3a6274b037584faf8179"],["posts/20200320A1.html","1dc7c102af530b6f92f0bb15606743d5"],["posts/20200322A1.html","66cf6136a69d27614ffd4be82c91c2d6"],["posts/20200503A1.html","e1250ce4e674976d59a98aa961851f75"],["posts/20200504A1.html","707786a6d9067c7d58f7f74f65a5ffdb"],["posts/20200504A2.html","ae38fba2d7196cc0bc2c8e5918f65818"],["posts/20200504A3.html","8fdb874e475da290e14ba2f5a9e87dc6"],["posts/20200504A4.html","493d84ad9eebb3f0df58736c61f6d9e2"],["posts/20200504A5.html","6f5f7f9f8c009522fa0b38cf871db0bf"],["posts/20200504A6.html","43077975ec6dd2522bd75219a730cf3a"],["posts/20200504A7.html","15aa0f645a6d8e51159dc16ecf2e5407"],["posts/20200504A8.html","e0f59705c4970bdbae067150f3f9ce9b"],["posts/20200505A1.html","9765807f224b67166dda0a311b04bf33"],["posts/20200505A2.html","a397c984a941da01b7783b53ba34f802"],["posts/20200505A3.html","797d247ba301aaa6ee72aa5323ec2079"],["posts/20200507A1.html","14277653d64585b3e07155e61fd2b793"],["posts/20200509A1.html","0d3d38dca7d2a7314ff7179e45cfe0e8"],["posts/20200510A1.html","91717f4b745b68d44334216254e640ff"],["posts/20200510A2.html","0a61739315cf37fff5c0348898ab9673"],["posts/20200512A1.html","2fd74317045b983bb2459deeaa1f0e87"],["posts/20200512A2.html","4989d324a8d33462ca978c753111a135"],["posts/20200513A1.html","a89f648e7ee106361b874de3d461f589"],["posts/20200513A2.html","14340f92e0d5aac468f5a69e24eb5de7"],["posts/20200514A1.html","492d0375e4291f5834252600a5a965b8"],["posts/20200514A2.html","008dcf078f1e51df4943678a3fb46add"],["posts/20200514A3.html","eb07f0408c8268ce9828e78530c2c0eb"],["posts/20200514A4.html","5458729bb29b7efc71ceac924eddb477"],["tags/AGV/index.html","e824b85a38809a226ab3a802a773cc61"],["tags/Github/index.html","e776a980e3d9e73f0521ed3eb6bdd837"],["tags/Move/index.html","b206cc9e1e43f77e100655e4e2644e24"],["tags/OpenWRT/index.html","bf054193efd8577c3e9bcdaf266108c8"],["tags/Plant-Simulation/index.html","a31af56078bc09e203c8bea8bd0bc2cb"],["tags/Wordpress/index.html","452df6f3b2493adee1b47f912b9a3a8e"],["tags/cad/index.html","817a7748f0305160a6bf87ebabe9706b"],["tags/coding/index.html","16e0d9b51dd58e7ce475d85e865bb741"],["tags/hexo/index.html","e395b471541a893a8d962238cc4f35cd"],["tags/index.html","e6a4b6129813bec736379dfc16055fe3"],["tags/transferstation/index.html","bd1b10c098fa0edda11336382f985f73"],["tags/typecho/index.html","267f839d730ece43f83b57bee77d4a13"],["tags/ubuntu/index.html","d407b05069182d4c3e976ab39b67b7b0"],["tags/写给宝贝的话/index.html","d91c7b17439d945d9abb526f5dc83d75"],["tags/原创/index.html","14f92e9ea7abee0cf83f7f123c890f64"],["tags/学习/index.html","94bedb94971fc0af57e895063678ab1a"],["tags/宝塔/index.html","fb66bf67201cae2d02f3546e70bb28a9"],["tags/生产模式/index.html","0d85eb6624653334eb5974b09803d2b8"],["tags/百度客户端/index.html","effa19454493a91f942de71f012259bf"],["tags/科学/index.html","3cbfa5b4df66f8f4f6e11c2b9c14674f"],["tags/统计/index.html","fbf961b21d668cc6c3bcb56314644d33"],["tags/编译/index.html","88d7a22e2998606cff1a833afad99cb6"]];
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







