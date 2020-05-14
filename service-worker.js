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

var precacheConfig = [["about/index.html","c7ca0d196f0aebcbcb235da20e618012"],["archives/2019/12/index.html","22c31065c8a6476a666f467f7e271f26"],["archives/2019/index.html","db6abc3112a2a10ed4713306ab8e0622"],["archives/2020/01/index.html","9d703f95fa958bf609567e26321f7188"],["archives/2020/02/index.html","0f3d68afe6dbe1e21aed7e3302aac075"],["archives/2020/03/index.html","f3c78b93b10b51a438382d28a0c1f65f"],["archives/2020/05/index.html","04dab83d074e2e276e87fb04843ba28d"],["archives/2020/05/page/2/index.html","8b726b03cde23f2141b974a81fada6f2"],["archives/2020/05/page/3/index.html","2590a70af563a67a86d7d0d17fc98fb5"],["archives/2020/index.html","34181502dbaa95afc8342b42a471e68f"],["archives/2020/page/2/index.html","14b0c121953d510f33e350ae591e1bcd"],["archives/2020/page/3/index.html","329a54041fa9cdf209b8629e5f2a5a76"],["archives/2020/page/4/index.html","466c7945b9784c4ec335f374a2e68514"],["archives/index.html","3356f5e6213fbb20aa48b15f8803f7f5"],["archives/page/2/index.html","60c3228466bec3fbbf3e99521bd3b06e"],["archives/page/3/index.html","e41a7bdc92e56bbe319f0355bf1b1905"],["archives/page/4/index.html","ef7363e0e2803d3834254c4d78d13ea8"],["archives/page/5/index.html","c99f587a9b44ec76cc2b3d8adeff4169"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","9ce272d41f575473e3629862aaaf08a5"],["categories/Code/index.html","9f18645f78fe31675efe5cfe1e31c9b1"],["categories/Plant-Simulation/SimTalk/index.html","7321b8d07df622623ca0f36cbd05b2df"],["categories/Plant-Simulation/index.html","a70110f6fb6a5b3323fffea573b823da"],["categories/Plant-Simulation/实体/index.html","e65f751a08fbfe63ab12eae896bfe83c"],["categories/Plant-Simulation/常用代码/index.html","798abc1b13ce602bfcf98e46c034dd87"],["categories/Plant-Simulation/常规操作/index.html","82c9cef68746ac092b93ba6e02ae6327"],["categories/Plant-Simulation/模型/index.html","bbb649a2cd30c934412ef4eceb9283d4"],["categories/Plant-Simulation/背景/index.html","1c4a6da0a18814601e701f3c11a93e5d"],["categories/index.html","539092501f5a60b4c9640aba8edc1c7b"],["categories/nas/index.html","f5ce304af2cc9583b22ed5ed8efd3a5e"],["categories/ubuntu/index.html","be53444be660a9f873c297d43c0239ab"],["categories/ubuntu/ip/index.html","fc779eac5dca1a3e7c3722e60dc4752d"],["categories/ubuntu/下载/index.html","69eecdca8abfa2a736396b9bad8ac8db"],["categories/ubuntu/命令/index.html","1f3006d1813bf422afa6f8744ad8882c"],["categories/ubuntu/配置/index.html","5769da94040a5b65d02315afc43199c7"],["categories/仿真/index.html","6c0fc00b2258102b90f950e93695ac09"],["categories/博客/Wordpress/index.html","03b90dd10d27b920713504c078275011"],["categories/博客/hexo/index.html","2cef5064ca9c21ad8d91df002e8ade5c"],["categories/博客/index.html","d5827a03a8814058da14192a0db0b592"],["categories/博客/page/2/index.html","42f06d1e74288c1e76219f1e7f74753b"],["categories/博客/typecho/index.html","47bb01f22b3add984a45859f533955e9"],["categories/博客/统计/index.html","7ac27099f4c3989b7b6eda96f7aa1db4"],["categories/宝贝/BB/index.html","219c25dcae3ee1a4d795d492ed82131d"],["categories/宝贝/MM/index.html","534459a3700808648a1518d52cb799bc"],["categories/宝贝/index.html","0824ec31e594c0996b42087c7b479b5b"],["categories/思考/index.html","9bc49cc46362b578164f2d4df422494a"],["categories/思考/职业规划/index.html","928f77530c316ec53fe3d3203d7f066e"],["categories/科学/OpenWRT/index.html","f3924c712d092d21f3cf289654917629"],["categories/科学/index.html","ad3da1c63e0d5126a2c48f6993caf3c9"],["categories/科学/手机/index.html","284afd3c3df3db1c6a40144f1f8da752"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","31c1413aed81f29cbe08319dc0374636"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","104fea5bb1767129cd5547227664a607"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d75aa29d5644c0f8bcf51c2a37262996"],["movies/index.html","52fe3982b488438ef35918977a51ac27"],["music/index.html","523c31688e83fc0c5aec7bbd6b166f56"],["page/2/index.html","040a8c63ca64b196c4ee6fbaacb9bfd0"],["page/3/index.html","500ae54112c3f75e626efe7959dd5a78"],["page/4/index.html","6dd5c6e0f7700a41098a30f069ff7de9"],["page/5/index.html","d89cc20f375b26ca6176f08e05287dbd"],["posts/20191204A1.html","13077e8afef906acb04f821205fc3033"],["posts/20200115A1.html","b4ac0bd1e21f6dd2d2dc4d8873bd7428"],["posts/20200116A1.html","d10435ee6ab3b4754637af2af7ad2abe"],["posts/20200118A1.html","38adb03f3edd9d376682919153ce1ec2"],["posts/20200119A1.html","93bce66d0fce0a296646bd8e7e8d17b8"],["posts/20200119A2.html","0eaa152f0a519921291038cd143a85de"],["posts/20200123A1.html","51617b09ba5d0f9014127823433b23a5"],["posts/20200204A1.html","da22503a79e8a0554cf2754e0669f9ca"],["posts/20200312A1.html","5d9636fdb380d8ee7d66926cb1415e7f"],["posts/20200320A1.html","06246991a3a18bb49267d3383a956c74"],["posts/20200322A1.html","1c5a4aecd3fb0c21b8acc624bef5fa3b"],["posts/20200503A1.html","f8620c010d4c8616ce642ce847ea3d97"],["posts/20200504A1.html","7c10fbbd10fceec4a7eef99ec8da0d0a"],["posts/20200504A2.html","01af40922c51cd8defcf47be75f74858"],["posts/20200504A3.html","fd2934500b4884619e08f6992543a3f7"],["posts/20200504A4.html","02d8279eee719aefd4ac96f674b3dc2c"],["posts/20200504A5.html","fb609c6a32c744e2da38884969b7c28d"],["posts/20200504A6.html","a82c5aea6733413feede5aa334776704"],["posts/20200504A7.html","0796b104b88b3603c48fed5e00f2622f"],["posts/20200504A8.html","548408bce06b11aaa631ca9b2993c193"],["posts/20200505A1.html","8ee1a0b238804e8081b306cc6d8d8ae5"],["posts/20200505A2.html","7a43794d2c26c6536961db6024583420"],["posts/20200505A3.html","0699ddb3611b67406dbab5191f13853c"],["posts/20200507A1.html","98aac2fe4c74d85a39deeb2c9194bc69"],["posts/20200509A1.html","ef43b1911870f5e7fd3412d421b28555"],["posts/20200510A1.html","42f44ea5f24e4b02e45ccd2bd1c231b6"],["posts/20200510A2.html","1e90f7328dfb66aaf3af13ca54c9602a"],["posts/20200512A1.html","a2f64ba16cc79fcd5ca5991d56ebb019"],["posts/20200512A2.html","b54da9726d05ecc7eac2e3e6450b5fb7"],["posts/20200513A1.html","3e2961cf82cc29c7308bc1669192b0c9"],["posts/20200513A2.html","02b0af0cc43f4b63ab138a735256f1d2"],["posts/20200514A1.html","9c9de3cfb930a9157016f5e8995c62f7"],["posts/20200514A10.html","f2823cb6a8b3852a271da8ba441de3e4"],["posts/20200514A2.html","672d3a406317a05b8fb68af1effb6567"],["posts/20200514A3.html","a087b277919829429a6c8d66b10f6798"],["posts/20200514A4.html","8c8cdc8681db39c53ff13192efc8e8ca"],["posts/20200514A5.html","9c08d276bba4f1450e148a6d09aa7971"],["posts/20200514A6.html","90e29abe8636658f45819acbe0c3a126"],["posts/20200514A7.html","59e883a01488f59679262a3d44a69a91"],["posts/20200514A8.html","ba5d0bbb245105795e6b6f5ed827e5ba"],["posts/20200514A9.html","f2ec782e4ced9a590e9304029bbdeb75"],["tags/AGV/index.html","79380b53ff1513fa8ee21f6d7045936d"],["tags/Github/index.html","956bf0b7c7228efb61f92483950777c7"],["tags/Move/index.html","40e26e8118e3417c42124da03d2e2e4c"],["tags/OpenWRT/index.html","fe2a6f31563685c3a782ff3b9c60f357"],["tags/Plant-Simulation/index.html","57c56a7fb643e60a22f32c309812a179"],["tags/Wordpress/index.html","bb154537d11a2580eed6f30483f28beb"],["tags/cad/index.html","6f302085bd6817fa6b88da24ba7a1bf7"],["tags/coding/index.html","27b69f8576aec7224a85665978db3322"],["tags/h5ai/index.html","b1935e439aa4573ae3f73abdce0367ca"],["tags/hexo/index.html","dfa5f24e782f8ce53f624597e8d32878"],["tags/index.html","d3103235a97041284ffb76d1b7a509e4"],["tags/nas/index.html","40bb9e16ff4ddd7f26165589b6164493"],["tags/tpyecho/index.html","192004f5b51965d2f10bb4ff2d1c9b5e"],["tags/transferstation/index.html","2b72ab902737cee7525e19faeece4aed"],["tags/typecho/index.html","660566aa7a0d32aae9b22ea1b3edadb5"],["tags/ubuntu/index.html","eeb55ef401d85b1704c0e5510246dd33"],["tags/仿真/index.html","fde90d3c4065d520e74aff9004261569"],["tags/写给宝贝的话/index.html","8181c8e70b1d2acb50a1d3f1c2673f42"],["tags/原创/index.html","59f8ceb463f933adcde9fd72937b663a"],["tags/学习/index.html","6ce889c8e12505400062187403ee0946"],["tags/宝塔/index.html","2a4299ec707857ca2737cb978eca3e93"],["tags/生产模式/index.html","ef379c8ea865928877b1ec27dd407a0b"],["tags/百度客户端/index.html","8b342fc1d62e73139fe1524498154d1d"],["tags/科学/index.html","8536487d2285b5c9f96e558f21146eae"],["tags/统计/index.html","7ec8cc009c2e5ddcbede15995ff36d36"],["tags/编译/index.html","fb61f7fdd13c2a2d78093968e4ea6c0a"]];
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







