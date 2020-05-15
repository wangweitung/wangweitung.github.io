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

var precacheConfig = [["about/index.html","7cd35e2dc53ce3089b9eeb665d8b42bc"],["archives/2019/12/index.html","527c2d1ef21e2c1f3f83ee76bf1804c3"],["archives/2019/index.html","52c91949e2fdcf0a0c6439ca4be95d61"],["archives/2020/01/index.html","ecb8d596c0986a3f87ca63698d15a959"],["archives/2020/02/index.html","618e714b49597ee3ab679cebfdaa2687"],["archives/2020/03/index.html","97f1e57269db81b363ef3415979f6896"],["archives/2020/05/index.html","6e78c13c643eb89069b96a23d895141c"],["archives/2020/05/page/2/index.html","82a9e0d1ee7465f47ebdbd8d431bc684"],["archives/2020/05/page/3/index.html","2b37c2ef519a21251c21e9a9fe5b3cb6"],["archives/2020/index.html","c81b67483f2f6ae63a0f3e948c42b09e"],["archives/2020/page/2/index.html","cd991559666b0bbfaf913882dc80fdeb"],["archives/2020/page/3/index.html","6ae221d15dbe64593e4b198af8408556"],["archives/2020/page/4/index.html","7dd6c17020a11ac5508fd9daacda2149"],["archives/index.html","4dbee7b9ca1408fc8d2d12f932667fc2"],["archives/page/2/index.html","f04cf22d649c1736ba5156c46bd817f1"],["archives/page/3/index.html","16d90e20c832d026b3a6563b4fa18008"],["archives/page/4/index.html","4f7c0055c429add0ed68e5da2a86b2c4"],["archives/page/5/index.html","6676f9c7cae8477781d67d83bc57c80f"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","e97a4bff84d346035ac31bd9f2dbcdba"],["categories/Code/index.html","827367d49678cffa5f0431f6389b384c"],["categories/Plant-Simulation/SimTalk/index.html","11f11092c265ca71e568c7acb8235b79"],["categories/Plant-Simulation/index.html","493dfa822a9636d44446a732c6d9e697"],["categories/Plant-Simulation/实体/index.html","4960c1967b34d9ae32dfc693c430cbdb"],["categories/Plant-Simulation/常用代码/index.html","6fbadc222a6f635c4add39190e860e15"],["categories/Plant-Simulation/常规操作/index.html","ba873b07eb6b0d5f231f211649b3000e"],["categories/Plant-Simulation/模型/index.html","88bde4d7885ce1257b4a1a975e7032c6"],["categories/Plant-Simulation/背景/index.html","c98fecc5a9f0315692fa009fbdf46b5b"],["categories/index.html","0ce65df92a815b466d7288de379dc7e3"],["categories/nas/index.html","423996b38a1f2da1523a5b6bd00bdff0"],["categories/ubuntu/index.html","65699901142516c1bae5e6128a995dd4"],["categories/ubuntu/ip/index.html","661597b25a5d5526f2723e17b67d7885"],["categories/ubuntu/下载/index.html","3cb4101d9612b9171b5162a15d9d515a"],["categories/ubuntu/命令/index.html","a7b4c3074db9914d481a138bea838053"],["categories/ubuntu/配置/index.html","c841afe7920d61ba7bb2ee673812355e"],["categories/仿真/index.html","b0cc91a4ed127237e30d3d1c395eb75f"],["categories/博客/Wordpress/index.html","37a73085abd67a9a53941856f64d7b41"],["categories/博客/hexo/index.html","b8aad9307fd88d4fe24b5afc9e99bca1"],["categories/博客/index.html","97ea825929506374cacaf543afd4ebce"],["categories/博客/page/2/index.html","236dbf2e92910e9d34d67da39ed7e8af"],["categories/博客/typecho/index.html","7cc902efa284a7a5c5c0affa1da35cf6"],["categories/博客/统计/index.html","4978ce5854b71c9a5266d4e9daf0d6a4"],["categories/宝贝/BB/index.html","6c18afcd8c645626605cc2d7faee494f"],["categories/宝贝/MM/index.html","0fbd4ea0db472ccdc789c5b2dd988bd4"],["categories/宝贝/index.html","7c867ae8e6cb8e9800ff32a7af2d54e9"],["categories/思考/index.html","5f14ec6bdf4fc88c7d477e3baca8a749"],["categories/思考/职业规划/index.html","e638758a37548ec237a3767aad704855"],["categories/科学/OpenWRT/index.html","c84472f87a507aeeba4d4e7438081fd9"],["categories/科学/index.html","98aa412362fc5ef21834b0c9a0bcdf88"],["categories/科学/手机/index.html","b8506b002d4260343ae6a4ca85bcfb20"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","54f72dfd96292500e354d288ef179019"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","09dd90b1abd296089672324c549cac6d"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","5ad8c52788a8ccdb4bee06c046385ca8"],["movies/index.html","5a39dd85458dd4743699cca7bd8d1301"],["music/index.html","bac871d52d0c43a86a92aa311094a254"],["page/2/index.html","90e43c93e8806e5345c3bd1858fb144b"],["page/3/index.html","2019ca1bc3a0cd2caaba676a013de741"],["page/4/index.html","d15033678f8c53699ac9d17231f90285"],["page/5/index.html","71c61afe7de70ef1e16b3e6c25ce3099"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","2103b2598dad202c68dc9fbe0eabbf05"],["posts/2020/05/14/23/46.html","2f2985a9e7f4802f11af7fd7448d4517"],["posts/2020/05/14/23/56.html","53fdf44da10f3ca246cf65e7a863d833"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","11bc60d6436a466bb83b8b59a032dc58"],["tags/Github/index.html","0060475beb9f05bbdb55478ca5ce82a3"],["tags/Move/index.html","bdfa4b296cec7216b9ca4fb1a3dac496"],["tags/OpenWRT/index.html","b70e91cd075ae930ee5fb736d3bf7152"],["tags/Plant-Simulation/index.html","887dd926fdc78aed5822117ad43509e2"],["tags/Wordpress/index.html","2882d63c552d8f4da6cecd191c5bbaef"],["tags/cad/index.html","f97dffb92e52b646ba2a77fb7b5ea405"],["tags/coding/index.html","57f911c681ff2b01038e1d148b389557"],["tags/h5ai/index.html","109d000acd31e1be79f05b8eb0f386d4"],["tags/hexo/index.html","d7ab1f211bf9fd00263a4ca5c189ea7f"],["tags/index.html","a7e9fbc8cbca846bcd618ba0aea768ef"],["tags/nas/index.html","e0c4fe882a1277ece0af9aa3f7e18c49"],["tags/tpyecho/index.html","75245f7c78de033c542457ce96ac1eb0"],["tags/transferstation/index.html","dd575dc4f1d79dc4354d6db9d37aac9c"],["tags/typecho/index.html","eab5b7828a9eafa89867662388e91eb1"],["tags/ubuntu/index.html","44f067f7349fdd3967a78f0748bac572"],["tags/仿真/index.html","fd730eda52af28cc741ebb75a0012926"],["tags/写给宝贝的话/index.html","20f8cfe4f25835c0f544c8ff3ea8be3c"],["tags/原创/index.html","f31249e6bd3869887545d64610462609"],["tags/学习/index.html","fc3c4dd2298e41798b738e42bfd698cf"],["tags/宝塔/index.html","ec8bff4c0712e0f58fd2a700a456bb1c"],["tags/生产模式/index.html","e9e28f8d7b96d79352e1fe73a4251833"],["tags/百度客户端/index.html","24b4da3c9244bc94482a2e684f005510"],["tags/科学/index.html","8e34ce86b02085a76071922f50a6e621"],["tags/统计/index.html","6983b1c8e92ed642ffd9827e2defabe9"],["tags/编译/index.html","fbdb59e2713c36fca3e590a8941e7747"]];
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







