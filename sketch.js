"use strict";

let DIMENSION = 16;

createGrid();
clearGrid();

/*
 * Create DIMENSION by DIMENSION grid.
 * #gridContainer will have DIMENSION rows,
 * each row will have DIMENSION cells.
 */
function createGrid() {
    for (let i = 0; i < DIMENSION; ++i) {
        const container = document.querySelector('#gridContainer');
        const row = document.createElement('div');

        row.classList.add('row');
        container.appendChild(row);

        for (let j = 0; j < DIMENSION; ++j) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            row.appendChild(cell);
            paint(cell);
        }
    }
}

/*
 * Clears the grid
 */
function clearGrid() {
    const clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', () => {

        // Change dimension to user input
        let result = window.prompt('How many squares per side?',
            `${DIMENSION}`);
        if (result) DIMENSION = result;

        // remove all children from #gridContainer and recreate
        // grid using new DIMENSION value
        const container = document.querySelector('#gridContainer');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        createGrid();

        /*
                let rowList = container.childNodes;

        for (let i = 0; i < DIMENSION; ++i) {
            let cellList = rowList[i].childNodes;

            for (let j = 0; j < rowList.length; ++j) {
                cellList[j].style.backgroundColor = '#F9FAFB';
            }
        } */
    });
}

/*
 * Event handler that changes colour of cell
 * that are being hovered over
 */
function paint(cell) {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#ff5733';
    });
}
