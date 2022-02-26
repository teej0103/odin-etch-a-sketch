let gridContainer = document.querySelector('.grid-container');

window.addEventListener('DOMContentLoaded', createGrid)

function createGrid() {
    let size = 16;
    
    for(let i = 0; i < Math.pow(size, 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }

    gridContainer.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
    /*gridContainer.style.gridTemplateRows = (`repeat(${size}, 1fr)`);*/
}