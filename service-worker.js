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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","9f6a3479f3df70b1948a634f17ea3b87"],["archives/2019/index.html","396912ec74f2c1cb8ef7b6a9977cbc30"],["archives/2020/01/index.html","993265d7683813e36d46c80c0fca914d"],["archives/2020/02/index.html","51ae412207f19adf4d3df7c8b0630729"],["archives/2020/03/index.html","788098577b219d04610f9d3bf592d7c4"],["archives/2020/05/index.html","b7a2067d26e45db92b1daf1a92b63675"],["archives/2020/05/page/2/index.html","6b5ac1c1dbd2cc002ec5c39e202373b3"],["archives/2020/05/page/3/index.html","8b7ae1e17d877ac97ff2adf04042cf0e"],["archives/2020/05/page/4/index.html","0e2dd5e3017c9e93fb0e234029c70c94"],["archives/2020/index.html","1990b681e27b229633ce0b1af591095f"],["archives/2020/page/2/index.html","b88815f91476a7cabf4e626f508ea98b"],["archives/2020/page/3/index.html","f6abe107116f5d691bb04b4543686b37"],["archives/2020/page/4/index.html","71c33ed95a32eb05d9c1702c3ff90732"],["archives/2020/page/5/index.html","f4094b474a78a04ead41b0d5da123269"],["archives/index.html","fcc0da0dbc2eb19a3c0030b368da6dda"],["archives/page/2/index.html","53b66aba631058b86e3aa0b7576c6801"],["archives/page/3/index.html","169791f243cd9d486751c7c797a6ec3f"],["archives/page/4/index.html","f1e29fce53fb60bfb74c25808ef1e090"],["archives/page/5/index.html","f740b20cc1acdc6c7e5514f493638ff4"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","5ecca6bb9186168af332200f25e4cdc4"],["categories/Code/index.html","f646930538c249121cd51b0798662e3a"],["categories/Plant-Simulation/SimTalk/index.html","b12c354ac18726bb158d1e9b81813e4f"],["categories/Plant-Simulation/index.html","52b13aa86411838f97281a0f24f2be0b"],["categories/Plant-Simulation/实体/index.html","71519b9c5df19a5c373aa62abc61a83b"],["categories/Plant-Simulation/常用代码/index.html","085e6f9cfaf9e3d3ff772a2633283ab8"],["categories/Plant-Simulation/常规操作/index.html","056ab83228013b63bc82dfcb304710fc"],["categories/Plant-Simulation/模型/index.html","d52bd684eaa1f18369bdba5b210c90a9"],["categories/Plant-Simulation/背景/index.html","62dadb5a8575b1abe4a19f41c26eb006"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","e161550be9679efa5b690db945c307d4"],["categories/ubuntu/index.html","7ede1b17e5fb77a37d542df7093f0e2e"],["categories/ubuntu/ip/index.html","1d289033e1dd4e42b2e9997c27370fb1"],["categories/ubuntu/下载/index.html","95f5f796de29cd36c5b45df007e6ebd8"],["categories/ubuntu/命令/index.html","857d66226fb713144c77dc611c6ecbef"],["categories/ubuntu/配置/index.html","9b84853e083142c17787c8a7b3d039ff"],["categories/博客/Wordpress/index.html","62b7cffcfd44001b30dc4c142a04121b"],["categories/博客/hexo/index.html","928f86204220079c43b862ae1107c323"],["categories/博客/index.html","e08a35dfa0cbd15a21beb56824dff229"],["categories/博客/page/2/index.html","5c5b849e2d90c585bd9194cd5f25e5d7"],["categories/博客/typecho/index.html","dde871bbc242b42dac59141de7556a2e"],["categories/博客/统计/index.html","da4fa30143eec78c66def1b01c52d858"],["categories/宝贝/BB/index.html","6a9c2e3653d808ab42ecd365cdb7b833"],["categories/宝贝/MM/index.html","57cbf0566e1164de607b6e382aad587b"],["categories/宝贝/index.html","e6cd65ef6e132c245ab14c7bb781f852"],["categories/思考/index.html","bc2e7e344f5f6c25de44cc33e5aa1a28"],["categories/思考/职业规划/index.html","3a04f33f05c17bd68db85696b9264bd5"],["categories/科学/OpenWRT/index.html","df5fd65bd7f2f54829969854c1417946"],["categories/科学/index.html","d13ac6a5b89a5fb052ea39b8664aeaa5"],["categories/科学/手机/index.html","f2253a3da674f68f48fcd8efe3b86a16"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","7b679b825d33003ba2b2f5c577d40553"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","a25cd4246ae2609101620ed75ead611d"],["page/3/index.html","73b385e69c77b483c95184751407a7ed"],["page/4/index.html","5ad76aea8d8408250bfaa77756f1bda7"],["page/5/index.html","4991342b68b783be3d3705a4b7963a87"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","2340bad1a6f5c0d8b452d2d406a5385d"],["tags/Github/index.html","65179ef2737a80bc49eb1496829b419d"],["tags/Move/index.html","a9da65bef97531cc6fb2d464648bf26c"],["tags/OpenWRT/index.html","dfe78d2a846c63ea36cf181432e90318"],["tags/Plant-Simulation/index.html","d3fae9c7b5174a11defc09b173472194"],["tags/Wordpress/index.html","014d8f97f0de10799f78c82febbc8dd2"],["tags/buntu/index.html","238d425e980fa1484d4571e6f5ffb2eb"],["tags/cad/index.html","3057d76795b32ac24223870c6aa94685"],["tags/coding/index.html","92932bf77ba646cd53feccf4a93e6947"],["tags/h5ai/index.html","87810698663b9538449c3641fc878c40"],["tags/hexo/index.html","b16136a62d9c1b4e6caab9fe968d5eb5"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","a057c8ec062596ccff967bb718d3bdbb"],["tags/nas/index.html","cc0c6fc7fcbccae6476b1730a3f18bb8"],["tags/tpyecho/index.html","98eaee748ab3fd9a72815b51899ad375"],["tags/transferstation/index.html","56731e3042d760187b53fe046b81dd45"],["tags/typecho/index.html","cb4e9caab8c698aa329fa2b408da1dbe"],["tags/ubuntu/index.html","bd4855596e73e3f7e667566dd77afc54"],["tags/写给宝贝的话/index.html","ff879f7cf4b8d5831dc650e7eaedca1d"],["tags/原创/index.html","0473b359c3e11655296f20d579da83f6"],["tags/学习/index.html","7a2c096e2d38b4040d12a8dd4c627b21"],["tags/宝塔/index.html","b865d070ac8d6b599c8e0ba4c209fcbf"],["tags/生产模式/index.html","e933cebb09de92a24185d359af18bd7a"],["tags/百度客户端/index.html","7694dcd64409932ad5d1c5947a6773f8"],["tags/科学/index.html","2958369b1362aef18fc3a7e612372fc3"],["tags/统计/index.html","92018f5159e88d4239be88b4c8d01720"],["tags/编译/index.html","ab158107fb06a33c9dc5c849f14b36ab"]];
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







