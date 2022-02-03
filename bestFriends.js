//Function that will return the biggest string
function bestFriend(arr) {
    let com = 0;
    let leargest;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > com) {
            com = arr[i].length;
            leargest = arr[i];
        }
    }
    return leargest;
}

console.log(bestFriend(['kamran', 'FID']));