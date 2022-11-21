/**
 * Basic string compression using the counts of repeated characters
 */
function compressString(string: string): string {

  var compressedString: string = '';
  var count: number;
  
  for (let i = 0; i < string.length; i += count) {
    
    count = 0;

    while ( ((i + count++) <= string.length) && (string[i + count] === string[i]) ) {}

    compressedString += (string[i] + count);   

  }

  return compressedString.length > string.length ? string : compressedString;

}

// Test

console.log(compressString("abbcccddddaaxjussssssssssyy"));
console.log(compressString("abcdefg"));
