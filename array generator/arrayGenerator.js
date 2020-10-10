// I tried to do this exercise in as few lines as possible.

// Generate a range of numbers like python, takes 1 to 3 arguments.
// range(limit)
// range(start, limit, step)
const range = (n1, n2, step) =>
  [...Array(n2 || n1).keys()].slice(n2 && n1).filter((_, i) => !(i % (step || 1)))

console.log(range(10, 20, 2))