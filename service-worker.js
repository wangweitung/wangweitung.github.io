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

var precacheConfig = [["about/index.html","b606970aef1fe9f0d11b08cfc300e4a6"],["archives/2019/12/index.html","4aeaa874ae17852c2e4d588d77bf8cfd"],["archives/2019/index.html","0911ff8f1607261aca3c78e96a05a664"],["archives/2020/01/index.html","24cc657590eaf956539ae1b88e919430"],["archives/2020/02/index.html","4e51574c2a77b5dff831c06cce385b47"],["archives/2020/03/index.html","7356ecd714623a83fc8804c5e19cf72c"],["archives/2020/05/index.html","336483818803deb4978a0990e2b81c78"],["archives/2020/05/page/2/index.html","2980c11b6456b0f70eae12758c22238c"],["archives/2020/05/page/3/index.html","62e854f61965bd5d8c955459d41d8e82"],["archives/2020/index.html","0a9f03b5565bc005fd78d2a48581146b"],["archives/2020/page/2/index.html","860518a564fdc7975b2285bd73114655"],["archives/2020/page/3/index.html","e85c85d386227b2a4c95ba3c87a09264"],["archives/2020/page/4/index.html","a006821096700fb7346cc9c5621a26cf"],["archives/index.html","4db068c07ce0f03310f23df43fa912de"],["archives/page/2/index.html","19616e70ae0da577700c87bafbbc337d"],["archives/page/3/index.html","3044c4141d7eaf437f416d2c5e888f75"],["archives/page/4/index.html","9ccf6f4625f735c40c2bcfc6c026642e"],["archives/page/5/index.html","97a592d32455f42ed5d61a43ca137802"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","1b9f22c7fec3e83814caf451b9596b58"],["categories/Code/index.html","22b591841d2e8e6b347a81c55be1d0ad"],["categories/Plant-Simulation/SimTalk/index.html","2ceff4c03277b17180b2ab05448a8365"],["categories/Plant-Simulation/index.html","8362579aaafac6ac19f17a5b65b96a12"],["categories/Plant-Simulation/实体/index.html","693e1139ac736c6ad2cc0b628aa32592"],["categories/Plant-Simulation/常用代码/index.html","932a50cd1f6e3db27dad1311bd3331ca"],["categories/Plant-Simulation/常规操作/index.html","cd19d71f4b9034786491745138d94b3f"],["categories/Plant-Simulation/模型/index.html","8ea370b98b18e9aa710b4171a4eb9f8a"],["categories/Plant-Simulation/背景/index.html","77b0d1a0820700861133cfe2f72c85e3"],["categories/index.html","1a61bee7cf4099b932d100c4140a1212"],["categories/nas/index.html","24073b3f2e31f37c462cba4006d32ea6"],["categories/ubuntu/index.html","3b70709334a1db93856f20fc1ff6634f"],["categories/ubuntu/ip/index.html","e89459909769f622a04ec7b2f876c4c8"],["categories/ubuntu/下载/index.html","07fd7b7007f73cd95ce50af4eda04907"],["categories/ubuntu/命令/index.html","4c2b832de5a8a4092ba35c4491864f40"],["categories/ubuntu/配置/index.html","abea7f00d24ca0a0d37e32f214f62545"],["categories/博客/Wordpress/index.html","7f520f317e3dadf7ab5019369ce80e5a"],["categories/博客/hexo/index.html","f67a34fbb679d723185b96b58f22e9d6"],["categories/博客/index.html","cc79e0a17f429f465227246cd56d5d88"],["categories/博客/page/2/index.html","e104bee7b7cd82aa46e93b9430199c96"],["categories/博客/typecho/index.html","f875d7c03f1c278b0b2c876d5bcd4c15"],["categories/博客/统计/index.html","efd3b3c57c7f63f4bc70475b62f3f691"],["categories/宝贝/BB/index.html","69c6f9d96a581906208477d5fdb9786b"],["categories/宝贝/MM/index.html","a0e7613fa9b68a5588e5aa990a5aee84"],["categories/宝贝/index.html","5c36c5f0d4ad0c5d3aa797020464e625"],["categories/思考/index.html","28b9a8fb6be60824d5e324fb2914959c"],["categories/思考/职业规划/index.html","bf2f5e033e5d76dd5ac9d1a1e514d8d9"],["categories/科学/OpenWRT/index.html","e7c3f4b5ef1f9eeb7623c61bb4944be8"],["categories/科学/index.html","4e411e95f66aa132ecb2895ceed1b30f"],["categories/科学/手机/index.html","6a9a416346a3890867642f1eb7a625ea"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","75c73863faffc4e814cd3f6cda601d98"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","fefc5bdf71d9f104c91c8cc9f9ff17cc"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","a57d26d42374d9abc9845d0afa7bc445"],["movies/index.html","ca881d498adc7b3ce92ae01fae9e8796"],["music/index.html","cf6a76cd995eeef97e77e61ab2e62558"],["page/2/index.html","82c9de65414f59bbbbbf445c937daf19"],["page/3/index.html","c16140d002ad815a85e6a8970b37e3fc"],["page/4/index.html","96182e6aeee9519a6493be826578fabb"],["page/5/index.html","4169ff765405b88313832cb9925b7378"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","6b5fc9a4c073053acd9cf15434f46c8a"],["posts/2020/05/04/00/05.html","ef0166cd48714093a79ab114c1f7b11d"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","0806f04cd0bc786a447691f1772c65e6"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","5c661b1ce9151006b30787b4a1ec5cfa"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","2220eb8acd93d34728fd1b774c9b9b50"],["posts/2020/05/14/20/58.html","e27332b2cd21701b1426f0c9311bd3fc"],["posts/2020/05/14/21/58.html","c7100640dcc13498069294b905a26a7a"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","2f1270bd6ef19b0ec066d1ee9117b007"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","f894c731bc959d21bcdfb16b37bd9162"],["tags/Github/index.html","088fd9ead64b5aeb6e6e5684c783e6be"],["tags/Move/index.html","53c10fcee5acfb5ee667ab0ede239fde"],["tags/OpenWRT/index.html","f7f4277da1fdf8293527cc1c4c936afe"],["tags/Plant-Simulation/index.html","9456f4316c2f02fc7fcad2e1b1df2abe"],["tags/Wordpress/index.html","80cc24190fa4a5b7aa67b32f083cea91"],["tags/cad/index.html","e75bd6db589e056db04449968f5bdb52"],["tags/coding/index.html","46e66557794549de5e2d5398fe2735d2"],["tags/h5ai/index.html","2f4342fdfd8ee6731249f097b6408e2f"],["tags/hexo/index.html","6042331f907d27d97347b70ef8383d66"],["tags/index.html","ce692c8ecf424352be2b65cfc5d0d5e3"],["tags/nas/index.html","e104330983d8b7d8defb64fce100ccb0"],["tags/tpyecho/index.html","0d25423b989c4fa1868270ab7687d84a"],["tags/transferstation/index.html","941fd7d8eb0be0bc13e9827aabf19893"],["tags/typecho/index.html","ff7a95d4ed3096afa34978e499da029e"],["tags/ubuntu/index.html","cedb9b05ab4b5a1ce27e4ce627908ee4"],["tags/写给宝贝的话/index.html","09e0f048baddb4dd0f57c199f0cf7f8d"],["tags/原创/index.html","334c65e295dcd7a7baf73e1bbcd38dc0"],["tags/学习/index.html","776d410f75736c441ef98a2e6c3daefc"],["tags/宝塔/index.html","884280fdb0970ff84fa8e48c3e1cfc33"],["tags/生产模式/index.html","a2dcd4964db8a1ee4381d650848bfe00"],["tags/百度客户端/index.html","d34887ca508cd406ac20447419aae715"],["tags/科学/index.html","85e91ae1f2a1201424a9403188589f3f"],["tags/统计/index.html","d6783ce12053eeafa0658d917105f319"],["tags/编译/index.html","4dcecbf722256e2a9e82c77d5cf9edd0"]];
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







