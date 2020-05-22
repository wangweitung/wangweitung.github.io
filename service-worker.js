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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","f60b15535ffc18b4b4a05341be880495"],["archives/2019/index.html","790cef6316a9f3bc699f53b0fae8654a"],["archives/2020/01/index.html","5dd7d950ae1064e3b4025a59a151f53f"],["archives/2020/02/index.html","290a31b7a26a481295330e940f70518d"],["archives/2020/03/index.html","99f70687fb30c9b707c37edeeca4a1cf"],["archives/2020/05/index.html","d57c97696389ced935e98a32eeaa7c26"],["archives/2020/05/page/2/index.html","9db5e56e75d6a11cabfb16ec0785d9b3"],["archives/2020/05/page/3/index.html","093199dfb4e891ea53e29f3757c279f9"],["archives/2020/05/page/4/index.html","45dc2486d7413954ab61fc22a487abbf"],["archives/2020/index.html","f51597e1ca117ddf2b9e7e4774ced76e"],["archives/2020/page/2/index.html","58dcae5eddb56aa7b825d00098a03ec4"],["archives/2020/page/3/index.html","056a666ae7787cea17381df1f75a754e"],["archives/2020/page/4/index.html","a2c3ad880942cb23f7a637bd34c7841b"],["archives/2020/page/5/index.html","55cb5c874053e3f5552c2a55bdeb89a8"],["archives/index.html","5d8a45c8423134c7ccf4c227053ce239"],["archives/page/2/index.html","06065803991b00b7208934ee3966a2e0"],["archives/page/3/index.html","f0a205d31f833208bc8212a916f7bed2"],["archives/page/4/index.html","1b407c85476e516aab70e8ec2d779115"],["archives/page/5/index.html","76627e2b2809cb0a75338b73a96afd04"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","0be618e8c77f4b0bfec7b045592b4041"],["categories/Code/index.html","94a405e944ca6c83b03ea0bf44be62e5"],["categories/Plant-Simulation/SimTalk/index.html","546833a18108d0ff70a3bdaf1c856950"],["categories/Plant-Simulation/index.html","d02b6aa3fcfca97ad105eca0c129474f"],["categories/Plant-Simulation/实体/index.html","bff426879c8bbe4bf12c75c657f7f9c9"],["categories/Plant-Simulation/常用代码/index.html","602b1a8b5c93caf0dfad134bc4365d94"],["categories/Plant-Simulation/常规操作/index.html","9628f0707eb7108fbf3d0a8fab97e3d3"],["categories/Plant-Simulation/模型/index.html","83e4d4b274f639754480c3c57baa574a"],["categories/Plant-Simulation/背景/index.html","3d35616bc2f531cd2b76411c394a1573"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","42427348a621349485f5cc12ed079d4b"],["categories/ubuntu/index.html","68452d0d66bf2295aba595386ed7db0b"],["categories/ubuntu/ip/index.html","75ed42451fd266a9ca359c6427849755"],["categories/ubuntu/下载/index.html","f887f922c98fd6cd709e1156c5c9e0fb"],["categories/ubuntu/命令/index.html","8195cdd6946eb7c9a580b68fa263b3c4"],["categories/ubuntu/配置/index.html","881ffa0f0ee397e75ee68611a62ae78c"],["categories/博客/Wordpress/index.html","1b54678b9c158440db3aac9e866c6952"],["categories/博客/hexo/index.html","4c4d3378dd1cb4bf029b7afe8eb2451d"],["categories/博客/index.html","aae8453dce46e28835e45b2c3d7f452d"],["categories/博客/page/2/index.html","d35bacd6c1a431949792ec0ad0c930e5"],["categories/博客/typecho/index.html","5f16f3799c558d9c013e9bb5d7de2adf"],["categories/博客/统计/index.html","450d8377a4b22f635d6a61402d9b7969"],["categories/宝贝/BB/index.html","9fa18d412be3c919d140e9df9d9e8512"],["categories/宝贝/MM/index.html","a504b208ea4f5577475c06fd15966b18"],["categories/宝贝/index.html","09cb6135c9ed27233eeea2d0f725d7d7"],["categories/思考/index.html","2c68c7df9cb408c3645a3f7f410d9b0e"],["categories/思考/职业规划/index.html","bf7c7a00752c28236980bc71b8337122"],["categories/科学/OpenWRT/index.html","ca818804c7156d411d2a54b2e172198e"],["categories/科学/index.html","610a0b69f953c265ed006abc7778d650"],["categories/科学/手机/index.html","7f944e80a4ba91097135df77d539ecf0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4b508245d1abcb04c0c4b835205f5f4c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","3ca48e82c87144019b7bb3de5c181f8e"],["page/3/index.html","6b2ae67becd6bf08dcde0717e45c7520"],["page/4/index.html","c9ef28a7a9ba47c2120d4ba3a7e07f7c"],["page/5/index.html","f7f8b028a7b1d0cf14fdf491f1f11db5"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","1a4b170cbc294b5aab929233960f93ce"],["tags/Github/index.html","e1eeef719a794f93f333a5ac57aea3de"],["tags/Move/index.html","6cb76b2b0588832642df9da08fab13d8"],["tags/OpenWRT/index.html","c73d5e1fc5cdef9f9ff1bd7438dfa415"],["tags/Plant-Simulation/index.html","6765007cde31b3a0ff082b4d294ef681"],["tags/Wordpress/index.html","28f3d8baf0187a2a2e978625a2026ba4"],["tags/buntu/index.html","5d31c1fa157071818847e0debe78f195"],["tags/cad/index.html","e47be4147a8faa3f101872dbd8ebb0a3"],["tags/coding/index.html","9f3b1ccb03bf7d3959d384e2e0a09d88"],["tags/h5ai/index.html","9df33d01b000f372bada5acf6287f553"],["tags/hexo/index.html","e77c68c43f2203dbf25b1b7a5b9929a4"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","60d404f6dcf8bd8f2ac419d09fbee930"],["tags/nas/index.html","d5bc2899017bb4b0bc007c88cf13a1bf"],["tags/tpyecho/index.html","deff4fd9d3d1eb9097a237f50cd8ccf6"],["tags/transferstation/index.html","c8cb961fd62851b3087908d8ad75b699"],["tags/typecho/index.html","fed248e0269a40e180ab29b89e69932d"],["tags/ubuntu/index.html","e1da51c8f48b2c795e71d75de17f4c00"],["tags/写给宝贝的话/index.html","35f5815e59a090e285d60545bddeb1e8"],["tags/原创/index.html","8673ce3628c7174dc6519d8d12144ccc"],["tags/学习/index.html","05729b16fd41d3f537eaa972a80aba65"],["tags/宝塔/index.html","7e725fcc20cc67bd91d9fafa4c3a6b67"],["tags/生产模式/index.html","704959c6b9f18c1c703f7c898180397b"],["tags/百度客户端/index.html","eb4a29606fc0fd7bc6bbaed2348d790b"],["tags/科学/index.html","f09590fe7e060e4756f40714a3d17669"],["tags/统计/index.html","6341902f9dc78efc214d308a19f00246"],["tags/编译/index.html","b78b1783ccb5f0a231360bcd33e25ec1"]];
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







