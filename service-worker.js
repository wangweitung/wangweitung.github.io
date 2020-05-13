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

var precacheConfig = [["about/index.html","0d674c7152983edd8fd5719f0c94e29b"],["archives/2020/01/index.html","903aa1ea3fc56f2b102ecccdce9775c8"],["archives/2020/03/index.html","e914735f9afa31d444b12d045dfda5d8"],["archives/2020/05/index.html","cb97a318daf883dec9ff52c5c62451d0"],["archives/2020/05/page/2/index.html","ef221a7ee01fb01d7bf8d3926258c1c4"],["archives/2020/index.html","17a1ffe373fb14d54d60f38dd3a4f36a"],["archives/2020/page/2/index.html","c0dda2eaf9ba642592a8d8186571140e"],["archives/2020/page/3/index.html","7cb0e693388b6c40ceb25da83a6ecc4a"],["archives/index.html","43515074fbaab2a3882836ae532bbb5a"],["archives/page/2/index.html","58c0644e099053c40e3eb5945cfc57de"],["archives/page/3/index.html","838ec8ad6454e214083fe00a4d023100"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","cf92a128e19f00d6d7fe9ce6fdf71b59"],["categories/Code/index.html","bbc5d62f28c53bf729a0b93ce6b38a1f"],["categories/Plant-Simulation/SimTalk/index.html","41300f307f55b7a15cc11b01b943c253"],["categories/Plant-Simulation/index.html","a86c8814795f2f19a1c7111844851f24"],["categories/Plant-Simulation/实体/index.html","8cadadcdca273fe5839470e89bf7dc57"],["categories/Plant-Simulation/常规操作/index.html","578d89af6534d385d30e7e4b502d3726"],["categories/Plant-Simulation/模型/index.html","82d6c9977aa24d3a24d5975ca41b1b22"],["categories/Plant-Simulation/背景/index.html","35c39a3241a1c3402d4856e104bf9843"],["categories/coding/index.html","cf803b023fda1652695645a1a032e314"],["categories/index.html","ec6dd7f01868bc641c7a8fbcae323c4c"],["categories/ubuntu/index.html","7105d40033fe861ea457548ba503760b"],["categories/ubuntu/ip/index.html","a8432b08212995abe8076410d1d7767a"],["categories/ubuntu/下载/index.html","a735ab1101fb44f137491b39962a53c9"],["categories/ubuntu/命令/index.html","8ccf010db2e0b0403e34687a8830c8a9"],["categories/ubuntu/配置/index.html","cd00b3d893fb06777aa2e1552efc41d2"],["categories/博客/Wordpress/index.html","6fe80893385216283f768b2cd517de38"],["categories/博客/hexo/index.html","8baf558ab8738dd12344793d310a0c96"],["categories/博客/index.html","23b14d6b28fb5eacc0c71229bd2be607"],["categories/博客/统计/index.html","dc7f4008aa866a1d0c78a30adfec4bf1"],["categories/宝贝/BB/index.html","e5c53195f0341dea23ee6b963028b295"],["categories/宝贝/MM/index.html","0fc3f37c33ca8f65cd5d0402daa86bb9"],["categories/宝贝/index.html","d7eb01b8455c4419d4415cde79d1137b"],["categories/思考/index.html","755bfc79a76fbcd7af19caf8d1cce521"],["categories/思考/职业规划/index.html","955d00653de78d75662d021da574be02"],["categories/科学/index.html","ba76b63df4cc97f4c13f4406313f968d"],["categories/科学/手机/index.html","f8a2f58bb8a2404496e442eb171ff7e4"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","600597fa3a8753a4073b2a35545cd51e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","616318b8f5c583589e509d640ebffd5b"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","8905dd554903f0cea98327e896ad23bb"],["movies/index.html","cbf17db78bcf1f1db2709b0d72deef96"],["music/index.html","6cb7535a3c19570a2c6246154eb87d87"],["page/2/index.html","ec205f5cfb1f54852a3054244fbdedff"],["page/3/index.html","e982f3fe9f8a8c20aa1c9e89b0bf7e83"],["posts/20200115A1.html","1de3bf65ff3e1f61b19d4f22d83a4a68"],["posts/20200116A1.html","2a89b3826d476bf03bfb06d8b8a447c6"],["posts/20200118A1.html","73ebcffbc8e42dac12084d4382adf33f"],["posts/20200119A1.html","c6932f5e23be5cc96a66313377167e21"],["posts/20200123A1.html","4c0ebca9fe6e38f6b5dd4929c3da9c62"],["posts/20200312A1.html","8986615957afc1cbda32519cda59a000"],["posts/20200320A1.html","1b073a3eeb1cfad690418774910cd6c3"],["posts/20200503A1.html","e8ef40fa97e86af8ecb0339d889aee0d"],["posts/20200504A1.html","b949cf92f0361d986db61a2d168f08a3"],["posts/20200504A2.html","97ad4afd5d5e73348c4c4c969c131df9"],["posts/20200504A3.html","6da205723716b6c273c67c7604614bf6"],["posts/20200504A4.html","ecaafdc62e7ef4e2a003887d7d4d9ff2"],["posts/20200504A5.html","b35bd92549a22360e724e26ae401192e"],["posts/20200504A6.html","a8fcede80a530c8522d4f9114cab5f16"],["posts/20200504A7.html","9a3dc625ab2d8da2b2e4d147105c599b"],["posts/20200504A8.html","aeec2122368bd912aaa0ce5efeff12bc"],["posts/20200505A1.html","2f0845395bee7a91f80084c3268cdf69"],["posts/20200505A2.html","be8e1e3d8f1f7c2121484b38ac2a407e"],["posts/20200505A3.html","25cc30170247a1d3f10c31613cbc0e11"],["posts/20200507A1.html","fe3654487d9e2c4e09a1d3281def16a9"],["posts/20200509A1.html","cfa6abaac8b9d10dbf8bda1d4222a289"],["posts/20200510A1.html","974e1f115eaa918a1f886408ab37eaa1"],["posts/20200510A2.html","42c0455af080611cae91edf6fd64cd55"],["posts/20200512A1.html","d53a8f99a012e0098653074c7810439c"],["posts/20200512A2.html","2080971a869aaf00d48d6dddd5fe813c"],["posts/20200513A1.html","1c119b15ab7380de621ea58fc2639d63"],["tags/AGV/index.html","8a63ce3e59599993de0c097b9bacf117"],["tags/Github/index.html","d80b342cb04836ee437f78c23b8d14bd"],["tags/Move/index.html","cf11c0cba653e969eaf6c7b5a7a4ed90"],["tags/Plant-Simulation/index.html","b392826f94941d2b119083b3f91286a9"],["tags/Wordpress/index.html","8a738740279ff67384bbcd2d05539a72"],["tags/cad/index.html","870cef06ff158414319dffa4586166c7"],["tags/coding/index.html","77e568c8cc901a2ee8f9a8b7ef58bd13"],["tags/hexo/index.html","a19ba1f4a93ec60b5427fac441e794ee"],["tags/index.html","f90da0c047ee4ada35ea05f8740bac2a"],["tags/transferstation/index.html","06b03396e633aa1a22c1e9d1098e0492"],["tags/ubuntu/index.html","2e451dbd72b7baa98b1a2672cde6ed0b"],["tags/写给宝贝的话/index.html","b20996adfced968fe68926ec3b9c0e3d"],["tags/原创/index.html","599095f8293fed9ff6a45d94b41b3b32"],["tags/学习/index.html","03d7675cf6a3d759b202c20bd3ccfd68"],["tags/宝塔/index.html","1f15111a8d08c7b833e5365350340c88"],["tags/生产模式/index.html","6f974506b702d48577570181b554e28d"],["tags/百度客户端/index.html","a237a486c82b790c1b243d74c41e53cf"],["tags/科学/index.html","9042f353338023cf77ad4b268fd8489e"],["tags/统计/index.html","59e31093d63fbf2050da86c8f27fe0e7"]];
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







