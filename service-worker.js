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

var precacheConfig = [["about/index.html","cdc7f9426918aaccaeb3c50fa3bfe51f"],["archives/2019/12/index.html","b68326f64928d42f5262c455965cf4b3"],["archives/2019/index.html","b5dabc7b976761dd281e15d383b57c42"],["archives/2020/01/index.html","713e775b532c7ff3ca76ece34ca51adc"],["archives/2020/02/index.html","010e6bc44006fdc9cacd5fedef101638"],["archives/2020/03/index.html","742d1e12f92cb9cd491052724da52ef6"],["archives/2020/05/index.html","d3dd6878133a56e481e256e4fdd6c215"],["archives/2020/05/page/2/index.html","f866e485a7429e41d96a903edb70cc02"],["archives/2020/05/page/3/index.html","0e1d7dd25f812e6d63e8589fd4a2be68"],["archives/2020/index.html","34e492ba4808b755a21d3cb042199d1c"],["archives/2020/page/2/index.html","5e7f6b5c384897e08110ae571f5a8aa3"],["archives/2020/page/3/index.html","0f89228f28616580e098ccd94e5e35e7"],["archives/2020/page/4/index.html","0673c34e9d42ddf0eafc277ce5c2945a"],["archives/index.html","f0108a22fd5f57c9af46bb4e5ee9c5e4"],["archives/page/2/index.html","edfebf84b096e9c79f1d4494a9957197"],["archives/page/3/index.html","834fe62a206b4e2cfa677b5c2bd7e7c9"],["archives/page/4/index.html","e6d9b3bb2c79b9d024d0a6be7f038972"],["archives/page/5/index.html","ddce2e47360c526de55eae41066983fa"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","6930c6c8bf0527e9bc660f26367d8dd1"],["categories/Code/index.html","e9cd4611dabc3427bce37e934aea83fd"],["categories/Plant-Simulation/SimTalk/index.html","33f1832d3cc79c49c73a94b36bf19082"],["categories/Plant-Simulation/index.html","f312ac53e6084e8eee94249e521345c3"],["categories/Plant-Simulation/实体/index.html","96d8a7a3c3b138e24c07d27c6872a526"],["categories/Plant-Simulation/常用代码/index.html","98851303d6116417105a146b3857c226"],["categories/Plant-Simulation/常规操作/index.html","4996c74c9c96bb2308a8726ca66ce023"],["categories/Plant-Simulation/模型/index.html","0b6c003355cd26409b379782f57315d5"],["categories/Plant-Simulation/背景/index.html","838102de1227341669349d19250b1954"],["categories/index.html","e4e831a951bdb89f2ef8b1b5f8ae39f2"],["categories/nas/index.html","fef042aea4fd10b9ee13e7fe1ccb9d27"],["categories/ubuntu/index.html","e738832fcfa96ef1d7b004b26f8d6851"],["categories/ubuntu/ip/index.html","35c5844cb0b9b85df23d9b826cd1ccf8"],["categories/ubuntu/下载/index.html","2c99457d41b227b53f06c3d0e26f0f47"],["categories/ubuntu/命令/index.html","299ef0f7fc461493a51becec382490c2"],["categories/ubuntu/配置/index.html","c8b6c3bcc5bf91086bf61cef4055f53f"],["categories/仿真/index.html","7e2ff15747c5e66e5c0cbfddba46692e"],["categories/博客/Wordpress/index.html","59c211152306c967e1b1e6f059416bdc"],["categories/博客/hexo/index.html","e37ff6c1fdaea853121edc2667bf4070"],["categories/博客/index.html","0267538eb5ac65bd69fd296ed178f0c1"],["categories/博客/page/2/index.html","9e0dd86bd2fde08145debb6b38383bd4"],["categories/博客/typecho/index.html","4f00980aeece1e3e1e2746afe48cd157"],["categories/博客/统计/index.html","d5d8d221538257614fbfd2b4a0c7140d"],["categories/宝贝/BB/index.html","8bae76c83a50619d54e7fd34e15d6069"],["categories/宝贝/MM/index.html","94d5ebbcf0b81343851268f7245cf9cd"],["categories/宝贝/index.html","6b03120cb1528acf42b5986e62b37356"],["categories/思考/index.html","b823ac7f87c1158cf430c74597abab85"],["categories/思考/职业规划/index.html","d9e28bfebff678a4026b5e19f2e24341"],["categories/科学/OpenWRT/index.html","1efd2bb18f7268186472d42bb767f89c"],["categories/科学/index.html","7f42255bd2e6860fa64c407e5640c5b7"],["categories/科学/手机/index.html","a9730a5631174e04ab9cadd252854ed9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c940af99b125128b0516fe254dd319da"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","406b82c031e8dc9f51c8463824afe49e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","69c83576e271852dca501e0c44fd43d6"],["movies/index.html","9c81c87aaa278c2b8db09b9acba539ca"],["music/index.html","dcb6596d766cb39a695cc5b09ae74b12"],["page/2/index.html","565ec59c4cd802b57c3a929e04c6ebde"],["page/3/index.html","53896dd88afc9bb4aba83c3333b6a5df"],["page/4/index.html","64d44fc6e6022ba693bc4eec572ed145"],["page/5/index.html","4ec1fe0b72e8cdf84a480b3ddb97c23f"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","3fbb03d9a02fb2e2e32b481b68c591fe"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","8510f671f6745218f799316d84224194"],["tags/Github/index.html","2bc6eafc34fa6e4b962b04c80bc1b3c0"],["tags/Move/index.html","fab7f7d42eee3439086d16c3783d819e"],["tags/OpenWRT/index.html","168acbf33e8b9266e133bfc16b95b60d"],["tags/Plant-Simulation/index.html","1af1dde516585ced376038fc298142ae"],["tags/Wordpress/index.html","e56c0f0a6dad972f2edc8dfda44b92c0"],["tags/cad/index.html","a7bc9b21bac43dd3be5ffeca1f12a06d"],["tags/coding/index.html","661d7945ff0c9b2dbe9645ab68e76eeb"],["tags/h5ai/index.html","d913181d52b12a63926ef080e0d7013a"],["tags/hexo/index.html","beca5939bc0d8b25631d52775e40b9f7"],["tags/index.html","305b65f23d48e52b4315b1d7e299184e"],["tags/nas/index.html","5d4ca78651bbeb23de76cdd1f9382424"],["tags/tpyecho/index.html","621179c45ffd19d678e213de3348981e"],["tags/transferstation/index.html","59ffa057e3814b30c20a7e25f083304f"],["tags/typecho/index.html","68c33666066f069535ef7d1f476b92b0"],["tags/ubuntu/index.html","0274acf6b06a93ffcde14aec5aac3910"],["tags/仿真/index.html","809eeef42a82f088deb47a1058f72d98"],["tags/写给宝贝的话/index.html","c1c79f9ce7baacd035ac8adc1b21d782"],["tags/原创/index.html","86f86b3f337ff171d83b227c02c163d0"],["tags/学习/index.html","11fcfc53f0163995cfdcd54af31fc85f"],["tags/宝塔/index.html","204272c803606e03fdfade6e1af5e2a3"],["tags/生产模式/index.html","083cf29d140c7ded4cd074009e046671"],["tags/百度客户端/index.html","c46266c06834db4ae245bbb4a5472b3f"],["tags/科学/index.html","adccf53ce9e902a5356e21c332c04f52"],["tags/统计/index.html","bc0e96d6e5fe31874116e6f211b5d441"],["tags/编译/index.html","2330a856aaa9ae20db6cb643e79ae073"]];
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







