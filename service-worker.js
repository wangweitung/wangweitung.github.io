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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","74b4e8e916543012a2f3bc91a19662f9"],["archives/2019/index.html","21d6fcb78bac3c55735bf265092b4499"],["archives/2020/01/index.html","b3106baac84e0aca3f8919821f42097d"],["archives/2020/02/index.html","1771366a8124a8f2888fc4ec5ffbd591"],["archives/2020/03/index.html","d86f43af8a876f33467d175c7ee29fcd"],["archives/2020/05/index.html","7cb45e13882483bda0b90968992ba555"],["archives/2020/05/page/2/index.html","7bb394c7657f67a307c68df430a9c000"],["archives/2020/05/page/3/index.html","e4c7b1f5880380ba3e063638c099d607"],["archives/2020/05/page/4/index.html","0a6a18740f2165882942f422169a5029"],["archives/2020/index.html","50cf07d3851e6b6f9c342af1fb43d409"],["archives/2020/page/2/index.html","b0cf35eb892f54f0c31d44ad34cbaeb4"],["archives/2020/page/3/index.html","6a416d698181a67794970a17cc54d3f3"],["archives/2020/page/4/index.html","3386fb166c4d5c0ee243634e7518abbb"],["archives/2020/page/5/index.html","fad051da0903d0231ad2d7c8c0da7c37"],["archives/index.html","807384d00a26782450641509b2bcffae"],["archives/page/2/index.html","b7c13c8c748d3308c720a77fdbd45527"],["archives/page/3/index.html","7f2952c0de65b9c13a6bcaec949cc4f0"],["archives/page/4/index.html","b2e1463d0fdef2626b1afe46ef3804ac"],["archives/page/5/index.html","e424183d2d2a27ecd2d0279ca57bdeda"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","2dbc7b69e69625b8fbf558616b66b9f9"],["categories/Code/index.html","a50b6646a541c24e00252450c6b9c4a3"],["categories/Plant-Simulation/SimTalk/index.html","ab2771e14c39371d3432b19449636e41"],["categories/Plant-Simulation/index.html","6505af21493b066ce9948625b5febfca"],["categories/Plant-Simulation/实体/index.html","690cb19aa16fb4cce2c9900f5f8da148"],["categories/Plant-Simulation/常用代码/index.html","26c8119de770a5252ba6aa8f18d660e1"],["categories/Plant-Simulation/常规操作/index.html","2107e2e015d2e57cb5a76c0e727c1e28"],["categories/Plant-Simulation/模型/index.html","a1e4a018964ea0de03feb6060921db2a"],["categories/Plant-Simulation/背景/index.html","6409a321b0ce9814d8c172007d4699c7"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","2ca230fda63c6ad0ab2f6afe2c9ee734"],["categories/ubuntu/index.html","a09418e92e012b6383b89e1aef4323a7"],["categories/ubuntu/ip/index.html","cdc0f914f126da7acf57ef4e300b54e7"],["categories/ubuntu/下载/index.html","6611a3ef91ba1a08faff889246b11e48"],["categories/ubuntu/命令/index.html","035a0c62dfb1c56acbe984fcd7521f3a"],["categories/ubuntu/配置/index.html","e2d12dfd804d38bfabe52c9d3408e660"],["categories/博客/Wordpress/index.html","104ac6f877e1722a84a2c018bf6bf0e1"],["categories/博客/hexo/index.html","865cef4cd2006df76a4de2407057aaf3"],["categories/博客/index.html","88af91bc281c6556e9f4ff83f6d265d4"],["categories/博客/page/2/index.html","4e09c7779cbea5479f52e65bad07b5d8"],["categories/博客/typecho/index.html","5ac145af87365436093280ca4b0a5d2c"],["categories/博客/统计/index.html","35be25a593445438909c501d291e5a25"],["categories/宝贝/BB/index.html","78f828b1484fc7b66f9c07595a5335cd"],["categories/宝贝/MM/index.html","9878eac4efc9a617e3a4b0fb708d145d"],["categories/宝贝/index.html","c604bc86ae0329878dc8adbc1249d2c9"],["categories/思考/index.html","533c3ff3a77e4bc0e9182e7dbbfea68c"],["categories/思考/职业规划/index.html","ec7925942ee1107e653dc3837c003d8f"],["categories/科学/OpenWRT/index.html","e04f3e32cf3e895c51b2284b86d032fb"],["categories/科学/index.html","569e1dc0a790fded0185950c824d2979"],["categories/科学/手机/index.html","2d1345cb959f9213b20975c1a7bc4fa2"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","5f7d584675786c60d04f8afe2f17dd3f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","21d44743045119e8c43079d2ed9efdd1"],["page/3/index.html","15c095082b15747e37aaf68655e37701"],["page/4/index.html","c35f6f41d5882d2dda1aa137c8dd47fa"],["page/5/index.html","f43b6552b68368ff1a4a3e2caf7e4511"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","89385ee808f5d6ba291f8aad34dc3260"],["tags/Github/index.html","ce970bdc4d163577d7af1ceee1049100"],["tags/Move/index.html","b72f5e677a4d5ca4f12d2f30ab258909"],["tags/OpenWRT/index.html","4bde354968522c740a40da7bc3aed42a"],["tags/Plant-Simulation/index.html","608af9d4c2a4e172235c0c96fc9a5e66"],["tags/Wordpress/index.html","ad60bd540df65fd0c61505c3fd63b6bb"],["tags/buntu/index.html","03c147520437b673fdd8bb5195ebb2e1"],["tags/cad/index.html","1067a1aa4e7da7edcef608573bd0825f"],["tags/coding/index.html","d3662e14c8c6b788f88fde5620cbe6cc"],["tags/h5ai/index.html","2758067028f1b8a1541ee3b4909eb5b3"],["tags/hexo/index.html","17b177cdc88e4c2a13d7c1c805fa71e3"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","0a645ac13d15365d2b3ad65ed1c5c553"],["tags/nas/index.html","850ee9cd0057c43d651d2fb804766498"],["tags/tpyecho/index.html","0e62b317a42d8158915fd700f3032fcf"],["tags/transferstation/index.html","b41914759c4b19732ed28d0d124416ce"],["tags/typecho/index.html","2c659e1f0538387a1314c6c9a4487bea"],["tags/ubuntu/index.html","332d39a39b7fdbd4f13a70ab73d34ad2"],["tags/写给宝贝的话/index.html","b1adb4bb708dd5299c4d896cd03c71b7"],["tags/原创/index.html","e7388242483e510dab50c91ecc33e719"],["tags/学习/index.html","47d206e66e2d24a4b8f080c182484ae4"],["tags/宝塔/index.html","bd1dcd1666c1d5e18879e6f536516b1f"],["tags/生产模式/index.html","932db5e7363ce45da930f74d9038ac9b"],["tags/百度客户端/index.html","02471eff1257c74e5adfd075018b5619"],["tags/科学/index.html","926c5cf2cf10c1d48531cf514585d217"],["tags/统计/index.html","7f53b4559a13bae20a835071a29ba3e5"],["tags/编译/index.html","7e283894641fabeebf1d8f0d5b2bb079"]];
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







