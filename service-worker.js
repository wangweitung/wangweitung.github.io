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

var precacheConfig = [["about/index.html","95beaf8b4f156b7b46dfe5d9fab2b3d0"],["archives/2019/12/index.html","196571760e1400ada85d623dc7cffcfc"],["archives/2019/index.html","c85c190d13d80f503c0289cebdc13bd5"],["archives/2020/01/index.html","ab41d82d10207f96fa791314095c3d7b"],["archives/2020/02/index.html","95ecd93f4303697142e5ae7fab2f4992"],["archives/2020/03/index.html","80bd10c715f9d88d1a3b896a18ba9451"],["archives/2020/05/index.html","c3dc15a83c9665ddfdc6236eddf1f034"],["archives/2020/05/page/2/index.html","777c8f63e20e0daefb0a4a89cbb605ed"],["archives/2020/05/page/3/index.html","e5bce191ea1215f9bfb82546ac63ac0e"],["archives/2020/index.html","f380f4fe63beb69c8602dbafed59fc38"],["archives/2020/page/2/index.html","228935ab30741086f5f6a0c71a776d50"],["archives/2020/page/3/index.html","c6875d2ea1d572e08aba9cd095b87a4a"],["archives/2020/page/4/index.html","b5f2bda070c646363e416cb5bdee2c09"],["archives/index.html","3dd48eea854cc27e05473db04845fa04"],["archives/page/2/index.html","bb8af038589a3b0beb47630bb311515e"],["archives/page/3/index.html","cc45b662360f249016c2e80be5a1613b"],["archives/page/4/index.html","442fa061088c428b2aa40cb80e176f1a"],["archives/page/5/index.html","e5be83c828421872d58982eda4b59b3c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","cad7fae3a980e038db5080f28d049cdc"],["categories/Code/index.html","c2b372769945df30d2338841d8b6a268"],["categories/Plant-Simulation/SimTalk/index.html","2fc184efd5d3e0ca0eeb10f4dd883f94"],["categories/Plant-Simulation/index.html","b48bff0e6fc75a8be5824516750389b0"],["categories/Plant-Simulation/实体/index.html","7a85e8b08ce206d7880c62279a82c9e1"],["categories/Plant-Simulation/常用代码/index.html","b4996b9a2b7d61f11e9b6fd4ae33d389"],["categories/Plant-Simulation/常规操作/index.html","a3c471c405e7ef0b526af0d163b99726"],["categories/Plant-Simulation/模型/index.html","9d5f85a0505ca4ce7121d4e6b84a9600"],["categories/Plant-Simulation/背景/index.html","33e2fb6b9b9cead723ec692ae1851e5b"],["categories/index.html","8786143b65d0a5f94fd8ef5e28c3a0cb"],["categories/nas/index.html","c814b1ab328fc054a563963253ff39c4"],["categories/ubuntu/index.html","3fdc5824ddef6570db38e9f6ba046a75"],["categories/ubuntu/ip/index.html","2431769c318989894c5c0942ffc41aee"],["categories/ubuntu/下载/index.html","dec2ded7553b439a05b6bafd425ee778"],["categories/ubuntu/命令/index.html","a6030b306fc83065d50f0949e1bf9a52"],["categories/ubuntu/配置/index.html","edae5322e20aef4b8beec24db8ea0f68"],["categories/仿真/index.html","489031fd17d1a9b64fcd224ee038d029"],["categories/博客/Wordpress/index.html","dc6e73c414c60abda1f919dd5e124635"],["categories/博客/hexo/index.html","17bd901fff131b977dc011d857919a10"],["categories/博客/index.html","cc8cc14d32d4fbb1cdbd412670d6420f"],["categories/博客/page/2/index.html","ec50802bd3867e6c0cc359356586250b"],["categories/博客/typecho/index.html","003f75f96c37817d099332c46379e180"],["categories/博客/统计/index.html","8cf5eb8d92e3808f1726eccfc099a337"],["categories/宝贝/BB/index.html","84eaf350dfcf2d30f58407c9865e28c8"],["categories/宝贝/MM/index.html","3bda6f661ab9cb88fd667873d9cf1990"],["categories/宝贝/index.html","ced9967938400a0faee423af6f461610"],["categories/思考/index.html","730900f09e9a55d21e4e34721ffdbbd7"],["categories/思考/职业规划/index.html","864a09931e2014278833d45efec00f2a"],["categories/科学/OpenWRT/index.html","fb3041af02df4b5ef2860fda43301cbc"],["categories/科学/index.html","3e002fc54d6af58dd88c7b0934c806d1"],["categories/科学/手机/index.html","bb1a4f8156334f6dcf60fb490a78ac57"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6c3771f2f375043b9e1241ed440ce960"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","111989a19ac25b9acc831a7ce075b2d2"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","8c0633708efed1a3d35b3c21c09b1c90"],["movies/index.html","11201534fa6543bfa03f5292e60ad6c5"],["music/index.html","e7175cd90ddcb3e64efb97c68a24b9e1"],["page/2/index.html","34d4dee780abbb674d95554094fe36d1"],["page/3/index.html","971a31b093f2974ce34c105a92f2a31c"],["page/4/index.html","53344f663e5d01f4f21241013858e898"],["page/5/index.html","5329adf5a3a79326995d0dc2ce5b48f6"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","958b275cf5cf13e61762f3e284f76c65"],["posts/2020/05/14/23/46.html","70d589ed6d507aa4dddbded91f9d9551"],["posts/2020/05/14/23/56.html","aeb320cf4314093b9b3448dc6c1f274c"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","f67897191b0ffdddbc901fa7dca95bd0"],["tags/Github/index.html","24a6bb8e95890da239dc2398675769fd"],["tags/Move/index.html","2acca5efd3f9bcd0675b0cb7f6cbf6b1"],["tags/OpenWRT/index.html","1deee23557c533dfbca41b0595738d00"],["tags/Plant-Simulation/index.html","c26434f2d9209a5f6cdb4a42a3de5f96"],["tags/Wordpress/index.html","97f63114f8b69054452178c3d15da948"],["tags/cad/index.html","3ebde1620cfbc9844d1a597a121e1b20"],["tags/coding/index.html","e3f552f49431423ea971525de2de423d"],["tags/h5ai/index.html","ae831b41563faff6edc53dc00e8316a3"],["tags/hexo/index.html","5ef121e94f2c63478b494c94bb11c7d8"],["tags/index.html","124a42f666abaf7e15d9fb345a117848"],["tags/nas/index.html","b0195a82d6b6806565c32502ec0d5be3"],["tags/tpyecho/index.html","c6564abbcb5cc7dcd2b98274b69b6983"],["tags/transferstation/index.html","4ee5c66298b9aeaa50e45d3f49b2a4da"],["tags/typecho/index.html","d8777b623d244e98994087fc59351d25"],["tags/ubuntu/index.html","fbe784a8ca7b9f407ba748b0e40034ee"],["tags/仿真/index.html","938b7254105dfbb99858577bc25f9e7a"],["tags/写给宝贝的话/index.html","6f4765c6949555a02482c3c238dd0c3c"],["tags/原创/index.html","872392084acccdfca1fc39dc3e976e30"],["tags/学习/index.html","fd6793b6ce2af294d50c34db19d6d64b"],["tags/宝塔/index.html","d93922de23f9cfc12748a1a1531664b6"],["tags/生产模式/index.html","584d76e4c8f2bf04eae8e5aacb362454"],["tags/百度客户端/index.html","da79cdbb3050c50c3997500a9772ae73"],["tags/科学/index.html","ef67205bdc19c6c6bd17955dcbfe3c73"],["tags/统计/index.html","525e100eb593d041a8c7755a4d6e328b"],["tags/编译/index.html","1a77400dc9bf4a6bcfaf45f045154473"]];
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







