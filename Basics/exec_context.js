function z() {
    console.log("Inside z");
}

function y() {
    z();
    console.log("Inside y");
}

function x() {
    y();
    console.log("Inside x");
}

x();
console.log("Global Context");