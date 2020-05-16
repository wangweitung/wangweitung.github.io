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

var precacheConfig = [["about/index.html","b606970aef1fe9f0d11b08cfc300e4a6"],["archives/2019/12/index.html","c0d504026199ed944cd60a467253bd7f"],["archives/2019/index.html","07e00629cf2d8c116fd6551bb9a4db15"],["archives/2020/01/index.html","d679fcdbfa146a9ccced7a6ee84de795"],["archives/2020/02/index.html","ae0a31a9a8313e523abb6417f1de8830"],["archives/2020/03/index.html","5e612f8260f339922fb000be4ff8083b"],["archives/2020/05/index.html","a8c57afe2cfb014ac1960a1db69a443e"],["archives/2020/05/page/2/index.html","41f0c5028ca1e46c93a200b606fd837f"],["archives/2020/05/page/3/index.html","22887f66706d7612de9ffd25f11116da"],["archives/2020/index.html","1063f163aec85b7cc089765170c39116"],["archives/2020/page/2/index.html","7fb89f695e6ae36dbdbe6e546d784fcd"],["archives/2020/page/3/index.html","8ae10b61fd880735b50fb5d8caa90c48"],["archives/2020/page/4/index.html","cd97e5613f84a2e6ab995c18274db4ed"],["archives/index.html","487af78b6623577b4cd8fa2bbbda2c33"],["archives/page/2/index.html","f12711835f55b49209a054f3bebb5214"],["archives/page/3/index.html","fe45a11bb41ced34865f6ab14b735714"],["archives/page/4/index.html","f6b417f51a34b3085eabe705382cdfa3"],["archives/page/5/index.html","b5337b2665c63d5a12cab8e8aacda836"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","6fcfc0daf5140f07d6dfbd251fbbe504"],["categories/Code/index.html","16fd85515ad389a4b034d7d44c25ea5d"],["categories/Plant-Simulation/SimTalk/index.html","0a971a72c31d34e99ed4e049df5cfaa7"],["categories/Plant-Simulation/index.html","01dfdc6223dd74423eb3c931f5db377c"],["categories/Plant-Simulation/实体/index.html","b8f18031b36b9db45c112b66e4903a90"],["categories/Plant-Simulation/常用代码/index.html","8d73d6a574c3b36543556e01c899e43b"],["categories/Plant-Simulation/常规操作/index.html","4e9aa07f3be128fb27fa5283d63ba81e"],["categories/Plant-Simulation/模型/index.html","783f62697c1b9c3c26b6d2e8cb4883f1"],["categories/Plant-Simulation/背景/index.html","540e7112bd84c531664c4099d081d096"],["categories/index.html","1a61bee7cf4099b932d100c4140a1212"],["categories/nas/index.html","7429aed718b0a1136b1d616683dea9c6"],["categories/ubuntu/index.html","e660b561d9b11ed8ff63a1ba916d8a42"],["categories/ubuntu/ip/index.html","8fc11406bf0d4f8f5e12190169494e7c"],["categories/ubuntu/下载/index.html","25fcbcf80d5c136414d52b74683590bc"],["categories/ubuntu/命令/index.html","164fe8c744b8241d1fd74b306fe2dbc9"],["categories/ubuntu/配置/index.html","a10e22d10133053dae284bb9d66def26"],["categories/博客/Wordpress/index.html","f74129d8df24a5e66ef659247bd2ca3a"],["categories/博客/hexo/index.html","687b6ee2593049a04b4db866f0f6885b"],["categories/博客/index.html","1709b7d188b198f2d6dd02455886c2ce"],["categories/博客/page/2/index.html","66dffbc94a0de87e7fd16039bd848859"],["categories/博客/typecho/index.html","4413e5232e51c1f33c79b38e95484f8c"],["categories/博客/统计/index.html","3017ad723d5cc186583b226a106b9a07"],["categories/宝贝/BB/index.html","06e2abc1cf29a9d45ea475bec2e76757"],["categories/宝贝/MM/index.html","543fc1b6cf02762213280a34d1b6d916"],["categories/宝贝/index.html","f70be97b0778575b9c3e31e4e33890b3"],["categories/思考/index.html","561f371c9feb736aee04f47896857c3d"],["categories/思考/职业规划/index.html","bf8a86bd9a3ae88902b9c516210e965b"],["categories/科学/OpenWRT/index.html","bfad2d074a937512d47f6f70622a8fcc"],["categories/科学/index.html","d3c16a1c32a7c79a48687c5ec38ef165"],["categories/科学/手机/index.html","3c6e9d41fd487f07b2bf23776fc81224"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","75c73863faffc4e814cd3f6cda601d98"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","9e3b55d191694984d6cf836b2ca5dc12"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","a57d26d42374d9abc9845d0afa7bc445"],["movies/index.html","ca881d498adc7b3ce92ae01fae9e8796"],["music/index.html","cf6a76cd995eeef97e77e61ab2e62558"],["page/2/index.html","ec710de615bb48a33eb99795bc32b0d8"],["page/3/index.html","00c2ef515344eb6b86a6a7bf7d1c376c"],["page/4/index.html","c2622ad608233f4c2e3ac9465bbe1d1e"],["page/5/index.html","0988c0bd15b59b765db17817b9f409d0"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","6bdea5005a42701d91073863ce28d44a"],["posts/2020/05/04/00/05.html","932dc164867bbd801759e35d1a16e03f"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","d20480e91b492d2a010144c9d5eba3b7"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","201bb718b46d9ba71cd5ef6c3390361e"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","de8affd7a30669de1833d6479afba187"],["posts/2020/05/14/20/58.html","a70d3664d8b81401110618cd4bbff830"],["posts/2020/05/14/21/58.html","b2286baf850ba4ebaf8ae98caa31211c"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","832859fb2f6c15c9808ac5f4fc0bf808"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","ce2621fe041901874755258e391d0b4d"],["tags/Github/index.html","c5936837262562b60127ddea264cbc24"],["tags/Move/index.html","0c72edcb01e4c8748ea4f768cbab0d28"],["tags/OpenWRT/index.html","b9ff61ae9d05cdad35018b61db7525f6"],["tags/Plant-Simulation/index.html","378193bbbba65e67b0dea1099bac0aec"],["tags/Wordpress/index.html","d2222d2ace65827e38806cce8585cee4"],["tags/cad/index.html","12157bf89b8f1fb79d9a7cd4e69607ca"],["tags/coding/index.html","19ee9380c4da6283b0e4bb87e21c3c26"],["tags/h5ai/index.html","7a14ca68398141706aaf4ca59fa9c162"],["tags/hexo/index.html","7892452288181748768cac84085e3387"],["tags/index.html","80dadf316ea2dcb8ed8bb5339923b8b2"],["tags/nas/index.html","1081f1d6befe419f7afa177521dd9359"],["tags/tpyecho/index.html","1455b9bce66d240db086ddc8846eaf6d"],["tags/transferstation/index.html","a1310a31b712a11cf1d75423bb029a25"],["tags/typecho/index.html","8145039cf3996a9dbe445c5fafa4581e"],["tags/ubuntu/index.html","073a169321b39b9fa99a9cd9975f8601"],["tags/写给宝贝的话/index.html","3d5e0655240b2f181352681b515d6f27"],["tags/原创/index.html","be68fbf763cf042d836580299edd025c"],["tags/学习/index.html","f3f33bd9a2f60bc00f939e7b98455e04"],["tags/宝塔/index.html","9217071971282771dd90f9c0a8bb27c1"],["tags/生产模式/index.html","29b7e911c03a27a542211c4452deeeee"],["tags/百度客户端/index.html","e7faad0d8967adf4f2a88149f2094bc2"],["tags/科学/index.html","f6b27bda0a209594615041adaaebfd73"],["tags/统计/index.html","021b82b92d808769bcf6f206cc8b5d3f"],["tags/编译/index.html","b0e12240dfa8f2a368dcb40bafecc2ec"]];
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







