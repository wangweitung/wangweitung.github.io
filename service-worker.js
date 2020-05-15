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

var precacheConfig = [["about/index.html","181cea1988a761b8945552f1eae699b4"],["archives/2019/12/index.html","01fa9c149550ff6fb9a559c069e8915f"],["archives/2019/index.html","4677f25ae8eda66cb2df72561cb941e8"],["archives/2020/01/index.html","07d535338d62be44fc44eb60606fdaad"],["archives/2020/02/index.html","18dfb93a5e8e11a5239bac8b9e9877f6"],["archives/2020/03/index.html","279dc1b7b1e8abad693487b20571ea5e"],["archives/2020/05/index.html","51553f7e5c898ec55cd03eafd31cc275"],["archives/2020/05/page/2/index.html","13e35c1e8bc1bc52a2fbd18bcb4b86f3"],["archives/2020/05/page/3/index.html","aa1378aad9b14d1337935cd6bb630aa0"],["archives/2020/index.html","ae38f6083782f0d337813a4cb52cfe49"],["archives/2020/page/2/index.html","086ca48388c7c32625a683f18e0190f8"],["archives/2020/page/3/index.html","002e46cfb3efc943248617322f4d4368"],["archives/2020/page/4/index.html","82829995c3c750605e925b6462588048"],["archives/index.html","0286163a395c26ac655cffabbb8bbb4f"],["archives/page/2/index.html","5d596d80bd3816c53b13c88dd51738f1"],["archives/page/3/index.html","216aa076a18363a4faa18ba6764f5bd4"],["archives/page/4/index.html","e2f1596112e94802b389ebca6217a8b3"],["archives/page/5/index.html","550de16cdfd7c686c58c96357e7658bf"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","d6c1078f2015d4dafb661d99ea4193ac"],["categories/Code/index.html","db8b27a788327f30b07b528cf81411a9"],["categories/Plant-Simulation/SimTalk/index.html","dc04cf8f690bbb5825407112296938a0"],["categories/Plant-Simulation/index.html","935fda4e263c96de7a1e16171db43e61"],["categories/Plant-Simulation/实体/index.html","04197c47d7ac75d1b69327ea64e269f5"],["categories/Plant-Simulation/常用代码/index.html","3b9b19a1d8dcba80d8868026a8965797"],["categories/Plant-Simulation/常规操作/index.html","34ce221592a6135b81b677b69926a608"],["categories/Plant-Simulation/模型/index.html","7901be0037f0a4680e2de340edb97b67"],["categories/Plant-Simulation/背景/index.html","6b2e59bb9512d9f319ce25c1205aab77"],["categories/index.html","9140de24b58e06ea49aa0b8e50d6653b"],["categories/nas/index.html","cdf18462cd80c651e045a5b506cc118c"],["categories/ubuntu/index.html","a4ebbce61436f115701daf757593e903"],["categories/ubuntu/ip/index.html","821a7bba32fa58b00b130b47be923f66"],["categories/ubuntu/下载/index.html","c5d87bf931f669f00fab9b3c1a3400c0"],["categories/ubuntu/命令/index.html","d5b622cc06759ea4fbf15edc0768501a"],["categories/ubuntu/配置/index.html","61263b7f8d34fbde86cd4a7996d7f971"],["categories/仿真/index.html","91b99bab0217902cef106325d534bd81"],["categories/博客/Wordpress/index.html","c474fdd0803f22b08f7d6d4009bf2c13"],["categories/博客/hexo/index.html","a7fa2ff01618419e736af9e759b571ad"],["categories/博客/index.html","1066de904ea07dac505735bd6d930df8"],["categories/博客/page/2/index.html","b8a3f0b8255a12d436033c2cbf2a6977"],["categories/博客/typecho/index.html","c90a8dfb18f420a5292bbe0529adbaaa"],["categories/博客/统计/index.html","195fbcd5ed64816233e0e23d2bb611be"],["categories/宝贝/BB/index.html","b89804b89e34a2efdc38ae4367fd98ac"],["categories/宝贝/MM/index.html","021723bf770b20b969371ea36a1a22a8"],["categories/宝贝/index.html","21f032ed85574cecae7a2fc0b71150a6"],["categories/思考/index.html","38a1171f064ceed183f1a66e3a70be05"],["categories/思考/职业规划/index.html","ef3c1fde9a193aa1ea2e0d43558687b8"],["categories/科学/OpenWRT/index.html","b31b454409537b99d3d5061a2956748e"],["categories/科学/index.html","77341dffcd8758d1c0b5cf51eefeaed7"],["categories/科学/手机/index.html","e1a00b24367cc54e9f6ad5f3fd266bbf"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","fd5deab6db0c7cd840014c1d6032e77a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","56ae1a9fd561c042bf1b96c4536ea5cd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","7b2b3da07676d53d84ad417000f6823b"],["movies/index.html","2e07d074b49368096395aeee457721e6"],["music/index.html","fedf98ae7de21776155901a2b56753ea"],["page/2/index.html","0f52ad3e461e10b22c69a6ad908face8"],["page/3/index.html","849f5c1750fc91555064f17fe9ac5cf4"],["page/4/index.html","597965b77d790ac0752b9f7cda93820a"],["page/5/index.html","33cc730db14e97fb93ed625a3aa03fac"],["posts/2019/12/04/00/35.html","85e7bf0c219a6aa51b906a2c4b5054f5"],["posts/2020/01/15/20/18.html","5e4f76f8a2c4311e27448c5454d47103"],["posts/2020/01/16/22/18.html","4f788be2b5cb7c5f211217450d3bcbd6"],["posts/2020/01/18/22/18.html","e3345dba1804f62d0819ed550fd0ca59"],["posts/2020/01/19/08/29.html","0613c7df77a82de87ba4d574f79f5ce5"],["posts/2020/01/19/22/18.html","b3fc5fc70585585bebf89205a9ac0788"],["posts/2020/01/23/22/16.html","8ce76e8784706822fc2654175b0722a4"],["posts/2020/02/04/20/18.html","61c4363d168b115a99f70d70cf0b8723"],["posts/2020/03/12/00/20.html","9fbf3ea3b4f70de0d222cbb8703feea9"],["posts/2020/03/20/22/12.html","ca9cace6a5f5a13e169131539a2aa00b"],["posts/2020/03/22/18/24.html","7a3f4d84defffc319a5124fae83326eb"],["posts/2020/05/03/22/12.html","7494acb10d304957e48639e2b43809fe"],["posts/2020/05/04/00/05.html","31f423e38f0e9ef285f28f7716e07a5b"],["posts/2020/05/04/00/15.html","9f2c3b8a146ead267d80c35f07a380e8"],["posts/2020/05/04/14/58.html","46dcec9e64f5b0a2aec2e125bd198f98"],["posts/2020/05/04/17/01.html","971dcc68e07ce6a5399e570ca52f9b02"],["posts/2020/05/04/17/19.html","f398851e7bf1483de58819a247bc7cbd"],["posts/2020/05/04/18/18.html","899cd1fa5057dab77bb8418b0bb8aa53"],["posts/2020/05/04/18/24.html","18ec0bf48a6afd0144c26e63d5979f11"],["posts/2020/05/05/11/12.html","87e2f3000384c7004d63562ef65a1232"],["posts/2020/05/05/13/20.html","11317d0e4c038addd075a5eb97995297"],["posts/2020/05/05/15/20.html","1d2a10e8730dee5eb984d6d54b5390f1"],["posts/2020/05/07/21/21.html","4dd110221a6e4dfef9507d7063849794"],["posts/2020/05/09/12/20.html","a6c5d8b2156da06e536d6a07046709a2"],["posts/2020/05/10/18/18.html","e5e0231c4923bf2a59b594c0a0ca05d9"],["posts/2020/05/10/22/18.html","1584de49481ea14ffa3672414a07d042"],["posts/2020/05/12/20/18.html","063090176d2ed0fb9a3def40ec5944f9"],["posts/2020/05/12/21/18.html","3c1996577b25ad5ac1e3d8e08d30359a"],["posts/2020/05/13/20/18.html","384bb40b2e56eadad7306ed107598afa"],["posts/2020/05/13/23/58.html","a084c9ad3f16132178aff247181903e8"],["posts/2020/05/14/11/18.html","32292d97fcd6aeef2ecefcde2a857b6e"],["posts/2020/05/14/12/18.html","570e79cf7b3c48de3ad394f6f1f58546"],["posts/2020/05/14/20/18.html","98b294c8f88fa5aa3c0aaeacb70f7cbd"],["posts/2020/05/14/20/58.html","10fe4198cf7f7e496181a77f4acf44c5"],["posts/2020/05/14/21/58.html","f5c710e5960515d97cfa14f026156eb4"],["posts/2020/05/14/22/58.html","ac58ade20426efd2bea20416631d405c"],["posts/2020/05/14/23/46.html","77e6cdea98ca75f3da418032b92a2c3f"],["posts/2020/05/14/23/56.html","b9e65d9a4ce6134e49921d7e60ad2aa6"],["posts/2020/05/14/23/58.html","dc123a944011699a560c0778498e30f1"],["posts/2020/05/14/23/59.html","e41ce75c37a99ac288194665512e7289"],["tags/AGV/index.html","18303dda061017a8364449222f682240"],["tags/Github/index.html","6eac0b2efcd7577caeeb95c9c5862864"],["tags/Move/index.html","bb94289298f01eba6f651ee8251cd84e"],["tags/OpenWRT/index.html","14075943c635f02ee4b526b3efab5726"],["tags/Plant-Simulation/index.html","84a5d3a3a11601b807959a17964e2448"],["tags/Wordpress/index.html","27c30566ffdc5289164973603a155c6f"],["tags/cad/index.html","28a85c309692e1990118e01cd2ad16a1"],["tags/coding/index.html","a48792acfd09ffa2607fb2565ec8e660"],["tags/h5ai/index.html","e2501d51034f2d943d9fdb6a2f2933d6"],["tags/hexo/index.html","ca203324dad11a62336e411b362d9216"],["tags/index.html","300145ff5a5df0959d3127deee19e9b4"],["tags/nas/index.html","102873298a10f10882ef4e10a1ee1e59"],["tags/tpyecho/index.html","ace1cc5e01fd466ddb1dc434fd3f4b3e"],["tags/transferstation/index.html","50dd2dfe4a7c1033ab25ce1a94fe86d4"],["tags/typecho/index.html","883533c968899d9563769acd4e4cd06d"],["tags/ubuntu/index.html","ee1534c964e19e18bc9aee049c06bb60"],["tags/仿真/index.html","92f3f43915e3eb7d9000cf7f09a8e043"],["tags/写给宝贝的话/index.html","6a31175483a7aa701151078b354f1677"],["tags/原创/index.html","f09e097ee5f3402afd0360e99c10f99f"],["tags/学习/index.html","4c48fbf9b54dadfb43b78943daeb5d2a"],["tags/宝塔/index.html","543a58e8aa433ad4fc29f8589e3156c1"],["tags/生产模式/index.html","87832779a37ccffee266809772f052c8"],["tags/百度客户端/index.html","43d957a2988fb8826b0c8db48a8aa1f0"],["tags/科学/index.html","90362dfc4578292d5658200f71f30a3c"],["tags/统计/index.html","a6d1aef8890d3af6beabc641a84d2d10"],["tags/编译/index.html","5aca1cedfd7ea11cb1947a007f062893"]];
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







