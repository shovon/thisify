import thisify from './src';
import expect from 'expect.js';

describe('thisify', function () {
  it('should thisify any function', function () {
    const obj = { a: 'foo' };

    function toThisify(anything) {
      return anything.a;
    }

    const thisified = thisify(toThisify);

    expect(toThisify({a: 'bar'})).to.be('bar');
    expect(toThisify(obj)).to.be('foo');
    expect(obj::thisified()).to.be('foo');
  });
});