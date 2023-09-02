var sec = 1;
function hello() {
    console.log("after", sec);
    sec++;

    if(sec === 6) {
        clearInterval(id);
    }
}

// setTimeout(hello, 2000);
var id = setInterval(hello, 2000);