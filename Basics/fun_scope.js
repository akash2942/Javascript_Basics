var a = "hello";
console.log(a);

function scope() {
    var a = 10;
    console.log("in function", a);
}

//console.log(a);
scope();
console.log(a);