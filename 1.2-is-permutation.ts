/** 
 * V1
 * 
 * Counts letters of string1 and counts letters of string2. 
 * It compares on the fly and returs false when finds the first difference.
 * Optimization: false if strings don't have the same length
 */
function isPermutation_v1(string1: string, string2: string): boolean {

  if (string1.length !== string2.length) {
    return false;
  }

  let counter1: {} = {};
  let counter2: {} = {};

  for ( let i = 0; i < string1.length; i++ ) {

    let char = string1[i];

    if (counter1[char] === undefined) {
      counter1[char] = 1;
    } else {
      counter1[char]++;
    }

  }

  for ( let i = 0; i < string2.length; i++ ) {

    let char = string2[i];

    if (counter1[char] === undefined || counter2[char] === counter1[char]) {
      return false;
    }

    if (counter2[char] === undefined) {
      counter2[char] = 1;
    } else {
      counter2[char]++;
    }

  }

  return true;

}

/** 
 * V2
 * 
 * Sorts srings and compare
 * Optimization: false if strings don't have the same length
 */
function isPermutation_v2(string1: string, string2: string): boolean {

  if (string1.length !== string2.length) {
    return false;
  }
  return sort(string1) === sort(string2);

}
function sort(string: string): string {
  return string.split('').sort().join('');
}


// Test
let string1 = "peperoni";
let string2 = "peperono";

console.log(isPermutation_v1(string1, string2));
console.log(isPermutation_v2(string1, string2));
