//Task 2
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
}

//Task 3

function toggleVisibility() {
    const box = document.getElementById('box');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

const anotherBox = document.getElementById('anotherBox');
anotherBox.addEventListener('mouseover', () => {
    anotherBox.style.backgroundColor = 'lightgreen';
});
anotherBox.addEventListener('mouseout', () => {
    anotherBox.style.backgroundColor = '';
});


function changeTextStyle() {
    const textElement = document.getElementById('textElement');
    textElement.style.fontSize = '18px';
    textElement.style.color = 'darkblue';
    textElement.style.fontWeight = 'bold';
}

function changeSpanStyle() {
    const spanElement = document.getElementById('spanElement');
    spanElement.style.backgroundColor = 'yellow';
    spanElement.style.padding = '5px';
    spanElement.style.borderRadius = '5px';
}

textElement.addEventListener('click', changeTextStyle);
spanElement.addEventListener('click', changeSpanStyle);
