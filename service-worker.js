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

var precacheConfig = [["about/index.html","95877c01bba22b095e7b4ce542bcce1b"],["archives/2019/12/index.html","30243a4bbbe767e1fbfca608ed3c9ef3"],["archives/2019/index.html","aacb76c7606f2ba3d20d468c1f4f20f6"],["archives/2020/01/index.html","a4ea7c18df0319d7011527d7e9990790"],["archives/2020/02/index.html","00fcca0cc3002474f6ba6bb6fa83f36a"],["archives/2020/03/index.html","8f457c8c3c91089ab924b93a0cecb126"],["archives/2020/05/index.html","5f98b290860f846a847ee2ca977ac626"],["archives/2020/05/page/2/index.html","8c5b88fc3c57ccf5567d1132bce9abe9"],["archives/2020/05/page/3/index.html","1f7bfc662342c0321ee89041f126b749"],["archives/2020/05/page/4/index.html","6fc478925174f90a24733d6ef0a00791"],["archives/2020/index.html","5f555ad95f7e19819ccee566860e481c"],["archives/2020/page/2/index.html","320ce081074393ce2624b43a0789c969"],["archives/2020/page/3/index.html","7004621ac7f547832c916c7a6ed73057"],["archives/2020/page/4/index.html","23e5c5e663e1db9f7fd109870664e336"],["archives/2020/page/5/index.html","f3a379f0243fafa4c82b5f21753c6706"],["archives/index.html","9efb9c5835bd0fdbec7559cb480db918"],["archives/page/2/index.html","675afe5c6464d68c05f61512bf9da5f7"],["archives/page/3/index.html","381a8f95ae9ae1a203b759205e84e66a"],["archives/page/4/index.html","31929f9ddf0c1c9636620fd97ee60963"],["archives/page/5/index.html","108307799d593c8337531840e4dbe20c"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","3d1b0acb641c88268a3fa1a43a122ab7"],["categories/Code/index.html","53302d38d7badd802ee1c30c7d8baffc"],["categories/OpenWRT/index.html","c96615489088bcf3175cd3a86b56d6f2"],["categories/Plant-Simulation/SimTalk/index.html","32ebdb66ecfe0da653bd75f226784dc1"],["categories/Plant-Simulation/index.html","8d32b29348fe5c70fa1c21ec19bd5046"],["categories/Plant-Simulation/实体/index.html","db74545077ba3d3cf22e37ccd16ea961"],["categories/Plant-Simulation/常用代码/index.html","145b910c990194db8794d1e4f67d7973"],["categories/Plant-Simulation/常规操作/index.html","237483b983bbef5c465746f4a98e6a50"],["categories/Plant-Simulation/模型/index.html","9f154d147cd411d0800d5ee883db9371"],["categories/Plant-Simulation/背景/index.html","b044a15df8beb7e133b57773dda91687"],["categories/index.html","56fbce082838eff87931e40cabdba3a0"],["categories/nas/index.html","74131ff4a67efb20f081f544cb8f191b"],["categories/ubuntu/index.html","8009df15563987957003f84d6162ca5e"],["categories/ubuntu/ip/index.html","e0124036082e5134e6676998c9e4b51f"],["categories/ubuntu/下载/index.html","05240da9a5e3e0a070cd053522afb94e"],["categories/ubuntu/命令/index.html","11eb62a421be7113e2a6933c10ba032d"],["categories/ubuntu/配置/index.html","cda28dbfc0b000c99be864ce33922f7a"],["categories/博客/Wordpress/index.html","6be9b5060e7d6fffab4b82cc7c9d0f10"],["categories/博客/hexo/index.html","28f556c4ca9c415719450c2819c2efaa"],["categories/博客/index.html","75ae0055a09096a9358a0b1a8fe24a7c"],["categories/博客/page/2/index.html","3ebe328cd5711af7bf8903470e29fe1d"],["categories/博客/typecho/index.html","dbdbe2f08662d7431f2d8c40ed1b3dd7"],["categories/博客/统计/index.html","be6c43313bb7ad617cfd516b5cd9a44e"],["categories/宝贝/BB/index.html","8d0684f3ceed33254cae4dc4f7851357"],["categories/宝贝/MM/index.html","1b7d1c7854dd834b630da59081537e5a"],["categories/宝贝/index.html","d8970f43da35e7594ef10527812e98b3"],["categories/思考/index.html","2a0d65046dc8a08b522b6098e21b2dd3"],["categories/思考/职业规划/index.html","494ca8c326dbade150682096c93691a7"],["categories/科学/OpenWRT/index.html","e455c2585cbdd9a1f28f39191d6ec5dc"],["categories/科学/index.html","6f1785cb25fff2a45c42ef7e6c48408a"],["categories/科学/手机/index.html","5b66d0baa60df75618ef22562982157d"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b0a7ed6eec0f7f4cd1b7fc78630ec46a"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","8500df87fa84279ea509df9bbad581ee"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","37e9593ae57922f608920e4c94ea774e"],["movies/index.html","17730c0014600ca0ba4c1c2aecb64bf2"],["music/index.html","28639e179e6243736ab203bae59a3c9f"],["page/2/index.html","05411693eef7e2d1be4741fbd6e8beee"],["page/3/index.html","1a4fd64cc00d82bc2800c3a8d9fb7924"],["page/4/index.html","322ce2753b494b2792a9944dcc0bd518"],["page/5/index.html","9336ba8c9432b39470ec97f7e9086088"],["posts/2019/12/04/00/35.html","43e9a08e86d95766dcf69ac1b1a7a02d"],["posts/2020/01/15/20/18.html","b9a0439dfc92fd4cc2d5ad29cc41c8c6"],["posts/2020/01/16/22/18.html","2bb89f131da59b8276a463bdab183964"],["posts/2020/01/18/22/18.html","ceb5a315aa429bc5c948b1ab0d4fac24"],["posts/2020/01/19/08/29.html","562a933e612c4285dfddf92fffe2b9f3"],["posts/2020/01/19/22/18.html","f5267a5538ba23e1833a442c48de1bd6"],["posts/2020/01/23/22/16.html","5b1ba6ec4bb6e4b5ee9470e5369fbc16"],["posts/2020/02/04/20/18.html","46fc5fba0690fd39c43542ff4df93c2d"],["posts/2020/03/12/00/20.html","2eb47ef44151860c78ea5ad3f650f58d"],["posts/2020/03/20/22/12.html","6b216f91a85079f61a6b1e3995379e01"],["posts/2020/03/22/18/24.html","76fb396169e8947284875452ae84edbd"],["posts/2020/05/03/22/12.html","fcf17283e35032a469febdf6d26a81a4"],["posts/2020/05/04/00/05.html","57a8c3ca511c3244b7a480f39401854a"],["posts/2020/05/04/00/09.html","b208e5bdc57b4b147e5fdb59577552bf"],["posts/2020/05/04/00/15.html","76f4164994ef7e07bb512f48400baa8c"],["posts/2020/05/04/14/58.html","8488db17b1b7c8748949c7db64f04354"],["posts/2020/05/04/17/01.html","67108a4d5bb6a9ddb0b390d4074bb34f"],["posts/2020/05/04/17/19.html","0d6566dd87774519ae451065ff208715"],["posts/2020/05/04/18/18.html","6c4c39679338baae6b99623671e39329"],["posts/2020/05/04/18/24.html","a950155ce7826db7b5413ef9e8394f8c"],["posts/2020/05/05/11/12.html","6e4001db71085740d70f695f270a6873"],["posts/2020/05/05/13/20.html","fdabfe6757a278948797e2f1030c6abe"],["posts/2020/05/05/15/20.html","50c1a03a15d349a69a0c3ea8e1bf6da2"],["posts/2020/05/07/21/21.html","a3098a9748a6032b35d7d3a010fe2e06"],["posts/2020/05/09/12/20.html","d9917cb1fb3335d87f877b1360067a80"],["posts/2020/05/10/18/18.html","f3d6a12eef6d127f6cbab921c66bd664"],["posts/2020/05/10/22/18.html","31907f89e9e67eba79701cbc51128206"],["posts/2020/05/12/20/18.html","dfd6f39fcd54ab3b0b07a2e994e59149"],["posts/2020/05/12/21/18.html","29c506482764c215adae5508f7739025"],["posts/2020/05/13/20/18.html","37834a116109a5744ffcf29f35614440"],["posts/2020/05/13/23/58.html","4b3beb473efcc6c9d7c2ca542518128f"],["posts/2020/05/14/11/18.html","991986e7ffa7c7c15acd6851d3a2111e"],["posts/2020/05/14/12/18.html","09d177098604957987fd584595d46ca1"],["posts/2020/05/14/20/18.html","fc90b7e67fd3d77096e2d3604d89a255"],["posts/2020/05/14/20/58.html","6bf375fba77a5bd27b3a37589f98d2f3"],["posts/2020/05/14/21/58.html","e9b2cdee9983b8841a86791cbd806ac3"],["posts/2020/05/14/22/58.html","f8008e6b3f93cfe976fcaf3e8326ea74"],["posts/2020/05/14/23/46.html","4595852d1668430537659a0375d9b38c"],["posts/2020/05/14/23/56.html","174c1ba2648ff68d9e2a66d0dc7a7061"],["posts/2020/05/14/23/58.html","ce79b269b53563eae389ba3f464bdb36"],["posts/2020/05/14/23/59.html","2335715fa6fe379def51a3e26a041e90"],["posts/2020/05/16/20/40.html","71998eb657e9891c437c0e2eb3c3c4e5"],["posts/2020/05/16/21/40.html","7e433e7e103bd05b4291bf8d47e3190d"],["posts/2020/05/17/21/03.html","c64ef08ab4fe31fbad7d03875f77a4bc"],["posts/2020/05/17/22/42.html","2c7fab0ec70e701061e37e954f7018e2"],["posts/2020/05/24/07/03.html","64c8c4504fdab3ea7cfb97f58c886fde"],["tags/AGV/index.html","e1bf8566e694db525caf0a44b743e32d"],["tags/Github/index.html","492b0d52beedeb387aee3e6b1ff09583"],["tags/Move/index.html","f75b8eba7bea941ef145ec3836870cea"],["tags/OpenWRT/index.html","2e2abeff7c319e24cfcfa718fc8bf55e"],["tags/Plant-Simulation/index.html","f8764ad2089e602bb0182607c4c3837b"],["tags/Wordpress/index.html","a269e83ec0c254e81c0f8b37687502b5"],["tags/buntu/index.html","5df1b43b5c0bcf30c65770c331466478"],["tags/cad/index.html","86a15fd3c9b241265cb265dd476fa094"],["tags/coding/index.html","fb298fc510b705f5e4ed180bb9577eeb"],["tags/h5ai/index.html","526488b8acddaad6c67c02bf6d7a2e10"],["tags/hexo/index.html","e93fa13b5c953349dd78fc8a3e8f2153"],["tags/hosts/index.html","e9c4f7396938cb7e26f836ae8a664ecb"],["tags/index.html","4ccef434941017f3e70c42f2e3acefd3"],["tags/lychee/index.html","f15fc2d84a7d7725da438959023cd3b1"],["tags/nas/index.html","83b1f34c2e40a5f5a47f15503be48b2d"],["tags/tpyecho/index.html","e02b00d95bf2178ad2083d997d6b834b"],["tags/transferstation/index.html","222ee6919f05df63334daf84b3330275"],["tags/typecho/index.html","dea0651d4e05719e85bb0fda657a60be"],["tags/ubuntu/index.html","85c6f426307e66d0148acad65e2e2a6f"],["tags/写给宝贝的话/index.html","8821c22794d572f3afb69f10d16c7267"],["tags/原创/index.html","c866188a9cb22a3aec0ecf1af7672fe7"],["tags/学习/index.html","835c492f66ccdbbe3b7af7108e603027"],["tags/宝塔/index.html","8fc0fb05103e84162f3351ef40b3d266"],["tags/生产模式/index.html","d23020f4db06e0f2cc4168e8b03878c6"],["tags/百度客户端/index.html","3162fa1eef0258037571dfd1a2394d47"],["tags/科学/index.html","dff94022ea6df4d659004cf9e5cd6b74"],["tags/统计/index.html","b48690fd46a05350f5078437e135ee53"],["tags/编译/index.html","fe1c9ed1224ae0ca5f701b89b0eb2bc2"]];
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







