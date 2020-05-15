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

var precacheConfig = [["about/index.html","dc6284c3aa7cb5a1d1ea5cc19a7f41bf"],["archives/2019/12/index.html","02502133481bd719c18f3285b004c17f"],["archives/2019/index.html","df07a0cfbcd7c9a18a438a29118af5f7"],["archives/2020/01/index.html","e49fe6aa5acecbf75f91e4beb8f36adf"],["archives/2020/02/index.html","027af968dd83f5525a421e6eb34075e5"],["archives/2020/03/index.html","10082c4e8b5fd9bce30a0262ff45424b"],["archives/2020/05/index.html","ff0fc184b2b764d3561ccfd4ddb4ec29"],["archives/2020/05/page/2/index.html","ad32a74f9d328978287b234093d8189c"],["archives/2020/05/page/3/index.html","174a0501c589625d8a2429e986f54b5a"],["archives/2020/index.html","1672ee2f708da699cf86ab60374a8829"],["archives/2020/page/2/index.html","5a4947e132e7fb0bc340026af868e04d"],["archives/2020/page/3/index.html","85c6f5cf637201a49fb4173b02c63f1e"],["archives/2020/page/4/index.html","a65afd4710f39597d76eddc96b8bc1f7"],["archives/index.html","c14bffa0c55171257131f4b0c4e1cffb"],["archives/page/2/index.html","85094bc114465eb24037e3636e13becd"],["archives/page/3/index.html","dfaa1e41a0c3d5916d4a0f4c312e1682"],["archives/page/4/index.html","72630b79facbaf2604cdac6d10b56026"],["archives/page/5/index.html","26d7441fcfed78576e94c217a7d774b5"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","a1f05d805c80b9a1e529a90f01c1335b"],["categories/Code/index.html","f0bebac27c45fce385e6455ca9818649"],["categories/Plant-Simulation/SimTalk/index.html","b797e942d37aeb26efb6b97b9f56b2a0"],["categories/Plant-Simulation/index.html","019ab9f8721914276fd43c4d23798d99"],["categories/Plant-Simulation/实体/index.html","05a6228ec81e732f65ea9bc215c675cf"],["categories/Plant-Simulation/常用代码/index.html","3a4e2715f3a2ca109df8df1358990015"],["categories/Plant-Simulation/常规操作/index.html","dc68e3f035eeda1d3390654e38a112f5"],["categories/Plant-Simulation/模型/index.html","9dcac12ec2d6d3d59d37d8ce858084e0"],["categories/Plant-Simulation/背景/index.html","758d1f719b011d0c4d9bc5c65348c4f2"],["categories/index.html","40bc0a392742f5d57904a3aa57be237d"],["categories/nas/index.html","609b8da1cf69b702e7e5583c0f5e791d"],["categories/ubuntu/index.html","7f1cd2dc64f002c0a7c7d55f3130b1cf"],["categories/ubuntu/ip/index.html","4ff7f84fba22fa2b4dc585afdb6a7c3a"],["categories/ubuntu/下载/index.html","86429c30e19516dfc19382ab8063f2aa"],["categories/ubuntu/命令/index.html","4d52a068912eb879c64042e0434514af"],["categories/ubuntu/配置/index.html","a1dcfe2281f533b6b551362b7a2525f3"],["categories/仿真/index.html","4b8459bf6c430bf584ed62d837e83ad6"],["categories/博客/Wordpress/index.html","48fa330c8dbc942914a7d64edbc4ca34"],["categories/博客/hexo/index.html","de44c533396b35f1091230429d280b7a"],["categories/博客/index.html","54edde84de2f46c7926b90573a2ed47e"],["categories/博客/page/2/index.html","26ed179893ca78cc8108b17bc9af76e1"],["categories/博客/typecho/index.html","8a3370ff1281adbe085c19577c88ba99"],["categories/博客/统计/index.html","40dc686f6798cd07040e7bd80c793131"],["categories/宝贝/BB/index.html","e39b80daad69a752610a35d5d387cf6a"],["categories/宝贝/MM/index.html","c3a604bdcac761ad5364cbcdb8038ae7"],["categories/宝贝/index.html","11c3ce64c7d23369ec792586fae35416"],["categories/思考/index.html","52d0998a01e4be32e97cf03c9870687e"],["categories/思考/职业规划/index.html","3e855c93e707c75d5024e582b8c077b4"],["categories/科学/OpenWRT/index.html","003e0b419800163e84046632f9a842a3"],["categories/科学/index.html","40504e8d1846f37af4a6525fdbc6e202"],["categories/科学/手机/index.html","7034b19b984fdb0411c7d7734a66bde4"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","aca8cb5a161198d2c06d40460b9772e6"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","42d573a4ccdc2fd82e4eb518285594b2"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","7cc47340bf7e95b55499cbc59412e3d2"],["movies/index.html","2fdcf72db71a7b429ee8ddcd8b8706a8"],["music/index.html","11eef0b406ff8a56e2e85dad9cace682"],["page/2/index.html","97d8c557be9c07e8a4d855ab04ffb6cb"],["page/3/index.html","fa4b2e207e76ce3a3dbdaba91eaa4f61"],["page/4/index.html","b103bfb593e61ed1cad72c98ea151882"],["page/5/index.html","a8fe014ac0cf5e8fa66dbcd988fa99a7"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","ee5d33307ed696c96071c843f1addf76"],["posts/2020/05/14/23/46.html","8c426d5cdb08c824d3efa3c0a76df890"],["posts/2020/05/14/23/56.html","2f3b04b6762e5c4241e56eab575f7980"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","540e9ca41663a48615f14bbebaf59b28"],["tags/Github/index.html","4726c76a189c0052ab76eccd53814372"],["tags/Move/index.html","3632a37f23672d941c0250a826c67490"],["tags/OpenWRT/index.html","2ddaa39f165b169fd79b03afcbc62a49"],["tags/Plant-Simulation/index.html","92d958ecd59210de261a2fe73cbaed21"],["tags/Wordpress/index.html","e190b137eb116bf11124ac392a6cc6b3"],["tags/cad/index.html","b7602231faca11cd14979847ae7da66b"],["tags/coding/index.html","b189a44929370c487b8e90813e11f25f"],["tags/h5ai/index.html","f2e62cac5a57990e8f063bfd6be4f083"],["tags/hexo/index.html","3294cdd541dc00044146b367eb0069bf"],["tags/index.html","5112e751a480b4f4637c8686f1f51224"],["tags/nas/index.html","f7600a722f0f34f6a526cbfdb0a5a3e8"],["tags/tpyecho/index.html","db0f5b6916f1319da17b0cbba7fa9c90"],["tags/transferstation/index.html","f7151ad47c2fd5573b26091c2c30f166"],["tags/typecho/index.html","287ce88382658d7712e233ff172d7c24"],["tags/ubuntu/index.html","0e1531bce8deb56643cedcdda7663c92"],["tags/仿真/index.html","94416ec18238a556713631eff3cdeef8"],["tags/写给宝贝的话/index.html","95d4bcdab1cd0e3e056ff21b1f3d4272"],["tags/原创/index.html","8f69b8cb7c34726714c860b2089d8706"],["tags/学习/index.html","72a0dc52f46445d4c4c5547c41c00c39"],["tags/宝塔/index.html","fede3b2bf786f750935ae1646d3128c2"],["tags/生产模式/index.html","9f6555c1c1d3caa5d25ef9542e5715b4"],["tags/百度客户端/index.html","572a6e8b6727c563515d3ce3ae2afe35"],["tags/科学/index.html","177501cb6f6d65cb27780b4a52120e98"],["tags/统计/index.html","d9f5d550ebe9bc9cb7d2c74941afa896"],["tags/编译/index.html","60f71871704b67c0139d6c8df26d8ac6"]];
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







