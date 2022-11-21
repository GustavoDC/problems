/**
 * Given a matrix, if an element in an MxN position is 0, its entire row and column are set to 0.
 */
function zeroMatrix(matrix:number[][]): void {

  var columns: {}[] = [];
  var rows: {}[] = [];

  // Register columns and rows where we find zeroes
  for (let row = 0; row < matrix.length; row++) {

    for (let col = 0; col < matrix[0].length; col++) {

      if (matrix[row][col] === 0) {
        columns[col] = true;
        rows[row] = true;
      }

    }

  }

  // Zero columns
  for (let col in columns) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][col] = 0;
    }
  }  

  // Zero rows
  for (let row in rows) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[row][col] = 0;
    }
  }  

}


// Test

let matrix = [
  [1,1,1,1],
  [0,1,1,1],
  [1,1,1,1],
  [1,1,1,0]
];

zeroMatrix(matrix);

console.log(matrix);

