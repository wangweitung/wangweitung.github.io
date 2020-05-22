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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","884ae69440adaf7c480c95f5839042ed"],["archives/2019/index.html","71f0ff7c1cba4573f0f4f3eaeb04e7fc"],["archives/2020/01/index.html","c519905d9b14f95468b31d4e4f828c1d"],["archives/2020/02/index.html","0a962febcb120b3ab5a2cf608bb9cad8"],["archives/2020/03/index.html","ffe2f8e2ec522eb81f49b85f0f28511c"],["archives/2020/05/index.html","9160ce33f43af02a66cd6b9a127cead5"],["archives/2020/05/page/2/index.html","46ce1a66ff00649c910c920353d78431"],["archives/2020/05/page/3/index.html","08245d5cf19fd1afead20520ab88de16"],["archives/2020/05/page/4/index.html","5ce30dd469ee3b74175d65184a3adf3e"],["archives/2020/index.html","e98bb24a4a291561a6b843c6957a82ce"],["archives/2020/page/2/index.html","c638a228451f9f0fff53ed207fa42f32"],["archives/2020/page/3/index.html","c4ad12936ef7e1d6f97477724491a8e0"],["archives/2020/page/4/index.html","a1a9407dd3718b468e0c003dc38eb258"],["archives/2020/page/5/index.html","b88fbfa225d862fe855c0cf851c6c3ad"],["archives/index.html","3ca8b72ec64ae6fd528b8472071de0d8"],["archives/page/2/index.html","186b8d282101a5d20d43ba219901f958"],["archives/page/3/index.html","e5f5f4fe89f2250259267c334560ee36"],["archives/page/4/index.html","42bc3c291039e6c6764a04a9509022aa"],["archives/page/5/index.html","f19029d966a9406cd4943e75e7ac5d23"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","6ad5c7f1c20e10f32a6ae1e67e77ce72"],["categories/Code/index.html","fc53243519d8bb8afda02ff73e221ed5"],["categories/Plant-Simulation/SimTalk/index.html","07f62a8fe66e6fa98330bc8b0fab727f"],["categories/Plant-Simulation/index.html","f3b6c4aac8535685ca0b516aeb55b87f"],["categories/Plant-Simulation/实体/index.html","845f302c1d7affc9b70b8b5f71937b51"],["categories/Plant-Simulation/常用代码/index.html","c6563a24a56c1d6d6619b4e1ea11b431"],["categories/Plant-Simulation/常规操作/index.html","dbc9fd4ef1e572d2fffb009a9604f299"],["categories/Plant-Simulation/模型/index.html","ed38b4367079e901148379dfbfaa2e51"],["categories/Plant-Simulation/背景/index.html","b37f7bc970f3a28b2d45b3e61a908f0d"],["categories/index.html","869b3f9791b65fa7a49239f7cc644130"],["categories/nas/index.html","a0615b7978fbd7420f897349d11ce339"],["categories/ubuntu/index.html","4198b2280a772a9cac26568d5f5c81fa"],["categories/ubuntu/ip/index.html","08d5ed16e82390f4ee7e37d510cf10a6"],["categories/ubuntu/下载/index.html","2dbe8c59e2a4ba42b3fca321c3a682f8"],["categories/ubuntu/命令/index.html","31cfc9dca8015eaeac30c9026be5aa17"],["categories/ubuntu/配置/index.html","123e08dfdc2c423f54d66770d5c3d13f"],["categories/博客/Wordpress/index.html","306750dfc6c7ef861476b3452d1b2c12"],["categories/博客/hexo/index.html","d893798238ea9f643d53de8e8b885bc3"],["categories/博客/index.html","9b0aef59f8f7cfff8f1c26135389a1f8"],["categories/博客/page/2/index.html","6fbdf7408f16884177d6415177cd596b"],["categories/博客/typecho/index.html","cd7860d14e541ed174465011a4a388b0"],["categories/博客/统计/index.html","012a4518d71f8aaaa10afcc21288c57f"],["categories/宝贝/BB/index.html","2e3ff9f43de79e70a4933c74fbd65626"],["categories/宝贝/MM/index.html","4ccf09bcca7bae188bf74d77dde4c8b8"],["categories/宝贝/index.html","4f2cf7bf656dfdcb3e91bd596c6473b3"],["categories/思考/index.html","3dd6988872b4024124056c9c69b8704e"],["categories/思考/职业规划/index.html","ab3002cb2c747f38b03c11e74b6e5ec9"],["categories/科学/OpenWRT/index.html","62bd090c77ca9c533e1150bc4fe08697"],["categories/科学/index.html","2245e96d16b61f9b10460a78a85688c2"],["categories/科学/手机/index.html","7716d3046d2403cf2e6c94b8973995be"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","fb86b5c93b8d3096d9f557e3381d6764"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","e093c75b4dd411f175b6ee6d0053ee54"],["page/3/index.html","9761125421a698438f54f56b3a56000d"],["page/4/index.html","2096f00a685d31d01149c37301b090da"],["page/5/index.html","61c6abd41e53c2bd059486ae72156e98"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","864d142e79d30eb21d626b51bafbfbd1"],["posts/2020/05/13/20/18.html","78f19f820ca2a2d9db394036d2b294b3"],["posts/2020/05/13/23/58.html","e21a680679299527021368222b4cca9d"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","98416fda936fd9c1cee8e2e7cfd1a1e5"],["tags/Github/index.html","43b771611e386bc0c76b5f8328438fd6"],["tags/Move/index.html","9f1b7243f569f64a5089ac204eb25c83"],["tags/OpenWRT/index.html","6e6cf6ca4c337c663febbd825ba38ee4"],["tags/Plant-Simulation/index.html","a6b45dcdf66ead90f3d5538f65905e00"],["tags/Wordpress/index.html","91208b986d9d9009a1a0ce1390d7f460"],["tags/buntu/index.html","78d0d048017be6dadb2261482bce5611"],["tags/cad/index.html","66f3d86e7734fd02720877c1df3ecd68"],["tags/coding/index.html","a7ec5406785ffba857ff16f810d42bf2"],["tags/h5ai/index.html","dd1a597862c031decec073b86c804450"],["tags/hexo/index.html","687f7fb982ad45262fdea65d1158cb7b"],["tags/index.html","ee3e45f58bb611c1573ae594fa6cf086"],["tags/lychee/index.html","4cb86c7424fe3a2d4cabcd553654a3e7"],["tags/nas/index.html","0e47a734d721c7625a030c097e861a65"],["tags/tpyecho/index.html","929d4fae23af73d872fe8c421ba453d6"],["tags/transferstation/index.html","ad6559e6a1e8bd35f4fdaec9bebfd059"],["tags/typecho/index.html","588ff037ae6ec211e5e3a2d42153cba1"],["tags/ubuntu/index.html","0c845a1e0843fe893538b34f9be8e5e8"],["tags/写给宝贝的话/index.html","75f7cb9bd9eb67d84a2ae84e93220cb6"],["tags/原创/index.html","af754c96f95ee4372a3c88ed1807de88"],["tags/学习/index.html","146923731ce52b347f3e17d1414a9a8e"],["tags/宝塔/index.html","2a93463c3b76f01da18ea40e0d8fa296"],["tags/生产模式/index.html","71aabc9168c0c68c000cd88bc126b9de"],["tags/百度客户端/index.html","537d705699004da2093f820a4732159d"],["tags/科学/index.html","c1ce3a891814e5b7ee10106c53c71a39"],["tags/统计/index.html","aba4740f188f9e3e0d8166e7ae64cfc2"],["tags/编译/index.html","4a91c76005961ff4d734b855d3ab372e"]];
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







