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

var precacheConfig = [["about/index.html","a71b04befc3abb7ad5d00666f9ec33ca"],["archives/2019/12/index.html","321405dc27247c938ed7107ed82fd5d9"],["archives/2019/index.html","32233a2c2612e19f85bc11d249484ba4"],["archives/2020/01/index.html","e0fc0e776f989583ef8e4515f9728359"],["archives/2020/02/index.html","db26a5114fd6b91a9c61023cbb69ffc1"],["archives/2020/03/index.html","f3e9e4d0c5a16e1187c5b29e6f593300"],["archives/2020/05/index.html","5f678ed8ec9659a530fb2cd3a2e25741"],["archives/2020/05/page/2/index.html","a3d6da76bdfbb30191a109eb93c65109"],["archives/2020/05/page/3/index.html","a3e6134903103baf8aaf3c6d0fb45fbc"],["archives/2020/index.html","7fa19c077adca89c5adc1f798e14b1df"],["archives/2020/page/2/index.html","16653fd7f1d6125b260d6552dd5f5c9d"],["archives/2020/page/3/index.html","b1fb73df408b7b4cf3252b228160315c"],["archives/2020/page/4/index.html","c8b1366dfcbcbe1518fff83adb1af41e"],["archives/index.html","4d84d126363be8a47302883eab67f0fd"],["archives/page/2/index.html","7a31d08e51aaf16fcdbd8a28852a457f"],["archives/page/3/index.html","1ed7ec5ebed8fc4ce7264fceed791871"],["archives/page/4/index.html","c75958f6a88704814797163726aacc8b"],["archives/page/5/index.html","072b74b64df4913ca9a73cfd7ab19aae"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","c9b7bceff384bfcaa5423742ba63a939"],["categories/Code/index.html","03c21a4a455940a5f8d64f7ee36a5859"],["categories/Plant-Simulation/SimTalk/index.html","6e472a50f54f7dc76b9d0a2d1947f139"],["categories/Plant-Simulation/index.html","db4333d136b0c6113864cb3e4625419f"],["categories/Plant-Simulation/实体/index.html","eb9677f20d5469cfe3294de46777e6b0"],["categories/Plant-Simulation/常用代码/index.html","f9498aa56092ee50b4e7327c29f87eb6"],["categories/Plant-Simulation/常规操作/index.html","25d6f88151adeda9cde049839868402e"],["categories/Plant-Simulation/模型/index.html","547e347f9299219400b3692b83472cc8"],["categories/Plant-Simulation/背景/index.html","f6a45a43037bbb01904b060c622503d0"],["categories/index.html","828801917bbccdede3464ac359aa8f55"],["categories/nas/index.html","29b8308400f9292df1586718a4b0f4c5"],["categories/ubuntu/index.html","eb6a72e471c3d0427384050a02eaa136"],["categories/ubuntu/ip/index.html","1bf342249beb0b4fa64fd9113093bbee"],["categories/ubuntu/下载/index.html","7f3ff6095e3df69bd16375ca3fce54dd"],["categories/ubuntu/命令/index.html","ce751cc1f4834096c75395a6093d96df"],["categories/ubuntu/配置/index.html","cf24febc22ca2cf5a49e5ff2d74a8ba9"],["categories/仿真/index.html","eb19da2aa6eb9e76da6cac8b1173ccd6"],["categories/博客/Wordpress/index.html","d1ec87fa5a0910ff827e3488d105addb"],["categories/博客/hexo/index.html","43ad705a5cceeb3cd5be175ef3f62fbc"],["categories/博客/index.html","e6a49380591e6b382e7a6276d3fb47ff"],["categories/博客/page/2/index.html","2da096a142fac3917029858a21f27f83"],["categories/博客/typecho/index.html","f42f62ce928787668c30291e640444c7"],["categories/博客/统计/index.html","643930380470860b5f890b80fb1028a6"],["categories/宝贝/BB/index.html","cc401a3e141f43425845a57c8b8f1720"],["categories/宝贝/MM/index.html","df6c39ef5c0f9d6e254f8556e0c64f34"],["categories/宝贝/index.html","99b5d05631ca205462e0a2f03e6db1d6"],["categories/思考/index.html","645088533196ffe89b224ee9c8d98f04"],["categories/思考/职业规划/index.html","c38af73c2d57b645228c3687d0edc5da"],["categories/科学/OpenWRT/index.html","424190ef911288387d3810689c6b1877"],["categories/科学/index.html","bab978a16ef2dbf7acfefd85fbf9a49a"],["categories/科学/手机/index.html","767fa42613fd7398b542a3cc3619ea71"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ee9b915ac67237ab362d0fb2eb04717a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","57158d0fcd39c2c625edb484b27ac975"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","92cd11f219ead33da94a0c21c7bb554f"],["movies/index.html","34a296e76e95cc46af82bf11ee4a2f15"],["music/index.html","ac1dc86c949b9733b9df9ac5f09da444"],["page/2/index.html","bd403a499c9159a9e7b475610ffd368c"],["page/3/index.html","6e93e7126e7eeb65e9046c7f1990f904"],["page/4/index.html","221c405a5fa7aec5dc36e2cf95e362e4"],["page/5/index.html","34360a1535d35b5e735049f004d4414d"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","9f7e64d9e08afaaf17b232feaa2ebd7e"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","69d751a062e341da0a286fe2676b5c43"],["tags/Github/index.html","3f03c07d45666d2de8374cc969d236f5"],["tags/Move/index.html","8390deb516b0171d502e8713124200dd"],["tags/OpenWRT/index.html","325d7023a36723125bce6b446db2f403"],["tags/Plant-Simulation/index.html","960229f695f8b6dc54f2268fb06b51ad"],["tags/Wordpress/index.html","f41738debbb784ee084138e2103228ae"],["tags/cad/index.html","a6b4fb46d4c5f8be1755125b0f88b130"],["tags/coding/index.html","340d1ba4ff473ed22d6f2454f6c4cf39"],["tags/h5ai/index.html","478a02d60edb6e12d6786b338d7d404b"],["tags/hexo/index.html","0d9e567435c326249c1f25aac75b2d95"],["tags/index.html","40cc74c6e662d11b4faa78bd75e8a081"],["tags/nas/index.html","7d3ce4e856d00f46c472edafac0ad73c"],["tags/tpyecho/index.html","8e216893672cc44e7481f2b4406a074a"],["tags/transferstation/index.html","bb236fe780ab9d673406b360932b7942"],["tags/typecho/index.html","94b1e4633a69b6266feb77fbb6ddac2d"],["tags/ubuntu/index.html","d7586d8e39c70d8504b8272b1269e829"],["tags/仿真/index.html","16bc14adcf49c6048b4d8b8722c353d8"],["tags/写给宝贝的话/index.html","e44be2712e538de6e326dcc5f1d46eaa"],["tags/原创/index.html","4de4a65506a0a628de2987eb54dca4af"],["tags/学习/index.html","9edcd8ee0ec72a58fc4f60b9bb2d16bc"],["tags/宝塔/index.html","a2cf84a5843227f56738eeebbaa85d01"],["tags/生产模式/index.html","6f3d072993c2db1be055493c48c06c26"],["tags/百度客户端/index.html","5e9c92cbcda484060edca74eed589439"],["tags/科学/index.html","346a4703727baae69bc52ec7d0fded02"],["tags/统计/index.html","3c2d62835efb19bae67f3ff1a2280b48"],["tags/编译/index.html","75cc729f7c65dd1eb6e7d09e1e1fd56d"]];
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







