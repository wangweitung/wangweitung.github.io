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

var precacheConfig = [["about/index.html","c3a0496d7acdbcb39b09445af9e500d7"],["archives/2019/12/index.html","f0378b96de0504543fe67279a7d39c85"],["archives/2019/index.html","24499b016259312bc8369e0d16f37b7b"],["archives/2020/01/index.html","9bfbbcca42c642e86a819346b688167c"],["archives/2020/02/index.html","7947e2d1ff3557aab4c45480c94a522b"],["archives/2020/03/index.html","e8ab1ea63e122a845a85250578dd613e"],["archives/2020/05/index.html","7b026748fe1390c44b921ca47258c110"],["archives/2020/05/page/2/index.html","af9f3df9480c3c7084821e391c1786ed"],["archives/2020/05/page/3/index.html","b020db9e2ba6b0e5d22bc880e267f1d2"],["archives/2020/05/page/4/index.html","551409c0e3e5f5f16795503e36b4aa41"],["archives/2020/index.html","44558efc242502298cfbb1119466eefa"],["archives/2020/page/2/index.html","1db420dc6323f34fa7ebfa5ad5f58fb8"],["archives/2020/page/3/index.html","c0bffadf9c780566f86b3e8b439bd01d"],["archives/2020/page/4/index.html","34139bd13b6bf7c6d6cd4d4a8e229924"],["archives/2020/page/5/index.html","c8265ed61bde36c9a08dd530376332ac"],["archives/index.html","abcbb02d8ce4ba7ea90b539f485e4ff5"],["archives/page/2/index.html","3c4049c85298a300e57e7dcdc4cd9b5b"],["archives/page/3/index.html","a0eb5202f280e1e8a820f0c3f471c042"],["archives/page/4/index.html","ca5c866183fc3c952911317544cfe630"],["archives/page/5/index.html","6fe612c27177f5d452522e98dc0705de"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","89783bf9a3355de99b2fb22606cb1ee1"],["categories/Code/index.html","53279f86c345f4fd1bd15b0448a6599b"],["categories/OpenWRT/index.html","db4f6c0aba5bedc69c36db865d89a144"],["categories/Plant-Simulation/SimTalk/index.html","3d45e9092030d960738fc502d867996c"],["categories/Plant-Simulation/index.html","8780fcbe761bc23922887b9e03dbe2b3"],["categories/Plant-Simulation/实体/index.html","0aa8363b1d21977539369b5800174423"],["categories/Plant-Simulation/常用代码/index.html","84e8ba29978cf0e7b7c5a7eceaca74a4"],["categories/Plant-Simulation/常规操作/index.html","e8b9b28d19b2a1bd0afd011546106aca"],["categories/Plant-Simulation/模型/index.html","9e09e377e74c68c9220c6c7ecfd8324e"],["categories/Plant-Simulation/背景/index.html","6585ae2da74a9e15c198f51043d3fe5e"],["categories/index.html","1a74758b0c4cdb4dcee325c2cd956f6c"],["categories/nas/index.html","64cac8650aca365f30899e956e9f7fe5"],["categories/ubuntu/index.html","4b5d47b7b8dd0ad2a960db40b38b5fb3"],["categories/ubuntu/ip/index.html","1cde2a7145f04440190c463ee709f3cb"],["categories/ubuntu/下载/index.html","1d7811f9f3a84dc7e0eaad7523db6010"],["categories/ubuntu/命令/index.html","b661f97205181735a4c52d7b8c5699c8"],["categories/ubuntu/配置/index.html","3d589d23ead33569ef9962f15aae8477"],["categories/博客/Wordpress/index.html","dbc7a727798a73f669b8586389139b3f"],["categories/博客/hexo/index.html","3d17d33f74276c17259c58df98f9c53e"],["categories/博客/index.html","d10d332372f1dd037470b5bdcfffaa9a"],["categories/博客/page/2/index.html","abcfd0c52b9cf446a5625c828d0ab58e"],["categories/博客/typecho/index.html","37eb63ae11d496980c6aaf1dba22592d"],["categories/博客/统计/index.html","91c218314d5254a665b72dee491e5517"],["categories/宝贝/BB/index.html","c007f66010f5c517ddcf44aa9a4f65fe"],["categories/宝贝/MM/index.html","1e1ebb77316b3f232948288ed9b1c31e"],["categories/宝贝/index.html","f22359cb5a043951efe1e45ef02687b7"],["categories/思考/index.html","624a0b27ce6a3c38827b73d874ca8189"],["categories/思考/职业规划/index.html","6069da3ef684c961977aad0f7e3c0477"],["categories/科学/OpenWRT/index.html","0358d03784f35c7d96c809578ac1aa5a"],["categories/科学/index.html","e797a22d325973254020456edd815bfa"],["categories/科学/手机/index.html","982d576fe36ddd00b15bb2da5071882b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","bd7b890de741d310a13600f6a9e423a9"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","5cf105ed1104a386f96883afc55842e9"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","978004085f26cb4a9ddcf75ac4baad48"],["movies/index.html","2352959de067a9ff65215c457044add0"],["music/index.html","a15cba3f2f94d799fa3ada4eb0e4556e"],["page/2/index.html","184e84b91c462ed3d6c5a3ce3e116637"],["page/3/index.html","b3001e3a0447c2ddcf4726cbf033501d"],["page/4/index.html","8935c04b276942e0f8586ebef175e765"],["page/5/index.html","2235fb64b1b0bd1e2cec91fb5de38ba5"],["posts/2019/12/04/00/35.html","e6f46b5b8de66661fb38eb3d99397e4a"],["posts/2020/01/15/20/18.html","1db31b354f3e09736a55908eabc526e5"],["posts/2020/01/16/22/18.html","5f3ca398d27c8ce6f5641255491b536b"],["posts/2020/01/18/22/18.html","e4b4e871d10e98062db7e513a17d0f35"],["posts/2020/01/19/08/29.html","6519321b13f6b86a8383c0240f3ff5f1"],["posts/2020/01/19/22/18.html","179d78e4db25119e2812b7b201f42e3f"],["posts/2020/01/23/22/16.html","0d279775062ce1b5003410f99bc610b8"],["posts/2020/02/04/20/18.html","a0e693c54091f29fb8fd5f6812846dd9"],["posts/2020/03/12/00/20.html","8a8abba0949d5e1c4642e9935b2b4215"],["posts/2020/03/20/22/12.html","119868ae8782b7bea947ecc5db4d7db9"],["posts/2020/03/22/18/24.html","3ae3146b896ecf29fd22ff86f4921172"],["posts/2020/05/03/22/12.html","9a925d267de9cee650db0b2207e7c2ba"],["posts/2020/05/04/00/05.html","9b749c3deaa501a8a83e0f1416842ecd"],["posts/2020/05/04/00/09.html","33386cf24d396e90ca701a3f6c23ad40"],["posts/2020/05/04/00/15.html","f9a3e0b91a632a7f10b235de02d2c55c"],["posts/2020/05/04/14/58.html","a5d4e2a1610309fc2edb3421da4d1bdb"],["posts/2020/05/04/17/01.html","51557df2b9c64713521272dfd1abd8f3"],["posts/2020/05/04/17/19.html","8ca4d017570b3c91c0aaf47eff55d80a"],["posts/2020/05/04/18/18.html","072dc1c30f64de216dd67a8075f4cab8"],["posts/2020/05/04/18/24.html","37e6019a394cc81329462551c343cf62"],["posts/2020/05/05/11/12.html","edd0485553e857fbdecb66379f7a19de"],["posts/2020/05/05/13/20.html","81ecbb50d437c1ea743e0891b2a2f433"],["posts/2020/05/05/15/20.html","8b6b79951d853688654655e5e0cf883b"],["posts/2020/05/07/21/21.html","cae8af673b49f13b8e3a16fe0e6e080b"],["posts/2020/05/09/12/20.html","b66d114321d066afa88fada15875c9ac"],["posts/2020/05/10/18/18.html","1d932d8972f7dccaecf29fa7e29db50e"],["posts/2020/05/10/22/18.html","6763509ea3ecc41d72863adb59c34b6b"],["posts/2020/05/12/20/18.html","fb854e2254560897670a39415e2cc527"],["posts/2020/05/12/21/18.html","1e662cf91bcb48c56725c19ba2ee8f9e"],["posts/2020/05/13/20/18.html","31d08fe4f06d97208da87ea5af5728c6"],["posts/2020/05/13/23/58.html","7e9e96a68f836dcfed33c0ad8054f886"],["posts/2020/05/14/11/18.html","370c3c079204c07323e036e9ff76368f"],["posts/2020/05/14/12/18.html","272824b4654a1b04f095ca962bc88ede"],["posts/2020/05/14/20/18.html","c7e7b4453c0ddb010ef49acf2cd8df40"],["posts/2020/05/14/20/58.html","4daad4bdbb4c8382b168eb1602992544"],["posts/2020/05/14/21/58.html","a0da760f6af72305c266c959e891d652"],["posts/2020/05/14/22/58.html","3f0cc81c7678422ba1c638124bdf27a3"],["posts/2020/05/14/23/46.html","64252b4cd5c304af04fac909932bac11"],["posts/2020/05/14/23/56.html","a9be44825f1d7736b5ca27b5e06489ae"],["posts/2020/05/14/23/58.html","f10e26b2ec6387ec4aa56815915de2a1"],["posts/2020/05/14/23/59.html","decd8e1160c6b4424a10651312c81a7e"],["posts/2020/05/16/20/40.html","9dbc65d86be13e1689034a1664e63819"],["posts/2020/05/16/21/40.html","ddc05c1608fc8f569c27e904bd773358"],["posts/2020/05/17/21/03.html","08044abc7f2f216b34865cdb00385b69"],["posts/2020/05/17/22/42.html","b3b26a7e848eeaced30b8ff2c88af41a"],["posts/2020/05/24/07/03.html","1c09031f29f5e036842996fb401a221f"],["posts/2020/05/24/13/03.html","696405d79786d38d971eb4c1cb73c9a6"],["tags/AGV/index.html","37bdcf30ed2e5b3c3d0373a4d22ee54f"],["tags/Github/index.html","3071de53b6e5b28117cb4608c9f8edbf"],["tags/Markdown/index.html","d016ada7275f0c14cb648522dd32e22c"],["tags/Move/index.html","84d8d87b0526c6ace56e5bf2912145a9"],["tags/OpenWRT/index.html","9058ffc5ff751eda73c916e7e7591f05"],["tags/Plant-Simulation/index.html","98d57eb1a9db7a5ed47b8f329aa87405"],["tags/Wordpress/index.html","8f72e505e4958e9d9b617ba28d339701"],["tags/buntu/index.html","9f27fe226416c3aaf17e4d535a0c5b18"],["tags/cad/index.html","b42de94388c33e6840a12bf6f4adbba5"],["tags/coding/index.html","1233327c1e8fef1dd38a61b9be1ae296"],["tags/h5ai/index.html","37029ded26fb707e8dadf680deb60b81"],["tags/hexo/index.html","99aac64e0bce0666884036f2bfd1da1b"],["tags/hosts/index.html","dfdd221af85a2f42fc766c406d1b9d38"],["tags/index.html","37885ed23b561ab7b0aae547605e4df6"],["tags/lychee/index.html","1166388c63618aa5459ea15ee18fdc53"],["tags/nas/index.html","06c80de6850d3b72dd71d255a187741d"],["tags/tpyecho/index.html","cd451f3bec8b07760fb5f2298941daf0"],["tags/transferstation/index.html","2956e11e25705a9a55e605b4646d793e"],["tags/typecho/index.html","741621449b054fbb6c68efbfd36fe5d8"],["tags/ubuntu/index.html","0a7225aaa19b21e4765572ad2f3719c0"],["tags/写给宝贝的话/index.html","f451073c3dd28ac925fcc1a4dadc4a0d"],["tags/原创/index.html","17f53111fe8f6a31e7903bfa35bf9583"],["tags/学习/index.html","d642d8cbad5a19a0d3fbd05eb6e5d173"],["tags/宝塔/index.html","974ad5ae8e40289ec6b58be7bf7560e6"],["tags/生产模式/index.html","e92c334d17f18d8ba7db6438e3736bc8"],["tags/百度客户端/index.html","102821acb2b2e2c59ceea303e46fe975"],["tags/科学/index.html","d3b08708edde27838c2cc28656496d5d"],["tags/统计/index.html","17da6c366ef99162c031018367b029fd"],["tags/编译/index.html","94935e4ce685fba8aa721b90e9107db7"]];
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







