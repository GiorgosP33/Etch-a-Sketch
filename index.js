window.onload = function() {
    const container = document.getElementById('container');
    const totalDivs = 16 * 16;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        div.className = 'childs';
        container.appendChild(div);
    }
}
