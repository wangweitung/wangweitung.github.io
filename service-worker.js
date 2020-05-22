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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","e4f8c1e9343607d4f2ea9aa21e374fd6"],["archives/2019/index.html","6c3a81af40a36f3c629818da57b68dbf"],["archives/2020/01/index.html","0f81dfbd59b7608e66fc58bb1ebe8d0c"],["archives/2020/02/index.html","c8ee40868966172348e5818f1f3892d3"],["archives/2020/03/index.html","f1fcdc8bea32822b94709626ef5eed0f"],["archives/2020/05/index.html","c947ad7f1b48552b483ff391ec276d8a"],["archives/2020/05/page/2/index.html","b133cf095620407288a1c5f8a4fd7074"],["archives/2020/05/page/3/index.html","76b7d5f4203e24d4ccd2e9a199b5362d"],["archives/2020/05/page/4/index.html","f63d7e7f4ad0751bffcd5d9ec96d8333"],["archives/2020/index.html","445bde4520f21550f5c36a38fbb2e4b3"],["archives/2020/page/2/index.html","dbe939b40f0e4efdb62b5d0bd884ad73"],["archives/2020/page/3/index.html","e68988c7b38e579ebdd83cdb2aa8b43e"],["archives/2020/page/4/index.html","79c1833be66ab9334dcf8b41beb62bad"],["archives/2020/page/5/index.html","6f0179d82ffc48f8160d729f69144fd4"],["archives/index.html","a439856ffcb78c5f7dc2033cabdccce0"],["archives/page/2/index.html","d9eefff79713d5784085776a803a46cb"],["archives/page/3/index.html","40c51a4e93eb3002a1d7bca621592d87"],["archives/page/4/index.html","a7b0cba19c649e7428310de028be7510"],["archives/page/5/index.html","299dff817615914a47bd536d9139c318"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","500dcf21df4f18331e62c099408bd9b2"],["categories/Code/index.html","8bc81c02d218f8b0eb8928e74732332c"],["categories/Plant-Simulation/SimTalk/index.html","ca203e2da77c528b6f2ff246111b1b99"],["categories/Plant-Simulation/index.html","eccad3db75b722cbc737118ce66726c9"],["categories/Plant-Simulation/实体/index.html","d5bb625d5ff29399b8676bddaa62feed"],["categories/Plant-Simulation/常用代码/index.html","c9eddb5bfb93ad300b91889f5ada112a"],["categories/Plant-Simulation/常规操作/index.html","79f4139f306a1711f789c619548cf4a8"],["categories/Plant-Simulation/模型/index.html","54bd060828bffda153bcb8f07d5ce937"],["categories/Plant-Simulation/背景/index.html","3ec96a9bdfdcee437ad36320524a14f4"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","e88d5d8c2c43cef805f32e4f65a466f1"],["categories/ubuntu/index.html","7f278b3d02925a696790c092444a9bd9"],["categories/ubuntu/ip/index.html","f0015a7c5098f22808ac5f6e758e52ea"],["categories/ubuntu/下载/index.html","5123dab88daa90b893adc54ea7c9ac76"],["categories/ubuntu/命令/index.html","bde5834223ca78bbcad0d9118b1213fa"],["categories/ubuntu/配置/index.html","1a8b95383577780eb35b1b22d4936343"],["categories/博客/Wordpress/index.html","1118a886028203ae96ba9689e2e0461b"],["categories/博客/hexo/index.html","59d93f7f80c5b836c998a289a9ebc101"],["categories/博客/index.html","ab8df41f5bdbf2e0ef9e7a58850981fc"],["categories/博客/page/2/index.html","1e17a3b807add59511338dc5a6fd113a"],["categories/博客/typecho/index.html","258ff25e37e8fa1db75c94db7f567fec"],["categories/博客/统计/index.html","cc560ec417ca147b486d442d908be85d"],["categories/宝贝/BB/index.html","3cf7d94f226911760e86f2615c3eedc8"],["categories/宝贝/MM/index.html","4ff4d507fa19a231eb97bf35fcc80a71"],["categories/宝贝/index.html","9940f61690efc6590ee5d916276bf9db"],["categories/思考/index.html","9d9ed230e81bcc6b9111f4931024dc0c"],["categories/思考/职业规划/index.html","538725758e918531dfd669a965e1221b"],["categories/科学/OpenWRT/index.html","34042d56878294e491010570fbb43b35"],["categories/科学/index.html","4375ee0ce6af4718981eccab6aaa1182"],["categories/科学/手机/index.html","f8e99edf7e92efb416b47e776e90bbb1"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e88597277ae6e0c344a084265e377d0c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","b0f02f71b1bcf399ea9e199796150c1f"],["page/3/index.html","a726a0d8979385100ab7fbfb0c60634a"],["page/4/index.html","bae5ebd095d1e0d086e3edf206569450"],["page/5/index.html","7976585e701f2efd0cf773b847120e08"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","b10b2d79f421720c9800efd7109e64d0"],["tags/Github/index.html","c422071c4e325c293d7be1b6a99d6640"],["tags/Move/index.html","7024b1709a23f6cc7ed6f7ef08b7630b"],["tags/OpenWRT/index.html","b8c66b8bb540fd51938f02cd5e7997b0"],["tags/Plant-Simulation/index.html","ff914c4470a92b7c8fc3677fa2d33cfd"],["tags/Wordpress/index.html","d84cb90f9f294bd298ec4db1328d737f"],["tags/buntu/index.html","45fbaecba4f56d6e6293d92339fc4500"],["tags/cad/index.html","edb9dbce96ac77caa7882e8e63695181"],["tags/coding/index.html","f5a62923b7291971bebd449b00b4a3df"],["tags/h5ai/index.html","a0fe82b33fdfe750312f1d5cf52dc129"],["tags/hexo/index.html","26e08a87ea9d99c89f0798b5280b87c6"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","95044a4382a08de00426d686deef5053"],["tags/nas/index.html","f84d36aa3fcc189ae803b3b96f7f277b"],["tags/tpyecho/index.html","0ff9e4ed52b7cb8f7e595058460a6ced"],["tags/transferstation/index.html","761121cfe7e214433c9647fd8dad621d"],["tags/typecho/index.html","d0ded0b873206478a124c92dc03e7a05"],["tags/ubuntu/index.html","182c4787807c315d43ccb439b28ee6a1"],["tags/写给宝贝的话/index.html","ebb320f071fad2fe93ef4456c973faea"],["tags/原创/index.html","b7562331df66788668a46bfcd43a181d"],["tags/学习/index.html","0b9c5f0b01a24b063449dd7ca1e538dd"],["tags/宝塔/index.html","1ea0250009effb8dd76366337dc06976"],["tags/生产模式/index.html","0bc36aca1cbfa02bd42a8d3ea6448422"],["tags/百度客户端/index.html","54db88935ead4beed2595214b6d49696"],["tags/科学/index.html","fd5980e68e9fc8fe156eaa5c1ce71151"],["tags/统计/index.html","a908c7e600f73d15f15b03df70bfce58"],["tags/编译/index.html","d03e5fa719c9f26bc235bf791775208b"]];
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







