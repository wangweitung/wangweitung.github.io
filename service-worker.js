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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","60c3c75ce597335cfa9bc9ad7dc7dd0e"],["archives/2019/index.html","04f46c53138cd1172a95cabdb055d555"],["archives/2020/01/index.html","6714bef1a782114dd800b7c676635b4d"],["archives/2020/02/index.html","cc17524a3f7e1146388c49032fcb7463"],["archives/2020/03/index.html","244f97034df173e0935fcd0f76850fd9"],["archives/2020/05/index.html","d6c8621df6e800631c9495b34dba9be8"],["archives/2020/05/page/2/index.html","241faae21e7dc9f2123bc1eb3f7d1050"],["archives/2020/05/page/3/index.html","7692917ff5339abe4dfc5e0424a72518"],["archives/2020/05/page/4/index.html","253a824d8f7209d1e1129a64637966ac"],["archives/2020/index.html","76993d72c383344c3993e5a30baa2742"],["archives/2020/page/2/index.html","2e7d3c0b7fcb86d032549bd8f3d49ef6"],["archives/2020/page/3/index.html","adc04e7687aa226ffadb1560c1ea40bc"],["archives/2020/page/4/index.html","fcd06e017b8eb9ec7bfb72a382342c28"],["archives/2020/page/5/index.html","f828903d8529b7f5db2bfbf4b8a9b0ad"],["archives/index.html","7b1f507b863ade6c56528d32fc8e002c"],["archives/page/2/index.html","a8befdf793316206d695a4d11ce10e18"],["archives/page/3/index.html","bb585cbe1383b8fc12e36e4adf608121"],["archives/page/4/index.html","8c8e1df165caa166e230d6d11cbb59f6"],["archives/page/5/index.html","04d373f22c08b8ea076b749309fe0934"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","12516923902a3096022e1bb5d5c52f10"],["categories/Code/index.html","68849d2ea044bb3b7dde949f83e8a01b"],["categories/Plant-Simulation/SimTalk/index.html","c7a2bebf936c8411301d1a28aa8de88e"],["categories/Plant-Simulation/index.html","c39b84242b892e25673ef92d8b77bd16"],["categories/Plant-Simulation/实体/index.html","ef6f8921abf970ea5d0f30997d21a516"],["categories/Plant-Simulation/常用代码/index.html","360e5a6aa0b4a90ca9933130b07fd408"],["categories/Plant-Simulation/常规操作/index.html","db74bf45ac13fd13afbd600d63e04138"],["categories/Plant-Simulation/模型/index.html","bde7c975db66fd0d32b4258dfe509df1"],["categories/Plant-Simulation/背景/index.html","ee68a0bfe9d7de780a362ca5fb0dfbd1"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","ba95e21649ab17a7931c17c4af17d277"],["categories/ubuntu/index.html","ae39d377e691fdb115b8c9e42fd98011"],["categories/ubuntu/ip/index.html","005ef65997e09bd543a61a312f48a41e"],["categories/ubuntu/下载/index.html","40215f0470b9a56ebb7ba895d7eca050"],["categories/ubuntu/命令/index.html","50024b583f3b4be266f55793b9a59201"],["categories/ubuntu/配置/index.html","3996f0694efaca9cb9b51c8e4a6334a6"],["categories/博客/Wordpress/index.html","3c89fc620c5f3c8569ec250917320b76"],["categories/博客/hexo/index.html","437a2825ac7300c2a937834a3605904d"],["categories/博客/index.html","6b73c85bff121ceefe6a5f16694fd3e5"],["categories/博客/page/2/index.html","b2326b9dc10d045615853ad3c7868a45"],["categories/博客/typecho/index.html","fc4423f27f38ee4519599788150983b7"],["categories/博客/统计/index.html","ffdf962f76bbaed4b630d36a9ab817d7"],["categories/宝贝/BB/index.html","4995e73fdc78d5bc80f35c1dc0c07398"],["categories/宝贝/MM/index.html","bc5a8b964713bb2ec24e2a3090bb3d3c"],["categories/宝贝/index.html","c08136b95f99c9ee8ea65dc48726f396"],["categories/思考/index.html","00107abb6098001288c1f197cfa356cc"],["categories/思考/职业规划/index.html","20682eb89e1f3097f8aad7599489d379"],["categories/科学/OpenWRT/index.html","b394e622460bf473409d5f88684cbf39"],["categories/科学/index.html","bed87042afd275bd816f640cccc8ca89"],["categories/科学/手机/index.html","16891eb2c105d7a3acdec2d72ead9e36"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","90aa7bbaaea6a5dbad7cb2b3bba7491a"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","a7cc4531885693f9ba12efc92b26748a"],["page/3/index.html","6131ec92d94e71bf71bcf2387e28e5cf"],["page/4/index.html","f2ec2a02739a48a35826158f9148b630"],["page/5/index.html","58105c314ff17be6c950e57ba6657864"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","0956684af8df29eaf7b43c964fb8d1e6"],["tags/Github/index.html","1e0b1f44bd09179efce6ba96523102a8"],["tags/Move/index.html","bdbe9c35b41b9358d872d53d1f5f3eb1"],["tags/OpenWRT/index.html","a934ea52d4662eb6cdd22759a61dbba9"],["tags/Plant-Simulation/index.html","861ae1f48c61afb8bb4973703bff794d"],["tags/Wordpress/index.html","c6a77ca168b5ad8c9283433157f5aba3"],["tags/buntu/index.html","85649c4bed3dc075112034e0c480c109"],["tags/cad/index.html","587802b618c0822fc91254e480aed685"],["tags/coding/index.html","2d5a08f1c6f221411e362a475f637d0c"],["tags/h5ai/index.html","2dd2ec9114b043bf7fed7211ce8d5b2e"],["tags/hexo/index.html","b9fa3a7988ba2ac4c4198f4144221f8e"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","249d184d817209519470b828bc7a1449"],["tags/nas/index.html","5e2ef04c3ebdca3d5773bb654e2761f7"],["tags/tpyecho/index.html","d45be995756fa8238b7736f911b06b78"],["tags/transferstation/index.html","8c6a9c032b3608f967fc2bef89c64478"],["tags/typecho/index.html","0902ed7d6484bacb3b9878c72973b0a3"],["tags/ubuntu/index.html","7df5fb4c367c7b4f6c1f456a3ee5b922"],["tags/写给宝贝的话/index.html","311f180c058dbefe7dd5385090186e92"],["tags/原创/index.html","6662299c8411daae214efdd45d1ae638"],["tags/学习/index.html","795344da03b5f3ed7aecbceb0cc6a171"],["tags/宝塔/index.html","100202b071b8406e390554a20b122fd0"],["tags/生产模式/index.html","58b9d8c59ce79ec741ecc2dfa0d98af8"],["tags/百度客户端/index.html","6ea9058fed5c878725861419dbb93d99"],["tags/科学/index.html","92128870b1875d9e5daff35aec400aa1"],["tags/统计/index.html","5a9c194c69113e1a904ea3eee92b652a"],["tags/编译/index.html","dc0e07b87a67e80369c00b330ea57b6b"]];
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







