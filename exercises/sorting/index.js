// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//  mI
//  i   j
//  0   1    2   3   4   5   6
// [5, -30, 10, 97,  0, 11, -2]
// length 7
function bubbleSort(arr) {
  const sortedArr = [...arr]

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < (sortedArr.length - i - 1); j++) {
      const elementA = sortedArr[j];
      const elementB = sortedArr[j+1];

      if (elementA>elementB) {
        [sortedArr[j], sortedArr[j+1]] = [sortedArr[j+1], sortedArr[j]];
      }
    }
  }

  return sortedArr;
}

function selectionSort(arr) {
  const sortedArr = [...arr]
  let minusIndex;

  for (let i = 0; i < sortedArr.length; i++) {
    minusIndex = i;

    for (let j = i+1; j < sortedArr.length; j++) {
      if (sortedArr[minusIndex] > sortedArr[j]) {
        minusIndex = j;
      }
    }

    if (minusIndex !== i) {
      [sortedArr[i], sortedArr[minusIndex]] = [sortedArr[minusIndex], sortedArr[i]];
    }
  }
  return sortedArr;
}


// [100, -40, 500, -124, 0, 21, 7];
// [100, -40, 500, -124];
// [100, -40];  -------->1
// [500, -124]; -------->2
// [0, 21];
// [7];

function mergeSort(arr) {
  if (arr.length === 1 ) {
    return arr;
  }

  // if (arr.length === 2 ) {
  //   return merge([arr[0]], [arr[1]])
  // }

  const dividerIndex = Math.round(arr.length/2);
  const left = arr.slice(0, dividerIndex);
  const right = arr.slice(dividerIndex);
  
  return merge(mergeSort(left), mergeSort(right))
}


// [-2, 5, 10, 11]
// [-30, 0, 97]

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  const newResult = result.concat(left, right);

  return newResult;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
