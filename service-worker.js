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

var precacheConfig = [["about/index.html","7c54a4c9c968027133d4cfd4257eaecf"],["archives/2019/12/index.html","44ad02d9fd459ca3cd5f0651c72af646"],["archives/2019/index.html","f1df27d864112d0bcc50328999259812"],["archives/2020/01/index.html","2761f1e778a71bb2b108760e127f3ca0"],["archives/2020/02/index.html","3a9714f738c64c88d2c3435b491bf6eb"],["archives/2020/03/index.html","8187f200e8201aef2336a0cecfaad606"],["archives/2020/05/index.html","0264e68c07ca8814de4d6c112b73fbd3"],["archives/2020/05/page/2/index.html","3437dabf0a7a2eb841f848a2d7057346"],["archives/2020/05/page/3/index.html","851e6e1d55928eeeabb82aab7d580dbc"],["archives/2020/index.html","4500aedbaa06f2b564c1e74ae77aa95a"],["archives/2020/page/2/index.html","41813305786d1b2d1b86791149fd66e0"],["archives/2020/page/3/index.html","b9d9423944c0cbb8e59714700a965598"],["archives/2020/page/4/index.html","c02bf83c9502ef7ddaac1c107afd4502"],["archives/index.html","ecf4887519ddb8edbc8a4fe1768164ef"],["archives/page/2/index.html","b1355ee7dd0dfcc787bcd838bf18d1f8"],["archives/page/3/index.html","4de9d1f10f8b081f6e3f3162704b6cd1"],["archives/page/4/index.html","291e3d46bb09a936d0b8f1833f771240"],["archives/page/5/index.html","2b6c2ae19b74b55f3e89c6f71fd727f9"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","07430f25757d4c30e8a824a61a33f872"],["categories/Code/index.html","fc431a954300603fcad3bf672f0639d5"],["categories/Plant-Simulation/SimTalk/index.html","532dc105e1668688a83c9f4e83abb6fb"],["categories/Plant-Simulation/index.html","77f04c6980a9580fc900867a35247cbf"],["categories/Plant-Simulation/实体/index.html","933d2b5086059fe5b26ebc399a3b8020"],["categories/Plant-Simulation/常用代码/index.html","d1f23ea3923a40853511acfdf3b81494"],["categories/Plant-Simulation/常规操作/index.html","f6f60bacb3904ef290501ecfb41ab327"],["categories/Plant-Simulation/模型/index.html","a09629b7e5a710ce86f6a6ed08e825e6"],["categories/Plant-Simulation/背景/index.html","039bbdc1be59ccab9ec6d8d105d17d82"],["categories/index.html","06ece81b22a85a660bcb7cda812ff425"],["categories/nas/index.html","6316a32cf06e12bacb6f35d6e3025c16"],["categories/ubuntu/index.html","b78e68e321b3284858bcba26739346de"],["categories/ubuntu/ip/index.html","a019927b021cf851dcd1c25000cdc04d"],["categories/ubuntu/下载/index.html","eb76e46526158b8e3f6b05ba9762c33d"],["categories/ubuntu/命令/index.html","51e4d1f61e0be6fcc3efd0a411912cdb"],["categories/ubuntu/配置/index.html","237f24f8dab75ea030950fe2594605cc"],["categories/仿真/index.html","237d77fda0f45418aad744bf93d81883"],["categories/博客/Wordpress/index.html","84de025bf8b0460b76d8167aa4f69a3a"],["categories/博客/hexo/index.html","f3fc26cfd4276d906cb4582afc97ea7f"],["categories/博客/index.html","38e7536da3769107be1fb45ba62fa8e6"],["categories/博客/page/2/index.html","01f0e795bbcbd9dc5af9885a7c6f4df2"],["categories/博客/typecho/index.html","eace4517e7fbede6377d58632c46d0d4"],["categories/博客/统计/index.html","2fe721774c480d85fc4881831a81a78a"],["categories/宝贝/BB/index.html","405704a622af62c4a9238e75e1daf79d"],["categories/宝贝/MM/index.html","08b84f00069ae63fffec7391e149b694"],["categories/宝贝/index.html","a2d2d4688bb9188803bd036d485ec093"],["categories/思考/index.html","f72cd66830d43dc8dcba2d7d1f3be7da"],["categories/思考/职业规划/index.html","fdc7f3781c83b334a619dac88f07eadd"],["categories/科学/OpenWRT/index.html","74589a2a6db5d22dc3ceda721c74fbec"],["categories/科学/index.html","5ff42118a78d39910d57de5ee0d9aaa1"],["categories/科学/手机/index.html","eb130c52b051460744dc656dddd065f5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5df0741d7ec32a8a19384eba028f621e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","7ea61a17015f30f9a4b295a801248f42"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","57c3d8aab1bf0b5c40fb3e91cc56f847"],["movies/index.html","18f4861cfb95d72fd0052a33cd50344c"],["music/index.html","a65bb7594145468d58b6cc32f1348361"],["page/2/index.html","3881b32d318fd4d6f47f9926de7dd191"],["page/3/index.html","b3660898acffd96560adc8a836a1f986"],["page/4/index.html","34833b36ace660fd72da32ab37d70526"],["page/5/index.html","37e39081e5ae1b94d958f33770545540"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","97a57200e3f4381d376f684e3ce16140"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","ca2dc46fbc72aa356c73dc68bea65a06"],["tags/Github/index.html","81675aae471b92fb46bfb44d6795caec"],["tags/Move/index.html","e2ff9dd9a47b9408404c0fe45147c337"],["tags/OpenWRT/index.html","3ded72eda91449645a06d5b207caf078"],["tags/Plant-Simulation/index.html","d3dec012b01ae3d31809328e703a046f"],["tags/Wordpress/index.html","810657a55722a9f9ccc742d284b429a0"],["tags/cad/index.html","d0a06ec30b268ea96a115d7e7f2c3645"],["tags/coding/index.html","cf64039ee6ff53cb6de08f37ace07695"],["tags/h5ai/index.html","b6b8a7991155e3a054784817479c24ba"],["tags/hexo/index.html","0804b15999b241dc3fa8759f0978969c"],["tags/index.html","ffe9cd7f214519c43e21a06685f09e99"],["tags/nas/index.html","252b22a6c1a5a4fbbd0329890df1eece"],["tags/tpyecho/index.html","98b5cccb8560796ffadeee029418f4c1"],["tags/transferstation/index.html","c30c01c060c70bc49f3891fc16e97cf9"],["tags/typecho/index.html","2799c52b45399a7b5b35ad959b19768a"],["tags/ubuntu/index.html","7bc833bf0df6aa7cb02aa947177f20b9"],["tags/仿真/index.html","7a7efa294f615668d7f619df18cf13ed"],["tags/写给宝贝的话/index.html","2bb051b8b8453ebfff66d51bdd26d0bf"],["tags/原创/index.html","46591a657bc1d3f88c58a31fc98d5cde"],["tags/学习/index.html","92022115b58afd56004d6dfe1b29b6de"],["tags/宝塔/index.html","688884fe60e12c289df900e7fc945507"],["tags/生产模式/index.html","4254f8b1409a72b12fcdf167bb584d6c"],["tags/百度客户端/index.html","4968bf6c9c9270a5947d5795dc1d8531"],["tags/科学/index.html","cf0c1373276b95d80fc4329a982cb5db"],["tags/统计/index.html","078440c0e1807f37ea910a519d45abea"],["tags/编译/index.html","f15849afc2b37118c7b5673045b12b06"]];
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







