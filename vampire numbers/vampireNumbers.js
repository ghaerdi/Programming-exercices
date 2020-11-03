// Vampire numbers

function checkVampireNumbers(num, vampireReturn) {
  let sNum = String(num);
  let noVampireMsg = "This number is not a vampire number";
  let posibleNumbers = generateCombinations(num, sNum.length / 2, true, true);
  let posibleSecondNumbers;

  if (sNum.length % 2) {
    return vampireReturn ? noVampireMsg : undefined;
  }

  for (let mult1 of posibleNumbers) {
    mult1.split("").map(digit => {
      sNum.split("").map(numDigit => {
        let repeatedDigit = sNum.split("").filter(el => el === numDigit);
        let numbers = posibleSecondNumbers ? posibleSecondNumbers : posibleNumbers;
        posibleSecondNumbers = numbers.filter(el => {
          if (repeatedDigit.length > 1) {
              console.log(el, digit, repeatedDigit)
           return !el.match(digit);
          } else return !el.match(digit);
        });
      });
    });
    console.log(mult1, posibleSecondNumbers);
    for (let mult2 of posibleSecondNumbers) {
      console.log(mult2);
      if (mult1.match(/[0]/) && mult2.match(/[0]/)) continue;
      if (sNum / mult1 == mult2) return `${sNum} = ${mult1} * ${mult2}`;
    }
    posibleSecondNumbers = undefined;
  }

  return vampireReturn ? noVampireMsg : undefined;
}

// This function can get numbers or strings and generate combinations depending of arguments passed.
function generateCombinations(el, limitDigits, noRepeat, returnString) {
  let digits = [...new Set(String(el).split(""))].sort();
  let combinations = digits;

  if (limitDigits === true) {
    if (noRepeat === true) returnString = true;
    limitDigits = false;
    noRepeat = true;
  }

  // Prevents the user from using the loop more than necessary
  if (el.length < limitDigits) {
    throw new Error("LimitDigits Parameter: You cannot exceed the digit limit");
  }
  limitDigits = !limitDigits ? digits.length - 1 : limitDigits - 1;

  // Generate combinations
  for (let repeat = 0; repeat < limitDigits; repeat++) {
    let cacheCombinations = [];
    for (let element of combinations) {
      if (element[0] == 0) continue;
      for (let digit of digits) {
        // Remove repeated digits
        let repeatDigit;
        if (noRepeat) {
          for (let elDigit of element.split("")) {
            if (elDigit === digit) {
              repeatDigit = true;
            }
          }
        }
        if (repeatDigit) continue;
        cacheCombinations.push(element + digit);
      }
    }
    combinations = cacheCombinations;
  }

  // Return string or numbers depending of the argument passed
  if (typeof el === typeof "" || returnString) return combinations;
  return combinations.map(el => Number(el));
}

function generateVampireNumbers(num) {
  for (let n = 1250, count = 0; n < num; n++) {
    result = checkVampireNumbers(n);
    if (result) {
      console.log(count, result);
      count++;
    }
  }
  console.log("Done");
}

console.log(checkVampireNumbers(6880));
// console.log(checkVampireNumbers(1260));
// console.log(generateVampireNumbers(999999));
