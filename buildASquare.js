// Build a square /  7th Kyu
// I will give you an integer. Give me back a shape that is as long and wide as the integer. 
// The integer will be a whole number between 0 and 50.
// Example: Integer = 3; I expect a 3x3 square back just like below as a string.


function generateShape(int) {
    let result = '';
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            result += '+';
        }
        result += '\n';
    }
    return result.slice(0, -1)
}