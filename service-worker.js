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

var precacheConfig = [["about/index.html","95beaf8b4f156b7b46dfe5d9fab2b3d0"],["archives/2019/12/index.html","44957b82ed40eefb3b4bd606624c92d9"],["archives/2019/index.html","2abe7bcf2d280fdbe7f8ee0647823937"],["archives/2020/01/index.html","8f0fb05abb27d241f3c9221827bda04b"],["archives/2020/02/index.html","a1d8330d02ddf95234795f69d3b86dd0"],["archives/2020/03/index.html","40c6636c486dc8ce4fa165b98514417e"],["archives/2020/05/index.html","1e10786c39708b4dafe60f6c49a3eb2b"],["archives/2020/05/page/2/index.html","b7b7e71966116302d66a237888115298"],["archives/2020/05/page/3/index.html","fadaeffb3ff2ca4757b16598926ac22f"],["archives/2020/index.html","6bc33fe2e15ce20a5ad0f961ca93ea69"],["archives/2020/page/2/index.html","5a3b37eede8a3d4bd43357923e082ee5"],["archives/2020/page/3/index.html","c87b2b4686b3da3391107e442afc9b43"],["archives/2020/page/4/index.html","ef0ca5b64388f2798c4c7d2ecc2433d8"],["archives/index.html","82cc129f8b65d4f5a8e749372ba0bb9c"],["archives/page/2/index.html","4316053b6eabdeb19b73e83f67073823"],["archives/page/3/index.html","553e9d201557aa529a2b13104eb08719"],["archives/page/4/index.html","7bd126dd9463ea5b8957488d0b310202"],["archives/page/5/index.html","0e2f0bdbe6259098239f9082347eb2b7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","960866814d8b2c812d484ec4f7f48d7e"],["categories/Code/index.html","ae447c49be92a378ffe3566d82ac7067"],["categories/Plant-Simulation/SimTalk/index.html","d5fb9d80b914bcc6d7f953914fb5099f"],["categories/Plant-Simulation/index.html","5543204227ad643142076f35c1a3e80b"],["categories/Plant-Simulation/实体/index.html","ae1b177fe170868bd481da5ad7b8c1b9"],["categories/Plant-Simulation/常用代码/index.html","299f067f96d7202770e08d4ef57031bd"],["categories/Plant-Simulation/常规操作/index.html","df87108c9e950658c613c00d385dc249"],["categories/Plant-Simulation/模型/index.html","8cdb850deb95d80e6ddfd7a0116bae51"],["categories/Plant-Simulation/背景/index.html","7330f02d0d91879596e2a091c9be95d0"],["categories/index.html","8786143b65d0a5f94fd8ef5e28c3a0cb"],["categories/nas/index.html","9ceedb90291fa5f99b4265fb2594ad96"],["categories/ubuntu/index.html","674af0194cf627cb37d22c6da5137549"],["categories/ubuntu/ip/index.html","1cf65d49631ca96ee1d8ed2690633c77"],["categories/ubuntu/下载/index.html","d69ad20aa64d5e9f3785b58afff57346"],["categories/ubuntu/命令/index.html","a3482271600e1cde6c510669d900d30c"],["categories/ubuntu/配置/index.html","540030cf2048342b1e71c6f2308abf1c"],["categories/仿真/index.html","c9eaeee4770246525b97640497714f59"],["categories/博客/Wordpress/index.html","dd53238dd90aeaa7991983030f30ae74"],["categories/博客/hexo/index.html","9a371fb8647bb2a3e045aab09264b738"],["categories/博客/index.html","6b70668675a31d78ec1ffd463d619a18"],["categories/博客/page/2/index.html","f7aae9fc85c89ee5bc4a409146a182a8"],["categories/博客/typecho/index.html","a5c8d353088c7133252784d087ef531a"],["categories/博客/统计/index.html","78c49929886b6552209e44c3dca22dc2"],["categories/宝贝/BB/index.html","057b2d1b3196fdd9f1e335655edba9ad"],["categories/宝贝/MM/index.html","8d92d02a722b9b8bb987d048331cfaba"],["categories/宝贝/index.html","a1ca8704ce1d11cdd65a2f0d1a394416"],["categories/思考/index.html","31c625486e431b3b88008b9062b9db81"],["categories/思考/职业规划/index.html","dbfd41b371a82c258ca148cdcf6b3d9d"],["categories/科学/OpenWRT/index.html","16fe2c49948582bdc27272effc7b1ebd"],["categories/科学/index.html","3fca14c9a128123a58447ea37273a6d7"],["categories/科学/手机/index.html","ff6bae410b42e94ac98ba5496a924757"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6c3771f2f375043b9e1241ed440ce960"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","47976633aa89d496b17cc67242fcb859"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","8c0633708efed1a3d35b3c21c09b1c90"],["movies/index.html","11201534fa6543bfa03f5292e60ad6c5"],["music/index.html","e7175cd90ddcb3e64efb97c68a24b9e1"],["page/2/index.html","b06301c225d4fe076c1657fbc32c12b5"],["page/3/index.html","5634b8617e4519f18b5386ddc73d929f"],["page/4/index.html","829ac1272a3586e4ca911e0f7b6319be"],["page/5/index.html","5bc74c7fedfb9d9f55c25d449eff99a4"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","958b275cf5cf13e61762f3e284f76c65"],["posts/2020/05/14/23/46.html","fedc9b94f99a56f8c13dd130cafab83c"],["posts/2020/05/14/23/56.html","aeb320cf4314093b9b3448dc6c1f274c"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","79f50ee53d2ee0a433f6dcebf2a0f751"],["tags/Github/index.html","99bc6b765bae3855d2059d3c08668632"],["tags/Move/index.html","be4763559ecfebd56a5b8e049a50946d"],["tags/OpenWRT/index.html","0ffca0ee3134f4f6f8de793d550c28a2"],["tags/Plant-Simulation/index.html","307cc00e8634e0e6241c818ca4721070"],["tags/Wordpress/index.html","3c8fb405fa3a2df2ce0baa9f927cd4db"],["tags/cad/index.html","f4ae29748cf87e1e9e3efe982010bb69"],["tags/coding/index.html","3970744f0e6ad25b778c8b04d8b16191"],["tags/h5ai/index.html","422fbb15fb3357885e11edbf0aba475f"],["tags/hexo/index.html","f22007a87cb1ed0c98b0f0a02f65cd1d"],["tags/index.html","83f6955a8e880e0db752411d4e5a33ac"],["tags/nas/index.html","c4d095855e2ebcc7271030f303c94370"],["tags/tpyecho/index.html","878c3e00681032fe2975824e1f7e3a28"],["tags/transferstation/index.html","896274edfd0897ff18217db50360d04a"],["tags/typecho/index.html","2e4e182afe46c57fae04f9eeeac45381"],["tags/ubuntu/index.html","54d1e187039d9a0e3528d407a4b6551b"],["tags/仿真/index.html","757cf09ddd2232224b0ea310450015f8"],["tags/写给宝贝的话/index.html","939175bcc76b2bd91a0e79e8c84c4407"],["tags/原创/index.html","df6ba4a23a6e3384b72f89498f98645e"],["tags/学习/index.html","545081ab003ee798f71fef323daee30d"],["tags/宝塔/index.html","62614ecea4a707e2a9afb4c4641bb813"],["tags/生产模式/index.html","d5394b5adb61efc0dcdfd05a56f87b58"],["tags/百度客户端/index.html","2f45b0a48b85da5429a828ab08eae968"],["tags/科学/index.html","baa7f9c9453eb85f99ec4f241cf6d0e2"],["tags/统计/index.html","9eacd16410b45348eb6eaa8cfe7e0b8a"],["tags/编译/index.html","e5797097854e39085e5b420142f7bdee"]];
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







