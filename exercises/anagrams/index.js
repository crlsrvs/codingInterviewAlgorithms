// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA="", stringB="") {
  
  // Return true if the character is between "a" and "z" according to the ASCII table order of characters
  function onlyAlphabet(char="") {
    return char >= "a" && char <= "z"
  }

  // Takes the string, lowercase it and removes the special characters
  function cleanStrings(stringOne="") {
    return stringOne.toLowerCase().split("").filter(onlyAlphabet).join("")
  }

  // Creates an object that contains each character as key and the number of rep as value
  function turnStringToMap(str="") {
    const charMap ={}

    // "for of" goes across the string's characters 
    for (const singleChar of str) {

      // if char exists as an object key
      if (charMap[singleChar]) {
        // increment the numeric value by 1
        charMap[singleChar] = charMap[singleChar] + 1;
      }
      else {
        // if not, create it
        charMap[singleChar] = 1;
      }
    }
    return charMap;
  }

  // This function compares objects that only have primitive values
  function compareTwoShallowObjects(obj1, obj2) {
    // if objects doesnt have the same amount of keys, return false
    if (Object.keys(obj1).length !== Object.keys(obj1).length) {
      return false
    };
    // for every key, compare the value of both objects 
    return Object.keys(obj1).every((key) => obj1[key] === obj2[key] )
  }

  const cleanStringA = cleanStrings(stringA)
  const cleanStringB = cleanStrings(stringB)

  if (cleanStringA.length !== cleanStringB.length) {
    return false;
  }

  const map1 = turnStringToMap(cleanStringA)

  const map2 = turnStringToMap(cleanStringB)

  return compareTwoShallowObjects(map1, map2)
}

module.exports = anagrams;
