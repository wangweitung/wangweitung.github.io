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

var precacheConfig = [["about/index.html","2e627d2d384af32ce28df83b4ef7d1af"],["archives/2019/12/index.html","2ea8f3916eeefda7978ee6a44121d431"],["archives/2019/index.html","2b98638d998d80d4737ca8e1abcbe6ca"],["archives/2020/01/index.html","6c82d25481edd134cd24430b353a4f90"],["archives/2020/02/index.html","fa496d82c14234d5acc53f57c1c6e8c2"],["archives/2020/03/index.html","b0f675703c60ec108ae72f4b17987865"],["archives/2020/05/index.html","7097fd0861c3d4b437f9f7a5654dffc5"],["archives/2020/05/page/2/index.html","3e57cabda47f16becfb1d05aeb55e4fc"],["archives/2020/05/page/3/index.html","690dcca7797c74892b0e21f2c0eadf88"],["archives/2020/index.html","ca71f1cd284e57191331fa3503011a0d"],["archives/2020/page/2/index.html","bcfa56ba1e674ecf363745ec8e6f9d44"],["archives/2020/page/3/index.html","cd2aa43809372337c207e3f7a4968d2a"],["archives/2020/page/4/index.html","113eb15ff85fb5ca5009d96f0c5c7423"],["archives/index.html","425a12ed5af98f02d80d80fcea0045d0"],["archives/page/2/index.html","05f187ae68077240bf7957936f63ac14"],["archives/page/3/index.html","eacb41529463b495ce5221ed07c62bd4"],["archives/page/4/index.html","e3fbcaf35d9561990b2c1aa332c2d931"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","711105c84724df0b4f1d191e79ab7022"],["categories/Code/index.html","c561531e7267042ee8ed31e523448c97"],["categories/Plant-Simulation/SimTalk/index.html","8902044b2ed96474f77ab17806ddf6c6"],["categories/Plant-Simulation/index.html","c0a51968604a5401c910f6696195d556"],["categories/Plant-Simulation/实体/index.html","19973f3f487bc6517f0de02891efab21"],["categories/Plant-Simulation/常用代码/index.html","24208731f00d451bb68b83f4f9661bfa"],["categories/Plant-Simulation/常规操作/index.html","de9e31638af8550fd966b22e27891ce2"],["categories/Plant-Simulation/模型/index.html","99fb5f16405147481a0c62b67e80f8ca"],["categories/Plant-Simulation/背景/index.html","5300b3baa8a2a88b45eb684489fca5b6"],["categories/index.html","5ff49a474501c4e420ce509361403573"],["categories/nas/index.html","e780cea252985fc761df41f9ce91831c"],["categories/ubuntu/index.html","1bdaedb0507f60b710a8b1f84f989ccc"],["categories/ubuntu/ip/index.html","57617d98b5e673f983a3a3c7cbe8864c"],["categories/ubuntu/下载/index.html","15196b35d9fdde3f6e082ba0e3eb49e8"],["categories/ubuntu/命令/index.html","2cc43343158dfb7efe25a1dc5a85e634"],["categories/ubuntu/配置/index.html","959c9a9d15fefc8dbae63159c27be5ab"],["categories/博客/Wordpress/index.html","21775ad5d5e3757d236df4e00de0a66b"],["categories/博客/hexo/index.html","982cff0ee63116d8c7c35de3f15f732b"],["categories/博客/index.html","1918dd5283fd6204bfec1066b394b690"],["categories/博客/typecho/index.html","0cd66b563642c7f283985908969e283b"],["categories/博客/统计/index.html","a3fce10287e5835137b4f6d2d8b4e2f1"],["categories/宝贝/BB/index.html","b232350b5924650dc46479afaf14e9da"],["categories/宝贝/MM/index.html","201576eed1cdcfd14479e3aa7a26470f"],["categories/宝贝/index.html","f14d17ef107b47134fe0a3699cebc8b7"],["categories/思考/index.html","3825c0f5dda0bff17c283c1a93d06c60"],["categories/思考/职业规划/index.html","ef694981621e3d3fbc57fdf4a291aeaf"],["categories/科学/OpenWRT/index.html","d2bbf9997459d13525194fe2741d9a88"],["categories/科学/index.html","4f89b8ebef1eb29a7f40f883fe99427c"],["categories/科学/手机/index.html","9a202002dfe542042c27d5402efc7c20"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b6c96188d3aac6786c52dacfbea911bc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","6aa7ce324eb251d80b560da0ddaf84be"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0fbdcd74a3272cdf4c7c10fc661c897c"],["movies/index.html","1acf078901b2c6f3ac6d0391d2a30ef0"],["music/index.html","4693c7351fe705435530d673e7385b08"],["page/2/index.html","2fdee51d62442dbf81e7c44c0131a434"],["page/3/index.html","8a01fefb0feb4d2f223c40f94f5110ce"],["page/4/index.html","34ff7588b068a66c384b23fc87c465d9"],["posts/20191204A1.html","4f22d027cf37b8c879b7d7a99ac14641"],["posts/20200115A1.html","10ba082c1e77c047c8617d7892d84465"],["posts/20200116A1.html","e8b862c9d867a8b4a4da43b77f4fd590"],["posts/20200118A1.html","3afedbd52977742071a3a74ff6c87d24"],["posts/20200119A1.html","995685e071e950b79a318318d55758b8"],["posts/20200119A2.html","97b89bf24db44b307b362acffdee5e1b"],["posts/20200123A1.html","f607775f5ab88e6691311f17f5534da9"],["posts/20200204A1.html","01f98b0edfbe36ba1bd45f602b65093b"],["posts/20200312A1.html","3e83b69a8b96ae87f4babefc766d8846"],["posts/20200320A1.html","0611eba748efd314addd6643156d6734"],["posts/20200322A1.html","9b1e9e3ab64023f4ad22db559f249ee2"],["posts/20200503A1.html","66bec08fad2251d2bb045380b6540ed1"],["posts/20200504A1.html","c049ed07934f1c39312ce68cc787478e"],["posts/20200504A2.html","d5809af914d3e672f17239612a135c1d"],["posts/20200504A3.html","9bda12101308483b10fdde1547bd88c8"],["posts/20200504A4.html","e3de82923428c95255f1045f75261759"],["posts/20200504A5.html","02edfe5d1bfa6faa0fbf25e0967d618e"],["posts/20200504A6.html","8ccb71069030aa49214cc211c5762696"],["posts/20200504A7.html","aa27ace77b83b902d111af4a531e214d"],["posts/20200504A8.html","65caf1eb6f576fcd5b0f38311f64ece4"],["posts/20200505A1.html","08978b35135f85dc2cd1861794e58c21"],["posts/20200505A2.html","99c329b9bf220e585cdc3c5dc006ca12"],["posts/20200505A3.html","7b3ceb1a54bf41f6f4bffd1320da00fb"],["posts/20200507A1.html","29ff377e2d55e9cf4a8182822bc8bdb7"],["posts/20200509A1.html","05aa91ca9452c4776897282f26c928fd"],["posts/20200510A1.html","92067e0d241e77af9a9634f9f812ec3b"],["posts/20200510A2.html","d76c09acd31cf178d223891dfe614b39"],["posts/20200512A1.html","92d5afa001b32d743ee1fc47bc1056d4"],["posts/20200512A2.html","4241ad2e4dce8f749c31baf19d379756"],["posts/20200513A1.html","cb6b6ecb8d696887722b1b7440cc3bdb"],["posts/20200513A2.html","74ee804978121ad86483e23e4fcf19d1"],["posts/20200514A1.html","306ae306f786a43c617dc1df63fe4d13"],["posts/20200514A2.html","790ab4b267356b2599d042f94e1b4748"],["posts/20200514A3.html","b3ba2d1daf8d7016f6436a57b9371299"],["posts/20200514A4.html","c9d7acb93cd1b406bb86c701cf4ca4f8"],["posts/20200514A5.html","59863b8ee765a0be16986ecad1808715"],["posts/20200514A6.html","da537ba70e4fecd78f0d2aa657f8260f"],["tags/AGV/index.html","ea77d39a4850d25a32c141b4a71d587a"],["tags/Github/index.html","50c6472d605bb5b3ed58cbd0402f9757"],["tags/Move/index.html","0fcf7011ab4e0045003b57d11e623559"],["tags/OpenWRT/index.html","d64c4408b9145d1b0423b3487abb603c"],["tags/Plant-Simulation/index.html","0e3040790f84cd832a6c35ad89f57ebf"],["tags/Wordpress/index.html","1aa8e30069f34e4278b3256b53ee5055"],["tags/cad/index.html","8d28518c94590025c341e818323c918e"],["tags/coding/index.html","f2ce8dd9fdf57a99c60540909b0e9f41"],["tags/hexo/index.html","00d69bbce5ed74ebf9089afa5c3451c0"],["tags/index.html","d2523b5a49615f42fa717f8684f2d3d4"],["tags/nas/index.html","48877d2dcb578f5d9e6de73120df60d8"],["tags/tpyecho/index.html","293cda56f8f21d766a0483d9a76504e9"],["tags/transferstation/index.html","63955ca1cdc55044a89663f1deb18b90"],["tags/typecho/index.html","f412d2b1bd8f1f6ab8e504c9b26de484"],["tags/ubuntu/index.html","047716d5ba02ae2503a7bf99307d1d42"],["tags/写给宝贝的话/index.html","ea435b95c57fbcc1a83ceda333fbaa14"],["tags/原创/index.html","7efb59e5775813d2794c9ea758bfb095"],["tags/学习/index.html","aa3101b328d993fd2a1eb0ba414bcc93"],["tags/宝塔/index.html","0150ee1518c10e644b31f446ded97a45"],["tags/生产模式/index.html","368e91d507aaf5c863ea764a3edee60e"],["tags/百度客户端/index.html","2b63b87bc306ea823ce0287aa5cad05e"],["tags/科学/index.html","1084ca0b321878ff469d033de13526db"],["tags/统计/index.html","ebdabcd960c1d438d4b690b75eb2d373"],["tags/编译/index.html","7f302d58dab7dda6d21355699ffa7d3f"]];
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







