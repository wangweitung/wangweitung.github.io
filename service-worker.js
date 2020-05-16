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

var precacheConfig = [["about/index.html","0623bdc7fc2b4759eb469bf3976dfa81"],["archives/2019/12/index.html","9f6d71fb4cb31abfe3115825a7a49847"],["archives/2019/index.html","4784a74f6daf14854bac1cf19a7d831e"],["archives/2020/01/index.html","3772a6ba83cc4a2b93148cd22c333e61"],["archives/2020/02/index.html","2a18a9dbe5f86b46d22b93de34de0d01"],["archives/2020/03/index.html","49beac1de675555693340009593182a0"],["archives/2020/05/index.html","699f9a9019221b4ceddc3c6ad90aa3ee"],["archives/2020/05/page/2/index.html","56cb2d391db678ccd3a7c8fef89bfd45"],["archives/2020/05/page/3/index.html","19785152180f3f5ce186a87ad38e21e5"],["archives/2020/05/page/4/index.html","04b43fb8ccaa09d0df6faf21a649d500"],["archives/2020/index.html","b0a070283ec2fd12ea3b00425625467b"],["archives/2020/page/2/index.html","6d08e8112d0e582dce7cd5b361203015"],["archives/2020/page/3/index.html","c9e977ba87295b31ffd38d3e1bfefd01"],["archives/2020/page/4/index.html","eec9d1ccdc4cc75c722ad83e606e0ece"],["archives/2020/page/5/index.html","cb606f02439e26b29dcad76ee3232316"],["archives/index.html","43fe26fcdadf5d536322913a1b9e9246"],["archives/page/2/index.html","212ab8711b3942c720fb61374f883cf9"],["archives/page/3/index.html","e33734b98bbcd5cc309a6462836b5a7c"],["archives/page/4/index.html","2ad5c2b77c5980fb9c106d744076ea83"],["archives/page/5/index.html","8a73723f9851926f5baf245e2322fb05"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","c26eedc53129b9080cc796e01a1c71f0"],["categories/Code/index.html","d17c74683cf28edebac3e8b24a589200"],["categories/Plant-Simulation/SimTalk/index.html","d5ce0eb4e2134a692daa6cd571aa8b23"],["categories/Plant-Simulation/index.html","e73dd97d0d4a347e0b9e66e61749914b"],["categories/Plant-Simulation/实体/index.html","f9cb5f01f03e40864a45689b503f1f91"],["categories/Plant-Simulation/常用代码/index.html","92c53032df6861d77319d5fbf4a9ead0"],["categories/Plant-Simulation/常规操作/index.html","3a21d0ed45437f77c51b393fe62d37a6"],["categories/Plant-Simulation/模型/index.html","5ada0683da404d54d73668693ab8c4a9"],["categories/Plant-Simulation/背景/index.html","49e4b8ef9f3ba30e0c217843914adba4"],["categories/index.html","eec321fb41c00df1bb018bcdd5113990"],["categories/nas/index.html","1cbce3292606df690bc313bef5a16d93"],["categories/ubuntu/index.html","9a0e2f8d99bb38369d7df7f870730c84"],["categories/ubuntu/ip/index.html","a5ea3801355667f6175010974dba375a"],["categories/ubuntu/下载/index.html","c546b7243b119528ce93207c09c6285e"],["categories/ubuntu/命令/index.html","4c952a2f3a67960f29d04583dbcef4cc"],["categories/ubuntu/配置/index.html","8dd91bf461f3c75b4559857d4879ffa7"],["categories/博客/Wordpress/index.html","a12d7f832e846dad06f145109a954dcd"],["categories/博客/hexo/index.html","65fa2183ff746d96b5b5d116620f9067"],["categories/博客/index.html","cc4d4ab63e1cf097472c8bdbb8e9efa4"],["categories/博客/page/2/index.html","fe320b5d0b04fb685057e064a9102f8a"],["categories/博客/typecho/index.html","7a91a124ee9ee2b883c62eb0c3ca4eef"],["categories/博客/统计/index.html","d69d9aa906e95b968f180cf558b15ad6"],["categories/宝贝/BB/index.html","e6439a92dccfb873553d1b4a842c6f48"],["categories/宝贝/MM/index.html","dcd1e8f20b8c2bbbdae7e930433c66ae"],["categories/宝贝/index.html","d655f8974a51dffc28377fce604e84c1"],["categories/思考/index.html","9d3ae6f1a3ae00ab96da6292c044d421"],["categories/思考/职业规划/index.html","3eeb700a1757324169478264ccbaca5a"],["categories/科学/OpenWRT/index.html","b0304366551346c8dc7bea4e9c30a166"],["categories/科学/index.html","d1bd09ae24e889cfecbed955fe0cdc1d"],["categories/科学/手机/index.html","5c8fb58db2d77338c98f122baf2da22e"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e1b031ef366791a0b0de2abd817c12bd"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","deeb750e678bb8658501e6ab4735eaed"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","2d10ea7e8a70b8b64efcf7ac15f4bc67"],["movies/index.html","9f1b9f5b0330b262b8988330c3f0a8fc"],["music/index.html","630918fba3fa9ea72256d2abfd5f2a29"],["page/2/index.html","1aabec73a3e3738bb540e4b4b8ed34ab"],["page/3/index.html","ebb6a8c136e8f6430a208e0a0c10ac81"],["page/4/index.html","3d08c80f7d98b19ff0b45a39db43281f"],["page/5/index.html","c8bce474465440a8a37ca1b4745641ba"],["posts/2019/12/04/00/35.html","dd20c697e657cdae452d48a509d0e4e5"],["posts/2020/01/15/20/18.html","6a3fae5f36dac9599974a1170c3cdad7"],["posts/2020/01/16/22/18.html","8f5ce8ffb1473e802c8854b124100add"],["posts/2020/01/18/22/18.html","38d60db6dceff4b61d5417dcaebd3b8c"],["posts/2020/01/19/08/29.html","c3ab5dde74ab541fd452bc93d652af05"],["posts/2020/01/19/22/18.html","a1310738e6224d3721bfdd6a083d974d"],["posts/2020/01/23/22/16.html","10b0d1b6a903bea227f5e4bcd6eeba1e"],["posts/2020/02/04/20/18.html","9cd084d1ca1a76030718a51df05b4508"],["posts/2020/03/12/00/20.html","9ff38f0f9a85e3fa716ae1a4e281662a"],["posts/2020/03/20/22/12.html","a73fddc47c89d07d43af0cf7ef16582f"],["posts/2020/03/22/18/24.html","1819a598529b74eefea78dfb24b219a0"],["posts/2020/05/03/22/12.html","1aa8b56d12b4b3c1448b9d4e399673a0"],["posts/2020/05/04/00/05.html","db65e02f5b9d1b25d40fe92f81fe2546"],["posts/2020/05/04/00/09.html","6e3ca90e540b57cfb34d7217349c205f"],["posts/2020/05/04/00/15.html","200a1adca3ae26e373802750a467399a"],["posts/2020/05/04/14/58.html","03d2d2637e9b108f86079ee07ac2f1af"],["posts/2020/05/04/17/01.html","18c7cc9fd81f2e8abb5447f3de2a40b4"],["posts/2020/05/04/17/19.html","99041d0af2f88423fd356407b4a84473"],["posts/2020/05/04/18/18.html","e495d81f7d3ad2f081eaec322f28e78d"],["posts/2020/05/04/18/24.html","2eb5daa171076555563e15f4822e306b"],["posts/2020/05/05/11/12.html","9812b8217c85fb8173ef3a21b0e8f30f"],["posts/2020/05/05/13/20.html","dc9b43340e63b9177062cb15b6d5b2c3"],["posts/2020/05/05/15/20.html","9b0ef1b41463da469addb52c1bd24f86"],["posts/2020/05/07/21/21.html","2fa997e8456316b0866ad1b1c0ec8fa5"],["posts/2020/05/09/12/20.html","89b76bfb322a4f0d85a516beaa44ffb1"],["posts/2020/05/10/18/18.html","762f664cf4f4232e9e811a39e4d4f835"],["posts/2020/05/10/22/18.html","23ba0c9ad08fc4f228e4470296525231"],["posts/2020/05/12/20/18.html","996da8ac989eddfb3b9a82747ead3bfe"],["posts/2020/05/12/21/18.html","c3c5b429bfb92591c8f02c7dcfd304a3"],["posts/2020/05/13/20/18.html","eebd0b6207778e5191d5f2c02fe85082"],["posts/2020/05/13/23/58.html","04b522a809dfb6d7731871423960bb4c"],["posts/2020/05/14/11/18.html","0da8ae52e7a574d4df0e23e491c6d9db"],["posts/2020/05/14/12/18.html","c3cb3cf51f73a91d2174ba1cc13f93a7"],["posts/2020/05/14/20/18.html","35c8301803c962dbb9ce520b9c6375dd"],["posts/2020/05/14/20/58.html","7336896ac2891d49cf3a74aaaea145c2"],["posts/2020/05/14/21/58.html","3aa9e7f60ad07b2bc05941c6ec0a96ee"],["posts/2020/05/14/22/58.html","95ede00e808b68befb6fedb35bd4d074"],["posts/2020/05/14/23/46.html","577c93c14bc23286ead865145516622c"],["posts/2020/05/14/23/56.html","767d6f6f2e98442fcef511b1f7298ea7"],["posts/2020/05/14/23/58.html","da293e3a452e90f65f12d736854d2173"],["posts/2020/05/14/23/59.html","a794ec02c611884b375a98c92fc43e3f"],["posts/2020/05/16/20/40.html","7cd501bdf6618f701f0d320894cf7392"],["posts/2020/05/16/21/40.html","8b84ae7e95e5ac1811ff712fcddd417c"],["tags/AGV/index.html","9eab9eee9c76b82a9386db22b2ce5231"],["tags/Github/index.html","68c6eeb311660536182aeb4ee95e1995"],["tags/Move/index.html","72972b08ae644eaed9c543ffd11e7752"],["tags/OpenWRT/index.html","064ef09ccdd84c09c1e235f4c0fe2e04"],["tags/Plant-Simulation/index.html","28d7bb09ab04be26a2d382cb94f93481"],["tags/Wordpress/index.html","c80c3721adb5c76ab4c0fe3528fe3abe"],["tags/cad/index.html","aea397f5800f924cc351021cf0eba93a"],["tags/coding/index.html","fbd86e4eacea17a3b74e60a1da5bf665"],["tags/h5ai/index.html","159ba4e4a8c8ced505a4fb077ccbb2a8"],["tags/hexo/index.html","0c02931c108dd856ddeba395bc6f240b"],["tags/index.html","d3548bbfd8a8bed9476afacc4be85e3c"],["tags/nas/index.html","1b4a53b90089abcfb748610a6e11b16a"],["tags/tpyecho/index.html","7de764f1689f16e2a395d47e614c5c17"],["tags/transferstation/index.html","3ab049173a074dd2704f2f7ee17a1bc1"],["tags/typecho/index.html","d58914f36858ea4a5d59c9f153b63927"],["tags/ubuntu/index.html","25d06563bf448a7b59917fbdb8ca4c11"],["tags/写给宝贝的话/index.html","f155cb1d9d73b51674e87ed2c2cdeca6"],["tags/原创/index.html","4951626d8f4835f2c0ed226cab0f45c8"],["tags/学习/index.html","b90118a2af1f3096744d6504ae6ddaba"],["tags/宝塔/index.html","4f93bf1cff2a0d4d526b176f65da87e2"],["tags/生产模式/index.html","7773e7bc85c5ebf7247036cbd6f80353"],["tags/百度客户端/index.html","3d52399c2a394dda8b2294e59aee147e"],["tags/科学/index.html","f8c2e7fb0087103c78a43c78e508aa2a"],["tags/统计/index.html","29babe5ebe402a9575b4b0522c293720"],["tags/编译/index.html","e240043b7f3a1381c8333470c7322c6e"]];
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







