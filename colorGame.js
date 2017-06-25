var numOfSquares = 6;
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var squares = document.getElementsByClassName('square');
var message = document.querySelector('#message');
var h1 = document.getElementsByTagName('h1')[0];
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var correct = false;

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener('click', function(){
    this.classList.add('selected');
    hardBtn.classList.remove('selected');
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Color';
    message.textContent = '';
    correct = false;
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var n = 0; n < squares.length; n++) {
        if(colors[n]) {
            squares[n].style.backgroundColor = colors[n];
        } else {
            squares[n].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function(){
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Color';
    message.textContent = '';
    correct = false;
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var n = 0; n < squares.length; n++) {
        if(colors[n]) {
            squares[n].style.backgroundColor = colors[n];
            squares[n].style.display = 'block';
        }
    }
});

resetButton.addEventListener('click', function() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = 'steelblue';
    message.textContent = '';
    this.textContent = 'New Color';
    correct = false;
    for (var n = 0; n < squares.length; n++) {
        squares[n].style.backgroundColor = colors[n];
    }
});

for(var n = 0; n < squares.length; n++) {
    squares[n].style.backgroundColor = colors[n];
    squares[n].addEventListener('click', function(){
        if(!correct) {
            if(this.style.backgroundColor === colorDisplay.textContent) {
                message.textContent = 'Correct!!';
                changeColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = 'Play Again?';
                correct = true;
            } else {
                message.textContent = 'Try again';
                this.style.backgroundColor = '#232323';
            }
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
    var random_number = Math.floor(Math.random() * numOfSquares);
    return colors[random_number];
}

