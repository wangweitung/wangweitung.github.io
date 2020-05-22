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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","4d6d2cf6229e6d4a75de836ada6e9c1a"],["archives/2019/index.html","f7b8b90fd1aa078c81d0850f24e877eb"],["archives/2020/01/index.html","2339fab8ac137cf8987e66b62e1b8f8c"],["archives/2020/02/index.html","3c1112d0fe9a777175bcb75184c279d6"],["archives/2020/03/index.html","bbf3022bde3731b0728c78a8ed59bc04"],["archives/2020/05/index.html","d1c4abf0d03f52382c456148ff90b984"],["archives/2020/05/page/2/index.html","6a211369468ae2d9ef004779a092ad8b"],["archives/2020/05/page/3/index.html","194ddd0f4eebb651f5aa3d5cba5fc792"],["archives/2020/05/page/4/index.html","428af4b009836b64e9b89496bf0e6a1e"],["archives/2020/index.html","2bd58377412508f5d5edd01852715585"],["archives/2020/page/2/index.html","0d94757c9e9dc2ab450838937d91ce0b"],["archives/2020/page/3/index.html","12dbc4f13cb26f08a2031197644ac5d7"],["archives/2020/page/4/index.html","8f6dc0c92b195c836e0ed7fac4f313cf"],["archives/2020/page/5/index.html","abb39dd774a166af8f51e5e6f6b142b1"],["archives/index.html","91b4fe4e86979a54f6fa9fbcdf5d6257"],["archives/page/2/index.html","9b96fe6751ebea5e94e955ec538090bc"],["archives/page/3/index.html","015bac0d819d044b237a7070d3a2b25b"],["archives/page/4/index.html","d74ea2a5adf6c945246ede8381048aca"],["archives/page/5/index.html","4486c2ad53327bb47c20a4eb37366a21"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","fddd6c73a2c423f9f07d081b3e554240"],["categories/Code/index.html","adbbb4266fc9a9290a5efa20712703f9"],["categories/Plant-Simulation/SimTalk/index.html","3aff86a722518f5d0b7fe86172d9778a"],["categories/Plant-Simulation/index.html","e379df2d5681539aeac1cf4f8ceb83e8"],["categories/Plant-Simulation/实体/index.html","990c7cd01b0c432c45e2470cbd76d7b4"],["categories/Plant-Simulation/常用代码/index.html","73fb706a74cc41c927a0abc5b6297dab"],["categories/Plant-Simulation/常规操作/index.html","13844fc175bb8d51be7223e0d7447588"],["categories/Plant-Simulation/模型/index.html","284906ce13bfecd4e042fbc95a5f0e30"],["categories/Plant-Simulation/背景/index.html","2eed058282c99b027e6e8830445b5ecc"],["categories/index.html","08afedda9664dff1fb7234c92884a9fb"],["categories/nas/index.html","1ba634bcf687aa6fdd3e16dd1f402c66"],["categories/ubuntu/index.html","10312de5e3985832c32480737bfa1215"],["categories/ubuntu/ip/index.html","0d4657bebfc2dde9b6f2af410906f571"],["categories/ubuntu/下载/index.html","c71e8e155dce23b1f2cdb7455df34d89"],["categories/ubuntu/命令/index.html","72f84f671fc3e88091d63a3da13b0c45"],["categories/ubuntu/配置/index.html","9e75675a981868d158fbce2fc858b7f7"],["categories/博客/Wordpress/index.html","7a3cc94f1769a1f27b1f5702fc9f8d50"],["categories/博客/hexo/index.html","9529dd75d424cbd7410f0d03af855c45"],["categories/博客/index.html","85b767bc87485a8cc71143f91647a079"],["categories/博客/page/2/index.html","bada15ee92a36806ad0a22e46658b76c"],["categories/博客/typecho/index.html","344f553b6eea4b494415245d8cc6f8b1"],["categories/博客/统计/index.html","9d3c1b825df86b2909ea3fb3815f5d8c"],["categories/宝贝/BB/index.html","c52196d5ba6e7f73b990c3b6b7190c3a"],["categories/宝贝/MM/index.html","4b52ebc98d2727bef1faef533eb97cdd"],["categories/宝贝/index.html","ec52bc68c02e76c933db961d97722c2e"],["categories/思考/index.html","d9df886866bc09040fa2f31c7a0a493f"],["categories/思考/职业规划/index.html","fd90aa77ae2ec0be53f46c91744054ec"],["categories/科学/OpenWRT/index.html","6a11dbd3d8b02f1fe4b25bfb95bd79f3"],["categories/科学/index.html","84b7a2f4d1d0581a80e99c9676872745"],["categories/科学/手机/index.html","a172d5528ef7ca2a7a3b8afc330bebbc"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","72c3da5178d5c8075939f7af29fb4446"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","af8f01dc79acdeec2ba35c6bfeb27d08"],["page/3/index.html","d6d87e719b0626cecaccb30470cf46fd"],["page/4/index.html","9924721a149076cd9c7187103322b21b"],["page/5/index.html","92df4052016fff883d1b7adbc9b7eb12"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","e3b95943b5c393b767cce0f7cc04dc01"],["tags/Github/index.html","761e3a396c77285d5958d8255409477f"],["tags/Move/index.html","eb3eb140ebe6ac18d88f4bd40628d575"],["tags/OpenWRT/index.html","47066a26dcf7f82e7261c2827a2c5b15"],["tags/Plant-Simulation/index.html","baa3e1a2cb3f494106b5f6b3f1877a0e"],["tags/Wordpress/index.html","f5e3dfc4fd2ad99c0f6a36114f9c8af1"],["tags/buntu/index.html","193454708c9a04395e6b0ab14a45a389"],["tags/cad/index.html","2627cad624b61e30cb6e139579fa36ab"],["tags/coding/index.html","a379f14c89959f4b1fed131016ef4e5a"],["tags/h5ai/index.html","258fa00c6dc3c9b5dc63299126483f1a"],["tags/hexo/index.html","703bf7a581254c6ad89d2467d72959c4"],["tags/index.html","591e46e692ed716a6a844588a0761dd1"],["tags/lychee/index.html","56225925e1c2c4ce1519cd730b17fa52"],["tags/nas/index.html","acec650cb9117c35ec84149416d515e2"],["tags/tpyecho/index.html","d8b0e760c2efbfe558ba09b103997e65"],["tags/transferstation/index.html","2d2f53e1caf1f997c953f3250f0eb0d3"],["tags/typecho/index.html","55da3ba7ad0ff0bc273d9113b3fbc46a"],["tags/ubuntu/index.html","c2c6a45e7e02f13d1e51e8bfa2d7cc89"],["tags/写给宝贝的话/index.html","a4675f442fff6951da582992c0ac697d"],["tags/原创/index.html","570e49e00f92becc082e0913e970249b"],["tags/学习/index.html","1c419e803fe0f6f43bb56b500986298e"],["tags/宝塔/index.html","bde776b4a2491bb887973d8df156ba28"],["tags/生产模式/index.html","62901add354a3a583555ba06778a944f"],["tags/百度客户端/index.html","2059642a20d464a70d4625df93066c9a"],["tags/科学/index.html","9d7412e3dd27641ae463efab02fb3863"],["tags/统计/index.html","35c3d47cba82cf4291fa1f4215a5e79e"],["tags/编译/index.html","db388b57aece3319018dbce123c3c086"]];
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







