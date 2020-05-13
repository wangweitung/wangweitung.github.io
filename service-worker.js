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

var precacheConfig = [["about/index.html","d008bdaae21f0a9fdc0812f029a782e5"],["archives/2019/12/index.html","fbfa2de2b320451fa551a78e0cde2bde"],["archives/2019/index.html","d8e1e93a95cd3d52e261d743d2353784"],["archives/2020/01/index.html","737054da18597e63ea73a49477260010"],["archives/2020/02/index.html","35af1d9ac05062016c862df8aa61399f"],["archives/2020/03/index.html","8fec3e467c2e9b3e0c350f0d68559fff"],["archives/2020/05/index.html","eb624ddbafa1ab570da03be1e1756eba"],["archives/2020/05/page/2/index.html","489c7dab994dbf3f160852d0747d7c6e"],["archives/2020/index.html","d2e4dbd1512877c996bb78ecdad13d04"],["archives/2020/page/2/index.html","90f2d069cea3ade321de10bd90ce4460"],["archives/2020/page/3/index.html","b9c9790cdc37b73320def79dc8e3fada"],["archives/index.html","e8c817ea3c1c624e33afc191274bc452"],["archives/page/2/index.html","f140bc9351b9caeaa86e4299427035fe"],["archives/page/3/index.html","d435d65990a9a91dd3b471890205c102"],["archives/page/4/index.html","90c97f418a769a7d7fd78dc1ed75db3c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","67bb9f78473c85535b41ba8dc9bb0d1a"],["categories/Code/index.html","5bb6f01be696a2624564892e377e09db"],["categories/OpenWRT/index.html","db69a7a78a0bc3178616fb471cfc7619"],["categories/Plant-Simulation/SimTalk/index.html","cf4364526b2ed09df13ae3648297ec74"],["categories/Plant-Simulation/index.html","b50282f776ab757690bda0522ab0bca1"],["categories/Plant-Simulation/实体/index.html","a913c058c740917de1b5f2fb201b66a4"],["categories/Plant-Simulation/常用代码/index.html","ac465d24ae04e8d93da58200a445a065"],["categories/Plant-Simulation/常规操作/index.html","e2849307603248fd3d38de1d66ee7672"],["categories/Plant-Simulation/模型/index.html","32b5c82520125e0e94295589e3716734"],["categories/Plant-Simulation/背景/index.html","16ada37494e86c78330da4883ccfb3d6"],["categories/index.html","da62853ea8a9eff39aa648fb82a4cdeb"],["categories/ubuntu/index.html","3048d3858197d5dfc2389c9547ddcd77"],["categories/ubuntu/ip/index.html","3131fc9298d9c5ae7cea99cf62848f1f"],["categories/ubuntu/下载/index.html","41b284ffda6ad70a8fc7ce4e25fb21c7"],["categories/ubuntu/命令/index.html","735e2d02c725723476fe7f9b92ff7c89"],["categories/ubuntu/配置/index.html","618e7614278e61cceb735bdfb8cc135e"],["categories/博客/Wordpress/index.html","8640c962d763bdba543b1ca2e871e002"],["categories/博客/hexo/index.html","12f6f3318e5297df26a9ed7dc5b19731"],["categories/博客/index.html","46cacdb63c31eddb274c2fb6300d9a7f"],["categories/博客/统计/index.html","76a33bfdb0908ffc5b33bc9316809449"],["categories/宝贝/BB/index.html","3ef2f8ec492507b55ce67ef964bfe09f"],["categories/宝贝/MM/index.html","221b027529a696c2abb42abb2530de3a"],["categories/宝贝/index.html","0821f763d7a51aee18ac9f3e9f221abb"],["categories/思考/index.html","551d0c4e79ef8f47e551426a9894e56b"],["categories/思考/职业规划/index.html","a3c9a46f65634b76ce9f3ecf19d475f2"],["categories/科学/OpenWRT/index.html","86b18fb7f8ec8c2a47ad9cb9bef092c3"],["categories/科学/index.html","c1c3246a5ecdef75d0f1617075c5d3b7"],["categories/科学/手机/index.html","e045a50130e07af5451db09385483017"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1f4fce9c0f235f9cf8dad410e6c907e7"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","23ab557d8f0a79a2f98b6af7d2d5d075"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","24a3993ce92cbfcd5d2b423091a6393e"],["movies/index.html","d64277177a09d12c7141012178c2e0de"],["music/index.html","65fc49b7a57235310044923fa56a1679"],["page/2/index.html","e0c7fb3749f2956e8d593960f554f698"],["page/3/index.html","1f8a4a644e723be801fcd683cfaf7dbd"],["page/4/index.html","70e9786b0cd787c7bcda6faa6a3e67e9"],["posts/20191204A1.html","2fe6bb53d800c436e9ed4fbc38935806"],["posts/20200115A1.html","a2eb2bf1baf2205f295b1d36de5a6714"],["posts/20200116A1.html","e188ee9f01ed995b2e0a1f318d6dbb1d"],["posts/20200118A1.html","03a8ce877313116337bea088b0eaae62"],["posts/20200119A1.html","93ef71583d5e0b42f8fb8dc94703031b"],["posts/20200119A2.html","115fe6bec13624af4179e66826ecc66f"],["posts/20200123A1.html","bb1c7d63f4e7ea04cef04b9e4a758749"],["posts/20200204A1.html","204486f37caffb6aca659410a7512208"],["posts/20200312A1.html","77fe9532e6264d4d09c052f310b515da"],["posts/20200320A1.html","f4f9dfa50a51dbb90003407c13fdc4a0"],["posts/20200322A1.html","1ef15e534f7d4915a53454952f02e587"],["posts/20200503A1.html","1b7cd54d3f1de66adaee3f788adb66ea"],["posts/20200504A1.html","832fe112fa067a70fc4d8bc3beb5dc83"],["posts/20200504A2.html","cc9df1cf13dc125b8dad401f375cc488"],["posts/20200504A3.html","a3d4a2e7222297eb47f0cd2682c8c700"],["posts/20200504A4.html","f7e0cba0f80aefb7a1b76280957cbfc8"],["posts/20200504A5.html","157e150239dbd8d2e9afaeafc8b15b00"],["posts/20200504A6.html","3e8dbede4ffd0b27f3db4c4bd6cb3a22"],["posts/20200504A7.html","667a0e211f3b3ab222c74ae3a62dedec"],["posts/20200504A8.html","1b2ce15d8e1f0aca7b751c0e3d5e7254"],["posts/20200505A1.html","58ebc8428aa4fbf6fe03379c575eba9b"],["posts/20200505A2.html","07baab1f1ccad69c87b5593f501d0bbc"],["posts/20200505A3.html","5921b1e263852b4e7aa0f062a709a38d"],["posts/20200507A1.html","502ccbfe12237977b8f1028216508a3c"],["posts/20200509A1.html","98a09ef330b094b056a23a5536cff024"],["posts/20200510A1.html","c51ed5ac3bd56edbbad122c2f38d0290"],["posts/20200510A2.html","51c6974cbb0606b30af1bde5d983bc40"],["posts/20200512A1.html","61770bcb99d31acd58a73c5262a4514c"],["posts/20200512A2.html","ea9c8194f0915d980bb3497cb88445bb"],["posts/20200513A1.html","b8dfc00b8de0cb224e30936adc3b1e8f"],["posts/20200513A2.html","14657608d0fde0cbc7437727aa376514"],["tags/AGV/index.html","e82639046d2c11415814dfe86d5970aa"],["tags/Github/index.html","1d34524895c338ea80912c67be91fa21"],["tags/Move/index.html","1fe26cae67ccac6432482584074d8d21"],["tags/OpenWRT/index.html","0e71350f3208761bafac1593e8ecda6a"],["tags/Plant-Simulation/index.html","12480946a180bb9316de88d0205db0ce"],["tags/Wordpress/index.html","ed79f9fb5fa2d92464b68f1af7062471"],["tags/cad/index.html","4e18b8d4a51ce5d1b7d19cc00403fbd8"],["tags/coding/index.html","29731f4c3f6c4937e65fe64ceb2a16ff"],["tags/hexo/index.html","c771d6b7e5233e037498fdcc52892705"],["tags/index.html","de10605e8eeea44db32850f9e87426e0"],["tags/transferstation/index.html","242f241b377e2a66d029f74231019ba6"],["tags/ubuntu/index.html","3fd853c48afba3fb4dc083d62877172e"],["tags/写给宝贝的话/index.html","f2479ca9e03d8b29669ab2d2f42f8f8c"],["tags/原创/index.html","f4d941374e7d9b72986c9dc64720360b"],["tags/学习/index.html","d1a6e3f6e0a51295b966a9c757266107"],["tags/宝塔/index.html","e87f757b18dbba2d9001788960536e08"],["tags/生产模式/index.html","43bd2208f2c873df17e4fa2fa644dc7e"],["tags/百度客户端/index.html","d9175dd73a1ac98f10b8ed1cfc7c3fa3"],["tags/科学/index.html","9e15f56df013c727847682bd08b1e54c"],["tags/统计/index.html","c81dc169b2461bad1225200de6f5f253"],["tags/编译/index.html","6daff7c7ed55f665702044af79d32d93"]];
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







