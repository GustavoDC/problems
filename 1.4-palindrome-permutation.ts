/**
 * V1
 * 
 * Convert to lowercase.
 * The spaces are irrelevant, so we remove them.
 * We sort the string and check for repetitions. A palindrome can only have none or one character with an odd number of occurrences.
 */
function isPalindromePermutation_v1(string: string) {

  let arr: string[] = []
  
  // Convert to lowercase
  string = string.toLowerCase();

  // Remove spaces
  for (let i = 0; i < string.length; i++ ) {
    if (string[i] !== ' ') {
      arr.push(string[i]);
    }
  }

  // Sort array, so we get repetitions toghether
  arr.sort();

  // Count odd repetitions and return false if we found more that one odd character
  let oddCounter: number = 0;
  let isOdd: boolean = true;
  let char: string = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] == char) {
      isOdd = !isOdd;
    } else {
      if (isOdd) {
        oddCounter++;
        if (oddCounter > 1) {
          return false;
        }
      }
      isOdd = true;
      char = arr[i+1];
    }
  }

  return true;
}


// Test

let str = "Tact Coa";
console.log(isPalindromePermutation_v1(str));