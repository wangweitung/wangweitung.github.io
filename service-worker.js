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

var precacheConfig = [["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","7cf9755013e958612e0e15ef9e64efd0"],["archives/2019/index.html","203a37f3932655e365dc465fa8cbfbc5"],["archives/2020/01/index.html","3f821236acafb7534a61a314d363874f"],["archives/2020/02/index.html","a2e33c6d0176a482ed646e419e36e962"],["archives/2020/03/index.html","b3a6ad3aa014da7f03d490e1b8d6283b"],["archives/2020/05/index.html","570018d935bda958718d0e5731b5cf8e"],["archives/2020/05/page/2/index.html","6091a219895fd841f1c79bd728dee727"],["archives/2020/05/page/3/index.html","bf98ca17d8e63b6bd0c4e3305b3deca5"],["archives/2020/05/page/4/index.html","cbc52767e7e20c7322893a2cedd2cc1d"],["archives/2020/index.html","cc6f0e34fb2d4f01440690c2fce2504a"],["archives/2020/page/2/index.html","c3990a1aa934bf256119c775514a6989"],["archives/2020/page/3/index.html","e15c66bdb07db388c5e0e56351e6d2c7"],["archives/2020/page/4/index.html","b55dcc126ab70c83d06c2b21f15b6d0c"],["archives/2020/page/5/index.html","da8811f3e277b942b0d7dada309e3273"],["archives/index.html","2a14841290cdd430f3931722029db623"],["archives/page/2/index.html","6395cbddf1af369a95e34d834fb9800d"],["archives/page/3/index.html","c3c82e28a916fb24a0fab71dbc0917e1"],["archives/page/4/index.html","479e490196199330bd940cbac42176c5"],["archives/page/5/index.html","b3d50ea67969b989d486f8696284deed"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","b17ee5d31820c36d1693cec77c854be8"],["categories/Code/index.html","bd655f40f721cf79f2c9b30804f8919a"],["categories/Plant-Simulation/SimTalk/index.html","ffb594d30fcccda4b36d8395bcc3a891"],["categories/Plant-Simulation/index.html","f212c13fca2934060d7afdd4229eefc7"],["categories/Plant-Simulation/实体/index.html","c1e9f4497e62cfafb71bd54bda271573"],["categories/Plant-Simulation/常用代码/index.html","a3f36d2945c7e2b7d3eb9b8dc36b8c33"],["categories/Plant-Simulation/常规操作/index.html","04ed2cbc891ba3ae3123432a6623dc44"],["categories/Plant-Simulation/模型/index.html","0e1dabc5492e7857d59da8510c925c63"],["categories/Plant-Simulation/背景/index.html","b2e76e983208a4d681bbd3bb134d6931"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/nas/index.html","a3246b3d433acaf6e4c0934836afefe7"],["categories/ubuntu/index.html","89623857ac66cbe3f584f8871f18d9e1"],["categories/ubuntu/ip/index.html","1c0b194db729f4d35d9a9de59d4fb0ef"],["categories/ubuntu/下载/index.html","051565866f70dbf43c7fb2ec867fb1c6"],["categories/ubuntu/命令/index.html","e9f2ce9ea93a04c6ec081f7b0bd68740"],["categories/ubuntu/配置/index.html","2a26738cb8fa28f5b38dd92ecaf7a909"],["categories/博客/Wordpress/index.html","34da2997c0b1b85d836bbcde18518e0c"],["categories/博客/hexo/index.html","691cc9f875a9f36df723dae38ed25ce1"],["categories/博客/index.html","1d76f92bbea7d93e42acdd520c6874ba"],["categories/博客/page/2/index.html","fecdf0aa81ad682a88f9a05c202045b2"],["categories/博客/typecho/index.html","eaa13b1427e080c80a2089468c319509"],["categories/博客/统计/index.html","e6a5331cb279c1aa7b8ba5e6f054c075"],["categories/宝贝/BB/index.html","9bc4ab64b272deb147338229ff004b04"],["categories/宝贝/MM/index.html","707bedbf80940ec8d65f7baf88110b26"],["categories/宝贝/index.html","8b7d8297886caca5e3431a803d3ea5fe"],["categories/思考/index.html","507d7679cab833a6cc6366b665deb43d"],["categories/思考/职业规划/index.html","1b73905a4bcd2fe601ed4c10bea06179"],["categories/科学/OpenWRT/index.html","03972d37cced5269728c4a4f35138f97"],["categories/科学/index.html","3829727c327bf2d31c813b91b3065480"],["categories/科学/手机/index.html","b7a9b746103419384180f12bc37add67"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","c0d51f2ca29a6e427f963a627ed62adf"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["page/2/index.html","52b4c5cc79cec904041905c771bedfd8"],["page/3/index.html","8467a9f54ba0e27152dca68a53866520"],["page/4/index.html","b8d588aaca399588b2a124a1226ee09c"],["page/5/index.html","2e25f2cca2200ef7bb2cd61605296b7f"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","269a20ab2a030e01033ba3a8cad5c2a0"],["tags/Github/index.html","4b6c92a6614703ab9480d2b3ca1e0a8c"],["tags/Move/index.html","250664524415716f71deea201f6a3ec9"],["tags/OpenWRT/index.html","9088feb1eebcd0616651f927a5d8dd0a"],["tags/Plant-Simulation/index.html","9c3325bded1a05532dcdc5dd2c60bb42"],["tags/Wordpress/index.html","89e7a94049c468b54fc4460a8e374647"],["tags/buntu/index.html","e0d7a9c8ece5f9efd162ad91f7a83e73"],["tags/cad/index.html","ba836cf8ce93e01e845434f2c961a15c"],["tags/coding/index.html","b6f4c05311d716b9b24f45093c2af401"],["tags/h5ai/index.html","19fe99ebe81d6d6b7f544b1a11cc8abd"],["tags/hexo/index.html","4e5d87f7df91413174309a7a024f5bfd"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/lychee/index.html","5775ee42898442112f450b42077e13a6"],["tags/nas/index.html","bbeb302140a464ad753a6afe6a0df90b"],["tags/tpyecho/index.html","778e0b381b22128bbecec0b5e1f6ded5"],["tags/transferstation/index.html","50bedad16461f25d50b0e01d121ba32d"],["tags/typecho/index.html","e7568e1798ab2c8d83d6baefa8cef0ff"],["tags/ubuntu/index.html","76e3465e32eef5379ce1e7dad21d2c58"],["tags/写给宝贝的话/index.html","7d7fc0cb7c9be700558616f864377575"],["tags/原创/index.html","6f36bc10e1619ac750a8b6c49a2ef1e6"],["tags/学习/index.html","455e140c8fcae5c922abfe68cfd1b986"],["tags/宝塔/index.html","430adf11e94ef80df5c56cf324fc53f8"],["tags/生产模式/index.html","6b40560403ad782ffe71985601037599"],["tags/百度客户端/index.html","b3d7d071be454972248614ad57d52a9e"],["tags/科学/index.html","51506da86359f678e454ef0b1be0ac49"],["tags/统计/index.html","ee6319a45b066f7cd2e1ad8f72832591"],["tags/编译/index.html","9608fe64e33f1196a79f231e56922bfd"]];
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







