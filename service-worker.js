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

var precacheConfig = [["about/index.html","836ce84e603949050c4ab1528118e431"],["archives/2019/12/index.html","0bc0b963885eb8cd182fde4563268abe"],["archives/2019/index.html","1f2e9b50dabab6e9d1d23992f81e8608"],["archives/2020/01/index.html","8d5029c72a5701d94d0577a07e4591b3"],["archives/2020/02/index.html","e7d468404b60ac0fd41b0ddeacfae2ac"],["archives/2020/03/index.html","b6f20557e0254097bc356de2c3b25c61"],["archives/2020/05/index.html","141c877a0a30dda7e4ad87ce8a573f86"],["archives/2020/05/page/2/index.html","16ab49445a6ffff350f84a87737ced0a"],["archives/2020/05/page/3/index.html","00b4d50c69a47ddad895a04933c94d6c"],["archives/2020/05/page/4/index.html","56150a89645113db772fd2ea71ad934c"],["archives/2020/06/index.html","7d2baa0c79195e06232f260b38760bdf"],["archives/2020/index.html","2afd9bf2e47269611c34a2f6ca321aa1"],["archives/2020/page/2/index.html","3a516c37177ecbf1d55799f846adffb3"],["archives/2020/page/3/index.html","ca2e418409acb8fc24299389035e306b"],["archives/2020/page/4/index.html","f3aeb79c9e662419cd35b4f7b8f86f35"],["archives/2020/page/5/index.html","aa7c26b43187c6c47ce05b91e393032b"],["archives/index.html","b1dea3e871c6ff7c2be5c48205e6fb87"],["archives/page/2/index.html","6d5fdab2de36bb11df1364de779a05b6"],["archives/page/3/index.html","a7423dd9b799e07ae4edcd45d0b8b5dd"],["archives/page/4/index.html","6ddade2c870926795f71daa181d61971"],["archives/page/5/index.html","f1c8e40195851d14537a1e42f92d27b7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","f5cd375889c5999283f680e5a2b64215"],["categories/Code/index.html","b1ba5b69468dddb3360ad3596e0defb9"],["categories/Plant-Simulation/SimTalk/index.html","305df25cc8506900c87538460631017c"],["categories/Plant-Simulation/index.html","c2c582fcc988479590f5f6d00cbe75c7"],["categories/Plant-Simulation/实体/index.html","f529a0a8602873c5c4b03fca5b413570"],["categories/Plant-Simulation/常用代码/index.html","1d2dd6a52b2ab8a8c52953a733193efb"],["categories/Plant-Simulation/常规操作/index.html","01fd1b5d610e56feb7f122897bc322f5"],["categories/Plant-Simulation/模型/index.html","428e1f25daec08a359712445d3405681"],["categories/Plant-Simulation/背景/index.html","8e86713db20c83f70cc083f80d3bbef6"],["categories/Windows/index.html","a90851f3d19e864d1fcc96aefecfca96"],["categories/index.html","e6043eb1f4156dc3e38ab71c621427ed"],["categories/nas/index.html","b97e82923fc2e41b13b7584673058c8c"],["categories/ubuntu/index.html","eec31c3ee5c099adee75e1771a08998d"],["categories/ubuntu/ip/index.html","e287ef721d9bad8fade2c274dd6225d5"],["categories/ubuntu/下载/index.html","e1851d976376f55f7e27f2fd54a4e8a5"],["categories/ubuntu/命令/index.html","9c48d04999325ec3333b1a216db10c90"],["categories/ubuntu/配置/index.html","445b01312a93ea6c2c38699e564ca9bb"],["categories/博客/Wordpress/index.html","ff162668a557bd384f213a444582f070"],["categories/博客/hexo/index.html","a9a030f0c448bf8e7234afefe9485e6a"],["categories/博客/index.html","f0e1683b419b1fc90c7f142d4d93eb11"],["categories/博客/page/2/index.html","0845b6a43c41d43186162fa816ba3194"],["categories/博客/typecho/index.html","718659744c799195caa6ce892f300b8e"],["categories/博客/统计/index.html","c27d9d26a6cbe8d99b1e9ec1e77df934"],["categories/宝贝/BB/index.html","0469962f9e68f63637294e0bd54478fd"],["categories/宝贝/MM/index.html","901d5a95097e4a76cad31d56128d8244"],["categories/宝贝/index.html","f1c4f059ca9d8947da6cbea9a056edec"],["categories/思考/index.html","0bf0afe3b468dffe1f4b4b464b45f9d6"],["categories/思考/职业规划/index.html","817594e98f25fffe126282af700db2ce"],["categories/科学/OpenWRT/index.html","f2819119cd165cdea5455f605d24966e"],["categories/科学/index.html","82fed02f3b6ad329542fb751049dadd5"],["categories/科学/手机/index.html","2a34db8a0d70519c91092e39c8fc5c7c"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","f699c0645a5838451ac4681da415d739"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","876a5514a221dbe6ea36fdb662e97a7c"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","393fa90fce4376d06ad1fcf36cd0feaf"],["movies/index.html","712d4d4e70f357c665f214d9454c7bce"],["music/index.html","6649f135b7fae5ef07cc5596247ec3c3"],["page/2/index.html","b3c46df0e490fbd4c8a30988a17b5aed"],["page/3/index.html","9e61cff66bb86fbc47b2ea36c1811bb7"],["page/4/index.html","487f0bfbcb02cb6b19f21233e1e9f6ff"],["page/5/index.html","eef1cc0db13e0205ec3a1275f1067e7d"],["posts/2019/12/04/00/35.html","51b5ba765ce59a41654fa5979c9ebae8"],["posts/2020/01/15/20/18.html","de0bfe09febae3173dd166ec71f580f3"],["posts/2020/01/16/22/18.html","9c7bef605aab6d234e4da975ef587405"],["posts/2020/01/18/22/18.html","c7c78a74098f566e6baa742cd1f04754"],["posts/2020/01/19/08/29.html","065d42528185b87703b8f56528ec954e"],["posts/2020/01/19/22/18.html","1d8fcc427e0974814c36a0d0879b8db9"],["posts/2020/01/23/22/16.html","66c01d9d1f77603e86dba55b1bbe5376"],["posts/2020/02/04/20/18.html","116621fd20cba5e4bd0dce3f82037d8a"],["posts/2020/03/12/00/20.html","0005d757deec09eb9a4e4bb44391f460"],["posts/2020/03/20/22/12.html","c940e4305c2f9442bed46b416a8297ef"],["posts/2020/03/22/18/24.html","2c5e70b4dec43c2ba432c743797428a4"],["posts/2020/05/03/22/12.html","9d268ed5e25ad574765e9cc8280ae532"],["posts/2020/05/04/00/05.html","c6d745eaf72673ee98f4593a2e2f0d4d"],["posts/2020/05/04/00/09.html","b1ca1841a0437c55723694ad9153241c"],["posts/2020/05/04/00/15.html","7d0f9aa053f04893341926d526459fef"],["posts/2020/05/04/14/58.html","ac66e2bffe2bc3262bc2780e6048b1af"],["posts/2020/05/04/17/01.html","d9ed7c5ce2576ddda637da66bb94790d"],["posts/2020/05/04/17/19.html","ac4c6a960c190301ff6e16eb436a730c"],["posts/2020/05/04/18/18.html","68d2d7e848b4d1a42282a53fe53842f0"],["posts/2020/05/04/18/24.html","fcc3bc86fb7d9e792193b7aabf3b353c"],["posts/2020/05/05/11/12.html","e4061e19d47ca3416eb0e170e6f0c9a6"],["posts/2020/05/05/13/20.html","aa095a72b6d3cf63bec693a0d4c1c838"],["posts/2020/05/05/15/20.html","89c3336649f5e1b501be875bda58a504"],["posts/2020/05/07/21/21.html","3790eafa8c43c67847d15f746b38bcd7"],["posts/2020/05/09/12/20.html","4b832e45025b57d8f2dfb6907ee607d3"],["posts/2020/05/10/18/18.html","b6a957933639eb307777bb324cfcf19d"],["posts/2020/05/10/22/18.html","694d6320e2800fcfbca69555423b922d"],["posts/2020/05/12/20/18.html","228f2dd308841a57f8886e72f7cd7bdc"],["posts/2020/05/12/21/18.html","e5a9dcb85cefe9a50f1cb9a14796eb53"],["posts/2020/05/13/20/18.html","52ff4b9efd6dd6c38cb12c934ee0f0cc"],["posts/2020/05/13/23/58.html","486bf430ea93587de4fbf59d5650e782"],["posts/2020/05/14/11/18.html","3fa3bfaa8a0845b682f2a3aa0b3d6e39"],["posts/2020/05/14/12/18.html","ff7407f9f53f5b97195456a1b7a57497"],["posts/2020/05/14/20/18.html","865d3d837d29a01e02dc460d11bf9732"],["posts/2020/05/14/20/58.html","cfad077ce2413b1eb81c79576e7c4cb9"],["posts/2020/05/14/21/58.html","a4878750508ce7b052b4104f50042184"],["posts/2020/05/14/22/58.html","56c0c6ee2341d33fca6f46dfe7e83cc7"],["posts/2020/05/14/23/46.html","f8fc33a0682a05ed5d56b8e8499e0f56"],["posts/2020/05/14/23/56.html","249862f87250a53a027e771f8d71cf96"],["posts/2020/05/14/23/58.html","46c0a4ebd63ae699fbea7d7bc08504de"],["posts/2020/05/14/23/59.html","09e7d3e2527aa4614ba59e45b5296702"],["posts/2020/05/16/20/40.html","6884e1b15825ee14f2565f967d8eed65"],["posts/2020/05/16/21/40.html","f46cb44fbd98012dfd12015f1ba6ebf8"],["posts/2020/05/17/21/03.html","3697bc1de102237f0d03db5867259c0a"],["posts/2020/05/17/22/42.html","08450b284fbaa69d7e3616639d3ccc4b"],["posts/2020/05/24/07/03.html","e3b63cb7feca011dd5f1181bb3988478"],["posts/2020/05/24/13/03.html","2295ffa23a4df2d898f7688016135a87"],["posts/2020/05/25/13/03.html","0d8edbb1e097533ba06f8115ba21d0a3"],["posts/2020/05/26/12/03.html","e0ebefaa0d1cbbef5401d027a3159276"],["posts/2020/06/04/12/03.html","e50463ce7661b3c53aa1e50e9064ec82"],["tags/AGV/index.html","96c126fc56baf12720ba488f68710e5f"],["tags/Github/index.html","a06d9658c66409a984d8725d5ebeb1b7"],["tags/Markdown/index.html","93bbc5551a186e760ef3a59f7057de6b"],["tags/Move/index.html","f674c922576a9fe24236d23189b33b88"],["tags/OpenWRT/index.html","5484d3fdf1ff863ea882b28761f282aa"],["tags/Plant-Simulation/index.html","85ed8547f65d856c54d9f00b649cadd8"],["tags/Windows/index.html","846231c64787576301598ecd3e303507"],["tags/Wordpress/index.html","82d7595b8c01c194ccd7fb2264da03d0"],["tags/buntu/index.html","40d1d9e60a80599e52123582452d732a"],["tags/cad/index.html","04144523b2a87489e4ab486ab79b8fb3"],["tags/coding/index.html","d96eee75923fd259422071b2ddabd32a"],["tags/h5ai/index.html","d7e6ccc80d3a1160f0ec3c0057fdb74a"],["tags/hexo/index.html","5b2640e172cc4e6bdbfcb485e26dc785"],["tags/hosts/index.html","1b95ea89adf69b692bdc19b186d5fb15"],["tags/index.html","0746839da610a574307b3f0b8a79aef9"],["tags/lychee/index.html","d04b186244209f8dfacbdcc2ff129773"],["tags/nas/index.html","f958290250c377a95d8e2aa372511a32"],["tags/tpyecho/index.html","3d933a1814111815acc14d1aafbaef9b"],["tags/transferstation/index.html","3d0ac694b5dd3f04266837a1ad492dd7"],["tags/typecho/index.html","8a945f480c4829a43cdacfd9f4e342f5"],["tags/ubuntu/index.html","eab847e8291e65bd00a48e5986ef2c37"],["tags/写给宝贝的话/index.html","fd88a7ee085f61a191a58cc3c0955916"],["tags/原创/index.html","14ec966465510e1aa73602f1a89cd094"],["tags/学习/index.html","1f04fac22cfcfac956a7bbed0853da8e"],["tags/宝塔/index.html","d6e8e100e95cdce6dda9a8548ea0d27c"],["tags/生产模式/index.html","10e1a81e9215d51222d1ae4a6c97e2ae"],["tags/百度客户端/index.html","51e5b5105cb753f169a17f3f50955495"],["tags/科学/index.html","80c5ec9d2dfa8a57ee4eca78d2fcd931"],["tags/统计/index.html","fca346079e6250a97b96f4fd013be643"],["tags/编译/index.html","7fa5b6d80c2fdbca03afac805959c384"]];
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







