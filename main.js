// creates a 16x16 grid when page is initially loaded
let gridContainer = document.querySelector('.grid-container');
window.addEventListener('DOMContentLoaded', createGrid);

// gets size of grid from range slider input
let gridSizeSlider = document.querySelector('#grid-size-selector');
gridSizeSlider.addEventListener('input', displayGridSize)

// display grid size next to slider
function displayGridSize(e) {
    let div = document.querySelector('#grid-size-display');
    div.innerText = `${e.target.value}x${e.target.value}`;
}

// deletes previous grid before creating a new one so grids dont stack
function deleteGrid() {
    gridContainer.innerHTML = '';
}

// creates a new grid based on size player chooses with slider on page
gridSizeSlider.addEventListener('change', createGrid);

function createGrid() {
    // delete previous grid board
    deleteGrid();
    // assign current value of slider to size
    let size = gridSizeSlider.value;

    // creates a (size * size) board and adds the class of cell, then appends the div to its grid-container parent
    for(let i = 0; i < Math.pow(size, 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }

    // adds CSS grid style to grid container BASED ON GRID SIZE so the container knows how many columns to create
    gridContainer.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);

}