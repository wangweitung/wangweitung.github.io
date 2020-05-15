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

var precacheConfig = [["about/index.html","cdc7f9426918aaccaeb3c50fa3bfe51f"],["archives/2019/12/index.html","83cc5b76f38323ab180592d9e0d8e847"],["archives/2019/index.html","f091272de7dbbc35bebd1bc8daf0b655"],["archives/2020/01/index.html","cbbdd0f931d81e6d7d2a17688228f8e2"],["archives/2020/02/index.html","95afac87533ee814f7b8c3e3752ed8fc"],["archives/2020/03/index.html","671793934f351f35b343e82862d5b1f5"],["archives/2020/05/index.html","547edab41f0ebc165c1da7511b53931b"],["archives/2020/05/page/2/index.html","b15827ac3a1bda46727306665fb2fba8"],["archives/2020/05/page/3/index.html","032fa4ec22496d3cae867ea5b6a3f255"],["archives/2020/index.html","ee3c0983f503077237e30813ae780aa2"],["archives/2020/page/2/index.html","07b94256a348a0e1d4fc43ffc5e5f8c2"],["archives/2020/page/3/index.html","79584dd7cce19be6d55a3536e60f2917"],["archives/2020/page/4/index.html","4d1f3d1c8769ead03f961564117e34cc"],["archives/index.html","ec45aec0427e71acabc32c32a806a194"],["archives/page/2/index.html","7185908a7286f9e06edd5b74c8cc9c5b"],["archives/page/3/index.html","c4ad653ce310e63e89f92d358a6c7f2c"],["archives/page/4/index.html","952324afeac06e8a2599900b1a5fb767"],["archives/page/5/index.html","446ce76108cebf8a39d932633c6bf0fc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","364b5a4ee5db8899c8663b1572b130a7"],["categories/Code/index.html","114ba5e6828423db5444c42ff0bdec16"],["categories/Plant-Simulation/SimTalk/index.html","09a055e1c5e73dc37ffa54df3c2eb9a8"],["categories/Plant-Simulation/index.html","98a0c113a48d63ba2fe4783d450bec2d"],["categories/Plant-Simulation/实体/index.html","85b7b928ac0bcc55e0c4b26529fc5b6c"],["categories/Plant-Simulation/常用代码/index.html","bf773b5daad4a64b7fa615f2d3ce3b27"],["categories/Plant-Simulation/常规操作/index.html","81b606599d6fca9f72a2772f8fdacfdf"],["categories/Plant-Simulation/模型/index.html","79ba4e85d601f79c9da82edd5dfbfc73"],["categories/Plant-Simulation/背景/index.html","f01e634720dac78428ae492c8b77d6b6"],["categories/index.html","e4e831a951bdb89f2ef8b1b5f8ae39f2"],["categories/nas/index.html","00728fe359ccc2b88fb6e161028d325e"],["categories/ubuntu/index.html","a272633b20be6eeaa9b534a54e2f8d91"],["categories/ubuntu/ip/index.html","7421adb2b02cd521ce8bcc76ce720969"],["categories/ubuntu/下载/index.html","6689d84ed322df7b17d0259a1ad102b2"],["categories/ubuntu/命令/index.html","7e0a8ef52fea8065a6c9194a9ec1cf14"],["categories/ubuntu/配置/index.html","ec20bc150848b32793dc8fc33d08f620"],["categories/仿真/index.html","6bb86516b33a8640cd87aec701e522bd"],["categories/博客/Wordpress/index.html","6c80af00a65ff168c17016bd1fe81e4a"],["categories/博客/hexo/index.html","6b2af4f377119f076eee5ffd1695b25e"],["categories/博客/index.html","81322fafded8d3f4674dc99e1f631498"],["categories/博客/page/2/index.html","11fc421458b0ee83f62c2abc2c6428a0"],["categories/博客/typecho/index.html","19957b8b8f0c91f348e5085b7b6c119a"],["categories/博客/统计/index.html","f50c8ee417e1a860efa2ac5787f0740e"],["categories/宝贝/BB/index.html","ebce7ea4af65fa83f099d17e58ac37c9"],["categories/宝贝/MM/index.html","faef1ea1fa478d797aa95c05de11d354"],["categories/宝贝/index.html","2727de865c091616a44ff9200f41c3a4"],["categories/思考/index.html","8bcfb8a68bb1bb6296612d65bdb20b65"],["categories/思考/职业规划/index.html","978536805731ce117408e3ce904eb8d1"],["categories/科学/OpenWRT/index.html","7246616c2feb00a07321becd8e2b9d39"],["categories/科学/index.html","265b56b2dfadaa7e7c971238a0972aaa"],["categories/科学/手机/index.html","3b16bf9efc062a949b5b7ff38adebf61"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c940af99b125128b0516fe254dd319da"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","bda3bb200f45f8e38fdf1acfcf57114e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","69c83576e271852dca501e0c44fd43d6"],["movies/index.html","9c81c87aaa278c2b8db09b9acba539ca"],["music/index.html","dcb6596d766cb39a695cc5b09ae74b12"],["page/2/index.html","5fd521169add2da965087a13aea7d18a"],["page/3/index.html","8b27d53f7442766225e2482e923d56ee"],["page/4/index.html","34a8e5f31d351c0beb3e1f13d201c271"],["page/5/index.html","c90645283d599f60177eb1124b4dbe0c"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","488162c8807a672b7f9ceb0465e8ec78"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","0e5a1bfb27f61055b8dd8ef77bde449b"],["tags/Github/index.html","f52c3ff019fbb10bd739e239f74b9077"],["tags/Move/index.html","48f3ef4a4d4eaaef8a6095845756d36d"],["tags/OpenWRT/index.html","025eeb8e9e775961e47aa6613db2a510"],["tags/Plant-Simulation/index.html","5bb0f1df17790b5afad97cf314398d59"],["tags/Wordpress/index.html","fd9828a85130a819c5005c5b97d5c246"],["tags/cad/index.html","ac42ea2bb4913f95ff4ed95cff197f26"],["tags/coding/index.html","759744254070fa0a1bbad1693d94775b"],["tags/h5ai/index.html","ec9373a09f16f754a0dd10bc3574d54b"],["tags/hexo/index.html","e4a572378dfe3af05fadac6974516182"],["tags/index.html","8f43b90fbedb505fe7de6192a2e5d277"],["tags/nas/index.html","aea5aacb8d92c00080dc17bec6d7aa42"],["tags/tpyecho/index.html","51f973349c16df8e8e2b8934f52646d0"],["tags/transferstation/index.html","5fd1acc1719d2c101d8c3941763bbc1b"],["tags/typecho/index.html","d5ac50c0a86d24bc0f7e10748480f57a"],["tags/ubuntu/index.html","ea5af256bf5f1a077c596eed3f48557c"],["tags/仿真/index.html","a9ffe01de969fc6474442254b0e470bf"],["tags/写给宝贝的话/index.html","f3d2306de0d0b32a3eceb91e51d572f2"],["tags/原创/index.html","bbeea0e56c7468f4dc09af6caf3e4060"],["tags/学习/index.html","a08586f36bf7db5f76a895f0478b78aa"],["tags/宝塔/index.html","55ef3caee9a556942eaa865b4d15bd6b"],["tags/生产模式/index.html","5fb915a624de1587c3d7d5434d4b7d6c"],["tags/百度客户端/index.html","51caf315f8a765731728445c723acf1c"],["tags/科学/index.html","d17fe1e95f47b244bc93a5993fc3f159"],["tags/统计/index.html","6e5e622e2dd116aaec829badde2b02e0"],["tags/编译/index.html","de42bad305b9be3fe3e3a637eedd4282"]];
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







