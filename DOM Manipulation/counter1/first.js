let a = 0;

function count() {
	a++;
	document.querySelector('h1').innerHTML = a;


	if(a % 10 == 0){
	alert(`Counter is at $(a)`);
}
}