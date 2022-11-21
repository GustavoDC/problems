/**
 * O(vn)  (raíz cuadrada de n)
 * El bucle se ejecuta sqrt(n) veces.
 * x * x <= n es igual a x <= sqrt(n).
 */

function isPrime(n: number): boolean {
  for (let x = 2; x * x <= n; x++) {
    console.log(x);
    if (n % x === 0)
      return false;
  }
  return true;
}

// Test
for (let i=1; i<=20;i++) {
  console.log('--:', i);
  console.log(isPrime(i));
}
