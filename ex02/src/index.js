// Only change code below this line
function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = myCounter (n - 1);
        countArray.push(n);
        return countArray;
    }
}

// Only change code above this line

console.log(myCounter(-1).reverse());
console.log(myCounter(10).reverse());
console.log(myCounter(5).reverse());
module.exports = myCounter;