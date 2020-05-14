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

var precacheConfig = [["Ubuntu打开防火墙.html","011aabd82b77c89b84f77a5a650c09b4"],["about/index.html","75e1c1e54c1c2d5ae5ad4d55706c4bc3"],["archives/2019/12/index.html","426f85bac219399ed20b35518da2b2f5"],["archives/2019/index.html","0f85270519c3d2da11115bc6f12ea753"],["archives/2020/01/index.html","2288912af980f271dad3611a44b03332"],["archives/2020/02/index.html","9e3f57462f41adc3505c051238fc54d6"],["archives/2020/03/index.html","e15d322b0629009fe835cc9026ba44e3"],["archives/2020/05/index.html","4d7084ea1ed6853e92c839913665c8d7"],["archives/2020/05/page/2/index.html","b1714237b1acde9084743dad3b5bce86"],["archives/2020/05/page/3/index.html","2c9e6d9c2928b53b5d01d6f5c06a0f2e"],["archives/2020/index.html","52925ec6cbb91256cb9f8eb9b9b596ae"],["archives/2020/page/2/index.html","8cf89d687d360f2e744bf2c96970a9b7"],["archives/2020/page/3/index.html","e7f5cf8a2d2bc008ccc168f23a15ddd7"],["archives/2020/page/4/index.html","f63416c8354969b6046b9a44f398928f"],["archives/index.html","b9ebf378d273159fbfbf2b03c96acace"],["archives/page/2/index.html","fd8664880ac8a8f496b43cd385f528da"],["archives/page/3/index.html","764707603a71c96d965addce59dceb71"],["archives/page/4/index.html","d308457e3b497132ed8d816bdd8b01e4"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","1d3207466f7524938c42b3c914620f29"],["categories/Code/index.html","329531816a3092ab16f14151d68ba441"],["categories/OpenWRT/index.html","49ad1c96ace7880b04c95a861fc2369d"],["categories/Plant-Simulation/SimTalk/index.html","57c15e0e72b1ec019d5fff8a3154581f"],["categories/Plant-Simulation/index.html","9f65c49c2ecb77c9275eb4d4f944c3ff"],["categories/Plant-Simulation/实体/index.html","24171f4966d4c3810802969333155e8e"],["categories/Plant-Simulation/常用代码/index.html","193bf51db06d534a7afcb18f69962bc3"],["categories/Plant-Simulation/常规操作/index.html","9cfae8a89435b77dfe3387e5b5ca5ccf"],["categories/Plant-Simulation/模型/index.html","37fdb023627769d9f4c5b11cc3d9296d"],["categories/Plant-Simulation/背景/index.html","21f9b10aab1190dd127f80e7a6848eda"],["categories/index.html","8dcbad5aa97c190d4801f84e6aa6690c"],["categories/ubuntu/index.html","df7997566ee3068e56e803610c2e58d2"],["categories/ubuntu/ip/index.html","494be15bc321ee9065eeb3384007f2c3"],["categories/ubuntu/下载/index.html","39ebcac8fcfa0fc9e0bafe24dad44825"],["categories/ubuntu/命令/index.html","fb96482defd30191f125b00edad795f7"],["categories/ubuntu/配置/index.html","51a72a672961bf66e53604c1e8487806"],["categories/博客/Wordpress/index.html","f0a0c322ff106495971e4bce5ba803b2"],["categories/博客/hexo/index.html","71761150d779410fdc112aeffa2990f7"],["categories/博客/index.html","887cee5f374f30d9e13eb784030e6434"],["categories/博客/统计/index.html","bf218e1ac924f2c95e8abca7c569445b"],["categories/宝贝/BB/index.html","c28bd50a5b5bf006c9bc6445afdc4f4b"],["categories/宝贝/MM/index.html","bc1d0ffa3028fe5717c776303aaf43a6"],["categories/宝贝/index.html","2bc5a03d60e9e7596dd85d48ba5de9f0"],["categories/思考/index.html","ca3c0af645a2a16a4d1a89026e158118"],["categories/思考/职业规划/index.html","2ec7e0c4abb954d856b38eb3b32d87e6"],["categories/科学/OpenWRT/index.html","2d59234f9c9ff4f8373821e01c012f9e"],["categories/科学/index.html","ad8b5c22b1fb94fe11e5138f38800c54"],["categories/科学/手机/index.html","6be30e01cabccd4de8409d0e0ebc3a23"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","86c7e013839063533b46c089c68b56d6"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","7c0eae18f7ffc1aae617caa60ce23fd8"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","b0ef07874a8fc0ed015e5145b63c64f9"],["movies/index.html","deb5ecb94926cd256da8d711a22236da"],["music/index.html","6106f6e98720f1b3809ed2730db3be7f"],["page/2/index.html","758f76bdbefa2f1c2e5df100d1bef08b"],["page/3/index.html","6c9d69e98324a6ee174b9bac28e060be"],["page/4/index.html","1b1530221dd09ea6e1be4dbbf526d0ab"],["posts/20191204A1.html","598d3a76a0c72d20903113e1432f6f7c"],["posts/20200115A1.html","b637ac8419d0caa8492d62397915480b"],["posts/20200116A1.html","40e464d5dda4d5fa7246c1a6a9b661d3"],["posts/20200118A1.html","0751353f27e6fa7815071dd2dfccc7b0"],["posts/20200119A1.html","32304958b08a83447f36ababbd248654"],["posts/20200119A2.html","3c06fb526932719c0de8be72b494e6fc"],["posts/20200123A1.html","1bbceed3ca716718cf6c5cc27ab66c52"],["posts/20200204A1.html","7cb115fcaafe7622faccee3e2295bdf7"],["posts/20200312A1.html","8bd0a768d76dd86ae2fc8e41103c69cb"],["posts/20200320A1.html","d7735c1d63234a6757ef5d3c05ece0f3"],["posts/20200322A1.html","e75f1b1245451f933431e0c28327012f"],["posts/20200503A1.html","cd584dbda59729ad6b289ee276b2159c"],["posts/20200504A1.html","dfdb07a3bb6f14950ea2f570a27c9d64"],["posts/20200504A2.html","cbd42e02fcebb886f1bbf04558a0a569"],["posts/20200504A3.html","29f8d80db564dd0849a0f4c4e708f981"],["posts/20200504A4.html","5ec03b2b5a296a632bb1c23afab27414"],["posts/20200504A5.html","7253a530e5c002fa94b32ede2b07e582"],["posts/20200504A6.html","5937bd45b61619afc880622a24203cf7"],["posts/20200504A7.html","8db263bb29baa156d39b74f61e77afe4"],["posts/20200504A8.html","2d7386fe189243db96ed10113d3a0d2e"],["posts/20200505A1.html","3e702aa7c06db88361465621f092c79d"],["posts/20200505A2.html","731ef9dfd35cf524f344eb35349338da"],["posts/20200505A3.html","c7c1ac0edd0a32f1273162552611e0a3"],["posts/20200507A1.html","43f223bd637c6aac125b1ea25ef375d5"],["posts/20200509A1.html","f033b31477a998fbc20c8d173d291800"],["posts/20200510A1.html","9e1349a1ddc175428ae73f85fc63068c"],["posts/20200510A2.html","472e6bb715ace3bc0df83dc35f8fcadf"],["posts/20200512A1.html","b7629ad27f41508adf3fcf8f1666e547"],["posts/20200512A2.html","a85253e33b0f044ba654c6004863c9f4"],["posts/20200513A1.html","2ad317fd72bd19fbb15dda569125da7c"],["posts/20200513A2.html","cd1d0bf88ce124cc059a42746b31364d"],["posts/20200514A1.html","d9ba2f9abe621c9e9374bc7d1e8bd3a8"],["posts/20200514A2.html","985f0cca93c32cb72e3d37494d03f5fb"],["posts/20200514A3.html","7cfda29193df66219b2c1c693ca8b9bc"],["tags/AGV/index.html","fb72b2c6e495c46b227e0292f24629f3"],["tags/Github/index.html","a151ecebed1b65ef4fc7d09e9a1c7748"],["tags/Move/index.html","08884d372e0cf64c3cdef0cf9eab55fd"],["tags/OpenWRT/index.html","a79ffdb13b5b2939cd7ef761e856c41c"],["tags/Plant-Simulation/index.html","db335750fd56718fbfb0b2cbe4fbbf03"],["tags/Wordpress/index.html","8e59607fd5493d6e2f7dd64e411252f8"],["tags/cad/index.html","f142f43b09e869db0320337b3d4219e0"],["tags/coding/index.html","dd1db87133bccaa8e59aee9e949e705a"],["tags/hexo/index.html","1820ec1690d31890ffb9c5eaa739098f"],["tags/index.html","fc31f236ddc0bacbbeddd2b045a2e6f4"],["tags/transferstation/index.html","86c16ff1ed703410ed086abcba661c84"],["tags/ubuntu/index.html","383c401e045da4fe2dc62daa855364bc"],["tags/写给宝贝的话/index.html","f595c2f134e568c507f53ecadc03f208"],["tags/原创/index.html","291678bf833c1473efddbf49dd9b42f1"],["tags/学习/index.html","47a755b5f199e71b658222e0692c353c"],["tags/宝塔/index.html","e8c1325528af783830f589e33c9fed1b"],["tags/生产模式/index.html","02d905ca94a0e30d2e611af4236bb22e"],["tags/百度客户端/index.html","11ba1416455178c8a5a42d831eef4287"],["tags/科学/index.html","10831fe24acd96d07f5e58abfa4fdd19"],["tags/统计/index.html","60814bd988d0f7dbd1e8cb5d3f1cdbcb"],["tags/编译/index.html","ef4717bb3190c71384dd94dd5b992339"]];
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







