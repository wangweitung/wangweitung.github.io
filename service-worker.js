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

var precacheConfig = [["about/index.html","db1d4150621967922c4415dade161629"],["archives/2019/12/index.html","296718a047a3c34b9e0f38bc1737ff1f"],["archives/2019/index.html","3dfb3d807abb50592ef56038f36ad8bf"],["archives/2020/01/index.html","3b643445750c522735e6e5a00fcfaeee"],["archives/2020/02/index.html","62715cb4fb932a038e068edf396f031a"],["archives/2020/03/index.html","f58f8b7d7645310668b3108fe6c8f462"],["archives/2020/05/index.html","8b40d0b7a05c70a642464284596b756e"],["archives/2020/05/page/2/index.html","47c58ea04038ce97882aa926f4885694"],["archives/2020/05/page/3/index.html","5b68f8a719f7452880e2ef0983f06b31"],["archives/2020/05/page/4/index.html","e68e03915640760261c7daa058d9b7a2"],["archives/2020/index.html","a03ef4f1ce73f9be57058822a9834e20"],["archives/2020/page/2/index.html","910387c7ce3869f543c4fc4dc8e846bd"],["archives/2020/page/3/index.html","a8574bb12b5cd15c8a376c883189f745"],["archives/2020/page/4/index.html","2d67dc32737ca29c52a7612768e0a54d"],["archives/2020/page/5/index.html","e666a5096ea3fa42e21ba63045172d18"],["archives/index.html","7c6cf455d1d647c1447c96690d3c934f"],["archives/page/2/index.html","0143c64c4e4e54aa756ab500d00077cf"],["archives/page/3/index.html","250bc31f7f9059db08435407862f55de"],["archives/page/4/index.html","55ad7d1c34796893a12d109da0e85c25"],["archives/page/5/index.html","e27d8be72be9ed6f2b67c60a06af5c38"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","658cb4125aa1639c637273f4f01e2405"],["categories/Code/index.html","1a1433573103b1d58a5f9e4b56478474"],["categories/OpenWRT/index.html","be4df2deeab99027fde6070a842eeef0"],["categories/Plant-Simulation/SimTalk/index.html","a6506e6d9e3c020734bfec7a5765f11f"],["categories/Plant-Simulation/index.html","008d9a404d69915fabfecdd758caf052"],["categories/Plant-Simulation/实体/index.html","cedbfac143dc8e7be189332f64aafd7c"],["categories/Plant-Simulation/常用代码/index.html","c7c9cd26efa98e9f16ca88e5bc8fe77b"],["categories/Plant-Simulation/常规操作/index.html","d4e1db74a86e26cfdafdffda7ddb4335"],["categories/Plant-Simulation/模型/index.html","4d054f9cbc7533202880ff27d11b00db"],["categories/Plant-Simulation/背景/index.html","d01170e68d984c17fdacaf38be82ba7b"],["categories/index.html","3a54496719a50e2563327777add94207"],["categories/nas/index.html","332a1db959e1caff0a66204fe35d472d"],["categories/ubuntu/index.html","4764a34b2420add7f37e9293621519d4"],["categories/ubuntu/ip/index.html","cfdbbbc37180cb3421abfcff8efcb635"],["categories/ubuntu/下载/index.html","835a1249162b7cc4e66ad45c8d381db3"],["categories/ubuntu/命令/index.html","d4fbabb1ce6f4c4af3f39ad559430f53"],["categories/ubuntu/配置/index.html","7dab2dcd35369438317e06a84c6d0b6d"],["categories/博客/Wordpress/index.html","98c8517cec295f7895dde17c1241384b"],["categories/博客/hexo/index.html","f6dfd44cfe35bc84a395993e13761beb"],["categories/博客/index.html","b42c3dc57868d47ebe06fd788bf6215d"],["categories/博客/page/2/index.html","40feed733b34a779ae376ec280c3b2ff"],["categories/博客/typecho/index.html","ca2d409fbabe08deed61489ad7b9d3d7"],["categories/博客/统计/index.html","2ffe9c2ade614332e78bf84f757a3c83"],["categories/宝贝/BB/index.html","255e9b47fcc0b1c3c70cd023891fee6f"],["categories/宝贝/MM/index.html","f17323e63007bb95e3ba3135cb0536d6"],["categories/宝贝/index.html","542739674a08546c28f5145fb60e0164"],["categories/思考/index.html","4abb9883bc9e966663fceb6847c502e9"],["categories/思考/职业规划/index.html","907987d05710ce82f5dab760732150f2"],["categories/科学/OpenWRT/index.html","f66b05c61232f8f8891d0ae271866f9e"],["categories/科学/index.html","239312b9b800baf49dd23d26c841a16c"],["categories/科学/手机/index.html","a88bcb726c12f122f44d0d489cb874db"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3b3c2c530f7e6f933d097fea79276599"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","a2e0d545d6cd5f8022b0ef7a72e79fce"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ad70dbd7f89a8323bfa1a540892a0fef"],["movies/index.html","ea2f74253516298b7b3a8ca1f387f9c7"],["music/index.html","1166ffeda9098145ec3b9ce06fc97b98"],["page/2/index.html","bac7ca8992d6eb8ceb87ec2105efdfa5"],["page/3/index.html","a4ece78eae05f1906ce61cc02706505b"],["page/4/index.html","1c9fe77a387d8c0932b20a930bc322bc"],["page/5/index.html","913bd31876b5a95deefe4166ec6705f9"],["posts/2019/12/04/00/35.html","8a8ff64dc53fd5438a4653d4a1dfb3bb"],["posts/2020/01/15/20/18.html","b8265e259c44db6a89e867db63d30501"],["posts/2020/01/16/22/18.html","d7c27e161e579cd61f8ea11b138ce048"],["posts/2020/01/18/22/18.html","4ffd8480d25606c02c7246e1b4461138"],["posts/2020/01/19/08/29.html","95543ef0e7a3dc565c8cadf168b1cb6e"],["posts/2020/01/19/22/18.html","faf644008653bda5e3edf68abde9e208"],["posts/2020/01/23/22/16.html","fdffa4018ce2a943c8e6de0499ad6a04"],["posts/2020/02/04/20/18.html","73741da11b9b213d04eeaa9e0b583fac"],["posts/2020/03/12/00/20.html","02c060ac6d5b2590ba5ef6f7cf27d7fc"],["posts/2020/03/20/22/12.html","966ac8a5c917576a15c09df722ea470e"],["posts/2020/03/22/18/24.html","d446233a7902680156a69ddb933fa2d3"],["posts/2020/05/03/22/12.html","9589af071d7b361121247b2bccd69849"],["posts/2020/05/04/00/05.html","daad465a803d7b8f308120537477d398"],["posts/2020/05/04/00/09.html","56b77d3fd784c96747ec4ee292f9f930"],["posts/2020/05/04/00/15.html","29e0369febbfa891b205ff5d52252fd8"],["posts/2020/05/04/14/58.html","de10d4dfd759f179dc3eccd554d0bf07"],["posts/2020/05/04/17/01.html","dbea269533f24155493695514740c0f8"],["posts/2020/05/04/17/19.html","aa0d3b436aac699fdfa077946e4d89dc"],["posts/2020/05/04/18/18.html","d2e94e46ea379a5e7272e5f8ddda9fb9"],["posts/2020/05/04/18/24.html","d2699ff13cb8779dcf9ba19737e6e863"],["posts/2020/05/05/11/12.html","61e3dab044e7961753b02278477f8db8"],["posts/2020/05/05/13/20.html","f7d7ee08989191bc055d31e50017b01b"],["posts/2020/05/05/15/20.html","a4abdbbb9ce0587a70f852e61fc28892"],["posts/2020/05/07/21/21.html","c432b4fa3176669e9e78d02358d57e67"],["posts/2020/05/09/12/20.html","0eeed2bcd259da39ddbd466234fecc1f"],["posts/2020/05/10/18/18.html","2e7177ddd6bc34b20fb145547bb90a98"],["posts/2020/05/10/22/18.html","0d133a1a2e9ea5144b9f8ee9bfbbd910"],["posts/2020/05/12/20/18.html","a8f99aece042d42c6f99faea9d3aa106"],["posts/2020/05/12/21/18.html","e83762d761d52d6c140e235384016afc"],["posts/2020/05/13/20/18.html","d7ec5468c53b0a4b084ba4fb6176bf3e"],["posts/2020/05/13/23/58.html","b600c64f2d361629206c6fa625561a4c"],["posts/2020/05/14/11/18.html","381ec9e49f2e15481e94ae06c63945e8"],["posts/2020/05/14/12/18.html","d65c2e6ce865533543e639d1fe877900"],["posts/2020/05/14/20/18.html","41bb02196f85501aa95b3fb25b41f5b3"],["posts/2020/05/14/20/58.html","c8cbcc938ca7c90ee83b844c305e586d"],["posts/2020/05/14/21/58.html","f3d9436f70286f53d80600d8afd80c07"],["posts/2020/05/14/22/58.html","d3afa877c4f5975e7b3dc482bb3573a4"],["posts/2020/05/14/23/46.html","ead177c4851995e57e6bc610b70084e9"],["posts/2020/05/14/23/56.html","b44a45d95fa18ff8ef1abebf359e9c12"],["posts/2020/05/14/23/58.html","8840ee05f2271230da274687d6140fab"],["posts/2020/05/14/23/59.html","0074789d42c1a8ac53aeb41aacc4c8d6"],["posts/2020/05/16/20/40.html","71baa7197ddf0c1d9fb4881f29f18db2"],["posts/2020/05/16/21/40.html","ccea46ba5a5e76e6833b966d746b9978"],["posts/2020/05/17/21/03.html","ee5f139228bba2892efb3f849f452b3e"],["posts/2020/05/17/22/42.html","fbe816f58876157e60fa1b9bab2d84cb"],["posts/2020/05/24/07/03.html","fd0b6826bd1bedf5fb96d9f907f6f60b"],["tags/AGV/index.html","3c8ba9fda59def2e58b5fb986e9471f2"],["tags/Github/index.html","bef02a60fa0df11a686ca9789775f38c"],["tags/Move/index.html","8c953eb9ab6572be621e3ef0780bb3f8"],["tags/OpenWRT/index.html","50305f257029bb2fc990f5cacb4affc0"],["tags/Plant-Simulation/index.html","6b2debf606c3658bcf5e2e6bad70cf8a"],["tags/Wordpress/index.html","cb1009e93e07729d3050c31546892fcf"],["tags/buntu/index.html","4bdcf434f7c2e6a4739b91c1b3e2f728"],["tags/cad/index.html","7b505e794b7393bdb2b61d03af4339ec"],["tags/coding/index.html","30031260355de2b038a604f68d28f945"],["tags/h5ai/index.html","0b4cc70766d645171c727f9227cf8d80"],["tags/hexo/index.html","eafbbff54675a7f37b510c754aa5b87a"],["tags/hosts/index.html","7be56bfdb35ef4beff60df4519f9e07f"],["tags/index.html","66a6843c81f442caa91572c741cee774"],["tags/lychee/index.html","65dc7cde4762f07782feca5bb53ebcb9"],["tags/nas/index.html","015d081f71f839c9e31e9eddad6d9c83"],["tags/tpyecho/index.html","61183891e574543da7898bac84806f01"],["tags/transferstation/index.html","f9d2dbe36c566c7e5112b92e777dab10"],["tags/typecho/index.html","3af8bb9f15a47c0dcb895978c5439d45"],["tags/ubuntu/index.html","9a40b5d42807a61ad5e8f7f345bbb33b"],["tags/写给宝贝的话/index.html","a29f7a99febc5ec468555db77b854c2c"],["tags/原创/index.html","14035fb484670c76fb24a1a3ca4ccc91"],["tags/学习/index.html","9a2063082f3e88cf27a91e29ec387761"],["tags/宝塔/index.html","f9ed1a2538c58208d60d511be48ab552"],["tags/生产模式/index.html","dca5544cc447d201c0788f1506f68908"],["tags/百度客户端/index.html","55ae2ec0e2224bbaa8e91c5721d09625"],["tags/科学/index.html","64372b7dc83b708e469fa606e59c14cc"],["tags/统计/index.html","cfdc097bc58f966bb0543db75e88f4f2"],["tags/编译/index.html","8960335e57bb5de5f8a8ca336beea1dd"]];
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







