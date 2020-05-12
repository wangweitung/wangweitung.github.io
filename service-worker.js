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

var precacheConfig = [["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","519e8225a61d0f6dfbb8c34f82e53323"],["2020/01/18/Wordpress自定义页脚/index.html","79f65648ea889d69a2a065822c482e21"],["2020/01/19/关于coding/index.html","956391b87964c394efd8b9d25ca5bfcc"],["2020/01/23/2020-01-23-今日武汉封城/index.html","ed6f206c25450319fa303ebab8ea2573"],["2020/03/12/妈妈写给宝贝的话/index.html","3e0825c51a52aa23c74aff9ab739a45b"],["2020/03/20/磨人的小天使/index.html","c1161b1c8696b3116d1162d46d027149"],["2020/05/03/hello-world/index.html","388faebe2fa96b8daf454fedf44ae25a"],["2020/05/04/AGV的用法/index.html","4c5eb08a9b96f6e536ee737c01571a90"],["2020/05/04/Github创建文件夹/index.html","eaa1768f45bc555bdfbdd7d30bfd3741"],["2020/05/04/Move的用法/index.html","64c4056f39e9cbc2aec9feffce1cc4fb"],["2020/05/04/PlantSimulation常规操作/index.html","412741dfdc2a48e2ffb47afe05fb4db9"],["2020/05/04/TransferStation的用法/index.html","3e62ca9ee2ab3165d5ef8bb2e97528d6"],["2020/05/04/Wordpress问题解决/index.html","3be729ebc26194da90c3ac7289b1187e"],["2020/05/04/ubuntu安装配置hexo/index.html","561075eb13477015841d65959b257053"],["2020/05/04/无科学环境连接谷歌账户/index.html","80d6878f62a5cd80acc4cc827c7fabfb"],["2020/05/05/Markdown的一些小技巧/index.html","209461d9a59fd0b274099cb522222ba5"],["2020/05/05/导入cad作为背景图/index.html","c2f3b4264821c17e5f4ad73b4abaeb52"],["2020/05/05/推动或拉动的生产模式/index.html","e2c9c3686a59eca04ed066a7cb7c9ddd"],["2020/05/07/在摊位下上网课的小女孩/index.html","2ee1db497c98946594e32a3d9ee49581"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","e3997a4df941d1eec70fd6bfab09adc4"],["2020/05/10/ubuntu server配置方法/index.html","16abe25955ab1db1890676ee7d00e208"],["2020/05/10/ubuntu安装百度客户端/index.html","0a8aa6f4a2b3fb4ec2172ebd1bcf8b4b"],["2020/05/12/ubuntu server修改获取ip方式/index.html","58ef8720f0df133e3f1cc26a3068ca1d"],["2020/05/12/ubuntu server基础命令/index.html","21ea56dd0236e2b679624c8647c29969"],["about/index.html","99073b6aa2c0581b64d9a52bfb0fef40"],["archives/2020/01/index.html","95027756bab1d6ed6f3e42544d95cf39"],["archives/2020/03/index.html","4478c3327bfa1458c0f2ef9acf2e917a"],["archives/2020/05/index.html","b5bf9194b4d4a540542516fe1c9d2a20"],["archives/2020/05/page/2/index.html","126309cee02b4562d488404cbbae56e2"],["archives/2020/index.html","f20c40a66115c0ae5b36a049d1a65b3d"],["archives/2020/page/2/index.html","b16f5e6817662e777fa611c0722fd8dc"],["archives/2020/page/3/index.html","070f2cd1c04702405fce8d24e7ccbd0a"],["archives/index.html","4b34e15e34a3d5e27b5eecb59eb28bd9"],["archives/page/2/index.html","3bd535f6f407af89bb2d61fc7276e050"],["archives/page/3/index.html","6fc0fd7d47fc957ed42bf36f27065142"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","8d2245c5a7ff9984b83a697346c1c33f"],["categories/Code/index.html","08bf38b3aaf4d605045ed9a1351b62d8"],["categories/Plant-Simulation/SimTalk/index.html","573a916529ce90715c2485335ef26ed1"],["categories/Plant-Simulation/index.html","bf51720807a54d732450fb67e3d6fff4"],["categories/Plant-Simulation/实体/index.html","ddff0cb85d27ae2fe609f0a4baa26bc8"],["categories/Plant-Simulation/常规操作/index.html","ce1db090a52d7aaed2be41099bd9f522"],["categories/Plant-Simulation/模型/index.html","002a4faf42908375bdaf40ed4b2c84a2"],["categories/Plant-Simulation/背景/index.html","ad2a5165dc3a6d0c1fb7f0eeff34316a"],["categories/coding/index.html","ffe7fdedf372b67b999b304ba6ff366c"],["categories/index.html","cb4e1727cda801e23b634a5a87405993"],["categories/ubuntu/index.html","2ee243001d2059a88d3e3c700185972c"],["categories/ubuntu/ip/index.html","7d30d179b3ea2ce66cce3b35e675caa8"],["categories/ubuntu/下载/index.html","21d7543b6a043bc2b39bd88ccc9ae89a"],["categories/ubuntu/命令/index.html","435da8e4f9239fd97b6755ead641009e"],["categories/ubuntu/配置/index.html","baa282a1ccd2a555fc7018feee893d06"],["categories/博客/Wordpress/index.html","49313d1d1d36e6cd883a353b14d1b4df"],["categories/博客/hexo/index.html","3762eb1f6b53ab7f463402ab4a97b409"],["categories/博客/index.html","76f80166e6ea2580b3af51a178f41552"],["categories/宝贝/BB/index.html","273982eb1007159dfb090db241c1730d"],["categories/宝贝/MM/index.html","1d2258696b1a4f7d6d0d31416fbf5fca"],["categories/宝贝/index.html","13d03eb96c0fc42d5c744d8d710da70c"],["categories/科学/index.html","6c42979b912e261c9c87bddb0b6e5096"],["categories/科学/手机/index.html","eb7bd6806ece8d94f2a03a042877e9b4"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d93c77e2af83861023e3c5b9a74f2800"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e7ee34f9539651d62126858e1a98dd22"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","bada1c7b7f272df69e2ffc200e8b1b23"],["link/index.html","1fafd6afafc22dc0e8effed7e8997d3e"],["movies/index.html","e24b4eea69f3ae0084949387b934fbdf"],["music/index.html","d8e6c9febc7be7f1043a3946a4e338ad"],["page/2/index.html","171a15817b6fd371ec3b0d3b327a4b95"],["page/3/index.html","6d0ccacce66fe5a3ec6e03f52974acac"],["tags/AGV/index.html","049e0581323f622369cb6d184b0c5bed"],["tags/Github/index.html","12657886f1399e07a96812ad401c8d8d"],["tags/Move/index.html","8f8c93931729800f4f5f953a8a17faaf"],["tags/Plant-Simulation/index.html","a660c78898071fb9e8136c9b26369198"],["tags/Wordpress/index.html","9f32cdfdb90570b868d0d4b416857079"],["tags/cad/index.html","2b2cee53c3732d6d505da275ff600e55"],["tags/coding/index.html","1c8b617d6de3a969cb900984efa1ad55"],["tags/hexo/index.html","020e8dd552a48af9c3853b4a65a9f71f"],["tags/index.html","8d710cb252804ee71630ab1d9de08b55"],["tags/transferstation/index.html","4364b9694e4a4bd513b41dbcfaa85683"],["tags/ubuntu/index.html","9c4e9191f286f35bbee4f186b912258a"],["tags/写给宝贝的话/index.html","b25b22828ea7ffa2d6f17b5dfa223c40"],["tags/原创/index.html","008cc9b18dc5ee96b40a51c38aa20cb8"],["tags/学习/index.html","781cd6bd4fdcbf046b12e49e558c5000"],["tags/宝塔/index.html","35805bf90ea13bcbc58ee24b17c4752e"],["tags/生产模式/index.html","ccb2d6de8763f9f43f4df3186add1c89"],["tags/百度客户端/index.html","07bee4ef78cf9c539fefde9d9ce2e0d8"],["tags/科学/index.html","27d05b63e2aa08fcb780b4710e9f841a"]];
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







