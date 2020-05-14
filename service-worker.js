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

var precacheConfig = [["Ubuntu打开防火墙.html","0c00b5141b1ea4a8181c39e4c6cdc3fb"],["about/index.html","541c1fbaa7481216fafce5caca6ed99d"],["archives/2019/12/index.html","5c8ae4bdf36b326fefd9c0b20dff9dba"],["archives/2019/index.html","839ff3ff59913082dbab8c1471f80e77"],["archives/2020/01/index.html","49fec432900725200eb2eba456ce85c9"],["archives/2020/02/index.html","020cb40fa4b2645d7ec86a24b264c1b3"],["archives/2020/03/index.html","01a954cf1a8f1bdba822bff073771406"],["archives/2020/05/index.html","192b325490206c4aa2ba820c644f59a6"],["archives/2020/05/page/2/index.html","49fee5d481cc5cbe677182c06fb79d4f"],["archives/2020/05/page/3/index.html","607520eb8bd6b7221f62a525f7555ff7"],["archives/2020/index.html","b6a585743a3385e78a3e5585a48302cf"],["archives/2020/page/2/index.html","b209ad8aa007e41f28e852e993403693"],["archives/2020/page/3/index.html","8b73676a40054d25fc77f4afc2e8616c"],["archives/2020/page/4/index.html","f4ec933b358391a45cb5b6c14e226380"],["archives/index.html","b5e5c7c1cc7edc934dfac52d95a2e495"],["archives/page/2/index.html","dfc7f8ad5d0eed8094b5979e7b6c4ad7"],["archives/page/3/index.html","de6c8782d544a7a42015358fe18e583c"],["archives/page/4/index.html","e543c790bbbb84e11e50cb343a5f1e67"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","77f5cc5baf4edf3e2f709eb837b83d74"],["categories/Code/index.html","c3aa4b6fa35919d498361d014dbba804"],["categories/Plant-Simulation/SimTalk/index.html","c8a9923101c527df074122c58d5f00e9"],["categories/Plant-Simulation/index.html","b0b3cd5b7cb247cd754af1e45371eb68"],["categories/Plant-Simulation/实体/index.html","055d104baab01276f5692318981dd605"],["categories/Plant-Simulation/常用代码/index.html","70090c4078658d0d5e7214e08b6595e3"],["categories/Plant-Simulation/常规操作/index.html","b723e9b6203d247e54f260e2587bbfb8"],["categories/Plant-Simulation/模型/index.html","3d6b7d610d95e86c10333711c40b9e7c"],["categories/Plant-Simulation/背景/index.html","7038d78316d0dde44a1457c78b9c4bd9"],["categories/index.html","ae361e5538245619756d2b4846128004"],["categories/ubuntu/index.html","263bd7a482b1f0a449924da64eef4f65"],["categories/ubuntu/ip/index.html","68a446747f43fd30953a367613d06b66"],["categories/ubuntu/下载/index.html","6dd5dcf07800f84929fc018149668660"],["categories/ubuntu/命令/index.html","08f7308865c6f5e288e67e946451fb91"],["categories/ubuntu/配置/index.html","7c899b00af866064929b1f28bbda3907"],["categories/博客/Wordpress/index.html","8aac600b05d41c3c815865d37e706119"],["categories/博客/hexo/index.html","f92cb6695aca97e6da66f96c131a6837"],["categories/博客/index.html","6dfff92e8c860be56476684fdf9da982"],["categories/博客/typecho/index.html","9a2d744a73a98233985b8ca467881694"],["categories/博客/统计/index.html","55c0c02edc1d8ab5776abe9cdd5c659f"],["categories/宝贝/BB/index.html","936debd044a672e27f7648e6a34d67bb"],["categories/宝贝/MM/index.html","f608add342a28208006c76b60d112107"],["categories/宝贝/index.html","7c91290530515fb4289e7134f8037640"],["categories/思考/index.html","be08fc684bad25164f91a778afaf564b"],["categories/思考/职业规划/index.html","177c8ff31e4e274ba201bd84c3ca59e2"],["categories/科学/OpenWRT/index.html","d6d668492a695f7df4a4331763ce9879"],["categories/科学/index.html","8ed504f1ac26be2ebbd1b71f92095857"],["categories/科学/手机/index.html","8084542688691e32ac94bb24e75a8b62"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","80eaab9eaafd6c64a3fa048bce6a81fb"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","3711501ebdbfad157b0f3d6718f1e45b"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4ea30c6dbf80b2e61a1f03fea74b8fef"],["movies/index.html","90f8d6cf34c31158ae511f9c4106dd57"],["music/index.html","f69488f8bf97a4d4b6ed2065e478f3a3"],["page/2/index.html","b54fbcdd107b8c44e2124b047eb2257c"],["page/3/index.html","a7f73892af99af10306ec1f1102a3f0c"],["page/4/index.html","304e055650bca0d3f41402aa32a27d69"],["posts/20191204A1.html","418613c27080c420a7d13cb9d385933f"],["posts/20200115A1.html","9f092879532906a9421e95043afe5799"],["posts/20200116A1.html","4ff641252fb5ab1be52f57f78a5848e9"],["posts/20200118A1.html","3900755bc7bfd019575c1ccc49b97e70"],["posts/20200119A1.html","08283f608958556cf95781a342330508"],["posts/20200119A2.html","5b9f9df929cd36dd0afa9a55d27ce2c8"],["posts/20200123A1.html","3361c806298e1f4b76c10378a3395e01"],["posts/20200204A1.html","ff0748ac67671c2b9e8f8da8339a3ee2"],["posts/20200312A1.html","c9efc20e52fe4eccefac5f2ca66f2f7d"],["posts/20200320A1.html","5342c35df7f3e2d5277d21bb9b90bc3a"],["posts/20200322A1.html","7e2f9580f47fed0379d2924b98fa158e"],["posts/20200503A1.html","c6bef283f4274b8391366d0c83f6de35"],["posts/20200504A1.html","4ca5c5e287ce58c02c818d8252cb01e6"],["posts/20200504A2.html","87cd688eeb4cb46538dba5a87e9b8a98"],["posts/20200504A3.html","8ad2318fcfb25882a9fb6c5611d4d0cd"],["posts/20200504A4.html","f9de2fd2a74657d93d1fee49d9d877a3"],["posts/20200504A5.html","02b454cc9c4d23928fb906e235b3aaa7"],["posts/20200504A6.html","e73d0685e086ec230ac158a6eb94a954"],["posts/20200504A7.html","d4d4ffbd7861978d4aaee98bb2ce7d90"],["posts/20200504A8.html","a7711075ec5079082f97fae35b0cd82e"],["posts/20200505A1.html","fb643f05966cc8c7306540a44bf81054"],["posts/20200505A2.html","ec20e422d93187a22d48d3656a99a967"],["posts/20200505A3.html","0bd45946626a50df516e9063a38b3722"],["posts/20200507A1.html","68bdf8debc9a9e7b73c085d764d8e76a"],["posts/20200509A1.html","16a038d8c537f3789cab7ed34f3d8628"],["posts/20200510A1.html","e305e1225f89d339b4e7d1da137a1522"],["posts/20200510A2.html","7363a19aa6c1ef0607e4b2ccb645a11c"],["posts/20200512A1.html","f0d62bae10eee31c2898b33dc58f201e"],["posts/20200512A2.html","1c23ac44e3b90f674a3745826c40643c"],["posts/20200513A1.html","6dd2eae84ef234f24bdf8ddb610941a4"],["posts/20200513A2.html","5382bac7ff4f68da496d2d58b4e2d52e"],["posts/20200514A1.html","61946571d97a41c89a3ac3b9a7c0da23"],["posts/20200514A2.html","fb2b96a033bfe6899afa2a30dff15421"],["posts/20200514A3.html","be05785812bba5bda153256f33b69d5c"],["posts/20200514A4.html","ccb2b4e47cd27346fe7044f23c845e9a"],["tags/AGV/index.html","a8f4fc76ae37ae968257231a88b23b93"],["tags/Github/index.html","5ee62168533843b4e9e270b02eab087f"],["tags/Move/index.html","7833cc7ead3e56d7c2a58c13b853b5f7"],["tags/OpenWRT/index.html","be6b4c1d136d7ec44659afdde5cb9e80"],["tags/Plant-Simulation/index.html","8655de0c68287f296610ab1153d82402"],["tags/Wordpress/index.html","2b6a2933be023f9812a55245ef6ae0c8"],["tags/cad/index.html","21362ae8c328fb3083962ecde0ed89b8"],["tags/coding/index.html","0491c3b2a47e35c52c92d5da112d0f31"],["tags/hexo/index.html","f8245a1559528b6f982343e7a685f0fd"],["tags/index.html","5df7317bab6c89795dbdd81351a03a6d"],["tags/tpyecho/index.html","e6a3a157d8836b6c7a1dcf8b6761a4fa"],["tags/transferstation/index.html","dfd5234a43ef54b3cf07e1ef1334efb9"],["tags/ubuntu/index.html","62719083ff5e534c65e1eb39962184b4"],["tags/写给宝贝的话/index.html","e31ea01641a3b3d6c63fb7725904fcae"],["tags/原创/index.html","45dd1d1bfa20a19b2d040d83db9afd5b"],["tags/学习/index.html","0a7f478f1eede3ca2aef4d2554c5ebe6"],["tags/宝塔/index.html","88f7b8eb6fa854caebab71f912d48fa3"],["tags/生产模式/index.html","037ded17e3a7c30afc8ba597d575ccbe"],["tags/百度客户端/index.html","f94b5302784187abe53a0a7122d82a1e"],["tags/科学/index.html","17dd2864dad4e6c8aba5220eb54b07c8"],["tags/统计/index.html","c1bccb1de367725cf55cd252b87acf96"],["tags/编译/index.html","eebd430696f308fe1df28bda4363ff91"]];
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







