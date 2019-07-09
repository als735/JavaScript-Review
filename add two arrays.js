// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


arr1 = [5, 77, 8, 12]
arr2 = [4, 6, 10, 3]; 

const newArr1 = arr1.reduce((a, b) => a + b ,0)
const newArr2 = arr2.reduce((a, b) => a + b ,0) 

const combinedArr = newArr1 + newArr2

console.log(combinedArr)