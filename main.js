let gridSize = 16;

const container = document.querySelector('.container');

function buildGrid(gridSize) {
    container.innerText = '';
    for(let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for(let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    
        container.appendChild(row);
    }
}

buildGrid(gridSize);

container.addEventListener('mouseover', (event) => {
    if(!event.target.classList.contains('square')) 
        return;
    event.target.style.backgroundColor = 'yellowgreen';
});

container.addEventListener('mouseout', (event) => {
    if(!event.target.classList.contains('square')) 
        return;
    event.target.style.backgroundColor = 'yellow';
});

const button = document.querySelector('button');
console.log(button);
const text = document.createElement('div');

button.addEventListener('click', (event) => {
    text.textContent = '';
    let size = prompt("Enter the size of the grid: ");
    size = Number(size);

    if(isNaN(size)) {
        text.textContent += 'Invalid Size!';
        return;
    }

    if(size > 100)
        size = 100;
    buildGrid(size);
});