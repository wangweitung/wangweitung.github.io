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

var precacheConfig = [["about/index.html","7c54a4c9c968027133d4cfd4257eaecf"],["archives/2019/12/index.html","957be8c60c4827d79ce99c699535daf3"],["archives/2019/index.html","a5a30a3da65f6fc47cf51734a6d8aa14"],["archives/2020/01/index.html","c397eba203e801a997f86bc33e78b3a2"],["archives/2020/02/index.html","a9531d6185d5de49ae35227f94509011"],["archives/2020/03/index.html","ff2497cd53a08a3ef091502912a47c6c"],["archives/2020/05/index.html","df0757fb78e02df22bc19cf255f9df6b"],["archives/2020/05/page/2/index.html","a3819387638ed3e8ad778a02e5db9f53"],["archives/2020/05/page/3/index.html","8fae2323bcffeac109affb2826d3d627"],["archives/2020/index.html","12a4b3f2cd8b87a0de2377536e239366"],["archives/2020/page/2/index.html","c7816793f3b3ae3f2addf65102088ef7"],["archives/2020/page/3/index.html","8d51e147b6074df24ce8b069c743afa1"],["archives/2020/page/4/index.html","d789585080bbc53404b05abc9b410b42"],["archives/index.html","593d2811f66c51e5401e6d377a1c1534"],["archives/page/2/index.html","51cc36558cb3c7f65ffd07fe2e471fbf"],["archives/page/3/index.html","f85623a701da997db13945393629cae4"],["archives/page/4/index.html","f420a9d55b55ad914c47b294f1f3f75f"],["archives/page/5/index.html","84f4600c8b99e10ad109f6ebf52d16a7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","f00a8a577e86e2af4836dbe998e068c4"],["categories/Code/index.html","f9fff207a6739ae6f00a50c2d1b47a02"],["categories/Plant-Simulation/SimTalk/index.html","7cf504c9d94083e9f0ddc398cff23fc4"],["categories/Plant-Simulation/index.html","baade2c647c0da5ed17575a769f7f1db"],["categories/Plant-Simulation/实体/index.html","05bf11d41e1f83dd8943c38ce52bc723"],["categories/Plant-Simulation/常用代码/index.html","088aee8c2dd4c6b6235b6a279a508489"],["categories/Plant-Simulation/常规操作/index.html","8569f90f65a4f6f3c6e88cda4ee777f9"],["categories/Plant-Simulation/模型/index.html","b33a4c81223d91cafe69fefc04cf3720"],["categories/Plant-Simulation/背景/index.html","715bf4b019987817ab52f11c9cff8895"],["categories/index.html","06ece81b22a85a660bcb7cda812ff425"],["categories/nas/index.html","59010aee080d46bc92f3464b0e1b9420"],["categories/ubuntu/index.html","1c872560276556ed797d4789570d6fbc"],["categories/ubuntu/ip/index.html","d962ee1980e405a6f6e6b51ac445e55f"],["categories/ubuntu/下载/index.html","7fc620acfe49693498535058219a8563"],["categories/ubuntu/命令/index.html","ba3be8f740037a9ef9026f411e805bb2"],["categories/ubuntu/配置/index.html","2cde31776da8e56b2298c884b1f85fec"],["categories/仿真/index.html","5ccbe87911e1abfc086b976e3550903c"],["categories/博客/Wordpress/index.html","936953a7f2c9e49f3e90eb3a928ef8a0"],["categories/博客/hexo/index.html","2d33130fe18a661d6d07bc2532308713"],["categories/博客/index.html","f7a61b15d145d3dc4eb3bfcb42e1245f"],["categories/博客/page/2/index.html","69dfa795faede4234c313ce0bcfa8df0"],["categories/博客/typecho/index.html","333a13b53f2aacf8234a3fabc2885ac8"],["categories/博客/统计/index.html","731aed5786eb1b9a43301ad7bcbdefb0"],["categories/宝贝/BB/index.html","872fa164c18a0626ae1879f99f0e0504"],["categories/宝贝/MM/index.html","edd6ef5e2368bcc3ebcbafec6b65812a"],["categories/宝贝/index.html","dd745bb20d9c808547a6a903c397aa16"],["categories/思考/index.html","44c1baa118802ce1f9844ba0c118d23e"],["categories/思考/职业规划/index.html","11ac726ac889878c23072d0d502516af"],["categories/科学/OpenWRT/index.html","7337886190767eee39836167bdb8d768"],["categories/科学/index.html","bfb8677f518f01736329d475e2c5574b"],["categories/科学/手机/index.html","b5b813f4c713b799d7557966c7b4e2fe"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5df0741d7ec32a8a19384eba028f621e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","71bc3a88f0c9fd129b1c270f63b3debc"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","57c3d8aab1bf0b5c40fb3e91cc56f847"],["movies/index.html","18f4861cfb95d72fd0052a33cd50344c"],["music/index.html","a65bb7594145468d58b6cc32f1348361"],["page/2/index.html","8623f0cb2ab6c3acf7b73705311d5607"],["page/3/index.html","030c29f6b7ede5a8f80fd1cb58862fd5"],["page/4/index.html","bfd207d9a10fb455656a67102026e791"],["page/5/index.html","c08d6c5113d7118aba4bf055fc27d08c"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","17fc09faae8a7848a388ad619065df86"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","0f724f55e1ee7f0eb1acc1d176b9a71b"],["tags/Github/index.html","b5417a4bf8fc3c19b0b563adc249242c"],["tags/Move/index.html","f7fbccf5c8d0204a45283956c401f1f1"],["tags/OpenWRT/index.html","96ed1765fe397297751390bf27719e84"],["tags/Plant-Simulation/index.html","213cf37b56a0a60278db065ef0b77a1d"],["tags/Wordpress/index.html","eba97eb5f7bab8638b67905d6753835d"],["tags/cad/index.html","c71c18013fb9db836e8fdb40c294620c"],["tags/coding/index.html","51fb65e21b433e4b52f3bc71d3fe4a23"],["tags/h5ai/index.html","3eb1c04e0ef342976b66d0cd72c04c50"],["tags/hexo/index.html","f73ef9167a7497bd53ddb5d998d90bd0"],["tags/index.html","41ede710ec6e34cb495aa9c23b77d2ee"],["tags/nas/index.html","129ba5dc13adee6ba800db2f6284e2be"],["tags/tpyecho/index.html","5de2ceb81f4042b91631784983986bbc"],["tags/transferstation/index.html","003c12f255e7c22519d902ff6f378a53"],["tags/typecho/index.html","9020a6e4dbe8cc9698603da9df4a645c"],["tags/ubuntu/index.html","2a600568e8415ec7a9b2cd1d037c6241"],["tags/仿真/index.html","0ed0d47aa185c6af470cd41ab356256a"],["tags/写给宝贝的话/index.html","502f31e3a75cda568e0d1559d8142fd1"],["tags/原创/index.html","fed405d08ab85ba5281944470d00eadf"],["tags/学习/index.html","e2c375c261100b064e6a140af7358fb3"],["tags/宝塔/index.html","b9f3abb96027e0a20d7b5333f834a819"],["tags/生产模式/index.html","312138f283476bb692cd252237bad3e9"],["tags/百度客户端/index.html","75b9bf31cbb3389fbe6537d8bdc7995e"],["tags/科学/index.html","3dc820318861983f5cb5f4bea0cfcbfc"],["tags/统计/index.html","6d69c9b02cd451414c1840b30029bc94"],["tags/编译/index.html","483eddba1f3a3ede8065e8febf1cc813"]];
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







