var colors = ['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)',
              'rgb(0, 255, 255)', 'rgb(0, 0, 255)', 'rgb(255, 0, 144)'];

var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');
var squares = document.getElementsByClassName('square');

colorDisplay.textContent = pickedColor;

for(var n = 0; n < squares.length; n++) {
    squares[n].style.backgroundColor = colors[n];
    squares[n].addEventListener('click', function(){
        if(this.style.backgroundColor == colorDisplay.textContent) {
            alert('Correct');
        } else {
            alert('Wrong');
        }
    });
}

