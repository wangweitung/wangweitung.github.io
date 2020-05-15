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

var precacheConfig = [["about/index.html","dc6284c3aa7cb5a1d1ea5cc19a7f41bf"],["archives/2019/12/index.html","4ef53dfc0462c986303ea1bfa1908ce9"],["archives/2019/index.html","a4d0aef4aff71b8b3177fc973bcf6841"],["archives/2020/01/index.html","47a8178aa8dd4b2fa4a17b35d9443c79"],["archives/2020/02/index.html","f66bfc229f9a8d2c7a44b4a8a5bdb58d"],["archives/2020/03/index.html","08393cedec07edc5f44b74e97dfd71be"],["archives/2020/05/index.html","efbe31b17f34f92865e6ab59581ab4f2"],["archives/2020/05/page/2/index.html","a504a7f673fb55bc4faeb84361acd9c5"],["archives/2020/05/page/3/index.html","919dc122b7c29c1f43f15119b3884ce3"],["archives/2020/index.html","92cfad9234cdd6bb54b2cb763a402fe0"],["archives/2020/page/2/index.html","d01f9b83952f9bebf0c5a9a5b4513dea"],["archives/2020/page/3/index.html","ff541774e914372af9cca939d4d5a42f"],["archives/2020/page/4/index.html","c45622e396a52b04debf30e9d07edb5c"],["archives/index.html","b8c282a14b117c2670258f94984ac8c6"],["archives/page/2/index.html","5ae37a7645e42c46a48b3e300065982d"],["archives/page/3/index.html","814c7fa1f10b0babed74f38412ad3e62"],["archives/page/4/index.html","9012516368e4b918de2359c09148e611"],["archives/page/5/index.html","d39e40bf286ab8dc2bc9070f17b5bb1d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","e8a6ec68831392887e73a6c6221c64be"],["categories/Code/index.html","fda1d3c71e409538ffd64c94c5f046ab"],["categories/Plant-Simulation/SimTalk/index.html","06f9f36eba5fb6a1c35ed5fb6cda08be"],["categories/Plant-Simulation/index.html","31d4e2de113815680fe9c9650c409f43"],["categories/Plant-Simulation/实体/index.html","aa373e8ddd391808eafb3cb78eb42e3e"],["categories/Plant-Simulation/常用代码/index.html","5d32be30070f55a4a498486f79c74f50"],["categories/Plant-Simulation/常规操作/index.html","6c78873fc6ea6edff753744c98538962"],["categories/Plant-Simulation/模型/index.html","ec835b680f7f25a800e27bbc2326414d"],["categories/Plant-Simulation/背景/index.html","f3f0f8fde4b7d5b949e92934c19f50c2"],["categories/index.html","40bc0a392742f5d57904a3aa57be237d"],["categories/nas/index.html","c3129a1458d790095f3b3777442820b2"],["categories/ubuntu/index.html","e2a8b25386c984cc8bec549a2717b54e"],["categories/ubuntu/ip/index.html","544fa5a383c8db7d737a036474abdbe9"],["categories/ubuntu/下载/index.html","7c51dbcc220083afd6f08331a89ad767"],["categories/ubuntu/命令/index.html","acc525a3df8aa4576195c6a41b6bdb2d"],["categories/ubuntu/配置/index.html","d2276feb221313d98b12788dac08b12b"],["categories/仿真/index.html","5c1bef7bacc0915c674b68c757a5407f"],["categories/博客/Wordpress/index.html","43332c90ae1c37852fb0e2795b862b66"],["categories/博客/hexo/index.html","09ad8b47604d8960ffe2af8e178e0f64"],["categories/博客/index.html","ee743c23d768436bcf7a6a0f0253993c"],["categories/博客/page/2/index.html","fd3ba85ee4367e817a76101b0e148bed"],["categories/博客/typecho/index.html","2723f409cb4faf753602cd414e042c06"],["categories/博客/统计/index.html","736b8301f6078b6902eee7a4c030d00f"],["categories/宝贝/BB/index.html","a9ae7e9f5aef3ec24e84d24ba33024f6"],["categories/宝贝/MM/index.html","d16165c12f6bc2be6755c8d3d218108e"],["categories/宝贝/index.html","61c2a4403089eb438174d4f6fe9aa827"],["categories/思考/index.html","f08f51ed95c32d97e1688112637872ec"],["categories/思考/职业规划/index.html","328a4c77d4a7fab940c213ea3cd7b1de"],["categories/科学/OpenWRT/index.html","24c74d3a9cc7886661aaeaae13ae280f"],["categories/科学/index.html","7f0863aa255046538d21d7bc69c5c079"],["categories/科学/手机/index.html","44cf30209c85f93b32fa3f4a0c587bb9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","aca8cb5a161198d2c06d40460b9772e6"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","87911eb866e20de898a4c9ffb1883a1f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","7cc47340bf7e95b55499cbc59412e3d2"],["movies/index.html","2fdcf72db71a7b429ee8ddcd8b8706a8"],["music/index.html","11eef0b406ff8a56e2e85dad9cace682"],["page/2/index.html","3e269e30a468518254e7f0fc1769223c"],["page/3/index.html","b1a34948b90b327b08f44985e00e050e"],["page/4/index.html","e4f1d36f1c4e777704cf0714bd7d61a6"],["page/5/index.html","025ce3bf7f3c3f7665f8699024a1bc46"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","d6103da21c2dabb47cae69c5fe9d5152"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","3536d24e0c24b24673c450f598c9c282"],["tags/Github/index.html","1e4dfcbd91a9d980521f6fa01884601b"],["tags/Move/index.html","623bc3e9655996e10011a4c7e7796571"],["tags/OpenWRT/index.html","a57587ca02780aef92f206e6deed0c11"],["tags/Plant-Simulation/index.html","865fc64c1025466eff560d8f3eb8210c"],["tags/Wordpress/index.html","ff92ed83ca42f2d5c0b31a88031be714"],["tags/cad/index.html","f6121f0599e1e86b594325b6340e6e25"],["tags/coding/index.html","1c4b52c19826cd86f7355e0e221eaaf6"],["tags/h5ai/index.html","40ae1019eefcc19f94c4aca71887c141"],["tags/hexo/index.html","91041d3b83bb4b784ade197d61a8aac1"],["tags/index.html","f4802f0b10db1e3016e592ea473051c3"],["tags/nas/index.html","0c6cc2b45e46b54c71d120167d622610"],["tags/tpyecho/index.html","2b9464a35d7ba3a3baa184956fe60c3f"],["tags/transferstation/index.html","69817dc2a2ac6f503ab2d55dc659226f"],["tags/typecho/index.html","988d44a201989ccbe8f5ebd2c0e5c4f8"],["tags/ubuntu/index.html","de9a4f9a9c65832166cd94908cc340d9"],["tags/仿真/index.html","5e521ee2624363943efcc4b7068b9bd0"],["tags/写给宝贝的话/index.html","ca09133bb72d45d9d73c03483d0dc08a"],["tags/原创/index.html","d669566425a79e16d6c86c40ae75add5"],["tags/学习/index.html","285c23960bda5c86653be1e6dd0a4149"],["tags/宝塔/index.html","0c4e5cd1133fba93718a654e3c2975f6"],["tags/生产模式/index.html","73164fdef59123869a602e08477633f0"],["tags/百度客户端/index.html","b67d6e093b6493d53a82f9a139fcbdad"],["tags/科学/index.html","642174604ce19091fd62eb19b8d1115d"],["tags/统计/index.html","d1f9aa77037a2f11468c93dbcfcdab66"],["tags/编译/index.html","d0776c50ed140518608480b8243c2db4"]];
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







