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

var precacheConfig = [["about/index.html","5190e39ee8543a302b65b11360c16bb2"],["archives/2019/12/index.html","2b4a27990e1baa939b3e46f691e09bb3"],["archives/2019/index.html","bc231c18db7c2fd06401d7dd4cbb0263"],["archives/2020/01/index.html","3a625c306c47c98ca5707c15645656e8"],["archives/2020/02/index.html","1e3dc17a72390a7636dab03fe9e089ce"],["archives/2020/03/index.html","3d21fcbe947e384ecbce173671e3dcb3"],["archives/2020/05/index.html","4d9b0aefef4ac57983a5314c203319c4"],["archives/2020/05/page/2/index.html","68c44f6d162cab050ae41c7a88df2b3a"],["archives/2020/05/page/3/index.html","14894c81153084790f52230839a67b88"],["archives/2020/index.html","9a04e77040797cd9f692cd95d22adb1b"],["archives/2020/page/2/index.html","34a7abef0db5b6af5b43af48a0a23bf8"],["archives/2020/page/3/index.html","98eb735726ec9dbbb46626244b2764fc"],["archives/2020/page/4/index.html","8f301f79487f8faaa071aa5bfa229ec0"],["archives/index.html","ecbb8f692fd5af35f4f0b3a4ceb5ed35"],["archives/page/2/index.html","ea65e5eab93e9fbc49d8ca115e14479a"],["archives/page/3/index.html","767242ab5d444473e502de3bf7c90866"],["archives/page/4/index.html","b8ad6ebb7fabaae7b8635888d15b2298"],["archives/page/5/index.html","d1902e72482f72cf9f6b0bbf377336b8"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","8dbf794d17f07c00b4e9b799f60f4d23"],["categories/Code/index.html","62606967fa90b70b53575e76db079dfd"],["categories/Plant-Simulation/SimTalk/index.html","8063caefe931648016f2a3582ca24db0"],["categories/Plant-Simulation/index.html","b697877e3693a042ccd446fbe8c42da5"],["categories/Plant-Simulation/实体/index.html","0a4872be98c6f2f36086920d188f0822"],["categories/Plant-Simulation/常用代码/index.html","32971674e5e7b03ce692609ced67a2d4"],["categories/Plant-Simulation/常规操作/index.html","57f093c1d9c2fcfad7cb929a77a7ecef"],["categories/Plant-Simulation/模型/index.html","2390782a7b29d7ebb24e6186de66bbd9"],["categories/Plant-Simulation/背景/index.html","db8f305c085ac236c06ffb2dc531bddc"],["categories/index.html","b438cb14e38c6b5ffba1c8bf04a04e68"],["categories/nas/index.html","ad9d41828a7458814025b001785f3126"],["categories/ubuntu/index.html","783c93652bc6097f813069bbe75523b6"],["categories/ubuntu/ip/index.html","cd945eb22e292e96aba394f0c593ba0b"],["categories/ubuntu/下载/index.html","e3a3fe05f2f46529f0cefb5660c4c7cb"],["categories/ubuntu/命令/index.html","fdeb4fefcf1997ef77078bb6053c3d1d"],["categories/ubuntu/配置/index.html","2f685c860f24244bff6910fc41d3b453"],["categories/仿真/index.html","de3264855584b3f7cbd85e7f3d8dba56"],["categories/博客/Wordpress/index.html","4636fcee27c87a554e05a9c1b510c931"],["categories/博客/hexo/index.html","91bb018b214343b13447e29461bf9af3"],["categories/博客/index.html","92ac1ae3c51859338d3ca964d812b078"],["categories/博客/page/2/index.html","51c359992a3507b2cc29133210ed9ef1"],["categories/博客/typecho/index.html","ce72ce480eea2f0d0f683731524cd56d"],["categories/博客/统计/index.html","3a51f37ae2486a83c041503feac70197"],["categories/宝贝/BB/index.html","d30d895a489751ccbb73ba16e5c943bd"],["categories/宝贝/MM/index.html","69dbfd6d7d6fa6124168c22360932aa2"],["categories/宝贝/index.html","8fd4a724cd244a28ddcf551f85bfaf1b"],["categories/思考/index.html","aaa2b799296f8d0cef451417cb62985d"],["categories/思考/职业规划/index.html","51a6fed7fd943701d89548acb6fba0ba"],["categories/科学/OpenWRT/index.html","bf1018124a5b6ceb585f3f072ff22d3e"],["categories/科学/index.html","3f9b40080872bd768bcc7dc285af6566"],["categories/科学/手机/index.html","9c5bda01aba0fbe37023f394f5c70b35"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7f0acccf4f8eff1e81be4765099ba49f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","115f11c31cfff6a16f51dac45ffa234a"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","117442a35cc8aa16dd67404901a1a9a8"],["movies/index.html","37d6aea5ee588f48606b05587274f930"],["music/index.html","24dc015ef1026c99b08a4f5876a169f3"],["page/2/index.html","e0365ad3b360bb5460d34a8dec4f4599"],["page/3/index.html","b0ece5848e7da4a78b71c9b99b0bf0e9"],["page/4/index.html","63cb2e4d64df3a1f31160ac7b4d3648d"],["page/5/index.html","951f5d1bbd9f8fd11f4ceca9ed6e3f26"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","850ec4dc830d68fd915e623eb0214580"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","3e342c3d91dfbd371e10f0373b33ef6e"],["tags/Github/index.html","4d2be94e3a50df21898450e99ae1bb6d"],["tags/Move/index.html","1aaccd63f5477bf395f92d3dfd8b6b1a"],["tags/OpenWRT/index.html","77d1a38be4f72bc39848fed2ae8edc37"],["tags/Plant-Simulation/index.html","9ce113aac1631d996959e7c4b3279ea1"],["tags/Wordpress/index.html","b1edd3428f9cd89d6c146a4f5bfe0f0b"],["tags/cad/index.html","6d1b1c6a206b08cbb6e2826eb962385e"],["tags/coding/index.html","96a304d74e41065574a7b67df5cc1179"],["tags/h5ai/index.html","34baca9570d408ed7574a85c52fdacc1"],["tags/hexo/index.html","159c31a7e567e0cf48380064d06b6f61"],["tags/index.html","e0cab4e2998df4208d8f1ac0fec6cd47"],["tags/nas/index.html","c4ebf0a53c5b8cace2efe080d50bbb02"],["tags/tpyecho/index.html","a3e136d4845320a8d5aff136ab2616b5"],["tags/transferstation/index.html","1a82477f8ac07eae8e35eddb7247f87b"],["tags/typecho/index.html","a4e8df50d5663f69363bfcd98353a2d4"],["tags/ubuntu/index.html","2e83b715abe0aa6810f468485836940d"],["tags/仿真/index.html","72e4f49f621fe0cf84499880ffbd3450"],["tags/写给宝贝的话/index.html","60da1c999cf16ad95098787103d846d6"],["tags/原创/index.html","d7725505244efaa9f30cf6e0e3276040"],["tags/学习/index.html","45a34bf91a9c20008da219cd2f4d5130"],["tags/宝塔/index.html","023ea532b937a8140798f545abd731fd"],["tags/生产模式/index.html","547f954016d21c77011f188bc5e0fcf6"],["tags/百度客户端/index.html","8633efafa553fdb3cf2683901302b262"],["tags/科学/index.html","84254f1fc21e412bf93896b82996edbc"],["tags/统计/index.html","5ce189841b3265625e844cd36816f925"],["tags/编译/index.html","78936d651477a4f3c92aff1667d3b36c"]];
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







