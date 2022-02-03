//Show numbers which are bigger than 80

function biggerThan80(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 80) {
            console.log(arr[i]);
        }
    }
}
biggerThan80([1, 2, 444, 467, 90, 600]);