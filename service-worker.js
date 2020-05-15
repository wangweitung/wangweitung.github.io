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

var precacheConfig = [["about/index.html","181cea1988a761b8945552f1eae699b4"],["archives/2019/12/index.html","0d5810eacd6d56439d1add7091258abb"],["archives/2019/index.html","09f26be5711538052e5e461347a82af8"],["archives/2020/01/index.html","eaf718b9f1849dfbfdea5cbc0660b6e2"],["archives/2020/02/index.html","7333c3301d0dcb7482034634d328dbbb"],["archives/2020/03/index.html","ff93d1c40ec6a98fd8f2126004d3ca2d"],["archives/2020/05/index.html","4c4abc5b432489a843c754005840cec9"],["archives/2020/05/page/2/index.html","2a5cc8e3e230967dd3e0390f48a45814"],["archives/2020/05/page/3/index.html","d254be8f35d24a5ccfa4cfa7743d3670"],["archives/2020/index.html","281560d7bb7fb9c4c32f0932aa540a5a"],["archives/2020/page/2/index.html","49317a41451c10da9df146a717eb71fd"],["archives/2020/page/3/index.html","e0e2a6739ddf00da297deef8f9f74815"],["archives/2020/page/4/index.html","80ae440ad963d84e48d13aca53b07559"],["archives/index.html","70e1d83156d775216e5a1cbfdfe6453b"],["archives/page/2/index.html","d628120f1d5c08bef1c11349b32c46be"],["archives/page/3/index.html","d8215d0c29378e975cbb98eb3270c699"],["archives/page/4/index.html","b0e6cd5c7643b75c122b8dcaca92ce2f"],["archives/page/5/index.html","5dce266acd9da3db83f18dfad24bf2b2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","d3d657549164c19e2fc84303e2e8c5f8"],["categories/Code/index.html","560c19a9d8de5e4a3b3e55b2ae4d1e56"],["categories/Plant-Simulation/SimTalk/index.html","b89c42c122defdd85a03d6da0a3ef6e2"],["categories/Plant-Simulation/index.html","3167cac643fe443c38a056582650971d"],["categories/Plant-Simulation/实体/index.html","cbd3875708c3d2eeb6bbb8dfb2535f05"],["categories/Plant-Simulation/常用代码/index.html","586c199566d490f73784df2588f8abc9"],["categories/Plant-Simulation/常规操作/index.html","e2cff98769bf7f87dc75568f67be5b44"],["categories/Plant-Simulation/模型/index.html","a06f718afeb3be2ad138cf1037502989"],["categories/Plant-Simulation/背景/index.html","0132a8b1e8a507fb8b8345b737cd2cbb"],["categories/index.html","9140de24b58e06ea49aa0b8e50d6653b"],["categories/nas/index.html","4b7e290e3d0388e928c1e847be45fb59"],["categories/ubuntu/index.html","5050b806398b461512bb1f1b1d5709a1"],["categories/ubuntu/ip/index.html","de632d36351c02dd04353a496c03ab0e"],["categories/ubuntu/下载/index.html","b58777da32fb1ba500e83df0ac0e6a8c"],["categories/ubuntu/命令/index.html","6c24293d0b3d789040f757693d5f03e5"],["categories/ubuntu/配置/index.html","f5c076023e3429381b7e93bbacea1383"],["categories/仿真/index.html","52f37b7b5f086a1fd81ba7162932025b"],["categories/博客/Wordpress/index.html","ee22ea03d0469e99d80c68239d138c4f"],["categories/博客/hexo/index.html","b61ec8a78f320e9ce26972a73bc42a80"],["categories/博客/index.html","fc50d37d1b0856727119b66e931ebad3"],["categories/博客/page/2/index.html","30f012fef77b5a74fa9b01401c33823c"],["categories/博客/typecho/index.html","c14bd21975c465348afc95a5cb2577b7"],["categories/博客/统计/index.html","95b32cce4807b608fbf891464e76c93e"],["categories/宝贝/BB/index.html","f2433541b3a1fb83b6a009968e29831e"],["categories/宝贝/MM/index.html","627968faf06dc9807482ea56da5e0aa4"],["categories/宝贝/index.html","91343c6c0adc9106a12aa2915b58f97f"],["categories/思考/index.html","731116e488cc720ea59b607bd9da677f"],["categories/思考/职业规划/index.html","f96f9b7deaebe8a39fd1430082a07cf5"],["categories/科学/OpenWRT/index.html","84657397efc3490cedc1388c76a590b3"],["categories/科学/index.html","4c4dfd02778916c6f0fb0518a5ad68c0"],["categories/科学/手机/index.html","44745e36005893f75769ea7f84e6831e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","fd5deab6db0c7cd840014c1d6032e77a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","14b745e2fbc970f68fa1a620fec6fdf1"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","7b2b3da07676d53d84ad417000f6823b"],["movies/index.html","2e07d074b49368096395aeee457721e6"],["music/index.html","fedf98ae7de21776155901a2b56753ea"],["page/2/index.html","78cdd542dc99660a476edc5b89808197"],["page/3/index.html","35b316138007123e15513a6e281612ca"],["page/4/index.html","a3589ea55ea4e3363edd37cc796a8aee"],["page/5/index.html","651f1761bcfb6c89dfd795a4b61a4188"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","c0fd52ff31ff1625af3dfa9241791abb"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","33008b84a3884799c115eb69575b6a58"],["tags/Github/index.html","6eba96e0409edc75db95d22bdc5ad11e"],["tags/Move/index.html","eaf295a17fdea242c057366d8d410ae2"],["tags/OpenWRT/index.html","0dafe3a04be06ed73b09798877bce94d"],["tags/Plant-Simulation/index.html","bfe07417dc0572b67addb55a6ef69f37"],["tags/Wordpress/index.html","d23645998b30052f986dc497e2bb549f"],["tags/cad/index.html","d13ed43281c082bc78a5ea88f6a2131c"],["tags/coding/index.html","1f31348308ab3a07b69cb75d0ab6fb3c"],["tags/h5ai/index.html","41eb1b7677df22907b74e643adee5778"],["tags/hexo/index.html","fadaf8d838e74be30d5af56968f43094"],["tags/index.html","346571ce3d82da04d5927cf41f857c0d"],["tags/nas/index.html","7b54108d12d3d86fe20929a74d2c90f6"],["tags/tpyecho/index.html","422dc7431705ede0c5b439148d14cd18"],["tags/transferstation/index.html","c04c70e897b9361e5cb6951195bceca9"],["tags/typecho/index.html","208d0cf1c845d9b764a335db3069beee"],["tags/ubuntu/index.html","3a40bf878decc10033164eb9e48e42ff"],["tags/仿真/index.html","eea7aacb74189f2e48569d4439b6af4c"],["tags/写给宝贝的话/index.html","68eb011c0a70ced6e62d272bbd39fb28"],["tags/原创/index.html","ea390cdee8bbab36a0d643bc40c837c2"],["tags/学习/index.html","039994a0f10a132e7e95331e6a445c5b"],["tags/宝塔/index.html","2e256ad3e204f491b9158bc33624d3dc"],["tags/生产模式/index.html","9889ec47ee850847a5be42c2740a1615"],["tags/百度客户端/index.html","f0401e7954344bd117527672798e1d33"],["tags/科学/index.html","8de36d727e10492cac1a2c90fc32aee0"],["tags/统计/index.html","1dad2c81eded1a8788c07d2e86e59ee5"],["tags/编译/index.html","65ea5a8871538aa56e46db86665e953d"]];
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







