const container = document.querySelector('#container');
const DIMENSION = 16;
for (let i = 0; i < DIMENSION; ++i) {
    for (let j = 0; j < DIMENSION; ++j) {
        const cell = document.createElement('div'); 
        cell.classList.add('cell');

        container.appendChild(cell);
        paint(cell);
    }
}

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', () => {
    const container = document.querySelector('#container');
    let cellList = container.childNodes;

    for (let i = 0; i < cellList.length; ++i) {
        cellList[i].style.backgroundColor = '#F9FAFB';
    }
});

function paint(cell) {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#ff5733';
    });
}
