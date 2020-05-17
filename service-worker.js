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

var precacheConfig = [["about/index.html","ec40820a12096abbf61c4cbb28eef65b"],["archives/2019/12/index.html","b5220648e07d1238a8be4c869090e81f"],["archives/2019/index.html","8a83417d4861965d6c2c0f5cf2aee85d"],["archives/2020/01/index.html","c8c44467520d40d197dd3427f0daf4ca"],["archives/2020/02/index.html","14462739a8a33a58ac17f12ee4f2c32b"],["archives/2020/03/index.html","73dfc992242bbe6cd729e9655034ff44"],["archives/2020/05/index.html","6c7ddb3f1ef17cf5054c6a618a623b0f"],["archives/2020/05/page/2/index.html","c0d5147f78f230a495a9735a00bc7d0c"],["archives/2020/05/page/3/index.html","5be74078feb5739db6081d31f5bb43b1"],["archives/2020/05/page/4/index.html","3988f9fec71fe41cd94f1eff9c553931"],["archives/2020/index.html","438faa85acd00279dd32533cc65f04d7"],["archives/2020/page/2/index.html","d341557d1cdf426c40d2d79246498a6e"],["archives/2020/page/3/index.html","fc7c65fa19c9fe41469bac579db07bb6"],["archives/2020/page/4/index.html","33bf0f1462a6d25c86cd2b14313ffedd"],["archives/2020/page/5/index.html","5d08c9e979bb56ff68b556daa5ba7654"],["archives/index.html","a1aecd74d6439fbb62f029b6521d789b"],["archives/page/2/index.html","24218b7d104127b9fe402ca6f322fb41"],["archives/page/3/index.html","d0e6cfb4bf3f4732c25211085642b8ab"],["archives/page/4/index.html","6c0a3f784edf7162ab74614441d0fd7e"],["archives/page/5/index.html","736efb6f0298c46ea990af4e6c0d0853"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","13c2e5e9a08d560205369c8a70dd823c"],["categories/Code/index.html","2adbca975d17a20c09110ab6730974d5"],["categories/Plant-Simulation/SimTalk/index.html","ca26675f9bae667b17f2b287ae8ae938"],["categories/Plant-Simulation/index.html","5200764126acfe2d935f011e9a4bff87"],["categories/Plant-Simulation/实体/index.html","69e48b4dd89ce026dff137e721c0efdd"],["categories/Plant-Simulation/常用代码/index.html","007fec0cdb1071e2ffd31057fe591880"],["categories/Plant-Simulation/常规操作/index.html","0c6a2463f8fb91a07d74d020a2db64c3"],["categories/Plant-Simulation/模型/index.html","ad6c7f209232f00b7800ce8e79fdb8d6"],["categories/Plant-Simulation/背景/index.html","da015ec649d05ab7eb94938266917602"],["categories/index.html","08afedda9664dff1fb7234c92884a9fb"],["categories/nas/index.html","c408066510a0fe3fadb3b50992ed2cda"],["categories/ubuntu/index.html","9d053a98ee7066299567392a00274bc9"],["categories/ubuntu/ip/index.html","d3665333ab9802aae8438742e048b25d"],["categories/ubuntu/下载/index.html","8a5e51495f48f1982e56183cd84575da"],["categories/ubuntu/命令/index.html","ab68e49fb0ff7be6e184fc9981e0b3a5"],["categories/ubuntu/配置/index.html","e918ff1433108602055f9d5c5c0f12cc"],["categories/博客/Wordpress/index.html","d71d451fcf3a59b92b3b736f72ee211f"],["categories/博客/hexo/index.html","48f36e0080436c7317e947162c2055a0"],["categories/博客/index.html","c415f8c011be5c22e090fe65be855223"],["categories/博客/page/2/index.html","3fda41ac488d43924747bddff168b94c"],["categories/博客/typecho/index.html","4d206405ac1b10a874c7d31a6c134486"],["categories/博客/统计/index.html","b1024ca8a1c85928fe85eb767f85ab31"],["categories/宝贝/BB/index.html","a85182a06032284a4a5c2b0c2d684657"],["categories/宝贝/MM/index.html","e067f30fee4706ffd05986fbcd6850af"],["categories/宝贝/index.html","643d9a2dcb5c7d2f1cc4bf5367f36af3"],["categories/思考/index.html","540d6d28eb6043b647eb6af108be5a27"],["categories/思考/职业规划/index.html","23fb62608fa97e51f16ae3759b6038bf"],["categories/科学/OpenWRT/index.html","ae3242ab4db7aa65e8f2a9449437a4c1"],["categories/科学/index.html","a486a8331527a9bdb64e354542def251"],["categories/科学/手机/index.html","9c68f9228b7300756ce183551990b1cf"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","32b5f4ef1815c7e1545d741680e81171"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","29bdd519d08d2a3f6148d1b635456e98"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","543926394a8acddb55ac74afa129c5e5"],["movies/index.html","c8815fa01df31c3dd85474d8408e824f"],["music/index.html","a6ac8f02e30f12498b4f9d2b280e1bde"],["page/2/index.html","645d5e59735ff993bf312ce753256ae2"],["page/3/index.html","adb213a81e3759ddb0772fafe48ecb58"],["page/4/index.html","4bc6a26913cfc6eeb4a60dea98246053"],["page/5/index.html","eb29a4dc24bb561d110d6282867981e3"],["posts/2019/12/04/00/35.html","80b4e41d67bf93602e6003832989489d"],["posts/2020/01/15/20/18.html","1f05d372368c9e6f7ffdc50c3d770423"],["posts/2020/01/16/22/18.html","f88e0ced4437d706a948e10c7cf87bf7"],["posts/2020/01/18/22/18.html","3e4e984e2209d3e2d266d23107dae2cd"],["posts/2020/01/19/08/29.html","a8018b03681da75e4549df090665847d"],["posts/2020/01/19/22/18.html","d49839d67d11fff2e26ff591949b878d"],["posts/2020/01/23/22/16.html","0ae6e7dd786392499a5f3b353d55b8ca"],["posts/2020/02/04/20/18.html","467170714a20ae31813e1af20c3ebd7d"],["posts/2020/03/12/00/20.html","8419c5de95fdfa49598b17156001f5d1"],["posts/2020/03/20/22/12.html","4d117d424d46d28c94250ecec1d95824"],["posts/2020/03/22/18/24.html","0bbbd9bd76b3f91cd9438fa8e6a630b4"],["posts/2020/05/03/22/12.html","4a5be382528ba0c77fab929eefdcdfaf"],["posts/2020/05/04/00/05.html","42a5a12041969bc72eb94953f379ee5e"],["posts/2020/05/04/00/09.html","67dfce992b3d7ac57b93050fa72189ab"],["posts/2020/05/04/00/15.html","bbe80b17843959e8e64769f25245973e"],["posts/2020/05/04/14/58.html","1608e24f5c98a14f09fe7bb2880cbcb4"],["posts/2020/05/04/17/01.html","b0121e77dc4fb240c44141aa769c17c3"],["posts/2020/05/04/17/19.html","6d84987ec1abb19ac93b1726138967e7"],["posts/2020/05/04/18/18.html","8873fa71cd1164f2c7a6c6c74ccd57f1"],["posts/2020/05/04/18/24.html","4036f19b098173f414daa7c4c0bdaa0c"],["posts/2020/05/05/11/12.html","50ab47dca0b30c3d6fb7cd6a1333f765"],["posts/2020/05/05/13/20.html","ce6844d7d5e7a64d3b891a9098e82d77"],["posts/2020/05/05/15/20.html","7517dfca3226b5ec98dea4fde00d785d"],["posts/2020/05/07/21/21.html","b991e728c166fc4f0e5d9589c95dd371"],["posts/2020/05/09/12/20.html","9a2f6c5438052dd7c734828a8eb87f52"],["posts/2020/05/10/18/18.html","1d72cb2b2f0433ca61824c9c623ba953"],["posts/2020/05/10/22/18.html","4b3bd15b999baf507b415f491f0eae41"],["posts/2020/05/12/20/18.html","f36d466b4c22c855e680c3d9c170d4b8"],["posts/2020/05/12/21/18.html","abeee8fa99babeac5e6827f51ac86911"],["posts/2020/05/13/20/18.html","406169298918c03807becc5d65522c76"],["posts/2020/05/13/23/58.html","5047372a796316afd4a769063d2233af"],["posts/2020/05/14/11/18.html","43b54fdd65c2991cecc74cfa7ffaa5b0"],["posts/2020/05/14/12/18.html","ac4cb7dd0b2b379eb9a9888b7820e67a"],["posts/2020/05/14/20/18.html","198de772b2f0c642b44a47e75e2e6d64"],["posts/2020/05/14/20/58.html","f5d3cf438f003f55f8510ea116aead8d"],["posts/2020/05/14/21/58.html","ce1890c5cfe5e5b95501bb0bd5fcaad5"],["posts/2020/05/14/22/58.html","300fe4bee4e5aa8d140aae4e51f46401"],["posts/2020/05/14/23/46.html","ac3d61154b326ce0ee2a71a2cc165bc9"],["posts/2020/05/14/23/56.html","2cc5f035e9539b766afba2ea8ba44897"],["posts/2020/05/14/23/58.html","069a9eece53a44f2ccb4e389087a6fb8"],["posts/2020/05/14/23/59.html","10495d65542abbb692d8d8db71305a9f"],["posts/2020/05/16/20/40.html","417a7df8cd5aa52f81262e3234a7a1f9"],["posts/2020/05/16/21/40.html","28e60713a3d78ba5cc57d639ee432b2d"],["posts/2020/05/17/21/03.html","1cbb07f56341751f69cc07d5ea82374b"],["posts/2020/05/17/22/42.html","6ab8d17047cb68922e9ae9b1237151cb"],["tags/AGV/index.html","6e4fea0010a502b1aa7c25f115ceef98"],["tags/Github/index.html","1ec80cec42a7d4e42483b150c0d4529c"],["tags/Move/index.html","3b7a0f549e1de833c478046e5a8f7c23"],["tags/OpenWRT/index.html","0f151c13c6021f2b0e0b3addf5d10ce9"],["tags/Plant-Simulation/index.html","eccecadb8acfb94eecdee7cbc8fa7f3d"],["tags/Wordpress/index.html","522a5f93fc40ce1dadb705bb317aba87"],["tags/buntu/index.html","492b1dc99b4555c60d1b600ca0d970ec"],["tags/cad/index.html","18d89d0a7f16882bb8b5e52e12b1fdf6"],["tags/coding/index.html","0dc6aa0973fcb64854497a1a1061db2e"],["tags/h5ai/index.html","7f8c1dc0e8d46304a5bd8dff9b280a55"],["tags/hexo/index.html","7e36a913d3da9a8684978c87447d1be2"],["tags/index.html","fb83f600bee92bb48ac4fa7a64fded0d"],["tags/lychee/index.html","b6e7ec27d9c2033510632eed4e7fa945"],["tags/nas/index.html","c0722319ee5d659789dff312eae80bab"],["tags/tpyecho/index.html","bf37f8bd6e472ab0238ed2f5fa94d943"],["tags/transferstation/index.html","0bfc7b3d9bf1d2a163de6d268eed0579"],["tags/typecho/index.html","64d0a79a516ea502415132fb41469361"],["tags/ubuntu/index.html","a38a23353cd22697003d765438dff552"],["tags/写给宝贝的话/index.html","dbb0639c64b3535d3964e6be8cbc4d94"],["tags/原创/index.html","860234853efa00171647b6b1bbd9bccb"],["tags/学习/index.html","39dd48f35094f72cb1fa115c105b0c1a"],["tags/宝塔/index.html","db001fff7fc166eeb959755432be2de3"],["tags/生产模式/index.html","0b848c398f04fdafc25dec4f26dd781a"],["tags/百度客户端/index.html","d5a58812f59553675ee78418ff84a1e3"],["tags/科学/index.html","be7a100dbd49f4c5877007c12bb4dd81"],["tags/统计/index.html","c6f576ecbce6baae0d0ae933c8781c70"],["tags/编译/index.html","248795dbe0ec097572d476a86125fef2"]];
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







