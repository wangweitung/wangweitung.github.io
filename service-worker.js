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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","b5509b0cdd6165fd3b9636e403916253"],["2020/03/12/妈妈写给宝贝的话/index.html","495d02faeba9497afdc76cb4ebe47771"],["2020/03/20/磨人的小天使/index.html","ee9cda75176f9bddc1cd06d68b76a6ae"],["2020/05/03/hello-world/index.html","70f26fa925a3ce215760393a03fc7f3c"],["2020/05/04/AGV的用法/index.html","73c70303bfb9e0cca110cfaedb91a816"],["2020/05/04/Github创建文件夹/index.html","0fbfd1e090c852ca19cf89d1a8f2d95f"],["2020/05/04/Move的用法/index.html","533ad61e8229aa2721361ce27fabd19b"],["2020/05/04/PlantSimulation常规操作/index.html","021363431f8dc4ab3cdfe63745cb8e75"],["2020/05/04/TransferStation的用法/index.html","e323db48b997844841eb0c25732e59fe"],["2020/05/04/Wordpress问题解决/index.html","7c177ee1a974b7cd2c0b26cd78f414bd"],["2020/05/04/ubuntu安装配置hexo/index.html","5191e609173cb67d49de4442807e5c8b"],["2020/05/04/无科学环境连接谷歌账户/index.html","d5cda7fd03e079fbdd8b8a2579742787"],["2020/05/05/Markdown的一些小技巧/index.html","b5807ac6e449e89738a3238eef1132ed"],["2020/05/05/导入cad作为背景图/index.html","0dfa28222a9146f858065540a3f52a42"],["2020/05/05/推动或拉动的生产模式/index.html","14cd86121e7882a01d16a1f1cee841ee"],["2020/05/07/在摊位下上网课的小女孩/index.html","1261c2dc1eae89e44b592441a1cdf637"],["about/index.html","b147518cb7a489b5a7fe462f2d06f719"],["archives/2020/01/index.html","f124ad9b4c3202c69213c8aacd0d6804"],["archives/2020/03/index.html","298d4b29028d80ff586917ff6a149bbd"],["archives/2020/05/index.html","aca6bc13bb3c0adeb2076297701ba771"],["archives/2020/05/page/2/index.html","d8fee9d2fb63ed7e3f8cb4f852265d6b"],["archives/2020/index.html","f18f8fbb3bbf54cddbade400754f3570"],["archives/2020/page/2/index.html","3a1e229364167b35fd29883f12216b88"],["archives/index.html","2d8e00b27ecd9afaa6844aeedf3ccb5a"],["archives/page/2/index.html","f503f2e6cf6f848d5d12802639728a0e"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","44d7a5124822236a5b87cfbe7b6e31ed"],["categories/Code/index.html","44d30d07c88297066068bb34d8c60146"],["categories/Plant-Simulation/SimTalk/index.html","175b638f889d86382c42625ee3b35df5"],["categories/Plant-Simulation/index.html","811e5706b984a9ab840319e13eb3a9c7"],["categories/Plant-Simulation/实体/index.html","c52800dec8a1515a187191970772bca0"],["categories/Plant-Simulation/常规操作/index.html","92842128a7a71a2930b50073313ce1f2"],["categories/Plant-Simulation/模型/index.html","44c6b3a3f52b8591844abfdb9e401338"],["categories/Plant-Simulation/背景/index.html","324910fe6c1e90d00d2a9367a4d30745"],["categories/index.html","3488ddb0635982db82cbf90a2e6d9538"],["categories/写给宝贝的话/BB/index.html","b4be7d1854adea28114ed42f0c25b842"],["categories/写给宝贝的话/index.html","1366aa66f2311b584553cb5aa82e0f6e"],["categories/博客/Hexo/index.html","fd843b3c9a57405a71dedf7c67bf45d8"],["categories/博客/Wordpress/index.html","df6adfc8197686f28ec25fbea0be8d43"],["categories/博客/hexo/index.html","fd2efaa910b1e814b365ba73fc8a92ae"],["categories/博客/index.html","710db846249040f803421eb640736ca2"],["categories/宝贝/BB/index.html","2e38f16ab20a62dc9519f36d4e5323a1"],["categories/宝贝/MM/index.html","2727213b21a16ca40831bc9f70a5d9e8"],["categories/宝贝/index.html","caf550c2cfc676dccf81317a3be9b60f"],["categories/科学/index.html","e26a34bcb884d45c7b4d35daae661558"],["categories/科学/手机/index.html","348266d91ffddc2930e0984354ad03ce"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","22f653423f07ab61b944040972d8f008"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","2d54d355b3fe6426504e26d74bf2701d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index-1.html","c09ee79a0ba9696f9a216a5a328c4f3f"],["link/index.html","e4896e0ef4df9a30457f8db7dc510555"],["movies/index.html","178f6d603f39bcb96d9689cb19e909b0"],["music/index.html","41418c2d0484b3f420478b079fe9d8b4"],["page/2/index.html","01a554cc8c3daf487810fab6c442a183"],["tags/AGV/index.html","3d8f1cec339a53f60ea60bede09a2815"],["tags/Github/index.html","4c59fa4eb286c5b592c3ac2c87b3a76d"],["tags/Move/index.html","d833e54f5c63a78e979b36825de76ed1"],["tags/Plant-Simulation/index.html","19ae98fabb25c2c770d45a1cb01739bd"],["tags/Wordpress/index.html","18df155c62188dbe80a8682bc93c0b3e"],["tags/cad/index.html","c8dff0c93495459ff761acd052c8c597"],["tags/hexo/index.html","2485d7f450cd0edd3b0bfecf5a07387a"],["tags/index.html","871f8a1e734d5a14156239796be3ea77"],["tags/transferstation/index.html","9e1d5595852754e7575c3a594c3687d0"],["tags/写给宝贝的话/index.html","68c4cde905ba6dc0506cf5311163f2ad"],["tags/学习/index.html","91f36fef23a1890f17cf82c4f0fe88be"],["tags/生产模式/index.html","e200c05e78bc8b1161dbea8878f66f51"],["tags/科学/index.html","37488da3a6cdda8d29301384c00085f4"]];
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







