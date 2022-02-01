// Fibonacci series
let sum = 0;
let n = 10;
let j = 1;
let k = 1;
for (var i = 1; i <= n; i++) {

    s = j + k;
    j = k;
    k = s
    console.log(s);
}

let fibo = [0, 1];
for (var i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);