function curry(fn, n) {
  if (typeof n !== "number")
    n = fn.length;

  function getCurriedFn(prev) {
    return function (arg) {
      var args = prev.concat(arg);
      if (args.length < n) {

        return getCurriedFn(args);
      } else {

        return fn.apply(this, args);
      }
    };
  }

  return getCurriedFn([]);
}


function sum(x, y, z) {
  return x + y + z;
}

var f = curry(sum);

console.log(f(1, 2)(3));