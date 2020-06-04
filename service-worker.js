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

var precacheConfig = [["about/index.html","2ef771a8c31c2bf9bad20499c35a6d08"],["archives/2019/12/index.html","61b1014340b573cb2872e31695987899"],["archives/2019/index.html","02de8036fac4571e2adf03f38e878706"],["archives/2020/01/index.html","366de6bd44b7fe43a0514c26a9883676"],["archives/2020/02/index.html","044169cbcd49e8482374cd6e9a23cd7d"],["archives/2020/03/index.html","b74ac3e0eaccb029fa6a5e323c261763"],["archives/2020/05/index.html","8cba0829c73af5a3a01a11180be729f0"],["archives/2020/05/page/2/index.html","426934950205ea8171e5fa35a3370290"],["archives/2020/05/page/3/index.html","2abe1482a07ce8d6cecf1be51363af26"],["archives/2020/05/page/4/index.html","48b443764f74b9680e86e4cb7df4a79a"],["archives/2020/06/index.html","694943d9285e3a5acf71f52ecc3b7d09"],["archives/2020/index.html","744f8c4b9820b36b169c036a3b4bd3e5"],["archives/2020/page/2/index.html","e6e80ff9f6a777e2cdffe4dd8b18c0ab"],["archives/2020/page/3/index.html","2fbf81581948f9a4c29f45fb410f4d7c"],["archives/2020/page/4/index.html","e920a11ff3c81003caa27f142436aa30"],["archives/2020/page/5/index.html","899d3f3ee29d69a7b90d2bb696e936fa"],["archives/index.html","3022acc80fa7d31e901b683634a591d3"],["archives/page/2/index.html","6be68a285eb064eb2a83f8672e6b9353"],["archives/page/3/index.html","ab525469ab89024318b2b28d5df2c557"],["archives/page/4/index.html","1334f6391b9127d1dd39c5b559503fcf"],["archives/page/5/index.html","a5a89d6811ccadcc799fe433208248ff"],["archives/page/6/index.html","edf5278ee655b4c0b0bcdee9f1534171"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","a85b07db050bd905bdb3eb026388f18e"],["categories/Code/index.html","b31f0e43da1130b9c1e619241ad1b53c"],["categories/Plant-Simulation/SimTalk/index.html","a828da69012e81bb187d15c8c6b640d9"],["categories/Plant-Simulation/index.html","0b5ae863ab468c2d81fcb30eca48fe4b"],["categories/Plant-Simulation/实体/index.html","6a99e4d3d22609ce0a8d2d87650e2805"],["categories/Plant-Simulation/常用代码/index.html","d5c25aef80df0d0e3d6bd10cafdae050"],["categories/Plant-Simulation/常规操作/index.html","9232dda9ba62c582e374c4ca113b3b9f"],["categories/Plant-Simulation/模型/index.html","17fbfc7db4a96206ccb127af66ac636b"],["categories/Plant-Simulation/背景/index.html","4a787e367b7d1b09e7150a4f0157b5eb"],["categories/Windows/index.html","dd978860f37b2df228f03621ac903f79"],["categories/index.html","0b00bf03d533659adc8d7fef85d991d4"],["categories/nas/index.html","c49d1526d28332f786c82d0cf4fe604a"],["categories/ubuntu/index.html","469f349f47331a3146bd0210a23a88b7"],["categories/ubuntu/ip/index.html","59e140bb35e1bacf623a89f2d05d17fd"],["categories/ubuntu/下载/index.html","fb91c55f5b6d9fdd3e330540bb037d6e"],["categories/ubuntu/命令/index.html","2aae2550caae657bdf23034fb41924c4"],["categories/ubuntu/配置/index.html","e587dad389dd88c4c300a7ee83891487"],["categories/win10/index.html","98aa43614488d6ea56b81f854a779b38"],["categories/博客/Wordpress/index.html","2b37bc430badaeaeddb8d95657704ed6"],["categories/博客/hexo/index.html","e0699be74edd28cec578a9e6c5d3f999"],["categories/博客/index.html","6e7a421f8b4ddb7c9b36aeb60ac68571"],["categories/博客/page/2/index.html","2f4165978a3a1e4f3f0f8d28e3401b4f"],["categories/博客/typecho/index.html","f9f0290773608a53c8b405ae0ea53e5c"],["categories/博客/统计/index.html","457056ca95a4235a5fe6a932291f2ae0"],["categories/宝贝/BB/index.html","0a156425c4ac76b8f4e3b5043d737e82"],["categories/宝贝/MM/index.html","b5fd058a23f432c13d10a0e515e4bfc8"],["categories/宝贝/index.html","5fd5a7d6a504f4deae62c052fc1134ed"],["categories/思考/index.html","483d95b2653e859d2ccfb10e5124b690"],["categories/思考/职业规划/index.html","935dcaabc4b84262e4b258acf6ef47a9"],["categories/科学/OpenWRT/index.html","96f6465b0dc1d86903e31cc692908afc"],["categories/科学/index.html","70dadfd3503c534cbc97f593289c2d05"],["categories/科学/手机/index.html","e946941a812d07fe8123461b7485b983"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1456b44746ef7fcdc3d45e349f6ff11a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","160aad4cb3d016877d2a87c87fd67f64"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b6f948a1b91159d8dad6c650929cc609"],["movies/index.html","b6483e32f57548ab016fad6b60760d52"],["music/index.html","2677cd3a960fb7a504a59e4ea06bd3e2"],["page/2/index.html","f0afa4c5114a1b15d59501ba88d570f4"],["page/3/index.html","dcba8de8b5f8279a901d1c3e358f95b2"],["page/4/index.html","22b76c41a7b9f43747a53dfdc9173094"],["page/5/index.html","f21b6dfe538f6f4d6f45a3a222c4fc02"],["page/6/index.html","da5190ad6de6fceaac6dc6ab41e389f0"],["posts/2019/12/04/00/35.html","8bd74dc0c51fac63d92bd8faf98dac19"],["posts/2020/01/15/20/18.html","f84998fa72529735fcaa956e18a5ffd0"],["posts/2020/01/16/22/18.html","2bcf715b06100db29759d16f401770a6"],["posts/2020/01/18/22/18.html","065e89be88a0bc586ba4df66ba8d1be7"],["posts/2020/01/19/08/29.html","87710d6d3a4efbd2ad173a4a780953b7"],["posts/2020/01/19/22/18.html","e2d8a604acc19b8bc45f0b9b02ac7258"],["posts/2020/01/23/22/16.html","36267e8bb66a61fdd34aad25ab18aff9"],["posts/2020/02/04/20/18.html","d608513cc92dd2d37ee58b332fa0d3e6"],["posts/2020/03/12/00/20.html","bcc8843a4c62878408752bcf62bec87c"],["posts/2020/03/20/22/12.html","71809645fc63a085bfc786217ca712bf"],["posts/2020/03/22/18/24.html","c99f250b46dac87bcaa89bedb35f1b29"],["posts/2020/05/03/22/12.html","2af6b5a8611dc7fd2f31c398c0d28ee4"],["posts/2020/05/04/00/05.html","03544157e9cf032342cd199665604bc1"],["posts/2020/05/04/00/09.html","8c5fd2266acd2a12af14cf874b9014d3"],["posts/2020/05/04/00/15.html","4539e1c6bf226ce8585132dc9edad96a"],["posts/2020/05/04/14/58.html","7aa50210cc22852ec3063458d4bf958d"],["posts/2020/05/04/17/01.html","7828a430b0208f2cbce26791991873bf"],["posts/2020/05/04/17/19.html","74ffb8d6a776f8688c2e802f6e4929e2"],["posts/2020/05/04/18/18.html","daa81815d163a552073a36f6fa884ced"],["posts/2020/05/04/18/24.html","90d55a6230220239a96d069d94889489"],["posts/2020/05/05/11/12.html","828beda3bb5c4f97289f5adca8a1a603"],["posts/2020/05/05/13/20.html","3453d7a2348b22d8bf3b9878257fbf3e"],["posts/2020/05/05/15/20.html","1a8ad9e49037dc839f6350c59578bb17"],["posts/2020/05/07/21/21.html","d0d61b11a018f168cc504f37ffd56efa"],["posts/2020/05/09/12/20.html","9ba64cd4e9fce11f93f53a261694a623"],["posts/2020/05/10/18/18.html","a2f567c72e5c2de23e181a50eb1c0539"],["posts/2020/05/10/22/18.html","4b372e465986ecf926040bf33b9008f7"],["posts/2020/05/12/20/18.html","93ab2ab6c8ddbf43c4f816ebaa4447d8"],["posts/2020/05/12/21/18.html","523606f88b8a036635e6052cf94d435e"],["posts/2020/05/13/20/18.html","747a3ecbab1b6cd56deafa515b012f92"],["posts/2020/05/13/23/58.html","b4f2c0df0a62dbeacaaa974a0d8a02ad"],["posts/2020/05/14/11/18.html","fe851c5e766112b4894d128b0aee01c7"],["posts/2020/05/14/12/18.html","1ef1ff45848cb68f9d3c40dc8df958d3"],["posts/2020/05/14/20/18.html","6ec109227331a9ba5417a894f5c28ba3"],["posts/2020/05/14/20/58.html","95659fafdfae9dcf897169051b0e5e26"],["posts/2020/05/14/21/58.html","34f104a36f3be9263c3226108e900dee"],["posts/2020/05/14/22/58.html","271a2c3d2892ba535b5bb43befb64cb3"],["posts/2020/05/14/23/46.html","5de8d72bd4878b529a247fa63b3c2bfa"],["posts/2020/05/14/23/56.html","72313eb22fdf7b36aa5657e552adaef0"],["posts/2020/05/14/23/58.html","4b9959a3641a4e3ee0a4f310a65ea40d"],["posts/2020/05/14/23/59.html","5df623bc7c4eb4ba23eabf7573d7bc5e"],["posts/2020/05/16/20/40.html","f7e647e1574e935ec5d7ca237b137286"],["posts/2020/05/16/21/40.html","e77a02d5617218e47235b82b2d3e1335"],["posts/2020/05/17/21/03.html","a07e480dd50af175ecd3daecda19138b"],["posts/2020/05/17/22/42.html","bbd6ba2fc435f35c53e88f0b56539dfb"],["posts/2020/05/24/07/03.html","4f73b115ad0f2997df9f5342bd699b21"],["posts/2020/05/24/13/03.html","089ed7ced96f8647f89476a22940ee9f"],["posts/2020/05/25/13/03.html","ef4eff2eded9e2a8170a2d391821d5bc"],["posts/2020/05/26/12/03.html","68fe4cab9470cfe605e9020015a80742"],["posts/2020/06/04/12/03.html","c0b268c76c0357000832a6e8bde8c5a9"],["posts/2020/06/04/21/03.html","0d8dfd5ed96c0677dbd34f23a8f35976"],["tags/AGV/index.html","564218d0bbe9a3bff287853a3d0ea9c9"],["tags/Github/index.html","c51ccbb605917dc99667cd6e9cba64c5"],["tags/Markdown/index.html","86757267aca4daea8605239ba2c3e799"],["tags/Move/index.html","d0ae06519603b5b38864990520446507"],["tags/OpenWRT/index.html","1b1f92cdb7712a2e20b34836eb5c710d"],["tags/Plant-Simulation/index.html","20766f7724456a2c2ed746313e28e76d"],["tags/Windows/index.html","0f492c5ebd17b4ef01800ea3a51c6260"],["tags/Wordpress/index.html","88f557572c39eaf964739ef62ff7f6a5"],["tags/buntu/index.html","2a226d0273f79f6307bb0b7e5c0f2b08"],["tags/cad/index.html","e5bcb9054dd8bb613c96939da17b4555"],["tags/coding/index.html","b2715fcaa017162258d4dd94330c7ee1"],["tags/h5ai/index.html","27058af1c5bc95f5e74aafd8801a6092"],["tags/hexo/index.html","74a78bfb7cc07946f0b53f404310057d"],["tags/hosts/index.html","6f6d047e1c5ada7a46de43fa09e18a00"],["tags/index.html","881dffa224897e5811b47d4cd1dafdbb"],["tags/lychee/index.html","0de653e4a75bb74c9859b8ec17012953"],["tags/nas/index.html","6113649ee914d19b9ef58b15d3a8852b"],["tags/tpyecho/index.html","1f16c190f7541446933f09aeeb1ca6e3"],["tags/transferstation/index.html","c7256bbed3036e70fa93a4eeda5b5fbb"],["tags/typecho/index.html","606a31b547992e31fed9a1b66029c0f4"],["tags/ubuntu/index.html","b95d2efa9b03328e9a475fbf124cb999"],["tags/win10/index.html","e5d39d71984cf67fdbaef931ec1e5901"],["tags/写给宝贝的话/index.html","c1b2553f5feade09fc44298dc1586166"],["tags/原创/index.html","b385c44e6472964c3c72e6dea6ddadac"],["tags/学习/index.html","d0743d4a440f880a8ad3e1bb09469110"],["tags/宝塔/index.html","cbde3a94b6cea4fcfe66d39999478433"],["tags/生产模式/index.html","89a2df3850759b01b3bbca943f3d7235"],["tags/百度客户端/index.html","bb1a62c9bbcfb8dc4170e72d6299ea36"],["tags/科学/index.html","cc874f83010419ea74c4811e42bde855"],["tags/统计/index.html","87622853c4d5b813ec45b1cdc306ab92"],["tags/编译/index.html","2bce801dd5eefb3aa7458f71e6986330"]];
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







