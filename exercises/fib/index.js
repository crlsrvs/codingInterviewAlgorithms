// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibLento(n=0) {

  if (n <= 0) {
    return 0
  }

  const fiboMachine = {
    a: 0,
    b: 1,
    value: 1,

    next: function () {
      this.value = this.a + this.b;
      this.a = this.b;
      this.b = this.value;
    }
  }

  for (let index = 1; index < n; index++) {
    fiboMachine.next();
  }

  return fiboMachine.value;
}


function fib(n = 0, cache = {}) {

  if (cache[n]) {
    return cache[n]
  }

  if (n=== 1 || n === 0) {
    cache[n] = n;
    return n;
  }

  return (cache[n-1] = fib(n-1, cache)) + (cache[n-2] = fib(n-2, cache))
}

module.exports = fib;
