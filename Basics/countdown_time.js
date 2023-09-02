var sec = 10;
function count() {
    console.log(sec);
    sec--;

    if(sec === 0) {
        console.log("Ends");
        clearInterval(id);
    }
}

var id = setInterval(count, 1000);