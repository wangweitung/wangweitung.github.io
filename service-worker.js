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

var precacheConfig = [["about/index.html","76a47b3d24cdbb3b2a8180cf2f2b5d5c"],["archives/2019/12/index.html","6aa0f0228bed9e4534ab553d9d053b2f"],["archives/2019/index.html","d8179793d249e88ca980355cef4528e9"],["archives/2020/01/index.html","4852655af731239fbb8124f33e8f407c"],["archives/2020/02/index.html","487b96f5bdcbdf635e18c0602609e808"],["archives/2020/03/index.html","b3da016866cca8cace758c81e0016835"],["archives/2020/05/index.html","754348095def59c0092c6a05eb3edbbb"],["archives/2020/05/page/2/index.html","53901afdf308c9195f13a279a557b710"],["archives/2020/05/page/3/index.html","608f6b762797d3edb9c0deeb04693844"],["archives/2020/index.html","c0a8f7f3f09a909825508ab0f31db97b"],["archives/2020/page/2/index.html","64a3840ecc8ae314a4d56ee9a8679306"],["archives/2020/page/3/index.html","6c112cca5ac08b5b057805025766425c"],["archives/2020/page/4/index.html","16009d1fd1bbf0d25d7bed468c5b255d"],["archives/index.html","77013a74e1c3bd7a04c5c8e55fa94feb"],["archives/page/2/index.html","73a348fff586feb5ca763e4e5bcda309"],["archives/page/3/index.html","8d0b6c473d47bb5236bfbb3485d4cdb9"],["archives/page/4/index.html","a1a9df851ba09995963badbc74ce7443"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","0ffb755d8571a8ea530989ffa62c41a5"],["categories/Code/index.html","b12a47bcbab5ef4b5772e6937da6666e"],["categories/Plant-Simulation/SimTalk/index.html","9923e85004c9efab86cd08fea7b0398a"],["categories/Plant-Simulation/index.html","ca6dabd31e6a752dd10d05303e59b903"],["categories/Plant-Simulation/实体/index.html","cfccc9b0195bea1fe74039fadc7eee3c"],["categories/Plant-Simulation/常用代码/index.html","db3f33fd2df8afb23407b49aa963d0a7"],["categories/Plant-Simulation/常规操作/index.html","e2011dc6214f3c63aadef1a85ee1086b"],["categories/Plant-Simulation/模型/index.html","8e851ad8416028bd231a1c5acfb34c41"],["categories/Plant-Simulation/背景/index.html","3885525145d38c33fd6bd5675f74922e"],["categories/index.html","6b100b0c84a9ed817c3f2f533ebed9c7"],["categories/nas/index.html","922a8a3021d895bd6a18a78a20c097b7"],["categories/ubuntu/index.html","1dd5b7edd4a715928f48c853c4360725"],["categories/ubuntu/ip/index.html","96c832e634b242af5f4b66abc0a7bf78"],["categories/ubuntu/下载/index.html","fca8c165fcd2b7705ae41c6b52722039"],["categories/ubuntu/命令/index.html","f56e1914288f093f87eb254122097ebd"],["categories/ubuntu/配置/index.html","96fdf672f8f1dc8d59da551b7e306872"],["categories/博客/Wordpress/index.html","684bb895791153c8d1bacf6cf465b659"],["categories/博客/hexo/index.html","31ebad45f54d37efd31fc047657da217"],["categories/博客/index.html","b847fd6688ab6244396762d3722ed2ce"],["categories/博客/typecho/index.html","9f9a084894c5ea4f1843065b165e86cd"],["categories/博客/统计/index.html","eedfe881d35ad105e8faf2abb103596d"],["categories/宝贝/BB/index.html","7122c0042f48763b707357f4ccd4b691"],["categories/宝贝/MM/index.html","62b24d55fe94069f12b6951f417113a9"],["categories/宝贝/index.html","cda4b6a1810eb46f4492bd73f8a66ae8"],["categories/思考/index.html","b2a0e01f12745fa023ce47f681b580a7"],["categories/思考/职业规划/index.html","a6c08844c305db0595a2f6387dde03aa"],["categories/科学/OpenWRT/index.html","c47ac77ba7e809f256aa2e8fa66e662f"],["categories/科学/index.html","6da0a295729759136bbc2239a440af64"],["categories/科学/手机/index.html","5c960eb8c6a78df5e3fe5a98f1f18fec"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","9c16a29f04907dcb8f2d1809fcb744ea"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c90f4f7119170a9216c2fbb4adff8766"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","333822600ce3d1b423bf31ba8c55117f"],["movies/index.html","59b4411dcd31f719cde4d7a1f6b279fe"],["music/index.html","85afa95238373fbceeaf3a9ae5344449"],["page/2/index.html","234df847557a68e48619c0de1cec86fa"],["page/3/index.html","69ebbe78d88d3e4123aed81a0e1fbc91"],["page/4/index.html","d6abaa33a2c9715bc2011fc70b425015"],["posts/20191204A1.html","33d030ee1af4f48d7e1f099efe94861b"],["posts/20200115A1.html","f48fb271c3b8ce4326d8fce3934a0160"],["posts/20200116A1.html","f91e268da190e849f25c1b4ec37d0400"],["posts/20200118A1.html","cf316af42519094d71dbc109882b24f5"],["posts/20200119A1.html","227e150af3bc486278f81754e25dc22a"],["posts/20200119A2.html","e2724f1cbd06a13a7bcd826c8dfdda82"],["posts/20200123A1.html","16f47e6557623382ba161566ee56c3dc"],["posts/20200204A1.html","bbbabc1f52d626590e7df99049dd1ad3"],["posts/20200312A1.html","eb610677908a53c34883318ac90285bf"],["posts/20200320A1.html","3238b35cddfb6062ff058c133c0800a1"],["posts/20200322A1.html","9e555b3dfb558007732d5bf53633e296"],["posts/20200503A1.html","0e7fa7b5465793b46f4ae2987ac0d639"],["posts/20200504A1.html","d58868277eb6bf7a7908e9db5b1384b4"],["posts/20200504A2.html","2457bf3d3a521e495eee2ec9a048d1db"],["posts/20200504A3.html","114734cd010dc42385a96cb6f88f489a"],["posts/20200504A4.html","f73eafa3b92f33174ad139d1170805e1"],["posts/20200504A5.html","c39919efffe510f67b4370ba8a93e7ad"],["posts/20200504A6.html","1b2377d376d24e2b3b791d1fa1f099d8"],["posts/20200504A7.html","416aede8735988baee44342738569919"],["posts/20200504A8.html","7ebdc2a2b69b4bc385ae539e72399251"],["posts/20200505A1.html","0478210a24e4a5dec99f0c296848a941"],["posts/20200505A2.html","7bd6caaab82dcb4f2cbf6ce9fbc3f2f1"],["posts/20200505A3.html","b88371202e31dad3dfea83d8b7c17b7d"],["posts/20200507A1.html","935232e5fce49bb6462478d500e79355"],["posts/20200509A1.html","34935c3942a1926cfca1b036fe4c4e64"],["posts/20200510A1.html","03fd06bedac0466c6df62104f00ebcae"],["posts/20200510A2.html","7ef8ea5e3daded5d93dab4d36cdc867b"],["posts/20200512A1.html","3a350c03410e7fa8502f99ba3839eeb0"],["posts/20200512A2.html","142d72c3bd61f0531845fef526e591b9"],["posts/20200513A1.html","6412659cf40ee94ba34e29399b2457bb"],["posts/20200513A2.html","debfc85fac68fc44a59330dae47e9b29"],["posts/20200514A1.html","c710d0abc088616afe1c4241021d608b"],["posts/20200514A2.html","389b7eb2d29945f3e18588c5670761cb"],["posts/20200514A3.html","e96a14a27392d0cf03b3f25bc870e1d0"],["posts/20200514A4.html","4367a688e8782400e50c45a0ef3ea5e2"],["posts/20200514A5.html","90587cfe9bde1b5c9f9020f9c527062d"],["posts/20200514A6.html","63cd1287f9ee54f9b1e749d1a8ceb0c4"],["posts/20200514A7.html","b8f204665ff6bb86f9641b5c70a6e733"],["tags/AGV/index.html","c8fb2bba3c055d0844bec1de98f5a300"],["tags/Github/index.html","e05243aef9f0e99c50e5fdbce32d3296"],["tags/Move/index.html","b9d5e35241468f6b35b3a4a06de2069c"],["tags/OpenWRT/index.html","f0c3edabcf522b3c0918b8be59de9f34"],["tags/Plant-Simulation/index.html","5c574e3db05a4cc03ce56ff47aa4edfc"],["tags/Wordpress/index.html","71a37bea2e1247076319906eed202e5a"],["tags/cad/index.html","c44c95df55c00a96dcec533c190380b3"],["tags/coding/index.html","d9a1772ab54cf1f5cdba8132941d887b"],["tags/h5ai/index.html","5686945369c21cdcd913b5c729824efe"],["tags/hexo/index.html","e4fec08465fb236175f6e9e32744019a"],["tags/index.html","6780d9216264a2ccf20fa9a34bc0ed2b"],["tags/nas/index.html","5554fe17025e222ead02c3a38b288b66"],["tags/tpyecho/index.html","f42e6c1edffc929d57ae77b7ca456436"],["tags/transferstation/index.html","ba4e950f31e8eef00b671df3ed063bea"],["tags/typecho/index.html","12bbb8e8d679f25bf364224d7d523489"],["tags/ubuntu/index.html","8ab62ca983ceed687937f2f7ba5b1245"],["tags/写给宝贝的话/index.html","a00906844c73ed6a780373750ed850be"],["tags/原创/index.html","dd6e127eff57183c0e3e5697414296ee"],["tags/学习/index.html","d6fe0c5c3c1370c8750ea6f65226379b"],["tags/宝塔/index.html","70cf3528cff82f73c13d07564ba11976"],["tags/生产模式/index.html","db07023b2ff930e61bcb97689239101c"],["tags/百度客户端/index.html","b5f899a818c104f40a1859c8211b3d00"],["tags/科学/index.html","943054c32d5c59f7d0521100f4e8b2cd"],["tags/统计/index.html","68c994cfa454d67fb9f39bb53500160e"],["tags/编译/index.html","7220a81ea86435711b82b200beb4fca4"]];
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







