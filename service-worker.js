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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","22af3a4ab8a1b83e5651fe841b3a6fc8"],["2020/03/12/妈妈写给宝贝的话/index.html","ef2a9fee74914a27ebe4b2030ae81ea0"],["2020/03/20/磨人的小天使/index.html","b9f97c139b8dc8ed569d54c248a2335f"],["2020/05/03/hello-world/index.html","6839fb5fc1a01b5ce61957c3110f8924"],["2020/05/04/AGV的用法/index.html","0f8b1fef6414e23aa1d9e0d0564aa1fd"],["2020/05/04/Github创建文件夹/index.html","5474f760a9bcfcd06ba02d0036bde191"],["2020/05/04/Move的用法/index.html","feaf5ed5deced67979e395fa569e94fa"],["2020/05/04/PlantSimulation常规操作/index.html","899f2779c560aa988e6e8628de6ad735"],["2020/05/04/TransferStation的用法/index.html","c169091a1e89f30c2875db07f7d405ca"],["2020/05/04/Wordpress问题解决/index.html","e015366e38f798221aee0e851b820047"],["2020/05/04/ubuntu安装配置hexo/index.html","31fb8f79efc3d61b055816d19ccc26c1"],["2020/05/04/无科学环境连接谷歌账户/index.html","5943e70aa645565ab0361c9b0d100997"],["2020/05/05/Markdown的一些小技巧/index.html","9c7bd60d42aa28e4c8915096cc83f336"],["2020/05/05/导入cad作为背景图/index.html","ce2a28e6ff715d775d6a1c7779be550a"],["2020/05/05/推动或拉动的生产模式/index.html","5e5f5b1fbd14158a7130dfef52ba2d2f"],["2020/05/07/在摊位下上网课的小女孩/index.html","adc35ed162e3b75808857a75a2df9dea"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","e69e43bfb272b9c31a65b258e1238762"],["2020/05/10/ubuntu安装百度客户端/index.html","d791cd9536f9e23d41d862f4d67a199f"],["about/index.html","1cde52f80bfb46b9c91e6dcac9fdb9b9"],["archives/2020/01/index.html","09a4093efe0129e8d8a07d2c6dc78071"],["archives/2020/03/index.html","3de135c4e5cd281b7456d9416b0b026b"],["archives/2020/05/index.html","11ccf345bfffe11abaf2c2af127c9eab"],["archives/2020/05/page/2/index.html","aa43087752db52ce1c471506cdd70d91"],["archives/2020/index.html","055c3ba83e718d539cc94ad5bfb7ad62"],["archives/2020/page/2/index.html","7916aaa3ecfbe9d08a5c114a1c40069d"],["archives/index.html","82683f5db4c76470320f775ecf84704d"],["archives/page/2/index.html","ffd25ecb5c76dbfec14b36966f292037"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","a8e6e77a68e4f698f22835f61a4595f7"],["categories/Code/index.html","f1b363511a3d0455c23cd2f12380123f"],["categories/Plant-Simulation/SimTalk/index.html","fbf2fa4317587b17cdf5e1ad75783542"],["categories/Plant-Simulation/index.html","c5c1b4763ba88f8bdadab63952b17d4f"],["categories/Plant-Simulation/实体/index.html","d36df0c9ab689bfc9b54931b5ab616ae"],["categories/Plant-Simulation/常规操作/index.html","3b1d840bf726c48c87030966e7581db2"],["categories/Plant-Simulation/模型/index.html","b9ed3c5b931950fd51ede8d3d51dcf57"],["categories/Plant-Simulation/背景/index.html","82103458fc29ca42d20f56f7bb4a2bc6"],["categories/index.html","c23a3890ea85a6867c50e2b8d36ca151"],["categories/ubuntu/index.html","53f89334b969f27019aed90fb8a1ed38"],["categories/ubuntu/下载/index.html","700a9fd5b31c1bee3de5e68f6c677955"],["categories/博客/Wordpress/index.html","050411017025ffb8f5681143f97aae84"],["categories/博客/hexo/index.html","3986e6b8362f670786c4b1387bc7f8dd"],["categories/博客/index.html","aa5df8490cb58b0158b2b6c3c820bcaa"],["categories/宝贝/BB/index.html","3df7ac1f04649a13c25a0a0a7ff2df8f"],["categories/宝贝/MM/index.html","962eeb275fdb2d2f6ff13e62df24de39"],["categories/宝贝/index.html","002c115d38b77b39ab587b81fcf4986d"],["categories/科学/index.html","1301d136cbc0a64c65dc924689fc96e8"],["categories/科学/手机/index.html","38713bb7e30a16124a95076b6a92af53"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","41e18480e6d0aff73fcbc7440fc0aec9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","bafcaad89b45813b9a3efcaa38bbb784"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","96b757f9caec63bad37327451426f38e"],["link/index.html","4a41912c8028ec4a880e20cfc54a6444"],["movies/index.html","0a7459e6e4a50684236958a429da2275"],["music/index.html","f917942fc7f6b166c16c1770ac3d161c"],["page/2/index.html","551102a6b89cc23fee9fb715e8a11836"],["tags/AGV/index.html","32fe6ded1fff5c1246c2a5583d8259fe"],["tags/Github/index.html","a7fbc80cd91f440e7010c3511d75ebe5"],["tags/Move/index.html","536f0e042677ffad772f46f33622dbbc"],["tags/Plant-Simulation/index.html","35a3e2211f8265924eac7a2411f9c110"],["tags/Ubuntu/index.html","7994c57366ea0d872fec7a87eaad3376"],["tags/Wordpress/index.html","92b232bc19ac8034df3a2142fe53490e"],["tags/cad/index.html","3873fe141d5320cae57cb80e684b2944"],["tags/hexo/index.html","4d58d1c36257bce9a4ff9c21a91c7f32"],["tags/index.html","c73d68053359403f7bf2f9f2089ff857"],["tags/transferstation/index.html","6c9391b1fe8553336de8d20724eaad28"],["tags/写给宝贝的话/index.html","6dfc754b7e276c8750842fd2bab7b381"],["tags/原创/index.html","03e3ae3b41fb981aee4c7f3a0a715e20"],["tags/学习/index.html","f8d04589c869cf311075c0dc753a3c7f"],["tags/宝塔/index.html","20dc1718be8151f9d928b62e39b29d13"],["tags/生产模式/index.html","fff21e9cb137fd30ded244a60103e5d1"],["tags/百度客户端/index.html","1274d5af1c3f658f7e4555ed9b7883cf"],["tags/科学/index.html","7c5352e06a980f1a3d5639e81b7a6448"]];
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







