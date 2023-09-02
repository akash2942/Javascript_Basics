var student = {
    name : "xyz",
    roll_no : 123,
    marks : 60,
    address : {
        city : "Mohali",
        Pin_Code : 4563
    }
};

console.log(student.address);
console.log(student.address.city);
console.log(student.address["city"]);