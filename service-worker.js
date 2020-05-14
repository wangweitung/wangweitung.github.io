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

var precacheConfig = [["about/index.html","b4f9631bb568224c95bf01f7b3e44f96"],["archives/2019/12/index.html","c48dbe19116d2ded5eda4c4c64c8d6f5"],["archives/2019/index.html","511de1021c856d58ad0d3f32c5ba1e79"],["archives/2020/01/index.html","07b918b42676973a2fb9dae1d210c096"],["archives/2020/02/index.html","50be781627480994f27d4e2d7c4b58ff"],["archives/2020/03/index.html","43642e5359f8991423a57bbb4fc38ccd"],["archives/2020/05/index.html","6c3eb8fdcd91c07addbe1f0ac1b3f765"],["archives/2020/05/page/2/index.html","fa0c8563801a1027f4ea517877af5e37"],["archives/2020/05/page/3/index.html","d87ad35b1e16da8d6c25da583bfee9f3"],["archives/2020/index.html","1604653a5385c702902f2ea4f8f5a504"],["archives/2020/page/2/index.html","b5c1dc4f7c80a789391c263a81102d41"],["archives/2020/page/3/index.html","00b7bcfe56ef96f2a84e686d5016c3e3"],["archives/2020/page/4/index.html","ded6653dfb5e8cce4dce0497c0e214d1"],["archives/index.html","243ece9bcef869b979f33504cca9d117"],["archives/page/2/index.html","d88176cb4c7a3ee9755dfdd069f016a6"],["archives/page/3/index.html","fe9bea64b1007c7c3c0b26b8e6f95de8"],["archives/page/4/index.html","861956c87106a42eb2f04c0a7750f013"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","fcb9fe9632191dd0242aaacfb445eed2"],["categories/Code/index.html","292636b894f14f11c56b65dc79a7f89e"],["categories/Plant-Simulation/SimTalk/index.html","dc5d0b27e62195380d17408feb88ba14"],["categories/Plant-Simulation/index.html","0a403844ad7eada5c4f9346ed7b7efd2"],["categories/Plant-Simulation/实体/index.html","a2776c70fe8b3dce2e1cf3220e24352d"],["categories/Plant-Simulation/常用代码/index.html","e981972798661b61f2a53dfb91736868"],["categories/Plant-Simulation/常规操作/index.html","0cbac57ff3a0fac235657a30a8de1536"],["categories/Plant-Simulation/模型/index.html","93b21ac8c115e72c39ebc0cb33259c39"],["categories/Plant-Simulation/背景/index.html","604bd08a33df95f3ed59be8f317ddc3c"],["categories/index.html","b1f228603e0e0262719d6ec8f8640e42"],["categories/ubuntu/index.html","52ed2f70c2662dd385758f940c3e8176"],["categories/ubuntu/ip/index.html","f1dd2deef3231a078914f5db8d61d385"],["categories/ubuntu/下载/index.html","25b577647728958f54c6a1c49544705b"],["categories/ubuntu/命令/index.html","dc070d2f581aaa4ffd2c35db833a30d7"],["categories/ubuntu/配置/index.html","cfca7d7b4ae081f2773e218556b072b9"],["categories/博客/Wordpress/index.html","e99ffd946f557f4f88b44e26092bbd5a"],["categories/博客/hexo/index.html","79b20891e856597825392b7bac8de8cc"],["categories/博客/index.html","ad5e55de52508a095025041067b40f56"],["categories/博客/统计/index.html","695ef4dffb50ad5c48e7c811b98cc6d2"],["categories/宝贝/BB/index.html","d0d49bb7b7544702bba61c1f4c78e737"],["categories/宝贝/MM/index.html","d586627be4612b39f3e9754897419c0c"],["categories/宝贝/index.html","d8bc4118e338781a016981712caafbbf"],["categories/思考/index.html","2e4e63a822f41b4cf1bb74d3beecf4b2"],["categories/思考/职业规划/index.html","400f085ac5f3f0dd51a87906bde0c87f"],["categories/科学/OpenWRT/index.html","0433f7275604ca90b590bf1145ef0c9c"],["categories/科学/index.html","a169c99e3d133bb825bcef6f36ff107c"],["categories/科学/手机/index.html","2657e832508b06984c4e3e1ca6e06172"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","f8029486230c2e07159142ce36e140eb"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4d9bd0aa749e17cff432a79344fd45a1"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0700e9c92bcc9e7f1cd84525435cb282"],["movies/index.html","035dbac9f5c02684a37aaf191252f6be"],["music/index.html","64b2be84d3e20341070a4ff62e7baf93"],["page/2/index.html","177c10f14d97020520e00b0941bf6ced"],["page/3/index.html","5f9c9489403aa666f303f2130055eae5"],["page/4/index.html","82b8bf58a573ecc6c703619d5a473930"],["posts/20191204A1.html","e3d32a8ef3ff323375031598af85de1e"],["posts/20200115A1.html","505d7e1882c23bdf6f1eb37c2326991e"],["posts/20200116A1.html","2edf988a574ac13c3facec500112d951"],["posts/20200118A1.html","4db1a125d9e1d36443645e51a3fa3b96"],["posts/20200119A1.html","f5a11602aef3d3e264d3c662c1d3cb94"],["posts/20200119A2.html","20e8a1cadbf939fe9bdaaee22e449418"],["posts/20200123A1.html","7e99d4eefcc0aed1bde4904a13977dc1"],["posts/20200204A1.html","975b626f74a058f249d6aa61858920fe"],["posts/20200312A1.html","3b5d48c4a8204ee5cf77294a0d1badf4"],["posts/20200320A1.html","0de640e0986e081f850a966f85de05ad"],["posts/20200322A1.html","f9d906a66c419bff1485b38280cce2d0"],["posts/20200503A1.html","610016f09330282266b050bf086ef36c"],["posts/20200504A1.html","071470d98e703a49649f974f700931a3"],["posts/20200504A2.html","a8208d6458e81a14d99aea1ab1de1561"],["posts/20200504A3.html","b3244f124ea7d99a846615953f89ee2d"],["posts/20200504A4.html","039f0d653d1d1b02d569a76de3275e04"],["posts/20200504A5.html","a1026b09fabc554d8a78b0ed7274b3d7"],["posts/20200504A6.html","db69f3c3ebc3b173097e1c55f35bbcd1"],["posts/20200504A7.html","49bf62a5f9fc931c8aebc5e656c8d962"],["posts/20200504A8.html","8e73340f5ff4456f5e3e4476ed2c2e4a"],["posts/20200505A1.html","663cfb3c4c8fe21530a3866a56df48da"],["posts/20200505A2.html","f12b0410e5f8b5bfd7117f01051e32fd"],["posts/20200505A3.html","7fd135203e8cb98c083db74a5607ffd2"],["posts/20200507A1.html","617e31da2e98669fd372b075b7742a6c"],["posts/20200509A1.html","dae9ab674dc84521c02aca5d1871f9d8"],["posts/20200510A1.html","e56d3bd0b95115c1a5cbcc5ff83c86cb"],["posts/20200510A2.html","33dc42c1aba58820e577f5509fdcb7a9"],["posts/20200512A1.html","f216391aca60f4b018bd47fa24072622"],["posts/20200512A2.html","47a38272d2eb48846d1dcbf2755a3346"],["posts/20200513A1.html","c6fe5d7f59d2e3143924b3a83382bc51"],["posts/20200513A2.html","0a34e4b558305c7788992e91b45429f0"],["posts/20200514A1.html","4963a219b54fa5e8db52db019d8206cd"],["tags/AGV/index.html","b7997d0a0a52b4554489f686d3345e57"],["tags/Github/index.html","000f71c615798cf77e98c643f4da4150"],["tags/Move/index.html","bd336e2e1b6d4873dd23f281a87b309a"],["tags/OpenWRT/index.html","e86ce20c9585bcb2412d7a18e59a1197"],["tags/Plant-Simulation/index.html","b772d1dea4650f3acd02924a3971a605"],["tags/Wordpress/index.html","9b27ef32b3b88b01a52111e1c2b75eb0"],["tags/cad/index.html","515c985f15050f8eff581901bcd76d20"],["tags/coding/index.html","2edad7d1dcad175f81adb0c0969ce417"],["tags/hexo/index.html","e4d517310d93bb55f10c7c1102cf8c45"],["tags/index.html","d2f76fae4a192e9424b3afef86560351"],["tags/transferstation/index.html","eddcceb0e374180b73e21b33d0557067"],["tags/ubuntu/index.html","3cc22e10ec140630f4fc0783d9bafda3"],["tags/写给宝贝的话/index.html","c03c3372d8db3011e9a1702e28a7d55a"],["tags/原创/index.html","a195a0b4dca6bfeedec7e2a05ab30406"],["tags/学习/index.html","75e5d6d739000ccb1204b117daf95315"],["tags/宝塔/index.html","f9d4e9b673159759f09c59b1daa5d1ca"],["tags/生产模式/index.html","15685706149511147e5d94be01227018"],["tags/百度客户端/index.html","372360d1ffbaa1d86edbe67f3557c55f"],["tags/科学/index.html","26e87d3d3260e8a26e32757ff616588c"],["tags/统计/index.html","3ca97fb25f15f55ffb9bdb1dd1f18a68"],["tags/编译/index.html","7a3c7519c3f26d9d99c500e109568c22"]];
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







