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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","0e6874c554ef313ebcf610c9ad0fa6ab"],["archives/2019/index.html","67309438a4a4bc1f7d050225990b7aeb"],["archives/2020/01/index.html","f933112aaa8a3faf217b5344374c3864"],["archives/2020/02/index.html","9868dd4c5e278b22bca02d149449921d"],["archives/2020/03/index.html","f0318525e8d657b6fa10b3d71e7e31a9"],["archives/2020/05/index.html","ae044e5a5bc639d66ffbdf79ad8771c0"],["archives/2020/05/page/2/index.html","08f13b1ddac6896b18c229965cca75dd"],["archives/2020/05/page/3/index.html","5d97be444fd4f95fc9348f2c44f11607"],["archives/2020/05/page/4/index.html","28159b8104cc426d8ca34b000656eb4e"],["archives/2020/index.html","6bb3ecb2492be2ff68aef1fff93a14d8"],["archives/2020/page/2/index.html","2601c7312c8e13bf0aef6467a48e2a9e"],["archives/2020/page/3/index.html","98bb783525fb0ca58c293c402b70e25b"],["archives/2020/page/4/index.html","16eebe9ce7c781c83a4a37826c1e8a5a"],["archives/2020/page/5/index.html","0efee74a18166ea5c0b73e959f208859"],["archives/index.html","8aecab0401566672d26fc86240cbe0f1"],["archives/page/2/index.html","f88b42e6632df5eaf49acdad0a6498cd"],["archives/page/3/index.html","3dccf35e153e25cedcad1fc285c8f95f"],["archives/page/4/index.html","9c93d9e770fe96ed5839eaa9fc35dc99"],["archives/page/5/index.html","3ce30b8bd37560e5acddff7803e0b5d6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","ea3f05c0dfebdd8158f599432250198b"],["categories/Code/index.html","08bdd0114ed7177ba7eb673ef26a4878"],["categories/Plant-Simulation/SimTalk/index.html","1af80b789f22a9daa1876e7a72b3603c"],["categories/Plant-Simulation/index.html","3469596a807cd8d9d79445cec08ef0a2"],["categories/Plant-Simulation/实体/index.html","dae7330bf25d6d491a378117fe36e9c3"],["categories/Plant-Simulation/常用代码/index.html","949bf39618ecbbe624124db3614c1098"],["categories/Plant-Simulation/常规操作/index.html","2f1624d31ae8f216ff25f0e8dd348259"],["categories/Plant-Simulation/模型/index.html","ee7f6949c7c673142f40c27f327aef6c"],["categories/Plant-Simulation/背景/index.html","195b5b95b74b9bbd3742e7131fb01c5a"],["categories/index.html","08afedda9664dff1fb7234c92884a9fb"],["categories/nas/index.html","46f66aacea0152d0c039828aa3fe531f"],["categories/ubuntu/index.html","e9be087bc72c9d2bb8051dbb0dc58c3f"],["categories/ubuntu/ip/index.html","afa4fd210254213ba57bc3133ab3ceba"],["categories/ubuntu/下载/index.html","207205535327d5602c405bc5ede3464a"],["categories/ubuntu/命令/index.html","83f505f7d3ba5ef0b3346c66e8a816f1"],["categories/ubuntu/配置/index.html","69a3e4961bb20c0a9c9a186868ba4b8b"],["categories/博客/Wordpress/index.html","8270598e3d54cbc18d93d72d1701f5a8"],["categories/博客/hexo/index.html","931b43c8f112e7a7c14710cd9f4a77a9"],["categories/博客/index.html","b2f60583c97b9163140da248bd17a878"],["categories/博客/page/2/index.html","ad70b8aaf80b6f4a4c806ded73a8386c"],["categories/博客/typecho/index.html","00615363d74ab232e1fa064724b5f556"],["categories/博客/统计/index.html","d4af2fbff7388384bf2384b0ea3874c0"],["categories/宝贝/BB/index.html","c03ddd9552d9172731f49b11710e1db2"],["categories/宝贝/MM/index.html","afcfd35f990904e985efe80a822b5a8f"],["categories/宝贝/index.html","a2484c0d563448269a8f2020d34f3ba3"],["categories/思考/index.html","c77f38efc0dcdea9498b6005dffb8814"],["categories/思考/职业规划/index.html","6042b1313eaea90cd7f43cb4606f2146"],["categories/科学/OpenWRT/index.html","9e01268411a927b4e2d8677427f3abfb"],["categories/科学/index.html","b19f4d4285ab4d2af9c0378c1ab6c5df"],["categories/科学/手机/index.html","794e73a51e1c56e78a6480ec3746ef1c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","ee1ff6c65fd7307bd184652a88736855"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","ed7a2ccea0c6502ffc5b483bc9cbb6e1"],["page/3/index.html","6fe1628c9a4513ca5b0d1648ea883630"],["page/4/index.html","3f47f094b2bbc5ba3b2f4999aa8d9013"],["page/5/index.html","ae2f3aa94c30b393bd164c5f1ef5e640"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","d6c36b080f2658fff1b1facf99d39887"],["tags/Github/index.html","1a3fdf1dbe9617b0f9d094851a8b7713"],["tags/Move/index.html","b6c55c525471ac243f78d7effca22c44"],["tags/OpenWRT/index.html","605d815b8e6e80861dec512f5fb19abc"],["tags/Plant-Simulation/index.html","87a24418c4ec655db003a495aa955c6f"],["tags/Wordpress/index.html","e8f5c7b5cd5c705e47d30875f0f3ed36"],["tags/buntu/index.html","ca3d1945780de911c485c6a8d73154ed"],["tags/cad/index.html","7dcf85b4a6e69e1b70af2cf34b68f181"],["tags/coding/index.html","bc1fd3af93a2992eb34988a7c314bd08"],["tags/h5ai/index.html","197352ca69bbff603e973a0f891a83df"],["tags/hexo/index.html","c729ba5e24472cebe68514dae7bba6fe"],["tags/index.html","4515bdda607e360b448592111766f873"],["tags/lychee/index.html","b223b213a71bf065af26e64751ecccff"],["tags/nas/index.html","7cb3df391620051d589b629277510139"],["tags/tpyecho/index.html","225fe4c85164a2f592b8c203ba31207c"],["tags/transferstation/index.html","56102c8f1aa24c2a26bc20a1e53eea66"],["tags/typecho/index.html","f68b289c6ca9132ac99136560bb718e7"],["tags/ubuntu/index.html","813214b67addcac78997bca981710d46"],["tags/写给宝贝的话/index.html","ffa85a43127cfc87303f24f279567998"],["tags/原创/index.html","8bf314678d0a2277e972437ab1764d66"],["tags/学习/index.html","a4e1ad73c676e0079bdcdbc330963f5d"],["tags/宝塔/index.html","f847feca63e4eed7336d4f7b16f3baf0"],["tags/生产模式/index.html","5f007b3c53cba1a38a77532994b9b4b2"],["tags/百度客户端/index.html","7cbbb1a00ba49e17292b152d98e1e5bf"],["tags/科学/index.html","759282dbbd263924ead525683bbf2db5"],["tags/统计/index.html","9fc4093b59dcb358d7bba963e28a46b9"],["tags/编译/index.html","2dd25d777b4aa5e2d8c3f0c0c5640f2b"]];
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







