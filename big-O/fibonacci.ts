/**
 * O( 2 N ) 2 pow N
 * It's actually closer to 0( 1. 6 N )
 */

function fib(n: number): number {
  totExec++;
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}


/**  
 * También O( 2 N ) 2 pow N
 */
function test(max: number): void {

  for (let i = 1; i <= max; i++) {
    totExec = 0;
    console.log(i, fib(i), totExec, Math.pow(1.6485,i));
  }

}

let totExec: number;
test(20);