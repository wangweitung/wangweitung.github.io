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

var precacheConfig = [["about/index.html","7c54a4c9c968027133d4cfd4257eaecf"],["archives/2019/12/index.html","c309ea41a50d203571fd1b76398148b9"],["archives/2019/index.html","cfba1b3fec5af714e4473edad13cd813"],["archives/2020/01/index.html","8b6737992b98ec7df34d985fecf8f7d2"],["archives/2020/02/index.html","6877012f86a19510e4b905ee02d13c85"],["archives/2020/03/index.html","35bbb3691e514cfcbc199aa8fd6e3c71"],["archives/2020/05/index.html","a15e9dec10dd0a4c5980fb770ed812ff"],["archives/2020/05/page/2/index.html","8314127b4d7f06f762846fcf303226a2"],["archives/2020/05/page/3/index.html","f5e8b87f337ffb4b39748636efa333f7"],["archives/2020/index.html","2f500a99e25ab56a2f3efe487c42715c"],["archives/2020/page/2/index.html","db58958d331d4cc9c31a4ca6bd0a25e1"],["archives/2020/page/3/index.html","35eb7d199e0aac1b0b5a00c101f875ee"],["archives/2020/page/4/index.html","ac530d2a1221f25d2fe5ce5006162214"],["archives/index.html","8a962dff7bcc7e2ed6f300c269ce7cf0"],["archives/page/2/index.html","288e17af2efb070ae51a043efe12aaff"],["archives/page/3/index.html","089a4e8ce69c976b19aaf53812357653"],["archives/page/4/index.html","c12bf42ec7bab8775ec05eadd03ecf5a"],["archives/page/5/index.html","99d742e904ac74f9f162dfe14b6729c3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","00779155285ff328faab30b4bd6ef51a"],["categories/Code/index.html","2de834b13abfcc9a0746af04badc3af1"],["categories/Plant-Simulation/SimTalk/index.html","c9dffc18abd0017863d9e9a28a837f3e"],["categories/Plant-Simulation/index.html","c52bbebcd91f3869ceff0b1438c8a32c"],["categories/Plant-Simulation/实体/index.html","e031856964a97770f075a4587a2df715"],["categories/Plant-Simulation/常用代码/index.html","5313db5a7401816f13007e0c7373642b"],["categories/Plant-Simulation/常规操作/index.html","9cee95568e042acff46129e28fa14550"],["categories/Plant-Simulation/模型/index.html","77791b68cf4d50486119a0d8d127a9cf"],["categories/Plant-Simulation/背景/index.html","bdb330bbfb7c9a073e026d7be06158fb"],["categories/index.html","06ece81b22a85a660bcb7cda812ff425"],["categories/nas/index.html","b0e86b07843e5a406fe7cded33cba5c8"],["categories/ubuntu/index.html","424c5a001b3d852a80f1ce676dfd4578"],["categories/ubuntu/ip/index.html","1d8073cda957896263bc3b8278e74e04"],["categories/ubuntu/下载/index.html","dd2b337bae46952849c2804179048134"],["categories/ubuntu/命令/index.html","25ade55364eccd7a2e635dafd93cd71f"],["categories/ubuntu/配置/index.html","303992f0a84a7832bf3da35471c79b38"],["categories/仿真/index.html","0332be393ad104004824d06a5c72b47a"],["categories/博客/Wordpress/index.html","38946088c2ad72088f84e8285204fd53"],["categories/博客/hexo/index.html","de726e01ef1c79a85aedff78107d3551"],["categories/博客/index.html","26de00fca22da206c90638a4cb3f4fd7"],["categories/博客/page/2/index.html","25a334ebd8a8bfda91201a07e132e60a"],["categories/博客/typecho/index.html","930d168ffc278ef582e0b6fdf2b19fe0"],["categories/博客/统计/index.html","33d4222b9b0daa84e105dcc141fc099f"],["categories/宝贝/BB/index.html","8d432b1778aabd7743146cb97173ba1f"],["categories/宝贝/MM/index.html","265a341b0ccf24431c2181d4fb5b0214"],["categories/宝贝/index.html","d6dd973bbc496c91d1ba50e6647d2201"],["categories/思考/index.html","5755994b7192455de8755f5d114f2576"],["categories/思考/职业规划/index.html","3a4692da6eb6ed68135326519aa38aca"],["categories/科学/OpenWRT/index.html","595e2cab86a60603655db10a5d47af4f"],["categories/科学/index.html","329baf0557f41e947c13a48e0219cdea"],["categories/科学/手机/index.html","6db06c14c2d2039b59d254014cc804a3"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5df0741d7ec32a8a19384eba028f621e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e540ddfacab46a15c55a8cf1b973384e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","57c3d8aab1bf0b5c40fb3e91cc56f847"],["movies/index.html","18f4861cfb95d72fd0052a33cd50344c"],["music/index.html","a65bb7594145468d58b6cc32f1348361"],["page/2/index.html","a42d33fb8c98c7e822f75ab527d8f514"],["page/3/index.html","730bb297d3ef83f05f2ec5a8d770d8b1"],["page/4/index.html","16d3ce2ff31536c17fee57a6fbb18a4a"],["page/5/index.html","6072d629125ff68573e30a2e80ffdc22"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","9a261e45adaa153e2add8f2eeac64c3f"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","05a2d26ff487eabd5777a8c6fdb9bff7"],["tags/Github/index.html","03b7bf5c4137df77d24548f612b11436"],["tags/Move/index.html","46426a2a8928363febb4e094a462b865"],["tags/OpenWRT/index.html","8f9a9d104fafb12b259acc450886aa9d"],["tags/Plant-Simulation/index.html","2d15f04c7453f507a46d960c534169cf"],["tags/Wordpress/index.html","6558ec340c4c74181e233904f47934e9"],["tags/cad/index.html","45618b05a7cd5a23d26558555714bddd"],["tags/coding/index.html","6fc009ed4320729a73b67187cc7d997a"],["tags/h5ai/index.html","d773842b9f22f148cf6873f3bc4d7047"],["tags/hexo/index.html","6ca7e2b06950d59b9e1b8a51d7fc6b8d"],["tags/index.html","3365c3043df2d64c890685aec4116655"],["tags/nas/index.html","35df4e016d79e5a4a646a6ab0322dd61"],["tags/tpyecho/index.html","ab077f3ec55550c96f67c8d9e2878938"],["tags/transferstation/index.html","ecb52fa2b3e031c3b2251b7743dc9382"],["tags/typecho/index.html","6455f8ac1c2cc6640991bf0181ae359b"],["tags/ubuntu/index.html","4256fd43f9e71a470d75d2a343346db1"],["tags/仿真/index.html","78ef77a6c4cb218ad28a1cabb88ee481"],["tags/写给宝贝的话/index.html","1522f5d9fccddfa83005172e46be5b73"],["tags/原创/index.html","5958f9c063f15271c8eb40ad4d13e9aa"],["tags/学习/index.html","125c792cd269ca6be96b604fbea44b75"],["tags/宝塔/index.html","e06b3204480b9f3bd958cc6173c568d4"],["tags/生产模式/index.html","41297c479418a1a24e78fe20138f9f4a"],["tags/百度客户端/index.html","928c1911b0dbd3730a879abe40a1bd00"],["tags/科学/index.html","8f20656bc4849570be23c985aa8dd470"],["tags/统计/index.html","7a2965d52f2e6a202463a85fd53ea823"],["tags/编译/index.html","832a52df40bb449a6ff423355374df04"]];
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







