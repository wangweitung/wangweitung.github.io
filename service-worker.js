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

var precacheConfig = [["about/index.html","7b94c70e58dca53047f8ff91a358b40d"],["archives/2019/12/index.html","44e444d2051f4149445e08abe771a1e3"],["archives/2019/index.html","e73a106c9768498e1f70d9eaca9f7f7b"],["archives/2020/01/index.html","ddea5cc82870d122f44cf87a3e7bc9a9"],["archives/2020/02/index.html","f1cf6e5b1fc3d5edafa0c2d5754a3f0f"],["archives/2020/03/index.html","0a1260fcac083fc9ecb3eb9d86dc1df4"],["archives/2020/05/index.html","9014fddcbbcaddd26990bad281260ed5"],["archives/2020/05/page/2/index.html","1197fe3d509dabc7795fcafee84f202a"],["archives/2020/index.html","efbf99b0d45ef6cd74a23b0e5f9b7440"],["archives/2020/page/2/index.html","3046d98d3b7c72f77e04b98a15280211"],["archives/2020/page/3/index.html","1cf6789ceae526128b276642eb48638b"],["archives/index.html","be647a5d9fdd617b76d8e541413db04b"],["archives/page/2/index.html","20cc4e6ea45ad0a06adfadb228a303d9"],["archives/page/3/index.html","3c93369d5e94752c543ed647f4be9b71"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","67fcde6ad0af0d0a162c060930ce61c9"],["categories/Code/index.html","96c584cbf154403d0c7340e54e40957d"],["categories/OpenWRT/index.html","ed7b949811e205c4d131c2290baede3a"],["categories/Plant-Simulation/SimTalk/index.html","fb319a826b207138e8f1fe716b4d67b1"],["categories/Plant-Simulation/index.html","a2c798ce8b35b0383169003324137ddb"],["categories/Plant-Simulation/实体/index.html","14ae4769138f6171e3fd0b919becb722"],["categories/Plant-Simulation/常用代码/index.html","f5acb85667d321b2d1c49123755e79c9"],["categories/Plant-Simulation/常规操作/index.html","d39312ba2e9e9cb07ef470ce9cc21218"],["categories/Plant-Simulation/模型/index.html","ccbd2f0e76bc60068c82b58d056ac2a6"],["categories/Plant-Simulation/背景/index.html","87be6db96842c9fec458d3b80f56877f"],["categories/index.html","d8df5e9c85f08cf7963f0a9e4d8b6e27"],["categories/ubuntu/index.html","d758d9b39184b1551daece3e714e1d0d"],["categories/ubuntu/ip/index.html","287a79a6f2c59226679c045786a573a1"],["categories/ubuntu/下载/index.html","ba6c69faa67c4a597d4107c107ab5c71"],["categories/ubuntu/命令/index.html","d9d4221fcf8586531dab1968e5b3edf0"],["categories/ubuntu/配置/index.html","0ee8d56dced052498242311a7ec8a433"],["categories/博客/Wordpress/index.html","3271dd9b8475064579e343ed050b4e0f"],["categories/博客/hexo/index.html","4e11dd86a008d47aeb04ac08678dabc7"],["categories/博客/index.html","5b10dec0e8496a58e99af79ea5e9a9f7"],["categories/博客/统计/index.html","c1610f9123302a11aad6bed63d998728"],["categories/宝贝/BB/index.html","02cf134bba9decce5dbf3ebf0765e585"],["categories/宝贝/MM/index.html","9fa99f6325710627554a3f936c8140ce"],["categories/宝贝/index.html","676dea5026a49bd7b9ab6e61798dd7bb"],["categories/思考/index.html","5bcdae601f131dc39e78fd86c994643b"],["categories/思考/职业规划/index.html","9066017d68eed6ff98c91ff24a5bfcac"],["categories/科学/index.html","ff38f08fc5eef364c7f9597fc29b9124"],["categories/科学/手机/index.html","928651a14d9d5e0e97b45514c5ee804b"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","766f2738166ebc908c62110566e16663"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","aaf1dad2baaefe7a4f221d61ce3ea9a7"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","fd2d54cab4f451d4aa3482167ce77a02"],["movies/index.html","a7ae7d6930b817063b66ca6a69d83730"],["music/index.html","bfe3d223764beaa5c5e7fd69525248c6"],["page/2/index.html","e559fe9be1d4a24679346237904f810e"],["page/3/index.html","eba6831793fc73b19237842dc5930e1b"],["posts/20191204A1.html","24a8b0601175235e6fc656b9241bcdf5"],["posts/20200115A1.html","9897e88f42eb9999e5ecb688209d4bf2"],["posts/20200116A1.html","1a8926838fa349cc0a595a239ef4c27b"],["posts/20200118A1.html","d76eb94a85c1badcf8ad3403de1327f4"],["posts/20200119A1.html","f8b5d93bcb04bba8ea7c663cecfb02eb"],["posts/20200119A2.html","afdceb94909f715f4bf2b8ece37a718d"],["posts/20200123A1.html","ff43075e95e100ed890e03dae2097737"],["posts/20200204A1.html","7782a815827d1da86f95705c077f2264"],["posts/20200312A1.html","68cf4ba9427632b1c55920113b49b2e3"],["posts/20200320A1.html","37f15fbbcec0d55edc58eaaf68606575"],["posts/20200322A1.html","4600ec243d46c6e3f20622886600f20b"],["posts/20200503A1.html","a9b44d42bc90e8ca723a472a6a6c59f7"],["posts/20200504A1.html","de18a94faef96b70eabfbdcb55681622"],["posts/20200504A2.html","c95ccad8ab857704d706c3581ce09c13"],["posts/20200504A3.html","f81f8f71d70ceec09cd0334d856b7164"],["posts/20200504A4.html","bd7413e7b45829ef4d13259c22b0920c"],["posts/20200504A5.html","5feb72f7f47530ceda169901208adf18"],["posts/20200504A6.html","2c785bee57db00fe9cd8a09e79c1496b"],["posts/20200504A7.html","f9156ee22a9c2d8fa2886b9c8cb2457b"],["posts/20200504A8.html","c50b2f3d51f05c6602d2beaf3d90049c"],["posts/20200505A1.html","01f644d3b719ee9890c246a7e527bace"],["posts/20200505A2.html","fc6617d4d6008089a32cfa55fc9d0203"],["posts/20200505A3.html","83f9285032b86c1037f1db1508a3c9f7"],["posts/20200507A1.html","50a1d99285fb326eef36e5aad3efa270"],["posts/20200509A1.html","997400b7978add5caa47f2a47c74acb1"],["posts/20200510A1.html","15cbcadc3998f5f775b1515387c38c98"],["posts/20200510A2.html","1045afba9d4be06bbbe74164537b42c8"],["posts/20200512A1.html","f9fe2c1b67aa9ec960fa2d623b840e7e"],["posts/20200512A2.html","34a21e33acd179ae2e070967c7d3387d"],["posts/20200513A1.html","fa28568b99f4a5bc07d2b496bf6625f7"],["tags/AGV/index.html","7226d89c14e8478a13854aa844be4e50"],["tags/Github/index.html","63d63834601ca88ace31d1a3b12bc40c"],["tags/Move/index.html","44c24487caaca321e36fba75c8b81ada"],["tags/OpenWRT/index.html","2b03ae454c61564c9957950a54a96a7e"],["tags/Plant-Simulation/index.html","d7e48aaba314bcc34b8342cdbfc976d0"],["tags/Wordpress/index.html","f779ff11b32bd1a36859b34367c5467b"],["tags/cad/index.html","cdf6a1aadab23e4bab2cc367bb4cd1d8"],["tags/coding/index.html","8866f86f658c036f60326ae4c79104a4"],["tags/hexo/index.html","3832d1b83b61dbc2cd1d4263c1492433"],["tags/index.html","582e7aefbe43ca67da0c69fe116156cc"],["tags/transferstation/index.html","9fa16b76d028df5744b131aa0af479bb"],["tags/ubuntu/index.html","6e42d97f09fcb3647da5ab85252a99a4"],["tags/写给宝贝的话/index.html","bc6474e66f15c9598800065be122489b"],["tags/原创/index.html","aa1bcdbaf3cb519bc705e205ed8f75b5"],["tags/学习/index.html","12399b4e824ed327fbb245bfef2f8178"],["tags/宝塔/index.html","da35d0b31e4d41007461403c6bbd2b5e"],["tags/生产模式/index.html","688df1e7d544be963d13680c0ea2cd6d"],["tags/百度客户端/index.html","162d4b6a40f86a33da3b7ef42be68fbb"],["tags/科学/index.html","118ab066c3f5862d9e8963258c7e86bb"],["tags/统计/index.html","8355c8bbea697659ae7819f1fea07313"]];
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







