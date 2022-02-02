//Reversing a string

function reverse(str) {
    let emtstr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        emtstr += str[i];
    }
    return emtstr;
}
console.log(reverse('dipro'));