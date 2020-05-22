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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","c4be2c992039155df7a94b333ac835cf"],["archives/2019/index.html","d570a6bf2c601e4910f027099e46a65b"],["archives/2020/01/index.html","ae3e67ddf3f1bc43936452c12a920465"],["archives/2020/02/index.html","629ff001b8b8beefb05750595d19803a"],["archives/2020/03/index.html","e5530be4ed0a7d97870bf1b2b4cf8718"],["archives/2020/05/index.html","a6fd754446e49828a36156b194bb67dc"],["archives/2020/05/page/2/index.html","46b662698a91279313947915ac4273d6"],["archives/2020/05/page/3/index.html","50566e410cf0b4cb9d98105b0017e94a"],["archives/2020/05/page/4/index.html","03f4d0b87af8b085d7f3dffa9ce25cf4"],["archives/2020/index.html","0037a6759dcf465e7468aa9148e9e344"],["archives/2020/page/2/index.html","cf7ddd535e2df61869e81994a17de749"],["archives/2020/page/3/index.html","080ad81498bc5cce4883b90eec68e405"],["archives/2020/page/4/index.html","8f81ecb35c827084ac61427fb720a337"],["archives/2020/page/5/index.html","c7ca94c915221d4ae53bde19dffa6d56"],["archives/index.html","2ff7b72800e2d8c6ae1834b97b7bd457"],["archives/page/2/index.html","b7b7f5ed30dae744f0c81fe5a1533af3"],["archives/page/3/index.html","33591502d16a34dec188fc5a73c04a2e"],["archives/page/4/index.html","2bb42fe070d8fd8060691c4d3e687660"],["archives/page/5/index.html","ce8a8850c792031a5710dbdf9507b1f2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","678e254ba131b12ad89299f12ad14174"],["categories/Code/index.html","14031027cf830bcfa520b6e7e2a8aae7"],["categories/Plant-Simulation/SimTalk/index.html","d39cccca06b71350f2653c0d6394059b"],["categories/Plant-Simulation/index.html","a91620ae1fad221a1d21ecd3cc87536e"],["categories/Plant-Simulation/实体/index.html","bacfc912fab7692efe029c0c5704e753"],["categories/Plant-Simulation/常用代码/index.html","2c254a386473e58818be910eae86bb3f"],["categories/Plant-Simulation/常规操作/index.html","bbe4bc4d646a3b4d6c8f77f738725a38"],["categories/Plant-Simulation/模型/index.html","c089a574bb4ad5a510eebb86ea83cb2d"],["categories/Plant-Simulation/背景/index.html","c76cbe062d6abc4487efd1faf0e0d715"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","7e43d6bb12f8593f8dabfca2f0956918"],["categories/ubuntu/index.html","b9b7b6b55dfaf063269fd23f50430365"],["categories/ubuntu/ip/index.html","fcb3ae9c86a32318233921296e7301f8"],["categories/ubuntu/下载/index.html","76be8d75542e762f2151899f5d1f475a"],["categories/ubuntu/命令/index.html","300de664106cf12ec92a6d8192c243cd"],["categories/ubuntu/配置/index.html","5da95899e686b662a67feceb7f5b5414"],["categories/博客/Wordpress/index.html","e0bd6f2f709f498e98ad974f66fde11f"],["categories/博客/hexo/index.html","17905b463f249a8d13d2b9fe9b75baba"],["categories/博客/index.html","fc05c5996a3210cacd561d6d8cd673ad"],["categories/博客/page/2/index.html","7cec4b790c6f4527e2db420d295463f4"],["categories/博客/typecho/index.html","a7cd0e0cdc923d1d1cc4e7b0bdedcb18"],["categories/博客/统计/index.html","3ed6e0f86f9bdf4319b8262c61a9d6a7"],["categories/宝贝/BB/index.html","0bf25a8a1685920cc632996c19aec4f4"],["categories/宝贝/MM/index.html","a0f8131ded3703df3ff2c186d7377a5c"],["categories/宝贝/index.html","6b61ea34cfd70ea8ddefd757a9f920ee"],["categories/思考/index.html","859fe4963ea49ae653f8e6fe8eb77159"],["categories/思考/职业规划/index.html","3e4d5b4c8cea6ae504036ccc69310c51"],["categories/科学/OpenWRT/index.html","684065bde80cebf7fd192cc7ce6a3f94"],["categories/科学/index.html","7203ceffa648c271899df0020b526055"],["categories/科学/手机/index.html","a07b3651a3935a292fc418a64083a657"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0234578baf60e741fec5e77b118032cd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","3d3f3a93c03dd1a312f99a08256cee40"],["page/3/index.html","d453d1146764d721e21792ada0cf248a"],["page/4/index.html","8858a75af41184e9d46613e48466c68f"],["page/5/index.html","f35274605993051b251b78854f12fa06"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","19d18479a52193bfbd192394fe6f382e"],["tags/Github/index.html","ce3f44dcecc9c3218e1e7e4d0d82ba26"],["tags/Move/index.html","9db5159d74ab637133cded6a1b9f156e"],["tags/OpenWRT/index.html","d0043da5c1a1effbbc7060932a704daf"],["tags/Plant-Simulation/index.html","5cbb53c2b3ab6e1001a5ca5b4383ef05"],["tags/Wordpress/index.html","96f2cbd675e38d1571c9795507e9d1db"],["tags/buntu/index.html","b70eb05922a18d2c639caab2994d7b73"],["tags/cad/index.html","e98adbc340ab69c02e705fb7440b157f"],["tags/coding/index.html","6a2483c56769f707d3fba8f7223ae8a6"],["tags/h5ai/index.html","fc5f33827f7c3257825ae93bfa5c8fc9"],["tags/hexo/index.html","7777a9692bd34e8211d0627e429d1daf"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","f4b92540c335dbf40fd044c9519d25df"],["tags/nas/index.html","10dc6671256988b430e4c334765c7da4"],["tags/tpyecho/index.html","fc634bdd98d371b164193765d8851159"],["tags/transferstation/index.html","0cb68370e4825e0e8d38017cc7644374"],["tags/typecho/index.html","6a3bfcbe973cf308becda56a17b626ad"],["tags/ubuntu/index.html","5006ef48c7e050fcf8a1095fb2958f81"],["tags/写给宝贝的话/index.html","5961ce6315f9a8a411f4f37660a0b810"],["tags/原创/index.html","d478b32253457d2e7b472eeac74925be"],["tags/学习/index.html","fa96c1a5eacb1fb95a283eb906c22a35"],["tags/宝塔/index.html","f64077a5bc085896b8272d87296f9fe4"],["tags/生产模式/index.html","3e2a1756776b600a26c6abcd66589042"],["tags/百度客户端/index.html","011d0b99e8c1f1babd866bb9aa32d822"],["tags/科学/index.html","e4f83af0ccda28cfc3a7b692ff80b4fe"],["tags/统计/index.html","6bf4f897ecce19b9bc1a956d9c0449f6"],["tags/编译/index.html","a2606d63cfe604fae4e88c4249730aa8"]];
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







