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

var precacheConfig = [["about/index.html","90fa36e4ed0e0c065c652e7dca1152f1"],["archives/2019/12/index.html","bfc022985944625fec55d341556eb1a2"],["archives/2019/index.html","35f333493318fadcc9212cf57af4cca5"],["archives/2020/01/index.html","99981c2cfff56fa2fe787554fe04cb12"],["archives/2020/02/index.html","d6de2b5030e2951a0e2e9ea43e8e9572"],["archives/2020/03/index.html","8fe577fcf47155b51aa7f9d1cc88d91f"],["archives/2020/05/index.html","5fc7054ae7ac13dfe9669eb6f5b3b648"],["archives/2020/05/page/2/index.html","c4d21cc857d62843086674b744efc1c3"],["archives/2020/05/page/3/index.html","1750fc3130dd5b5a7d6ba2d408eff99b"],["archives/2020/index.html","1adbad0ff91bcf98b9da9ac3b64b6a6c"],["archives/2020/page/2/index.html","fd0e09baab7b3847d851a18cfc5fd2e1"],["archives/2020/page/3/index.html","30160b5e1741a7dca194f3ba785b5663"],["archives/2020/page/4/index.html","5fbc939c781a00a21745773895582403"],["archives/index.html","f7f53380bd3acbf5b2609c64c0a82b22"],["archives/page/2/index.html","012df8c8bfb0b9d036e368372b3b6642"],["archives/page/3/index.html","5c167c3230580e83515ea8007b19395a"],["archives/page/4/index.html","45145db32e4b293426d0f146e71605d0"],["archives/page/5/index.html","d55b6a4edd844b323ee01dd78aa73791"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","c5c2d456003ce6fec09f94d17ad1f8cb"],["categories/Code/index.html","93de5d5112a4e19680230e56195db8b8"],["categories/Plant-Simulation/SimTalk/index.html","3d0b8749468c44508be90bfc27210eb0"],["categories/Plant-Simulation/index.html","a698f82951d75cf13d5c8403344eab9c"],["categories/Plant-Simulation/实体/index.html","bff5586ee54bb173544cebe367d52bf0"],["categories/Plant-Simulation/常用代码/index.html","ab4a85f3104ba7024ccbf8619f25989e"],["categories/Plant-Simulation/常规操作/index.html","42b2b633265c54afa1f41595fcd3337e"],["categories/Plant-Simulation/模型/index.html","44dc4971cccaa414f8a69217ec5d9f00"],["categories/Plant-Simulation/背景/index.html","1d3b9129f2fa0c398cd9ef06dbea1249"],["categories/index.html","4b1003315ff5c4c7271e52590f8afe6a"],["categories/nas/index.html","bcce9ad727a4b660420acdbd9fb0d779"],["categories/ubuntu/index.html","04527e396b993871673ce5742135705e"],["categories/ubuntu/ip/index.html","5220b3e40d2ebb6faa691749f6893281"],["categories/ubuntu/下载/index.html","346587cffe054f689d2d9505601917c0"],["categories/ubuntu/命令/index.html","22e6aeedcb697335bf51677550091cae"],["categories/ubuntu/配置/index.html","01daab3b79b2422767ed4bb4e3a98990"],["categories/博客/Wordpress/index.html","a862447a035dc5a618c670ddf6faebbe"],["categories/博客/hexo/index.html","8e4bb78b71969a5339030f353d9ca3a6"],["categories/博客/index.html","89d6100c14a9c695eb5942e5caff3bc4"],["categories/博客/page/2/index.html","75ec03c6fcf36eff53a28833004e5348"],["categories/博客/typecho/index.html","61d7036875fca8ec8ba5af9af5428fe7"],["categories/博客/统计/index.html","d51d46ec9075f43f9d372775f4ac6181"],["categories/宝贝/BB/index.html","77e4fa9a9864f4779fc1429d530197fa"],["categories/宝贝/MM/index.html","51e0c1a55e9f3803c2b05a9efa0c0f1b"],["categories/宝贝/index.html","cc840ec4564b0b01c5865b8245cf33c4"],["categories/思考/index.html","cdf61da7d63394181b26a6d9009ba71d"],["categories/思考/职业规划/index.html","72e3eab4cd7955507deabcbfc781722c"],["categories/科学/OpenWRT/index.html","154549c68434ae7f77a83316a6f1e11d"],["categories/科学/index.html","b7aeb6f0f6be5df01e0332e6e3bfdaf3"],["categories/科学/手机/index.html","816117fb28337f6174dd61f6b0434657"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c3001411e410420cb4920f4abf655455"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","7497dd46ceb1b3047e3317ca1a8eccc7"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","cf5b591b2638211231700d059c7cbd5f"],["movies/index.html","cf58342a1586200cdcfdc1d3cb183655"],["music/index.html","239d595d5724f776631b5cba25321fed"],["page/2/index.html","a9af8c111d204600b1736765a8819707"],["page/3/index.html","4c58d37f0b30e337f79b042c8f93bcba"],["page/4/index.html","574bdc0f4f88e86ce4c9c9477dd347b0"],["page/5/index.html","6c926af30b32647687421e835736b01d"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","6bdea5005a42701d91073863ce28d44a"],["posts/2020/05/04/00/05.html","932dc164867bbd801759e35d1a16e03f"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","d20480e91b492d2a010144c9d5eba3b7"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","201bb718b46d9ba71cd5ef6c3390361e"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","de8affd7a30669de1833d6479afba187"],["posts/2020/05/14/20/58.html","845c631c7c9cc512a46efb6f1517370c"],["posts/2020/05/14/21/58.html","b2286baf850ba4ebaf8ae98caa31211c"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","832859fb2f6c15c9808ac5f4fc0bf808"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","d5440d623b883758162b0ef5ee5e1ef1"],["tags/Github/index.html","d81969e2ae291830df7d89a574b7b60b"],["tags/Move/index.html","82d1ef9e75912ac8ee3e151fa1ae8344"],["tags/OpenWRT/index.html","677609c8b0bb9417605018402a42254d"],["tags/Plant-Simulation/index.html","ea5acfea98ec67a643e24c3316981206"],["tags/Wordpress/index.html","292c4e8016cf2d374088742f406f1150"],["tags/cad/index.html","3b73eaf862f4ebed79825790c1c6c91f"],["tags/coding/index.html","586b9c5ac312a3b56b6a555778623ab5"],["tags/h5ai/index.html","ad83dc645727171d38974f09a89ae035"],["tags/hexo/index.html","db533983c7e2a0232ff561e32be304a3"],["tags/index.html","8e43dfa8d33dbf3185b8692a9ee2c9ef"],["tags/nas/index.html","951926c551fb152c175a70e6e2184316"],["tags/tpyecho/index.html","998d938f159b4d68e0b5a17a9afc92dd"],["tags/transferstation/index.html","1e14d4953ae3639de063f239006d108f"],["tags/typecho/index.html","2ed8dd13d680ffb76c80d172ef298f5b"],["tags/ubuntu/index.html","b1e7c7c175f73455acb3449d99ffdcaf"],["tags/写给宝贝的话/index.html","fa371965a00085a2d360207410916db4"],["tags/原创/index.html","173cf99aac6b4cd4bd568651e7a1915f"],["tags/学习/index.html","04e04700e945e145772dfa8cc2fb46b9"],["tags/宝塔/index.html","1d26da1a1bef9e19f7c58c0f30466637"],["tags/生产模式/index.html","bbe0cb788db7616a23c9880216a15b15"],["tags/百度客户端/index.html","dcc1ffe9c25b12198339f1f3f127a95d"],["tags/科学/index.html","a7469c73ff35493dbee7fcdaa7d5493e"],["tags/统计/index.html","8783e278665536b5679cf3e8d1899c82"],["tags/编译/index.html","a6c0c4be92275ba989401c017ee445e1"]];
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







