// Only change code below this line
function sumFibonacci(n) {
    return n < 1 ? 0
    : n<= 2 ? 1
    : sumFibonacci (n - 1) + sumFibonacci(n - 2);
}
// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;