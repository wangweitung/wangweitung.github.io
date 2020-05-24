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

var precacheConfig = [["about/index.html","996421d3bbbdfe87f99a3ceeb2c06303"],["archives/2019/12/index.html","cfc1213582c07b47a3b196beb281be45"],["archives/2019/index.html","2ab1f66cb9ca35dcad9ad4f0ae359cbd"],["archives/2020/01/index.html","ba70bb3e02683fead5314d29806756d8"],["archives/2020/02/index.html","40ce6d4b12e6e58774a095da45abbbb8"],["archives/2020/03/index.html","c0b31ffa44f0d22886aea44e7948da2d"],["archives/2020/05/index.html","6f0dad65f2db406473436f98b5929ae6"],["archives/2020/05/page/2/index.html","e0df9b40ee2f1a298fac17100d9b36a7"],["archives/2020/05/page/3/index.html","ad7c2b7bb43977fa4c19fde5780831d3"],["archives/2020/05/page/4/index.html","fc22870c7bcc6da108e31b21a2966af2"],["archives/2020/index.html","b4e865df32e18eb80778bac1591db8e8"],["archives/2020/page/2/index.html","7ee453ff9ba24b6f6292d80fa47a1002"],["archives/2020/page/3/index.html","53c11549ffacb076055a3eab5ccdd40e"],["archives/2020/page/4/index.html","44ab1a83d95ceb8b50cdfac63828311d"],["archives/2020/page/5/index.html","b2cd273d84eda6c48b927059d4412b2d"],["archives/index.html","bcc5cef2129143c22811bbeb22c4b0bc"],["archives/page/2/index.html","c5c312bf53baad89c2caf29f056f83b7"],["archives/page/3/index.html","2722d01198daf535ea65eca590a47b85"],["archives/page/4/index.html","1ff7d74157229ee794c5e9f86a63d4a4"],["archives/page/5/index.html","2e5784a6b7f1cda43aab03b6c9708d45"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","3d65bb35efa6fa3c806457ffca970fac"],["categories/Code/index.html","1435d7262601781959bd2f48e1af0607"],["categories/OpenWRT/index.html","241ad64ab3c958feb522691fb64f8eae"],["categories/Plant-Simulation/SimTalk/index.html","6ad9f3d87ec3f5ec54004c0e075a4024"],["categories/Plant-Simulation/index.html","d7a8bd97a0d0bea3aa47a321cb4cc92a"],["categories/Plant-Simulation/实体/index.html","0e4e5a9fe45dfc7e10510369c0af8786"],["categories/Plant-Simulation/常用代码/index.html","e9b91114952b7bd88df7373133666ea9"],["categories/Plant-Simulation/常规操作/index.html","c8deff0b7a7fe192d2582c993db2098e"],["categories/Plant-Simulation/模型/index.html","1ccacd0fd37b1192a4122337a2983b64"],["categories/Plant-Simulation/背景/index.html","ced1874ca9c5b77dd5d8eccc0b185b09"],["categories/index.html","40208cf3f460a6f043384beb7b1b577b"],["categories/nas/index.html","7274ca1cf2b2f6bc910c2e7b20cb8ca6"],["categories/ubuntu/index.html","b502c18ec3ae521d414d88f9b2feefd4"],["categories/ubuntu/ip/index.html","7e29a1508053b649cf5b5a53cdd8e9de"],["categories/ubuntu/下载/index.html","69899352e9a81272735a0a5b895190ca"],["categories/ubuntu/命令/index.html","d076a6a7b9c0bf6f8652a64ed2995bd3"],["categories/ubuntu/配置/index.html","49e5d89674955ce65bba90d8b64cede3"],["categories/博客/Wordpress/index.html","2cded3407022a337f80bf006d85edec0"],["categories/博客/hexo/index.html","3bb86884fbca3b898a5ce2f696408fd3"],["categories/博客/index.html","0f94a861517a5be40f4c4e95fccb08fa"],["categories/博客/page/2/index.html","838b73cc293ebefc6da15c9c082841ef"],["categories/博客/typecho/index.html","aa20ffbe525c7c3e6d449a96361cfca3"],["categories/博客/统计/index.html","cd3781bb0ecc39df5888a2083379374b"],["categories/宝贝/BB/index.html","dbc715d447d9abff0b4650212021a70e"],["categories/宝贝/MM/index.html","1038682551dfa924e03c97275fca4cfa"],["categories/宝贝/index.html","0ea70ca131b6d903925faaea487d7d17"],["categories/思考/index.html","5d6803e3d10102794ed09f2d39fc7e4e"],["categories/思考/职业规划/index.html","a4f324fea4d294cd231355bbf7e1b22d"],["categories/科学/OpenWRT/index.html","d25304cdf44ea2ebcb8a8ed346175d0a"],["categories/科学/index.html","da97ba9e065409dd9084bfd24bb2f6de"],["categories/科学/手机/index.html","dc3b635effa4364798ec69e89faaac4b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","441d26c27d95e5268d008601bcbdb2e7"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f4525c68bcfe1ab64939ffa401b96b1e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6b29ff1817aad968d1e0fb17ff5be1fc"],["movies/index.html","a8c3fbe29915babd86cc0c98da5cda3a"],["music/index.html","11f29be91465a3a6631ed40b8d178623"],["page/2/index.html","d8a5adf6394efca19163b25402b7b9fd"],["page/3/index.html","d46f4b2ad1c6d40d895be35126307142"],["page/4/index.html","8fdc893f6ae4c8b307e423dea342f687"],["page/5/index.html","9ea7d0dbff8a6c99d6afe484e2f4424d"],["posts/2019/12/04/00/35.html","fdf8fe7727a73c131dddb39d8a393245"],["posts/2020/01/15/20/18.html","1d9569f0d23384e657759b75c149f1c6"],["posts/2020/01/16/22/18.html","2985315b3e4aaeb221b9621adce7803e"],["posts/2020/01/18/22/18.html","c65879ba4b1bd855c3871427f1f2f1ea"],["posts/2020/01/19/08/29.html","e9e6f1613feb9d9ba7bdee0776a49b91"],["posts/2020/01/19/22/18.html","af45f14d4c611d3f0499246a476390c3"],["posts/2020/01/23/22/16.html","3862a9de7f0e0dcd1e8159df25c42feb"],["posts/2020/02/04/20/18.html","0be2799d6622cae570c02100ad370215"],["posts/2020/03/12/00/20.html","e38c78f2d68fdf802e5d5af512e4b0b8"],["posts/2020/03/20/22/12.html","ba9b573ab7bd2264b7f4ed7f63bdb2aa"],["posts/2020/03/22/18/24.html","c5648dd17d7a744e5e49adf86faac4cc"],["posts/2020/05/03/22/12.html","ba1478409a27a35fbbb2a044b10077c8"],["posts/2020/05/04/00/05.html","235a33779a9673dfd0a058b4924bd690"],["posts/2020/05/04/00/09.html","97055ba7a4f7f9162a9f0142041c1d46"],["posts/2020/05/04/00/15.html","b89cea6651b12b507c3a1f02c6ddc908"],["posts/2020/05/04/14/58.html","ae9565ad2ac0cf4cda288b433d4f9453"],["posts/2020/05/04/17/01.html","d28e897037e8a1b29eaa094a1aa5ed88"],["posts/2020/05/04/17/19.html","a3dc0d80f6cd4f19b67b109b7ec9d941"],["posts/2020/05/04/18/18.html","2e135b228f4269c04a793ee03e1e83f6"],["posts/2020/05/04/18/24.html","d572852f7db9697a755fcbeae6d46ef0"],["posts/2020/05/05/11/12.html","5e5d38d045ffcc54a1768c37d769cb95"],["posts/2020/05/05/13/20.html","32c61ac10de323b9256f52d09d24ab1f"],["posts/2020/05/05/15/20.html","855dc03eb011567e0033ebf66250db43"],["posts/2020/05/07/21/21.html","8db25ebb5a8377bdf5095eb91292ffa9"],["posts/2020/05/09/12/20.html","1fabb2728defcc34694c3906f8795365"],["posts/2020/05/10/18/18.html","7eb6361773f1e5e25d664c0412addd48"],["posts/2020/05/10/22/18.html","e1f69df842bdae7d6a99eb2f7fc27aaf"],["posts/2020/05/12/20/18.html","48c6a38fc4ca0f8c692b8fa9db6f2a18"],["posts/2020/05/12/21/18.html","711d8a2d267a35f90fff280c662e6cc8"],["posts/2020/05/13/20/18.html","f03af1eceffeec4bd65c239366a14fc6"],["posts/2020/05/13/23/58.html","d28b88d5d20fb93f3987133e0970b5b8"],["posts/2020/05/14/11/18.html","3d19196c6ada4698d6befd5b5fb028e4"],["posts/2020/05/14/12/18.html","69cf939c4ebfd02c787eddcf392351d4"],["posts/2020/05/14/20/18.html","7141d3c2cf822aa925d449ffec4e2a8e"],["posts/2020/05/14/20/58.html","5840836cb35d5f301e325e14fa342b20"],["posts/2020/05/14/21/58.html","c140f2e060c704be19faf2384cd30ba4"],["posts/2020/05/14/22/58.html","bb0eb9cbbec111412b4047c29abd3859"],["posts/2020/05/14/23/46.html","e94a37d9b3bc63fe92822cece3c42aca"],["posts/2020/05/14/23/56.html","57e60031a33be63a3a774fff93e2319f"],["posts/2020/05/14/23/58.html","4cc229c4e48124c312f931ebcfa46295"],["posts/2020/05/14/23/59.html","4a2594377a962306e21afcb410ea5d33"],["posts/2020/05/16/20/40.html","893f036b5a24ed1849ad8fabfbd20ce7"],["posts/2020/05/16/21/40.html","59e3328fe4cc18038fc21042f0fb8c98"],["posts/2020/05/17/21/03.html","5cf3eb072717d1eee67b514022fcd842"],["posts/2020/05/17/22/42.html","a528c52cc059b97740e89d69014c85f8"],["posts/2020/05/24/07/03.html","924c07111a8b9e1bfea29dc3fd75a794"],["tags/AGV/index.html","d01c102c8e209042b294c84875028129"],["tags/Github/index.html","9c8defca34bfafdba2a67ba77a504eec"],["tags/Move/index.html","d5fac1fa3cfc74d60c27a056a818270e"],["tags/OpenWRT/index.html","8b338220a951507fb8b6ecdf18ae740b"],["tags/Plant-Simulation/index.html","c1d3a963e4f178be4be58271dc50b661"],["tags/Wordpress/index.html","28be4bdf45562a68616ed2c026cc71e7"],["tags/buntu/index.html","da693f872ff245aa1c0b1a00e15586e1"],["tags/cad/index.html","9f02d4eb25dbd728329531723b783508"],["tags/coding/index.html","782ef89beda94649348abee2e2482ef5"],["tags/h5ai/index.html","3f64e61ba9fba5368ae59d73976a924f"],["tags/hexo/index.html","4035d4980e882d4805d0037f02488627"],["tags/hosts/index.html","bb45c54f4ec54ad22a3c0735c81b3510"],["tags/index.html","8d4acdee10723e857d27e134b2d7d408"],["tags/lychee/index.html","f950424ae57f093c26182595c590e6d7"],["tags/nas/index.html","f3010e8292875dff8b3144c0c38dbcca"],["tags/tpyecho/index.html","00f2109f656578c3cf83d3cddde20223"],["tags/transferstation/index.html","bc798a3bb7c7d5a7b266de30b8094f6a"],["tags/typecho/index.html","372838b2ac8d42c2e188eab2b5edc836"],["tags/ubuntu/index.html","510e12a6cfd58e632b4bad7106b3a8f2"],["tags/写给宝贝的话/index.html","28e75a0855c65c8e1aad06306cb3490c"],["tags/原创/index.html","9e14cd868ceb3efc0898a6852c596fb0"],["tags/学习/index.html","4fc9b07a8dbd4f5d7d16372b348bc17f"],["tags/宝塔/index.html","614fe350223181e4ff1e8b7e150eae65"],["tags/生产模式/index.html","72f6c355a448d79eccc24f91260383e1"],["tags/百度客户端/index.html","b6eae78dac275699bc17dd327f61869a"],["tags/科学/index.html","d8e2a69e0e834c9d1a81ca046769f584"],["tags/统计/index.html","5b3e47c524dd701d3c70190b1d894e67"],["tags/编译/index.html","a5c3599561b9249f6446cc43ce925dc7"]];
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







