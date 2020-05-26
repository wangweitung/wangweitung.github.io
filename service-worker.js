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

var precacheConfig = [["about/index.html","cd35ac88fc15423d5985370611551275"],["archives/2019/12/index.html","ca7279fc04c82a13d773dbd8852cac04"],["archives/2019/index.html","29912a8eff00388aca34b3ce4419d4fb"],["archives/2020/01/index.html","190d3ac82c4d93a95464b0bde073ec48"],["archives/2020/02/index.html","9b2c8ed8abdc2f99edf0bc51e1de778e"],["archives/2020/03/index.html","0e3cea3a96fafc6fb8d052f0a3a0cf84"],["archives/2020/05/index.html","0a605398d95288a0fac785ba0624e174"],["archives/2020/05/page/2/index.html","5a6ff2b1873cf6a8ea663f53cb2da5c7"],["archives/2020/05/page/3/index.html","48b697d78f4ca26fd2410c31e9c21091"],["archives/2020/05/page/4/index.html","e24a6886dceb83f26006e69310c8d0a6"],["archives/2020/index.html","44f0898311be34b3254954f456730cce"],["archives/2020/page/2/index.html","f0869ac7981cac0aa8cbe9102837004d"],["archives/2020/page/3/index.html","30066d07dd5c01918df129d9dec36f3a"],["archives/2020/page/4/index.html","23bbba0dcc41af76fd1a412ea652b625"],["archives/2020/page/5/index.html","737c2dd33f993b61611bd8381478f6d6"],["archives/index.html","bf98f2fe394418b0ab316eb912a803bc"],["archives/page/2/index.html","b4a737e99397abe2f03e0b0c0d836b7b"],["archives/page/3/index.html","5ce7115723a3745efe38b67ae34f26f9"],["archives/page/4/index.html","7ea1600e89ae2595bcf9caee8ee96d79"],["archives/page/5/index.html","b77067379f5ff3d7dcf6aa864e6e7e9d"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","bbed8bc0126e5d71fd4ba670467c1b11"],["categories/Code/index.html","138a0e09b3a2c6a73a5bb9d94cd5785e"],["categories/Plant-Simulation/SimTalk/index.html","f0f88c02c414ecfec73655130b06d2bb"],["categories/Plant-Simulation/index.html","dfbf18e299aa7f3b1ed32c695760b8f5"],["categories/Plant-Simulation/实体/index.html","349f85a66044df9421997b77e7713f32"],["categories/Plant-Simulation/常用代码/index.html","a00e92719f299418d2e2ca30bb669d6f"],["categories/Plant-Simulation/常规操作/index.html","fa570f281fafb2c8ba1a82190d1ce9a9"],["categories/Plant-Simulation/模型/index.html","55a52e0b0849f818a141db379182ef97"],["categories/Plant-Simulation/背景/index.html","a5254a74e6ea9da91e31faf4ae38ce7e"],["categories/index.html","08dd72969c7e840ef6c28cf74cd8a2a1"],["categories/nas/index.html","8b7e25e0291e56518727efeea4322371"],["categories/ubuntu/index.html","78aeffb298b334edff5cc9b973ee98d1"],["categories/ubuntu/ip/index.html","3b6eb6a413f616cab4fa4a01bce97c91"],["categories/ubuntu/下载/index.html","b4e8e6b93c519f3a0cdbf6e39b00b0c1"],["categories/ubuntu/命令/index.html","80634ac826820e81c99a0b86b1e15e43"],["categories/ubuntu/配置/index.html","0c0aa94cc9f4801930670044944e8c2f"],["categories/博客/Wordpress/index.html","99237e8b37dc7ae555d3c929a351f230"],["categories/博客/hexo/index.html","c9aaf59564b6e0f33ba2a340da50a3a4"],["categories/博客/index.html","5ae71fd7252a74cee0ec1d2e417e18af"],["categories/博客/page/2/index.html","ace78262ab0c2d2ea02c6ce4045e98a9"],["categories/博客/typecho/index.html","ff7753aa382e2202da1755178fdb0d13"],["categories/博客/统计/index.html","b7267d15ddadf8fd9d715e96a9340b33"],["categories/宝贝/BB/index.html","68a60222f53475878d160c99a90191df"],["categories/宝贝/MM/index.html","4c7e3d785a151534898d8c90a2ff2f5c"],["categories/宝贝/index.html","d86aae864035480f0a5a799f5aae479c"],["categories/思考/index.html","baf3d74d55754c280429e96e41910271"],["categories/思考/职业规划/index.html","5192b2791a6c6e34e3ef3106cb8cd9db"],["categories/科学/OpenWRT/index.html","91694f4021b7a12119733433d2cf56b1"],["categories/科学/index.html","7b16459b9dd4c0c022b0c2ec936afc7f"],["categories/科学/手机/index.html","7443850b8742fff31f959df39c3ee307"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","13c510f4a22241ea6d1e18da1a32625d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e35366eee2775fb5b739a27d0946e4ce"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","5de8deeacc3abf2df485a22e50e2d01a"],["movies/index.html","7253aeffe5aab2ca18a37d61beccac07"],["music/index.html","b38dadac6e31b4bfd0cb69f1cb8693e3"],["page/2/index.html","d8ce34827a3bf79e4df732085ac5c6a8"],["page/3/index.html","12d8dd1c04491956d9cd7e1cdc3ad630"],["page/4/index.html","5e09c4261070720d384223c033a40ee8"],["page/5/index.html","2fd86cb17c2ff42490bb976e3e40a172"],["posts/2019/12/04/00/35.html","57bfd57ca265f6b6df832367387b61b3"],["posts/2020/01/15/20/18.html","93444d82d4494cc72c5566cf3cab6818"],["posts/2020/01/16/22/18.html","36583aef3d20b4137bac46625bafcd71"],["posts/2020/01/18/22/18.html","62c6f24855cc239847304cca3ef11631"],["posts/2020/01/19/08/29.html","f0b0f073840d7fdaf25c94a647c06a72"],["posts/2020/01/19/22/18.html","b91896f47ecb69a24aefa6d0cf00ceaf"],["posts/2020/01/23/22/16.html","8ddd8e8fe3c9ea5f7db85208c532870b"],["posts/2020/02/04/20/18.html","d6f0660a01974320adddc70a205bb083"],["posts/2020/03/12/00/20.html","0611501dc647825be445e8964e6a4060"],["posts/2020/03/20/22/12.html","389e475ea247c9358583c813a3610db8"],["posts/2020/03/22/18/24.html","01f221a2a3ab3f3ef36b3b4eb2d8007a"],["posts/2020/05/03/22/12.html","0a6b92a8580e4fcc6f62bd0d04191a10"],["posts/2020/05/04/00/05.html","ddfc839c7236a34b7e0f036cca582148"],["posts/2020/05/04/00/09.html","ca99248d0ad6285c353e356db9abf4cd"],["posts/2020/05/04/00/15.html","3bd220f045c89399b053478c707601c7"],["posts/2020/05/04/14/58.html","4d3c51feced340d55985d85fb79bfbe2"],["posts/2020/05/04/17/01.html","af81a86199400224d1fd2f5291aeadfc"],["posts/2020/05/04/17/19.html","5ba1a3178eb22db359d8986c651cfc65"],["posts/2020/05/04/18/18.html","e38ead1cf971060eeacd38a260cf0f24"],["posts/2020/05/04/18/24.html","0e779e5e1028154b42f457b816bae851"],["posts/2020/05/05/11/12.html","b1c172636dc7a5be928fc5b334837099"],["posts/2020/05/05/13/20.html","52d406974aa8a367a802650152b56a86"],["posts/2020/05/05/15/20.html","f113fe5fbdbbd24785630313c5addc28"],["posts/2020/05/07/21/21.html","7d30cc011e6faa61be31d744ddaa178c"],["posts/2020/05/09/12/20.html","fcac9199d9dd595a1cb8610fd93159df"],["posts/2020/05/10/18/18.html","745924423025a6e2961394a75b0460c0"],["posts/2020/05/10/22/18.html","79d2e2266157bebd5e14a0d7833c71ec"],["posts/2020/05/12/20/18.html","4a05e7b6316f5ff1060a2ec9f53fbdf2"],["posts/2020/05/12/21/18.html","d6a14accca1f35976ed8d0f436c42c54"],["posts/2020/05/13/20/18.html","3051b1dd35549c0ddf465329fbf0841b"],["posts/2020/05/13/23/58.html","6eef335fc00e19e1f6ebac8717c5d4e6"],["posts/2020/05/14/11/18.html","8d92c728aea589f1a9b37824559d5e91"],["posts/2020/05/14/12/18.html","422634e04032a6f135d399e567960b80"],["posts/2020/05/14/20/18.html","574da56ba245b351dfe2c504b8a1466e"],["posts/2020/05/14/20/58.html","12e73b158adb28ab100ef2eca1dc6a30"],["posts/2020/05/14/21/58.html","30eb04ade5ae72eb3b3761efb519bfa3"],["posts/2020/05/14/22/58.html","21be95d69a9cd4bdaa9ad8da44bb4084"],["posts/2020/05/14/23/46.html","7df4aa2d1203ff9aee229e7687a00a53"],["posts/2020/05/14/23/56.html","4424dac2a089340ab50e108eb3061f6f"],["posts/2020/05/14/23/58.html","a85cc67886d68ff5ba79ff3fbc8de49b"],["posts/2020/05/14/23/59.html","282e7a4e7aaf4b71edef3cfde23b851e"],["posts/2020/05/16/20/40.html","8aa37aea6cd2536c856fa2d2415eaa2e"],["posts/2020/05/16/21/40.html","3a8db811e9147d07e688ccbc4d3152dd"],["posts/2020/05/17/21/03.html","87f1e0c2888776abc8f39aec53f00444"],["posts/2020/05/17/22/42.html","82036ef7c3116dc79c2634a33df6953c"],["posts/2020/05/24/07/03.html","218b61bce1c8deb9cd57a47443fa8d3a"],["posts/2020/05/24/13/03.html","3627893c3efcf3f2cdd1060073aba49f"],["posts/2020/05/25/13/03.html","27a57e6522bcd0e956232bf91eda0c66"],["tags/AGV/index.html","eed4cb8f6515b813780b65fb4aa3b40c"],["tags/Github/index.html","6a5434394d7adb066c0cd9ce7c241059"],["tags/Markdown/index.html","8bbd817db8799874a3e37abf65fa6906"],["tags/Move/index.html","93c85a290b24cde4ec91833d2ba87b3b"],["tags/OpenWRT/index.html","c88092d26cfc0f8122af4f25019e459a"],["tags/Plant-Simulation/index.html","5c7b382372f97b6af02b15fddf029a20"],["tags/Wordpress/index.html","cd30958b7734bd592b1a8d6b18ab296a"],["tags/buntu/index.html","bbde55ac94ee5d367bb664e15ba3799f"],["tags/cad/index.html","73a153b87923c71f4021c89146b89a16"],["tags/coding/index.html","cdd4b461ff7d3ce0f98bf6cc7cbb4be6"],["tags/h5ai/index.html","fdbc16a7168dd4bb9c54fdd533dfd528"],["tags/hexo/index.html","e6d09c447dc5636a690b7192d6e683fd"],["tags/hosts/index.html","b41a44658a6656598913f9e368ae4c1b"],["tags/index.html","d640f94950a25d31d3afd6d8ea1f48cf"],["tags/lychee/index.html","e4b32e7f68ac280fc2753aa2e60bc423"],["tags/nas/index.html","36a5ab77ada4ec1825389c45e183dcbe"],["tags/tpyecho/index.html","6c5158a6b6ab57f8659e38e86a8d4f8e"],["tags/transferstation/index.html","42600a4e46cd7fdd832cb7223ede2baf"],["tags/typecho/index.html","de8e0dbbf182ea4c6b1f27c1141655d9"],["tags/ubuntu/index.html","80d08de6541de7255692c0302cd04f12"],["tags/写给宝贝的话/index.html","5ee3503636796919f753ca3a9682bb0b"],["tags/原创/index.html","4f5a461f67058c6fdc6dee497e63affa"],["tags/学习/index.html","23d8364dd3b9be4e03d7e57501902dfc"],["tags/宝塔/index.html","9d8c055a15e034054477244ad030eaec"],["tags/生产模式/index.html","aebc9a6affdc6701baea27d35a6ca773"],["tags/百度客户端/index.html","c16ea517002e2fb5bfd5a462f3a5b753"],["tags/科学/index.html","09881b81fb51e536c370184cdeeed7aa"],["tags/统计/index.html","1e681f6b18ac945236c3c63cdaf7ee58"],["tags/编译/index.html","fd4d2041cade768df3dbddd6494d7acc"]];
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







