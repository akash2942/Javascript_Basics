var a = 2;

function outer() {
    var z = 3;

    var ac = function () {
        var j = 30;
        console.log(j,z);
        j++; z++;
    }
    return ac;
}

var result = outer();
console.log(result());
console.log(result());