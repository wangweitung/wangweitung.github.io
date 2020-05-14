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

var precacheConfig = [["Ubuntu打开防火墙.html","b11da55368b9782f333c0a797b7a9c9e"],["about/index.html","bb327bd2a202d8abea7f2a88b0b530c7"],["archives/2019/12/index.html","06c539c9a763287301b3932c02e9f159"],["archives/2019/index.html","e9a713c938d206ca976b2b1436a072e4"],["archives/2020/01/index.html","76610414fdfe6311964720fbbdd1a14b"],["archives/2020/02/index.html","e79574585770e6bbd2603cc40d9e2b2d"],["archives/2020/03/index.html","f0222e0c3954966b3586a78c8e62e56b"],["archives/2020/05/index.html","7905896e19830a706e3153ef9391b0f5"],["archives/2020/05/page/2/index.html","78f9f772adadda487f1bc0d0f895224c"],["archives/2020/05/page/3/index.html","5153a1f026696beccf287b61b3bb14a5"],["archives/2020/index.html","9ea821d6d7085534c723686d1cc6233d"],["archives/2020/page/2/index.html","f69965e81a1944eead314bb547e09ab5"],["archives/2020/page/3/index.html","2d751bede02365a14efc06608e3fb40e"],["archives/2020/page/4/index.html","0418b6b68a5207773ecb9b9714d330f3"],["archives/index.html","6a6422a5c6d3100275c7ccbbbb72751e"],["archives/page/2/index.html","fecd71c178b53d3e4161bbd17ce39030"],["archives/page/3/index.html","d32f56339fdac39659532901371627f7"],["archives/page/4/index.html","8df63645d602410ec3df2c5fda17e4c2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","be0ea23e882184c21dae587490e6fb36"],["categories/Code/index.html","2dadb4dc973db3a6581770698cef630e"],["categories/Plant-Simulation/SimTalk/index.html","dd4cdc802fb0f3a60cb1abf7478fffc8"],["categories/Plant-Simulation/index.html","8d2fa8fb83fdd1feb01eb6a7cd076be2"],["categories/Plant-Simulation/实体/index.html","3a75eafc59e259b451f2419623fb3283"],["categories/Plant-Simulation/常用代码/index.html","a12f40f6e9acccf412ca793fc73b22e1"],["categories/Plant-Simulation/常规操作/index.html","a21d8fef1de07fd4aec5b00841128480"],["categories/Plant-Simulation/模型/index.html","10d931d9fdc79261b0f00ff414b94694"],["categories/Plant-Simulation/背景/index.html","e55e57a4000fa9182da28727b3525e22"],["categories/index.html","9f6351cc362431518ba797514352f871"],["categories/ubuntu/index.html","018fbe44d1693fc4268917d78ad6d870"],["categories/ubuntu/ip/index.html","44986b91b3a00e84a37b5ddc343f6e21"],["categories/ubuntu/下载/index.html","0f8bb06083ffd1c16385c19113b126f3"],["categories/ubuntu/命令/index.html","1338df8867ad6645479fca1480973781"],["categories/ubuntu/配置/index.html","2d959baa644862701163443136028fb3"],["categories/博客/Wordpress/index.html","d680f8d5cfc19e87442bad449469cc0a"],["categories/博客/hexo/index.html","94ca884824eb3ee1e1c1d545ec219d0b"],["categories/博客/index.html","7142d7d677b691b0914f7682cb5f4d00"],["categories/博客/typecho/hexo/index.html","3f37ec93f77a27250987a6185c6aebfa"],["categories/博客/typecho/index.html","4f88da360d1144eee61d82f149accb66"],["categories/博客/统计/index.html","7cc64edc30a41bec4e8147be7423f925"],["categories/宝贝/BB/index.html","329758eae0fbb1166737d7c031a4b90d"],["categories/宝贝/MM/index.html","c42fcf486ac78d674a3f209f9cc81ad1"],["categories/宝贝/index.html","97d2d1cd426b3146b295bffa2999c96f"],["categories/思考/index.html","59e727d2691ab67126f6db0e649b2b9c"],["categories/思考/职业规划/index.html","26dd57512aa3b9e35a1e78c53ed330f2"],["categories/科学/OpenWRT/index.html","846ae6fb674856010876a35beb0404a8"],["categories/科学/index.html","dc345d4ff2c83f38e68b7e869ce30a15"],["categories/科学/手机/index.html","e5d82e8c3e2be38a57affd55045f5f9c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e573cb23b74e9f604ca70125675bd0fd"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","31ee0f388273177d299368ee329cdaaf"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6b255950ddd530bf2f190f4e06eb7b1b"],["movies/index.html","e6463036b385e26bee487159ed68aef8"],["music/index.html","8ea7546e48a63fec6af6e55d7472cbd8"],["page/2/index.html","c8e91649b1a2692774f2b485c7060d48"],["page/3/index.html","4b8a5d35a69868b49aff6a2b20c96a60"],["page/4/index.html","2df0de9406f9d3b51cf00d691de284b2"],["posts/20191204A1.html","fdeef701d42108aa77d1ef58aae07a8e"],["posts/20200115A1.html","e5cc34c05c857844ce6213f755d54777"],["posts/20200116A1.html","08e3d242f0565ac0b9a156875eb6ad6b"],["posts/20200118A1.html","d0d6c6861fc23a69519697e576368985"],["posts/20200119A1.html","4367266c70f6fbf04bd842d4914822cb"],["posts/20200119A2.html","fe2ec2d07627232e081906c7692b7834"],["posts/20200123A1.html","0d963277a81945986feb55d488ed867e"],["posts/20200204A1.html","13de8d5a46c41500e965b3f99c9fe55e"],["posts/20200312A1.html","af07968cd8124ed313b541853a57caad"],["posts/20200320A1.html","6c0366c0dc91aa64c74ff1369f77c71c"],["posts/20200322A1.html","7ab2a2a4cd550af6647dfb17a001af3b"],["posts/20200503A1.html","55b3f5f3a6f82651515952f5a87bf33b"],["posts/20200504A1.html","411e55c8a887a08ee473b2100b7a0a09"],["posts/20200504A2.html","617bdc82eaaeee8f33fee21d36415f16"],["posts/20200504A3.html","b4dc4559702b18ae4d88eb5e5bda25f5"],["posts/20200504A4.html","a6cba1087cc9fe929ad753a0c830da15"],["posts/20200504A5.html","24263baf5c5669591d732477f4560132"],["posts/20200504A6.html","c5e058f6ac3e34d2a48db159e42f4d04"],["posts/20200504A7.html","1729523d626617eb94c24bc0e8668a38"],["posts/20200504A8.html","0959462f2ed1de7da42e36fb41855c32"],["posts/20200505A1.html","b053f6e263ddce3299f026ac31d33682"],["posts/20200505A2.html","a8b97ea807a407f1eca9fb3cfa3701f2"],["posts/20200505A3.html","852a8edc1f2a81fa7a0f394099b00a3f"],["posts/20200507A1.html","2faeb75fd94262c609aa49f1a6407397"],["posts/20200509A1.html","b1f3e7dccbb3c4bf35148ba93e1f2c0a"],["posts/20200510A1.html","9d95aeb6ca4d9d7b642b316037151b4f"],["posts/20200510A2.html","f3082923bb29e82a9c8afb76f247263f"],["posts/20200512A1.html","68d45739006e753cb8af335c1068063a"],["posts/20200512A2.html","18ac30747c374cbdab93cf416833462e"],["posts/20200513A1.html","f5f446c3a3889c4d5f53910d2bfec612"],["posts/20200513A2.html","a759987b958a7d2467650981cb9ea650"],["posts/20200514A1.html","ab3b6017e847374b4e60934d44078f27"],["posts/20200514A2.html","e5ecf10bcfa3d4b3d475f26d59160ccb"],["posts/20200514A3.html","91dfb9bd152a757bcba8c0dd74a6cace"],["posts/20200514A4.html","52445bf7f617c0fbc2d48cb6a48b946b"],["posts/20200514A5.html","8d3c64883d887980696f3b9d90a804c3"],["tags/AGV/index.html","e88f3f8a2495f9bd0a02867924f11a89"],["tags/Github/index.html","382e9f28a9dc4b5b233a9f8ad23f252d"],["tags/Move/index.html","e143643d1d704ab02c62f43200c9270c"],["tags/OpenWRT/index.html","f066e35623b6024c1e46249f075e5ebb"],["tags/Plant-Simulation/index.html","763cfb65de0c8a45c8a3b27e9d026d45"],["tags/Wordpress/index.html","3d44af3b801e60742272555811466275"],["tags/cad/index.html","24680af205a0338d56a906f3e2feba9d"],["tags/coding/index.html","6e5d81b6ae7d5c9f3167c95ed61e7250"],["tags/hexo/index.html","9be5e469facd5d042bc21f00d7934802"],["tags/index.html","a0438b6f9dfd251fbb89c02bac80d680"],["tags/tpyecho/index.html","f2de47c691bf77ccf63c216aea7a3c1e"],["tags/transferstation/index.html","d533d8661d147c2009a395f2e8d7da3d"],["tags/typecho/index.html","79bc5998e0c551b72bc8802d9e799716"],["tags/ubuntu/index.html","bdc65c3026deb5fdc22ddbb914983b14"],["tags/写给宝贝的话/index.html","2505645f4add4c04fbab7860835795a7"],["tags/原创/index.html","389cce936dbbca8e239f5ba9ce463fe7"],["tags/学习/index.html","be0307796d04184721c9549dad1d2b90"],["tags/宝塔/index.html","fe810a281977df787ca9007ac6f10de4"],["tags/生产模式/index.html","a47035991c10ee3db3847b2c5b88dde5"],["tags/百度客户端/index.html","934a58144dc6cee153e1f70313769542"],["tags/科学/index.html","192a9a0d98ed2a174a5909de5d05b624"],["tags/统计/index.html","5955399487533e121818ef9065c3cef0"],["tags/编译/index.html","f905d07c8a0159ba1f9cbf4b27a0dac7"]];
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







