const length = 16, breadth = 16;

const container = document.querySelector('.container');

for(let i = 0; i < length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for(let j = 0; j < breadth; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }

    container.appendChild(row);
}

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