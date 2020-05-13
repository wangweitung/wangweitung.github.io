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

var precacheConfig = [["about/index.html","7b94c70e58dca53047f8ff91a358b40d"],["archives/2019/12/index.html","be22d84ebaf48737e0209310e67b7f08"],["archives/2019/index.html","eaa6d1b39e48b736798412d568d76af7"],["archives/2020/01/index.html","ed3c6581e01ec5027c91c4dec6228936"],["archives/2020/02/index.html","7915b436a0bfef252a5afd8e67a53478"],["archives/2020/03/index.html","a46a823dc7105c2be1a5bb253ff249c5"],["archives/2020/05/index.html","e2ecafec0bdb0d36994ffca1c9cd1e31"],["archives/2020/05/page/2/index.html","589976f6b866add55bdd63123510018d"],["archives/2020/index.html","f57a445ef9e7ecac471d1eb07979a0f5"],["archives/2020/page/2/index.html","f8dc8c01a74be2a40d649c70ba864695"],["archives/2020/page/3/index.html","b98e6c20a67596b6a71c681c52b44ca6"],["archives/index.html","14a24d738878e8ae6bb78a2c4bbf6922"],["archives/page/2/index.html","92ade00a37dad2217cab45e72feaa427"],["archives/page/3/index.html","0b4cca166e85fdcbceb95cc8fc45080e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","540317731533108d6152746c0ae71720"],["categories/Code/index.html","8227eee860c2486ee62b1b48edc4625b"],["categories/OpenWRT/index.html","bece89964b9d38896f0b85201a6476f3"],["categories/Plant-Simulation/SimTalk/index.html","ef19372df912035a9eec3b835ab49ba9"],["categories/Plant-Simulation/index.html","354c49437fa1562668fd250490e28478"],["categories/Plant-Simulation/实体/index.html","e800205c23ba802bb1408930611ba938"],["categories/Plant-Simulation/常用代码/index.html","09afb308d919988112e157d2b05a4443"],["categories/Plant-Simulation/常规操作/index.html","51c839cc89af05890a18fdff322bb640"],["categories/Plant-Simulation/模型/index.html","39fa3135973bac2cb9ee6cd5fa9194e2"],["categories/Plant-Simulation/背景/index.html","a6d7ebbea48ea940207ce3b5d7dc603b"],["categories/index.html","d8df5e9c85f08cf7963f0a9e4d8b6e27"],["categories/ubuntu/index.html","327561b5e29983c219064cc34707f907"],["categories/ubuntu/ip/index.html","d34527b3c4bc73ee120dfc1b3f2f133f"],["categories/ubuntu/下载/index.html","0d4020ebee94cbbf9a01a7aa247fdc59"],["categories/ubuntu/命令/index.html","073970517549b76e2c1dd17c76252c36"],["categories/ubuntu/配置/index.html","f179f79e871fd64def0c4a0395f5aa40"],["categories/博客/Wordpress/index.html","6ee00887680f8001eff027031401d9fb"],["categories/博客/hexo/index.html","a89eff65b7d972e23cdb9fb059ff5538"],["categories/博客/index.html","9c01894ff016e15014fedc2152522102"],["categories/博客/统计/index.html","0313b083ab57147f0626cf6fa50b274c"],["categories/宝贝/BB/index.html","f2b6c201453c11cfaed0d3d1ad72f9f2"],["categories/宝贝/MM/index.html","7108c061c035cb3c7aac8603597a9a21"],["categories/宝贝/index.html","6d1183b24c8c6db6d618a55c880e8c4f"],["categories/思考/index.html","67bacdcfdf523e6beb1823658d914308"],["categories/思考/职业规划/index.html","ca7d1179df5ebd85c6b5cc5b6b395035"],["categories/科学/index.html","513b478aa40ca3d90d5fb8f26dfab037"],["categories/科学/手机/index.html","aac7ccefa1aa6663d3cb85abff7cff1c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","766f2738166ebc908c62110566e16663"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d866780eaddbfa32cdef14cfd36f1fb1"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","fd2d54cab4f451d4aa3482167ce77a02"],["movies/index.html","a7ae7d6930b817063b66ca6a69d83730"],["music/index.html","bfe3d223764beaa5c5e7fd69525248c6"],["page/2/index.html","598e8d49d681526afbed540e7e5975dc"],["page/3/index.html","e6502371616378f1fdedc25978ed9cc9"],["posts/20191204A1.html","24a8b0601175235e6fc656b9241bcdf5"],["posts/20200115A1.html","9897e88f42eb9999e5ecb688209d4bf2"],["posts/20200116A1.html","1a8926838fa349cc0a595a239ef4c27b"],["posts/20200118A1.html","d76eb94a85c1badcf8ad3403de1327f4"],["posts/20200119A1.html","f8b5d93bcb04bba8ea7c663cecfb02eb"],["posts/20200119A2.html","afdceb94909f715f4bf2b8ece37a718d"],["posts/20200123A1.html","ff43075e95e100ed890e03dae2097737"],["posts/20200204A1.html","7782a815827d1da86f95705c077f2264"],["posts/20200312A1.html","68cf4ba9427632b1c55920113b49b2e3"],["posts/20200320A1.html","37f15fbbcec0d55edc58eaaf68606575"],["posts/20200322A1.html","4600ec243d46c6e3f20622886600f20b"],["posts/20200503A1.html","a9b44d42bc90e8ca723a472a6a6c59f7"],["posts/20200504A1.html","de18a94faef96b70eabfbdcb55681622"],["posts/20200504A2.html","c95ccad8ab857704d706c3581ce09c13"],["posts/20200504A3.html","f81f8f71d70ceec09cd0334d856b7164"],["posts/20200504A4.html","2051a86db7880f4f37fde93327d44d22"],["posts/20200504A5.html","73a9036a9b2d7c9bf76b9bdd036de6fb"],["posts/20200504A6.html","d50f72751db025b648e97e486241844a"],["posts/20200504A7.html","f9156ee22a9c2d8fa2886b9c8cb2457b"],["posts/20200504A8.html","c50b2f3d51f05c6602d2beaf3d90049c"],["posts/20200505A1.html","01f644d3b719ee9890c246a7e527bace"],["posts/20200505A2.html","fc6617d4d6008089a32cfa55fc9d0203"],["posts/20200505A3.html","83f9285032b86c1037f1db1508a3c9f7"],["posts/20200507A1.html","50a1d99285fb326eef36e5aad3efa270"],["posts/20200509A1.html","997400b7978add5caa47f2a47c74acb1"],["posts/20200510A1.html","15cbcadc3998f5f775b1515387c38c98"],["posts/20200510A2.html","1045afba9d4be06bbbe74164537b42c8"],["posts/20200512A1.html","f9fe2c1b67aa9ec960fa2d623b840e7e"],["posts/20200512A2.html","34a21e33acd179ae2e070967c7d3387d"],["posts/20200513A1.html","fa28568b99f4a5bc07d2b496bf6625f7"],["tags/AGV/index.html","d417712679c05633685cc0865c44d329"],["tags/Github/index.html","48846a4a3c318588822c1ccb54209594"],["tags/Move/index.html","a33d818fff7b3eab5874e74ab52a20c5"],["tags/OpenWRT/index.html","48b89013c6aa61192d7ca88be2793b36"],["tags/Plant-Simulation/index.html","e233ac99bbe0c04d05d476c561d8b666"],["tags/Wordpress/index.html","0d208f1a7cbcebb9c9e19bccf1af5d50"],["tags/cad/index.html","eea471bdfefa612e24e1f71d4e7c8a00"],["tags/coding/index.html","6eed41677f11fcf0cc66f55c7ea8cc49"],["tags/hexo/index.html","dee82666ce1193385cc4657c75a2055d"],["tags/index.html","757943d4fe2cc7a0180bdd5799285409"],["tags/transferstation/index.html","e24793527b4e9f700d31314ab81219d6"],["tags/ubuntu/index.html","312cd940543e8e87b50e2e3c065684a0"],["tags/写给宝贝的话/index.html","e3b40e03ac755e43cb7168dae165acb7"],["tags/原创/index.html","afa9bfbd908ca7230b1bb17c9ef2d5db"],["tags/学习/index.html","b6a5e69c47b0faa4f2911f1686dce5c2"],["tags/宝塔/index.html","f482d25b64e46b447f69a85b08880fe6"],["tags/生产模式/index.html","603f31208c8b779ee98b00955cd2aadd"],["tags/百度客户端/index.html","122d3823c36fefe873d7b36dc5d09c95"],["tags/科学/index.html","52fc66d90bdba756959375770ca0515f"],["tags/统计/index.html","379682ec0f521dfd99541a58a2d44557"]];
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







