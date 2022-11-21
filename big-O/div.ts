/**
 * O(a/b)
 */

function div(a: number, b: number): number {
  let count = 0;
  let sum = b;

  while (sum <= a) {
    
    sum += b;
    count++;

  }
  return count;
}