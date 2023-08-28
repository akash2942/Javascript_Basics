c = 20; //Global variable
var d = 30; //Function Scope
let e = 50; //Block Scope

function fun(){

let a = 5;
if(a === 5) {
	var f = 100; // let has a block scope, var has a function scope
	console.log("Inside", f);
	}
	console.log("Outside", f);
}
fun();
//square_root(10);
//sqrt_n();
// console.log("Global", f); 

function square_root(n){
	console.log("In first sqrt fun");
	return;
	//console.log(Math.sqrt(n));
	// return Math.sqrt(n); // Math is an object in js 
}

// Function Hoisting
var sqrt_n = function() {
	console.log("In second sqrt fn");
	return;
}

square_root(10);
sqrt_n();

let arr = ["Apple","Mango","Guava"];
console.log(arr);

for(let i = 0; i < 5; i++){
	console.log(arr[i]);
}

arr.push("Banana"); // Insert at back
arr.pop(); // remove from back
arr.shift(); // remove from front
arr.unshift("Kiwi"); // insert at front
arr.indexOf("Kiwi"); // finds you the index

if(arr[0]=="Apple"){
	console.log("Apple");
}
else{
	console.log("No it is",arr[0]);
}