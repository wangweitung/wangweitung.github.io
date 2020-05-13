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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","ff73446bb878640bad46a0999ad187fe"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","aa7bc6e2894fb1a8db76c5d4764c4670"],["2020/01/18/Wordpress自定义页脚/index.html","ca63493d84cfd6fc2af9c9f34330ec98"],["2020/01/19/关于coding/index.html","15c64a1458eab36016d6f10c218ada24"],["2020/01/23/2020-01-23-今日武汉封城/index.html","2a8a0cbce965b84fe3b04eeee6db4fd2"],["2020/03/12/妈妈写给宝贝的话/index.html","a2e8b9ceb82d977f89429581a0f497c4"],["2020/03/20/磨人的小天使/index.html","36405bf5c5eef4c19e0b8f955bc10bc3"],["2020/05/03/hello-world/index.html","993c20e44a333da1e82c2146777b3741"],["2020/05/04/AGV的用法/index.html","2ed604c0771f8e9b7e12b98f0ca7eea4"],["2020/05/04/Github创建文件夹/index.html","038c190bdfaa1233f576e3558cc3ab1d"],["2020/05/04/Move的用法/index.html","8ab89a5918ab7bd544142dd972b2e423"],["2020/05/04/PlantSimulation常规操作/index.html","27842536ee4313629b3466635eaf55ea"],["2020/05/04/TransferStation的用法/index.html","53f95375f1fc0942ddd4d43471ede0f4"],["2020/05/04/Wordpress问题解决/index.html","7b8e8c31ae61975b287d0cc6b818ae1a"],["2020/05/04/ubuntu安装配置hexo/index.html","6c1612bd2e3c3a79b300e72fcc1f5ea4"],["2020/05/04/无科学环境连接谷歌账户/index.html","a71e2d6c357bee977871fc5d9376b01b"],["2020/05/05/Markdown的一些小技巧/index.html","4b17fb66c1d16b3b975e7a5c27f1175a"],["2020/05/05/导入cad作为背景图/index.html","d0be59ac4c9936d4339650195feaa612"],["2020/05/05/推动或拉动的生产模式/index.html","d5d7bc28961ace8337794556b2903145"],["2020/05/07/在摊位下上网课的小女孩/index.html","7647640103162268df84d7b26e7850d1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","da1901ed0d350fed514dd5d826b8049e"],["2020/05/10/ubuntu server配置方法/index.html","597a6507975b1749a8d8bbf5c407c3c1"],["2020/05/10/ubuntu安装百度客户端/index.html","6708d3897dc002a3b7e4def0b42c31e1"],["2020/05/12/ubuntu server修改获取ip方式/index.html","d9eb51936e83fa55e19eb05533a9e7b8"],["2020/05/12/ubuntu server基础命令/index.html","fe0ce69db85c64de24eff75de5cf8a1a"],["about/index.html","cb1807a6943e04e550c3685c4bd7ff4f"],["archives/2020/01/index.html","97e5baa94ce051d9164f8e3b1f14285c"],["archives/2020/03/index.html","10c9f3b7ee123998d8d61514383769eb"],["archives/2020/05/index.html","0f0db4c0ecc4b4965d96fd3a898a0c35"],["archives/2020/05/page/2/index.html","08c1012f0d450b7d672d9b4217bec47a"],["archives/2020/index.html","c657bd06ff60de50f0292fd6020c0ebe"],["archives/2020/page/2/index.html","351502b81a13acac0832aa18225df3a5"],["archives/2020/page/3/index.html","d75de9fb258e9c513db44cda75e164c4"],["archives/index.html","2bdb23509152a3aa473e570c54c371b0"],["archives/page/2/index.html","daf0fbb50c400a4db88633b6e985e8db"],["archives/page/3/index.html","b7f48a85aff0ae3de97c1a2323809b7a"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","03b5316698d620d4241f5a38448436da"],["categories/Code/index.html","0143e1e96ed476872bd609836d45eaae"],["categories/Plant-Simulation/SimTalk/index.html","edd6f7a8804b1361a3720e374db089b9"],["categories/Plant-Simulation/index.html","d23abf9b44d1e59032fb5ed326f8a76a"],["categories/Plant-Simulation/实体/index.html","76f853d4ac555bc03f3078a3a9eda64c"],["categories/Plant-Simulation/常规操作/index.html","dcad1a606309a42e53a95cab24993db6"],["categories/Plant-Simulation/模型/index.html","e7475e3cda18797177d75913f547f077"],["categories/Plant-Simulation/背景/index.html","3dd7113b7d52647845f91a7db12ab4f6"],["categories/coding/index.html","190d70b677a38c23921b1404f98368c8"],["categories/index.html","20de48b772dbb7027003d1839571dc75"],["categories/ubuntu/index.html","b091409e2b8a8a9b54e00aee2f97900d"],["categories/ubuntu/ip/index.html","1f886e2be742d43553df4489c9e7b6ee"],["categories/ubuntu/下载/index.html","9a2cb7eb78e02e0af94509f44617620c"],["categories/ubuntu/命令/index.html","8f9921c4ddac18f13b0f960049d8bea3"],["categories/ubuntu/配置/index.html","520b3b89f2c61a10575fd5547bc9999e"],["categories/博客/Wordpress/index.html","64a15b0f8dd62881936167f1e093d387"],["categories/博客/hexo/index.html","d6b5b53507b84bd4982f381c02519153"],["categories/博客/index.html","a31173b780cf921958f8a9b68c67a93e"],["categories/宝贝/BB/index.html","8ba7bd89efc5668bccb0ace2ddeb9027"],["categories/宝贝/MM/index.html","796c7690ab6f81a5ed848289e0e2c7dc"],["categories/宝贝/index.html","065aff3a2cecee0f825aad2f4c35839b"],["categories/思考/index.html","8a3d4fcf8ccf2ad12aa4ff5e6f0793db"],["categories/思考/职业规划/index.html","0bbbceb934ec1b36c6dc67b1389a0d3b"],["categories/科学/index.html","4b6f3bfe6822b7f8dc5b8e91c3454311"],["categories/科学/手机/index.html","b99f696d0482cf2b45c328db77be39ad"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a7e323bcaf67e0bead7b3dd282f25983"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","450f7997d3ac6355948479e1b1c3b8b5"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","5cc19a2f62a5e3f5c24c737d7a98c662"],["movies/index.html","ac4027824d6a6918edd768ba60cc22ac"],["music/index.html","7d84e3f75964c3545ebeb700d1b250c3"],["page/2/index.html","cce0fd07167b9457b857627b29df7501"],["page/3/index.html","1ceb1d111e2425c08dafb87583e1ab47"],["tags/AGV/index.html","5982075011bc1c8e87f7771f5e1be248"],["tags/Github/index.html","4fe7d516bd03a5387b31d94c43e8bbba"],["tags/Move/index.html","3b1dbacf7081d2050505795fcbcc0741"],["tags/Plant-Simulation/index.html","8f031e1c97fd5ae4490beaa0d84a5941"],["tags/Wordpress/index.html","19e289c35a6c4460ccebdee90cf6fd58"],["tags/cad/index.html","d06cb3869c3f050a70e9342481ad831f"],["tags/coding/index.html","1481cf944c7e31a7e22d3cb253ffcef2"],["tags/hexo/index.html","764f1a95b5d957035a1a6d2c9b034439"],["tags/index.html","a66c70cc18a17b3fc9dfe8bb2b319fa3"],["tags/transferstation/index.html","d17c035f00672e7e12be2a6f29c723e1"],["tags/ubuntu/index.html","48fb11680df09f00c01a0ea01ccde12f"],["tags/写给宝贝的话/index.html","1f1118e67e2d576254318a7eb1457a9f"],["tags/原创/index.html","1181a840a7519d4f1acf959d05d1bc9d"],["tags/学习/index.html","2c3948ef757c87c27cb3b6c0589c1d9c"],["tags/宝塔/index.html","64997e4b02389a13b77cdd1fe5100572"],["tags/生产模式/index.html","feeb92539db83962f11fbe28da7aaf68"],["tags/百度客户端/index.html","f433bdfaa3025e83c16029c30ac3b943"],["tags/科学/index.html","7fed416f35f0d76046bab61130f8afd7"]];
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







