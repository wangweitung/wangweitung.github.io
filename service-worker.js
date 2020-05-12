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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","b90cec12910e76bd46e82ca0d5ad6348"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","aa7bc6e2894fb1a8db76c5d4764c4670"],["2020/01/18/Wordpress自定义页脚/index.html","ca63493d84cfd6fc2af9c9f34330ec98"],["2020/01/19/关于coding/index.html","8c3c98a2c35d722f20c837a92ee4ef56"],["2020/01/23/2020-01-23-今日武汉封城/index.html","2a8a0cbce965b84fe3b04eeee6db4fd2"],["2020/03/12/妈妈写给宝贝的话/index.html","a2e8b9ceb82d977f89429581a0f497c4"],["2020/03/20/磨人的小天使/index.html","36405bf5c5eef4c19e0b8f955bc10bc3"],["2020/05/03/hello-world/index.html","993c20e44a333da1e82c2146777b3741"],["2020/05/04/AGV的用法/index.html","2ed604c0771f8e9b7e12b98f0ca7eea4"],["2020/05/04/Github创建文件夹/index.html","038c190bdfaa1233f576e3558cc3ab1d"],["2020/05/04/Move的用法/index.html","8ab89a5918ab7bd544142dd972b2e423"],["2020/05/04/PlantSimulation常规操作/index.html","27842536ee4313629b3466635eaf55ea"],["2020/05/04/TransferStation的用法/index.html","53f95375f1fc0942ddd4d43471ede0f4"],["2020/05/04/Wordpress问题解决/index.html","7b8e8c31ae61975b287d0cc6b818ae1a"],["2020/05/04/ubuntu安装配置hexo/index.html","6c1612bd2e3c3a79b300e72fcc1f5ea4"],["2020/05/04/无科学环境连接谷歌账户/index.html","a71e2d6c357bee977871fc5d9376b01b"],["2020/05/05/Markdown的一些小技巧/index.html","4b17fb66c1d16b3b975e7a5c27f1175a"],["2020/05/05/导入cad作为背景图/index.html","d0be59ac4c9936d4339650195feaa612"],["2020/05/05/推动或拉动的生产模式/index.html","d5d7bc28961ace8337794556b2903145"],["2020/05/07/在摊位下上网课的小女孩/index.html","7647640103162268df84d7b26e7850d1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","da1901ed0d350fed514dd5d826b8049e"],["2020/05/10/ubuntu server配置方法/index.html","597a6507975b1749a8d8bbf5c407c3c1"],["2020/05/10/ubuntu安装百度客户端/index.html","6708d3897dc002a3b7e4def0b42c31e1"],["2020/05/12/ubuntu server修改获取ip方式/index.html","d9eb51936e83fa55e19eb05533a9e7b8"],["2020/05/12/ubuntu server基础命令/index.html","fe0ce69db85c64de24eff75de5cf8a1a"],["about/index.html","313a71f771b259cda00e070339cfd6ed"],["archives/2020/01/index.html","7e0210568b2d16555078bb0dbb1f6492"],["archives/2020/03/index.html","b69fa059e1946a95b1bbaef81d7dab57"],["archives/2020/05/index.html","bf5e924d30d32759959019731ddfde62"],["archives/2020/05/page/2/index.html","5ab0c14899f7a5706ccc944eb7d22dff"],["archives/2020/index.html","2941d7e4366902c73aa885cc8141f19a"],["archives/2020/page/2/index.html","fcf1d4bfee1235f504bbc0818dd3d905"],["archives/2020/page/3/index.html","cebccd955e8b34c5da5788dbfded6a7f"],["archives/index.html","09211547781cf7bc5ce967402d2d8660"],["archives/page/2/index.html","086146b8b6711d8e10a0586c11c9d844"],["archives/page/3/index.html","c96d6e00e98914c8eff6365311d357ff"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","c1cb36f3d6d689a49bd76ef32b0da15f"],["categories/Code/index.html","bf15daf6acc0c9a97a3c0a4c98277353"],["categories/Plant-Simulation/SimTalk/index.html","2d937f81921ec9f5a52af1e38b2b7e4a"],["categories/Plant-Simulation/index.html","14dcf1f4b6e8a7d19ebaf823642a97f6"],["categories/Plant-Simulation/实体/index.html","d7e39f2286cbcb81f4394ea780e754f0"],["categories/Plant-Simulation/常规操作/index.html","8334065fc878ccc9ec20bae4de4a6bdb"],["categories/Plant-Simulation/模型/index.html","f463248c1c48b898d2f458f50a563842"],["categories/Plant-Simulation/背景/index.html","709aeb062292e37e05e0de58b8d469d0"],["categories/coding/index.html","c9ffa2f4e0ffadedf9688270f98706fe"],["categories/index.html","bef8d5e28a952d1be629674135176fb3"],["categories/ubuntu/index.html","262758a44306770a90da401c0dc76d3c"],["categories/ubuntu/ip/index.html","f910d3ab2143c26b00de33f018281762"],["categories/ubuntu/下载/index.html","35d726ffaa4f8ccef9d702b20d5aebf1"],["categories/ubuntu/命令/index.html","3f2d1e0416b29d9f4be7039df6501fc6"],["categories/ubuntu/配置/index.html","487f68bc914cb8441cc542f4c741bf55"],["categories/博客/Wordpress/index.html","b62c3d87ca59b610619a9635244fc22b"],["categories/博客/hexo/index.html","908c763a1c5c55cec60c007e4b42829d"],["categories/博客/index.html","637414f5cfc43770d95d81156ae3d8b3"],["categories/宝贝/BB/index.html","b34d2b56349a563b1a66bfc7be7b1827"],["categories/宝贝/MM/index.html","75e4b172128a59c6eac77f64fb14834d"],["categories/宝贝/index.html","3cfb77681f1dda9421ff27e0e0598630"],["categories/思考/index.html","5cbe359df1c72ef85044298e81f89761"],["categories/思考/职业规划/index.html","99c6d1dbcc625b72c2122eca0deb60ff"],["categories/科学/index.html","07246bbfbb87305e9f89e2e73dd664fc"],["categories/科学/手机/index.html","4ee5ec9a3dd9b4ce3cbe64cf50b489d5"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","f72885d3c6225b3e7a62c25c7eced94a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","ffca37b581666bf091e8dda25f90ce59"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","a3f82029a9d52e106e1c03037329e391"],["link/index.html","0ba769c4c3ce8c94c692538536b91ff3"],["movies/index.html","fb505191ba4988b6298647b4f23d8bf7"],["music/index.html","fb51c1a777afcbdfcd6ae77d19529900"],["page/2/index.html","e0cdfcca397cd86d3c35d13fb412590d"],["page/3/index.html","905bffd677abed75ebc1f1f146b418e5"],["tags/AGV/index.html","bc7b6366a3c7035d21bd2a3ff2c88b99"],["tags/Github/index.html","cd4b2f3db2814669cd07afc4d4ab9df0"],["tags/Move/index.html","0ba0bdae23c5b45ff14d342162f21a1f"],["tags/Plant-Simulation/index.html","9174a77dd2b5b4b839801df922cfbc82"],["tags/Wordpress/index.html","a06eea59eb9bfdae6cff36b6e67ede4d"],["tags/cad/index.html","18d1a3d25344c87915591b5ea6f89587"],["tags/coding/index.html","3cbceecaf80120998fd6df30481527f8"],["tags/hexo/index.html","b12828a4e5cbb733a76e252e520c7968"],["tags/index.html","c0c554a1fe06a9118cfd6115a257ce07"],["tags/transferstation/index.html","f60136f940c8245d02b8092c6a19420f"],["tags/ubuntu/index.html","b0881e31683c2e58b60f27314b37cabe"],["tags/写给宝贝的话/index.html","91cc73449578b4ddc9ef49a01badddb9"],["tags/原创/index.html","f1515a58f211a7aa77f3bbdbeeb1cbf5"],["tags/学习/index.html","2e4d06589bdbb9e8ac88d2815ef4e1d5"],["tags/宝塔/index.html","ae5c647fc6bf715ca97d9efbd48828b4"],["tags/生产模式/index.html","1f1b8c68ccc68080a061bdccd2a49c92"],["tags/百度客户端/index.html","71961fc052a416f5ace1b00a12d8756e"],["tags/科学/index.html","afadf4b34e2631a1b06745fe1cef001c"]];
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







