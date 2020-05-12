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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","ff73446bb878640bad46a0999ad187fe"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","aa7bc6e2894fb1a8db76c5d4764c4670"],["2020/01/18/Wordpress自定义页脚/index.html","ca63493d84cfd6fc2af9c9f34330ec98"],["2020/01/19/关于coding/index.html","15c64a1458eab36016d6f10c218ada24"],["2020/01/23/2020-01-23-今日武汉封城/index.html","2a8a0cbce965b84fe3b04eeee6db4fd2"],["2020/03/12/妈妈写给宝贝的话/index.html","a2e8b9ceb82d977f89429581a0f497c4"],["2020/03/20/磨人的小天使/index.html","36405bf5c5eef4c19e0b8f955bc10bc3"],["2020/05/03/hello-world/index.html","993c20e44a333da1e82c2146777b3741"],["2020/05/04/AGV的用法/index.html","2ed604c0771f8e9b7e12b98f0ca7eea4"],["2020/05/04/Github创建文件夹/index.html","038c190bdfaa1233f576e3558cc3ab1d"],["2020/05/04/Move的用法/index.html","8ab89a5918ab7bd544142dd972b2e423"],["2020/05/04/PlantSimulation常规操作/index.html","27842536ee4313629b3466635eaf55ea"],["2020/05/04/TransferStation的用法/index.html","53f95375f1fc0942ddd4d43471ede0f4"],["2020/05/04/Wordpress问题解决/index.html","7b8e8c31ae61975b287d0cc6b818ae1a"],["2020/05/04/ubuntu安装配置hexo/index.html","6c1612bd2e3c3a79b300e72fcc1f5ea4"],["2020/05/04/无科学环境连接谷歌账户/index.html","a71e2d6c357bee977871fc5d9376b01b"],["2020/05/05/Markdown的一些小技巧/index.html","4b17fb66c1d16b3b975e7a5c27f1175a"],["2020/05/05/导入cad作为背景图/index.html","d0be59ac4c9936d4339650195feaa612"],["2020/05/05/推动或拉动的生产模式/index.html","d5d7bc28961ace8337794556b2903145"],["2020/05/07/在摊位下上网课的小女孩/index.html","7647640103162268df84d7b26e7850d1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","da1901ed0d350fed514dd5d826b8049e"],["2020/05/10/ubuntu server配置方法/index.html","597a6507975b1749a8d8bbf5c407c3c1"],["2020/05/10/ubuntu安装百度客户端/index.html","6708d3897dc002a3b7e4def0b42c31e1"],["2020/05/12/ubuntu server修改获取ip方式/index.html","d9eb51936e83fa55e19eb05533a9e7b8"],["2020/05/12/ubuntu server基础命令/index.html","fe0ce69db85c64de24eff75de5cf8a1a"],["about/index.html","cb1807a6943e04e550c3685c4bd7ff4f"],["archives/2020/01/index.html","de3f8802d33116b72874ac325a111012"],["archives/2020/03/index.html","50f55c2146dbe57223cc2d6bd4f21c75"],["archives/2020/05/index.html","33c9e7adb73f227a5ac383c9a6145c28"],["archives/2020/05/page/2/index.html","66e171a098aa34f85728ff88972aa59c"],["archives/2020/index.html","87938dcf6a9506ecdbe12e46f7279656"],["archives/2020/page/2/index.html","106b11cdf620eabe9410a5914478f355"],["archives/2020/page/3/index.html","35d999bda18e70bcc70c803aa197376b"],["archives/index.html","96b2591d93ff4fb8bdc2a54379e9c55c"],["archives/page/2/index.html","5bbfd67af1fd19b1065546def510bcf8"],["archives/page/3/index.html","43a1fb44d9c6f4a9cda4a48db700e389"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","9f4729630de07552cccd7cedb06bbb49"],["categories/Code/index.html","0c40a376923bf6bc063f3e308c797d38"],["categories/Plant-Simulation/SimTalk/index.html","7d1112f5135555a328cc2c6d2883ec3d"],["categories/Plant-Simulation/index.html","0b3fa78332af4c9f494d1503782d59bf"],["categories/Plant-Simulation/实体/index.html","4b820bf1d0e5176af668dd540c13c38a"],["categories/Plant-Simulation/常规操作/index.html","b742fbfc14f944e1e7ea35807732d182"],["categories/Plant-Simulation/模型/index.html","981e073d71da60c6634d4721bdb79243"],["categories/Plant-Simulation/背景/index.html","6b24a81fd0069cdff4ccd177ebf3d33d"],["categories/coding/index.html","0773a50ca3b17efb60e03006a1a31069"],["categories/index.html","3bba02c5f0327eb67b01eec57bb8eafa"],["categories/ubuntu/index.html","3b08a4f9c440105d6c2c8385d7d3753b"],["categories/ubuntu/ip/index.html","1556a45063944b5a63a3efaf7da76eb9"],["categories/ubuntu/下载/index.html","167ce510a8a6a23c25b70a348744b768"],["categories/ubuntu/命令/index.html","1cb570b8a598ad9ff176a1ff792abe50"],["categories/ubuntu/配置/index.html","8c981143ee4b44d6270a3140197cfd5c"],["categories/博客/Wordpress/index.html","bf8d8873ad1460db7daca811bb2db405"],["categories/博客/hexo/index.html","40cef7137ec854bc9013fbf5d3172e4c"],["categories/博客/index.html","3964968388ffd2961cb166aaf931ad13"],["categories/宝贝/BB/index.html","cb7fab808e8a51aed4c2eabbdb74185b"],["categories/宝贝/MM/index.html","43b904124793112bc6bbade4cb189299"],["categories/宝贝/index.html","8aed8a006cc48ae52b01ea57a42d740e"],["categories/思考/index.html","19c871ece12b009d0aa4d1ca6fcf3ca4"],["categories/思考/职业规划/index.html","8c34ffad66eff8e5d09469b5210959e3"],["categories/科学/index.html","9c7fe6690b78bff389aafc78a4005db1"],["categories/科学/手机/index.html","87e9d455914bfac8e31989116c8e7fc6"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a7e323bcaf67e0bead7b3dd282f25983"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","1cc9e285646f6ae12ee82002a0a904e1"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","ecc4450563cf09d5ee73ee2e975c9106"],["link/index.html","581d42bba1de4962d1bd38eddd0759bb"],["movies/index.html","ac4027824d6a6918edd768ba60cc22ac"],["music/index.html","7d84e3f75964c3545ebeb700d1b250c3"],["page/2/index.html","ed76cb33d62275cfc161eab399d46cbb"],["page/3/index.html","7cd0b567ac50c242a23aa47c49c0d0bd"],["tags/AGV/index.html","b0bbed02e4ed8a2fb984aa6ccada0b21"],["tags/Github/index.html","661c7f5c8017268397a0c565d173f5ab"],["tags/Move/index.html","56c5fd8f2bf3d10486cac17d4386552f"],["tags/Plant-Simulation/index.html","579a0ee9fb79cfba22bff0be3abe514f"],["tags/Wordpress/index.html","b1524273a3fcb17525bb780ef68a8dd2"],["tags/cad/index.html","595cc7f0c70e04fb600025bc53366424"],["tags/coding/index.html","28f7f3baae0b094729446a81a979893a"],["tags/hexo/index.html","d80ab5f98c6a8cadd9f2566b71457ec6"],["tags/index.html","64bc04475a3429f8c48d6b4484111539"],["tags/transferstation/index.html","0c9411d2a2d31d4c66c0b8c449d0fe94"],["tags/ubuntu/index.html","26d0ac505a5055fd4463a2650a2b71e3"],["tags/写给宝贝的话/index.html","6c7db345f9464459406a5eb9612612ca"],["tags/原创/index.html","b2432e0170121cab2dc48f3d508bd8cb"],["tags/学习/index.html","2775dbf590b3551d002b5c88f8d75431"],["tags/宝塔/index.html","cbad94db07615676d40b96a3de696a6b"],["tags/生产模式/index.html","08a03e6194bff6a4dc58b826718cd65f"],["tags/百度客户端/index.html","80fa8c8dfa3d24a58b06798afa8f931d"],["tags/科学/index.html","be8eee5084fb2faa518517fd1bc54711"]];
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







