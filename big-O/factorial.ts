/**
 * O(n)
 * Al ir restando de a 1 hasta llegar a 0, se ejecuta n veces
 */

function factorial(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Test
for (let i = 0; i <= 20; i++) {
  console.log('- ', i);
  console.log(factorial(i));
}