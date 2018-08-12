// Introduction and Warm-up (Highly recommended) // 7th Kyu
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Postives

// Repeatition of numbers in the array/list could occur.

// Input >> Output Examples
// 1- productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 12 is the product of all array's elements except the first element

// The second element 20 is the product of all array's elements except the second element .


let result = numbers.map(function (element, index) {

    let res = numbers.filter(function (el, i) {
        if (i !== index) {
            return el;
        }
    }).reduce(function (prev, curr) {
        return prev * curr;

    })
    console.log(res)
    return res;
})

return result;