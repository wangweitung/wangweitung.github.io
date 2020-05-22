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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","f10b738470e63f5c42220f3e6ac00d70"],["archives/2019/index.html","8699259947fe0c6838a77e387ed193cd"],["archives/2020/01/index.html","53d15718cc9edb4241d96bf06bbc0c9f"],["archives/2020/02/index.html","3d702358094c8a79fee6c8e1d583631e"],["archives/2020/03/index.html","0e329bd49948d2082c506404926338bf"],["archives/2020/05/index.html","da3f31dcf034fa6dbd1d04a4912acfd6"],["archives/2020/05/page/2/index.html","58bc7a51e297041c6311b4dfe848d2f6"],["archives/2020/05/page/3/index.html","8811faa535cd02ca9e1c3fd398553997"],["archives/2020/05/page/4/index.html","0e24a65e091eceea2e3af8cb87689a0f"],["archives/2020/index.html","385395acda771fb562464e61935d09a6"],["archives/2020/page/2/index.html","1f6b1474149c7f06acf7e9d3522579a1"],["archives/2020/page/3/index.html","465e1dc21b0c5bfeec5d93c731619c04"],["archives/2020/page/4/index.html","ea70a208ab4a78a1157cb6222621d2f7"],["archives/2020/page/5/index.html","53aa00b70e88b6f604e2524433b3e4cb"],["archives/index.html","a6cbc23d0786987731c25be1fd930344"],["archives/page/2/index.html","41dab60beacd8e5d6bd63130ec459b1e"],["archives/page/3/index.html","3f154310fba2314133c4a14e81844e06"],["archives/page/4/index.html","5d4b669c496053ad39483b2baf8a3f04"],["archives/page/5/index.html","339480a6a2854d8c7f32b8285d350379"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","a8a6a78bc88a00b6873f2da363f464e8"],["categories/Code/index.html","ce78cc4e3793dd778b2175039d64cc3c"],["categories/Plant-Simulation/SimTalk/index.html","d94345867d6e64a33b0c6d1fb5e15a7c"],["categories/Plant-Simulation/index.html","9fa8d97497976e575610cea12abb1bab"],["categories/Plant-Simulation/实体/index.html","79a63ab4285036fa45560c384c419e96"],["categories/Plant-Simulation/常用代码/index.html","5224435104d73de6595a74958c1e72b7"],["categories/Plant-Simulation/常规操作/index.html","595d91c1c19f73b28f2b3f565fd6dc2f"],["categories/Plant-Simulation/模型/index.html","3986861392cf2d9c31ccfe97dc7930a2"],["categories/Plant-Simulation/背景/index.html","6cc01ce8d7004d321045260bca5df5fd"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","d54dcf0b735c0bc3f15739e3885dc267"],["categories/ubuntu/index.html","08054c17caf995233909b459b43e4c61"],["categories/ubuntu/ip/index.html","f0b11f212f8f4bd1614c8a670d4b57e6"],["categories/ubuntu/下载/index.html","7fef9106a0ee7de997001ff3f38a73a0"],["categories/ubuntu/命令/index.html","bd47a09c865b64ac43ee69eb1e82dae2"],["categories/ubuntu/配置/index.html","ec54afa7868b205f09e88b62804a69b9"],["categories/博客/Wordpress/index.html","9e8dc79e9f12b5be359d9229bd6c6b8d"],["categories/博客/hexo/index.html","5ddf66382f7e6c22974f47b28720b788"],["categories/博客/index.html","a30530f26d0ad3cc540841c094b46008"],["categories/博客/page/2/index.html","51bca4627abb6fb4b289251559e3da0a"],["categories/博客/typecho/index.html","c055b0c46be7f2eaaab56e5c2927b220"],["categories/博客/统计/index.html","29926c71c3e0a9768e2140635174177e"],["categories/宝贝/BB/index.html","d0aa67e82fdbc610df672f3187bad2b1"],["categories/宝贝/MM/index.html","c005e6f378a45d93d874d313e3a97f94"],["categories/宝贝/index.html","eb4fa3e62a4657c90eaa4c94e4268eee"],["categories/思考/index.html","cb1ca7538d28ef954bcbf4b556c531fd"],["categories/思考/职业规划/index.html","d6cdac145c48fa2add29dfa65d4b1f37"],["categories/科学/OpenWRT/index.html","902c1e9598b5751162a39717c084d0d4"],["categories/科学/index.html","0dd5e78a58c6930a3c132d4714bd0b2e"],["categories/科学/手机/index.html","d09ecae345576e653390a3cc332d4040"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","9fe8c646a1051b2331ca626efab41c41"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","ff3496c05aa3af75883a362892a19c8b"],["page/3/index.html","fd889016a837f6b44d0c5c6b9b0c8e5f"],["page/4/index.html","f00d98c1e04e833ebc161e115b232c4c"],["page/5/index.html","7b27c1bb6f9cad1167ee3e650512638d"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","eecee6c1e897443f7e9a6450df68920c"],["tags/Github/index.html","366f98a5c225c1eb40193775057da3db"],["tags/Move/index.html","a2c15d82714bb3685190a6a24fc7d181"],["tags/OpenWRT/index.html","ba7b706262b85f638e19d49c71c8c3bb"],["tags/Plant-Simulation/index.html","5ade0d27c05d0e7f3fb72916225762f3"],["tags/Wordpress/index.html","54a50494d48a50fea9bedb9eefc30013"],["tags/buntu/index.html","f1d682af90a782669fe815ad1dc93d4e"],["tags/cad/index.html","86a6c0d5577500e3d167f68a29a39ac4"],["tags/coding/index.html","3fa65ee06ea9dd0c93a0f4eafd411f51"],["tags/h5ai/index.html","ae51a8b969561db7aae4f3017273c715"],["tags/hexo/index.html","e1a00a3139ed44d2e5a3037ed718757c"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","f49ee06b1755af7506226c00cac04117"],["tags/nas/index.html","14fcb285a60bee07c6651407a0658d4e"],["tags/tpyecho/index.html","d93b2a34a3b6cfc1fddc4a11387f2de3"],["tags/transferstation/index.html","ef0333d51a250d57ce3eb800c6d424d6"],["tags/typecho/index.html","023c97d4deaeab87616dcb1b3caf1466"],["tags/ubuntu/index.html","67e2ba5ab93ce7211d3c5f9b0ca6e120"],["tags/写给宝贝的话/index.html","2a9507c34fa362f488d076c22c4ecc9c"],["tags/原创/index.html","035feae630b2a6341a57dfc1a5ad6123"],["tags/学习/index.html","fdde09d439dcaaf91e36463235973e1b"],["tags/宝塔/index.html","9cf11042972a9aea5334d0ed21ee3c77"],["tags/生产模式/index.html","e71b99493928e227cc0c3557f28b8923"],["tags/百度客户端/index.html","7328c6a0c571ad2104823ea52f2cebda"],["tags/科学/index.html","328427ec5764c94d03ed46e8bee219c2"],["tags/统计/index.html","857fd49b36686a9945c13e994fca6df3"],["tags/编译/index.html","1b78ee8f281fec3f4caf5a337b270891"]];
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







