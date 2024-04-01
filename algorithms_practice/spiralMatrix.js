/*
Problem:
Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

Example:
Input: 3
Output:
[
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]

Input: 4
Output:
[
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
]

Input: 5
Output:
[
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
]

Write a function 'generateSpiralMatrix' to solve the problem.

Function Signature:
function generateSpiralMatrix(n: number): number[][]

Constraints:
- The input n is a positive integer.

Note:
- The spiral starts from the top left corner and moves in clockwise direction.
- The generated matrix should be returned as a 2D array.

*/

function generateSpiralMatrix(n) {
    // logic 
    /**
     * Loop the Spiral until ROW & COLUMN meet at the same element
     * Follow the Spiral --> Top ROW, Right COL, Bottom ROW & Left COL must be looped in this SPECIFIC ORDER 
        * Top ROW - Row is static, Column (++) is dynamic, element counter ++
        * Right COL - Row (++) is dynamic, Column is static, element counter ++
        * Bottom ROW - Row is static, Column (--) is dynamic , element counter ++
        * Left COL - Row (--) is dynamic, Column is static, element counter ++
     */
    const result = [];
    let counter = 1, startRow = 0, endRow = n-1, startCol = 0, endCol = n-1;
    // create empty matrix of n by n configuration
    for(let i = 0; i < n; i++){
        result.push([]);
    }

    while (startCol <= endCol && startRow <= endRow){
        // Top ROW
        for(let i = startCol; i <= endCol; i++){
            result[startRow][i] = counter;
            counter++;
        }
        startRow++; // for next loop

        // Right COL
        for(let i = startRow; i <= endRow; i++){
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;   // for next loop

        // Bottom ROW
        for(let i = endCol; i >= startCol; i--){
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Left COL
        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return result;
}


// Test Cases:
console.log(generateSpiralMatrix(3)); // Expected: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
console.log(generateSpiralMatrix(4)); // Expected: [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(generateSpiralMatrix(5)); // Expected: [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
console.log(generateSpiralMatrix(6));