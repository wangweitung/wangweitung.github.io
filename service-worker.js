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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","7ad1453e6140b9f6cd58050bb506794d"],["archives/2019/index.html","20f4b136ae7c23522cf7071abb9bc9e3"],["archives/2020/01/index.html","bcffbe6eb864835cf0576d88585c1c80"],["archives/2020/02/index.html","fc163ed00549102d1689428cd86069e0"],["archives/2020/03/index.html","6319a84baca22492f3d69fc2702f540f"],["archives/2020/05/index.html","60a0019003a7c0e3b7e5c183e787042e"],["archives/2020/05/page/2/index.html","79deeef53bb1468e84ec8a9b054098e1"],["archives/2020/05/page/3/index.html","b09072945c17d1ebb58ec410e146ee97"],["archives/2020/05/page/4/index.html","37ac60cc6492045a8b4a71d3530baae5"],["archives/2020/index.html","6ea23ba2a9df9e86298c0137d16e3479"],["archives/2020/page/2/index.html","f70ac59921bbb7dcbfa9179afeaec43c"],["archives/2020/page/3/index.html","d940a9723477173580cda4d814d362e9"],["archives/2020/page/4/index.html","1490f184422152e861cebdf565a2ed30"],["archives/2020/page/5/index.html","27fe6ed8bc330e15d6fcf175ef057160"],["archives/index.html","c6af9c12df87714107e851c499a193ad"],["archives/page/2/index.html","f27bc4ae2fadfb2a2d538648de64d5e4"],["archives/page/3/index.html","30e36b04fbb40c0b65c449f1a40ab48c"],["archives/page/4/index.html","7fb19f23fa14674de0a30fc60f1b331d"],["archives/page/5/index.html","6667f2061c5d57a53dc32b4371f76c11"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","bf6e32672de0b1acbf783b4f24581b19"],["categories/Code/index.html","5e3fd4f20a6580cf66a0cd34affbcc06"],["categories/Plant-Simulation/SimTalk/index.html","bb444627415ad4cf31f2765149181030"],["categories/Plant-Simulation/index.html","825c3a2f8c820a67b2a3737bd849363f"],["categories/Plant-Simulation/实体/index.html","499c0836dd3bcfc719b69734625edcb1"],["categories/Plant-Simulation/常用代码/index.html","3724d6cd377a880921a2e8b48622a3eb"],["categories/Plant-Simulation/常规操作/index.html","abdf774683f7cbd07f96a7907d943ff6"],["categories/Plant-Simulation/模型/index.html","c2f96a36a772b7868bf092bd77914a3c"],["categories/Plant-Simulation/背景/index.html","8b8222c0084b30bdd3a6d4261556d366"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","1fc02a9fa5e1574f48900f42feb69397"],["categories/ubuntu/index.html","affc821dc8e4151800b6dbe14db6162d"],["categories/ubuntu/ip/index.html","35d059b178cd807bbb5756d685ebf548"],["categories/ubuntu/下载/index.html","a8300484cf0b051754b3cef2cdf08768"],["categories/ubuntu/命令/index.html","cae6b8fa511497afd6c5d399ad8f9909"],["categories/ubuntu/配置/index.html","81165ad78b4598ecbf4e988415e10727"],["categories/博客/Wordpress/index.html","00b5b9b3118705742d54107357e958f8"],["categories/博客/hexo/index.html","076a325e44194598e0448cff1a56ce9c"],["categories/博客/index.html","489df592f821e2ef9783de72fbe83234"],["categories/博客/page/2/index.html","ba228e39db3762845ae34d0883eb7131"],["categories/博客/typecho/index.html","cbd6c64c509e58eaaa38f5c4cc237e2e"],["categories/博客/统计/index.html","f8a12ec60e12a45ff3fab54f67ad3f71"],["categories/宝贝/BB/index.html","c72d15acd8b98ca609ab630c57a842bf"],["categories/宝贝/MM/index.html","9a3710f3475684c503780ffc908603ce"],["categories/宝贝/index.html","7252a2b4148a4d1772fb7fc8d1ede484"],["categories/思考/index.html","69cb4b18804f09d04c496eea5d3d83fb"],["categories/思考/职业规划/index.html","457a88e46c7c054b3ecf16680f25fd38"],["categories/科学/OpenWRT/index.html","055bf3cef3336d1da8bfb3bf47679fa9"],["categories/科学/index.html","7a036cc7b034a6a7212671d047f51435"],["categories/科学/手机/index.html","b656ddac988596226a6138933c30ba17"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","ea8df82fc116e1ee86507d752d068a12"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","9fc6574fa4595edabc189c1c4801f940"],["page/3/index.html","a3c58a40bcd328679673720c87dfd018"],["page/4/index.html","1fc55a3214a47e806de588afebe7cd08"],["page/5/index.html","330aafa1ba663f72fb95bfdb195d8d64"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","2cb3e1833efd8fda5746f0c9e4e1d33d"],["tags/Github/index.html","e5c137e10549db21777e68c49d160880"],["tags/Move/index.html","6099ffe4c804e8788f06be8eeff16fae"],["tags/OpenWRT/index.html","61c0d343a5da5acc42c63855c92961f8"],["tags/Plant-Simulation/index.html","4a860c971524f282629329da3b85c912"],["tags/Wordpress/index.html","1768858dc34c04d0615e2f6194092ffe"],["tags/buntu/index.html","a2cf0fe2e72f436605c3dac1cc6658b6"],["tags/cad/index.html","33845cff558e72cab726b49ac826d838"],["tags/coding/index.html","093b1ebaa2ab3d0a26944564a8775923"],["tags/h5ai/index.html","f909d08c2b1abe0d083dbb52d9161aff"],["tags/hexo/index.html","a5c0766eedea700a3df1ec221ca527aa"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","dff7d5907d71ca1a562e990017bbf95a"],["tags/nas/index.html","50321b77678de0a88c7b2f0486621936"],["tags/tpyecho/index.html","77c7d59112793db234b970269b07ffe3"],["tags/transferstation/index.html","a333c8d8ae0bd7401877ab79fd530bf9"],["tags/typecho/index.html","e26c7fee8d32d0b8669dcde202adb2a9"],["tags/ubuntu/index.html","3de83639eaa400c941953bd1fc0fe56b"],["tags/写给宝贝的话/index.html","b65d307f9df6ce861e5d7ab13db6e568"],["tags/原创/index.html","3930ea6b41f350ba988b626677a5652e"],["tags/学习/index.html","e662b50ee30144048b76c48f8a2f89a1"],["tags/宝塔/index.html","e00fed68f7095926e75091fd0dd0b649"],["tags/生产模式/index.html","9a96a269c8f9751f9012026bcd429ffc"],["tags/百度客户端/index.html","27c34489a3bf3f4971d2a0c90d40dca1"],["tags/科学/index.html","efdf964ab467e99708bf9f746138aede"],["tags/统计/index.html","0c000a34cbe6be19756029d247795420"],["tags/编译/index.html","cc12c8d4005278fb45805a506c2bf42c"]];
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







