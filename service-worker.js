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

var precacheConfig = [["about/index.html","cf8973a1e356ced746c51657a6d6b301"],["archives/2019/12/index.html","7c2f4cc9a1791fb500251ffb57a0e205"],["archives/2019/index.html","54f3289f9b40ef35f2f6be4a3ca37d87"],["archives/2020/01/index.html","67f25ef71ddf41c43f17baa62a795354"],["archives/2020/02/index.html","770e6dada918b230c8d4fb42d9868b03"],["archives/2020/03/index.html","c59091e92f68f50cc336e7a18d70da63"],["archives/2020/05/index.html","c5e5c1e29c479289caf42c65fcc5fe0e"],["archives/2020/05/page/2/index.html","b9e151c3bfdec0e6b2eccf908db46364"],["archives/2020/05/page/3/index.html","e251d515b452c28ba025f0b1ff8985e7"],["archives/2020/index.html","d458352a4619b528516366da988610f9"],["archives/2020/page/2/index.html","689df5613e441c1502723f94d792a7c8"],["archives/2020/page/3/index.html","3e2f06f8cd7ba14148e777637e4a9e0f"],["archives/2020/page/4/index.html","84b81dd5e77e91c1cda8ccb9883afc82"],["archives/index.html","3e42e4588965fe75c2bf64736aa1672d"],["archives/page/2/index.html","f37ef1ff063cdcb9861911a7d3724bb3"],["archives/page/3/index.html","21927d4db09bb91384fffbf8f2ec47ea"],["archives/page/4/index.html","2fed60eb996f842b2b720c93281dfa48"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","d63c97c3ad4461a69e2ccfbf5318f055"],["categories/Code/index.html","119f859fe5f91a59e4b7b1e27a1ce6c1"],["categories/Plant-Simulation/SimTalk/index.html","542af340cd8529dbf6c90320e079e935"],["categories/Plant-Simulation/index.html","872e86ae2dd20c7e9003d9831e6409d8"],["categories/Plant-Simulation/实体/index.html","02cc93a0a0ad8d9ec88a4eb9f097de2b"],["categories/Plant-Simulation/常用代码/index.html","d503f166cbad5c59386edaf646598415"],["categories/Plant-Simulation/常规操作/index.html","b103675e569b0f3d7ad6aea5c761404b"],["categories/Plant-Simulation/模型/index.html","400ca330470e2c93673c2aaa84ef97bc"],["categories/Plant-Simulation/背景/index.html","11ad64f4526882fc98dd150fdf924380"],["categories/index.html","a4988b5033079e7a894b34f2317a42d3"],["categories/nas/index.html","1af29dec872c2cfd03cb4064bba64a5f"],["categories/ubuntu/index.html","bf2c62b1ae5797b36d09d48fa5e6154e"],["categories/ubuntu/ip/index.html","587480136ceab490ed8fcfbfdd7c9d8f"],["categories/ubuntu/下载/index.html","3cd51151132cc009ab1c2d3c37f4063e"],["categories/ubuntu/命令/index.html","8a9cf3f730e37633585e351637aa99ec"],["categories/ubuntu/配置/index.html","40d0c6b51b6759e025ead615c763d697"],["categories/博客/Wordpress/index.html","d50dcc4d23d545010ae5dc186736b267"],["categories/博客/hexo/index.html","2f9e42ebe84340bcf53daf3ce86cd579"],["categories/博客/index.html","6ed60f46e862ef042b061cd2d275e411"],["categories/博客/page/2/index.html","4f1cfbe53fed10a0c57bba071ec1f43b"],["categories/博客/typecho/index.html","07ba54879200dc34429fec9f1f6c4a68"],["categories/博客/统计/index.html","ebbe7c68169843560ff7b80dc03c3859"],["categories/宝贝/BB/index.html","590e767bcd770aa7a8a2bafdcff034cb"],["categories/宝贝/MM/index.html","ef0d99817286a2edef1857048d391f75"],["categories/宝贝/index.html","0f014d249f145e2bf85f96f5b7d2cde9"],["categories/思考/index.html","3c433d2acf39ff3568061789d589cbb4"],["categories/思考/职业规划/index.html","c247f4a559064d1b7e578e367701002c"],["categories/科学/OpenWRT/index.html","eded33eabcc087a42a8337d974f0bfad"],["categories/科学/index.html","d60ab9aefe3ef58a1854e7c051e4fefc"],["categories/科学/手机/index.html","1e3a0feac746afd4cfaef5535ee2c1f5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","aeee61cbe6ed13435b003d7b12a82efc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","7708dd09770a2e7dc5f307095bde3caf"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b294ed1329eb002d44eba08ddd44067f"],["movies/index.html","172abbb96e79099b3ea18743b9f34713"],["music/index.html","bf89004b97f5faac78154e2919677bd6"],["page/2/index.html","94083bf742eb55e2ca351d8c9b7dd047"],["page/3/index.html","cc2999c8b3938b27dab0c9a28172280f"],["page/4/index.html","b104a7b574cdee032cee5a06e93256a9"],["posts/20191204A1.html","e9c4221e5fa8f051c9de36620f0a1fec"],["posts/20200115A1.html","ae54485146f01366dc880f4e956c74cd"],["posts/20200116A1.html","6fe55e0a6233fde8643ee2120b502310"],["posts/20200118A1.html","8cfb9c04c20edba4f8c9c2d42e6aa26c"],["posts/20200119A1.html","baf9ca526fe38d610f65c87976505989"],["posts/20200119A2.html","d47260367134c0e1ba2dec5eda8bd712"],["posts/20200123A1.html","6df9b921d9ec1cf770387f555bd69a06"],["posts/20200204A1.html","c6322429677e04c04933244e163e238e"],["posts/20200312A1.html","3ba8ab2f3699dbff46e9a5bc433214ff"],["posts/20200320A1.html","8deba6eb506e9b239283e147a3744bac"],["posts/20200322A1.html","4f768e3b7e81544daab71a2f7917c0bf"],["posts/20200503A1.html","875b8d96da9aa079437ab4ae91fa53c7"],["posts/20200504A1.html","c80bc23f5f88fc4dee446661c66f8227"],["posts/20200504A2.html","ea86b061db1f60def866786e502e6f26"],["posts/20200504A3.html","dad6a7bf8f50cafe6c12b0b3f74a283e"],["posts/20200504A4.html","f9c3e0712e1fd2a840ebbbef987b053e"],["posts/20200504A5.html","677365db0120f783a7948470bfc8ea6e"],["posts/20200504A6.html","f102cc84d5044828120e1d8896aa32c3"],["posts/20200504A7.html","cceb13bf42c5b0d73acdc66d239ec5be"],["posts/20200504A8.html","71f1fef0a6d59609083c391334e4c8b4"],["posts/20200505A1.html","c3e1eaf1c269282a11d53d645c46cc21"],["posts/20200505A2.html","a5c72f896f9e5a8522c974ff04231fbb"],["posts/20200505A3.html","3e6815492f0b486d9455765f7a2b4a86"],["posts/20200507A1.html","4f4d090fabfcac08734a5bfc9eea2fa2"],["posts/20200509A1.html","62b63d692a5df63b0c5776968df27e67"],["posts/20200510A1.html","054331c8370046ca9afc8ed199aef791"],["posts/20200510A2.html","ab258dbea9451d3bd81010a656004dd9"],["posts/20200512A1.html","468bb91d8e601b0ecc2bb5f9f39521a0"],["posts/20200512A2.html","adfa303474ca8084ab6a96e9f313c1ef"],["posts/20200513A1.html","10f66f10c4f117271e430de94368f1d0"],["posts/20200513A2.html","a28f29e83f5c60509e4dd065114cffb0"],["posts/20200514A1.html","f7e9827000260ddf74cc2b9fb9b243ba"],["posts/20200514A2.html","2cb73dff61b68cf3f63f2ce47ea78d06"],["posts/20200514A3.html","91f58f529de1f48212c7580583eeb3af"],["posts/20200514A4.html","41013065e62f21dc943a9b5e2103297f"],["posts/20200514A5.html","f376cca4d9ecab7180d3437f154e4fc7"],["posts/20200514A6.html","64cf99b53cb110e4f1f7ece41db53e7b"],["posts/20200514A7.html","5d24327306741cadaf2b205d2c0b368a"],["posts/20200514A8.html","7d19d2837efe721ae72feaf526f24257"],["posts/20200514A9.html","844f739368279e6de7b50e571093e4b6"],["tags/AGV/index.html","4b19f8209d61741071cffc751f755cb1"],["tags/Github/index.html","a83969d12cb15919a1b6417cee202334"],["tags/Move/index.html","d05be6e21f07be70c9cbae1fcc1bf78c"],["tags/OpenWRT/index.html","a2aec2ef1d56f0000156c1309ab1e0d8"],["tags/Plant-Simulation/index.html","c80dc09e9a55bfb819e3d9bfb46e40ef"],["tags/Wordpress/index.html","759e8419f04e6729abed42e576f7a637"],["tags/cad/index.html","5e0b05ab7139696e96075f16e9bbefc1"],["tags/coding/index.html","e65e1b323fb0623055f78ed624ffe9a0"],["tags/h5ai/index.html","3012afdff8964d7e241080e2ecbd73fe"],["tags/hexo/index.html","a5c8a44d315cbd4095f4f73046c399ab"],["tags/index.html","cc0dc5acb4857075d1ff2a75cb1edb19"],["tags/nas/index.html","0d30e8dab5eb6f60a5876df6f12dedb1"],["tags/tpyecho/index.html","1596490332176035409adf7d2d1ef457"],["tags/transferstation/index.html","2902f7e562d46add0d1ff79e9f9612b9"],["tags/typecho/index.html","c42295a0e9d996104f9dc7c35a2656a2"],["tags/ubuntu/index.html","5491e2df19da3a317a31a780f01744aa"],["tags/写给宝贝的话/index.html","08fe865d27c7d60c1d664adcd284fe77"],["tags/原创/index.html","67500f7732da4c1af6148d5cc97a2eb6"],["tags/学习/index.html","18be3490063924fe58f336e015cc87cb"],["tags/宝塔/index.html","73f151bcbcb5a93675c1dd051b171f01"],["tags/生产模式/index.html","ada4730cf5c40aefe3539493e4c3db72"],["tags/百度客户端/index.html","4daeb598a0d56330ea2572f390690e49"],["tags/科学/index.html","8680965db0c344a526f105e8dfa5a467"],["tags/统计/index.html","2997c936ceb07a073f0daebbb4fdc80a"],["tags/编译/index.html","fb1aafb921c195a3d211cda60a6cb766"]];
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







