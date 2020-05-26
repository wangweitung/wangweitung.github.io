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

var precacheConfig = [["about/index.html","a08b6a450d366967c47457d2b73ba4cf"],["archives/2019/12/index.html","8fa3f166756501653394a73ad9f3cc42"],["archives/2019/index.html","e587c5a6b42bec02d1c7b209d202d072"],["archives/2020/01/index.html","ab0cb3859a11f1edd4278035c6f301b7"],["archives/2020/02/index.html","1e7e729042a0532b417a561c4e3bc860"],["archives/2020/03/index.html","ea2d143f6a9947aed634bbee8c575b7e"],["archives/2020/05/index.html","70ff051ff63d97d190d16e7f87bf9c31"],["archives/2020/05/page/2/index.html","9d1eea3755367773851ba3b22d435742"],["archives/2020/05/page/3/index.html","81f84066f9a0fb3e29358ed5a16a5646"],["archives/2020/05/page/4/index.html","c7c214deee021584e2a9f5ff932b0c2a"],["archives/2020/index.html","5de366394c476f488c5d0b40338e47e9"],["archives/2020/page/2/index.html","705af34a33a56eea7ca51969f6e4ed7c"],["archives/2020/page/3/index.html","a734f6caaaaea4778b8977f9586e900c"],["archives/2020/page/4/index.html","401ffe10c7139143d05963a38c025361"],["archives/2020/page/5/index.html","46f0392e31e9713edf1d6c8bee77b5fc"],["archives/index.html","61e4ca0b4c47b55fc0051107c2bfcf6f"],["archives/page/2/index.html","4cb72b0092b0b116719d902e9f27051b"],["archives/page/3/index.html","5c01c9df235d230181e3155d8a3a6ae8"],["archives/page/4/index.html","4f1c7ac31f64431a305528097cd343f9"],["archives/page/5/index.html","4d8b7ce12b617a1163a7ae1e2d2f9576"],["assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["assets/js/DPlayer.min.js","d2c4672517d7259ff4dc02c739987ca6"],["categories/Code/Github/index.html","9659ab28c5d6f2354ae41352a088ed8f"],["categories/Code/index.html","1ef7bdd0372246be1710964ea3b47b3f"],["categories/Plant-Simulation/SimTalk/index.html","5a6d5965a43f1b15d5252a4bbf1255e4"],["categories/Plant-Simulation/index.html","aeaa670e61c455a791691481bf058ed5"],["categories/Plant-Simulation/实体/index.html","d1832727507f7b50b30630525cb89b9b"],["categories/Plant-Simulation/常用代码/index.html","d1828ebe203b6b8a2cd30f64944769da"],["categories/Plant-Simulation/常规操作/index.html","1a031cb2490771f3d048ea731bc758d3"],["categories/Plant-Simulation/模型/index.html","87db04b1d7fd0585f89f498a73223c01"],["categories/Plant-Simulation/背景/index.html","cc84b899cd3cb892363251ac53223591"],["categories/Windows/index.html","653e37ef93dddcc6933e2cd0605d3d5f"],["categories/index.html","6896e1208490e5fa0ab532ddb66de5e8"],["categories/nas/index.html","788d4f9e6a6661171ef38b5e4891ccdb"],["categories/ubuntu/index.html","b2b4eb2b35b8427710827358a050c4ca"],["categories/ubuntu/ip/index.html","e43df07f1fd3facf6287acbec920453c"],["categories/ubuntu/下载/index.html","0d486fbb10a1f8fcf43e432723afd500"],["categories/ubuntu/命令/index.html","ea25f695e0e2bedd45ae39d584c03b90"],["categories/ubuntu/配置/index.html","5f5572f2ab998b24a37da26473bab707"],["categories/博客/Wordpress/index.html","dfb7486f4edea5a0f471b0e540868aa0"],["categories/博客/hexo/index.html","3a8db59308d7f8eecd5cc4d36cb5ddd4"],["categories/博客/index.html","1e90672f5e28505cc9f2a1c4ad1e073a"],["categories/博客/page/2/index.html","436dada2bd5a7f907d7074bb2fe05233"],["categories/博客/typecho/index.html","46ae9bc0bde531ca231a81d72b713860"],["categories/博客/统计/index.html","aa4fc129b310f4292c53c658c27fa918"],["categories/宝贝/BB/index.html","534b24e74601562a69f5643fe19dae2d"],["categories/宝贝/MM/index.html","59504b31370088968f68a6edc37214fe"],["categories/宝贝/index.html","bb4f674ec50f9fed6a99ae3b627c5ea5"],["categories/思考/index.html","0f9272d5cb7458fbd9d64b71e2ddcb37"],["categories/思考/职业规划/index.html","02c7edefbd58b13df2cd5c2e93c4e697"],["categories/科学/OpenWRT/index.html","7429de88b2b66e7aea1ec7151bf4584f"],["categories/科学/index.html","fc1ba35e8b3c40de683265e65c4349f2"],["categories/科学/手机/index.html","c373ffc7527577a6acf9115cff9408c0"],["css/index.css","a960864c15e9aff8bb0198b25457bde4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","04d56507f60548066e06d1d77242e17e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","d7a42434ce407c149f1a4a3ec42b4da4"],["img/favicon.png","27b4bc37f2ef07fac1a5f087357a2a0b"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","69557d76ba50bf5a2dc7edd6e18128f4"],["js/main.js","9ae2856869433ab1770b105c639b7710"],["js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["link/index.html","45fbccf45a72b34a4db65a17a510ab32"],["movies/index.html","40df8bdb70bd8821b29f53807bdbfe54"],["music/index.html","89170269e219a05ca5441d72f0a4c6a3"],["page/2/index.html","7d493ec85fe2beeacf726376a128e817"],["page/3/index.html","6f2d82e5560db78e176c4beb49c2c55e"],["page/4/index.html","dddf012b5895287446f7bca89ad5edee"],["page/5/index.html","66643fd1d39ac66423b34400e5801246"],["posts/2019/12/04/00/35.html","943a983cb8433e6e987095ad46dbefa3"],["posts/2020/01/15/20/18.html","135a43cf5efcd1c1a249b9729e33563a"],["posts/2020/01/16/22/18.html","0f684d301c689bb3300ce0c9d29547aa"],["posts/2020/01/18/22/18.html","c33ecfa06909f35454e0d5718567440d"],["posts/2020/01/19/08/29.html","d9a71e13c46bbfc5f7b29ff97d5bdebc"],["posts/2020/01/19/22/18.html","6de99d2d4cc98db5cbc42764d44d7830"],["posts/2020/01/23/22/16.html","6348e34beb7a5544ee7d2b1fb7f63d3c"],["posts/2020/02/04/20/18.html","9775ddf690d5d86dd12f180e0735a6d4"],["posts/2020/03/12/00/20.html","1a0c27ae0cbe08109c431ce4373df04a"],["posts/2020/03/20/22/12.html","19cd0e24bf31c9bf47f2ea02bdb18a61"],["posts/2020/03/22/18/24.html","cf17e437d64dcf316a62858776b71af8"],["posts/2020/05/03/22/12.html","22fec7ef9a14c2e3992446a70e085420"],["posts/2020/05/04/00/05.html","ca601ef067c34e626cbb3dc7fea2253e"],["posts/2020/05/04/00/09.html","816c7de495282c65942f5887dbcaca1a"],["posts/2020/05/04/00/15.html","ae42978441953e04e35c3191c9b1309f"],["posts/2020/05/04/14/58.html","be949bc0b90696367e813c17a8c549b3"],["posts/2020/05/04/17/01.html","ec4f3ae0edadd75fc2e194d4b803e50f"],["posts/2020/05/04/17/19.html","99774f752ed38b3138c93452663b4683"],["posts/2020/05/04/18/18.html","75c1c9e7b47933dca62219269516aaf5"],["posts/2020/05/04/18/24.html","15baf5e1ad36a434719b067ae2181ce6"],["posts/2020/05/05/11/12.html","725c5a934bab8e3fcea8a64c98544d1c"],["posts/2020/05/05/13/20.html","597ac54eee910e12480e878fa67f08d5"],["posts/2020/05/05/15/20.html","3c818bc015d8b891e021ed85ced5e7dd"],["posts/2020/05/07/21/21.html","522172dc69da25f1dc23051ec3bd316c"],["posts/2020/05/09/12/20.html","50e91d1f28228a4c975f0f2bf844fabb"],["posts/2020/05/10/18/18.html","fbbf54f9f64c8567ee46a726be470a4e"],["posts/2020/05/10/22/18.html","abfe9901d1825d9410ed795918224dd4"],["posts/2020/05/12/20/18.html","1ca8d5734f283cd4503f2447a12e228d"],["posts/2020/05/12/21/18.html","3a82f969ecf507309209f0c99119f04f"],["posts/2020/05/13/20/18.html","045fa9a34898264870096e72912fb10b"],["posts/2020/05/13/23/58.html","a822d82943e796a090dc1e10bd62f1c3"],["posts/2020/05/14/11/18.html","fb789fe8328c14098e2fe87a620b71ef"],["posts/2020/05/14/12/18.html","7d3cc317b1959f2fd5bed1e4135aa87c"],["posts/2020/05/14/20/18.html","1d6684aef010ad15e735e6f971c642ee"],["posts/2020/05/14/20/58.html","3e0d82a219f39568767fbec913c9907e"],["posts/2020/05/14/21/58.html","48d9ce3db80eda95ebf6a1491c5c6be0"],["posts/2020/05/14/22/58.html","0ce096fd25cfb64e875bc1077db53fa6"],["posts/2020/05/14/23/46.html","7ee5f2eae4e72fd09d8a7ca123c856d5"],["posts/2020/05/14/23/56.html","d7996e053e5b9eef6f4bcddc951ae919"],["posts/2020/05/14/23/58.html","3a2d3dca55c77994f1df4b7d059da2da"],["posts/2020/05/14/23/59.html","7ed8e6beaa013d55048067cc01a0cb93"],["posts/2020/05/16/20/40.html","8ca3c6b9bb436783716aa9a6bf22b1b7"],["posts/2020/05/16/21/40.html","cb9eab5538d72cc425e1dbc9a02c4566"],["posts/2020/05/17/21/03.html","168fe8f76f89d631bb2a7bd3a9ef1030"],["posts/2020/05/17/22/42.html","7201d5848d38a4d7f8c3f88d6834b6d9"],["posts/2020/05/24/07/03.html","c07942acee66560b30a5d384f42adc4f"],["posts/2020/05/24/13/03.html","09bb34b7140134d36c47ec2d05712e85"],["posts/2020/05/25/13/03.html","a4fa3a8982a58f77f101e7b5c8cdcd72"],["tags/AGV/index.html","55e24855fd79fe3a8322f264e7567191"],["tags/Github/index.html","7860a901c9066a55d43af1b42d1a3436"],["tags/Markdown/index.html","771656a4ac1941463fc902a5ca2babe7"],["tags/Move/index.html","8b75098af51f8bc835197212dafe423d"],["tags/OpenWRT/index.html","46887b31fc68488f30c9fb5dbb208c19"],["tags/Plant-Simulation/index.html","6da9ed02dd66b6d3bf74dc86cd1913a1"],["tags/Windows/index.html","5abf73f6dd26bf26293e4f511abb48a4"],["tags/Wordpress/index.html","81304a2bbbf6d4242a745afbf347e84d"],["tags/buntu/index.html","174482b09119a460ea936e9b6612a9e6"],["tags/cad/index.html","fd981bed7554e4554606bad76ca1710f"],["tags/coding/index.html","fa51c27b14d2d40368d877a14ffcfdb8"],["tags/h5ai/index.html","82a72378d313af1c681a83d6a19564cd"],["tags/hexo/index.html","70ef732a8d00c42613510e315dc07296"],["tags/hosts/index.html","23bd1d3b9063b9bc9d8dc52cd7e6a371"],["tags/index.html","487d1810160f07571d5d11671de924ea"],["tags/lychee/index.html","6d250fa49fe96a11f5eda4048c5dea6d"],["tags/nas/index.html","c793e2a7d2b9e89d72728d9167c9fb29"],["tags/tpyecho/index.html","ef41bb336bb367f31010ad6e67bc2f37"],["tags/transferstation/index.html","0cac18a91c5a03628048fee286f94ada"],["tags/typecho/index.html","d7e8c82a8e5f91b15884b78670fa9959"],["tags/ubuntu/index.html","c3fa57141cc6d4c7d9d6a44153f7c3de"],["tags/写给宝贝的话/index.html","dd190b2cc0ea8f3914f2292a0a791c98"],["tags/原创/index.html","5190731a25fdd14a477a7582ee5b9b88"],["tags/学习/index.html","40ca7dab7b43e7cf88b4625de04078a7"],["tags/宝塔/index.html","f4ba1188a91f5ae80e4824ec41b59486"],["tags/生产模式/index.html","5b0fa42b767899f362eb001c45765fc5"],["tags/百度客户端/index.html","b6811436115aa6f5880397a6745bd9ca"],["tags/科学/index.html","aa39fbe13a6f6a2e6b7c219cce2c2265"],["tags/统计/index.html","f2857d2348fcc2ec12673d48a9a9b412"],["tags/编译/index.html","6b10ef350930ed1814abb399efe654ba"]];
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







