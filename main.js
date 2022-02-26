// display grid size next to slider
function displayGridSize(e) {
    let div = document.querySelector('#grid-size-display');
    div.innerText = `${e.target.value}x${e.target.value}`;
}

// deletes previous grid before creating a new one so grids dont stack
function deleteGrid() {
    gridContainer.innerHTML = '';
}

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

    // drawing event, each cell moused over is colored
    let cells = document.querySelectorAll('.cell')
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener('mouseover', () => addColor(cells[i]));
    }
}

// adds the colored class to cell that has been hovered over by mouse
function addColor(cell) {
    cell.classList.add('colored-cell');
}

function eraseBoard() {
    // create nodeList of all colored cell on board
    let cells = document.querySelectorAll('.colored-cell');
    // loop through board, toggling colored class off
    for(let i = 0; i < cells.length; i++) {
        cells[i].classList.toggle('colored-cell');
    }
}

// selector and event listener for erase board button
let erase = document.querySelector('.erase')
erase.addEventListener('click', eraseBoard)

// creates a 16x16 grid when page is initially loaded
let gridContainer = document.querySelector('.grid-container');
window.addEventListener('DOMContentLoaded', createGrid);

// gets size of grid from range slider input
let gridSizeSlider = document.querySelector('#grid-size-selector');
gridSizeSlider.addEventListener('input', displayGridSize)

// creates a new grid based on size player chooses with slider on page
gridSizeSlider.addEventListener('change', createGrid);

/*

// generate a random number 
function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

// generate a random RGB value
function generateColor() {
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();
    console.log(`rgb(${r}, ${g}, ${b})`);
}

getRandomNumber()

generateColor();

*/