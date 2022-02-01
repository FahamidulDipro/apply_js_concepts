//Removing duplicate items from an array

// let arr = [1, 4, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//     let index = arr.indexOf(arr[i]);
//     if (index > -1) {
//         arr.splice(index, 1);
//     }


// }
// console.log(arr);

// function remDuplicate(arr, val) {
//     let index = arr.indexOf(val);
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             arr.splice(index, 1);
//         }
//     }
//     return arr;
// }
// console.log(remDuplicate([2, 3, 3, 3, 4, 5, 5, 5, 5, 4, 4, 6], 5));


function dupRemove(arr) {
    let emp = [];
    // let value = arr[0];
    for (var i = 0; i < arr.length; i++) {
        // if (arr[i] != value) {
        //     emp.push(arr[i]);
        //     value = arr[i];
        // }

        if (emp.indexOf(arr[i]) == -1) {
            emp.push(arr[i]);
        }
    }
    return emp;
}
console.log(dupRemove([1, 2, 3, 3, 4, 4, 4, 5]));