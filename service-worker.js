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

var precacheConfig = [["about/index.html","426f66d0fefe4d6f1e9beb9048c31d67"],["archives/2019/12/index.html","517653a0dde51962b3eed5cd21782a58"],["archives/2019/index.html","cdc1c182d74b9e18a14f8b39514f2329"],["archives/2020/01/index.html","0e862d172b0e014f948082534dc4e844"],["archives/2020/02/index.html","0939960f59d83f355969640ddaac1a56"],["archives/2020/03/index.html","f995a7b485a7e05c59487f9699c6f28c"],["archives/2020/05/index.html","164a63f2925ce28638094af40ac24101"],["archives/2020/05/page/2/index.html","d4b82c451ad3b31a4f0d711f3e580052"],["archives/2020/05/page/3/index.html","0b43557ac2e34b48ce7195b47fb0f08e"],["archives/2020/05/page/4/index.html","0309a91b6166fcab0a6a7e7391efc6ea"],["archives/2020/index.html","e0e3671bf3d94583d60bde418ae9f706"],["archives/2020/page/2/index.html","6fc2e88af2b6a6a3bc95394b0bec0093"],["archives/2020/page/3/index.html","be3c28c415632f327f8088b5ec437d3b"],["archives/2020/page/4/index.html","d34bd546d982f91c44f2d8cb26482fc3"],["archives/2020/page/5/index.html","42d5bdf5f0b161af70bae9e2d77b58fb"],["archives/index.html","a2760d598c1bc214284a19e5f66fba97"],["archives/page/2/index.html","2e87b57d931a3357fbb2db43d627fde2"],["archives/page/3/index.html","90c068d39eb92abf3e58b976222e89a1"],["archives/page/4/index.html","7ef399d7fbc2a24afb75e42ed7da9b24"],["archives/page/5/index.html","30a816c3e18e31c080b5b2ddaab7c4e9"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","dea9d9a4969e0d3dbc0e50e97596d54a"],["categories/Code/index.html","1733bf3a584bfafb1c26c119e473007d"],["categories/Plant-Simulation/SimTalk/index.html","60840fe3e071d2cf086f928024626ab9"],["categories/Plant-Simulation/index.html","7659409af837d27fd1352e60f0570660"],["categories/Plant-Simulation/实体/index.html","44a3a6ca541051875a397967af9b20a1"],["categories/Plant-Simulation/常用代码/index.html","c2c392391132885635effd5d262bb18a"],["categories/Plant-Simulation/常规操作/index.html","e7b4251d1fabf6d757efc88f389b2a35"],["categories/Plant-Simulation/模型/index.html","d0f22c2d57d12c6e5e6941ddba1497ec"],["categories/Plant-Simulation/背景/index.html","ef684711892673dca62b7db202dd4196"],["categories/index.html","a73986df6cfd1de5e42c8dcf318feb08"],["categories/nas/index.html","c943756a964b57125d3ad31a81da1668"],["categories/ubuntu/index.html","ad77de6b44dc2961e12413e38855c2c6"],["categories/ubuntu/ip/index.html","af9431d0496afdadf2cb505e88d686b9"],["categories/ubuntu/下载/index.html","08a79eaa372b94b4d8c3a07d13895a20"],["categories/ubuntu/命令/index.html","c7d1ad3c4b374df3e376f038397b85f7"],["categories/ubuntu/配置/index.html","426cb26bb8cab2e802137716d91b7127"],["categories/博客/Wordpress/index.html","65c5f582d0847c3d34ccc03b0cbe0e85"],["categories/博客/hexo/index.html","4100f88c0900a24651d1648187b8156f"],["categories/博客/index.html","9d6ca017a04c6f0520ee5ff5d0f0ae2a"],["categories/博客/page/2/index.html","7ff9585eecece7e494a4152930aa905c"],["categories/博客/typecho/index.html","ef9d0546a2546fd49b281d2245fd310d"],["categories/博客/统计/index.html","c3ef4b910d3c881ef079937092059a8e"],["categories/宝贝/BB/index.html","8e94f2eb4d141ecc9a08dd8ea9111206"],["categories/宝贝/MM/index.html","56c20cd49e0a9545539e3c78c3a04ab6"],["categories/宝贝/index.html","5a2ccdc07b85fb87f44e35e59c520307"],["categories/思考/index.html","f2b1bf4f0003efd117a5e403238694fe"],["categories/思考/职业规划/index.html","b00ed4a9e308b6e069c710d3183d428f"],["categories/科学/OpenWRT/index.html","7077b05abe5d5f9008ef84c4cf7b88ac"],["categories/科学/index.html","3e01fcb4015bfdf9e1e968eaf5365475"],["categories/科学/手机/index.html","fb44d876bdeca47899f1d88e848be89b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","84cb04618d6d3303c2997780221af7ae"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","00cf079059e022ad69a3e29302e96d8d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","eec6b5e7dcf8595e24c91614636f7de5"],["movies/index.html","4ebebcc4cd54be779ba197dfc0350475"],["music/index.html","61bc2c958e5aeafe6e390c5e5753571f"],["page/2/index.html","53e75270e8f3f46fd17350ef0d80501b"],["page/3/index.html","4a7f2b03972cf91012a45aa259587caf"],["page/4/index.html","ff4eb321a5aa16c03b6177c0acdeccea"],["page/5/index.html","c5452787905348daeefb095dd788e797"],["posts/2019/12/04/00/35.html","e85021fe581b787381232506cae4a108"],["posts/2020/01/15/20/18.html","94ce851f3d0bdbdd83d641915eb348e2"],["posts/2020/01/16/22/18.html","2512c224515cbba978836b7c4916e578"],["posts/2020/01/18/22/18.html","976c44460664c0bf50a052d8c6abecec"],["posts/2020/01/19/08/29.html","11e3d31fab8eec3a29b00faf0932a9b8"],["posts/2020/01/19/22/18.html","3b7747f2aef4c54c17d0ce62eb1a9867"],["posts/2020/01/23/22/16.html","9694c4ee73c1df6614e3fcef34fb0ba0"],["posts/2020/02/04/20/18.html","77ef719300b86b5fad6d2ff8bf6f360b"],["posts/2020/03/12/00/20.html","9cdc1108123076fe2048626d804480b3"],["posts/2020/03/20/22/12.html","9b114f4e3ece8d6e138d0adfd86c840c"],["posts/2020/03/22/18/24.html","96894b35249928c72bd35154f8f8d396"],["posts/2020/05/03/22/12.html","a38ae9ca718ac86b0bbfd79f7aa0301e"],["posts/2020/05/04/00/05.html","bcb0de72c34a15dfd0ccd8a7959c249a"],["posts/2020/05/04/00/09.html","9ce655269e66578be1ee4f457f7642e8"],["posts/2020/05/04/00/15.html","92030a0d89210176784a8dc26cbeb91a"],["posts/2020/05/04/14/58.html","a3cd22e33469c81992d3bebebfa0d1cb"],["posts/2020/05/04/17/01.html","3f7e3c98ababa4e429dc1c486178bce3"],["posts/2020/05/04/17/19.html","f76c28b4be124e045d408881d558eec4"],["posts/2020/05/04/18/18.html","528e71bc4f18ba837e6391b3bd6ef3a7"],["posts/2020/05/04/18/24.html","4a408f6ae058d28851057fbb469a6212"],["posts/2020/05/05/11/12.html","030f31101acbe6f0ca82e3075e47dabb"],["posts/2020/05/05/13/20.html","c5b42d33681f1851b8b8de242a7368d4"],["posts/2020/05/05/15/20.html","3145e6376f78f31a6a1be53c7d3436fc"],["posts/2020/05/07/21/21.html","1d60415b1b454d135d1bb1bb24e3397b"],["posts/2020/05/09/12/20.html","0d43635beb766d1cc09eb6d15fb7d9d1"],["posts/2020/05/10/18/18.html","060c676c2de7e5627c859b4aaadfe245"],["posts/2020/05/10/22/18.html","cbe6833bd473140d66b6bbfe7cae211c"],["posts/2020/05/12/20/18.html","923c6ac82be2debb7d450f75910f6c18"],["posts/2020/05/12/21/18.html","71704f47fa0f63dcb918719b36b5d62d"],["posts/2020/05/13/20/18.html","6495b7d24da5c9c6dc27cec4020b46c5"],["posts/2020/05/13/23/58.html","af3eff46497e5108d899c14bb1a1c832"],["posts/2020/05/14/11/18.html","8d2093c32084aa7500d1affdcd41e92b"],["posts/2020/05/14/12/18.html","480087c8acd7ead53a0820fa8d7a93ca"],["posts/2020/05/14/20/18.html","0a4111e5a1f8c4b7cae6be0a7b9706ff"],["posts/2020/05/14/20/58.html","0c9fb5684b9d3e09dacd349aecfbbb9f"],["posts/2020/05/14/21/58.html","55b2b0c8069baab3bf66a5c770a5340f"],["posts/2020/05/14/22/58.html","70696e3106448a3a2bca6a154ab63f69"],["posts/2020/05/14/23/46.html","b939c8b2273923b746f9406461b3fe08"],["posts/2020/05/14/23/56.html","18344ac75634e86a447f85f1d6dc262f"],["posts/2020/05/14/23/58.html","8ca5dc18b28f1d16cdbe1ab331a8d340"],["posts/2020/05/14/23/59.html","8a87529bd49c611e5134c6c3f932c2c1"],["posts/2020/05/16/20/40.html","4dd32c1ba1886a624764e435882cf464"],["posts/2020/05/16/21/40.html","08502fe4f41ecf8521661462c9196a90"],["tags/AGV/index.html","74be988796bc269c689c4253b714ea53"],["tags/Github/index.html","2858c26dab8736d649eee65b8aba1e6e"],["tags/Move/index.html","90421044700ea0ac484c75d8ff09561b"],["tags/OpenWRT/index.html","93c54de328a77245900b5139950c6cb1"],["tags/Plant-Simulation/index.html","943c1d1240d5abff63a42dbfb7160f16"],["tags/Wordpress/index.html","a0ec640a529be0f5398479cdb5bc0faf"],["tags/cad/index.html","0bb0b0944eb77b0be17be732af354382"],["tags/coding/index.html","1559e697d3a133650495b922e1fa064c"],["tags/h5ai/index.html","878a8f2668f969d0b12d0726e9af3ce0"],["tags/hexo/index.html","cbf0c1f63e82e3390848c9caa2c27bf6"],["tags/index.html","778378f6f3cf4a72fc72b5a1487f0f3a"],["tags/nas/index.html","80b8f541f7173d646dbfef79008bdc63"],["tags/tpyecho/index.html","77fd4c176bfdafc9ed8791374df68145"],["tags/transferstation/index.html","4c2446c263d7c9ff5fe7f44a40a8e95d"],["tags/typecho/index.html","284271ffce029d334064becd78f51b24"],["tags/ubuntu/index.html","c445c406a33c4dbe3b50707d65925c57"],["tags/写给宝贝的话/index.html","fe8f533f1cbedd7af230a8fcf514a68e"],["tags/原创/index.html","1c4677dc5a4dd12c0fe772670ef8cb5e"],["tags/学习/index.html","b2ceb96d2bc401b9e98c1d19d4a6984b"],["tags/宝塔/index.html","55e9738076573e80347b9f0a31b1e10f"],["tags/生产模式/index.html","8098f64bcd49ba8195150e1513666efd"],["tags/百度客户端/index.html","322b43407865e9b5c2ed130936c75bff"],["tags/科学/index.html","0f81456ef0588783ed4cb819943b581e"],["tags/统计/index.html","b93974b0fdec18ef828d7f151abce224"],["tags/编译/index.html","b8f1a39368e55e50fdfbf5b074ee7cc7"]];
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







