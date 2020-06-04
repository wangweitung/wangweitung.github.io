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

var precacheConfig = [["about/index.html","a46db0ce4158e49fcd757c5f4f5907b3"],["archives/2019/12/index.html","1a204208c62c86a6443058984f98dbc4"],["archives/2019/index.html","7d3f99e8ea92415ae7ee9789c648f850"],["archives/2020/01/index.html","192411aec12ec1dbe5864c04213477d3"],["archives/2020/02/index.html","ed0d89b2d86e3663d66c2f9488497227"],["archives/2020/03/index.html","5902658b6c7b598d509f94ef97b5957f"],["archives/2020/05/index.html","5bb8739237e95d8ffcfeca4436f063b7"],["archives/2020/05/page/2/index.html","22dc5cc1c7202a11dfa67137ae46efb4"],["archives/2020/05/page/3/index.html","644ba7a1e47e09b9f1a6d83301d34781"],["archives/2020/05/page/4/index.html","bfc997f422fc71501fbf55882574c62d"],["archives/2020/06/index.html","5fe284b01ed593e724405451f1b60c3e"],["archives/2020/index.html","5a2509f108a6b9eff351964eea714004"],["archives/2020/page/2/index.html","7834c02c84dabf189eb81a427b8afc88"],["archives/2020/page/3/index.html","c7f0a17857220f319a01024f24ee82b0"],["archives/2020/page/4/index.html","da281e03f66930c3dcf70301841dd316"],["archives/2020/page/5/index.html","5335da3f8c363917dfdd15df9d0ab0f2"],["archives/index.html","7be257546632ae5c7ee335f00c35ef3c"],["archives/page/2/index.html","3254cf6698489107c95758221d540eb0"],["archives/page/3/index.html","04c3b3791b8e2a380c512278342fc501"],["archives/page/4/index.html","2da6dff58bb8aca0645195b6253d2b5e"],["archives/page/5/index.html","ae3648b8d330264fe00da283e52521e1"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","a4886c9d5dc1941c644c72b2626219d6"],["categories/Code/index.html","0fe60378ae921b2a674b19aab4194be3"],["categories/Plant-Simulation/SimTalk/index.html","ece235c349913c34c99a9de7aa74f4f3"],["categories/Plant-Simulation/index.html","9a05c90b0629fa04431377f2bb53d61d"],["categories/Plant-Simulation/实体/index.html","65ab5b8346024acb3736f0e4cab54d2b"],["categories/Plant-Simulation/常用代码/index.html","7451c636d5c5b6a35c856e4d9450b929"],["categories/Plant-Simulation/常规操作/index.html","71e876a64e77412ea3eac491a121351d"],["categories/Plant-Simulation/模型/index.html","4e87e8c1fc18dd230e3928ed0d8765d9"],["categories/Plant-Simulation/背景/index.html","2a810d43b9058ecc05da1d2f7f8c4e61"],["categories/Windows/index.html","f8dd365c59b7d954e3779441e63bf312"],["categories/index.html","b5a651301d9a0f50c47199364f77624b"],["categories/nas/index.html","6dd23f67232109e542e9bc86c35e4757"],["categories/ubuntu/index.html","42a754b7c08ffedbd010dd0f81440be3"],["categories/ubuntu/ip/index.html","49b52e0fc908fc3695495abcc7616061"],["categories/ubuntu/下载/index.html","2d86cfbabb9681700eca07b7a72be664"],["categories/ubuntu/命令/index.html","102807c4a5cfeaa073ce16fd973c39b6"],["categories/ubuntu/配置/index.html","9d63776365ebad82a13a659899bec3d7"],["categories/博客/Wordpress/index.html","21fcdb2fc477c172634361057d4f899e"],["categories/博客/hexo/index.html","e3ec30410d119cba78e1b42662b131be"],["categories/博客/index.html","b08a2b7c24019fc89df16a96217eae1d"],["categories/博客/page/2/index.html","a25385d908235249e8c2cedb522905d7"],["categories/博客/typecho/index.html","d19a1f8da573f80d52a84bd320e63a4e"],["categories/博客/统计/index.html","22d7342a437f1ecf87201020a0d76906"],["categories/宝贝/BB/index.html","b45dd5d2985d3cd99c8663c2e53a4c4e"],["categories/宝贝/MM/index.html","692ed1beb7fe6cf34ea343006c6850f6"],["categories/宝贝/index.html","7255afbd24618cdaf0681dffcd800b94"],["categories/思考/index.html","fbae6cd57b3209734fe07cbdf8b96206"],["categories/思考/职业规划/index.html","7c31e38c54221d912a4efc348fa14c41"],["categories/科学/OpenWRT/index.html","e570ef4d1ec8afb9b90d6dfd758afe8f"],["categories/科学/index.html","9bcc0c49f7404409a29d6f6b2fb2a0eb"],["categories/科学/手机/index.html","9ac426c2b9790fd898c8d8a0601d7513"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","89fb86073fbb814c0c8eef8a8edc02cf"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","6c6e67bbe5bb7d503aaf35887fa991cc"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4b153d73802d1bf6496eff812cc20de7"],["movies/index.html","c5cf15bbb872b3b019163d601ca8c9a2"],["music/index.html","d5961e9ebc43d73bdf4d6a1398f0f956"],["page/2/index.html","8c5f529efa434eff1ddf39b65d46ac99"],["page/3/index.html","58e25cfdd071c3dd15ef5b7e69d5a103"],["page/4/index.html","185b8bfc9d28ada4e03d5568233eee67"],["page/5/index.html","f40580dd8a67adfe14d8a6e2b827f9bd"],["posts/2019/12/04/00/35.html","1e242544cf31647cbd673f4aa8992a8d"],["posts/2020/01/15/20/18.html","8840ae1085ac25e6848950dda428c3a4"],["posts/2020/01/16/22/18.html","8819f36209842e4fe6ef6d1a2e888bf6"],["posts/2020/01/18/22/18.html","b751de0f9c543d3586f95b8bafa97575"],["posts/2020/01/19/08/29.html","0dc08a8b58df9c0444e36b7476efe07b"],["posts/2020/01/19/22/18.html","18b4e61ad577d810c5c9df4574fab8fe"],["posts/2020/01/23/22/16.html","4e266ff3e2937442af2c96ea2680c4b1"],["posts/2020/02/04/20/18.html","fe4cb652ff3e1c771a7a67961d2998b4"],["posts/2020/03/12/00/20.html","392f711c17398379825856ebc89680d1"],["posts/2020/03/20/22/12.html","d693ce1857fb9aec2c7bfa443f2879d0"],["posts/2020/03/22/18/24.html","e05434ea7f4bf10d3097da967afecdf1"],["posts/2020/05/03/22/12.html","fab48cdbd5d8683c7ac2de2e7fa06ccc"],["posts/2020/05/04/00/05.html","82dbfaf6d123c37c31539313fbeb6fdf"],["posts/2020/05/04/00/09.html","e778579f7893f72ba8c4b3b981921da4"],["posts/2020/05/04/00/15.html","5ee1adfb4fc5bd1ae64f91b4435805dc"],["posts/2020/05/04/14/58.html","9a23664b37b9fb38fac3ffe6846df7d4"],["posts/2020/05/04/17/01.html","bee541532c74044fac77fff295a97130"],["posts/2020/05/04/17/19.html","4380def3cb8bad7b9d991a59947da67e"],["posts/2020/05/04/18/18.html","462211ca38ebdb25cce0c2116796fb7b"],["posts/2020/05/04/18/24.html","f1bbb9aac5adeb095bba5356ed5088fa"],["posts/2020/05/05/11/12.html","408864a0ffda7b4ea98ec6ece758147f"],["posts/2020/05/05/13/20.html","e6ebfb50ccfa413e72ab2f61acae43dc"],["posts/2020/05/05/15/20.html","bfeed464e533730befeef89a6ca4dcad"],["posts/2020/05/07/21/21.html","39b20e3e42e1bd9df0d558675be28ad4"],["posts/2020/05/09/12/20.html","3af35207475fd241b06f397ba3820518"],["posts/2020/05/10/18/18.html","873444e0a5680fab31990f7dd6679280"],["posts/2020/05/10/22/18.html","9c15ce4aa73705268bd3403705095ee1"],["posts/2020/05/12/20/18.html","770943d63b33f6b1154aff21b84274ee"],["posts/2020/05/12/21/18.html","51395dbf4307f987fd1f6068f6df3349"],["posts/2020/05/13/20/18.html","893c5d6fb9e676dafb2fdba7fb7d1a86"],["posts/2020/05/13/23/58.html","d43ddf08f21db4fba44cb6a9851cd820"],["posts/2020/05/14/11/18.html","97b358f9a73cdd997d869dc43ae1993f"],["posts/2020/05/14/12/18.html","a987f53d6e60fa1fed438f5f23097687"],["posts/2020/05/14/20/18.html","af3a1ef50c9f456d83774ec4b5020983"],["posts/2020/05/14/20/58.html","4e56d573883e2cf3fe04016ef9029dc6"],["posts/2020/05/14/21/58.html","097b6d42606433c1a8dc5b6ff18e46bb"],["posts/2020/05/14/22/58.html","f2e6593063e1f80c9d02d6df997beba6"],["posts/2020/05/14/23/46.html","46fc9dfb8bb7441ae671ec3120a27e67"],["posts/2020/05/14/23/56.html","5bd1d6a1ab96693ccd51df0bc3fcb653"],["posts/2020/05/14/23/58.html","0a3e147f277fc64006dea00ece7eb438"],["posts/2020/05/14/23/59.html","76f6fd0d524672e428d858d33bfef1d0"],["posts/2020/05/16/20/40.html","d6addb9aa275789b424f54508f354530"],["posts/2020/05/16/21/40.html","9a014de2f665d2a2de12abf7de07bba6"],["posts/2020/05/17/21/03.html","9d9fb44553ebe67a9a8a0c3c374f858f"],["posts/2020/05/17/22/42.html","ba4cd2d0e7db9595709f58169ead7a2f"],["posts/2020/05/24/07/03.html","e7596205571468cef6df97a90672b011"],["posts/2020/05/24/13/03.html","d02f739117298840920b563c3ac77f69"],["posts/2020/05/25/13/03.html","b0e089f4adb8763499a508e8d8e0b688"],["posts/2020/05/26/12/03.html","4ea19c74717c791d36d1bd55844319f5"],["posts/2020/06/04/12/03.html","e2ac0932244398aa1639610cf76b9002"],["tags/AGV/index.html","df59d1db15d6f670f3548319a28a1eaa"],["tags/Github/index.html","b80a7adb03cb8e95a062725d2c31b1c9"],["tags/Markdown/index.html","ed4da0b792c61609f33cb58c4c258909"],["tags/Move/index.html","bb46f1817070fc1847c10b476c4d179c"],["tags/OpenWRT/index.html","91aa1e0ef5cf11472bfb055fbf943fa6"],["tags/Plant-Simulation/index.html","332607e4859683837fab465ecddf3b89"],["tags/Windows/index.html","64b2d624461f3fe240965fb33904e72d"],["tags/Wordpress/index.html","13dc051ce4d2d48addddcccc801cc95e"],["tags/buntu/index.html","7d73663453b27effc9d3dcd4d5aaa5e8"],["tags/cad/index.html","29fda86c893092ff817861f78315a947"],["tags/coding/index.html","0aab5a3ee0f74d963028f60f6b02e42e"],["tags/h5ai/index.html","319e26acd3b8151a982190d1a54e901e"],["tags/hexo/index.html","a908e9cb52459da555118303989808d1"],["tags/hosts/index.html","1fcd98289a5a98ddc4e9a9fa6af9ab91"],["tags/index.html","41708262bdf28facc2404db8b6e37a8b"],["tags/lychee/index.html","be55663f0517b6cd9a82bd23d0191153"],["tags/nas/index.html","c4c6a6aac45be741918b59b2d5361576"],["tags/tpyecho/index.html","cbbc03f758c4fa876e98c4d59c80fcf8"],["tags/transferstation/index.html","f50f2d82ce414cdd435c2a89e1b3cf1b"],["tags/typecho/index.html","ba5ca486d55484ef28235b7519ae70cb"],["tags/ubuntu/index.html","4dc46eaa0f687e80053c2638b77162c5"],["tags/写给宝贝的话/index.html","e984a04b5b11808e769bc0a4bda2bec5"],["tags/原创/index.html","94d7e8915d801427b2d7d6f6191ec331"],["tags/学习/index.html","6190857ca9531573e7b0ddc80c6afbc7"],["tags/宝塔/index.html","e5509b85189567dba06b4ec29e7ce5f5"],["tags/生产模式/index.html","235f2ae3ae0d794a68c1cd2f65e022a7"],["tags/百度客户端/index.html","194d777aa4007cc0a1587e2b6a2b43d6"],["tags/科学/index.html","a9e4acb1bbccd0c5468fcbf73da78a23"],["tags/统计/index.html","e582697e60bd1a681a14b864f3120bd7"],["tags/编译/index.html","5b346a69f229602d3f99879c5e1f7026"]];
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







