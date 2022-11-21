/**
 * Example: Print all positive integer solutions to the equation a³ + b³ 
 * and d are integers between 1 and 1000
 */

let n:number = 5;
let count:number = 0;
let solutions:number = 0;

/**
 * Brute force solution --> O(n⁴)
 */
function printNumbers1(n:number): void {

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        for (let d = 1; d <= n; d++) {
          count++;
          if (testEquation(a, b, c, d)) {
            logNumbers(a,b,c,d);
          }        
        }
      }
    }
  }

}

/**
 * Unnecesary work optimization I --> still O(n⁴)
 * - Break after first d value 
 */
 function printNumbers2(n:number): void {

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        for (let d = 1; d <= n; d++) {
          count++;
          if (testEquation(a, b, c, d)) {
            logNumbers(a,b,c,d);
            break;
          }        
        }
      }
    }
  }

}

/**
 * Unnecesary work optimization II --> O(n³)
 * - Calculate d 
 */
 function printNumbers3(n:number): void {

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      for (let c = 1; c <= n; c++) {
        count++;
        let d = Math.pow(Math.pow(a,3) + Math.pow(b,3) - Math.pow(c,3), 1/3); 
        d = Math.round(d);
        if (testEquation(a, b, c, d)) {
          logNumbers(a,b,c,d);
        }         
      }
    }
  }

}

/**
 * Duplicated work optimization I --> O(n³)
 * - Store pairs in a hash table 
 */
 function printNumbers4(n:number): void {
 
  let results = [];

  for (let c = 1; c <= n; c++) {
    for (let d = 1; d <= n; d++) {
      let result = Math.pow(c,3) + Math.pow(d,3);
      if (results[result] === undefined) {
        results[result] = [[c,d]];
      } else {
        results[result].push([c,d]);
      }
    }
  }

  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let result = Math.pow(a,3) + Math.pow(b,3);
      let list = results[result];
      for (let i = 0; i < list.length; i++ ) {
        count++;
        logNumbers(a, b, list[i[0]], list[i[1]]);
      }
    }
  }

}


/**
 * Duplicated work optimization I --> O(n³)
 * - Reuse stored pairs c,d for a,b 
 * It doesn't change the runtime.
 */
 function printNumbers5(n:number): void {
 
  let results = [];

  for (let c = 1; c <= n; c++) {
    for (let d = 1; d <= n; d++) {
      let result = Math.pow(c,3) + Math.pow(d,3);
      if (results[result] === undefined) {
        results[result] = [[c,d]];
      } else {
        results[result].push([c,d]);
      }
    }
  }
  
  for (var prop in results) {

    let list = results[prop];
    for (let pi1 = 0; pi1 < list.length; pi1++ ) {
      let pair1 = list[pi1];
      for (let pi2 = 0; pi2 < list.length; pi2++ ) {
        let pair2 = list[pi2];

        count++;
        logNumbers(pair1[0], pair1[1], pair2[0], pair2[1]);
      }
    }

  }
}

// Helper functions


function testEquation(a:number, b:number, c:number, d:number ): boolean {
  return (Math.pow(a,3) + Math.pow(b,3)) === (Math.pow(c,3) + Math.pow(d,3));
}

function logNumbers(a:number, b:number, c:number, d:number): void {
  // console.log(a,b,c,d);
  solutions++;
}

function printAndRestartCounters(): void {
  console.log('Count:', count, 'Solutions:', solutions);
  count = solutions = 0;
}



printNumbers1(n);
printAndRestartCounters();

printNumbers2(n);
printAndRestartCounters();

printNumbers3(n);
printAndRestartCounters();

printNumbers4(n);
printAndRestartCounters();

printNumbers5(n);
printAndRestartCounters();