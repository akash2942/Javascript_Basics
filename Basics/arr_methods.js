let fruits = ["apple", "mango", "orange"];
console.log(fruits);
console.log(fruits[0]," ",fruits[1]);

for(let i = 0; i < 3; i++) {
    console.log(fruits[i]); // looping over array elements & let has block scope
}

let index_of = fruits.indexOf("Mango");
console.log(index_of);

fruits.shift(); // Removes from front
console.log(fruits);

fruits.unshift("papaya"); // Inserts at front
console.log(fruits);

fruits.pop(); // removes from back
console.log(fruits);

fruits.push("watermelon"); // Inserts at back
console.log(fruits);