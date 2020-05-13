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

var precacheConfig = [["about/index.html","bbe456269798015fb44d7c4feb6dca65"],["archives/2019/12/index.html","c65d54274a00a5bff0a13a38445055c4"],["archives/2019/index.html","1fd3bf07a9d9ddb0cc2c2463a358a1c1"],["archives/2020/01/index.html","ad9b5b2597b75cd343dd48c0ee206e70"],["archives/2020/03/index.html","e86c2760ed9589f330bb0f50642182f6"],["archives/2020/05/index.html","b236b8ad049b8420436a0e5e0551f7ea"],["archives/2020/05/page/2/index.html","916fcef93915fb56d9e405f4b211e52e"],["archives/2020/index.html","8ef29b567ec047195044eac7b0d5fa09"],["archives/2020/page/2/index.html","7d91e1ca487f50c0fef0a827898cc8d0"],["archives/2020/page/3/index.html","7b0e3f0c0f8feceb9a3be4496ae13ff5"],["archives/index.html","94496318356d3a418281509f1a28299b"],["archives/page/2/index.html","eff698bd0c11cd9671a91eec0af9578d"],["archives/page/3/index.html","92b1467a57c3441e006c18160053966b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","7346367ac81f9b8a989818d4a9d94fc2"],["categories/Code/index.html","1a105b8ad02e796be64e6d978734f030"],["categories/Plant-Simulation/SimTalk/index.html","7f7050243b7d0653136f90ce9bfc6a54"],["categories/Plant-Simulation/index.html","759d1efcf361af7b4117368e41268ed3"],["categories/Plant-Simulation/实体/index.html","268c603b45fa326c2676b82dbe1bd6ca"],["categories/Plant-Simulation/常规操作/index.html","eccd366ca35969641b26941cd762a827"],["categories/Plant-Simulation/模型/index.html","fdf8154501c59f6a3bf58e60c6adeac4"],["categories/Plant-Simulation/背景/index.html","2c31b086c29cdcc7054dfa1cdd40c8fb"],["categories/index.html","13ccf757ad54fe0a8b70bd5e4da01871"],["categories/ubuntu/index.html","c18f9352b322cefa65a83921870f46d7"],["categories/ubuntu/ip/index.html","8cd1559d5cdb190af9987f86b58b4130"],["categories/ubuntu/下载/index.html","4c34f86eda940a60e65d002c2efa6518"],["categories/ubuntu/命令/index.html","be5bb32dfa5a0a7a1f690464b697f96c"],["categories/ubuntu/配置/index.html","f21c0b7ddfca652caac497a1f98165d5"],["categories/博客/Wordpress/index.html","d3d5881f2cb592fedfef50fd54fcd151"],["categories/博客/hexo/index.html","a38f01ff51aa84a1c899e2da888b13d6"],["categories/博客/index.html","786e4c723bfb043d0c41394364bbe355"],["categories/博客/统计/index.html","4d3495b9ff94191c1c22072a6e485a31"],["categories/宝贝/BB/index.html","16e629e3c581da665d1154d0e8b4e060"],["categories/宝贝/MM/index.html","094c956fea2e1098bce4e2dede16cec7"],["categories/宝贝/index.html","0528ef461c6fd083f500a81d8a24dbbc"],["categories/思考/index.html","780b02896122f6711aed8c5a1fa96947"],["categories/思考/职业规划/index.html","d89b6fa00bdc18d7ff21c0c1fe5b3f4c"],["categories/科学/index.html","e1d5fc5e2d3607a502b33e21756b9688"],["categories/科学/手机/index.html","6a04793c3fe03a3c50ac297a300a154a"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","3df421cde10ef78dbdd92b618955285b"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","35471ffbe514f3a72e4da56a02874969"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","ae445c7eaf3ff66753b0ed0e72f78525"],["movies/index.html","4fccf752ae80269ad7ffe67fbd81c5b6"],["music/index.html","825d1e445e85d62f18cb43bbbe1099eb"],["page/2/index.html","0138c49c887691e88490d1c45c03aaa6"],["page/3/index.html","f5bedd0995db8e3025169f713a50a8a8"],["posts/20191204A1.html","51dc7dcdb53c14678f67a99a73ada45e"],["posts/20200115A1.html","1b0ea88c116bddbc77b4784908de44b0"],["posts/20200116A1.html","dac1b398d16d72a407bdad7f75a617d9"],["posts/20200118A1.html","7325965e1e5d1b6c13cd36a67d28e833"],["posts/20200119A1.html","009fd06e78d72e99cd7a40fb5eb7bbb0"],["posts/20200119A2.html","ad21c99d431eb5e27d066d7e6810036b"],["posts/20200123A1.html","189198a388bc99652e7eda750cea031d"],["posts/20200312A1.html","5f2045e889c18fa52844f2dfe5986936"],["posts/20200320A1.html","5e1f001b92fe3bdb9d4383c1a6b1fa5a"],["posts/20200503A1.html","95678163c27c101801ece79e46df32f4"],["posts/20200504A1.html","9f07a0c794aecd94e113f1ec0c3adf2d"],["posts/20200504A2.html","32f3644b0ed023169380119916d9d4e8"],["posts/20200504A3.html","35cc9da9b8a3e881b4e5a0fa48a8b2b1"],["posts/20200504A4.html","61b40425726239a3f4d324dfa257cb5d"],["posts/20200504A5.html","59f99b7e03db7321af14b5f9ec527554"],["posts/20200504A6.html","ac5e3e1d8e68ad384b7b0caa22d2b9e3"],["posts/20200504A7.html","fb2698ad2da1f7e9c88d184615711675"],["posts/20200504A8.html","748751028ec56a6e622e0d67b98d97c7"],["posts/20200505A1.html","426e13b15a54733fe5081694815704b9"],["posts/20200505A2.html","3c996912e2b7be066259ac756a3dc14a"],["posts/20200505A3.html","0b346bc3a72d1bb3d86808c40b9c8651"],["posts/20200507A1.html","df462ef7f3ee7b913543d86262dc6a69"],["posts/20200509A1.html","dbc5966af391d0a54a55199d2e3ac00f"],["posts/20200510A1.html","a4dfcb7539fd9ff98028d20981cc388b"],["posts/20200510A2.html","31b680f820e5395180f3cebe7828fa6b"],["posts/20200512A1.html","a93f1ae9a403392d009d8041ab0dd9f8"],["posts/20200512A2.html","49041d170b738ce8ad277d46a5424146"],["posts/20200513A1.html","36aa3e64c857a15d23add998cf2f140c"],["tags/AGV/index.html","12cc892261127b087d9f40929c91534f"],["tags/Github/index.html","47de425f87a93acc5f876c42b6a26ae2"],["tags/Move/index.html","f78ecdeb8c969bcf9c646fde04a2a458"],["tags/Plant-Simulation/index.html","9b6772682bc63808aa50868085a0832c"],["tags/Wordpress/index.html","3af2f2deaed2c5b5816fce4b10592c19"],["tags/cad/index.html","cd0f477fd36d61a1b4cd18241d1614f8"],["tags/coding/index.html","860da7dfec70588b860bbbf215bd5380"],["tags/hexo/index.html","3ce9855619c5d91420307dd91acbbbe6"],["tags/index.html","7f09bbb814e3cfbbc24415ea8494ba0d"],["tags/transferstation/index.html","010604208d36913a78632788f2435860"],["tags/ubuntu/index.html","6afffdcea27f3aff28508d1f30f20e6d"],["tags/写给宝贝的话/index.html","a4b5de4ef7fe9edc20837ccb4d7de62f"],["tags/原创/index.html","3a5a5cf8abd775b312da9b97fd7c8967"],["tags/学习/index.html","24a59c3ce76d0ea06d488d5b37f4b63b"],["tags/宝塔/index.html","913f6d66e0e547a6b2fb515f1c02fd16"],["tags/生产模式/index.html","3a771983648c4b4cbe2bf07f9f2946cd"],["tags/百度客户端/index.html","da04095538c780716ef3f2451cf9d6d5"],["tags/科学/index.html","331d4aa2a17e6b3597c7d9d6e3363977"],["tags/统计/index.html","6169e7c5fb8fc8b212fb8fbd3ca6084e"]];
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







