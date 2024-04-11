window.onload = function() {
    const container = document.getElementById('container');
    const totalDivs = 16 * 16;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }
}
window.onload = function() {
    createGrid(16); // Create a 16x16 grid by default

    const btn = document.createElement('button');
    btn.textContent = 'New Grid';
    btn.addEventListener('click', newGrid);
    document.body.insertBefore(btn, document.body.firstChild);
}

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear the container
    const totalDivs = size * size;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        div.style.width = `${960/size}px`;
        div.style.height = `${960/size}px`;
        container.appendChild(div);
    }
}

function newGrid() {
    let size;
    do {
        size = prompt('Enter the number of squares per side for the new grid (max 100):');
    } while (size < 1 || size > 100 || isNaN(size));

    createGrid(size);
}
