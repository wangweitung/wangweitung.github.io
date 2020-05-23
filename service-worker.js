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

var precacheConfig = [["about/index.html","e8cb07eb476d62357bef4a6a75f3d558"],["archives/2019/12/index.html","90c763870fcae93a5a602e96462c9f41"],["archives/2019/index.html","99daeece80875313f9892f48ef9847e8"],["archives/2020/01/index.html","37f8e367c5e4edf263b5656d699a4d85"],["archives/2020/02/index.html","af9c0657e5e70cee8fb921a46344f926"],["archives/2020/03/index.html","e67eff7c09b64d8a67603f3827d19483"],["archives/2020/05/index.html","338761996e048b27677c047a46aecff7"],["archives/2020/05/page/2/index.html","932335a30a6c61690fa5af7b746e3386"],["archives/2020/05/page/3/index.html","b781316b8b4bf5cc78d010fd88251bae"],["archives/2020/05/page/4/index.html","1c161ec30d8a4fb08c2df28068a3386c"],["archives/2020/index.html","d4fe4963e7f9c9d73a496f6f6477ad8f"],["archives/2020/page/2/index.html","b1f809a81c9546ed76ef1192653c1852"],["archives/2020/page/3/index.html","f196ab554243c6eb558b44c1746d98af"],["archives/2020/page/4/index.html","644d57a71aac3ae946c53e7337d8b1dc"],["archives/2020/page/5/index.html","47c646808c11841f64277304f5dd9f03"],["archives/index.html","32e08259aadb45114a98501a2d5eeb2f"],["archives/page/2/index.html","022aa2afeff0e334c7bf65a438c9c30d"],["archives/page/3/index.html","dc4c2d1f470edc1e981051ab916dddfe"],["archives/page/4/index.html","6851a0ec3960f45201e7f33fbf8ee079"],["archives/page/5/index.html","9a2d96079fedb59a736fc61a29f84c54"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","ad64ecb2532368bccfeadee602615672"],["categories/Code/index.html","d13e5840c7749df367573c0c7e5ec127"],["categories/OpenWRT/index.html","f51dc2ffee7340a229f7e5fe1534e7d0"],["categories/Plant-Simulation/SimTalk/index.html","79bf0253c80f52c4fec616a33aaf2d27"],["categories/Plant-Simulation/index.html","1beed4d1821f8740fda294adbfe7eb84"],["categories/Plant-Simulation/实体/index.html","f1bff38814497bf9dc79cbdc365a0a6e"],["categories/Plant-Simulation/常用代码/index.html","65b62a52437024e315ad6f3c248ef9fe"],["categories/Plant-Simulation/常规操作/index.html","3b476e960287d89486b01d822020e740"],["categories/Plant-Simulation/模型/index.html","9abca7dda899ff177a0cd22034ddd30c"],["categories/Plant-Simulation/背景/index.html","144c3559cb3dc7c04ce978ec5754f7a3"],["categories/index.html","a1cf8d67fd6529fbe01d72a92806104d"],["categories/nas/index.html","a225c758adb8b08d9e4f9d5712570224"],["categories/ubuntu/index.html","511d0a69406b07a59441590dbcc37460"],["categories/ubuntu/ip/index.html","53ced0dfe79a57e5dd08ef024ac4c5c7"],["categories/ubuntu/下载/index.html","f0ceae4c742f2bfe5add5578a5dc3215"],["categories/ubuntu/命令/index.html","a82d9c7e71ca3ac27d510c294cc7e59f"],["categories/ubuntu/配置/index.html","ef666add2f11b7d72ea9e804700f7a00"],["categories/博客/Wordpress/index.html","2c59a22ee435ef85d34037847fe4c12b"],["categories/博客/hexo/index.html","05115f7367a9fcd6f46360ba187edb13"],["categories/博客/index.html","f8e6187b17db7e894ffb74d057aa0d6a"],["categories/博客/page/2/index.html","3353f34703415fb8f9abe09135f93d65"],["categories/博客/typecho/index.html","c2bfc8330044aa94dafa584e414ed5e5"],["categories/博客/统计/index.html","86aa7d7fbe9641de05d2d37103038975"],["categories/宝贝/BB/index.html","5696e40726a87946da9f461bcf58e23a"],["categories/宝贝/MM/index.html","51184741898efa00f423074f4b07ad11"],["categories/宝贝/index.html","b995ed63b117e7c60e9707be255aff42"],["categories/思考/index.html","d2376bf66386f1e34ffeed3e383dd4d9"],["categories/思考/职业规划/index.html","4c7eeecac7db4fe18cdcfd52d25e4063"],["categories/科学/OpenWRT/index.html","d3b8d7b6e45461cf6bffe3ce02efa562"],["categories/科学/index.html","9c8d81fb0022b2ead931e9d829575e91"],["categories/科学/手机/index.html","b820eff26397a3f6bfe0195cbb67203f"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ab6e44aa194ce08e380be6ec8f7b5cfc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c1b78aefe9ed7987291ba0dc0ffc789a"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","f7e0658e0fb83a4fef56d41fa21587ff"],["movies/index.html","9b786b132c4b34a072b30499b2d816ba"],["music/index.html","8273f63b0e9a68622289bdafaff44a4f"],["page/2/index.html","c3dd2947af2d6cec51cf91074161425f"],["page/3/index.html","a0e3050a445672e81ec8bfb684ea02e0"],["page/4/index.html","d2d296717e2c378048c81a068dde2cef"],["page/5/index.html","52946497e73d16fd99de8c21977f8fcd"],["posts/2019/12/04/00/35.html","09e84ec01531caebc86d72fc23faf998"],["posts/2020/01/15/20/18.html","3fffe15b14bc4ce600939919ccc75db8"],["posts/2020/01/16/22/18.html","faf0fb4f504816c51e4101b4cfbde78b"],["posts/2020/01/18/22/18.html","38de52a071be3045fd565adffc8a4c68"],["posts/2020/01/19/08/29.html","610c0819f0ad66c169f039ef019b85ab"],["posts/2020/01/19/22/18.html","d7000191052090c29cddc7632598b09a"],["posts/2020/01/23/22/16.html","3987378db278d6fb38ef72fa7e64ba93"],["posts/2020/02/04/20/18.html","ebfa74047522d9ae6fb8bb418222d152"],["posts/2020/03/12/00/20.html","9a0ef0b1ca8c4d5dd78324bf6d8a9a94"],["posts/2020/03/20/22/12.html","d239c5383ee7066821816456997d6ee6"],["posts/2020/03/22/18/24.html","712ca0cb241be5b215b0cac8dd9787cc"],["posts/2020/05/03/22/12.html","243e6bf70a851bcbf494691346ed31b3"],["posts/2020/05/04/00/05.html","5584c8698be1573a6a1ecb06f9d045b7"],["posts/2020/05/04/00/09.html","aad2102728ea2b8189988030423d9809"],["posts/2020/05/04/00/15.html","a7b85ef0a001d11373021619b07d81c5"],["posts/2020/05/04/14/58.html","f3bf460ac5429eadb880a988e807b234"],["posts/2020/05/04/17/01.html","d491c981adf469a21fa435f74a3fba78"],["posts/2020/05/04/17/19.html","307cdce3697f9a4230f45e059a3cb5fb"],["posts/2020/05/04/18/18.html","ed7c51cec30536346a1c54c0158a6956"],["posts/2020/05/04/18/24.html","525261669bebc4aa732277a3920c0e9b"],["posts/2020/05/05/11/12.html","fff29f39efac3ea5e5d7a349403d871c"],["posts/2020/05/05/13/20.html","9a98649bf711abe0c127d8e7f124d591"],["posts/2020/05/05/15/20.html","6e255b36acd466b9da4f72f77c8c7f84"],["posts/2020/05/07/21/21.html","012f26de4137c71dafa8abcbef57f7a3"],["posts/2020/05/09/12/20.html","bfa542d2b89cf3ac676833ae324c2019"],["posts/2020/05/10/18/18.html","7a5d1f6aa6b1ba5e876c02da0d4499d5"],["posts/2020/05/10/22/18.html","e1af0493c50a23f3ad7a48f232e51130"],["posts/2020/05/12/20/18.html","5635c231face2c02815edf32dcb30147"],["posts/2020/05/12/21/18.html","87050aa048e2ef0616560e950d609a9e"],["posts/2020/05/13/20/18.html","65bebcb405b03924bf846476bda7a744"],["posts/2020/05/13/23/58.html","d02b7548bc5704f8dff660289098dc4a"],["posts/2020/05/14/11/18.html","66b028eb7e5aeda62f9a955da80dde85"],["posts/2020/05/14/12/18.html","89e103ad98f3864c1eef61bb2847f80b"],["posts/2020/05/14/20/18.html","adfd60800edb5982ed36e2a0c37b41ac"],["posts/2020/05/14/20/58.html","b6d179a71a092fa00cef1475c8d666aa"],["posts/2020/05/14/21/58.html","02a45a9572e3aeb253927bc7aa4a891b"],["posts/2020/05/14/22/58.html","17c6a6aa19710486e47dc7d305cc75e5"],["posts/2020/05/14/23/46.html","e3b690a378ea28fbba4076d6bc42d9b2"],["posts/2020/05/14/23/56.html","3495d89fc3ec910ed9a4f3c4b4f2fdcf"],["posts/2020/05/14/23/58.html","ff88ba460e63f31079729ac5e3691324"],["posts/2020/05/14/23/59.html","79e655b985504f36c2dc351a180db695"],["posts/2020/05/16/20/40.html","b843cfd330abeaf6f64898efeb92f886"],["posts/2020/05/16/21/40.html","37c3b65a46438dbae10e7f593d5861f9"],["posts/2020/05/17/21/03.html","98e3ddf05b3f41c0edf6332a6cc12e75"],["posts/2020/05/17/22/42.html","af8edb91df3dd070961ed60d6d8facc2"],["posts/2020/05/24/07/03.html","cab8519026dc6b68527117427da9ec6c"],["tags/AGV/index.html","44b3e9213216c4822cb2ea66e9d9c218"],["tags/Github/index.html","9091e8f422ff9839b39d451a39c5ab93"],["tags/Move/index.html","64b5ee879437721374f70218b2e94cc8"],["tags/OpenWRT/index.html","b267e4a8ea9593e2fd71af7406afbbbc"],["tags/Plant-Simulation/index.html","e62dd0a820535caf3f2c177191815ca6"],["tags/Wordpress/index.html","862df148d2e88be9ad7b446c72788a38"],["tags/buntu/index.html","cd501879d69d7cbe8c16b77824c420c5"],["tags/cad/index.html","b6bfe17dc59cf96de4bfbd8beb56b23d"],["tags/coding/index.html","d5ba0521483260ac680b7382962d40b3"],["tags/h5ai/index.html","f17f82a34361469f42eff290887d6a71"],["tags/hexo/index.html","dbbc7289ee9bb3c314257b9b32e07246"],["tags/hosts/index.html","0c8f77a413385727f0243134363ef82c"],["tags/index.html","f8262d5f871f66d76e1c8a35dbd4d5a2"],["tags/lychee/index.html","310f066bf5a408a0d160b863b08af78e"],["tags/nas/index.html","84eb14c76e81d406eb941eec8630c140"],["tags/tpyecho/index.html","8d8f906859974997a0fbe396aac8a429"],["tags/transferstation/index.html","c15d186c0e0959db962d315c485cd489"],["tags/typecho/index.html","4b68ed4ebc45bf38a428b620d2c819fe"],["tags/ubuntu/index.html","3d2a49cda6c391e2d40067acc01decac"],["tags/写给宝贝的话/index.html","a6426ece2817a3c3db96502abe7039cd"],["tags/原创/index.html","106e09c29c672004a0d5dd3d6e9ed29e"],["tags/学习/index.html","cf3b4250ce4123cf603bcddadddd3e15"],["tags/宝塔/index.html","33b53555fcdc39bbec5ebb87b9591841"],["tags/生产模式/index.html","a84b66b1e9175123e277e967461fc417"],["tags/百度客户端/index.html","4adb9505988c43dace9ddfbb9dd7a716"],["tags/科学/index.html","9d635d38abad2c3b5c79ac3eca0ceffa"],["tags/统计/index.html","92630873320f9a8a9ec3953a41cbfd06"],["tags/编译/index.html","6ed3d2a7a12597cf3879ca829e911698"]];
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







