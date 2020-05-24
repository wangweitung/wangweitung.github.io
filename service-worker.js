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

var precacheConfig = [["about/index.html","db1d4150621967922c4415dade161629"],["archives/2019/12/index.html","c7fb7e7bbc49b7b0636ca8f47888f1c8"],["archives/2019/index.html","a65370769f33d98c6d9960f369f1255f"],["archives/2020/01/index.html","fbe5fa56fc212b736b04ff67aafeaec3"],["archives/2020/02/index.html","ccb29f1c9d9660791849f2bfe6fc6469"],["archives/2020/03/index.html","fcd1d2f6e4bb9ce620cdb992a7a2640e"],["archives/2020/05/index.html","093f990e368c1ae4916ceb40bf2f64cd"],["archives/2020/05/page/2/index.html","0d2795893bdaa2eba6bfa4c6eb69b937"],["archives/2020/05/page/3/index.html","97986fbf5503668f10f248fc4c78ad4d"],["archives/2020/05/page/4/index.html","f797c0b56d04eaf39329d5a0340774c9"],["archives/2020/index.html","e5b10d0eaae1b3910d4ae00867439eba"],["archives/2020/page/2/index.html","9c251cf8b4355a2596757d7526398024"],["archives/2020/page/3/index.html","a43ce8b222894606cc5749d6d9298369"],["archives/2020/page/4/index.html","2d5d782cd0f5b1db84efd8e996a58b04"],["archives/2020/page/5/index.html","06e7deff67ac215db1361a21aa9b4197"],["archives/index.html","bb5abe65e18d60b125c32ed7b80cbf27"],["archives/page/2/index.html","496b73d1e8831dc173616548daeb3739"],["archives/page/3/index.html","3394784c201528245269075cffc01417"],["archives/page/4/index.html","89d439c54b043371e0ef1234fea8a223"],["archives/page/5/index.html","2234424b95a5ce66dd1c4d4a0686b870"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","40cb68ffc6eb891e172e7029f697a82a"],["categories/Code/index.html","a51b7aabcc5a80528bd3bff1d8143807"],["categories/OpenWRT/index.html","eceb50fed4e52ac5fa2b9f12dc8ac80c"],["categories/Plant-Simulation/SimTalk/index.html","a055a6721ce132cbdbb04a9df3ba3879"],["categories/Plant-Simulation/index.html","a55002eb1cf00e60ed7451336b9bf912"],["categories/Plant-Simulation/实体/index.html","3a19b37c164fbba194c2e072acda4c51"],["categories/Plant-Simulation/常用代码/index.html","2ccaef92fca960abab8800883e210984"],["categories/Plant-Simulation/常规操作/index.html","97d20c3e4669bcdd2ed3e55a4f99bc54"],["categories/Plant-Simulation/模型/index.html","6c42541ba3f9677a0514cb8a70d2d871"],["categories/Plant-Simulation/背景/index.html","639f90e7ba2a64e543ccf031022375e4"],["categories/index.html","3a54496719a50e2563327777add94207"],["categories/nas/index.html","6b87243d8ffe851bf5ce6293869ff0f9"],["categories/ubuntu/index.html","0a4097f879552f8216d7487491d68aaf"],["categories/ubuntu/ip/index.html","2fc06f0a94a26be797209043c2fc2af0"],["categories/ubuntu/下载/index.html","6dbcd1af527d556aa5c90543996e9ab5"],["categories/ubuntu/命令/index.html","4e802bbc069734658e933728c04ad8ff"],["categories/ubuntu/配置/index.html","2a79405d2cfbc947039c87f14a6e8062"],["categories/博客/Wordpress/index.html","8817b02e3def283003afb387c9b30add"],["categories/博客/hexo/index.html","53e355b8306cf3932c26c03a6d4f37eb"],["categories/博客/index.html","f721840150f39ec5bd6c3f7ff9efa04c"],["categories/博客/page/2/index.html","15ae755ca9e389f3517bf447a4e68168"],["categories/博客/typecho/index.html","dadcb64dbd555baccd8fdde18c9985b3"],["categories/博客/统计/index.html","4c2ec544b3efaaa322968bcb06e3760b"],["categories/宝贝/BB/index.html","52dbcb3ea018dcbdb4518fb5a0a4a418"],["categories/宝贝/MM/index.html","34676c74cd4c13851c744a3286ad5d42"],["categories/宝贝/index.html","8bc20fc0dafe51eaa63046f791a76e05"],["categories/思考/index.html","8a78f3232005695708c7680c6e2b4e4d"],["categories/思考/职业规划/index.html","3f516f8ff1d73742f3242b41613f4cd9"],["categories/科学/OpenWRT/index.html","06772c2052868598ad0b9f695f498f49"],["categories/科学/index.html","8902711c2230a3daa08410f62687dac3"],["categories/科学/手机/index.html","ca07d419dd6f84c6381d9466bf06f5cf"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3b3c2c530f7e6f933d097fea79276599"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0f5290a0508b5cbc6dd443d8e11a0d05"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ad70dbd7f89a8323bfa1a540892a0fef"],["movies/index.html","ea2f74253516298b7b3a8ca1f387f9c7"],["music/index.html","1166ffeda9098145ec3b9ce06fc97b98"],["page/2/index.html","be26c43ba4fd2f9187ad84f1d72d35d2"],["page/3/index.html","15f8d93eeedad89f2966050164ae83f2"],["page/4/index.html","414cf4b42386dbc652ad0a4cb8f60ef4"],["page/5/index.html","6729d73d9a70aeaeec96fdca258fe3f3"],["posts/2019/12/04/00/35.html","8a8ff64dc53fd5438a4653d4a1dfb3bb"],["posts/2020/01/15/20/18.html","b8265e259c44db6a89e867db63d30501"],["posts/2020/01/16/22/18.html","d7c27e161e579cd61f8ea11b138ce048"],["posts/2020/01/18/22/18.html","4ffd8480d25606c02c7246e1b4461138"],["posts/2020/01/19/08/29.html","95543ef0e7a3dc565c8cadf168b1cb6e"],["posts/2020/01/19/22/18.html","faf644008653bda5e3edf68abde9e208"],["posts/2020/01/23/22/16.html","fdffa4018ce2a943c8e6de0499ad6a04"],["posts/2020/02/04/20/18.html","73741da11b9b213d04eeaa9e0b583fac"],["posts/2020/03/12/00/20.html","02c060ac6d5b2590ba5ef6f7cf27d7fc"],["posts/2020/03/20/22/12.html","966ac8a5c917576a15c09df722ea470e"],["posts/2020/03/22/18/24.html","d446233a7902680156a69ddb933fa2d3"],["posts/2020/05/03/22/12.html","9589af071d7b361121247b2bccd69849"],["posts/2020/05/04/00/05.html","daad465a803d7b8f308120537477d398"],["posts/2020/05/04/00/09.html","56b77d3fd784c96747ec4ee292f9f930"],["posts/2020/05/04/00/15.html","29e0369febbfa891b205ff5d52252fd8"],["posts/2020/05/04/14/58.html","de10d4dfd759f179dc3eccd554d0bf07"],["posts/2020/05/04/17/01.html","dbea269533f24155493695514740c0f8"],["posts/2020/05/04/17/19.html","aa0d3b436aac699fdfa077946e4d89dc"],["posts/2020/05/04/18/18.html","d2e94e46ea379a5e7272e5f8ddda9fb9"],["posts/2020/05/04/18/24.html","d2699ff13cb8779dcf9ba19737e6e863"],["posts/2020/05/05/11/12.html","61e3dab044e7961753b02278477f8db8"],["posts/2020/05/05/13/20.html","f7d7ee08989191bc055d31e50017b01b"],["posts/2020/05/05/15/20.html","a4abdbbb9ce0587a70f852e61fc28892"],["posts/2020/05/07/21/21.html","c432b4fa3176669e9e78d02358d57e67"],["posts/2020/05/09/12/20.html","0eeed2bcd259da39ddbd466234fecc1f"],["posts/2020/05/10/18/18.html","2e7177ddd6bc34b20fb145547bb90a98"],["posts/2020/05/10/22/18.html","0d133a1a2e9ea5144b9f8ee9bfbbd910"],["posts/2020/05/12/20/18.html","a8f99aece042d42c6f99faea9d3aa106"],["posts/2020/05/12/21/18.html","e83762d761d52d6c140e235384016afc"],["posts/2020/05/13/20/18.html","d7ec5468c53b0a4b084ba4fb6176bf3e"],["posts/2020/05/13/23/58.html","b600c64f2d361629206c6fa625561a4c"],["posts/2020/05/14/11/18.html","381ec9e49f2e15481e94ae06c63945e8"],["posts/2020/05/14/12/18.html","d65c2e6ce865533543e639d1fe877900"],["posts/2020/05/14/20/18.html","41bb02196f85501aa95b3fb25b41f5b3"],["posts/2020/05/14/20/58.html","c8cbcc938ca7c90ee83b844c305e586d"],["posts/2020/05/14/21/58.html","f3d9436f70286f53d80600d8afd80c07"],["posts/2020/05/14/22/58.html","d3afa877c4f5975e7b3dc482bb3573a4"],["posts/2020/05/14/23/46.html","ead177c4851995e57e6bc610b70084e9"],["posts/2020/05/14/23/56.html","b44a45d95fa18ff8ef1abebf359e9c12"],["posts/2020/05/14/23/58.html","8840ee05f2271230da274687d6140fab"],["posts/2020/05/14/23/59.html","0074789d42c1a8ac53aeb41aacc4c8d6"],["posts/2020/05/16/20/40.html","71baa7197ddf0c1d9fb4881f29f18db2"],["posts/2020/05/16/21/40.html","ccea46ba5a5e76e6833b966d746b9978"],["posts/2020/05/17/21/03.html","ee5f139228bba2892efb3f849f452b3e"],["posts/2020/05/17/22/42.html","fbe816f58876157e60fa1b9bab2d84cb"],["posts/2020/05/24/07/03.html","fd0b6826bd1bedf5fb96d9f907f6f60b"],["tags/AGV/index.html","5d98e8cdc59c4e8d836e0104fda39205"],["tags/Github/index.html","b5a4fdbbdd345a69aabf56e8b997fe6a"],["tags/Move/index.html","09a8969fc042d9f1bf3232e0ad66a4ba"],["tags/OpenWRT/index.html","37a60060f62f03cb30b27e4b43a0de3f"],["tags/Plant-Simulation/index.html","10bf98355b2ea7af96e3060bffcac612"],["tags/Wordpress/index.html","4eef3d724a97f175ebe854f385b56200"],["tags/buntu/index.html","16e43200a083df500dc602b421f536c0"],["tags/cad/index.html","10b9950b8a0cd7a508f4410f9e1b0ef5"],["tags/coding/index.html","842730ba441f62e4259670f32b02f6a3"],["tags/h5ai/index.html","aee9147255913948743d6d4bbe823d76"],["tags/hexo/index.html","ea463931874f05a48689f0c181bf46bb"],["tags/hosts/index.html","48750b8e8f0bb2f4755ac5403085cad3"],["tags/index.html","70ec39c103b767b96c0dca8174b34679"],["tags/lychee/index.html","8e17a83dce406a051d96b8ae63a80ead"],["tags/nas/index.html","17a9b7b707d9ae01e76701e4bea74045"],["tags/tpyecho/index.html","a91ca550afed20d25604984a9b2bdc2b"],["tags/transferstation/index.html","86b6a3ce3a62f32d12f518aecea0e1ae"],["tags/typecho/index.html","ab0a2f98fadfc4dd0250d7db7891a4c7"],["tags/ubuntu/index.html","4e7a96c1bd1b837444b73b52e55ac47b"],["tags/写给宝贝的话/index.html","f5e08b172bbd4a4b187e8f5202a9adcc"],["tags/原创/index.html","8cf8860ef4c7aad6131a8e3ecd134d33"],["tags/学习/index.html","e52ed0fd302164de851e4c00e42ba77a"],["tags/宝塔/index.html","f2d2d20e248e64c7625e1c50f42c9b69"],["tags/生产模式/index.html","bdbe297582e0d4ac1078647ef39603c1"],["tags/百度客户端/index.html","6b3d5bbdc3a999f75edc807f51794fa4"],["tags/科学/index.html","a1d2e30a3ae9f4bbffae7a98851b9359"],["tags/统计/index.html","7c9beb5df01b6cef982f38697109703f"],["tags/编译/index.html","993cf0a8e2880350dd9523930ab117b4"]];
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







