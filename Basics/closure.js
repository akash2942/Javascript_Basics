var a = 1;

function outer() {
    var j = 20;
    console.log(j);
    var b = function () {
        var k = 30;
        console.log(j,k);
    }

    return b;
}

var result = outer();
console.log(result);
console.log(result());