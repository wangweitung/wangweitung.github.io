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

var precacheConfig = [["about/index.html","0cb4d1c1decaf7edb86a9f6d1cb8a67e"],["archives/2019/12/index.html","ddf592602685555d0bc5361b8a985caa"],["archives/2019/index.html","f69a6b3aae5288030a9a6d986d76bb87"],["archives/2020/01/index.html","44e07bd9b2dddffabd850351d347983e"],["archives/2020/02/index.html","cf2ac3341a015c9390fcd209602a927b"],["archives/2020/03/index.html","18ef2e52904eb59f17437a7bba334330"],["archives/2020/05/index.html","5f69963820234f4551067dd148acc65a"],["archives/2020/05/page/2/index.html","ddaf774238851fbe3ee1b63d1a195cc1"],["archives/2020/05/page/3/index.html","c70cf1141e3e8498102e4e728afade59"],["archives/2020/05/page/4/index.html","a34774cf0fccf425c15cccdc5c0e4987"],["archives/2020/index.html","98ba375e0d7426c4947f394989f485ba"],["archives/2020/page/2/index.html","14047eaa03d5140cf6360837cfa3bb63"],["archives/2020/page/3/index.html","2620acec7f9d8edd68cc8b589c10f0dc"],["archives/2020/page/4/index.html","1949db3e37305a9b188fd67a5670193e"],["archives/2020/page/5/index.html","3dbad9d950f1af9f5d406ec377143bbe"],["archives/index.html","7305ac16a0881ed77c49ce5ea4b862fb"],["archives/page/2/index.html","7b04aa76dc260307606e37ad00bce4db"],["archives/page/3/index.html","71986e40040f2475f81c285d62b0446f"],["archives/page/4/index.html","38e448a983d0591274e28ce251b0d7e6"],["archives/page/5/index.html","2d62bd4383cb0efae0a19680f71b8727"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","9eb92232c6e7d10cad833d8d3e9ad677"],["categories/Code/index.html","9854e23dd553ca52603b108741653ea3"],["categories/OpenWRT/index.html","1fde84531526c79e4b4e12fc6ba28b72"],["categories/Plant-Simulation/SimTalk/index.html","65f85b1aa3b8d163acd33a4ec672bb66"],["categories/Plant-Simulation/index.html","a5c6c5c5eedbf7903a0d138ec425a8da"],["categories/Plant-Simulation/实体/index.html","18906abaf26a36cbb3eb447f913def1a"],["categories/Plant-Simulation/常用代码/index.html","56415f9c32af98b1870d8c1bffb1ae80"],["categories/Plant-Simulation/常规操作/index.html","64b3e0d2897613dc2900f8f2cdf8321f"],["categories/Plant-Simulation/模型/index.html","bdc7585e4a1302f42159c1990fbb9b51"],["categories/Plant-Simulation/背景/index.html","7a89b0ba508206815b3eb54132150c5a"],["categories/index.html","cd2207cda1985551ef48d01f37342429"],["categories/nas/index.html","8b599fd609813e43b2d1e21adab4d74f"],["categories/ubuntu/index.html","73aeb46635b0e6079ac5601dfaa620c3"],["categories/ubuntu/ip/index.html","349f3a017c97821a2b27d77294e7d5ac"],["categories/ubuntu/下载/index.html","c362640ea7ffebc1e3e205f637d1daa2"],["categories/ubuntu/命令/index.html","cf1a251aa300a28aa0ce0893eb687235"],["categories/ubuntu/配置/index.html","73568677cd9d8967de9df5ec59026544"],["categories/博客/Wordpress/index.html","34e4a8c3b2e7c7a5923ee57fd86719b8"],["categories/博客/hexo/index.html","01816468f0860642c403f2a2bfac55b6"],["categories/博客/index.html","7928005f4b19c7cd9900cc55143b34c1"],["categories/博客/page/2/index.html","d29a1bacb96d91ef65ae85bf0400e4bc"],["categories/博客/typecho/index.html","a79672fbdf85481af06d393b986cb9b5"],["categories/博客/统计/index.html","f201eced744fce232f68a9af73648ec5"],["categories/宝贝/BB/index.html","789dca7a552de8b9d545375a3b70d810"],["categories/宝贝/MM/index.html","643faa346f7da6da64f433e47fc58361"],["categories/宝贝/index.html","be44cc8ec8d6d74a9124b85846f2831d"],["categories/思考/index.html","05b64d375f555c7e3ffa7912d4342184"],["categories/思考/职业规划/index.html","c157b20d1682a55be8605321b9f8ca3c"],["categories/科学/OpenWRT/index.html","bd1f7f937fe20e42f721071535e9c0f5"],["categories/科学/index.html","2d4303b244ea265ba2ebeacb18cc2ffc"],["categories/科学/手机/index.html","ee1278732184de16baebf8478dae330d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c069282b3d9da9856a11608e31db794d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","8ce7822621c1c6070dd3badec6e2221c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","e859691897bb6310b95268d24aa969e8"],["movies/index.html","5d78f4179c4fe2e0bf15690d85be6352"],["music/index.html","0e5d98c96f7412f0953a8e4b831e10cf"],["page/2/index.html","2b26cb33110db6be7ad71336913266cc"],["page/3/index.html","9edc7390f50e0a3c443962845560da7d"],["page/4/index.html","2c301b2a06b2a9b32fda9d4380f48456"],["page/5/index.html","d354a769564b582e1a975ee4a0905ba7"],["posts/2019/12/04/00/35.html","4db3f2032d1a27c97ae3f01c02f16942"],["posts/2020/01/15/20/18.html","4514febad0849b8007a2da7821871822"],["posts/2020/01/16/22/18.html","8259c6003624f5ba0af41341cd0b36cc"],["posts/2020/01/18/22/18.html","be30b81f66f05cf79198d60d918efb6d"],["posts/2020/01/19/08/29.html","4c10f1d05c68cb4816992a1ffe033a4e"],["posts/2020/01/19/22/18.html","4f7cf4750a0646e2543d9306f149aaf1"],["posts/2020/01/23/22/16.html","9bcd41e879f1dc069a57f2c5a34a8676"],["posts/2020/02/04/20/18.html","ac660debfb27934df9b85938add5c111"],["posts/2020/03/12/00/20.html","b4688074c561c63907ce33250303d5b9"],["posts/2020/03/20/22/12.html","748a0e574a2449c4a0d1a6e45afbd87c"],["posts/2020/03/22/18/24.html","5f8a4be211101bb8438b71379bb52a48"],["posts/2020/05/03/22/12.html","b1affa1e07e1855c0204cdeb726f0bc1"],["posts/2020/05/04/00/05.html","f0d0cf5e2f9ce86c60de6204816e0a04"],["posts/2020/05/04/00/09.html","70828cdfbe41ddedce965a062bd0b2f8"],["posts/2020/05/04/00/15.html","7d5a4cd1068c3ba2a587a097fd43eb63"],["posts/2020/05/04/14/58.html","97ed8edc509f58be298ac72ed1a96f2e"],["posts/2020/05/04/17/01.html","a832dee322e5532f26372a4c7895b55a"],["posts/2020/05/04/17/19.html","95c11f24fb395f543573068933da5b19"],["posts/2020/05/04/18/18.html","e4d825f846b6ef9a303d9a15223dfc0e"],["posts/2020/05/04/18/24.html","9f19fb6a1cc0bc0c9be92ebc9846f5c9"],["posts/2020/05/05/11/12.html","fa339643c1e5c1d3700c76114d7aa243"],["posts/2020/05/05/13/20.html","dc3f4bed1732d637ba511b99d88b2a4d"],["posts/2020/05/05/15/20.html","f3645c2381ae4cf876f5ec26bde724fc"],["posts/2020/05/07/21/21.html","02bd2585c74049055335d1e391634df3"],["posts/2020/05/09/12/20.html","8537c8242eb9f19e0165c183af5abeae"],["posts/2020/05/10/18/18.html","8d31609805f38ecf942e18a65b5bd44f"],["posts/2020/05/10/22/18.html","da3dca1aacfe242929f392ff8df89bff"],["posts/2020/05/12/20/18.html","a44d2ae5f582a4a31eb0789173622c35"],["posts/2020/05/12/21/18.html","3c267468812c1f48a938bc029e04844b"],["posts/2020/05/13/20/18.html","99089a4fb6c15cacab50f736a9ebde53"],["posts/2020/05/13/23/58.html","2df0a0fff906934389620cf77fdeb735"],["posts/2020/05/14/11/18.html","d9ce414490a1e2bb94576390d27876c2"],["posts/2020/05/14/12/18.html","edd4a16a9cbbcd30c4c9cabcb3bc261c"],["posts/2020/05/14/20/18.html","a8c75372df1739fe23c36625523f32c8"],["posts/2020/05/14/20/58.html","559bd2240aea148b7b6a46a84bc91f40"],["posts/2020/05/14/21/58.html","a16bc768852195d73a8b6588a5ab7f72"],["posts/2020/05/14/22/58.html","e1d09fcba7e60f3e3d536976ce7c6a9e"],["posts/2020/05/14/23/46.html","04f9656f938a277e3aebee936f89bd74"],["posts/2020/05/14/23/56.html","e46d982b5bd1e59a7d34bf9022716bcc"],["posts/2020/05/14/23/58.html","840db958222cdaf04e55ddee6d10a70f"],["posts/2020/05/14/23/59.html","a46aff7d01c47b464c9ced479c76e07e"],["posts/2020/05/16/20/40.html","a9b0223d2270ab3a5a81bcac4be5661c"],["posts/2020/05/16/21/40.html","a0e9fe8e19f26a815e32025cf445e4c1"],["posts/2020/05/17/21/03.html","41b708e2899ffd902d0946118477c53d"],["posts/2020/05/17/22/42.html","7112a13b7ec2066628458c6d2a9e9c49"],["posts/2020/05/24/07/03.html","7ee6b500c155e92f8439c51f03dbebf2"],["tags/AGV/index.html","a634b638eee892b501244f8854d27afc"],["tags/Github/index.html","069c86e15d1cf52d3344eca9dc20bc19"],["tags/Move/index.html","953b5597bf7d236145f4106be8384acd"],["tags/OpenWRT/index.html","c25baf3524f5b5fcfba091005aab4c47"],["tags/Plant-Simulation/index.html","04ec912ef4fba4fc5e66012f291f7134"],["tags/Wordpress/index.html","efe6cf8c496fccc182c1f218cced9d25"],["tags/buntu/index.html","97af53b296fb7d7de6888e2f111cda03"],["tags/cad/index.html","a625aa03b1a76d68c05c5fa8759a94c3"],["tags/coding/index.html","96bfb9a1b3c20e19622280292702d46e"],["tags/h5ai/index.html","926f98dcdc3ae7f8bf4ab1d812caa2d8"],["tags/hexo/index.html","35d4bbedd8dcd7e117ea956698ce1705"],["tags/hosts/index.html","47c1ee3ec0d15b157d6cadbcb821aac5"],["tags/index.html","3af0650bbac1a321b752a111c175c2bd"],["tags/lychee/index.html","e204bfe3446ec93567f0ac0c6056c619"],["tags/nas/index.html","5092777ad7c4a20d8f6f110a27e977e0"],["tags/tpyecho/index.html","b31cac90df9f98267aa50c3ca38eb14f"],["tags/transferstation/index.html","d0bbaaf352545273add8930d78a1b09d"],["tags/typecho/index.html","ad8be06d8cf519fd0eb2030fbee63392"],["tags/ubuntu/index.html","ae1b093910ca428d7246a8b2fdae3fa6"],["tags/写给宝贝的话/index.html","4de7a7acbb26c6858b1753d7412bd9c9"],["tags/原创/index.html","2d5213c7e9c91cc9fc073ac92351f70b"],["tags/学习/index.html","391677eb76db39a81f351b3ec998f2ea"],["tags/宝塔/index.html","165575f8b9b004b917cf4412dd054107"],["tags/生产模式/index.html","e633ee39c79fba3b02a0ca67351da1a4"],["tags/百度客户端/index.html","03e8e63f9fe4a80fc3e1217b64684a73"],["tags/科学/index.html","d28a1e28ee231db6899d87390c5b0513"],["tags/统计/index.html","78cd5dd11cc44501f41d37a9e46f10d8"],["tags/编译/index.html","abd449e9aa72948c00180ef9d0d47eb8"]];
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







