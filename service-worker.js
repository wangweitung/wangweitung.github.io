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

var precacheConfig = [["about/index.html","9b11c3ee5371c2987944d35f661e346e"],["archives/2019/12/index.html","6193ebfe3d58cdf4a11b885ff950982c"],["archives/2019/index.html","6454a58542ac40e0337b6ce370dc1eff"],["archives/2020/01/index.html","0f9428657a18bd0b1bc1899ee919169a"],["archives/2020/02/index.html","550400c3c072d84dc19cab8dbea0aacd"],["archives/2020/03/index.html","0bbb076fbf04f9752078a34adbf463e8"],["archives/2020/05/index.html","13f7ba4142ebeff19664379c118d9554"],["archives/2020/05/page/2/index.html","97e9b35c3c2d9c7c093c5d0c47f363c6"],["archives/2020/05/page/3/index.html","e35f12eb7f4999da1cdb261c259ff54c"],["archives/2020/05/page/4/index.html","e48ec86298000658d856975db421b6e0"],["archives/2020/index.html","3a99a50b89efcc92ffde9cbc81c0e180"],["archives/2020/page/2/index.html","88c593fbd479812fa62f4e913eaeb861"],["archives/2020/page/3/index.html","254fe0843543bf484a26fdc50f11c4ef"],["archives/2020/page/4/index.html","e770d3397732d82ecc7ce1ef24136721"],["archives/2020/page/5/index.html","ad67eb83577dc819b167ca34f734c940"],["archives/index.html","311e89878dbdf7013e949d19bd5e68bb"],["archives/page/2/index.html","ad9286e615ee387c5ad9624cbdd7446e"],["archives/page/3/index.html","1c9b3e4e0afdcdc157d4d9f2f2314a07"],["archives/page/4/index.html","9abe03d65c596d0a4e0f941678ac2847"],["archives/page/5/index.html","471b68be2c6978b832305d609767f531"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","5ca9439b371fa7922525970a6cafcab4"],["categories/Code/index.html","f780fe7d8c44e1ce41ee06e7a61e656e"],["categories/Plant-Simulation/SimTalk/index.html","97b218a195882d7d0690ed556ff25d6b"],["categories/Plant-Simulation/index.html","8b8276eda083bd6c989305bbb5be235b"],["categories/Plant-Simulation/实体/index.html","2572251dbde0661b70e9b7af2e642aec"],["categories/Plant-Simulation/常用代码/index.html","37969c0db03fc4fd5751b8ffbcb4dfe5"],["categories/Plant-Simulation/常规操作/index.html","fe42de005f0affa0a1c4b07a4b60453d"],["categories/Plant-Simulation/模型/index.html","4f6bd21f52a7e40b49ccf096b887cf7b"],["categories/Plant-Simulation/背景/index.html","e1fc86e20c91861fc1b7363c0957a13a"],["categories/index.html","975cd416b56a239dc204ad224668cc7f"],["categories/nas/index.html","fb85e2e2c785e5bdaeca6d173841a81d"],["categories/ubuntu/index.html","69816ee92ef5f2f7ff6535cb8ad695be"],["categories/ubuntu/ip/index.html","3d88f05c147ef548f607d53403feb0e0"],["categories/ubuntu/下载/index.html","3cb40ae6d4c5a0c3dd0a621cbea00bdd"],["categories/ubuntu/命令/index.html","97abfdf045d656ff796ffaeaf6e4cc1d"],["categories/ubuntu/配置/index.html","8df769c924ba618208e4d61d2023b1ff"],["categories/博客/Wordpress/index.html","e8d2ee06a60abde70e6db6a4ce184ee3"],["categories/博客/hexo/index.html","d8dca9e4a109f024b2847bd59e4af766"],["categories/博客/index.html","bbe1e45cf998bd8c1396f17c16a1567f"],["categories/博客/page/2/index.html","8139e798b724ac7a4fd4f1b7e3e85338"],["categories/博客/typecho/index.html","7cbf742bd19d0afe1b6b5037ec9293a3"],["categories/博客/统计/index.html","a984314616263166a3823c0149519f20"],["categories/宝贝/BB/index.html","143afc721755e3e71854d174234d8e83"],["categories/宝贝/MM/index.html","07dcdd17b18e5ab020d02823beab5522"],["categories/宝贝/index.html","aebba6aa51c0d9069e1d728fc203b4a9"],["categories/思考/index.html","cb5fd9d871b0f2eaa71f692be937c62f"],["categories/思考/职业规划/index.html","dc3043b017663a46eb73ee9e6e0261fa"],["categories/科学/OpenWRT/index.html","40ca25a0c6efcae254c4f0a98c65b600"],["categories/科学/index.html","b37f0dd630ae5c309ebed0ad3dc55693"],["categories/科学/手机/index.html","985fea24fcecb6c4b4b8fca6882433de"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","794f5163970d9571f3d45fb499b937d9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4991f1ceee34dc933034f1206c4a589f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","383950816e4ec1dcf9e07e8ffd8e7ae5"],["movies/index.html","75c1460ee279b9a2cad44e5aa583f212"],["music/index.html","4050ec6739f41e2da2e2300d582d66ae"],["page/2/index.html","8008107f5f14efd8becf6ec70c89881d"],["page/3/index.html","38ee7b5e250a703803aa198e8237e028"],["page/4/index.html","1945275de44b4f267ce4a3039003e967"],["page/5/index.html","cf4dcb907a9fcbab294d7a6dce9d578e"],["posts/2019/12/04/00/35.html","3b3c4614206a2a3482ceac8af899059c"],["posts/2020/01/15/20/18.html","7f53d92dd60dcde2d6ee8d9011c56f57"],["posts/2020/01/16/22/18.html","4885ce3c2f42daf879331e473219fbc3"],["posts/2020/01/18/22/18.html","aa663ba3a28baa87ee67418d2883e7b2"],["posts/2020/01/19/08/29.html","9ccf823161f29e53ab18f5e88dec6400"],["posts/2020/01/19/22/18.html","2492dac72e1108cff1a58e316da0bb9a"],["posts/2020/01/23/22/16.html","1fa806e94709e59fb500d2a6800af97a"],["posts/2020/02/04/20/18.html","2060d1fa64d5ee1b03e5baee5d12775b"],["posts/2020/03/12/00/20.html","5a45efb9247a98491357f61d6439f580"],["posts/2020/03/20/22/12.html","a5de9e7014aec2da7039844186ebae93"],["posts/2020/03/22/18/24.html","fcb4e5302b048c17d43aca8a28fbda53"],["posts/2020/05/03/22/12.html","5417bd052321ea29de2ad893f79fbf09"],["posts/2020/05/04/00/05.html","3a3bf2bd607e1bb1d9468427579ca854"],["posts/2020/05/04/00/09.html","23764935c66f944053683eed2746d5ee"],["posts/2020/05/04/00/15.html","5d2cad1192142232c2bc11c4b34146db"],["posts/2020/05/04/14/58.html","aa11255f007a8f169b30bfb502a7f2e3"],["posts/2020/05/04/17/01.html","90bc7cc323aafdb43d672e447cf95221"],["posts/2020/05/04/17/19.html","ba8493c7de8bf137ad800a48433c7bff"],["posts/2020/05/04/18/18.html","613e947be699b4b3dd911a5b3fe97049"],["posts/2020/05/04/18/24.html","fcbe5e621801d4db14b31591d6e92357"],["posts/2020/05/05/11/12.html","776cddfc357f667bc07b8519bdf5774b"],["posts/2020/05/05/13/20.html","9c952b71ba30864597320842a450b20f"],["posts/2020/05/05/15/20.html","3cac22292e3d19b089240345a88d89e4"],["posts/2020/05/07/21/21.html","a91adb3594eb38886bcb81e95be0333e"],["posts/2020/05/09/12/20.html","c17541dee7efa8ac81994bdc7ec2200e"],["posts/2020/05/10/18/18.html","00227947faa9120281319464b62577d2"],["posts/2020/05/10/22/18.html","1d5fc2810e5d62130c56256ab5eed676"],["posts/2020/05/12/20/18.html","d98fb464193c40df57571b7e50c630df"],["posts/2020/05/12/21/18.html","85b72e25bf3045fce3401e1d2abb3f50"],["posts/2020/05/13/20/18.html","6c62355eeead593d0cddfe032d9c601c"],["posts/2020/05/13/23/58.html","f27532092ebaafd502e7565a3c4f0c53"],["posts/2020/05/14/11/18.html","975fb1bfbac77de074ca3a23b3676f45"],["posts/2020/05/14/12/18.html","d999c286da7e6de78858fd02e08942d3"],["posts/2020/05/14/20/18.html","30c63675e3d61c9eeaac7b1239f9164f"],["posts/2020/05/14/20/58.html","715eba10efba427ed4e7f69cd883a0ca"],["posts/2020/05/14/21/58.html","dda6945142c5552a0cac0296c3fc363f"],["posts/2020/05/14/22/58.html","753a17edda797b8696d619c3d7623afc"],["posts/2020/05/14/23/46.html","9976a502b1815f3629b8d7dc3c618f69"],["posts/2020/05/14/23/56.html","a07d986862737a3eef933b4a6ae143aa"],["posts/2020/05/14/23/58.html","e89f16c81ea0cd71f1735099dc7c16c8"],["posts/2020/05/14/23/59.html","0b8cb12ddddb463817860b30d1181191"],["posts/2020/05/16/20/40.html","280a8a260651ab32dca9105bf0f51051"],["tags/AGV/index.html","539f6a35d1f533f0f15c96e84a1f4f34"],["tags/Github/index.html","6574351e2836d04bb46d38756169930b"],["tags/Move/index.html","fff0590da3f921e2e527e1c148704521"],["tags/OpenWRT/index.html","4b89ec7996872fbe317c798a307cff40"],["tags/Plant-Simulation/index.html","ca1678c571853e0e72436dd67b89f714"],["tags/Wordpress/index.html","b91911bdc5c8dc0d56d225fc7604d8fe"],["tags/cad/index.html","60052de346e496a53828d6782db5c06e"],["tags/coding/index.html","7f609fdbd45b2ad42a4a5cef135c36ba"],["tags/h5ai/index.html","719a42f0c2802a5425a18dac96316838"],["tags/hexo/index.html","f1bd80b25759167147d3883ad4e5b91a"],["tags/index.html","3bb7af67348c40514ba787c0500f37b0"],["tags/nas/index.html","25d55be3078a6611773cb6967908baf3"],["tags/tpyecho/index.html","0b9479b0606c60ce31304de95e6500c7"],["tags/transferstation/index.html","3fe66c632cf0a7a03f39f77c11661e9e"],["tags/typecho/index.html","215b421456758d49301d5f21509ab2db"],["tags/ubuntu/index.html","68a6fc9572a977f955b95430875bee35"],["tags/写给宝贝的话/index.html","5575eefc4decf1d9452575dbecf42f2b"],["tags/原创/index.html","930394beb42dde61610fd77f5eed4b8b"],["tags/学习/index.html","16e498bcb9527bc0dda0f9f5dad6b2eb"],["tags/宝塔/index.html","e23e7c77b6a32991cf54ad86b6e82f91"],["tags/生产模式/index.html","3d2f787f058678088d004a229e78f1e6"],["tags/百度客户端/index.html","cfb231185c8e3a2c1adb2532839b7677"],["tags/科学/index.html","1352486a149b3babc3c72eb4776f14ba"],["tags/统计/index.html","ef5518cedbf1cb56953122cf21ce5af3"],["tags/编译/index.html","a34017b135bddb4bbd351b11c754c776"]];
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







