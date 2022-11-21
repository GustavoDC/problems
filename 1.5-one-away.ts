/**
 * Checks whether two strings are maximum one edit (remove, insert, replace) away.
 * @param str1
 * @param str2 
 * @returns boolean
 */
    function oneAway(str1: string, str2: string): boolean {

      // Check for identical strings
      if (str1 === str2 ) {
        return true;
      }

      // Check length diff is not more that one char
      if (Math.abs(str2.length - str1.length) > 1) {
        return false;
      }
      
      // If first characters are equal, check following substring
      if (str1[0] === str2[0]) {
        return oneAway( str1.slice(1), str2.slice(1) );
      } else {

        // Check first character edition
        if ( str1.length === str2.length && str1 === str1[0] + str2.slice(1) ) {
          return true;

        // Check first character deletion
        } else if (str1.length > str2.length && str1 === str1[0] + str2) {
          return true;

        // Check first character insertion
        } else if (str1.length < str2.length && str1 === str2.slice(1)) {
          return true;

        }

      }
      return false;

    }


// Test

let cases = {
  'pale': true,
  'pae': true,
  'pal': true,
  'ple': true,
  'ale': true,
  'xale': true,
  'pxle': true,
  'paxe': true,
  'palx': true,
  'xpale': true,
  'palex': true,
  'xxle': false,
  'pxxe': false,
  'paxx': false,
  'xalx': false,
  'xaxe': false,
  'palexx': false,
  'le': false,
};

for (const str in cases ) {
  console.log(str, oneAway('pale', str));
}


