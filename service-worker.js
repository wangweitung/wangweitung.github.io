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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","7b9379385165ecb951f6260f657e6a48"],["archives/2019/index.html","1b97765c4e3fdde6bef609a30c61e716"],["archives/2020/01/index.html","d94064a0db0c582361ce3f8cedbb8386"],["archives/2020/02/index.html","ea9cc0c7de7fe02dad68beaffcae9072"],["archives/2020/03/index.html","e8989fbf66115c94959a84514f950a19"],["archives/2020/05/index.html","ae177910e67caaefc14f79c62afb6e29"],["archives/2020/05/page/2/index.html","528a284488f17baaa83c41bad5f1b118"],["archives/2020/05/page/3/index.html","57d081242cc2df995f6c20ff25f101fe"],["archives/2020/05/page/4/index.html","9888e51c434b9420d1aef235236a4e50"],["archives/2020/index.html","7cc8ab88930c093bf28deaf7651d5779"],["archives/2020/page/2/index.html","7f6670ef929b33c4c1e87bc79171972c"],["archives/2020/page/3/index.html","1c6430269cdfd20740ae60d140401852"],["archives/2020/page/4/index.html","a767910f4db79cb9c8c6469b54c45a14"],["archives/2020/page/5/index.html","edef043b3670d99c3fe40d5e91d017ca"],["archives/index.html","acbb9d48f600b15cf3208c0705a69b47"],["archives/page/2/index.html","e459ef2ab03f715fc07be1809695650d"],["archives/page/3/index.html","3117a1f5d5600f89d1f5ab86518ef5c3"],["archives/page/4/index.html","e69c10cef956fb8d88ee47e943db0f82"],["archives/page/5/index.html","a7fc15c86ce566ffa7650506a566f06c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","1d0918762e21c482f2c2e53624ce9ef6"],["categories/Code/index.html","9dde7b1ea809343b6334a1a35cc71137"],["categories/Plant-Simulation/SimTalk/index.html","57b7c93fc3db542746cbde0ad3c6a004"],["categories/Plant-Simulation/index.html","1a09ef710a87be70bb4052a2dd2bfcd3"],["categories/Plant-Simulation/实体/index.html","1e3fb4abb4de155b340efb880e30790c"],["categories/Plant-Simulation/常用代码/index.html","5df116b473d153ca45bcba20debfdfb1"],["categories/Plant-Simulation/常规操作/index.html","93d813b663795f84b960815265bb4f50"],["categories/Plant-Simulation/模型/index.html","75298a2d830120d1ac68249118849bd0"],["categories/Plant-Simulation/背景/index.html","e0f7d79beec090a5d5a4163d4ef5c301"],["categories/index.html","869b3f9791b65fa7a49239f7cc644130"],["categories/nas/index.html","fcd6d852d0b0d110df05cbd0e47100b0"],["categories/ubuntu/index.html","3e02e9a3e0c75bc9c39e48c482c8ed0a"],["categories/ubuntu/ip/index.html","d8ae021b91d09ca5840dc5cd9a56071f"],["categories/ubuntu/下载/index.html","887f1f4963b3c1a588f27a2ea65a1ae0"],["categories/ubuntu/命令/index.html","167525fe6acfc8c15f9aafa9f78df275"],["categories/ubuntu/配置/index.html","1a03843acb9759f46ae6f16a9d96179f"],["categories/博客/Wordpress/index.html","8b693874be70799a65f36501b293b70d"],["categories/博客/hexo/index.html","1b8660741f6b7933cba5e1a78a53cf47"],["categories/博客/index.html","ef415644b017ef627d39b6ca8408e2b3"],["categories/博客/page/2/index.html","6aade64fa9f738e7ed1e28b0c6fc8fe7"],["categories/博客/typecho/index.html","c280f17ab3d948692ed4f470565319f5"],["categories/博客/统计/index.html","da496fa41719a60d28356758745b5df2"],["categories/宝贝/BB/index.html","1bc1346b3ce225b8c085f412d838770c"],["categories/宝贝/MM/index.html","e977783529c5553df4ecc28018f1aea6"],["categories/宝贝/index.html","dc5410a77dc94c77578ed3fdf08386b9"],["categories/思考/index.html","0010a99fcfb0a3ab1c8a01ca26fe7443"],["categories/思考/职业规划/index.html","540c26669999743848acfd1b539dcef9"],["categories/科学/OpenWRT/index.html","be7ca260a1ae5f84fe3ef2a87f8c75d5"],["categories/科学/index.html","d6ecb16beb2091e0a1454e2c801bad47"],["categories/科学/手机/index.html","8676f0ffa90f660577fedc62764f72a7"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","f7b6e5c16dbf677abf592e60c74a423d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","5123f8281b46921642f792637ce0b7f2"],["page/3/index.html","e94011c83354cdaaf07b54c80dcb64b8"],["page/4/index.html","11c71231284b0b4add49aacb7e36732a"],["page/5/index.html","5b44846f3d8a2e1c450f3be4bdcbb2ef"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","1ff208ed6efeca8d44372c2d6be79dd4"],["tags/Github/index.html","fe80003b251099fe73e4a0caf521ad18"],["tags/Move/index.html","be448d1b805624426f716bfbd5ff87a3"],["tags/OpenWRT/index.html","41a7f562629a8c6c5920f850641e657b"],["tags/Plant-Simulation/index.html","9efac03419512a407723b587bc15d4b5"],["tags/Wordpress/index.html","e390e9b311097bc8acdbb1f2ffea0cf5"],["tags/buntu/index.html","cc0d47b9ff03907daa5a3eb3ae30bce7"],["tags/cad/index.html","b4ad210bedd4c31dce00beaa553c30fc"],["tags/coding/index.html","11c89b1e7c441c4062ad04d1d2884e49"],["tags/h5ai/index.html","f3e3277521a85841a069bcc153eac571"],["tags/hexo/index.html","2843f0d5e47ce640b25c606312222f49"],["tags/index.html","e17b06b4f32aea7b1eb79d2f0869b229"],["tags/lychee/index.html","7500a30736b7b07b02560ee2d829892d"],["tags/nas/index.html","234fe40eca156a0ea61a04ea9eecdf17"],["tags/tpyecho/index.html","4f2df453db1d6a2038bb9c0a1bd93956"],["tags/transferstation/index.html","04c9b9ba274aaff2b4e2003ff6d6b571"],["tags/typecho/index.html","19355667eafa5c03e1c13ef02dd587b6"],["tags/ubuntu/index.html","cd70a153169586292941ee441b4ddae9"],["tags/写给宝贝的话/index.html","7c3b489e6d8d72d3e5e164bcd6ab48b6"],["tags/原创/index.html","3518090b5978c96283cd57d65dcdb690"],["tags/学习/index.html","a1f5464050ec4f48e88fef983afc7f10"],["tags/宝塔/index.html","2c0d9bf3adb43f94bfdca9d163cd3b26"],["tags/生产模式/index.html","e15c79ec09dd4060ec12b0b2324aa848"],["tags/百度客户端/index.html","005f4799231a38994a4b618716b11ea2"],["tags/科学/index.html","9f5f3513db5487a651d57056cecaf6dc"],["tags/统计/index.html","06af6db28f6bbd7945ad20a7fa5b1728"],["tags/编译/index.html","93853f12ed86a1752b169f92f480f3d4"]];
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







