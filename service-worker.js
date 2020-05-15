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

var precacheConfig = [["about/index.html","5de7dab39c0b6fbc2759f4f373f07b02"],["archives/2019/12/index.html","018483fb1528087b1f38f9e4d5648b75"],["archives/2019/index.html","04d63ab91e6bad486379cbbfd1749885"],["archives/2020/01/index.html","85ba59453c2144ff96ee62948e938aa8"],["archives/2020/02/index.html","dee2db18a73e311e333e4321ff00986b"],["archives/2020/03/index.html","8a4b95c6b7b4fe690776a0467e8b676c"],["archives/2020/05/index.html","1490b96abf5610ab848f9af9c338cd49"],["archives/2020/05/page/2/index.html","06f64491c37d428cfef53e4259f56f20"],["archives/2020/05/page/3/index.html","8a1636930b898e4bcbdbd40a07b44f04"],["archives/2020/index.html","11a66e0f837f26d7801fb5038c8aa317"],["archives/2020/page/2/index.html","33f286c9c93a83d7a71b964bc26b5210"],["archives/2020/page/3/index.html","ff3ec3e2c7871f9d3662073078a09c7d"],["archives/2020/page/4/index.html","7ce777c13918feb7bcf26dbdcab489ec"],["archives/index.html","5e2dcb28b548a0b568d286cf4246fea4"],["archives/page/2/index.html","3c99de8e630e479b74c1e8d0ebf5444d"],["archives/page/3/index.html","f3a29160cdbe3425d17a3ac4e97d51ca"],["archives/page/4/index.html","1baa0bbb93947b997c5fb34053e2dc5a"],["archives/page/5/index.html","6564fb9e6703fdc3264b6b6f765b11bb"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","53b36726e90028056f64c4dd860ad697"],["categories/Code/index.html","229e8b979f67a27a1dd82ce802e11f1c"],["categories/Plant-Simulation/SimTalk/index.html","ff9e1b058b7c63d0b422dbc3a5b3b28a"],["categories/Plant-Simulation/index.html","57b56462496b5e3e0d8b8d4e7e497081"],["categories/Plant-Simulation/实体/index.html","6e8b680a4f2d7c7545fc63a8f88bb56a"],["categories/Plant-Simulation/常用代码/index.html","93cc8687069d8545251f26d73bf25c30"],["categories/Plant-Simulation/常规操作/index.html","d2865c2b8abcda5b16fd84d8c5517c17"],["categories/Plant-Simulation/模型/index.html","42eef16343bc92217ba7fa85f077e77d"],["categories/Plant-Simulation/背景/index.html","7f58b198b9eaba8d3958c97d990cce45"],["categories/index.html","cd6aebe670e52a0213d521143ca02303"],["categories/nas/index.html","7b36710f9cfb3ce2923be484abe764a1"],["categories/ubuntu/index.html","1675c2f340f0fb7a9d97d1b15def12f2"],["categories/ubuntu/ip/index.html","b3339029c7a6a212403ffb43f5cca9f3"],["categories/ubuntu/下载/index.html","28bbef19f838b7f625fc9efdf9c86324"],["categories/ubuntu/命令/index.html","a7f7722b9b71d519f02c16c302c407c3"],["categories/ubuntu/配置/index.html","68d3b9cc026d931af83e8c7b6e0ca5f0"],["categories/博客/Wordpress/index.html","cc020f9ff1f69a7891879410d20f614f"],["categories/博客/hexo/index.html","fdadd05ebd98f0244a8f028133055761"],["categories/博客/index.html","dd71e34abb9284603829a6c50eb70236"],["categories/博客/page/2/index.html","ad407663572060f9a45c6f0b842690cf"],["categories/博客/typecho/index.html","691e2320394a139c77275dab4de36f39"],["categories/博客/统计/index.html","44bbf5efce418f3955533ddfb9f751f7"],["categories/宝贝/BB/index.html","cfc0e0a8aa1b6b7265413f9a61265b46"],["categories/宝贝/MM/index.html","575444228aa8b54d370d9dee5cac06ff"],["categories/宝贝/index.html","acaa5b1b0221f70155e31bb668a51ef9"],["categories/思考/index.html","cc350a6a62623f59df4bfa3ea4a501ef"],["categories/思考/职业规划/index.html","268595d514fa59fe1a2602094c37980d"],["categories/科学/OpenWRT/index.html","a0e38fd9b951b4c144ca59a2b18de6a5"],["categories/科学/index.html","3a9ce94e0bb405086c1620d0c68bcd52"],["categories/科学/手机/index.html","39d0889aa83d68fe72f119320579478a"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6404f35c8e255d4cf51d912ea7ddbcd3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","963a511ffad8fb9e663c71f91c0a8d0e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0cf12f526ab34e4b36d7dc0ccbb14030"],["movies/index.html","074d7716efd64e862b64563f4c874723"],["music/index.html","3fc3c85e65ac9e59749712bef0a62973"],["page/2/index.html","ceb74a5413003996947c983edba1869e"],["page/3/index.html","f2a576263ed1ecf5c1f2b6e538dc55cc"],["page/4/index.html","3aec9cef698e43a8e4e4b39c83c7ec7f"],["page/5/index.html","a73dfdea4a96cace0e44c6e7a1f30713"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","9a00eb6b12346ca16ac362653aadb59a"],["posts/2020/01/18/22/18.html","675b87f8856a34da1b841a49e33bc4f4"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","6b5fc9a4c073053acd9cf15434f46c8a"],["posts/2020/05/04/00/05.html","a5d768b4b490019cde137183c34c173c"],["posts/2020/05/04/00/15.html","eb27cb2a719b01cb4a1827713fb72f86"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","0806f04cd0bc786a447691f1772c65e6"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","5c661b1ce9151006b30787b4a1ec5cfa"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","2220eb8acd93d34728fd1b774c9b9b50"],["posts/2020/05/14/20/58.html","d556e1b1aacd2d61a8a63b8eac203eb6"],["posts/2020/05/14/21/58.html","c7100640dcc13498069294b905a26a7a"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","2f1270bd6ef19b0ec066d1ee9117b007"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","62e3e8730f41222a0d07dcc3de209a7f"],["tags/Github/index.html","6e692990740e47418d8ed0cfc1ac4d96"],["tags/Move/index.html","e111f0bdeb3cd6fab0cf1ef4fd30a870"],["tags/OpenWRT/index.html","e6c6808d34fec5ee5e6016bca27275db"],["tags/Plant-Simulation/index.html","cb97928a51a9d1236d9df4262ad0d195"],["tags/Wordpress/index.html","167bd14dd1c9ae5e37ba9a90f02fc289"],["tags/cad/index.html","f85c82043a72c6680d951f47fd052f99"],["tags/coding/index.html","150bafe56c4a9bf7d2ae98de3aac4096"],["tags/h5ai/index.html","d305d034b7687586a4b0a39571e99d1b"],["tags/hexo/index.html","f336a5bfa6df5469830fa8679b39a2d0"],["tags/index.html","5023b0f23885639d5ce91f9a8f09f8f3"],["tags/nas/index.html","28b2a7a9efa76bbdd3d456fc3e293cc8"],["tags/tpyecho/index.html","a6474552ec58a04fbb7326676f8985ef"],["tags/transferstation/index.html","ce0e667d8882c75e80033f1a70a28887"],["tags/typecho/index.html","7b1ab340bac7af05aa3775cfbb11309b"],["tags/ubuntu/index.html","d61beb848e827b274a6ce8f5d2344362"],["tags/写给宝贝的话/index.html","395db4e5ef3acc95e8977bbbe2191236"],["tags/原创/index.html","8a7330cb9071f30bbf488f9991d520a6"],["tags/学习/index.html","c9f5ab0dcc070f6c26c04112205a8828"],["tags/宝塔/index.html","313bb696ada012c6809dcb3b07d85676"],["tags/生产模式/index.html","c1dde4f41dd3b4c76020e40b41fe7e1c"],["tags/百度客户端/index.html","6404cf674d2314747668f1343b51c557"],["tags/科学/index.html","0b895983c8e80ddb6b78f7c23757e4e0"],["tags/统计/index.html","2ce497ea58703264a305ba0696ed4d49"],["tags/编译/index.html","f98a548e40ded2133d8f0175a5429d5e"]];
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







