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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","b9e8d6d1ef9ac3d19b3968be294f4981"],["archives/2019/index.html","5c28eaa19b06195fd7559b08e901e700"],["archives/2020/01/index.html","867760bb97f437ba8a4df93748822b51"],["archives/2020/02/index.html","55a654d664e70d6e047909fa027853d4"],["archives/2020/03/index.html","38c46dee2533bc45322af116dfe975d1"],["archives/2020/05/index.html","78532493cfcb4863b01b613dc5e0bec0"],["archives/2020/05/page/2/index.html","6ff3a3570e60fa43ffe198ac280f8fb3"],["archives/2020/05/page/3/index.html","82323f434a62c18bea2c13e1b32aa343"],["archives/2020/05/page/4/index.html","64c8aadad044cd90ad129f84d4fdb9c6"],["archives/2020/index.html","2ae248fc259315d988923cb7d3cf2a2c"],["archives/2020/page/2/index.html","0c62ea5156ab699dd7fec08b2683a802"],["archives/2020/page/3/index.html","a2812be844c70c82fc4032fbd3364640"],["archives/2020/page/4/index.html","067ebd0063f0ec37ec3195b47e56ee1e"],["archives/2020/page/5/index.html","2bb8d38f254d392ba4a2a72a87354b02"],["archives/index.html","51182bb95ae253571c86cc375565f1ca"],["archives/page/2/index.html","0f00934a649e53af7efee6d4f0416113"],["archives/page/3/index.html","223915e1d8b374648e67ae4cc2de0be2"],["archives/page/4/index.html","e02faee94fd9b64d44159289fee98b4c"],["archives/page/5/index.html","1976dabb34007e7ca628ad9a6eeb667b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","35b1e50b6fd4105c44474b8d2e9d179b"],["categories/Code/index.html","e60d401b76e96ac689cc493a30ce7925"],["categories/Plant-Simulation/SimTalk/index.html","fa82926e2d3ea43b3c8b6251f0917546"],["categories/Plant-Simulation/index.html","7b4da730a2420028804ac760d42024f9"],["categories/Plant-Simulation/实体/index.html","08ed27c9aa2fc9713a3b9029b68b9b94"],["categories/Plant-Simulation/常用代码/index.html","723712a2a1421968156cbdb7f31e656d"],["categories/Plant-Simulation/常规操作/index.html","149c8d5f9d205287318af24073df63fa"],["categories/Plant-Simulation/模型/index.html","f7d95bec2d2edbb052944cd5d9cdd10b"],["categories/Plant-Simulation/背景/index.html","ec0a7d8c45e2d5c2e01006d6f2988859"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","49516281b57e8fb2c56e05463b6abe69"],["categories/ubuntu/index.html","9025fc4e3c5c64afa2d6194d5796f1ab"],["categories/ubuntu/ip/index.html","e711b81f4cef5f091c3ae56958aad562"],["categories/ubuntu/下载/index.html","dbb15615945fddbeb80be5799692e300"],["categories/ubuntu/命令/index.html","dea4bae191cac4d5ad75993fb00de9f0"],["categories/ubuntu/配置/index.html","15859daf8536c91087791682a9727c6d"],["categories/博客/Wordpress/index.html","d001146c01b590ac7e090cff490b5a4f"],["categories/博客/hexo/index.html","c50849d9e1057795a8c653564c4671df"],["categories/博客/index.html","d6a2f432645e21f28c2bfb39026eec84"],["categories/博客/page/2/index.html","a93ad48fa5fe52ba07d3204098b50bbc"],["categories/博客/typecho/index.html","a31f5fb186100aea3a1e79aea1e1d508"],["categories/博客/统计/index.html","8fa142714a4f71b36d117f17baa19d35"],["categories/宝贝/BB/index.html","579d44177cb3ee6d0f971ffca34c5221"],["categories/宝贝/MM/index.html","b1fe62308a0d44951f1dbafc13848306"],["categories/宝贝/index.html","9e65a964f236aacf466adc567b1e944b"],["categories/思考/index.html","2cdad89c8cf29a78d1602a6a34028881"],["categories/思考/职业规划/index.html","21e8e2edefb222a75ceba4f3359494c9"],["categories/科学/OpenWRT/index.html","c97b72b6da877fd0d4ce06e5cc7d6764"],["categories/科学/index.html","6481b547368259e3447c51b85b224a38"],["categories/科学/手机/index.html","3e6de603147f5651cee65cf576d6da93"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","50b41092a03bca16098830ba66430e3f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","bfab82d9ab260ef05ba27c44d83405c3"],["page/3/index.html","77d98d69298552e4afbe5376f659ebf0"],["page/4/index.html","6c330c42e5e6cb313329527ef6ed5d8e"],["page/5/index.html","7c072fb60183aed8db7edf56ddcf33ef"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","b8d489ea9efd2774af2929bc71c27756"],["tags/Github/index.html","94b77a09cee3839392d111a3d969bf00"],["tags/Move/index.html","edb7172814dc95d55d204c8b823b4ee9"],["tags/OpenWRT/index.html","0738508a52c9ecbc85517629b9e6abb9"],["tags/Plant-Simulation/index.html","5a91dd7043d6a1e84891061069dec5e8"],["tags/Wordpress/index.html","310f7483fecd5183f4dbee4343b71f9d"],["tags/buntu/index.html","bd68f7082fdfbea3480a85d6fcb88516"],["tags/cad/index.html","ce86a4f0c664e8872565dafaba8e3fda"],["tags/coding/index.html","773c466c145607c415b011940513075d"],["tags/h5ai/index.html","6f11cd6d601cfe2fae712979be0cdeb6"],["tags/hexo/index.html","502181e076969b0cc42100b75bb26bd8"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","0f41b78c0397aae41931f94f31f8443f"],["tags/nas/index.html","1df52aabd348534e61e9fdeedebbfb5c"],["tags/tpyecho/index.html","3628cbea0c9e0fbc38c0e142129c0286"],["tags/transferstation/index.html","234f95f46dc177c234a0b6c46f3e3af8"],["tags/typecho/index.html","acf88dbd354eddd568517e0cc38ccbcd"],["tags/ubuntu/index.html","dc86f354930f8f740f21828b65c15ae9"],["tags/写给宝贝的话/index.html","c96e4257970a8811652cfe806bfa7333"],["tags/原创/index.html","ede682c91840efd87758a536c206ea41"],["tags/学习/index.html","263dd5024ba7b681f4bbf055f5803183"],["tags/宝塔/index.html","4b49af6fdadeb636923feaf7d2918b95"],["tags/生产模式/index.html","600706f85ed55a99ffa478d89a855b09"],["tags/百度客户端/index.html","0429d570f451f71c8c42cba825b2926f"],["tags/科学/index.html","372151614c4c4183e443282d5bfd2a75"],["tags/统计/index.html","a8d21f29ebcf6b9e19cd6395caf36f01"],["tags/编译/index.html","417e4b1feb76fe42b364d63ca1eeedff"]];
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







