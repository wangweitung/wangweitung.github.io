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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","9b5a0e07a685942635409755a5ec440f"],["2020/03/12/妈妈写给宝贝的话/index.html","7000161c78012e40ab811a0f97c668ce"],["2020/03/20/磨人的小天使/index.html","a7e0f77fd7f71dd795cab555c6030553"],["2020/05/03/hello-world/index.html","50323502d51379211cde17eaff26a329"],["2020/05/04/AGV的用法/index.html","f445e5d4bb64c714abba62328832f61e"],["2020/05/04/Github创建文件夹/index.html","724f51bbd876d0cc1bfdf184c384579f"],["2020/05/04/Move的用法/index.html","45b63be503fdf2e0996022bf0c65a2fc"],["2020/05/04/PlantSimulation常规操作/index.html","9a955c7778ea3cd989cfb3382f3bc6e8"],["2020/05/04/TransferStation的用法/index.html","595f4e1d482193e1459708d0b722593e"],["2020/05/04/Wordpress问题解决/index.html","621daff86de5d4ab7b31b62adfd7c27d"],["2020/05/04/ubuntu安装配置hexo/index.html","432d6ef4112d2d078e1dd208ead1140f"],["2020/05/04/无科学环境连接谷歌账户/index.html","8aec93b87248071a988f8a9c59ad2fca"],["2020/05/05/Markdown的一些小技巧/index.html","bd6e67b65d5fc9ba4c6d4c89a067e269"],["2020/05/05/导入cad作为背景图/index.html","f4c0291f57a3d41e7f7ac0ff432e601b"],["2020/05/05/推动或拉动的生产模式/index.html","266a1c7ae6dc7d49fd8bf7cf54c0c24d"],["2020/05/07/在摊位下上网课的小女孩/index.html","41e5e7ebaeecdf5a4492671f5682453f"],["about/index.html","4b3f880be46a9c7a2a79d8a7e45fea18"],["archives/2020/01/index.html","6da63ccc1e364408921d8a283e6235b4"],["archives/2020/03/index.html","365346016544b7b470e726a1d7349b8d"],["archives/2020/05/index.html","b18ac5405a4ad6ed901eed92b8cb4582"],["archives/2020/05/page/2/index.html","71cb8020cfd76dcc0177db60cb7e9678"],["archives/2020/index.html","5e023e21c86f72279dafc29dec750616"],["archives/2020/page/2/index.html","5e6833e00efa3e17641f8b6485dfa995"],["archives/index.html","45f884efc94f9bb17d906f0a65ab3574"],["archives/page/2/index.html","5af8b50a9d39ee53433b58695bbecbb7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","e987feefd62c505f4795ab68a3762b60"],["categories/Code/index.html","d0df9aefb15a7679365183d0c9ea8cb7"],["categories/Plant-Simulation/SimTalk/index.html","5c4f1cf983b8ba9ba62ea3b3dc3f2dbd"],["categories/Plant-Simulation/index.html","08e772e0c9594fa41f1e4961d2276426"],["categories/Plant-Simulation/实体/index.html","2b5d462bd50fbe57d2b3a70bf0d7f516"],["categories/Plant-Simulation/常规操作/index.html","b33932fdca0b60ed1c4932d1471d3b95"],["categories/Plant-Simulation/模型/index.html","5cd0e59c0c178cbc3d5afbc99ac42ecf"],["categories/Plant-Simulation/背景/index.html","7419e05966ed554ce9a8ff95b6d60604"],["categories/index.html","df9e79a599d316331fd2b5715825eae0"],["categories/博客/Hexo/index.html","895a89f5669be6ae563dfd5155035125"],["categories/博客/Wordpress/index.html","3173bdc47ebed45c0f568abb30fa8040"],["categories/博客/hexo/index.html","7e83d9d3aa661cb4b22094f28636e60b"],["categories/博客/index.html","f4188f80c8853cb14da68375b1a1335e"],["categories/宝贝/BB/index.html","c7c610772dce54b11deb6bcfeca29402"],["categories/宝贝/MM/index.html","bb9d0fd7daf447b492f0eb6d4878bbe1"],["categories/宝贝/index.html","53bc519f3c126f37264a42cc4b27a1f6"],["categories/科学/index.html","2c05120544e336af12058b6cd54e20ee"],["categories/科学/手机/index.html","091f9297d1114e788183b83c42e9f037"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c4a769c4798cef6749e11b39b564ec83"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","64307f38b9695ce88a0e49bfe48747b6"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","8db0ef8f2050d160bd864440a000cf38"],["link/index.html","e6a05110a48608773921b9bf06d9b997"],["movies/index.html","77c76f63f2e76d2ef37b5be0b9365793"],["music/index.html","50ab391fd86e8f0e788ec34ad6d262e4"],["page/2/index.html","9a961c80a31f6a93529911bc17d97fd5"],["tags/AGV/index.html","34ff4160ae57b714b9e623cb01e852b0"],["tags/Github/index.html","f549cdc4522483b3df3a55a7c24e23a6"],["tags/Move/index.html","f5f7f6cde91b2980e7112367c136377e"],["tags/Plant-Simulation/index.html","e2380fcff92bedaa9fd8af1ff52de4b0"],["tags/Wordpress/index.html","704e3e41e4a8468fa51fd3c62afb702a"],["tags/cad/index.html","c91eedcdd23ebb5f8393962d45fcbeb9"],["tags/hexo/index.html","c91ed32b2691c970e469b5243a625667"],["tags/index.html","c15bc94a48b349cdc5bd02a0f70a4470"],["tags/transferstation/index.html","4f92b1d6f0f5d644f37f09b2af5db92a"],["tags/写给宝贝的话/index.html","67f8039c27bba639ebfe2ede899e0ba7"],["tags/学习/index.html","af900f0780ca635f7095fa0cf0cfc433"],["tags/生产模式/index.html","455ff0b5b559216a231bc67c07d980c3"],["tags/科学/index.html","8cb8eeb43bccce43c6aa022cb5c8a1ec"]];
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







