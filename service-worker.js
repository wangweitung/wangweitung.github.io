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

var precacheConfig = [["about/index.html","5de7dab39c0b6fbc2759f4f373f07b02"],["archives/2019/12/index.html","fec2dbab531202fdbb151995491b218d"],["archives/2019/index.html","0f38e6665cb0b23ede0ba04d3e876530"],["archives/2020/01/index.html","fcf6131e6213bddc4367b1486adb1539"],["archives/2020/02/index.html","6d22489da52be368421fc58ce2f17720"],["archives/2020/03/index.html","1049df528beabe7b840d3b319f1773a5"],["archives/2020/05/index.html","bdb82d075380849354a2dbac561c762c"],["archives/2020/05/page/2/index.html","1a71cfffec96eff9fdf67e2a27426437"],["archives/2020/05/page/3/index.html","7d50dc97cb36810ab2e6c9c403d4ab25"],["archives/2020/index.html","9a75852ac66a774daeca4219834b9546"],["archives/2020/page/2/index.html","8ab52d50d28fa02be8458e0e1671e68c"],["archives/2020/page/3/index.html","d1bb98bee3d34621593c089e7b598285"],["archives/2020/page/4/index.html","f64f6f1cfb3889d2d727da818d418bb6"],["archives/index.html","7971723d8c6255120c10498b0a2ad7b9"],["archives/page/2/index.html","032e45d4a46d8b73c18d8139410fb67b"],["archives/page/3/index.html","a50b28b5648e13f868a02ff6ed6a8aa6"],["archives/page/4/index.html","7366285062115c91ed89db06f7b2d17c"],["archives/page/5/index.html","58d1807373c0f913209976bab8e61db6"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","981d2b1d9ac81961742571d38c5ad1e7"],["categories/Code/index.html","df19696c952ee01dd491941ae2f5253f"],["categories/Plant-Simulation/SimTalk/index.html","2b6c8c19d8f4c4f16b463044e076023a"],["categories/Plant-Simulation/index.html","7a6b14f875f9a5844f4a356106e1f6e1"],["categories/Plant-Simulation/实体/index.html","5419d1e3635d32e9f1c80f119750ced0"],["categories/Plant-Simulation/常用代码/index.html","6dd0247a2b98ee076f0a6a28a8c781c8"],["categories/Plant-Simulation/常规操作/index.html","ccd04bd7fcd8e4e9b95e6ed7e0fb79f6"],["categories/Plant-Simulation/模型/index.html","a0e38fc8a999d86e719d9c9ad9ba32e1"],["categories/Plant-Simulation/背景/index.html","834c3aa96c2309e73ac29b9580999842"],["categories/index.html","cd6aebe670e52a0213d521143ca02303"],["categories/nas/index.html","0167c9a9bd5d93301fbce7b9e77abb9d"],["categories/ubuntu/index.html","51dc080e99c98875e5844dff895cfac8"],["categories/ubuntu/ip/index.html","f000fb3bf53d31097e7fece99a92d5f0"],["categories/ubuntu/下载/index.html","573fd78efe9539dd3952af2a3b1a9c96"],["categories/ubuntu/命令/index.html","561ef23a94c7faa1a00559c8fd1bb36e"],["categories/ubuntu/配置/index.html","6d974e694c5936197d5234e84586ca89"],["categories/博客/Wordpress/index.html","bde2c7cfc4cd27b3b4f8b19e7d6a8e07"],["categories/博客/hexo/index.html","43e917f39968134164fb90cb50baef71"],["categories/博客/index.html","00f9daaf3318998ba0cbff42d33ae423"],["categories/博客/page/2/index.html","abff8fedc4d6ef2d82cc2df30b2a3686"],["categories/博客/typecho/index.html","0628b0901239ea9f4e74be5eb576ca04"],["categories/博客/统计/index.html","1e920db25005196e7811d86a85c99886"],["categories/宝贝/BB/index.html","79cbb8af82c679fb03a085ed34e5a7cc"],["categories/宝贝/MM/index.html","98c5bac55261eae4476eb71fbca3b755"],["categories/宝贝/index.html","3df5c9ac0eff3ce53b6cd248703347ea"],["categories/思考/index.html","77961a6a732ceff4ddeb7d4d92e8e3e1"],["categories/思考/职业规划/index.html","830fe45498c2dda8c7b8414fdd6a8bee"],["categories/科学/OpenWRT/index.html","5e531ed0410ae62915938805a2f49ac3"],["categories/科学/index.html","e37c372ec65ff1f507deb4efb7b882d5"],["categories/科学/手机/index.html","f96d99af40cf7a5a80c76fe4a042c1b3"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6404f35c8e255d4cf51d912ea7ddbcd3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","559bd41101c566dafa6c572d05283691"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0cf12f526ab34e4b36d7dc0ccbb14030"],["movies/index.html","074d7716efd64e862b64563f4c874723"],["music/index.html","3fc3c85e65ac9e59749712bef0a62973"],["page/2/index.html","ccf458a703f76279cdc30e9de1de5e23"],["page/3/index.html","7f04e73e4bd74f7e54cc67199d3cb307"],["page/4/index.html","fea7562da9c35a18bbab6267d610421e"],["page/5/index.html","45366173e5ab7d911e7a3a1e1a217d02"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","9a00eb6b12346ca16ac362653aadb59a"],["posts/2020/01/18/22/18.html","675b87f8856a34da1b841a49e33bc4f4"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","5c8211d301c8f7b754d6b85893319fb3"],["posts/2020/05/04/00/05.html","85b2a6d27d796a62a29bc11235bf0ab0"],["posts/2020/05/04/00/15.html","eb27cb2a719b01cb4a1827713fb72f86"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","31d82a76786316faa58aa637d8c164d1"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","8dd6100a95e62eb36a11cf1c8fd8b33f"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","d4466823cf11d6a9bf17484532166ab0"],["posts/2020/05/14/20/58.html","b7c670fc5a186e48f7657e67a66bee6f"],["posts/2020/05/14/21/58.html","42490d365c71c40cb7b33e74891dab03"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","742d27f3286ef54d4691dc87b6b2a3ee"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","62b4e60dacd17588a0a23b1fa38713da"],["tags/Github/index.html","577284b82bffbb4dc536f9b9f6b70ce8"],["tags/Move/index.html","0f9ff7a073a6ba300f5ac7c586111557"],["tags/OpenWRT/index.html","de9adbd376ee6a265c5f0b178ae222a2"],["tags/Plant-Simulation/index.html","04fe037b91e184aa88c0714fcb6cf00f"],["tags/Wordpress/index.html","41c836e974b4db2d97a2a214796cca75"],["tags/cad/index.html","0697bc7f2881e80e04b14c007c52f97c"],["tags/coding/index.html","b520e09bc0128acfe3367fb546984d30"],["tags/h5ai/index.html","7681d23d46062b020b816edb90563b2c"],["tags/hexo/index.html","ec8fced8e0e5945e38b2d7f7594c9eeb"],["tags/index.html","629f33d04c89b89c3e77f6a6bc3ce800"],["tags/nas/index.html","457b574822c92ecacde9d35625019d58"],["tags/tpyecho/index.html","ac9e22ed6cc0f605d59e8b567a28ed55"],["tags/transferstation/index.html","e2a363a207ee1f88a48835a95198cef5"],["tags/typecho/index.html","3eb7238cbc9893660a35fcf38bdd7b06"],["tags/ubuntu/index.html","0c3ff47fd11855903bbc3c23ef48b5b2"],["tags/写给宝贝的话/index.html","858bbf441b59d57faee0cd531eaed9ec"],["tags/原创/index.html","93aac0adb981689bc09eb0a6e6a89c4b"],["tags/学习/index.html","aec162fff2a9289f8e16ccb077b86baa"],["tags/宝塔/index.html","0f9274745f5ed680dfc07247b30c1e14"],["tags/生产模式/index.html","b219eee95edb4d215ccc297223e378c3"],["tags/百度客户端/index.html","dc17e95e5e53eecaa306f2ac6832bf52"],["tags/科学/index.html","4acff022d66237bb2c68f9660b0ef66c"],["tags/统计/index.html","e50d667c89a95854f8fa6b7aa302e7ef"],["tags/编译/index.html","5380725828709373a59c57b00e846617"]];
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







