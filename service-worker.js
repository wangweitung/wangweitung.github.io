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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","8f90637133006d1c36eb5f9e87f1937d"],["2020/03/12/妈妈写给宝贝的话/index.html","903ea2bba528b90b368753ab1e24a48a"],["2020/03/20/磨人的小天使/index.html","06fefc9c76a7b070ab61d1d52288a56c"],["2020/05/03/hello-world/index.html","7723d941e799c07986130835434fc8be"],["2020/05/04/AGV的用法/index.html","c938c4f43f953d40619b90ebb15eee54"],["2020/05/04/Github创建文件夹/index.html","52a68bd92df468a45a66b61302973945"],["2020/05/04/Move的用法/index.html","9cd9b996bed311244d4c948fbf57656b"],["2020/05/04/PlantSimulation常规操作/index.html","9cf73f9b7824257517cbf54ab6762c00"],["2020/05/04/TransferStation的用法/index.html","97dcfae6f2edb38136ec4450cf15f9d4"],["2020/05/04/Wordpress问题解决/index.html","5df8a230e15761301744779f6fbe1c26"],["2020/05/04/无科学环境连接谷歌账户/index.html","df41fc4f41ddb425cd17fd931278f523"],["2020/05/05/Markdown的一些小技巧/index.html","48b18056579e77a5f7fa13b87b61fc02"],["2020/05/05/导入cad作为背景图/index.html","748e5552471382a8bc5c57f833ab5f64"],["2020/05/05/推动或拉动的生产模式/index.html","daa25738e268924292f76c8bbb4c8305"],["about/index.html","e0028d1aeb6297ab12014fc105994a07"],["archives/2020/01/index.html","9d16827e511e3162d8f48248c281de98"],["archives/2020/03/index.html","65024d0147d8f47388fbb5cf45c866fc"],["archives/2020/05/index.html","e8efd30fa5ad522cf53771f681b96cbd"],["archives/2020/05/page/2/index.html","a2d8e6c086c31326bd0a0eddd0010d60"],["archives/2020/index.html","5cea0ed4744322b7199881d44a0f0d80"],["archives/2020/page/2/index.html","cfc6ede5b69ec0a78f1c5ced19f82f5c"],["archives/index.html","582863c2ee6256c769bb7c50746cb80d"],["archives/page/2/index.html","e08b1c284dfce0877b39ea35b1d8e061"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","1e4a70b56cc6768d233a892865929cae"],["categories/Code/index.html","8fac456109c680770cbef926233076bf"],["categories/Plant-Simulation/SimTalk/index.html","1dcbed7f0673832bc08df18f5f94b16e"],["categories/Plant-Simulation/index.html","885e131b37e69949546128e25ef211a3"],["categories/Plant-Simulation/实体/index.html","bb9bf031240a2c56d9fc48e7b7b13bd1"],["categories/Plant-Simulation/常规操作/index.html","ec67ad81d9441360eab5bf34828c01a8"],["categories/Plant-Simulation/模型/index.html","5da57394020f9fde49915b65215466f3"],["categories/Plant-Simulation/背景/index.html","0864b1c36ef9099a21736cd66771bfce"],["categories/index.html","107188e9886d7ff776a995aa9cf2a834"],["categories/博客/Wordpress/index.html","f4dd1a312aef69ca263b65fa40716f32"],["categories/博客/hexo/index.html","08b7f3a5e6f8bbc662bff14f5d4861f8"],["categories/博客/index.html","93033f9deee815186fa0bad1946cc331"],["categories/宝贝/BB/index.html","e0dedca55bee80ae24be4e8e0f1dbbef"],["categories/宝贝/MM/index.html","ebacdd6faba92509066d862d530d747a"],["categories/宝贝/index.html","9767f9a9f19e04ea29348dadc2eb634b"],["categories/科学/index.html","b0d4213f8f712dbc35c9e425cd4430af"],["categories/科学/手机/index.html","94a7a8827c14d86a9fef4b1a677b71bd"],["css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["css/index.css","00aefff535904ef7e268c84d0375fdda"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7cb18eabf08d4df3f872b456978b1d30"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","7b7f0d6eefbc94ef581f62e1994e7c8b"],["js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","911db4268f0f6621073afcced9e1bfef"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","02a5d556b77203f4545adf6d6e7401ca"],["tags/AGV/index.html","ec4257b875ec8d1f1c3cf399da3f177c"],["tags/Github/index.html","361fb02e9dd2303700c176a3cc3f03eb"],["tags/Move/index.html","8f7df8e1f1bd881cb137d452793bffdf"],["tags/Plant-Simulation/index.html","9ffff9900aadb277959d15b263eff00d"],["tags/Wordpress/index.html","97dd148599f2b454884b5a0bac3a811c"],["tags/cad/index.html","f7ac7071a01cc9180ac54b134cef90d4"],["tags/hexo/index.html","571a9b1057dc7e63969e2f3a2d1de3a8"],["tags/index.html","a89cec2aa9b5d7147b3aa47ec9d26317"],["tags/transferstation/index.html","56e63bf8784daa287f56181d459e5ed7"],["tags/写给宝贝的话/index.html","9fc2db52c119048d5ba667e3010add87"],["tags/生产模式/index.html","3420de26a0c16df73a367508c3466da0"],["tags/科学/index.html","b8cbfb554aa4e2e82e45f2e396570459"]];
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







