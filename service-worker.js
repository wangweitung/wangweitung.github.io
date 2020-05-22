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

var precacheConfig = [["about/index.html","b7edb447adbd0c3233f4a8b949b77ec9"],["archives/2019/12/index.html","7669f0fad0645fa1086a18510e590904"],["archives/2019/index.html","de622a487e8a01c07df69c5ffb6806c7"],["archives/2020/01/index.html","a9ee3e5326bf257accb9af1fac69c667"],["archives/2020/02/index.html","1b7e005a27beaa98549bcfb3f580a3cd"],["archives/2020/03/index.html","9151e8564fb64462ae03a9fe5ba7cb1a"],["archives/2020/05/index.html","1ccf64fe0cbea51b57c1b77aa020dcc6"],["archives/2020/05/page/2/index.html","3a2c6e8bbb6f9d86f55f3ef41976d1b5"],["archives/2020/05/page/3/index.html","437b33c0deea78b9ab663d09c4e51167"],["archives/2020/05/page/4/index.html","549bf27fa794e8608217d164fd18c70b"],["archives/2020/index.html","b87db8a825c68f7c61bc29ac5a022466"],["archives/2020/page/2/index.html","2606ba3ba687918e5a04c02a6ca9bb7c"],["archives/2020/page/3/index.html","278a94d162040c6f8f13c150fed9abfc"],["archives/2020/page/4/index.html","c8a00ae9bd489137d67abab80b14d0bd"],["archives/2020/page/5/index.html","994877c1ad699414f492e3a85480dad5"],["archives/index.html","9340023f078a49ffab4d50b37c4cf25a"],["archives/page/2/index.html","fcda850ac94aed8a059e3fc5c773f34c"],["archives/page/3/index.html","f053751944f20b4213451b527dc6fea4"],["archives/page/4/index.html","7564a2364698e52053c6833df1157dcc"],["archives/page/5/index.html","6f148a180956ac36618e60617d3df3d1"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","c1a6368a0c07628b260401ade5e19b5b"],["categories/Code/index.html","1da5e50f9a153ee8e3f6fc3e3590afd6"],["categories/Plant-Simulation/SimTalk/index.html","ac2b02703adaf0da626e573c0f8c5636"],["categories/Plant-Simulation/index.html","2dd71de1002b6fe4cf1481cb06218553"],["categories/Plant-Simulation/实体/index.html","93fb4ba880b41f60f77212dd297e5f34"],["categories/Plant-Simulation/常用代码/index.html","a1fed6afd0c97b596c45287aa8fefd62"],["categories/Plant-Simulation/常规操作/index.html","6bdfe805195780a8e90fe3e96dd5c70b"],["categories/Plant-Simulation/模型/index.html","3435604dba5f664fb7152bae4208ee95"],["categories/Plant-Simulation/背景/index.html","c0b82353486184fa76de22f576b189fa"],["categories/index.html","1c797c8a27b0baf97cb7ff158dad1e87"],["categories/nas/index.html","b22f6fbac9640e7a34ccc7a7da043950"],["categories/ubuntu/index.html","dc4a8634aa9e3d2d5eb9cc8998567aa9"],["categories/ubuntu/ip/index.html","cf773f8b4dd32ca511fa03c5bad2a5cd"],["categories/ubuntu/下载/index.html","0b2e18d226f9644729058f3f477d93d6"],["categories/ubuntu/命令/index.html","5d538d361f57de2a2b8fe37943a545df"],["categories/ubuntu/配置/index.html","581e9b1e100e707a03f5bc4c6b2b6451"],["categories/博客/Wordpress/index.html","6effb6b0bde1de89cb589605227417f8"],["categories/博客/hexo/index.html","59715d795a0ffe799ad943b61ae902d7"],["categories/博客/index.html","669b4c4cdf0271e8f3bbc9fbe7a17f0f"],["categories/博客/page/2/index.html","ed35edfe9e71c0357471f43fe084e271"],["categories/博客/typecho/index.html","29544aba7ceb01502ee70c9eb9909666"],["categories/博客/统计/index.html","daa6974e6e107e12bd82acb53594bd76"],["categories/宝贝/BB/index.html","92c1f1f4191fc94a0c29c02048719c38"],["categories/宝贝/MM/index.html","43c7f3ffc03b50309be45319b2f59569"],["categories/宝贝/index.html","d7ef771264bffeaf96ff13da74a9b56f"],["categories/思考/index.html","ab05cf0b66e452f12eb4e69484f3c3ad"],["categories/思考/职业规划/index.html","39addd09479b3c5a1fc3b0df0bb95394"],["categories/科学/OpenWRT/index.html","a03bc01d6c1c0f73f0ebb3ff0cc9cf21"],["categories/科学/index.html","76aa5d7bafd35f3167c39ce765e7be5a"],["categories/科学/手机/index.html","0bb4a9b6d6b9e54972546264c5cb9d19"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3f07cafd79d1a7271b732447b6e15740"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e6054eecaf46ea224fb6d151ae3de1e3"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","284a3fb5f15defd2fa922ec1d4af5491"],["movies/index.html","507a548d38b7b197eb05491bbadfb928"],["music/index.html","2d15dac4847a4de1c3b7eab71645f57c"],["page/2/index.html","83428dca22e2e522690511cde977a19e"],["page/3/index.html","c7354135550b04c71ecd0298b589ae24"],["page/4/index.html","07d60a5689746089ca6043449a94417e"],["page/5/index.html","58f020b28357df885d7f6661dc954e60"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","8e5b9391c3bf710b681289d7fa2d5b24"],["posts/2020/05/13/20/18.html","e8143415bba55741441026a1d4dd74f0"],["posts/2020/05/13/23/58.html","dc169fd57b9c12421c8cb0ff78d8903a"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","f8655cbe53327bfcaca17cf427804c37"],["tags/Github/index.html","ae11d7cf7dd4c84989d355cd4773f0df"],["tags/Move/index.html","6d1fdcfb5d5eee305795d94fb3870504"],["tags/OpenWRT/index.html","233d2a63a9621634d844de00dda6462f"],["tags/Plant-Simulation/index.html","af9d7ba925d159c15c1bbc20044c4521"],["tags/Wordpress/index.html","be2600d905818c6b1432aa29d9570f12"],["tags/buntu/index.html","c05ca816399f704d69dc64d27023cd89"],["tags/cad/index.html","49bb1ec66a51f9fd3353f9cff27987c4"],["tags/coding/index.html","d9ba60704055f21f4c29ce7f16acb18a"],["tags/h5ai/index.html","318b7f46f5e605373440da04768493a3"],["tags/hexo/index.html","103bb3ed1c8d26fe6798a88533c86337"],["tags/index.html","568383478c20f8710ae5124c4aad5bcd"],["tags/lychee/index.html","bd67c41f57351f7ad8cae477289e5cbb"],["tags/nas/index.html","3649a8297b99b0864657b63271410755"],["tags/tpyecho/index.html","f566fbe599a121c6af4829423bb3f008"],["tags/transferstation/index.html","25eb40596c98e25cbd6b3b60d742b52a"],["tags/typecho/index.html","698e75c9966332bb719a95b1c74dc443"],["tags/ubuntu/index.html","d4189bac85174465200c9c49cbb7fc52"],["tags/写给宝贝的话/index.html","feaafdf29d099dd9068e229bb2a6f7db"],["tags/原创/index.html","3d4f015fd0ab89a0a7f9de0b402a4668"],["tags/学习/index.html","63b13a32e8efa49ba0838647cb51ae79"],["tags/宝塔/index.html","33c9ceadc0de6aae444c1586a0e93a8a"],["tags/生产模式/index.html","1be53cd4c8562e0710eb1b7553652b53"],["tags/百度客户端/index.html","fcffe695a8e3441631c8e82d51eb43b7"],["tags/科学/index.html","75c2261857961aba70e39da3602ddd5d"],["tags/统计/index.html","616ce02760fecc68b2c1490a5229bb5f"],["tags/编译/index.html","0e0be73c48d09aa5ffda3c41e211518d"]];
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







