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

var precacheConfig = [["about/index.html","88ae8d7b2c1b6505a33d12d0c7ae1b0f"],["archives/2019/12/index.html","f75d10e02e9eafb7609a7b989c0d1f20"],["archives/2019/index.html","5af19648ed06d671c7a304ede1526a23"],["archives/2020/01/index.html","0c177c3ce87cefd4c9a257c6ef33114f"],["archives/2020/02/index.html","a8aa6008923a8aaa97af0f345217911d"],["archives/2020/03/index.html","cf4c082c0b7e562a43b0cc0956715be6"],["archives/2020/05/index.html","aad6d00fc7e16433a20b344054ce5815"],["archives/2020/05/page/2/index.html","434f21443a069cf58ca7a1c903b9f80a"],["archives/2020/05/page/3/index.html","b92882f9e8257b77c8357dad4f9a951b"],["archives/2020/index.html","030d2741be3ab0c2057eb7d29a098829"],["archives/2020/page/2/index.html","063f6b2165b8946f6dc125e44694f50d"],["archives/2020/page/3/index.html","dfb34361af984c0e93deff38dff3aecb"],["archives/2020/page/4/index.html","a48cb9036f4c45769c90edb343099b45"],["archives/index.html","23f2968df1633ce29d6a5661bda70795"],["archives/page/2/index.html","05d1872fb4e11a6348494ccb3a2e1c7d"],["archives/page/3/index.html","c268cd722136bdedab515d8ac1c9ac39"],["archives/page/4/index.html","630bcf13321b5eec89e626801922f2e0"],["archives/page/5/index.html","dd7a1925c36eba31c8040f16371afdb4"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","9105a2a1a4a1654fe26d6a98b7391838"],["categories/Code/index.html","cd266f0df303e37be300e476544f11c5"],["categories/Plant-Simulation/SimTalk/index.html","17386b0f8eed3eebb8d9081d7d4a2206"],["categories/Plant-Simulation/index.html","6e58966936e558dde995e3eaf8e3c2b2"],["categories/Plant-Simulation/实体/index.html","dad46be0902eba2a62c8e1428165e859"],["categories/Plant-Simulation/常用代码/index.html","3756df202e1e3377c9b864d97c3ef322"],["categories/Plant-Simulation/常规操作/index.html","364f0f87cfe71782016b8e08901e83a7"],["categories/Plant-Simulation/模型/index.html","2ccceeec6ffca0e006771362a8fe6207"],["categories/Plant-Simulation/背景/index.html","e23b72c7c59ec63c0def287fa99f86a5"],["categories/index.html","34e1c637a36c104465fb4bf6f6e0b335"],["categories/nas/index.html","3d2e00b1f1eea40fdc4ac17a398ad97b"],["categories/ubuntu/index.html","c80ba5d14ea8430ed04a10f89bcc6363"],["categories/ubuntu/ip/index.html","63bc6aa3c9fa1902820528095bc7e336"],["categories/ubuntu/下载/index.html","2081e010dacd7707e93b17b60f9f3455"],["categories/ubuntu/命令/index.html","07a534e7e0539feee9a99d1a73fc0cb6"],["categories/ubuntu/配置/index.html","12b1dfa4be67821d26b51b8500cda99a"],["categories/仿真/index.html","5743e98121f81c8ec3082e05d29bdd89"],["categories/博客/Wordpress/index.html","e3d74c9c88728246ede7a95d33c76194"],["categories/博客/hexo/index.html","284b88c36cfd2a351b06b2612262f269"],["categories/博客/index.html","a91f41975b12b8957b082318929894e7"],["categories/博客/page/2/index.html","f63bf010bf8a7ad75b7869d7a7886549"],["categories/博客/typecho/index.html","712d22c56cdd0418164393d775794c76"],["categories/博客/统计/index.html","c2d959f26b6c4de7306d26566d836fa9"],["categories/宝贝/BB/index.html","65c8620b7e0e66123d2addb334e46a7f"],["categories/宝贝/MM/index.html","5fd68dc8ff5744cd2590026dd306be5e"],["categories/宝贝/index.html","a1bef324e5b3ce17f8270e2bd0678b96"],["categories/思考/index.html","f8330e35ba16a1f65a7586c5ff8db1bf"],["categories/思考/职业规划/index.html","1f85b2a5411755d5783d2110913be96a"],["categories/科学/OpenWRT/index.html","64d3b77b95bc3a361b8d74aa14d07666"],["categories/科学/index.html","baadaaf518b6926baa1e7819bea58d16"],["categories/科学/手机/index.html","b4d03fd953ec1f8c45c4f22ec34d4645"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a814db45b089c911f10f8ae171085303"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","25d0bf6bc4f1626ff1b21fee5489e65b"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","884ccd585c9cce1e662f54f0818621b4"],["movies/index.html","4f28d5fe1eb95915d7ffef97e3f9ace2"],["music/index.html","bb6dfb6d4e62310c81ead0a57cef126e"],["page/2/index.html","3e65545c35b7dab9d319fed9d45a05b3"],["page/3/index.html","4e377769b3db93afc22fab6be0a79bfa"],["page/4/index.html","53d301e7a32c7b604ac6bc054be01788"],["page/5/index.html","76e88919a25a9c939edd22c846108f5b"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","dec363fa85602a439c6c3a1296af0b38"],["posts/2020/05/14/23/46.html","22f87e62b34449527377314be655c934"],["posts/2020/05/14/23/56.html","cbb4ecf7881a41dd29b1a871de00fc1a"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","145c07a729d4b763a34d62ebb6bf4acd"],["tags/Github/index.html","6900333d066a5d3d858c4f595c3bdec8"],["tags/Move/index.html","ccd6fd37dc3e80dc8f37716d0649c287"],["tags/OpenWRT/index.html","dee2ec0b4db147d964861ebc8c7fce8f"],["tags/Plant-Simulation/index.html","cc7c17e0a24ee01b9b06069c15dc2c46"],["tags/Wordpress/index.html","0359cc02cf75b2ceabbb0874c2c9538b"],["tags/cad/index.html","692b036ab6a193aa7d43f8c2db3aa624"],["tags/coding/index.html","d06a7a8422a3e914e464293ca9b1c9dd"],["tags/h5ai/index.html","10de55d7306873d49672004648ddcf44"],["tags/hexo/index.html","7124665e477593ad2c82ecd28c0a6a89"],["tags/index.html","36a7bd50a9f3895e8133f891765b0cf0"],["tags/nas/index.html","b5c7c542c3fd2d4a434a79ebce53ab5e"],["tags/tpyecho/index.html","6d4e96c13c27d0db5112868f88b71fd1"],["tags/transferstation/index.html","57f136d1e928c1a886d909f08a70956e"],["tags/typecho/index.html","6c78268ba26d2c64b6a066104d02c9cb"],["tags/ubuntu/index.html","efe9ec618757a3020a3928fb6745f2ca"],["tags/仿真/index.html","c8e9c61b70db20a904411343be462d0a"],["tags/写给宝贝的话/index.html","e8b0f66ca95cee21cec4bf1fbf3e3a25"],["tags/原创/index.html","2ec0dc746d784c74fd897ba5f6270e85"],["tags/学习/index.html","a60db17a4778386df7bf075534585c40"],["tags/宝塔/index.html","ea16bd15c2165f8756a21e09bcb5538d"],["tags/生产模式/index.html","9fda8675ba508dc2108d480a21ccb81c"],["tags/百度客户端/index.html","ef19fb67b7c670230509d687453a7142"],["tags/科学/index.html","6a8722a8f30f07109a9623de2c314451"],["tags/统计/index.html","7cab3fe27bb0102b4ed42b4919779b0c"],["tags/编译/index.html","5da1303e8107f0f215f558df241669bc"]];
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







