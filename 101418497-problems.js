"use strict";

//Function 1
function _findNumOfDigits(arg) {
    const numberRegex = /\d+/g;
    const numberMatches = String(arg).match(numberRegex);
    const concatenatedMatches = numberMatches ? numberMatches.join('') : '';
    return concatenatedMatches.length;
  }
  

//Function 2
function _surplus(str) {
    return function inner() {
      return str;
    };
  }


// Function 3
function _strNumbers(array) {
    const result = [];
    for (let str of array) {
      if (/\d/.test(str)) {
        result.push(str);
      }
    }
    return result;
  }
  

// //Function 4
function _determineClassGrading(grades) {
    let numPassing = 0;
    let numFailing = 0;
    let total = 0;
  
    for (let i = 0; i < grades.length; i++) {
      if (grades[i] >= 50) {
        numPassing++;
      } else {
        numFailing++;
      }
      total += grades[i];
    }
  
    const avg = total / grades.length;
  
    console.log("Number of passing grades: ${numPassing}");
    console.log("Number of failing grades: ${numFailing}");
    console.log("Class average: ${avg.toFixed(1)}");
  
    return [numPassing, numFailing, Number(avg.toFixed(1))];
  }


//Function 5
const _moveCapitalLetters = str => {
    const uppercaseLetters = [];
    const lowercaseLetters = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            uppercaseLetters.push(str[i]);
        } else {
            lowercaseLetters.push(str[i]);
        }
    }
    return uppercaseLetters.join('') + lowercaseLetters.join('');
}


