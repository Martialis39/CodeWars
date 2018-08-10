// Smallest product / 7th Kyu

// Given an array of arrays, multiply the contents of each nested array and return the smallest total.

// Note: all inputs will be positive integers.

// Example: input [[1,5],[2]] output: 2



function product(array) {
    let res = array.reduce(function (prev, curr) {
        return prev * curr;
    })
    return res
}


function smallestProduct(arr) {


    let result = [];
    arr.forEach(function (el) {
        result.push(product(el))
    })
    return result.sort(function (a, b) {
        return a - b
    })[0]
}