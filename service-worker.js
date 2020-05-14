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

var precacheConfig = [["Ubuntu打开防火墙.html","c108720071565c82bed7d20d75b497c4"],["about/index.html","0409a241495945d82bc4c0ca1458a32c"],["archives/2019/12/index.html","32d084253749d2d1ce00832d829695d4"],["archives/2019/index.html","bded518c8e657f98f862d50c3d2736d8"],["archives/2020/01/index.html","aa73e5a1a88a27bc0dba644d053a5f56"],["archives/2020/02/index.html","a70398c4660ae326d054d30a92c1512b"],["archives/2020/03/index.html","07bb57c1cbef0da40ebe5d46ef609784"],["archives/2020/05/index.html","a1976a1ca1bbdbe2a5afbda78423cad7"],["archives/2020/05/page/2/index.html","ecdd720e590ca9ede4a69465c3568877"],["archives/2020/05/page/3/index.html","45c4d0056170046dfc1110e869741753"],["archives/2020/index.html","7b6e42766ac6f56fe6992b12ebe101be"],["archives/2020/page/2/index.html","1b3561ce93eb9d300a9e89ad3694478c"],["archives/2020/page/3/index.html","f231fc5f781c2d022c476f0a9cbd554a"],["archives/2020/page/4/index.html","5f3079010fcd44d46d921dcedc3493f6"],["archives/index.html","e6a0f02baf7b232b97ae238ec6f23b49"],["archives/page/2/index.html","51b7d5efd3124e0cd08a36bf54ecd9e5"],["archives/page/3/index.html","e960495b3240eb73fd5aa72f052117ea"],["archives/page/4/index.html","c3f8e0a115fa6fc63b7b3b8a0a5ffe53"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","095945021bd527758b35075094d806cc"],["categories/Code/index.html","20dde51f3057da796c8664ae8534fcd2"],["categories/Plant-Simulation/SimTalk/index.html","a88253710846b1245148c89f6290efa5"],["categories/Plant-Simulation/index.html","71c31a1bc51ded23b445a78ff1480788"],["categories/Plant-Simulation/实体/index.html","1cd6ff6cf111b42abaa79901d98fa2d3"],["categories/Plant-Simulation/常用代码/index.html","14728d3e6f2c452280b258953a19a042"],["categories/Plant-Simulation/常规操作/index.html","fef23614bcb2a539ea701e88fd9ef6de"],["categories/Plant-Simulation/模型/index.html","3a793b9d46a3cc36e3ba1c72eb2d07d7"],["categories/Plant-Simulation/背景/index.html","995b6a5cbfe6125244da641c1ad9ec8d"],["categories/index.html","06a26d33aeba150d2e22d6e0ac707f28"],["categories/ubuntu/index.html","7ec23baafae23b63adcf65ab570e5953"],["categories/ubuntu/ip/index.html","7144b933102d361e512dce5424e262b7"],["categories/ubuntu/下载/index.html","e1bf1f9f6b12ffde503ee57199baa0e5"],["categories/ubuntu/命令/index.html","6cd958cd5090418baddcce7b37101463"],["categories/ubuntu/配置/index.html","c2ff3f3c878581aed733b9695319d88b"],["categories/博客/Wordpress/index.html","8b4678ef326854440905e1ccdc6464c0"],["categories/博客/hexo/index.html","839cd337028f219f55c3839cd2279728"],["categories/博客/index.html","3b6f305767862c30137022c5fd0d14df"],["categories/博客/typecho/index.html","1b8d5e2bbd0cc8d53abcf43dfac764f0"],["categories/博客/统计/index.html","ae44e906cf94709e1be99cb64ed31159"],["categories/宝贝/BB/index.html","92bd14fbca2227b43aad101f81204009"],["categories/宝贝/MM/index.html","6cf74fb5b3ceed2602e484d3d79b709d"],["categories/宝贝/index.html","8fb9a4d2754c2e485eba3f0e9b60fe31"],["categories/思考/index.html","efcbf64503a1f463d068a47a7d27815d"],["categories/思考/职业规划/index.html","7fe4402e3e8f5cdd559f6ac1b943611b"],["categories/科学/OpenWRT/index.html","4ef54b136715a9144a5a126686439032"],["categories/科学/index.html","a9d022acaa8f18717188e472d58480f2"],["categories/科学/手机/index.html","a5efaf7820a5ef03942e55efb5609e9d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d2d48674ce063c77458192077f3809ce"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","9e95cd31d5a8118b4e7d2f9aa6aa4e2d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","68c749643904b8d4c4c091d7292d0cd5"],["movies/index.html","dfd3fb5d34ce48840bcae457eef39007"],["music/index.html","4d6fd0a04e7a1dc8bf4bb7ef56ca5cdf"],["page/2/index.html","9e1221049961c676b6b635506964dad1"],["page/3/index.html","42fc67fbc93b9f4d1b18e3136932ed96"],["page/4/index.html","495faebb71a826192c943aee60821a10"],["posts/20191204A1.html","e1ffd9b6c46dbaa252585f93dc7a8f3e"],["posts/20200115A1.html","e199af216dbed744458d9ce72a40add1"],["posts/20200116A1.html","e468e1417d623485b141ee29faf0e3af"],["posts/20200118A1.html","3a7eb5e38761e746b6ba2b218b860717"],["posts/20200119A1.html","dd1418aa9a648833c6ce99c1f66c18ab"],["posts/20200119A2.html","60a69ab27ec722a2c415f6b2a1519af8"],["posts/20200123A1.html","51f3a1edb161b536ac22b22b3ffefeba"],["posts/20200204A1.html","6a86946e5eebf7d2158b00326fbd421e"],["posts/20200312A1.html","955489cf6c45b0d6ed5b1751397feac2"],["posts/20200320A1.html","ed75e8b7bd110473130d4e8c61b5b302"],["posts/20200322A1.html","adb907223a8db99186fd5c483be96400"],["posts/20200503A1.html","43e855924a5e08b83a6a235d3b7218c8"],["posts/20200504A1.html","d367e20aa88403c2cd6d7e36f53a635d"],["posts/20200504A2.html","73f903c91eb64aa66d7d59a20734f13a"],["posts/20200504A3.html","53daf53404f2dcc4e5e9ace75d0e3682"],["posts/20200504A4.html","f5869817fbe6b8bd39a60425921ddb87"],["posts/20200504A5.html","b585e60d645605312349b5f5b05859ac"],["posts/20200504A6.html","0f514d9357a6887fa3618f5e00177083"],["posts/20200504A7.html","b1adb8570db30101a49753d305eebacd"],["posts/20200504A8.html","e3fd31fe21f1478534f8c70436f51fe6"],["posts/20200505A1.html","c5637aa0089c1ec409afbb8a817c4a7b"],["posts/20200505A2.html","17f58e47d9db6e9792ea7c01192400f1"],["posts/20200505A3.html","788c9a2144794dbf260d183b854df006"],["posts/20200507A1.html","bcaa29e1c1aa5fcd92a79930c7973618"],["posts/20200509A1.html","ce02d1dff4995a28cc21cad48a85010f"],["posts/20200510A1.html","c26837381a80ae825e092851401b146f"],["posts/20200510A2.html","0c3792ce467f9a012138c13226398966"],["posts/20200512A1.html","010fb1b459371386d1d9415f04fba30a"],["posts/20200512A2.html","2e1308583848a8ef62aed570c07457b4"],["posts/20200513A1.html","846e7c42af519e2007f99e786f28e951"],["posts/20200513A2.html","1c756dcbebdf4ef052c410014412513d"],["posts/20200514A1.html","24f808b218619bdfda8f64e3fda28edb"],["posts/20200514A2.html","47e1f8322341e8506c9fb82b14411b20"],["posts/20200514A3.html","889170bdcea87a6fde6cdb87429c2114"],["posts/20200514A4.html","ff871a45ce2994c4588151bc446c1688"],["tags/AGV/index.html","c2fce24496f3f4a02b76cc57d3e117ab"],["tags/Github/index.html","0768f57cf9c26a919c64ab506e597c44"],["tags/Move/index.html","f27323bf52231b2f924f369980d4ce28"],["tags/OpenWRT/index.html","a4dc0a0f217bf4c9744c711a2a2e161e"],["tags/Plant-Simulation/index.html","a6ee7f0912e3e610206f061be95fe124"],["tags/Wordpress/index.html","d9ddaec1b807e2a38bdd23cad57fb28a"],["tags/cad/index.html","bf156d9aa8ded0a20dcd85691aea6b19"],["tags/coding/index.html","cfff30bf43f17adcc2cf3863ccca958d"],["tags/hexo/index.html","ef44e8549b1b3d8fe779042b29917e8a"],["tags/index.html","e1120ae82bbd62a4977ec9f4b85ad51b"],["tags/transferstation/index.html","06883aa2400cb8e8211783840d303f99"],["tags/typecho/index.html","c78b027fd3136782cb2d56c15b94a21f"],["tags/ubuntu/index.html","7ce0bcf4589befa912692297f7525ddb"],["tags/写给宝贝的话/index.html","b601216543446b412910a7d6afa401f9"],["tags/原创/index.html","637d5f8068774c38e2775d1280d46d84"],["tags/学习/index.html","94dcb2173b4a71116cb6d0499103b3d7"],["tags/宝塔/index.html","a14cebb4cab6b680ac9bb104d1bc7a21"],["tags/生产模式/index.html","dd13482ae574341b54daff54232e3fd6"],["tags/百度客户端/index.html","caf2c3fd84154ebc926240dbf09495f9"],["tags/科学/index.html","4778f68f5ac50267857bba63d8006c91"],["tags/统计/index.html","e79c18ac618e9793b4ba060b55a7e136"],["tags/编译/index.html","c4a945b7d30ef8aab2b14098a6a325a3"]];
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







