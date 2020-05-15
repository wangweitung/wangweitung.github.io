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

var precacheConfig = [["about/index.html","5190e39ee8543a302b65b11360c16bb2"],["archives/2019/12/index.html","4019c94340619fa927e2f18a0a1824a8"],["archives/2019/index.html","961c3c6b4317c635463779150c118922"],["archives/2020/01/index.html","3e472c088f0aef79e35e1f1cc8c0a601"],["archives/2020/02/index.html","02b274fa13e97108f208ac9718da1752"],["archives/2020/03/index.html","571d63eb4d3aea6d25803710b60298d5"],["archives/2020/05/index.html","d5909ec9ae1fca5854fc4c8bfd715839"],["archives/2020/05/page/2/index.html","f85716d1cbb24b6f8771ab05feb695d7"],["archives/2020/05/page/3/index.html","1caa4ae557860c9154d1d268c54d566c"],["archives/2020/index.html","38881d6eda99189d8669f07893f66826"],["archives/2020/page/2/index.html","52b819f7908dfb775934367a2c452867"],["archives/2020/page/3/index.html","552c994ebe5fc274c3a3edf6d247fcf8"],["archives/2020/page/4/index.html","aac2c94d0d36e74785ebaa11530b639a"],["archives/index.html","24b2a033c4d700431677e7cd4bff421d"],["archives/page/2/index.html","f63fcb6994b58b6be9c6edbf89450bde"],["archives/page/3/index.html","535e929026301ef2e9acd0caed8ac263"],["archives/page/4/index.html","2c2a78ba4e21ff776f7cf9081c0921bb"],["archives/page/5/index.html","d1d68eade18fc49e857f0270d756ab12"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","22b3ea1b125b973b3c6d280965f0f700"],["categories/Code/index.html","1ae1a57ec7fcfb9146865a8e8e3e4984"],["categories/Plant-Simulation/SimTalk/index.html","8b44c1e53aef4405ecc4911238e57132"],["categories/Plant-Simulation/index.html","2744e4ae618693db5535a94e0d50c765"],["categories/Plant-Simulation/实体/index.html","1ce38726431706522156c98640392ac4"],["categories/Plant-Simulation/常用代码/index.html","de3355e6f1298b1de7dc9461de851d66"],["categories/Plant-Simulation/常规操作/index.html","2f1b4d700cda47b410ff28f255a2a02d"],["categories/Plant-Simulation/模型/index.html","d49a30ff509aef58b302f9cc881bfb8b"],["categories/Plant-Simulation/背景/index.html","ea421f28cac7b12c51ea7a6f0a22ef27"],["categories/index.html","b438cb14e38c6b5ffba1c8bf04a04e68"],["categories/nas/index.html","c1b918fc658f426700008cb2f617abc0"],["categories/ubuntu/index.html","b935173fb452733806ce61c6913669c4"],["categories/ubuntu/ip/index.html","47808d64db2399b36d829c1f7e16eb7c"],["categories/ubuntu/下载/index.html","0fa8645ef4e4039280753e9a75db5986"],["categories/ubuntu/命令/index.html","e0e04b8ffe4c0d24e299d957492855ea"],["categories/ubuntu/配置/index.html","3053c64baff7df69be5d33c75e8dd262"],["categories/仿真/index.html","d07b4c7463d9d1fbc28f1178b91327c2"],["categories/博客/Wordpress/index.html","c83d4eb4d11b095c2063e892f1972165"],["categories/博客/hexo/index.html","0f5ba7aec25f840710255eec2a1e0212"],["categories/博客/index.html","9e81f2c8aae2c926920ca3ae5fb54ce2"],["categories/博客/page/2/index.html","605c2d1254112c0845078bee1d5fba87"],["categories/博客/typecho/index.html","42cfa37a1f44b66f145391a9249c3c35"],["categories/博客/统计/index.html","4c86870d86dfa62c754c2480e24e9dc3"],["categories/宝贝/BB/index.html","aa399a55cb8b0e5cd71b4a24c22ef5b1"],["categories/宝贝/MM/index.html","c429701f94d24ae53e8822a8305ab4d4"],["categories/宝贝/index.html","523acca58e1a521e90529e6cadd34f16"],["categories/思考/index.html","0d3ad087ad451dfaf8cdf5df18c3025a"],["categories/思考/职业规划/index.html","5d85f3b1792a2d89ca88905e1aba8e04"],["categories/科学/OpenWRT/index.html","d112643edf159d6fc8053dcea6d26417"],["categories/科学/index.html","5d4556623215a268dd6725ffbe333bfe"],["categories/科学/手机/index.html","2de53872a889d553d5d77b38b00ba8d9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7f0acccf4f8eff1e81be4765099ba49f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","fd25864e4416f4667fc2262603c38044"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","117442a35cc8aa16dd67404901a1a9a8"],["movies/index.html","37d6aea5ee588f48606b05587274f930"],["music/index.html","24dc015ef1026c99b08a4f5876a169f3"],["page/2/index.html","7dfffe8aebcbdd74897fcc810ed81044"],["page/3/index.html","e9dcca40fa2f76556f283ed22986898c"],["page/4/index.html","edc9b831fe3c332fdb4dddce5b2edab9"],["page/5/index.html","19679640d5a37894d4b9fa0a2431faf0"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","850ec4dc830d68fd915e623eb0214580"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","5d5c08f25bc7592ef8131405ec6645d9"],["tags/Github/index.html","658113281b919ec5fa701fb5d8987527"],["tags/Move/index.html","14c542bc02c441983ba65e54bc6c92c5"],["tags/OpenWRT/index.html","e90b4262739493520cd1aac45c992f60"],["tags/Plant-Simulation/index.html","d7f39922b3afc99534f72e54dbe38464"],["tags/Wordpress/index.html","c301c7ff2f34c9135aaf7e8f585920a8"],["tags/cad/index.html","37f47a35eef738e322dc554472d4c141"],["tags/coding/index.html","0c7120096c5ea0eb88f12f204f968369"],["tags/h5ai/index.html","59cc3cdca86fa3d5371b17b40f01df71"],["tags/hexo/index.html","d12a0a6c42f078ee08c2b2cf62129605"],["tags/index.html","e0b534c270edf3eda27ed907e053f6d7"],["tags/nas/index.html","94adc44aae61ac180f53b57494894b91"],["tags/tpyecho/index.html","6e2722be9a06e1b80fd016a72834fc9d"],["tags/transferstation/index.html","83b65a987c2ea4f8004bc3fa8932d9dd"],["tags/typecho/index.html","d4df14b6a1a9feafa643c78d9c8b6fdd"],["tags/ubuntu/index.html","d9bbae6af6cf5ae4b4a548ee64b6c632"],["tags/仿真/index.html","56236fcc57ea703d12263b80101cc80c"],["tags/写给宝贝的话/index.html","846b6180e22cb9534a6109f499d5ac23"],["tags/原创/index.html","4a577efc6e187126b57bf639ceb43d31"],["tags/学习/index.html","4ee6c6e278f91ffa7578a852b8a4c72a"],["tags/宝塔/index.html","baf04e8264ee5553a8738f39ae48cd04"],["tags/生产模式/index.html","930567405e9d61ed263158443de48484"],["tags/百度客户端/index.html","dff26247b7e28298e2532e95c2057ab0"],["tags/科学/index.html","e99ec9e1dd100c3b67b4698a0e30d955"],["tags/统计/index.html","25abd08d240321c434fba42d5f1dcb35"],["tags/编译/index.html","9f09de2b17f586cc78a64f3cac10f866"]];
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







