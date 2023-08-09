const change = document.querySelector('#change'),
    color = document.querySelector('#color'),
    body = document.body;

function getrandomRGB() {
    return Math.floor(Math.random() * 256);
}

change.addEventListener('click', changeBG);

function changeBG() {
    const col1 = getrandomRGB();
    const col2 = getrandomRGB();
    const col3 = getrandomRGB();

    const colorString = `rgb(${col1}, ${col2}, ${col3})`;

    body.style.backgroundColor = colorString;
    color.textContent = colorString;
}