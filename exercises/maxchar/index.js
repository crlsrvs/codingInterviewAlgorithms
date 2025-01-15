// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// La solucion de Stephen es practicamente la misma, solo con pequeñas diferencias
function maxChar(str) {
  const chars ={}

  for (const singleChar of str) {
    if (chars[singleChar]) {
      chars[singleChar] = chars[singleChar] + 1;
    }
    else {
      chars[singleChar] = 1;
    }
  }

  // const chars ={}
  // str.split("").forEach((char)=>{
  //     if(chars[char]) {chars[char]++} else {chars[char] = 1}
  // })  

  let repetitionNumber = 0;
  let mostCommonChar = "";

  for (const key in chars) {
    if (chars[key] > repetitionNumber) {
      repetitionNumber = chars[key];
      mostCommonChar = key;
    }
  }

  return mostCommonChar;
}

module.exports = maxChar;
