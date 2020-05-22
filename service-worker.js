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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","262bcf99ab1c3b062f5a7d67a04f0366"],["archives/2019/index.html","6cfadb3f381d624467592b0e1585fd3a"],["archives/2020/01/index.html","064eb665d31e408bbbe5aba06e45e168"],["archives/2020/02/index.html","0ab954511b5ec50d4a8f013cdc2adee0"],["archives/2020/03/index.html","9423691877139a6fd177b5969c903e6c"],["archives/2020/05/index.html","2407e4e87922e6aebcdde0bba80da276"],["archives/2020/05/page/2/index.html","2195da9ed260097243e40e5174698f97"],["archives/2020/05/page/3/index.html","00c0415425724ea0fdcfc3ac1ddb63fa"],["archives/2020/05/page/4/index.html","4ae0c877329a9c8c854b40b5039438a6"],["archives/2020/index.html","f69b553d092d4104b2a72b511fbf17fc"],["archives/2020/page/2/index.html","fa6f9a591487dbd6159f78255d63a247"],["archives/2020/page/3/index.html","739f2acfcad40630fd452c6de461d2eb"],["archives/2020/page/4/index.html","b757b65f9e4a1def48a179afc403ac76"],["archives/2020/page/5/index.html","34e426777cbe65309077f650b03e6c73"],["archives/index.html","b6bc795bd18590db31f0bc600b382314"],["archives/page/2/index.html","331cfb0bb5b70273f0a165bf9a556f4e"],["archives/page/3/index.html","0fc8047364af7f515adf7262ddc2ff4f"],["archives/page/4/index.html","9b114bc9e2e68200b110ca1e8cc1ee21"],["archives/page/5/index.html","5e31cbe0a6317b184ab7838ed165682d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","8309e7c3aa8803399f0660dbd31c0b38"],["categories/Code/index.html","2d06fdad789209d8bb33271384bb977c"],["categories/Plant-Simulation/SimTalk/index.html","e5e414679cb69b8451bde7a3dafa99a8"],["categories/Plant-Simulation/index.html","e499d94615f579d413b127cb68d6fb0b"],["categories/Plant-Simulation/实体/index.html","10b8a77afc8c5185090eb67d5ab51a4e"],["categories/Plant-Simulation/常用代码/index.html","fd5c7ca503ba9c91b76011674240c9f6"],["categories/Plant-Simulation/常规操作/index.html","85c594d77b479b7e48377843efb6adb0"],["categories/Plant-Simulation/模型/index.html","af6111b398194c146871ffeb5d691b08"],["categories/Plant-Simulation/背景/index.html","e869fe92de2a599b99b25922e5d123aa"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","6855f4e2f71d6af12f541fc9f3e1aa9a"],["categories/ubuntu/index.html","d5d3d68aa14ce555d873054cccfb20bc"],["categories/ubuntu/ip/index.html","cc7a7fbb6e6279e2cf71af76a14e4d85"],["categories/ubuntu/下载/index.html","8df02e89b709affc7c05199abc0f0fd8"],["categories/ubuntu/命令/index.html","c889d03455c632910e2d538d10c32d2e"],["categories/ubuntu/配置/index.html","f89416dc6d477aa463e1886cff6bb660"],["categories/博客/Wordpress/index.html","b5e7b2adc30702607bf2d3e5fe1a7c2f"],["categories/博客/hexo/index.html","79f782ab44308f931f172af45321833e"],["categories/博客/index.html","890e67a821f668c05a24f207996c645f"],["categories/博客/page/2/index.html","c00b329a08394ce4c9f029aceab0f600"],["categories/博客/typecho/index.html","cc6f82a2f35e3c09f2bd2abb4f2bd1b0"],["categories/博客/统计/index.html","c33dce97a89255e7d64f955620a54d28"],["categories/宝贝/BB/index.html","4decec9fe357ed98c627bc2af9327178"],["categories/宝贝/MM/index.html","9093972f2aa20784376060de3102da90"],["categories/宝贝/index.html","571104522b9695dd85b14d4abcce1783"],["categories/思考/index.html","cd74fd83e985a6524e003cca62541fa6"],["categories/思考/职业规划/index.html","c85d0e658faecd824dca8c81ce8b1b91"],["categories/科学/OpenWRT/index.html","dd559263f9c42a9ad8c7c5885fb0acae"],["categories/科学/index.html","39eef07cb3ccf2de80412e74cabff466"],["categories/科学/手机/index.html","3029dbcc4f4e94097e4844ab83b24d4e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c07014ba0dd1e6199552860f28d8d0c8"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","b0a4497eaec867ff0ff1446ca3dc823a"],["page/3/index.html","06e29bd39404711f16b9ad8b53c17679"],["page/4/index.html","44659c4ac2d31d643fba95df1ae35bac"],["page/5/index.html","2c9bfcfa5b8c0d4841f98fc15c535ac6"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","7fd4876d5acf1ad4f2f27c700b6e0499"],["tags/Github/index.html","34731dbbbf762532bee77556f5d071d7"],["tags/Move/index.html","caa96b0b239e036af675ed6295da01cc"],["tags/OpenWRT/index.html","b70a12f7f07944596d0872e638ae96e4"],["tags/Plant-Simulation/index.html","10670e5419ed0ba847ff36d73f78e120"],["tags/Wordpress/index.html","eee2cb211ec891034b10dbbe7815bf64"],["tags/buntu/index.html","59f9c7ee0106b0df2e37c88233b070b1"],["tags/cad/index.html","d0d827b258b5e56b476a93e542ed3935"],["tags/coding/index.html","e8d41c4de4c7633d6be60cd8455bcbd1"],["tags/h5ai/index.html","ccdc838e685efcd68a1d6e543b87ff13"],["tags/hexo/index.html","f181f606794b4be3cb6a1dd630a258f7"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","7c60b527b2aa82bbf40c3428cb604df2"],["tags/nas/index.html","4f682a24f9cfd760f9a06bde684bf7e6"],["tags/tpyecho/index.html","1e0ccd5b9b7149c3feaba25ee32a180f"],["tags/transferstation/index.html","8898de2755c31361dad591f55e40633e"],["tags/typecho/index.html","d0fc49399bded2b76a5b1ba332a59ca4"],["tags/ubuntu/index.html","e7c8ce7cefd36abae8124d58a997dcfe"],["tags/写给宝贝的话/index.html","fc54f92c8b84c08896cfd9394fc314f9"],["tags/原创/index.html","1c5373e2a1aa21b250d493a2bac7f432"],["tags/学习/index.html","40c562c0591ed6a7b9ae398f8ea8629f"],["tags/宝塔/index.html","000bd89d9b478c48d21b72d78ac0ed5c"],["tags/生产模式/index.html","e245146fc105f1f83fbf9db360f6be40"],["tags/百度客户端/index.html","ddb2f5ddae869c1921ca2c60ea0f4ff1"],["tags/科学/index.html","5b23f3c4f2375a6ef7a98ea00ea23857"],["tags/统计/index.html","8f013e057fdc943d3f980c960916b258"],["tags/编译/index.html","47e9da29eb6ca7d413bc74f46d8bc65d"]];
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







