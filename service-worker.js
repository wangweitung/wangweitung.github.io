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

var precacheConfig = [["about/index.html","94694352a0c0c88600339539b6fad88a"],["archives/2020/01/index.html","fbcfbbba122087da41ab912fa0cbea4d"],["archives/2020/03/index.html","f4036a4e288852d3e69c8be4f327c669"],["archives/2020/05/index.html","09a1422f08872ec47d10289400125156"],["archives/2020/05/page/2/index.html","e64172055bbb16f26b4534b7b629176d"],["archives/2020/index.html","891de3f76dfb6486e7fd9668779fd509"],["archives/2020/page/2/index.html","5cd184c86dcd99118d2a7f7302addc19"],["archives/2020/page/3/index.html","ede4288ab08090f10cd0eec6afa06a85"],["archives/index.html","42e829a6ae0d8486ee81650ad17a0903"],["archives/page/2/index.html","e11a94ffb010f3cd772ad000246747b0"],["archives/page/3/index.html","704a1665f8e7b8f44c8cf9b3d3852a12"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","b1f08b10b15860346d162b209a57d991"],["categories/Code/index.html","69754803c10710b91f1cbcc892da1425"],["categories/Plant-Simulation/SimTalk/index.html","06f6739191f00215288aa9eddfabeb36"],["categories/Plant-Simulation/index.html","a2dcaefec0a2b5bf8781a18d5544e917"],["categories/Plant-Simulation/实体/index.html","89d7596ff62090067772f44be23ad2cd"],["categories/Plant-Simulation/常规操作/index.html","ab2451c2525cbcad35e4d589c4e8b727"],["categories/Plant-Simulation/模型/index.html","f8b41d63a744b350d796d93f9fd2e93a"],["categories/Plant-Simulation/背景/index.html","ed9d36fe5d87365a607b430ad6b49144"],["categories/coding/index.html","303cdac7be0e90b8a0388f8528022d25"],["categories/index.html","2f165ca44c9ff9332020c6b41e3a5c9e"],["categories/ubuntu/index.html","a3eec7ff311a522639afba1dbbcc6de9"],["categories/ubuntu/ip/index.html","3bbe5b045fcec229ab6d823ff62d3bab"],["categories/ubuntu/下载/index.html","103d0328e1f9c90a5875d5ce504efc28"],["categories/ubuntu/命令/index.html","eb71932ac1818383ab6c43b4d019fe31"],["categories/ubuntu/配置/index.html","7b73733e364ee9f3dbc5d8e941db4b0d"],["categories/博客/Wordpress/index.html","6c25d537bc9f44b6028c32e564785ff7"],["categories/博客/hexo/index.html","6aaee6fe38859e0e2014418c18301ca2"],["categories/博客/index.html","d9f0142e0e74c474c4fb94e281fdabb1"],["categories/宝贝/BB/index.html","34f4a3ebf3f578cbacf69f4c87b18c64"],["categories/宝贝/MM/index.html","33eed9d900312c5133edccc3d0f70c44"],["categories/宝贝/index.html","189f21f7024036eebe74b7bccb692626"],["categories/思考/index.html","3604d8c3877c2f01ee24c5cbed81b58c"],["categories/思考/职业规划/index.html","4da04512b6e9873846ef255dd15f34ff"],["categories/科学/index.html","33fd642e2612cf69ef0cf2d135ea2ba1"],["categories/科学/手机/index.html","624b0e0346a871653c6f7deb50063aec"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b06d8173c5d0fb52a6e4c61a5b17cfb8"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","57c233ce887359cde35997381582b763"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","a2144b9d66c5b60e1ea629d7f2b115e5"],["movies/index.html","0fac4ef5eae3e9c6f9e414bd7b9303b7"],["music/index.html","80d597b07ed51e790ba358055b9b894c"],["page/2/index.html","617df32d2349d1077936d2bafd9e2b78"],["page/3/index.html","328dffc09b467031836a039f7f9a7df4"],["posts/20200115A1.html","8107af69bd2e09de87db2f6ed51f125a"],["posts/20200116A1.html","4def3fcb8aab92a1d7a533b7104aa63a"],["posts/20200118A1.html","6c287d9d1c9dfb07632ae06ea71b98ff"],["posts/20200119A1.html","0177cbbaf45b07fdb10b68f296c237f9"],["posts/20200123A1.html","d69d346da192c377e9b149786d5bf11c"],["posts/20200312A1.html","2340a935b52bf0ff7fa199a587d6286a"],["posts/20200320A1.html","7aefb2423417d340d21400ee25ec8001"],["posts/20200503A1.html","5a10dade256114db3013926374252d3a"],["posts/20200504A1.html","8d92a5e8a268d7abccb060dd63a2ef6b"],["posts/20200504A2.html","0f0832ea7adc62ce06da51540309eada"],["posts/20200504A3.html","e96baa796a2c62187569b7fa4f5084c5"],["posts/20200504A4.html","410ab663c8d18df07710b5fadaa345b5"],["posts/20200504A5.html","45714630357675e46e53af799fc4f3b3"],["posts/20200504A6.html","3dc52fbbad338628138730eff4ecba5b"],["posts/20200504A7.html","9aa262b69a483cf4708dd34910a18901"],["posts/20200504A8.html","593e40e8318de401224a5f0c2788fb11"],["posts/20200505A1.html","ce20c42984e1de7f723c75497c563ba7"],["posts/20200505A2.html","c770e08f13906ae9b290600374da4d2c"],["posts/20200505A3.html","0ada8626e29a1c9a1f406047e9ba5a07"],["posts/20200507A1.html","feb6d304df3f80d008c58fd518948388"],["posts/20200509A1.html","e6ad919509554f7ef278f7ae58179fda"],["posts/20200510A1.html","a1cfe9ce73b427c25a8aafab0c1c725e"],["posts/20200510A2.html","aeaa3568b775f12897e6e4f305180e0c"],["posts/20200512A1.html","51aa6a60aef86164824d8c0af92e0adc"],["posts/20200512A2.html","bfa58f993382135720905c21ab9de30c"],["tags/AGV/index.html","202a794b79011acb21d814e11e69446c"],["tags/Github/index.html","bf2a01a962da0c17a2cdf5260b594687"],["tags/Move/index.html","80aee8533a48b639e66d807634bc94d8"],["tags/Plant-Simulation/index.html","4f47a5f902c1add30ac0c37deb846c4e"],["tags/Wordpress/index.html","fcbe61e6fdd41525415a9937db5c1383"],["tags/cad/index.html","cf643b87d6a172b1f95bad4b3b5f2215"],["tags/coding/index.html","aa5ef05a3874ce7a70b402b5b1f25306"],["tags/hexo/index.html","0ec1b94daf2c45ee6570fe046614519f"],["tags/index.html","18e1b74378b2d6f5bc48749f89bca781"],["tags/transferstation/index.html","1302ffb28e31eee77d0b7805642127df"],["tags/ubuntu/index.html","e85ff0011f826eb717ebf743567dd680"],["tags/写给宝贝的话/index.html","c5b34c06b8d9167a943fd9bd96efcc3a"],["tags/原创/index.html","c1445a2bb9480fa2a514b0d33f901369"],["tags/学习/index.html","1b63953385d2978fda55c295432c23f0"],["tags/宝塔/index.html","c43092d24a694908ab511b90380bf9f3"],["tags/生产模式/index.html","7febeb545cbd7628168ea6b24712a745"],["tags/百度客户端/index.html","eca85b9c2fceb804a3423f7724c2d467"],["tags/科学/index.html","a4b4fff73cb3fb9925e177b7767cc564"]];
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







