/**
 * V1
 * 
 * Time complexity: O(N)
 */
function uniqueCharacters_v1(string: string): boolean {

  let chars: {} = {};

  for(let i = 0; i < string.length; i++) {
    
    let char = string[i];

    if (chars[char] === undefined) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }

    if (chars[char] > 1) {
      return false;
    }

  }

  return true;

}

/** 
 * V2
 * 
 * Time complexity: O(N) or O(1) because de string will never be longer than 128
 *                  Also, it could be expressed as O(min(c, n)) or O(c), where c is the size of the character set.
 * Space complexity: O(c)
 */
function uniqueCharacters_v2(string: string): boolean {

  if (string.length > 128) {
    return false;
  }

  let chars: {} = {};

  for(let i = 0; i < string.length; i++) {
    
    let char = string[i];

    if (chars[char] !== undefined) {
      return false;
    } 
    chars[char] = true;

  }

  return true;

}


// Repaso
function uniqueCharacters_v3(str: string): boolean {

  var controlArr: boolean[] = [];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (controlArr[char] !== undefined) {
      return false;
    } else {
      controlArr[char] = true;
    }
  }
  return true;
}

console.log(uniqueCharacters_v2("gustavos"));
console.log(uniqueCharacters_v3("gustavos"));

