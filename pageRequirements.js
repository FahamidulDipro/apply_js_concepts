//Function that will calculate page requirements of multiple books
function pageRequirements(QuantityFirst, QuantitySecond, QuantityThird) {
    let totalPages = QuantityFirst * 100 + QuantitySecond * 200 + QuantityThird * 300;
    return totalPages;
}

console.log(pageRequirements(1, 2, 3));