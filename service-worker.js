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

var precacheConfig = [["about/index.html","7c54a4c9c968027133d4cfd4257eaecf"],["archives/2019/12/index.html","ede89ce6d04b8d0c05fd05eb1c79da04"],["archives/2019/index.html","e16bae056aacc26eae36dbfc2810db35"],["archives/2020/01/index.html","c1787e49e1a85fe26672bc77030deb3c"],["archives/2020/02/index.html","166c3cc83eb3ca0b1a37263126da8577"],["archives/2020/03/index.html","d288f038358302718c79d67f42e61f90"],["archives/2020/05/index.html","5e8091e5fd49fddbf45c05149e185ad7"],["archives/2020/05/page/2/index.html","19c758226c49e5abadd5fa175ee94cb2"],["archives/2020/05/page/3/index.html","9aa355a289f35ff50826c9d80e5c36c9"],["archives/2020/index.html","bd16d9f1d861dc7cc95efb48438f7a1b"],["archives/2020/page/2/index.html","c68d1aff380ec450032a91f478cc5aa5"],["archives/2020/page/3/index.html","06e1954bee7950099904bc3b1512604b"],["archives/2020/page/4/index.html","ef6dd134e8d3f5bc5f5fe60e37c0fd31"],["archives/index.html","3891c5a869a1da2c1d2657d0e7f6f62d"],["archives/page/2/index.html","a4400bbe60b136ae93901ee8acf613ed"],["archives/page/3/index.html","f7ff5f475f420558bb97e7158a58924c"],["archives/page/4/index.html","89604ecc4da25748244a337697351f14"],["archives/page/5/index.html","c98087a8495ce7740f729426cbf48bca"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","97fb9ecd1ce96dc377c7ac2434e22f78"],["categories/Code/index.html","ece44dfb12e6b42bf47644703a890409"],["categories/Plant-Simulation/SimTalk/index.html","4974d019f3ef8e6d14669539828a435f"],["categories/Plant-Simulation/index.html","7ec50c716b6be179b63c4f4bfd668149"],["categories/Plant-Simulation/实体/index.html","3f67edac770b65728423b0b00a13a752"],["categories/Plant-Simulation/常用代码/index.html","06f190be345d94c46a49350a2399bcba"],["categories/Plant-Simulation/常规操作/index.html","529d1fbc5e13765925b9629c06472580"],["categories/Plant-Simulation/模型/index.html","788fa1ee2747a5ae06df19f0f876db0a"],["categories/Plant-Simulation/背景/index.html","21b31922da921ea4cea4e501cc8d7c05"],["categories/index.html","06ece81b22a85a660bcb7cda812ff425"],["categories/nas/index.html","e9c48649bebc2d69e40b309027ee052d"],["categories/ubuntu/index.html","9d672b893a7f21fac7a9b95b8c2afce8"],["categories/ubuntu/ip/index.html","a21d211649df1f73d6068ad64783a96c"],["categories/ubuntu/下载/index.html","6e79eb90b9e3680cc4e9cfdad435c0f9"],["categories/ubuntu/命令/index.html","3bebb6f0446eda042cf2f1f2d02a2af9"],["categories/ubuntu/配置/index.html","b22f8ece455c195995acdacc8c6207b3"],["categories/仿真/index.html","7a2e6e8e5568dbca1f198b547adb0e98"],["categories/博客/Wordpress/index.html","7fc8020824d67207a27c2d992e8af3da"],["categories/博客/hexo/index.html","502273a5c385bd1734ae21817420dedc"],["categories/博客/index.html","7969f7d00882f1968589c466e188563c"],["categories/博客/page/2/index.html","f041f8852d6e03ed1a8ea51bde458881"],["categories/博客/typecho/index.html","2ce9e28a20e9b0b05c2077c7609d5d2d"],["categories/博客/统计/index.html","75611e9ddf7b105993c17b166c07ea2b"],["categories/宝贝/BB/index.html","d9d332942fdbcc9cf9d47dfe3a211694"],["categories/宝贝/MM/index.html","a4e398b104a7bbf4fa6b984489415573"],["categories/宝贝/index.html","7faf8573be2041baf89787a861163c0d"],["categories/思考/index.html","34ca677998b9afc6b81879737da9927b"],["categories/思考/职业规划/index.html","67bff50fb5febd6e833628733bc03267"],["categories/科学/OpenWRT/index.html","ad3685eeeb82992aaae1b96dc8bad6f0"],["categories/科学/index.html","9005215746a55ea217262e88a7b9bb91"],["categories/科学/手机/index.html","8f083ce9360275020839d725d6d40d5c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5df0741d7ec32a8a19384eba028f621e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c90dbb0e789f4f7fd0dbc7c8f545a987"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","57c3d8aab1bf0b5c40fb3e91cc56f847"],["movies/index.html","18f4861cfb95d72fd0052a33cd50344c"],["music/index.html","a65bb7594145468d58b6cc32f1348361"],["page/2/index.html","b2bb002d4b062c7d6b41408d62033135"],["page/3/index.html","2a06c8fb08bc7a9a7c62adafa9d5fb68"],["page/4/index.html","b7922baffffc1a0bfec96e59ca82a9c7"],["page/5/index.html","20aaff53e51e3d912410cee1678d70db"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","0e7f1685faa132a9e364f8608155f038"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","1b08f49b4af69378f67f63de517fb245"],["tags/Github/index.html","772c2a2d9c039ad052900604da32a24d"],["tags/Move/index.html","eab59e81c168f89e3808aa64b0cdd8bb"],["tags/OpenWRT/index.html","a57d74dc47a8adabb9a943393d3c7b3f"],["tags/Plant-Simulation/index.html","8e072bf8f93af996438ed8d2eee7221e"],["tags/Wordpress/index.html","b1cc98f4988f30f6501e2547fb255fef"],["tags/cad/index.html","f84bff2cc91d30479bb81b8cb44d13e7"],["tags/coding/index.html","802efdfeb36bcd790ff351cebbda2865"],["tags/h5ai/index.html","b1fc917e5bca34e30822054e25be5323"],["tags/hexo/index.html","3b29b7e5c3063fc4486f5d3fd0a0411e"],["tags/index.html","b4a82888b18cc4ee6e29b0d87f4e552f"],["tags/nas/index.html","fbc287e5e035a62c6d790673c23421a1"],["tags/tpyecho/index.html","a73a402c8814d173ce4dbaaadca768e3"],["tags/transferstation/index.html","594b46c85cbe357faca13319098de28d"],["tags/typecho/index.html","4277b5b7430401c153070897d3f05823"],["tags/ubuntu/index.html","6fa3120c6a6b3d15301ec443c4812ff6"],["tags/仿真/index.html","1f93e8f2be0a3148999c26fecd8c40d3"],["tags/写给宝贝的话/index.html","3a0377d145d080aaee499cfc560bf683"],["tags/原创/index.html","f6fe986ce2729c851c2303cb33be29d1"],["tags/学习/index.html","c76b42e62390dd6fc91f85496dcc5c7b"],["tags/宝塔/index.html","0931f1794b07f2af09a3b0aaaab5c958"],["tags/生产模式/index.html","170107e42013340cafe69c7455633fa4"],["tags/百度客户端/index.html","5e530ce6482259c847fe87f0e50beb56"],["tags/科学/index.html","1ab684b246e022e54c8476e54bd9530d"],["tags/统计/index.html","8ababea3e7f47e7d11eb7cd33de640f2"],["tags/编译/index.html","f911c7c796662cc583d228e1d813071c"]];
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







