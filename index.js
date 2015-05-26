/**
 * Accepts a function, and returns a function, such that the first parameter
 * will be omitted, and `this` will be used instead.
 *
 * @param {Function : (Anything, ... Anything) -> Anything} fn
 * @return {Function : (... Anything) -> Anything}
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = thisify;

function thisify(fn) {
  return function () {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return fn.apply(undefined, [this].concat(params));
  };
}

module.exports = exports["default"];

