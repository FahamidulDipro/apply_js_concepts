// let arr = [1, 2, 4, 5, 6];
// let sum = 0;
// for (var i = 0; i <= arr.length - 1; i++) {

//     sum = sum + arr[i];

// }
// console.log(sum);

function arrSum(...arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {

        sum = sum + arr[i];
    }
    return sum;
}
console.log(arrSum(1, 3, 4, 5, 6, 9));