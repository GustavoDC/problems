/**
 * Is s string a rotation of a second string?
 */
function isRotation(rotated: string, original: string): boolean {

  // Lengths must be equal and cannot be zero
  if (rotated.length !== original.length || rotated.length < 1) {
    return false;
  }

  // Contatenates original two times
  let double = original + original;

  // Search rotated
  if (double.indexOf(rotated) === -1) {
    return false;
  }
  
  return true;

}

// Test

console.log(isRotation("waterbottle", "erbottlewat"));