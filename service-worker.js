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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","b97782fa92217bad64bfd69b263e25b9"],["archives/2019/index.html","25fad1ad96bd90d90b9157f8f1d1f219"],["archives/2020/01/index.html","7c850e392535a40243c380a12ca4b9b0"],["archives/2020/02/index.html","2ee812b0f20a5872ab2440c91b1e5449"],["archives/2020/03/index.html","f8577d2096dd194218e94860e17e6445"],["archives/2020/05/index.html","df3c3ac50cf08ce92962cb4879679497"],["archives/2020/05/page/2/index.html","baf939f99f5f044907b8e193c2a3d682"],["archives/2020/05/page/3/index.html","f33b75ac770e6c4518cc86359dc690b1"],["archives/2020/05/page/4/index.html","e721bfbf549a282416df0817f10318a6"],["archives/2020/index.html","406bc20e8922cd82222c3c667b157d55"],["archives/2020/page/2/index.html","8a858cbbff3475824fcfa58667711047"],["archives/2020/page/3/index.html","316ca4843ef924e3ff723ad397347902"],["archives/2020/page/4/index.html","a3705afda1140de71605cfb7acb922e5"],["archives/2020/page/5/index.html","3eb3ec8d359f316b2640f3513a2a757a"],["archives/index.html","e699676cc8bc7836beebf93bf7f00a67"],["archives/page/2/index.html","608a06af975558917faf00ed550884f3"],["archives/page/3/index.html","95ad9d851d46150594a7a69a8bfaf77e"],["archives/page/4/index.html","bfab40d4177d8a37fbe7710afe5e7943"],["archives/page/5/index.html","a934e16b0615e7fdd484ac47f27af1d9"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","045897cf8e541ac9968c3c923b551694"],["categories/Code/index.html","399cec96454f9e1a3e421edb40fa925a"],["categories/Plant-Simulation/SimTalk/index.html","54f3e43118891a80d58eafa8651a390e"],["categories/Plant-Simulation/index.html","8d3731bf85405edcd24d03d9fd89bbb9"],["categories/Plant-Simulation/实体/index.html","9a01309d9e29c770794c2d270cb8a5ab"],["categories/Plant-Simulation/常用代码/index.html","3623619af69a1543a83faa407fd07245"],["categories/Plant-Simulation/常规操作/index.html","abdec7211507b32196f32adde29ecdf5"],["categories/Plant-Simulation/模型/index.html","29a093dab08953b24091eccef486738e"],["categories/Plant-Simulation/背景/index.html","04a23899c6ff0a9a6e66147bed63b700"],["categories/index.html","08afedda9664dff1fb7234c92884a9fb"],["categories/nas/index.html","42b5c4e6bb2497d0c1987379dad7f58c"],["categories/ubuntu/index.html","c5064c80a99bd4f13511e5febec9d79f"],["categories/ubuntu/ip/index.html","200d6bd62c412da9c34f7de9d60526ad"],["categories/ubuntu/下载/index.html","8b2813f4dc12fce983c6bbe822b6280b"],["categories/ubuntu/命令/index.html","3e391013bf9f0ea6f065a1affc35571b"],["categories/ubuntu/配置/index.html","6959c6785ae86c2ff16c93cc20c20426"],["categories/博客/Wordpress/index.html","866cc6fda659e57fb60e6ab3a19fb0ad"],["categories/博客/hexo/index.html","cd304ef8be6f700e1bdbb44cf420318d"],["categories/博客/index.html","647557be7b5261afda2d639e7e72c565"],["categories/博客/page/2/index.html","377fb59b0ed10dfaea7a8968d8b107be"],["categories/博客/typecho/index.html","5220b098125d7f718b7729d23109c7cc"],["categories/博客/统计/index.html","dc505a8521b1e6534bbaeaaf666eaec4"],["categories/宝贝/BB/index.html","c690ace45b8f9e455e5798fd6f4b9d6f"],["categories/宝贝/MM/index.html","65733410f8edef07c7df95a2adc436a3"],["categories/宝贝/index.html","1b3607e0d6c2aa1b23e7f18b68b23c82"],["categories/思考/index.html","ae582b84751f1864aabf8671acb2b53f"],["categories/思考/职业规划/index.html","c748a7b454752c01c7dae33d0f8c8112"],["categories/科学/OpenWRT/index.html","1241e32de5270a8f21e0d5e8d195de65"],["categories/科学/index.html","7d44a6b45397fe50c2a79ed3bf8cf0b0"],["categories/科学/手机/index.html","ee82ace8bb5bbba4e159d929755cf90b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0be51da75d31cb4e91b0d999d0f28668"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","b1cf51ee4cdb8b5989b8909a2dff43d1"],["page/3/index.html","4382b5c91e3341ec8d72fd69335f2416"],["page/4/index.html","14fc50d804855368fc4e6685bfdc7bd8"],["page/5/index.html","057d86fff4212030a346e7bcd6afdda6"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","9b603aec8ff7b19dcdbcd3a80368be29"],["tags/Github/index.html","a808a81a95681e5179c5e1ebf33cc00a"],["tags/Move/index.html","86d4f3982e76d5e3ba6324af19c460da"],["tags/OpenWRT/index.html","1c41587d7c7d52b56415542ee0588482"],["tags/Plant-Simulation/index.html","484c36e3f903d414992731ca1ae29849"],["tags/Wordpress/index.html","35fd63a70d3fa2991c1892cf4828cb21"],["tags/buntu/index.html","6fc8d4cf7c441c4ca0380f00f96f4d76"],["tags/cad/index.html","96dd03d290d4912f5584ad254dea4410"],["tags/coding/index.html","ff632d5b6106cfb946d92067fb0cc8b1"],["tags/h5ai/index.html","18fa1936685343e1601f4210ebff8026"],["tags/hexo/index.html","f54e8672454c9d2bab3fec6982e987a5"],["tags/index.html","cd1b500607b44a42b16ac022f8d39b69"],["tags/lychee/index.html","f40b2b47ea0520636b5bb3796e9dc386"],["tags/nas/index.html","b2b8f6b94f57a0a76d6cf2180794d56b"],["tags/tpyecho/index.html","02bcbca73284f5e89b635cdb85f9024d"],["tags/transferstation/index.html","2d838dacc39f84865f457595bd347821"],["tags/typecho/index.html","e768b70dc6c9f90f2938791ffbe749aa"],["tags/ubuntu/index.html","fe21e4ee899f0f8abf16026aca22bbfa"],["tags/写给宝贝的话/index.html","ff30d4712c45363748d2334f12d4738e"],["tags/原创/index.html","296288ca4075a064767832e20f1a055a"],["tags/学习/index.html","aee8447d17e61875457b4606cbc7203c"],["tags/宝塔/index.html","8ceeb7d1374f9142716b35527a506d76"],["tags/生产模式/index.html","432e165326b45a48ff449729a62b30a3"],["tags/百度客户端/index.html","d1a4dd3acfdf998f828a2e8c5ae0a89e"],["tags/科学/index.html","d5d75e5cb7ae774d9668174ec4986ce0"],["tags/统计/index.html","4dfdfdaf49a6e3de3b6b95f1e269e4d6"],["tags/编译/index.html","d4c5856571600a6b5821c659dab821a7"]];
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







