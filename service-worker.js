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

var precacheConfig = [["about/index.html","7e3709682e3ed41d0e2a9701c8510975"],["archives/2020/01/index.html","f749a8ec67f93bb387f6ba2abe161e87"],["archives/2020/03/index.html","8ca11aab30b624f6ec1004b22eb622c5"],["archives/2020/05/index.html","455168bfccc4b6f3e7f83cd9e8679e0b"],["archives/2020/05/page/2/index.html","7d34552a93d05565e343f67be3e11f32"],["archives/2020/index.html","1eb39f06f5bc42cef55b7d656129c598"],["archives/2020/page/2/index.html","48bc089a0372ff2c567974f38d7256ce"],["archives/2020/page/3/index.html","ac6bf93f4d5da7926594c97371d7c702"],["archives/index.html","49212657665949d9ca37ccb124f98d9e"],["archives/page/2/index.html","c67275a1eaa0b2ea8028fbb15869512a"],["archives/page/3/index.html","10aec18d26c43baf5136a4e0a7ff4a35"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","258b940b21fb70946e7a161034220317"],["categories/Code/index.html","1dfa0283bc19e01d55e7fdb30db89c3b"],["categories/Plant-Simulation/SimTalk/index.html","3b5eee97df72fed6060d71b5f29bf66f"],["categories/Plant-Simulation/index.html","528d1a90a3a270798cf419b5b2ee7afc"],["categories/Plant-Simulation/实体/index.html","f8f2053aa79c0d3185432cf2192bebfb"],["categories/Plant-Simulation/常规操作/index.html","2f621a1684b88debad52ebc1c2a6c0c3"],["categories/Plant-Simulation/模型/index.html","5c730c91983f755d291bd06193750f40"],["categories/Plant-Simulation/背景/index.html","5e5e05b0fb9b619b4db714d173239202"],["categories/coding/index.html","d104c0ab74e884baf4042e88ee429e73"],["categories/index.html","7099f4dc9269f49d8b81f73d3fdffc86"],["categories/ubuntu/index.html","2e7e4807072473508ff57f4cccd14258"],["categories/ubuntu/ip/index.html","36114c627f60b953ce795c8c8cb19ce7"],["categories/ubuntu/下载/index.html","f824ec2821873c7c7e0d1c6f5c9fdab2"],["categories/ubuntu/命令/index.html","8e978151e1a17208840e319052dda778"],["categories/ubuntu/配置/index.html","793b7720f178bbed5ff66a8e0d2b5e99"],["categories/博客/Wordpress/index.html","e31c2f19a30b62126d75075aed626003"],["categories/博客/hexo/index.html","d9127f54d3be2178c36a68b4a9ddbaa6"],["categories/博客/index.html","ee2635ab64786fb0d80fb384130ac96f"],["categories/博客/统计/index.html","adc50b1091fa2f997ab1123783eed3c7"],["categories/宝贝/BB/index.html","548e1ef0d8e1e05a16e34e92c05fb56e"],["categories/宝贝/MM/index.html","83db4a0a901d11ba736586c6c9771300"],["categories/宝贝/index.html","877a59ab056a4e2e939135c9c2bdefb2"],["categories/思考/index.html","a844ef30053cd95e252fdb0e7988f95f"],["categories/思考/职业规划/index.html","bec645a0e1173b641d356defc17085b0"],["categories/科学/index.html","a0177e79c8ee74906bcf6844d7d546bf"],["categories/科学/手机/index.html","cb5720fb09677890e5d18d8c28684bd2"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8a8b08028d6bd1b4ab4248b268daeeab"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","d8df4d70623dbfe74fe1bb7f807b70d4"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","bbf2111ee77bcda83c9812943249d2e8"],["movies/index.html","fc72c71434b0f8aa7126e53f651fb1e5"],["music/index.html","3d36134e4b3113327f9230f49d97a6cf"],["page/2/index.html","a33a77bc696c700cc1f861a5a5cd75d6"],["page/3/index.html","7e531d80320706f5181839a3f8f1349c"],["posts/20200115A1.html","1b2a4d8915fd0f9c2856af7d42b7a565"],["posts/20200116A1.html","3541799b36f8f9841ec05f05666f6bd5"],["posts/20200118A1.html","89c84c83181b0abac41e481ff51c5d97"],["posts/20200119A1.html","f53e345c2ab2a362605c52bd6a602b48"],["posts/20200123A1.html","48a38bcfc4fd031c5492100c86fdfd7b"],["posts/20200312A1.html","754d826d1aec8bfeecc12024479cf351"],["posts/20200320A1.html","4f2ef6f661dd5b9e62843c9704c00177"],["posts/20200503A1.html","13909826715b665808b9c92d52c4bea7"],["posts/20200504A1.html","37a6150bc426de560116d6883f69d625"],["posts/20200504A2.html","9f0a069759cd4f1c31d2b80429b9e5d5"],["posts/20200504A3.html","9236e1afc8b32c3c32b145e160decfe7"],["posts/20200504A4.html","daae7812516f237832f33f145acc8123"],["posts/20200504A5.html","6145bff1263ebaa3a780395888cced82"],["posts/20200504A6.html","74d5e22b866eadb4e7113aa137a987de"],["posts/20200504A7.html","d4855fa324f59ba1a43340e67fa9fc45"],["posts/20200504A8.html","2a1a995097be1469e871c05659e95f79"],["posts/20200505A1.html","6eec6e63fb2e9620d492d516cc609e24"],["posts/20200505A2.html","0e1bab4890f239e195e9296a957d416d"],["posts/20200505A3.html","866f4906fd409dacd926710a8125e09c"],["posts/20200507A1.html","5e5c47a9924d4ddc220b474f1ceb73dc"],["posts/20200509A1.html","77c0ac760e62d12fc9ce1ec6b6f59ce9"],["posts/20200510A1.html","ef4e3e552ed83d09bfa45fb4f1da511d"],["posts/20200510A2.html","9cc24411876499077b0fef8b8c20ddd3"],["posts/20200512A1.html","9c51289763de146e6af49b096a253f18"],["posts/20200512A2.html","fe3c25317c7b3de21635c5787d9e587a"],["posts/20200513A1.html","a95233d5eefc01d34e5e5804f6308f2f"],["tags/AGV/index.html","5a14f8f67f1613ad91b1f699587b200d"],["tags/Github/index.html","888cecb84e6a3d17aa44dea29ab81047"],["tags/Move/index.html","c6bc9e6e3451a55dccbdeaaabcc85fdd"],["tags/Plant-Simulation/index.html","6540a360cdaa909e79473b8c09c25c14"],["tags/Wordpress/index.html","6ae873e1c0e1c0da2c9023f44c38d5c3"],["tags/cad/index.html","15d65c03e19108829461d683e341183a"],["tags/coding/index.html","2be1e31f05e128e158042902e0d46f15"],["tags/hexo/index.html","22e76fe2cdf19128f5bab36da9d2d07c"],["tags/index.html","4e87cc2613a0925a24d66d95f4e1f176"],["tags/transferstation/index.html","a61a816a2b210a1c5fcb34fa40aa51cd"],["tags/ubuntu/index.html","e0b8b83b59ad2e9b1ecf12ada69b6ace"],["tags/写给宝贝的话/index.html","8a4d9d8edc5e91d6463d00c5001dcf56"],["tags/原创/index.html","262719a6d0518ed1cecf0d8710e6606a"],["tags/学习/index.html","a9ba0757a899b60de91cdede37aa7058"],["tags/宝塔/index.html","e964128ad43fe550c0ee9467578c45f7"],["tags/生产模式/index.html","7f535e8b901909b8fcc4aec7ae77aace"],["tags/百度客户端/index.html","1fe2b6de4337d350f4fc2a4a98370399"],["tags/科学/index.html","6907470ad395e5b23fcf62a5a6e9ee81"],["tags/统计/index.html","3f90152d3fc7e5f4c44154a0bc8fb73e"]];
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







