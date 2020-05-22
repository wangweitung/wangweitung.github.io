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

var precacheConfig = [["about/index.html","b7edb447adbd0c3233f4a8b949b77ec9"],["archives/2019/12/index.html","5c9b9d880f1cb9d1274ad1b1989898f5"],["archives/2019/index.html","e187d7d1d70c64e5488c2b0a75e2693e"],["archives/2020/01/index.html","d994943eee0afae096679b656f5811ce"],["archives/2020/02/index.html","4e55d34fa43de8370983b4dd84f7caa6"],["archives/2020/03/index.html","44aa196eeea83c2dfd7b3d4e04b0d9b1"],["archives/2020/05/index.html","5bc277c3be6d7829f9e86b76281f3356"],["archives/2020/05/page/2/index.html","b27e0db1ae4743b2de7e43abe89ccdc7"],["archives/2020/05/page/3/index.html","79657fd4fca67a051f5e2b6a86c9b9ec"],["archives/2020/05/page/4/index.html","cd22a45ec6f45cee675a0f7f16023eb2"],["archives/2020/index.html","5a1f04372f6763b8ff39e024c4797647"],["archives/2020/page/2/index.html","770c67a715328c439405930bf58a4a75"],["archives/2020/page/3/index.html","3e526e041547b9f41391a8c7b826c42f"],["archives/2020/page/4/index.html","863675f4f2d89cc8d2c264ac268bf916"],["archives/2020/page/5/index.html","568c503912b21497e96d0ee94e74137f"],["archives/index.html","a0da24c49c823bfffc89ce27c045f51e"],["archives/page/2/index.html","5c143958567892fff331530899c58ecd"],["archives/page/3/index.html","720be4ea8b0acb77235825c95c033179"],["archives/page/4/index.html","426d1fef4c4370adfdd1016609bb3160"],["archives/page/5/index.html","b455764622745a1b051bc48590994fc6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","489f8ece1888479c5c4cbaa51dc0c161"],["categories/Code/index.html","e9d05b370917777bd59a1cbed2a5c9e0"],["categories/Plant-Simulation/SimTalk/index.html","9eb37db7c242b6d1feaa5ee9c9d4a043"],["categories/Plant-Simulation/index.html","30ba018e977b2c28db8fbe2fe92bf177"],["categories/Plant-Simulation/实体/index.html","f339d48afa6c6ca71dfc830e851f1683"],["categories/Plant-Simulation/常用代码/index.html","7bf6bac35a28afe523206725b22a11bb"],["categories/Plant-Simulation/常规操作/index.html","a3bff362d86dcb32734aa31467a29542"],["categories/Plant-Simulation/模型/index.html","d2f10035fe5ce3ef89413af56d5ee900"],["categories/Plant-Simulation/背景/index.html","4f1c40b13cd3d843d5acdf77e28be784"],["categories/index.html","1c797c8a27b0baf97cb7ff158dad1e87"],["categories/nas/index.html","38323de98695172217976f30f1467e90"],["categories/ubuntu/index.html","076a651c9a3b1ca690f88818c7bca3be"],["categories/ubuntu/ip/index.html","027b2a3b10bc2e7107d53391e91eb636"],["categories/ubuntu/下载/index.html","ab264354a8124a75df97543fc891817c"],["categories/ubuntu/命令/index.html","ac7e7cbe4a0c03cc091df9d8b302d861"],["categories/ubuntu/配置/index.html","05cb39aaa0033573e8e25f7c076e4c90"],["categories/博客/Wordpress/index.html","29621c3b894d4e38d53df8030e898369"],["categories/博客/hexo/index.html","3fe43cf78278732cf101a81a558513c5"],["categories/博客/index.html","970ea84c61073b61c9f48116b0ec25fe"],["categories/博客/page/2/index.html","8c70a5a016c0625bb5e1729fb1ae559f"],["categories/博客/typecho/index.html","e1f1ff3a22783d36822492f1ccfac328"],["categories/博客/统计/index.html","f214b782b2bee3e4e63b17155a3d6b81"],["categories/宝贝/BB/index.html","17bfcade1a1eb4fac17354642f27fc0a"],["categories/宝贝/MM/index.html","e59770cd6c3e65828e5fef9e7298b8c4"],["categories/宝贝/index.html","537be366074f62934ae0f163c7521f30"],["categories/思考/index.html","cca76f5d5830991b8e57bef20c89688a"],["categories/思考/职业规划/index.html","93358044671fc25ac8e81d68b63357ce"],["categories/科学/OpenWRT/index.html","d0ea9e6bd49bbb2d3f7e3836db8f4b66"],["categories/科学/index.html","90add113b8f7a56d0466fabd2aaf6199"],["categories/科学/手机/index.html","b8f7b2b5d90738664920514770c63b2b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3f07cafd79d1a7271b732447b6e15740"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","258ae865c726af8105300cdb74f885f0"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","284a3fb5f15defd2fa922ec1d4af5491"],["movies/index.html","507a548d38b7b197eb05491bbadfb928"],["music/index.html","2d15dac4847a4de1c3b7eab71645f57c"],["page/2/index.html","9db494e32eb567ff53f7bbf0f21d0430"],["page/3/index.html","2f917860c01aa03b99c9d8ada2de9db9"],["page/4/index.html","4747d7cea6b65a0b6adb1e6abbb2206d"],["page/5/index.html","1e4943ea1f6d0aa1b387b08b94fa7503"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","8e5b9391c3bf710b681289d7fa2d5b24"],["posts/2020/05/13/20/18.html","e8143415bba55741441026a1d4dd74f0"],["posts/2020/05/13/23/58.html","dc169fd57b9c12421c8cb0ff78d8903a"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","84e666f197a376d48e092dcc1f02177e"],["tags/Github/index.html","1183a318f8cb6f827e3e78e79a61abe8"],["tags/Move/index.html","f23f4611d200e33f3e26d7191d941f23"],["tags/OpenWRT/index.html","f486c41e1f257ccf21504e4911580e8d"],["tags/Plant-Simulation/index.html","e77b2fe2ee8b6373f61bf360a16a3055"],["tags/Wordpress/index.html","c2ca0f6d27769932cef8557598fa5677"],["tags/buntu/index.html","889710dca63f10d2db241340a5828400"],["tags/cad/index.html","b6cff2d03f2afa85ef3170842ca83b21"],["tags/coding/index.html","6f24839b85ebf0ddca354d6619557c57"],["tags/h5ai/index.html","f69c137782fe440bb08809ba03b64344"],["tags/hexo/index.html","84b65d3f6cc61ea0c352345388507c98"],["tags/index.html","d7b5b8dfe51822a5fee7abba6dade4af"],["tags/lychee/index.html","fd4aad981352d6ee9a18efce6dc73933"],["tags/nas/index.html","6e0bfa90186c87c12d4b1566dd1e111c"],["tags/tpyecho/index.html","9f75b826c17f9b4197d65bc969938f2f"],["tags/transferstation/index.html","712e035f95f5b3caa1752f269f4d53c4"],["tags/typecho/index.html","da40049113c27a4b768b1e5e7a311857"],["tags/ubuntu/index.html","e97e34b51e66f8a4d4126669d9180a84"],["tags/写给宝贝的话/index.html","b300d65611ddeabe89713500d95699c8"],["tags/原创/index.html","31c7d20ae8bb665a7e765c7a9f39bf9b"],["tags/学习/index.html","982129d76b7e30fbeb7a2cfe6f420653"],["tags/宝塔/index.html","84439d5a48bcc5f05370966d00100cf9"],["tags/生产模式/index.html","5ad5ba962ea4cadca3be01fed2773662"],["tags/百度客户端/index.html","1bfd834b108a559888b5d53fd7ffd52d"],["tags/科学/index.html","8c34c0d9ab41118ca6f848c76a0f23b2"],["tags/统计/index.html","2117847ef29718c3f290f70448543c78"],["tags/编译/index.html","c59f9be95a293324808119c5dbe36418"]];
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







