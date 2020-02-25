/*! websocket-as-promised v0.10.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebSocketAsPromised"] = factory();
	else
		root["WebSocketAsPromised"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(19);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function requirePromise() {
	if (typeof Promise !== 'function') {
		throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
	}
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(0);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();var n=i(1),o=i(2),s=o.isPromise,u=o.createErrorType,c=o.tryCall,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=Object.assign({},n,t),this._resolve=null,this._reject=null,this._isPending=!1,this._isFulfilled=!1,this._isRejected=!1,this._value=void 0,this._promise=null,this._timer=null}return r(e,[{key:"call",value:function(e){return this._isPending||(this.reset(),this._createPromise(),this._createTimer(),this._callFn(e)),this._promise}},{key:"resolve",value:function(e){this._isPending&&(s(e)?this._tryAttachToPromise(e):(this._settle(e),this._isFulfilled=!0,this._resolve(e)))}},{key:"reject",value:function(e){this._isPending&&(this._settle(e),this._isRejected=!0,this._reject(e))}},{key:"reset",value:function(){if(this._isPending){var t=c(this._options.resetReason),i=new e.ResetError(t);this.reject(i)}this._promise=null,this._isPending=!1,this._isFulfilled=!1,this._isRejected=!1,this._value=void 0,this._clearTimer()}},{key:"configure",value:function(e){Object.assign(this._options,e)}},{key:"_createPromise",value:function(){var e=this;this._promise=new Promise(function(t,i){e._isPending=!0,e._resolve=t,e._reject=i})}},{key:"_handleTimeout",value:function(){var t=c(this._options.timeoutReason),i="string"==typeof t?t.replace("{timeout}",this._options.timeout):"",r=new e.TimeoutError(i);this.reject(r)}},{key:"_createTimer",value:function(){var e=this;this._options.timeout&&(this._timer=setTimeout(function(){return e._handleTimeout()},this._options.timeout))}},{key:"_clearTimer",value:function(){this._timer&&(clearTimeout(this._timer),this._timer=null)}},{key:"_settle",value:function(e){this._isPending=!1,this._value=e,this._clearTimer()}},{key:"_callFn",value:function(e){if("function"==typeof e)try{var t=e();this._tryAttachToPromise(t)}catch(e){this.reject(e)}}},{key:"_tryAttachToPromise",value:function(e){var t=this;s(e)&&e.then(function(e){return t.resolve(e)},function(e){return t.reject(e)})}},{key:"promise",get:function(){return this._promise}},{key:"value",get:function(){return this._value}},{key:"isPending",get:function(){return this._isPending}},{key:"isFulfilled",get:function(){return this._isFulfilled}},{key:"isRejected",get:function(){return this._isRejected}},{key:"isSettled",get:function(){return this._isFulfilled||this._isRejected}}]),e}();l.TimeoutError=u("TimeoutError"),l.ResetError=u("ResetError"),e.exports=l},function(e,t,i){"use strict";e.exports={timeout:0,timeoutReason:"Promise rejected by PromiseController timeout {timeout} ms.",resetReason:"Promise rejected by PromiseController reset."}},function(e,t,i){"use strict";t.isPromise=function(e){return e&&"function"==typeof e.then},t.tryCall=function(e){return"function"==typeof e?e():e},t.createErrorType=function(e){function t(e){Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e}return t.prototype=new Error,t.prototype.name=e,t.prototype.constructor=t,t}}])});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(20);
var foreach = __webpack_require__(22);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(1);

requirePromise();

var ES = __webpack_require__(23);
var bind = __webpack_require__(0);

var promiseResolve = function PromiseResolve(C, value) {
	return new C(function (resolve) {
		resolve(value);
	});
};

var OriginalPromise = Promise;

var createThenFinally = function CreateThenFinally(C, onFinally) {
	return function (value) {
		var result = onFinally();
		var promise = promiseResolve(C, result);
		var valueThunk = function () {
			return value;
		};
		return promise.then(valueThunk);
	};
};

var createCatchFinally = function CreateCatchFinally(C, onFinally) {
	return function (reason) {
		var result = onFinally();
		var promise = promiseResolve(C, result);
		var thrower = function () {
			throw reason;
		};
		return promise.then(thrower);
	};
};

var then = bind.call(Function.call, OriginalPromise.prototype.then);

var promiseFinally = function finally_(onFinally) {
	/* eslint no-invalid-this: 0 */

	var promise = this;

	then(promise, null, function () {}); // throw if IsPromise(this) is false; catch() to avoid unhandled rejection warnings

	var C = ES.SpeciesConstructor(promise, OriginalPromise); // may throw

	var thenFinally = onFinally;
	var catchFinally = onFinally;
	if (ES.IsCallable(onFinally)) {
		thenFinally = createThenFinally(C, onFinally);
		catchFinally = createCatchFinally(C, onFinally);
	}

	return promise.then(thenFinally, catchFinally);
};

if (Object.getOwnPropertyDescriptor) {
	var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
	if (descriptor && descriptor.configurable) {
		Object.defineProperty(promiseFinally, 'name', { configurable: true, value: 'finally' });
	}
}

module.exports = promiseFinally;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var has = Object.prototype.hasOwnProperty;
module.exports = function assign(target, source) {
	if (Object.assign) {
		return Object.assign(target, source);
	}
	for (var key in source) {
		if (has.call(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(1);

var implementation = __webpack_require__(6);

module.exports = function getPolyfill() {
	requirePromise();
	return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * WebSocket with promise api
 */

/**
 * @external Channel
 */
var Channel = __webpack_require__(15);

var PromiseController = __webpack_require__(4);

var flatOptions = __webpack_require__(16);

var Requests = __webpack_require__(17);

var defaultOptions = __webpack_require__(34);

var _require = __webpack_require__(35),
    throwIf = _require.throwIf; // see: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#Ready_state_constants


var STATE = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3
};
/**
 * @typicalname wsp
 */

var WebSocketAsPromised =
/*#__PURE__*/
function () {
  /**
   * Constructor. Unlike original WebSocket it does not immediately open connection.
   * Please call `open()` method to connect.
   *
   * @param {String} url WebSocket URL
   * @param {Options} [options]
   */
  function WebSocketAsPromised(url, options) {
    _classCallCheck(this, WebSocketAsPromised);

    this._url = url;
    this._options = flatOptions(options, defaultOptions);
    this._requests = new Requests();
    this._ws = null;
    this._wsSubscription = null;

    this._createOpeningController();

    this._createClosingController();

    this._createChannels();
  }
  /**
   * Returns original WebSocket instance created by `options.createWebSocket`.
   *
   * @returns {WebSocket}
   */


  _createClass(WebSocketAsPromised, [{
    key: "open",

    /**
     * Opens WebSocket connection. If connection already opened, promise will be resolved with "open event".
     *
     * @returns {Promise<Event>}
     */
    value: function open() {
      var _this = this;

      if (this.isClosing) {
        return Promise.reject(new Error("Can't open WebSocket while closing."));
      }

      if (this.isOpened) {
        return this._opening.promise;
      }

      return this._opening.call(function () {
        _this._opening.promise["catch"](function (e) {
          return _this._cleanup(e);
        });

        _this._createWS();
      });
    }
    /**
     * Performs request and waits for response.
     *
     * @param {*} data
     * @param {Object} [options]
     * @param {String|Number} [options.requestId=<auto-generated>]
     * @param {Number} [options.timeout=0]
     * @returns {Promise}
     */

  }, {
    key: "sendRequest",
    value: function sendRequest(data) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestId = options.requestId || "".concat(Math.random());
      var timeout = options.timeout !== undefined ? options.timeout : this._options.timeout;
      return this._requests.create(requestId, function () {
        _this2._assertRequestIdHandlers();

        var finalData = _this2._options.attachRequestId(data, requestId);

        _this2.sendPacked(finalData);
      }, timeout);
    }
    /**
     * Packs data with `options.packMessage` and sends to the server.
     *
     * @param {*} data
     */

  }, {
    key: "sendPacked",
    value: function sendPacked(data) {
      this._assertPackingHandlers();

      var message = this._options.packMessage(data);

      this.send(message);
    }
    /**
     * Sends data without packing.
     *
     * @param {String|Blob|ArrayBuffer} data
     */

  }, {
    key: "send",
    value: function send(data) {
      throwIf(!this.isOpened, "Can't send data because WebSocket is not opened.");

      this._ws.send(data);

      this._onSend.dispatchAsync(data);
    }
    /**
     * Closes WebSocket connection. If connection already closed, promise will be resolved with "close event".
     *
     * @returns {Promise<Event>}
     */

  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      return this.isClosed ? Promise.resolve(this._closing.value) : this._closing.call(function () {
        return _this3._ws.close();
      });
    }
    /**
     * Removes all listeners from WSP instance. Useful for cleanup.
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      this._onOpen.removeAllListeners();

      this._onMessage.removeAllListeners();

      this._onUnpackedMessage.removeAllListeners();

      this._onResponse.removeAllListeners();

      this._onSend.removeAllListeners();

      this._onClose.removeAllListeners();

      this._onError.removeAllListeners();
    }
  }, {
    key: "_createOpeningController",
    value: function _createOpeningController() {
      var connectionTimeout = this._options.connectionTimeout || this._options.timeout;
      this._opening = new PromiseController({
        timeout: connectionTimeout,
        timeoutReason: "Can't open WebSocket within allowed timeout: ".concat(connectionTimeout, " ms.")
      });
    }
  }, {
    key: "_createClosingController",
    value: function _createClosingController() {
      var closingTimeout = this._options.timeout;
      this._closing = new PromiseController({
        timeout: closingTimeout,
        timeoutReason: "Can't close WebSocket within allowed timeout: ".concat(closingTimeout, " ms.")
      });
    }
  }, {
    key: "_createChannels",
    value: function _createChannels() {
      this._onOpen = new Channel();
      this._onMessage = new Channel();
      this._onUnpackedMessage = new Channel();
      this._onResponse = new Channel();
      this._onSend = new Channel();
      this._onClose = new Channel();
      this._onError = new Channel();
    }
  }, {
    key: "_createWS",
    value: function _createWS() {
      var _this4 = this;

      this._ws = this._options.createWebSocket(this._url);
      this._wsSubscription = new Channel.Subscription([{
        channel: this._ws,
        event: 'open',
        listener: function listener(e) {
          return _this4._handleOpen(e);
        }
      }, {
        channel: this._ws,
        event: 'message',
        listener: function listener(e) {
          return _this4._handleMessage(e);
        }
      }, {
        channel: this._ws,
        event: 'error',
        listener: function listener(e) {
          return _this4._handleError(e);
        }
      }, {
        channel: this._ws,
        event: 'close',
        listener: function listener(e) {
          return _this4._handleClose(e);
        }
      }]).on();
    }
  }, {
    key: "_handleOpen",
    value: function _handleOpen(event) {
      this._onOpen.dispatchAsync(event);

      this._opening.resolve(event);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(event) {
      var data = this._options.extractMessageData(event);

      this._onMessage.dispatchAsync(data);

      this._tryUnpack(data);
    }
  }, {
    key: "_tryUnpack",
    value: function _tryUnpack(data) {
      if (this._options.unpackMessage) {
        data = this._options.unpackMessage(data);

        if (data !== undefined) {
          this._onUnpackedMessage.dispatchAsync(data);

          this._tryHandleResponse(data);
        }
      }
    }
  }, {
    key: "_tryHandleResponse",
    value: function _tryHandleResponse(data) {
      if (this._options.extractRequestId) {
        var requestId = this._options.extractRequestId(data);

        if (requestId) {
          this._onResponse.dispatchAsync(data, requestId);

          this._requests.resolve(requestId, data);
        }
      }
    }
  }, {
    key: "_handleError",
    value: function _handleError(event) {
      this._onError.dispatchAsync(event);
    }
  }, {
    key: "_handleClose",
    value: function _handleClose(event) {
      this._onClose.dispatchAsync(event);

      this._closing.resolve(event);

      var error = new Error("WebSocket closed with reason: ".concat(event.reason, " (").concat(event.code, ")."));

      if (this._opening.isPending) {
        this._opening.reject(error);
      }

      this._cleanup(error);
    }
  }, {
    key: "_cleanupWS",
    value: function _cleanupWS() {
      if (this._wsSubscription) {
        this._wsSubscription.off();

        this._wsSubscription = null;
      }

      this._ws = null;
    }
  }, {
    key: "_cleanup",
    value: function _cleanup(error) {
      this._cleanupWS();

      this._requests.rejectAll(error);
    }
  }, {
    key: "_assertPackingHandlers",
    value: function _assertPackingHandlers() {
      var _this$_options = this._options,
          packMessage = _this$_options.packMessage,
          unpackMessage = _this$_options.unpackMessage;
      throwIf(!packMessage || !unpackMessage, "Please define 'options.packMessage / options.unpackMessage' for sending packed messages.");
    }
  }, {
    key: "_assertRequestIdHandlers",
    value: function _assertRequestIdHandlers() {
      var _this$_options2 = this._options,
          attachRequestId = _this$_options2.attachRequestId,
          extractRequestId = _this$_options2.extractRequestId;
      throwIf(!attachRequestId || !extractRequestId, "Please define 'options.attachRequestId / options.extractRequestId' for sending requests.");
    }
  }, {
    key: "ws",
    get: function get() {
      return this._ws;
    }
    /**
     * Is WebSocket connection in opening state.
     *
     * @returns {Boolean}
     */

  }, {
    key: "isOpening",
    get: function get() {
      return Boolean(this._ws && this._ws.readyState === STATE.CONNECTING);
    }
    /**
     * Is WebSocket connection opened.
     *
     * @returns {Boolean}
     */

  }, {
    key: "isOpened",
    get: function get() {
      return Boolean(this._ws && this._ws.readyState === STATE.OPEN);
    }
    /**
     * Is WebSocket connection in closing state.
     *
     * @returns {Boolean}
     */

  }, {
    key: "isClosing",
    get: function get() {
      return Boolean(this._ws && this._ws.readyState === STATE.CLOSING);
    }
    /**
     * Is WebSocket connection closed.
     *
     * @returns {Boolean}
     */

  }, {
    key: "isClosed",
    get: function get() {
      return Boolean(!this._ws || this._ws.readyState === STATE.CLOSED);
    }
    /**
     * Event channel triggered when connection is opened.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onOpen.addListener(() => console.log('Connection opened'));
     *
     * @returns {Channel}
     */

  }, {
    key: "onOpen",
    get: function get() {
      return this._onOpen;
    }
    /**
     * Event channel triggered every time when message is sent to server.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onSend.addListener(data => console.log('Message sent', data));
     *
     * @returns {Channel}
     */

  }, {
    key: "onSend",
    get: function get() {
      return this._onSend;
    }
    /**
     * Event channel triggered every time when message received from server.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onMessage.addListener(message => console.log(message));
     *
     * @returns {Channel}
     */

  }, {
    key: "onMessage",
    get: function get() {
      return this._onMessage;
    }
  }, {
    key: "onPackedMessage",
    get: function get() {
      throw new Error(["Websocket-as-promised 'onPackedMessage' was renamed into 'onUnpackedMessage' to match the argument", "passed to the listener. Please just use 'onUnpackedMessage' instead."].join(' '));
    }
    /**
     * Event channel triggered every time when received message is successfully unpacked.
     * For example, if you are using JSON transport, the listener will receive already JSON parsed data.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onUnpackedMessage.addListener(data => console.log(data.foo));
     *
     * @returns {Channel}
     */

  }, {
    key: "onUnpackedMessage",
    get: function get() {
      return this._onUnpackedMessage;
    }
    /**
     * Event channel triggered every time when response to some request comes.
     * Received message considered a response if requestId is found in it.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onResponse.addListener(data => console.log(data));
     *
     * @returns {Channel}
     */

  }, {
    key: "onResponse",
    get: function get() {
      return this._onResponse;
    }
    /**
     * Event channel triggered when connection closed.
     * Listener accepts single argument `{code, reason}`.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onClose.addListener(event => console.log(`Connections closed: ${event.reason}`));
     *
     * @returns {Channel}
     */

  }, {
    key: "onClose",
    get: function get() {
      return this._onClose;
    }
    /**
     * Event channel triggered when by Websocket 'error' event.
     *
     * @see https://vitalets.github.io/chnl/#channel
     * @example
     * wsp.onError.addListener(event => console.error(event));
     *
     * @returns {Channel}
     */

  }, {
    key: "onError",
    get: function get() {
      return this._onError;
    }
  }]);

  return WebSocketAsPromised;
}();

module.exports = WebSocketAsPromised;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// chnl v0.4.2 by Vitaliy Potapov
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var innerEvents = ['onListenerAdded', 'onListenerRemoved', 'onFirstListenerAdded', 'onLastListenerRemoved'];
  /**
   * Channel of particular events. Allows attach/detach listeners and dispatch event data.
   *
   * @param {String} [name]
   * @param {Boolean} [noInnerEvents]
   *
   * @example
   * import Channel from 'chnl';
   *
   * // create channel
   * const onMyEvent = new Channel();
   * // listen
   * onMyEvent.addListener(data => console.log(data));
   * // dispatch data
   * onMyEvent.dispatch(data);
   */

  var Channel =
  /*#__PURE__*/
  function () {
    function Channel(name, noInnerEvents) {
      var _this = this;

      _classCallCheck(this, Channel);

      this._listeners = [];
      this._mute = false;
      this._accumulate = false;
      this._accumulatedEvents = [];
      this._name = name || '';
      this._noInnerEvents = Boolean(noInnerEvents);

      if (!noInnerEvents) {
        innerEvents.forEach(function (eventName) {
          return _this[eventName] = new Channel(eventName, true);
        });
      }
    }
    /**
     * Add listener for event
     * @param {Function} callback
     * @param {Object} [context]
     */


    _createClass(Channel, [{
      key: "addListener",
      value: function addListener(callback, context) {
        this._pushListener(callback, context, false);
      }
      /**
       * Add once listener for event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "addOnceListener",
      value: function addOnceListener(callback, context) {
        this._pushListener(callback, context, true);
      }
      /**
       * Remove listener from event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "removeListener",
      value: function removeListener(callback, context) {
        this._ensureFunction(callback);

        var index = this._indexOfListener(callback, context);

        if (index >= 0) {
          this._spliceListener(index);
        }
      }
      /**
       * Remove all listeners from channel.
       */

    }, {
      key: "removeAllListeners",
      value: function removeAllListeners() {
        while (this.hasListeners()) {
          this._spliceListener(0);
        }
      }
      /**
       * Is listener exist
       * @param {Function} callback
       * @param {Object} [context]
       * @returns {Boolean}
       */

    }, {
      key: "hasListener",
      value: function hasListener(callback, context) {
        this._ensureFunction(callback);

        return this._indexOfListener(callback, context) >= 0;
      }
      /**
       * Are there any listeners
       * @returns {Boolean}
       */

    }, {
      key: "hasListeners",
      value: function hasListeners() {
        return this._listeners.length > 0;
      }
      /**
       * Call all listeners with specified params
       */

    }, {
      key: "dispatch",
      value: function dispatch() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this._invokeListeners({
          args: args,
          async: false
        });
      }
      /**
       * Call all listeners with specified params asynchronously
       */

    }, {
      key: "dispatchAsync",
      value: function dispatchAsync() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        this._invokeListeners({
          args: args,
          async: true
        });
      }
      /**
       * Mute channel
       * @param {Object} [options]
       * @param {Boolean} [options.accumulate] accumulate events and call listeners after .unmute()
       */

    }, {
      key: "mute",
      value: function mute() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this._mute = true;

        if (options.accumulate) {
          this._accumulate = true;
        } else {
          this._accumulate = false;
          this._accumulatedEvents = [];
        }
      }
      /**
       * Unmute channel
       */

    }, {
      key: "unmute",
      value: function unmute() {
        this._mute = false;

        if (this._accumulate) {
          this._dispatchAccumulated();

          this._accumulate = false;
        }
      }
      /**
       * @param {Object} options
       * @param {Array} options.args
       * @param {Boolean} [options.async]
       * @private
       */

    }, {
      key: "_invokeListeners",
      value: function _invokeListeners() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          args: [],
          async: false
        };

        if (!this._mute) {
          // ToDo: block adding/removing listeners to channel (throw an error) during dispatch operation
          var listnersToInvoke = this._listeners.slice();

          listnersToInvoke.forEach(function (listener) {
            _this2._invokeListener(listener, options);

            if (listener.once) {
              _this2.removeListener(listener.callback, listener.context);
            }
          });
        } else if (this._accumulate) {
          this._accumulatedEvents.push(options);
        }
      }
      /**
       * @param {Object} listener
       * @param {Object} options
       * @param {Array} options.args
       * @param {Boolean} options.async
       * @private
       */

    }, {
      key: "_invokeListener",
      value: function _invokeListener(listener, options) {
        if (options.async) {
          setTimeout(function () {
            return listener.callback.apply(listener.context, options.args);
          }, 0);
        } else {
          listener.callback.apply(listener.context, options.args);
        }
      }
      /**
       * Ensure function
       * @param {Function} callback
       */

    }, {
      key: "_ensureFunction",
      value: function _ensureFunction(callback) {
        if (typeof callback !== 'function') {
          throw new Error('Channel ' + this._name + ': listener is not a function');
        }
      }
      /**
       * Dispatch inner events when listener is added
       * @private
       */

    }, {
      key: "_dispatchInnerAddEvents",
      value: function _dispatchInnerAddEvents() {
        if (!this._noInnerEvents) {
          this.onListenerAdded.dispatch.apply(this.onListenerAdded, arguments);

          if (this._listeners.length === 1) {
            this.onFirstListenerAdded.dispatch.apply(this.onFirstListenerAdded, arguments);
          }
        }
      }
      /**
       * Dispatch inner events when listener is removed
       * @private
       */

    }, {
      key: "_dispatchInnerRemoveEvents",
      value: function _dispatchInnerRemoveEvents() {
        if (!this._noInnerEvents) {
          this.onListenerRemoved.dispatch.apply(this.onListenerRemoved, arguments);

          if (this._listeners.length === 0) {
            this.onLastListenerRemoved.dispatch.apply(this.onLastListenerRemoved, arguments);
          }
        }
      }
      /**
       * Find listener index
       * @param {Function} callback
       * @param {Object} [context]
       * @private
       */

    }, {
      key: "_indexOfListener",
      value: function _indexOfListener(callback, context) {
        for (var i = 0; i < this._listeners.length; i++) {
          var listener = this._listeners[i];
          var equalCallbacks = listener.callback === callback;
          var emptyContexts = context === undefined && listener.context === undefined;
          var equalContexts = context === listener.context;

          if (equalCallbacks && (emptyContexts || equalContexts)) {
            return i;
          }
        }
      }
      /**
       * Dispatch accumulated events
       * @private
       */

    }, {
      key: "_dispatchAccumulated",
      value: function _dispatchAccumulated() {
        var _this3 = this;

        this._accumulatedEvents.forEach(function (options) {
          return _this3._invokeListeners(options);
        });

        this._accumulatedEvents = [];
      }
      /**
       * Pushes listener
       * @param {Function} callback
       * @param {Object} context
       * @param {Boolean} once
       */

    }, {
      key: "_pushListener",
      value: function _pushListener(callback, context, once) {
        this._ensureFunction(callback);

        this._listeners.push({
          callback: callback,
          context: context,
          once: once
        });

        this._dispatchInnerAddEvents.apply(this, arguments);
      }
      /**
       * Splice listener under index
       * @param {Number} index
       */

    }, {
      key: "_spliceListener",
      value: function _spliceListener(index) {
        var listener = this._listeners[index];

        this._listeners.splice(index, 1);

        var args = [listener.callback];

        if (listener.context) {
          args.push(listener.context);
        }

        this._dispatchInnerRemoveEvents.apply(this, args);
      }
    }]);

    return Channel;
  }();

  /**
   * Event emitter similar to Node.js [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter).
   * The main difference from single channel is that each method takes additional `event` argument.
   *
   * @example
   * import Channel from 'chnl';
   *
   * // create emitter
   * const emitter = new Channel.EventEmitter();
   * // listen 'myEvent'
   * emitter.on('myEvent', data => console.log(data));
   * // emit 'myEvent'
   * emitter.emit('myEvent', 'hello world!');
   */

  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      this._channels = new Map();
    }
    /**
     * Adds listener to specific event
     *
     * @param {String} event
     * @param {Function} callback
     * @param {Object} [context]
     */


    _createClass(EventEmitter, [{
      key: "addListener",
      value: function addListener(event, callback, context) {
        this._getChannel(event).addListener(callback, context);
      }
      /**
       * Adds listener to specific event (alias to addListener)
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "on",
      value: function on(event, callback, context) {
        this.addListener(event, callback, context);
      }
      /**
       * Adds once listener to specific event
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "addOnceListener",
      value: function addOnceListener(event, callback, context) {
        this._getChannel(event).addOnceListener(callback, context);
      }
      /**
       * Adds once listener to specific event (alias to addOnceListener)
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "once",
      value: function once(event, callback, context) {
        this.addOnceListener(event, callback, context);
      }
      /**
       * Removes listener from specific event
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "removeListener",
      value: function removeListener(event, callback, context) {
        this._getChannel(event).removeListener(callback, context);
      }
      /**
       * Removes listener from specific event (alias to removeListener)
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       */

    }, {
      key: "off",
      value: function off(event, callback, context) {
        this.removeListener(event, callback, context);
      }
      /**
       * Is listener exist for specific event
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       * @returns {Boolean}
       */

    }, {
      key: "hasListener",
      value: function hasListener(event, callback, context) {
        return this._getChannel(event).hasListener(callback, context);
      }
      /**
       * Is listener exist for specific event (alias to hasListener)
       *
       * @param {String} event
       * @param {Function} callback
       * @param {Object} [context]
       * @returns {Boolean}
       */

    }, {
      key: "has",
      value: function has(event, callback, context) {
        return this.hasListener(event, callback, context);
      }
      /**
       * Are there any listeners for specific event
       *
       * @returns {Boolean}
       */

    }, {
      key: "hasListeners",
      value: function hasListeners(event) {
        return this._getChannel(event).hasListeners();
      }
      /**
       * Call all listeners for specific event
       *
       * @param {String} event
       * @param {*} args
       */

    }, {
      key: "dispatch",
      value: function dispatch(event) {
        var _this$_getChannel;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$_getChannel = this._getChannel(event)).dispatch.apply(_this$_getChannel, args);
      }
      /**
       * Call all listeners for specific event
       *
       * @param {String} event
       * @param {*} args
       */

    }, {
      key: "emit",
      value: function emit(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        this.dispatch.apply(this, [event].concat(args));
      }
      /**
       * Returns channe by event name
       *
       * @param {String} event
       * @returns {Channel}
       * @private
       */

    }, {
      key: "_getChannel",
      value: function _getChannel(event) {
        if (!this._channels.has(event)) {
          this._channels.set(event, new Channel(event));
        }

        return this._channels.get(event);
      }
    }]);

    return EventEmitter;
  }();

  /**
   * Subscription item
   * @private
   */
  var SubscriptionItem =
  /*#__PURE__*/
  function () {
    /**
     * Constructor
     *
     * @param {Object} params
     * @param {Object} params.channel
     * @param {String} [params.event]
     * @param {Function} params.listener
     */
    function SubscriptionItem(params) {
      _classCallCheck(this, SubscriptionItem);

      this._params = params;
      this._isOn = false;

      this._assertParams();
    }
    /**
     * Turn on listener of channel
     */


    _createClass(SubscriptionItem, [{
      key: "on",
      value: function on() {
        if (!this._isOn) {
          var channel = this._params.channel;
          var method = channel.addListener || channel.addEventListener || channel.on;

          this._applyMethod(method);

          this._isOn = true;
        }
      }
      /**
       * Turn off listener of channel
       */

    }, {
      key: "off",
      value: function off() {
        if (this._isOn) {
          var channel = this._params.channel;
          var method = channel.removeListener || channel.removeEventListener || channel.off;

          this._applyMethod(method);

          this._isOn = false;
        }
      }
    }, {
      key: "_applyMethod",
      value: function _applyMethod(method) {
        var _this$_params = this._params,
            channel = _this$_params.channel,
            event = _this$_params.event,
            listener = _this$_params.listener;
        var args = event ? [event, listener] : [listener];
        method.apply(channel, args);
      }
    }, {
      key: "_assertParams",
      value: function _assertParams() {
        var _this$_params2 = this._params,
            channel = _this$_params2.channel,
            event = _this$_params2.event,
            listener = _this$_params2.listener;

        if (!channel || _typeof(channel) !== 'object') {
          throw new Error('Channel should be object');
        }

        if (event && typeof event !== 'string') {
          throw new Error('Event should be string');
        }

        if (!listener || typeof listener !== 'function') {
          throw new Error('Listener should be function');
        }
      }
    }]);

    return SubscriptionItem;
  }();

  /**
   * Utility class allowing dynamically attach/detach batch of listeners to event channels.
   *
   * @param {Array<{channel, event, listener}>} items
   *
   * @example
   * import Channel from 'chnl';
   * const subscription = new Channel.Subscription([
   *   {
   *     channel: chrome.tabs.onUpdated,
   *     listener: this._onTabUpdated.bind(this)
   *   }
   * ]);
   *
   * // attach listeners
   * subscription.on();
   * // detach listeners
   * subscription.off();
   */

  var Subscription =
  /*#__PURE__*/
  function () {
    function Subscription(items) {
      _classCallCheck(this, Subscription);

      this._items = items.map(function (params) {
        return new SubscriptionItem(params);
      });
    }
    /**
     * Turn on all listeners
     *
     * @returns {Subscription}
     */


    _createClass(Subscription, [{
      key: "on",
      value: function on() {
        this._items.forEach(function (item) {
          return item.on();
        });

        return this;
      }
      /**
       * Turn off all listeners
       *
       * @returns {Subscription}
       */

    }, {
      key: "off",
      value: function off() {
        this._items.forEach(function (item) {
          return item.off();
        });

        return this;
      }
    }]);

    return Subscription;
  }();

  /**
   * Utility class that extends Subscription for using in ReactComponent - automatically attach/detach listeners
   * in `componentDidMount` / `componentWillUnmount`.
   *
   * @param {ReactComponent} component
   * @param {Array<{channel, event, listener}>} items
   *
   * @example
   * class Button extends React.Component {
   *   constructor() {
   *     super();
   *     new Channel.ReactSubscription(this, [
   *       {channel: onNewData, listener: this.handleNewData.bind(this)}
   *     ]);
   *   }
   * }
   *
   * // actually equals to (but with more boilerplate code):
   * class Button extends React.Component {
   *   constructor() {
   *     super();
   *     this.subscription = new Channel.Subscription([
   *       {channel: onNewData, listener: this.handleNewData.bind(this)}
   *     ]);
   *   }
   *   componentDidMount() {
   *     this.subscription.on();
   *   }
   *   componentWillUnmount() {
   *     this.subscription.off();
   *   }
   * }
   */

  var ReactSubscription =
  /*#__PURE__*/
  function (_Subscription) {
    _inherits(ReactSubscription, _Subscription);

    function ReactSubscription(component, items) {
      var _this;

      _classCallCheck(this, ReactSubscription);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactSubscription).call(this, items));

      _this._overrideComponentCallback(component, 'componentDidMount', 'on');

      _this._overrideComponentCallback(component, 'componentWillUnmount', 'off');

      return _this;
    }
    /**
     * @param {ReactComponent} component
     * @param {String} callbackName
     * @param {String} methodName
     * @private
     */


    _createClass(ReactSubscription, [{
      key: "_overrideComponentCallback",
      value: function _overrideComponentCallback(component, callbackName, methodName) {
        var _this2 = this;

        var baseCallback = component[callbackName];

        component[callbackName] = function () {
          _this2[methodName]();

          if (typeof baseCallback === 'function') {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return baseCallback.apply(component, args);
          }
        };
      }
    }]);

    return ReactSubscription;
  }(Subscription);

  /**
   * Chnl entry point
   */
  /**
   * @private
   */

  var chnl = Channel;
  chnl.EventEmitter = EventEmitter;
  chnl.Subscription = Subscription;
  chnl.ReactSubscription = ReactSubscription;
  /*
   Can not export additional classes like:

   export {
   EventEmitter,
   Subscription,
   };

   because in that case babel's output is not compatible with pure commonjs
   See: http://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default
   */

  return chnl;

}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = flatOptions;
function flatOptions(options, defaults) {
  var result = Object.assign({}, defaults);
  if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    Object.keys(options).forEach(function (key) {
      return validateOption(key, defaults) && copyOption(key, options, result);
    });
  }
  return result;
}

function copyOption(key, from, to) {
  if (from[key] !== undefined) {
    to[key] = from[key];
  }
}

function validateOption(key, defaults) {
  if (defaults && !Object.hasOwnProperty.call(defaults, key)) {
    throw new Error('Unknown option: ' + key);
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class for manage pending requests.
 * @private
 */
var PromiseController = __webpack_require__(4);

var promiseFinally = __webpack_require__(18);

module.exports =
/*#__PURE__*/
function () {
  function Requests() {
    _classCallCheck(this, Requests);

    this._items = new Map();
  }
  /**
   * Creates new request and stores it in the list.
   *
   * @param {String|Number} requestId
   * @param {Function} fn
   * @param {Number} timeout
   * @returns {Promise}
   */


  _createClass(Requests, [{
    key: "create",
    value: function create(requestId, fn, timeout) {
      this._rejectExistingRequest(requestId);

      return this._createNewRequest(requestId, fn, timeout);
    }
  }, {
    key: "resolve",
    value: function resolve(requestId, data) {
      if (requestId && this._items.has(requestId)) {
        this._items.get(requestId).resolve(data);
      }
    }
  }, {
    key: "rejectAll",
    value: function rejectAll(error) {
      this._items.forEach(function (request) {
        return request.isPending ? request.reject(error) : null;
      });
    }
  }, {
    key: "_rejectExistingRequest",
    value: function _rejectExistingRequest(requestId) {
      var existingRequest = this._items.get(requestId);

      if (existingRequest && existingRequest.isPending) {
        existingRequest.reject(new Error("WebSocket request is replaced, id: ".concat(requestId)));
      }
    }
  }, {
    key: "_createNewRequest",
    value: function _createNewRequest(requestId, fn, timeout) {
      var _this = this;

      var request = new PromiseController({
        timeout: timeout,
        timeoutReason: "WebSocket request was rejected by timeout (".concat(timeout, " ms). RequestId: ").concat(requestId)
      });

      this._items.set(requestId, request);

      return promiseFinally(request.call(fn), function () {
        return _this._deleteRequest(requestId, request);
      });
    }
  }, {
    key: "_deleteRequest",
    value: function _deleteRequest(requestId, request) {
      // this check is important when request was replaced
      if (this._items.get(requestId) === request) {
        this._items["delete"](requestId);
      }
    }
  }]);

  return Requests;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(0);
var define = __webpack_require__(5);

var implementation = __webpack_require__(6);
var getPolyfill = __webpack_require__(13);
var shim = __webpack_require__(33);

var bound = bind.call(Function.call, getPolyfill());

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(21);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES2015 = __webpack_require__(25);
var assign = __webpack_require__(10);

var ES2016 = assign(assign({}, ES2015), {
	// https://github.com/tc39/ecma262/pull/60
	SameValueNonNumber: function SameValueNonNumber(x, y) {
		if (typeof x === 'number' || typeof x !== typeof y) {
			throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
		}
		return this.SameValue(x, y);
	}
});

module.exports = ES2016;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(2);
var toPrimitive = __webpack_require__(26);

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var $isNaN = __webpack_require__(8);
var $isFinite = __webpack_require__(9);
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(10);
var sign = __webpack_require__(11);
var mod = __webpack_require__(12);
var isPrimitive = __webpack_require__(29);
var parseInteger = parseInt;
var bind = __webpack_require__(0);
var arraySlice = bind.call(Function.call, Array.prototype.slice);
var strSlice = bind.call(Function.call, String.prototype.slice);
var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
var regexExec = bind.call(Function.call, RegExp.prototype.exec);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = __webpack_require__(30);

var hasRegExpMatcher = __webpack_require__(32);

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, Number);
		if (typeof value === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = Math.floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a string');
		}
		return String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, String);
		return typeof key === 'symbol' ? key : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr.call(argument) !== '[object String]') {
			throw new TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: Array.isArray || function IsArray(argument) {
		return toStr.call(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: function IsExtensible(obj) {
		if (!Object.preventExtensions) { return true; }
		if (isPrimitive(obj)) {
			return false;
		}
		return Object.isExtensible(obj);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = Math.abs(argument);
		return Math.floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return void 0;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && Symbol.species ? C[Symbol.species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new TypeError('no constructor found');
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
	CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
			if (!has(Desc, '[[Value]]')) {
				Desc['[[Value]]'] = void 0;
			}
			if (!has(Desc, '[[Writable]]')) {
				Desc['[[Writable]]'] = false;
			}
		} else {
			if (!has(Desc, '[[Get]]')) {
				Desc['[[Get]]'] = void 0;
			}
			if (!has(Desc, '[[Set]]')) {
				Desc['[[Set]]'] = void 0;
			}
		}
		if (!has(Desc, '[[Enumerable]]')) {
			Desc['[[Enumerable]]'] = false;
		}
		if (!has(Desc, '[[Configurable]]')) {
			Desc['[[Configurable]]'] = false;
		}
		return Desc;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
	Set: function Set(O, P, V, Throw) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		if (this.Type(Throw) !== 'Boolean') {
			throw new TypeError('Throw must be a Boolean');
		}
		if (Throw) {
			O[P] = V;
			return true;
		} else {
			try {
				O[P] = V;
			} catch (e) {
				return false;
			}
		}
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
	HasOwnProperty: function HasOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		return has(O, P);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-hasproperty
	HasProperty: function HasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		return P in O;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
	IsConcatSpreadable: function IsConcatSpreadable(O) {
		if (this.Type(O) !== 'Object') {
			return false;
		}
		if (hasSymbols && typeof Symbol.isConcatSpreadable === 'symbol') {
			var spreadable = this.Get(O, Symbol.isConcatSpreadable);
			if (typeof spreadable !== 'undefined') {
				return this.ToBoolean(spreadable);
			}
		}
		return this.IsArray(O);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-invoke
	Invoke: function Invoke(O, P) {
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('P must be a Property Key');
		}
		var argumentsList = arraySlice(arguments, 2);
		var func = this.GetV(O, P);
		return this.Call(func, O, argumentsList);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
	CreateIterResultObject: function CreateIterResultObject(value, done) {
		if (this.Type(done) !== 'Boolean') {
			throw new TypeError('Assertion failed: Type(done) is not Boolean');
		}
		return {
			value: value,
			done: done
		};
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-regexpexec
	RegExpExec: function RegExpExec(R, S) {
		if (this.Type(R) !== 'Object') {
			throw new TypeError('R must be an Object');
		}
		if (this.Type(S) !== 'String') {
			throw new TypeError('S must be a String');
		}
		var exec = this.Get(R, 'exec');
		if (this.IsCallable(exec)) {
			var result = this.Call(exec, R, [S]);
			if (result === null || this.Type(result) === 'Object') {
				return result;
			}
			throw new TypeError('"exec" method must return `null` or an Object');
		}
		return regexExec(R, S);
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
	ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new TypeError('Assertion failed: length must be an integer >= 0');
		}
		var len = length === 0 ? 0 : length;
		var C;
		var isArray = this.IsArray(originalArray);
		if (isArray) {
			C = this.Get(originalArray, 'constructor');
			// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
			// if (this.IsConstructor(C)) {
			// 	if C is another realm's Array, C = undefined
			// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
			// }
			if (this.Type(C) === 'Object' && hasSymbols && Symbol.species) {
				C = this.Get(C, Symbol.species);
				if (C === null) {
					C = void 0;
				}
			}
		}
		if (typeof C === 'undefined') {
			return Array(len);
		}
		if (!this.IsConstructor(C)) {
			throw new TypeError('C must be a constructor');
		}
		return new C(len); // this.Construct(C, len);
	},

	CreateDataProperty: function CreateDataProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var oldDesc = Object.getOwnPropertyDescriptor(O, P);
		var extensible = oldDesc || (typeof Object.isExtensible !== 'function' || Object.isExtensible(O));
		var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
		if (immutable || !extensible) {
			return false;
		}
		var newDesc = {
			configurable: true,
			enumerable: true,
			value: V,
			writable: true
		};
		Object.defineProperty(O, P, newDesc);
		return true;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
	CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var success = this.CreateDataProperty(O, P, V);
		if (!success) {
			throw new TypeError('unable to create data property');
		}
		return success;
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
	AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
		if (this.Type(S) !== 'String') {
			throw new TypeError('Assertion failed: Type(S) is not String');
		}
		if (!this.IsInteger(index)) {
			throw new TypeError('Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)');
		}
		if (index < 0 || index > MAX_SAFE_INTEGER) {
			throw new RangeError('Assertion failed: length must be an integer >= 0 and <= (2**53 - 1)');
		}
		if (this.Type(unicode) !== 'Boolean') {
			throw new TypeError('Assertion failed: Type(unicode) is not Boolean');
		}
		if (!unicode) {
			return index + 1;
		}
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}
		var first = S.charCodeAt(index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}
		var second = S.charCodeAt(index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}
		return index + 2;
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(7);
var isCallable = __webpack_require__(3);
var isDate = __webpack_require__(27);
var isSymbol = __webpack_require__(28);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (PreferredType === String) {
			hint = 'string';
		} else if (PreferredType === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(8);
var $isFinite = __webpack_require__(9);

var sign = __webpack_require__(11);
var mod = __webpack_require__(12);

var IsCallable = __webpack_require__(3);
var toPrimitive = __webpack_require__(31);

var has = __webpack_require__(2);

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return !!value;
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	},

	// http://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
		if (this.Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};
		// jscs:disable
		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}
		// jscs:enable
		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.1
	IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
			return false;
		}

		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.2
	IsDataDescriptor: function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
			return false;
		}

		return true;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.3
	IsGenericDescriptor: function IsGenericDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
			return true;
		}

		return false;
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.4
	FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}

		if (!this.IsPropertyDescriptor(Desc)) {
			throw new TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsDataDescriptor(Desc)) {
			return {
				value: Desc['[[Value]]'],
				writable: !!Desc['[[Writable]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else if (this.IsAccessorDescriptor(Desc)) {
			return {
				get: Desc['[[Get]]'],
				set: Desc['[[Set]]'],
				enumerable: !!Desc['[[Enumerable]]'],
				configurable: !!Desc['[[Configurable]]']
			};
		} else {
			throw new TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
		}
	},

	// http://ecma-international.org/ecma-262/5.1/#sec-8.10.5
	ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
		if (this.Type(Obj) !== 'Object') {
			throw new TypeError('ToPropertyDescriptor requires an object');
		}

		var desc = {};
		if (has(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
		}
		if (has(Obj, 'configurable')) {
			desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
		}
		if (has(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (has(Obj, 'writable')) {
			desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
		}
		if (has(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
				throw new TypeError('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (has(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
				throw new TypeError('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}

		if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
			throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	}
};

module.exports = ES5;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(7);

var isCallable = __webpack_require__(3);

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(2);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(1);

var getPolyfill = __webpack_require__(13);
var define = __webpack_require__(5);

module.exports = function shimPromiseFinally() {
	requirePromise();

	var polyfill = getPolyfill();
	define(Promise.prototype, { 'finally': polyfill }, {
		'finally': function testFinally() {
			return Promise.prototype['finally'] !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Default options.
 */

/**
 * @typedef {Object} Options
 * @property {Function} [createWebSocket=url => new WebSocket(url)] - custom function for WebSocket construction.
  *
 * @property {Function} [packMessage=noop] - packs message for sending. For example, `data => JSON.stringify(data)`.
 *
 * @property {Function} [unpackMessage=noop] - unpacks received message. For example, `data => JSON.parse(data)`.
 *
 * @property {Function} [attachRequestId=noop] - injects request id into data.
 * For example, `(data, requestId) => Object.assign({requestId}, data)`.
 *
 * @property {Function} [extractRequestId=noop] - extracts request id from received data.
 * For example, `data => data.requestId`.
 *
 * @property {Function} [extractMessageData=event => event.data] - extracts data from event object.
 *
 * @property {Number} timeout=0 - timeout for opening connection and sending messages.
 *
 * @property {Number} connectionTimeout=0 - special timeout for opening connection, by default equals to `timeout`.
 *
 * @defaults
 * please see [options.js](https://github.com/vitalets/websocket-as-promised/blob/master/src/options.js)
 */
module.exports = {
  /**
   * See {@link Options.createWebSocket}
   *
   * @param {String} url
   * @returns {WebSocket}
   */
  createWebSocket: function createWebSocket(url) {
    return new WebSocket(url);
  },

  /**
   * See {@link Options.packMessage}
   *
   * @param {*} data
   * @returns {String|ArrayBuffer|Blob}
   */
  packMessage: null,

  /**
   * See {@link Options.unpackMessage}
   *
   * @param {String|ArrayBuffer|Blob} data
   * @returns {*}
   */
  unpackMessage: null,

  /**
   * See {@link Options.attachRequestId}
   *
   * @param {*} data
   * @param {String|Number} requestId
   * @returns {*}
   */
  attachRequestId: null,

  /**
   * See {@link Options.extractRequestId}
   *
   * @param {*} data
   * @returns {String|Number|undefined}
   */
  extractRequestId: null,

  /**
   * See {@link Options.extractMessageData}
   *
   * @param {*} event
   * @returns {*}
   */
  extractMessageData: function extractMessageData(event) {
    return event.data;
  },

  /**
   * See {@link Options.timeout}
   */
  timeout: 0,

  /**
   * See {@link Options.connectionTimeout}
   */
  connectionTimeout: 0
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.throwIf = function (condition, message) {
  if (condition) {
    throw new Error(message);
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map