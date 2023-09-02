function abc() {
    console.log(this);
}

var a = {
    name : "Akash",
    fun : function() {
        console.log(this);
    }
}

console.log(this);
abc();
a.fun();