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

var precacheConfig = [["about/index.html","88ae8d7b2c1b6505a33d12d0c7ae1b0f"],["archives/2019/12/index.html","fd967f0ccda5cedf7993f67062fa2d88"],["archives/2019/index.html","c05bab4bdf43e525c1abe3c8fbc50951"],["archives/2020/01/index.html","875c0dc0b9d327de81df7e072d602a0d"],["archives/2020/02/index.html","155083a10c6d520edab9e41c484761aa"],["archives/2020/03/index.html","82a49dad7e7ba7cca69c3367626b2227"],["archives/2020/05/index.html","bcec377f0ab3b2480896b13278d91a92"],["archives/2020/05/page/2/index.html","3e9108fe5fba38a373e6c8a2d06bafbc"],["archives/2020/05/page/3/index.html","24e6bde6cbcd47c5d1d89c3190604f1c"],["archives/2020/index.html","a01f3937e75d720514f4942faeed7dc8"],["archives/2020/page/2/index.html","6d1ac6b9553850ac4cd05ad390996bf0"],["archives/2020/page/3/index.html","4ca187474afe9428385d8eb8daeff9db"],["archives/2020/page/4/index.html","a033dee85e90a30319c98a331187bdaf"],["archives/index.html","af3f5824778396e1cff15e21209a1eea"],["archives/page/2/index.html","d0de3c67ebc52a4eba59a123a1478b37"],["archives/page/3/index.html","48e88ee29c5de5b1e542f95b4f6f189d"],["archives/page/4/index.html","67e67ef495806f06b8bfb4df5d66ad2b"],["archives/page/5/index.html","5c907abede36ffbc7269a6769b5678d2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","4cf8df25af675b9ac0760901d8a7bff0"],["categories/Code/index.html","bb69d804e06070ae1299716e2bbfe419"],["categories/Plant-Simulation/SimTalk/index.html","f5ee29b20ef328a0048789d169ae8544"],["categories/Plant-Simulation/index.html","293a4ebfe2ef4771dc7e8d3e2d08280e"],["categories/Plant-Simulation/实体/index.html","329973f60eb3d7e796e0ba26173228b1"],["categories/Plant-Simulation/常用代码/index.html","14c5dbf1691456eaa3db40639a05020c"],["categories/Plant-Simulation/常规操作/index.html","121026df0cae2ae51be7183cf0cf7cd1"],["categories/Plant-Simulation/模型/index.html","e789d12f6fdc380d21f7b2dec1e7628d"],["categories/Plant-Simulation/背景/index.html","77f296c3b82a86049f4e819731497923"],["categories/index.html","34e1c637a36c104465fb4bf6f6e0b335"],["categories/nas/index.html","4a6c7a90221b17a3c86d29eecff35589"],["categories/ubuntu/index.html","0f69a1f2d55527db6dcb68ffecaa40e6"],["categories/ubuntu/ip/index.html","84fa0f517881611db2146f2305953cfe"],["categories/ubuntu/下载/index.html","c84a68d2902afc9cecd55ff08074c432"],["categories/ubuntu/命令/index.html","ea3bea3d8fb589b92c261af90504d249"],["categories/ubuntu/配置/index.html","261c077cf68fa93ec835941c2085b45c"],["categories/仿真/index.html","e3444ff13cd013e96b25937ce0fba5f3"],["categories/博客/Wordpress/index.html","8897855946aac63926208c121d57c741"],["categories/博客/hexo/index.html","a031e176e540bef8bdfced1d4d811af2"],["categories/博客/index.html","e35925b0f3de177d23e17ddc76c22497"],["categories/博客/page/2/index.html","fb84cc8c7e47bfce5312ef3593451184"],["categories/博客/typecho/index.html","534754009d9c968bfd5a1497d670b0f1"],["categories/博客/统计/index.html","19057404fd6856f817b5231b4337ca8b"],["categories/宝贝/BB/index.html","625d1bd95787f188e571a5e318bf0fb6"],["categories/宝贝/MM/index.html","484bbc1351e4138ba82f9cdca3c1a619"],["categories/宝贝/index.html","ac0ed47508e1bd80b4804f793b31723f"],["categories/思考/index.html","2bf5199fbbaf9673b52e78b6e8e1fd7f"],["categories/思考/职业规划/index.html","407074cd73c9daabf17988aa776f02df"],["categories/科学/OpenWRT/index.html","b79095f18be7971a4d652ec33aa21d1d"],["categories/科学/index.html","bcaaab48795331949f7f72897859fbd1"],["categories/科学/手机/index.html","60ca6ae736d22095e35bab21e28ab996"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a814db45b089c911f10f8ae171085303"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","5c36170552f4ba55e1d91de57929bc26"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","884ccd585c9cce1e662f54f0818621b4"],["movies/index.html","4f28d5fe1eb95915d7ffef97e3f9ace2"],["music/index.html","bb6dfb6d4e62310c81ead0a57cef126e"],["page/2/index.html","502bbed97468ce70937ca6381c837d84"],["page/3/index.html","8d7ad591a8303a882c5c894d8470811a"],["page/4/index.html","d5e719d5d92e9ad181cb1c32b79b023b"],["page/5/index.html","76b20badfc426a7e03b5896e85a97d62"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","dec363fa85602a439c6c3a1296af0b38"],["posts/2020/05/14/23/46.html","41246f5bb76a6a945d4045e64f443678"],["posts/2020/05/14/23/56.html","cbb4ecf7881a41dd29b1a871de00fc1a"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","45c5c0de997611ad4b971b965d230436"],["tags/Github/index.html","41c10c28d451dc47d237b040b04f65df"],["tags/Move/index.html","3c5f49d96ef519d1cb72880103fcf78f"],["tags/OpenWRT/index.html","c5eec79ef3d3f63f48a372b4e709bde5"],["tags/Plant-Simulation/index.html","91bb1dd35b37cfc27996803551b3bd01"],["tags/Wordpress/index.html","a8769d086ff83bbef11ceef28a256bb7"],["tags/cad/index.html","388db8737cd0fbb2b5acea4587a829c7"],["tags/coding/index.html","3f8519a70b607199618acdf09bca7ff5"],["tags/h5ai/index.html","6d448dd6302ec0e57b331390aa5ff7df"],["tags/hexo/index.html","8def3aa608038206d03fd47ab36af1fa"],["tags/index.html","b1382af5a76b302bc809b83886a30593"],["tags/nas/index.html","18c0dc096db74ea35add22a730a5bd9a"],["tags/tpyecho/index.html","9860dbff3e43694204f4a7be8d19ecfd"],["tags/transferstation/index.html","9e32faf5931e8f09d1ccf209d7ab0e03"],["tags/typecho/index.html","9acf1aa1af478c537ae8ec337fd723f3"],["tags/ubuntu/index.html","4af71b8774878b972eeab5156db91103"],["tags/仿真/index.html","540be0f70dd7d8428b876b54106947de"],["tags/写给宝贝的话/index.html","15fb4489fc4c06f9624d954c28be392f"],["tags/原创/index.html","bec78862f646ce061738ce9b3bb1f032"],["tags/学习/index.html","d9866ce82bddb6577ab785e19299d69d"],["tags/宝塔/index.html","89c2376989b6bb737ca30c6687325050"],["tags/生产模式/index.html","89eb956a98206c14222b626c7cfa29e0"],["tags/百度客户端/index.html","0f85ede6bdbdfb0e31d653cf13db1639"],["tags/科学/index.html","d3266aa5fc311f5109423273c4b9b064"],["tags/统计/index.html","0083b56630d809cd3c48afc244fe3fd9"],["tags/编译/index.html","1773fd9b3dc7539a02dff603333f8d65"]];
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







