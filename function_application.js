// Function which will convert temperature from Celcius to Ferenheit

function celToFer(tempCel) {
    let tempFer;
    tempFer = 9 * (tempCel / 5) + 32;
    return tempFer;
}
console.log(celToFer(100));