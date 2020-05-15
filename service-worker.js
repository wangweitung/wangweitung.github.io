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

var precacheConfig = [["about/index.html","cdc7f9426918aaccaeb3c50fa3bfe51f"],["archives/2019/12/index.html","a1795bd1734215cfd529a84ec7aec15e"],["archives/2019/index.html","8abb04e9b8ec5deed945afe0fe2878c8"],["archives/2020/01/index.html","5c27195ded94bfd885131bd28f79e506"],["archives/2020/02/index.html","3bc7295dc5729484225600351038c7c7"],["archives/2020/03/index.html","b377c918762d53b9ee2fa7d2f26b964b"],["archives/2020/05/index.html","51e52ca75501c8e1ca2e72d62fb953b2"],["archives/2020/05/page/2/index.html","1030a83943373e449c4f7f7fd5f553cd"],["archives/2020/05/page/3/index.html","61836dc14ce564cf2df65d6b3a4e77be"],["archives/2020/index.html","f83ac3e457492b9bcb66778d22673b30"],["archives/2020/page/2/index.html","50933850294b7ac9e1e8a7d29115fd90"],["archives/2020/page/3/index.html","c40e24a88e4891c580d43900fd75b336"],["archives/2020/page/4/index.html","1006b068b2e184c4ac2c3741a24bbdc5"],["archives/index.html","82625ae9bf81ba63dc09d41d0ff60f67"],["archives/page/2/index.html","f43c628948cfc7d9786f6cc7794b465b"],["archives/page/3/index.html","918baeeaaa0cf1bcf1c90a616ccd4873"],["archives/page/4/index.html","ac52410e07466fefda3ac0091e1eb838"],["archives/page/5/index.html","2ba27751fbe0263ba459b6cdcf5a595b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","24879df88955808f6e181b5469db0319"],["categories/Code/index.html","0c2cc2701bac2e893f4ca28cd077be5b"],["categories/Plant-Simulation/SimTalk/index.html","e6210487b876cdc067bbe754b6b3ec87"],["categories/Plant-Simulation/index.html","9c1b73275f19803fbbfc02f27a95b5ac"],["categories/Plant-Simulation/实体/index.html","f5d72859037777fd99c1607a87be27ba"],["categories/Plant-Simulation/常用代码/index.html","0eb5d98f13464e515ac3d1c975acbcea"],["categories/Plant-Simulation/常规操作/index.html","372b037fff04c4b7719596bb637591a4"],["categories/Plant-Simulation/模型/index.html","082367ba406db5733727f94fb364bbe9"],["categories/Plant-Simulation/背景/index.html","d612e57fc6d5cbc7d0ee25c0a0a5ef53"],["categories/index.html","e4e831a951bdb89f2ef8b1b5f8ae39f2"],["categories/nas/index.html","63d3f5eefefd2343571e76548ff3c73d"],["categories/ubuntu/index.html","e9fe8d865d08acebb54a1c6bd100e49b"],["categories/ubuntu/ip/index.html","be6f6215e654d9a92a1694a95b24a164"],["categories/ubuntu/下载/index.html","9b4e3f6d88a5572a650e3b0612283e58"],["categories/ubuntu/命令/index.html","6f063e223bb2bca1bb8672ebe95d0f53"],["categories/ubuntu/配置/index.html","5c76467778709ca9e7ddef435927d177"],["categories/仿真/index.html","ab581c1c79cbc921902e9cc2bebbcf02"],["categories/博客/Wordpress/index.html","1790a9b13883770aca21f4dc3ec651b2"],["categories/博客/hexo/index.html","b5cb087c8dfbf76c1f8fe2ca3a2f9317"],["categories/博客/index.html","75fa9bf10937f54890f876de0d13ea42"],["categories/博客/page/2/index.html","18b0394fb6928427c9e09069725d0ddb"],["categories/博客/typecho/index.html","cd349f70d8a96f208e851d0ce98e6272"],["categories/博客/统计/index.html","9a938414d5e1607442bad8b372520b8f"],["categories/宝贝/BB/index.html","4ccc6481b0319398dd6ab1b70ae929e2"],["categories/宝贝/MM/index.html","d354119926b426eb0365a8552b99d4e7"],["categories/宝贝/index.html","455d4b1986053909a1bca27e37eccaa3"],["categories/思考/index.html","e1def505b530fd809e8419d925b2eb3b"],["categories/思考/职业规划/index.html","a65c3304d12b3389fe2e57febc3da5c4"],["categories/科学/OpenWRT/index.html","b07a6b4706495dd1c39fb4f4325b1df5"],["categories/科学/index.html","5f77f7532f972122ef5dfb5d65842619"],["categories/科学/手机/index.html","1b5328f43138cd48b70438525ec102a6"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c940af99b125128b0516fe254dd319da"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","65149804684a0da97b8c5c1018eff59d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","69c83576e271852dca501e0c44fd43d6"],["movies/index.html","9c81c87aaa278c2b8db09b9acba539ca"],["music/index.html","dcb6596d766cb39a695cc5b09ae74b12"],["page/2/index.html","57fba3a4b1db030c8df8cc44348938f7"],["page/3/index.html","9ef394ada02ec833666906c89f2d299d"],["page/4/index.html","64af9cbcf9d6e802af7a98c4bb46a8b1"],["page/5/index.html","494d0f53603097a0513cfcc4dbd9e448"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","fa41e0ed46ac92c9d45864f97ff2ca5b"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","6e50ede25d8b5688f706a6a4a7e394b0"],["tags/Github/index.html","3d9e72b1edb04159b1da60bb02c2cfc1"],["tags/Move/index.html","569da2574c1d5e89654a7e5a647b664e"],["tags/OpenWRT/index.html","84d9e059321bd36e718a0a882799c915"],["tags/Plant-Simulation/index.html","a9928308b4023e2c714ccf75e3def9ee"],["tags/Wordpress/index.html","cd673571cad7ebc4c06f7a0e700380a0"],["tags/cad/index.html","cc64e6f8a9a389eade56d6a8b0c98ced"],["tags/coding/index.html","b16aa73ab00e29fc2482b1c5c2b765fb"],["tags/h5ai/index.html","95e4dbc34e30a1387023a3f02138eebc"],["tags/hexo/index.html","9d41985578ad6c5b05b72218ed3ad0c7"],["tags/index.html","4f5658f1497dec5ad11cfa786cbf9096"],["tags/nas/index.html","d2686c6b073ab1d0ab0c3b17d21ba20a"],["tags/tpyecho/index.html","d35c0bfaee9afcdf8eea3e91cca2139a"],["tags/transferstation/index.html","739c75f7df98ab822f4358de410b4b63"],["tags/typecho/index.html","e70d5f5cc32418a7e123e387f2e100f0"],["tags/ubuntu/index.html","a0a74dcaea59f0d4d5916b4e8e79abe7"],["tags/仿真/index.html","7671d769a1cecdeea6eb8d9cfa617ca4"],["tags/写给宝贝的话/index.html","8fadf21665dc0cba2bc128fa4d604f4d"],["tags/原创/index.html","a6d71fcb6b052e4f3085d3641024d951"],["tags/学习/index.html","3a5bfc1ad46c3cd56318d5bacc71bf2a"],["tags/宝塔/index.html","e67de600b04dcec82a3ec0bb61cebcb3"],["tags/生产模式/index.html","1467c341e45df45c008fa4da256f146b"],["tags/百度客户端/index.html","baf9828d291df7de6a069f0165aafaae"],["tags/科学/index.html","5fa5a8132b5230adcf70e8941c8d9678"],["tags/统计/index.html","db71cbb5c76dcf4e23b8541e6f9192f3"],["tags/编译/index.html","3df0ad9b01b40b9486e44b2f0ce0963b"]];
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







