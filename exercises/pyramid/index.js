// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  function repeatInSequence(str='', reps=0) {
    let finalString = '';
    for (let index = 0; index < reps; index++) {
      finalString+= str;
    }
    return finalString;
  }

  function createTriangle(depth=0) {
    const rectangleArray = []

    const oddNumbersMachine = {
      value: 1,
      next: function () {
        this.value = this.value + 2
      } 
    }

    for (let index = 1; index <= depth; index++) {
      rectangleArray.push(repeatInSequence('#', oddNumbersMachine.value));
      oddNumbersMachine.next();
    }

    return rectangleArray;
  }

  const triangle = createTriangle(n);

  const baseOfThePyramid = triangle[n-1].length;

  triangle.forEach((part)=>{
    const blankSpacesCount = (baseOfThePyramid - part.length) / 2;
    const blankSpacesPerSide = repeatInSequence(" ", blankSpacesCount)
    const pyramidRow = blankSpacesPerSide + part + blankSpacesPerSide;

    console.log(pyramidRow)
  })
}

module.exports = pyramid;
