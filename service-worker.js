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

var precacheConfig = [["about/index.html","94694352a0c0c88600339539b6fad88a"],["archives/2020/01/index.html","4775bbfd9e941ac11ce403d2cc8ccaa4"],["archives/2020/03/index.html","ea00b9a92c3dbc881591e077ab80c864"],["archives/2020/05/index.html","ee88ea15d7a67d6140748b4cf34c6ff3"],["archives/2020/05/page/2/index.html","70282672e711aa8166f3c4e1573482a0"],["archives/2020/index.html","dba05296188d0decc4bf92f9a3a241c7"],["archives/2020/page/2/index.html","188398f966f9c789996e2411dc4d3885"],["archives/2020/page/3/index.html","bfa3afb396b415c30bd29e8fef4b5757"],["archives/index.html","cedb697cbf50713dbd96b47b4dda8850"],["archives/page/2/index.html","94de683ee9030ae5f56f8bf91323f33a"],["archives/page/3/index.html","b11a932633a1b078d33abef0d1a8d992"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","0f0e9e793c3f9d79c6e16cf10579afdd"],["categories/Code/index.html","28938bc7a671b445e75111ff587133ff"],["categories/Plant-Simulation/SimTalk/index.html","bc09556deaac7b52b4910a9f038ed498"],["categories/Plant-Simulation/index.html","ce9595735bb12845fde634db789b67e6"],["categories/Plant-Simulation/实体/index.html","174421edade6b0a3e504f0866b512321"],["categories/Plant-Simulation/常规操作/index.html","8ccd6a7af12be4ce3b306a2fd03b4083"],["categories/Plant-Simulation/模型/index.html","6b4316a27225d36716c8a9145aa28df4"],["categories/Plant-Simulation/背景/index.html","632c23f9cc33398c80e525cb20632daa"],["categories/coding/index.html","93ca8dedc51400b401c784cc7f4bea2c"],["categories/index.html","2f165ca44c9ff9332020c6b41e3a5c9e"],["categories/ubuntu/index.html","97b0c76d2a19675cf86c4d837ee36650"],["categories/ubuntu/ip/index.html","110e2d5df3726072f9a0420a2fda2afe"],["categories/ubuntu/下载/index.html","e7c8d3199235b6cb9ff5a0d8b21aeea9"],["categories/ubuntu/命令/index.html","829cc6300e025bfc93cc9a36c60f23c0"],["categories/ubuntu/配置/index.html","3da35576edcf52ef3ea758e63b065e30"],["categories/博客/Wordpress/index.html","44ef8f70d810cca41dc7662e23c6c3c5"],["categories/博客/hexo/index.html","275007a2a5dff324b16f9b9a712fa786"],["categories/博客/index.html","799f606992adf2e7647bc89e774655ac"],["categories/宝贝/BB/index.html","66e462a3ee638511f4a816924998eb8e"],["categories/宝贝/MM/index.html","1a607021991a97d62b73e149d40dba56"],["categories/宝贝/index.html","080224ea55cf0a30ac0d0a306d16fd2f"],["categories/思考/index.html","d49454697f511da3e36ddae0ed8a1ca2"],["categories/思考/职业规划/index.html","38f4485f018d332fd469dc9a6b5e54be"],["categories/科学/index.html","7dcd2fa4963b2c95cdcfa614dc7389f2"],["categories/科学/手机/index.html","bef674fb34a075c2b55e1af8e1bdf095"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b06d8173c5d0fb52a6e4c61a5b17cfb8"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","65ea35c243f1148bc40a46e831a404fd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","a2144b9d66c5b60e1ea629d7f2b115e5"],["movies/index.html","0fac4ef5eae3e9c6f9e414bd7b9303b7"],["music/index.html","80d597b07ed51e790ba358055b9b894c"],["page/2/index.html","0e857d9421bb8154e60cc4a561cdcb06"],["page/3/index.html","e10d29a531dbc0c4af903d82580b7273"],["posts/20200115A1.html","8107af69bd2e09de87db2f6ed51f125a"],["posts/20200116A1.html","4def3fcb8aab92a1d7a533b7104aa63a"],["posts/20200118A1.html","6c287d9d1c9dfb07632ae06ea71b98ff"],["posts/20200119A1.html","0177cbbaf45b07fdb10b68f296c237f9"],["posts/20200123A1.html","d69d346da192c377e9b149786d5bf11c"],["posts/20200312A1.html","2340a935b52bf0ff7fa199a587d6286a"],["posts/20200320A1.html","7aefb2423417d340d21400ee25ec8001"],["posts/20200503A1.html","5a10dade256114db3013926374252d3a"],["posts/20200504A1.html","8d92a5e8a268d7abccb060dd63a2ef6b"],["posts/20200504A2.html","0f0832ea7adc62ce06da51540309eada"],["posts/20200504A3.html","e96baa796a2c62187569b7fa4f5084c5"],["posts/20200504A4.html","410ab663c8d18df07710b5fadaa345b5"],["posts/20200504A5.html","45714630357675e46e53af799fc4f3b3"],["posts/20200504A6.html","3dc52fbbad338628138730eff4ecba5b"],["posts/20200504A7.html","9aa262b69a483cf4708dd34910a18901"],["posts/20200504A8.html","593e40e8318de401224a5f0c2788fb11"],["posts/20200505A1.html","ce20c42984e1de7f723c75497c563ba7"],["posts/20200505A2.html","c770e08f13906ae9b290600374da4d2c"],["posts/20200505A3.html","0ada8626e29a1c9a1f406047e9ba5a07"],["posts/20200507A1.html","feb6d304df3f80d008c58fd518948388"],["posts/20200509A1.html","e6ad919509554f7ef278f7ae58179fda"],["posts/20200510A1.html","a1cfe9ce73b427c25a8aafab0c1c725e"],["posts/20200510A2.html","aeaa3568b775f12897e6e4f305180e0c"],["posts/20200512A1.html","51aa6a60aef86164824d8c0af92e0adc"],["posts/20200512A2.html","bfa58f993382135720905c21ab9de30c"],["tags/AGV/index.html","7aa6ce0da863cbcfedda84c183693284"],["tags/Github/index.html","9eaa62bec42254f1a5402e4879b674fe"],["tags/Move/index.html","8057a2e5fc8a3cee65d0d34cb9d55ccf"],["tags/Plant-Simulation/index.html","c61cff7ea448a8874b2663afc8eac607"],["tags/Wordpress/index.html","dff1e14f34f430309a56119ae3d6452b"],["tags/cad/index.html","d63e61c7e2d85aeb316802ce447e0977"],["tags/coding/index.html","fcd70d5ab9b0b579a55f43c08402c05e"],["tags/hexo/index.html","f60f58c7ee98cf9662469601495a7e96"],["tags/index.html","9e4b54c46355a5b2b4e0d5be6d45aac2"],["tags/transferstation/index.html","9da6cc21d4b66a5443e484635cf1c7ec"],["tags/ubuntu/index.html","2fc491d76397828db58765b7274af859"],["tags/写给宝贝的话/index.html","19c7bf5d02f91c23288be1e27bb676e0"],["tags/原创/index.html","056a7658ec4d00354e1147b7d5b52581"],["tags/学习/index.html","52f3499ad620883742350494c3fca2c3"],["tags/宝塔/index.html","670648f668103f6352d7fe9eaac84d02"],["tags/生产模式/index.html","ecbd25a3f9d1bc2f901dd1761e741c37"],["tags/百度客户端/index.html","ecfbba207a8b2942b8a6436b249a0bf9"],["tags/科学/index.html","4e726b5603cae1e504e9fe3358c506f4"]];
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







