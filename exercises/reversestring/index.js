// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// function reverse(str) {
//   const arrayLike = str.split("");
//   const reversed = [];
//   arrayLike.forEach(part => {
//     reversed.unshift(part);
//   });
//   return reversed.join("")
// }

// function reverse(str) {
//   let reversed = "";
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//   return reversed
// }

function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
