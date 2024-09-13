// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// function fizzBuzz(n) {
//   for (let index = 1; index <= n; index++) {
//     const multipleOfThree = index % 3 === 0;
//     const multipleOfFive = index % 5 === 0;

//     if ( multipleOfThree && multipleOfFive) {
//       console.log('fizzbuzz');
//       continue
//     }
//     if ( multipleOfThree ) {
//       console.log('fizz');
//       continue
//     }
//     if ( multipleOfFive ) {
//       console.log('buzz');
//       continue
//     }
//     console.log(index);
//   }
// }

function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    let sequence = index;
    const multipleOfThree = index % 3 === 0;
    const multipleOfFive = index % 5 === 0;
    
    if ( multipleOfThree && multipleOfFive) {
      sequence = 'fizzbuzz';
    } else if ( multipleOfThree ) {
      sequence = 'fizz';

    } else if ( multipleOfFive ) {
      sequence = 'buzz';
    }

    console.log(sequence);
  }
}

module.exports = fizzBuzz;
