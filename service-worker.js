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

var precacheConfig = [["about/index.html","cd39fdc411c1e776f17661ddd37e8dd0"],["archives/2019/12/index.html","88f49f1e4aad1160925c0311f4855a74"],["archives/2019/index.html","6c9b09b9a8882be1165df4b245fefbc2"],["archives/2020/01/index.html","55fe120bca00ef5955861db46bddc867"],["archives/2020/02/index.html","190f920573fcd6c4a886f5d885dd540a"],["archives/2020/03/index.html","3ec4bf6c4d708a540433a221579c9937"],["archives/2020/05/index.html","a77aa3359c60d78867dbb9a1c6c1a344"],["archives/2020/05/page/2/index.html","e888f1ecbadd31a5a88f941f8d117fba"],["archives/2020/05/page/3/index.html","8be5b78882481b036f06692cbda9e6b0"],["archives/2020/05/page/4/index.html","d533a797468a03841d5c18978abe30e5"],["archives/2020/index.html","b259440f248f4eb354b67403b0152737"],["archives/2020/page/2/index.html","aac8c1712cb640973bbb38258b763aba"],["archives/2020/page/3/index.html","86bfe2980232d8edfdf5412fd3dbe9de"],["archives/2020/page/4/index.html","4b3bd55f6389ec70e7bcc892e61aa36a"],["archives/2020/page/5/index.html","aaec34fa8e76d77bf223a75d866dcee7"],["archives/index.html","d17f89db1c9e3ab83e9719cccd9fc8e8"],["archives/page/2/index.html","e9990b19b0bc3ef40ba41b52da5260e2"],["archives/page/3/index.html","5a99cfe2fcd31e5d77cb79c019f02280"],["archives/page/4/index.html","7af27a9102606ae6f1897e6a7d73a807"],["archives/page/5/index.html","6b1372dacf358c236dfc3753356c8f6b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","ac5e5c0e2ae0346055f5a7b739fc1336"],["categories/Code/index.html","2d12b89edba2a735e467b4d22562f2a2"],["categories/OpenWRT/index.html","889a1c71d6959ca2f200683eef5afacf"],["categories/Plant-Simulation/SimTalk/index.html","0969957abb8eac016d59fa8549c8b752"],["categories/Plant-Simulation/index.html","d75838ce392c0bb9552ea11a4ee9fa31"],["categories/Plant-Simulation/实体/index.html","08c60d2883313579c6174a08ed35e572"],["categories/Plant-Simulation/常用代码/index.html","c507816ee007490e6742d650d2f723ae"],["categories/Plant-Simulation/常规操作/index.html","708ab6c8150e9fea3dd9b90419b90b0c"],["categories/Plant-Simulation/模型/index.html","452fbca40061c5cad123b5981a5aa0f1"],["categories/Plant-Simulation/背景/index.html","0cd7cf9da69efd602d3badd9db2a5e2f"],["categories/index.html","b474e7bd4e1eb78374c7a2a48b1ebbc1"],["categories/nas/index.html","5987656777c62a0b88e86152bba18f7a"],["categories/ubuntu/index.html","05ecf1077ea429f84fa1149f5efe7363"],["categories/ubuntu/ip/index.html","5bf28f7e1d1d6b14222613107b7f0457"],["categories/ubuntu/下载/index.html","4ece8c16dd442857e4127cacfa41d0e2"],["categories/ubuntu/命令/index.html","15350589c4f515ecd0fb536f8cc3065a"],["categories/ubuntu/配置/index.html","4232b1df5a6e601cb83d279840b8d058"],["categories/博客/Wordpress/index.html","373b6f7c79a6d478f2b68a92ac29b857"],["categories/博客/hexo/index.html","40b21ecf15858637cb2df29bbfb1305d"],["categories/博客/index.html","0a8a04b7de464d7738d9317bee66f00e"],["categories/博客/page/2/index.html","50831ffcbaf2f07b1281d039074ffc55"],["categories/博客/typecho/index.html","6ac3bb2c2da66901469a83c657cf9720"],["categories/博客/统计/index.html","da2494cab77692221466f5e147c3e37f"],["categories/宝贝/BB/index.html","6eb6f132842d682cae0134ab5695e757"],["categories/宝贝/MM/index.html","ef3df288f384597024f1eaed82f277e6"],["categories/宝贝/index.html","e6578d5ed0880a1fa12a3b97fb9da0dd"],["categories/思考/index.html","8709161d566ff95ac27a79409e1144ed"],["categories/思考/职业规划/index.html","3813beeb4bb931255d08e05a0975407b"],["categories/科学/OpenWRT/index.html","bb0d237e4cca35cb83886b9ad188507e"],["categories/科学/index.html","ffb2fc0af34430a58666e9f271a92c48"],["categories/科学/手机/index.html","7fae7c509fa578a953567a181713cfaf"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","b13a96589572739f4d8309fd7182d779"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","36bcc6ddfd25729291eea1d7fcbee14e"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","6053aaa9d9aa4cd9bf025a1a76dfcbe2"],["movies/index.html","ca7250b1aad716aea856ea7e9bb7a2ff"],["music/index.html","518c9bd8917ffc51a4fb0669b2d73e6f"],["page/2/index.html","e44d0814d50f6e38e932b72fd7df54db"],["page/3/index.html","9efbac4740094f805d46a56f16a6e8ea"],["page/4/index.html","13aeb97ce55df714264e49888c0d87c6"],["page/5/index.html","32aada61ce6dfa542cbe91ab2533a145"],["posts/2019/12/04/00/35.html","7b18be01e6abb2a5282f994cffcdb0b6"],["posts/2020/01/15/20/18.html","2ae30371d5701def79fefd3c3f68a0d0"],["posts/2020/01/16/22/18.html","abe9c5de089ec2dd5b216fc8913e88f7"],["posts/2020/01/18/22/18.html","2d7d4ca4df102b67c81699e6ba8affd9"],["posts/2020/01/19/08/29.html","15c5d0baf744692b662ec404f35f5dde"],["posts/2020/01/19/22/18.html","47ee8dcecf5c4b79eecd7c2fb935b6e9"],["posts/2020/01/23/22/16.html","372877698b494b32fa668fee7d509fbc"],["posts/2020/02/04/20/18.html","e845b48cccaff6c5a70e1e21f1b8e1d1"],["posts/2020/03/12/00/20.html","26fff513d28746aae182f4dde8690a4b"],["posts/2020/03/20/22/12.html","f26491b293177377c25f45a736df5b9f"],["posts/2020/03/22/18/24.html","460e14982686aba1529e646364ee9124"],["posts/2020/05/03/22/12.html","249a935ea9645ca82631419e94d850b2"],["posts/2020/05/04/00/05.html","32d26fb7f106ee9ad77a6be2ca2accc4"],["posts/2020/05/04/00/09.html","460e19fffab82e580bd5157541e39f1f"],["posts/2020/05/04/00/15.html","b87e66cdfa920e285aca856d1f30ca75"],["posts/2020/05/04/14/58.html","89447b9c3c30f24cb2aa21f05b9c31eb"],["posts/2020/05/04/17/01.html","2d23c7bbc0dedc7a1e4377e36389529b"],["posts/2020/05/04/17/19.html","8170eda0d24be541fe62b6e367c5a095"],["posts/2020/05/04/18/18.html","4e9abe89463c275ed38b86fe3c864aa0"],["posts/2020/05/04/18/24.html","3c272682e0554bbc04f45c0ffb12d4fe"],["posts/2020/05/05/11/12.html","9af4d2773af3fdc07936257e1dd10f7b"],["posts/2020/05/05/13/20.html","d65f28d799a627edf940d2a88ae5b63c"],["posts/2020/05/05/15/20.html","bc71728b413ec4fdc53ed0b1a51b40a4"],["posts/2020/05/07/21/21.html","430a86f4dde88d4e5d35f7b63d8b560e"],["posts/2020/05/09/12/20.html","fcfeb1a787ea42c7d4b64b1ad694a7e9"],["posts/2020/05/10/18/18.html","53779db83640e7512299fdef6951e811"],["posts/2020/05/10/22/18.html","a0e78409868684a5f660ef4673af5f9a"],["posts/2020/05/12/20/18.html","5eb8036f82099ccd4f756e243992d1ea"],["posts/2020/05/12/21/18.html","37e9f8d4ff5ada7305f2da222de2103e"],["posts/2020/05/13/20/18.html","1ed9315c85ec21df8825efde7de067d9"],["posts/2020/05/13/23/58.html","199c596dd23b0ed9efb0bf49ff54150a"],["posts/2020/05/14/11/18.html","d221d7816422994fd0370bc098153afa"],["posts/2020/05/14/12/18.html","7e80d3e389855e0c9c8664b8a9072e77"],["posts/2020/05/14/20/18.html","81dadb94a049e7b9f657d9f77d7be265"],["posts/2020/05/14/20/58.html","af225baf225ad218af46686138256bec"],["posts/2020/05/14/21/58.html","410432dc3b308486fedd44a94580fa7a"],["posts/2020/05/14/22/58.html","da78a049f3f58f82e756ed928b5ab18d"],["posts/2020/05/14/23/46.html","4ecfed5e1173c5f6f4b2e5d21846954f"],["posts/2020/05/14/23/56.html","ed3405f2bf897b9e18624e49b9a4aea7"],["posts/2020/05/14/23/58.html","744f9e3694f80f8436051fd3613eedc9"],["posts/2020/05/14/23/59.html","6d98f268eb213c086797af6e235b68ce"],["posts/2020/05/16/20/40.html","043e6bd7b8840d3be5157a9219f3c4ba"],["posts/2020/05/16/21/40.html","5c6758a753f7fcd679448c4c77c8f951"],["posts/2020/05/17/21/03.html","6fca547dfdd6b8f29c711c8dde135037"],["posts/2020/05/17/22/42.html","866ac58b476cda752ff871e8092d0ccd"],["posts/2020/05/24/07/03.html","16c7aa2fb93ee769f343838005e1dd36"],["posts/2020/05/24/13/03.html","82d8610498c57c9ecbb1bbc636390520"],["posts/2020/05/25/13/03.html","7a8a0f7b70386d15bd91fd85656e8c03"],["tags/AGV/index.html","3bbfaa4919a3f5a06b70d1faad9ca299"],["tags/Github/index.html","294c67efedd064c9718dcf0ccfeb1781"],["tags/Markdown/index.html","557295b6030b52502967756dc2ce1d25"],["tags/Move/index.html","1f788def62c78a03ae93e44357e2de4f"],["tags/OpenWRT/index.html","8900b953a1d2c5849e431579950b1866"],["tags/Plant-Simulation/index.html","92fd5dba2377db73d7bb9debc79ade40"],["tags/Wordpress/index.html","3553a94cb095806016376f5b74f54cc7"],["tags/buntu/index.html","349f0f2430c5c7bac6540102cdf04bce"],["tags/cad/index.html","754874b94b357c051507e6a8db01e79a"],["tags/coding/index.html","c0969b0bfff7c34f5af0f1b1a4b67d5a"],["tags/h5ai/index.html","444b2973ec4054ae7fcf5f5ae944a821"],["tags/hexo/index.html","146bc639aaedf3b5540475abc447722f"],["tags/hosts/index.html","ba3ce9d7564e88ea738e39d28bc0bc36"],["tags/index.html","4dd7beea335da84436368042dd49b335"],["tags/lychee/index.html","96da2653df824dcf35688b92e235de38"],["tags/nas/index.html","bd059abeff626a1dba96c2d93d022a9f"],["tags/tpyecho/index.html","aa829cc986fedefab835c3f29cc10e1c"],["tags/transferstation/index.html","fe07204f62309ba19f905d8c6f8c1115"],["tags/typecho/index.html","9271209125f438d7f6d8ef867025f30c"],["tags/ubuntu/index.html","c84918ecf724792e1d54f48e826cc862"],["tags/写给宝贝的话/index.html","5750b3c865f5c690e67f0b896e9a6115"],["tags/原创/index.html","176d9f177d6462131401762287058e0e"],["tags/学习/index.html","775d14768d68953983f77d38a45605dc"],["tags/宝塔/index.html","52920bd7af6776a2b911fd59c5e499bf"],["tags/生产模式/index.html","69417ca35337920fcf32f8bbf23d00e0"],["tags/百度客户端/index.html","1c6574ecb0760c4ee99300e5e77def2b"],["tags/科学/index.html","2fa5bc737c5c7edd2f9d4ff4495f8e36"],["tags/统计/index.html","251460c1e79c7854e7244959f63decb1"],["tags/编译/index.html","16d1f66a1c9f4884f104626985ff346e"]];
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







