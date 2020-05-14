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

var precacheConfig = [["Ubuntu打开防火墙.html","f65f6268ae0e2cc016a33c130e616389"],["about/index.html","2f554fab770bd2988ea1424583c25cc1"],["archives/2019/12/index.html","0adb0cc08c65a449769f41bdde3e860b"],["archives/2019/index.html","a4a30dba44bffd213dba23be40cfe2d4"],["archives/2020/01/index.html","3ba57eb02d4aa97c1f59f2e77266e49a"],["archives/2020/02/index.html","9be49c81f8e542af04737c4febedc1c2"],["archives/2020/03/index.html","84a380844b59f805bd207c666959ce7f"],["archives/2020/05/index.html","ee12bd04c725e193556641eaede3a28f"],["archives/2020/05/page/2/index.html","b2ab963010c3f448c62e7ffc58aef3d2"],["archives/2020/05/page/3/index.html","f1f9f73a2fa95735a1c12ad6d918ba21"],["archives/2020/index.html","1b991e762c2074ddf21e0607ab737a46"],["archives/2020/page/2/index.html","9c1334b89018c86ebd16d335bb895101"],["archives/2020/page/3/index.html","3b858178e896712187898288f2288b23"],["archives/2020/page/4/index.html","2fcb7d8a35aec177ba80d5d3734412c4"],["archives/index.html","b9e4754c321e3f9710ef930aa0b8f313"],["archives/page/2/index.html","160478fddc0ffc000356f5559dae74b1"],["archives/page/3/index.html","4d2f062dfe7d469e6256ad901f81f7eb"],["archives/page/4/index.html","e9975101251059045c3aff7a9a665c00"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","55d4d2edec667c2fae3409cf89ec898c"],["categories/Code/index.html","127629cbcab961e370d2e3afd7e93fa5"],["categories/Plant-Simulation/SimTalk/index.html","defc6994ecebb741f0012a6b13b30939"],["categories/Plant-Simulation/index.html","41c625df83f7ed32eacbfe4f94f5c1d3"],["categories/Plant-Simulation/实体/index.html","d1c3b3bc0d0e0d852a227b37d8324624"],["categories/Plant-Simulation/常用代码/index.html","a44e0ffd0069df76ae03bcee176f6813"],["categories/Plant-Simulation/常规操作/index.html","b3362997a1e90e9470b7b52ab64ab668"],["categories/Plant-Simulation/模型/index.html","ca160efd11755bf963b1aa33ccfb137a"],["categories/Plant-Simulation/背景/index.html","53fd98e6aa8ad768fe6ce311237289da"],["categories/index.html","5d10596a37db16ad5649a6e8a919c602"],["categories/ubuntu/index.html","f2657db1fcb2fcce7be9643474eb51a6"],["categories/ubuntu/ip/index.html","5a07331add03ec3f39d7346ae0d06114"],["categories/ubuntu/下载/index.html","a8e663459d93e4cf38816670ba7bdda5"],["categories/ubuntu/命令/index.html","e49458205e60e4dd747594f16b9c8a44"],["categories/ubuntu/配置/index.html","696ea60f54a08eae1ed9e9c4334be640"],["categories/博客/Wordpress/index.html","e8a5486ccee060c67a2240231ce98822"],["categories/博客/hexo/index.html","29e1b162e420ea501513ad3f760548ea"],["categories/博客/index.html","97bfdfad6de3cb6e235fbc0a98e48ff9"],["categories/博客/统计/index.html","64ee2248967defbcb2b43c115f36659a"],["categories/宝贝/BB/index.html","6ce2f4515f7a30dd891943ab6504a587"],["categories/宝贝/MM/index.html","fbba617e8126e65422e089fbead458ac"],["categories/宝贝/index.html","6c822d6a872920511fe1707af5e60c04"],["categories/思考/index.html","b937323b9bd46b7e64d514fb45364ee5"],["categories/思考/职业规划/index.html","99b4fdf63e8032fea37e90c676e1b946"],["categories/科学/OpenWRT/index.html","94517a142853c33fb19f2652c5895d75"],["categories/科学/index.html","5a22bbd92054298c218d41673805ab3e"],["categories/科学/手机/index.html","e72e884ee2a21d24a2d70f6e26ca98cb"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c8bef4dcb48dce9c8a4ac1575cc055a0"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","19b13a917c9da50162085c34c225166c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","29d662197928d87be4a4f35e263f4a16"],["movies/index.html","d5c2dc826bc04137848d1365ff7e513d"],["music/index.html","0dd51795af4e35d030c2957a0b01ea3a"],["page/2/index.html","837fc6c7c56442ddcd366fd95687ab80"],["page/3/index.html","5814042dc80807a3490b2cdee4d68da6"],["page/4/index.html","7028072aaa517ee5f4c92f811356458d"],["posts/20191204A1.html","3ec1954305029fd894d385460639bc57"],["posts/20200115A1.html","8f1e293c179bbf803ce35a91d2099e70"],["posts/20200116A1.html","372c8ff76a05d5faac89420316d08d0b"],["posts/20200118A1.html","a1e145dafb768385de5aca1ea4ddab9f"],["posts/20200119A1.html","f41967aeb46d9c08ba01faf64a954b2b"],["posts/20200119A2.html","becaa7b4d0071916fe31f9b6247d7007"],["posts/20200123A1.html","cad668bdd30cd2048902dd2da54c6cbf"],["posts/20200204A1.html","c18aea974acda1872c5e1dd787541a70"],["posts/20200312A1.html","3ad74f277b8d556f2821b738758ab9e7"],["posts/20200320A1.html","8042ae2b96528e89e7fdd1c2b2f171a0"],["posts/20200322A1.html","dce580f676441976a3cfc560db7fd2fa"],["posts/20200503A1.html","5bde4a47175615ba4c2538b17079ee0b"],["posts/20200504A1.html","f5032b37e44330256b0a6a1edc7ccefb"],["posts/20200504A2.html","f0cef9f70dcd12b3891c2ba403a30aa7"],["posts/20200504A3.html","556261cedc15a1d3ec5eb2375eeb2bc6"],["posts/20200504A4.html","0de3f96c82a19905e8ece936d6c7556b"],["posts/20200504A5.html","41930b319fd997ad1f29c0e58bf4c3e8"],["posts/20200504A6.html","4730f9f8f35ab39f99f8221ff1b6a3e9"],["posts/20200504A7.html","4530f55036301fc45231bc87f402b0c5"],["posts/20200504A8.html","7af06b07df5cdd35934d788bb44de516"],["posts/20200505A1.html","d2dcc1cf97f6fb45e8733ef73255571e"],["posts/20200505A2.html","9bd013bb8b84a0a2a22f83864fb862ae"],["posts/20200505A3.html","4d25a61df58822ff4a4a6b647698cbc4"],["posts/20200507A1.html","949fa518a53b2a108b16acc3743a0b68"],["posts/20200509A1.html","150a8a06c2580bd0e910d45bcdb75af0"],["posts/20200510A1.html","4724189ee1c66a9f7e64ed9053f8c664"],["posts/20200510A2.html","3f5b9afe109ec33b10344b207c55556a"],["posts/20200512A1.html","66b37db4fb781f3ef13b1cf5b544968e"],["posts/20200512A2.html","e104cd63bf4b25c4b351823892eab350"],["posts/20200513A1.html","955bf43905c2dbc780d729e163591cb7"],["posts/20200513A2.html","5ab5001ec6b0c020c4f6282c3655313b"],["posts/20200514A1.html","efe5f38f304fd0fabdf8a392a1756596"],["posts/20200514A2.html","8622fb2dbba06dc73d97e33bbd0a7854"],["posts/20200514A3.html","ddb982fb5966393f677458762721f407"],["tags/AGV/index.html","19190b3fed0bf28f88fc6fad42abe3ae"],["tags/Github/index.html","bb123798d18bd42d35acf8101de97250"],["tags/Move/index.html","6df5805c90f49d1ddbae3ba66183f5f6"],["tags/OpenWRT/index.html","c02bd32b8f42fa122f7ddc151683d9ac"],["tags/Plant-Simulation/index.html","f9c9af965646c0896897539e04d457a0"],["tags/Wordpress/index.html","91b9b6d989d0c7dbe2d0a239f9b00678"],["tags/cad/index.html","b9b831cf203f5c59ecc96a6f466a6ecd"],["tags/coding/index.html","ae5ab8595c56f325d903c6dce21a7b44"],["tags/hexo/index.html","335016e0a45616a5afabfc7ca5dbaaca"],["tags/index.html","771500481e962d80b5a94ec21be17bc7"],["tags/transferstation/index.html","71433699de69184668174442e70fb981"],["tags/ubuntu/index.html","20c78e4a7fa2e40b160b99021c0c4929"],["tags/写给宝贝的话/index.html","5b6edd66eb96b5d7724c9ae08ac7312c"],["tags/原创/index.html","ed7177933fd4d2a498671bdacf8fb185"],["tags/学习/index.html","c45b4659d3a831608039927e5c64adc1"],["tags/宝塔/index.html","7be9ce4f3d48cd33d5a5c23f8e5d4e40"],["tags/生产模式/index.html","0a2a5a1796bdb1751f516f5914635238"],["tags/百度客户端/index.html","78d214236a73bdc60d4b0b128e46d1f4"],["tags/科学/index.html","23eb425af8339a09f7962b8be0ccb80c"],["tags/统计/index.html","072f68505e38c541a7eb33654e618c46"],["tags/编译/index.html","ebc0a7aa07b84f60dae18357e97c8afc"]];
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







