let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Additional functionality for keyboard input
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Check if the pressed key is a number or an operator
  if (!isNaN(key) || ['+', '-', '*', '/', '.', 'Enter'].includes(key)) {
    appendToDisplay(key);
  }

  // Handle "Delete" key for clearing the display
  if (key === 'Delete') {
    clearDisplay();
  }

  // Handle "Backspace" key for deleting the last character
  if (key === 'Backspace') {
    deleteLastChar();
  }

  // Handle "Enter" key for calculating the result
  if (key === 'Enter') {
    calculate();
  }
});
