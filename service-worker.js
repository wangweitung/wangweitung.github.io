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

var precacheConfig = [["about/index.html","8031f3c95dd904da0d8783217293c433"],["archives/2019/12/index.html","066fb4dc8dc33e8182ec67dd53879456"],["archives/2019/index.html","0beb31e07c65a7a632fd00d19566c12b"],["archives/2020/01/index.html","13644021b9ec32c99c27adac7afd1b10"],["archives/2020/02/index.html","e892693c685b93e4e7e62fc78a89d5da"],["archives/2020/03/index.html","3c9f9ed6c8ee2253368a50824211875b"],["archives/2020/05/index.html","8bfcba9cd3f4bc39aaca6b06186e23f6"],["archives/2020/05/page/2/index.html","c3d701a1f78ca88772bf3f4e9cfda516"],["archives/2020/05/page/3/index.html","920780222af00109664826ec58a45fd1"],["archives/2020/05/page/4/index.html","76e707def2ddab9c7e819330fe6c5567"],["archives/2020/index.html","a2987a3823b37943dd7ede8735d625cd"],["archives/2020/page/2/index.html","13073a0221680b3400b1eaa297deef54"],["archives/2020/page/3/index.html","48b7209eac59ffdc1db33de6fe88426b"],["archives/2020/page/4/index.html","d8c574a3e77100950ab0ba82e19f8ee1"],["archives/2020/page/5/index.html","b4ac22d1c2289250427353225ed21ece"],["archives/index.html","c2ae49dabf31195c59c5db14e9169c59"],["archives/page/2/index.html","a6945c597338bc72057724c5c9c717e2"],["archives/page/3/index.html","dc01de05b26780046db2071e28cafb82"],["archives/page/4/index.html","c8fccac89c4b57a0d02782e63920dfa9"],["archives/page/5/index.html","0788d03353984bdda1d6c51a20a402a6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","b6bd05d8067237dc0bc2e8937c57e420"],["categories/Code/index.html","aee03f5c2b4629721aa6e719cd132d92"],["categories/OpenWRT/index.html","9d66338ba1026b8a1df6467204d2f419"],["categories/Plant-Simulation/SimTalk/index.html","7ec19a47b472fffe6e27cee7b36a81c9"],["categories/Plant-Simulation/index.html","2c54b7dadb4efd51f6d053f3609925b0"],["categories/Plant-Simulation/实体/index.html","33c7552d24d38c93f4643ed9558961c5"],["categories/Plant-Simulation/常用代码/index.html","ae78435c678283bd12ab209429c5f047"],["categories/Plant-Simulation/常规操作/index.html","ef978a4ab41be787394e7e9ae3763ece"],["categories/Plant-Simulation/模型/index.html","4ab83fefb524bec1dda509684fb7268e"],["categories/Plant-Simulation/背景/index.html","1a2ba1b854dceb7b156ca53ddf7be5ee"],["categories/index.html","e010da3e3017c34ef9f53847fa32b958"],["categories/nas/index.html","4d8a3638563217fa4faec1ec1baabbc9"],["categories/ubuntu/index.html","9931923d57127a00e113f3a51fe7c3aa"],["categories/ubuntu/ip/index.html","672d6978819ad61d2236b2dc1358ce43"],["categories/ubuntu/下载/index.html","b00bfec97aab9837a98cecb492a6fbb1"],["categories/ubuntu/命令/index.html","c0e62e75eeb1e38027422b71dd48e649"],["categories/ubuntu/配置/index.html","7986b6a5a32cf887105987a8bf4a75b7"],["categories/博客/Wordpress/index.html","baac338dc82ba8844c6fe9aca9631263"],["categories/博客/hexo/index.html","e1b37286252dc66c7da05c1b4d852a53"],["categories/博客/index.html","35c492e027c30281a554605b4d0fda71"],["categories/博客/page/2/index.html","a5d2896f01c677eb7b611b88dbabfd89"],["categories/博客/typecho/index.html","9dca7d1bb52c6cbbe94f379c05ad2601"],["categories/博客/统计/index.html","2b0b35cbf2f3f32d281068282a099643"],["categories/宝贝/BB/index.html","1423bb355493a4064cc79f129b6ec016"],["categories/宝贝/MM/index.html","c0ba9ef9db625f35df057e6b3e99cba3"],["categories/宝贝/index.html","194c3549cc8e351f17d0831b2fabd086"],["categories/思考/index.html","858c50a8fe481805d5808ef858206c4e"],["categories/思考/职业规划/index.html","68ab567bdf8f23e4d0d17cd7eabca7de"],["categories/科学/OpenWRT/index.html","c62771f7c296eee66c1658a929758b8c"],["categories/科学/index.html","27c4a333cc5bb494ebf9882e2a40217e"],["categories/科学/手机/index.html","f0deebdb9e76ca2ebe5802f489338bfe"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","102a3c5695ce659841eabc037925f19c"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","b3e0a83093abf8281694908e2aee5f41"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","47be49a18a0531db69d55fa6105f9d40"],["movies/index.html","a6f39162faa4c8a3fff07a6eae355c3b"],["music/index.html","cafea31fbf3c1cf678553f458970808d"],["page/2/index.html","6a6dd1fa83fe11a046fac7719eec0271"],["page/3/index.html","9b3a80f6585d59e3d0233af1cc764819"],["page/4/index.html","61ec51c469b865a25936ac2e32c620c6"],["page/5/index.html","b5b335f36c0f98db672ecaa584148de9"],["posts/2019/12/04/00/35.html","fab7037b40d57acd19490393605103d1"],["posts/2020/01/15/20/18.html","2c1c103bb9508410928413829fe0876c"],["posts/2020/01/16/22/18.html","e6fb278012b298469569325ccec3b827"],["posts/2020/01/18/22/18.html","7e71b0aa5e318f5e0b013d7d31417c7c"],["posts/2020/01/19/08/29.html","cff66c54692b361688952271dc063f1f"],["posts/2020/01/19/22/18.html","ee85cfabc91937616c2f2fa8f954a801"],["posts/2020/01/23/22/16.html","71c2435082158d133dfba4d53604c838"],["posts/2020/02/04/20/18.html","a615182c923de72cbc2afd15b226211f"],["posts/2020/03/12/00/20.html","929c33bad4f85defdde9df5c62d25910"],["posts/2020/03/20/22/12.html","02e2578bfa3c285be38ecaa5629fa429"],["posts/2020/03/22/18/24.html","98688e9d24cf64f1902035ab1a09c646"],["posts/2020/05/03/22/12.html","461f387c5d7a37c23d92e4e2b1e5dd09"],["posts/2020/05/04/00/05.html","e0abfc907f9e3696ec52bf0437812877"],["posts/2020/05/04/00/09.html","de43aa8c61fb716edd03ad0f5938988a"],["posts/2020/05/04/00/15.html","7812d1deb8c810d55dfee925bf4b06f8"],["posts/2020/05/04/14/58.html","fe84430aecc5e76f5c4189ae2ad5fdaa"],["posts/2020/05/04/17/01.html","2c9e453f362555b04618a49133102f6e"],["posts/2020/05/04/17/19.html","9cb22c12a0a0383c3c07dfba63b17b4e"],["posts/2020/05/04/18/18.html","7193f505df3defa65fd8751e305afcd2"],["posts/2020/05/04/18/24.html","6d652aa04bead67b676271cd0dbae30e"],["posts/2020/05/05/11/12.html","558280bbfca637493c6ff17aa886b5a6"],["posts/2020/05/05/13/20.html","e0a87f93c806202996790acfc8e0a25f"],["posts/2020/05/05/15/20.html","c00182eaf6f98dfc8e12e3dcf4e025d9"],["posts/2020/05/07/21/21.html","094d35896cb711d44cd46e8b6035ba69"],["posts/2020/05/09/12/20.html","3a91aa7b2f750549c2a014e83530b4dd"],["posts/2020/05/10/18/18.html","6b0166d70f09af0fb70dbea2d27833b0"],["posts/2020/05/10/22/18.html","5a27078e7f1235eef480fe27d119d70b"],["posts/2020/05/12/20/18.html","bd418e625840713e21de3d6b1845f6f3"],["posts/2020/05/12/21/18.html","58e19513450c856bf45631719b1596c9"],["posts/2020/05/13/20/18.html","958b937c32438b296f78bf07da2e7d49"],["posts/2020/05/13/23/58.html","6bc8b6886e9c309936f2b290da27e166"],["posts/2020/05/14/11/18.html","6b1ebe60d36031b69f61dcc2325c62a5"],["posts/2020/05/14/12/18.html","8c1949d5477756a9db053d095beeecd7"],["posts/2020/05/14/20/18.html","b51e25d812147c08e94b91fe1c86bbb8"],["posts/2020/05/14/20/58.html","cda303780b12de3a2edbd9471e21506a"],["posts/2020/05/14/21/58.html","ced01bdb5f4525f425b33f2ab901a3fc"],["posts/2020/05/14/22/58.html","5b1bd55abf44a3d71e6c933fa16f5aab"],["posts/2020/05/14/23/46.html","6115bce26008d342a45118fb715eec51"],["posts/2020/05/14/23/56.html","6078e3369f7ffeff10e838e57448876a"],["posts/2020/05/14/23/58.html","e485ba4a992aa4bc0d85760ce84e9114"],["posts/2020/05/14/23/59.html","e9193c67d21c1e3d4751927297fad411"],["posts/2020/05/16/20/40.html","482cc70e2bfd1a161f76b89424e547cb"],["posts/2020/05/16/21/40.html","428e5129c8123dd536ca356f831ab4e8"],["posts/2020/05/17/21/03.html","5e5333b80d1c20e0ff3ec114e41e1010"],["posts/2020/05/17/22/42.html","ee58251f7d86fa1ea9fe47bb9845a554"],["posts/2020/05/24/07/03.html","49264430ad965d07f767cfd2e29a8cdf"],["posts/2020/05/24/13/03.html","a3c9b6fc068118b27f9cbbce53aaac5e"],["tags/AGV/index.html","fc1c1459321bc90d98203b718e6472df"],["tags/Github/index.html","322f1a3ecd6deaa91e5d7271f016bfb5"],["tags/Markdown/index.html","0e7eff0cc49ea1386bfa1d921a8094c5"],["tags/Move/index.html","2c970640332d31d32499e870198863b7"],["tags/OpenWRT/index.html","1d375c87881cecb429ec7505248febf9"],["tags/Plant-Simulation/index.html","2ff2d0cec73d61e08eed33c84a139af0"],["tags/Wordpress/index.html","8ae0a30e13e378591740dcf76509d00e"],["tags/buntu/index.html","e380fd9ef634b04c9a3dfedf5e83b0e7"],["tags/cad/index.html","5a5713801eb894df27e761199872c7d8"],["tags/coding/index.html","15472116453137643136f9abe06fab06"],["tags/h5ai/index.html","69376796b139c0c931443ba95cbcbc46"],["tags/hexo/index.html","56f6fe33e00ca9e59d8d9891670e1ab5"],["tags/hosts/index.html","587822be323ee349dc12183ce1be9f0a"],["tags/index.html","e3c767b1586fd8cad561a080e4a0d6ee"],["tags/lychee/index.html","b8765479268d095921a956a2d474477c"],["tags/nas/index.html","ebb2c89b80eec407e3c42b46bc7563dc"],["tags/tpyecho/index.html","60c9c47177481df3b05c6bd26c3b9702"],["tags/transferstation/index.html","b6c7d8219acc89cb9eb09e1558392044"],["tags/typecho/index.html","a1b261e2ca27a167b894e0d5d63cd900"],["tags/ubuntu/index.html","4e546460043be510ecf8d5ef2556ac1c"],["tags/写给宝贝的话/index.html","3414d247a2bdcf37b1e01577b1ca5eca"],["tags/原创/index.html","ec135201ff207a9dd57d4a8357a6f6e4"],["tags/学习/index.html","303ca192362d7444f198f01ecd68d294"],["tags/宝塔/index.html","942c31bd254c0d11edc233ae23102757"],["tags/生产模式/index.html","79f1ecc7263884e352c8a4aa713e7618"],["tags/百度客户端/index.html","a8083d1e52eb368b1021015453bf44ea"],["tags/科学/index.html","5f45649796195f3aecaaedeaef31a94f"],["tags/统计/index.html","809d46f2eae6bcaecee478652c013ef6"],["tags/编译/index.html","b7d27989b61a9b875ee17c4bdf3ca6fe"]];
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







