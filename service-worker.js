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

var precacheConfig = [["about/index.html","7c54a4c9c968027133d4cfd4257eaecf"],["archives/2019/12/index.html","fe4432557a9564f1d0a2796986827119"],["archives/2019/index.html","231cffbc72ed82a4c80fbdb20d8b0773"],["archives/2020/01/index.html","5bf51f30b26bd8d8ce33c4478770e7c3"],["archives/2020/02/index.html","e4669a301bdff68ebde3867db291e791"],["archives/2020/03/index.html","16a84e476d919d10d46b94aa292d44fa"],["archives/2020/05/index.html","7fb5756a4cbcb6e7c6ec24dff9b6f7c3"],["archives/2020/05/page/2/index.html","b4d35560909dbfe9e268a1cafa9be6e1"],["archives/2020/05/page/3/index.html","a81fe1df29f6b7a9dd9e90347b7ed0b2"],["archives/2020/index.html","cc213dbb4c1611e06030a0b69e3c3eae"],["archives/2020/page/2/index.html","06391e6a08e394efa42282bed65b5c36"],["archives/2020/page/3/index.html","cf06f0c65d7b17eab4d9f441724e46fc"],["archives/2020/page/4/index.html","dc34c0e514e4f1a89489f5733d242d57"],["archives/index.html","1aaf87346aaf4410d6dabddf450c7a43"],["archives/page/2/index.html","ee9bae477969fcff7817609aa801fdf9"],["archives/page/3/index.html","29bb0b490b2bc25e133f709e6f721977"],["archives/page/4/index.html","e785d571bac0ad9753e4166cc1d565f0"],["archives/page/5/index.html","b1532d3de52331d55b691b7c42c5f0d8"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","81a403bbb2301f8487dd663384baddb5"],["categories/Code/index.html","d32f35dda9d54d8733dce9470f37b2be"],["categories/Plant-Simulation/SimTalk/index.html","472808c2a7841b22d6e408b7e61b2038"],["categories/Plant-Simulation/index.html","34722440f5797a8a64be0842958599ca"],["categories/Plant-Simulation/实体/index.html","521a824d90f1bb03bbc4457a4676d293"],["categories/Plant-Simulation/常用代码/index.html","34462a43229d85064a48d75400ee0610"],["categories/Plant-Simulation/常规操作/index.html","65dd7ddfc29ddbb3d532769ca70eca67"],["categories/Plant-Simulation/模型/index.html","f663a26b4942f23020163d9b0b16d977"],["categories/Plant-Simulation/背景/index.html","d081e6917a518e33c3cd65d25d2fde16"],["categories/index.html","06ece81b22a85a660bcb7cda812ff425"],["categories/nas/index.html","8b7ac6a69d9f8eaa7b40cc3912fa514d"],["categories/ubuntu/index.html","64585dd17d5e4b195b7aecf48c22f9eb"],["categories/ubuntu/ip/index.html","dd81c7ed501fa953efa3ad12a9745041"],["categories/ubuntu/下载/index.html","49879c0e653774646df05d85d259bd41"],["categories/ubuntu/命令/index.html","ddb2263c2fc5c55ea11d7b0f9dd88f43"],["categories/ubuntu/配置/index.html","5c2d0de6cdfd4eaa85d2706625913e61"],["categories/仿真/index.html","fa534fa058c1a67483471113c33f26f0"],["categories/博客/Wordpress/index.html","bf97b6c91444ce10c83a2b97a0f63b0a"],["categories/博客/hexo/index.html","679865c82102ee81d5dc7bc038e59ddb"],["categories/博客/index.html","83b42b27ada8ffd87b4da43f10389a18"],["categories/博客/page/2/index.html","9e21872299eb65fb461219b33cfcd7da"],["categories/博客/typecho/index.html","dfc19421e44ee2e33defacaef783f3bb"],["categories/博客/统计/index.html","f5e9e2b684da9c100aec65348f7a92be"],["categories/宝贝/BB/index.html","fe6665242d4bb1c65d92f4c535211531"],["categories/宝贝/MM/index.html","660cb6a85de610bb7aa977471d3ed9e8"],["categories/宝贝/index.html","9ba957eedcd810cc0dbc3fb60fb1b70a"],["categories/思考/index.html","49be58c70806a270c257176e94ba1448"],["categories/思考/职业规划/index.html","beaff94641301a414dc6a3eb657da66a"],["categories/科学/OpenWRT/index.html","6e256c01923d94b43f5a8eabb4b63a71"],["categories/科学/index.html","80423f65fdf0a6e6563f32d70c744c1e"],["categories/科学/手机/index.html","a37d4c3573f71da5e3bbd8bbf722bbff"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5df0741d7ec32a8a19384eba028f621e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","0cd03db633b52c6c03589f96b0a6843f"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","57c3d8aab1bf0b5c40fb3e91cc56f847"],["movies/index.html","18f4861cfb95d72fd0052a33cd50344c"],["music/index.html","a65bb7594145468d58b6cc32f1348361"],["page/2/index.html","55ad5f1b2f826528e99a28825fc88a8a"],["page/3/index.html","657d9608be1d939c43e787eb0a35c678"],["page/4/index.html","0a11c9b78270b581ef38c62dc03b76a4"],["page/5/index.html","63b214b6a526aa954b3971fced48fce6"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","8c53cf7d0c267e803802e647454fcffd"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","619ffede353d219c061a32e260ac4976"],["tags/Github/index.html","0c5568cf3954fc134ae13194992bc606"],["tags/Move/index.html","5a2d0fe8d29c38185e8d7a804f3e248f"],["tags/OpenWRT/index.html","b2a7626a38487f806e7fe526bd36da35"],["tags/Plant-Simulation/index.html","009d0e4dda11fb3e56348b40d732e2fa"],["tags/Wordpress/index.html","cf67f99eac93d29ee8e829c0f968afb6"],["tags/cad/index.html","a8737c761d83d042cb96b071a957fc72"],["tags/coding/index.html","4c656bfaffcf535653c2155c8890fcc1"],["tags/h5ai/index.html","0660d405f94b7f378f46653f30518965"],["tags/hexo/index.html","d47369f1b6d8c927db6843fb2d87a193"],["tags/index.html","05adc4c638f83bc07e0c2b4c8183cdd6"],["tags/nas/index.html","d3d8e2af31c9ef1ed0a31884ac264e6e"],["tags/tpyecho/index.html","e85b8adc680988f1709f290f1e10be6c"],["tags/transferstation/index.html","1fb432a0d409c343f74dec6d120b8b64"],["tags/typecho/index.html","20952ea03a9ad1bcc4e5f33f77ef87ea"],["tags/ubuntu/index.html","fd6e01819298e77550b53f1534fff71b"],["tags/仿真/index.html","abf6991a0b6426c45c61fce5b4777a94"],["tags/写给宝贝的话/index.html","a18ed9c93b9e79476396e100939a119f"],["tags/原创/index.html","d351695528ff818a4da92f6dc4612b60"],["tags/学习/index.html","92fd1613a97f29b409366d0f63f87e24"],["tags/宝塔/index.html","288258d3f84b2e77d2f69d9493916431"],["tags/生产模式/index.html","1c6667ecd5df7be956b37ca1ce677180"],["tags/百度客户端/index.html","95541e520e6f27de101870d52aa9eb06"],["tags/科学/index.html","0baa62940055150c1002cc146986166f"],["tags/统计/index.html","26dbec48d3c4de5dd63ace1e6a09c4e3"],["tags/编译/index.html","4598308fdfa38e81e151165d79dec658"]];
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







