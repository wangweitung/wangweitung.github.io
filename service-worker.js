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

var precacheConfig = [["Ubuntu打开防火墙.html","e31b0fe05497b0d068a8a2aff2d92a5a"],["about/index.html","95acaf5923ca3ba45cae624c8fdb291a"],["archives/2019/12/index.html","14dffd27f417ca8c4bdef83b201cc2b3"],["archives/2019/index.html","6cdf70183f967aa905ddb0da7a2e6fe9"],["archives/2020/01/index.html","9d4330cb6b597f25f3274abf1c08b177"],["archives/2020/02/index.html","b896b4ee156eb56b797afa235a57ea22"],["archives/2020/03/index.html","8e624ae6d8e85ecf248994550d9f0158"],["archives/2020/05/index.html","bf9e8feda64e149d0015d571bb680725"],["archives/2020/05/page/2/index.html","0cad15884cc272e065ba3e7982e81a18"],["archives/2020/05/page/3/index.html","30bfea736a59549d9767190536c60b23"],["archives/2020/index.html","a6e4de5ac4b92abe1c3f16dcf41029fa"],["archives/2020/page/2/index.html","0408d9fdf06ed12097ef0362df4519f8"],["archives/2020/page/3/index.html","9840872dac1f9b2c17ce051b4e6807a1"],["archives/2020/page/4/index.html","165824e3a1132e85c7758aea2b831499"],["archives/index.html","3588df2953dcf7cf6c0fa3beb0a6773e"],["archives/page/2/index.html","7e63995f5e9b2be0e9d8354b77f11295"],["archives/page/3/index.html","7c660eff287d69051ee1baec00f02b75"],["archives/page/4/index.html","1f82425e04a4a84ec3e5a5dc38fb4e97"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["categories/Code/Github/index.html","33415c50315cdd463c05b7bc12b2edf1"],["categories/Code/index.html","e28da18687b215e60a430f1dbb59d058"],["categories/Plant-Simulation/SimTalk/index.html","2c5078cac6f6d8da4ab0282fb84c5d28"],["categories/Plant-Simulation/index.html","7b0214d5b53ede96ba208314403adc2a"],["categories/Plant-Simulation/实体/index.html","139d81a9e19b12b7cb13f2616821b23c"],["categories/Plant-Simulation/常用代码/index.html","5b6e7327ec4af2cdffcf34583ae445e4"],["categories/Plant-Simulation/常规操作/index.html","ee4ac9448f58f791aed2bf0b2588cb7f"],["categories/Plant-Simulation/模型/index.html","844523c29880ea2e442f7e82c775d782"],["categories/Plant-Simulation/背景/index.html","e189cccc00b844202eac94ced9b864ab"],["categories/index.html","0e964531f553f014b012712afd37f131"],["categories/nas/index.html","c7f65735eb860a34bfd8f2d8d4be2dc2"],["categories/ubuntu/index.html","613dfae912de362661159329e1e99922"],["categories/ubuntu/ip/index.html","ef63ab328ee92536722499fd71e25a92"],["categories/ubuntu/下载/index.html","a6abdd6227a91dc0ecbc3a8fb33c2c81"],["categories/ubuntu/命令/index.html","0dec0cb5a4089b8010da776f8421f33c"],["categories/ubuntu/配置/index.html","892740f7b954b3b90fb8c510b8b77e63"],["categories/博客/Wordpress/index.html","5d80bea879bcd54cd813295c873f6200"],["categories/博客/hexo/index.html","75709c508cf960e39fdf302a244f8768"],["categories/博客/index.html","d6ed6c6524d66d4a52e7e7df653058d3"],["categories/博客/typecho/index.html","c9b15efb896ae0123becc443886194f2"],["categories/博客/统计/index.html","d5ce1d1f400f72011e6b2db31cc2f1ff"],["categories/宝贝/BB/index.html","a5d74edf2dd9b0c785a739167b6b33d9"],["categories/宝贝/MM/index.html","76ad8aa1ace7face796bcff9c44c7527"],["categories/宝贝/index.html","3b9a6fdf7827cd0b6021342be43d0d65"],["categories/思考/index.html","977d5592e714e228de04b55a088d7973"],["categories/思考/职业规划/index.html","ef49b9483f2d1786ebddc868b27cc003"],["categories/科学/OpenWRT/index.html","b6b7c607891ec84ae98b5570c1b5e186"],["categories/科学/index.html","a6beb44a5ee1c0618bfc70042cab564f"],["categories/科学/手机/index.html","226fcdafe72fe78270856a3bb45a9b01"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","4826bba3e088e298db5233c7ffcf806d"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","8859a483d58d9dc3960ce05930658432"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","f020dced35205cac7faea0676a4ebbb5"],["movies/index.html","f1b7275e2e316ea032884121cba99961"],["music/index.html","80816ab1031ce5475188963ecef33a44"],["page/2/index.html","a69f79b678644f4c58a31ded73071131"],["page/3/index.html","69f59ea8161cb9809f82c1f258981a1e"],["page/4/index.html","4f267b37c6650b195746b6cffeb308ce"],["posts/20191204A1.html","a74ad94e1700c6b65047215635f20567"],["posts/20200115A1.html","09cd172495b12d3349c6be55168379e0"],["posts/20200116A1.html","35885975b2449154501ce198de2a3c58"],["posts/20200118A1.html","01d1cd47e473f946016a44c48be17d08"],["posts/20200119A1.html","9c89240ecc2f32e561d6da348c11ae25"],["posts/20200119A2.html","b07db3db42d1acfb584e7c6c7ce0c0a3"],["posts/20200123A1.html","30bc5a23cce6ae431420bf32fd19236e"],["posts/20200204A1.html","5601f9daf29be78e7d8a1e18a7e2b77c"],["posts/20200312A1.html","9a77acca70d90f158e6daab2824711a7"],["posts/20200320A1.html","076c8520cc994f67ce2576d9ad5dbd40"],["posts/20200322A1.html","f34d6bb3f7206573773cbbafcecdf016"],["posts/20200503A1.html","cd6adb11226fdd3d75f33a0df0531ce7"],["posts/20200504A1.html","bfee70444000571d552d3f44224d363c"],["posts/20200504A2.html","52a1db53848dcb40a9db2402a9c05d0f"],["posts/20200504A3.html","2393205564682e0fb8dfd4efead591ad"],["posts/20200504A4.html","447f520dfe76c1de7b777547773ae403"],["posts/20200504A5.html","95da3ff5df832d623fdadecfc32067d2"],["posts/20200504A6.html","033a5120eac91926d9c25f2765b3b032"],["posts/20200504A7.html","8b59b02d598f9d80da3604095c856f78"],["posts/20200504A8.html","9f73d7b339076f1643cb9c14e4ee56b0"],["posts/20200505A1.html","2c53582708c9d3fb23ba44a5fb16a2f8"],["posts/20200505A2.html","ba0a35bff31996f6f3bcbec8cd183988"],["posts/20200505A3.html","48bd31b7f61703bcd57b0959ac3b31d4"],["posts/20200507A1.html","00a23ec1de518f79d4bf34229be0e68b"],["posts/20200509A1.html","0ac8b29317fd58df8b93968d04d38b5d"],["posts/20200510A1.html","ca5ae709969878246c55d1d3d928ab7e"],["posts/20200510A2.html","9ffa321dc719bef7fdff446014b16ff1"],["posts/20200512A1.html","77a622e85b1f4fe89f0a7cead76a8023"],["posts/20200512A2.html","d91a81076da0ee9df76baccbcfeca708"],["posts/20200513A1.html","088e04b66c1619a616692960fba02ba1"],["posts/20200513A2.html","dca809a51b7242772f022124d782933e"],["posts/20200514A1.html","934b5a96c72423cf0322ee37ce052a32"],["posts/20200514A2.html","65ae1d92824b08a471534279566e5867"],["posts/20200514A3.html","b425f92c688e6ed6772ea1c41c25b37d"],["posts/20200514A4.html","8f1c31b0ed378a79c8364d73e7b0afe7"],["posts/20200514A5.html","bd53ac3feb9d24b76c9cbe4d7700d5f9"],["posts/20200514A6.html","4048c92d727ca468287af3aa5d85572e"],["tags/AGV/index.html","6e37be7f38833eadc7c3cfbc386ce4c5"],["tags/Github/index.html","b8ed1c73fce5ee6de74492d1aacd5979"],["tags/Move/index.html","b65ed6c4c67cac8135bdc68a70c7fb01"],["tags/OpenWRT/index.html","3378eb0b997fbce96ee5893d0bfe9a88"],["tags/Plant-Simulation/index.html","bba1ffddb59aa95dc7b8a70851604030"],["tags/Wordpress/index.html","68d0df01c5685300ef88905b9bd8df30"],["tags/cad/index.html","f39ab8d597f0600846710a2a7c2054cf"],["tags/coding/index.html","f03dd84abcbc5781c39ca29f14bfc6f6"],["tags/hexo/index.html","0db32988444ad3317e663580b0148372"],["tags/index.html","6a626b8fb8cb4a20df1c9f91dddf6b96"],["tags/nas/index.html","cabc899d77f3645d60e088c294ebcb53"],["tags/tpyecho/index.html","2cda384cbd31618f8c518d511cf6b6ae"],["tags/transferstation/index.html","b11d9189fd0a8b85d457c64f9f7534c7"],["tags/typecho/index.html","1aafca1aa5f6cbe817cbbfd5bb4c7046"],["tags/ubuntu/index.html","a1161563aa2c477b7e2c4d0dd9974010"],["tags/写给宝贝的话/index.html","e8edfcfec9369de58caa42764881065d"],["tags/原创/index.html","bc73eada0f669169862417be12214f59"],["tags/学习/index.html","5382638a54a9c9725cdd1f665f39b5bd"],["tags/宝塔/index.html","4f4a09455848ceb56b0712cd45352258"],["tags/生产模式/index.html","2267e83aee03cb705e48a37cea69c18f"],["tags/百度客户端/index.html","a0799f1653de6627a9e9d50f8dde8ef2"],["tags/科学/index.html","be5ebbb01d6bfa2f8177793c57a64bcc"],["tags/统计/index.html","6afb78db8d3bb842c6bc6d7dae7e8c02"],["tags/编译/index.html","e117e7c6cbaafee3be7d3f4a99bb133e"]];
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







