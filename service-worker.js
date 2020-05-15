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

var precacheConfig = [["about/index.html","df26e19035b0aa8bfd07ad39f0598cdf"],["archives/2019/12/index.html","3c8a5654d45fbd58eb6896541c88ef76"],["archives/2019/index.html","6d101fa1cef5a0a136ea07a82877c10e"],["archives/2020/01/index.html","28541ab147a8adca0dfb1f149a740076"],["archives/2020/02/index.html","98e1e1395e72d1e0cfdfe783e677be65"],["archives/2020/03/index.html","15cc0b59574d86a557784c1b4902c0c4"],["archives/2020/05/index.html","a913adf80d72da01d51c74c85e17bcf4"],["archives/2020/05/page/2/index.html","73401a16a70bb692ce2279dc5b8cbb02"],["archives/2020/05/page/3/index.html","3c342121f396e443e4cce8232ea1da5e"],["archives/2020/index.html","a77933d23765c047facbb52929a22a8b"],["archives/2020/page/2/index.html","e00595f81f2bc7308cc066b8b5933259"],["archives/2020/page/3/index.html","4b5d2d526a0f19af81798f2a7928ae17"],["archives/2020/page/4/index.html","d685e4508f38ea0181dddaf26987385f"],["archives/index.html","9780e5738bd628cfc2fca39519320311"],["archives/page/2/index.html","aa54c529eafe6936294da271eb5328fe"],["archives/page/3/index.html","01775ace74a4ccdd578eff065c04bbe5"],["archives/page/4/index.html","89dc064c5900842bc2e54b6c97b90505"],["archives/page/5/index.html","225bb213822df24e1dc69c38fb259793"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","b35ee8f2ccc57a538ff5fc88d95d19e2"],["categories/Code/index.html","c818b93ed93ef3d7c2a638f77f5ba713"],["categories/Plant-Simulation/SimTalk/index.html","d2237fd9ccb34567f4a64a466f80c44f"],["categories/Plant-Simulation/index.html","bc86fb51439f6f578619f4e8b6a9180c"],["categories/Plant-Simulation/实体/index.html","61922b3a3f8c0dc4e384cd0a5e711901"],["categories/Plant-Simulation/常用代码/index.html","eeee808f3ccb803ca3b7f3c33d603ab4"],["categories/Plant-Simulation/常规操作/index.html","50a6142f638bb780ece2252c12dba829"],["categories/Plant-Simulation/模型/index.html","d0b14af7ce496500210199d5c57ac51b"],["categories/Plant-Simulation/背景/index.html","acff0c04f5386c68f4bdccca48b88dc4"],["categories/index.html","8751ab61b9655d27833128060ab9b0b1"],["categories/nas/index.html","21539cc0173e405efafb547591c8846d"],["categories/ubuntu/index.html","acda107a6c07cfd80920201b14dbe205"],["categories/ubuntu/ip/index.html","984f73c65a3a710b34862bdd4798952b"],["categories/ubuntu/下载/index.html","be1793cb2d8445f270406a31c459f45a"],["categories/ubuntu/命令/index.html","f74e51b1b767b9067d5fc32b8e7f732a"],["categories/ubuntu/配置/index.html","1d9d417a361436eff0b3cd24770d16dc"],["categories/仿真/index.html","c23caa667c0bcdc110d238b823f81d1b"],["categories/博客/Wordpress/index.html","1e360db9ebe2d141133cba04465ae1fa"],["categories/博客/hexo/index.html","50a23bce4a9072fded1795389b4067cd"],["categories/博客/index.html","e642e33cefdd1543b2b025b9ba53e2c4"],["categories/博客/page/2/index.html","89086e229dbedb1f8496b6172f3e87bf"],["categories/博客/typecho/index.html","84c95eb272749a62549f863c1afc49bf"],["categories/博客/统计/index.html","87bba11d98c0d9afe0f8f5df16f26939"],["categories/宝贝/BB/index.html","578b71c12a9a5899e3327baee74a69c6"],["categories/宝贝/MM/index.html","93b065ee489dc3b4e3759f43fc414afa"],["categories/宝贝/index.html","76b0e4e36407e8d2a3bd02b9bd93b3e8"],["categories/思考/index.html","9ffe813f890e5fd9139985042f68d113"],["categories/思考/职业规划/index.html","f92d2d303db2917e8f0b0494821c4736"],["categories/科学/OpenWRT/index.html","1188a9f9571eb3a96048f8cc2bc66225"],["categories/科学/index.html","91de01e2d2951c08c2e5afa2d9462cbd"],["categories/科学/手机/index.html","e1b41cb3620249a95fbe1efe09ba04ca"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5120fe5e65d0f7e0c6270aa21de48ef1"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","a56218545a3b0fd38b71959ef6f455a8"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","2a85bc1a00c6258f5a80629527bb865d"],["movies/index.html","ffc9d0e306cf3c8c9d90ad7367a8682b"],["music/index.html","c54dd2c7ba2d16d357110c08c9ec48da"],["page/2/index.html","8ceec1dd2e1661bfb82e19ac3088ab6b"],["page/3/index.html","b98cb7a5f9cbeb143b0e8b38a0e6a7f8"],["page/4/index.html","1a7dd049ed1a1360490e429cff5ee46b"],["page/5/index.html","7ccd819c0048c534568afb14463dd917"],["posts/2019/12/04/00/35.html","231d39ee268a29e4f882b3dff97aff5d"],["posts/2020/01/15/20/18.html","80f68cad3292355866b7c7ae40501345"],["posts/2020/01/16/22/18.html","1047d85a5735566f06abc97afb667de3"],["posts/2020/01/18/22/18.html","3e62f61767eec6f4ef19dd0cd2294b5b"],["posts/2020/01/19/08/29.html","4a2a02f92719c14a4d3064ef5604678b"],["posts/2020/01/19/22/18.html","3c8f083a668cbc2afaca956cb2fed6fd"],["posts/2020/01/23/22/16.html","4ee6fd1c3923fac167aec49b2dce7949"],["posts/2020/02/04/20/18.html","3f11377f6f0b8380318f11b1b67c5c56"],["posts/2020/03/12/00/20.html","43a5b23835f815e019f91f5ccc2c9320"],["posts/2020/03/20/22/12.html","202f1529d597550c914e6b93f3727fcb"],["posts/2020/03/22/18/24.html","4d16932d5a72b2260a22d6509a906fd6"],["posts/2020/05/03/22/12.html","0c1178b553892994e44bccf8eb7d3b02"],["posts/2020/05/04/00/05.html","2f62d3d8cd66dd3f465a4d5150358a2e"],["posts/2020/05/04/00/15.html","e5bc1e0fd35f1dfecfefdf95b68bfc1f"],["posts/2020/05/04/14/58.html","12781889ebd21b686d322818971fe1a2"],["posts/2020/05/04/17/01.html","776d8e4d06a11b5e54d5fe6fceda082b"],["posts/2020/05/04/17/19.html","74dc8e0267b1e5afd38f6ee62a37c049"],["posts/2020/05/04/18/18.html","b4da697935ca9bacb0618d937a362d24"],["posts/2020/05/04/18/24.html","0106ad0f888371d80802e18c8bc231b0"],["posts/2020/05/05/11/12.html","0d6b163584831ea65dd72bd63791721d"],["posts/2020/05/05/13/20.html","42c3daaa177c3b29866624b0f47a4f21"],["posts/2020/05/05/15/20.html","f9def845e750c8eb00d71608a9c6778c"],["posts/2020/05/07/21/21.html","a19771b4f16b03cab1771adca8993c5d"],["posts/2020/05/09/12/20.html","948d74be413f37aed189c9b7d24d9a7a"],["posts/2020/05/10/18/18.html","9857495399ab9b57b93f95ad5dda1183"],["posts/2020/05/10/22/18.html","905c2255ddc961a826240bd087089617"],["posts/2020/05/12/20/18.html","e07a3eebd7e8ef591e2197d70a3d6218"],["posts/2020/05/12/21/18.html","759e9254d0a8b07986619808c544eb50"],["posts/2020/05/13/20/18.html","8fc1e763143643d5ea9b3735c0672398"],["posts/2020/05/13/23/58.html","7fb19439ddad56e7a6c97ba7ef05ca61"],["posts/2020/05/14/11/18.html","23aa7f2009ee151b250e190a8d9fcfc8"],["posts/2020/05/14/12/18.html","4748e16544253a30b4865eb6dbceb9ce"],["posts/2020/05/14/20/18.html","dd69e2a69c335eee24a451c95436ac70"],["posts/2020/05/14/20/58.html","93f235f83e93a9fa0fa56f0d0b1ff929"],["posts/2020/05/14/21/58.html","5fe49a5fc09ccc54083f70052ccd055e"],["posts/2020/05/14/22/58.html","553040a559eeb556eea4a8d8a5299039"],["posts/2020/05/14/23/46.html","4a32d91839ef19d072695f107a60af3e"],["posts/2020/05/14/23/56.html","56dfecbb4a36e57de8b153462d896d54"],["posts/2020/05/14/23/58.html","7848238b618ba0fce49d7fc0b73dbb33"],["posts/2020/05/14/23/59.html","01638f774a6e9785d2ae48a689dd4183"],["tags/AGV/index.html","7f00aea37b096c69bcf3d02c11734362"],["tags/Github/index.html","988723db78c23232eb4da5b244bcb9d9"],["tags/Move/index.html","992be3e5593a99b2f605896659ecb8ef"],["tags/OpenWRT/index.html","120fee2196778db7c0dc7455c36d33a2"],["tags/Plant-Simulation/index.html","ff397a9ce024ba2e4690f1c81b2d5fcd"],["tags/Wordpress/index.html","33269abb9a87ae15b107f192f880fc85"],["tags/cad/index.html","49ec8ca248a87d86e10a8c2d758312af"],["tags/coding/index.html","889e84985cfa2f38884ed56872cd017c"],["tags/h5ai/index.html","5a598de800cde68556c28c19025c7e63"],["tags/hexo/index.html","a500b9c63a9673f6bc0308d3e499b1c6"],["tags/index.html","b6bc6ef00e7ff8462a841b82300225b0"],["tags/nas/index.html","3ac738a4440c725fff3b8495757e4993"],["tags/tpyecho/index.html","a0a87416ad3fa1807ae935aaf7b799a6"],["tags/transferstation/index.html","b1da646e17c93646945206861c9fec20"],["tags/typecho/index.html","a1bea73d58d91ef95a0d5d2a3e51119a"],["tags/ubuntu/index.html","3d4147cc7e85c27738ba9139df1701e5"],["tags/仿真/index.html","309eff6e5b8016a1b88dd131169c4a01"],["tags/写给宝贝的话/index.html","e2f6e87385d1b61cd18105e465b82c2a"],["tags/原创/index.html","b67c45a664712ea395d919dbba2e1e99"],["tags/学习/index.html","f10b921d2534f0b724f226c8cc5c73bb"],["tags/宝塔/index.html","5beef2a6668aa89c0c1fbaeb8c201520"],["tags/生产模式/index.html","25f33fad22fc5feb20175c83de149210"],["tags/百度客户端/index.html","59f583e63f001d56708fdb9361f4383a"],["tags/科学/index.html","405cc0a96eaa3252b5498bb19f8c44fe"],["tags/统计/index.html","607fd4aa1c8256726e1d37f609e54842"],["tags/编译/index.html","012d9051fe041eca563d863a3316bca2"]];
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







