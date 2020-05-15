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

var precacheConfig = [["about/index.html","cdc7f9426918aaccaeb3c50fa3bfe51f"],["archives/2019/12/index.html","b5600648e6132aa22f07b962ca9c49a3"],["archives/2019/index.html","b27f32db746334d9c7634af3d12f42eb"],["archives/2020/01/index.html","c24fb03f1be20ef618f98d22f81aa909"],["archives/2020/02/index.html","08a7c4aff99ae3a141f58774cca5d15b"],["archives/2020/03/index.html","f594499178a4b4d1fe6137dd5fb24b52"],["archives/2020/05/index.html","dc40aa9e2d4bad036dfce8df57861843"],["archives/2020/05/page/2/index.html","256612fe0ef93ec72f64a56c2514d398"],["archives/2020/05/page/3/index.html","dc022ead701f56376014c306a5662107"],["archives/2020/index.html","dd03cbd57084ca53a596a51f7ea3cdf8"],["archives/2020/page/2/index.html","22d6e4e1574f2089dd559ef546d52c01"],["archives/2020/page/3/index.html","b282457b65ba6c30e0d5dcf5815ec2b3"],["archives/2020/page/4/index.html","06802063d87558c40fd2a114dcc40c07"],["archives/index.html","270efdad55a4a12746764e095f1060fa"],["archives/page/2/index.html","f07bfbed174d2af5f20617c49c28031a"],["archives/page/3/index.html","363d1c0ea0a76a929961d07b7f8be724"],["archives/page/4/index.html","ab856015b44de4f1eaeb76e0a5ac115e"],["archives/page/5/index.html","bbde1238b061789f701c038f4829969b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","ff8faa0548d86fd202a0cad8b9d861c2"],["categories/Code/index.html","01acdca7ddba14bf7b3e81291f1b1b98"],["categories/Plant-Simulation/SimTalk/index.html","c3f6b8fbad27f0c83505f48251b09904"],["categories/Plant-Simulation/index.html","22f3aa6b24884adc9091d4a1c4f010cb"],["categories/Plant-Simulation/实体/index.html","11e15c49ebd15d0dbc0e0ba1517500ce"],["categories/Plant-Simulation/常用代码/index.html","848e92124441f984d8506df16de7a264"],["categories/Plant-Simulation/常规操作/index.html","f9d3b50ed772a383475eabbcb941c569"],["categories/Plant-Simulation/模型/index.html","09a8a21da6a7a6b39d1824ed8ef6d56b"],["categories/Plant-Simulation/背景/index.html","401fad4599ef2f49c2aa84b2a2ba4e5b"],["categories/index.html","e4e831a951bdb89f2ef8b1b5f8ae39f2"],["categories/nas/index.html","34ed7dc915e6b5c5f27ef0a8486f053c"],["categories/ubuntu/index.html","090772b3aa7fb5d0eb184500ba3958b5"],["categories/ubuntu/ip/index.html","dab22ac23ff0c477199d60ca2c6de654"],["categories/ubuntu/下载/index.html","423d9f3f937cea3f412328037da1f36b"],["categories/ubuntu/命令/index.html","01a852418d21fc4e532ee33034ce6730"],["categories/ubuntu/配置/index.html","7a26b3a157885afb4b90c05a222d9598"],["categories/仿真/index.html","3578920ae826e9c9c35fc83de7f294c2"],["categories/博客/Wordpress/index.html","bcb67a589ddbcdc829952a1e414991ee"],["categories/博客/hexo/index.html","3771beb28a39ede8718d187157603979"],["categories/博客/index.html","3bb07e617db2056579ab4a3f0fb15887"],["categories/博客/page/2/index.html","4679338b78af3e9c3b8a3176a9311a63"],["categories/博客/typecho/index.html","1c6853a08da468fff4d164777e9700af"],["categories/博客/统计/index.html","682bd49a0b875b12a9b891292776ebc7"],["categories/宝贝/BB/index.html","1b776a62f36016c53de63f765df82c02"],["categories/宝贝/MM/index.html","c81eedc17c46079c292cace39e1cc231"],["categories/宝贝/index.html","6aaa7cff1f15ee52ecc418d6e9209055"],["categories/思考/index.html","32f3f4549785496848d94974ac74a53a"],["categories/思考/职业规划/index.html","35ad7cb783668f3ca089fb611597affe"],["categories/科学/OpenWRT/index.html","c97b31cae0eefb725106eb363e9f356a"],["categories/科学/index.html","4c756c8c695bd489a773e1dbe0585d7e"],["categories/科学/手机/index.html","c981f01bdaf78cf1bbc090578c848da9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c940af99b125128b0516fe254dd319da"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","04924c77ab8dd7713b6c875cf74bdd51"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","69c83576e271852dca501e0c44fd43d6"],["movies/index.html","9c81c87aaa278c2b8db09b9acba539ca"],["music/index.html","dcb6596d766cb39a695cc5b09ae74b12"],["page/2/index.html","6b9eea02dc5ed6a68a982b2622182656"],["page/3/index.html","56a57443f0bd0365e4ed5b392ccbf792"],["page/4/index.html","f73b9b120bdb932f124af817949ec798"],["page/5/index.html","41f9dfc3a827dc2e3565767cede27669"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","180b4758ebbfddefb621fb0940db4975"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","208c19e572c68863d33738be13b97dc8"],["tags/Github/index.html","1f93e6168b132fc6b9c89bbcfcd35cb1"],["tags/Move/index.html","3d403d8d903440029aa33faf58491361"],["tags/OpenWRT/index.html","2b5149a37e8c983d0cfacf707e42d9db"],["tags/Plant-Simulation/index.html","e66358756ab70bc2465b047814c105ff"],["tags/Wordpress/index.html","aa2c6fdc39548d38e41fefe5226d497c"],["tags/cad/index.html","d90cbe8fc9de9bd21ef1f61012b8ded3"],["tags/coding/index.html","fd6439b0a18881558a4be56bc33d7b1b"],["tags/h5ai/index.html","93dafb6b6176ca1e2dfc2e049c4c0a71"],["tags/hexo/index.html","feb050d0661467c5d8d7df0aa2b8e3dc"],["tags/index.html","f160faa42c2fe877d5301043d1e1910b"],["tags/nas/index.html","121e205c32f435d977e4d5798eded8ba"],["tags/tpyecho/index.html","7ee8c9144d37c8e673a6436c59ee7e89"],["tags/transferstation/index.html","edaa3823b0723070c652658963536bc8"],["tags/typecho/index.html","28a59717ad06433dcc857f6321771348"],["tags/ubuntu/index.html","0c5ccb141eb0aebcd6acfc57f212d659"],["tags/仿真/index.html","9452d2240ebebf7b0d0cd07762ad152a"],["tags/写给宝贝的话/index.html","6585781712237f5bb0ae893fb1fdbb65"],["tags/原创/index.html","8007abb1a8d4cf0f5feb08a77adc786d"],["tags/学习/index.html","5320af3d87a47fad4e6b195da68d60fb"],["tags/宝塔/index.html","bbf5afb013e5f531a2919012a9c50e17"],["tags/生产模式/index.html","40d887abbfd02b77343091b9277559fe"],["tags/百度客户端/index.html","3bcedc7d359569b73f01832ffe5f1eea"],["tags/科学/index.html","cc5318d5562c09b4326e373f34047102"],["tags/统计/index.html","7677b38daf782497d343a9cec894c32a"],["tags/编译/index.html","bd067bdd4570e4a68ef3a8ceaead8c99"]];
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







