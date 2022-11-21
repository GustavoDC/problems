/**
 * V1
 * Resize the array to the desired length.
 * Make a copy of the array so we can read all characters that could be overwritten
 * (this takes more space but we don't need to count spaces and make the reversal loop; the result is a simpler solution).
 * Copy characters and translate whitespaces from copy to array.
 * Tha modification is performed in place.
 */
function urlify_v1(string: string[], trueLength: number): void {

  string.length = trueLength;

  let copy = [...string];
  let index = 0;

  for (let i = 0; i < trueLength; i++) {
    let char = copy[i];

    if (char === ' ') {
      string[index++] = '%';
      string[index++] = '2';
      string[index++] = '0';
    } else {
      string[index++] = char;
    }
  }

}


// Test

let string = "Mr John Smith     ";
let len = 13;
let stringArray = string.split('');

urlify_v1(stringArray, len);

console.log(stringArray);
