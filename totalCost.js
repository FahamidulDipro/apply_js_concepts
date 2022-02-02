// Calculating total cost from array of objects

const products = [{
        item: 'laptop',
        price: 50000,
        quantity: 1
    },
    {
        item: 'mobile',
        price: 30000,
        quantity: 1
    },
    {
        item: 'gimble',
        price: 10000,
        quantity: 1
    },
    {
        item: 'camera',
        price: 20000,
        quantity: 2
    }
];
let totalPrice = 0;
let totalQuantity = 0;

for (const product of products) {
    totalPrice += product.price * product.quantity;
    totalQuantity += product.quantity;
}
console.log('Total price: ', totalPrice, ' Total quantity: ', totalQuantity);