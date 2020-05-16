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

var precacheConfig = [["about/index.html","9b11c3ee5371c2987944d35f661e346e"],["archives/2019/12/index.html","d53cd000be9e32f748c70dbc11370421"],["archives/2019/index.html","aa2de7a565b147b875e60e91e6e9fc93"],["archives/2020/01/index.html","364a94ef8d9867e12857ef8c5845558d"],["archives/2020/02/index.html","64cbb2cfa0e9bee474f259409f3ebd0d"],["archives/2020/03/index.html","a212d21af768b8b42f592f885459e60c"],["archives/2020/05/index.html","f476fd07fb155701f5f79f1b475d73e8"],["archives/2020/05/page/2/index.html","3428ea3845f481a2179778b69c11f31f"],["archives/2020/05/page/3/index.html","2b15ba340fff78b6f7d8a20f0aaea39d"],["archives/2020/05/page/4/index.html","09f343ed82aa23927bdc4a4a174e3ca4"],["archives/2020/index.html","8a5e134e6e4f85fa70495decc89e7f52"],["archives/2020/page/2/index.html","1881b7743dd630e64d25160df97a0b5f"],["archives/2020/page/3/index.html","b5e902e7e2f791370bf433aacf07cdeb"],["archives/2020/page/4/index.html","612f38b7773c690571d940bae2ea3467"],["archives/2020/page/5/index.html","468ff97d967bddc951a07bf836b17d3a"],["archives/index.html","52f6bd7db7b4444d58822308bb718146"],["archives/page/2/index.html","0f024964625cb256dc796e9f0f16c7cc"],["archives/page/3/index.html","c377dfb4e87faa0298a5c972ed7c6c38"],["archives/page/4/index.html","16ba58b78ac8c4804cf3d3675dc8f605"],["archives/page/5/index.html","74818badbafa6d8c0052e460631f50ba"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","66ff5883dde9c36c3b2d917b9a9ad44c"],["categories/Code/index.html","812938be36a627576cbf28c81a41294e"],["categories/Plant-Simulation/SimTalk/index.html","06ef30329dfa74b2d76104ea716c3990"],["categories/Plant-Simulation/index.html","c694ec257654b21c6997cbc332ed5f00"],["categories/Plant-Simulation/实体/index.html","2c36ab8b4795cb97c0c8a8032cccef5e"],["categories/Plant-Simulation/常用代码/index.html","b0f988ce560706c2bf08cb3009318fe3"],["categories/Plant-Simulation/常规操作/index.html","d4461213f4a7b9f067c440ddf1bf32bc"],["categories/Plant-Simulation/模型/index.html","3f818900c9618507c08ddb290d9f763e"],["categories/Plant-Simulation/背景/index.html","13722368d949c3ea32e362a9f8462cdf"],["categories/index.html","975cd416b56a239dc204ad224668cc7f"],["categories/nas/index.html","a1fe43a8ba1b7d96498342b00f5bbd0e"],["categories/ubuntu/index.html","01ada60f194134ef340a3cf5b6cf94a6"],["categories/ubuntu/ip/index.html","a68923eb4897456894ddc9075c79f467"],["categories/ubuntu/下载/index.html","6d1cdee05a8e3e217210d4d2cf3067a5"],["categories/ubuntu/命令/index.html","e67b185aa385caf75bccb40cc2673830"],["categories/ubuntu/配置/index.html","cba251fd21a10f7dc3aed2381826a682"],["categories/博客/Wordpress/index.html","c173d9aceb74afea5113ff0a5e0189f7"],["categories/博客/hexo/index.html","838341b9910656359dd8d150bc1723ba"],["categories/博客/index.html","9351eea3cad22248bc3c4620bca456be"],["categories/博客/page/2/index.html","0d2d67f2bbe8b568f85c5d65e2944f06"],["categories/博客/typecho/index.html","7a5b1ea534a9c83c9b92c12bbfef35c5"],["categories/博客/统计/index.html","1d96d40039a4e00c92e1bc7b90e0afe4"],["categories/宝贝/BB/index.html","d8a8f0c067ef1d4f4c580f25157f4a13"],["categories/宝贝/MM/index.html","b3f3745f543f879edc5cd7b2849ff878"],["categories/宝贝/index.html","eba35881efd62b9d68c3df9ccafffd48"],["categories/思考/index.html","29888be783221f3a6c8d8f33dc700fbd"],["categories/思考/职业规划/index.html","f5dac249c6ed1a05b9b5b1131cdff333"],["categories/科学/OpenWRT/index.html","ff5529591309cb8553a20e1f3431ca26"],["categories/科学/index.html","4b0a79d93e1ba6d89f6b2fae64ac047c"],["categories/科学/手机/index.html","372fee89962612771bc33a79d3dbbe22"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","794f5163970d9571f3d45fb499b937d9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f0b27d7f1567c317ab57a31b05500ed8"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","383950816e4ec1dcf9e07e8ffd8e7ae5"],["movies/index.html","75c1460ee279b9a2cad44e5aa583f212"],["music/index.html","4050ec6739f41e2da2e2300d582d66ae"],["page/2/index.html","e2bcca647b07f726c171e6aa39074344"],["page/3/index.html","7d94f1c6d32dffea481f15d6112c6cb0"],["page/4/index.html","2841d30b21b24e993192a088355e999b"],["page/5/index.html","bcd33971ca8fca777b5a5fb96b755257"],["posts/2019/12/04/00/35.html","3b3c4614206a2a3482ceac8af899059c"],["posts/2020/01/15/20/18.html","7f53d92dd60dcde2d6ee8d9011c56f57"],["posts/2020/01/16/22/18.html","4885ce3c2f42daf879331e473219fbc3"],["posts/2020/01/18/22/18.html","aa663ba3a28baa87ee67418d2883e7b2"],["posts/2020/01/19/08/29.html","9ccf823161f29e53ab18f5e88dec6400"],["posts/2020/01/19/22/18.html","2492dac72e1108cff1a58e316da0bb9a"],["posts/2020/01/23/22/16.html","1fa806e94709e59fb500d2a6800af97a"],["posts/2020/02/04/20/18.html","2060d1fa64d5ee1b03e5baee5d12775b"],["posts/2020/03/12/00/20.html","5a45efb9247a98491357f61d6439f580"],["posts/2020/03/20/22/12.html","a5de9e7014aec2da7039844186ebae93"],["posts/2020/03/22/18/24.html","fcb4e5302b048c17d43aca8a28fbda53"],["posts/2020/05/03/22/12.html","5417bd052321ea29de2ad893f79fbf09"],["posts/2020/05/04/00/05.html","3a3bf2bd607e1bb1d9468427579ca854"],["posts/2020/05/04/00/09.html","23764935c66f944053683eed2746d5ee"],["posts/2020/05/04/00/15.html","5d2cad1192142232c2bc11c4b34146db"],["posts/2020/05/04/14/58.html","aa11255f007a8f169b30bfb502a7f2e3"],["posts/2020/05/04/17/01.html","90bc7cc323aafdb43d672e447cf95221"],["posts/2020/05/04/17/19.html","ba8493c7de8bf137ad800a48433c7bff"],["posts/2020/05/04/18/18.html","613e947be699b4b3dd911a5b3fe97049"],["posts/2020/05/04/18/24.html","fcbe5e621801d4db14b31591d6e92357"],["posts/2020/05/05/11/12.html","776cddfc357f667bc07b8519bdf5774b"],["posts/2020/05/05/13/20.html","9c952b71ba30864597320842a450b20f"],["posts/2020/05/05/15/20.html","3cac22292e3d19b089240345a88d89e4"],["posts/2020/05/07/21/21.html","a91adb3594eb38886bcb81e95be0333e"],["posts/2020/05/09/12/20.html","c17541dee7efa8ac81994bdc7ec2200e"],["posts/2020/05/10/18/18.html","00227947faa9120281319464b62577d2"],["posts/2020/05/10/22/18.html","1d5fc2810e5d62130c56256ab5eed676"],["posts/2020/05/12/20/18.html","d98fb464193c40df57571b7e50c630df"],["posts/2020/05/12/21/18.html","85b72e25bf3045fce3401e1d2abb3f50"],["posts/2020/05/13/20/18.html","6c62355eeead593d0cddfe032d9c601c"],["posts/2020/05/13/23/58.html","f27532092ebaafd502e7565a3c4f0c53"],["posts/2020/05/14/11/18.html","975fb1bfbac77de074ca3a23b3676f45"],["posts/2020/05/14/12/18.html","d999c286da7e6de78858fd02e08942d3"],["posts/2020/05/14/20/18.html","30c63675e3d61c9eeaac7b1239f9164f"],["posts/2020/05/14/20/58.html","715eba10efba427ed4e7f69cd883a0ca"],["posts/2020/05/14/21/58.html","dda6945142c5552a0cac0296c3fc363f"],["posts/2020/05/14/22/58.html","753a17edda797b8696d619c3d7623afc"],["posts/2020/05/14/23/46.html","9976a502b1815f3629b8d7dc3c618f69"],["posts/2020/05/14/23/56.html","a07d986862737a3eef933b4a6ae143aa"],["posts/2020/05/14/23/58.html","e89f16c81ea0cd71f1735099dc7c16c8"],["posts/2020/05/14/23/59.html","0b8cb12ddddb463817860b30d1181191"],["posts/2020/05/16/20/40.html","280a8a260651ab32dca9105bf0f51051"],["tags/AGV/index.html","c511fbe1016774a0a253b90eff5049ae"],["tags/Github/index.html","49eaf872e20df8bebafa6f0a22b2671a"],["tags/Move/index.html","41855f2c323b467c02a360ed4df14ee7"],["tags/OpenWRT/index.html","90e34bd04cf040ea488e0488cca572b4"],["tags/Plant-Simulation/index.html","42fdd76c184e9c5bb74ee276d32f5cae"],["tags/Wordpress/index.html","122b8c53c616e64a2534374b1222fb57"],["tags/cad/index.html","80354dbe76301e7baa23fa35896b155b"],["tags/coding/index.html","753e56b478ac0748ec702fe0af51f28f"],["tags/h5ai/index.html","b07a4fb99fdd83f691e56a15a538ca44"],["tags/hexo/index.html","ccd9619c58035bb980a244eaf284b821"],["tags/index.html","970cfa19cdfe99cb9848fc5f439fe3d8"],["tags/nas/index.html","96d4b431852f12e57b04b970de822d7f"],["tags/tpyecho/index.html","a25cb2e5850a1244607295935bc25ebe"],["tags/transferstation/index.html","25b144d5638e3c0fa667109abc8fed2d"],["tags/typecho/index.html","b4a05f6bf011e3cce90a513aa9856064"],["tags/ubuntu/index.html","7d6a84784bdbdc71f9bb4e43a8024da8"],["tags/写给宝贝的话/index.html","4337138a3f38dc39ccb362bcab0007ab"],["tags/原创/index.html","a2d1ef47f2469ad8324a24544cce6ead"],["tags/学习/index.html","8b3b78871fc4a86917132e2c5310e7a7"],["tags/宝塔/index.html","5bb00bd9996d84b8331cb0ee2381e22d"],["tags/生产模式/index.html","76d5f5a6ebe27c395eb697b07ac00b54"],["tags/百度客户端/index.html","e19e78ecd4c5f3d0ae3bb5fa92ed2b3e"],["tags/科学/index.html","115d1fe3c9f3bff78fd27e383989385e"],["tags/统计/index.html","8bd28fe3cca0acc3f4298ab43a4060bf"],["tags/编译/index.html","6522ba9d832c50e39dc607e78487ccc4"]];
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







