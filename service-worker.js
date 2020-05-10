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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","181eb68911a1d32d8118a1cd14b866ba"],["2020/03/12/妈妈写给宝贝的话/index.html","2a2eb4150a49549dab8d3700bcdade53"],["2020/03/20/磨人的小天使/index.html","51a58f22ccf29896ad72cdfe33346e6c"],["2020/05/03/hello-world/index.html","e42e216aef35b5432c842c49b01319cc"],["2020/05/04/AGV的用法/index.html","26c363f6e75c06ff8f9e8cc3374bbb5e"],["2020/05/04/Github创建文件夹/index.html","57362e935dcc04b74e2da976862c8ef8"],["2020/05/04/Move的用法/index.html","75c9ab886ccad25ddd31713519bd9f9c"],["2020/05/04/PlantSimulation常规操作/index.html","0d7990c80f9c79d4b1444b3af5821447"],["2020/05/04/TransferStation的用法/index.html","6506747959182a99cfbdfe5c9073cf1c"],["2020/05/04/Wordpress问题解决/index.html","23add8608658d2dd19a65561a26cf203"],["2020/05/04/ubuntu安装配置hexo/index.html","91c2d8bb387db5d04ef6004895dd6427"],["2020/05/04/无科学环境连接谷歌账户/index.html","68e33fecaa7790e16ded06d623ffcdda"],["2020/05/05/Markdown的一些小技巧/index.html","fa01c8091f7bf393037a0b5f9603928e"],["2020/05/05/导入cad作为背景图/index.html","ef51f52c347b074299499fd60bc3a09b"],["2020/05/05/推动或拉动的生产模式/index.html","786f4544b61cdadd81d92416e307ff82"],["2020/05/07/在摊位下上网课的小女孩/index.html","0799bb2e835d2d0012418369ab2d182a"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","7d8a093f78a2c7279043ee8c8fc35ad5"],["2020/05/10/ubuntu安装百度客户端/index.html","9155fb06397cdaeed4683405580879f2"],["about/index.html","6b64b7e6ca3b94bb76cf0a870d2d1855"],["archives/2020/01/index.html","e41075e05c882d8805d9d728f4cc3512"],["archives/2020/03/index.html","01de7a67d1df2fc2e1a074994171aa68"],["archives/2020/05/index.html","c8793d6ce9b1df8f792ac28a53ee17dc"],["archives/2020/05/page/2/index.html","a1946e7801751036c64e5d6b355d7ae0"],["archives/2020/index.html","8414c1fc8ea8989a51b0a81c0586a076"],["archives/2020/page/2/index.html","cd56c8463653bd8a5801493a6968db1d"],["archives/index.html","61e10b612219b3c9399cb4cc9c634bab"],["archives/page/2/index.html","e7a6b9574e93bebc483b9775283ab3ef"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","b2140ac0ea36cfaa45f85487a23715e0"],["categories/Code/index.html","5854f31d7c5edfd050705996e9ece0b6"],["categories/Plant-Simulation/SimTalk/index.html","3aecc4e71bfdb1a11ce6eecaf5cdaeef"],["categories/Plant-Simulation/index.html","8e31a6eb4f537944faa078f747606bb0"],["categories/Plant-Simulation/实体/index.html","68e723cee325fcead106fd98c4d9d80a"],["categories/Plant-Simulation/常规操作/index.html","4b070d616e7d3261e4f95b721ddec581"],["categories/Plant-Simulation/模型/index.html","42c1c81707bcfb85d0b4c36de1db9da5"],["categories/Plant-Simulation/背景/index.html","30220a4f03c5402057e9599a62fb0085"],["categories/index.html","8c16f9c37691920d65cb5f3e72b8f265"],["categories/ubuntu/index.html","ae43ae9e3f0e6df5483c8adca322bd33"],["categories/ubuntu/下载/index.html","7d0f7881b2ec313dfd4d534c09081e72"],["categories/博客/Wordpress/index.html","32c77611a731e0834135a5c38d2d7a71"],["categories/博客/hexo/index.html","12628e978f6f4720fd320783a672aa94"],["categories/博客/index.html","11127fda4592d5c559318decd0f718dc"],["categories/宝贝/BB/index.html","226eec80b6ebb8c2d0e8c28ce2b8d002"],["categories/宝贝/MM/index.html","79b6242edac9741fb661cdd55d0db010"],["categories/宝贝/index.html","de12280433c118af79bd6099fd173835"],["categories/科学/index.html","b3dae589c175dd4a10c7defcbdda0c9b"],["categories/科学/手机/index.html","fc6301bc7caed2dc50a19c753a6bde03"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","abcb922758f27bf60813d24a591256bc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","36e4c8ad423b70bc74fd112d5b0bf654"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","41f7f9b8739e7e9490c63ed571babf7e"],["link/index.html","78cd4b626b5b8a103c0c4f3305aab0e3"],["movies/index.html","ef0705e6f8fbd5bba31da582adeab115"],["music/index.html","acb2df91b2439ea7c66ece1625d4df28"],["page/2/index.html","9d31c0497dd8d9e452a46a5052728f97"],["tags/AGV/index.html","24e3cba5fee6ab8db32040d9a5562e29"],["tags/Github/index.html","da6261189c43236b6404cfe86d1846dc"],["tags/Move/index.html","c05d47d25031826547c2243ad1cd8cfc"],["tags/Plant-Simulation/index.html","0e6e81b41cd4f98bd3dae9d5cd4e72b9"],["tags/Ubuntu/index.html","0c73fe38c14fd21d4d6be32e53f3598d"],["tags/Wordpress/index.html","d120c97be06daae9143c86a0430d6a4d"],["tags/cad/index.html","3ba0b0af64848498721498bef273502e"],["tags/hexo/index.html","307fcac8f709b5963b87b5bae05acf74"],["tags/index.html","06b533676e04fe1c4e1973ed568c7757"],["tags/transferstation/index.html","121cbd09e79bcac937fa8f67ee094a73"],["tags/写给宝贝的话/index.html","03fecabc720ecc98d1459d23afba69b3"],["tags/原创/index.html","4f191a4bccb890a645b3656b5b36f854"],["tags/学习/index.html","3df33e2583a018cf67efa3cabaa99909"],["tags/宝塔/index.html","539d297a1e27c7a54735caa990a7b7aa"],["tags/生产模式/index.html","2db876d896c8f60488dae6193666ba8d"],["tags/百度客户端/index.html","f781c02fddcbc9e2d88bbc890ff34b88"],["tags/科学/index.html","46cd698f6262e45752d9306ff2b16855"]];
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







