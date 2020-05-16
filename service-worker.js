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

var precacheConfig = [["about/index.html","9b11c3ee5371c2987944d35f661e346e"],["archives/2019/12/index.html","04a06f34db44d3a491e47734cb58f035"],["archives/2019/index.html","120adee3656e68e8126d6b83bf5cf12b"],["archives/2020/01/index.html","6d58b60b42ddfd07c4a4b9d2a08c74a1"],["archives/2020/02/index.html","a171df931b0dec740b6b9e291fa94f15"],["archives/2020/03/index.html","532c49f5df441be4a0f799237e7dc033"],["archives/2020/05/index.html","866e86ea12572eef08ccb1af0696c29b"],["archives/2020/05/page/2/index.html","30bc71244e713899d550a74ccb95a65e"],["archives/2020/05/page/3/index.html","431c4efaa5a90a09cba0fc2dfa0fdb4b"],["archives/2020/05/page/4/index.html","bd1b171b6e25607b324d060e4dfb6308"],["archives/2020/index.html","8bac644f817eab285f02d5ab8d33c72a"],["archives/2020/page/2/index.html","7d8e3a6c3b401cf6c44d3e052c56c3ae"],["archives/2020/page/3/index.html","8a815c29f16a6920224db85b0300a611"],["archives/2020/page/4/index.html","626c5bad79a1af3922c00524f3eb3aaf"],["archives/2020/page/5/index.html","ba5897d75999459660922d0afaa1a583"],["archives/index.html","0bb593ef1c5868e5e328d06293c39a51"],["archives/page/2/index.html","41a84f8425f88179364e9ca71622c0e7"],["archives/page/3/index.html","e2522fefd52e5ee6783058fc725bd6ee"],["archives/page/4/index.html","f02017c600126a8872c9a4d084d0c1e4"],["archives/page/5/index.html","58ccd5f136d3b29e097e5dc4ef53a1f6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","885398d4e03d7f39ea17bf08f6600a3b"],["categories/Code/index.html","cfc16cf6436e8d414673e80a6f8b3333"],["categories/Plant-Simulation/SimTalk/index.html","bf4189a83d07cf135ce771cb7e5bc8de"],["categories/Plant-Simulation/index.html","8e01403339f913908c62981fd89676f3"],["categories/Plant-Simulation/实体/index.html","1beb60f010c094ef8828e4f4a1c5ec67"],["categories/Plant-Simulation/常用代码/index.html","2cc6b4f3432ac7d1fde087c60fa6b673"],["categories/Plant-Simulation/常规操作/index.html","3332f32c954ec3083ef0dbbe993fcdf3"],["categories/Plant-Simulation/模型/index.html","71ddce2eb15885974cf35871684e6cd5"],["categories/Plant-Simulation/背景/index.html","eb87a1997d2f7feb9b38456eb27c618e"],["categories/index.html","975cd416b56a239dc204ad224668cc7f"],["categories/nas/index.html","eb2336c295e440f0ba587986aa006bcb"],["categories/ubuntu/index.html","08072fdb48d61400b0d863629d9556f6"],["categories/ubuntu/ip/index.html","87cf83cd5f068b4c86ce0e27b739bdc3"],["categories/ubuntu/下载/index.html","f163f73414aac0f1d9937c248891e668"],["categories/ubuntu/命令/index.html","54034dc3408647a097ba2d2f9b9b3616"],["categories/ubuntu/配置/index.html","802c24230afa7ff1a2c3efe6fcfe5e0a"],["categories/博客/Wordpress/index.html","5b60e3f06a0d0afc7e16cc0954fdedd1"],["categories/博客/hexo/index.html","0166f7a4bf99f92883cac16c4bbd000c"],["categories/博客/index.html","1f4bf5fe07fa74581e8cadc8876eb6fc"],["categories/博客/page/2/index.html","152992c9d3712a9173ddc1d5b1b67986"],["categories/博客/typecho/index.html","684c183a0185ecc446cfa53b83c8c01a"],["categories/博客/统计/index.html","0af92d54f578d519e073cd71fef95184"],["categories/宝贝/BB/index.html","a59703d480d338d383c0207ad183d897"],["categories/宝贝/MM/index.html","4d5c88d0c410477985033113dff5138c"],["categories/宝贝/index.html","2b92e276b7938e551f81159b10a4bf01"],["categories/思考/index.html","a1e0dac34a7df82e9238f4ffb0ea9e93"],["categories/思考/职业规划/index.html","467a93f06a5bb7aaa1089a0271f88eaa"],["categories/科学/OpenWRT/index.html","3e361f0d3cccd1184915fa4de1f9cd8e"],["categories/科学/index.html","4f6ab28368118b576541dba02108c487"],["categories/科学/手机/index.html","545888a383cdaa6c263eca7ca93d8cbe"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","794f5163970d9571f3d45fb499b937d9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","223b757e2c4c2577414b24115734f95c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","383950816e4ec1dcf9e07e8ffd8e7ae5"],["movies/index.html","75c1460ee279b9a2cad44e5aa583f212"],["music/index.html","4050ec6739f41e2da2e2300d582d66ae"],["page/2/index.html","80b5740050ccf7569fb70d83bc3a1148"],["page/3/index.html","1e11729ed3defb40c2a7d09e1a597df6"],["page/4/index.html","a83525a105d53d2ce23261a35dd3d012"],["page/5/index.html","478369f9e4a59da773ffed66649ce787"],["posts/2019/12/04/00/35.html","bc0263131de1e0554e45f6975464c977"],["posts/2020/01/15/20/18.html","0414e02b0fce2ff4df69c79e5b9d405b"],["posts/2020/01/16/22/18.html","3e9fcb4f7fdecf267e8070a3d0de0fd4"],["posts/2020/01/18/22/18.html","3f6f85ca1dda44b1f51c93d297edf298"],["posts/2020/01/19/08/29.html","e51d16eb0ab8b2f6704055b8222d196c"],["posts/2020/01/19/22/18.html","230c6b52abd2d3facdd142a5e4646587"],["posts/2020/01/23/22/16.html","a20bc0675e5f13e7269e171fe0998ddc"],["posts/2020/02/04/20/18.html","3cb7920baa46801fe30abbdbd00d55c1"],["posts/2020/03/12/00/20.html","41e8edca75d1784a23bb044a1f44f550"],["posts/2020/03/20/22/12.html","c1c3bb16fa9aacab31d9299e652dcf60"],["posts/2020/03/22/18/24.html","2be7bdea4116d72ec1d4a4fab39904d5"],["posts/2020/05/03/22/12.html","778dc2d4409523cbcb4d4daa8ea88e9f"],["posts/2020/05/04/00/05.html","518ab9615f37c1ec4a9b1e369ff7f8f6"],["posts/2020/05/04/00/09.html","249019b48efc17ecff2879209b0e0387"],["posts/2020/05/04/00/15.html","2bef789ff8fa6b61b56d37698ba1aaf7"],["posts/2020/05/04/14/58.html","38ffca9b52c4214ac6219056f8d77cac"],["posts/2020/05/04/17/01.html","a43e28e464d0274f5f85809acd2b6eb8"],["posts/2020/05/04/17/19.html","8262e382eb1b52b879e5c2585aaa5baf"],["posts/2020/05/04/18/18.html","700fae82d410d523d27af8f5d66455d0"],["posts/2020/05/04/18/24.html","2ce37c3b57353ae977c5406dd15bb3b0"],["posts/2020/05/05/11/12.html","80817501de95da63aa098e265611e26d"],["posts/2020/05/05/13/20.html","263c0bdedb127650f80fcc7c440dca32"],["posts/2020/05/05/15/20.html","babbb7d36cea8b50baf36f441d5d9c0c"],["posts/2020/05/07/21/21.html","9b894f398e9e7d559384444e025d6ee8"],["posts/2020/05/09/12/20.html","54ee3239f315f139d76221cc10e365eb"],["posts/2020/05/10/18/18.html","a9cfd529de03f4ff8617c729f835b2b0"],["posts/2020/05/10/22/18.html","abb97a2b2855152c15804f2137bdc48b"],["posts/2020/05/12/20/18.html","40072d5f12d812da2167605d2b93a864"],["posts/2020/05/12/21/18.html","c36919d23572834896b1a3794fae9957"],["posts/2020/05/13/20/18.html","130f22230546a2aaeda72555ae16cc17"],["posts/2020/05/13/23/58.html","410c45f49f7dde0f6466cdc8a47261c8"],["posts/2020/05/14/11/18.html","04595d84878948710b4d10ead50eea0c"],["posts/2020/05/14/12/18.html","b9dfa86cb6f6d76ce0c7ec25bdce3298"],["posts/2020/05/14/20/18.html","0bec9a5b70a67e928e74e64f752e01bc"],["posts/2020/05/14/20/58.html","4195d1d0847abd089b9ccf9ad3a34707"],["posts/2020/05/14/21/58.html","f6a9d2f62e7973ef3655d1c8d6cd332d"],["posts/2020/05/14/22/58.html","78ab058b8b2cd0c3f0ba8a3b111dcdd4"],["posts/2020/05/14/23/46.html","9eb6730b23c82e32f49647efccae1db2"],["posts/2020/05/14/23/56.html","bf2e2719ae9f860c2bd1d1fd2ba26ad3"],["posts/2020/05/14/23/58.html","dbb903f70bfc450f7e84296c455686fb"],["posts/2020/05/14/23/59.html","d74ef01c90a2f4d5dc383f917f161acb"],["posts/2020/05/16/20/40.html","6cfa5a63324d747dc635d3d4889c4597"],["tags/AGV/index.html","7e6ffe6399db04f573d23e3004dc6018"],["tags/Github/index.html","ed05e1adc621f68480d72b5d40995d0a"],["tags/Move/index.html","7f13cd9c06c63ea81d4a0ad3fdb8d8ab"],["tags/OpenWRT/index.html","9610507b27974d0b86831b4b69feef48"],["tags/Plant-Simulation/index.html","08f0546c3d1e22a738822e8f7374b547"],["tags/Wordpress/index.html","7e50ccb192c31e7fbb981deb81b9aaec"],["tags/cad/index.html","fd15c8b3f57a25a40c7f4285a505370c"],["tags/coding/index.html","89d1795ae9c9e8c6afe337f5e59557e5"],["tags/h5ai/index.html","d3f33e0a156d4e01f2845af4fcdcd425"],["tags/hexo/index.html","febb7f8f494fcf880cd9ce927410179a"],["tags/index.html","04ef248833707a9f6af755c0e3c2410b"],["tags/nas/index.html","21bbb35aca5fda929ca55d4de4714932"],["tags/tpyecho/index.html","1a57231c8845d67b6593a2e4c1f84355"],["tags/transferstation/index.html","4bda25970141b183cd21f1e20a767da4"],["tags/typecho/index.html","3ab63dfc8a37ba0f40debf603b294271"],["tags/ubuntu/index.html","355af0832c7c725ede12301f8b43a43d"],["tags/写给宝贝的话/index.html","acdf04927ed0193e808d7547506e908b"],["tags/原创/index.html","55bd7a763f59fed6bb8ca8c68e8021eb"],["tags/学习/index.html","e28ea3d6d63bb95295723f6c11638218"],["tags/宝塔/index.html","0cc48d2c73f4e505c33450b07523b25d"],["tags/生产模式/index.html","fcff75feb1079e7b1d7ba592939c94a4"],["tags/百度客户端/index.html","d51eae0153992e1212bd9b6110b953c7"],["tags/科学/index.html","a64e3d3de42c2ad5e657ffbf8b0d3ac6"],["tags/统计/index.html","349acdb42f999af08081cba3195a5643"],["tags/编译/index.html","f86db307964417efe4536d81480cd6d1"]];
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







