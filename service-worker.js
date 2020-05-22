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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","bd81a2c21148176f156fa3844a031c5d"],["archives/2019/index.html","76c0edb97f4e918660fb3cfb3aa78229"],["archives/2020/01/index.html","c4bb1ec69b8414e92c5b89c50fd43ae7"],["archives/2020/02/index.html","6803494ae3119b6464fbfdc490473054"],["archives/2020/03/index.html","72ee58f8d194ce6723740c055a9541fe"],["archives/2020/05/index.html","24bbae487d31dbb1038e4098728d92cc"],["archives/2020/05/page/2/index.html","c6dc2462d33acdea4c8b8342ac7eb833"],["archives/2020/05/page/3/index.html","ffa2ac2d937e440c6cdf019d148b472e"],["archives/2020/05/page/4/index.html","2435103d527acacad292b5e9db447157"],["archives/2020/index.html","01fe0a8c7292e208dfeac79e751418e9"],["archives/2020/page/2/index.html","f9005f32205865b10746b0af032929e4"],["archives/2020/page/3/index.html","05555b17f0b5f102593fe834722af128"],["archives/2020/page/4/index.html","18c98c6989d395d268b2421699869ce0"],["archives/2020/page/5/index.html","c2ff44553140fe5dd013da01ab75cc8e"],["archives/index.html","807456d0dfc4e1be4e53132b19d1a3d4"],["archives/page/2/index.html","d69a71b5c15f8b21124eec07a910cdde"],["archives/page/3/index.html","0da0d6e52a73ef06c540ed565c3984dd"],["archives/page/4/index.html","1e3bb363e778133e6c0286f2ce6e46d1"],["archives/page/5/index.html","d8ee7d8d90b5b33817b44601b85c1431"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","5d5ef59a57b70f405377d8963bd7ef5d"],["categories/Code/index.html","de302ee25998eda5a9ee3615c412dfc0"],["categories/Plant-Simulation/SimTalk/index.html","a0d19996e8a044ca8151c41eeb982f21"],["categories/Plant-Simulation/index.html","4459b5c5b2f28b7af85870cbf6754f15"],["categories/Plant-Simulation/实体/index.html","6bd9f276549f88d5f98693b7c976a841"],["categories/Plant-Simulation/常用代码/index.html","0578ec889bb24e2e0a3080162344a458"],["categories/Plant-Simulation/常规操作/index.html","bbb3b3fecdf92df9b6c5475be2c38182"],["categories/Plant-Simulation/模型/index.html","fd8c477ec2436f0bc3642600e7df84e9"],["categories/Plant-Simulation/背景/index.html","7393b5976ad3f92bd68afbcdbeaac632"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","52f69f1b7d5bffdaf4f8284adfa6c7bb"],["categories/ubuntu/index.html","ea6f776d0daef9e59a07fffa2f04c963"],["categories/ubuntu/ip/index.html","2e10823a57bc1d5a3e59ad7cd29ba13c"],["categories/ubuntu/下载/index.html","ca93ee456cb8ce49e45ca68efdc785c4"],["categories/ubuntu/命令/index.html","101f3548e212de6e36d89279295901ba"],["categories/ubuntu/配置/index.html","08abe9b1cb2c61a107ca74e300f46704"],["categories/博客/Wordpress/index.html","824ea1764285dea75d136d264107043a"],["categories/博客/hexo/index.html","71c1107c5c8d4c09c0928753e847400f"],["categories/博客/index.html","e365e7860bbd036fba179ca42173b0c2"],["categories/博客/page/2/index.html","1e2b9e75c455e6a1f0dd4eddc78e3fed"],["categories/博客/typecho/index.html","807ea82036a1e85280471602d0eaeb80"],["categories/博客/统计/index.html","4207b6a22072892e1bd186a12b614fa1"],["categories/宝贝/BB/index.html","abf0f2a3643d1e44ba53d3ee088df0cd"],["categories/宝贝/MM/index.html","7243599d92399988d270dcf163975ee3"],["categories/宝贝/index.html","ee8198a694500f90422e20abcd4cf4f7"],["categories/思考/index.html","2578ad684bcca21e0b06059186154482"],["categories/思考/职业规划/index.html","1a84783fbbdfa80f711fc0aaf6c1ab3f"],["categories/科学/OpenWRT/index.html","c123421b20ed2ab77a7043382ddc95ef"],["categories/科学/index.html","86762c8f12534902fe57b86c670adb42"],["categories/科学/手机/index.html","000ea5ade8d62b7201163429705a23f6"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","dac36c06c52de8bd9493d50de6ee0963"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","e74218883ef7830250a4ff1785ab3bbe"],["page/3/index.html","259b311d73e7445e4944829e3c244b54"],["page/4/index.html","702055ed926d2ad6cef13e176937deb3"],["page/5/index.html","9aa55cdaf5352f9877ad0a325b7afb0a"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","5f12d8bd6d66facad4c0c3cf1a7d4058"],["tags/Github/index.html","1fdf74fcff2520fe81f5ee262b7f43fb"],["tags/Move/index.html","99c02246bb656a7ca2cf6960b032a848"],["tags/OpenWRT/index.html","fa3e7340201ea6f5d70818d23ef4f738"],["tags/Plant-Simulation/index.html","b93e1375116587eb1f38a33f40a2a7d4"],["tags/Wordpress/index.html","157eb7d8b39c7aaac4c3b0a19fd4d322"],["tags/buntu/index.html","bad3790c65f6ab534427ef9d56058ff1"],["tags/cad/index.html","662fcc5859f62ab77ff4e8cb1780ba67"],["tags/coding/index.html","2b1d538cf78e64bce6e7135266e1bba8"],["tags/h5ai/index.html","605d25251ea13fbcad2d70845c3f5035"],["tags/hexo/index.html","8fa3a704cf56f7164dbe3c68ebfe92b2"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","77f24afab3782d6fa7dd5ee59ca17a4b"],["tags/nas/index.html","e5e3076b4dcf5466e20577415c9c1da5"],["tags/tpyecho/index.html","6cdd288046592eab9c23df50c6f00b2a"],["tags/transferstation/index.html","5cec9c10214bfcee985bd509fc4e24be"],["tags/typecho/index.html","1b7cb01631cffda344756e080df97a03"],["tags/ubuntu/index.html","a9cc7f361c8f1edf5777dbd7e31b2879"],["tags/写给宝贝的话/index.html","c76b2bbcdad00464110abc8908b99fae"],["tags/原创/index.html","534af8bf830d7e51f7261e8e101bf8c1"],["tags/学习/index.html","5bb3669948942d38992f4bcca455e73f"],["tags/宝塔/index.html","c476b97515d2af7207e40a3fbfcbe75d"],["tags/生产模式/index.html","228fc390b163385f27fde18f2ea06871"],["tags/百度客户端/index.html","430de87e25e7278b8613c2025773fc08"],["tags/科学/index.html","ccf9ce6dbf5315b54c1f77b0cb222493"],["tags/统计/index.html","982145488ce476cf916b3e29fb4976f8"],["tags/编译/index.html","962ab373a08b54a58ff2665053131988"]];
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







