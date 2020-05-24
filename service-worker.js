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

var precacheConfig = [["about/index.html","d8933e748ecf13c1c685f7138ca08f4e"],["archives/2019/12/index.html","d9cf672a5e421081c42a8e34f10b4642"],["archives/2019/index.html","88fa23f68b06c1bee04b204834efeea8"],["archives/2020/01/index.html","aab56e04a4a22122307fb86496076cc7"],["archives/2020/02/index.html","6e7f29abd5c8e827a32b0d94e3de80ee"],["archives/2020/03/index.html","6f697f6a791bc0afbe0aeff951d17503"],["archives/2020/05/index.html","38ec76ed0b546770c4a2de81c89e7df9"],["archives/2020/05/page/2/index.html","ae124f208cce5ccdded76a793b668bfa"],["archives/2020/05/page/3/index.html","beb8cadb2cd618b6e5bab0bd20cb9c89"],["archives/2020/05/page/4/index.html","5c77cae6093974ad8fa1cb19943395e8"],["archives/2020/index.html","69da0f84caffe8d8251b55804f07baef"],["archives/2020/page/2/index.html","9cf4c29917c1b82d87e0e6d780262ef7"],["archives/2020/page/3/index.html","0b0ad235329f76a321a7370e9aba4313"],["archives/2020/page/4/index.html","dfc8a61d7ae469836cfe1729fb3e5745"],["archives/2020/page/5/index.html","6faa3872f09e9405ee9b80a7191f16ce"],["archives/index.html","e94f5dd13e388d13441a3ff0bb2b4ed0"],["archives/page/2/index.html","907fdd5c3dc501aa52dab675eb020b89"],["archives/page/3/index.html","ccb67d24a0a7f7072da7e00775871818"],["archives/page/4/index.html","e7156629e16dd13a774fbfc59395009f"],["archives/page/5/index.html","fa35ff7dc18bc9dad252b59891ca8afb"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","932722f76115247af16f86bd0868e58d"],["categories/Code/index.html","98daeed353a8142f0d1159c207f3124c"],["categories/OpenWRT/index.html","440d01f8e95828d560947ff6bb782627"],["categories/Plant-Simulation/SimTalk/index.html","cb78e8cd56bf5445546c91626cb1488c"],["categories/Plant-Simulation/index.html","8eaab82d6a6b33d6c6a5fa81f2aff9c2"],["categories/Plant-Simulation/实体/index.html","6bcc63f9ed8eeb66e684d7469363afa2"],["categories/Plant-Simulation/常用代码/index.html","0f5522968d2f7073426f28b6248ae2c2"],["categories/Plant-Simulation/常规操作/index.html","3092369d420fecbd0099c79cc4c45581"],["categories/Plant-Simulation/模型/index.html","052c0020ee0cdbb1008cfd054e72f073"],["categories/Plant-Simulation/背景/index.html","1261293de75410b79ccc9670b4138188"],["categories/index.html","4d735f96e58b5fbb7fd8699dd1d32420"],["categories/nas/index.html","a8ba52c9bdefc25dc1263b57d046ea17"],["categories/ubuntu/index.html","3ea2a4880d753f5b5ccce312323d80c6"],["categories/ubuntu/ip/index.html","65abbb5aedd224cf3bfd37fb1a6c129e"],["categories/ubuntu/下载/index.html","810f9dc1e75b89bab9f6acde887654d5"],["categories/ubuntu/命令/index.html","abec15103e18bdf4b6fd83cec372885d"],["categories/ubuntu/配置/index.html","a0771c148cef8eed36546bc7ebbaf238"],["categories/博客/Wordpress/index.html","0728217581a33def7f9a721ddf75af03"],["categories/博客/hexo/index.html","18df63c80c6a1e76b4fb4304000e53ca"],["categories/博客/index.html","41bc8f33295dee9906f105e2fe1adba3"],["categories/博客/page/2/index.html","ff4f37b96a0a20cbaee99a1a36706c3d"],["categories/博客/typecho/index.html","9bfb0be96a6315076816d51c52c69fd7"],["categories/博客/统计/index.html","8834256d6044eb5eb88181f8d909b66c"],["categories/宝贝/BB/index.html","7880bfd9ad624f8188943e2e9069c399"],["categories/宝贝/MM/index.html","54319cc959db4c8273204ef3ea2d559d"],["categories/宝贝/index.html","96490b077c0a7f3f9d889a913cf0471d"],["categories/思考/index.html","0b147340c6a5e48e69129ba24abdb7cb"],["categories/思考/职业规划/index.html","05ab816a80ea5801882b62ac3adf1e61"],["categories/科学/OpenWRT/index.html","af4ccad76e3f8271d95a34a6cec43ca2"],["categories/科学/index.html","704b2383f4e60b599ed1ea803b4ab9dc"],["categories/科学/手机/index.html","3679941e9af1411b1a3e00ab5231dcae"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a37f38e7736b8b09c154fb8fb162a397"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","14e94166230d13995e5a964cea4521bc"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6982d0d1f2ccbfa02d4bd59111440d6a"],["movies/index.html","7ec860a458e8dcadad8dfb317c79d1b2"],["music/index.html","d482def40fa7413341f5c2d8a7e0c2b2"],["page/2/index.html","579a042e8d1936c4de9b855be4cc5599"],["page/3/index.html","00181460a918f3f5544a594aaaeb083c"],["page/4/index.html","21519e3bca56ca69a6d71c71aac5b0b6"],["page/5/index.html","4d0e98ada230eea9fa28e7f2be2924b8"],["posts/2019/12/04/00/35.html","e4a472220fd706f2d0f71785c04bbf52"],["posts/2020/01/15/20/18.html","6c710cff374de4ceb97852a426a2fe14"],["posts/2020/01/16/22/18.html","11614953d9f8484e852d7dd69492c93d"],["posts/2020/01/18/22/18.html","61cc262964359bf1873cd161d1fe824c"],["posts/2020/01/19/08/29.html","9c5c94544f60805a3fc0e0ad1c8cdd60"],["posts/2020/01/19/22/18.html","7c4dae5b62773adda179192bb72a2db4"],["posts/2020/01/23/22/16.html","3579581543a89ec3f4384ab623dc9eb5"],["posts/2020/02/04/20/18.html","89f409bb00693e0db72d08f33a82225d"],["posts/2020/03/12/00/20.html","ea8466eede12fc1c147f397795212d9b"],["posts/2020/03/20/22/12.html","84684f3339809bd8bbeb3dded51ed8c2"],["posts/2020/03/22/18/24.html","443f10b0d7da7473f967803fa3d2c23c"],["posts/2020/05/03/22/12.html","a51c91ff78a33a9b32ef1a211b900281"],["posts/2020/05/04/00/05.html","e39d18a3bd85cca31192aa7ea34fca62"],["posts/2020/05/04/00/09.html","2f16a2f5d2a441b88994dac063261c12"],["posts/2020/05/04/00/15.html","224ef99cb6d4f422b7b7a16941238be2"],["posts/2020/05/04/14/58.html","8820de1e37166274476ec64562f8fe58"],["posts/2020/05/04/17/01.html","62a72b511f6afba723e26197afb7cf9e"],["posts/2020/05/04/17/19.html","fa2b57d1f286dc402bdfc96b6be9df6d"],["posts/2020/05/04/18/18.html","78e2ec3f7097493900bb07d87fecaec2"],["posts/2020/05/04/18/24.html","7e94a262e4ab2be1cc6f1d6b492726a9"],["posts/2020/05/05/11/12.html","ce620e578df54f25b4d43ebed88b0208"],["posts/2020/05/05/13/20.html","7cccf7702067335c87a8545f21a5208c"],["posts/2020/05/05/15/20.html","da7ef19ae3fda351628a5aa5697f45a3"],["posts/2020/05/07/21/21.html","677312860ea45ae54a664dc1bf1c226f"],["posts/2020/05/09/12/20.html","7a4c1c83da645eca9b5ef089f4ae9649"],["posts/2020/05/10/18/18.html","ba86b2a7ae93b2e93e76b99cd791a864"],["posts/2020/05/10/22/18.html","0f55fe039fdbf4f51a167a40d3d2ca36"],["posts/2020/05/12/20/18.html","e1a79c3a1f6402e73d58c10bab725417"],["posts/2020/05/12/21/18.html","7d2897877dde788df509bd8d7d47ce6e"],["posts/2020/05/13/20/18.html","abf1af6cbf4c8e72d2a935fdddbc4796"],["posts/2020/05/13/23/58.html","56c9f535b315fa4bc196435e049bf32e"],["posts/2020/05/14/11/18.html","38cefe75c7ecb5c4f7b7976b3b42d068"],["posts/2020/05/14/12/18.html","0fe30f0661a352197eba62876a6d427f"],["posts/2020/05/14/20/18.html","4dc307eb7cb7d326f004932cd495224f"],["posts/2020/05/14/20/58.html","b0ccb9b8c4ae5d67d2a8cfa4f5231206"],["posts/2020/05/14/21/58.html","1afd3ad27e784227b52ebd1676b34ad6"],["posts/2020/05/14/22/58.html","6ffe11c3770963e50e34375592fbdd74"],["posts/2020/05/14/23/46.html","f7f2b28edb0fbdb7a395883fd23a793c"],["posts/2020/05/14/23/56.html","910ecf702c27c0de8d8dd4b187992516"],["posts/2020/05/14/23/58.html","5b949fe08a6ff6766d591a2374892e93"],["posts/2020/05/14/23/59.html","baaa4a26ff182367e1e23f7716f0a095"],["posts/2020/05/16/20/40.html","6a97480be33f1445796aa11680920b7b"],["posts/2020/05/16/21/40.html","aca63844b6b2dba033ed70eb06afd698"],["posts/2020/05/17/21/03.html","09592a4fbef805a84aa33c35273ef333"],["posts/2020/05/17/22/42.html","95422552ebea0c603fb978244f16fe4d"],["posts/2020/05/24/07/03.html","419db87c7af5383c3cd33890f8063d66"],["tags/AGV/index.html","96178b004d62039c300940a7df05b1cb"],["tags/Github/index.html","7374de0d1165c35bafd7ed1d585e12ff"],["tags/Move/index.html","07dbd8c2427cd44544857fcca033eb6a"],["tags/OpenWRT/index.html","adec40b79813f273e5da780b36ac8af4"],["tags/Plant-Simulation/index.html","87a957dac369b28d1710f559c05007c5"],["tags/Wordpress/index.html","74d4fd50b5607f049bc1445d3f034a20"],["tags/buntu/index.html","2856bdcb2f7a99913b142b472013a06d"],["tags/cad/index.html","535b4f91058bcd3bbb63763f179cfe4e"],["tags/coding/index.html","48f9bd9c4aae85b2f55a5f183767d2d6"],["tags/h5ai/index.html","50e670de1bae2b37d80b6a82e2cf00fb"],["tags/hexo/index.html","1631387e14866ace65ae8c8487deb012"],["tags/hosts/index.html","1c04d8e01e1c378699aaf51076247ca7"],["tags/index.html","60ee4fa2438d944e797d5c029737023c"],["tags/lychee/index.html","afd5b18d73dfc6c04053fa31e04262ac"],["tags/nas/index.html","01c32d833421661c4b449f6f93abdf65"],["tags/tpyecho/index.html","685136557606fa31d929d656c0a967cf"],["tags/transferstation/index.html","4b6779c99f9e04a7b3d6104ee2d568f7"],["tags/typecho/index.html","c5b54272453fc9c69f8f100bcd36eefc"],["tags/ubuntu/index.html","82b79ac1ffd3da81f142abd86826c9ac"],["tags/写给宝贝的话/index.html","fb5014f2ae00d7b7b4afb04106700946"],["tags/原创/index.html","18f1e74eca715bc9e32adbf26bcb6413"],["tags/学习/index.html","828fe496e50d85b6b0661739ae804d16"],["tags/宝塔/index.html","e40dec7e8cff29199745f6b82fe1463c"],["tags/生产模式/index.html","ef7399170ca9bf5d94c214bbb7bc72e1"],["tags/百度客户端/index.html","f45d6f2bfe7be9553a568cc5bf915d60"],["tags/科学/index.html","65990386c27f73c15f4346246cd8144e"],["tags/统计/index.html","9ba9053f3d68a421933db2398408bb72"],["tags/编译/index.html","82877f13ccae0c8e9dc1ccc183080b73"]];
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







