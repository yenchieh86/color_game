var numOfSquares = 6;
var colors = [];
var pickedColor = '';
var colorDisplay = document.querySelector('#colorDisplay');
var squares = document.getElementsByClassName('square');
var message = document.querySelector('#message');
var h1 = document.getElementsByTagName('h1')[0];
var resetButton = document.querySelector('#reset');
var levels = document.getElementsByClassName('level');
var correct = false;

init();

colorDisplay.textContent = pickedColor;

function init() {
    setupButtonEvent();
    setupSquareEvent();
    
    resetButton.addEventListener('click', function() {
        reset();
    });
    
    reset();
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

function setupButtonEvent() {
    for(var n = 0; n < levels.length; n++) {
        levels[n].addEventListener('click', function() {
            for(var i = 0; i < levels.length; i++) {
                levels[i].classList.remove('selected');
                this.classList.add('selected');
            }
            this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
        levels[1].classList.add('selected');
    }
}

function setupSquareEvent() {
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
}

function reset() {
    h1.style.backgroundColor = 'steelblue';
    resetButton.textContent = 'New Color';
    message.textContent = '';
    correct = false;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var n = 0; n < squares.length; n++) {
        if(colors[n]) {
            squares[n].style.backgroundColor = colors[n];
            squares[n].style.display = 'block';
        } else {
            squares[n].style.display = 'none';
        }
    }
}