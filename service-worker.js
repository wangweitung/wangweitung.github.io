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

var precacheConfig = [["about/index.html","91ef0549e40c7d63f9f1ae315e37d310"],["archives/2019/12/index.html","5ac3c1535eddcc7e30769e0151fe844b"],["archives/2019/index.html","8afa2d9f3b4e007f74149ee9e4b37b69"],["archives/2020/01/index.html","bdde6062e28b461be57526d399fcd444"],["archives/2020/02/index.html","92c6ce521f58e07977321025ec5cc5f0"],["archives/2020/03/index.html","e646bcdb648f3cef0e03a5eb3f122959"],["archives/2020/05/index.html","f184a121c8ac516ce057228c4701b8c3"],["archives/2020/05/page/2/index.html","ec2ff986d7e8e8186517993247b30ca2"],["archives/2020/05/page/3/index.html","86f32ddaf75ac67e27c819325065cbcc"],["archives/2020/index.html","a3395172fccb1bd35378a90ba2aec285"],["archives/2020/page/2/index.html","7b10cd8bd24997775ecdc1557e043aac"],["archives/2020/page/3/index.html","c57bd49ffd19d36a7795348c00b2e6ee"],["archives/2020/page/4/index.html","3c07cdac6a17e1d365b66d7849a9e0bf"],["archives/index.html","37cefa6f0a97731818dffe67907bd796"],["archives/page/2/index.html","fa67f449db718896fa044be268b28b12"],["archives/page/3/index.html","6e8f5c7146ab034e3bc3fe5ee4bb5426"],["archives/page/4/index.html","1d3505699387d9d955fe743ac9c3ed6e"],["archives/page/5/index.html","9789c17ff05e5015dbf12d88d3b4f4bb"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","35c13272b560d328310f24281557cc04"],["categories/Code/index.html","c312fb88c3e2fcdcb2bfda458ac710aa"],["categories/Plant-Simulation/SimTalk/index.html","2144ac6de343275edb9d49c3b854f8ac"],["categories/Plant-Simulation/index.html","8d6948ecde3cf93008ba380d6ff08696"],["categories/Plant-Simulation/实体/index.html","2111ff2ea68b9cb5b6c5d66b9d7d7778"],["categories/Plant-Simulation/常用代码/index.html","a755ae530f7d178905a2be3623941df9"],["categories/Plant-Simulation/常规操作/index.html","6906d74fa06ddd4efa6425a8e12c39f1"],["categories/Plant-Simulation/模型/index.html","62103a5717392d5bf0ac39b49d82b126"],["categories/Plant-Simulation/背景/index.html","1a83bbdfaa9759dc3af8ccb71464b207"],["categories/index.html","b08d2fd861fe90e9f2d650d9048086d1"],["categories/nas/index.html","4a566c70d8cda6f2cb6f6a2426eb1e3b"],["categories/ubuntu/index.html","9fba6ba787da798efd380cbbd8fc8303"],["categories/ubuntu/ip/index.html","6623597993e907a0f9fdaa366b29d249"],["categories/ubuntu/下载/index.html","5e0356d44dcdaf67de19faa96fe7f496"],["categories/ubuntu/命令/index.html","6d5caeb2ef714b44cf374f7822a405fe"],["categories/ubuntu/配置/index.html","9227a6ee2bd2bb226b2261d6205f54ba"],["categories/仿真/index.html","4ee112bcef0499566e6d33be9f74f6f9"],["categories/博客/Wordpress/index.html","5cd7f039ffb57c1f0ef1e9811b733eeb"],["categories/博客/hexo/index.html","3efc53064c014323439ed9e5ff63c140"],["categories/博客/index.html","28df978f3ce846bd27a30c97281812dc"],["categories/博客/page/2/index.html","862fe960602699cfb17659a30c267b25"],["categories/博客/typecho/index.html","911b41e36ca9eea9d36a7486e9350382"],["categories/博客/统计/index.html","af414d4dbe83b4c50173f9ed9be3dd86"],["categories/宝贝/BB/index.html","10a2b854d2d15038e192cc237b40fe96"],["categories/宝贝/MM/index.html","91aac34f635ca0125f82c22e56ecc638"],["categories/宝贝/index.html","dfac03926cced225d68225d86c52524a"],["categories/思考/index.html","0986f67b44820f13dcd909ba6e6e4758"],["categories/思考/职业规划/index.html","fa854f03311ff6585991cdbaf28955d6"],["categories/科学/OpenWRT/index.html","eb1b900c14cd6296f770dc7cc05d0a6c"],["categories/科学/index.html","2a7bde4c8417aac30a07066d8b36eca6"],["categories/科学/手机/index.html","5058635a65a3d7f5e96144e7f8b57660"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6addc228656805162ac4225364eaef78"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","39d56c25a1b8680889a8184fc2b2142f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","4b6d5b2e5d4352bb4320661ea44ab479"],["movies/index.html","6086e991d3bf9a874a64a183c146e3dc"],["music/index.html","ad99b15746772d9ee645532abb9ec5b1"],["page/2/index.html","164669733ffdc53a090bb865554cb611"],["page/3/index.html","54962946948623b729df4525faf2011e"],["page/4/index.html","8127026bd41aeeff29fca241f7e00962"],["page/5/index.html","3be0b1c753486a88c564f364406b88d3"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","d5dd6f6ac31b3d4618d92a63be7a63c5"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","908290688447f0c28fc02745ad1e9117"],["tags/Github/index.html","55daec4bf506a6decbe88f1c2b474109"],["tags/Move/index.html","b1b73648bf5d73a25a7abdda7c4f151d"],["tags/OpenWRT/index.html","e0e224139e81f2dda804990295eed198"],["tags/Plant-Simulation/index.html","22223a90a6bd4209c4615b989ce33a80"],["tags/Wordpress/index.html","e48393f47641920388eb56fd948f2ad8"],["tags/cad/index.html","a5c708012357f71ee6c7eb235936ded5"],["tags/coding/index.html","c84195f827abb5cf919c1920e6978393"],["tags/h5ai/index.html","45a6cd26d0bee6bf5d6e4b22999feb33"],["tags/hexo/index.html","b312d3e5a951a85845dbec746b21cb15"],["tags/index.html","7172a57f6f8bc6d73a42d9e6ae14bef6"],["tags/nas/index.html","1cc870699963da999bae5f16d637e584"],["tags/tpyecho/index.html","9365d0a4099d9efd95f8036b26715b97"],["tags/transferstation/index.html","3aa26348515d92d959bc984dcf2d1dac"],["tags/typecho/index.html","ec484fc8f42b2eb6bc3ba9e58b898482"],["tags/ubuntu/index.html","79c276272190e71ab717264bb51bd7b6"],["tags/仿真/index.html","515a0f0ec9e2c02e395d4e1c5e9d7f21"],["tags/写给宝贝的话/index.html","9b4f62b6ba308a4794dfefe30fe6ff96"],["tags/原创/index.html","b3c2f319ba67211a2f341e1f18db8664"],["tags/学习/index.html","ee77c401830c54ada303d3ad1030816d"],["tags/宝塔/index.html","2066f93d7964b6c9bbbd5ddda9a10b29"],["tags/生产模式/index.html","fecaef9843b7042fc596ef4595817f4f"],["tags/百度客户端/index.html","1d692511848b8368fc67c8770d28a135"],["tags/科学/index.html","fb0f077c749c24976e4650ea019f370d"],["tags/统计/index.html","d3a017b8d71cb69709994273ecdc6768"],["tags/编译/index.html","deab73a5f38f8107b7ed85c8eb4487cf"]];
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







