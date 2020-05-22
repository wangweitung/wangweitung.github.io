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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","3ffa009f750b7794e3991809ee6474a8"],["archives/2019/index.html","cb6fe1f58a53f346272f89e1e1c18577"],["archives/2020/01/index.html","73bb2ad12a51c4584edeee6c9ab477fb"],["archives/2020/02/index.html","43e68021d9969bc78244bb0bf30c7995"],["archives/2020/03/index.html","60bd04858427900035d5ea410b16ebdd"],["archives/2020/05/index.html","8f0c57d850552c5aa4b7bebc67babb78"],["archives/2020/05/page/2/index.html","2fd76192a369df185706d963888dbb9a"],["archives/2020/05/page/3/index.html","dc18d66eca45fb50267a473309942562"],["archives/2020/05/page/4/index.html","d63d89cdea194e16651ba7e8d73f0922"],["archives/2020/index.html","f6f0a13b0a62445dd7020243e68a1399"],["archives/2020/page/2/index.html","31d90ab23ffded634e75a1be15a1e4a7"],["archives/2020/page/3/index.html","f9a6323bdb2a89815498ce487c93e503"],["archives/2020/page/4/index.html","5061bea71a1a54c3c7a3c2f9acf71811"],["archives/2020/page/5/index.html","80dba6ca568067ba2eb3bb6372b31189"],["archives/index.html","25b71f4a96d547d65919138950089b4e"],["archives/page/2/index.html","962ef2fe13da14f35fdda0dce90d0401"],["archives/page/3/index.html","1dbf91fbe39d14d2a6caa436f1f42bcb"],["archives/page/4/index.html","00c7509d9eb514711f4b5f5b71b41613"],["archives/page/5/index.html","329da39825762a0f5347a86f87860cdc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","8ed7de201d316e64f5871cc33cc3656c"],["categories/Code/index.html","c66eca2ecbabd3f164719a12dc873aed"],["categories/Plant-Simulation/SimTalk/index.html","f974cd6a8d5716c37917a81b576e1cef"],["categories/Plant-Simulation/index.html","dd02d0bcc7202b89b058ae59f1763bb1"],["categories/Plant-Simulation/实体/index.html","5f86bd28d47f4330e0f101cf81e6076d"],["categories/Plant-Simulation/常用代码/index.html","d76ffa2057ea6b8367e5c5f90fadbc88"],["categories/Plant-Simulation/常规操作/index.html","8c15f170db665d4f51e71ff388efd8a5"],["categories/Plant-Simulation/模型/index.html","216baf36f379d00fce27d3fad06ae5fe"],["categories/Plant-Simulation/背景/index.html","6d6485a24232f58041d00edbeccc766d"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","041907366811bbe352aefc1acbe05335"],["categories/ubuntu/index.html","a1f87b902eb3b767bf6f69a6cc2efd67"],["categories/ubuntu/ip/index.html","f5cf092cdd0c214dd01c7a2504cad781"],["categories/ubuntu/下载/index.html","f131f4db676450a0753a919b60a7348e"],["categories/ubuntu/命令/index.html","12fa75a39aa92bb8686b63cf5fe00c84"],["categories/ubuntu/配置/index.html","26fb5c5d62009b75a326455a0f233bd1"],["categories/博客/Wordpress/index.html","5e1c729b18742ba62b9b93dcbdfcb016"],["categories/博客/hexo/index.html","581b2c8a013e283cc74f29a2f1854add"],["categories/博客/index.html","80542f49438a4dbb79942e472d997f57"],["categories/博客/page/2/index.html","a0ad415c812bd743b91a08feb67f7e86"],["categories/博客/typecho/index.html","6ece6e40392f5d47abb15e235c8af112"],["categories/博客/统计/index.html","6fb12d7d08b36c96a6344e4aafa2c6a7"],["categories/宝贝/BB/index.html","9b547e4a98f3cea0ca15183e4d0d0666"],["categories/宝贝/MM/index.html","2bac573b7ebfe5052d456b36ba178abb"],["categories/宝贝/index.html","f1747f0b497d58ac9d5e3917f7d06b89"],["categories/思考/index.html","b8db2260f4a331511ba8f0bb200fe38e"],["categories/思考/职业规划/index.html","1a27563296c4ab7603310a23fc67d58d"],["categories/科学/OpenWRT/index.html","a93e69a0a8dcdfe3ef825069295fe689"],["categories/科学/index.html","93ee8f91db04a06fd6532bd06d97f526"],["categories/科学/手机/index.html","92351c525aaf157c4ed5176e0a422d83"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","86e47080e9161c603814049a2449749a"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","c1aef5675c0d38bc1585ebf5b00b451b"],["page/3/index.html","3c1966cde96a880fb2aa2bfa03d414ca"],["page/4/index.html","083510691524930f9f88b68521eb8dbb"],["page/5/index.html","a77cb1be5ba2e154d2e4b4ebf5c1081d"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","354df756fb610762204746f7209f30cf"],["tags/Github/index.html","b07bd03467107a913a64aa872a63fd2e"],["tags/Move/index.html","71d93c91b471f5519f3171898cfa45b6"],["tags/OpenWRT/index.html","d270bd262c1c8544b1081dc824e0b7dc"],["tags/Plant-Simulation/index.html","5095dde4563ed3d08e6a677c1e6c87d4"],["tags/Wordpress/index.html","9c27554681956a000319e4150ed89963"],["tags/buntu/index.html","38a95f288f5be6878a1b0c80ac2f3bad"],["tags/cad/index.html","8b91e5a03553de5729eccf8ba5174567"],["tags/coding/index.html","b146d4e903cfb8be08bee8fd390b06d8"],["tags/h5ai/index.html","82d157b190b1ab86d6adc6add3636064"],["tags/hexo/index.html","2710b5a63a8e46b44af76548a7cfd491"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","a71ebf8783f48e48fdd8115ebd5a5ea8"],["tags/nas/index.html","097fc27d4011ad73490cfa8b7f02b4d1"],["tags/tpyecho/index.html","d1c037dc756c268ae4afd09baa5603bc"],["tags/transferstation/index.html","7591a2f9e154a22082a88b26f3e44878"],["tags/typecho/index.html","24b9b6fe5efbed1a80f31100decc5f50"],["tags/ubuntu/index.html","c2058359314f5dca88e772e8d44f94cb"],["tags/写给宝贝的话/index.html","db76855babf86d71ad1f047c794f2f20"],["tags/原创/index.html","480038d1f85cfeb5405ca98cb888dcec"],["tags/学习/index.html","4fc7c7509867136350aecc988ced6ae9"],["tags/宝塔/index.html","838e0f2fec82b4819ff4131b87f4906c"],["tags/生产模式/index.html","c4aef7ab3e3aad958aaf3370eaf22f09"],["tags/百度客户端/index.html","f277d5f59c521ed1bba1696b68365404"],["tags/科学/index.html","c327e65b6d006591c6475fe79f21f208"],["tags/统计/index.html","7f66d6848efdbac28f62d5a5a78678f6"],["tags/编译/index.html","62ab30d421d611fb6a8af7f3488dbc8d"]];
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







