// I tried to do this exercise in as few lines as possible without using semincolon (;)

// Generate and add dividers of a number.
const genAndAddDivs = num =>
  [...Array(num).keys()].reduce((acc, el) => acc + (!(num % el) && el))

// Check if a number have a friend number and return a friendly message or return false.
const friendNumber = num => genAndAddDivs(genAndAddDivs(num)) === num && `${num} and ${genAndAddDivs(num)} are friends!`

console.log(friendNumber(100))
