/* 
You are given an array of elements and a positive integer size. 
Your task is to divide the array into subarrays of size size such that 
each subarray contains size elements, except for the last subarray which may contain fewer elements 
if the total number of elements is not divisible by size.

Write a function chunkArray(arr, size) that takes in an array arr and 
a positive integer size as parameters and returns an array of subarrays.

For example, given the array [1, 2, 3, 4, 5, 6, 7, 8, 9] and size = 3, the function should return [[1, 2, 3], [4, 5, 6], [7, 8, 9]].


Note:
The input array will always contain at least one element.
The value of size will always be a positive integer.
*/

// Test Cases
console.log(chunkArray([1, 2, 3, 4, 5], 2))     // Expected : [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4))   // Expected : [[1, 2, 3, 4], [5, 6, 7]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 5))    // Expected : [[1, 2, 3, 4, 5], [6, 7, 8]]


function chunkArray(arr, size) {
    const resultArr = [];
    try {
        for (let i = 0; i < arr.length; i = i + size) {
            resultArr.push(arr.slice(i, i+size));
        }
    }
    catch (ex) {
        console.error(`ERROR : ${ex}`);
    }
    return resultArr;
}