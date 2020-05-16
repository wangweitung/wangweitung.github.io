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

var precacheConfig = [["about/index.html","ae6ee9b94d985155982f05086d2d59dd"],["archives/2019/12/index.html","3912423bdc66af9d2d7ed1179d1aae32"],["archives/2019/index.html","3b71c1f34d2607896d403c3cb3d2fa3c"],["archives/2020/01/index.html","3ff6c2d2d1038b3e29b1fe7279c493ee"],["archives/2020/02/index.html","8d9730009136cfa92934aa9e17bcdfe8"],["archives/2020/03/index.html","8cef09c60567cb0d2eb95b3deb390796"],["archives/2020/05/index.html","f7478189ff9f221a57f40efa8ded2862"],["archives/2020/05/page/2/index.html","217c024473fd009354623a63a1591d39"],["archives/2020/05/page/3/index.html","cc7cf3c825d78518eb4bf1ce633ad065"],["archives/2020/index.html","67bab1dd88b467f6843ba5c6842b1d43"],["archives/2020/page/2/index.html","4a9c002be51d609dfe9cfde45262d670"],["archives/2020/page/3/index.html","604777acc0838f521e418cc104363bd5"],["archives/2020/page/4/index.html","eebd35644b340bca90095b736a9cdc80"],["archives/index.html","16a6edff1d1fd5b3d7621ca8fb0386cd"],["archives/page/2/index.html","c790f61f3deb807296f79a72ed100daf"],["archives/page/3/index.html","9cf1b2b6e408b797e56bb64c524305e9"],["archives/page/4/index.html","136180660ec805f05500266629684261"],["archives/page/5/index.html","1fe487862b165ff6f812024578b9a11e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","80865559433847ebda12f88f440e92da"],["categories/Code/index.html","76a7601333752e1d981edc0fc791fea4"],["categories/Plant-Simulation/SimTalk/index.html","4222862b7ab94228c7efa77e6d288e3e"],["categories/Plant-Simulation/index.html","ee09d9a34a1fb5ee65fb16d7a156f14f"],["categories/Plant-Simulation/实体/index.html","95bc2989ea300f592c8cd32065a82f69"],["categories/Plant-Simulation/常用代码/index.html","eaefdd56c813730f2d421e4b606d9a87"],["categories/Plant-Simulation/常规操作/index.html","eea5bb3c85dd14dded196339f8db30b2"],["categories/Plant-Simulation/模型/index.html","99d89b554a3c9576071b2c18eef99a98"],["categories/Plant-Simulation/背景/index.html","5e370604849d90017055e25957b36327"],["categories/index.html","623e144124cb610971f29fd2bb478975"],["categories/nas/index.html","f2b35cd9451b7287f6f227e16b2c484c"],["categories/ubuntu/index.html","e6e6466d7e3c95e749010494aef01243"],["categories/ubuntu/ip/index.html","597d71571f0c8e0b156260fe57e649a4"],["categories/ubuntu/下载/index.html","846cbeeca18ad1c83b73d3e5d8545415"],["categories/ubuntu/命令/index.html","3575879f00d6e76a8f2d29d34e534162"],["categories/ubuntu/配置/index.html","ac652c1aca8787569a53ef9c0bad7714"],["categories/博客/Wordpress/index.html","74e6477a4cdee2e00376bf1a342604d0"],["categories/博客/hexo/index.html","7b0c5517c87a2bae78e919c995f019ea"],["categories/博客/index.html","22294974f633822e2e54572f1b37a9d9"],["categories/博客/page/2/index.html","b95a6e45e81240509305fe98d87dccfa"],["categories/博客/typecho/index.html","d5afc933257b05c350d93f0db1a5656b"],["categories/博客/统计/index.html","4e86026d1d0ea26396412d52450cf738"],["categories/宝贝/BB/index.html","3988bacfa5bb89a3a7cfc99101b1617c"],["categories/宝贝/MM/index.html","1aaa1afbb4ff93b5c80d445ca16816a7"],["categories/宝贝/index.html","3c64441a2c7d4f61955669d6cfd9068e"],["categories/思考/index.html","00b4af287d9a050339eec2dffa6d0406"],["categories/思考/职业规划/index.html","a84ed236a9e17cd61e35cc9d07af34d1"],["categories/科学/OpenWRT/index.html","4315101509487707f2df35cc882ac3d5"],["categories/科学/index.html","bd351a780efc9a9d4dcf28d26a4397e3"],["categories/科学/手机/index.html","7d7e2b104e6361dbcb9748926db60e3b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","1078cbadc51406719f6f25405466710b"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","ce406ae10b8dbab40053f24e0b3e3af5"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","c4e1c645847abe098248e186c2d1f915"],["movies/index.html","d787e21e31e0965f2487af5c81c55e58"],["music/index.html","89337593e75777f7f25a67fdd7806c73"],["page/2/index.html","cc9a5f1cc71692b5ddaf1a8dd4ea7e9a"],["page/3/index.html","1acdd2078d625eeca575d381c8707bca"],["page/4/index.html","2a43f0008dbd90b4db0799edba7ed60b"],["page/5/index.html","32dfd6d21e91277badc2288798aac988"],["posts/2019/12/04/00/35.html","dc3f5e08e94720336f3f88dd709cbfee"],["posts/2020/01/15/20/18.html","dca7a4dd10a62d3556c6ccdea665f982"],["posts/2020/01/16/22/18.html","3b844b6e21d01451b6880c6985d947f0"],["posts/2020/01/18/22/18.html","bf51d33664d30e86e66e9f7c7c10b558"],["posts/2020/01/19/08/29.html","80b9c915f65b9755182d63a4e5774f7c"],["posts/2020/01/19/22/18.html","f76b68dc66c32534997d6e890256fe6c"],["posts/2020/01/23/22/16.html","7a08f215a08f65ed2b3ac74a889a2947"],["posts/2020/02/04/20/18.html","961a24d42a9a30b521dde5e8107bab2e"],["posts/2020/03/12/00/20.html","71b9a84cbb00e9475d6e37e28ac53e77"],["posts/2020/03/20/22/12.html","fc4518af4beb5c31f43cad1eeff11d65"],["posts/2020/03/22/18/24.html","60aff2bebbc2908c65e9126b92382805"],["posts/2020/05/03/22/12.html","fd89d6c921069ffe4094ca4c0f3e36f3"],["posts/2020/05/04/00/05.html","cf2ba2834c0c33dc08a8dc0ffe718407"],["posts/2020/05/04/00/09.html","e72a96c33c58dbf97c2cb40cb4062161"],["posts/2020/05/04/00/15.html","cff82479d53ba52bec81c5d422df3a7f"],["posts/2020/05/04/14/58.html","45036779b90ba997be31e008eda4c9d5"],["posts/2020/05/04/17/01.html","b0b75405ecc4bd132c37609266599fea"],["posts/2020/05/04/17/19.html","63b40209f7d5ec4b79bebbfc6c329df1"],["posts/2020/05/04/18/18.html","7295118f3d21b80679e262770eefbe50"],["posts/2020/05/04/18/24.html","0f6993dc7168f05fa1a578d914eebf68"],["posts/2020/05/05/11/12.html","3046d42e9ada4f702bf5f8c35166899e"],["posts/2020/05/05/13/20.html","3ee8b09f15b205328ab3d88f5b451268"],["posts/2020/05/05/15/20.html","049bcc5dbbb28af65df9a9b85247185d"],["posts/2020/05/07/21/21.html","d0f685ee389399c4ba281b95012de632"],["posts/2020/05/09/12/20.html","9677071890509e7bdb7297d6c516aacb"],["posts/2020/05/10/18/18.html","f247f3be050ee2c92588123e5954886f"],["posts/2020/05/10/22/18.html","9b67bceaa51e3ea1d83b48b279bf9568"],["posts/2020/05/12/20/18.html","a461990b30e0fea75037f04f62d86dd2"],["posts/2020/05/12/21/18.html","b2286c3accf77dc94f764fe5d0b8499d"],["posts/2020/05/13/20/18.html","a3c798e452f479bd876d81c5daab9450"],["posts/2020/05/13/23/58.html","6a701075f034f903735bbaa34bfa966d"],["posts/2020/05/14/11/18.html","0c38c079239bd50c1a3319508d8f7ec2"],["posts/2020/05/14/12/18.html","8a911545571f7009ec0b87e397384a0e"],["posts/2020/05/14/20/18.html","2e00588ee5bc9186228adfd2026cc758"],["posts/2020/05/14/20/58.html","383cd299db31c049ad89f8a6473d16a0"],["posts/2020/05/14/21/58.html","df144a0b63acf3a2dadb62ca70189018"],["posts/2020/05/14/22/58.html","769ffdde760e4672773b20c4f38d5751"],["posts/2020/05/14/23/46.html","1c3c37c4a1d8fe31b4c7a698f3ee5ffc"],["posts/2020/05/14/23/56.html","a46343dac8d3945909934d694facabaf"],["posts/2020/05/14/23/58.html","7809a1b4c9c2a292c5489f3d008fa711"],["posts/2020/05/14/23/59.html","a1558523829e81bef6b7cd64244e32e8"],["tags/AGV/index.html","4624971980552f303536997410e1d299"],["tags/Github/index.html","465885c80989e3bb6e179c959305590c"],["tags/Move/index.html","f58971a7f164395d27b1fdbd2b159141"],["tags/OpenWRT/index.html","fa1f170c53840bdf15376aedb78ba19d"],["tags/Plant-Simulation/index.html","e554385ffd19790d662edc2ebc91369f"],["tags/Wordpress/index.html","1247d330178b30b66a2eb8bbf8e7dee4"],["tags/cad/index.html","084b8b0c632b5ab0fb6857a59631a35d"],["tags/coding/index.html","1dd1d35b6bddf76779bb35d64c552e48"],["tags/h5ai/index.html","390c33628e6e99e9ad136d09fa67c4b1"],["tags/hexo/index.html","da0f07f7d6021ac860660cc1d7bfe26f"],["tags/index.html","f5bf0686419943d6ed095dd4b1884540"],["tags/nas/index.html","3f0dc27b18a0604f50abbc2886e5e75c"],["tags/tpyecho/index.html","2d2b0227ab80ae228beeea2dd9690b15"],["tags/transferstation/index.html","cbaa23eaf71c505c404532a4ec8097d8"],["tags/typecho/index.html","c031ef079d86b03b943de0c7d8f768b5"],["tags/ubuntu/index.html","0913c7fe4ca0dea5029a2ed0f47c2adc"],["tags/写给宝贝的话/index.html","0a98b1d0b742f7f0eee9e0a5d43bb581"],["tags/原创/index.html","48eb3578f9aada16d4a8db92564fae5d"],["tags/学习/index.html","56bf387f3d1db7f4437ac1336a7e6f6c"],["tags/宝塔/index.html","df85528cdad1c96b8aa9a06fec64f968"],["tags/生产模式/index.html","bb23f50b943fe10c9969c6d9f79ef02c"],["tags/百度客户端/index.html","4b79e5328c93fff2428c39e251e6c9f1"],["tags/科学/index.html","a56839a8d5d6b05c84bc3b35f8137692"],["tags/统计/index.html","21446f5b419729b63592884d6c06ca71"],["tags/编译/index.html","942feb8ecd49df33e7edfe9c3c7cd2d3"]];
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







