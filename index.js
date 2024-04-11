window.onload = function() {
    const container = document.getElementById('container');
    const totalDivs = 16 * 16;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.style.width = '25px';
        div.style.height = '25px';
        div.style.border = '1px solid black';
        div.style.boxSizing = 'border-box';
        div.style.float = 'left';
        container.appendChild(div);
    }
}
