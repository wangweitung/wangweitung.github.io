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

var precacheConfig = [["about/index.html","5de7dab39c0b6fbc2759f4f373f07b02"],["archives/2019/12/index.html","74de36029ac012f4ff07ba107241f13c"],["archives/2019/index.html","33b0ff26219e8f057fb7818ff223c3cc"],["archives/2020/01/index.html","5a4edc1adc72c73d4334ea217a19c71e"],["archives/2020/02/index.html","b8587c58f63c2cc5e243b32480634903"],["archives/2020/03/index.html","b51980540ac564febc25c907076445ad"],["archives/2020/05/index.html","00a4e1afc7159ca8526a7036893a4eec"],["archives/2020/05/page/2/index.html","912f2e56d635a1936d05d9489cceb0ca"],["archives/2020/05/page/3/index.html","9f6f77256cc7e0270ef8346ab651b06e"],["archives/2020/index.html","03bc0406af8821bcea56a9bb93c119c2"],["archives/2020/page/2/index.html","ef7ccf7f99a9c3c857a6fd5668950aa8"],["archives/2020/page/3/index.html","b502d97a0806463edfb69950c7929abe"],["archives/2020/page/4/index.html","fb6941ddc125ea58d4b8849e89c1e2a8"],["archives/index.html","d56a10a4152db7b633bb602d6ee6bfb0"],["archives/page/2/index.html","20368088b1367a23e28e225a7849e65b"],["archives/page/3/index.html","8958a6ecdae246ba5f5d9cbe848e5162"],["archives/page/4/index.html","f92621e7a46dd84523b806410ad2d380"],["archives/page/5/index.html","76c4ca5178e7f104ac2bcbdbfd2e5b7c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","398150ac8dd8ebc4bf132b5b4aa5d6ef"],["categories/Code/index.html","d9a499063e84e418c076df81cf9cf149"],["categories/Plant-Simulation/SimTalk/index.html","6c0527b6305e881706a40ad6f1fcb86b"],["categories/Plant-Simulation/index.html","9e59b11c7401a961796667ba9dd6b1c5"],["categories/Plant-Simulation/实体/index.html","1ce3e48daf51cbbd437678425b6636a8"],["categories/Plant-Simulation/常用代码/index.html","369a4ac94fbe628c1fe809726b442584"],["categories/Plant-Simulation/常规操作/index.html","87fc139791bd2ab94c8d52f7fabd859a"],["categories/Plant-Simulation/模型/index.html","d1b4bbf6967d9bf88e5bbec0c299b952"],["categories/Plant-Simulation/背景/index.html","c49aa4127bab01cb4685cd81bd95685a"],["categories/index.html","cd6aebe670e52a0213d521143ca02303"],["categories/nas/index.html","db49f0199df5347e9354b0f63120ca83"],["categories/ubuntu/index.html","9f2b1524e2c1ac8c005f6bc8ea16ec25"],["categories/ubuntu/ip/index.html","9f4066e7a8912bb0cdefb087fccf802b"],["categories/ubuntu/下载/index.html","8621f6dda2b123911abb259bf04c6e3b"],["categories/ubuntu/命令/index.html","f8a1fdbf097f64500a1e7fce645daca8"],["categories/ubuntu/配置/index.html","f18785e10893e5fe8b04afa077572780"],["categories/博客/Wordpress/index.html","c4bb2c5e4ddb2ac5ab49456c976286f4"],["categories/博客/hexo/index.html","82f7cbaf76cd801a07bf137fab45b927"],["categories/博客/index.html","caeea0aa0eac3a2a2b91626b17ec73aa"],["categories/博客/page/2/index.html","d44ba2414197248962d1fbb298eaaec0"],["categories/博客/typecho/index.html","7b84cffe17eae4eca5ffe21967123cc5"],["categories/博客/统计/index.html","b4c2291f247a56d4869079e6d5636077"],["categories/宝贝/BB/index.html","e98a788860380f259e9077d02acceb24"],["categories/宝贝/MM/index.html","0bac3d06d6cc8a7b7ee5323cd0b6ec70"],["categories/宝贝/index.html","c0403d655756d8101b9437b6ce76a673"],["categories/思考/index.html","6c44980faccc474bdc7cb73c2f696b5e"],["categories/思考/职业规划/index.html","1d55085a2482423a1f1da9a72fd57fe2"],["categories/科学/OpenWRT/index.html","b8cf040ff2adf6dfe921280fd837ce37"],["categories/科学/index.html","4076000c90ed6aba210c04dc5af070cd"],["categories/科学/手机/index.html","6c559688798c62b68fddad00b90be2c5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6404f35c8e255d4cf51d912ea7ddbcd3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","2f0ffec4db85a9c245ca6638711b02c7"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0cf12f526ab34e4b36d7dc0ccbb14030"],["movies/index.html","074d7716efd64e862b64563f4c874723"],["music/index.html","3fc3c85e65ac9e59749712bef0a62973"],["page/2/index.html","1b8268665427aea4148ff0bf0c2bb97a"],["page/3/index.html","04fc0a02a8887f6418c5fdc5a528010b"],["page/4/index.html","26dbcb23910b83f0879fd9908c5a5cb7"],["page/5/index.html","35b30776a8b4c19085e7f6b5130b2699"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","edbb121e555ebac7e57925e8637db664"],["posts/2020/05/04/00/05.html","817adb21d95be4bea6df46b18771567a"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","845f68f8be55119af093fa8894e9eefb"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","1f93458aca05629966f9b282159d99bf"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","554709bd32e150e52b12b064bccda332"],["posts/2020/05/14/20/58.html","361b2561d02f3e57fedfc1ce6185c93d"],["posts/2020/05/14/21/58.html","19aae1108a1ae1e0fbb3f84cefae94a1"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","b9631b07cc9ca330e1db1030571ff85f"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","fd70971f268652638e6ff493daeafc0d"],["tags/Github/index.html","42bf0d8070e2cf75ef4ae1e068f92a76"],["tags/Move/index.html","0065d5d4e0240d46a9c269f8b576814a"],["tags/OpenWRT/index.html","1a309e9ce84ec5ae5eece7fdb25b81ae"],["tags/Plant-Simulation/index.html","5864d348b23a6b4afafa0b5717650acb"],["tags/Wordpress/index.html","e6c568a6b677823f47eed5eb0bc2e80a"],["tags/cad/index.html","1b7190157ffdedd02b2868f47c541f22"],["tags/coding/index.html","463e1062c1dd0d31c7fb82d494571862"],["tags/h5ai/index.html","fe225a3133e0b79701f7b3fa761c9957"],["tags/hexo/index.html","462c995a0518eb17d6037090b5d26743"],["tags/index.html","af16e90d45d706a2f32265b60c9854d9"],["tags/nas/index.html","7bf06b17d6b63de3327984d7a814fde7"],["tags/tpyecho/index.html","4f82914299ffe43703125438ce479e63"],["tags/transferstation/index.html","a5fcef4c88f976baae00b4a6b868775e"],["tags/typecho/index.html","93dfb9d9477a094b236507246bdd0c79"],["tags/ubuntu/index.html","09438fb3861de6b0db4d86c261571277"],["tags/写给宝贝的话/index.html","3067c82159f26188d6d27cf090d4c79b"],["tags/原创/index.html","bc4b6a53976f7eb189754d5bab3ba34a"],["tags/学习/index.html","a0f55180ed9b9e539657564273ba0c71"],["tags/宝塔/index.html","18fbfac87c438b8f02da6397adb14ef9"],["tags/生产模式/index.html","d8c1311aaccf14428abba48e72479b13"],["tags/百度客户端/index.html","54c4cdc44bbdaae62141023bc2015fab"],["tags/科学/index.html","5ea8b59b93e2412f7771a71113cff76e"],["tags/统计/index.html","7ac7f850210f3eae6352bc30fb8ec92b"],["tags/编译/index.html","63e59b0e8084471a9ccb0130320493a4"]];
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







