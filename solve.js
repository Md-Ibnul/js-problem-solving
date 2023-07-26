// Task-1
function reverse(str){
    let reverseStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}
const reverseString = reverse("Hello World");
// console.log(reverseString);


// Task-2
function sumOfPositiveNum(num) {
    let sum = 0;
    for(let i = 0; i <  num.length; i++){
        const elements = num[i];
        if(elements >= 0){
            sum = sum + elements
        }
    }
    return sum;
}
let arr = [2, -5, 10, -3, 7];
const sumOfNum = sumOfPositiveNum(arr);
// console.log(sumOfNum);


// Task-3
function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  const freqMap = {};
  let maxFreq = 0;
  let mostFrequentElement = arr[0];

  for (const element of arr) {
    freqMap[element] = (freqMap[element] || 0) + 1;
    if (freqMap[element] > maxFreq) {
      maxFreq = freqMap[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(array);
// console.log(mostFrequent);


// Task-4
function findTwoSum(sortedArray, target) {
  if (arr.length === 0) {
    return null;
  }
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
  
const sortedArray = [1, 3, 6, 8, 11, 15];
const target = 14;
const result = findTwoSum(sortedArray, target);
// console.log(result);


// Task-5
function calculate(num1, num2, operator){
  if(operator === "+"){
    return num1 + num2;
  }
  if(operator === "-"){
    return num1 - num2;
  }
  if(operator === "*"){
    return num1 * num2;
  }
  if(operator === "/"){
    return num1 / num2;
  }
  else{
    return "Select only (+, -, *, /) as operator"
  }
}

const num1 = 10;
const num2 = 5;
const operator = "+";
const calculator = calculate(num1, num2, operator);
// console.log(calculator);


// Task - 6
function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[{]};:,<.>/?";

  const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}
const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);


// Task - 7
function romanToInt(romanNumeral) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentNumeral = romanNumeral[i];
    const currentValue = romanNumerals[currentNumeral];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}
const romanNumeral1 = "XXI";
const romanToNumeral = romanToInt(romanNumeral1)
// console.log(romanToNumeral); 


// Task - 8
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest !== Infinity ? secondSmallest : null; 
}
const numbers = [9, 2, 7, 1, 16, 6, 3, 28];
const secondSmallest = findSecondSmallest(numbers);
// console.log(secondSmallest);