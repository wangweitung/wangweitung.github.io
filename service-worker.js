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

var precacheConfig = [["about/index.html","c7d7fe1b90efe3fe0cdaf37811bba6c8"],["archives/2019/12/index.html","f79ba0284352db9406ccdca3f0624bee"],["archives/2019/index.html","9b9bb1b94651c2539313c921c4c61629"],["archives/2020/01/index.html","ea6e753076da99a77cbd2aff80651fcd"],["archives/2020/02/index.html","cfb9ae472810382875b53b8217def2e1"],["archives/2020/03/index.html","e4af3c2a6f1c74f57516b0917095abcb"],["archives/2020/05/index.html","07d4f0a725117a6324e78e8458d51379"],["archives/2020/05/page/2/index.html","4de2f261f909607df9f6651ab3438f1d"],["archives/2020/05/page/3/index.html","5e8789bcef149a3817c9a6a6132c1b2c"],["archives/2020/index.html","1817ca2ea9764b4041a9908519e0b4ce"],["archives/2020/page/2/index.html","84c7e3ef0975874cb718c4c8ad72b656"],["archives/2020/page/3/index.html","60fa973a38210bf54314c758e660f131"],["archives/2020/page/4/index.html","f4c620d1bd622c3ab42dfc71af674773"],["archives/index.html","80eeaf6fe4be9c005b27645ae9ced25b"],["archives/page/2/index.html","0cdd407f424918d69c42af74eec85015"],["archives/page/3/index.html","4c2cc5149ec45147206555090a237a1f"],["archives/page/4/index.html","c6a78c108059e0ed03e1b7ce58833ee5"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","94e8971a34e18d52e02ddb731e4cc8c4"],["categories/Code/index.html","f4a78ca9b57347a9f92a8e01a2d0359e"],["categories/Plant-Simulation/SimTalk/index.html","8ba4108c9f65084cf667fbb23df35275"],["categories/Plant-Simulation/index.html","c618ab79dc01417c0203fbe956ad3310"],["categories/Plant-Simulation/实体/index.html","31c716345e4b404240fb3e1e70f7076a"],["categories/Plant-Simulation/常用代码/index.html","1a500849384c554901d33da3c2e19de4"],["categories/Plant-Simulation/常规操作/index.html","1e6dbb82bec26229da807126c2479c56"],["categories/Plant-Simulation/模型/index.html","3975c21e6452b1c482f2820a923ee1a3"],["categories/Plant-Simulation/背景/index.html","9288442f9ed0553692b2491d176b473f"],["categories/index.html","a4988b5033079e7a894b34f2317a42d3"],["categories/nas/index.html","bf9b59272ce065990770dffb9d075895"],["categories/ubuntu/index.html","ac3f80c51ab27c193fa2c380104df3eb"],["categories/ubuntu/ip/index.html","6d1561312d743988252620da63b570ee"],["categories/ubuntu/下载/index.html","d4004019f12c03d6d8fa245e3145aab2"],["categories/ubuntu/命令/index.html","321765659ce65743b0a58fc82effd7ca"],["categories/ubuntu/配置/index.html","49f671d64588058d519cd4260009cb2e"],["categories/博客/Wordpress/index.html","9ac009e39db9dea1a18934cd920ea88d"],["categories/博客/hexo/index.html","b7c78ec96e737a9c71dbd6c0cf112ae7"],["categories/博客/index.html","8c520122e06cc78c0bcaad4e766522a9"],["categories/博客/page/2/index.html","2b51c3479ff5be9201f1ac19de05f3b1"],["categories/博客/typecho/index.html","e528bcf81966b0ba4cbbbe3ec5b93213"],["categories/博客/统计/index.html","02365bca7565723ef787c94c45f2a326"],["categories/宝贝/BB/index.html","0688ae6bbbd3883f6d4f07bdb28f15fd"],["categories/宝贝/MM/index.html","82f1d5b6495cb25383d6d157772f81c4"],["categories/宝贝/index.html","777d8dfee6ee8a4c60c15093ab92c41c"],["categories/思考/index.html","cddfed6f5d80193a76288af46df3c2e8"],["categories/思考/职业规划/index.html","c688d61f956fc51438970028105987c6"],["categories/科学/OpenWRT/index.html","6fbdee45ec10f4095bf2a14a0d350549"],["categories/科学/index.html","cdea17a6a2cbdcfaa7796696e0401b6a"],["categories/科学/手机/index.html","3c1c099fae7a0185d5dfed4c28889d2d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","aeee61cbe6ed13435b003d7b12a82efc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","33abec487d28d965651bb50e1f58cfb8"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b294ed1329eb002d44eba08ddd44067f"],["movies/index.html","172abbb96e79099b3ea18743b9f34713"],["music/index.html","bf89004b97f5faac78154e2919677bd6"],["page/2/index.html","7e55c5e03a38d08e2865faf3454a71d3"],["page/3/index.html","123ec75d41d62acd1ac73ee97b43b5f0"],["page/4/index.html","41700d86819f1f8dffa9481ac80ca876"],["posts/20191204A1.html","e9c4221e5fa8f051c9de36620f0a1fec"],["posts/20200115A1.html","ae54485146f01366dc880f4e956c74cd"],["posts/20200116A1.html","6fe55e0a6233fde8643ee2120b502310"],["posts/20200118A1.html","8cfb9c04c20edba4f8c9c2d42e6aa26c"],["posts/20200119A1.html","baf9ca526fe38d610f65c87976505989"],["posts/20200119A2.html","d47260367134c0e1ba2dec5eda8bd712"],["posts/20200123A1.html","6df9b921d9ec1cf770387f555bd69a06"],["posts/20200204A1.html","c6322429677e04c04933244e163e238e"],["posts/20200312A1.html","3ba8ab2f3699dbff46e9a5bc433214ff"],["posts/20200320A1.html","8deba6eb506e9b239283e147a3744bac"],["posts/20200322A1.html","4f768e3b7e81544daab71a2f7917c0bf"],["posts/20200503A1.html","875b8d96da9aa079437ab4ae91fa53c7"],["posts/20200504A1.html","c80bc23f5f88fc4dee446661c66f8227"],["posts/20200504A2.html","ea86b061db1f60def866786e502e6f26"],["posts/20200504A3.html","dad6a7bf8f50cafe6c12b0b3f74a283e"],["posts/20200504A4.html","f9c3e0712e1fd2a840ebbbef987b053e"],["posts/20200504A5.html","677365db0120f783a7948470bfc8ea6e"],["posts/20200504A6.html","f102cc84d5044828120e1d8896aa32c3"],["posts/20200504A7.html","cceb13bf42c5b0d73acdc66d239ec5be"],["posts/20200504A8.html","71f1fef0a6d59609083c391334e4c8b4"],["posts/20200505A1.html","c3e1eaf1c269282a11d53d645c46cc21"],["posts/20200505A2.html","a5c72f896f9e5a8522c974ff04231fbb"],["posts/20200505A3.html","3e6815492f0b486d9455765f7a2b4a86"],["posts/20200507A1.html","4f4d090fabfcac08734a5bfc9eea2fa2"],["posts/20200509A1.html","62b63d692a5df63b0c5776968df27e67"],["posts/20200510A1.html","054331c8370046ca9afc8ed199aef791"],["posts/20200510A2.html","ab258dbea9451d3bd81010a656004dd9"],["posts/20200512A1.html","468bb91d8e601b0ecc2bb5f9f39521a0"],["posts/20200512A2.html","adfa303474ca8084ab6a96e9f313c1ef"],["posts/20200513A1.html","10f66f10c4f117271e430de94368f1d0"],["posts/20200513A2.html","a28f29e83f5c60509e4dd065114cffb0"],["posts/20200514A1.html","f7e9827000260ddf74cc2b9fb9b243ba"],["posts/20200514A2.html","2cb73dff61b68cf3f63f2ce47ea78d06"],["posts/20200514A3.html","91f58f529de1f48212c7580583eeb3af"],["posts/20200514A4.html","41013065e62f21dc943a9b5e2103297f"],["posts/20200514A5.html","f376cca4d9ecab7180d3437f154e4fc7"],["posts/20200514A6.html","64cf99b53cb110e4f1f7ece41db53e7b"],["posts/20200514A7.html","5d24327306741cadaf2b205d2c0b368a"],["posts/20200514A8.html","7d19d2837efe721ae72feaf526f24257"],["posts/20200514A9.html","844f739368279e6de7b50e571093e4b6"],["tags/AGV/index.html","0b3c41536b76e09a3c607332060d6be3"],["tags/Github/index.html","40d6eb0c92430f9a9f9e28afcc0dfe5f"],["tags/Move/index.html","0eddfe3d49a6d3ab4fce92cac8b6e8db"],["tags/OpenWRT/index.html","ef606b1086a2b214baf02ab49e5cc200"],["tags/Plant-Simulation/index.html","950680a3d77bfba0fcbe47a54730267e"],["tags/Wordpress/index.html","5ee0da6e021c6ad8a1b876bb18b18f01"],["tags/cad/index.html","1944db4e411ea381937cba765335a7fc"],["tags/coding/index.html","0593155bfa71d76566bd356342261d3d"],["tags/h5ai/index.html","f57430081b9b196e8591c725a28d6b8d"],["tags/hexo/index.html","959b8de6915bf939810507c70ac08997"],["tags/index.html","b3f1dfb1aa3e6302335ae384fa48861e"],["tags/nas/index.html","4eb02ce55cbff09e7cb756a708388f03"],["tags/tpyecho/index.html","c2bf88e61a82fed674456ea601a6ae96"],["tags/transferstation/index.html","a9a9a9241830e934def6731d19573406"],["tags/typecho/index.html","e0ebcb4baeb105bb490847bea20f4edf"],["tags/ubuntu/index.html","d539b5cf3c79cd1f5e47fedb9e33347e"],["tags/写给宝贝的话/index.html","3d6f879b7106b5351af373305829f530"],["tags/原创/index.html","9fd0c662898452fc9d743f2886a96ac7"],["tags/学习/index.html","e7bd0182e1b63dffb3c625d8841751eb"],["tags/宝塔/index.html","03962457308d5448642d270494826eb8"],["tags/生产模式/index.html","b95864286fb4c7835050640d3208b9d1"],["tags/百度客户端/index.html","472bfd23d4523461e3a35afa399f676f"],["tags/科学/index.html","d75c3c65490758ab9ce1d5104851e685"],["tags/统计/index.html","216274e6be2eca636ed316728eaba38f"],["tags/编译/index.html","0f82746f955796be3cfa10a9347cc603"]];
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







