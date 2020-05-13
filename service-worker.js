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

var precacheConfig = [["about/index.html","bbe456269798015fb44d7c4feb6dca65"],["archives/2019/12/index.html","c8bf341bd0efe24fd77d38bbd096a2fe"],["archives/2019/index.html","233e57c10ee6561c3ab13b05531ba395"],["archives/2020/01/index.html","c2f293ab914aaacee95ef6cd0f284dfc"],["archives/2020/03/index.html","8d743e4fd7a7449f774cad92aa64cf3d"],["archives/2020/05/index.html","d7399e68529f5630988e5e2cd88aae7c"],["archives/2020/05/page/2/index.html","28cedf0e75ef81c9c1558a9dda96938e"],["archives/2020/index.html","493edd2cdd595ddeebdb7a0dc4f1ee3d"],["archives/2020/page/2/index.html","2d8f8dfabea9543646fcc1218e0d22c3"],["archives/2020/page/3/index.html","64e1463a6dc91c6b9a8b7c02614defa5"],["archives/index.html","41b57b17da32c942ee6226c43ac7a3d8"],["archives/page/2/index.html","33d4164120a98e58216fe7aa0c08a2c3"],["archives/page/3/index.html","385e5f3d13115672c603d16527864c3d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","66acfc37e6f68c12a6b26b35d2732631"],["categories/Code/index.html","ef3c3bb00032ee35d4c4df3ab25924fd"],["categories/Plant-Simulation/SimTalk/index.html","fdfb7f97600102b230cb14f40c7b1b00"],["categories/Plant-Simulation/index.html","619edf3a018202a76fe39f750a10f37b"],["categories/Plant-Simulation/实体/index.html","f1d2c127c9b8b61b4188e8f43a3a15e8"],["categories/Plant-Simulation/常规操作/index.html","4b9f8c51da3beb5a089521c363c0eb05"],["categories/Plant-Simulation/模型/index.html","f53f31e4ed7a12c18b48f9e82085cf5f"],["categories/Plant-Simulation/背景/index.html","324bafc68faa98c71b84214479105102"],["categories/index.html","13ccf757ad54fe0a8b70bd5e4da01871"],["categories/ubuntu/index.html","30051b8ca32a39417c33ccd34391482c"],["categories/ubuntu/ip/index.html","b64779d29df548643a81144e8b8895d9"],["categories/ubuntu/下载/index.html","755816051ca9303721a79cf65af7c8e7"],["categories/ubuntu/命令/index.html","04e253af5ec6c2ff1cc1c4ab3251bcae"],["categories/ubuntu/配置/index.html","6dda24b362e1fcec86bc19b7ceabb19a"],["categories/博客/Wordpress/index.html","20d4e3e5b5ff7b3ff299e37d608ce18e"],["categories/博客/hexo/index.html","347c771e360186ce65f23a12067b8d46"],["categories/博客/index.html","9fa2f6273429223f1dfb80a893e45fb8"],["categories/博客/统计/index.html","4b7607f3f8fa4c8a53ebd77a21122383"],["categories/宝贝/BB/index.html","9286f3dcfc8cdc3f56d883245420f2b2"],["categories/宝贝/MM/index.html","058af3f52d2a15e1d7b9b14ad69cd120"],["categories/宝贝/index.html","011d2f7d04dd722c0c141da47492c79f"],["categories/思考/index.html","6fa5037881087d62b3e6979c9afbe802"],["categories/思考/职业规划/index.html","531a862051a0f5b1bc8f77e6ad24cde8"],["categories/科学/index.html","3a4bc6270f9f5fcd55a63255f4003de0"],["categories/科学/手机/index.html","bb2378dfc4d3ddd175e7bbb07db99c75"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3df421cde10ef78dbdd92b618955285b"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","6585497935270d9cc7552505be5112e4"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ae445c7eaf3ff66753b0ed0e72f78525"],["movies/index.html","4fccf752ae80269ad7ffe67fbd81c5b6"],["music/index.html","825d1e445e85d62f18cb43bbbe1099eb"],["page/2/index.html","2f27b1da895fda45cce81caf914afedd"],["page/3/index.html","be184dfa63527c07e0e9f1494f26f590"],["posts/20191204A1.html","2c411c311cf99e2bcf32c262564a3fd5"],["posts/20200115A1.html","c6307c9db8c34b5bfebc98dbe9aa745a"],["posts/20200116A1.html","dac1b398d16d72a407bdad7f75a617d9"],["posts/20200118A1.html","7325965e1e5d1b6c13cd36a67d28e833"],["posts/20200119A1.html","009fd06e78d72e99cd7a40fb5eb7bbb0"],["posts/20200119A2.html","ad21c99d431eb5e27d066d7e6810036b"],["posts/20200123A1.html","189198a388bc99652e7eda750cea031d"],["posts/20200312A1.html","5f2045e889c18fa52844f2dfe5986936"],["posts/20200320A1.html","5e1f001b92fe3bdb9d4383c1a6b1fa5a"],["posts/20200503A1.html","95678163c27c101801ece79e46df32f4"],["posts/20200504A1.html","9f07a0c794aecd94e113f1ec0c3adf2d"],["posts/20200504A2.html","32f3644b0ed023169380119916d9d4e8"],["posts/20200504A3.html","35cc9da9b8a3e881b4e5a0fa48a8b2b1"],["posts/20200504A4.html","61b40425726239a3f4d324dfa257cb5d"],["posts/20200504A5.html","59f99b7e03db7321af14b5f9ec527554"],["posts/20200504A6.html","ac5e3e1d8e68ad384b7b0caa22d2b9e3"],["posts/20200504A7.html","fb2698ad2da1f7e9c88d184615711675"],["posts/20200504A8.html","748751028ec56a6e622e0d67b98d97c7"],["posts/20200505A1.html","426e13b15a54733fe5081694815704b9"],["posts/20200505A2.html","3c996912e2b7be066259ac756a3dc14a"],["posts/20200505A3.html","0b346bc3a72d1bb3d86808c40b9c8651"],["posts/20200507A1.html","df462ef7f3ee7b913543d86262dc6a69"],["posts/20200509A1.html","dbc5966af391d0a54a55199d2e3ac00f"],["posts/20200510A1.html","a4dfcb7539fd9ff98028d20981cc388b"],["posts/20200510A2.html","31b680f820e5395180f3cebe7828fa6b"],["posts/20200512A1.html","a93f1ae9a403392d009d8041ab0dd9f8"],["posts/20200512A2.html","49041d170b738ce8ad277d46a5424146"],["posts/20200513A1.html","36aa3e64c857a15d23add998cf2f140c"],["tags/AGV/index.html","a9b2e7e48d389a457cbb4b8e1fe65cbd"],["tags/Github/index.html","713da5c024d22dea18eb8f26c108382f"],["tags/Move/index.html","43f2a0eaceb4d72fe205f02a0c4ad13b"],["tags/Plant-Simulation/index.html","c54c15dcc4c0a962394687ad928b3181"],["tags/Wordpress/index.html","1083756d2967fb25010feb19c9bfcfe7"],["tags/cad/index.html","47a8ddfc65cf3f08aa9218071030c710"],["tags/coding/index.html","a07dee1e27d3d5e4917c1aefef1de253"],["tags/hexo/index.html","f4ef1402f27dc8830e22e168eb20607f"],["tags/index.html","9452cd4ae1ad822b7c2bc19e1f0a8756"],["tags/transferstation/index.html","33509bac3c61764fadbb98469f9dc331"],["tags/ubuntu/index.html","76a205732080d5eb3bebd65a01830859"],["tags/写给宝贝的话/index.html","c88086c614d38ccc4f27e9f86f818785"],["tags/原创/index.html","85a328196c76a01dd675b57a2e3ba091"],["tags/学习/index.html","8bf0fecb7450bffba12119cda61dcf56"],["tags/宝塔/index.html","7960926ab7163555028c610d5969bf01"],["tags/生产模式/index.html","f82e8c21c3a42dbcf6c62f217c826213"],["tags/百度客户端/index.html","77a6341598f319c3bc64415735c74c76"],["tags/科学/index.html","495bc47c6e217daa0294df214069d206"],["tags/统计/index.html","61a5183b0f54ed5de05e1376e0350217"]];
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







