/**
 * O(1)
 */
function mod(a: number, b: number): number {
  
  if ( b <= 0 ) {
    
    return -1;

  }

  let div = Math.floor(a / b);

  return a - div * b;

}