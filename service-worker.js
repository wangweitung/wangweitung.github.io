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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","31ce32c3517ebc513920d53084339f6d"],["archives/2019/index.html","6aff2ac213f943620ea59513ab7f14c4"],["archives/2020/01/index.html","df0380cd878a0370f3f20ac84feaf49f"],["archives/2020/02/index.html","02b9710549c30c32683e6fb66f36de2b"],["archives/2020/03/index.html","777b6a0b1d7e0332505e9562a6939803"],["archives/2020/05/index.html","f00fee27f7ee42e2b7bbafea7ad751fc"],["archives/2020/05/page/2/index.html","38bbeed2e97705804a69891c39d1dde6"],["archives/2020/05/page/3/index.html","e9fc7014e4f85c0a10fe635ec8514737"],["archives/2020/05/page/4/index.html","eabc79efec22d2f96ee6e763e778f22b"],["archives/2020/index.html","9e09ae2e1616d2e40c52952bc8f9206f"],["archives/2020/page/2/index.html","bc2637a32d81daac16b1cf93ca6bd88e"],["archives/2020/page/3/index.html","4a555e40a4d01be42a1b981065582f4d"],["archives/2020/page/4/index.html","a74164d28a2103bad316eaf000f2dccb"],["archives/2020/page/5/index.html","5e94a5bf74c0243d7aea8e0a7b1f237f"],["archives/index.html","c4f85c8bba1fa5146cd2aa991caad61d"],["archives/page/2/index.html","0e09f62fc409be3c98f3da16222a5aff"],["archives/page/3/index.html","9719aebeac95d91136af6199b91301c0"],["archives/page/4/index.html","73407b02f05fcdde466049dde5e08e0e"],["archives/page/5/index.html","5e41aa8d2eeef3476af1191786bd63f6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","c26729d523f5edf25fa7c18cdb14c26d"],["categories/Code/index.html","e202b539d7844117165acdf25840217b"],["categories/Plant-Simulation/SimTalk/index.html","7ff549d6088fa3330bdb044ac5685dad"],["categories/Plant-Simulation/index.html","227630512abea6f6d3e28085196589bb"],["categories/Plant-Simulation/实体/index.html","dddc7b186376d8521816ce6b21530e69"],["categories/Plant-Simulation/常用代码/index.html","79772226f810b1e0e3727ed78a6f0da7"],["categories/Plant-Simulation/常规操作/index.html","21b627d37939a84453e7b526dc02f69d"],["categories/Plant-Simulation/模型/index.html","9f744a073916625fd09c9cce2610091c"],["categories/Plant-Simulation/背景/index.html","e7e46416bf302ee9d3dc61a3e89971ac"],["categories/index.html","869b3f9791b65fa7a49239f7cc644130"],["categories/nas/index.html","fecd6d9478958da8b23d89ce14a23c66"],["categories/ubuntu/index.html","d5305bc92c5e4fe96645e9fd0f156b70"],["categories/ubuntu/ip/index.html","ce0e4b78011faf7a73d18e297441813d"],["categories/ubuntu/下载/index.html","4135f062cd67d8f72664bde313941e18"],["categories/ubuntu/命令/index.html","27eb41b655bfe662e4da5bccade8e191"],["categories/ubuntu/配置/index.html","cf16d7a3d71ed7df7af5004e6355b292"],["categories/博客/Wordpress/index.html","49ec110a0031ed92c2640dc7f23e17df"],["categories/博客/hexo/index.html","468dec65229c94d2c40519d7fe367289"],["categories/博客/index.html","08a448753394b9e528685b0da0a84d0f"],["categories/博客/page/2/index.html","aee78d6169aa2e9cc792a112a30eb0ca"],["categories/博客/typecho/index.html","ed0c1739bbf9b0773feb8634c98c2509"],["categories/博客/统计/index.html","8c3b6150b9ea556ed3ff2debd72f0a59"],["categories/宝贝/BB/index.html","0725e4106c5f34ba54ea723f889ad205"],["categories/宝贝/MM/index.html","054cf4dcaba3fa72bf76268445489511"],["categories/宝贝/index.html","727452a810577095a1a575ba9e6c95ff"],["categories/思考/index.html","bcc59247a95e30b75fb45b0de01a8195"],["categories/思考/职业规划/index.html","6d7750a61c54df86b9f49d468180f1fc"],["categories/科学/OpenWRT/index.html","83ca23805002ed9c1a260d1ad7604f49"],["categories/科学/index.html","4b0c5d356c69e4cfea9d02203ed6eadc"],["categories/科学/手机/index.html","1646e729713eaafb6b0d1a79613bfb5d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d093b040cff1e2989f21904469a9c375"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","ff96532f4a1c5a4a667cf61a3a21ab16"],["page/3/index.html","cbbec0a977b36e45e30d6fd7150e094a"],["page/4/index.html","13ea796c59aa524c71d1727ce559ccb5"],["page/5/index.html","9e1f8ed1ed944484f5ff1f60ff3aa95f"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","49df8c4f58f7fd30054b29432dde5d48"],["tags/Github/index.html","e788ca64a174e6a340ad2352b05e1f9c"],["tags/Move/index.html","abaaf091a3cd2b3dfe93057a46721fa2"],["tags/OpenWRT/index.html","2081428912a0ffb6bf3747bf8277c2cf"],["tags/Plant-Simulation/index.html","965fac371a7c939d985425172af3bb82"],["tags/Wordpress/index.html","d5875a4811c92db0d12cc41254d240a2"],["tags/buntu/index.html","53108bc626edc6328ff764c3a7430085"],["tags/cad/index.html","75d649c0020721dacbfc92f5b9e6cb89"],["tags/coding/index.html","7c25212f69d5269b3afc4a5fe0611e95"],["tags/h5ai/index.html","6f57ccd74053c2d25472f61df8229d98"],["tags/hexo/index.html","a608b938b09d19ebb82961a85b1b3cd1"],["tags/index.html","4dac9020d4f8d717ec6dfcffca693947"],["tags/lychee/index.html","0e67c9154538809e373fa8e752de7a75"],["tags/nas/index.html","889151c58ec86bed1b3de21720d64c38"],["tags/tpyecho/index.html","ccdf6f40e5ff489ba4ecc9cbfe37f2bc"],["tags/transferstation/index.html","9539f54eb42283a3c0da28497a585295"],["tags/typecho/index.html","08193085e3d318944ee0bf3035a48872"],["tags/ubuntu/index.html","862c6ea3e2a3a37db9ed5e0855f9102f"],["tags/写给宝贝的话/index.html","58a19d429533717eb1a3e92fa66f8217"],["tags/原创/index.html","b8e02a27bf6992ccb00d11b97eb86b27"],["tags/学习/index.html","e54eb906221be599fe1eafec740fefe1"],["tags/宝塔/index.html","6c17073c13d88a42556c4d623592d794"],["tags/生产模式/index.html","b9590caf0190cd04f39ae63fa8e746c7"],["tags/百度客户端/index.html","4d2ec0073a013461565f3e368c045c84"],["tags/科学/index.html","e7d15b067525ebee48a2a123a0b4a9d7"],["tags/统计/index.html","6c83a98484e2430240b6d939f5e75f56"],["tags/编译/index.html","8090cd8f0f0f3d27170b376f443f7aed"]];
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







