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

function paint(cell) {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'white';  
    });
}
