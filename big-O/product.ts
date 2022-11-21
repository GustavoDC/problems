/**
   * O(b)
 */

function product(a: number, b: number): number {
  
  let sum: number = 0;

  for (let i = 0; i < b; i++) {
    sum += a;
  }

  return sum;

}



