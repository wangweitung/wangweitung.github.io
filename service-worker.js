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

var precacheConfig = [["about/index.html","0623bdc7fc2b4759eb469bf3976dfa81"],["archives/2019/12/index.html","8a7032b75de4968e0171403cbf3ccc5a"],["archives/2019/index.html","66752475be44f1a1c2df1ad9f9c7d446"],["archives/2020/01/index.html","5bfa9cf0fbb28e763c679a3906a2939b"],["archives/2020/02/index.html","8a9aa83a859a24c8ccc6a0666c7a9fff"],["archives/2020/03/index.html","89108e8b629057697cb5e43c4be2259d"],["archives/2020/05/index.html","01c005e2b1c4ff67f0d4af1030dc3f85"],["archives/2020/05/page/2/index.html","8d41990a6f34424b4b6cd56905a238d6"],["archives/2020/05/page/3/index.html","ec55bfe105e83f363f547c05bbcbdfbb"],["archives/2020/05/page/4/index.html","1f8ea6ef54461569608c22cdf645df6e"],["archives/2020/index.html","82bb631a48fb9542c03741f22ba3e607"],["archives/2020/page/2/index.html","0ae71ebec191971c3d410b54195af8c9"],["archives/2020/page/3/index.html","68d7016477a014f87fba9c9a60f1231b"],["archives/2020/page/4/index.html","de16cd9289177a13ec15865a3108c501"],["archives/2020/page/5/index.html","dbadd395fd737fd99ed094c7e0f0f9e2"],["archives/index.html","a299d03ef3ece1da1fa7c26712b2bdf0"],["archives/page/2/index.html","a55aaa5c2337308e50f7e702c4bf8274"],["archives/page/3/index.html","348ce8dc9aa26965f706adab9464e039"],["archives/page/4/index.html","ae62fce0c1ed0eefab2d117d8bf697bf"],["archives/page/5/index.html","861beb6c074bda2bd1c5decc0046dcd6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","9fb6222f01cf6244b959c60b451567b2"],["categories/Code/index.html","eaf91e6f676f5e12536da01c8bb4d4a0"],["categories/Plant-Simulation/SimTalk/index.html","b47fb19ebc073914efc9c25515505e0b"],["categories/Plant-Simulation/index.html","df7c9c6fa23d89f86fc4f1b017fefef9"],["categories/Plant-Simulation/实体/index.html","36edd756f0715f79c944520d5e5f878f"],["categories/Plant-Simulation/常用代码/index.html","1583491655d8b189003e6d0a6d43bee5"],["categories/Plant-Simulation/常规操作/index.html","845a7dd2467083c6c18b05b080c8723c"],["categories/Plant-Simulation/模型/index.html","0963cca76a8e504beb8c28cad4068148"],["categories/Plant-Simulation/背景/index.html","d5fad0a02b6b0b99ef4061dc2aba29e3"],["categories/index.html","eec321fb41c00df1bb018bcdd5113990"],["categories/nas/index.html","b6dab6f7da95d86d711c16834bfb92e4"],["categories/ubuntu/index.html","b05cc5405bea421cbac85d39142a9c52"],["categories/ubuntu/ip/index.html","73b3414178b00735365780acfd8e8fbc"],["categories/ubuntu/下载/index.html","c0b7542216104185615ea739b31082fb"],["categories/ubuntu/命令/index.html","1bd26287321132bfe90f0c668695494d"],["categories/ubuntu/配置/index.html","1dd6eb535a1091332d485b35f76fc3e0"],["categories/博客/Wordpress/index.html","18c989a30f70d766c363ea0a44bd2d51"],["categories/博客/hexo/index.html","2ecb63f5787a589be172430413d19562"],["categories/博客/index.html","aefd08ceb79291f92805262dd2a029b1"],["categories/博客/page/2/index.html","88f76a7e0221656e9c3cd58f7c721971"],["categories/博客/typecho/index.html","be97bde35c3e6f351e77d29d3f927683"],["categories/博客/统计/index.html","7fe4006ffb66e39c483bfcd72cd44d1c"],["categories/宝贝/BB/index.html","030579e35e3cbfd68409f289d9f9c5ed"],["categories/宝贝/MM/index.html","64c649b79443bdc9ceffc6f3b75122cd"],["categories/宝贝/index.html","5901702c595d0f1e4d394b9ee02d79ee"],["categories/思考/index.html","158ca0a94c8f9a5cdbd4b5d577f3c6c3"],["categories/思考/职业规划/index.html","015acfee1899cad4600bd3fe6b17188d"],["categories/科学/OpenWRT/index.html","d4e68046aceff8cc997224346b62dbfd"],["categories/科学/index.html","1e34602bbe1ce79d5910b176dad1e348"],["categories/科学/手机/index.html","49f2e9d8876f60dfead1b6a842967b99"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e1b031ef366791a0b0de2abd817c12bd"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","01d5469115ce82e543b158ed71e220f2"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","2d10ea7e8a70b8b64efcf7ac15f4bc67"],["movies/index.html","9f1b9f5b0330b262b8988330c3f0a8fc"],["music/index.html","630918fba3fa9ea72256d2abfd5f2a29"],["page/2/index.html","84d990adc59e9c975015f7d883cbe639"],["page/3/index.html","47c7b6cffa4b7e6f95666676214291cd"],["page/4/index.html","1ae23b622080c44a58674a80103af6ee"],["page/5/index.html","bfc1c03985f006e8a1cae8b6f5ad1d46"],["posts/2019/12/04/00/35.html","dd20c697e657cdae452d48a509d0e4e5"],["posts/2020/01/15/20/18.html","6a3fae5f36dac9599974a1170c3cdad7"],["posts/2020/01/16/22/18.html","8f5ce8ffb1473e802c8854b124100add"],["posts/2020/01/18/22/18.html","38d60db6dceff4b61d5417dcaebd3b8c"],["posts/2020/01/19/08/29.html","c3ab5dde74ab541fd452bc93d652af05"],["posts/2020/01/19/22/18.html","a1310738e6224d3721bfdd6a083d974d"],["posts/2020/01/23/22/16.html","10b0d1b6a903bea227f5e4bcd6eeba1e"],["posts/2020/02/04/20/18.html","9cd084d1ca1a76030718a51df05b4508"],["posts/2020/03/12/00/20.html","9ff38f0f9a85e3fa716ae1a4e281662a"],["posts/2020/03/20/22/12.html","a73fddc47c89d07d43af0cf7ef16582f"],["posts/2020/03/22/18/24.html","1819a598529b74eefea78dfb24b219a0"],["posts/2020/05/03/22/12.html","1aa8b56d12b4b3c1448b9d4e399673a0"],["posts/2020/05/04/00/05.html","db65e02f5b9d1b25d40fe92f81fe2546"],["posts/2020/05/04/00/09.html","6e3ca90e540b57cfb34d7217349c205f"],["posts/2020/05/04/00/15.html","200a1adca3ae26e373802750a467399a"],["posts/2020/05/04/14/58.html","03d2d2637e9b108f86079ee07ac2f1af"],["posts/2020/05/04/17/01.html","18c7cc9fd81f2e8abb5447f3de2a40b4"],["posts/2020/05/04/17/19.html","99041d0af2f88423fd356407b4a84473"],["posts/2020/05/04/18/18.html","e495d81f7d3ad2f081eaec322f28e78d"],["posts/2020/05/04/18/24.html","2eb5daa171076555563e15f4822e306b"],["posts/2020/05/05/11/12.html","9812b8217c85fb8173ef3a21b0e8f30f"],["posts/2020/05/05/13/20.html","dc9b43340e63b9177062cb15b6d5b2c3"],["posts/2020/05/05/15/20.html","9b0ef1b41463da469addb52c1bd24f86"],["posts/2020/05/07/21/21.html","2fa997e8456316b0866ad1b1c0ec8fa5"],["posts/2020/05/09/12/20.html","89b76bfb322a4f0d85a516beaa44ffb1"],["posts/2020/05/10/18/18.html","762f664cf4f4232e9e811a39e4d4f835"],["posts/2020/05/10/22/18.html","23ba0c9ad08fc4f228e4470296525231"],["posts/2020/05/12/20/18.html","996da8ac989eddfb3b9a82747ead3bfe"],["posts/2020/05/12/21/18.html","c3c5b429bfb92591c8f02c7dcfd304a3"],["posts/2020/05/13/20/18.html","eebd0b6207778e5191d5f2c02fe85082"],["posts/2020/05/13/23/58.html","04b522a809dfb6d7731871423960bb4c"],["posts/2020/05/14/11/18.html","0da8ae52e7a574d4df0e23e491c6d9db"],["posts/2020/05/14/12/18.html","c3cb3cf51f73a91d2174ba1cc13f93a7"],["posts/2020/05/14/20/18.html","35c8301803c962dbb9ce520b9c6375dd"],["posts/2020/05/14/20/58.html","7336896ac2891d49cf3a74aaaea145c2"],["posts/2020/05/14/21/58.html","3aa9e7f60ad07b2bc05941c6ec0a96ee"],["posts/2020/05/14/22/58.html","95ede00e808b68befb6fedb35bd4d074"],["posts/2020/05/14/23/46.html","577c93c14bc23286ead865145516622c"],["posts/2020/05/14/23/56.html","767d6f6f2e98442fcef511b1f7298ea7"],["posts/2020/05/14/23/58.html","da293e3a452e90f65f12d736854d2173"],["posts/2020/05/14/23/59.html","a794ec02c611884b375a98c92fc43e3f"],["posts/2020/05/16/20/40.html","7cd501bdf6618f701f0d320894cf7392"],["posts/2020/05/16/21/40.html","8b84ae7e95e5ac1811ff712fcddd417c"],["tags/AGV/index.html","819b6b4bb8954345010d9e324f641460"],["tags/Github/index.html","f1643a961313c9e79d89f77b2bdfc0f6"],["tags/Move/index.html","63818bb6ad7dda0fc494422c2571678e"],["tags/OpenWRT/index.html","59c90030a45378d4821b534124c5ab2b"],["tags/Plant-Simulation/index.html","bae15b1f75e76ecaeaaff8ebc46d5ad7"],["tags/Wordpress/index.html","831c57d15a6f7c28cb8009a2cb6fd442"],["tags/cad/index.html","7752339c27a2bb4d086da2973607aafe"],["tags/coding/index.html","8f410d5a0ca6f97db48dc95224f0a068"],["tags/h5ai/index.html","2c2ec852b37daf6600aaa546338f1d09"],["tags/hexo/index.html","2e4597ab7b8b37065db6701a6f7c5213"],["tags/index.html","20dee646f5b714459ee5013318dce6cf"],["tags/nas/index.html","128d91bcbec7838fffef68d5f5d11405"],["tags/tpyecho/index.html","f675fd0254c7340dcddbe2e6d865a8fc"],["tags/transferstation/index.html","f0c81dbaf95f2a08c84cb088e9b20707"],["tags/typecho/index.html","a4931df820aaf41fee12fe700327c553"],["tags/ubuntu/index.html","114b2ec944858f7a091ddcebaf45827b"],["tags/写给宝贝的话/index.html","00b05cbc90b0776e778e0a27eac38c00"],["tags/原创/index.html","6d19f6608ed7cd320b26498394f8b7b2"],["tags/学习/index.html","436296983b2215b04e406eb3669ffed5"],["tags/宝塔/index.html","345ea1f1e40b73db4ab1a989527aa214"],["tags/生产模式/index.html","6f7fcbc90e59c8ab7391ec29acdd060c"],["tags/百度客户端/index.html","0243b9250eb80ee6dde68b17ec53c09f"],["tags/科学/index.html","5c8d67be351c00c01d37315b4a50e907"],["tags/统计/index.html","bbb757b207fb11dd9e3f887865e9641c"],["tags/编译/index.html","39ec0f1d419308b959fcde37d106d341"]];
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







