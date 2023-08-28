function Fruit(taste,color){
	this.color = color;
	this.taste = taste;
}

//new keyword for object creation
let mango = new Fruit("sweet","yellow");
let orange = new Fruit("sour","orange");

//Object creation below apple is an object
var apple = {
	taste:"sweet",
	color:"red",
}

// Class keyword


//Class declaration 
class FruitClass{
	constructor(taste,color){
		this.color = color;
		this.taste = taste;
	}
};

//Functions - Declaration, Function Expression
//below output is not different from the orange one
// let kiwi = new FruitClass("sour","green");

//Class Expression
let FruitClass2 = class{
	constructor(taste,color){
		this.color = color;
		this.taste = taste;
	}
};


// let kiwi2 = new FruitClass2("sour","green");