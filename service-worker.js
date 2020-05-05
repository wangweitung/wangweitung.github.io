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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","bd860fe988cde83202792cee120ce15c"],["2020/03/12/妈妈写给宝贝的话/index.html","56b690913e85f9c984ab8561eb2ab8ef"],["2020/03/20/磨人的小天使/index.html","c6a692eeeeb5af077f035ea6b96fa074"],["2020/05/03/hello-world/index.html","a53615f66025ad357c8b5a9ab286c51b"],["2020/05/04/AGV的用法/index.html","510463b2c2ed0d6900e904fb48e2bbfe"],["2020/05/04/Github创建文件夹/index.html","065ea2bd95a7a2d3fd4672e360510597"],["2020/05/04/Move的用法/index.html","99c7f85b753e6e9f419e74c94015e806"],["2020/05/04/PlantSimulation常规操作/index.html","57537a9c5740f2f5607f850f190daae5"],["2020/05/04/TransferStation的用法/index.html","a1aab9e42e7123c56c6955dd830cf406"],["2020/05/04/Wordpress问题解决/index.html","108b00c477749f5d82493277fc4f18ee"],["2020/05/04/无科学环境连接谷歌账户/index.html","197960e6e8df1d8a3f7816c694117188"],["2020/05/05/Markdown的一些小技巧/index.html","d0ed1505e3418b705d7320d5353470f7"],["2020/05/05/Untitled/index.html","7cbb29df617dac766d12a20681d7942e"],["2020/05/05/ggg/index.html","e59b7b72b72692a194cac2d7c9f5ff5c"],["2020/05/05/导入cad作为背景图/index.html","405f09b5d368bfb808f13190ea6818c4"],["2020/05/05/推动或拉动的生产模式/index.html","41937ecdc97913054b87ff62fbd7270a"],["about/index.html","72ed3babb4a8c7b43cb8e8ed49d24958"],["archives/2020/01/index.html","cf73804d6538022bbe730a5ce7379f61"],["archives/2020/03/index.html","7b6f426dc2dab4306a397153d3fb0859"],["archives/2020/05/index.html","07b08416cfdbb1639a7565cf2505bea9"],["archives/2020/05/page/2/index.html","0b1f9d8c864489d7b735d4e54d4a2f45"],["archives/2020/index.html","dace93406ee7247a7da5c59f7125686e"],["archives/2020/page/2/index.html","f60863817584ec7ba12d8380679e6f1c"],["archives/index.html","8f195b0e4901bb20b8d7107072fe9dc0"],["archives/page/2/index.html","f67ab40308a5662f4ad57d061c7db7fc"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","ce2e27222dfc9b26f5c6b2f540413763"],["categories/Code/index.html","960bc76adc190181a32304766329f85e"],["categories/Plant-Simulation/SimTalk/index.html","4776090f3c7717e2e65833b14bd4b94f"],["categories/Plant-Simulation/index.html","ddc501723878fce9323ddb809344b408"],["categories/Plant-Simulation/实体/index.html","11fafedf150648409ce7892c16d18e2e"],["categories/Plant-Simulation/常规操作/index.html","00f442935e6d23e61bfcccb36dc3f6aa"],["categories/Plant-Simulation/模型/index.html","cfcff3b96a8c7d671c84ab62b39d52fa"],["categories/Plant-Simulation/背景/index.html","4e87358cca3deb056dbcc7fb364a768a"],["categories/index.html","0f153a5a06de4f4d4621d33632529fcd"],["categories/博客/Wordpress/index.html","dce206e795c55c4024e68adefa25d63b"],["categories/博客/hexo/index.html","4433c1bc21a64e9d08581ac3afba7ded"],["categories/博客/index.html","568da1bd4c48462486c8802dba5e4771"],["categories/宝贝/BB/index.html","9ded2e79c0d379b9d07d51d08372b7a1"],["categories/宝贝/MM/index.html","573abedcb991f90d9f36661b3072e04d"],["categories/宝贝/index.html","8f861b01189322aaae67dcab1c993197"],["categories/科学/index.html","b116f76e22933124a08e50c00ffbc644"],["categories/科学/手机/index.html","2d6aaab6809b98100404f727d7f15ae9"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","00aefff535904ef7e268c84d0375fdda"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","f70618f56cd202a9ed0dfa950a92e527"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","a66bd6e58e83957d70a5b612404def4f"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","078377af8b31d895bbf87dfdfecf11dd"],["tags/AGV/index.html","52cc6af3a3e3996070b86d0872dcfa17"],["tags/Github/index.html","772cd1460bda7241c5dd240be8b0f3de"],["tags/Move/index.html","700af36b5a43ec86840886c04efa144b"],["tags/Plant-Simulation/index.html","1e38593ea70811988fa0acc7441805f7"],["tags/Wordpress/index.html","ea63304a0387ae984a23c67a443c3ce6"],["tags/cad/index.html","aafc97781a3ea0818d18c7466016f0a3"],["tags/hexo/index.html","b60f5244591717b6d397ae7d2f48d3b2"],["tags/index.html","71880d2cb9ab7f8e678b2e5f5c1cac22"],["tags/transferstation/index.html","b6bf3bbb004ccde4da6a30d33f937350"],["tags/写给宝贝的话/index.html","0722397f42d9bda59d61c56fe37f2043"],["tags/生产模式/index.html","6807170797eb278b6f3eb9c13b29b8a4"],["tags/科学/index.html","a3062ab925da27a4727a72a625199551"]];
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







