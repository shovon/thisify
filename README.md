# Convert the first parameter of a function to use "this"

Somtimes you have a helper function, and it takes one or more parameters, which you apply many times. Your code tends to look something like this:

```javascript
var obj = { /* ... */ };

doSomethingWith(obj);
```

Rather than having that `doSomethingWith` function be its own standalone function, it may be easier to extend obj such that you don't have to always supply that first parameter.

```javascript
var obj = {
  doSomethingWith: function () {
    return doSomethingWith(this);
  }
}
```

Now that's just some unnecessary boilerplate. And so `thisify` saves you from having to deal with that.

```javascript
var obj = {
  doSomethingWith: thisify(doSomethingWith)
};
```

## Usage with ES7

```javascript
import thisify from 'thisify';

const obj = { /* ... */ };

const doSomething = thisify(doSomethingWith);

obj::doSomething()
```

## License

`thisify` is [MIT Licensed](https://github.com/shovon/thisify/blob/master/LICENSE)