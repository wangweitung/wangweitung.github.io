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

var precacheConfig = [["about/index.html","2cca2b206d2ad8175347d3b3cded2c50"],["archives/2019/12/index.html","d04948620177636872f4c99e56a9fdad"],["archives/2019/index.html","6fbccb972a03139a53344f3d499a540c"],["archives/2020/01/index.html","44c3da76ce3e3b315594a5cf7ff333e4"],["archives/2020/02/index.html","042ebf6825ce6a677e304cdd6fe955df"],["archives/2020/03/index.html","73964835bcfa47e2cdc0005eefe76766"],["archives/2020/05/index.html","bc4762a40440a8c49e60181ce7d79f3d"],["archives/2020/05/page/2/index.html","1de563aa0471e9268293f6239d67ed7a"],["archives/2020/05/page/3/index.html","f8f56bbb674ac355145a6412a20fdc45"],["archives/2020/05/page/4/index.html","b3d1434181761c122c787c45e1fd7f30"],["archives/2020/index.html","21402dfc56d15d73f5b61425b9e4e187"],["archives/2020/page/2/index.html","4655592059f1037510d11616c7636c2f"],["archives/2020/page/3/index.html","c69216e86865e234c96bac1d9d056f0c"],["archives/2020/page/4/index.html","8004ec693255c3954955cdb9bc8cf1c5"],["archives/2020/page/5/index.html","5ac84b12dec6d719e8c68bac91a4effa"],["archives/index.html","15e55a7a15c2b2eb1bc52f31d26cc5e3"],["archives/page/2/index.html","1363cb47a9feeab5e3fda711b578b374"],["archives/page/3/index.html","db2da474049fbc661e53a426e7fc5397"],["archives/page/4/index.html","168eb5bc6088bc8c4015179a74682207"],["archives/page/5/index.html","0a979f1104eded874570c1903a915626"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","0e17b89c33ef28a82f295ec6ab5d540f"],["categories/Code/index.html","8a8370f6e9cfabea62a8f4fca15551fa"],["categories/OpenWRT/index.html","6b370b897748a4ec398d5c9bc9ad0fb8"],["categories/Plant-Simulation/SimTalk/index.html","b68e395c260a41665e9e12122694e692"],["categories/Plant-Simulation/index.html","90f2cb183daddb1c4a11a25000b39490"],["categories/Plant-Simulation/实体/index.html","0545bc9a6cd63da7b5a7848873f14670"],["categories/Plant-Simulation/常用代码/index.html","dd39bfd8a682885c2b58819f56944f6c"],["categories/Plant-Simulation/常规操作/index.html","51257b4b36f7cbd27a24ed2658d70c7c"],["categories/Plant-Simulation/模型/index.html","20bd896f5e73c0907701e66d0748a5f4"],["categories/Plant-Simulation/背景/index.html","31e5c4a2aad1bb174bbfe18e1207faaf"],["categories/index.html","fd9c741070ca62c4a3adf079e4f5d0a4"],["categories/nas/index.html","6e87969e50754d8c7057c190c3d31358"],["categories/ubuntu/index.html","29c453888cfbcc2ef8d2f1c71e57b050"],["categories/ubuntu/ip/index.html","be9f5f5b5b3b826ea536cab742eb730a"],["categories/ubuntu/下载/index.html","3157bc1975609644f4b60f5764be0f48"],["categories/ubuntu/命令/index.html","1abe7f7bb49517feb4ed52cd612ae7b1"],["categories/ubuntu/配置/index.html","4266ee726f796bd95247efa3c3d0bd92"],["categories/博客/Wordpress/index.html","bd59c27232a67bc6fdead6b6ba843240"],["categories/博客/hexo/index.html","aa4f57c7d79ba57044e3da13fa5dcd84"],["categories/博客/index.html","2b750b409563d41127f00c32c35d4926"],["categories/博客/page/2/index.html","05811b03b5a47f29d9af5803a42917b3"],["categories/博客/typecho/index.html","dc5a8b3b22b7a7bfc686114d250fce21"],["categories/博客/统计/index.html","10621d25c9c875fc9197013932682585"],["categories/宝贝/BB/index.html","b9732063cdbd4c392520388b6c94939d"],["categories/宝贝/MM/index.html","8798890d630a6ace792e3ba0527d60e4"],["categories/宝贝/index.html","eea5c8d6e140524702c3bedc54e7bf9a"],["categories/思考/index.html","9c92b82650682897dd51e7fabe6a3c7d"],["categories/思考/职业规划/index.html","ce64b3315e1393dbd78fdc387e1ed9fa"],["categories/科学/OpenWRT/index.html","e1daca950561a7c7dd03aa8e4cf21521"],["categories/科学/index.html","6ccb9708c9d8504830781685feacea32"],["categories/科学/手机/index.html","f12b0719b4c43c31c6d6ae88dbef64a5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","21f81118beda134b6324986bbc9318d9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","a3c082f94b395db647c389c375520ec0"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","3ccf31f81952b680976c9ba648fbb8ec"],["movies/index.html","a6279fa8d0a5922bc92834e1555b2e8e"],["music/index.html","644b541843db40da95aad716aacd89e3"],["page/2/index.html","fd9b934c8194fa21ea77dc8f8b098100"],["page/3/index.html","da2e829511649dd968d34150d7f3729f"],["page/4/index.html","bff1ac0cff3cb8a4ca64f5fd2d7c6f48"],["page/5/index.html","fa376c68eb71b911d07cb152c55ac706"],["posts/2019/12/04/00/35.html","656f9908746bb02beea38cabf3315261"],["posts/2020/01/15/20/18.html","c4aa75b8674f54be0051ae6233098a78"],["posts/2020/01/16/22/18.html","3b3c36168fdf43574e7810add1247d2f"],["posts/2020/01/18/22/18.html","7c2bab2a454f56d0a9de40646b6642e8"],["posts/2020/01/19/08/29.html","f5f983e1dedd9f428d9c6e07305a84f3"],["posts/2020/01/19/22/18.html","79f132934b383ac59ff85d8f434da8e1"],["posts/2020/01/23/22/16.html","e214585843f4e58926e430944098e2cc"],["posts/2020/02/04/20/18.html","7f220a1b7c1aa591d333fb84740010d2"],["posts/2020/03/12/00/20.html","95551dfb669884936f4e4eadaa90bdd6"],["posts/2020/03/20/22/12.html","46c1bdb515e243efb90130e41fb33bde"],["posts/2020/03/22/18/24.html","0c4e55eda74ba12e59179f75ea77908d"],["posts/2020/05/03/22/12.html","ca30f4ee771ded2c7fd12a3ee179995b"],["posts/2020/05/04/00/05.html","5db5dd3acf75f4a90a77362e910e3098"],["posts/2020/05/04/00/09.html","43fc1a2bfc332066d69da045dcc0e13d"],["posts/2020/05/04/00/15.html","5b20168a74d9799b43f4b7e432a3fef9"],["posts/2020/05/04/14/58.html","e36dcb97e93cde6923d1ba30aa8009a4"],["posts/2020/05/04/17/01.html","175e818b55f69c0ef483323e88731b1b"],["posts/2020/05/04/17/19.html","feafde7ed9333567c592dd873e830aaf"],["posts/2020/05/04/18/18.html","ce2aac420f38b2094c0ac972cc90ffe5"],["posts/2020/05/04/18/24.html","72df69d8db2ea37f8cffd47cb9dc84f5"],["posts/2020/05/05/11/12.html","b1aef784fb91f6225eef80be1967a894"],["posts/2020/05/05/13/20.html","a9c8e0fa95d0ad7723ba3b81eda1671d"],["posts/2020/05/05/15/20.html","76c677d6be2d9862f23fb7a0c6171bcd"],["posts/2020/05/07/21/21.html","9a86b9d96aae083dc91efb45f00465f0"],["posts/2020/05/09/12/20.html","82520f63f8f5dfae61e50b648b05b153"],["posts/2020/05/10/18/18.html","6e7b49ac0c5e6dc84c894df511b7ff99"],["posts/2020/05/10/22/18.html","2db7e0522acef8fc4057d1c45288f1cc"],["posts/2020/05/12/20/18.html","ceab50281b63f2d85ea625f1b110fdcc"],["posts/2020/05/12/21/18.html","0322e38cd6bd7383d8708abe4f794cc2"],["posts/2020/05/13/20/18.html","818ef244b34eb462c937ea9a80426fb7"],["posts/2020/05/13/23/58.html","0f46a0cbe4e3d4c02b9180a5dc20f0a9"],["posts/2020/05/14/11/18.html","503e7dce923d0b89f03b45a9d29d30a9"],["posts/2020/05/14/12/18.html","1ca2bba953af3b38845edda8801b0eb3"],["posts/2020/05/14/20/18.html","e2c3f8b73424656d350c5ea63fef6cfd"],["posts/2020/05/14/20/58.html","f05dc2e8c19ac753b0a7ff02b90936b6"],["posts/2020/05/14/21/58.html","6f1b65e1a8ad7d6865d50877c9576841"],["posts/2020/05/14/22/58.html","f97eccfee6e0babf50de777d15e43d81"],["posts/2020/05/14/23/46.html","40f2b719f6b1e49c960894366064f2a0"],["posts/2020/05/14/23/56.html","7e45ecdf5a66a53ce491bcf9e2ee2771"],["posts/2020/05/14/23/58.html","9273eb136d08bf0e77c2f544d68e49c1"],["posts/2020/05/14/23/59.html","0d3771f67b66d2b9edb8419ca132aed0"],["posts/2020/05/16/20/40.html","b2f7ff4556ddd180256176c5cb0fed23"],["posts/2020/05/16/21/40.html","4bd665db844d537b19fefcae086bfbd4"],["posts/2020/05/17/21/03.html","95e0f6c9abc931219760c642cc8d563b"],["posts/2020/05/17/22/42.html","732144a1fc2c1dcf4ecc2ebcda9e00a0"],["posts/2020/05/24/07/03.html","ffed86ad64ddead418a209ea72f310f2"],["tags/AGV/index.html","a2d5e43747bc80577bb70cd9e88681db"],["tags/Github/index.html","6e5f29f7b42f4d5cca8ba4219ad6cea5"],["tags/Move/index.html","03f9cb2be440e1630e26a5ab7e527fb1"],["tags/OpenWRT/index.html","28d49f93c4b0d0b25b41ad05152c7d30"],["tags/Plant-Simulation/index.html","370336f24b034b5317dcf372fdc9f8e2"],["tags/Wordpress/index.html","a39c3cd76fcb78c97cb0d83893ba15ae"],["tags/buntu/index.html","b64a62183ab14c25d0cf786382bf19c5"],["tags/cad/index.html","8da13f92cdd83488ed1beeaa864f48ea"],["tags/coding/index.html","69816ebae4f5ddf667bb425d0f0dbd5d"],["tags/h5ai/index.html","f6a517f958c1eb603d0b63e86620702b"],["tags/hexo/index.html","8f51b49897630742b3d5f364f6e6e27e"],["tags/hosts/index.html","9fec83912fbb2baaeafe358227d08b82"],["tags/index.html","044ad49729b2541ad4c60c8405a42421"],["tags/lychee/index.html","15c89c74cf30d496897cbc54036e123d"],["tags/nas/index.html","622568432ef8057a13cd936333664c8d"],["tags/tpyecho/index.html","d56e3b340bd3bacc7cf89b40955b0667"],["tags/transferstation/index.html","624db889ec04359ff89de56d95659a14"],["tags/typecho/index.html","b3ad59b57266ad56b7200426d9be9041"],["tags/ubuntu/index.html","f0f96701b93deb345aff0999ff1f852e"],["tags/写给宝贝的话/index.html","cad5272203db08676147907fe355312e"],["tags/原创/index.html","b564f1a95c7f9d5448f05bee3e3c65a4"],["tags/学习/index.html","275676bd92957f1d15b7ed6ca7998aa5"],["tags/宝塔/index.html","50c5d7de7bb720676a0909c9d3772d42"],["tags/生产模式/index.html","afccb11250d0db3c2b81c4d41d55b96b"],["tags/百度客户端/index.html","04e0c65a53a64467b9b4356fb8e40179"],["tags/科学/index.html","52ced812e400790f2b25aea2a1cc0825"],["tags/统计/index.html","87512372977d8d2277b0206e62ffbccb"],["tags/编译/index.html","e027d4fa4e1188312f006cc6d89460f9"]];
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







