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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","7532b49dd2c8fbb6df862ded35b1667f"],["archives/2019/index.html","48e50e3bf2f7993d8b8873b1e3c72869"],["archives/2020/01/index.html","ec1c75a8bd9f002e331e0bfd01413871"],["archives/2020/02/index.html","e6282a9e092069cfb31cd6da00c3c73c"],["archives/2020/03/index.html","6f8c1ed69e64e1be07666a7732512719"],["archives/2020/05/index.html","169907d88f55b7bbf4e32d3117f8f900"],["archives/2020/05/page/2/index.html","56c72ddd4c1643120ff297211b0ac382"],["archives/2020/05/page/3/index.html","ca796dd6fc34f7614996845aa00939ec"],["archives/2020/05/page/4/index.html","c1f2f2286a2af70d9a7beca2abbb007d"],["archives/2020/index.html","db9eaea54212d50ef7a32363c61c0c68"],["archives/2020/page/2/index.html","989af088efa455648b201ef388001050"],["archives/2020/page/3/index.html","826cf967eab2d363748eac74fc29a2ca"],["archives/2020/page/4/index.html","44c87cb0e5c556906e5ce55cc2244aaa"],["archives/2020/page/5/index.html","a07191e8e62dc3544a9118777fec483d"],["archives/index.html","cc6926f054d4da2efedd1a1a4c470a79"],["archives/page/2/index.html","530d67abeaafb40599bec131f6cd6deb"],["archives/page/3/index.html","a260a5a2272363b25501d9f2bcee9d92"],["archives/page/4/index.html","d47ab4cf6182ba92614166e788ae763f"],["archives/page/5/index.html","282f96963baaf61139062168c6d63507"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","e85c3b35ab4ac8e2cb558df423850040"],["categories/Code/index.html","081f76eb8cf68ecf25f6afe93523b4dd"],["categories/Plant-Simulation/SimTalk/index.html","3e0cdb9ed0bb4bd230cf8f9ca692b51b"],["categories/Plant-Simulation/index.html","8a19fa37cec95a646679c537570ba14a"],["categories/Plant-Simulation/实体/index.html","c226828fe70a06dcb2f1f7deab1f5078"],["categories/Plant-Simulation/常用代码/index.html","22045b7cfcc3596e5e49af0bcf7cd675"],["categories/Plant-Simulation/常规操作/index.html","42f2638f70a9041e34031141d9ed0082"],["categories/Plant-Simulation/模型/index.html","61b2b46dc8649d6d8db1e398d765db37"],["categories/Plant-Simulation/背景/index.html","9b0c49487c11bcdf50080bfc65601749"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","82ec38769fc3dd3809f8fd46d0cde1a8"],["categories/ubuntu/index.html","e29f6443c8e1dc721de8fb6f8081f45c"],["categories/ubuntu/ip/index.html","88c5366c0c482386eb0c06270a6e781e"],["categories/ubuntu/下载/index.html","c3a52ba677319a54f0946d6c06e1adee"],["categories/ubuntu/命令/index.html","ccb7356a05c0a80afe101679d6e8dd3e"],["categories/ubuntu/配置/index.html","454d6df7bc67200b99b24889aeaf71f3"],["categories/博客/Wordpress/index.html","b06530ce60353a601f1053c98e4b26d5"],["categories/博客/hexo/index.html","4fdd9efd0b47f1cd0b2337e2e6b34e45"],["categories/博客/index.html","f0beb50a0c89df9d2141d612e4a7d90d"],["categories/博客/page/2/index.html","a03315b308079c4ea626a4300a32c5b9"],["categories/博客/typecho/index.html","9b4c8f54098728ca28b7712e21efee3e"],["categories/博客/统计/index.html","a2aaf8495df8d2cd0ae2828c594dee7e"],["categories/宝贝/BB/index.html","c042c91a86d7f12b9c41ffdbea985a2a"],["categories/宝贝/MM/index.html","e8deffd18620494e2f4658e82869e089"],["categories/宝贝/index.html","45c9d481ceeedfd2e1bdc72cebb4aa91"],["categories/思考/index.html","4d664c1f11945b9732fce27492459190"],["categories/思考/职业规划/index.html","9ac8cb88aeab79ed4adf86527bf305a3"],["categories/科学/OpenWRT/index.html","483ac218aabcf30e54efd8c56c5c20ee"],["categories/科学/index.html","783ea5692aacac3169db5c6e5304d468"],["categories/科学/手机/index.html","f974dd88f63dd03dc36c962019f6fb97"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0b6f56d1d26bb326d8549d87356caa69"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","b9738b4161157cde036b46b85c8b2565"],["page/3/index.html","e5908daa3574e9c0d708f0aad084e6e7"],["page/4/index.html","cf19c43d8e1d4e4b14ade9f2354964cc"],["page/5/index.html","1936d96c490167e1f881687c252f4e9a"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","d949895ce3d37489156a4519843f82ee"],["tags/Github/index.html","d53409902094c92fa64da31921ed5195"],["tags/Move/index.html","026a7c66b05aff62dc20b2d3aacc43fb"],["tags/OpenWRT/index.html","70e479334c6a41e884eed42a005f74e0"],["tags/Plant-Simulation/index.html","aad2a5e6350630c0ddbba3c99094a6e0"],["tags/Wordpress/index.html","cb8ef38e4edd347309c259db5a4db1db"],["tags/buntu/index.html","83d46d7614a881a1329f15d8a300314c"],["tags/cad/index.html","0022cb16397fcf5250a49d7b44008a48"],["tags/coding/index.html","e17ddfe8e91d39364094f1e47d8b79d3"],["tags/h5ai/index.html","58b293a28f1c859f897b8b997e10663f"],["tags/hexo/index.html","6bdc45328b1cc91a990d798bc96cb472"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","f80674f3347c0742204433b1c5420c2f"],["tags/nas/index.html","cc9b79ba87b3344b42f022a2dcfd8f58"],["tags/tpyecho/index.html","fc09184415d64fc31a00622a555d1a46"],["tags/transferstation/index.html","27a1f9d1bf4fc6276882a216c8b4cb91"],["tags/typecho/index.html","1e516b6770f84ce86a4b2ad4b2a493d4"],["tags/ubuntu/index.html","cdbb20a02998af3771148580bec558db"],["tags/写给宝贝的话/index.html","c4ef0d5a84203bd55b954eced79c803c"],["tags/原创/index.html","f0863999bd955e6e784725c59cdfc739"],["tags/学习/index.html","a4d5d095c88f333e37977f1cc4a201ed"],["tags/宝塔/index.html","8bec24f5b1838edbe10c6560dee556e6"],["tags/生产模式/index.html","96f467c3f725729f9b63454800f00b23"],["tags/百度客户端/index.html","f539e71d32d8b2197ef6c718fc44a1c2"],["tags/科学/index.html","925b22388dcade016884228b329508f3"],["tags/统计/index.html","9b034b965a27f25cd0201f1906f70a4c"],["tags/编译/index.html","6875878c9721c9bc169105c36ec055c8"]];
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







