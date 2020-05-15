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

var precacheConfig = [["about/index.html","aea32935049816a120ecf11b4e4b1cd1"],["archives/2019/12/index.html","d4722d86f117456c2627b71e2bc661ed"],["archives/2019/index.html","07f5491e7b16406c5b91d6540fedaac6"],["archives/2020/01/index.html","2f85288a4b09ba1e932da625fc550792"],["archives/2020/02/index.html","5f2f182b80da05ce9d6e492a928e5f58"],["archives/2020/03/index.html","a52d8500dd6d1df29eead4e3f03d30be"],["archives/2020/05/index.html","c036bea3e8d4540175fba45ba9773433"],["archives/2020/05/page/2/index.html","45985e67077bd4c6c17e0d862958b1e5"],["archives/2020/05/page/3/index.html","0857412d43af3d56c6e78a90c1c64f3d"],["archives/2020/index.html","1d4dd3dbb4bc549409c2f8eea35259f9"],["archives/2020/page/2/index.html","4e1ce2ca5f4dffdf33831c00aa91f67b"],["archives/2020/page/3/index.html","9684982ca7a8b3762d33ae2d7ae165e0"],["archives/2020/page/4/index.html","40118fa455a0db1c47c40e1728664d69"],["archives/index.html","3e7cfa470804096590d2b82d8710808b"],["archives/page/2/index.html","50584a37331b3c1754d71165462e5212"],["archives/page/3/index.html","bc14fa8bbbe07d956a8c7d3ce51df61c"],["archives/page/4/index.html","964114e6ed67192c50c73918d9beba25"],["archives/page/5/index.html","b07ea5981016762e48aa0b2b1fe40eb0"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","8b09cf0eab157a7f0a1e62ba855d6a65"],["categories/Code/index.html","302ef6ec27521297120224a24a280a7f"],["categories/Plant-Simulation/SimTalk/index.html","fbcf52859a0dbb1f19e44ffe752c16e5"],["categories/Plant-Simulation/index.html","10a677a99dcbf1065fb15a15c3d8ba03"],["categories/Plant-Simulation/实体/index.html","9b03e1065706c3281ca6e8e4ed10f9b5"],["categories/Plant-Simulation/常用代码/index.html","1b8d9f2968268c8c195696f05f89f07b"],["categories/Plant-Simulation/常规操作/index.html","79d4bfe622bf54056d2aae8fe6cc31ec"],["categories/Plant-Simulation/模型/index.html","d51e90d93890c963a713f2f2945b411f"],["categories/Plant-Simulation/背景/index.html","5565b25fa7f097f5f2b6548345700177"],["categories/index.html","06722db46530beb141be1ead7c4fbd48"],["categories/nas/index.html","190ad2c48eff1ea55dcbfed0e86b9708"],["categories/ubuntu/index.html","416f605d8b6160edfc1f9c147e549f2f"],["categories/ubuntu/ip/index.html","e0792d789eec42e15a81be82e2a090cb"],["categories/ubuntu/下载/index.html","866d4938bd27c55a71e8dd14953c8795"],["categories/ubuntu/命令/index.html","217eaef5a0c04ea66ca121b15eb04052"],["categories/ubuntu/配置/index.html","0540369c2f257b11ba39751aab5029e3"],["categories/仿真/index.html","b5623bd2eef95794b496039a4bf41872"],["categories/博客/Wordpress/index.html","e9e7b02ff3bf71d338df9c8421b43ecb"],["categories/博客/hexo/index.html","db47a805723692d71deb4e3c158db311"],["categories/博客/index.html","391f3652935aeda0f358500637067271"],["categories/博客/page/2/index.html","c279121326014002b718621f95982eb3"],["categories/博客/typecho/index.html","667f76ee987e16aa00ea4a985c0dca57"],["categories/博客/统计/index.html","c8d6f38f3877976e087e06ea8de8e773"],["categories/宝贝/BB/index.html","07eb3c504b12fbfd900c7f6b2e055e72"],["categories/宝贝/MM/index.html","742ac5c2d5bee48588c8a76f6c8bde22"],["categories/宝贝/index.html","56427d4884e1f58758938621d1d22f31"],["categories/思考/index.html","2d1d3d935ab9c9bf4ffb56d9d1bcfd79"],["categories/思考/职业规划/index.html","b28f4243c570c9d50a0d9346a000f19a"],["categories/科学/OpenWRT/index.html","ec0683d02198b3801f113f801ce62cbf"],["categories/科学/index.html","9ba07fc1027d8ca716c145ab62c9ca5e"],["categories/科学/手机/index.html","cca6a4eaf5cf9121d6280bcf13b009dd"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d7eb5d4d40027ce4fa3baf028c387d3d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","47a99dc8470cf2fc14392d5cbd2d1816"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4c1a2c6ed7e6b4b1c7a11fd228a47746"],["movies/index.html","d25b01e44a876d0847fb17bd1b46d287"],["music/index.html","c349aaee843c020aaa21697c556c5461"],["page/2/index.html","4c1455fbafa8508a1e26a4cab84469b0"],["page/3/index.html","ea62eeda1677a8b88ea34c20f717a54f"],["page/4/index.html","e6f7b2aaac550d7df6c6b0e8d02753ca"],["page/5/index.html","6fa9aa25f44c2b747b6afedb829896f5"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","958b275cf5cf13e61762f3e284f76c65"],["posts/2020/05/14/23/46.html","c364b13e028fc8c34e7fadf11b614764"],["posts/2020/05/14/23/56.html","aeb320cf4314093b9b3448dc6c1f274c"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","8021e3fb92a47d5ad31c56ac5fe425b1"],["tags/Github/index.html","a7a637d22471d1ee49067989c801ded5"],["tags/Move/index.html","c50942e21cd320b2851768a87eefe9d5"],["tags/OpenWRT/index.html","f813ff5992e925ce8b13b5a09204c467"],["tags/Plant-Simulation/index.html","c53b209b9ce124d79120604b48aad46a"],["tags/Wordpress/index.html","cb461a3e554770c71afa2f90193f2aae"],["tags/cad/index.html","f9d85b24fe55fbf55f10c663db069f61"],["tags/coding/index.html","84488326e9e976c2d201a05e28f79df3"],["tags/h5ai/index.html","76466136a99423e531c8623af10e0438"],["tags/hexo/index.html","74edebf705ef51678dc5b7532dbf64b7"],["tags/index.html","e785e66dd4f67b7464eee413754332f9"],["tags/nas/index.html","ba181d891a488a8ed1813491378dbc93"],["tags/tpyecho/index.html","b14a94467d438b44034e7ebdb7327071"],["tags/transferstation/index.html","d1e61ee4460f162a75d180234e6082d7"],["tags/typecho/index.html","20d1ddab5f99c415d781065dcb468df8"],["tags/ubuntu/index.html","4700a6ac85bdb7febb57896c64d9bd31"],["tags/仿真/index.html","44d6c09de2c3689be4d3b99aae78fa65"],["tags/写给宝贝的话/index.html","86c26c317f3ac28028a5d6c790a25304"],["tags/原创/index.html","ed226593baf2150a3145689ac497406f"],["tags/学习/index.html","cc2bd55f54f27401b8634e69cca0484a"],["tags/宝塔/index.html","fa94f37d95876311d97843f1f54dc398"],["tags/生产模式/index.html","cd395d6a0c53e27a7d4c87a626887061"],["tags/百度客户端/index.html","3036ab9ef1e1523115498a4f4b6625ba"],["tags/科学/index.html","d284136325308e98689fb9b9f3b7e556"],["tags/统计/index.html","c432154667d26a6d00f9968ec5fa35a9"],["tags/编译/index.html","f1153b189e46c7060ffa2f98e1a57279"]];
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







