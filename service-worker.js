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

var precacheConfig = [["about/index.html","e8cb07eb476d62357bef4a6a75f3d558"],["archives/2019/12/index.html","9583bd9b19d8c719b1086aa1e7eb0417"],["archives/2019/index.html","6ef40d1c303b07910e626dc4e3d0b078"],["archives/2020/01/index.html","7c4829ebbcda614f720e5809ea2940ce"],["archives/2020/02/index.html","40bad6d789526085e8fc10b9c57e8759"],["archives/2020/03/index.html","64b4641f3249172683893dfb9fcc4196"],["archives/2020/05/index.html","f5c017483b3672e387ba792b705e01a0"],["archives/2020/05/page/2/index.html","79741269990901d746f19913f5bced02"],["archives/2020/05/page/3/index.html","84b1891c991aa1522fe753597ad8ca05"],["archives/2020/05/page/4/index.html","3dfc7dc4818f319a05573d0517fe9964"],["archives/2020/index.html","02890e982526accf71803056f4575f0f"],["archives/2020/page/2/index.html","b1552b1c4ae534114bba71bbc4df680e"],["archives/2020/page/3/index.html","f2b81eddb12374521d57200afe4a3e84"],["archives/2020/page/4/index.html","c21dc5c95800cf28b86f68897518a2c3"],["archives/2020/page/5/index.html","6636951997612a2a13f1e0e8923b7599"],["archives/index.html","d424e33675d2e30cf6cccafb342d7408"],["archives/page/2/index.html","f7a2e5a0b173d99c87590929f629b9a5"],["archives/page/3/index.html","698a8fa930989fbc6e8c7677033620cd"],["archives/page/4/index.html","a2ac5d9c1ced99e05746c894b6368abc"],["archives/page/5/index.html","1286968386c88c03cbb9c1f6d51fa078"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","83bb330ad257348bfde380f72150115d"],["categories/Code/index.html","a791ad33a07d0c3b736908584c8cd478"],["categories/OpenWRT/index.html","592237408d35d03b60dadea7bbabc9b7"],["categories/Plant-Simulation/SimTalk/index.html","8c63988868b91dcaa2765c6619f654ae"],["categories/Plant-Simulation/index.html","e147d1dadf6dcb9edc9089db12c37fcc"],["categories/Plant-Simulation/实体/index.html","0f1710cca6d69c327ea8d98438e25bf3"],["categories/Plant-Simulation/常用代码/index.html","dc2509ef4db27504334bc2ddcc8e041d"],["categories/Plant-Simulation/常规操作/index.html","a39d08e201b07d10014afb51b632b54b"],["categories/Plant-Simulation/模型/index.html","3fc3d49ebf27b527968e912de0c68d02"],["categories/Plant-Simulation/背景/index.html","adcf2a5730129933f2bd6bd562648349"],["categories/index.html","a1cf8d67fd6529fbe01d72a92806104d"],["categories/nas/index.html","67579d89d8ff5fec73b55e686c2ad5d0"],["categories/ubuntu/index.html","f9d64607c03dcf0691b127b7deca6e3e"],["categories/ubuntu/ip/index.html","19c2625be883479f62946bebb77ec0b1"],["categories/ubuntu/下载/index.html","45d34e0eeba67bd638670e91e54a84de"],["categories/ubuntu/命令/index.html","5064968498bb13f6e57b347ad900f405"],["categories/ubuntu/配置/index.html","c557ac3eefc0d16d1ad5a8da198b8487"],["categories/博客/Wordpress/index.html","cc5ea10bf04ab73b3313ce057051c854"],["categories/博客/hexo/index.html","10454bc9c4b9dcf20fcf3bd2d3a07c9f"],["categories/博客/index.html","2e71445e5205f2b9a27d70dff4b4e9ae"],["categories/博客/page/2/index.html","c1cbc3d43bba74fc848d5cb972655404"],["categories/博客/typecho/index.html","8106506ee82be83e9fb62e8b949f91c7"],["categories/博客/统计/index.html","5ca979a918690edefe2808bf2254700b"],["categories/宝贝/BB/index.html","c4794a44f4f50c3090c5f05d38f115da"],["categories/宝贝/MM/index.html","140c7743d70866d5c7e04c9ec2e01e71"],["categories/宝贝/index.html","8896f213b6732dc9f6fd35fcff312aa4"],["categories/思考/index.html","f9dbf97fb8f2abb474ec00dcca8a8dfa"],["categories/思考/职业规划/index.html","84f2d0aa3d7ba0b4e3a6e1832d18cd25"],["categories/科学/OpenWRT/index.html","c9663d4cde9bdfa75f9a209eb8401f78"],["categories/科学/index.html","d861fb51805b6d6ccc8b76b665c4010d"],["categories/科学/手机/index.html","30b8dfd6fa78359f12f1b0bee0f9a189"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ab6e44aa194ce08e380be6ec8f7b5cfc"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","22c548b22e24620a3ab06c903eef676d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","f7e0658e0fb83a4fef56d41fa21587ff"],["movies/index.html","9b786b132c4b34a072b30499b2d816ba"],["music/index.html","8273f63b0e9a68622289bdafaff44a4f"],["page/2/index.html","d2d13962fc06154b7171a83bcc3b1690"],["page/3/index.html","9067059779e3c76a072dfaf74c467896"],["page/4/index.html","6e83966f6fd7725e3dda0304fff2ebe6"],["page/5/index.html","de0b913268188363d378ece7714eb002"],["posts/2019/12/04/00/35.html","09e84ec01531caebc86d72fc23faf998"],["posts/2020/01/15/20/18.html","3fffe15b14bc4ce600939919ccc75db8"],["posts/2020/01/16/22/18.html","faf0fb4f504816c51e4101b4cfbde78b"],["posts/2020/01/18/22/18.html","38de52a071be3045fd565adffc8a4c68"],["posts/2020/01/19/08/29.html","610c0819f0ad66c169f039ef019b85ab"],["posts/2020/01/19/22/18.html","d7000191052090c29cddc7632598b09a"],["posts/2020/01/23/22/16.html","3987378db278d6fb38ef72fa7e64ba93"],["posts/2020/02/04/20/18.html","ebfa74047522d9ae6fb8bb418222d152"],["posts/2020/03/12/00/20.html","9a0ef0b1ca8c4d5dd78324bf6d8a9a94"],["posts/2020/03/20/22/12.html","d239c5383ee7066821816456997d6ee6"],["posts/2020/03/22/18/24.html","712ca0cb241be5b215b0cac8dd9787cc"],["posts/2020/05/03/22/12.html","243e6bf70a851bcbf494691346ed31b3"],["posts/2020/05/04/00/05.html","5584c8698be1573a6a1ecb06f9d045b7"],["posts/2020/05/04/00/09.html","aad2102728ea2b8189988030423d9809"],["posts/2020/05/04/00/15.html","a7b85ef0a001d11373021619b07d81c5"],["posts/2020/05/04/14/58.html","f3bf460ac5429eadb880a988e807b234"],["posts/2020/05/04/17/01.html","d491c981adf469a21fa435f74a3fba78"],["posts/2020/05/04/17/19.html","838aa4241d8c35a07dfc6d20b7691cd6"],["posts/2020/05/04/18/18.html","54a50ed30493aef5b3b7a3ceaa960065"],["posts/2020/05/04/18/24.html","1139834f4bd236329b07872672c8b389"],["posts/2020/05/05/11/12.html","fff29f39efac3ea5e5d7a349403d871c"],["posts/2020/05/05/13/20.html","9a98649bf711abe0c127d8e7f124d591"],["posts/2020/05/05/15/20.html","6e255b36acd466b9da4f72f77c8c7f84"],["posts/2020/05/07/21/21.html","012f26de4137c71dafa8abcbef57f7a3"],["posts/2020/05/09/12/20.html","bfa542d2b89cf3ac676833ae324c2019"],["posts/2020/05/10/18/18.html","7a5d1f6aa6b1ba5e876c02da0d4499d5"],["posts/2020/05/10/22/18.html","e1af0493c50a23f3ad7a48f232e51130"],["posts/2020/05/12/20/18.html","5635c231face2c02815edf32dcb30147"],["posts/2020/05/12/21/18.html","87050aa048e2ef0616560e950d609a9e"],["posts/2020/05/13/20/18.html","65bebcb405b03924bf846476bda7a744"],["posts/2020/05/13/23/58.html","d02b7548bc5704f8dff660289098dc4a"],["posts/2020/05/14/11/18.html","66b028eb7e5aeda62f9a955da80dde85"],["posts/2020/05/14/12/18.html","89e103ad98f3864c1eef61bb2847f80b"],["posts/2020/05/14/20/18.html","adfd60800edb5982ed36e2a0c37b41ac"],["posts/2020/05/14/20/58.html","9e3af3f641acebb770061443304b615e"],["posts/2020/05/14/21/58.html","5951c7ced8d2276b80306971519a7298"],["posts/2020/05/14/22/58.html","535682f96a0d29d10e205c8fa056cecf"],["posts/2020/05/14/23/46.html","e3b690a378ea28fbba4076d6bc42d9b2"],["posts/2020/05/14/23/56.html","3495d89fc3ec910ed9a4f3c4b4f2fdcf"],["posts/2020/05/14/23/58.html","ff88ba460e63f31079729ac5e3691324"],["posts/2020/05/14/23/59.html","79e655b985504f36c2dc351a180db695"],["posts/2020/05/16/20/40.html","b843cfd330abeaf6f64898efeb92f886"],["posts/2020/05/16/21/40.html","37c3b65a46438dbae10e7f593d5861f9"],["posts/2020/05/17/21/03.html","98e3ddf05b3f41c0edf6332a6cc12e75"],["posts/2020/05/17/22/42.html","af8edb91df3dd070961ed60d6d8facc2"],["posts/2020/05/24/07/03.html","cab8519026dc6b68527117427da9ec6c"],["tags/AGV/index.html","f78027b1501af45639aeabc644541e8c"],["tags/Github/index.html","dedbacf6e5b7ef228b238d48e98acb97"],["tags/Move/index.html","d676d77dbcc4d10221e2c0dfc48cc250"],["tags/OpenWRT/index.html","1d393fe11ec8b77082900482a98d7208"],["tags/Plant-Simulation/index.html","dd09dcf8420b9db1036b649c87230115"],["tags/Wordpress/index.html","6da3ece185b3776a2458f696a5aee2b6"],["tags/buntu/index.html","3c8403d62c696e3dc5016e171cc7807f"],["tags/cad/index.html","9d0ff9ceefca28602dc9be738617604e"],["tags/coding/index.html","87f01b3eb75f05f3f54209a86d9cfec5"],["tags/h5ai/index.html","67e18c10b109c954fb31aacdfaf03eaf"],["tags/hexo/index.html","d24a6259b908acaad1ac85b2facffbe2"],["tags/hosts/index.html","1bea5ec867e65dbcabae5bce97e5b101"],["tags/index.html","a8141a2efec5b5b3ccbba5a81e1f7b50"],["tags/lychee/index.html","9994b9d26956b84c380adde43f220ee8"],["tags/nas/index.html","585a3849338ec5526ae628a5d0d57e61"],["tags/tpyecho/index.html","88a982b863d69b60378561050859acf9"],["tags/transferstation/index.html","aeec1dc06b362da8801565e119b81465"],["tags/typecho/index.html","65e27f6e590c354ac1aee4bfa578db4d"],["tags/ubuntu/index.html","45084f3b474c444732ef0fd675ef8a83"],["tags/写给宝贝的话/index.html","448491105ae715adc5a244e3a1922eca"],["tags/原创/index.html","dfa031bceabb3cee5f8ced12eb6a7c77"],["tags/学习/index.html","6955b32d1ca3e636e1cc16e13550904a"],["tags/宝塔/index.html","80e1df1fdbb39b24e9209b292942e1cb"],["tags/生产模式/index.html","c9d82535afdad17c9004c477d74b217b"],["tags/百度客户端/index.html","d56fe95e7662850ddb68de412290113a"],["tags/科学/index.html","361bc255f3d9df0cf779d01084fa61bc"],["tags/统计/index.html","af0019d22a5b8baea379def252f35946"],["tags/编译/index.html","ef32d42dff0083d063b756096ee91892"]];
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







