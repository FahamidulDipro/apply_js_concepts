//Finding the maximum number from an array

var arr = [1, 2, 4, 5, 6];
console.log(Math.max(...arr));



//Function for finding maximum number from an array

function maxArr(...arr) {
    let maxNum = Math.max(...arr);
    return maxNum;
}
console.log('The maximum number from the array is: ', maxArr(1, 3, 5, 6, 7, 45, 6767, 444));




//Function for finding minumum number from an array
function minArr(...arr) {
    let minNum = Math.min(...arr);
    return minNum;
}
console.log('The minimum number from the array is: ', minArr(1, 3, 5, 6, 7, 45, 6767, 444));