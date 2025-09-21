// Get references to the HTML elements we need to interact with
const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');

/**
 * Creates a grid of square divs.
 * @param {number} squaresPerSide - The number of squares for each side of the grid.
 */
function createGrid(squaresPerSide) {
    // First, clear any existing grid squares from the container
    gridContainer.innerHTML = '';

    // Calculate the size of each square based on the container's fixed width
    const squareSize = 960 / squaresPerSide;

    // Calculate the total number of squares needed
    const totalSquares = squaresPerSide * squaresPerSide;

    // Loop to create and append each square to the grid container
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Set the width and height of the square
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add a 'mouseover' event listener to change color on hover
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        gridContainer.appendChild(square);
    }
}

/**
 * Handles the click event for the reset button.
 * Prompts the user for a new grid size and creates a new grid.
 */
resetButton.addEventListener('click', () => {
    // Prompt the user for a number
    let userInput = prompt("How many squares per side for the new grid? (Max: 100)");
    
    // Convert the user's input from a string to a number
    let newSize = parseInt(userInput);

    // Validate the user's input
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else if (userInput !== null) { // Don't show alert if user clicks "Cancel"
        alert("Please enter a number between 1 and 100.");
    }
});

// Create the initial 16x16 grid when the page first loads
window.onload = () => {
    createGrid(16);
};