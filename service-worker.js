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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","10ef88b21fe6ee736144d1d29d54626a"],["archives/2019/index.html","423558cfc7b23dbc265db58a0c6805c6"],["archives/2020/01/index.html","11e3f6152ae461ea867e45152bbd6fae"],["archives/2020/02/index.html","68a9f9d1fcde7fd58e65373755b59db6"],["archives/2020/03/index.html","d0c0662ca4b6cca7cd66a8de55224983"],["archives/2020/05/index.html","dd20e6528812f80849ec47e5aeddaac4"],["archives/2020/05/page/2/index.html","ae13376a53596dcaed96d59e1319bbf8"],["archives/2020/05/page/3/index.html","94a0bf3388fdb11016c572bda2e80acb"],["archives/2020/05/page/4/index.html","4c86f97413c08858675be804df75d277"],["archives/2020/index.html","36e0d4299b9db739d83d83e4dc211264"],["archives/2020/page/2/index.html","8059efff5220d96d7291c229460eb6c2"],["archives/2020/page/3/index.html","853914d2b8de09ed2754a888a56378f8"],["archives/2020/page/4/index.html","b8123e9514be111025949595ddec2062"],["archives/2020/page/5/index.html","e5bc89d27f2430aa2ed4c40521f1f96d"],["archives/index.html","7285ef7b84559821930afd6381d87ded"],["archives/page/2/index.html","2727103d48dc1dd96bf0bb9bc171b85c"],["archives/page/3/index.html","966dcb1d2844e7c5fa06c5a32d2b0db9"],["archives/page/4/index.html","c55385bd62a1df6208589d78de9f5da1"],["archives/page/5/index.html","712081d3cef0b30f2bb6217d12832169"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","252414945f716919d6972c82104a3a3f"],["categories/Code/index.html","5b910ab8b6424a06e9eba117d5a51310"],["categories/Plant-Simulation/SimTalk/index.html","bc6c0e28708595829462e9056321e87f"],["categories/Plant-Simulation/index.html","c0a80deb69ec4fef66f0ef9f0f25b90c"],["categories/Plant-Simulation/实体/index.html","f7a4285aa3204b85329400a6d3bd02b6"],["categories/Plant-Simulation/常用代码/index.html","461c6edc97500ba0b6ed0afa45a7a083"],["categories/Plant-Simulation/常规操作/index.html","fc0be7e6f0ea28c526010642ad7395db"],["categories/Plant-Simulation/模型/index.html","1ca389c86d69959070cee2b449cc5998"],["categories/Plant-Simulation/背景/index.html","37f6fedf8981a0a5ca90fa1f67af6a3d"],["categories/index.html","08afedda9664dff1fb7234c92884a9fb"],["categories/nas/index.html","1fdd4d2596b7db71b2ca5dea23372b57"],["categories/ubuntu/index.html","566546522bd4739b6c60d7c397966f22"],["categories/ubuntu/ip/index.html","6ad478fdaf5f5b61ff822b3d25b87387"],["categories/ubuntu/下载/index.html","a9e1434c7b69b04e0bbd41ec1639e758"],["categories/ubuntu/命令/index.html","be00ab1fe485cb0a9e5df435405b4908"],["categories/ubuntu/配置/index.html","aba43b58ffef2f965497e3319343dead"],["categories/博客/Wordpress/index.html","005aba97007477210f5fee8327d9ebac"],["categories/博客/hexo/index.html","255aa4fa23b2cc4f077769975016ee89"],["categories/博客/index.html","f692edfb0f690ab3fe5b9aae133c0569"],["categories/博客/page/2/index.html","27ac49e27bd03e0c4ce5f5e84d0bf364"],["categories/博客/typecho/index.html","d35f737702c5fafedacf8b265cf0280d"],["categories/博客/统计/index.html","757579cc5172f36902f75e92e8e9e086"],["categories/宝贝/BB/index.html","4e4dd6180e55709cfe0550d5af726bff"],["categories/宝贝/MM/index.html","aa2b0168803fe47bac42740eac709d85"],["categories/宝贝/index.html","5da8fda9c6484b502922c830750d4bca"],["categories/思考/index.html","06c08e7d20d97bd32cb252172b77f3ae"],["categories/思考/职业规划/index.html","7ad9376746b1ad98683fc0d3b946fe06"],["categories/科学/OpenWRT/index.html","4c4878a11a5a0d4f5b47f127ece1f32a"],["categories/科学/index.html","8c78c2bb9e91e7b1688d4b7b2f42ddb5"],["categories/科学/手机/index.html","332b214a90cf8dc9042d553d267d23fb"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","dbaadbcb4a8ac845fc64ad4abb419448"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","98a66dea26e540caecde42f03e63dc39"],["page/3/index.html","1a2801f141353f81a18068efb12c3cc4"],["page/4/index.html","a73be65b157e261d47b3890bdeca7b56"],["page/5/index.html","189f18908750baae33870c6bcacd3bc0"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","484e36dec9b3a863b5121b8392318be4"],["tags/Github/index.html","7b25e0eb762720a9513d2d4747342884"],["tags/Move/index.html","ef7f4c599c794889cd64ee3e8ec005bd"],["tags/OpenWRT/index.html","fdf3923b1417d4baa777fb16797e021d"],["tags/Plant-Simulation/index.html","7e1cf8a5a761203d1a23675e17d3a721"],["tags/Wordpress/index.html","7741f8d46125202f2024d8064ba8dec0"],["tags/buntu/index.html","5c6fbb74394aebb16bbd193f60c5ff58"],["tags/cad/index.html","21ea0e07d6564e17879d76f43262a009"],["tags/coding/index.html","e716d90fb20d07008335f745f7b9cc53"],["tags/h5ai/index.html","b6175bd95895a8f30363eed85cf72d40"],["tags/hexo/index.html","9990d82073c3275034530172612afca8"],["tags/index.html","2a958c145f5e436f0471d11909c5e67b"],["tags/lychee/index.html","c8f2de9c9d7f9535a413189579bec470"],["tags/nas/index.html","ed237c17e1be38821c38853a75b47f58"],["tags/tpyecho/index.html","a537c8b1e0f62af37018910d86a903a6"],["tags/transferstation/index.html","ec524c4b6402b666a229c4cfe4bdfa45"],["tags/typecho/index.html","e0b41a937e852f75ea11adabcbc38ad2"],["tags/ubuntu/index.html","c0804e9523e993426ddb8e0a3e0422af"],["tags/写给宝贝的话/index.html","091daaa6a7d418fd326696d85fdbf56f"],["tags/原创/index.html","03537e441423ae15bdb75d3945cda311"],["tags/学习/index.html","ca8bd5175ec08243ad2ab4fc835bd7c4"],["tags/宝塔/index.html","d94202a65cc19f6680b2a8422965af5f"],["tags/生产模式/index.html","d21d54a78b9c5ef402df2bb238457c06"],["tags/百度客户端/index.html","5e278577295082d0f66c9a6e3141f90c"],["tags/科学/index.html","e10c1648a0aed488e526340fef7b0244"],["tags/统计/index.html","790973d03370ab5705d35f12bb2d1059"],["tags/编译/index.html","8d410f7ffe9b83779b8587c4510444fb"]];
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







