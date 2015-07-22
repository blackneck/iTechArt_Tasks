function curry(fn) {

  function getCurriedFn(prev) {
    return function (arg) {
      var args = prev.concat(arg);

      if (args.length < fn.length)
        return getCurriedFn(args);
      else
        return fn.apply(this, args);
    }
  }
  return getCurriedFn([]);
}