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

var precacheConfig = [["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","1e1936702124f9947707ab71ffa6d4f6"],["2020/01/19/关于coding/index.html","bb8792c53604ab996667ac1ddec09f4c"],["2020/01/23/2020-01-23-今日武汉封城/index.html","448decd61d347fccc33b1d1d88168fb1"],["2020/03/12/妈妈写给宝贝的话/index.html","78eab85e3ea4b93c0ac2164bfaf42eca"],["2020/03/20/磨人的小天使/index.html","06f96bfc904d8c80467143d35cb56e4a"],["2020/05/03/hello-world/index.html","17ff9a7dc21af37923cbd5986dd4de6b"],["2020/05/04/AGV的用法/index.html","4c3c7814180b3b5f73131c2a8f426287"],["2020/05/04/Github创建文件夹/index.html","d0f5aec427cef32f738cff1a522b4849"],["2020/05/04/Move的用法/index.html","ce5d7a158c838357f9d02785c9219dc8"],["2020/05/04/PlantSimulation常规操作/index.html","304ae09ef3f38e7dc4425bb56cfc83cc"],["2020/05/04/TransferStation的用法/index.html","5218e1137474ec9b80185eedd4e7833a"],["2020/05/04/Wordpress问题解决/index.html","f151907c77a4df59683efe35c30f376a"],["2020/05/04/ubuntu安装配置hexo/index.html","ea33a7ec03bb51a7badca371d4576fdc"],["2020/05/04/无科学环境连接谷歌账户/index.html","feaa0d0a8503e1fe722c020aa95d2e02"],["2020/05/05/Markdown的一些小技巧/index.html","9f0acbf07b8ded8e30942a4cf0df4075"],["2020/05/05/导入cad作为背景图/index.html","7c8e3a423b68e3ee92caec526376cd31"],["2020/05/05/推动或拉动的生产模式/index.html","24861cd7cd426429d2871419495ab33b"],["2020/05/07/在摊位下上网课的小女孩/index.html","a5504e0dd9d4bf121066f5406fdf9e62"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","08af633875438b4465fb2d0f23b534a4"],["2020/05/10/ubuntu server配置方法/index.html","9ab1a7a38cd1ef96e8a9b52a6ef8882c"],["2020/05/10/ubuntu安装百度客户端/index.html","0bd7033b69428047ab3a64ce82b01c45"],["2020/05/12/ubuntu server修改获取ip方式/index.html","e2b428b979dbfed11321b18c00dbafd9"],["2020/05/12/ubuntu server基础命令/index.html","ff352321801c86d85e6f6519faf90c1e"],["about/index.html","a3c18fb44db79a6dbc9eddc0ba0870f2"],["archives/2020/01/index.html","aa505d2f5aa12f22609c088bb2d82b8e"],["archives/2020/03/index.html","b96a16a4aea05305209e256287f3d067"],["archives/2020/05/index.html","44380c0ce3a873f5be346b9d7be6bac1"],["archives/2020/05/page/2/index.html","e0b9b4d4639222ad8be804222d4d6aee"],["archives/2020/index.html","18df7ffffad610a3d5b34498756452b7"],["archives/2020/page/2/index.html","b15c95d152a55201203b37793b8df5b1"],["archives/2020/page/3/index.html","01fd1bccca8c60d4ad71e18592999678"],["archives/index.html","3eebc61d34561991449d917c0085677e"],["archives/page/2/index.html","656159b63b7e2833238cc991cd30f90c"],["archives/page/3/index.html","7ffee0283c107a2f425f78069a5218a3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","3299229e0eede41923be7462156e70e9"],["categories/Code/index.html","44c8793a393a7313cfe6e90700dc5704"],["categories/Plant-Simulation/SimTalk/index.html","9ba9f580bffa287d83faf23521f20f2e"],["categories/Plant-Simulation/index.html","bb0f8be99476a244d6c6a20949ef90c3"],["categories/Plant-Simulation/实体/index.html","b2de2c76ffde31cfa41d98b9a5bd01ab"],["categories/Plant-Simulation/常规操作/index.html","fc4d672f7f4b0510d711906d0b2dc189"],["categories/Plant-Simulation/模型/index.html","fbfe909c2963dfc6b5791141434b73a3"],["categories/Plant-Simulation/背景/index.html","5afdd720bb204bec05974cf07ce02207"],["categories/coding/index.html","283d51558c5fe4acfb4b804ed7ff8d76"],["categories/index.html","c05f8c1f88e95b5e5c3c0dd21eec8730"],["categories/ubuntu/index.html","e81325da66c06b07d3c60785832cdc80"],["categories/ubuntu/ip/index.html","f6a2501ef778b10ab4a8857f16615c2d"],["categories/ubuntu/下载/index.html","369391e2c3b27a0f90baa27bc8b1c959"],["categories/ubuntu/命令/index.html","2e17fbf035441ebd7b8356e8f2c0fd32"],["categories/ubuntu/配置/index.html","ad05614b60b29e39457854c1c6bc08c8"],["categories/博客/Wordpress/index.html","e1db59635137db3cc5d27740af187598"],["categories/博客/hexo/index.html","515890a6494e327d74cc5feda6d3322a"],["categories/博客/index.html","a13aeae880e6bc19127e1c458939b75e"],["categories/宝贝/BB/index.html","750ca7ee8523c67f61d46cf10b56568a"],["categories/宝贝/MM/index.html","2269ac5a10675faeac8a66612360e490"],["categories/宝贝/index.html","97a4f720ea788fe1679c8bc264f1a494"],["categories/科学/index.html","bc22722348154ad60851cfe2224a2ac7"],["categories/科学/手机/index.html","0bd51795d5089df5aa6c109902b37c51"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","2b9d72f8eb87bb8368b2e688718afe06"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","28dda01209161b558e8089f74749ea27"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","dda9a0f167a1789cbbd496890dd31074"],["link/index.html","86be617b52b75397d43b2aa6e1614c8d"],["movies/index.html","3ccbcec676dbb3283fe8a788c2846c4e"],["music/index.html","8151e988c60b14c0fd0758a65aaeffa2"],["page/2/index.html","5c2776a0b49e1d96a373b614a44f23e0"],["page/3/index.html","bd8671863a54eacbf75c040ec859d755"],["tags/AGV/index.html","093f236b1c12d082fabed73fcceaabe3"],["tags/Github/index.html","4610c562fbb51966c5ef0b3ef9ff907b"],["tags/Move/index.html","b389aa0503fdc774528ff915d7edfa2f"],["tags/Plant-Simulation/index.html","e129a92d46c278064546df128b07ff06"],["tags/Wordpress/index.html","005e4ece7042f31f0459c0de766613d6"],["tags/cad/index.html","e38733d554081bee0367f11dbf5de26b"],["tags/coding/index.html","c4c70f4fca96c8e106c73c80c5ced6be"],["tags/hexo/index.html","3d210559806149a7e0e1fa63865700e8"],["tags/index.html","a653ae0bbb7bf8f2dbecc89162832a41"],["tags/transferstation/index.html","74ae7f3266dc0934802bc11253e82027"],["tags/ubuntu/index.html","c268923f45cbf86eb55a1f24861ac840"],["tags/写给宝贝的话/index.html","272528f8b3136a79f15dcf31565f10e5"],["tags/原创/index.html","03db9b18bceabdff81c0a7302912c810"],["tags/学习/index.html","df8fa8fda80cac3837da8b4bb6237c10"],["tags/宝塔/index.html","c32b46ca8f21ccaacbc3d3edead5fb88"],["tags/生产模式/index.html","80357aba8795b6909f6dd06490dd7299"],["tags/百度客户端/index.html","b97dfe7aa006a7b0f753b5d5eed96ac1"],["tags/科学/index.html","f349a2a6c14f8d343010eafbb1f4b03e"]];
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







