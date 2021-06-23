/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "X2Wk");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2KUI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:expiration:6.1.5'] && _();
}
catch (e) { }


/***/ }),

/***/ "5tLK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:routing:6.1.5'] && _();
}
catch (e) { }


/***/ }),

/***/ "Bxln":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:6.1.5'] && _();
}
catch (e) { }


/***/ }),

/***/ "X2Wk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/workbox-core/_version.js
var _version = __webpack_require__("Bxln");

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/logger.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( true ? null : undefined);


// CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messages.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};

// CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messageGenerator.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( true) ?
    fallback : undefined;

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/WorkboxError.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError_WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = messageGenerator(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/assert.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new WorkboxError_WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new WorkboxError_WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new WorkboxError_WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new WorkboxError_WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new WorkboxError_WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new WorkboxError_WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  true ? null : undefined;


// CONCATENATED MODULE: ./node_modules/workbox-core/models/quotaErrorCallbacks.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();


// CONCATENATED MODULE: ./node_modules/workbox-core/registerQuotaErrorCallback.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof module:workbox-core
 */
function registerQuotaErrorCallback(callback) {
    if (false) {}
    quotaErrorCallbacks.add(callback);
    if (false) {}
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/cacheNames.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = { ...matchOptions, ignoreSearch: true };
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructReadableStream.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */
function canConstructReadableStream() {
    if (supportStatus === undefined) {
        // See https://github.com/GoogleChrome/workbox/issues/1473
        try {
            new ReadableStream({ start() { } });
            supportStatus = true;
        }
        catch (error) {
            supportStatus = false;
        }
    }
    return supportStatus;
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let canConstructResponseFromBodyStream_supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (canConstructResponseFromBodyStream_supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                canConstructResponseFromBodyStream_supportStatus = true;
            }
            catch (error) {
                canConstructResponseFromBodyStream_supportStatus = false;
            }
        }
        canConstructResponseFromBodyStream_supportStatus = false;
    }
    return canConstructResponseFromBodyStream_supportStatus;
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/dontWaitFor.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    promise.then(() => { });
}

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/DBWrapper.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A class that wraps common IndexedDB functionality in a promise-based API.
 * It exposes all the underlying power and functionality of IndexedDB, but
 * wraps the most commonly used features in a way that's much simpler to use.
 *
 * @private
 */
class DBWrapper {
    /**
     * @param {string} name
     * @param {number} version
     * @param {Object=} [callback]
     * @param {!Function} [callbacks.onupgradeneeded]
     * @param {!Function} [callbacks.onversionchange] Defaults to
     *     DBWrapper.prototype._onversionchange when not specified.
     * @private
     */
    constructor(name, version, { onupgradeneeded, onversionchange, } = {}) {
        this._db = null;
        this._name = name;
        this._version = version;
        this._onupgradeneeded = onupgradeneeded;
        this._onversionchange = onversionchange || (() => this.close());
    }
    /**
     * Returns the IDBDatabase instance (not normally needed).
     * @return {IDBDatabase|undefined}
     *
     * @private
     */
    get db() {
        return this._db;
    }
    /**
     * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
     * callback, and added an onversionchange callback to the database.
     *
     * @return {IDBDatabase}
     * @private
     */
    async open() {
        if (this._db)
            return;
        this._db = await new Promise((resolve, reject) => {
            // This flag is flipped to true if the timeout callback runs prior
            // to the request failing or succeeding. Note: we use a timeout instead
            // of an onblocked handler since there are cases where onblocked will
            // never never run. A timeout better handles all possible scenarios:
            // https://github.com/w3c/IndexedDB/issues/223
            let openRequestTimedOut = false;
            setTimeout(() => {
                openRequestTimedOut = true;
                reject(new Error('The open request was blocked and timed out'));
            }, this.OPEN_TIMEOUT);
            const openRequest = indexedDB.open(this._name, this._version);
            openRequest.onerror = () => reject(openRequest.error);
            openRequest.onupgradeneeded = (evt) => {
                if (openRequestTimedOut) {
                    openRequest.transaction.abort();
                    openRequest.result.close();
                }
                else if (typeof this._onupgradeneeded === 'function') {
                    this._onupgradeneeded(evt);
                }
            };
            openRequest.onsuccess = () => {
                const db = openRequest.result;
                if (openRequestTimedOut) {
                    db.close();
                }
                else {
                    db.onversionchange = this._onversionchange.bind(this);
                    resolve(db);
                }
            };
        });
        return this;
    }
    /**
     * Polyfills the native `getKey()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @return {Array}
     * @private
     */
    async getKey(storeName, query) {
        return (await this.getAllKeys(storeName, query, 1))[0];
    }
    /**
     * Polyfills the native `getAll()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAll(storeName, query, count) {
        return await this.getAllMatching(storeName, { query, count });
    }
    /**
     * Polyfills the native `getAllKeys()` method. Note, this is overridden at
     * runtime if the browser supports the native method.
     *
     * @param {string} storeName
     * @param {*} query
     * @param {number} count
     * @return {Array}
     * @private
     */
    async getAllKeys(storeName, query, count) {
        const entries = await this.getAllMatching(storeName, { query, count, includeKeys: true });
        return entries.map((entry) => entry.key);
    }
    /**
     * Supports flexible lookup in an object store by specifying an index,
     * query, direction, and count. This method returns an array of objects
     * with the signature .
     *
     * @param {string} storeName
     * @param {Object} [opts]
     * @param {string} [opts.index] The index to use (if specified).
     * @param {*} [opts.query]
     * @param {IDBCursorDirection} [opts.direction]
     * @param {number} [opts.count] The max number of results to return.
     * @param {boolean} [opts.includeKeys] When true, the structure of the
     *     returned objects is changed from an array of values to an array of
     *     objects in the form {key, primaryKey, value}.
     * @return {Array}
     * @private
     */
    async getAllMatching(storeName, { index, query = null, // IE/Edge errors if query === `undefined`.
    direction = 'next', count, includeKeys = false, } = {}) {
        return await this.transaction([storeName], 'readonly', (txn, done) => {
            const store = txn.objectStore(storeName);
            const target = index ? store.index(index) : store;
            const results = [];
            const request = target.openCursor(query, direction);
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    results.push(includeKeys ? cursor : cursor.value);
                    if (count && results.length >= count) {
                        done(results);
                    }
                    else {
                        cursor.continue();
                    }
                }
                else {
                    done(results);
                }
            };
        });
    }
    /**
     * Accepts a list of stores, a transaction type, and a callback and
     * performs a transaction. A promise is returned that resolves to whatever
     * value the callback chooses. The callback holds all the transaction logic
     * and is invoked with two arguments:
     *   1. The IDBTransaction object
     *   2. A `done` function, that's used to resolve the promise when
     *      when the transaction is done, if passed a value, the promise is
     *      resolved to that value.
     *
     * @param {Array<string>} storeNames An array of object store names
     *     involved in the transaction.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {!Function} callback
     * @return {*} The result of the transaction ran by the callback.
     * @private
     */
    async transaction(storeNames, type, callback) {
        await this.open();
        return await new Promise((resolve, reject) => {
            const txn = this._db.transaction(storeNames, type);
            txn.onabort = () => reject(txn.error);
            txn.oncomplete = () => resolve();
            callback(txn, (value) => resolve(value));
        });
    }
    /**
     * Delegates async to a native IDBObjectStore method.
     *
     * @param {string} method The method name.
     * @param {string} storeName The object store name.
     * @param {string} type Can be `readonly` or `readwrite`.
     * @param {...*} args The list of args to pass to the native method.
     * @return {*} The result of the transaction.
     * @private
     */
    async _call(method, storeName, type, ...args) {
        const callback = (txn, done) => {
            const objStore = txn.objectStore(storeName);
            // TODO(philipwalton): Fix this underlying TS2684 error.
            // @ts-ignore
            const request = objStore[method].apply(objStore, args);
            request.onsuccess = () => done(request.result);
        };
        return await this.transaction([storeName], type, callback);
    }
    /**
     * Closes the connection opened by `DBWrapper.open()`. Generally this method
     * doesn't need to be called since:
     *   1. It's usually better to keep a connection open since opening
     *      a new connection is somewhat slow.
     *   2. Connections are automatically closed when the reference is
     *      garbage collected.
     * The primary use case for needing to close a connection is when another
     * reference (typically in another tab) needs to upgrade it and would be
     * blocked by the current, open connection.
     *
     * @private
     */
    close() {
        if (this._db) {
            this._db.close();
            this._db = null;
        }
    }
}
// Exposed on the prototype to let users modify the default timeout on a
// per-instance or global basis.
DBWrapper.prototype.OPEN_TIMEOUT = 2000;
// Wrap native IDBObjectStore methods according to their mode.
const methodsToWrap = {
    readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
    readwrite: ['add', 'put', 'clear', 'delete'],
};
for (const [mode, methods] of Object.entries(methodsToWrap)) {
    for (const method of methods) {
        if (method in IDBObjectStore.prototype) {
            // Don't use arrow functions here since we're outside of the class.
            DBWrapper.prototype[method] =
                async function (storeName, ...args) {
                    return await this._call(method, storeName, mode, ...args);
                };
        }
    }
}

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/Deferred.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/deleteDatabase.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Deletes the database.
 * Note: this is exported separately from the DBWrapper module because most
 * usages of IndexedDB in workbox dont need deleting, and this way it can be
 * reused in tests to delete databases without creating DBWrapper instances.
 *
 * @param {string} name The database name.
 * @private
 */
const deleteDatabase = async (name) => {
    await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(name);
        request.onerror = () => {
            reject(request.error);
        };
        request.onblocked = () => {
            reject(new Error('Delete blocked'));
        };
        request.onsuccess = () => {
            resolve();
        };
    });
};

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (false) {}
    for (const callback of quotaErrorCallbacks) {
        await callback();
        if (false) {}
    }
    if (false) {}
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};


// CONCATENATED MODULE: ./node_modules/workbox-core/_private/timeout.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/resultingClientExists.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */
async function resultingClientExists(resultingClientId) {
    if (!resultingClientId) {
        return;
    }
    let existingWindows = await self.clients.matchAll({ type: 'window' });
    const existingWindowIds = new Set(existingWindows.map((w) => w.id));
    let resultingWindow;
    const startTime = performance.now();
    // Only wait up to `MAX_RETRY_TIME` to find a matching client.
    while (performance.now() - startTime < MAX_RETRY_TIME) {
        existingWindows = await self.clients.matchAll({ type: 'window' });
        resultingWindow = existingWindows.find((w) => {
            if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
            }
            else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
            }
        });
        if (resultingWindow) {
            break;
        }
        // Sleep for 100ms and retry.
        await timeout(100);
    }
    return resultingWindow;
}

// CONCATENATED MODULE: ./node_modules/workbox-core/_private/waitUntil.js
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}


// CONCATENATED MODULE: ./node_modules/workbox-core/_private.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.



















// CONCATENATED MODULE: ./node_modules/workbox-core/cacheNames.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof module:workbox-core
 */
const cacheNames_cacheNames = {
    get googleAnalytics() {
        return cacheNames.getGoogleAnalyticsName();
    },
    get precache() {
        return cacheNames.getPrecacheName();
    },
    get prefix() {
        return cacheNames.getPrefix();
    },
    get runtime() {
        return cacheNames.getRuntimeName();
    },
    get suffix() {
        return cacheNames.getSuffix();
    },
};


// CONCATENATED MODULE: ./node_modules/workbox-core/copyResponse.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new WorkboxError_WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = canConstructResponseFromBodyStream() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/clientsClaim.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof module:workbox-core
 */
function clientsClaim() {
    self.addEventListener('activate', () => self.clients.claim());
}


// CONCATENATED MODULE: ./node_modules/workbox-core/setCacheNameDetails.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof module:workbox-core
 */
function setCacheNameDetails(details) {
    if (false) {}
    cacheNames.updateDetails(details);
}


// CONCATENATED MODULE: ./node_modules/workbox-core/skipWaiting.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * This method is deprecated, and will be removed in Workbox v7.
 *
 * Calling self.skipWaiting() is equivalent, and should be used instead.
 *
 * @memberof module:workbox-core
 */
function skipWaiting() {
    // Just call self.skipWaiting() directly.
    // See https://github.com/GoogleChrome/workbox/issues/2525
    if (false) {}
    self.skipWaiting();
}


// CONCATENATED MODULE: ./node_modules/workbox-core/types.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// CONCATENATED MODULE: ./node_modules/workbox-core/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */



// CONCATENATED MODULE: ./node_modules/workbox-core/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-expiration/_version.js
var workbox_expiration_version = __webpack_require__("2KUI");

// CONCATENATED MODULE: ./node_modules/workbox-expiration/models/CacheTimestampsModel.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const DB_NAME = 'workbox-expiration';
const OBJECT_STORE_NAME = 'cache-entries';
const normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = '';
    return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel_CacheTimestampsModel {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
        this._cacheName = cacheName;
        this._db = new DBWrapper(DB_NAME, 1, {
            onupgradeneeded: (event) => this._handleUpgrade(event),
        });
    }
    /**
     * Should perform an upgrade of indexedDB.
     *
     * @param {Event} event
     *
     * @private
     */
    _handleUpgrade(event) {
        const db = event.target.result;
        // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
        // have to use the `id` keyPath here and create our own values (a
        // concatenation of `url + cacheName`) instead of simply using
        // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
        const objStore = db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
        // TODO(philipwalton): once we don't have to support EdgeHTML, we can
        // create a single index with the keyPath `['cacheName', 'timestamp']`
        // instead of doing both these indexes.
        objStore.createIndex('cacheName', 'cacheName', { unique: false });
        objStore.createIndex('timestamp', 'timestamp', { unique: false });
        // Previous versions of `workbox-expiration` used `this._cacheName`
        // as the IDBDatabase name.
        deleteDatabase(this._cacheName);
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
        url = normalizeURL(url);
        const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            // Creating an ID from the URL and cache name won't be necessary once
            // Edge switches to Chromium and all browsers we support work with
            // array keyPaths.
            id: this._getId(url),
        };
        await this._db.put(OBJECT_STORE_NAME, entry);
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number}
     *
     * @private
     */
    async getTimestamp(url) {
        const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
        return entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
        const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, 'readwrite', (txn, done) => {
            const store = txn.objectStore(OBJECT_STORE_NAME);
            const request = store.index('timestamp').openCursor(null, 'prev');
            const entriesToDelete = [];
            let entriesNotDeletedCount = 0;
            request.onsuccess = () => {
                const cursor = request.result;
                if (cursor) {
                    const result = cursor.value;
                    // TODO(philipwalton): once we can use a multi-key index, we
                    // won't have to check `cacheName` here.
                    if (result.cacheName === this._cacheName) {
                        // Delete an entry if it's older than the max age or
                        // if we already have the max number allowed.
                        if ((minTimestamp && result.timestamp < minTimestamp) ||
                            (maxCount && entriesNotDeletedCount >= maxCount)) {
                            // TODO(philipwalton): we should be able to delete the
                            // entry right here, but doing so causes an iteration
                            // bug in Safari stable (fixed in TP). Instead we can
                            // store the keys of the entries to delete, and then
                            // delete the separate transactions.
                            // https://github.com/GoogleChrome/workbox/issues/1978
                            // cursor.delete();
                            // We only need to return the URL, not the whole entry.
                            entriesToDelete.push(cursor.value);
                        }
                        else {
                            entriesNotDeletedCount++;
                        }
                    }
                    cursor.continue();
                }
                else {
                    done(entriesToDelete);
                }
            };
        });
        // TODO(philipwalton): once the Safari bug in the following issue is fixed,
        // we should be able to remove this loop and do the entry deletion in the
        // cursor loop above:
        // https://github.com/GoogleChrome/workbox/issues/1978
        const urlsDeleted = [];
        for (const entry of entriesToDelete) {
            await this._db.delete(OBJECT_STORE_NAME, entry.id);
            urlsDeleted.push(entry.url);
        }
        return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        return this._cacheName + '|' + normalizeURL(url);
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-expiration/CacheExpiration.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof module:workbox-expiration
 */
class CacheExpiration_CacheExpiration {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     */
    constructor(cacheName, config = {}) {
        this._isRunning = false;
        this._rerunRequested = false;
        if (false) {}
        this._maxEntries = config.maxEntries;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._matchOptions = config.matchOptions;
        this._cacheName = cacheName;
        this._timestampModel = new CacheTimestampsModel_CacheTimestampsModel(cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
        if (this._isRunning) {
            this._rerunRequested = true;
            return;
        }
        this._isRunning = true;
        const minTimestamp = this._maxAgeSeconds ?
            Date.now() - (this._maxAgeSeconds * 1000) : 0;
        const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
        // Delete URLs from the cache
        const cache = await self.caches.open(this._cacheName);
        for (const url of urlsExpired) {
            await cache.delete(url, this._matchOptions);
        }
        if (false) {}
        this._isRunning = false;
        if (this._rerunRequested) {
            this._rerunRequested = false;
            dontWaitFor(this.expireEntries());
        }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
        if (false) {}
        await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
        if (!this._maxAgeSeconds) {
            if (false) {}
            return false;
        }
        else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
            return (timestamp < expireOlderThan);
        }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
        // Make sure we don't attempt another rerun if we're called in the middle of
        // a cache expiration.
        this._rerunRequested = false;
        await this._timestampModel.expireEntries(Infinity); // Expires all.
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-expiration/ExpirationPlugin.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in a `workbox-strategy` to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * It can only be used with `workbox-strategy` instances that have a
 * [custom `cacheName` property set](/web/tools/workbox/guides/configure-workbox#custom_cache_names_in_strategies).
 * In other words, it can't be used to expire entries in strategy that uses the
 * default runtime cache name.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the associated cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof module:workbox-expiration
 */
class ExpirationPlugin_ExpirationPlugin {
    /**
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when a `Response` is about to be returned
         * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
         * the handler. It allows the `Response` to be inspected for freshness and
         * prevents it from being used if the `Response`'s `Date` header value is
         * older than the configured `maxAgeSeconds`.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache the response is in.
         * @param {Response} options.cachedResponse The `Response` object that's been
         *     read from a cache and whose freshness should be checked.
         * @return {Response} Either the `cachedResponse`, if it's
         *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
         *
         * @private
         */
        this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
            if (!cachedResponse) {
                return null;
            }
            const isFresh = this._isResponseDateFresh(cachedResponse);
            // Expire entries to ensure that even if the expiration date has
            // expired, it'll only be used once.
            const cacheExpiration = this._getCacheExpiration(cacheName);
            dontWaitFor(cacheExpiration.expireEntries());
            // Update the metadata for the request URL to the current timestamp,
            // but don't `await` it as we don't want to block the response.
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
                try {
                    event.waitUntil(updateTimestampDone);
                }
                catch (error) {
                    if (false) {}
                }
            }
            return isFresh ? cachedResponse : null;
        };
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when an entry is added to a cache.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache that was updated.
         * @param {string} options.request The Request for the cached entry.
         *
         * @private
         */
        this.cacheDidUpdate = async ({ cacheName, request }) => {
            if (false) {}
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
        };
        if (false) {}
        this._config = config;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheExpirations = new Map();
        if (config.purgeOnQuotaError) {
            registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
        }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
        if (cacheName === cacheNames.getRuntimeName()) {
            throw new WorkboxError_WorkboxError('expire-custom-caches-only');
        }
        let cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
            cacheExpiration = new CacheExpiration_CacheExpiration(cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
        }
        return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
        if (!this._maxAgeSeconds) {
            // We aren't expiring by age, so return true, it's fresh
            return true;
        }
        // Check if the 'date' header will suffice a quick expiration check.
        // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
        // discussion.
        const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
        if (dateHeaderTimestamp === null) {
            // Unable to parse date, so assume it's fresh.
            return true;
        }
        // If we have a valid headerTime, then our response is fresh iff the
        // headerTime plus maxAgeSeconds is greater than the current time.
        const now = Date.now();
        return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
        if (!cachedResponse.headers.has('date')) {
            return null;
        }
        const dateHeader = cachedResponse.headers.get('date');
        const parsedDate = new Date(dateHeader);
        const headerTime = parsedDate.getTime();
        // If the Date header was invalid for some reason, parsedDate.getTime()
        // will return NaN.
        if (isNaN(headerTime)) {
            return null;
        }
        return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
        // Do this one at a time instead of all at once via `Promise.all()` to
        // reduce the chance of inconsistency if a promise rejects.
        for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
        }
        // Reset this._cacheExpirations to its initial state.
        this._cacheExpirations = new Map();
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-expiration/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */


// CONCATENATED MODULE: ./node_modules/workbox-expiration/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-strategies/_version.js
var workbox_strategies_version = __webpack_require__("aqiC");

// CONCATENATED MODULE: ./node_modules/workbox-strategies/StrategyHandler.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return (typeof input === 'string') ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */
class StrategyHandler_StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {module:workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     *     [match callback]{@link module:workbox-routing~matchCallback},
     *     (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * [match callback]{@link module:workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        if (false) {}
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = await event.preloadResponse;
            if (possiblePreloadResponse) {
                if (false) {}
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail') ?
            request.clone() : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            throw new WorkboxError_WorkboxError('plugin-error-request-will-fetch', {
                thrownError: err,
            });
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ?
                undefined : this._strategy.fetchOptions);
            if (false) {}
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (false) {}
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = { ...matchOptions, ...{ cacheName } };
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (false) {}
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse = (await callback({
                cacheName,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
                event: this.event,
            })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await timeout(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (false) {}
        if (!response) {
            if (false) {}
            throw new WorkboxError_WorkboxError('cache-put-with-no-response', {
                url: getFriendlyURL(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (false) {}
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
            null;
        if (false) {}
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                responseToCache.clone() : responseToCache);
        }
        catch (error) {
            // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
            if (error.name === 'QuotaExceededError') {
                await executeQuotaErrorCallbacks();
            }
            throw error;
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        if (!this._cacheKeys[mode]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    params: this.params,
                }));
            }
            this._cacheKeys[mode] = effectiveRequest;
        }
        return this._cacheKeys[mode];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = { ...param, state };
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while (promise = this._extendLifetimePromises.shift()) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve();
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache = (await callback({
                request: this.request,
                response: responseToCache,
                event: this.event,
            })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (false) {}
        }
        return responseToCache;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/Strategy.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */
class Strategy_Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * [route]{@link module:workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string' ?
            new Request(options.request) :
            options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new StrategyHandler_StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new WorkboxError_WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            for (const callback of handler.iterateCallbacks('handlerDidError')) {
                response = await callback({ error, event, request });
                if (response) {
                    break;
                }
            }
            if (!response) {
                throw error;
            }
            else if (false) {}
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            error = waitUntilError;
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */

// CONCATENATED MODULE: ./node_modules/workbox-strategies/utils/messages.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages_messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            logger.groupCollapsed(`View the final response here.`);
            logger.log(response || '[No response returned]');
            logger.groupEnd();
        }
    },
};

// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheFirst.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class CacheFirst_CacheFirst extends Strategy_Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (false) {}
        let response = await handler.cacheMatch(request);
        let error;
        if (!response) {
            if (false) {}
            try {
                response = await handler.fetchAndCachePut(request);
            }
            catch (err) {
                error = err;
            }
            if (false) {}
        }
        else {
            if (false) {}
        }
        if (false) {}
        if (!response) {
            throw new WorkboxError_WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheOnly.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class CacheOnly_CacheOnly extends Strategy_Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (false) {}
        const response = await handler.cacheMatch(request);
        if (false) {}
        if (!response) {
            throw new WorkboxError_WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
        if (response.status === 200 || response.status === 0) {
            return response;
        }
        return null;
    },
};

// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkFirst.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkFirst_NetworkFirst extends Strategy_Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(cacheOkAndOpaquePlugin);
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (false) {}
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (false) {}
        const promises = [];
        let timeoutId;
        if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
            timeoutId = id;
            promises.push(promise);
        }
        const networkPromise = this._getNetworkPromise({ timeoutId, request, logs, handler });
        promises.push(networkPromise);
        const response = await handler.waitUntil((async () => {
            // Promise.race() will resolve as soon as the first promise resolves.
            return await handler.waitUntil(Promise.race(promises)) ||
                // If Promise.race() resolved with null, it might be due to a network
                // timeout + a cache miss. If that were to happen, we'd rather wait until
                // the networkPromise resolves instead of returning null.
                // Note that it's fine to await an already-resolved promise, so we don't
                // have to check to see if it's still "in flight".
                await networkPromise;
        })());
        if (false) {}
        if (!response) {
            throw new WorkboxError_WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, handler }) {
        let timeoutId;
        const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
                if (false) {}
                resolve(await handler.cacheMatch(request));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
        });
        return {
            promise: timeoutPromise,
            id: timeoutId,
        };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, handler }) {
        let error;
        let response;
        try {
            response = await handler.fetchAndCachePut(request);
        }
        catch (fetchError) {
            error = fetchError;
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (false) {}
        if (error || !response) {
            response = await handler.cacheMatch(request);
            if (false) {}
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkOnly.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkOnly_NetworkOnly extends Strategy_Strategy {
    /**
     * @param {Object} [options]
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will result in a network error.
     */
    constructor(options = {}) {
        super(options);
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (false) {}
        let error = undefined;
        let response;
        try {
            const promises = [handler.fetch(request)];
            if (this._networkTimeoutSeconds) {
                const timeoutPromise = timeout(this._networkTimeoutSeconds * 1000);
                promises.push(timeoutPromise);
            }
            response = await Promise.race(promises);
            if (!response) {
                throw new Error(`Timed out the network response after ` +
                    `${this._networkTimeoutSeconds} seconds.`);
            }
        }
        catch (err) {
            error = err;
        }
        if (false) {}
        if (!response) {
            throw new WorkboxError_WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/StaleWhileRevalidate.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class StaleWhileRevalidate_StaleWhileRevalidate extends Strategy_Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(cacheOkAndOpaquePlugin);
        }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (false) {}
        const fetchAndCachePromise = handler
            .fetchAndCachePut(request)
            .catch(() => {
            // Swallow this error because a 'no-response' error will be thrown in
            // main handler return flow. This will be in the `waitUntil()` flow.
        });
        let response = await handler.cacheMatch(request);
        let error;
        if (response) {
            if (false) {}
        }
        else {
            if (false) {}
            try {
                // NOTE(philipwalton): Really annoying that we have to type cast here.
                // https://github.com/microsoft/TypeScript/issues/20006
                response = await fetchAndCachePromise;
            }
            catch (err) {
                error = err;
            }
        }
        if (false) {}
        if (!response) {
            throw new WorkboxError_WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */


// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-routing/_version.js
var workbox_routing_version = __webpack_require__("5tLK");

// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/constants.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];

// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/normalizeHandler.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (false) {}
        return handler;
    }
    else {
        if (false) {}
        return { handle: handler };
    }
};

// CONCATENATED MODULE: ./node_modules/workbox-routing/Route.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route_Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = defaultMethod) {
        if (false) {}
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = normalizeHandler(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {module:workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = normalizeHandler(handler);
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/NavigationRoute.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class NavigationRoute_NavigationRoute extends Route_Route {
    /**
     * If both `denylist` and `allowlist` are provided, the `denylist` will
     * take precedence and the request will not match this route.
     *
     * The regular expressions in `allowlist` and `denylist`
     * are matched against the concatenated
     * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
     * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
     * portions of the requested URL.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {Object} options
     * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
     * the route will not handle the request (even if a allowlist RegExp matches).
     * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
     * match the URL's pathname and search parameter, the route will handle the
     * request (assuming the denylist doesn't match).
     */
    constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
        if (false) {}
        super((options) => this._match(options), handler);
        this._allowlist = allowlist;
        this._denylist = denylist;
    }
    /**
     * Routes match handler.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request
     * @return {boolean}
     *
     * @private
     */
    _match({ url, request }) {
        if (request && request.mode !== 'navigate') {
            return false;
        }
        const pathnameAndSearch = url.pathname + url.search;
        for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
                if (false) {}
                return false;
            }
        }
        if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (false) {}
            return true;
        }
        if (false) {}
        return false;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/RegExpRoute.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class RegExpRoute_RegExpRoute extends Route_Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (false) {}
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if ((url.origin !== location.origin) && (result.index !== 0)) {
                if (false) {}
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/Router.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router_Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            if (event.data && event.data.type === 'CACHE_URLS') {
                const { payload } = event.data;
                if (false) {}
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (false) {}
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (false) {}
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (false) {}
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (false) {}
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (false) {}
            return;
        }
        if (false) {}
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (false) {}
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        err = catchErr;
                    }
                }
                if (this._catchHandler) {
                    if (false) {}
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (false) {}
                // See https://github.com/GoogleChrome/workbox/issues/2079
                params = matchResult;
                if (Array.isArray(matchResult) && matchResult.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object &&
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = defaultMethod) {
        this._defaultHandlerMap.set(method, normalizeHandler(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = normalizeHandler(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (false) {}
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new WorkboxError_WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new WorkboxError_WorkboxError('unregister-route-route-not-registered');
        }
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let getOrCreateDefaultRouter_defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!getOrCreateDefaultRouter_defaultRouter) {
        getOrCreateDefaultRouter_defaultRouter = new Router_Router();
        // The helpers that use the default Router assume these listeners exist.
        getOrCreateDefaultRouter_defaultRouter.addFetchListener();
        getOrCreateDefaultRouter_defaultRouter.addCacheListener();
    }
    return getOrCreateDefaultRouter_defaultRouter;
};

// CONCATENATED MODULE: ./node_modules/workbox-routing/registerRoute.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (false) {}
        const matchCallback = ({ url }) => {
            if (false) {}
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new Route_Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new RegExpRoute_RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new Route_Route(capture, handler, method);
    }
    else if (capture instanceof Route_Route) {
        route = capture;
    }
    else {
        throw new WorkboxError_WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.registerRoute(route);
    return route;
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/setCatchHandler.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setCatchHandler(handler) {
    const defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.setCatchHandler(handler);
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/setDefaultHandler.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setDefaultHandler(handler) {
    const defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.setDefaultHandler(handler);
}


// CONCATENATED MODULE: ./node_modules/workbox-routing/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */


// CONCATENATED MODULE: ./node_modules/workbox-routing/index.mjs

// EXTERNAL MODULE: ./node_modules/workbox-precaching/_version.js
var workbox_precaching_version = __webpack_require__("xwD5");

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/createCacheKey.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new WorkboxError_WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new WorkboxError_WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                // TODO: `state` should never be undefined...
                const url = state.originalRequest.url;
                if (cachedResponse) {
                    this.notUpdatedURLs.push(url);
                }
                else {
                    this.updatedURLs.push(url);
                }
            }
            return cachedResponse;
        };
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            const cacheKey = params && params.cacheKey ||
                this._precacheController.getCacheKeyForURL(request.url);
            return cacheKey ? new Request(cacheKey) : request;
        };
        this._precacheController = precacheController;
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printCleanupDetails.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        logger.log(url);
    }
    logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        logger.groupEnd();
    }
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printInstallDetails.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        logger.log(url);
    }
    logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        logger.groupEnd();
    }
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheStrategy.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-precaching
 */
class PrecacheStrategy_PrecacheStrategy extends Strategy_Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (!response) {
            // If this is an `install` event then populate the cache. If this is a
            // `fetch` event (or any other event) then respond with the cached
            // response.
            if (handler.event && handler.event.type === 'install') {
                return await this._handleInstall(request, handler);
            }
            return await this._handleFetch(request, handler);
        }
        return response;
    }
    async _handleFetch(request, handler) {
        let response;
        // Fall back to the network if we don't have a cached response
        // (perhaps due to manual cache cleanup).
        if (this._fallbackToNetwork) {
            if (false) {}
            response = await handler.fetch(request);
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new WorkboxError_WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (false) {}
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new WorkboxError_WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    }
};
PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await copyResponse(response) : response;
    }
};


// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheController.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController_PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new PrecacheStrategy_PrecacheStrategy({
            cacheName: cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (false) {}
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = createCacheKey(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new WorkboxError_WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new WorkboxError_WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (true) {
                    // Use console directly to display this warning without bloating
                    // bundle sizes by pulling in all of the logger codebase in prod.
                    console.warn(warningMessage);
                }
                else {}
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    install(event) {
        return waitUntil(event, async () => {
            const installReportPlugin = new PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (false) {}
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    activate(event) {
        return waitUntil(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (false) {}
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new WorkboxError_WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = { cacheKey, ...options.params };
            return this.strategy.handle(options);
        };
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let getOrCreatePrecacheController_precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!getOrCreatePrecacheController_precacheController) {
        getOrCreatePrecacheController_precacheController = new PrecacheController_PrecacheController();
    }
    return getOrCreatePrecacheController_precacheController;
};

// CONCATENATED MODULE: ./node_modules/workbox-precaching/addPlugins.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = getOrCreatePrecacheController();
    precacheController.strategy.plugins.push(...plugins);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/generateURLVariations.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}

// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheRoute.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof module:workbox-precaching
 * @extends module:workbox-routing.Route
 */
class PrecacheRoute_PrecacheRoute extends Route_Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of generateURLVariations(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    return { cacheKey };
                }
            }
            if (false) {}
            return;
        };
        super(match, precacheController.strategy);
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/addRoute.js
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    const precacheController = getOrCreatePrecacheController();
    const precacheRoute = new PrecacheRoute_PrecacheRoute(precacheController, options);
    registerRoute(precacheRoute);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};


// CONCATENATED MODULE: ./node_modules/workbox-precaching/cleanupOutdatedCaches.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = cacheNames.getPrecacheName();
        event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {
            if (false) {}
        }));
    }));
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/createHandlerBoundToURL.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = getOrCreatePrecacheController();
    return precacheController.createHandlerBoundToURL(url);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/getCacheKeyForURL.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = getOrCreatePrecacheController();
    return precacheController.getCacheKeyForURL(url);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/matchPrecache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = getOrCreatePrecacheController();
    return precacheController.matchPrecache(request);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/precache.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = getOrCreatePrecacheController();
    precacheController.precache(entries);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/precacheAndRoute.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    precache(entries);
    addRoute(options);
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheFallbackPlugin_PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController = precacheController ||
            getOrCreatePrecacheController();
    }
}


// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */


// CONCATENATED MODULE: ./node_modules/workbox-precaching/index.mjs

// CONCATENATED MODULE: ./service-worker.js





skipWaiting();
clientsClaim(); // must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point

var WB_MANIFEST = [{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/Zd0L_mDgdZToIoxcjhgE9/_buildManifest.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/Zd0L_mDgdZToIoxcjhgE9/_ssgManifest.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/1a48c3c1.d53aef403ba9bb58af2e.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/1bfc9850.4f2223fcd6c62bfd6563.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/2ca616f1.e5e1dd5698db72da0e6a.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.d0af35defe4bc941af8b.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/78e521c3.acf1c3bbc0698120d799.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/d7eeaac4.ee819abb752342960d41.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.9150bc70663247c446ae.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/framework.f8bd46fc02868c500bda.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/main-c1c5f6c089a65a437d55.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/pages/_app-006f2768a82053318af8.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/pages/_error-4886f3e33fdacd23ba06.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/pages/fallback-ccace26093b037c79622.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/pages/index-1387ebc5cb6f7a2f2b05.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js'},{'revision':'Zd0L_mDgdZToIoxcjhgE9','url':'/_next/static/css/776ad31d243c9c60bad9.css'},{'revision':'5a574eb07e626a0829836faf535d6311','url':'/icon.png'},{'revision':'fa992cb667562f83b11d7f2ae0f4a22f','url':'/images/banner_consul.jpg'},{'revision':'b8a302f80bada78eca290cbfca0a6235','url':'/images/consul-brastemp.png'},{'revision':'b8a302f80bada78eca290cbfca0a6235','url':'/images/consul.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/00000.png'},{'revision':'0f85cda6e1967089c4056a1dffb8c157','url':'/images/parts/000136565.png'},{'revision':'704b7754b90bf1291135f1f7b28a69f0','url':'/images/parts/000223069.png'},{'revision':'3bde7df22260df1b0905af2754ae81a3','url':'/images/parts/000321750.png'},{'revision':'5200f74d4f107f4593021d1cdb590959','url':'/images/parts/000350292.png'},{'revision':'a2093c6aba77804bea2651b7335f972b','url':'/images/parts/000360480.png'},{'revision':'391c752c4b35fd428aed6101a0f752bc','url':'/images/parts/004197305.png'},{'revision':'f6b4eeb59b9144074a34a57ecece4301','url':'/images/parts/004257642.png'},{'revision':'d9a935422609a3930e05a4b635a38b70','url':'/images/parts/004257669.png'},{'revision':'51cacc5f32b1161898264d2397a31e99','url':'/images/parts/004258665.png'},{'revision':'3b0488e6dd3e135530f58b2b6d0ee835','url':'/images/parts/004260260.png'},{'revision':'02832ea58e99004fafd2bb2492f2f97f','url':'/images/parts/03.0988.png'},{'revision':'287c257368ede358adc5ba25c4f96d88','url':'/images/parts/03611.png'},{'revision':'02f85843e0a87c150ebbe201afbd8d4b','url':'/images/parts/03614.png'},{'revision':'87c7bbbad9ea363d4629e8c980f02b21','url':'/images/parts/03691.png'},{'revision':'8893281d5cc4d7cd11a6e7f5023b3269','url':'/images/parts/0378.png'},{'revision':'964506363e528443695f682b705e532e','url':'/images/parts/03971.png'},{'revision':'6c5b1a82e6804d29f01ec19b4c426eca','url':'/images/parts/0424.png'},{'revision':'25d41f6073fc573ec1bcd0da2fa4f264','url':'/images/parts/0430.png'},{'revision':'62c4015b9207493eaa36cbe166d89835','url':'/images/parts/07710101.png'},{'revision':'c5a6e3b8f660c7f21b4b49422f0c428e','url':'/images/parts/10001.png'},{'revision':'e6fd8558513ebf357e2e73916cf7d01d','url':'/images/parts/10002.png'},{'revision':'88a37a7a377975150589a78cbba619e8','url':'/images/parts/100208936.png'},{'revision':'88a37a7a377975150589a78cbba619e8','url':'/images/parts/100208938.png'},{'revision':'a06b6256fdc3d848870ba80d6a285986','url':'/images/parts/100209975.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100211983.png'},{'revision':'0df96e1a868e151134a975d52823ceda','url':'/images/parts/100212435.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100213250.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100213251.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100213252.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100213253.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100213254.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/100213255.png'},{'revision':'25b86128fb0313eca85f9e8cc289312e','url':'/images/parts/100214971.png'},{'revision':'7f225ae9271c9b031879c1a49a88fa00','url':'/images/parts/100217476.png'},{'revision':'b49035e9f39551d0911758e7b888385f','url':'/images/parts/100218570.png'},{'revision':'30650d08da34961af8ad9b2ce62b2417','url':'/images/parts/100220075.png'},{'revision':'c61552a4dd05404549ff55d0d6433ecf','url':'/images/parts/100222026.png'},{'revision':'52388b7a5be761fb177f86481a52a02f','url':'/images/parts/100222066.png'},{'revision':'2f296a15a20109b9bbc1ef5c6a05c9f2','url':'/images/parts/100235775.png'},{'revision':'2f296a15a20109b9bbc1ef5c6a05c9f2','url':'/images/parts/100235776.png'},{'revision':'2d4dd8b027e208c443ccb2f1a53c7954','url':'/images/parts/100249085.png'},{'revision':'0074f6fc93abce6e836169841678ff2e','url':'/images/parts/100250819.png'},{'revision':'88a37a7a377975150589a78cbba619e8','url':'/images/parts/100257770.png'},{'revision':'45fac04d3ec4dcda791c3165502260ef','url':'/images/parts/100475.png'},{'revision':'d6f0ceb343afbca81a1333d692b674fb','url':'/images/parts/100476.png'},{'revision':'0d103a23d6ed5448a1162b15f5950ef9','url':'/images/parts/100477.png'},{'revision':'3c7e2e331867d8340edc9087a0e3c168','url':'/images/parts/1043.png'},{'revision':'cce22e2cfb335367506a930bd6fae790','url':'/images/parts/1045.png'},{'revision':'2aef7b39ee13f52e2da3d4ae160039b1','url':'/images/parts/1055012002.png'},{'revision':'88a37a7a377975150589a78cbba619e8','url':'/images/parts/106151.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/106828.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/106829.png'},{'revision':'0771c5443baaceb27f0026839776d743','url':'/images/parts/107939.png'},{'revision':'0bf18844bc6b5fa94e4599e5fe8f6108','url':'/images/parts/107948.png'},{'revision':'f9b5c9f94694299cce6d80e41998e8b8','url':'/images/parts/108293.png'},{'revision':'4e1fea602b240ac06d09ab1e3ba34078','url':'/images/parts/108295.png'},{'revision':'88a37a7a377975150589a78cbba619e8','url':'/images/parts/108708.png'},{'revision':'2a7cf65b2de7fe3046ec23c908c4beff','url':'/images/parts/109200096089.png'},{'revision':'a4b182d2fbe3ecd19ceb1b27f9e457af','url':'/images/parts/109506.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/111187.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/111190.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/111191.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/111195.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/111342.png'},{'revision':'043e158045c0c0628f7a3c7ac259fa20','url':'/images/parts/111553.png'},{'revision':'e76a2671712868b061d2dd5e3cf5da1b','url':'/images/parts/111625.png'},{'revision':'7062a99c7c10be3fc63265fc5560c79e','url':'/images/parts/111806.png'},{'revision':'26cb64cd6bae9472762b067bd040b12b','url':'/images/parts/112738.png'},{'revision':'a16f528e888ec0917d0398e7659e8f1b','url':'/images/parts/113354.png'},{'revision':'4e3ac87ae97e7c98995ce697a8f5ec0d','url':'/images/parts/114725.png'},{'revision':'52388b7a5be761fb177f86481a52a02f','url':'/images/parts/115311.png'},{'revision':'52388b7a5be761fb177f86481a52a02f','url':'/images/parts/115312.png'},{'revision':'32cc2629ce9b73063fbb3660d2175c79','url':'/images/parts/115792.png'},{'revision':'603d4fbaecdb84005d3f22d722da788d','url':'/images/parts/11639.png'},{'revision':'2f44f00ae17453287cbfa38a40010ff5','url':'/images/parts/117068.png'},{'revision':'599a39c8c20a6de945bfb7d05ff379cf','url':'/images/parts/117215.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/120548.png'},{'revision':'c26a920c1c3aa09d0b31512d1b455fa0','url':'/images/parts/121104.png'},{'revision':'8fe6b4b03aef9b5622fab3efa00ee936','url':'/images/parts/12122433.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/132298 (cópia).png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/132298.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/132299.png'},{'revision':'fe9e1140c3e922361153c050b7ed49fe','url':'/images/parts/132305.png'},{'revision':'87e6b5ccad8747dc3f93cc55ad51c530','url':'/images/parts/133294.png'},{'revision':'6965b881c90d3032715a24645b4f2ac3','url':'/images/parts/1447.png'},{'revision':'568d71542e708bb19a56774b12d88c84','url':'/images/parts/1453.png'},{'revision':'c45475c85e5abd0e19486fdebe148fa4','url':'/images/parts/1460.png'},{'revision':'c9c2baa99a850ecf2ff3a2bea7477dab','url':'/images/parts/1469.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/14866.png'},{'revision':'62b8042579fb7ed3ae24da54755a472e','url':'/images/parts/1500.png'},{'revision':'b550961e777ed6b717a5bdc08313ca4a','url':'/images/parts/1501.png'},{'revision':'b550961e777ed6b717a5bdc08313ca4a','url':'/images/parts/1503.png'},{'revision':'5e864eac2e201fa052d6558030732b7b','url':'/images/parts/15133.png'},{'revision':'e2cfab0c5f723e20d67c8f03e97386ac','url':'/images/parts/151646000.png'},{'revision':'52aabaa9925ca7f32c28da89726a1984','url':'/images/parts/15663200A01261.png'},{'revision':'e102a0e7478b7a1186c6eea6b4261634','url':'/images/parts/180980.png'},{'revision':'fc73bb09c3633cd8aaa1eda862f16bc2','url':'/images/parts/181726.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/18417.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/184453.png'},{'revision':'7e09e048a37de5eeb45e6a770e006972','url':'/images/parts/188208.png'},{'revision':'20a2b7d0c473440c8e2f6f466487a506','url':'/images/parts/188209.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/188368.png'},{'revision':'e34d021d477a1e6eaabca2a6c58d3e31','url':'/images/parts/188822.png'},{'revision':'548631fdca9ef64e5e452a86aa3978fe','url':'/images/parts/188902.png'},{'revision':'4bbbd784e363048ef1beab76086c8233','url':'/images/parts/189674.png'},{'revision':'09670745e8186e206cdf9eb43f38d06e','url':'/images/parts/189676.png'},{'revision':'17042e6e82419a35f8cd8568c71b3c22','url':'/images/parts/189677.png'},{'revision':'4b118cbf752431ab47fc39886bffb917','url':'/images/parts/190473 - 17333.png'},{'revision':'b781e5c2fedc20ba02c7195f4dfebe08','url':'/images/parts/192864.png'},{'revision':'82904584e8959fee79c89fc32387b803','url':'/images/parts/193048.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/193191.png'},{'revision':'49c8e8cd697a2dbad09c664021d98610','url':'/images/parts/193218.png'},{'revision':'7cdee15b70a83cf0900ac05b48f260a5','url':'/images/parts/193250.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/200104.png'},{'revision':'00697da31efbd8efc9a31baa5b2ef1f1','url':'/images/parts/200106.png'},{'revision':'a89d2267e667a1c0e8512feddfff4544','url':'/images/parts/21011700400002.png'},{'revision':'d9af3c89fd59a0d053201177ceebb2b8','url':'/images/parts/226039002418.png'},{'revision':'e2b8a878030d5f6603c73c952e2fdd86','url':'/images/parts/256039000042.png'},{'revision':'200f4d8c7d358b69fdab32889fb78859','url':'/images/parts/256099000353.png'},{'revision':'6336819eda44783f60d6792914b90519','url':'/images/parts/3002119141.png'},{'revision':'0c41a5c8ce6de290b8ea62a2d65e4b1c','url':'/images/parts/3002257000.png'},{'revision':'b125fc00ad276e683e03cf55606f18ec','url':'/images/parts/3020516000.png'},{'revision':'2cc5c31ed7549746418b3705875f86d8','url':'/images/parts/305591702.png'},{'revision':'7cdc964b459951bf37cdf9f83c776657','url':'/images/parts/306100000121.png'},{'revision':'bf0991cb0b5ecc095a21e9c2ef96bb4d','url':'/images/parts/306623000026.png'},{'revision':'0242f0ec4bfd33be08eb9bfa320e3899','url':'/images/parts/306649900081.png'},{'revision':'5367a48ac163deb39861b93dbb0272f4','url':'/images/parts/3072214112.png'},{'revision':'1e09dc1ccf11c7034e82351bf5245923','url':'/images/parts/3072214500.png'},{'revision':'5784229a85d6351422a9d9fca4099f77','url':'/images/parts/3072214600.png'},{'revision':'89c76be17b881a758cc76e89a607f37e','url':'/images/parts/3072214800.png'},{'revision':'a8973794a7b83e323cf39dbddcd3f298','url':'/images/parts/3072236112.png'},{'revision':'3d8fa89177f6091b8894e1b5e4c62889','url':'/images/parts/3072236500.png'},{'revision':'f98e3c3fe4337e6555ebf52e9cb2a3de','url':'/images/parts/3072236600.png'},{'revision':'dfb54b93af380ebb262a1c29032a2bc0','url':'/images/parts/3092301513.png'},{'revision':'22aea9d1e3b992d3b19f5bd9a1b74bcd','url':'/images/parts/326000047.png'},{'revision':'dd131d2cd42a810e62025063bea49e17','url':'/images/parts/326000208.png'},{'revision':'3561414bfc04f014754f3ab45dec43de','url':'/images/parts/326000283.png'},{'revision':'249f93144a28c318107a8bc175e2885c','url':'/images/parts/326000516.png'},{'revision':'67acd38f0469737746533a8810592dd0','url':'/images/parts/326000791.png'},{'revision':'620f95e264cd126c3f5d2eb85447ef87','url':'/images/parts/326001354.png'},{'revision':'2190689110e4bedd14b98c1e2408879c','url':'/images/parts/326004342.png'},{'revision':'cca39f08cc774cfb1f55118068eff2cc','url':'/images/parts/326004753.png'},{'revision':'d5cb8d924bc4cf481c685d832942a65f','url':'/images/parts/326005762.png'},{'revision':'8bef07c5791aa63aa484c996603dbf1f','url':'/images/parts/326005854.png'},{'revision':'f50f7e69dcffcae2a85a767fd417a1ad','url':'/images/parts/326006453.png'},{'revision':'485b4df95752ab3961dc73b8dbc114f5','url':'/images/parts/326008340.png'},{'revision':'98d67c5163f5ed2d33a16054a9b0ccb1','url':'/images/parts/326013887.png'},{'revision':'8d0a2e9cdf4974f202a70aaacbc08185','url':'/images/parts/326014085.png'},{'revision':'cd58b2664e19daa090ff6a6a5a0a3906','url':'/images/parts/326014165.png'},{'revision':'b890b54b8c1f02671ed367c1a7774e99','url':'/images/parts/326019274.png'},{'revision':'9550369faca435de8343ac0bddca533d','url':'/images/parts/326019620.png'},{'revision':'c4faf9b06f60680820ab224fe5e29863','url':'/images/parts/326019967.png'},{'revision':'10f454dc6e4fcfed2c7eae24cd54a424','url':'/images/parts/326021045.png'},{'revision':'7c659aceb146f17370be859567e87da1','url':'/images/parts/326023355.png'},{'revision':'061ac3333f34091797f712ff920df363','url':'/images/parts/326024921.png'},{'revision':'59ea228b7d6cc81df3cc37824050c4ac','url':'/images/parts/326025071.png'},{'revision':'f79abb62ab8ba80070771136f1592bf2','url':'/images/parts/326027198.png'},{'revision':'6dc6dcf69d3d1336cc77405859c5951b','url':'/images/parts/326028183.png'},{'revision':'f66693dfac62bef3d68892874229a7f8','url':'/images/parts/326030802.png'},{'revision':'b49035e9f39551d0911758e7b888385f','url':'/images/parts/326031817.png'},{'revision':'a3fa131f6a0f85e05614f6744271e7f9','url':'/images/parts/326032778.png'},{'revision':'54ece43e70fbdb8a65925509610059b6','url':'/images/parts/326035389.png'},{'revision':'938f701405ea2d53a9ddbca45da7ef3c','url':'/images/parts/326037073.png'},{'revision':'6886b5c405d0459f29a9e67ac3281b0d','url':'/images/parts/326037534.png'},{'revision':'98d873fe125c79636dda17f1ca78db2d','url':'/images/parts/326037536.png'},{'revision':'f80fe26b98c45cc67d30b0e7ba0535d5','url':'/images/parts/326040040.png'},{'revision':'4028059044634a69369a6387012e5615','url':'/images/parts/326044251.png'},{'revision':'92cab964e8c71155e4cb44f497f129e2','url':'/images/parts/326046010.png'},{'revision':'526671cc481d158b67d6305055ae29cb','url':'/images/parts/326049983.png'},{'revision':'1f187b3cdaf5c5f8089ef5fd5a9eeceb','url':'/images/parts/326049984.png'},{'revision':'7f32cff8870aa1c20b555ac1dee03e41','url':'/images/parts/326050102.png'},{'revision':'e506206e8f5fe0f83194464198ad344f','url':'/images/parts/326050306.png'},{'revision':'cba5ee30ed5b3dbf887689d7a1108618','url':'/images/parts/326050583.png'},{'revision':'22832ea6264befcbc6aa3148ba74c6cc','url':'/images/parts/326050619.png'},{'revision':'6b77abd87eadef654f17751e2705cd3f','url':'/images/parts/326050970.png'},{'revision':'a013e40a55b0862ef3df68e5eb355db8','url':'/images/parts/326051060.png'},{'revision':'c195c50b94267cadaa79d4f1ff6d8b46','url':'/images/parts/326051079.png'},{'revision':'8c5ee2656d0ac1b1660b6f965a4defc4','url':'/images/parts/326051082.png'},{'revision':'e9fb55445a9a5ec65f316209f30111f3','url':'/images/parts/326051258.png'},{'revision':'0deafba8034053fb4fdc5ffe24aa688c','url':'/images/parts/326052930.png'},{'revision':'e0e3b1e39530701c2ca82959f8765300','url':'/images/parts/326053935.png'},{'revision':'030245ae39b6e80930b05ffa38e51ee3','url':'/images/parts/326055047.png'},{'revision':'2cda9dd5f2549dd482afe9699b28c654','url':'/images/parts/326056404.png'},{'revision':'81e93201edec7f21303ec3a0ffbf34c7','url':'/images/parts/326057069.png'},{'revision':'0452ac4b94ebf817dd265206b1f84393','url':'/images/parts/326057394.png'},{'revision':'3c034e468c580ec668f88e60fa47b508','url':'/images/parts/326057395.png'},{'revision':'ecae5b0799d70c27a84c72a7b3e97bf0','url':'/images/parts/326059371.png'},{'revision':'1f23365a1cae8a47ca48a2e468634e3a','url':'/images/parts/326060074.png'},{'revision':'9028daa48c0f02ffe65491534f11606b','url':'/images/parts/326060105.png'},{'revision':'0b4b765c00037e91569f3d60497c6d66','url':'/images/parts/326060498.png'},{'revision':'499765806f9c34c985f399eec5bd9426','url':'/images/parts/326061171.png'},{'revision':'11badf6d8e94416b7b3b526b63c1137f','url':'/images/parts/326061172.png'},{'revision':'932d4607349c695433801ce71c4f6e41','url':'/images/parts/326061422.png'},{'revision':'1a35d38c466c54f411e94ca3f6419096','url':'/images/parts/326061762.png'},{'revision':'a2ddf08916833a5f0f3f2b61461dc52f','url':'/images/parts/326062041.png'},{'revision':'0a446e782b0f1a18ef4c6d22c28c8d87','url':'/images/parts/326063222.png'},{'revision':'c78c86469dfefaa597595321c8e8303e','url':'/images/parts/326063553.png'},{'revision':'69181ceddb2bd0c1dad56f3fd2486a73','url':'/images/parts/326063554.png'},{'revision':'b0bfd8f7b732abf6c45ff474d6606d43','url':'/images/parts/326063782.png'},{'revision':'0527b0b7962aae7504894e694d514b1b','url':'/images/parts/326064034.png'},{'revision':'d1d6cff6c6fd16f793c9fe89c6f7c8b1','url':'/images/parts/326064069.png'},{'revision':'60a723871b9877ae35303553f3938ea6','url':'/images/parts/326064078.png'},{'revision':'1ca06367822a25a9e0e8d3d4b48004ca','url':'/images/parts/326064104.png'},{'revision':'e9e86ecab23d835692cd07898824314e','url':'/images/parts/326064221.png'},{'revision':'7dd416cd842bf8b842f45cb161b7fa83','url':'/images/parts/326064232.png'},{'revision':'cfb93cfbe9c251605d099674e4b14f3a','url':'/images/parts/326064355.png'},{'revision':'5b9abde428652a32f8f1780e9af7a826','url':'/images/parts/326064461.png'},{'revision':'e4b88e51c7477e68a80d66543652c4fd','url':'/images/parts/326064778.png'},{'revision':'bc6c78a417f5c2c98291bcc0575dc8fb','url':'/images/parts/326064945.png'},{'revision':'28e8a754c7b3c88a8e3e28a46a18ee3c','url':'/images/parts/326064946.png'},{'revision':'9b3e31139ad1041bab71ce4dd7165127','url':'/images/parts/326065358.png'},{'revision':'aa3613e6c9aa0dce2bd60a3e3dd20297','url':'/images/parts/326065990.png'},{'revision':'7ef5e38bad3b6a9a376446a850c1e935','url':'/images/parts/326066045.png'},{'revision':'0e19368d7ec9a3a643e2baa59e163411','url':'/images/parts/326066829.png'},{'revision':'867a30a3b28e41dbfbe612410657cb9d','url':'/images/parts/326067099.png'},{'revision':'b67cee2d01ae929ad65709d2054b3862','url':'/images/parts/3278125000.png'},{'revision':'02e6bd6b71bba09f3089782f7dfaf448','url':'/images/parts/3335012000.png'},{'revision':'de92e62ef04fd4247539b5a3208e5d8b','url':'/images/parts/3560018114.png'},{'revision':'a89930cba59662c0d0c54bf1f61fc3ae','url':'/images/parts/3573001510.png'},{'revision':'0bf772ba8570ed82c0777c3c46454366','url':'/images/parts/3573008000.png'},{'revision':'8c4eeec19176bbc71df746e03b5599a7','url':'/images/parts/3573010000.png'},{'revision':'667b7455ef550ef688eada005bdd0d15','url':'/images/parts/51041813.png'},{'revision':'87a4b0f90401660c80d781ab18edf33d','url':'/images/parts/5350000699.png'},{'revision':'7c8ff863c56c686d8e359117f803827e','url':'/images/parts/5365000006.png'},{'revision':'87a4b0f90401660c80d781ab18edf33d','url':'/images/parts/5445000451.png'},{'revision':'87a4b0f90401660c80d781ab18edf33d','url':'/images/parts/5445000488.png'},{'revision':'87a4b0f90401660c80d781ab18edf33d','url':'/images/parts/5445000490.png'},{'revision':'87a4b0f90401660c80d781ab18edf33d','url':'/images/parts/5445000533.png'},{'revision':'88d1ffc740485a998fd299601d00fa92','url':'/images/parts/5450000084.png'},{'revision':'c98b56fe5d3e773435744ea353250446','url':'/images/parts/5450000200.png'},{'revision':'81a032ed16093956f5fb1dbd9c56b062','url':'/images/parts/5455001275.png'},{'revision':'23b45eb173d1a21e0958f49b40364526','url':'/images/parts/5490000558.png'},{'revision':'966afc5b22cd19fc2fb53300cd20edea','url':'/images/parts/550A2103.png'},{'revision':'37053ea6c7129af5bf7ecb6bb27bb748','url':'/images/parts/60016900.png'},{'revision':'ab22e0f91bcfd083378a8a502bebc886','url':'/images/parts/60017222.png'},{'revision':'f30358914976e4fbd58c3017e468ed01','url':'/images/parts/6004.png'},{'revision':'587bcfcaf5fd612ff9768d0fac910b8b','url':'/images/parts/6020011I.png'},{'revision':'1399d3bd0520e112be64fdfc895248d0','url':'/images/parts/60200350.png'},{'revision':'de3dd1e9b04c5202721315a40010c713','url':'/images/parts/60200501.png'},{'revision':'28f5bd88db30cce8014f8f5c47a24a39','url':'/images/parts/60200548.png'},{'revision':'3e5c398dfa1125fd70c11a937bef2765','url':'/images/parts/6220000006.png'},{'revision':'a433a388237d1f442da4001a451020de','url':'/images/parts/6220000337.png'},{'revision':'a433a388237d1f442da4001a451020de','url':'/images/parts/6220000338.png'},{'revision':'a433a388237d1f442da4001a451020de','url':'/images/parts/6220000358.png'},{'revision':'c422bd179483b07b3ecc519233b02260','url':'/images/parts/6245000066.png'},{'revision':'c3cd84e05e3bc806d0408fe8d66fd91e','url':'/images/parts/62545864.png'},{'revision':'d277e8c785ce8780432eef4e2f10be8a','url':'/images/parts/62546039.png'},{'revision':'5d57e5484b255e42cfd8a10f2e551d3a','url':'/images/parts/62546040.png'},{'revision':'003610b8feb50791a9b4e3a9206520cf','url':'/images/parts/62602411.png'},{'revision':'8b2833604ca46eababb671b45eb524f1','url':'/images/parts/62603889.png'},{'revision':'b07b1c548a4d61e5d37717ca27298a5a','url':'/images/parts/62603890.png'},{'revision':'519e97b47404b095e03c2f1bc80d5437','url':'/images/parts/62603891.png'},{'revision':'a5c988c67f4950050413324189ad5060','url':'/images/parts/62645863.png'},{'revision':'fd7912f01e0879589cb5ce91d09b6751','url':'/images/parts/62645865.png'},{'revision':'2b8183b27bf11e431df8d0d9b34623b3','url':'/images/parts/62900695.png'},{'revision':'f2d22be973b7adbfcedb9ed797c65d92','url':'/images/parts/64188736.png'},{'revision':'e61f6ff02e8b56069d1106b0f7dd2299','url':'/images/parts/64188839.png'},{'revision':'196083293f5dd8270938dad537a8d2f3','url':'/images/parts/64188853.png'},{'revision':'e39890e1c26d5230e66169c8b3c1419e','url':'/images/parts/64188869.png'},{'revision':'c1f60f96d5ccf26a4e3e411d60e3f399','url':'/images/parts/64287473.png'},{'revision':'2095f94fbdbd2e435b3bc6541192a5ca','url':'/images/parts/64287484.png'},{'revision':'c2f27604eaa5b86574c299f477d293ac','url':'/images/parts/64287504.png'},{'revision':'b0588aebe37f82da86aa5a900df7fc1a','url':'/images/parts/64287507.png'},{'revision':'615ea8cec473a6c1fb670a0b17d36732','url':'/images/parts/64287508.png'},{'revision':'f94e0c040a8eef74f0cea1d517faeb7c','url':'/images/parts/64287510.png'},{'revision':'f4c94a738e786cc34b9a67360e700593','url':'/images/parts/64287533.png'},{'revision':'0c7e2e861cbe8c1b42b3f5643d61d12f','url':'/images/parts/64376967.png'},{'revision':'38c6422d09ad37400036e926c8e2895d','url':'/images/parts/64484484.png'},{'revision':'2a790ee52362b573d13d6157621478b7','url':'/images/parts/64484494.png'},{'revision':'08c1865031b99b996f6cb1f6407c5226','url':'/images/parts/64484556.png'},{'revision':'e948528ce03d3d9901521ce73fa9aa34','url':'/images/parts/64484557.png'},{'revision':'f10e1fe7b447ee5949944997dd9c6166','url':'/images/parts/64484564.png'},{'revision':'30c6fc5eae21d9b1088366b821ec6d36','url':'/images/parts/64484593.png'},{'revision':'36232fc415ce7cdf3f26f73b29bcc2ac','url':'/images/parts/64491600.png'},{'revision':'062eda028738389d2a4860d52f948e17','url':'/images/parts/64491700.png'},{'revision':'7bc144fb4478b33b0493437d313dbde2','url':'/images/parts/64491712.png'},{'revision':'45a9df81548e161d814f222e6d6b62f8','url':'/images/parts/64491713.png'},{'revision':'d1998799d6d01def6586b70ebbdf23c9','url':'/images/parts/64500135.png'},{'revision':'35d2612a95146914d48d40dc344fd607','url':'/images/parts/64500189.png'},{'revision':'9d1fcb6b6f721dd50ae309b33500e011','url':'/images/parts/64500213.png'},{'revision':'6dea296f9f3b1e25f389d1adb1e07c6b','url':'/images/parts/64500290.png'},{'revision':'0eae2cabad47f121cdc63938b1a9ebb1','url':'/images/parts/64500292.png'},{'revision':'a7a90abef19620e9baa209735370955b','url':'/images/parts/64500306.png'},{'revision':'2bccd6c2b3bbf01321b9ff6f5c064ef0','url':'/images/parts/64500307.png'},{'revision':'f177c7c192476a0420cf78c794c9c3d5','url':'/images/parts/64500437.png'},{'revision':'27e3fb1bd045d4ce6a5b2dab0324ab04','url':'/images/parts/64500662.png'},{'revision':'ce88e3f519a4ad38ebed049384f0a708','url':'/images/parts/64500826.png'},{'revision':'cb50224b1df50a3b41fb981ff539c55a','url':'/images/parts/64500857.png'},{'revision':'05be5115c538fb5a00d361d50c12f551','url':'/images/parts/64501590.png'},{'revision':'8c9603779a5d1414e61119aa19f51537','url':'/images/parts/64501801.png'},{'revision':'798d261def1191d5efac2a265baceef5','url':'/images/parts/64502001.png'},{'revision':'c828094fe79cc7cc857fea62e74dd237','url':'/images/parts/64502027.png'},{'revision':'bb046fb79f4bf39d779a58f0b447425d','url':'/images/parts/64502175.png'},{'revision':'beb1c1d96c85b1abb5f8afbb712812de','url':'/images/parts/64502196.png'},{'revision':'f3daedd3fc8019fb4fb42b0db00d020d','url':'/images/parts/64502201.png'},{'revision':'9c97fa91acb5456cdecf699690d0e9fe','url':'/images/parts/64502207.png'},{'revision':'40b6667a1d1a9ae7aae423416ae1d00d','url':'/images/parts/64502351.png'},{'revision':'122779230d7bf9ca855047696cb1191a','url':'/images/parts/64502352.png'},{'revision':'1fe4477b65104f607be726c3c506ac37','url':'/images/parts/64502352x.png'},{'revision':'1a40d6b53c371e5bdf9f5bfb0c77673d','url':'/images/parts/64502674.png'},{'revision':'70284253e5554f2b858ac3b347125214','url':'/images/parts/64502676.png'},{'revision':'2cd884a532d70d9e7609df8ca99d7f0e','url':'/images/parts/64502725.png'},{'revision':'3c0da77bb535e3a38ed28b4f365df1d1','url':'/images/parts/64502726.png'},{'revision':'45d7f2163674946e71df69cecbfe0ed2','url':'/images/parts/64502746.png'},{'revision':'e4c48cee63a5ec0c552b3937f8198c9d','url':'/images/parts/64503057.png'},{'revision':'1f7d07d4e5f11bfbaa3050152275c373','url':'/images/parts/64503063.png'},{'revision':'e0fa58879aa3613bdbd6c89bf33f966e','url':'/images/parts/64503081.png'},{'revision':'f177c7c192476a0420cf78c794c9c3d5','url':'/images/parts/6450437.png'},{'revision':'859d79fd332f3a33cd1a0ed9ec9cadf7','url':'/images/parts/64594024.png'},{'revision':'5ffb630f0368a8ca426270dd301308f6','url':'/images/parts/64594063.png'},{'revision':'85cca952e8e91b35eecedb21fc7b24d4','url':'/images/parts/64684457.png'},{'revision':'8202dc150ef0b2b9c8c24d0790e5d396','url':'/images/parts/64684670.png'},{'revision':'67b0c1f182382b4c3f41f76771bf34c3','url':'/images/parts/64778618.png'},{'revision':'e9bfc6227938a77e254cbdb0b47fce68','url':'/images/parts/64778622.png'},{'revision':'4902f99a54d673d4859ce153ba98e7d8','url':'/images/parts/64778672.png'},{'revision':'375f930061f40093ed9276a38abfc30a','url':'/images/parts/64778675.png'},{'revision':'70b2f7997b39ae470529fe67d5600185','url':'/images/parts/64786901.png'},{'revision':'07113c8f32b44c7a331098d2df6003e4','url':'/images/parts/64786914.png'},{'revision':'470f38d9e02ee0944da95f5744f2f28a','url':'/images/parts/64786926.png'},{'revision':'066c26056d8b3236e195107ebac30692','url':'/images/parts/64786932.png'},{'revision':'8933a798866fa359ed020ee72f197827','url':'/images/parts/64786934.png'},{'revision':'bad4c60a03eb523100b628dc620b7457','url':'/images/parts/64786945.png'},{'revision':'4d93b645238e3229cd9d424fb9b5c86a','url':'/images/parts/64800224.png'},{'revision':'4a40d39c1d3fa6e32d029987082cdb35','url':'/images/parts/64800263.png'},{'revision':'d72a81d4bcafdf580fca9b1ea64b23fd','url':'/images/parts/64800634.png'},{'revision':'68d3579a5e2e81939cd95fff9a75ddcd','url':'/images/parts/64800637.png'},{'revision':'c9d19d7c2b6c2a0aa2e7e989bb75ea0a','url':'/images/parts/64800638.png'},{'revision':'bb35cbe83e4069ef73254d8cc9e0cabf','url':'/images/parts/64800651.png'},{'revision':'642741f278d2c98094fe28fffbcd2525','url':'/images/parts/6490000008.png'},{'revision':'286b8e73202ee81835d9ee6c3d9e1182','url':'/images/parts/6490000422.png'},{'revision':'c5dd825694f48296fc238d392c594884','url':'/images/parts/64980189.png'},{'revision':'321d0c2c8a389395bfb8e724f6a0cdc9','url':'/images/parts/64980269.png'},{'revision':'c56d3d700caeb576fa9b70cef41137fe','url':'/images/parts/65158599.png'},{'revision':'3dfdcb3ae3e3b585d9a9bfc56f5548be','url':'/images/parts/65277803.png'},{'revision':'7f272655e75cb96b665873750a8a0824','url':'/images/parts/65277811.png'},{'revision':'3f8154f0c109b27b216fe2296c5c0e0d','url':'/images/parts/65400077.png'},{'revision':'370a5841313d668b7a8b3e76a802846f','url':'/images/parts/65400082.png'},{'revision':'7ab442b5984c3ded14bab18c7991d762','url':'/images/parts/65400634.png'},{'revision':'0313c51afe242801c35cfef5ba2ade15','url':'/images/parts/65400924.png'},{'revision':'0b7afa6af09122cd76664c4343c5ee00','url':'/images/parts/65477810.png'},{'revision':'106f464ae3bb19dcb4d642d417227ded','url':'/images/parts/65477818.png'},{'revision':'7b0647f047a4f46ee5cc46ec5f88a1c6','url':'/images/parts/6590.png'},{'revision':'25ab9e5f757e964a9fad904ad93e8798','url':'/images/parts/65976541.png'},{'revision':'123d19f5163813bdb7cb4f271b4b8847','url':'/images/parts/67400254.png'},{'revision':'a0bc518aee4f7d571ea8feeb4810c48c','url':'/images/parts/67400522.png'},{'revision':'f496a8b638c5222b8fbd7a3c3afc202c','url':'/images/parts/67400918.png'},{'revision':'16a7ff3c029b5871e3d08f467adcd0e5','url':'/images/parts/67401412.png'},{'revision':'8ac8d2b52d49757ecdfa8e0058f2d4c6','url':'/images/parts/67402186.png'},{'revision':'7e54dbc7d26c2d62194b56f039febf98','url':'/images/parts/67402194.png'},{'revision':'67b9c8d7abed11f9e5fae52954fdb232','url':'/images/parts/67403075.png'},{'revision':'44044e582755a9d9df1361609e9a0d9d','url':'/images/parts/67403305.png'},{'revision':'41df2854a6ab265d33101ac99bc36a66','url':'/images/parts/67403461.png'},{'revision':'d91fce9cb2537399845b398b9715023e','url':'/images/parts/67404026.png'},{'revision':'0e79df4684ededeeb99673feee855816','url':'/images/parts/67405516.png'},{'revision':'3a3439389ff9db3b1d3b17607ced7674','url':'/images/parts/67490030.png'},{'revision':'1fed387cae9980bb15ee7f2eafd3b8ab','url':'/images/parts/67491368.png'},{'revision':'760904463c4046c028cb04b0ac1a799d','url':'/images/parts/67491569.png'},{'revision':'3372d4b64539d5121b13bae99dfaa97e','url':'/images/parts/67491779.png'},{'revision':'b12dec2fdf272aee8f6e62fbe3eb9a2e','url':'/images/parts/67492431.png'},{'revision':'d05059038392905901ffb89daf09398f','url':'/images/parts/67493070.png'},{'revision':'b3a10271d1080b02a526035b1e99b39f','url':'/images/parts/67493234.png'},{'revision':'a47a34c6726de9da7ff0b483990a3bb1','url':'/images/parts/67496080.png'},{'revision':'5f271721d0f687c6adba4ca146987f42','url':'/images/parts/67496214.png'},{'revision':'7f9f84129c7c119b2c694d360112f860','url':'/images/parts/67496251.png'},{'revision':'aed210ba471e3538bdb101cfdeabf6e4','url':'/images/parts/67590259.png'},{'revision':'52dc58320b80d9cbf57b3d4729db70a8','url':'/images/parts/67590293.png'},{'revision':'2b4f69a5c2262c17d95008b7877def65','url':'/images/parts/67700030.png'},{'revision':'952d76a2efdd26ded325ae752cd245f8','url':'/images/parts/69580676.png'},{'revision':'3baeb7b61c98e582a16f10bc2c5f1421','url':'/images/parts/69580892.png'},{'revision':'966b3351083fe75c48e284bae82aaede','url':'/images/parts/69580894.png'},{'revision':'7799831474bf68886bca8586625294e5','url':'/images/parts/69580898.png'},{'revision':'5e608585b4e61509e8e01a5f44badae8','url':'/images/parts/69999741.png'},{'revision':'1ab6e5117458db1e56b9b03c9dd93de0','url':'/images/parts/69999755.png'},{'revision':'d48ec6dd885b1dc8013fb4e9157bdfe8','url':'/images/parts/70000738.png'},{'revision':'c816089bf35c395696d56f96c4214ac0','url':'/images/parts/70000740.png'},{'revision':'2270db70d527e33451ab13d8ed6d62b3','url':'/images/parts/70000949.png'},{'revision':'dff4c3d931e0293e6ffaeb65883f0d43','url':'/images/parts/70001454.png'},{'revision':'272f8766ecdbbffd0bcaf07c4237474e','url':'/images/parts/70001456.png'},{'revision':'073433532d033405a73f1e41a36c78bd','url':'/images/parts/70002531.png'},{'revision':'e441ad02a66df24e04888d8d0db38b7f','url':'/images/parts/70200040.png'},{'revision':'0a8b0e1876d35b5fed7c76454cdddabb','url':'/images/parts/70200433.png'},{'revision':'0fa675e8219342831c1dc05af32efad4','url':'/images/parts/70200521.png'},{'revision':'2645c0423e4d8569e0109238d0e55e3b','url':'/images/parts/70200522.png'},{'revision':'9b008ffab9540860d431b587721d1a12','url':'/images/parts/70200537.png'},{'revision':'6d1b8269ea81477d69e3be4a7c0a23fb','url':'/images/parts/70200562.png'},{'revision':'6792db2b2441681c218f51822579d91a','url':'/images/parts/70200647.png'},{'revision':'df2a62fd0da40d05d1d21a92402803af','url':'/images/parts/70200649.png'},{'revision':'b62df8910708dd21eb5fc73ca8ae2486','url':'/images/parts/70200714.png'},{'revision':'ec3f939fc8553c815a87316012ad4fd1','url':'/images/parts/70200963.png'},{'revision':'fa64e061755c659af7c3539ec0a00a42','url':'/images/parts/70200964.png'},{'revision':'a7bfde54eda711ad862fc28b5abe583b','url':'/images/parts/70201095.png'},{'revision':'52e30fbccddb1a2b92a22b06892ef1a3','url':'/images/parts/70201290.png'},{'revision':'db905bf4edcd07f41f14f99e036904fc','url':'/images/parts/70201296.png'},{'revision':'81ff3cab3899de860986dc8e32ee65ac','url':'/images/parts/70201326.png'},{'revision':'284cca998ae3a894b7bdca87bba0bc9e','url':'/images/parts/70201381.png'},{'revision':'eed16d71553e9f6f6c4eb575d6b80918','url':'/images/parts/70201412.png'},{'revision':'045f560525b4335385ed97284753ee09','url':'/images/parts/70201455.png'},{'revision':'cd739a8113002fdd37c91a4f7af00833','url':'/images/parts/70201675.png'},{'revision':'2a95beaa86f0c1bab5030fab652262fb','url':'/images/parts/70201676.png'},{'revision':'76fca65f04a6fc6b1060ba92b80ccf1f','url':'/images/parts/70201828.png'},{'revision':'9a206a7fb3428a2208e737857d02d3e5','url':'/images/parts/70201835.png'},{'revision':'c9a9987df96f764d1094d6945c8dc253','url':'/images/parts/70202049.png'},{'revision':'c593220f71a74ad42a2a82b27ef0b90c','url':'/images/parts/70202144.png'},{'revision':'885074187e907a8b10a73ff2f9ed2488','url':'/images/parts/70202145.png'},{'revision':'4407ca450bda96c61e177c1d79afc124','url':'/images/parts/70202436.png'},{'revision':'f037e42e49ded52e6e3c11ca5905b381','url':'/images/parts/70202437.png'},{'revision':'3ccc584c97c759662f196db50ba4163f','url':'/images/parts/70202612.png'},{'revision':'f253b99a3aeb18ac514d868644c8c327','url':'/images/parts/70202657.png'},{'revision':'1401b7230c28b714977fea248dfcf4ed','url':'/images/parts/70202837.png'},{'revision':'f64b06823b797bdbf54a18e5c7f206a8','url':'/images/parts/70202905.png'},{'revision':'88d4ec60642bf797aff2e2adc8fbdf44','url':'/images/parts/70202916.png'},{'revision':'80e302e95a1cafe2292195416af821ed','url':'/images/parts/70202973.png'},{'revision':'e30a8a74e560375b413f0dd6f2a55eff','url':'/images/parts/70202974.png'},{'revision':'a5b2444e9a577a59eab65d1239a22e03','url':'/images/parts/70202985.png'},{'revision':'88d4ec60642bf797aff2e2adc8fbdf44','url':'/images/parts/70203307.png'},{'revision':'fe2eb6581455ce2502c6b9fe3c713f5e','url':'/images/parts/70203330.png'},{'revision':'1726a72d5b81fbf52cd73f9445627d13','url':'/images/parts/70203415.png'},{'revision':'c258b88ce4a3b0687134d8ad2c0c652f','url':'/images/parts/70288465.png'},{'revision':'6b4ea0a6c09abbb2ed469b6be3fd7165','url':'/images/parts/70291132.png'},{'revision':'f959b4306e0904772ff716aa7ca18a81','url':'/images/parts/70291414.png'},{'revision':'4ff2ca6444bbb1efc7b83e92584fc965','url':'/images/parts/70292361.png'},{'revision':'d2b765baac770b649254ce233d78235f','url':'/images/parts/70292464.png'},{'revision':'cceb83aaacabbe33becbe4600d41f506','url':'/images/parts/70294643.png'},{'revision':'6fbad13685a5603aaa3b6c0c5f29fe77','url':'/images/parts/70294645.png'},{'revision':'a228bb2f987370479a5f62fd0db76ff6','url':'/images/parts/70295123.png'},{'revision':'fde358f908e5d8bff15d889221c483a6','url':'/images/parts/70295125.png'},{'revision':'90eb20f475566ad1eb32b607cac66246','url':'/images/parts/70300022.png'},{'revision':'54355064f9b238e4d6227449e079302c','url':'/images/parts/72000458.png'},{'revision':'6bcb6ff224a5531bd3819ac4dae42a42','url':'/images/parts/72002208.png'},{'revision':'3338b8414866a0e62e97db33f524b94d','url':'/images/parts/7220013.png'},{'revision':'ae0b1e55becc4e37fdaae97219f85788','url':'/images/parts/7220030.png'},{'revision':'8966c415b7096f5cb147fc0eaa0eaa87','url':'/images/parts/7220058.png'},{'revision':'c44e4d2cccd355417a2e845cdb05baf8','url':'/images/parts/7220060.png'},{'revision':'c44e4d2cccd355417a2e845cdb05baf8','url':'/images/parts/7220064.png'},{'revision':'2eebe7fc3a53676a834022bc60851cc5','url':'/images/parts/7220080.png'},{'revision':'f01bd1088f752352241ee8a548a3b462','url':'/images/parts/7220082.png'},{'revision':'4f8a06155821e108e89e50fd6868b680','url':'/images/parts/7220202.png'},{'revision':'e2faaf430846ba4dee5c9a98cd84fea6','url':'/images/parts/7220210.png'},{'revision':'82589e427f033674f8b8c9c2f733848d','url':'/images/parts/7220211.png'},{'revision':'e9e8665b7e07f4b7ea8ca13da1a50d9a','url':'/images/parts/7220212.png'},{'revision':'bfb5e9d864f9da812046b1c3d942c42c','url':'/images/parts/7620000043.png'},{'revision':'487d6c4ee9098780e5d70e403cce8d3e','url':'/images/parts/7620000053.png'},{'revision':'d8992013b629c6a3f5587c45542ca811','url':'/images/parts/7620000054.png'},{'revision':'cad717ae94b6990b2f4262bd452f5e49','url':'/images/parts/7620000066.png'},{'revision':'420babf55fbac837df89c218ba6436fb','url':'/images/parts/7620001275.png'},{'revision':'2279b6731714673581d7e508364007c4','url':'/images/parts/7620001276.png'},{'revision':'0302a9a6e75f4fffc0d2cf5ff11fc336','url':'/images/parts/77492172.png'},{'revision':'0f8fc0a8579bf654c5277933cfbfc3bb','url':'/images/parts/77492294.png'},{'revision':'9a1183178af39de11948c1c77c76da1e','url':'/images/parts/77492382.png'},{'revision':'5746f951d6f505596940fdd3100d2594','url':'/images/parts/80.png'},{'revision':'c9789d7f80cb46e5a56f25c399440744','url':'/images/parts/80000491.png'},{'revision':'0018884b8ce77582dc555073a3b226a0','url':'/images/parts/80000509.png'},{'revision':'e290a74d84f967292c9c1c176a48302c','url':'/images/parts/80000703.png'},{'revision':'3baeb7b61c98e582a16f10bc2c5f1421','url':'/images/parts/920501.png'},{'revision':'966b3351083fe75c48e284bae82aaede','url':'/images/parts/920502.png'},{'revision':'2e9fbe44873e491379c5133add4d832d','url':'/images/parts/9803001885.png'},{'revision':'c7624374b3bf9ebeefcc0c98a59363c3','url':'/images/parts/9850000498.png'},{'revision':'5b8f4d628d1630ac0c4fc207ddb57f00','url':'/images/parts/9850000527.png'},{'revision':'aa9b6ab28405ef438a161ff681cd2747','url':'/images/parts/9850000637.png'},{'revision':'dd6d635dfeb02a7d609f3a4718d91c53','url':'/images/parts/9850000830.png'},{'revision':'3c592976e35822872377e2c67edbffbe','url':'/images/parts/9850000831.png'},{'revision':'aba98f9c96ce5ad85a8730c1afea5d2a','url':'/images/parts/9850000857.png'},{'revision':'3ec58e93f68207ac445c1cf3ae247d50','url':'/images/parts/9850000941.png'},{'revision':'fb1d62730687518b67901218dbb5a3f5','url':'/images/parts/9850002348.png'},{'revision':'a3b6aa24d143d60602b4b03fd0cb9751','url':'/images/parts/9850002395.png'},{'revision':'95dc7184e103ceee12b72218b28e16da','url':'/images/parts/9850002402.png'},{'revision':'a2436d41a883edf4e3dfc33e4fc06971','url':'/images/parts/9850002657.png'},{'revision':'c0eece826d48035cfcb085e111635df3','url':'/images/parts/9875010024.png'},{'revision':'ad5e51b21c9228c9db48b6b4d58c2e5e','url':'/images/parts/A02021005.png'},{'revision':'efb6a49883a680a7a86a55a588c4295d','url':'/images/parts/A02080805.png'},{'revision':'6e1de6db496a680518dc606e13b13ec9','url':'/images/parts/A02607601.png'},{'revision':'9156cece40dfafe79c8df2eb879073b6','url':'/images/parts/A03625401.png'},{'revision':'786fe6a0831c3c1cbe5d992be7f7493a','url':'/images/parts/A03625402.png'},{'revision':'87f76f334baeeb55f17c14bea4bb47f5','url':'/images/parts/A05104401.png'},{'revision':'43eac63bb31f63a5521adc16ef5abcbd','url':'/images/parts/A05440301.png'},{'revision':'d40f66a606251e5386bd4564267adb3a','url':'/images/parts/A05441301.png'},{'revision':'8450ee64a5e7d4a481283882c26d6b27','url':'/images/parts/A05546201.png'},{'revision':'19ae606553aad470396ac8e7382aee21','url':'/images/parts/A06414801.png'},{'revision':'82c2260976edeb73e308d84e1e623ce1','url':'/images/parts/A07412401.png'},{'revision':'b6dc8882b34c82b60b39b71183eb83b7','url':'/images/parts/A07412402.png'},{'revision':'d4b8dfa2ec2975987a7a75e560e01412','url':'/images/parts/A09083214A.png'},{'revision':'085c8450608f4b506197409a95f2f694','url':'/images/parts/A10089001.png'},{'revision':'f3daf40acedfdcf7b622f70ceb8c8e78','url':'/images/parts/A12432601.png'},{'revision':'a22e2ae58cdbcae5b3119d3e4c94078c','url':'/images/parts/A12432801.png'},{'revision':'b540f2949791a83f1a8e6b5a9c85be16','url':'/images/parts/A15758201.png'},{'revision':'e4e812db0683278ce71531a658bd4fc8','url':'/images/parts/A97937901.png'},{'revision':'78d43756b95b685450e143a4efd69dd0','url':'/images/parts/A99014001.png'},{'revision':'c556fc35d734596c3a01ad3068f0a8a7','url':'/images/parts/A99035101.png'},{'revision':'dade2fc50b7618793005d78476b15bcf','url':'/images/parts/A99035102.png'},{'revision':'2e3a1ec9490940dd7b1078232e2af83a','url':'/images/parts/A99035115.png'},{'revision':'2ea59de33654f732eb644260473d1c30','url':'/images/parts/A99035116.png'},{'revision':'1cfbfd6c0b3c16a24363b542fed38186','url':'/images/parts/A99035117.png'},{'revision':'42f27287b6aa4c63dc9dbfab18094d36','url':'/images/parts/A99035119.png'},{'revision':'5ccec87b0bf7bb04d8391bcb5dee51cc','url':'/images/parts/A99035138.png'},{'revision':'0ba651707f3daf2b7cc947b8cd55cad2','url':'/images/parts/A99063101.png'},{'revision':'19babf31fe7df9a488f30365becad499','url':'/images/parts/A99084602A.png'},{'revision':'deda558f1ee1e7c85775bef19f66decb','url':'/images/parts/A99089302.png'},{'revision':'06e9003fb7156e37e76da8980891f087','url':'/images/parts/A99089304.png'},{'revision':'31d081a4bcff282760cc8ccbbfe1426a','url':'/images/parts/A99331701.png'},{'revision':'4c40390bdd1c7ada0ad8f645b2fdbc6d','url':'/images/parts/CCP0010AM.png'},{'revision':'e0b5da144454dece605bcb2d860d48ca','url':'/images/parts/CCP0014AM.png'},{'revision':'83e30a21cb3e37c6e92491cb3c35844a','url':'/images/parts/CCP0015AM.png'},{'revision':'64448a5e83e42fcd1601cc9f9eb142d5','url':'/images/parts/CCP0024AM.png'},{'revision':'880718005f49c29ce32fae2e2cb55d3d','url':'/images/parts/CCP004AM.png'},{'revision':'42675e5698dfe0b396436b2dd24f27b3','url':'/images/parts/CCP009AM.png'},{'revision':'60d02199f58de582b63987524221102a','url':'/images/parts/D10221.png'},{'revision':'07d461b17f68ac515d98c6244d167ea4','url':'/images/parts/D10222.png'},{'revision':'d07152fb71ca19b67a7cc0f9c2137619','url':'/images/parts/D10223.png'},{'revision':'b969abcaedcb456d6db64e20642546e5','url':'/images/parts/D10224.png'},{'revision':'e356d2fcaa4896fa47f59c760a78c93d','url':'/images/parts/D10225.png'},{'revision':'e3cf0cccfe62d6852edadf3e730cfda9','url':'/images/parts/D10226.png'},{'revision':'432bd77314607850cb3f3ef2ce506b1d','url':'/images/parts/D102787.png'},{'revision':'f93b5a928a8571e9c5a96474d3b5bc90','url':'/images/parts/D10989.png'},{'revision':'8dfe31dbebe68256506971b8ae9b59e4','url':'/images/parts/D114763.png'},{'revision':'8ad60846b964cc06e5904868055e07e0','url':'/images/parts/D153055.png'},{'revision':'8586c982ec39008de799ca4ca3ae1d80','url':'/images/parts/D8417.png'},{'revision':'3fa072a4676854e05f93eee728463dc2','url':'/images/parts/M10089.png'},{'revision':'cd2b40a078ed00412641ceeea5cebc11','url':'/images/parts/M156039.png'},{'revision':'9716594399aa01a3de76e35e8d1c3230','url':'/images/parts/M24080.png'},{'revision':'242a05d1ec31ebc935086137133a9de3','url':'/images/parts/P0898.png'},{'revision':'d0955631f45968d97a2efcf765960e63','url':'/images/parts/P0965.png'},{'revision':'eccc55bff20308f7478867c99e55cd91','url':'/images/parts/PRPSSW2D3G.png'},{'revision':'6348194af0be9618478ab90d7dad67bc','url':'/images/parts/PRPSSWLF.png'},{'revision':'c75d28bd3149a8860f090321098ab9c5','url':'/images/parts/S311443.png'},{'revision':'844bd2eaaafb748a8c39272c94237bc5','url':'/images/parts/S31441.png'},{'revision':'2190689110e4bedd14b98c1e2408879c','url':'/images/parts/Sem_título-removebg-preview.png'},{'revision':'8919dddb86a9fadc855fb6aa37926fc1','url':'/images/parts/W10160035.png'},{'revision':'c195c50b94267cadaa79d4f1ff6d8b46','url':'/images/parts/W10160037.png'},{'revision':'c195c50b94267cadaa79d4f1ff6d8b46','url':'/images/parts/W10160038.png'},{'revision':'a3f38a063bcd88c3feaf92e9a0d6651b','url':'/images/parts/W10160090.png'},{'revision':'09a5fd8ac5abcd8924ed78a4ad084b82','url':'/images/parts/W10160091.png'},{'revision':'dc37132ce2bc1aa87c2069ce44b0df88','url':'/images/parts/W10168510.png'},{'revision':'420a08daadb936cee1a9ebc978fed9ca','url':'/images/parts/W10169464.png'},{'revision':'b30af6ae087294fbcaa8fb012ae5a6ce','url':'/images/parts/W10169475.png'},{'revision':'73ce0c02c11862c2671552e436e0c632','url':'/images/parts/W10170131.png'},{'revision':'b3c1300b5025abea90df8e3ad6673026','url':'/images/parts/W10171528.png'},{'revision':'7a35097f50f4512b4501cd55e1c16ddb','url':'/images/parts/W10188443.png'},{'revision':'648732245f98dfa5c2b5dd6612b46672','url':'/images/parts/W10188458.png'},{'revision':'0b4713196a5a0e5e2b1d49dede5e052b','url':'/images/parts/W10201539.png'},{'revision':'a1878b4b8e1c5f64f8a6d45ea00b4f7a','url':'/images/parts/W10205302.png'},{'revision':'f57fe915d97c62ac97cabaf088671033','url':'/images/parts/W10221056.png'},{'revision':'20fa44cec2e665000ba70df71b61f5ba','url':'/images/parts/W10237733.png'},{'revision':'f8032f3ec23c7a862abe8427662f4542','url':'/images/parts/W10245146.png'},{'revision':'9771fff296be2aeca520eab44e34c953','url':'/images/parts/W10246430.png'},{'revision':'bfaee04586ba091f27767839935d7bb8','url':'/images/parts/W10247043.png'},{'revision':'e91ffdbc5a363dc454da346e15026341','url':'/images/parts/W10257565.png'},{'revision':'18c35b8e5349f3f30577019331ee0488','url':'/images/parts/W10257566.png'},{'revision':'1872a42bbd06d95a82c277ea224657f0','url':'/images/parts/W10260460.png'},{'revision':'fb59fa36a7b060902cefdd185c710807','url':'/images/parts/W10269365.png'},{'revision':'87159fd94f49367a9ea08d71cc0dac11','url':'/images/parts/W10275385.png'},{'revision':'d964edf36875eeaea8d4987fa2a225d0','url':'/images/parts/W10275991.png'},{'revision':'fe39e8ef75604ec4c389c0ae1cdaaaaa','url':'/images/parts/W10279766.png'},{'revision':'db6e0549b71a2f1ec805d7dc8b6684fa','url':'/images/parts/W10286851.png'},{'revision':'cebe8d0287ac87d92e8bc1b4bf700235','url':'/images/parts/W10292562.png'},{'revision':'228e004e1b3435056a2a351908420979','url':'/images/parts/W10301604.png'},{'revision':'a4e6bc1241fa341d836b0dabb529fe92','url':'/images/parts/W10308761.png'},{'revision':'3c4d20863b87563176bda7f924866c87','url':'/images/parts/W10308925.png'},{'revision':'9a637ff65f3b463a8ae08c7d2c56529a','url':'/images/parts/W10310999.png'},{'revision':'eebf28cf79a6c2822d44bd4138388d3c','url':'/images/parts/W10311962.png'},{'revision':'0dea8ccd63657898e6b465fdefd4b8a3','url':'/images/parts/W10313478.png'},{'revision':'d0a6fc5ae1976da65da8dd86e9586ce4','url':'/images/parts/W10313522.png'},{'revision':'ba310868ad5ba7c66690f837f654a958','url':'/images/parts/W10313525.png'},{'revision':'6f1d2c01911a484a97670e20ed8c997e','url':'/images/parts/W10314626.png'},{'revision':'9ea7cd04c0ab6e85f111e71bc38c68fc','url':'/images/parts/W10315004.png'},{'revision':'659faac848343187d0988642c990a2e7','url':'/images/parts/W10319831.png'},{'revision':'04fd3b7014d8d20f1f3289a73a887cea','url':'/images/parts/W10325885.png'},{'revision':'66e711ffe75eb0e6c766bfe2eca07f89','url':'/images/parts/W10328198.png'},{'revision':'31083895a09d0fd91a13047d6cbcddc0','url':'/images/parts/W10328987.png'},{'revision':'daf7ba8f1352d7f17c83f899ae9ab565','url':'/images/parts/W10329947.png'},{'revision':'1f5400acdb73cb936b52e64ee629f821','url':'/images/parts/W10331263.png'},{'revision':'2ed79c87c76332859d3d42b3355afc0f','url':'/images/parts/W10338877.png'},{'revision':'2e459dfb3f3f6c79bb0331df8a96bdbb','url':'/images/parts/W10341892.png'},{'revision':'29b8c469eb786f159627e9a5640b4ada','url':'/images/parts/W10343278.png'},{'revision':'4103b73c0705977872a0c811770108c1','url':'/images/parts/W10343282.png'},{'revision':'91ffb4171ad27301826210b4afa94ebd','url':'/images/parts/W10344774.png'},{'revision':'0f12d2ca1cbe4b4749fd0773251dcaf0','url':'/images/parts/W10346906.png'},{'revision':'cb1258218533cf5d40f1cd8d4d4843a4','url':'/images/parts/W10347201.png'},{'revision':'e4cacc0891711432b4fd5b9b45bbfa96','url':'/images/parts/W10356413.png'},{'revision':'ec76ea2c3dbba2e465430e173436666c','url':'/images/parts/W10364075.png'},{'revision':'d8f3c04e6ca5da416695742988a348c8','url':'/images/parts/W10364953.png'},{'revision':'b7578c01e6f68cdcda3da5281be5dfd8','url':'/images/parts/W10393801.png'},{'revision':'b7578c01e6f68cdcda3da5281be5dfd8','url':'/images/parts/W10393804.png'},{'revision':'b7578c01e6f68cdcda3da5281be5dfd8','url':'/images/parts/W10393809.png'},{'revision':'b7578c01e6f68cdcda3da5281be5dfd8','url':'/images/parts/W10393810.png'},{'revision':'1d8716d5c49bc6f37b95fb13f03a9efa','url':'/images/parts/W10393815.png'},{'revision':'1d8716d5c49bc6f37b95fb13f03a9efa','url':'/images/parts/W10393823.png'},{'revision':'7e204b964674b783205bcf19cb47b2c2','url':'/images/parts/W10393847.png'},{'revision':'026d94c607d10f896357389a8243aac8','url':'/images/parts/W10402555.png'},{'revision':'508de0d49136951af2211f9589884201','url':'/images/parts/W10405496.png'},{'revision':'e03cb4f42fe481ef80619069e264e141','url':'/images/parts/W10406732.png'},{'revision':'d40238c3a32f10a8c3de924574bb3cb9','url':'/images/parts/W10407123.png'},{'revision':'1d6bdf814ef0817fbd3c85798e582b29','url':'/images/parts/W10413313.png'},{'revision':'aa9010ce0a175b7a22b145873be68ac2','url':'/images/parts/W10413484.png'},{'revision':'99981d946553d7e6668c48361191fad8','url':'/images/parts/W10413648.png'},{'revision':'fbce380d6417a6c31c5773c8fa5aa21c','url':'/images/parts/W10414529.png'},{'revision':'7f2e413bde9f414e37ab53a4624f2826','url':'/images/parts/W10446925.png'},{'revision':'56666f06e10d1059090a18cd7ec28d78','url':'/images/parts/W10446927.png'},{'revision':'78e6c7ef2df5f441e4e6d0feb8339645','url':'/images/parts/W10447054.png'},{'revision':'a0233fb1e0d377f393fdd2b2699595ed','url':'/images/parts/W10447057.png'},{'revision':'84b5e5b153fa9cce4172833715e6a723','url':'/images/parts/W10463578.png'},{'revision':'e92beb268e910d2874aab31bf121a68a','url':'/images/parts/W10463579.png'},{'revision':'6ca1d75df48139278beec5f82bad890e','url':'/images/parts/W10467328.png'},{'revision':'1951d7f5f69f010ba71d84a70ffeca49','url':'/images/parts/W10467330.png'},{'revision':'154517ad876a92bc6d05409139fe824a','url':'/images/parts/W10470951.png'},{'revision':'a11a2299212b8af80adf25b2998650b0','url':'/images/parts/W10471600.png'},{'revision':'9435b1f808eeb084c02f6f327eefb484','url':'/images/parts/W10471975.png'},{'revision':'520d6c3b0aeb9308c4f9eebaea3068de','url':'/images/parts/W10477101.png'},{'revision':'76669405fb392923dbe5d7fa304bad49','url':'/images/parts/W10477178.png'},{'revision':'e779d2b40556ac8050d4780330b72522','url':'/images/parts/W10487038.png'},{'revision':'4692e447c7cd96989c0e0a3e502bb796','url':'/images/parts/W10488004.png'},{'revision':'7088011d04ce62505599d1bb015a14a7','url':'/images/parts/W10509511.png'},{'revision':'b10d80cb9ff5c83200c682b36e711c22','url':'/images/parts/W10515645.png'},{'revision':'0557a90d653b81ffd61f0abff60a3928','url':'/images/parts/W10517614.png'},{'revision':'5a7460c3f4e0a24c20f567810dd5b472','url':'/images/parts/W10518564.png'},{'revision':'5cd7930e23e52fb5c58c39538b0d7906','url':'/images/parts/W10518617.png'},{'revision':'9099aef2e5889a1cc8e043e05ec2f1a3','url':'/images/parts/W10520370.png'},{'revision':'2fda4a48ed5fac736568c60de2f2e2a0','url':'/images/parts/W10527820.png'},{'revision':'a8d26ba80cd4fd7c67d1753948833f36','url':'/images/parts/W10531315.png'},{'revision':'9fb7988314e919ea197c6372a9179b66','url':'/images/parts/W10539793.png'},{'revision':'7547ded8d026f09e426dab79dfe48ad8','url':'/images/parts/W10540663.png'},{'revision':'87513952209732d335c97fff35a23679','url':'/images/parts/W10545668.png'},{'revision':'db7fe0fcc6614dd445005e62e6a3376b','url':'/images/parts/W10553787.png'},{'revision':'7f225ae9271c9b031879c1a49a88fa00','url':'/images/parts/W10554242.png'},{'revision':'c1f11d246b81aefd5c8ae1aadb3ff06e','url':'/images/parts/W10555135.png'},{'revision':'f57ddc99dfac479c97915e5b5b7d2438','url':'/images/parts/W10557330.png'},{'revision':'c2a1fa9a2fefa2c65865ed892f205998','url':'/images/parts/W10563579.png'},{'revision':'010262c0f7445b1bdde80dc69c67247f','url':'/images/parts/W10563584.png'},{'revision':'c195c50b94267cadaa79d4f1ff6d8b46','url':'/images/parts/W10563678.png'},{'revision':'2bad225f82bf16159e79a877f61a490c','url':'/images/parts/W10581537.png'},{'revision':'a876946ef9a9fa381318e2f416114d43','url':'/images/parts/W10585857.png'},{'revision':'63a4941711a2efe6a6b52d0c09adf64e','url':'/images/parts/W10591460.png'},{'revision':'44f09fa610d4382ea58fca425143f9e5','url':'/images/parts/W10591605.png'},{'revision':'3c1f6c7292ce64efdc58313077d31af5','url':'/images/parts/W10592481.png'},{'revision':'8bd31dda7b78be36453c79b4ee6d0293','url':'/images/parts/W10602126.png'},{'revision':'d6faccf80d2db45b6f78043eb74e39d2','url':'/images/parts/W10605804.png'},{'revision':'77afc4b46c300fd82fbbf9d984205ab1','url':'/images/parts/W10605809.png'},{'revision':'6a241b2bb749e5f3149d58f7ee43c41a','url':'/images/parts/W10606115.png'},{'revision':'4d3855f629fc14a49d9676ce216c535c','url':'/images/parts/W10616687.png'},{'revision':'f0d5b29da29673b04a25b4ae827228e8','url':'/images/parts/W10617044.png'},{'revision':'11eabffa1eac470fc8909d1180bc38b3','url':'/images/parts/W10619170.png'},{'revision':'7449cfece4e9011301183c91a05ac52e','url':'/images/parts/W10619261.png'},{'revision':'128771312e54d0f593ba55066c399bca','url':'/images/parts/W10619463.png'},{'revision':'0efd3141a97063fed514315d1f30657e','url':'/images/parts/W10626365.png'},{'revision':'427ff30c176067c27487c434c7051f4d','url':'/images/parts/W10630752.png'},{'revision':'899b7db8a07b157b8a1c95b807e4b16b','url':'/images/parts/W10630758.png'},{'revision':'84e6dfed1b897b05ca4530bae3d05764','url':'/images/parts/W10632303.png'},{'revision':'f8836d856bc413ffc020721ba19f0618','url':'/images/parts/W10632360.png'},{'revision':'39183992d881cba2e54c38e68ab7b771','url':'/images/parts/W10632492.png'},{'revision':'3a48f1d4d435d22340a024a7937c4cae','url':'/images/parts/W10632495.png'},{'revision':'70782c445de08218b884c182ab3abd93','url':'/images/parts/W10632497.png'},{'revision':'f11b6ad23a23a12333da4062f40891ca','url':'/images/parts/W10647948.png'},{'revision':'5c7167d3e88808ee9e33a9ff69ad500a','url':'/images/parts/W10649509.png'},{'revision':'60e215537b1c5574e26ef1f9edbabff6','url':'/images/parts/W10652509.png'},{'revision':'317e685083275e7988c29ea7ca450d4e','url':'/images/parts/W10658798.png'},{'revision':'c930942fab862fe8ee0391a3980a5629','url':'/images/parts/W10668378.png'},{'revision':'747b44ff8be6491d666598838f072b1b','url':'/images/parts/W10670148.png'},{'revision':'a53a26173ee175c0bd3fd42c4fedd56a','url':'/images/parts/W10678919.png'},{'revision':'253e9d04af13d8c90f0f10bd6b5ea1f8','url':'/images/parts/W10678922.png'},{'revision':'ab3e1bb8acb35e784291b0e5de0c7f25','url':'/images/parts/W10678923.png'},{'revision':'14175faf30eadcaa73b298f166be4c09','url':'/images/parts/W10685607.png'},{'revision':'aaca7621c6d8b964e55171686b6ec9e9','url':'/images/parts/W10686100.png'},{'revision':'708c156e9a21356bd3295b8b33b2b10e','url':'/images/parts/W10699240.png'},{'revision':'81cea55a5db35810f7b815b92f52ec0f','url':'/images/parts/W10704340.png'},{'revision':'c97cfd5eab4467b62f4a4fb0c8503cd8','url':'/images/parts/W10704809.png'},{'revision':'266522a68d0e1e4ea54d0c184b4e1aa9','url':'/images/parts/W10705128.png'},{'revision':'dc2cf5d04a776595ccf379486e00fcd5','url':'/images/parts/W10706117.png'},{'revision':'c74dafae2c08e4326f4ba20b4426e492','url':'/images/parts/W10709306.png'},{'revision':'875a914d0ff760d331bbe31ab4e2ede6','url':'/images/parts/W10711360.png'},{'revision':'2d04bbb116ef856e76c4cce8fbe521e4','url':'/images/parts/W10711361.png'},{'revision':'a7e5cb9755c6a4a82c8ee262d5a30381','url':'/images/parts/W10714366.png'},{'revision':'dc72693d17d986b07da0d89dce8b48b6','url':'/images/parts/W10721910.png'},{'revision':'2663509ecccdc230ee3f0ad013a74745','url':'/images/parts/W10728955.png'},{'revision':'0ca2d33b1b049f9c12be83fb56ea991f','url':'/images/parts/W10737624.png'},{'revision':'62a8d2972bfb3c82f1a2fc7b02b1c714','url':'/images/parts/W10742654.png'},{'revision':'51fc765d2370f9c8c3bb3887bed80dcd','url':'/images/parts/W10743620.png'},{'revision':'50e5c37d3a8242ad43dc6cf2293302e9','url':'/images/parts/W10747291.png'},{'revision':'e346ffc9c03373d467c603c248a9e3ca','url':'/images/parts/W10751509.png'},{'revision':'66de791e41276fde9458187897d9121f','url':'/images/parts/W10752134.png'},{'revision':'a10a1ab25a146489a3cd3f9e8d7dec76','url':'/images/parts/W10754676.png'},{'revision':'afa02cb3d2d98f2624f4642fdf8001d5','url':'/images/parts/W10754807.png'},{'revision':'9b369505d7438f1cb6af9825c43bc364','url':'/images/parts/W10755942.png'},{'revision':'808994736d15a3073322d5faba437511','url':'/images/parts/W10764578.png'},{'revision':'bdff142718d08b461c4ac3377a4766e8','url':'/images/parts/W10774373.png'},{'revision':'4e05502acdd3d90e83e41a5c89b8877c','url':'/images/parts/W10776410.png'},{'revision':'31d48cadd55b692c0fa67af0638c19be','url':'/images/parts/W10779052.png'},{'revision':'c6c0701834a6ea1b95962bf1df55aa5e','url':'/images/parts/W10780260.png'},{'revision':'ed67561c27fb539f266b0a92382d73b9','url':'/images/parts/W10791633.png'},{'revision':'938aaab7ceeb4d4e91df09ef8bfaa4eb','url':'/images/parts/W10797831.png'},{'revision':'2fc6572627fdfe694d5a17139ba0f4f9','url':'/images/parts/W10807957.png'},{'revision':'ae0226f348cbf5499c00cb99fbea167f','url':'/images/parts/W10809518.png'},{'revision':'97812d592b5e61ff715f7f476b055cf5','url':'/images/parts/W10818971.png'},{'revision':'d30fedbb0b9740bcbc1cdc4933f1d708','url':'/images/parts/W10819784.png'},{'revision':'36ad44121b4b691e3bf10cf8885333ea','url':'/images/parts/W10827973.png'},{'revision':'9a17d2c4002f098e3e931def54af08ca','url':'/images/parts/W10828358.png'},{'revision':'8950e6f1cc36d9d54f222240e5353eb1','url':'/images/parts/W10829873.png'},{'revision':'076c021a5c528052c299052736e84a4a','url':'/images/parts/W10831919.png'},{'revision':'4f744a0e5713fabbca4ae9e0c441864b','url':'/images/parts/W10833373.png'},{'revision':'bbb324cda81c5b52dedd8ceb6d49f45c','url':'/images/parts/W10845146.png'},{'revision':'468a64426df8065a9359a3cba94b0700','url':'/images/parts/W10845147.png'},{'revision':'b2b59b25c19abb4128362d62f4f5a8ba','url':'/images/parts/W10849469.png'},{'revision':'ee857bb4757522bc33f099c68ecf5c75','url':'/images/parts/W10849470.png'},{'revision':'cd0f6a7ee767a2e55b93e0eed5eaaec7','url':'/images/parts/W10856154.png'},{'revision':'2acebaf0357bab980621896bef5750b8','url':'/images/parts/W10863659.png'},{'revision':'3ddae90c84aa698d9fa0bf0725c9e5a5','url':'/images/parts/W10882241.png'},{'revision':'e485b0bf585047bff6a41806126b9148','url':'/images/parts/W10896284.png'},{'revision':'0f63e5cc62d758010b9e32433e0a836c','url':'/images/parts/W10897149.png'},{'revision':'02ab0e1bf1abaf92d2d6d2d418d6e1c8','url':'/images/parts/W10899325.png'},{'revision':'aeaada0e47fc26e5aa27066734f82bd2','url':'/images/parts/W11023460.png'},{'revision':'622ab51ac1abdb2739f4bd76e8c1e599','url':'/images/parts/W11051514.png'},{'revision':'0abae0659837ec3613e189cde94c8ff4','url':'/images/parts/W11082452.png'},{'revision':'6a851a783112aa998c163b330b431432','url':'/images/parts/W11082454.png'},{'revision':'f444754a5e9e3f173353856dfa04ae3e','url':'/images/parts/W11082457.png'},{'revision':'5b385167cbe7564b3fd79c1e2db0ba4c','url':'/images/parts/W11082462.png'},{'revision':'807fba1e783337efb52eec9f024f729d','url':'/images/parts/W11082463.png'},{'revision':'95a759cf4d2c3f0cf1a25ce741169cb3','url':'/images/parts/W11091875.png'},{'revision':'f4074467492cdf403da90e76179d7665','url':'/images/parts/W11107299.png'},{'revision':'b58dc302d3d3faa299a47c67174c0006','url':'/images/parts/W11121357.png'},{'revision':'2bfeda16cdeeabd044d6c7cfc6e33b1c','url':'/images/parts/W11123830.png'},{'revision':'9e1a976d5d68dad711904e7c6f37be5c','url':'/images/parts/W11125635.png'},{'revision':'d4e047aed2c37621d454ed35d10cff65','url':'/images/parts/W11132062.png'},{'revision':'9628477e9dac1587b14365b4a634625e','url':'/images/parts/W11132065.png'},{'revision':'0dd19633fc0c403fa69d1867a1c1a601','url':'/images/parts/W11161217.png'},{'revision':'7c7103d324225640be6b507bb32c3596','url':'/images/parts/W11163349.png'},{'revision':'6f68342042307072feda9a67d3ae2f77','url':'/images/parts/W11176404.png'},{'revision':'f29272cfbba17adfd7a969fb97609bcc','url':'/images/parts/W11197973.png'},{'revision':'d5a58f4b55da33a3d98a3959506ef55d','url':'/images/parts/W11210462.png'},{'revision':'ade6a4a7f89f67ea0a3853ee7aea212b','url':'/images/parts/W11226018.png'},{'revision':'7e3e6d1ec0539d649c71fc23b90a6560','url':'/images/parts/W11240384.png'},{'revision':'5e1d560c20de42b9993a269a2cfd0bfb','url':'/images/parts/W11245250.png'},{'revision':'fa0cf36096776ad8e5d5d568069457e7','url':'/images/parts/W11251568.png'},{'revision':'e5a30fbde38545479d21eb34fd910b47','url':'/images/parts/W11253656.png'},{'revision':'b3e810a74522c326b271e2a453746ad6','url':'/images/parts/W11268184.png'},{'revision':'23738546d360fa6c079de587eabf5143','url':'/images/parts/W11268186.png'},{'revision':'c9f7e5405c925106fa752a35a8c0f97b','url':'/images/parts/W11299794.png'},{'revision':'0e9d595c64676a26f2db6294fac374dc','url':'/images/parts/W11299803.png'},{'revision':'51c5f535d1d3013c34fe388dd4961236','url':'/images/parts/W11300676.png'},{'revision':'e2e23962c4d34f82153e9763d807f8bd','url':'/images/parts/W11300681.png'},{'revision':'57778654deda6b27a35bfd5f96389265','url':'/images/parts/W11300695.png'},{'revision':'d89eaa5cdc5b05e1aec5cdbf80344103','url':'/images/parts/W11300698.png'},{'revision':'680fc8326c97b080cafaabf8a4c78b82','url':'/images/parts/W11300816.png'},{'revision':'a16b17ee280f9e99c29a2e91ef631f0a','url':'/images/parts/W11302144.png'},{'revision':'f76931ba603ec183b91e94fa27ef31ea','url':'/images/parts/W11345881.png'},{'revision':'3810130ac39da9afff406c2fbeb80a5c','url':'/images/parts/W11352536.png'},{'revision':'f433b373c7c4bcb949fe0caef240702e','url':'/images/parts/W11357432.png'},{'revision':'7e204b964674b783205bcf19cb47b2c2','url':'/images/parts/W11375485.png'},{'revision':'339b70b63e6b6c8c6879682f49637f71','url':'/images/parts/W11387506.png'},{'revision':'9c7e4bc602cd9128cc24b0462bec1874','url':'/images/parts/W11391012.png'},{'revision':'21e1e43d9b4457c3e836706e9f81e1ed','url':'/images/parts/W11400731.png'},{'revision':'42bea9c0bb6cfdcc513d71dd6a9dbcc2','url':'/images/parts/w10181250.png'},{'revision':'ac81eebf893000b7c5657e5af1d38213','url':'/images/parts/w11169693.png'},{'revision':'da057514ca539c2e56405711f3286ab3','url':'/images/whatsapp.png'},{'revision':'9221b488d99f09ed81f515a9925e8d94','url':'/manifest.json'},{'revision':'5eb45e571484a6222097a0f207ceafd4','url':'/service.png'}]; // Precache fallback route and image

WB_MANIFEST.push({
  url: '/fallback',
  revision: '1234567890'
});
precacheAndRoute(WB_MANIFEST);
cleanupOutdatedCaches();
registerRoute('/', new NetworkFirst_NetworkFirst({
  cacheName: 'start-url',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 1,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new CacheFirst_CacheFirst({
  cacheName: 'google-fonts',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 4,
    maxAgeSeconds: 31536e3,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new StaleWhileRevalidate_StaleWhileRevalidate({
  cacheName: 'static-font-assets',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 4,
    maxAgeSeconds: 604800,
    purgeOnQuotaError: !0
  })]
}), 'GET'); // disable image cache, so we could observe the placeholder image when offline

registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new NetworkOnly_NetworkOnly({
  cacheName: 'static-image-assets',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 64,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/\.(?:js)$/i, new StaleWhileRevalidate_StaleWhileRevalidate({
  cacheName: 'static-js-assets',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/\.(?:css|less)$/i, new StaleWhileRevalidate_StaleWhileRevalidate({
  cacheName: 'static-style-assets',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/\.(?:json|xml|csv)$/i, new NetworkFirst_NetworkFirst({
  cacheName: 'static-data-assets',
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/\/api\/.*$/i, new NetworkFirst_NetworkFirst({
  cacheName: 'apis',
  networkTimeoutSeconds: 10,
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 16,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
registerRoute(/.*/i, new NetworkFirst_NetworkFirst({
  cacheName: 'others',
  networkTimeoutSeconds: 10,
  plugins: [new ExpirationPlugin_ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET'); // following lines gives you control of the offline fallback strategies
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks
// Use a stale-while-revalidate strategy for all other requests.

setDefaultHandler(new StaleWhileRevalidate_StaleWhileRevalidate()); // This "catch" handler is triggered when any of the other routes fail to
// generate a response.

setCatchHandler(function (_ref) {
  var event = _ref.event;

  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // If using precached URLs:
      return matchPrecache('/fallback'); // return caches.match('/fallback')

      break;

    case 'image':
      // If using precached URLs:
      return matchPrecache('/static/images/fallback.png'); // return caches.match('/static/images/fallback.png')

      break;

    case 'font': // If using precached URLs:
    // return matchPrecache(FALLBACK_FONT_URL);
    //return caches.match('/static/fonts/fallback.otf')
    //break

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});

/***/ }),

/***/ "aqiC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:strategies:6.1.5'] && _();
}
catch (e) { }


/***/ }),

/***/ "xwD5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:6.1.5'] && _();
}
catch (e) { }


/***/ })

/******/ });