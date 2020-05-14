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

var precacheConfig = [["about/index.html","646069c20dcb2c54ec12f93a30263eca"],["archives/2019/12/index.html","a39f6de4853aae663b274a6992496f2b"],["archives/2019/index.html","9f7a4bd1b10856c432c6309aed79e9d5"],["archives/2020/01/index.html","e55b6054830a0cad1788a3bbfef21b50"],["archives/2020/02/index.html","6608ea33a97885065a5604b7393750b0"],["archives/2020/03/index.html","19ae2082b0b833acf76ef26477760396"],["archives/2020/05/index.html","53feca4c569e73e413b29736ebbcbab3"],["archives/2020/05/page/2/index.html","8ae41955d968c543d590030d00a9f704"],["archives/2020/05/page/3/index.html","120a635c9951cc1a21b67d621933475a"],["archives/2020/index.html","58e96c36320afddfd0020b3daf607d5f"],["archives/2020/page/2/index.html","314ca728551f5486b6fa1936f72ebedd"],["archives/2020/page/3/index.html","7ca70aaf90089da5f79a8d0af0b3778d"],["archives/2020/page/4/index.html","4570155b936d842fcd0c73fc7a30a6d1"],["archives/index.html","29bf45e83f6de7bbf0ed2a48a665b7ac"],["archives/page/2/index.html","4fbe84f09e3fc20b1d0afddd57810549"],["archives/page/3/index.html","90f8c89aab8421760dbda65681a24b82"],["archives/page/4/index.html","d6c2fa7c12712c18beecc00c33a086d2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","057a6592cf013275c6a5bc35f196a930"],["categories/Code/index.html","8702c1c59cc6bd8aea1975dd151918b7"],["categories/Plant-Simulation/SimTalk/index.html","82886a34921b1c356617cf1d918a8e68"],["categories/Plant-Simulation/index.html","84e199ba4a837a0b8b4eaa563b2d6069"],["categories/Plant-Simulation/实体/index.html","cd74a192c55520dcf8cfb78be6cac2db"],["categories/Plant-Simulation/常用代码/index.html","67bfdde0ecc4e7283f8d6ae712f4cd25"],["categories/Plant-Simulation/常规操作/index.html","e766d7cd50702925a58ce92eee3184f0"],["categories/Plant-Simulation/模型/index.html","0cd0b4f8aa09398d70fdbf52b5ef33da"],["categories/Plant-Simulation/背景/index.html","aaeec2e211646e74328a70fbc62749ca"],["categories/index.html","a930bcd567941540cca3bb2aa5692da4"],["categories/nas/index.html","555cea03eaff02d925addb3de9a63e00"],["categories/ubuntu/index.html","bc4ca4587d355bf171d1dcc422844888"],["categories/ubuntu/ip/index.html","178846ef7c70c8a01a30703103a7ebac"],["categories/ubuntu/下载/index.html","4bbdff5797b8c0c921a22a716a88b06c"],["categories/ubuntu/命令/index.html","e12514c9c70ad1295a7c4578f90018b8"],["categories/ubuntu/配置/index.html","4d3f5eddfeaa5f58c6cca552749e10f5"],["categories/博客/Wordpress/index.html","6463b8900a0538d649ff323c1cb3b5a5"],["categories/博客/hexo/index.html","5b4c2467958effed4e49b07e47f4203e"],["categories/博客/index.html","85ab47cc629806afa76a826c367d0f76"],["categories/博客/typecho/index.html","9c234781dd3aa13ffe4335f93af6e560"],["categories/博客/统计/index.html","112bea08565b15dd1675d04ff9d09887"],["categories/宝贝/BB/index.html","d3f02d15e4836bb42ab192cc22e0229d"],["categories/宝贝/MM/index.html","90e9dbda42bee94f186bb51a8d68e57d"],["categories/宝贝/index.html","cc50b3e232d58b4d2d3124649594e46b"],["categories/思考/index.html","1ad72ef76d76f10c2e1bf3c66b75442d"],["categories/思考/职业规划/index.html","311597260ffd3df99aa0f16147dd8eaf"],["categories/科学/OpenWRT/index.html","c00e9460a458b156d9d6c638dfe6560a"],["categories/科学/index.html","ddbb8d00f16d81162da40994d9a51ad5"],["categories/科学/手机/index.html","15bc63b5e6d91c048e6e13fff2f3b6cf"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","26a1a378d0cfee72c3ec3b70702efde6"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","b805dbc65a8a9e469dfe7fbfa857463d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","204d41467a7372e6e5d6b32aebb4c3fc"],["movies/index.html","0f44de0275f4d20e29e09d3a9cf67c66"],["music/index.html","4429c98eaf91b653a9604ed1898787fd"],["page/2/index.html","887baff8cd35c50f1cc43246df98efb8"],["page/3/index.html","40ebe370881de807943c5acc8a453ae0"],["page/4/index.html","def478a02674e540bc1208b347519438"],["posts/20191204A1.html","4f22d027cf37b8c879b7d7a99ac14641"],["posts/20200115A1.html","10ba082c1e77c047c8617d7892d84465"],["posts/20200116A1.html","e8b862c9d867a8b4a4da43b77f4fd590"],["posts/20200118A1.html","3afedbd52977742071a3a74ff6c87d24"],["posts/20200119A1.html","995685e071e950b79a318318d55758b8"],["posts/20200119A2.html","97b89bf24db44b307b362acffdee5e1b"],["posts/20200123A1.html","f607775f5ab88e6691311f17f5534da9"],["posts/20200204A1.html","01f98b0edfbe36ba1bd45f602b65093b"],["posts/20200312A1.html","3e83b69a8b96ae87f4babefc766d8846"],["posts/20200320A1.html","0611eba748efd314addd6643156d6734"],["posts/20200322A1.html","9b1e9e3ab64023f4ad22db559f249ee2"],["posts/20200503A1.html","66bec08fad2251d2bb045380b6540ed1"],["posts/20200504A1.html","c049ed07934f1c39312ce68cc787478e"],["posts/20200504A2.html","d5809af914d3e672f17239612a135c1d"],["posts/20200504A3.html","9bda12101308483b10fdde1547bd88c8"],["posts/20200504A4.html","e3de82923428c95255f1045f75261759"],["posts/20200504A5.html","02edfe5d1bfa6faa0fbf25e0967d618e"],["posts/20200504A6.html","8ccb71069030aa49214cc211c5762696"],["posts/20200504A7.html","aa27ace77b83b902d111af4a531e214d"],["posts/20200504A8.html","65caf1eb6f576fcd5b0f38311f64ece4"],["posts/20200505A1.html","08978b35135f85dc2cd1861794e58c21"],["posts/20200505A2.html","99c329b9bf220e585cdc3c5dc006ca12"],["posts/20200505A3.html","7b3ceb1a54bf41f6f4bffd1320da00fb"],["posts/20200507A1.html","29ff377e2d55e9cf4a8182822bc8bdb7"],["posts/20200509A1.html","05aa91ca9452c4776897282f26c928fd"],["posts/20200510A1.html","73a3d26ab4f8b4e047895408c9d3d16a"],["posts/20200510A2.html","2e7bee41e01c1b2bc88be896fa6847e1"],["posts/20200512A1.html","4affabace4f61d79ed68338fe67f19ed"],["posts/20200512A2.html","4241ad2e4dce8f749c31baf19d379756"],["posts/20200513A1.html","cb6b6ecb8d696887722b1b7440cc3bdb"],["posts/20200513A2.html","74ee804978121ad86483e23e4fcf19d1"],["posts/20200514A1.html","306ae306f786a43c617dc1df63fe4d13"],["posts/20200514A2.html","790ab4b267356b2599d042f94e1b4748"],["posts/20200514A3.html","b3ba2d1daf8d7016f6436a57b9371299"],["posts/20200514A4.html","c9d7acb93cd1b406bb86c701cf4ca4f8"],["posts/20200514A5.html","59863b8ee765a0be16986ecad1808715"],["posts/20200514A6.html","da537ba70e4fecd78f0d2aa657f8260f"],["tags/AGV/index.html","564185016cbf659fd0713f74e55a274a"],["tags/Github/index.html","1f0c891919b893b805b7d732808b8d89"],["tags/Move/index.html","3a55ade3d1d2444f10e562da683ffe59"],["tags/OpenWRT/index.html","d9b2254f347fd67a32d25b44ff7b6780"],["tags/Plant-Simulation/index.html","65abdc84a6712989cf580e567d620ce4"],["tags/Wordpress/index.html","874d52e32546bcd25af8f6ff33aee27c"],["tags/cad/index.html","222b9804ba4e1fd7e06814106d292ddb"],["tags/coding/index.html","be95aa4e8d14f0c8749aadc812691a17"],["tags/hexo/index.html","56a3b8d7a7ed58bb4207a33e137e7d8d"],["tags/index.html","734b81eb8b655a354ee523648ebecd4b"],["tags/nas/index.html","60ce653324807799289aa1dbc6c1fbc5"],["tags/tpyecho/index.html","76bf2fab3cf0169be30745dbc0d652c0"],["tags/transferstation/index.html","1e3512fec3029393d764860e0a9028c5"],["tags/typecho/index.html","54d9ee30fce1775ed59eb82bb4dcbabb"],["tags/ubuntu/index.html","5fb9c366283cac2c5b1b3bdf6dfc3ab8"],["tags/写给宝贝的话/index.html","d0eca8b6c8a1095b830b44753ae5ff9d"],["tags/原创/index.html","4828a3e9771ea0a68f94a8707b438f19"],["tags/学习/index.html","2397eb07a73e92bb882d840fa2d71dc8"],["tags/宝塔/index.html","cdee7fbd141e6cb70390822a4a93f11c"],["tags/生产模式/index.html","b6b27b46b4e39ddbf217ff2e0be6a65c"],["tags/百度客户端/index.html","d65f78d28f126c4d1131cd5c7f94c089"],["tags/科学/index.html","06af8418356897ff3980b0dbe14f5089"],["tags/统计/index.html","aab9fafcb503246e2b710e2794eac434"],["tags/编译/index.html","34859c4406e5ac97944ad194136a3fb0"]];
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







