// Maximum of two values

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(2, 3), 'is the biggest number');

// Maximum of three values

function maxThree(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        } else {
            if (c > b) {
                return c;
            }
        }
    } else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}
console.log(maxThree(2222, 676, 656), ' is the biggest number');