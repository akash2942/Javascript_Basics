function fun() {
    let ab = 10;
    if(ab == 10) {
        let abc = 20;
        console.log("Inside",abc); // Inside block scope
    }

    console.log("Inside",abc); // Outside block scope
}

fun(); // Calling of the function