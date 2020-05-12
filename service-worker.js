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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","76851863dfe9724135da0384be38e6fb"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","9a8967063c562619737891219a70701f"],["2020/01/18/Wordpress自定义页脚/index.html","c977f5221c66532850d731a15048a196"],["2020/01/19/关于coding/index.html","49e409e4f0f34ceafea1d895bc717056"],["2020/01/23/2020-01-23-今日武汉封城/index.html","ba33120b68ee758830ef3c231c1a0fe6"],["2020/03/12/妈妈写给宝贝的话/index.html","a2e8b9ceb82d977f89429581a0f497c4"],["2020/03/20/磨人的小天使/index.html","36405bf5c5eef4c19e0b8f955bc10bc3"],["2020/05/03/hello-world/index.html","993c20e44a333da1e82c2146777b3741"],["2020/05/04/AGV的用法/index.html","2ed604c0771f8e9b7e12b98f0ca7eea4"],["2020/05/04/Github创建文件夹/index.html","038c190bdfaa1233f576e3558cc3ab1d"],["2020/05/04/Move的用法/index.html","8ab89a5918ab7bd544142dd972b2e423"],["2020/05/04/PlantSimulation常规操作/index.html","27842536ee4313629b3466635eaf55ea"],["2020/05/04/TransferStation的用法/index.html","53f95375f1fc0942ddd4d43471ede0f4"],["2020/05/04/Wordpress问题解决/index.html","7b8e8c31ae61975b287d0cc6b818ae1a"],["2020/05/04/ubuntu安装配置hexo/index.html","6c1612bd2e3c3a79b300e72fcc1f5ea4"],["2020/05/04/无科学环境连接谷歌账户/index.html","a71e2d6c357bee977871fc5d9376b01b"],["2020/05/05/Markdown的一些小技巧/index.html","4b17fb66c1d16b3b975e7a5c27f1175a"],["2020/05/05/导入cad作为背景图/index.html","d0be59ac4c9936d4339650195feaa612"],["2020/05/05/推动或拉动的生产模式/index.html","d5d7bc28961ace8337794556b2903145"],["2020/05/07/在摊位下上网课的小女孩/index.html","820f2381193cec0f7c3f3825d1e2dbef"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","da1901ed0d350fed514dd5d826b8049e"],["2020/05/10/ubuntu server配置方法/index.html","597a6507975b1749a8d8bbf5c407c3c1"],["2020/05/10/ubuntu安装百度客户端/index.html","6708d3897dc002a3b7e4def0b42c31e1"],["2020/05/12/ubuntu server修改获取ip方式/index.html","d9eb51936e83fa55e19eb05533a9e7b8"],["2020/05/12/ubuntu server基础命令/index.html","fe0ce69db85c64de24eff75de5cf8a1a"],["about/index.html","cb1807a6943e04e550c3685c4bd7ff4f"],["archives/2020/01/index.html","e8b186e0f8217ae4036b34e0a1029378"],["archives/2020/03/index.html","bc2ceb65f4ce051c0c1d9e0785f495a1"],["archives/2020/05/index.html","c23c69ad046af59592b07082efa2ba30"],["archives/2020/05/page/2/index.html","741d186042777310379ddbe3bf026aaa"],["archives/2020/index.html","a441afc9e44b4dcc21be66bbc3eb162b"],["archives/2020/page/2/index.html","666a729ee2ccae1bec703776d9c0c36e"],["archives/2020/page/3/index.html","0d2369a94868f98768276e12ea926749"],["archives/index.html","d5961988a83a54ea12b1dd360ea41581"],["archives/page/2/index.html","13ec0a46a87b6d31b51780ee7e016179"],["archives/page/3/index.html","4963638fedbcd18eae74efc152ab9835"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","53e6c42b7fcfcf306c131dadedde6f72"],["categories/Code/index.html","67c1aa3e86eff97eb712dd721a920299"],["categories/Plant-Simulation/SimTalk/index.html","845d9e954c2ca3bae3e74b41c45caa3a"],["categories/Plant-Simulation/index.html","bd04f5ccb03bae3ef36d5db6471c2a9a"],["categories/Plant-Simulation/实体/index.html","faf11e54038ec2cbbbaca27a0b0dcddd"],["categories/Plant-Simulation/常规操作/index.html","da86f331f59f2a77a40a785ada9a89d8"],["categories/Plant-Simulation/模型/index.html","f18a038f1f1bbb5aa22308e1c90bdcc3"],["categories/Plant-Simulation/背景/index.html","c8ad96d91302d2e6bc58e35e1b7b94d2"],["categories/coding/index.html","94945d871ada0d7348fe345bc00cd09d"],["categories/index.html","64fab1c8fb3a9b082f83bf8af5e0f000"],["categories/ubuntu/index.html","5c1f536cd43595c19d3c61911213d2ed"],["categories/ubuntu/ip/index.html","6da52aecd34dbad5fc708cb1fe2a9e4c"],["categories/ubuntu/下载/index.html","cd3384199776103d37307f851ba8a33a"],["categories/ubuntu/命令/index.html","a815dce3890a58d2842c5e9bcf9ff231"],["categories/ubuntu/配置/index.html","c0a16fbdf0b79a247c71cec99180c2ab"],["categories/博客/Wordpress/index.html","9a51f62b0ac6f649f36e33e1e3cb2277"],["categories/博客/hexo/index.html","ff1ca8166fc8660a10747ca8c556a7f0"],["categories/博客/index.html","706d16d7ebc557640ebe83f0932eb690"],["categories/宝贝/BB/index.html","3419123b72d46537afae7edc133be10b"],["categories/宝贝/MM/index.html","45a0e658949abba420e85c4303f6e7cd"],["categories/宝贝/index.html","8757fcd6a236bec669dbffe047ed04ab"],["categories/思考/index.html","ab6b53dcc81ca4851852326cdbe04b60"],["categories/思考/职业规划/index.html","d1ffbac88fa5475235d69907dbfb978f"],["categories/科学/index.html","55099a7ac6724afc638cf13e11de59e7"],["categories/科学/手机/index.html","85811c702c09b896759ca3398e8417a8"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a7e323bcaf67e0bead7b3dd282f25983"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","262a8ed18853defd10cd393edf9ad77f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","ecc4450563cf09d5ee73ee2e975c9106"],["link/index.html","581d42bba1de4962d1bd38eddd0759bb"],["movies/index.html","ac4027824d6a6918edd768ba60cc22ac"],["music/index.html","7d84e3f75964c3545ebeb700d1b250c3"],["page/2/index.html","7d70ff90d519e4fe09580f62a0f7ff0d"],["page/3/index.html","01295952a0512efaa1d78e38f7a0ab9b"],["tags/AGV/index.html","316ecb42e311381455e8fff68149123c"],["tags/Github/index.html","2466001e992b703dfc1dbd53dfb31565"],["tags/Move/index.html","50ca7cf9a3ad89ce52c81165111f1e1f"],["tags/Plant-Simulation/index.html","0ec3d6d0116fb5ac56a3d7ee4591824a"],["tags/Wordpress/index.html","aba15c086c0d5eed134078b87131c316"],["tags/cad/index.html","ba28d1a68a5ab28d5a8f92c5d0019a59"],["tags/coding/index.html","4b2233bfbdefa832bb11b0cdc6e559f5"],["tags/hexo/index.html","07c8295746d1ee10782b2469b73648ea"],["tags/index.html","330b1e80de40a4321a54a94b5a046fa9"],["tags/transferstation/index.html","d2ab916d2ff60ab45e7584ebb53770ef"],["tags/ubuntu/index.html","a220a06ada6df4bdf27d14f0e23ac711"],["tags/写给宝贝的话/index.html","e528871fc0bca5fa7acb735ba1c701a9"],["tags/原创/index.html","78e7a88b9bd0594040ecc39b95d36ff9"],["tags/学习/index.html","387312b544f9b87613333d48634a3a95"],["tags/宝塔/index.html","488483d65c75075a84b1fdf3522bea69"],["tags/生产模式/index.html","82ac6ec13017da3c75883e494397bd18"],["tags/百度客户端/index.html","438dc2d55c88ce8b4c93cf11466964e9"],["tags/科学/index.html","32207fd526df04da219aeb2bb13e510f"]];
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







