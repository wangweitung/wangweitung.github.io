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

var precacheConfig = [["about/index.html","de1f8402b00235b864ee3ea930909fca"],["archives/2019/12/index.html","754d8b6a9b6a05fa0b8d9bfc58b590b3"],["archives/2019/index.html","193d5ad7ef449eee7bcce0bd53939e9d"],["archives/2020/01/index.html","b9822d0d600b7cf95b96b20fec3efe49"],["archives/2020/02/index.html","50c0a4eb646b5d63781a5e6f6bd11fbd"],["archives/2020/03/index.html","f2263e07bc8ed8e74d69b621b0e77a7d"],["archives/2020/05/index.html","7e0ad422513ff3b8b7d3e5498681b36d"],["archives/2020/05/page/2/index.html","c57e3ff9f26cad44474c90c3812f6697"],["archives/2020/index.html","de28647b99d87551e3890ae1e7e5f033"],["archives/2020/page/2/index.html","5db5f2df336bf6aec68f0511b04ae06c"],["archives/2020/page/3/index.html","a4f985909289eb91da98abe1c672860c"],["archives/index.html","b1953e8e9627a972c2942f80c38c83a3"],["archives/page/2/index.html","f2cd4b2fae4ee7c7b2cb3cf622f80dd1"],["archives/page/3/index.html","67ebe22de1616367caa867d9170536c7"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","13dd7f497765284d635f836c35c895fc"],["categories/Code/index.html","2c90dfeaca6a03e61626a13a7cc76702"],["categories/OpenWRT/index.html","b13a511ff5289e8bcfee8a203662ad00"],["categories/Plant-Simulation/SimTalk/index.html","a59c91a7232e2d87630e1a7f274178ad"],["categories/Plant-Simulation/index.html","67228176212301df2cde31042ecbe261"],["categories/Plant-Simulation/实体/index.html","37fba655012d26ad04dc6e657a68817a"],["categories/Plant-Simulation/常用代码/index.html","3ebd1240e0487fec07615fe7288e369f"],["categories/Plant-Simulation/常规操作/index.html","92aa6471daa9a52b37171480dfb8099c"],["categories/Plant-Simulation/模型/index.html","5713c3de674979b099eb6b49175eb60d"],["categories/Plant-Simulation/背景/index.html","bff385ba27843615c9e558a8141bd858"],["categories/index.html","a12586991fd4d9302351e2dc56959646"],["categories/ubuntu/index.html","69b2e61208c0dcffccae0da2b54790d5"],["categories/ubuntu/ip/index.html","af720de716dbd38e58f1982df8ea4e10"],["categories/ubuntu/下载/index.html","7d1cf866195f8ca483aea0a1512f4058"],["categories/ubuntu/命令/index.html","7f4646b9023f92a0b2e71e95671245d9"],["categories/ubuntu/配置/index.html","76813ad82a75b649a04a5416e49d8dca"],["categories/博客/Wordpress/index.html","63e9a6890571b73bb392898a6bc47f54"],["categories/博客/hexo/index.html","c7bffab09d564df15ccfc739d0db4380"],["categories/博客/index.html","af5d73ec463326ca57eb29c0cfd19c75"],["categories/博客/统计/index.html","19ed7f1b072f07a57575c9e140437e99"],["categories/宝贝/BB/index.html","6563c3c9fea26511984064578f8907ef"],["categories/宝贝/MM/index.html","e1e2216e6ca31214fcecdf207daa060f"],["categories/宝贝/index.html","7fa86fbac85557b2ebc989c0fe2d55cb"],["categories/思考/index.html","d99670bcc923fe7772a9154bae5419f1"],["categories/思考/职业规划/index.html","3282fed1a3ae051260608cecd287b64d"],["categories/科学/index.html","e5b8bc8028cc89bf9480fca6e2fa6464"],["categories/科学/手机/index.html","f6890f0f5a74ec3a9efdd5962856df47"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","dc9f16dfad582ee2f473b27919ae9c63"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0d456d1326b111f9af51ccc221ce2a82"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","aa6d00a6366da033c0bcc4ca873e31ab"],["movies/index.html","ddfe5da6a50c5b834b6b21f1bdd593c1"],["music/index.html","a336d802f579532c025f03e34e7dd3f9"],["page/2/index.html","95947d89bbe752529092d2cf9d27f241"],["page/3/index.html","a452b62cddbb81cf4be59bcf0679b635"],["posts/20191204A1.html","24a8b0601175235e6fc656b9241bcdf5"],["posts/20200115A1.html","9897e88f42eb9999e5ecb688209d4bf2"],["posts/20200116A1.html","1a8926838fa349cc0a595a239ef4c27b"],["posts/20200118A1.html","d76eb94a85c1badcf8ad3403de1327f4"],["posts/20200119A1.html","f8b5d93bcb04bba8ea7c663cecfb02eb"],["posts/20200119A2.html","afdceb94909f715f4bf2b8ece37a718d"],["posts/20200123A1.html","ff43075e95e100ed890e03dae2097737"],["posts/20200204A1.html","7782a815827d1da86f95705c077f2264"],["posts/20200312A1.html","68cf4ba9427632b1c55920113b49b2e3"],["posts/20200320A1.html","37f15fbbcec0d55edc58eaaf68606575"],["posts/20200322A1.html","4600ec243d46c6e3f20622886600f20b"],["posts/20200503A1.html","1b44f30cd47b413eb8f362d9c28909ba"],["posts/20200504A1.html","88d1fa20b8db1c71ab6558ae25d03ada"],["posts/20200504A2.html","a07c2e828f5fe5f5dbb5ee0d7ecae718"],["posts/20200504A3.html","76a46d783e6c78add24c89b0b3c9b552"],["posts/20200504A4.html","9b9be48434ba920b26154670c63ab5f7"],["posts/20200504A5.html","88055eef384cdf42e7a7f4fa87e968c1"],["posts/20200504A6.html","d50f72751db025b648e97e486241844a"],["posts/20200504A7.html","f9156ee22a9c2d8fa2886b9c8cb2457b"],["posts/20200504A8.html","c50b2f3d51f05c6602d2beaf3d90049c"],["posts/20200505A1.html","01f644d3b719ee9890c246a7e527bace"],["posts/20200505A2.html","fc6617d4d6008089a32cfa55fc9d0203"],["posts/20200505A3.html","83f9285032b86c1037f1db1508a3c9f7"],["posts/20200507A1.html","50a1d99285fb326eef36e5aad3efa270"],["posts/20200509A1.html","c86373ac4df76f37bb8ccf39c4f060ee"],["posts/20200510A1.html","7bae0462cbffa6c8d65b2e4472f7338c"],["posts/20200510A2.html","bcc6e88410e791bdb9679ed687c2f7c6"],["posts/20200512A1.html","f1fe19d6418b8e1c298a22176002d167"],["posts/20200512A2.html","0b9a8c5061c7b7fac14f120cfbb7bbcb"],["posts/20200513A1.html","fa28568b99f4a5bc07d2b496bf6625f7"],["tags/AGV/index.html","61005e906f4c2c04ed51da160fd9dc85"],["tags/Github/index.html","e892f4a73da1a47b5ca820329d01ea52"],["tags/Move/index.html","700e1943b61e8742c8715c3f88ee23f7"],["tags/OpenWRT/index.html","0b011200addd4d3ecfd5345130a48946"],["tags/Plant-Simulation/index.html","6a4ca6bfed5d2e7fb6370271f0880b72"],["tags/Wordpress/index.html","099a502c78bac51dac57e4d5da005e98"],["tags/cad/index.html","e3418f5cdbcb9b5768f0593762609ea6"],["tags/coding/index.html","329a570dcb401e83389d2073b8569c29"],["tags/hexo/index.html","7e1b3ce498bd77e7e8a0df9d484ad5a2"],["tags/index.html","9096be6d5040d2c9ea5f400e1b9be078"],["tags/transferstation/index.html","ed53029eb126bdac4bdbda7052184591"],["tags/ubuntu/index.html","e4bacbe5743ae5b71d211f349202e7b5"],["tags/写给宝贝的话/index.html","6ba05a06083d8dd0518ea4b4dff29df9"],["tags/原创/index.html","977ea6398e969e67893e2f9b5a0bcd5f"],["tags/学习/index.html","41f855e13d6d9a14932e4f9a3374f1dd"],["tags/宝塔/index.html","f60a73f68815332123a227545cc294e0"],["tags/生产模式/index.html","04989e588f075fd2db8208c004f68427"],["tags/百度客户端/index.html","460ba792dbea2eb0dd2a7ee1bad4e78c"],["tags/科学/index.html","c0e9c41a3d38bfff96e897e86e31d28d"],["tags/统计/index.html","5d8b194c87e0a6c61c32cda39c95870a"]];
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







