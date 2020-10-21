// Vampire numbers

// Pass a number and check if the number is a vampire or not.
function checkVampireNumbers(num, vampireReturn) {
  let noVampireMsg = "This number is not a vampire number";
  let sortNum = String(num).split("").sort((a, b) => a - b).reduce((acc, el) => acc + el);

  if (String(num).length % 2 && vampireReturn) return noVampireMsg;

  posibleNumbers = generateCombinations(num, String(num).length / 2, true);
  for (num1 of posibleNumbers) {
    for (num2 of posibleNumbers) {
      let mult = num1 * num2 === num;
      let duoZero = String(num1) == 0 && String(num2) == 0;
        let sortPosibleNumbers = (String(num1) + String(num2)).split("").sort((a, b) => a - b).reduce((acc, el) => acc + el);

      let sameDigits = sortPosibleNumbers === sortNum;
      if (mult && !duoZero && sameDigits) {
        return `${num}: ${num1} ${num2}`;
      }
    }
  }

  if (vampireReturn) return noVampireMsg;
}

// This function can get numbers or strings and generate combinations depending of arguments passed.
function generateCombinations(el, limitDigits, noRepeat) {
  let digits = String(el).split("");
  let combinations = digits;

  if (limitDigits === true) {
    noRepeat = true;
    limitDigits = false;
  }

  // Prevents the user from using the loop more than necessary
  if (digits.length < limitDigits) {
    throw new Error("LimitDigits Parameter: You cannot exceed the digit limit");
  }
  limitDigits = !limitDigits ? digits.length - 1 : limitDigits - 1;

  // Generate combinations
  for (let repeat = 0; repeat < limitDigits; repeat++) {
    let cacheCombinations = [];
    for (element of combinations) {
      if (element[0] == 0) continue;
      for (digit of digits) {
        // Remove repeated digits
        if (noRepeat) {
          for (elDigit of element.split("")) {
            if (elDigit === digit) {
                continue;
            }
          }
          cacheCombinations.push(element + digit);
        }
      }
    }
    // Remove repeated elements before running the loop again.
    combinations = [...new Set(cacheCombinations)];
  }

  // Return string or numbers depending of the argument passed
  if (typeof el === typeof "") return combinations;
  return combinations.map(el => Number(el));
}

function generateVampireNumbers(num) {
  for (let n = 1250; n < num; n++) {
    if (String(n).length % 2) continue;
    result = checkVampireNumbers(n);
    if (result) console.log(result);
  }
    console.log("Done")
}

console.log(generateCombinations(1232, 2, true))
// generateVampireNumbers(999999);
