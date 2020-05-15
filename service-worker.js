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

var precacheConfig = [["about/index.html","cf348f4b46688efe14e11c80d0954272"],["archives/2019/12/index.html","782b5fb050297e45bd90a7b14269e2f2"],["archives/2019/index.html","f86482e1f8222c8b1002bbad5f8664e7"],["archives/2020/01/index.html","1c931d776eb5cc20eda142b7e1514a2c"],["archives/2020/02/index.html","36c6f40277fb5c3553288b9574bbd3fa"],["archives/2020/03/index.html","c68c13d97c1fa151a0145eaad261b743"],["archives/2020/05/index.html","0c84ecbb18985a361c0121fe15e9375a"],["archives/2020/05/page/2/index.html","b64f9a5220be7cfa4090ad5b6bccf050"],["archives/2020/05/page/3/index.html","40d54eee58dbd603388bdf9fb996f100"],["archives/2020/index.html","b2860188a8d646ed5d0bd31dc6b2223f"],["archives/2020/page/2/index.html","a0fcc223daf2cbb73d89ede74e3725db"],["archives/2020/page/3/index.html","0a361e242d6f4eac1556de27c4fb94b7"],["archives/2020/page/4/index.html","8bd560fe1fa3e71922f3da910b1c742c"],["archives/index.html","bc79c2210fc4840c39e3d335ad64a848"],["archives/page/2/index.html","41130de0ffaf6566dddb1a2beda5ed13"],["archives/page/3/index.html","7d12cd8e0666deab11071046f58b0ea9"],["archives/page/4/index.html","314196cc7f661fa2e22d0eedc82a572d"],["archives/page/5/index.html","7caf34cd625db7f5590b103fb4ac947a"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","015a6452b93a295f1b20c1bafee3e24a"],["categories/Code/index.html","0646262d4b399ef3724ca50ba9a137ca"],["categories/Plant-Simulation/SimTalk/index.html","78ca3082bad37b350075f850650d067c"],["categories/Plant-Simulation/index.html","ee3ca1dc0e9b6bb46c696da393432f53"],["categories/Plant-Simulation/实体/index.html","682fef9648043d4040fb890cf0f455d6"],["categories/Plant-Simulation/常用代码/index.html","8df39a2bd4a5d1cb1aaa6307dfeebdda"],["categories/Plant-Simulation/常规操作/index.html","4b7b791d4c1c9bfe5783d4fadd6052e6"],["categories/Plant-Simulation/模型/index.html","49b39c474f8d98daeb3a1a21d0538ada"],["categories/Plant-Simulation/背景/index.html","dfc98f68679e11ef43586896371888a6"],["categories/index.html","76c44536a0144924a0baafba8e07e655"],["categories/nas/index.html","409d15ed9b76e0aa0d7e0f112c55866b"],["categories/ubuntu/index.html","545bef7e7a5339ce200f10241caa1a02"],["categories/ubuntu/ip/index.html","f200fa8a9336bde4d3283e3fe8c3379b"],["categories/ubuntu/下载/index.html","d82f6602664801db3852d2727f3df942"],["categories/ubuntu/命令/index.html","15d2ac48f166d4103c8e75e6dc6a268a"],["categories/ubuntu/配置/index.html","dd5b15e65ec2ed54e891f8fdd439c8a2"],["categories/仿真/index.html","ba5a2426042c9b9f91a461ddce2898bd"],["categories/博客/Wordpress/index.html","0f995d45fbb5e18c87e62a19bc912580"],["categories/博客/hexo/index.html","8572dbfcbb37ef4650ea2e88401380cb"],["categories/博客/index.html","14ddda08f533e7209e76893e99db964a"],["categories/博客/page/2/index.html","89179e8c1c9679ecfacc4e1b87cb786b"],["categories/博客/typecho/index.html","48ff2fa0150617b4d08fadb4bb3d125f"],["categories/博客/统计/index.html","0b361fbc5818eb9b7de1757b26133f2c"],["categories/宝贝/BB/index.html","50ab16a235670a6fc00345010eca0df9"],["categories/宝贝/MM/index.html","ebf78290922bd70ff0df9c6b7fec1299"],["categories/宝贝/index.html","40e25c3c2176216f974a18af5cf5f97a"],["categories/思考/index.html","bb7a95188ff94d50a13e502ceead7184"],["categories/思考/职业规划/index.html","f1e0574cf27a63ad91df88bb493e049d"],["categories/科学/OpenWRT/index.html","c8fe1289d793d49d4c16e27ca4689cb4"],["categories/科学/index.html","ea618779e14e51f1d2065d63ac2c5bb5"],["categories/科学/手机/index.html","a7c8b576ff9ec90acc7b8262600f3dc8"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5ad4ddb3704f2108816212e97a02f08c"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","4484c6323c2b4808c18def3914551561"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b9daff1c29634b6011651f50ff618140"],["movies/index.html","7924d0dbfb5a9e596ee7c768c2fc147f"],["music/index.html","9335444503489621155e1d8b07051fd9"],["page/2/index.html","d939c8fae60ec3697beb6f70da13e7ae"],["page/3/index.html","b2085eddc9a25f8124479256b36efe9e"],["page/4/index.html","ceb3ddf61721376847961737182b5527"],["page/5/index.html","4eec9eb7fc2a5938801ad59d7f11032a"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","dec363fa85602a439c6c3a1296af0b38"],["posts/2020/05/14/23/46.html","2e353034b1a785e66c7ed6d0fb86da3f"],["posts/2020/05/14/23/56.html","cbb4ecf7881a41dd29b1a871de00fc1a"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","57d14bfcab37a4c668a1257ef40463b8"],["tags/Github/index.html","96266bfcce4704ef4112966cc8c6ed8f"],["tags/Move/index.html","cc327d154d4cdb5155e75833821fc22f"],["tags/OpenWRT/index.html","aeb2108a6465c128c7ff55b152a91527"],["tags/Plant-Simulation/index.html","878510b11131d3d32f2bfc501f7a77d8"],["tags/Wordpress/index.html","c640a8a2c36fee44fb70051eb8e56270"],["tags/cad/index.html","0eef5b5fefaf19575354e4d5a2076cc0"],["tags/coding/index.html","1992b140973e7fa75e5e70d5140300f8"],["tags/h5ai/index.html","8e50247647c0420796ee48b2dca7b8e0"],["tags/hexo/index.html","0a5cdeaad40e39121e895327063bd970"],["tags/index.html","cfe561ee922560c51a0ce7d1c9fbfd47"],["tags/nas/index.html","ff6743feeac0202dfe1cc55e4de53478"],["tags/tpyecho/index.html","29c95dee3b520d6bbdf3e4336d433692"],["tags/transferstation/index.html","674af1daa8bda1a69fd8ae7a1af2ea27"],["tags/typecho/index.html","a74eddbe0447a4e12970c7b1c31e01d4"],["tags/ubuntu/index.html","75d5b05450a0bfa2bed8173b926ec980"],["tags/仿真/index.html","fe02b71bb0126c34dd1f2bb852e5d6ff"],["tags/写给宝贝的话/index.html","3b886e2e68ba1cc8eca0b1527556ab89"],["tags/原创/index.html","94ebc8d18dadceca1110a140a605bed9"],["tags/学习/index.html","1f5f21495d05ac8b22e107876258fdde"],["tags/宝塔/index.html","60fc2424f8bcc606387541fb17483b85"],["tags/生产模式/index.html","db3d794f2a235b1ca9fdc67fc19f3692"],["tags/百度客户端/index.html","0119d53a50e94518dbe1f1b8032f46cd"],["tags/科学/index.html","cd2d97a1a6f57f170765f9e13abceae3"],["tags/统计/index.html","a1e0139d4862ed0c0c32abfd7cb9bf3e"],["tags/编译/index.html","340a2dfb8dd9f31621c473a4b0ce6053"]];
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







