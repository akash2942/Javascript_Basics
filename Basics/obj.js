var obj = {};
console.log(typeof(obj));

/* var obj2 = {};
var obj2 = new Object();  // both are empty objects */

var student = {
    name : "Abhilash",
    roll_no : 123,
    marks : 80
};

console.log(student);
console.log(student.sem);

student.sem = 8; // dot notation
console.log(student["roll_no"]); // seems like every key is by default a string (sq. bracket notation)

console.log(student);

delete student.marks;
console.log(student);
