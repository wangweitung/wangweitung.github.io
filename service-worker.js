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

var precacheConfig = [["about/index.html","b1dbb98b25f69e9ac74ea82d0d3dcaa4"],["archives/2019/12/index.html","ad1507518e513016c74cfd743ae3bdf1"],["archives/2019/index.html","9fed20286aaa957339eb214e5b23044b"],["archives/2020/01/index.html","e9abb09f5cc20cc86a024c000b938750"],["archives/2020/02/index.html","c20c042911f95de0726867bd1db0d71d"],["archives/2020/03/index.html","20efb97d6ec2a054c27763244b515834"],["archives/2020/05/index.html","838b72f261caf4f6f1b4209620023242"],["archives/2020/05/page/2/index.html","c33b156b12dd536912889b08e6dbf518"],["archives/2020/05/page/3/index.html","1db258217b59b63661970b97b1f594f2"],["archives/2020/05/page/4/index.html","6b7d52a1986f07d1de13344e31419fae"],["archives/2020/index.html","381f24bcdf9b89d7652e47bc39a9aaed"],["archives/2020/page/2/index.html","e14742f23fa9d8bdac0f0a847beef50d"],["archives/2020/page/3/index.html","64a9c8204503aec666973ecbd80683d5"],["archives/2020/page/4/index.html","d0e44c20ac5f9a92d8096febb3d201fa"],["archives/2020/page/5/index.html","e0b6605d43b875a5d025cfdb201f1705"],["archives/index.html","de4baf1e785a4dcabdd12502c2e6262f"],["archives/page/2/index.html","87e4262f39c05179e3446d33c03656eb"],["archives/page/3/index.html","8ebc99795cea6a0a0caffacbdf7c2f0b"],["archives/page/4/index.html","cd1c3fdd6e5fd46ab953998356ce9611"],["archives/page/5/index.html","9151ebb20c198203460c63ca0ee879c3"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","8cd3a94a309c054aa15ce0f726955f92"],["categories/Code/index.html","77640393e7c345951d9dbb606bdfc884"],["categories/OpenWRT/index.html","50986dd5cafd1b198aa93f306bc92f60"],["categories/Plant-Simulation/SimTalk/index.html","3b4d1b9375f7c00958907dc2f9c8de96"],["categories/Plant-Simulation/index.html","a1817c64fa662ebff70ad7367e588a8e"],["categories/Plant-Simulation/实体/index.html","c30fbe82500f9bca993027e938452cf2"],["categories/Plant-Simulation/常用代码/index.html","f484bc407744e8b2c8ce2b251a37b168"],["categories/Plant-Simulation/常规操作/index.html","3419c68b68f218c10378a9951196aa60"],["categories/Plant-Simulation/模型/index.html","3943c916601382e9465639d681dea4f2"],["categories/Plant-Simulation/背景/index.html","4cbb48a5eef5123e345575e63c945486"],["categories/index.html","b521ee5b47d764e523deffbcb4de0700"],["categories/nas/index.html","44650b8191f1071718993c7a4066e068"],["categories/ubuntu/index.html","06513171bcf24d63b0a6b37e6adc5d1a"],["categories/ubuntu/ip/index.html","8cf142b8ac6cffb935dd5d565a9dcb96"],["categories/ubuntu/下载/index.html","5c46e0454c384852c32cffc7b41f3114"],["categories/ubuntu/命令/index.html","0d0385fa1bae8aa41554fbc9820693d6"],["categories/ubuntu/配置/index.html","38be6dad913d2c0a973dbe5c8192101c"],["categories/博客/Wordpress/index.html","5bbb758a02be44ac5e1168b2994567e6"],["categories/博客/hexo/index.html","66c7add42150b7ad27b8dc8109e2dc48"],["categories/博客/index.html","47274c8aa9a858894250b2e76a417ed2"],["categories/博客/page/2/index.html","5027363320311c3cb9e23d0a478ade97"],["categories/博客/typecho/index.html","4877da6357cf55a3cd0ed3739b22d5f9"],["categories/博客/统计/index.html","9526e6d532cc8e4b88dd05a48739061e"],["categories/宝贝/BB/index.html","5c63336eb836dfa09fc209de1374af8d"],["categories/宝贝/MM/index.html","6952cc54fad8c13dbf19508262362701"],["categories/宝贝/index.html","c8dc6f1ca2a2b4d39292e04c6a43a05f"],["categories/思考/index.html","a0b1639272185feb621ff99eb3717c52"],["categories/思考/职业规划/index.html","e7082c25bcff402fea3d9ab28f98c44c"],["categories/科学/OpenWRT/index.html","e5036bdb031bfb8e93873b97448dde70"],["categories/科学/index.html","1bd72bda70d0d742b77090662f314d8a"],["categories/科学/手机/index.html","3fc498ef75b01183a3b175a7b70b7f53"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a41966749c9449215143d853412d12ce"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","244e73b987b2eddff2d3e5d67ce778bd"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","c6eb4b78e848572dd11915cb130b9b17"],["movies/index.html","9f78856ec0754cf8db2062317d7d57b1"],["music/index.html","46a1b67809f9a9f197fba40fd79f99cf"],["page/2/index.html","d5dc139d592087a564865b32e2e3dccd"],["page/3/index.html","6c0ca747113ed2d0b32c6dadc66e3b8a"],["page/4/index.html","c2231aeec0264bd463fca7d48ee4c6e6"],["page/5/index.html","a6e0782962e23790dafb996ee42bdb71"],["posts/2019/12/04/00/35.html","d0d44ec642ea1719d7a18c0e9813daa0"],["posts/2020/01/15/20/18.html","87faa19d50a9454d94fb9e2383bb2727"],["posts/2020/01/16/22/18.html","5c4eb48c745e6fbf69b8e4da15cc480d"],["posts/2020/01/18/22/18.html","21a093c61863fa7dbe949b820d1bd8af"],["posts/2020/01/19/08/29.html","1667216f03153a37ce19f8f5892f3c2a"],["posts/2020/01/19/22/18.html","1a7d0da03febfe779bcb274fd927c292"],["posts/2020/01/23/22/16.html","5a71a911fe5164ddd41aeb5990b8e39b"],["posts/2020/02/04/20/18.html","939cb643180e8fddfe7af32259f27e79"],["posts/2020/03/12/00/20.html","6d8bfb203070c128cba76879a162f1a5"],["posts/2020/03/20/22/12.html","5699424154d4013f0de7a8be4ef7da51"],["posts/2020/03/22/18/24.html","e50ae0696ad8a131839d20059fd6760e"],["posts/2020/05/03/22/12.html","c23515cc325f18a841f63289708e04b6"],["posts/2020/05/04/00/05.html","51c0f7c009dc6020f4192f6dcdd6a9ee"],["posts/2020/05/04/00/09.html","7d7142d9bb3628a1ab07fb5de1c73921"],["posts/2020/05/04/00/15.html","39c1a113eda39584335cba5dadb1db39"],["posts/2020/05/04/14/58.html","07ea8c3eff5135fe067b1a860dbbd52d"],["posts/2020/05/04/17/01.html","d9b7def9768e3f275beb4974b5543ef2"],["posts/2020/05/04/17/19.html","bcebc1a310e77ee9994ebbc16f611c5a"],["posts/2020/05/04/18/18.html","48766ea15f5bf0742526790d74881dfc"],["posts/2020/05/04/18/24.html","634497d12c3c48298d7e8b8c80a8c0a1"],["posts/2020/05/05/11/12.html","012f945e9dbb2306541023652dec86ae"],["posts/2020/05/05/13/20.html","9e473cc86b9d6f0562b129c9bcc69148"],["posts/2020/05/05/15/20.html","a19843f847366642948055d24ac6c971"],["posts/2020/05/07/21/21.html","68e9fe8caf58e9f3de9dd14a7516d890"],["posts/2020/05/09/12/20.html","7681619b7a9801c66915ff141e4b11ad"],["posts/2020/05/10/18/18.html","99f7a318e2b6694e4913303726c0165b"],["posts/2020/05/10/22/18.html","c89447231d5f57c2608701d152636409"],["posts/2020/05/12/20/18.html","7aed0bf18c2dc7b0095c59ffe00513b5"],["posts/2020/05/12/21/18.html","cb2b999230ebd77308491f4737815161"],["posts/2020/05/13/20/18.html","f46916a81a8d7679972fcfd304f4155f"],["posts/2020/05/13/23/58.html","0cd102a8a2d71c72872078abfcee9532"],["posts/2020/05/14/11/18.html","5cffd856e780578f4b92f588ed2b067b"],["posts/2020/05/14/12/18.html","3b796aa00fc012ca09b7c3653f54487d"],["posts/2020/05/14/20/18.html","ad6c46abe876c299bb1ad2daccb9ded1"],["posts/2020/05/14/20/58.html","8acea0080eb3350f5542b882e069ddbb"],["posts/2020/05/14/21/58.html","0b6002f6104e833cb3cb1f428014dc75"],["posts/2020/05/14/22/58.html","cc11bc148be91fd783d31560f17ff7b1"],["posts/2020/05/14/23/46.html","3ea6b8e36b6abeca1d4819b3fdb281b8"],["posts/2020/05/14/23/56.html","52acf07ab12c14d3987e35a76aab7d61"],["posts/2020/05/14/23/58.html","384600eed72c8fc8857ae559b5dd9836"],["posts/2020/05/14/23/59.html","d299dc1a23f7ce3de82ec6981c6debb3"],["posts/2020/05/16/20/40.html","668d2bdf71b1f48e60516a003b70cc23"],["posts/2020/05/16/21/40.html","e5e57b967b0fa89245db9f5341db9151"],["posts/2020/05/17/21/03.html","50ddfe8a813a5138f7a5d2903d5b4b87"],["posts/2020/05/17/22/42.html","9a06c4ec9606e7756b9297336e5b61e8"],["posts/2020/05/24/07/03.html","389e216c1eb0cf7564f83f9ae755adf1"],["tags/AGV/index.html","ad0b97bb2879ea5007c12e69158f3f49"],["tags/Github/index.html","2d830ccfaffca36204b3feeab19776f7"],["tags/Move/index.html","611adc0c42ce3f68bdb07da95b0bbf39"],["tags/OpenWRT/index.html","2426db336f1a85021436ffcd3a07af4a"],["tags/Plant-Simulation/index.html","6e09673cb34c52348349a2497f80ac62"],["tags/Wordpress/index.html","a236f0d5e8988ae0871b25e816f6b518"],["tags/buntu/index.html","67e9fb4c2e10277b57c977aa4824c539"],["tags/cad/index.html","4aa2ac9be7984c5dffca3dcfdd73936e"],["tags/coding/index.html","991d80cf3bde93ae48c2084ba814311f"],["tags/h5ai/index.html","1a3a850572aba1b5c6ec55c9256fb35d"],["tags/hexo/index.html","0f41c21669105ba03ece9ed668624159"],["tags/hosts/index.html","4b3c8383df3e191382716af60bd9364e"],["tags/index.html","8ef805ede8828a075e46936cca062e1f"],["tags/lychee/index.html","1114113935e918e09171223a18fc17e1"],["tags/nas/index.html","323dd886d3d400497b35389e4ba399ed"],["tags/tpyecho/index.html","f6956c0c2da0ea856662f74bc9e09aae"],["tags/transferstation/index.html","d6457a91e0c8ce71ed7557a96c37af37"],["tags/typecho/index.html","0c92f4074c75aa2570f895887acba035"],["tags/ubuntu/index.html","b6ba98fdd63119bbb5b07da26904e13b"],["tags/写给宝贝的话/index.html","bb236fbfe6de3b9fecac5c9561388d57"],["tags/原创/index.html","36ef46b1077d1a63412a679293a21640"],["tags/学习/index.html","341f7d4087f6ff245db8be49e78eb6bf"],["tags/宝塔/index.html","b2114f36ebe97af5e6f039ea5273edb4"],["tags/生产模式/index.html","1b3eda757278793a7a2d99b67a442a63"],["tags/百度客户端/index.html","d10c1f2b7223a03bb7ce63365e5d7031"],["tags/科学/index.html","425281eca589c4093d645ddbb70b1ef7"],["tags/统计/index.html","027af144c67ff1b660bff74386bb5f96"],["tags/编译/index.html","f389de9594efa20a6af4e84f025fb061"]];
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







