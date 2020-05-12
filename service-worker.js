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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","98aa3bab1ae51c8e49765f54a105e6be"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","2c28d11f19e7745f3cd19d932c82d009"],["2020/01/18/Wordpress自定义页脚/index.html","8c483b9bc52d418f6ef20302fced82c9"],["2020/01/19/关于coding/index.html","989e2ff87e32791162a125de9c02e8f4"],["2020/01/23/2020-01-23-今日武汉封城/index.html","3076fb58e59e0210d3891391cc05b007"],["2020/03/12/妈妈写给宝贝的话/index.html","37022fd5be78b17d810292e4a9df7c4b"],["2020/03/20/磨人的小天使/index.html","039f0c365d49bde625c70aee3f07b1af"],["2020/05/03/hello-world/index.html","912af4f25eceb309353d8db5291da7fc"],["2020/05/04/AGV的用法/index.html","9987b22e9e124fdf47a77026b762eb4a"],["2020/05/04/Github创建文件夹/index.html","59bd0d1e5e4cb574bb636f5b17a85289"],["2020/05/04/Move的用法/index.html","e66e3c5df8c29b3c6a04dfe15cafdaac"],["2020/05/04/PlantSimulation常规操作/index.html","e9e66356b639cbfcfb3a055115514185"],["2020/05/04/TransferStation的用法/index.html","544ad8e72fcbffdb70efd8f176efd4e8"],["2020/05/04/Wordpress问题解决/index.html","93c45d85b4849a33cdb141a7382ce7c9"],["2020/05/04/ubuntu安装配置hexo/index.html","c30ba0fd409151b6d2e94c992daf7657"],["2020/05/04/无科学环境连接谷歌账户/index.html","3b2ecb1db299dc1b76229ba811dc7730"],["2020/05/05/Markdown的一些小技巧/index.html","7f44465d5c7703d761ce8d3c69f5b384"],["2020/05/05/导入cad作为背景图/index.html","37d10eaa38aae06a43432636d9626ed6"],["2020/05/05/推动或拉动的生产模式/index.html","432c809add71898baa18f778cb15a597"],["2020/05/07/在摊位下上网课的小女孩/index.html","104cc0cfa05563f7f10a40e94290354d"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","35d24466a61a8c1e22ffdc0074662f2a"],["2020/05/10/ubuntu server配置方法/index.html","75b3832df98d2ff49c45141cd731309e"],["2020/05/10/ubuntu安装百度客户端/index.html","018a54335cdb25f755c8b524eb737aca"],["2020/05/12/ubuntu server修改获取ip方式/index.html","82e731070d396623f6772bf1ff7b46f1"],["2020/05/12/ubuntu server基础命令/index.html","6ce63e85bcc038aa74a8514c5fdc7126"],["about/index.html","e5b01a0842693491786dc1643ff9148b"],["archives/2020/01/index.html","e8ca093d3d3a9fedece6b87239869d1d"],["archives/2020/03/index.html","8447e4c1f62ba330f93d3a14c3b3b275"],["archives/2020/05/index.html","167ae35af8b245364aa0aab02eec6d41"],["archives/2020/05/page/2/index.html","f94733aaace4e671fed578e226af7879"],["archives/2020/index.html","dd4b5073063ea5e1babd417946ecbeae"],["archives/2020/page/2/index.html","4fd3255ee1f43bc08418c8a3ac22636d"],["archives/2020/page/3/index.html","0fe5eba0df5f8720df020d4bb14ac3bc"],["archives/index.html","10641149ae1040df7e37c7479198017a"],["archives/page/2/index.html","a40ca965555db9556fe39a8bd69f23c7"],["archives/page/3/index.html","511ead344fe764fb1e8854888455c70b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","6c398b0af46db8bd2c9ab84823855888"],["categories/Code/index.html","f3fe918611cb6200c3a4b63529064418"],["categories/Plant-Simulation/SimTalk/index.html","3ca73a773067c19cc1a715feb7033a8a"],["categories/Plant-Simulation/index.html","f452aad40719f8a263985e4cca74629d"],["categories/Plant-Simulation/实体/index.html","9816b3959377df3fc0f15465bc3daf62"],["categories/Plant-Simulation/常规操作/index.html","e0843a2eb0f808d1c1f057eef8500844"],["categories/Plant-Simulation/模型/index.html","6b59cd7544dafd54af0ebfac98b80c34"],["categories/Plant-Simulation/背景/index.html","0350d86381d6e979d67f1378eb83186f"],["categories/coding/index.html","49ff2541ae02a8a876aa8db47feb3126"],["categories/index.html","e17c31ca1989f8698c04a19f6fe0db0e"],["categories/ubuntu/index.html","2a5dc9cf93d7ff669283f0dda3f78ebe"],["categories/ubuntu/ip/index.html","aceac309d05f354cc69424f0294b173a"],["categories/ubuntu/下载/index.html","7e1c3eec1e3a0608af34174f038eb06e"],["categories/ubuntu/命令/index.html","0a0b2f4892963397c4370e514b9e37ca"],["categories/ubuntu/配置/index.html","f3bbece04c10bed5183849a5b1d996c5"],["categories/博客/Wordpress/index.html","6b3d63caa310fca6001c3f66d6b02b48"],["categories/博客/hexo/index.html","9a49d1d1affde535a1e69ca2f63942c2"],["categories/博客/index.html","d0904c6b4a9879a49046224fbb439e9e"],["categories/宝贝/BB/index.html","84527bd5a94833f4932341797156c2c6"],["categories/宝贝/MM/index.html","a2b954be8767f7a43f149f7c4e49c9c7"],["categories/宝贝/index.html","acb72efbb84fa5986d7394168353ee8a"],["categories/思考/index.html","372510d718af92acec859c25109a9b18"],["categories/思考/职业规划/index.html","5af708d3bc775bc1b92f248608a3ce31"],["categories/科学/index.html","d3ad7176022ddcd5c968748d7bd5d78d"],["categories/科学/手机/index.html","3960be10afb1d1e74715fb1b74f031da"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32ff58fdc49c9ca79700eb2cca341695"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","9b76b3eb447146a2e9c739139eed6f2e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","5093056a341e7efe48a933e789e30519"],["link/index.html","b33260f6b2561fa81b0fc364578b1f59"],["movies/index.html","543c6d603ce9d3abbb74d202b36d4b2c"],["music/index.html","53d137e2d342454ea423e078dbe1dbf1"],["page/2/index.html","435e24dfa6048d606400a01e8e2df391"],["page/3/index.html","12cbb1d5276c664835e2225215181d67"],["tags/AGV/index.html","bd316f7c853950e39a5cd9c0323722ba"],["tags/Github/index.html","f3e09846debf377a7bfc97c468f94612"],["tags/Move/index.html","5374aff3c3df8870f16f3a7264aab1e3"],["tags/Plant-Simulation/index.html","6f55d4245738ac1c32bd5601be6cd986"],["tags/Wordpress/index.html","c40aa95974df107cf994017368d9a64d"],["tags/cad/index.html","d6400374bbe7920528ff2a56b6979794"],["tags/coding/index.html","e1cd0402c70538f6402ef909b40daa99"],["tags/hexo/index.html","a6a27209b4ffe24b367a9238716bda49"],["tags/index.html","a4380ca9468a50cc61eff1a11695d29d"],["tags/transferstation/index.html","e90d31cc0e264a3541ce429b1e3a25d1"],["tags/ubuntu/index.html","33b6ee366211f8a51cbf1e981593aab5"],["tags/写给宝贝的话/index.html","4f3345a2626a2f8bb4fa8be223bf05e9"],["tags/原创/index.html","ba7cec16acd24b7c4438386642f88537"],["tags/学习/index.html","52aef6b0fcbad78b1063e73b4382b988"],["tags/宝塔/index.html","44fa961013bd16b48b6df9684a145a1a"],["tags/生产模式/index.html","009c2dbdecd4614175fff339040a88cc"],["tags/百度客户端/index.html","7eef370c3ca54d018b30eb1dbc68698e"],["tags/科学/index.html","a355ef7c5a41bfde8865f7a7e5fa94e3"]];
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







