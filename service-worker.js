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

var precacheConfig = [["about/index.html","5190e39ee8543a302b65b11360c16bb2"],["archives/2019/12/index.html","66d3cfe152bf150cd47d7570b9a9dc82"],["archives/2019/index.html","fee37b08980796636688e793340bad21"],["archives/2020/01/index.html","14b38bd0a56303594d30df95ab60260c"],["archives/2020/02/index.html","b88977f5d7cf0d515e560951ef30353f"],["archives/2020/03/index.html","3224f8fc459b5dbd3302f1a51a778fc0"],["archives/2020/05/index.html","4d13e38fd4409a6dc1aef54f1a5e3c2d"],["archives/2020/05/page/2/index.html","0f720fd698a5a8a72e828c6aeb118430"],["archives/2020/05/page/3/index.html","d1e36887127fac69560e907d3003a28a"],["archives/2020/index.html","d95418c5a311bcef187ff87e2be86608"],["archives/2020/page/2/index.html","a9f0351dbd40527a88f9a8df27a7aae4"],["archives/2020/page/3/index.html","18c4b0c2ac62519f7155556102641aa6"],["archives/2020/page/4/index.html","eb9a206c4dd1a70557cbda94335e6f5f"],["archives/index.html","98be70c2e767ab69bb990a3fa2863d4a"],["archives/page/2/index.html","7c611bbbef07c1b08fa4fc8c9e12e848"],["archives/page/3/index.html","04d38f0769ad02ccccd37485bc4468d5"],["archives/page/4/index.html","100375587d5061a680e05e338977bf11"],["archives/page/5/index.html","0898b49bc4b74a488af6ed4a4798593c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","0bec968425d18594b0b64d70d28b6376"],["categories/Code/index.html","41e5e67223d8df379feb9f2732cbaf32"],["categories/Plant-Simulation/SimTalk/index.html","2b4fdeedda4403126309a0c6afac2382"],["categories/Plant-Simulation/index.html","b8ea3182aff6479daaf796178ab8d3b3"],["categories/Plant-Simulation/实体/index.html","89ff324a3b896dcc8390322b8d4ca04c"],["categories/Plant-Simulation/常用代码/index.html","ae668aa37d4f428755724cf7a1f48421"],["categories/Plant-Simulation/常规操作/index.html","2c9e54e0bddc3e74cbf32ab94eb52283"],["categories/Plant-Simulation/模型/index.html","76b8fb9ce1b54b7eb436b792b9a2fdf4"],["categories/Plant-Simulation/背景/index.html","13a1b24b04abc93385db949947d2097f"],["categories/index.html","b438cb14e38c6b5ffba1c8bf04a04e68"],["categories/nas/index.html","8fa7f3eb82c12c6c43fc6a1e8d1ef671"],["categories/ubuntu/index.html","e812f4215315047bff63df6025bfb11c"],["categories/ubuntu/ip/index.html","3487cfe50b577bac7bd878df9e8a7c43"],["categories/ubuntu/下载/index.html","fb02395ce0b4dad5ef3b316aa5bca45e"],["categories/ubuntu/命令/index.html","fc0bf7eb49012ac5041c0719c21b6a5d"],["categories/ubuntu/配置/index.html","f3332d5dfc1f3a3f170ffd56919c01bc"],["categories/仿真/index.html","44af547037089feea3fa7bdb6b440e76"],["categories/博客/Wordpress/index.html","f217f87bb6c5e36c333d640d5ff42728"],["categories/博客/hexo/index.html","18dfd6bb393771501195b293dace9a82"],["categories/博客/index.html","db7a146eb6235b292090773c1fc857e5"],["categories/博客/page/2/index.html","d0311b0fb557491d20e8ff59db16b8c0"],["categories/博客/typecho/index.html","21ddd6dbb5984e2b674e27a748fb0661"],["categories/博客/统计/index.html","741111da550f8ef383505df06305d3f4"],["categories/宝贝/BB/index.html","c3efba971825e8da8607dfff889a7ac4"],["categories/宝贝/MM/index.html","c53e074cb16b795610237071d9c44652"],["categories/宝贝/index.html","94b9487c86a1f0d4318b88e6c92b1a54"],["categories/思考/index.html","5dfaed5558fe5b3744c0bb71fc1774b2"],["categories/思考/职业规划/index.html","51700b85bafd422e2141c533dc03b955"],["categories/科学/OpenWRT/index.html","8f93050f348d1f15c972637d558b0f2d"],["categories/科学/index.html","aff45e37bf04f28507fb0470dbe65bf5"],["categories/科学/手机/index.html","c492a09d2beb51895a36c2780e5933be"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7f0acccf4f8eff1e81be4765099ba49f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","3f80567b6cd57e9207430aefed6b7637"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","117442a35cc8aa16dd67404901a1a9a8"],["movies/index.html","37d6aea5ee588f48606b05587274f930"],["music/index.html","24dc015ef1026c99b08a4f5876a169f3"],["page/2/index.html","bf54b121ffde3eb4fea6897e932262f0"],["page/3/index.html","c985df3c1a45313f82cc5ffdac34bd5c"],["page/4/index.html","83004536c5720a1ec2b4c480f8ce7091"],["page/5/index.html","c6ce3a957922848050ea7b747de4cdeb"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","8edb1da66e51fdad9ba8d75c04ce9c24"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","e15e439970fbb67ee0b43b9f0b162db9"],["tags/Github/index.html","7bc04957500706482dffc0432ae4fbdd"],["tags/Move/index.html","a6bde038484c2cdb4d1c598ce976b41f"],["tags/OpenWRT/index.html","304ee0ed01a6b0adec246d1b7278e785"],["tags/Plant-Simulation/index.html","6c57b868d4274b433999aa377fa318d7"],["tags/Wordpress/index.html","1edd63b4457726ab375b1086aeb8e385"],["tags/cad/index.html","09c0a19243c911bedc135a15f84ad14d"],["tags/coding/index.html","d4ba589388032f1a89d26d283215ba09"],["tags/h5ai/index.html","168b6d1c148c079268f4729ce14292ae"],["tags/hexo/index.html","8df4f4404e929eef37734c4c03966ee3"],["tags/index.html","ceb7b24a1a95c314af2137959da9dbb1"],["tags/nas/index.html","4aaeb958afc8196afc49e0c2ef394fe8"],["tags/tpyecho/index.html","ff881f0c764298b269485d296dbeadf5"],["tags/transferstation/index.html","f577d3c24929b501863a4c7df6f79dd1"],["tags/typecho/index.html","e81f4da1e61af6f1dc600227ca2e3b2c"],["tags/ubuntu/index.html","da003dff8e6d862e0ef816ab519d23f9"],["tags/仿真/index.html","0a23bf5e1a185b33bee2abfebc6b68e2"],["tags/写给宝贝的话/index.html","7a58c9d806edbb9a423df3d491da4d16"],["tags/原创/index.html","c44dd44f2f87a1e6a9fd5d8183e3aae3"],["tags/学习/index.html","86b7e7a9cc21afd903d2f5709b4abecd"],["tags/宝塔/index.html","7d0686f574b95c6c23f9ec4834756875"],["tags/生产模式/index.html","b881e7e2e5783a2c9a7923e991171d85"],["tags/百度客户端/index.html","bb65854023f6addf1dca5f6807cc1dad"],["tags/科学/index.html","753ab724d2a6b1a7e0503bdcf57a0f32"],["tags/统计/index.html","dbdb7e9f8ab77e120aa66d269c0f9b2a"],["tags/编译/index.html","700a06de55112a52e9c0897d9d30b7ff"]];
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







