// Simple interest calculator function

function simpleInt(principle, interestRate, time) {
    let interest = principle * interestRate * time;
    return interest;
}
console.log('Interest will be: ', simpleInt(25000, .05, 4), 'tk');