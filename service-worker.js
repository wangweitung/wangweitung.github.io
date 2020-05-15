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

var precacheConfig = [["about/index.html","5de7dab39c0b6fbc2759f4f373f07b02"],["archives/2019/12/index.html","596fa56d0207fbe3e2f28bc9dd064e86"],["archives/2019/index.html","b830762787aa3ba86f3e10d19d1f139e"],["archives/2020/01/index.html","35c8c7cbb38dd9991ad58fd9a701d4ba"],["archives/2020/02/index.html","ba539d682543394907e5608911ab49b6"],["archives/2020/03/index.html","670d6338dcecc42f5b9d48bce5bf4301"],["archives/2020/05/index.html","81fc5c17dbd455fd73983b2392275f31"],["archives/2020/05/page/2/index.html","4a8f37edb13ba0a4beebdf8d4846d217"],["archives/2020/05/page/3/index.html","e0511073a22a6430363c3d7d71dfe570"],["archives/2020/index.html","e4effb194689e17fb1209cdef4064bfc"],["archives/2020/page/2/index.html","b3ec508c2217317fcccfede3661972bb"],["archives/2020/page/3/index.html","481e9b361e215ac0c39886278c598aaa"],["archives/2020/page/4/index.html","26b1ed84386f41c316f1f9e88bffde7b"],["archives/index.html","8658bca0562e635ed7b370da5aa3d444"],["archives/page/2/index.html","56be6de23953d2e6b86a351ab43e0c78"],["archives/page/3/index.html","632c6a013badc234413f4302f5a42aef"],["archives/page/4/index.html","10de8e07671c6f2d08f0c715c7f45f8c"],["archives/page/5/index.html","c52b85b51f69046abe40a5385252fa81"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","9d35931049e7521c2c909075e12ded70"],["categories/Code/index.html","18a1670029d639a57ec70ebaa69266d5"],["categories/Plant-Simulation/SimTalk/index.html","7ea9e98f024e386b8c30fd60a0758af3"],["categories/Plant-Simulation/index.html","16af31cfee1595ac1d76a8c39f022667"],["categories/Plant-Simulation/实体/index.html","bf9f0abf52e55498db9e7af2b6e9b0f5"],["categories/Plant-Simulation/常用代码/index.html","142a299bff929176bb0b5513883dd9d6"],["categories/Plant-Simulation/常规操作/index.html","d4fbf173e81e7a6f5b4e939ea315517f"],["categories/Plant-Simulation/模型/index.html","fcab60174e9fae821b87208bbb997cca"],["categories/Plant-Simulation/背景/index.html","ab88f6435ef5c3d95358afaf7dbafa2c"],["categories/index.html","cd6aebe670e52a0213d521143ca02303"],["categories/nas/index.html","2e4edb4d44308de119671fdba552fef5"],["categories/ubuntu/index.html","c566d47dbf55b0b0bed2e48470f5c328"],["categories/ubuntu/ip/index.html","ec50b0fc9d78df96fa7de42272e5ad31"],["categories/ubuntu/下载/index.html","f2c99a180ffec2cb22dd9c2d6136d702"],["categories/ubuntu/命令/index.html","f20c73250492e0d5b6c8802992132fd9"],["categories/ubuntu/配置/index.html","15047b93c976ae2bc0730347fc1be72a"],["categories/博客/Wordpress/index.html","7f6068bb1b33af9cb57fce40e2b03ca4"],["categories/博客/hexo/index.html","50714f1b0627b1599602735555345279"],["categories/博客/index.html","81331249502a33bc4971136ffc1ac7d7"],["categories/博客/page/2/index.html","a0815ac621c5cd8749b7c6d01fed1195"],["categories/博客/typecho/index.html","98606b18b465a9ca466e6a3e62fd9139"],["categories/博客/统计/index.html","343f951ea49c6c60be14d1a3153b092d"],["categories/宝贝/BB/index.html","548b4bfde08d5e81088c3e14de3b3770"],["categories/宝贝/MM/index.html","ba5d0051a8a8d8dc5c0854d88eb28781"],["categories/宝贝/index.html","bbc1cfc986aac6389933e95f7a718bdd"],["categories/思考/index.html","e8432eecdd676bc158711e075180ece7"],["categories/思考/职业规划/index.html","ad67e92be48630ec5c41c27586b15eb8"],["categories/科学/OpenWRT/index.html","faf389e17f3441299c659face6d1b4e4"],["categories/科学/index.html","ab47ba98b45dd4eafb8325aaa462e683"],["categories/科学/手机/index.html","e80234fce3b4498c0d468822430bc1d7"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6404f35c8e255d4cf51d912ea7ddbcd3"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","620052d706e1823e15c47733eeafdcf1"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","0cf12f526ab34e4b36d7dc0ccbb14030"],["movies/index.html","074d7716efd64e862b64563f4c874723"],["music/index.html","3fc3c85e65ac9e59749712bef0a62973"],["page/2/index.html","79d32ef5825dad890243967fb53154b4"],["page/3/index.html","94c61b94ec740c59ba60481cbdc2aba5"],["page/4/index.html","08da24762538bb6c993d04924d9c8d20"],["page/5/index.html","2522e386ae6c3869eaab9fb5a7e27bf3"],["posts/2019/12/04/00/35.html","ef3037e91fbd670e5b870ee7fab2e878"],["posts/2020/01/15/20/18.html","4f8268bfaa1c0fcb502f155806342bc6"],["posts/2020/01/16/22/18.html","0cd31f6c070468a9b23306f336a28f45"],["posts/2020/01/18/22/18.html","dc207fb731bbe022241e04bf2557d28b"],["posts/2020/01/19/08/29.html","8325a337cfd1959d6ca5497bd005661a"],["posts/2020/01/19/22/18.html","7f59cc248c18ac68ccecb0aa6bea7131"],["posts/2020/01/23/22/16.html","a92602dcdd23590556706a3a4d9f9060"],["posts/2020/02/04/20/18.html","0c7bddb387966115f12f008f04b4f706"],["posts/2020/03/12/00/20.html","3db89b12c5bf8bce249161426391364f"],["posts/2020/03/20/22/12.html","ef55fe546893e77741dfef2b3ffa73be"],["posts/2020/03/22/18/24.html","c45ac2b571e52506e5e6d4315c00e874"],["posts/2020/05/03/22/12.html","6b5fc9a4c073053acd9cf15434f46c8a"],["posts/2020/05/04/00/05.html","ef0166cd48714093a79ab114c1f7b11d"],["posts/2020/05/04/00/09.html","e52334fdf240f13e802696c24db970ad"],["posts/2020/05/04/00/15.html","06fac1b6c5e38c557a0358a2bbd7a565"],["posts/2020/05/04/14/58.html","ba579720dae26af7a06819139700c40c"],["posts/2020/05/04/17/01.html","e173f2d23db1548492c718e0ce14beb6"],["posts/2020/05/04/17/19.html","a8ca72bbdff8e42c165260157e3f4ca0"],["posts/2020/05/04/18/18.html","9fde892a93a58ccf537f63462e053564"],["posts/2020/05/04/18/24.html","c3ed223d859a8d3e33494111eaffdb8b"],["posts/2020/05/05/11/12.html","0806f04cd0bc786a447691f1772c65e6"],["posts/2020/05/05/13/20.html","880c151220bcce33f1dc73aacc5be6ab"],["posts/2020/05/05/15/20.html","9976e37de3b944d999c447b3a4172d1e"],["posts/2020/05/07/21/21.html","073fdca2ff98464d349c632286ba0e0a"],["posts/2020/05/09/12/20.html","5c661b1ce9151006b30787b4a1ec5cfa"],["posts/2020/05/10/18/18.html","7d6060694c8047b088606771a9609438"],["posts/2020/05/10/22/18.html","e2a0042d5db253fb5b1fba13b73f1406"],["posts/2020/05/12/20/18.html","50e3060c0852fbe47e22ce45a827854c"],["posts/2020/05/12/21/18.html","d73af987935143fa64281f185cdb173a"],["posts/2020/05/13/20/18.html","a97637289a24df5318608f9f76fa3767"],["posts/2020/05/13/23/58.html","ed462d16d54046e0d33e86233f3ab1b7"],["posts/2020/05/14/11/18.html","3344e16efc7a4820d44f461773409e0e"],["posts/2020/05/14/12/18.html","11b0597a54914abd28ab015f1c205e7e"],["posts/2020/05/14/20/18.html","2220eb8acd93d34728fd1b774c9b9b50"],["posts/2020/05/14/20/58.html","d556e1b1aacd2d61a8a63b8eac203eb6"],["posts/2020/05/14/21/58.html","c7100640dcc13498069294b905a26a7a"],["posts/2020/05/14/22/58.html","72b1c2c8d2c0bae9c65fdad6eb6cb61a"],["posts/2020/05/14/23/46.html","b908c09d972e8cf0eb6c593081b7e9af"],["posts/2020/05/14/23/56.html","2f1270bd6ef19b0ec066d1ee9117b007"],["posts/2020/05/14/23/58.html","03b95c713175bd8b6d5c8bfd7db0ba1c"],["posts/2020/05/14/23/59.html","2ec8a1f33d5c12f5b5c7a010cdc2cb5b"],["tags/AGV/index.html","9a5abbc9b89c99b387e6149994c5b4b9"],["tags/Github/index.html","916ad0c21ad5bd4ab71ebe17d453c6d5"],["tags/Move/index.html","41ea54050962818e723980701d5748ad"],["tags/OpenWRT/index.html","ad8c5f0cce9d48e3c83182e3f7ccd509"],["tags/Plant-Simulation/index.html","8fde2af5cfc149205580210fa21ea284"],["tags/Wordpress/index.html","559c3816914857ed166c464121220992"],["tags/cad/index.html","f34bfc0421fb65146dd1d73205737e4b"],["tags/coding/index.html","28c04e57e828e7c6df02a53ecb61086e"],["tags/h5ai/index.html","634cdf3907d0e0dae3a0ee42c0ba177c"],["tags/hexo/index.html","9f98ec2bf2e3cfa9667da5f4952a4c58"],["tags/index.html","3549481bf1ef2ad6ef48e12d960eeddd"],["tags/nas/index.html","b41ea41f248c1af82c95816163df2ea9"],["tags/tpyecho/index.html","41d52021f3b2b0c7d52bbb8c37a98298"],["tags/transferstation/index.html","229552be0dd8a9b13e8f531da8b305f3"],["tags/typecho/index.html","55d69eeeda07e7f4bb1bcfb6ba763c69"],["tags/ubuntu/index.html","31333d472405860c8eb9f93e70123be4"],["tags/写给宝贝的话/index.html","d90940415563d168f62403a720155ebe"],["tags/原创/index.html","901a045a87da093b35b0e00dd9d5329c"],["tags/学习/index.html","65b16bdf38b06850b91008b0e5b52763"],["tags/宝塔/index.html","279c4b6feb749cddcaa4023d0a0e663d"],["tags/生产模式/index.html","513f236b9db0a2c694e79abf36698621"],["tags/百度客户端/index.html","101a3374d743f67249fafa4cb6e8837e"],["tags/科学/index.html","e3b2b8032264b4ff523d990e12d7d71f"],["tags/统计/index.html","7bcd8e7185a94e1ae98eaa0655ef0372"],["tags/编译/index.html","6ee65dab235851a3b2d6be08234fa349"]];
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







