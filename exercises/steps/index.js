// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   const giveMeReps = (reps=0, char="") => {
//     const repssArr = [];
//     repssArr.length = reps;
//     return repssArr.fill(char).join("")
//   }

//   for (let i = 1; i <= n; i++) {
//     console.log(giveMeReps(i, "#") + giveMeReps(n-i, " "));
//   }
// }

function steps(n) {
  
}

module.exports = steps;
