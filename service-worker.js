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

var precacheConfig = [["about/index.html","d8933e748ecf13c1c685f7138ca08f4e"],["archives/2019/12/index.html","0b69ae1200d110fa170b45c6da7130e6"],["archives/2019/index.html","f251f314b820325da1d80bf7b01aff5e"],["archives/2020/01/index.html","23be4c678df3b418a40ba3d08368f621"],["archives/2020/02/index.html","a9014c8828df196eeeb6c2c05e4abf84"],["archives/2020/03/index.html","897a23f9695807b9b3787035912384e6"],["archives/2020/05/index.html","35eeab188e9fab13bfee298442797b91"],["archives/2020/05/page/2/index.html","3028bf299aedc508792f814826ca7e2e"],["archives/2020/05/page/3/index.html","ed5c6b865d65a4e6a8c01831d03b1c8d"],["archives/2020/05/page/4/index.html","668d2f820e18d4a9c25edab76e8fe5ba"],["archives/2020/index.html","0d73d95e07e42a250da832d21969f495"],["archives/2020/page/2/index.html","a0f511e297c1d328d34371a9095111a1"],["archives/2020/page/3/index.html","398e0116132f07118bf63aef829680cf"],["archives/2020/page/4/index.html","86f666c99a133ae8a60d56fd77d04cc7"],["archives/2020/page/5/index.html","64975844e18d47aedd59b691c2b75d51"],["archives/index.html","410a2ef9fcc58ba0698f0b26f2c55947"],["archives/page/2/index.html","43eb8725c06d910fc8ebda29418a04d6"],["archives/page/3/index.html","730568439c3b71a2dc193a89d9421daa"],["archives/page/4/index.html","e28421b6bdab0771ec44a1f914f05ada"],["archives/page/5/index.html","9bbea5889a6859223e91d4fd96f60df5"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","6c600b54ebf6c247b2175ba18a71ad25"],["categories/Code/index.html","9f19b80f90caf8e38fc7a45a890908c4"],["categories/OpenWRT/index.html","170efb9fae1c85e93025e6a3a63d7df1"],["categories/Plant-Simulation/SimTalk/index.html","8b7d4808df520f93d86b4d356ddbf2b4"],["categories/Plant-Simulation/index.html","774bed6b5143827c511d66313bb8bddc"],["categories/Plant-Simulation/实体/index.html","1c50866fe686e1b90705e42715a9593e"],["categories/Plant-Simulation/常用代码/index.html","6d4c0819ed4d74898939288f70eb13c4"],["categories/Plant-Simulation/常规操作/index.html","b2cbf8880d1278713131dd13fdb49c84"],["categories/Plant-Simulation/模型/index.html","411848445b7631622daa049341b9d2db"],["categories/Plant-Simulation/背景/index.html","a95cffaba31c63072772384a167c7a36"],["categories/index.html","4d735f96e58b5fbb7fd8699dd1d32420"],["categories/nas/index.html","4ae53989d83c2823ca19be5fc8ca35ab"],["categories/ubuntu/index.html","9066e2a5579696ca03bd564e39ead060"],["categories/ubuntu/ip/index.html","7415f4f6a305b0a994b1ace5fbf3b107"],["categories/ubuntu/下载/index.html","b122d3ec504eaeedda3a8850e98a5873"],["categories/ubuntu/命令/index.html","42fa9f268d6a8b591febab5f0f76dddd"],["categories/ubuntu/配置/index.html","9475acd84ff6b58c855e3ac80a6b32b2"],["categories/博客/Wordpress/index.html","a277969328908abbefc786f8e90e405a"],["categories/博客/hexo/index.html","f7a3692dd55f508d7bd66d93d9ed648c"],["categories/博客/index.html","2a1a0d1561baa80a5a5d72ce579495ef"],["categories/博客/page/2/index.html","aa4734db4d100a82a5639955d769dc85"],["categories/博客/typecho/index.html","5a94ad268843c1d7e64949cd2e2525c0"],["categories/博客/统计/index.html","6723fd7db368a2da84808b22d8c1e113"],["categories/宝贝/BB/index.html","7b127e54097c7ed5b2c24c48dc3debf5"],["categories/宝贝/MM/index.html","66711e2bede7a9902df3c479acb08527"],["categories/宝贝/index.html","67a8f6e621fe59c580ef9d177a10e373"],["categories/思考/index.html","b17f98cff42349368be239634396b723"],["categories/思考/职业规划/index.html","3ff3967132505d756f8b06711f8af130"],["categories/科学/OpenWRT/index.html","9d67832dc6b2c933c89cc3325bad6692"],["categories/科学/index.html","624b298281734a97cae54517e0683394"],["categories/科学/手机/index.html","acdfc26e8a97dcdc268a59303f1d9220"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a37f38e7736b8b09c154fb8fb162a397"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","b6b3d15a7d2fd6fad8808b0b0a654fcd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6982d0d1f2ccbfa02d4bd59111440d6a"],["movies/index.html","7ec860a458e8dcadad8dfb317c79d1b2"],["music/index.html","d482def40fa7413341f5c2d8a7e0c2b2"],["page/2/index.html","c5f722b24012283818721506fbf25d4f"],["page/3/index.html","78c87fdd6019449b3251470640ac205c"],["page/4/index.html","05eed9f5268fea078340b6dc4dff7946"],["page/5/index.html","f8356c2c0259d775b1386c838d132e4c"],["posts/2019/12/04/00/35.html","e4a472220fd706f2d0f71785c04bbf52"],["posts/2020/01/15/20/18.html","6c710cff374de4ceb97852a426a2fe14"],["posts/2020/01/16/22/18.html","11614953d9f8484e852d7dd69492c93d"],["posts/2020/01/18/22/18.html","61cc262964359bf1873cd161d1fe824c"],["posts/2020/01/19/08/29.html","9c5c94544f60805a3fc0e0ad1c8cdd60"],["posts/2020/01/19/22/18.html","7c4dae5b62773adda179192bb72a2db4"],["posts/2020/01/23/22/16.html","3579581543a89ec3f4384ab623dc9eb5"],["posts/2020/02/04/20/18.html","89f409bb00693e0db72d08f33a82225d"],["posts/2020/03/12/00/20.html","ea8466eede12fc1c147f397795212d9b"],["posts/2020/03/20/22/12.html","84684f3339809bd8bbeb3dded51ed8c2"],["posts/2020/03/22/18/24.html","443f10b0d7da7473f967803fa3d2c23c"],["posts/2020/05/03/22/12.html","a51c91ff78a33a9b32ef1a211b900281"],["posts/2020/05/04/00/05.html","e39d18a3bd85cca31192aa7ea34fca62"],["posts/2020/05/04/00/09.html","2f16a2f5d2a441b88994dac063261c12"],["posts/2020/05/04/00/15.html","224ef99cb6d4f422b7b7a16941238be2"],["posts/2020/05/04/14/58.html","8820de1e37166274476ec64562f8fe58"],["posts/2020/05/04/17/01.html","62a72b511f6afba723e26197afb7cf9e"],["posts/2020/05/04/17/19.html","fa2b57d1f286dc402bdfc96b6be9df6d"],["posts/2020/05/04/18/18.html","78e2ec3f7097493900bb07d87fecaec2"],["posts/2020/05/04/18/24.html","7e94a262e4ab2be1cc6f1d6b492726a9"],["posts/2020/05/05/11/12.html","ce620e578df54f25b4d43ebed88b0208"],["posts/2020/05/05/13/20.html","7cccf7702067335c87a8545f21a5208c"],["posts/2020/05/05/15/20.html","da7ef19ae3fda351628a5aa5697f45a3"],["posts/2020/05/07/21/21.html","677312860ea45ae54a664dc1bf1c226f"],["posts/2020/05/09/12/20.html","7a4c1c83da645eca9b5ef089f4ae9649"],["posts/2020/05/10/18/18.html","ba86b2a7ae93b2e93e76b99cd791a864"],["posts/2020/05/10/22/18.html","0f55fe039fdbf4f51a167a40d3d2ca36"],["posts/2020/05/12/20/18.html","e1a79c3a1f6402e73d58c10bab725417"],["posts/2020/05/12/21/18.html","7d2897877dde788df509bd8d7d47ce6e"],["posts/2020/05/13/20/18.html","abf1af6cbf4c8e72d2a935fdddbc4796"],["posts/2020/05/13/23/58.html","56c9f535b315fa4bc196435e049bf32e"],["posts/2020/05/14/11/18.html","38cefe75c7ecb5c4f7b7976b3b42d068"],["posts/2020/05/14/12/18.html","0fe30f0661a352197eba62876a6d427f"],["posts/2020/05/14/20/18.html","4dc307eb7cb7d326f004932cd495224f"],["posts/2020/05/14/20/58.html","b0ccb9b8c4ae5d67d2a8cfa4f5231206"],["posts/2020/05/14/21/58.html","1afd3ad27e784227b52ebd1676b34ad6"],["posts/2020/05/14/22/58.html","6ffe11c3770963e50e34375592fbdd74"],["posts/2020/05/14/23/46.html","f7f2b28edb0fbdb7a395883fd23a793c"],["posts/2020/05/14/23/56.html","910ecf702c27c0de8d8dd4b187992516"],["posts/2020/05/14/23/58.html","5b949fe08a6ff6766d591a2374892e93"],["posts/2020/05/14/23/59.html","baaa4a26ff182367e1e23f7716f0a095"],["posts/2020/05/16/20/40.html","6a97480be33f1445796aa11680920b7b"],["posts/2020/05/16/21/40.html","aca63844b6b2dba033ed70eb06afd698"],["posts/2020/05/17/21/03.html","09592a4fbef805a84aa33c35273ef333"],["posts/2020/05/17/22/42.html","95422552ebea0c603fb978244f16fe4d"],["posts/2020/05/24/07/03.html","419db87c7af5383c3cd33890f8063d66"],["tags/AGV/index.html","889add262c1a265215356542792ed0b0"],["tags/Github/index.html","a061e6569526a77af41ee613b94d9a8c"],["tags/Move/index.html","7e10eeb2c82c0094d25838f2f099c6f2"],["tags/OpenWRT/index.html","d9a98e758dd4606118a169f54bd127ba"],["tags/Plant-Simulation/index.html","f05151036d04fac7ccaa63b080397f7f"],["tags/Wordpress/index.html","fa92f8e6311e7fb74745644f25475a3b"],["tags/buntu/index.html","284d42616559ec4966fb68897c3a3dee"],["tags/cad/index.html","64773752482f4e0997416a73678d0d34"],["tags/coding/index.html","3a9b397d8e2ad2b8daa3227e88ba2111"],["tags/h5ai/index.html","d018225d0fc72dd83c878ca1a7b256d7"],["tags/hexo/index.html","d470e207e905819395e4f89bd1205fb7"],["tags/hosts/index.html","703c9a5a0f0314ae35e45b85bb4f8fe7"],["tags/index.html","9da485acd3f3f56e5ce6c11fe2f25b58"],["tags/lychee/index.html","72c752cd5ca2c427838bcee7f3e3cf1f"],["tags/nas/index.html","ea5759f1c199b8b55dd9d5e08ad520dd"],["tags/tpyecho/index.html","0e9ffdeb653a781c14b450b987a42d9f"],["tags/transferstation/index.html","ae19937337c21ed305e6135dba18848c"],["tags/typecho/index.html","30b4dc3af5dda6bad2e11b309db80fc7"],["tags/ubuntu/index.html","d70e788d719af4a18c6bdcc3fc344ebf"],["tags/写给宝贝的话/index.html","db048cc21d03b5020be63561dcb3947e"],["tags/原创/index.html","2ba43e48d1393aed923adcf7e1f61258"],["tags/学习/index.html","0f401e25b4f1abd9029a8a6e6f3939cf"],["tags/宝塔/index.html","439bb1b6629df219d134c771d1a62a3f"],["tags/生产模式/index.html","262a216db368a2634dc9e896c70d47ec"],["tags/百度客户端/index.html","9c978ac9c4030df933fde85f77a380af"],["tags/科学/index.html","1ee55d6b6652e47d770ac585178c40e1"],["tags/统计/index.html","beee1530ff5395b1e99a93b7584bc37d"],["tags/编译/index.html","dd7f7f8baef028af3228d31afaed6966"]];
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







