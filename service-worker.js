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

var precacheConfig = [["about/index.html","95877c01bba22b095e7b4ce542bcce1b"],["archives/2019/12/index.html","ba0e010b689337894dada22c03e6460d"],["archives/2019/index.html","8d0e7be330aaed532cd402705f2ff9d2"],["archives/2020/01/index.html","c0d93858c03e9d18e62a38b5d7ad1ff3"],["archives/2020/02/index.html","6773e272955e6f295560a09128087ece"],["archives/2020/03/index.html","22e6ce62fa27c297275bcbc229bae35d"],["archives/2020/05/index.html","b66bdcdf1416210c32b28515dbcec34e"],["archives/2020/05/page/2/index.html","363270e21991e07959d1bb000fdf977b"],["archives/2020/05/page/3/index.html","cbe75208d5d42c891f41c33e608e5dc0"],["archives/2020/05/page/4/index.html","46c403ad64d72cdcb41d52b8d6539881"],["archives/2020/index.html","4da45238ec4203416b5f9828bb526c5c"],["archives/2020/page/2/index.html","40329f918c6dd349582fc03ef3201fad"],["archives/2020/page/3/index.html","d15b219f9a6fa925b2ae3a379a36db38"],["archives/2020/page/4/index.html","65b916451afaaee2872846eb16c32887"],["archives/2020/page/5/index.html","7fad863048df245a0324af69755f7e47"],["archives/index.html","1a3e42396f2f08e26b8fed12f4116804"],["archives/page/2/index.html","9d749e99395bd27b47ab84c6175549db"],["archives/page/3/index.html","ab2ed7707ba77163f9572c4233434a87"],["archives/page/4/index.html","aefb04dea4145eb3f5163dc0c97c60fc"],["archives/page/5/index.html","05db64f1e869ed1007dc7ff5be0cea19"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","35fb63412a56a48613795e83203b0844"],["categories/Code/index.html","2638810ac2b1d04afb26ef90d5ea9a55"],["categories/OpenWRT/index.html","9895f97b0b6a60c07a0cf80482ecbab2"],["categories/Plant-Simulation/SimTalk/index.html","8b0a5d3c52cef6f6b1eac87d3b7af657"],["categories/Plant-Simulation/index.html","f1fadd10974351186bc8e11e1b205d46"],["categories/Plant-Simulation/实体/index.html","06cec14b253d038e6c6bd19d72cb823f"],["categories/Plant-Simulation/常用代码/index.html","a4883cfb9f9c767cf979cf12827ba9ca"],["categories/Plant-Simulation/常规操作/index.html","1593eace3b67a135c9cff7d8d345ebb7"],["categories/Plant-Simulation/模型/index.html","5c7b38b9632e32aa4bf701d88cda037d"],["categories/Plant-Simulation/背景/index.html","6af39ca7836ba0f25b06b7cf76552e48"],["categories/index.html","56fbce082838eff87931e40cabdba3a0"],["categories/nas/index.html","9039d779773fd273cce637f3af5a88e1"],["categories/ubuntu/index.html","9d207eb42a2c87a88d41e492c2765efb"],["categories/ubuntu/ip/index.html","e5bb32a28e233d9cf06611f566560915"],["categories/ubuntu/下载/index.html","53b167e063c0c4cb7357e8dbd094a6b5"],["categories/ubuntu/命令/index.html","3110d3c0b96c09e51829fa627114b4d5"],["categories/ubuntu/配置/index.html","31b44e38ad0ea914628e592512127b49"],["categories/博客/Wordpress/index.html","28aef04a66bbecc238429d57cf14a4b1"],["categories/博客/hexo/index.html","47116e97056158bdc4d43141fdf877b8"],["categories/博客/index.html","ee9c1a8d2dfb5df065e76c12f76777d3"],["categories/博客/page/2/index.html","17cfd9ee0e3e317f5b592a341a7dd673"],["categories/博客/typecho/index.html","2952b77903b5d3b04771dd023d40fee1"],["categories/博客/统计/index.html","a066d0edef7918e50b018bbbd33479ab"],["categories/宝贝/BB/index.html","748680b296b276c2c62ae93d5ac57ee7"],["categories/宝贝/MM/index.html","159d2032da0bf0fd974ef96ff0754f81"],["categories/宝贝/index.html","164111acc655b52310b45855e70d3327"],["categories/思考/index.html","d48e2a64027f1e9ecdd6908501579253"],["categories/思考/职业规划/index.html","ea0f3cfc8d00946cf2eb8eeff7081da8"],["categories/科学/OpenWRT/index.html","fe5b0ef20af01658e0c5ed7964deb74d"],["categories/科学/index.html","726b648e2ca7ba167133eb8e27118ff0"],["categories/科学/手机/index.html","2b76acadee6d3591098484288336908f"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b0a7ed6eec0f7f4cd1b7fc78630ec46a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","861a8ef2dc9a6e0216977f380935448f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","37e9593ae57922f608920e4c94ea774e"],["movies/index.html","17730c0014600ca0ba4c1c2aecb64bf2"],["music/index.html","28639e179e6243736ab203bae59a3c9f"],["page/2/index.html","39ed27c427f8de726a5372b32c5c9431"],["page/3/index.html","f99e9ebeff6403660e324306ad5c724d"],["page/4/index.html","10ac381d8200a7b7160fc3b3c962c37e"],["page/5/index.html","368eebbae52acd42129fbd24f88e2625"],["posts/2019/12/04/00/35.html","43e9a08e86d95766dcf69ac1b1a7a02d"],["posts/2020/01/15/20/18.html","b9a0439dfc92fd4cc2d5ad29cc41c8c6"],["posts/2020/01/16/22/18.html","2bb89f131da59b8276a463bdab183964"],["posts/2020/01/18/22/18.html","ceb5a315aa429bc5c948b1ab0d4fac24"],["posts/2020/01/19/08/29.html","562a933e612c4285dfddf92fffe2b9f3"],["posts/2020/01/19/22/18.html","f5267a5538ba23e1833a442c48de1bd6"],["posts/2020/01/23/22/16.html","5b1ba6ec4bb6e4b5ee9470e5369fbc16"],["posts/2020/02/04/20/18.html","46fc5fba0690fd39c43542ff4df93c2d"],["posts/2020/03/12/00/20.html","2eb47ef44151860c78ea5ad3f650f58d"],["posts/2020/03/20/22/12.html","6b216f91a85079f61a6b1e3995379e01"],["posts/2020/03/22/18/24.html","76fb396169e8947284875452ae84edbd"],["posts/2020/05/03/22/12.html","fcf17283e35032a469febdf6d26a81a4"],["posts/2020/05/04/00/05.html","57a8c3ca511c3244b7a480f39401854a"],["posts/2020/05/04/00/09.html","b208e5bdc57b4b147e5fdb59577552bf"],["posts/2020/05/04/00/15.html","76f4164994ef7e07bb512f48400baa8c"],["posts/2020/05/04/14/58.html","8488db17b1b7c8748949c7db64f04354"],["posts/2020/05/04/17/01.html","67108a4d5bb6a9ddb0b390d4074bb34f"],["posts/2020/05/04/17/19.html","0d6566dd87774519ae451065ff208715"],["posts/2020/05/04/18/18.html","6c4c39679338baae6b99623671e39329"],["posts/2020/05/04/18/24.html","a950155ce7826db7b5413ef9e8394f8c"],["posts/2020/05/05/11/12.html","6e4001db71085740d70f695f270a6873"],["posts/2020/05/05/13/20.html","fdabfe6757a278948797e2f1030c6abe"],["posts/2020/05/05/15/20.html","50c1a03a15d349a69a0c3ea8e1bf6da2"],["posts/2020/05/07/21/21.html","a3098a9748a6032b35d7d3a010fe2e06"],["posts/2020/05/09/12/20.html","d9917cb1fb3335d87f877b1360067a80"],["posts/2020/05/10/18/18.html","f3d6a12eef6d127f6cbab921c66bd664"],["posts/2020/05/10/22/18.html","31907f89e9e67eba79701cbc51128206"],["posts/2020/05/12/20/18.html","dfd6f39fcd54ab3b0b07a2e994e59149"],["posts/2020/05/12/21/18.html","29c506482764c215adae5508f7739025"],["posts/2020/05/13/20/18.html","37834a116109a5744ffcf29f35614440"],["posts/2020/05/13/23/58.html","4b3beb473efcc6c9d7c2ca542518128f"],["posts/2020/05/14/11/18.html","991986e7ffa7c7c15acd6851d3a2111e"],["posts/2020/05/14/12/18.html","09d177098604957987fd584595d46ca1"],["posts/2020/05/14/20/18.html","fc90b7e67fd3d77096e2d3604d89a255"],["posts/2020/05/14/20/58.html","6bf375fba77a5bd27b3a37589f98d2f3"],["posts/2020/05/14/21/58.html","e9b2cdee9983b8841a86791cbd806ac3"],["posts/2020/05/14/22/58.html","f8008e6b3f93cfe976fcaf3e8326ea74"],["posts/2020/05/14/23/46.html","4595852d1668430537659a0375d9b38c"],["posts/2020/05/14/23/56.html","174c1ba2648ff68d9e2a66d0dc7a7061"],["posts/2020/05/14/23/58.html","ce79b269b53563eae389ba3f464bdb36"],["posts/2020/05/14/23/59.html","2335715fa6fe379def51a3e26a041e90"],["posts/2020/05/16/20/40.html","71998eb657e9891c437c0e2eb3c3c4e5"],["posts/2020/05/16/21/40.html","7e433e7e103bd05b4291bf8d47e3190d"],["posts/2020/05/17/21/03.html","c64ef08ab4fe31fbad7d03875f77a4bc"],["posts/2020/05/17/22/42.html","2c7fab0ec70e701061e37e954f7018e2"],["posts/2020/05/24/07/03.html","64c8c4504fdab3ea7cfb97f58c886fde"],["tags/AGV/index.html","bf8812edd0f63ea2d70b28978c6c8d95"],["tags/Github/index.html","058d20aae9e3497a6538634c0d885fee"],["tags/Move/index.html","aeb50804842a2243bf354dc147bc9e9a"],["tags/OpenWRT/index.html","3649819530794861253e4f6cfd4ed776"],["tags/Plant-Simulation/index.html","f3d971a3d43c0b97a28d4b5df8d81c9d"],["tags/Wordpress/index.html","010067e3a03ba6121c451e5be4fa38f1"],["tags/buntu/index.html","ebc095ad069dc08f6cce2d2c2cf09c60"],["tags/cad/index.html","f1cc8c0a2ca58bda3a39875af54166ee"],["tags/coding/index.html","4a0f11921fc740df8403a60bec629756"],["tags/h5ai/index.html","fc39ff2d53588811655a482fe5ed1c85"],["tags/hexo/index.html","e2e6e4c6b1c486b19980ae24fdd4bfa1"],["tags/hosts/index.html","c0ee937b5797db1c7b8ad5a5751b6645"],["tags/index.html","c86a0ee46ec449c740b4d63bb1a2ab96"],["tags/lychee/index.html","03c73e2ad174278ec84065201c25f725"],["tags/nas/index.html","a494957c833560fce2e3abceb20a90cb"],["tags/tpyecho/index.html","7757a9273625889abaf04bccad785ee8"],["tags/transferstation/index.html","2980fbbbc993874c653dc9b2a7e3216e"],["tags/typecho/index.html","6e3907714b6a2d26ff66bfee4aad333f"],["tags/ubuntu/index.html","4e56f99a2a48a5896fd58d165a76fad2"],["tags/写给宝贝的话/index.html","6d20acd56bccb00066b95fffcb553319"],["tags/原创/index.html","0f457e66232005ed5c440cc486f1916a"],["tags/学习/index.html","5fd49ac9c142b0a2d0f0a998ebd94576"],["tags/宝塔/index.html","6b7401b4762cc75e4bb3d016cc3af1da"],["tags/生产模式/index.html","491ca965ba82370a420db8b3dd7fe88a"],["tags/百度客户端/index.html","0145e9b6238a0dc12d1b69892fd9e1a3"],["tags/科学/index.html","38f6f62f1ce7d44e8494152bce73acdd"],["tags/统计/index.html","53c1577c5800a90b8b35bdeb23f26c62"],["tags/编译/index.html","e7eede2f63797ccbe7c47d365cf3e91d"]];
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







