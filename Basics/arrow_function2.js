function hello() {
    console.log('world');
    return 'hello';
}

var x = () => {
    hello();
};

console.log(x);
console.log(x());

console.log(() => {
    hello();
});

console.log(() => {
    hello();
});