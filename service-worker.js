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

var precacheConfig = [["about/index.html","aea32935049816a120ecf11b4e4b1cd1"],["archives/2019/12/index.html","ee6c132426a17fece78a271030b2e4fd"],["archives/2019/index.html","b6e63e5d81caf3793fee5b1219532dbd"],["archives/2020/01/index.html","f290e63e4feded802075d2c4aed6fc74"],["archives/2020/02/index.html","69c45a1cf76bf5a9f18016fd932ed255"],["archives/2020/03/index.html","82e6225bfdb400831ac9053761b0b7e5"],["archives/2020/05/index.html","e088fba9f1fe582dc870919d6859bb53"],["archives/2020/05/page/2/index.html","9186a8dd1c0c2cb67161daaefdd82442"],["archives/2020/05/page/3/index.html","c3f65e9d067c56f227f5d189a230a174"],["archives/2020/index.html","6f94a53f95f992155a8e393f4a22275b"],["archives/2020/page/2/index.html","e6b74076fc3e592ef033b25d0af2d2e0"],["archives/2020/page/3/index.html","4f9264e1764788b3137c3c44fbc6cc9d"],["archives/2020/page/4/index.html","9896f485d34748f505ef0401b53dced1"],["archives/index.html","a8b1d1371dbc8cff0c75fd90f33de45e"],["archives/page/2/index.html","30e3f6bc7976c6416bc822569102c207"],["archives/page/3/index.html","b9f82e68ebd5545da8187e9e738210f3"],["archives/page/4/index.html","ea1bdeedaedd630ca75620bb8c036c95"],["archives/page/5/index.html","4205a2b27922e81dad287f882648c8ee"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","ea7cd57bf6e7d720217665facb26c931"],["categories/Code/index.html","5319457f51c325ccc7df192e0f92fa70"],["categories/Plant-Simulation/SimTalk/index.html","683788f4aa93936b163bb195e1532e29"],["categories/Plant-Simulation/index.html","6ba6735268dce0987dc9ed84c0886d95"],["categories/Plant-Simulation/实体/index.html","28538bf2c860f426dc4369402305c86b"],["categories/Plant-Simulation/常用代码/index.html","f5add67e85a6daae988fb6a043449885"],["categories/Plant-Simulation/常规操作/index.html","572c7ab9f240f9eafb549c4a8f62f598"],["categories/Plant-Simulation/模型/index.html","cf34f2d3e9466c5756ee7d90e1d22e98"],["categories/Plant-Simulation/背景/index.html","bfaf41b733c877a099a73d14677a689c"],["categories/index.html","06722db46530beb141be1ead7c4fbd48"],["categories/nas/index.html","2e86e01fd4e48ad493872ada01dfb3ee"],["categories/ubuntu/index.html","0d747c4443befc895470bade5906bc6e"],["categories/ubuntu/ip/index.html","2d141f1bbe66f79dcb31df8d5835672a"],["categories/ubuntu/下载/index.html","910eb70f222f23392f95beac9a45327b"],["categories/ubuntu/命令/index.html","7de8afc885f5fcd3fc5b94efb56598ac"],["categories/ubuntu/配置/index.html","8bf6b6873438cdae146f31e90fa2cf9b"],["categories/仿真/index.html","c205a59c01c67f24fc0f420a020afe7a"],["categories/博客/Wordpress/index.html","359235fc1beb0703da3155b2f14fcb66"],["categories/博客/hexo/index.html","e88c7af21814078479e77d1828742f86"],["categories/博客/index.html","3f08314ed85259cb0d05c9f942b8d509"],["categories/博客/page/2/index.html","dd59618750874a08310dc37d7543f5da"],["categories/博客/typecho/index.html","8d0e0f0131d209fe8b4fd9088cba93aa"],["categories/博客/统计/index.html","57f1a473a0fee6587006e3c0842733e5"],["categories/宝贝/BB/index.html","5e408494afce41de2be1f7f9386ffc79"],["categories/宝贝/MM/index.html","40e1af1bb498e4628a990edd935b335c"],["categories/宝贝/index.html","ec188960efe3fa7132db70890c8a1038"],["categories/思考/index.html","5dac355e2e6e84b1a38e061e6ee95ea6"],["categories/思考/职业规划/index.html","3e12b986740141a6f30349d37c50a1fd"],["categories/科学/OpenWRT/index.html","ca98e7e42ec1643fda7e8c455fa4c929"],["categories/科学/index.html","fd99cf814167ca27a08692bf90a4bfb8"],["categories/科学/手机/index.html","600b65c2164e15c6a40fdd7fca4148b6"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d7eb5d4d40027ce4fa3baf028c387d3d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","82c06014da08f400444a7377ea4a00e4"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4c1a2c6ed7e6b4b1c7a11fd228a47746"],["movies/index.html","d25b01e44a876d0847fb17bd1b46d287"],["music/index.html","c349aaee843c020aaa21697c556c5461"],["page/2/index.html","01d51c13babef0fb10492f6a103b2e8f"],["page/3/index.html","39a08e0edd6ec2c905bfd66ba883513d"],["page/4/index.html","272c730d342456d1617d715d78a33d87"],["page/5/index.html","756e7eafe41a2edda9a6ce091b59f370"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","958b275cf5cf13e61762f3e284f76c65"],["posts/2020/05/14/23/46.html","32f389b43e71812406d2e21d022dcf7c"],["posts/2020/05/14/23/56.html","aeb320cf4314093b9b3448dc6c1f274c"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","dbd0705f4ef7be3aa89991e6b37097c6"],["tags/Github/index.html","c7510266ea9730bb237e52a5ad6ebb8d"],["tags/Move/index.html","f8e2a892701972ed1ebc1a3943ca392f"],["tags/OpenWRT/index.html","30f718d44b8505bc52d2d7caee95a04f"],["tags/Plant-Simulation/index.html","6d226cd98bf698bbbe677eb6520f53da"],["tags/Wordpress/index.html","911ace97a46faf31a7d62dbb437fb0ed"],["tags/cad/index.html","8e3964aeec63b314f5113099d2af1e58"],["tags/coding/index.html","769e0e30d5894ebb03a0809bdb00c6a5"],["tags/h5ai/index.html","782ad1518a7f9b3f918cfb711ad728a3"],["tags/hexo/index.html","8b4bbd710a7c8824dd59428bef765257"],["tags/index.html","62f3a21552e7e08652a8e22f144d96e5"],["tags/nas/index.html","a2956f4d1af93d6231751c266d39ee81"],["tags/tpyecho/index.html","c821a03d8262bbf32193d2d340f4d3bb"],["tags/transferstation/index.html","dd91e00ff98c562fbb9820f362823fef"],["tags/typecho/index.html","2a868e777f2b205c3419bd72f48cf1e6"],["tags/ubuntu/index.html","d3cc36bb434d3ce82f5f7125de474f3b"],["tags/仿真/index.html","b0dac399673edf84e0f3fcb7121d1589"],["tags/写给宝贝的话/index.html","9712ec5e4a4b5befad153c44639bbb43"],["tags/原创/index.html","9c89d416a0840d5b8111f06cb259577c"],["tags/学习/index.html","65d68f65ea1045edb3c9ae39ee1fd771"],["tags/宝塔/index.html","c18110f32b1081dd77ceb3d8be63ff66"],["tags/生产模式/index.html","265471420b87aa0af20d2fff01cd7276"],["tags/百度客户端/index.html","baa0cc50764783ce82468f0cbdf97249"],["tags/科学/index.html","abd53677d7063a4b919ee29909f219a9"],["tags/统计/index.html","9dfb8f319a75cb42c15d9d5475c388e9"],["tags/编译/index.html","4f28f28db9f105ff3414afca603b72bd"]];
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







