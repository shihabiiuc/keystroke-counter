const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset');
let count = 0;

function resetCounter() {
  count = 0;
  counter.textContent = '0';
}

document.addEventListener('keydown', (event) => {
  // Check that the key isn't the Tab key or the "Reset" button, and that the "Reset" button isn't focused
  if (event.code !== 'Tab' && event.target !== resetButton) {
    count++;
    counter.textContent = count.toString();
  } else if (event.code === 'Tab') {
    event.preventDefault(); // prevent the default tab behaviour
  }
});

resetButton.addEventListener('click', () => {
  resetCounter();
});

// Reset the counter when the page first loads
resetCounter();

// textarea
// Get the HTML element
const textarea = document.getElementById('textarea');
// Set the focus on the textarea element
textarea.focus();

// after resetting counter the textarea will hollo out and cursor will be focused on it 
resetButton.addEventListener('click', () => {
  textarea.value = ''; // Set the textarea value to an empty string
  textarea.focus(); // Set the cursor focus on the textarea
});