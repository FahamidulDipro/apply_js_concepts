// Finding positive numbers from an array

function arrPositive(arr) {
    let emt = [];
    for (const i of arr) {
        if (arr[i] > 0) {
            emt.push(arr[i]);
        } else {
            break;
        }
    }
    return emt;
}

console.log(arrPositive([1, 2, 4, 5, -5, 6, 7]));