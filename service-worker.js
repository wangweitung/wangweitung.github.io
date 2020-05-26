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

var precacheConfig = [["about/index.html","c7cddeb50c8b2b00a5baeac0dc31a28a"],["archives/2019/12/index.html","50acd7b3ca10b7faa61c3a58a84351a9"],["archives/2019/index.html","513cce62022b21f144be633eba5b4c2a"],["archives/2020/01/index.html","8ff4765ec39911106b522e32feeeeda5"],["archives/2020/02/index.html","43eb4255bac98ad2d5197e2deff7752d"],["archives/2020/03/index.html","4f3c9be769869b4e5e1bad81e27a1a76"],["archives/2020/05/index.html","049c73ae7091bfe18ac6ea2d37343a7e"],["archives/2020/05/page/2/index.html","6b60ba95f34b67e051e03de9345002ab"],["archives/2020/05/page/3/index.html","2d5adcfacb168ebce382d55d019bd7a4"],["archives/2020/05/page/4/index.html","6cb3ab05beb18577cee34c0c18bc696f"],["archives/2020/index.html","983abcf8d59bdeb40cf129f7843ba927"],["archives/2020/page/2/index.html","b07efcbf19ef6c55978f72c68dbc0420"],["archives/2020/page/3/index.html","e5791bfa4676a08998d57d47fa211a07"],["archives/2020/page/4/index.html","e38e2272c7f52778fe5d39463c75c062"],["archives/2020/page/5/index.html","0eb057311f6ea752390cb508c2b962b8"],["archives/index.html","f6730fdc27608fff4969530d9b00598f"],["archives/page/2/index.html","e0142cfa7d9b9a52cd376aebf04e4605"],["archives/page/3/index.html","674660b343e75d934c138d38a378430a"],["archives/page/4/index.html","a9032e2d9b90ac1029e3407b61647ddb"],["archives/page/5/index.html","13ce4ecbbd1ec8830d001fe6a6df4df2"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","712b1a749fe83c920a466fe3728857c4"],["categories/Code/index.html","13e6fb33ce9d4c8e1b0cd9d93cf0ed04"],["categories/Plant-Simulation/SimTalk/index.html","78776dcbcb5ff601d80c74e157a2a123"],["categories/Plant-Simulation/index.html","b3422e1b40447ddc4f1f4c5c702134ba"],["categories/Plant-Simulation/实体/index.html","00bdab1f0f03ee518b08cde207d46fcc"],["categories/Plant-Simulation/常用代码/index.html","98a627a891d2339bb189293b36fb67e3"],["categories/Plant-Simulation/常规操作/index.html","62b778671ba21592a24a1c938f8d540f"],["categories/Plant-Simulation/模型/index.html","456139b9f6ed1f53dfba266f9a9129a4"],["categories/Plant-Simulation/背景/index.html","b4fa099a2326850d412cd7126730805e"],["categories/Windows/index.html","9ff5071097a96ef2480966d6840980f6"],["categories/index.html","54d9b27cddd72e38c3cc4430ac4246a9"],["categories/nas/index.html","b6c47113900b869a21c4805bf5758186"],["categories/ubuntu/index.html","3954324bd3ca6ed95c5b08c999a6435e"],["categories/ubuntu/ip/index.html","7749b0b4d2f68a2d56c12f376fe46a88"],["categories/ubuntu/下载/index.html","23f6b27f0f5b4e4f702ebf279d053171"],["categories/ubuntu/命令/index.html","e01e8b99aa326c9b3bf6f87dc826ea3a"],["categories/ubuntu/配置/index.html","a4bdf71350d4adc71b704434c375e9e3"],["categories/博客/Wordpress/index.html","12a7fe9b73d47e0aac7f9fa2ba89e193"],["categories/博客/hexo/index.html","a4825f8e75c3c27aab5cdc429fd6ff63"],["categories/博客/index.html","7498c918ba304be0144f96a0b192cc39"],["categories/博客/page/2/index.html","f64ef26e7e1b2600498539af063273b1"],["categories/博客/typecho/index.html","3f0f621564d69dacbf8584be414b358e"],["categories/博客/统计/index.html","8968c36ef445184df14dccdb18d85c11"],["categories/宝贝/BB/index.html","a831b7d57eb5ec70b8fd21c45a6c647f"],["categories/宝贝/MM/index.html","7e9acdbe3ec839619f8618f8dd0f17ec"],["categories/宝贝/index.html","a55119f83f2058f116eaa13808f6d9ae"],["categories/思考/index.html","cf9f277e29cb4939b83ad60fb4b4d439"],["categories/思考/职业规划/index.html","fbe0e713598da69dfdb2d3b43cf407ef"],["categories/科学/OpenWRT/index.html","6bc906e49078aaedf746af5575257e3b"],["categories/科学/index.html","ce07cfda878db0b0c517efc06baf77d9"],["categories/科学/手机/index.html","9fbf10acd25efd4c5ccd4a0d87897dcc"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","84297a63ddcb4dce910386369e4fb07f"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","8f8baaafdefc3382f802eeac757f211d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","47e9cf4a1499cfcfd7b88d8ee8ea51ee"],["movies/index.html","825f29cb0a5fc49d537b23ee9af77b97"],["music/index.html","f8ea991a579ae83c8b0affaaa23049a2"],["page/2/index.html","83bc85311069ed529838bb856b411853"],["page/3/index.html","7c8c4b8913376c191d88c933a3bdb415"],["page/4/index.html","519b4638bbc2d07ef0fd9776a0829b67"],["page/5/index.html","04553019fa0497c1829526223f7fcd94"],["posts/2019/12/04/00/35.html","943a983cb8433e6e987095ad46dbefa3"],["posts/2020/01/15/20/18.html","135a43cf5efcd1c1a249b9729e33563a"],["posts/2020/01/16/22/18.html","0f684d301c689bb3300ce0c9d29547aa"],["posts/2020/01/18/22/18.html","c33ecfa06909f35454e0d5718567440d"],["posts/2020/01/19/08/29.html","d9a71e13c46bbfc5f7b29ff97d5bdebc"],["posts/2020/01/19/22/18.html","6de99d2d4cc98db5cbc42764d44d7830"],["posts/2020/01/23/22/16.html","6348e34beb7a5544ee7d2b1fb7f63d3c"],["posts/2020/02/04/20/18.html","9775ddf690d5d86dd12f180e0735a6d4"],["posts/2020/03/12/00/20.html","1a0c27ae0cbe08109c431ce4373df04a"],["posts/2020/03/20/22/12.html","19cd0e24bf31c9bf47f2ea02bdb18a61"],["posts/2020/03/22/18/24.html","cf17e437d64dcf316a62858776b71af8"],["posts/2020/05/03/22/12.html","22fec7ef9a14c2e3992446a70e085420"],["posts/2020/05/04/00/05.html","ca601ef067c34e626cbb3dc7fea2253e"],["posts/2020/05/04/00/09.html","816c7de495282c65942f5887dbcaca1a"],["posts/2020/05/04/00/15.html","ae42978441953e04e35c3191c9b1309f"],["posts/2020/05/04/14/58.html","be949bc0b90696367e813c17a8c549b3"],["posts/2020/05/04/17/01.html","ec4f3ae0edadd75fc2e194d4b803e50f"],["posts/2020/05/04/17/19.html","99774f752ed38b3138c93452663b4683"],["posts/2020/05/04/18/18.html","75c1c9e7b47933dca62219269516aaf5"],["posts/2020/05/04/18/24.html","15baf5e1ad36a434719b067ae2181ce6"],["posts/2020/05/05/11/12.html","725c5a934bab8e3fcea8a64c98544d1c"],["posts/2020/05/05/13/20.html","597ac54eee910e12480e878fa67f08d5"],["posts/2020/05/05/15/20.html","3c818bc015d8b891e021ed85ced5e7dd"],["posts/2020/05/07/21/21.html","522172dc69da25f1dc23051ec3bd316c"],["posts/2020/05/09/12/20.html","50e91d1f28228a4c975f0f2bf844fabb"],["posts/2020/05/10/18/18.html","fbbf54f9f64c8567ee46a726be470a4e"],["posts/2020/05/10/22/18.html","abfe9901d1825d9410ed795918224dd4"],["posts/2020/05/12/20/18.html","1ca8d5734f283cd4503f2447a12e228d"],["posts/2020/05/12/21/18.html","3a82f969ecf507309209f0c99119f04f"],["posts/2020/05/13/20/18.html","045fa9a34898264870096e72912fb10b"],["posts/2020/05/13/23/58.html","a822d82943e796a090dc1e10bd62f1c3"],["posts/2020/05/14/11/18.html","fb789fe8328c14098e2fe87a620b71ef"],["posts/2020/05/14/12/18.html","7d3cc317b1959f2fd5bed1e4135aa87c"],["posts/2020/05/14/20/18.html","1d6684aef010ad15e735e6f971c642ee"],["posts/2020/05/14/20/58.html","3e0d82a219f39568767fbec913c9907e"],["posts/2020/05/14/21/58.html","48d9ce3db80eda95ebf6a1491c5c6be0"],["posts/2020/05/14/22/58.html","0ce096fd25cfb64e875bc1077db53fa6"],["posts/2020/05/14/23/46.html","7ee5f2eae4e72fd09d8a7ca123c856d5"],["posts/2020/05/14/23/56.html","d7996e053e5b9eef6f4bcddc951ae919"],["posts/2020/05/14/23/58.html","3a2d3dca55c77994f1df4b7d059da2da"],["posts/2020/05/14/23/59.html","7ed8e6beaa013d55048067cc01a0cb93"],["posts/2020/05/16/20/40.html","8ca3c6b9bb436783716aa9a6bf22b1b7"],["posts/2020/05/16/21/40.html","cb9eab5538d72cc425e1dbc9a02c4566"],["posts/2020/05/17/21/03.html","168fe8f76f89d631bb2a7bd3a9ef1030"],["posts/2020/05/17/22/42.html","7201d5848d38a4d7f8c3f88d6834b6d9"],["posts/2020/05/24/07/03.html","c07942acee66560b30a5d384f42adc4f"],["posts/2020/05/24/13/03.html","09bb34b7140134d36c47ec2d05712e85"],["posts/2020/05/25/13/03.html","dcb85b99beeaf542bff5a4c8a5402bce"],["posts/2020/05/26/12/03.html","95dfcf7d6b4692489969c80089d8a07a"],["tags/AGV/index.html","917f89b7c01737b39a942840cbfbd506"],["tags/Github/index.html","8f42dd6718b422d8940b81458a281140"],["tags/Markdown/index.html","898202ffcdb17bd6c428d2008bba87eb"],["tags/Move/index.html","ef7e342954da5f9965e059678b500254"],["tags/OpenWRT/index.html","d0083b79fe45c360b98a096130db29af"],["tags/Plant-Simulation/index.html","72ce23db2601c2f459127bcfb643a4d3"],["tags/Windows/index.html","a2726c76e5445f6c60a5817c8d7a1ce6"],["tags/Wordpress/index.html","cccce650ae2c556edf5604144b4e6f3f"],["tags/buntu/index.html","09eb60733d20cb4f9aa92a054ce50e47"],["tags/cad/index.html","bb28e9730ed18dfbb243a8acae5bbb21"],["tags/coding/index.html","8649f7ef85543b048c9241145d91eaf1"],["tags/h5ai/index.html","80658ffbc0cdeac8245c374235e919ea"],["tags/hexo/index.html","3b242546461fb4902198dba8db8c555c"],["tags/hosts/index.html","c8f4031483f5e2f2c5088e4d4b529b3a"],["tags/index.html","ea9cd790f694f78a772734edad01ee72"],["tags/lychee/index.html","aa701497087d8849f3bfdb8aaf45c829"],["tags/nas/index.html","4388a41c4235c4933207d9709c5cf3a5"],["tags/tpyecho/index.html","40d8b1ffbf448e48de3fa686524145ea"],["tags/transferstation/index.html","85a1be721ba2a126f0b0345d725f4029"],["tags/typecho/index.html","6d8758ca1859d9d787d9a567f46a6ee8"],["tags/ubuntu/index.html","1a8abf24e4a07a3841241d1e87f32976"],["tags/写给宝贝的话/index.html","7b3b6aaf845e12da113021afadde7dfa"],["tags/原创/index.html","acd01553f0fbba14f9e6813340df9a3d"],["tags/学习/index.html","fa3969e813e4783da189d220da6d3cfa"],["tags/宝塔/index.html","79992d3e48ec646893ca77f2a5add36f"],["tags/生产模式/index.html","553d6faa4a46e33adb0db5935270ffcb"],["tags/百度客户端/index.html","fa41aa2d9a1859881dfb0244e450b3ea"],["tags/科学/index.html","72a4f4357bf974363cb93ca9414fec47"],["tags/统计/index.html","2d407e5a07b5336ba2cbf1c70b06caea"],["tags/编译/index.html","bec9b49f7c40b58b3adc632d05e8520c"]];
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







