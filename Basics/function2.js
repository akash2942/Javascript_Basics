function hello(msg) {
    console.log(msg);
}

function sum(a,b) {
    return a + b;
}

function sum2(c,d) {
    return c + d; // value of d is undefined
}

hello("hello world");

result = sum(3,4);
result2 = sum2(4); // variable length argument

console.log(result);
console.log(result2); 
