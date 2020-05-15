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

var precacheConfig = [["about/index.html","ac2a75ed715dde256f4879fcdc96db10"],["archives/2019/12/index.html","c7703151e3033abf57c43f83934ba90a"],["archives/2019/index.html","a1a086b5bf022312d4ef7e457cb30e1f"],["archives/2020/01/index.html","4777ffa040db0b7c9c1b074b9a3b0a95"],["archives/2020/02/index.html","c4ed7d7e617a5590102bedc999ee3f82"],["archives/2020/03/index.html","b3d68fdf8c486a902bff6b9499639591"],["archives/2020/05/index.html","1532f4ed736dc55d1f2ebe9900aa6973"],["archives/2020/05/page/2/index.html","7ca3d29f513091313efebea713e7e3be"],["archives/2020/05/page/3/index.html","edfe6beb5a8b6b7ba512fe3ea7d407be"],["archives/2020/index.html","3de1227657f1e910b7fc556a41b3e172"],["archives/2020/page/2/index.html","47bb9060d807b7f229e408c403ef8488"],["archives/2020/page/3/index.html","70208e42c608c89f37c2b98715c043d9"],["archives/2020/page/4/index.html","1156d96dcb0cdcb55009c37a8b4e2922"],["archives/index.html","49d3bc6d2b69aa76ddf3d7e52cb7fd50"],["archives/page/2/index.html","1cee495865a3bb1e95579b180d9efe3d"],["archives/page/3/index.html","025c18ae9061e481b59f61bc0604bf85"],["archives/page/4/index.html","947b531ebc13f0c289c91bb86bc29d44"],["archives/page/5/index.html","da9a6b746880fc216bf91f82a2b4f244"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","aef7359ffb4f5358c071dc218ecb4a5e"],["categories/Code/index.html","7a733407fdfd41fdae2a9259463573f5"],["categories/Plant-Simulation/SimTalk/index.html","77654d839393d35b6d009f836c75190e"],["categories/Plant-Simulation/index.html","4f8804cedd01f6325a2f6e1d69fce210"],["categories/Plant-Simulation/实体/index.html","26df757a6e8d39bcdf213104cfe78d3d"],["categories/Plant-Simulation/常用代码/index.html","42bfaf6410b9b5f3c2b313e4883287db"],["categories/Plant-Simulation/常规操作/index.html","1afdd3a303b1f876455048f319428970"],["categories/Plant-Simulation/模型/index.html","9d15d71688144ad73b7bf9b490443e99"],["categories/Plant-Simulation/背景/index.html","e50ee11b85a07d767c4876209e2755d1"],["categories/index.html","0cae8bf032e1a07b682f8a2574893c96"],["categories/nas/index.html","1ead74b7e9af58d926913407660b1132"],["categories/ubuntu/index.html","88d87c70b6fe15947080a259a7c8698f"],["categories/ubuntu/ip/index.html","d85c5449d3fe0e8f6bb8bc16ede19031"],["categories/ubuntu/下载/index.html","b4a83e64c1dda23c02748c9d38155f44"],["categories/ubuntu/命令/index.html","704781cf5f0d600b5dd8a3a2fea04337"],["categories/ubuntu/配置/index.html","5ae8edfe61d748d7dd115ddd1849a366"],["categories/仿真/index.html","bcd81202923568ae8de12bee3ffa56ad"],["categories/博客/Wordpress/index.html","a1169d234c9a0d163d4673b5711ebf85"],["categories/博客/hexo/index.html","fa689d4beb4dfc570aa893b9beebaece"],["categories/博客/index.html","0c8c9e6fa41d21043ab7ff23e9ef8532"],["categories/博客/page/2/index.html","9ef2bb54d3d1c723237057ca835f3262"],["categories/博客/typecho/index.html","d58dd7f9e012b42c279267dfb0770df8"],["categories/博客/统计/index.html","c981de07fdec7554e1b0fc436b4295a4"],["categories/宝贝/BB/index.html","b420a189f67c81b96d52be70afd2e3a1"],["categories/宝贝/MM/index.html","ca6b42d766861a1e1033f0ffd9c5854b"],["categories/宝贝/index.html","ffd9bc9e1050abca2104f04432a9410c"],["categories/思考/index.html","2c4eb5c1424f25f81c79c0a5a0360cbd"],["categories/思考/职业规划/index.html","f22e1d912806b7506241aedd2e516c75"],["categories/科学/OpenWRT/index.html","c3f0871360275a3cb988210434b58323"],["categories/科学/index.html","7911ef065c9c9ff3e2685a2d000e144c"],["categories/科学/手机/index.html","1994291e39ac2527f3931e73a4125810"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c542b1fc77be59a78f764d5f679bf302"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0f9eeaa63c1e5e2362b016b1792f5f04"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ebcf2864a7e8e81b25707110681ac9a3"],["movies/index.html","6e029ef176d15b2ee6c97dcd199f9a84"],["music/index.html","5a67d2296dc2b6bb3212f5e989f2594a"],["page/2/index.html","eb740911701803cdc12ad950e5845567"],["page/3/index.html","63ef572634972ce39f500b0eef8e7565"],["page/4/index.html","b77b5aa00bc6bc3a64a4dd0401e0e863"],["page/5/index.html","7415b70f6c2856d14a97d99b6d2fe463"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","49a9bc60a36e2cf923b93d3f504a1d43"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","a1a75a259374ae631ac71e62e809d0fe"],["tags/Github/index.html","61b5a0f558aa12541baa5e69cb6015a3"],["tags/Move/index.html","e808dd5fcfcf7775f43195d087b7f87c"],["tags/OpenWRT/index.html","b9129bfd4cd29a28e9407ac922353cbd"],["tags/Plant-Simulation/index.html","98713b8e864dbe28f6f3206c50da927b"],["tags/Wordpress/index.html","fccdc03c0f900c437088e3ea4a45457a"],["tags/cad/index.html","1f8f1de1a822a850586d3879306e3bed"],["tags/coding/index.html","4eb12a83c1a9121fe947ada6de2c0798"],["tags/h5ai/index.html","dce4e374d39833bd259cc7636abe2a4b"],["tags/hexo/index.html","f287c4cbb2c7cd1175bfb0ac4718aa1f"],["tags/index.html","5167f140ea562c94e6a6f2accd71cfe5"],["tags/nas/index.html","19343182fa73094cb67d9900e3bb6847"],["tags/tpyecho/index.html","27988eb4da465bf0d8cb341006060573"],["tags/transferstation/index.html","65c9cfcb0caae75cda215401d4ba9ad1"],["tags/typecho/index.html","e35cdca1b93692b4a99a6463df9894c5"],["tags/ubuntu/index.html","334cc98e87fee22ec069f5e569c1a50e"],["tags/仿真/index.html","90be563de5d00e486285005f464bb8df"],["tags/写给宝贝的话/index.html","22798fea4a76ea402aef5f08136249a4"],["tags/原创/index.html","817f4021fd56f0f7e3d18c35530d8efb"],["tags/学习/index.html","3db816357a51ae4cc017652f8a393667"],["tags/宝塔/index.html","8001793d3ac689ad9afa01881c42e40c"],["tags/生产模式/index.html","e444f27b7e1fac632ef639e4059b4c58"],["tags/百度客户端/index.html","aa2481825e3150e59f8dbcb8495da228"],["tags/科学/index.html","6f84c78dd46c70b56653a4fb2eab3ef7"],["tags/统计/index.html","8c4c3d42f9e6c6c48d097006c13d1a82"],["tags/编译/index.html","ffc081b6bc14fd3826994a2c7e79a10e"]];
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







