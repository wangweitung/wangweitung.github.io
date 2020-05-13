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

var precacheConfig = [["about/index.html","599cd7a5f82be88315ff1c0ce078ac5b"],["archives/2020/01/index.html","831ea067a0a15b76a353462ee67c7168"],["archives/2020/03/index.html","6a53151f3875b9f1cfdd9da952d3b6d7"],["archives/2020/05/index.html","086e365bc892830d2dfa66dba43c2579"],["archives/2020/05/page/2/index.html","f2662f83e83b57237394fc04c0010115"],["archives/2020/index.html","019bbbecfc90b2bd6ebacfb9a7f93ac5"],["archives/2020/page/2/index.html","3b21c809dcd705d20d3844fb42f71184"],["archives/2020/page/3/index.html","637e1a83ecbe1d76e7bc1319daa9cb9e"],["archives/index.html","d074a5239ee674dd237d1701fa087df4"],["archives/page/2/index.html","4856d5d4b1da68e1889f33de70cd66bd"],["archives/page/3/index.html","da8c0d54ec6608ceb2f12df5e5774f81"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","b54d1a7d8929708bb4d23d16cd3dd3ce"],["categories/Code/index.html","cd471e9521c30b739e12e9884f563553"],["categories/Plant-Simulation/SimTalk/index.html","ce2761cc157e06929ce4777d7115d52a"],["categories/Plant-Simulation/index.html","94641fa456d77c3a4e9874e807826a7b"],["categories/Plant-Simulation/实体/index.html","f81e1eb64510c26c82e7a45029b49d66"],["categories/Plant-Simulation/常规操作/index.html","8e87b87a92426476bc3dc5e2628d4d18"],["categories/Plant-Simulation/模型/index.html","015e066ed77bcbe204f97b633762d132"],["categories/Plant-Simulation/背景/index.html","6fa922109f2ea452ce8700a20f3e2824"],["categories/coding/index.html","f7b7a2865b10302997bccf89ed606680"],["categories/index.html","4e2cd3c5a6bed6012920849b0e47d5ad"],["categories/ubuntu/index.html","6b5b8cc6043627767f2cb85082c6fc94"],["categories/ubuntu/ip/index.html","105a0741d2e9db6f986a92aa1ae57031"],["categories/ubuntu/下载/index.html","5c55417199560732cb057c4845e37ab6"],["categories/ubuntu/命令/index.html","7ddfb0ac8a86fd1cb75f40dfcaf2b021"],["categories/ubuntu/配置/index.html","d3524c8a980e5810b1b2ae2423f23ff7"],["categories/博客/Wordpress/index.html","76ea22c6f7d349903ca82d3ab144db2a"],["categories/博客/hexo/index.html","4d3e19578507e28973c41008fada0451"],["categories/博客/index.html","a54be5db5fb9f9c954075b0e08adf511"],["categories/宝贝/BB/index.html","98ae9d409f154ff3dfc8bcb956ec1dac"],["categories/宝贝/MM/index.html","afcd01d4c6aae475b6db679949349280"],["categories/宝贝/index.html","bd8955963dfd3d197b911d8d9ef2dc60"],["categories/思考/index.html","abd110359eca5cf33d37a0c0a4919b31"],["categories/思考/职业规划/index.html","a5e6b328999c275f2065adcd0027fa03"],["categories/科学/index.html","e449250d8c51d9378fb7c7c78f579181"],["categories/科学/手机/index.html","ebef8ae58ad5f97276e5300df345e254"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","bba2fb0694efad72f41605997a481ecf"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","8034f350b5d0641d4716c9ae8a0efb81"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","08a0c24156b71adef00bce41fe353f55"],["movies/index.html","a03e6913a64f8c4b6c28da4c711177d3"],["music/index.html","d73d17a677e41059da4166ea537a0f7f"],["page/2/index.html","f1b86d56d38a2f4d1d7622d2bf2ec096"],["page/3/index.html","4d9b6c8144ccd07b5774d948cb9e47f4"],["posts/20200115cka3ymtao0000t1jx1i3m64zv.html","06171bc35c6bd07aa705bda81e1ceee2"],["posts/20200116cka3xr4bq00007qjx1rbz4m66.html","6ad9c74499c6b6bede3245f10fa1a868"],["posts/20200118cka3y6d3f0000a6jxbx11f3qh.html","37e356a0a2b989ab89faaca95b5bf374"],["posts/20200119A1.html","c7e808c86196133a32433c673fd778de"],["posts/20200123ck9wu6c1a0000ojjxf7jpdvjh.html","d68b538fa173e4fff4f06a98d48b18bd"],["posts/20200312ck9wu6c3g000sojjx8xe7762i.html","7de2fe3d20e8355109a1942864745d42"],["posts/20200320ck9wu6c430013ojjx6wsn4hn4.html","f1104996a089b1eb13509544681c6f4f"],["posts/20200503ck9wu6c38000nojjxgn74e0ug.html","56dd05227f7c2fba38b0b423369bb6b2"],["posts/20200504ck9wu6c1s0002ojjxe3sr7pg6.html","e1ddad4a864593adc916633f635b91f9"],["posts/20200504ck9wu6c250006ojjx7b9z6108.html","7bec92a2d8fb3d364e90c2b5bc99d488"],["posts/20200504ck9wu6c2f000aojjx8odzddo6.html","f60a1d97a8d10833e95f043062cf7cb7"],["posts/20200504ck9wu6c2m000fojjxbq9pedrp.html","cbaffec2c8f125627acae905c9840088"],["posts/20200504ck9wu6c2y000hojjx0not8imp.html","97e60c3e434e97c72724fac11936d961"],["posts/20200504ck9wu6c35000lojjx2qa3aie2.html","cddf926ea90871586ad13f75a78ac1d0"],["posts/20200504ck9wu6c3s000zojjxbi1jcf5n.html","7b566902ba2a3ce42571048475a0f2e8"],["posts/20200504ck9xltnwt000020jxd9tu26b6.html","4ef755993d2b995ca2d9d81919eb98b0"],["posts/20200505ck9wu6c2a0008ojjx34z51r2g.html","64e1a5f388e952007f38cff862b149f4"],["posts/20200505ck9wu6c3l000vojjx1i4706bu.html","1188501dede12c867a4eb00083154384"],["posts/20200505ck9wu6c3p000xojjx2lfdgprv.html","1d6f1c94b7e5e944625a1aeb0e91de64"],["posts/20200507ck9wu6c3d000qojjx30ls01kj.html","eb7616eb6a64138d581199bcf35f31c1"],["posts/20200509ck9z2l9c80000dajx2ota0qov.html","2175a33a52fa851387b81f214d9a70e9"],["posts/20200510cka08mz9g0000kejx5ij4d3aa.html","3dc137e8c3e119b55125a4cfc2d55a4c"],["posts/20200510cka15cdj90000gjjx4byl4z8q.html","1d7449b02f9a5f6a3286991a3cb9f03c"],["posts/20200512cka3wmuh90000p7jxbwl3aovn.html","3241c8a809573bbc425d517829e250e4"],["posts/20200512cka3wy9y5000048jx8xs91dv8.html","69fc0a78114b55f3ce40ac1290ebd8fa"],["tags/AGV/index.html","9eba36dc1a951896e97fa229dd645c7f"],["tags/Github/index.html","6f6b0dfa9d033b74599a89be624dcac2"],["tags/Move/index.html","3e7b1b9a4e5cde3173df0f72ee4d38e9"],["tags/Plant-Simulation/index.html","17f3cfe3f8a841c40ba29e2c5ec12dc5"],["tags/Wordpress/index.html","ef8c093722cad0881fed0bf213c1b436"],["tags/cad/index.html","17f99cb09a4e9dd83e0726f97f6c0faa"],["tags/coding/index.html","89cd5a11748cfa05599a1ea09d8148f0"],["tags/hexo/index.html","3758d66de7dc205ced1f2b7db69676fc"],["tags/index.html","786c36d4eec145a03270faa5c62a6f2c"],["tags/transferstation/index.html","f3f8bfeccea0f59f1a09bbffac97361f"],["tags/ubuntu/index.html","30fa7ce4062dba172ccb771738e85fa5"],["tags/写给宝贝的话/index.html","1a07da48c85c55f679c4a6a14bfdb488"],["tags/原创/index.html","5300b51b81e114362e4dcb9c1e1a5723"],["tags/学习/index.html","90c58232a5eaf84d640271956bea92bf"],["tags/宝塔/index.html","53a8ab5bdbfc8edd8dcfa4a6fdc7303f"],["tags/生产模式/index.html","c05b8ab2dd237f73cc936143d9e1a61e"],["tags/百度客户端/index.html","e7ebf65b5aa99262f4ce8bf91480c375"],["tags/科学/index.html","2a95149de598fb6a27aac41655ce9e8c"]];
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







