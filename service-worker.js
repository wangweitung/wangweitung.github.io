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

var precacheConfig = [["Ubuntu打开防火墙.html","fa52536dbc593269db17e987f6187814"],["about/index.html","7786ebfbd4638f67e352ced479b69c78"],["archives/2019/12/index.html","098b2546ea6117741000904fedde824f"],["archives/2019/index.html","c87d7bdcd42cef40dda67daba8dbba54"],["archives/2020/01/index.html","113e25c57a0bcdd9a2d722f26c6fa535"],["archives/2020/02/index.html","63ae6ec5a01e76986fe63a5e014d7377"],["archives/2020/03/index.html","db966c92848ea050b9ed8d606ed1d88b"],["archives/2020/05/index.html","298990b08f28b9de8f1e87b0cad7c160"],["archives/2020/05/page/2/index.html","99be98833ea2ba075588bd0fd42ffbae"],["archives/2020/05/page/3/index.html","8c4e259245b686cd072c182c914a5291"],["archives/2020/index.html","da55e1f31dea14eb97fa337c687a9141"],["archives/2020/page/2/index.html","bb95e227e1f38a2190ee66e648ddea41"],["archives/2020/page/3/index.html","236ce378239d7fb042cfce31077c976c"],["archives/2020/page/4/index.html","7aa2dc7b3453249341cbeab845a012b5"],["archives/index.html","e04e8ee4b1fa4d4c58f8abd16914ff82"],["archives/page/2/index.html","2fc64d94a7867fab2c6648d9c5b0ae88"],["archives/page/3/index.html","241e220b0a9c94be88b5cf8a82cb331e"],["archives/page/4/index.html","ff14df8fbd71956928885994707c19b7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","829e572a360132423ae5467a52bb956d"],["categories/Code/index.html","6ad8f00746804a69a36e3eb29b694957"],["categories/Plant-Simulation/SimTalk/index.html","b1501518a5b64646b9567a39c88574fe"],["categories/Plant-Simulation/index.html","e26a61aaf21e769898d87b35a389bb37"],["categories/Plant-Simulation/实体/index.html","b3d10616bfbaec5af3ab4f8d13e0f0fd"],["categories/Plant-Simulation/常用代码/index.html","1534eb40a4df15ca7d2b3dd90e0dc049"],["categories/Plant-Simulation/常规操作/index.html","734a77a58387f76b3ba1a1d738c1d982"],["categories/Plant-Simulation/模型/index.html","a6c19c0bc8670325b24f7cc8e90eaaf1"],["categories/Plant-Simulation/背景/index.html","d159fc2f450b20bb9cd228070c41bd3e"],["categories/index.html","751e9ac0cc1d49d239a713628e86d4cf"],["categories/ubuntu/index.html","0f97c82082a61c0f3dd96724c984513a"],["categories/ubuntu/ip/index.html","542bbd1b7341378e38833ca5dcef4e88"],["categories/ubuntu/下载/index.html","940857ae6b4aeac0e3ff1281d10a3ce7"],["categories/ubuntu/命令/index.html","418f0461144e2d37341507c9d001a755"],["categories/ubuntu/配置/index.html","868197b4f90d909d2089307b4978455f"],["categories/博客/Wordpress/index.html","2739306b71a3370c3d5a2c907acf67f8"],["categories/博客/hexo/index.html","6582f267aa19b260c67a339ac225dd6a"],["categories/博客/index.html","0022057292ddb150da41e7c52a19a6dd"],["categories/博客/typecho/index.html","8d0995376edfbfb5db91c7a2173c6031"],["categories/博客/统计/index.html","5d9340110cb2265b9f5519c850b0c9c5"],["categories/宝贝/BB/index.html","e1a2db0cee6556e4191249010d617dd2"],["categories/宝贝/MM/index.html","dd205a179fc99125ea23786e9571e788"],["categories/宝贝/index.html","e48333c3b24349e73626b6e26e8cc90c"],["categories/思考/index.html","7d7816a7f075d78ee28ffd5350109465"],["categories/思考/职业规划/index.html","b4654fe2d9bf0cf342d438cee2ad16b3"],["categories/科学/OpenWRT/index.html","82af04190bcb9cc1a3608940ad2c0b23"],["categories/科学/index.html","e9e0b543fa8da3b3824de43501c424c4"],["categories/科学/手机/index.html","5bf8352460c46d01bd1ca7df541158b7"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","51fcf0f452b988c0c6573cffdc4e9f2d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","765f6d10448b8e18467bbd5501cec0bd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","89cf01acddede68e71016d3f7cb87a9f"],["movies/index.html","2138918236c04c626e7944dd15bf52fe"],["music/index.html","59b64006a8a4b2ffc7da858e7a97698e"],["page/2/index.html","4f27a3f18bcfc3ba75f63f34c51ddb7a"],["page/3/index.html","61ad169e925b47e6bcf403e21676ac69"],["page/4/index.html","f647223f7322bcc2297d12d82cfb99c6"],["posts/20191204A1.html","0c79952df27e9dddf0a26ab710a2b0fc"],["posts/20200115A1.html","19a702a9bde870b3cbe1bdaf8f1d395e"],["posts/20200116A1.html","1c09c3a0642d329b0e48be4aa18033c3"],["posts/20200118A1.html","f598043566862d0361af5fbe808aa53c"],["posts/20200119A1.html","439584c4eef1a97329e7a9b274a6f0bf"],["posts/20200119A2.html","ea30242a128f50b98e26d04c0fc4865c"],["posts/20200123A1.html","f651533c6974a805b80c7123d5bf0267"],["posts/20200204A1.html","840eb2f1fb6bcde9701c3673420220bb"],["posts/20200312A1.html","1cc14178e24bb745f7537f3c92eddbba"],["posts/20200320A1.html","9ae22dc8e9502bfb3def202aff663212"],["posts/20200322A1.html","686198b464348f1f0ab0a6555f9a11d3"],["posts/20200503A1.html","62efa7876bf536495c1cc9604a3fe9db"],["posts/20200504A1.html","61bd016b3c245107346c2f9b526f4a2c"],["posts/20200504A2.html","6e7db61c2361d460cd9cb6914c7c7c4c"],["posts/20200504A3.html","12b6b05cb45f893e40a1c338e004089a"],["posts/20200504A4.html","7876e188ee4f7aded1463681f391d1ea"],["posts/20200504A5.html","e2714d12799d46cde6273b21007c99f9"],["posts/20200504A6.html","74598db5f60113e4436f51fe3e7f93cc"],["posts/20200504A7.html","9829b80bfe6051a417ceb21eb8d04e7e"],["posts/20200504A8.html","6e07ada24c6c44e6b987b24227648d26"],["posts/20200505A1.html","c6c1ed2ea1cd679ac2cb90331a778ec7"],["posts/20200505A2.html","7814c4f7abba15bcf8a76ad87ece0208"],["posts/20200505A3.html","b2b6078578e33cb83381bd22eb46f682"],["posts/20200507A1.html","bd30a37080d699eec42f239d134e968d"],["posts/20200509A1.html","63d6c5eebc047bf29be8a20eb055d59c"],["posts/20200510A1.html","7df30c19943eedd955a637db1398ab63"],["posts/20200510A2.html","46833efd9dcad0baa293b1d73a0f177a"],["posts/20200512A1.html","51d171acaef880402d15004994fe9160"],["posts/20200512A2.html","da6c8adbd15c51a363cb57e93789d2a0"],["posts/20200513A1.html","722f4362c01e6e5834c91688d6e56ab4"],["posts/20200513A2.html","4336b4ce10e1026a53adc76d2f3accc9"],["posts/20200514A1.html","12bc7f0bcf6dbab0093d6934f6cef2fb"],["posts/20200514A2.html","a079099207fa31068321c97c03f83cc7"],["posts/20200514A3.html","a8a9db968b864e65e9a712f4dd0b43eb"],["posts/20200514A4.html","3eb61e052cf7bb68c7da3783c6e48dc1"],["tags/AGV/index.html","c812e8cf8b70ede27694a3b6c94a4ed2"],["tags/Github/index.html","be9aa3e7300e23da7686572a02bb6e73"],["tags/Move/index.html","c585967bab2d56a92567142b35f7fa53"],["tags/OpenWRT/index.html","b5e3489be36ddee47f7127417d34b97b"],["tags/Plant-Simulation/index.html","e8c686dadf04a9c898e33da0fdcea9b1"],["tags/Wordpress/index.html","0085b24f423869716ee309a650c97af2"],["tags/cad/index.html","16fea790aeecee2e395efbb2fa45ed25"],["tags/coding/index.html","b1ee713f046341cc2f602e1de1282eea"],["tags/hexo/index.html","74754df05023513fac18eb3f7b982362"],["tags/index.html","f18b2ce7588597d637274a4b929fb5f6"],["tags/transferstation/index.html","e483242d5603287d76d8fef52a0618c9"],["tags/typecho/index.html","6584d308d417e16c4a69939fa93f6e31"],["tags/ubuntu/index.html","84f53283eb1be77d1e2d3d86b9a03667"],["tags/写给宝贝的话/index.html","e6236aabbc4d8929d9ca5083afb5aa4b"],["tags/原创/index.html","b56ca32ec0d6ee64e741e2ecda1087d2"],["tags/学习/index.html","153a9adb4a28d2fd2f1c1a7331dc2140"],["tags/宝塔/index.html","3bcd116635cb3e0ce71b848bf66c51b1"],["tags/生产模式/index.html","287ff3b76a62bd61695832603290da1f"],["tags/百度客户端/index.html","87aa9c3e978494db56f418c12efbcbc7"],["tags/科学/index.html","2f812ddcdaeb1358b983b3b9d9b6bde4"],["tags/统计/index.html","16296b509767edf34283cb11b65e3b8b"],["tags/编译/index.html","5cd069be1bed4c9b90f8c0352c5f10a1"]];
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







