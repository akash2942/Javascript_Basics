document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#submit').disabled = true;
	
	document.querySelector('#task').onkeyup = () => {
		document.querySelector('#submit').disabled = false;
	};

	document.querySelector('#new-task').onsubmit = () => {

	const li = document.createElement('li');
	li.innerHTML = document.querySelector('#task').value;

	document.querySelector('#tasks').append(li);

	document.querySelector('#task').value = '';
	document.querySelector('#submit').disabled = true;

	return false;
};

});