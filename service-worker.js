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

var precacheConfig = [["about/index.html","5de7dab39c0b6fbc2759f4f373f07b02"],["archives/2019/12/index.html","18c7fa3adbe156ed32760d5d80118d65"],["archives/2019/index.html","fe7810756655f646d6a8deb393464bee"],["archives/2020/01/index.html","62930fcd2b4d253e138fd3bddc663e07"],["archives/2020/02/index.html","ae734e353bf5d7cf4c26fafccb58c1e4"],["archives/2020/03/index.html","7795c6d16ae8ac405666f1b0db0d7202"],["archives/2020/05/index.html","9ca3fa480a42f2929b3ff227fe4e4b07"],["archives/2020/05/page/2/index.html","b50abcd3dd350a7608acb9a22bfdc5a1"],["archives/2020/05/page/3/index.html","eeae4d548a3cb8809080f085675954a5"],["archives/2020/index.html","beb9d0980fe147840ecf0fc90002510a"],["archives/2020/page/2/index.html","f1845e641d2974713b87704452b4e30b"],["archives/2020/page/3/index.html","b5bb9587bda3acb2cd309bed6161bf16"],["archives/2020/page/4/index.html","6424cda9e207d65b9b518b77e56fd5cb"],["archives/index.html","d308d0766b065773611742fcf5dc62ab"],["archives/page/2/index.html","59e988c99bbfb05147f3ffbb13474759"],["archives/page/3/index.html","bfc3d46c5cd30e8cef47698914c25ebe"],["archives/page/4/index.html","4a0db86f905b45824a6e72e611bff38e"],["archives/page/5/index.html","26c23ad707918feddc8cc91448b15a4b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","fcbadd2e4f1fa28addc79a233cef15ca"],["categories/Code/index.html","fc6487d3775083db45d4e10572d65e0c"],["categories/Plant-Simulation/SimTalk/index.html","a09559efd6fd4d3a0826997ad1be6d8f"],["categories/Plant-Simulation/index.html","dd7061303f1a51c7382f065c420b0784"],["categories/Plant-Simulation/实体/index.html","c94cc13897860ed7593408d853908e33"],["categories/Plant-Simulation/常用代码/index.html","502a2354907a8d67eb5c82d64532e2b8"],["categories/Plant-Simulation/常规操作/index.html","8f30b263934a118f4b1b083909ea8b69"],["categories/Plant-Simulation/模型/index.html","f5778690453340f5cfb930c9e55e2448"],["categories/Plant-Simulation/背景/index.html","628bd49ed3a937cb1eb79365caaa6db5"],["categories/index.html","cd6aebe670e52a0213d521143ca02303"],["categories/nas/index.html","2a239a58becbd1637832f3d2076c63c3"],["categories/ubuntu/index.html","3614696e8064db241fc11db3a7ace9bb"],["categories/ubuntu/ip/index.html","049651b78512d537762947aad5bf1466"],["categories/ubuntu/下载/index.html","9783f226e5e32f63ecf4aead52b06aa2"],["categories/ubuntu/命令/index.html","e33216f5da77f3528311dad973602919"],["categories/ubuntu/配置/index.html","84b497af828fb26c11db3f2d71a97503"],["categories/博客/Wordpress/index.html","b6c026ccd6798f98d8d035eb01ac51b8"],["categories/博客/hexo/index.html","41270b9f92cd2bd1be051ec4be629d0c"],["categories/博客/index.html","ced0f5c79c3c906b0c15feafd054a56d"],["categories/博客/page/2/index.html","129a65f083eed0ad23319c8816e62df7"],["categories/博客/typecho/index.html","61cdbf18d47cd5e16b8511204b1b7b9c"],["categories/博客/统计/index.html","a71fc4a857b4ba8fb4f0ee546522f6a6"],["categories/宝贝/BB/index.html","761d03837ea4b7e39c81d2aafaeb7b54"],["categories/宝贝/MM/index.html","e9549ef2c2ca000b1d21f4dbcd0db352"],["categories/宝贝/index.html","99e7c3236dfe63065ff00833e20d33f2"],["categories/思考/index.html","5f3e977411fcd8fa94963bb513bf3dc0"],["categories/思考/职业规划/index.html","f49e6cfed9984310cacefe37020224f0"],["categories/科学/OpenWRT/index.html","7fd026c5bc0e7695c11f86d2b110e536"],["categories/科学/index.html","54ab7b104f58cff6ed8e9da561fa0131"],["categories/科学/手机/index.html","e52ecfcd47af80c26fe4bc2d497c0fff"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6404f35c8e255d4cf51d912ea7ddbcd3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c8f2fcdfe88d4cc8578af21135a63195"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0cf12f526ab34e4b36d7dc0ccbb14030"],["movies/index.html","074d7716efd64e862b64563f4c874723"],["music/index.html","3fc3c85e65ac9e59749712bef0a62973"],["page/2/index.html","1ad4646317fda7a31846108d3167b5ab"],["page/3/index.html","db76a4a6c42853907463699bbac15221"],["page/4/index.html","f3baf65c5ac6994d9a3c9ee5a3651ae4"],["page/5/index.html","435f4a8bfe1deefab27be08d3a7dff5e"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","cfee7372c011499c30d398063dcb387a"],["posts/2020/05/04/00/05.html","bb2b593da96207327a465ffec53bca3d"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","b4dbdc63c0c974822dff4a3a107de1ca"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","290443e814a788558bca6d01d3e7703b"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","8a09485b73e3e92a1a3f42145d735fc2"],["posts/2020/05/14/20/58.html","2a77df6306bb1edf47f4e0f2e5524827"],["posts/2020/05/14/21/58.html","9121d1c1f1c1270b7c04dc3c7a651c24"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","76be29e758990ebcde5b88d380336af2"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","7f4460f7566aac45a286820192babe5d"],["tags/Github/index.html","87b379e3ee2ee27cbdf1d6bc886baef2"],["tags/Move/index.html","b07252c3b0f961ab07adfbfe300f2b16"],["tags/OpenWRT/index.html","f4edaa18c74cff607cb6819cbccc712b"],["tags/Plant-Simulation/index.html","530f4ba2a3b4da492ebba84aefc8f613"],["tags/Wordpress/index.html","d942fb5e15729391bdb6bb94005eee8e"],["tags/cad/index.html","6de71cc068fcc9a4a662e190d5ddb021"],["tags/coding/index.html","fc0ee55d2bc8eec6b127a0b6681d5691"],["tags/h5ai/index.html","a095b6df911939bc58bab2df81cb8b00"],["tags/hexo/index.html","1c9645af8ad6b938a7d40d3a7958048e"],["tags/index.html","45eb4c04373fb28047b33f09b56a7925"],["tags/nas/index.html","c28ecdc9c90bd888e1a481721bca974a"],["tags/tpyecho/index.html","35c205238602e7d6c123cb36277a0084"],["tags/transferstation/index.html","1dbfebaafa6b79a82df0f159f519233f"],["tags/typecho/index.html","11133c372c13eea1169a1803a098d0fa"],["tags/ubuntu/index.html","0fd1632a594cfcf999f8f61e66f96d42"],["tags/写给宝贝的话/index.html","e5ba63768c9e34f56f5ce28b5e6abad0"],["tags/原创/index.html","c503da59d7085cc3aa58bf85f2349c52"],["tags/学习/index.html","db6b82d5801bdcc05c06cbed464dcee5"],["tags/宝塔/index.html","fe04e08b28f6d1ba6ff8b133d90b5771"],["tags/生产模式/index.html","9fd851ad8a3ea09944ce7d9c38c35e06"],["tags/百度客户端/index.html","fd8a0ca59eb18af93e41d25d2a8b57a5"],["tags/科学/index.html","220fa9ea188948358a50d941ebe83c49"],["tags/统计/index.html","7824233f128b9c59f73923980a58ca0f"],["tags/编译/index.html","2611e266b3f18aac82743d8caec6bd3a"]];
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







