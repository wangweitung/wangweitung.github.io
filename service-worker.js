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

var precacheConfig = [["about/index.html","95877c01bba22b095e7b4ce542bcce1b"],["archives/2019/12/index.html","545f16ecb87763c44bed603a60c31a4b"],["archives/2019/index.html","04667d4f43234d4ed5a8a08887dfbe23"],["archives/2020/01/index.html","0721eed7522982315f84849fa68b4625"],["archives/2020/02/index.html","3aa89866c198b8187107ed0309c25bf6"],["archives/2020/03/index.html","92168d19c782227ec990f31eb67d335d"],["archives/2020/05/index.html","7d76f7ad3bc466982e550d76d9414202"],["archives/2020/05/page/2/index.html","c10c5d0a95be47252258b4c85972341e"],["archives/2020/05/page/3/index.html","e2da923224c7a41c30986e9abb22b400"],["archives/2020/05/page/4/index.html","22c455f6f375a083af3bd109dc21ffae"],["archives/2020/index.html","6484b584f77851a3013ee9f97e18f8fb"],["archives/2020/page/2/index.html","d9b32c404c34a6d78a1b1c1cfac8e239"],["archives/2020/page/3/index.html","476eeb623e08199b7e7c0aa3cb5f19c0"],["archives/2020/page/4/index.html","baa07554cc0ce2f5a2857c17370b7b79"],["archives/2020/page/5/index.html","64685cd4d33c06797db0018b9515a996"],["archives/index.html","c7f7788c5da5606b0501c29f0acad3f5"],["archives/page/2/index.html","5eaac6c9b59e2c83d91fdb52eafb759a"],["archives/page/3/index.html","29c2bf34e6862183da3a852b890208a5"],["archives/page/4/index.html","a597870a884a1ea29081813dc9c6c440"],["archives/page/5/index.html","47dfd650e74b2cd9d5520d7016692c1a"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","0ab9f3c259cf0382435c0fa6fd1a124b"],["categories/Code/index.html","e11670062448cd9fd02310dab4e865bc"],["categories/OpenWRT/index.html","c16a3efbac1542c6d3740ddd7667fd19"],["categories/Plant-Simulation/SimTalk/index.html","da1b121a0476811556c0a52ad5781f00"],["categories/Plant-Simulation/index.html","a0e4ab8287267c35ff0ee64fc26f7236"],["categories/Plant-Simulation/实体/index.html","ca463128339505871ac234f47d250610"],["categories/Plant-Simulation/常用代码/index.html","99adf0bae5ffb93bb8cbf711413c6033"],["categories/Plant-Simulation/常规操作/index.html","6fd92b968df4770e8ef580d9ed132784"],["categories/Plant-Simulation/模型/index.html","54474787cbc1f3ef7bf66d156004b83e"],["categories/Plant-Simulation/背景/index.html","75d4f924c848811f0354eca4e4b03e92"],["categories/index.html","56fbce082838eff87931e40cabdba3a0"],["categories/nas/index.html","e6dbe93ed1c39f6c917a9d5f3d312072"],["categories/ubuntu/index.html","b6744e878f86bd175c6763add7f27c6d"],["categories/ubuntu/ip/index.html","ebdc5b734096b321f29a7d2c1f06c2f3"],["categories/ubuntu/下载/index.html","509fcd8bf962745164ef98756700cbb2"],["categories/ubuntu/命令/index.html","437d5bfc799eaeb697871d721fcdbb1a"],["categories/ubuntu/配置/index.html","b5d7cab6d415d90b160b7bd39dc254af"],["categories/博客/Wordpress/index.html","c402db90371da8b48127bfe1b6adb0e8"],["categories/博客/hexo/index.html","074f026bd4dacacf6b87f19d30e8380b"],["categories/博客/index.html","9737f37651c406683f365cab1e980b32"],["categories/博客/page/2/index.html","6fc4292323b20030f736556aec048b98"],["categories/博客/typecho/index.html","da0beaea4e7d90db0388b7f958e833f4"],["categories/博客/统计/index.html","ee5d17d8e745840f361a15cdd2fcd953"],["categories/宝贝/BB/index.html","aefd3f97567ccc76faa423bbbb8901e0"],["categories/宝贝/MM/index.html","376ad3830a35173574b3b7a3554ba449"],["categories/宝贝/index.html","efbc6e2fcf5422df2fe3c9bea9fc9a83"],["categories/思考/index.html","b3b273ef6d62d149c7f2fd1f8c8be405"],["categories/思考/职业规划/index.html","4abeac78e4f057ef3d8a95ebd1da0799"],["categories/科学/OpenWRT/index.html","7f2c72eb6feb69df5e7276aa7590bf10"],["categories/科学/index.html","88547b0dc34ab22fbfa1104ef255205f"],["categories/科学/手机/index.html","1807d3ebe72d8ddcf176d4b6a6de01fb"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b0a7ed6eec0f7f4cd1b7fc78630ec46a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","846e318808c44e61e108b8ddb4ad1096"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","37e9593ae57922f608920e4c94ea774e"],["movies/index.html","17730c0014600ca0ba4c1c2aecb64bf2"],["music/index.html","28639e179e6243736ab203bae59a3c9f"],["page/2/index.html","53a232d3e47442b00ce378788a7362b8"],["page/3/index.html","3a220ebee41b12f079423939852faaa1"],["page/4/index.html","7dc50ca61aaeb087515460dd1171c558"],["page/5/index.html","e1f39d1974c9bdb490db63c447cb6018"],["posts/2019/12/04/00/35.html","43e9a08e86d95766dcf69ac1b1a7a02d"],["posts/2020/01/15/20/18.html","b9a0439dfc92fd4cc2d5ad29cc41c8c6"],["posts/2020/01/16/22/18.html","2bb89f131da59b8276a463bdab183964"],["posts/2020/01/18/22/18.html","ceb5a315aa429bc5c948b1ab0d4fac24"],["posts/2020/01/19/08/29.html","562a933e612c4285dfddf92fffe2b9f3"],["posts/2020/01/19/22/18.html","f5267a5538ba23e1833a442c48de1bd6"],["posts/2020/01/23/22/16.html","5b1ba6ec4bb6e4b5ee9470e5369fbc16"],["posts/2020/02/04/20/18.html","46fc5fba0690fd39c43542ff4df93c2d"],["posts/2020/03/12/00/20.html","2eb47ef44151860c78ea5ad3f650f58d"],["posts/2020/03/20/22/12.html","6b216f91a85079f61a6b1e3995379e01"],["posts/2020/03/22/18/24.html","76fb396169e8947284875452ae84edbd"],["posts/2020/05/03/22/12.html","fcf17283e35032a469febdf6d26a81a4"],["posts/2020/05/04/00/05.html","57a8c3ca511c3244b7a480f39401854a"],["posts/2020/05/04/00/09.html","b208e5bdc57b4b147e5fdb59577552bf"],["posts/2020/05/04/00/15.html","76f4164994ef7e07bb512f48400baa8c"],["posts/2020/05/04/14/58.html","8488db17b1b7c8748949c7db64f04354"],["posts/2020/05/04/17/01.html","67108a4d5bb6a9ddb0b390d4074bb34f"],["posts/2020/05/04/17/19.html","0d6566dd87774519ae451065ff208715"],["posts/2020/05/04/18/18.html","6c4c39679338baae6b99623671e39329"],["posts/2020/05/04/18/24.html","a950155ce7826db7b5413ef9e8394f8c"],["posts/2020/05/05/11/12.html","6e4001db71085740d70f695f270a6873"],["posts/2020/05/05/13/20.html","fdabfe6757a278948797e2f1030c6abe"],["posts/2020/05/05/15/20.html","50c1a03a15d349a69a0c3ea8e1bf6da2"],["posts/2020/05/07/21/21.html","a3098a9748a6032b35d7d3a010fe2e06"],["posts/2020/05/09/12/20.html","d9917cb1fb3335d87f877b1360067a80"],["posts/2020/05/10/18/18.html","f3d6a12eef6d127f6cbab921c66bd664"],["posts/2020/05/10/22/18.html","31907f89e9e67eba79701cbc51128206"],["posts/2020/05/12/20/18.html","dfd6f39fcd54ab3b0b07a2e994e59149"],["posts/2020/05/12/21/18.html","29c506482764c215adae5508f7739025"],["posts/2020/05/13/20/18.html","37834a116109a5744ffcf29f35614440"],["posts/2020/05/13/23/58.html","4b3beb473efcc6c9d7c2ca542518128f"],["posts/2020/05/14/11/18.html","991986e7ffa7c7c15acd6851d3a2111e"],["posts/2020/05/14/12/18.html","09d177098604957987fd584595d46ca1"],["posts/2020/05/14/20/18.html","fc90b7e67fd3d77096e2d3604d89a255"],["posts/2020/05/14/20/58.html","6bf375fba77a5bd27b3a37589f98d2f3"],["posts/2020/05/14/21/58.html","e9b2cdee9983b8841a86791cbd806ac3"],["posts/2020/05/14/22/58.html","f8008e6b3f93cfe976fcaf3e8326ea74"],["posts/2020/05/14/23/46.html","4595852d1668430537659a0375d9b38c"],["posts/2020/05/14/23/56.html","174c1ba2648ff68d9e2a66d0dc7a7061"],["posts/2020/05/14/23/58.html","ce79b269b53563eae389ba3f464bdb36"],["posts/2020/05/14/23/59.html","2335715fa6fe379def51a3e26a041e90"],["posts/2020/05/16/20/40.html","71998eb657e9891c437c0e2eb3c3c4e5"],["posts/2020/05/16/21/40.html","7e433e7e103bd05b4291bf8d47e3190d"],["posts/2020/05/17/21/03.html","c64ef08ab4fe31fbad7d03875f77a4bc"],["posts/2020/05/17/22/42.html","2c7fab0ec70e701061e37e954f7018e2"],["posts/2020/05/24/07/03.html","64c8c4504fdab3ea7cfb97f58c886fde"],["tags/AGV/index.html","2943a85411e704fc1f78d93d95beb2b3"],["tags/Github/index.html","a275ff503a62956b7cb4f79445cab702"],["tags/Move/index.html","26f5f1b5e6d8747b6226414cdd1d7fd6"],["tags/OpenWRT/index.html","1019236d17eb8bb1653c2b91fdfa74f2"],["tags/Plant-Simulation/index.html","9f6138335f86f4b95da7c258417adf98"],["tags/Wordpress/index.html","720fb21052b06c36d16bc4be636cd3ce"],["tags/buntu/index.html","7a27b6c32dbd93f635a926d5f2d4ad73"],["tags/cad/index.html","759d55c8e088be74b6ef2ac169e08f66"],["tags/coding/index.html","e89816df5ea3be41092b07f8c8760b8f"],["tags/h5ai/index.html","fea9daf5bbdc1199cdbf8d5449b9066b"],["tags/hexo/index.html","3b307a9a7a5fe7fad84380053818c922"],["tags/hosts/index.html","ab47905ffff0d908b08669c7950c97a3"],["tags/index.html","9fe9dc68cc21d294e22651702e25910d"],["tags/lychee/index.html","00a06abc070c9fa990f7afebcd780bf5"],["tags/nas/index.html","a1a7cd52c6d77b48171812a9198226db"],["tags/tpyecho/index.html","5454a30804aa84cd1d64cf1a86117ee3"],["tags/transferstation/index.html","084754264b98f90dd1892bd1ebd8f721"],["tags/typecho/index.html","956ccb39420965fab78a294bd9209bdb"],["tags/ubuntu/index.html","8e1b7f23cb6c96b989b88acfdb2f3a3b"],["tags/写给宝贝的话/index.html","79b2f468e9fed937001332d65e3b8605"],["tags/原创/index.html","87f8e0a111f24483cffec91cdf2eb547"],["tags/学习/index.html","bfd77b4660549e31b5369e4004f4297f"],["tags/宝塔/index.html","68cdff69d1eca4a985ff03fe3ec6a5bb"],["tags/生产模式/index.html","40571cb76c66a2d1de867f5536f7cdd7"],["tags/百度客户端/index.html","d0c28bd54a372c5a1c5d6c1ac2049d1a"],["tags/科学/index.html","72a0c48cbd4865714efd0d1a3d5876ef"],["tags/统计/index.html","4576ad5127511990a19afdc8a4f6343d"],["tags/编译/index.html","1e965cefaa317faa8db5279e1748bf05"]];
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







