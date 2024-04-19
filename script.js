function appendToDisplay(value) {
	document.getElementById('display').value += value;
  }

  function clearDisplay() {
	document.getElementById('display').value = '';
  }

  function calculate() {
	try {
	  const result = eval(document.getElementById('display').value);
	  document.getElementById('display').value = result;
	} catch (error) {
	  document.getElementById('display').value = 'Error';
	}
  }

  document.addEventListener('keydown', function(event) {
	const key = event.key;
	if (/[0-9\+\-\*\/\.=]|Enter|Backspace|Delete/.test(key)) {
	  if (key === 'Enter') calculate();
	  else if (key === 'Backspace' || key === 'Delete') clearDisplay();
	  else appendToDisplay(key);
	}
  });