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

var precacheConfig = [["2020/01/15/30岁对自己的思考/index.html","ff73446bb878640bad46a0999ad187fe"],["2020/01/16/一键将OneNote笔记发布到WordPress中/index.html","aa7bc6e2894fb1a8db76c5d4764c4670"],["2020/01/18/Wordpress自定义页脚/index.html","70892a066ec8544f26df65f8b69e8731"],["2020/01/19/关于coding/index.html","ef35a8a2b26d6b81e1d33f0367bd45f3"],["2020/01/23/2020-01-23-今日武汉封城/index.html","8e26044e364f16d5a7b94fa965ed2690"],["2020/03/12/妈妈写给宝贝的话/index.html","a2e8b9ceb82d977f89429581a0f497c4"],["2020/03/20/磨人的小天使/index.html","36405bf5c5eef4c19e0b8f955bc10bc3"],["2020/05/03/hello-world/index.html","993c20e44a333da1e82c2146777b3741"],["2020/05/04/AGV的用法/index.html","2ed604c0771f8e9b7e12b98f0ca7eea4"],["2020/05/04/Github创建文件夹/index.html","038c190bdfaa1233f576e3558cc3ab1d"],["2020/05/04/Move的用法/index.html","8ab89a5918ab7bd544142dd972b2e423"],["2020/05/04/PlantSimulation常规操作/index.html","27842536ee4313629b3466635eaf55ea"],["2020/05/04/TransferStation的用法/index.html","53f95375f1fc0942ddd4d43471ede0f4"],["2020/05/04/Wordpress问题解决/index.html","7b8e8c31ae61975b287d0cc6b818ae1a"],["2020/05/04/ubuntu安装配置hexo/index.html","6c1612bd2e3c3a79b300e72fcc1f5ea4"],["2020/05/04/无科学环境连接谷歌账户/index.html","a71e2d6c357bee977871fc5d9376b01b"],["2020/05/05/Markdown的一些小技巧/index.html","4b17fb66c1d16b3b975e7a5c27f1175a"],["2020/05/05/导入cad作为背景图/index.html","d0be59ac4c9936d4339650195feaa612"],["2020/05/05/推动或拉动的生产模式/index.html","d5d7bc28961ace8337794556b2903145"],["2020/05/07/在摊位下上网课的小女孩/index.html","7647640103162268df84d7b26e7850d1"],["2020/05/09/宝塔面板设置自动更新hexo博客/index.html","da1901ed0d350fed514dd5d826b8049e"],["2020/05/10/ubuntu server配置方法/index.html","597a6507975b1749a8d8bbf5c407c3c1"],["2020/05/10/ubuntu安装百度客户端/index.html","6708d3897dc002a3b7e4def0b42c31e1"],["2020/05/12/ubuntu server修改获取ip方式/index.html","d9eb51936e83fa55e19eb05533a9e7b8"],["2020/05/12/ubuntu server基础命令/index.html","fe0ce69db85c64de24eff75de5cf8a1a"],["about/index.html","7045d2e716407726324999fc6c537a8e"],["archives/2020/01/index.html","52ccf5feb1cd5a5cddc97a7aa0a207fd"],["archives/2020/03/index.html","f5b4b54e581375ac0d279bc7705cb5ce"],["archives/2020/05/index.html","6ac3310ce0dc7d92975ad9d22b4c1b0a"],["archives/2020/05/page/2/index.html","625f24f8e52b2446f7cb371c82d7c16f"],["archives/2020/index.html","22ef770543d00fd8d675f7f922c5e108"],["archives/2020/page/2/index.html","c2e08c9ff463741a8d44ecca4bb7e9a8"],["archives/2020/page/3/index.html","6b627cbd979b727acb4708bf0a400189"],["archives/index.html","134f75f80a9a73647ac5a4edb996512b"],["archives/page/2/index.html","9bfa6791c454708aa1bee13688953340"],["archives/page/3/index.html","a339663d136085fc23c8cfa71f5aaacf"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","ac8c6c242f291c3002361e1f57a80a19"],["categories/Code/index.html","377b74c996f5278b5c78d297390ab14b"],["categories/Plant-Simulation/SimTalk/index.html","7a660fa9c4a57964ea34925ef38c0021"],["categories/Plant-Simulation/index.html","5dcae154c757cc560e9745d1b638641d"],["categories/Plant-Simulation/实体/index.html","adfcfbe838a2aeaa060470d01599f3a5"],["categories/Plant-Simulation/常规操作/index.html","05b2543f91321a339d10af4035e9d9d9"],["categories/Plant-Simulation/模型/index.html","b71c0d20da5dd9f6817b1b51a43fad5c"],["categories/Plant-Simulation/背景/index.html","4c4f87fe85bda50df684a1d7f304f9cd"],["categories/coding/index.html","55fcafa6dade94736d431bb3276ee1a6"],["categories/index.html","edf233c2d1d89ed2c91d0232eb3f167c"],["categories/ubuntu/index.html","fd2d566736b13d3082db5e02fd6431dc"],["categories/ubuntu/ip/index.html","731662584d76c837268ef30792acaecb"],["categories/ubuntu/下载/index.html","5f4407e2e1586467d069972fef87fa9b"],["categories/ubuntu/命令/index.html","e15cee22aae5d34bc6330b49afbce4d8"],["categories/ubuntu/配置/index.html","0935597674250573cb741abac8bdd819"],["categories/博客/Wordpress/index.html","47439543af376ad827d0808da8dd3ea9"],["categories/博客/hexo/index.html","2b3c845a2536ad62ec2988c1ee659891"],["categories/博客/index.html","efa83f9faf4dec3f0bd61e40c2c68ff3"],["categories/宝贝/BB/index.html","9d42e9bd0c8ac6af23c51fef592eac1f"],["categories/宝贝/MM/index.html","098453ca3194480a380e8ae58f6fcfb9"],["categories/宝贝/index.html","f887b65a1ea57f10fb390fef2b70811f"],["categories/思考/index.html","777f4263c6730563e702b16ef0e8df54"],["categories/思考/职业规划/index.html","8dcad2316a1d29b0a3ec20e074553036"],["categories/科学/index.html","71a159571b7f57d3814b8118d006471e"],["categories/科学/手机/index.html","e6038c66d29067f53d1b7f4644374bbd"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","4768e2a8623aec07d54013be718dce3e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","28af751b3f737a930d9e4894878b1dee"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","0d4a9b780a1fdc479b3edaefbe35af1d"],["link/index.html","7ccc3904d1f06b2c91ce303cfd974a3f"],["movies/index.html","1822d47f99e7af2cebe5247eaed3f396"],["music/index.html","83c185407fa8a1193289593a3ebafda8"],["page/2/index.html","d65a54c227f301dd19e1d25eab1ec594"],["page/3/index.html","a51e10ec480332406fbc67f3081b33fe"],["tags/AGV/index.html","f178f566069b10cd8b3241ed20f1ebaa"],["tags/Github/index.html","dcecc60ec829e2223216713ff5a15307"],["tags/Move/index.html","262b083dea4cf7683e37517c574c8c79"],["tags/Plant-Simulation/index.html","fdf990a65378e37136d0ac3ba86d6579"],["tags/Wordpress/index.html","5fb6d618ec38d9d3aec9fc8cdbc20646"],["tags/cad/index.html","fe2a1a9a08238e8d4f9cb9bf93ec3d23"],["tags/coding/index.html","a715f0658491f0d993ad600208cba360"],["tags/hexo/index.html","f367d8bab0e084a71b8c39729cbffc57"],["tags/index.html","a0c41e8bedc79be5c6091cd692c1a75e"],["tags/transferstation/index.html","477cb787bc63082f004d998d36d16778"],["tags/ubuntu/index.html","3069e4be882ec080978a06c17d7d3fb2"],["tags/写给宝贝的话/index.html","072dc2ac7ad1592064945e52f6501984"],["tags/原创/index.html","96157e6131618ce63fa81887e5136e5a"],["tags/学习/index.html","a603b1900d98fd02e62883d8204281d4"],["tags/宝塔/index.html","d5acb73f0a704602c65b1b4afac051da"],["tags/生产模式/index.html","6893317ce7b3a8a42bebfe9a7e4b14a3"],["tags/百度客户端/index.html","2483cb4cdaa3a70de4bad26c66ccb7d5"],["tags/科学/index.html","654191cd897b2c429655bed7b0412f8c"]];
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







