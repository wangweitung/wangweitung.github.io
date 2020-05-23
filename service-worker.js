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

var precacheConfig = [["about/index.html","e8cb07eb476d62357bef4a6a75f3d558"],["archives/2019/12/index.html","dd2fb2ebfa023fb8bf6a058e5451ab2c"],["archives/2019/index.html","36a3f943453b5a2afe722d960b9f660f"],["archives/2020/01/index.html","d7c0d1fccbf9c814c0c3171174f8805c"],["archives/2020/02/index.html","11ade840197ced97ec2e08c693bf8224"],["archives/2020/03/index.html","bcdaf06322fb5832406a00e05f823f6c"],["archives/2020/05/index.html","f31895476c71f79b145241d7e85594c5"],["archives/2020/05/page/2/index.html","afb346bef63a0b90c4f6d1204f6b02fc"],["archives/2020/05/page/3/index.html","cc85b46ffb19610a1baba685ecb8f49d"],["archives/2020/05/page/4/index.html","fe4ebe5dc68350384fd8cf519188eea8"],["archives/2020/index.html","d8331a5a3337fa5d6422a8a28e54f464"],["archives/2020/page/2/index.html","25b270fa3a8c5f1522d678009a25f415"],["archives/2020/page/3/index.html","1f6261d79876e2b98821c19311abee40"],["archives/2020/page/4/index.html","ba37cb470ee830814110d55c99d08938"],["archives/2020/page/5/index.html","6b18f0b95ef0e5a373a41f1f9e84fe73"],["archives/index.html","5a7bc440d82ec4568f79caecf7c26b0c"],["archives/page/2/index.html","e5a97a4dbf40b8fa8e5bf9f6e07096a7"],["archives/page/3/index.html","36c5b5aaefde6623fbe4b58c9a119d71"],["archives/page/4/index.html","6ab83e363c84192600a6ef81fbbb6bce"],["archives/page/5/index.html","c73360c19c02fd6cde2240db15c13369"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","001e5d8aebba97fb48f99ce7a05c0df4"],["categories/Code/index.html","9d887fb5c36641bce06df1141f0f26bc"],["categories/OpenWRT/index.html","3e72e3c0dfd118b6344fa55c33b8d7ef"],["categories/Plant-Simulation/SimTalk/index.html","6547d98b63ad669656a3ced56132013f"],["categories/Plant-Simulation/index.html","ce427f401c748efb9989570fbaa1debe"],["categories/Plant-Simulation/实体/index.html","e76859a0ccda0b800a514e6c7ab0acbd"],["categories/Plant-Simulation/常用代码/index.html","b5e364b496c5446f85d9ce95496a0218"],["categories/Plant-Simulation/常规操作/index.html","cac565d5f54893ef6e9ffc1edaa47c98"],["categories/Plant-Simulation/模型/index.html","d4cbe0217e61532b46d11b0607caa39b"],["categories/Plant-Simulation/背景/index.html","d0df33ba6c1e3c54a9692dea38a6ecad"],["categories/index.html","a1cf8d67fd6529fbe01d72a92806104d"],["categories/nas/index.html","af280e26785447c13fb867c45ae46123"],["categories/ubuntu/index.html","222bcb04741473111a4ddb37828617f2"],["categories/ubuntu/ip/index.html","7e4f4abad05f6ba150c33cdd1182ffea"],["categories/ubuntu/下载/index.html","34e38337fa83b0fc98ef4260ebf1f24b"],["categories/ubuntu/命令/index.html","3fc3e731fc67e3f3ab5041c87aeb39d5"],["categories/ubuntu/配置/index.html","b0c50bbb0a5682a215b759b483f40e05"],["categories/博客/Wordpress/index.html","b437921196bde744c44e242f06a52633"],["categories/博客/hexo/index.html","7bad2fe3e2ed70f6c745b3deb89892c8"],["categories/博客/index.html","739f51ff71077070c8cb15bc9ded0150"],["categories/博客/page/2/index.html","1697905ab4d424ba15811c4e9b53a03c"],["categories/博客/typecho/index.html","5e840e18dd7e59b663397926cdc9f401"],["categories/博客/统计/index.html","4e78a8265ed04277d30a78f7c027e261"],["categories/宝贝/BB/index.html","01fd41e91ed163091baf5c01994e5b4f"],["categories/宝贝/MM/index.html","278e79f91c36bf5c8680b005bd1df17f"],["categories/宝贝/index.html","32f57d763002bf9419e12fdf237c7fd1"],["categories/思考/index.html","66677e12d895786490364d0a02565bd1"],["categories/思考/职业规划/index.html","3e3a2aec933842fee1e88c1ff2a81453"],["categories/科学/OpenWRT/index.html","dc2b6f3d57af5fad95ccf426e30be980"],["categories/科学/index.html","33b8fce9bd876ca350cb2e795867b7fa"],["categories/科学/手机/index.html","59053c30775c0134ff7afa639c6d714b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ab6e44aa194ce08e380be6ec8f7b5cfc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","facd3c60730c4109e30b5b24134f41a9"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","f7e0658e0fb83a4fef56d41fa21587ff"],["movies/index.html","9b786b132c4b34a072b30499b2d816ba"],["music/index.html","8273f63b0e9a68622289bdafaff44a4f"],["page/2/index.html","684481317277f4345f89fd45bd7de70f"],["page/3/index.html","f0d7e3341d9739d487e5dffb9e2ea394"],["page/4/index.html","31ca8176ba282f1c987fc1b9ad57ca0d"],["page/5/index.html","14601d0bb9477cc5b3bc04def3742e58"],["posts/2019/12/04/00/35.html","09e84ec01531caebc86d72fc23faf998"],["posts/2020/01/15/20/18.html","3fffe15b14bc4ce600939919ccc75db8"],["posts/2020/01/16/22/18.html","faf0fb4f504816c51e4101b4cfbde78b"],["posts/2020/01/18/22/18.html","38de52a071be3045fd565adffc8a4c68"],["posts/2020/01/19/08/29.html","610c0819f0ad66c169f039ef019b85ab"],["posts/2020/01/19/22/18.html","d7000191052090c29cddc7632598b09a"],["posts/2020/01/23/22/16.html","3987378db278d6fb38ef72fa7e64ba93"],["posts/2020/02/04/20/18.html","ebfa74047522d9ae6fb8bb418222d152"],["posts/2020/03/12/00/20.html","9a0ef0b1ca8c4d5dd78324bf6d8a9a94"],["posts/2020/03/20/22/12.html","d239c5383ee7066821816456997d6ee6"],["posts/2020/03/22/18/24.html","712ca0cb241be5b215b0cac8dd9787cc"],["posts/2020/05/03/22/12.html","243e6bf70a851bcbf494691346ed31b3"],["posts/2020/05/04/00/05.html","5584c8698be1573a6a1ecb06f9d045b7"],["posts/2020/05/04/00/09.html","aad2102728ea2b8189988030423d9809"],["posts/2020/05/04/00/15.html","a7b85ef0a001d11373021619b07d81c5"],["posts/2020/05/04/14/58.html","f3bf460ac5429eadb880a988e807b234"],["posts/2020/05/04/17/01.html","d491c981adf469a21fa435f74a3fba78"],["posts/2020/05/04/17/19.html","307cdce3697f9a4230f45e059a3cb5fb"],["posts/2020/05/04/18/18.html","ed7c51cec30536346a1c54c0158a6956"],["posts/2020/05/04/18/24.html","525261669bebc4aa732277a3920c0e9b"],["posts/2020/05/05/11/12.html","fff29f39efac3ea5e5d7a349403d871c"],["posts/2020/05/05/13/20.html","9a98649bf711abe0c127d8e7f124d591"],["posts/2020/05/05/15/20.html","6e255b36acd466b9da4f72f77c8c7f84"],["posts/2020/05/07/21/21.html","012f26de4137c71dafa8abcbef57f7a3"],["posts/2020/05/09/12/20.html","bfa542d2b89cf3ac676833ae324c2019"],["posts/2020/05/10/18/18.html","7a5d1f6aa6b1ba5e876c02da0d4499d5"],["posts/2020/05/10/22/18.html","e1af0493c50a23f3ad7a48f232e51130"],["posts/2020/05/12/20/18.html","5635c231face2c02815edf32dcb30147"],["posts/2020/05/12/21/18.html","87050aa048e2ef0616560e950d609a9e"],["posts/2020/05/13/20/18.html","65bebcb405b03924bf846476bda7a744"],["posts/2020/05/13/23/58.html","d02b7548bc5704f8dff660289098dc4a"],["posts/2020/05/14/11/18.html","66b028eb7e5aeda62f9a955da80dde85"],["posts/2020/05/14/12/18.html","89e103ad98f3864c1eef61bb2847f80b"],["posts/2020/05/14/20/18.html","adfd60800edb5982ed36e2a0c37b41ac"],["posts/2020/05/14/20/58.html","9e3af3f641acebb770061443304b615e"],["posts/2020/05/14/21/58.html","5951c7ced8d2276b80306971519a7298"],["posts/2020/05/14/22/58.html","535682f96a0d29d10e205c8fa056cecf"],["posts/2020/05/14/23/46.html","e3b690a378ea28fbba4076d6bc42d9b2"],["posts/2020/05/14/23/56.html","3495d89fc3ec910ed9a4f3c4b4f2fdcf"],["posts/2020/05/14/23/58.html","ff88ba460e63f31079729ac5e3691324"],["posts/2020/05/14/23/59.html","79e655b985504f36c2dc351a180db695"],["posts/2020/05/16/20/40.html","b843cfd330abeaf6f64898efeb92f886"],["posts/2020/05/16/21/40.html","37c3b65a46438dbae10e7f593d5861f9"],["posts/2020/05/17/21/03.html","98e3ddf05b3f41c0edf6332a6cc12e75"],["posts/2020/05/17/22/42.html","af8edb91df3dd070961ed60d6d8facc2"],["posts/2020/05/24/07/03.html","cab8519026dc6b68527117427da9ec6c"],["tags/AGV/index.html","0bcf3b14424a7656571cd7ea70adf827"],["tags/Github/index.html","9015d2bf4fca1676b77f1745fb460676"],["tags/Move/index.html","2bf12403a189becedc0dbed4278d4670"],["tags/OpenWRT/index.html","23f32376b7be8c69775eb4eae80bac0a"],["tags/Plant-Simulation/index.html","a117003c80fca02a9ecc6ea6753bd62a"],["tags/Wordpress/index.html","89988928b4c4d5cc6580f18c2c314de7"],["tags/buntu/index.html","c21ff72fadbbe0376f68a62dbcf8ee45"],["tags/cad/index.html","d7e29e91d5478aa6db95f45e320f0f0c"],["tags/coding/index.html","31b43212ad3644bc67bcbf5c6571fe16"],["tags/h5ai/index.html","81ce37d81101eb31644e9ea996d0ce1e"],["tags/hexo/index.html","a701236158ffee600c358c4ba8faeaa7"],["tags/hosts/index.html","d2b6418f62a62d40136f5d9d95d3d44f"],["tags/index.html","f2d7281abfd3ed8aa39b9b911f269ff2"],["tags/lychee/index.html","db81c48d587d99f2c98e4109a09c80a0"],["tags/nas/index.html","d3c15dcd8564aec8347c9d3604196369"],["tags/tpyecho/index.html","38befe9ca761c0b16e72cbd6a7dd3dcb"],["tags/transferstation/index.html","0f3b8284ab1c794f559005f44701f54f"],["tags/typecho/index.html","fcfffea5c464ac9b40d422002e39f6a4"],["tags/ubuntu/index.html","3297222098eb9ed94d3a2a8c41e7c928"],["tags/写给宝贝的话/index.html","c7b422ea42950d2ffc74b47397347022"],["tags/原创/index.html","8901bb26fbf0dc616aca7a923ba6d65a"],["tags/学习/index.html","7616e0d7283d3b0977088f1dd5a7ee96"],["tags/宝塔/index.html","f6273dec532479607fe571aa74576a66"],["tags/生产模式/index.html","fac4c687c2b7fa20a3bf324c843be173"],["tags/百度客户端/index.html","56f2297e4c42cf842e2e3a8044bc22f8"],["tags/科学/index.html","5cbd9045ae907930e4cfcf9f0ab0aeae"],["tags/统计/index.html","5f847f8763f44ac39f33be981f67a514"],["tags/编译/index.html","e305ac6b9f58224ba52a905171ebdc99"]];
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







