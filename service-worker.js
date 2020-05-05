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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","6036e2753d84357c9084c3b5e42021c2"],["2020/03/12/妈妈写给宝贝的话/index.html","a089e9cb0e5ba04cdad7ec50549b905f"],["2020/03/20/磨人的小天使/index.html","50d77a2323e99f104306c874ee270fce"],["2020/05/03/hello-world/index.html","08210a0bff76f367d0d5b3682ce76e55"],["2020/05/04/AGV的用法/index.html","c2483f288c5ba43b02ee5debf1bac5a8"],["2020/05/04/Github创建文件夹/index.html","ac42bdf797794f50451f75f743a79aad"],["2020/05/04/Move的用法/index.html","36078e038ac5ba62fcc92dfee7e4729e"],["2020/05/04/PlantSimulation常规操作/index.html","7f14b8cdb01d1f2005efcd6e589835ff"],["2020/05/04/TransferStation的用法/index.html","b0eea0099b799ae7b486fd34cd51d348"],["2020/05/04/Wordpress问题解决/index.html","f4cda318b8cfecb4912c80c0eefbb70e"],["2020/05/04/无科学环境连接谷歌账户/index.html","4d332baed28a2656a2ec9abbe4e9061c"],["2020/05/05/Markdown的一些小技巧/index.html","23ce879cb69bd110e040e5a0978ed9d0"],["2020/05/05/Untitled/index.html","ef31239379abada8f19e97adae0fa101"],["2020/05/05/导入cad作为背景图/index.html","ad84696e768b2dd24ea7bbbdbeb31475"],["2020/05/05/推动或拉动的生产模式/index.html","c5258e8163753ac50baa2a55bbc23081"],["about/index.html","6cbb11a930cca06a3eaf85c318b9851b"],["archives/2020/01/index.html","2f992e68a7d3c3464c44326b42483a3a"],["archives/2020/03/index.html","6c22441fc32df0062c94cf11a46c3ae9"],["archives/2020/05/index.html","01c9317076f1ab01c6f18a92ecd4a116"],["archives/2020/05/page/2/index.html","166d507d6b3d134de7e809399d39fb6b"],["archives/2020/index.html","9aeaf6c87822b2eea4dac566b31fb5a3"],["archives/2020/page/2/index.html","6770a4b3e3ed1409241e7a9f216f82fd"],["archives/index.html","a606610b689aeeaaaa8dd17480214aa4"],["archives/page/2/index.html","f407a08dc7ede7e1e332b69eea3c25ca"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","c53aadb98e46c4f46979064d455ed78d"],["categories/Code/index.html","17d74136cfae1804ff2a70137e445d09"],["categories/Plant-Simulation/SimTalk/index.html","e9504ec7941d3c12742ec3f133b86514"],["categories/Plant-Simulation/index.html","4f1ad6f9ae2e244c9b3ea9fccaaa1719"],["categories/Plant-Simulation/实体/index.html","af1d848e41e59cde842e57b366abd092"],["categories/Plant-Simulation/常规操作/index.html","988a56ff0c3ffe7fa9dc92a421339662"],["categories/Plant-Simulation/模型/index.html","b7e4106c0c7bc99e85d5dd04aa615468"],["categories/Plant-Simulation/背景/index.html","3464caf31bf2706810a1732c1401ed88"],["categories/index.html","6c0cc29fe308ad3c1883c170a5bcbc47"],["categories/博客/Wordpress/index.html","414fa616373944afaa4c040776a3ce13"],["categories/博客/hexo/index.html","1a13f65634aea546287a3d3a42dc33c8"],["categories/博客/index.html","7001ad64bb4137d7b079bc2539e97831"],["categories/宝贝/BB/index.html","7f598290ae271451c88ac3763ee43516"],["categories/宝贝/MM/index.html","cd866834c2f15fb68fe08e1cbb5ee04f"],["categories/宝贝/index.html","b7c0e2d2672c96c8f87e5b7cc59ab90c"],["categories/科学/index.html","577992a978c50f66aa26aa08ac69fc64"],["categories/科学/手机/index.html","b6b60a85247a285da513a6508a0f076d"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","00aefff535904ef7e268c84d0375fdda"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3eb0fb60b45a5c8f76f17ad2f0d10620"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","3b5966025212f0102012a9d29b6f3326"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","c8d562cc49cc21c613450d8d6cc95870"],["tags/AGV/index.html","e5b633f9bc6ca65f2c422229c1db711a"],["tags/Github/index.html","8b92622ed8ac7143714e7922d72f9eba"],["tags/Move/index.html","44dd7daf664d332770a58b5d34ffef07"],["tags/Plant-Simulation/index.html","a4230b64e91d3f743753268800373bda"],["tags/Wordpress/index.html","4a59f6d0084bd660521716265c5fcb3c"],["tags/cad/index.html","6410b55cba53314ad2bf7d1d8884582c"],["tags/hexo/index.html","57c8c59dcf94e2cd82a1219bb45a176d"],["tags/index.html","61aac1379961a09f3040c7a806bf9e22"],["tags/transferstation/index.html","be9187e83b02639288362b9e8034d2a2"],["tags/写给宝贝的话/index.html","7aa396628667efe406fe6d2cc5376577"],["tags/生产模式/index.html","f00c4673662d4285d68e582e1f6bff1d"],["tags/科学/index.html","b412ac122dbb395d0eed4b29f58cbbde"]];
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







