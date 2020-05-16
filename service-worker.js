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

var precacheConfig = [["about/index.html","5de7dab39c0b6fbc2759f4f373f07b02"],["archives/2019/12/index.html","9fd8eb0a41d8174cd28003e4ba6ff315"],["archives/2019/index.html","8c6d37ac7dedc3510403cd8def6158db"],["archives/2020/01/index.html","342449097236ab51c9922e1f21331dee"],["archives/2020/02/index.html","3dd57fabaa81c1c11579f84a3fbb9eca"],["archives/2020/03/index.html","49fd761052f51aeaee9b79ded9b5eb14"],["archives/2020/05/index.html","c2bf5f3c630edb6ab67b8dcaad3a4842"],["archives/2020/05/page/2/index.html","54274c3650b42f9692e40dfffc239f4c"],["archives/2020/05/page/3/index.html","d5d390708b58be54354050bd84f0656b"],["archives/2020/index.html","68732740041f8cf220b9c5d2680cc28d"],["archives/2020/page/2/index.html","a40a08fd09e2cf587e1a45f803845f1b"],["archives/2020/page/3/index.html","4162d9e17b8204ac92d5a1566965d10d"],["archives/2020/page/4/index.html","c32ed63ca622e4cf8452beb499f29b8a"],["archives/index.html","49b522af6bc38e669b2bf92ea3860479"],["archives/page/2/index.html","762aa7615253316b3afdcf2646b33feb"],["archives/page/3/index.html","67c8bd988d2064bb001d1259d65e6b7a"],["archives/page/4/index.html","946099aaa091b2644d0d1ac8531c38a2"],["archives/page/5/index.html","4f12ab4cad7b6220c1525914189edaff"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","a2bc07c46edef7d06a78db551da8a56d"],["categories/Code/index.html","b83bb9a8848bd209c34b7c3b333c5e10"],["categories/Plant-Simulation/SimTalk/index.html","9742c62c80a3214390724f490b4f8388"],["categories/Plant-Simulation/index.html","8ac538bbcc361c9c557f3eb4d9ec3721"],["categories/Plant-Simulation/实体/index.html","b6d15eb6f6d81af49b7df2138d56762c"],["categories/Plant-Simulation/常用代码/index.html","62bc385f6f89c0e38f4be39b9d979926"],["categories/Plant-Simulation/常规操作/index.html","6fe9a66921442646a9ec9f09f25aecbd"],["categories/Plant-Simulation/模型/index.html","fcfbb77bd6434bf22247e1a7811e434f"],["categories/Plant-Simulation/背景/index.html","37223292bbd040cf5988840a0a178dbe"],["categories/index.html","cd6aebe670e52a0213d521143ca02303"],["categories/nas/index.html","817bc3a5972cdde96708b9a85b2dc827"],["categories/ubuntu/index.html","77a82f03e55e6500c3eb5e95917e4ee6"],["categories/ubuntu/ip/index.html","9fb80605cf7365000e12bb3af4d81a72"],["categories/ubuntu/下载/index.html","a9a17c2b50ec15bfbe44c13474e85589"],["categories/ubuntu/命令/index.html","2f1654f6ff4c65afd93eedd4bea0e384"],["categories/ubuntu/配置/index.html","c74c661bbf8e7bf63a5f34a754b61e0f"],["categories/博客/Wordpress/index.html","fa6e2d44209ef5a8fc84fbd2b594b318"],["categories/博客/hexo/index.html","b84922f7ebe9cc5dd384b76525fd26fa"],["categories/博客/index.html","14892f4e4018b0cf3ec9213e62562be3"],["categories/博客/page/2/index.html","54fc89cd5fe02ff5922bd7d04904632f"],["categories/博客/typecho/index.html","09c93d742410655c16b4334bc4c39424"],["categories/博客/统计/index.html","74e68c073d0ff8a7ecf4daf9b10ebb82"],["categories/宝贝/BB/index.html","49cc76ae59e20317fb3c7652045cb062"],["categories/宝贝/MM/index.html","5cfcb1d2385e1431d1403f2d141e60cb"],["categories/宝贝/index.html","647f376406a8fa9df4dd3b2ca5080ca3"],["categories/思考/index.html","31465e8592d62f058f84f508361c365d"],["categories/思考/职业规划/index.html","f9d1ad336e08be3f5f4e747015a8f961"],["categories/科学/OpenWRT/index.html","9227d28a1f84dd9cb4afaed3592aec6e"],["categories/科学/index.html","6deb47c5cb636593cb60db09a0d3a1e0"],["categories/科学/手机/index.html","dab76d9dd8504973315be8b470310e89"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6404f35c8e255d4cf51d912ea7ddbcd3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","38d125818953b514a47adeb5579f52a6"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0cf12f526ab34e4b36d7dc0ccbb14030"],["movies/index.html","074d7716efd64e862b64563f4c874723"],["music/index.html","3fc3c85e65ac9e59749712bef0a62973"],["page/2/index.html","e4919ba8d4c81fe322ac0f1b373aa9fe"],["page/3/index.html","dde46b10c56599d0db15779698c741a1"],["page/4/index.html","a351d6f2dfbd0c884b0291fa32485521"],["page/5/index.html","a6d2750be9304b920a1d474b8c96c555"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","6bdea5005a42701d91073863ce28d44a"],["posts/2020/05/04/00/05.html","932dc164867bbd801759e35d1a16e03f"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","d20480e91b492d2a010144c9d5eba3b7"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","201bb718b46d9ba71cd5ef6c3390361e"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","de8affd7a30669de1833d6479afba187"],["posts/2020/05/14/20/58.html","da725e2f0693f318d345d4f7fa98a851"],["posts/2020/05/14/21/58.html","b2286baf850ba4ebaf8ae98caa31211c"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","832859fb2f6c15c9808ac5f4fc0bf808"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","2749cbe6bee1025033e31ef8349d9324"],["tags/Github/index.html","fb60374a4cfe11174a1cb5d340a83224"],["tags/Move/index.html","f276fbabfbc5ad45b6a3e9ec78bde78b"],["tags/OpenWRT/index.html","439b3ac5bc4ce4881388b9590d242c66"],["tags/Plant-Simulation/index.html","0a2c73023382ae57ad0bb290ae5806e7"],["tags/Wordpress/index.html","d95e539fb5931083974cb5511ce347c0"],["tags/cad/index.html","a71e45e73f9d8d75f593eb5ed8b697dc"],["tags/coding/index.html","0688c86ebb7dd1ad1295781f0b234e4b"],["tags/h5ai/index.html","a535e7037a8445253637c8ba7b16982d"],["tags/hexo/index.html","3d4aee1f0dd3df2246e4b4ed5288e384"],["tags/index.html","522649d5c1f207fb187b6a26f30d72d8"],["tags/nas/index.html","4100ce752da1e8669fb006ce9be48242"],["tags/tpyecho/index.html","d23a10306e8402ee035b9abf21be4b36"],["tags/transferstation/index.html","6f32ac80f5daa15a41cbb2fffe52651d"],["tags/typecho/index.html","c0f741ea4b67bb34830f993bc3d785a2"],["tags/ubuntu/index.html","eec853f0b3a2b52ec978b1815d465c12"],["tags/写给宝贝的话/index.html","f11e9261fa25f1dff9ffcd84fa6bd79e"],["tags/原创/index.html","00486c3307a902ebf2958ab4540900fd"],["tags/学习/index.html","691abe91fac5c5fecbe8ac8af0021d92"],["tags/宝塔/index.html","8255fff4addf4ce45d98984aeb3eb00e"],["tags/生产模式/index.html","9593e4d59f1d6878984c6d9c3df31a45"],["tags/百度客户端/index.html","52c0ff0b22724eb737d6b3140e3405f7"],["tags/科学/index.html","5e4d3c067861fb3d4c997bfd92598140"],["tags/统计/index.html","797261728afb67f837c17b1ec1297553"],["tags/编译/index.html","c7d41372bdea40d9eef7136e89adc2ce"]];
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







