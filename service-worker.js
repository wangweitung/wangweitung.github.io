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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","c20c3a122c900774d5e11f1da3becc11"],["archives/2019/index.html","1bc67f61b246b449a1862f06ea79d248"],["archives/2020/01/index.html","0582f8f254042a5dea6b146e9e5a8b10"],["archives/2020/02/index.html","8f066bd7e0ecee227e72c9e9ba5434bd"],["archives/2020/03/index.html","baa69ee971d7761819a7ccafa3ee2d6a"],["archives/2020/05/index.html","429da897b154aaffb629982903bf22dc"],["archives/2020/05/page/2/index.html","6a4106d2ba98cf272e78c23abb46dfe9"],["archives/2020/05/page/3/index.html","1dc5a038b31468b0dcdb8bfac66f7d07"],["archives/2020/05/page/4/index.html","2c7cf7781045174ae18db37d43b2c3de"],["archives/2020/index.html","94ab28d3b10c9ee7579010f1326a9d47"],["archives/2020/page/2/index.html","7dc3b8dbbdaa167730d0f89cde927d82"],["archives/2020/page/3/index.html","e0a63081b2ff2f9e9a3f6316a9f8eb16"],["archives/2020/page/4/index.html","e2686542a0869a8f063e32c85d2f5e9e"],["archives/2020/page/5/index.html","f369f2fc3383b6f9e349ddf613723d45"],["archives/index.html","65464b5751b2efa0a55938ddbb67a839"],["archives/page/2/index.html","85715f9999a120eeee5e6816061882c6"],["archives/page/3/index.html","024fcbf5c6a521e20b69b31c2b600927"],["archives/page/4/index.html","06eadf660fccba599ff348a95f8c43fc"],["archives/page/5/index.html","a58a6340fd5cca7eedacdbea31a7c095"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","e7ce6a07f472731d11312796292ce74e"],["categories/Code/index.html","aaa7de7c3014db35122fa31bbbc32795"],["categories/Plant-Simulation/SimTalk/index.html","d01734b8e2ebf5110f5c49b6aab0e8ed"],["categories/Plant-Simulation/index.html","0465e609f97662532982eb9cd5cf3f46"],["categories/Plant-Simulation/实体/index.html","19ca20ae83e79de3ea89f46a135e9fb5"],["categories/Plant-Simulation/常用代码/index.html","b9b31c1664a8ad540c4c69db9f4ac492"],["categories/Plant-Simulation/常规操作/index.html","e68e37f31d05751a47d4836e88f313e8"],["categories/Plant-Simulation/模型/index.html","2840a64b5f76613ad11c427b4d50b440"],["categories/Plant-Simulation/背景/index.html","8d2e46c949d879bbbf6d580561c62ae0"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","b2096e6b52e11d3a1304630c2bc8f5bd"],["categories/ubuntu/index.html","2d762f3b1f9d53c28d4acc2f11e2f592"],["categories/ubuntu/ip/index.html","5f1c7c57bd1c798f74243f298ae29690"],["categories/ubuntu/下载/index.html","4e370afd9298d87fef6f3990be96ced0"],["categories/ubuntu/命令/index.html","fc6506e675565da3de4b68697ef9ed75"],["categories/ubuntu/配置/index.html","bc0c35728905295bc82baabc82690100"],["categories/博客/Wordpress/index.html","c60573e7c6c4d933b2f146d24f707809"],["categories/博客/hexo/index.html","4c7126cf6a0f363722ea4bcdce8d6003"],["categories/博客/index.html","bce36446ffba69060a1b375465f4bf2c"],["categories/博客/page/2/index.html","d4428e9c819c1de38889f0de86980af3"],["categories/博客/typecho/index.html","e8f414f16cecc1edd6d056601c1d4583"],["categories/博客/统计/index.html","5d8cf8e1b1b5f79d3ebdf0b98e218643"],["categories/宝贝/BB/index.html","ba3839c4b0282ed4e6c559c72ce70809"],["categories/宝贝/MM/index.html","b732cb8144050453e2158065c6c3f473"],["categories/宝贝/index.html","077f0d369951e549614895b07b81c730"],["categories/思考/index.html","65cfb19f064b940a41f6e1a778099163"],["categories/思考/职业规划/index.html","15ddffe4d80ffbf6d3248ac93368a592"],["categories/科学/OpenWRT/index.html","b3103687140f63b3e71a7d7970d1601a"],["categories/科学/index.html","97f7df6a0d73d80615e8246bde4f141c"],["categories/科学/手机/index.html","2108cb76a2d64436904bbbebe85bd75a"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","914c5cadbce5d64c8772c6ccd212ceef"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","466b253bb8faa199fe75d3a5afc3134f"],["page/3/index.html","311181153552314b753eccbe8c15437c"],["page/4/index.html","fd16d476eda88dccfb014b184cc3c228"],["page/5/index.html","45b2d1ad9a174934f95fa9c11e8bdd85"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","ad060f84e68ad83879e3f71e40043ab0"],["tags/Github/index.html","fbc3891666c0c374b322ef403f36116c"],["tags/Move/index.html","d5d7997db9d234490252e509ce15632b"],["tags/OpenWRT/index.html","004d9bed7e88c8f6a58db4a13669ac33"],["tags/Plant-Simulation/index.html","e2f85c37ed5229c1820a7a574a3d68f5"],["tags/Wordpress/index.html","be0bfea80618550ea4f99e1be9e3ccf3"],["tags/buntu/index.html","b40ac1e802743e31137368bb0c6fcdac"],["tags/cad/index.html","256cf94b3a5ce7b427f123bdddb165cf"],["tags/coding/index.html","e7753f73b7330a75bbdc8f94b3278acf"],["tags/h5ai/index.html","f28ac41249deb41c1e95143ae40471be"],["tags/hexo/index.html","b76564e2de8480fde1c23b195b90d802"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","674ba7f6109396e55f8055c6a2d6728d"],["tags/nas/index.html","3c0fa6d50a08bdb87e9fed682d06824f"],["tags/tpyecho/index.html","52e21efc237140222da2b57015105753"],["tags/transferstation/index.html","4b780c30c7b8a797fcb94318e17c1e8a"],["tags/typecho/index.html","c213ee875f4f0f335003eb6e80ebfef5"],["tags/ubuntu/index.html","fc4c539a85d6bb6caa3e13866e37ac9b"],["tags/写给宝贝的话/index.html","8940e5718f1afbcad55afc6a792d76da"],["tags/原创/index.html","e8a99e0f0f6ac8716a67c6e5e56f2d6a"],["tags/学习/index.html","22e19c94272276c0956e033b8bceccc7"],["tags/宝塔/index.html","8839274ede241c2d405e0bdce502fd36"],["tags/生产模式/index.html","1d193ebd0be49c6ea5e2989f025cdb96"],["tags/百度客户端/index.html","888c1ac6474301bb484937376eae8246"],["tags/科学/index.html","362fa32ced5562b6c1ed34cd717b5fc9"],["tags/统计/index.html","2260fa7c3124bf35b47ccbaa81c75567"],["tags/编译/index.html","1f53f9d4d7c57408e4ca0539381529cd"]];
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







