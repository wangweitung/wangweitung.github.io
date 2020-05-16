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

var precacheConfig = [["about/index.html","ae6ee9b94d985155982f05086d2d59dd"],["archives/2019/12/index.html","c0f480c138fe4388b6bfdafc4b33d316"],["archives/2019/index.html","b0e70e32e4e663b3fc8459250b44afaf"],["archives/2020/01/index.html","ed6abb2c9d58bafa4854f5c4a99a4442"],["archives/2020/02/index.html","93c282e5eb3b85bab8bb43f6a1f4a826"],["archives/2020/03/index.html","cf76f65616a63fd4ef1bdc070ab2005d"],["archives/2020/05/index.html","c0d3af64d9097a410273ea787db16a40"],["archives/2020/05/page/2/index.html","5e6db63aa09372c71ad229220e36f626"],["archives/2020/05/page/3/index.html","17a29ac031dd2edf2b2ac1cc6834c836"],["archives/2020/index.html","67bfa7ce9909d6c21612f98e80c107f1"],["archives/2020/page/2/index.html","6e6824f7c06db339499cb3beb0eec399"],["archives/2020/page/3/index.html","9292e62c2cc9bd7cb0de1572775ddec6"],["archives/2020/page/4/index.html","6152c98062e8e7067f3b5069f423006e"],["archives/index.html","0b6b29ba543e6fbb71a5e45124030824"],["archives/page/2/index.html","7ebfbdfb531ff1dd57549ec57918002a"],["archives/page/3/index.html","524c2f9a7e0dfcac06897e921913ee52"],["archives/page/4/index.html","1e377ac5d7bf9e5c958aa7b84a2c605d"],["archives/page/5/index.html","718fea3cf5392459bfb03c7d876f8232"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","1054dcc9d3b01f93eae6c56da5c14527"],["categories/Code/index.html","7d5e49f36913dedc152fec9af7b71bb9"],["categories/Plant-Simulation/SimTalk/index.html","c3af50d7279040bbca0ae8d7ac578773"],["categories/Plant-Simulation/index.html","adae08191573119dca358dcfdf011e57"],["categories/Plant-Simulation/实体/index.html","25970b2aab115da9c7b378f04711f34c"],["categories/Plant-Simulation/常用代码/index.html","e0632012720b7126a8fc6f5a439d55ae"],["categories/Plant-Simulation/常规操作/index.html","3bb604dbf09fdec36a25cd4f1a987990"],["categories/Plant-Simulation/模型/index.html","7f9bc16278cd848b9a36ab2436badea1"],["categories/Plant-Simulation/背景/index.html","ef9162a998c0df65b026f78a5f8290b7"],["categories/index.html","623e144124cb610971f29fd2bb478975"],["categories/nas/index.html","99a3e46b2048f9e315d3b85bd6e0c333"],["categories/ubuntu/index.html","440d8f70945dd9c42be3bf8b5e04fa34"],["categories/ubuntu/ip/index.html","57a714515fe9e176011ad8496dceb0b2"],["categories/ubuntu/下载/index.html","45472f91653378455e774cf3a3230bdc"],["categories/ubuntu/命令/index.html","8f7bb7c8d23b887637fc3aea3fe05416"],["categories/ubuntu/配置/index.html","477c67a19861d91c64ab3f58a183f630"],["categories/博客/Wordpress/index.html","c8f498664479c659d2ea34b3f7f04cf1"],["categories/博客/hexo/index.html","9fa234a3ea11295084742cf09d68561e"],["categories/博客/index.html","e100123334e6148886b9373083466b5e"],["categories/博客/page/2/index.html","b0d15b46a6e226ca841530226aa12f06"],["categories/博客/typecho/index.html","ed5e7eee1834f14539ca469236234ce7"],["categories/博客/统计/index.html","7ee617fd1eb974e3c7d4b0b5515896cd"],["categories/宝贝/BB/index.html","6827ea778066d01354032f3f49e71e3e"],["categories/宝贝/MM/index.html","1ebbbbfbf191f2abadbf911702af4739"],["categories/宝贝/index.html","1aedce271533e8c132c6edc8117c1cc0"],["categories/思考/index.html","7f5b693e8879f3bc1bbae0a12fd848ea"],["categories/思考/职业规划/index.html","88df18eb67a5f41ace7e9bcbef2300eb"],["categories/科学/OpenWRT/index.html","b183c8b918a3cef1aae2c519c61abec8"],["categories/科学/index.html","1f3cea1d64cd87f005313c0703f81482"],["categories/科学/手机/index.html","28547fc8c9330866bfd64ec680c28de1"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1078cbadc51406719f6f25405466710b"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","712bdd57a339efbadbb84c7e3ec4c107"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","c4e1c645847abe098248e186c2d1f915"],["movies/index.html","d787e21e31e0965f2487af5c81c55e58"],["music/index.html","89337593e75777f7f25a67fdd7806c73"],["page/2/index.html","5a81385227b8dfaaea1dd86aeb05de8b"],["page/3/index.html","cd629933013939e0ebb830945896a5e8"],["page/4/index.html","5676d57e79d3566089e693091dce5dbf"],["page/5/index.html","0a50c4337eb2ed1d7218fd536f248ba0"],["posts/2019/12/04/00/35.html","dc3f5e08e94720336f3f88dd709cbfee"],["posts/2020/01/15/20/18.html","dca7a4dd10a62d3556c6ccdea665f982"],["posts/2020/01/16/22/18.html","3b844b6e21d01451b6880c6985d947f0"],["posts/2020/01/18/22/18.html","bf51d33664d30e86e66e9f7c7c10b558"],["posts/2020/01/19/08/29.html","80b9c915f65b9755182d63a4e5774f7c"],["posts/2020/01/19/22/18.html","f76b68dc66c32534997d6e890256fe6c"],["posts/2020/01/23/22/16.html","7a08f215a08f65ed2b3ac74a889a2947"],["posts/2020/02/04/20/18.html","961a24d42a9a30b521dde5e8107bab2e"],["posts/2020/03/12/00/20.html","71b9a84cbb00e9475d6e37e28ac53e77"],["posts/2020/03/20/22/12.html","fc4518af4beb5c31f43cad1eeff11d65"],["posts/2020/03/22/18/24.html","60aff2bebbc2908c65e9126b92382805"],["posts/2020/05/03/22/12.html","fd89d6c921069ffe4094ca4c0f3e36f3"],["posts/2020/05/04/00/05.html","cf2ba2834c0c33dc08a8dc0ffe718407"],["posts/2020/05/04/00/09.html","e72a96c33c58dbf97c2cb40cb4062161"],["posts/2020/05/04/00/15.html","cff82479d53ba52bec81c5d422df3a7f"],["posts/2020/05/04/14/58.html","45036779b90ba997be31e008eda4c9d5"],["posts/2020/05/04/17/01.html","b0b75405ecc4bd132c37609266599fea"],["posts/2020/05/04/17/19.html","63b40209f7d5ec4b79bebbfc6c329df1"],["posts/2020/05/04/18/18.html","7295118f3d21b80679e262770eefbe50"],["posts/2020/05/04/18/24.html","0f6993dc7168f05fa1a578d914eebf68"],["posts/2020/05/05/11/12.html","3046d42e9ada4f702bf5f8c35166899e"],["posts/2020/05/05/13/20.html","3ee8b09f15b205328ab3d88f5b451268"],["posts/2020/05/05/15/20.html","049bcc5dbbb28af65df9a9b85247185d"],["posts/2020/05/07/21/21.html","d0f685ee389399c4ba281b95012de632"],["posts/2020/05/09/12/20.html","9677071890509e7bdb7297d6c516aacb"],["posts/2020/05/10/18/18.html","f247f3be050ee2c92588123e5954886f"],["posts/2020/05/10/22/18.html","9b67bceaa51e3ea1d83b48b279bf9568"],["posts/2020/05/12/20/18.html","a461990b30e0fea75037f04f62d86dd2"],["posts/2020/05/12/21/18.html","b2286c3accf77dc94f764fe5d0b8499d"],["posts/2020/05/13/20/18.html","a3c798e452f479bd876d81c5daab9450"],["posts/2020/05/13/23/58.html","6a701075f034f903735bbaa34bfa966d"],["posts/2020/05/14/11/18.html","0c38c079239bd50c1a3319508d8f7ec2"],["posts/2020/05/14/12/18.html","8a911545571f7009ec0b87e397384a0e"],["posts/2020/05/14/20/18.html","2e00588ee5bc9186228adfd2026cc758"],["posts/2020/05/14/20/58.html","383cd299db31c049ad89f8a6473d16a0"],["posts/2020/05/14/21/58.html","df144a0b63acf3a2dadb62ca70189018"],["posts/2020/05/14/22/58.html","769ffdde760e4672773b20c4f38d5751"],["posts/2020/05/14/23/46.html","1c3c37c4a1d8fe31b4c7a698f3ee5ffc"],["posts/2020/05/14/23/56.html","a46343dac8d3945909934d694facabaf"],["posts/2020/05/14/23/58.html","7809a1b4c9c2a292c5489f3d008fa711"],["posts/2020/05/14/23/59.html","a1558523829e81bef6b7cd64244e32e8"],["tags/AGV/index.html","3b39717036d8bd24a0923f59a1c61c3d"],["tags/Github/index.html","f5c8133ee8e617c118d99aeb9a14079b"],["tags/Move/index.html","0cf02497ea3f556762b0371e7393810f"],["tags/OpenWRT/index.html","33d3a6df4442e541d0d10eac66fc8765"],["tags/Plant-Simulation/index.html","0e4dd40ae2c3c3e3b244edd5d69afc5c"],["tags/Wordpress/index.html","3d32faed815d2618bb69564af7b0f036"],["tags/cad/index.html","04224d9599b300ecca05725078a4811c"],["tags/coding/index.html","5cb5616effab75173d279f610ac9816a"],["tags/h5ai/index.html","3658878f59c4232510f423dca98481c2"],["tags/hexo/index.html","d1a6ca79a93a4be56d191bd351a323c1"],["tags/index.html","410856de43b6a71b408daa5ddfb23c88"],["tags/nas/index.html","18b50cd9d41c973971f0cc14235a7e00"],["tags/tpyecho/index.html","6535f010024a41146c50c0bb868d0e94"],["tags/transferstation/index.html","8ec1031ef4991ac754cc71023790d417"],["tags/typecho/index.html","465ecbd269e7d7afe7c3259a054d733d"],["tags/ubuntu/index.html","7a7093227d3a964fb92f7628b67dc891"],["tags/写给宝贝的话/index.html","6d7acf5fb41e40299c0913f4cd3b6b1f"],["tags/原创/index.html","c82f8682b86890f196630ba3d0ff8451"],["tags/学习/index.html","1f163b9128e2f39784be0e0b7f088244"],["tags/宝塔/index.html","a83094e6610a9d24b62b71418023611b"],["tags/生产模式/index.html","b8d8ff6a2efa74f11adda1826e39bc37"],["tags/百度客户端/index.html","1c4ed03ab350cd11a5be668182ce9dd6"],["tags/科学/index.html","5a935140db6c17ed045e8ac01aefd167"],["tags/统计/index.html","b62592be55f55518aaf7f5b34f6e37d8"],["tags/编译/index.html","e5471ae3beb6e63a886f2a06d26d6c93"]];
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







