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

var precacheConfig = [["about/index.html","a08b6a450d366967c47457d2b73ba4cf"],["archives/2019/12/index.html","0a10e353bcbe72a78dc1f17c549620d3"],["archives/2019/index.html","ef6b4b0e06ba845ebd33fa9a584ca20a"],["archives/2020/01/index.html","cb8a67727928030ee2ce5a7d4d7c4ddf"],["archives/2020/02/index.html","b16497ba079fd9d633ccf87cec44e9ee"],["archives/2020/03/index.html","2b35c9cb23e1333fe637be6b00a1c237"],["archives/2020/05/index.html","7bbe125513ea5daee1bfb5cedc6b471d"],["archives/2020/05/page/2/index.html","6012f7830f0fb73adedb26e0eeea7b97"],["archives/2020/05/page/3/index.html","118be8f3f2467eb5ffabbec739e9c18d"],["archives/2020/05/page/4/index.html","ec03c3d88fe04006334323255af18f37"],["archives/2020/index.html","f836c0cc2d2aa19c58908bc93cbcce6e"],["archives/2020/page/2/index.html","7ddc30f8d04cf2a37e7f4adb75f0cdaf"],["archives/2020/page/3/index.html","ddaa199d4248e7c7570980395921a23e"],["archives/2020/page/4/index.html","eca83ba66e17f9d79abee13317536f88"],["archives/2020/page/5/index.html","b6813249a80ed22817362a14f93ba08e"],["archives/index.html","5edb71101ac62096acec44bc005cea00"],["archives/page/2/index.html","6b38b1ad9a669042b0c48c09e1375bc3"],["archives/page/3/index.html","34110e54f22fc700f0213e30358b0134"],["archives/page/4/index.html","9efb0be382d28f1690204988f8de6cc9"],["archives/page/5/index.html","736e823595a4c017da228d9586aef715"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","14acb936867e3a4880048ccec21fab1e"],["categories/Code/index.html","65d95366575774c8b7a447d49fff0e29"],["categories/Plant-Simulation/SimTalk/index.html","5c7b52893ce9ea7d0f01869e004f0211"],["categories/Plant-Simulation/index.html","89ca8aa1729543738bbcd97ff15ee7d5"],["categories/Plant-Simulation/实体/index.html","a9934a2349db550320d393e160c2d46b"],["categories/Plant-Simulation/常用代码/index.html","c4f5bcf8ed5f5327ee778b0049252586"],["categories/Plant-Simulation/常规操作/index.html","9e7ffd0ecfdcc2905399b66c796de760"],["categories/Plant-Simulation/模型/index.html","7683c9393c7769adf015f3ce424e0a83"],["categories/Plant-Simulation/背景/index.html","d5244fecc266f2d6264790120d5f735d"],["categories/Windows/index.html","ebd52daa231597191299d92d4370203f"],["categories/index.html","6896e1208490e5fa0ab532ddb66de5e8"],["categories/nas/index.html","c4f3b5625a77063dbedda554d57c8a90"],["categories/ubuntu/index.html","0741eb5126cd56c18054fe507fef2f9f"],["categories/ubuntu/ip/index.html","d9ad1da24d49b1929d034c8543480af0"],["categories/ubuntu/下载/index.html","bfcc3d415cff35cb910041ab3bf23a45"],["categories/ubuntu/命令/index.html","f8ff6b3af70e9b5b821f92a4f2f9395c"],["categories/ubuntu/配置/index.html","f3ac1bdefeac6be5afa033a07a0ca6da"],["categories/博客/Wordpress/index.html","123d6c98effa20aa9a16b2b1a2b70bdb"],["categories/博客/hexo/index.html","f099b96396f882318b966a79cfae592b"],["categories/博客/index.html","fff5cef56d6bd126669b5f668907b656"],["categories/博客/page/2/index.html","1e11c7832cfa23fcddba045298614be7"],["categories/博客/typecho/index.html","fc39d2765731e20e48c21102dd1a5735"],["categories/博客/统计/index.html","a6d34d79fd26500c3ac2fd78cfd39c5f"],["categories/宝贝/BB/index.html","fd052b45edb0bf341738fb4bade70f67"],["categories/宝贝/MM/index.html","27340c509515f10cf8d306cae0eacddc"],["categories/宝贝/index.html","8cefe7416291eee57b8f16cfac2d7382"],["categories/思考/index.html","073473c93d44de276f694301dbe2a8b1"],["categories/思考/职业规划/index.html","21545585abc6b0a953664d3646dfbbaa"],["categories/科学/OpenWRT/index.html","a2be765dd74fb9ee1feeedf77a8ca64a"],["categories/科学/index.html","8615d9f0e243c1b392fe6ac31fcd4959"],["categories/科学/手机/index.html","2aace02906018d5d328179a7709be9e6"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","04d56507f60548066e06d1d77242e17e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","64c558043f4f4883098294620b629d7d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","45fbccf45a72b34a4db65a17a510ab32"],["movies/index.html","40df8bdb70bd8821b29f53807bdbfe54"],["music/index.html","89170269e219a05ca5441d72f0a4c6a3"],["page/2/index.html","f5a1bf462ec58859d7dfb7afdace839a"],["page/3/index.html","f8eb02c20181666cbef512defc9060e6"],["page/4/index.html","a355601d494368d612fa56782699a8c6"],["page/5/index.html","29213ad670241188875aa63dc930266d"],["posts/2019/12/04/00/35.html","943a983cb8433e6e987095ad46dbefa3"],["posts/2020/01/15/20/18.html","135a43cf5efcd1c1a249b9729e33563a"],["posts/2020/01/16/22/18.html","0f684d301c689bb3300ce0c9d29547aa"],["posts/2020/01/18/22/18.html","c33ecfa06909f35454e0d5718567440d"],["posts/2020/01/19/08/29.html","d9a71e13c46bbfc5f7b29ff97d5bdebc"],["posts/2020/01/19/22/18.html","6de99d2d4cc98db5cbc42764d44d7830"],["posts/2020/01/23/22/16.html","6348e34beb7a5544ee7d2b1fb7f63d3c"],["posts/2020/02/04/20/18.html","9775ddf690d5d86dd12f180e0735a6d4"],["posts/2020/03/12/00/20.html","1a0c27ae0cbe08109c431ce4373df04a"],["posts/2020/03/20/22/12.html","19cd0e24bf31c9bf47f2ea02bdb18a61"],["posts/2020/03/22/18/24.html","cf17e437d64dcf316a62858776b71af8"],["posts/2020/05/03/22/12.html","22fec7ef9a14c2e3992446a70e085420"],["posts/2020/05/04/00/05.html","ca601ef067c34e626cbb3dc7fea2253e"],["posts/2020/05/04/00/09.html","816c7de495282c65942f5887dbcaca1a"],["posts/2020/05/04/00/15.html","ae42978441953e04e35c3191c9b1309f"],["posts/2020/05/04/14/58.html","be949bc0b90696367e813c17a8c549b3"],["posts/2020/05/04/17/01.html","ec4f3ae0edadd75fc2e194d4b803e50f"],["posts/2020/05/04/17/19.html","99774f752ed38b3138c93452663b4683"],["posts/2020/05/04/18/18.html","75c1c9e7b47933dca62219269516aaf5"],["posts/2020/05/04/18/24.html","15baf5e1ad36a434719b067ae2181ce6"],["posts/2020/05/05/11/12.html","725c5a934bab8e3fcea8a64c98544d1c"],["posts/2020/05/05/13/20.html","597ac54eee910e12480e878fa67f08d5"],["posts/2020/05/05/15/20.html","3c818bc015d8b891e021ed85ced5e7dd"],["posts/2020/05/07/21/21.html","522172dc69da25f1dc23051ec3bd316c"],["posts/2020/05/09/12/20.html","50e91d1f28228a4c975f0f2bf844fabb"],["posts/2020/05/10/18/18.html","fbbf54f9f64c8567ee46a726be470a4e"],["posts/2020/05/10/22/18.html","abfe9901d1825d9410ed795918224dd4"],["posts/2020/05/12/20/18.html","1ca8d5734f283cd4503f2447a12e228d"],["posts/2020/05/12/21/18.html","3a82f969ecf507309209f0c99119f04f"],["posts/2020/05/13/20/18.html","045fa9a34898264870096e72912fb10b"],["posts/2020/05/13/23/58.html","a822d82943e796a090dc1e10bd62f1c3"],["posts/2020/05/14/11/18.html","fb789fe8328c14098e2fe87a620b71ef"],["posts/2020/05/14/12/18.html","7d3cc317b1959f2fd5bed1e4135aa87c"],["posts/2020/05/14/20/18.html","1d6684aef010ad15e735e6f971c642ee"],["posts/2020/05/14/20/58.html","3e0d82a219f39568767fbec913c9907e"],["posts/2020/05/14/21/58.html","48d9ce3db80eda95ebf6a1491c5c6be0"],["posts/2020/05/14/22/58.html","0ce096fd25cfb64e875bc1077db53fa6"],["posts/2020/05/14/23/46.html","7ee5f2eae4e72fd09d8a7ca123c856d5"],["posts/2020/05/14/23/56.html","d7996e053e5b9eef6f4bcddc951ae919"],["posts/2020/05/14/23/58.html","3a2d3dca55c77994f1df4b7d059da2da"],["posts/2020/05/14/23/59.html","7ed8e6beaa013d55048067cc01a0cb93"],["posts/2020/05/16/20/40.html","8ca3c6b9bb436783716aa9a6bf22b1b7"],["posts/2020/05/16/21/40.html","cb9eab5538d72cc425e1dbc9a02c4566"],["posts/2020/05/17/21/03.html","168fe8f76f89d631bb2a7bd3a9ef1030"],["posts/2020/05/17/22/42.html","7201d5848d38a4d7f8c3f88d6834b6d9"],["posts/2020/05/24/07/03.html","c07942acee66560b30a5d384f42adc4f"],["posts/2020/05/24/13/03.html","09bb34b7140134d36c47ec2d05712e85"],["posts/2020/05/25/13/03.html","a4fa3a8982a58f77f101e7b5c8cdcd72"],["tags/AGV/index.html","de5b5df8656c80167e15847415660090"],["tags/Github/index.html","9fc95a46e4c2f834eef98d4f1001724c"],["tags/Markdown/index.html","635ebc5da10a10ac7d9a01b95c5b78c3"],["tags/Move/index.html","5acdb080576588db9cebc926ef5bc69d"],["tags/OpenWRT/index.html","eca86792e2d618b8488168c12c234889"],["tags/Plant-Simulation/index.html","8d8411f4756237edffd00ad17dc5360d"],["tags/Windows/index.html","25f33d7171ece43800b256e94dfab966"],["tags/Wordpress/index.html","84243c073639f48a7b4e98caf690805a"],["tags/buntu/index.html","1edd6dcca89067f83efc3e124fb4ab58"],["tags/cad/index.html","da98a85c214b261048aecbe4787572cc"],["tags/coding/index.html","e036d199891b6bca620f8d0b94515fa7"],["tags/h5ai/index.html","c1d1b90322140303dcfdb17a33bdc5c7"],["tags/hexo/index.html","04f350fddbab5f36691c13f01d42c67f"],["tags/hosts/index.html","f2f70a41b8a1414ecdb0c81eed85a0a0"],["tags/index.html","db9e463200870b87fdb3d8fce30395ee"],["tags/lychee/index.html","c84c30448f75fa64c923f3b64d81b6f5"],["tags/nas/index.html","511aceccc5243205e8eea0bedc214d79"],["tags/tpyecho/index.html","555975eba0a198a2d32709f413e24eb4"],["tags/transferstation/index.html","170b5301d0dd2fed91da8eca55451711"],["tags/typecho/index.html","722b9555202093572dbf2d58e4447505"],["tags/ubuntu/index.html","496964ffb3bd74bda41a61401ed8714b"],["tags/写给宝贝的话/index.html","690fa2f2b7688291d3061773c47073e1"],["tags/原创/index.html","ba1462ce27f0c3332b93209561033d0a"],["tags/学习/index.html","eb031a02578395245d214fd7937df3fc"],["tags/宝塔/index.html","b11ec1d1cd46113ee019533bb33a57c5"],["tags/生产模式/index.html","d84f82ccefaa87b4079cc70a40f4a63f"],["tags/百度客户端/index.html","dc9eaefbcb35101f4fdd70f2aa99526e"],["tags/科学/index.html","88c3e82b0d59b7cc4c7a0b11968d9699"],["tags/统计/index.html","43d3ef8df9af7c5c6edb6dc8795af7c1"],["tags/编译/index.html","844b8a873b776d10898d8a69d5907fe8"]];
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







