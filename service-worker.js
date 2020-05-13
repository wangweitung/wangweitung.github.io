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

var precacheConfig = [["about/index.html","3891bf083f76009a531b351ce42f6bb9"],["archives/2020/01/index.html","4d6aa7844d06a01e177aeecef443af2f"],["archives/2020/03/index.html","ae2580d0f1399b9dd2dee6ff83384966"],["archives/2020/05/index.html","fe82345d2161b813bb7df6000f2d4b63"],["archives/2020/05/page/2/index.html","abd2df59dbc63ebe748b13d8d8952336"],["archives/2020/index.html","3d271236c8b5f89a2a295f5c702b0c8c"],["archives/2020/page/2/index.html","9c4392d5691e898653d4b44cdc39d0c3"],["archives/2020/page/3/index.html","aa3277abb3db384e6bbce4c8eadcd257"],["archives/index.html","2d5c6cf24e0c7c32a8bb9a47696f4c43"],["archives/page/2/index.html","0e2a2b1391804d3cfc8256078a78fc28"],["archives/page/3/index.html","9467156fbd101d96a81e2988b1063293"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","fe8cfdbab723304c2d23fae22ce103ea"],["categories/Code/index.html","c0d5d26a34f7242b7317334e76e44564"],["categories/Plant-Simulation/SimTalk/index.html","40a890770d26506fe2425185b75ab07e"],["categories/Plant-Simulation/index.html","60390c9cdb16e7bfa5834d44a2a11e01"],["categories/Plant-Simulation/实体/index.html","12cb2f92321747294aa157b29dfb5eda"],["categories/Plant-Simulation/常规操作/index.html","5821c44b2213f068b431e945f4fb0f80"],["categories/Plant-Simulation/模型/index.html","1c332cb8355e15c0b12c81838fe63982"],["categories/Plant-Simulation/背景/index.html","19a107cf7b6645c9b495783e5bb6e02a"],["categories/index.html","9d5565b32ac9e9096ce8ba6bdac5c559"],["categories/ubuntu/index.html","b168b177a687965ec706cfa7d5e61f38"],["categories/ubuntu/ip/index.html","071f72f18eceaad59a9802ef8c646b1d"],["categories/ubuntu/下载/index.html","70a4273c6d85712c164d813e332701fd"],["categories/ubuntu/命令/index.html","38d88823e0e146d8313c26570b9c2328"],["categories/ubuntu/配置/index.html","96c02f179dfcfaad12911878a532d61d"],["categories/博客/Wordpress/index.html","5d2ceb5f5712ce51d375d162ebe4f61d"],["categories/博客/hexo/index.html","6e4ec2f4d2809c7efe0ecb9e8d3bb465"],["categories/博客/index.html","7b24ee84cd631fe828dffec6adb7041a"],["categories/博客/统计/index.html","86a9d8ae1fd2dc2f8de39db6bd3c2ef5"],["categories/宝贝/BB/index.html","1eb5b4845d98af526aebb1eb91d171bd"],["categories/宝贝/MM/index.html","52c4dae847be37ee211c81e892244394"],["categories/宝贝/index.html","fc60a832432dd7a2de54fef8f90e7513"],["categories/思考/index.html","9369d847fa474304d1728a4c0e6f40fd"],["categories/思考/职业规划/index.html","8747f45020e6fd9f02241111fc0c29a3"],["categories/科学/index.html","ded4f6c8c52f606a954e2ec188c5dcff"],["categories/科学/手机/index.html","d1717ed1c3d6686b740d6df24e651be2"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1a76770c3ef0be13d1b2250bf958def3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","bc2941a333657b003d14c73fc7fa3bbb"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","5e776af8b615e82f11d869f408ee4e76"],["movies/index.html","decf9a51cef331ab55c76fd46402e8d9"],["music/index.html","bd1fd230c1d8dd9085776c27bc9f2736"],["page/2/index.html","87512da944388dc5cf6ddf8c0584be3a"],["page/3/index.html","44776a27c416564423ff7bd4cdb99ae8"],["posts/20200115A1.html","11bb78ecc3f4ef53e47614fab1502c61"],["posts/20200116A1.html","88ac21109758c693cbc9b6799fa52175"],["posts/20200118A1.html","4a8f4fbfd13ae292a7b5a238bbb10fed"],["posts/20200119A1.html","469d337ac3ccb4ef6de888246b608522"],["posts/20200123A1.html","8d879b28af6d0851fb0c56c03d3044dc"],["posts/20200312A1.html","3772ea4f1aacd1b6bf097b795cf6b072"],["posts/20200320A1.html","c75a0c99df619e620faf4cd67757a5ba"],["posts/20200503A1.html","6e4be1407852393e4a15338b70c11be0"],["posts/20200504A1.html","4318696a6fc5a9266fe42ec39055741c"],["posts/20200504A2.html","00882116f93a8caeea094c3604ee925b"],["posts/20200504A3.html","a83394fc5ae8e543cd586f70e7dd9ba1"],["posts/20200504A4.html","8bcc8ff2ee0d5dd1b76d2d3b031d58fa"],["posts/20200504A5.html","91099837ead1be4d16cb8e90e960a65b"],["posts/20200504A6.html","b4d780f501ed71cbc00fb0b08e0a09cb"],["posts/20200504A7.html","697c1b23e44553b09ff4269431e10676"],["posts/20200504A8.html","ae3df7d670b30ce4f8cf227637806a7c"],["posts/20200505A1.html","6b1618567357185298dca0a090f9e9ba"],["posts/20200505A2.html","600ead5254d78ba0b011ac9aea68d468"],["posts/20200505A3.html","f2511be30e988eac0827febedc219460"],["posts/20200507A1.html","ad6417ba811fbb0ba14023b5e2dc52e7"],["posts/20200509A1.html","198799bdbf2658e6876ab29297addd6c"],["posts/20200510A1.html","f01b51708eb6b95a66f54b147bcb0820"],["posts/20200510A2.html","4fab92a2973f3cb732b4dc3307719f27"],["posts/20200512A1.html","d06afeb119cb7312de6ff90d6d4fcf9d"],["posts/20200512A2.html","7bb2b90a1a28d536a28950bfc15f9cc8"],["posts/20200513A1.html","0a83707c7ed4a162538c3b5469be5510"],["tags/AGV/index.html","72f41ba18c7f518dc6dfb8c035ff8b2c"],["tags/Github/index.html","6bc468a27bb70e125bc643746e7d3491"],["tags/Move/index.html","22115c8ed2949fb626c31e833d413f4a"],["tags/Plant-Simulation/index.html","f496447e8a4d1cb7e85b6cf28dced8eb"],["tags/Wordpress/index.html","4de420aeb0ee49b280bc9b9b2d6d5c27"],["tags/cad/index.html","178076ce44b7a4cc3db2467a903c0e25"],["tags/coding/index.html","a85c356179937a646ed5f89dc25d473c"],["tags/hexo/index.html","be8d520001ee823f4ea902fc2332293d"],["tags/index.html","2c7eedd4928289dbe4c72bb852ab7478"],["tags/transferstation/index.html","026310b2cdb3d0df6412aa2ad7c31342"],["tags/ubuntu/index.html","ae48730d039c09c1cead71d5dd14f5da"],["tags/写给宝贝的话/index.html","dd6b297757be4b8ad8421de2d8b1df8b"],["tags/原创/index.html","1ba672d64f5277cbe8785c959c6a16b6"],["tags/学习/index.html","431fab244f199e638184c19c94b332cc"],["tags/宝塔/index.html","3f54f9fd5af60f7cb9226710293d6c3f"],["tags/生产模式/index.html","0c0355382237271f51a05fe4b5ebf919"],["tags/百度客户端/index.html","7f4f5b59841fc26e9d2145415d74d1f4"],["tags/科学/index.html","eac4eda5debe87ea6c6e40880eea1dc7"],["tags/统计/index.html","06748f2ef166a75060d45c966d69e09b"]];
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







