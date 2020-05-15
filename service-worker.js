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

var precacheConfig = [["about/index.html","aea32935049816a120ecf11b4e4b1cd1"],["archives/2019/12/index.html","5f2df28cdc3efdbc9c96ca52c8b5d8c5"],["archives/2019/index.html","4ae328011a6a57565e8ca9064dfee17d"],["archives/2020/01/index.html","51df060cefda5eebb17e379e3e928e68"],["archives/2020/02/index.html","5df268f911068aa72472e5fcb24c9523"],["archives/2020/03/index.html","47e3893bcc4947cc94f5815ac1df5aa6"],["archives/2020/05/index.html","b3bfe7b4de876cd6eb3597b278e41c6a"],["archives/2020/05/page/2/index.html","724f0b7bf53c90d3ad0098970a814436"],["archives/2020/05/page/3/index.html","5f9d6b33e07c6f6c2fc06b1dafd4ff66"],["archives/2020/index.html","ed448d7f1daa076df4a52eaf54af8c15"],["archives/2020/page/2/index.html","175e4b7bc418fce4be1cb0d44f00ac0e"],["archives/2020/page/3/index.html","351452ce8f71c63db73b80b808c43257"],["archives/2020/page/4/index.html","a2d5476c255ac776c7314a52ce74a15e"],["archives/index.html","33196bce991d6d2edd2bcb9ac971e54a"],["archives/page/2/index.html","9354adebb96535f4f5c6f2464ea0bcd8"],["archives/page/3/index.html","6593acbbd7bd69fd49d14f4a4479a001"],["archives/page/4/index.html","97cbc1d22956133dd32b8cc93b5370e1"],["archives/page/5/index.html","0ca7f0e38494375ca61484e043ffba57"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","d373fd758a37d796264db7f5d3ac1c56"],["categories/Code/index.html","586ddb9aa7aa7b0abe208fc4c4348ac2"],["categories/Plant-Simulation/SimTalk/index.html","b786e4dec6343be216c808bb1695cfee"],["categories/Plant-Simulation/index.html","d9319134836b96d71faf3792363f9bc1"],["categories/Plant-Simulation/实体/index.html","dbed1727a57e35c71404f732cf25c257"],["categories/Plant-Simulation/常用代码/index.html","f784f1dd42fa0516e2673ad6025bcccf"],["categories/Plant-Simulation/常规操作/index.html","16cc7b8f376061dfb32cbbb17e9aa87c"],["categories/Plant-Simulation/模型/index.html","042f110c11df486919f768f4232abd1f"],["categories/Plant-Simulation/背景/index.html","fc0347647c2cbce607f213e98bffdeff"],["categories/index.html","06722db46530beb141be1ead7c4fbd48"],["categories/nas/index.html","085f4733cb02d642ed555e1894ba23cf"],["categories/ubuntu/index.html","ab492a7d3d8995e466b1428151ab1fc1"],["categories/ubuntu/ip/index.html","58b923e67a0766a7569398dd01602b20"],["categories/ubuntu/下载/index.html","ee267de78a99a4596a053f5b085d247a"],["categories/ubuntu/命令/index.html","25bb306547f3b4223eba35f65d09eb48"],["categories/ubuntu/配置/index.html","85c2b3b3e1c7650f91cfd253475a6945"],["categories/仿真/index.html","cdff47afe100249117b138ae8ba0e627"],["categories/博客/Wordpress/index.html","06b6425faebe06fd3152d623182cd700"],["categories/博客/hexo/index.html","318806091d766249a88f297acad529a5"],["categories/博客/index.html","069390abdceafa30ba37cc0f5d299905"],["categories/博客/page/2/index.html","a201b0769e2b14d9888e8317718e33b4"],["categories/博客/typecho/index.html","d685ff1bd4e54e88e54dc7128e8e61a5"],["categories/博客/统计/index.html","9089ecc5675b8697f15d65f63126b98f"],["categories/宝贝/BB/index.html","15a9ab95bb132bff3586915b1659e755"],["categories/宝贝/MM/index.html","c2f6df6b1a79e271628f00f919734e71"],["categories/宝贝/index.html","09eecf716f900d0ac62f0655b73208cf"],["categories/思考/index.html","9f1bde4a44a6bce33c92b6d54516806a"],["categories/思考/职业规划/index.html","e212c82fd6c2c60e2a8f8971b37f2f83"],["categories/科学/OpenWRT/index.html","f4a5926d6d53a1f27cbbfc2a2da6f811"],["categories/科学/index.html","9b39ae83eb324f60a5920c719722b22d"],["categories/科学/手机/index.html","4419a29b426488df44204e41538852d9"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d7eb5d4d40027ce4fa3baf028c387d3d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","5569b87d77204778e358cda2cbfac1bd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4c1a2c6ed7e6b4b1c7a11fd228a47746"],["movies/index.html","d25b01e44a876d0847fb17bd1b46d287"],["music/index.html","c349aaee843c020aaa21697c556c5461"],["page/2/index.html","05630217179309021ccad79583077314"],["page/3/index.html","37d7213d8da452271ba9a7501f03b2c0"],["page/4/index.html","25acec1282fc4e8323cb61e43b902bcf"],["page/5/index.html","b18eeec7489192e414f5b1b12c196f86"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","958b275cf5cf13e61762f3e284f76c65"],["posts/2020/05/14/23/46.html","88f7d5130b4c247e8f5141fa41bc1f21"],["posts/2020/05/14/23/56.html","aeb320cf4314093b9b3448dc6c1f274c"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","8263d98e0f0005b017f56c53403b414b"],["tags/Github/index.html","291b1b855d547ba60222c2cc60ecaed2"],["tags/Move/index.html","ec951ad4e875b3e61ac6226dbb64e019"],["tags/OpenWRT/index.html","6497ca5f3fb23373bd174e91fadf044c"],["tags/Plant-Simulation/index.html","48e7cf82d1ad65366bb96daa14275010"],["tags/Wordpress/index.html","be9ec330fcbccd3ac0eb648aeaff46d8"],["tags/cad/index.html","4b7973907aad8053cedd2f1d3ad7a782"],["tags/coding/index.html","193c3696ce3f001e9d46cc0b2123118e"],["tags/h5ai/index.html","dbdd64d09f6c1bb4cdfbad875ceb31ac"],["tags/hexo/index.html","06a20acc34bf67942ee346ea610811ad"],["tags/index.html","f2a5f72a2621d019570ac634b100e9de"],["tags/nas/index.html","94c44af00247f8d58aba058c767e6a46"],["tags/tpyecho/index.html","40c0ac12ccac514126abdec2a336f18b"],["tags/transferstation/index.html","86ead30a2dc194f1ee32fd268333cdb2"],["tags/typecho/index.html","01e989e3bba66ca27ee25deaf46ece26"],["tags/ubuntu/index.html","1425af6c4583cc3c2f2c44db32c0f14e"],["tags/仿真/index.html","2156eb80fffd92cfd8cd2614acc6fca7"],["tags/写给宝贝的话/index.html","01c4bd92c4bfa038e683898d3bbc8d79"],["tags/原创/index.html","9aebed993e95cdcf39026218974228b3"],["tags/学习/index.html","6fc8a7cc1359e6d353113cb57c30931a"],["tags/宝塔/index.html","c07ae4798c51f2f2b1ae74a2d5d0d5c9"],["tags/生产模式/index.html","1eeef530d51ba115f84a22c8376014cd"],["tags/百度客户端/index.html","f328f1c457e5f1bdb8d0a2e83bec4f12"],["tags/科学/index.html","3638a57c6064b13af1027dca961cb6aa"],["tags/统计/index.html","f2e25e5cf4db2ce351b6479a12a67943"],["tags/编译/index.html","45065938ce8c2d6e738eb151de82c244"]];
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







