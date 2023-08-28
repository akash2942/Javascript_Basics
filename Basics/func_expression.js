var a = function add(a,b) {
    return a + b;
};  // named function expression

var x = function (c,d) {
    return c + d;
}; // anonymous function expression

console.log(a);
console.log(a(5,6));

console.log(x);
console.log(x(3,5));