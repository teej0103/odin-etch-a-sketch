// creates a 16x16 grid when page is initially loaded
let gridContainer = document.querySelector('.grid-container');
window.addEventListener('DOMContentLoaded', createGrid);

//gets size of grid from range slider input
let x = document.querySelector('#grid-size-selector');
x.addEventListener('input', displayGridSize)

function displayGridSize(e) {
    let div = document.querySelector('#grid-size-display');
    div.innerText = `${e.target.value}x${e.target.value}`;
    createGrid();
}

function createGrid() {
    let size = x.value;
    
    for(let i = 0; i < Math.pow(size, 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }

    gridContainer.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
}

function deleteGrid() {
    gridContainer.innerHTML = '';
}

// GRID IS NOT RESETTING ITSELF AFTER ONE IS CREATED...
// NEED TO ADD A BUTTON TO CONFIRM SIZE BEFORE PLAY, !!THEN!! CREATE THE GRID 
// SO THEY DONT BUILD ON TOP OF EACHOTHER.
// A RESET BUTTON WILL WIPE CLEAN, BUT THE PLAY BUTTON EVENT WILL BE WHEN THE GRID IS CREATED,
// !!NOT!! EVERY TIME THE SLIDER CHANGES. THE SLIDER WILL STAY !!ONLY!! TO CONFIRM THE SIZE FOR THE PLAYER
// BEFORE THEY PRESS PLAY BUTTON