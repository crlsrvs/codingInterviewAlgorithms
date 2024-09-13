// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

class MatrixControl {
  constructor(dimensions = 0){
    // indexes
    this.rowIndex = 0;
    this.columnIndex = 0;
    this.usedSets = [[0,0]];
    this.totalAmountOfSets = dimensions*dimensions;

    // Borders
    this.min = 0;
    this.max = dimensions - 1;

    // Movement
    this.directionOptions = ['right', 'down', 'left', 'up']
    this.directionIndex = 0;
  }

  calculateNextSetOfIndex(){
    // debugger
    
    let shouldGoOn = true
  
    if (this.usedSets.length === this.totalAmountOfSets) {
      return false
    }

    while (shouldGoOn) {
      const {nextSetOfIndexes} = this.getDirection()
      const indexesAreValid = this.isValidSetOfIndex(nextSetOfIndexes);
      const indexesAreNew = !this.isSetAlreadyUsed(nextSetOfIndexes);


      if (indexesAreValid && indexesAreNew) {
        this.setCurrentSetOfIndex(nextSetOfIndexes)
        return true;
      }

      if (indexesAreValid || indexesAreNew) {
        this.changeDirection()
      }
    }

  }

  setCurrentSetOfIndex(set=[]){
    this.usedSets.push(set);
    this.rowIndex = set[0];
    this.columnIndex = set[1];

  }

  // true if set passed already exist
  // false if set passed has not been used yet
  isSetAlreadyUsed(set=[]){
    // 
    debugger
    const isThisSetAlreadyUsed = this.usedSets.some((useSet)=>{
      const firstIndexCheck = useSet[0] === set[0];
      const secondIndexCheck = useSet[1] === set[1];

      return firstIndexCheck && secondIndexCheck
    })

    return isThisSetAlreadyUsed
  }

  // ok
  getCurrentSetOfIndex(){
    return [this.rowIndex, this.columnIndex]
  }

  // ok
  isValidSetOfIndex(set=[]){
    const [a, b] = set;
    const limitForRow = a >= this.min && a <= this.max
    const limitForCol = b >= this.min && b <= this.max

    return limitForRow && limitForCol;
  }

  // ok
  getDirection(){
    debugger
    const direction =  this.directionOptions[this.directionIndex];
    let nextSetOfIndexes;

    switch (direction) {
      case 'right':
        nextSetOfIndexes = [this.rowIndex , 1+this.columnIndex]
        break;

      case 'down':
        nextSetOfIndexes = [1+this.rowIndex , this.columnIndex]
        break;

      case 'left':
        nextSetOfIndexes = [this.rowIndex , this.columnIndex-1]
        break;

      case 'up':
        nextSetOfIndexes = [this.rowIndex-1 , this.columnIndex]
        break;
    }

    return {
      direction,
      nextSetOfIndexes
    };
  }

  // ok
  changeDirection(){
    const increment = this.directionIndex + 1
    if ( increment < 4 ) {
      this.directionIndex = increment
    } else {
      this.directionIndex = 0
    }
  }
}

function matrix(n) {
  const buildMatrix = function (dimensions = 0) {
    const mainArray = []
    for (let index = 0; index < dimensions; index++) {
      const row = [];
      // row.length = dimensions;
      // row.fill(0)
      mainArray.push(row);
    }
    return mainArray;
  }
  
  const matrix = buildMatrix(n);

  const control = new MatrixControl(n);

  const totalAmountOfValues = n*n;

  for (let index = 1; index <= totalAmountOfValues; index++) {
    const [a,b] = control.getCurrentSetOfIndex();
    matrix[a][b] = index;
    debugger
    control.calculateNextSetOfIndex();
  }

  return matrix;
}

module.exports = matrix;
