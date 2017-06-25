var colors = generateRandomColors(6);

var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var squares = document.getElementsByClassName('square');
var message = document.querySelector('#message');
var h1 = document.getElementsByTagName('h1')[0];

colorDisplay.textContent = pickedColor;

for(var n = 0; n < squares.length; n++) {
    squares[n].style.backgroundColor = colors[n];
    squares[n].addEventListener('click', function(){
        if(this.style.backgroundColor === colorDisplay.textContent) {
            message.textContent = 'Correct!!';
            changeColor(pickedColor);
            h1.style.backgroundColor = pickColor();
        } else {
            message.textContent = 'Try again';
            this.style.backgroundColor = '#232323';
        }
    });
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random_number = Math.floor(Math.random() * colors.length);
    return colors[random_number];
}

