if(!localStorage.getItem('counter'))
	localStorage.setItem('counter', 0);

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#counter').innerHTML = localStorage.getItem('counter');

document.querySelector('button').onclick = () => {
let counter = localStorage.getItem('counter');
counter++;

document.querySelector('#counter').innerHTML = counter;
localStorage.setItem('counter', counter);
}
});