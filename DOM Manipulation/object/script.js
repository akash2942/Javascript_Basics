// JS allows to create objects without defining the class

var bird = {
	x:100,
	y:20,
	color:"blue",
	eggs:["one","two","three"],

/* fly = function() {} alias fly:function() {}*/
	fly:function(){
		console.log("Bird is flying");
}

};

//For loop
for(let i = 0; i < bird.eggs.length;i++){
	console.log(bird.eggs[i]);
}

//For Each Loop
bird.eggs.forEach(function(val,idx){
	console.log(idx,val);
});