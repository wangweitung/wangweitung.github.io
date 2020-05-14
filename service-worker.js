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

var precacheConfig = [["about/index.html","0c8dd01a997c24a338ab774606759ca5"],["archives/2019/12/index.html","7b576367e3b1d826cd8cbc9771e2df99"],["archives/2019/index.html","30dc927141022d5796329ed0eb013404"],["archives/2020/01/index.html","c78ba18f135c9fbaebdc28e438e1f71d"],["archives/2020/02/index.html","d74b3d2ac533058cb9c8a687dbe1f2b0"],["archives/2020/03/index.html","12c77ada01f0f3b7b044b3a93d333bcf"],["archives/2020/05/index.html","b47e4ac9e4d4584fe401d4a73361d7cf"],["archives/2020/05/page/2/index.html","a604da9aca5e3e637cf353558c9994fc"],["archives/2020/05/page/3/index.html","a58bfcc2746b15e682852249a31427a3"],["archives/2020/index.html","8204a578e3118175bb9c1529d932cf7d"],["archives/2020/page/2/index.html","6e3543d60e0780dfe69a7dbe972937fb"],["archives/2020/page/3/index.html","3112445e489e29113aa0544cce731f57"],["archives/2020/page/4/index.html","5b0be139538bcdb600ef629b83e1a633"],["archives/index.html","e3bfd22cce265de75c8a89f5c8a4bebe"],["archives/page/2/index.html","3ecc9368bb2be3f7021d7e6059cd42c7"],["archives/page/3/index.html","17c54be42cd69f36521f50db7d6edc92"],["archives/page/4/index.html","d4677f8ead9568520c96bb199b9fa8e1"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","29840fb4f914dd9a029c7cd1a135ffad"],["categories/Code/index.html","61ee7516a4d203769f55c8a2699dc7ca"],["categories/Plant-Simulation/SimTalk/index.html","3982d552b7e9a389c77324d06d83cb1c"],["categories/Plant-Simulation/index.html","128ca853fb83d39333a78fc891631ee4"],["categories/Plant-Simulation/实体/index.html","2daef52999a844032eebec7ac2cd61d7"],["categories/Plant-Simulation/常用代码/index.html","b4b55e573801fc746ce45db1ac47b150"],["categories/Plant-Simulation/常规操作/index.html","094a5401deea3f20a3a09815b6dbb8f9"],["categories/Plant-Simulation/模型/index.html","24ec16237a645263110ecf5b9a85a13d"],["categories/Plant-Simulation/背景/index.html","9b30e383ed6db4d397223c0ba6e3ce30"],["categories/index.html","0b02235b85d22d65f584cc3c94650536"],["categories/nas/index.html","d32478b098fbcec4fa7580b902a4cfa9"],["categories/ubuntu/index.html","a422f671d9f03446303dd4f49a8ba2b7"],["categories/ubuntu/ip/index.html","25264a822589fe60a9f05c15adc2ea93"],["categories/ubuntu/下载/index.html","d7c2cada777e202b9c31e83a860d993d"],["categories/ubuntu/命令/index.html","0db0403050f20bbae20da2160dc4a344"],["categories/ubuntu/配置/index.html","974b005b1ef2accb9229ad93ac4abd99"],["categories/博客/Wordpress/index.html","05de8cd9eb3deb2c029affa74c79e55d"],["categories/博客/hexo/index.html","13cd3336959cd616ec811cfdb61012b5"],["categories/博客/index.html","6b7a35931844ca0f9e896bfd0998548c"],["categories/博客/typecho/index.html","1cebfdd0622dc2eb1730413cf0de2a78"],["categories/博客/统计/index.html","95e52113e3cebce11c2630bd18b4ae23"],["categories/宝贝/BB/index.html","21a4d762e3756ce163cf6d197aad69ae"],["categories/宝贝/MM/index.html","bf6b79a5921bec1f9801c3aebb9adada"],["categories/宝贝/index.html","9edd276e46e9c5bd8d40c12365d6be8c"],["categories/思考/index.html","ebe4387597ca8a1aeb21ca1d0d218ce5"],["categories/思考/职业规划/index.html","bda1a23339e7b72fa723cdcaecbd0938"],["categories/科学/OpenWRT/index.html","b81ca99a7f0a04ff3c9a5c912cdf10ea"],["categories/科学/index.html","ce99738483c4b402e9f96b4066166674"],["categories/科学/手机/index.html","a0912e9b1f227c0dca2caee93157c550"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e1724c32d469c5b2c64e6dedc492f0b5"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e878b646725336cd0d7829b97490e436"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d0757621d5f34a8c22f0554f38270a59"],["movies/index.html","33259664f3fbed1191c852412e3bcf58"],["music/index.html","7c35f4623baf08db6167ca937517fb74"],["page/2/index.html","976576fae54591c7f416beb8d8cf2a20"],["page/3/index.html","6b197585ad03d9988fabb6a3972b8a67"],["page/4/index.html","6ed67dd1f6fbefea20575b266e15fdf6"],["posts/20191204A1.html","833b1e830e8833ab8715199384893cf3"],["posts/20200115A1.html","807fff1cf4e4aeda5dd9ce97654b2690"],["posts/20200116A1.html","8de0f179cabc9f87402a1b446db97d6b"],["posts/20200118A1.html","683572cf03b1775f59f14d9c874f7283"],["posts/20200119A1.html","66fc8a513bb1a29ac8aa202062d95fc8"],["posts/20200119A2.html","ff761cf1e813fe762193826cbf4f053c"],["posts/20200123A1.html","e67d3f8d8b1358349c15dfc0bd356922"],["posts/20200204A1.html","9850bc2d4bfff2968ffe4e58171e4eef"],["posts/20200312A1.html","779c93ecfd4fef0139926a1d6bda7568"],["posts/20200320A1.html","2218c88db938651e33fc4524fc3072d0"],["posts/20200322A1.html","12b31492ef59209102ba2ea5c98b9e0a"],["posts/20200503A1.html","353ea176e987cf943673326d75e4d9cf"],["posts/20200504A1.html","826d0b9053bc142a89beb385c093a5d3"],["posts/20200504A2.html","a0bcc355c9a9ce6ca7b4d95c64fffbe3"],["posts/20200504A3.html","b325cd2f16bdcc565be9aa91638b76ff"],["posts/20200504A4.html","f196bec79f9149b6b1796815e8691864"],["posts/20200504A5.html","5e8ec428128e4146262da683249552b0"],["posts/20200504A6.html","292d548cc2396c3c3b41893526df579f"],["posts/20200504A7.html","9df7898728b62be9cc7e7d975a618c0e"],["posts/20200504A8.html","dcba2bb5a76fcefe7adbccd6e07c4343"],["posts/20200505A1.html","9c3ce013eb48be204b74db537f95e87d"],["posts/20200505A2.html","efd25fa45efda07fd033851197555fa5"],["posts/20200505A3.html","50f6c9ed61d689274ee27eeed342fddb"],["posts/20200507A1.html","de5e52cee0d4a8db281d3498e9039626"],["posts/20200509A1.html","ca5e1e38c9faf55857205e324a8b1789"],["posts/20200510A1.html","2bcb320ddb3adc8ee1fad558ad3ab4c3"],["posts/20200510A2.html","35cad401d2f528c666f7e58f16857f2a"],["posts/20200512A1.html","b81c59e1405fb28a88b87f6b379a61bc"],["posts/20200512A2.html","c9c734bae3718bdfcb7fe09a68fa9e5a"],["posts/20200513A1.html","abada5948b76c596a1a906bdd25bb1c8"],["posts/20200513A2.html","dd9c49e3da1fa0ad73e654e673398285"],["posts/20200514A1.html","bec7e17089fd00514459d555008a229d"],["posts/20200514A2.html","99c67bf1be42c578a2b25644c32e5bb9"],["posts/20200514A3.html","80bc9bafef16343bbda7b662fbbe1638"],["posts/20200514A4.html","8da936d263ebc792a1e308e4ef975db3"],["posts/20200514A5.html","b58e9e2a9315ca84d260df0cce7ebd79"],["posts/20200514A6.html","1e553e8bf73a50c3eb3a9e70d5b4f101"],["posts/20200514A7.html","2d8d83d597b711055f928a4ebc39ee50"],["posts/20200514A8.html","4c80ab60eef63e8b84d4917b4cd8bfa6"],["tags/AGV/index.html","683a6b5ba2c81f7ab4d218d69fc62613"],["tags/Github/index.html","e3600ddb06a5165d045d925e21c950f1"],["tags/Move/index.html","1c40d9e4112d7c50221463fdbb4e80b7"],["tags/OpenWRT/index.html","64a8e931de525ed0391e2d81bf4a984a"],["tags/Plant-Simulation/index.html","44b436cca182893b54244eab18c94845"],["tags/Wordpress/index.html","4c89fc8c348c8cc31fd8a06a8582b716"],["tags/cad/index.html","fd74e155dfbf1bcce6865609e3127943"],["tags/coding/index.html","51a55737183b7e4ae0b078aac6194258"],["tags/h5ai/index.html","5b3411ad5f8ab80ab0f02db8e5ee08be"],["tags/hexo/index.html","12d539625de8a8a6cb16b9f78721cdeb"],["tags/index.html","d9c536584088950f94d63e8874a45825"],["tags/nas/index.html","7057a2e6603342c02ca98862858c51b6"],["tags/tpyecho/index.html","b0c7cf2e6955763d8f235de907e79ca0"],["tags/transferstation/index.html","346a8396d4a9af752fa85fa8a974eeb7"],["tags/typecho/index.html","cd85e3b5d3f48a096d7f4d0d63b393e3"],["tags/ubuntu/index.html","f833f2104628be43611d32cd7aba05e3"],["tags/写给宝贝的话/index.html","70d5aced8f014601f7c4d181a90dfee2"],["tags/原创/index.html","b6ae33cdd88019ba792e13470d7ae3e5"],["tags/学习/index.html","5d3947090f33a652868c78dd032e6e09"],["tags/宝塔/index.html","ad83627edc367c046db911d1c7261398"],["tags/生产模式/index.html","b4cd485b20efce3fd30a8abbccbf5779"],["tags/百度客户端/index.html","90f33f81956ccb15683c5b8a60680f19"],["tags/科学/index.html","aa3a7fbefe840a227e1f55b0dd815a63"],["tags/统计/index.html","938cd58cb6d6ea2f5fcad5a11179b01d"],["tags/编译/index.html","4b6ade4c8d0d25f828a4fcb1b7581a68"]];
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







