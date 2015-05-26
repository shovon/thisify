/**
 * Accepts a function, and returns a function, such that the first parameter
 * will be omitted, and `this` will be used instead.
 *
 * @param {Function : (Anything, ... Anything) -> Anything} fn
 * @return {Function : (... Anything) -> Anything}
 */
export default function thisify(fn) {
  return function (...params) {
    return fn(this, ...params);
  }
}
