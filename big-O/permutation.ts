/**
 * O ( n 2 * n ! )
 * No coincide con los resultados del test 
 */

function permutation(str: string, prefix: string): void {
  totExec++;
  if (str.length === 0) {
    console.log(prefix);
    totPerm++;
  } else {
    for (let i = 0; i < str.length; i++) {
      totLine++;
      let rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str.charAt(i));
    }
  }
}


// Test
let totPerm: number;
let totExec: number;
let totLine: number;
let string: string;


for (let i=1; i<=4;i++) {
  string = ""; totExec = totLine = totPerm = 0;
  for (let x=1;x<=i;x++) {
    string = string + x;
  }
  permutation(string, "");
  console.log(">", string, totPerm, totExec, totLine);
}


