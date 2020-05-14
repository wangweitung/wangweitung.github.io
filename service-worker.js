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

var precacheConfig = [["Ubuntu打开防火墙.html","9b755d72e702d06d8206a1bf1e64eb58"],["about/index.html","3f6c6962ef11998ed980540a5a1b7d4b"],["archives/2019/12/index.html","a3421da81efd6f39da150cf9f74048a1"],["archives/2019/index.html","de123251cb5b9a05dbb69e28414d528d"],["archives/2020/01/index.html","0cffa2cb623d94687eaa44007f97388b"],["archives/2020/02/index.html","80257386a1b661457e0667e330223819"],["archives/2020/03/index.html","5fa9271d4287a8e0beb58899d7cd147a"],["archives/2020/05/index.html","3ae43372c2b73c28abf9a10ddae728a6"],["archives/2020/05/page/2/index.html","e27bf7f38ac7eb85febc8e9456eea87b"],["archives/2020/05/page/3/index.html","112983ba93bab2745c1e91b2cbbbd336"],["archives/2020/index.html","fc1e9d45185a3163eccf0dfd6eb4d8e8"],["archives/2020/page/2/index.html","30eb0d795c53e7344bd71b59b65c5bd6"],["archives/2020/page/3/index.html","2d0e8076d9d11d7bb156c41eeb139c55"],["archives/2020/page/4/index.html","952aa8d93c9dbd70c8e51112666517ce"],["archives/index.html","4e98df35dec7548ac859a654eed3bd0b"],["archives/page/2/index.html","8742af8c84eca158e57cf247375b1303"],["archives/page/3/index.html","b73a83fe71799b13d2812eb92423bd44"],["archives/page/4/index.html","b6d22fccbcccf293c8710a363424c861"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","d7dfb2cd46a14420a418ee1ec93c0285"],["categories/Code/index.html","f0584e694c632d635d3f56ec2da94788"],["categories/Plant-Simulation/SimTalk/index.html","4fb01e665bffb105573f3ee3a26fd931"],["categories/Plant-Simulation/index.html","0d5e362af66a6d808f87b616072eb131"],["categories/Plant-Simulation/实体/index.html","8c10a10e60ee40dcbed7991a91a4da17"],["categories/Plant-Simulation/常用代码/index.html","f27069ab801a5aa84412bf174b081fea"],["categories/Plant-Simulation/常规操作/index.html","c9627ba40ec91cbeef08a3ac083c188b"],["categories/Plant-Simulation/模型/index.html","13a39260151c6e93c373ea4c83b0b230"],["categories/Plant-Simulation/背景/index.html","25c8740f1ac5786c5cce0a270f6419b5"],["categories/index.html","56c42c77c728539410310bb7191d483b"],["categories/ubuntu/index.html","32bf144891b47fa4a3aed7ce9e83a02d"],["categories/ubuntu/ip/index.html","68562b7db642b12c167fb99e2d1ea7b0"],["categories/ubuntu/下载/index.html","f32abebe579624648d854373993fd11e"],["categories/ubuntu/命令/index.html","58027f699d4c196fd2fab61502f924f5"],["categories/ubuntu/配置/index.html","a4c2614fd9d39d994e7226799779b1d3"],["categories/博客/Wordpress/index.html","1b9b717c9052ea52ec31a1e77713e9c1"],["categories/博客/hexo/index.html","6a3a4371097a44a0588a245b53034219"],["categories/博客/index.html","d39d1c1f0f28a26dd96d59d3b24266e3"],["categories/博客/typecho/index.html","006b3e1520ea661ff1fc11cd34450710"],["categories/博客/统计/index.html","221c6e47dfca1c42a671758717fa42b8"],["categories/宝贝/BB/index.html","b7ba2ba16da330d463153430c31fc7d2"],["categories/宝贝/MM/index.html","545d79f85627d45c0f2ab3d0dc6659f3"],["categories/宝贝/index.html","71b9756aad915c99bdacf2a90d0103db"],["categories/思考/index.html","9820b430b0de7eed0904f8c98f7e8943"],["categories/思考/职业规划/index.html","90639a02a50b6fc4950a2813f4c20da9"],["categories/科学/OpenWRT/index.html","3f1c9dc3987ac5d29e6e4858db81c40a"],["categories/科学/index.html","4c534f4a75e4444ec32a1b0900425981"],["categories/科学/手机/index.html","de37f6fd07f677f6d1017985d2ac9408"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c31d424685fd8c7bb8825032acabe308"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","093f011ddca99d9d821d9f65a804185f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","e2cf395576a853b2f15295ce8a5afa96"],["movies/index.html","ec327cb1eec1326b6604093b01260871"],["music/index.html","c149d3c9f9c185f6d60c5e55693dbdc3"],["page/2/index.html","f4d2134fdda34006961383965084a2dd"],["page/3/index.html","7d23b5dacd57c12da193c33cf33e1cf7"],["page/4/index.html","9d8814309888526b6d6893e132068fe2"],["posts/20191204A1.html","3a008d88ad18bb5f4f11cbe29f591adc"],["posts/20200115A1.html","70a9c2b8f9d2f59f9beb3311ebc99aa4"],["posts/20200116A1.html","c467a1f4d57468ec5aec474c778c16be"],["posts/20200118A1.html","f3cc403e2ad496aa0318a61c014ea598"],["posts/20200119A1.html","aea258de739e723dbb7bdf5518e91020"],["posts/20200119A2.html","1ccf178130fe420c8a719d94a5b81239"],["posts/20200123A1.html","fd5232fd202d3ad33a65b2659c5544a1"],["posts/20200204A1.html","5b3280ac3b8c794e83d9dbb4d2970a44"],["posts/20200312A1.html","a38fb0d79cb311e56fe7c131ff8569ed"],["posts/20200320A1.html","313fc5fc57459cab317dd688ad114099"],["posts/20200322A1.html","b4b55597d92d7444c8b00defc6f423ae"],["posts/20200503A1.html","7bd022654334c947e261f8a12aca62a4"],["posts/20200504A1.html","d4e51cc24e6461ac35f07a606f720f3f"],["posts/20200504A2.html","5c6717393751cee240576d9dd33facc0"],["posts/20200504A3.html","efcded139b3337a818f63d9d37738166"],["posts/20200504A4.html","f71319cbb163b16fa31f49c9d68556ce"],["posts/20200504A5.html","1d4dad36c802a94185f90b49be53d869"],["posts/20200504A6.html","b5f3904fb09756c31523a98d999fc820"],["posts/20200504A7.html","88d21897b0668b4913da361f4b3e1b2f"],["posts/20200504A8.html","22fa4d8200bc575f20b3f0667886e02e"],["posts/20200505A1.html","ab81ec889a844a4a20d75d7070821556"],["posts/20200505A2.html","ec16b88abd089fd3b9d787045105cb36"],["posts/20200505A3.html","5eff0ea3d492db394cd37058d3a6cd02"],["posts/20200507A1.html","1042dc8de6f1e5e139223e4c1339edf6"],["posts/20200509A1.html","f7aff2155f2dc7425218249e317f84f0"],["posts/20200510A1.html","7cf1788b65f571e3be8087729519dc23"],["posts/20200510A2.html","fc446d1ae04d63377b153e7bc2c56330"],["posts/20200512A1.html","6f0591d4474cb8e99f21ae4761903193"],["posts/20200512A2.html","c9c7e3e9dddc6d29841d7a5a7cfc9645"],["posts/20200513A1.html","b759b3f94c658e6dca3ff6fcc664ad19"],["posts/20200513A2.html","814bc2c75eab95cc492fd6970902805f"],["posts/20200514A1.html","5af44acf2a50b8592db891b2cea47e70"],["posts/20200514A2.html","0e57d99528436ca43f1928a15702061d"],["posts/20200514A3.html","1659247a36a29deb65fa9b9d9c0207f5"],["posts/20200514A4.html","bb41fb31d1036a12fa18c0df370fb4f9"],["tags/AGV/index.html","c84fa780a59a5926d57ea750601e82cb"],["tags/Github/index.html","b4eb144ab17f6935585fcba2a8356759"],["tags/Move/index.html","4e297b377ff155d379e18838a3dff490"],["tags/OpenWRT/index.html","7d858e66ba485b6c25121d525b6d9e2b"],["tags/Plant-Simulation/index.html","08aadb0415d74e95c1ce116bd5f0db93"],["tags/Wordpress/index.html","166c26b9ab13e6134fc0c36eeca2e00e"],["tags/cad/index.html","c51a99a3bf6b91a6db4f64cf2f89bf26"],["tags/coding/index.html","abfa79381ea006d5fc3833fe9a35a51f"],["tags/hexo/index.html","2816d64455f1fd1c3a802e819221ab03"],["tags/index.html","c8aa430fb06d8fceff2b75ca7e308259"],["tags/tpyecho/index.html","b0d039337ac43c7555b994d75451ba79"],["tags/transferstation/index.html","5e21d980cd2ed1fa4850919a31371c4a"],["tags/ubuntu/index.html","b27f9fad6f59b91533e8ea902d0ffe21"],["tags/写给宝贝的话/index.html","058e7df8351e109474021b969757b679"],["tags/原创/index.html","44c36cbf3bd92a91ed706d7bde0892b7"],["tags/学习/index.html","578846aa83e7f9007aba5ee74139319c"],["tags/宝塔/index.html","401e119fba6430d1baae498225b98ab9"],["tags/生产模式/index.html","0500e83c6ce225832ade153872b70c99"],["tags/百度客户端/index.html","270bde43fd2f1f22b028f45847f742e6"],["tags/科学/index.html","7d26534a7390a4a4390bb674823684e8"],["tags/统计/index.html","8797e86f9507bd8c6f09cf385a16186a"],["tags/编译/index.html","3ea39955ea3041d598ad98789d487dae"]];
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







