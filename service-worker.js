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

var precacheConfig = [["2020/01/23/2020-01-23-今日武汉封城/index.html","f4f2669ca60ac37df69698350c0f505b"],["2020/03/12/妈妈写给宝贝的话/index.html","e332ca8abeb185a18ae59780cd60ad56"],["2020/03/20/磨人的小天使/index.html","12835c84e3396042633db3eabb341332"],["2020/05/03/hello-world/index.html","bbafeb33c91dc6aef4a7405bd0aba4be"],["2020/05/04/AGV的用法/index.html","f159dcaeda5841a55ad77c8d61ff3181"],["2020/05/04/Github创建文件夹/index.html","1ee8908e034b5aaa9ddc3df6ce38de7c"],["2020/05/04/Move的用法/index.html","839fbdef60c75cd1f6a33c6698a07300"],["2020/05/04/PlantSimulation常规操作/index.html","464ba71cffccf276b313ae971310fd58"],["2020/05/04/TransferStation的用法/index.html","f8bcf142eaccfe5a7ee65a224c1b390e"],["2020/05/04/Wordpress问题解决/index.html","79c2f6a434176b0498465ef9cfc63c2e"],["2020/05/04/无科学环境连接谷歌账户/index.html","8ac47726972aa71bb21f9ca54738fcbb"],["2020/05/05/Markdown的一些小技巧/index.html","031c816800788b27aa77cef669324b29"],["2020/05/05/导入cad作为背景图/index.html","8ea14c44ca4a48b2f7dadc13ceea3330"],["2020/05/05/推动或拉动的生产模式/index.html","a1ebb480f9bb1b4a877a3d8590ac8e42"],["about/index.html","9a4d50e3dcb98e694acb85c6386f275c"],["archives/2020/01/index.html","e4ad7001d10656629f239750b0367225"],["archives/2020/03/index.html","179aa220bf2964abaefc5ac2f875c39b"],["archives/2020/05/index.html","4ce02b91af8b98a5965faf6fd1f7bb02"],["archives/2020/05/page/2/index.html","66611f4dbe459aa73424bc03edea0338"],["archives/2020/index.html","8f222b90e43686ccbb297e60e901b6f7"],["archives/2020/page/2/index.html","0d65de515e059680a782bd9c63abb260"],["archives/index.html","58e77f1e37e0f6ad09e5004bce3c6025"],["archives/page/2/index.html","7c0f12e4c517af6798981b3dee99078b"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","e522a1eb6271f9e8c7ef61ae30a51af0"],["categories/Code/index.html","c174ebb91baade6a2427dfba1ae2c242"],["categories/Plant-Simulation/SimTalk/index.html","c254b6cc0980f876abaca62c02855ec6"],["categories/Plant-Simulation/index.html","f8a52c9d68edd6950d753a95ca093e34"],["categories/Plant-Simulation/实体/index.html","2c3a69b985047e50c5cc03bba7c3f1fc"],["categories/Plant-Simulation/常规操作/index.html","77eb7b34b7f8d559064ce6f72e8901c8"],["categories/Plant-Simulation/模型/index.html","d03237bbea46141f3da1f43caf541e95"],["categories/Plant-Simulation/背景/index.html","de614a85f6866e8b78d96b247a8549e3"],["categories/index.html","484817dadf8bbe107eeeb38b03c1a30d"],["categories/博客/Wordpress/index.html","3421c428042559f66ec6ec721ca13218"],["categories/博客/hexo/index.html","e0286cb98f0c6d16775ebd4244dbb428"],["categories/博客/index.html","72bd572788bc5ed8154852e32d432a44"],["categories/宝贝/BB/index.html","0a2992460f02de6bb72b1b44d5276f8d"],["categories/宝贝/MM/index.html","3ca9e0c3d8c4f1f22d9af6f26467918d"],["categories/宝贝/index.html","f16c740785bca5cdb2963fdd18a01cc8"],["categories/科学/index.html","2ff198489998ee4a8620801a1cd38174"],["categories/科学/手机/index.html","98aa6b2f71f8e87abb8104eaac85a916"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","678ec06a74fc9221caa1c950e57af125"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["page/2/index.html","aed316bf1ae9f2483291463846be04ee"],["tags/AGV/index.html","e2b7722bd1495e36e7ed55dba5ab3955"],["tags/Github/index.html","5d6631476d27de671a65a411ea73b1bc"],["tags/Move/index.html","d05041108c043498f0a58b60db78e732"],["tags/Plant-Simulation/index.html","ce2fbfeb2aba0af042d626d120012795"],["tags/Wordpress/index.html","cce7b315123851e8ad2364a182763ae8"],["tags/cad/index.html","7a9f755eee47e2e2957ab260f05d28ad"],["tags/hexo/index.html","4fd8971e085db0a668d11825656fda46"],["tags/index.html","ed33c3970ed7308f4b493e9080272640"],["tags/transferstation/index.html","42dce3e43950431f71e10de8bd309e7b"],["tags/写给宝贝的话/index.html","1c123031acedcd5da7b9518e6fa29828"],["tags/生产模式/index.html","1791df2b74e85d0c4a4547023a2f5acf"],["tags/科学/index.html","8b779faafa68f0e001febeeb71c317c9"]];
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







