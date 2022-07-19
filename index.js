const containerDisplay = document.getElementById('container-display');
const numberDisplay = document.getElementById('number-display');
const operatorDisplay = document.getElementById('operator-display');

const clearButton = document.getElementById('clear-button');
const eraseButton = document.getElementById('erase-button');
const equalButton = document.getElementById('equal-button');

const addButton = document.getElementById('add-button');
const minusButton = document.getElementById('minus-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

const decimalButton = document.getElementById('decimal-button');

const zeroButton = document.getElementById('zero-button');
const oneButton = document.getElementById('one-button');
const twoButton = document.getElementById('two-button');
const threeButton = document.getElementById('three-button');

const fourButton = document.getElementById('four-button');
const fiveButton = document.getElementById('five-button');
const sixButton = document.getElementById('six-button');

const sevenButton = document.getElementById('seven-button');
const eightButton = document.getElementById('eight-button');
const nineButton = document.getElementById('nine-button');

zeroButton.onclick = function(){
    
    setter(0);
}
oneButton.onclick = function(){
    setter(1);
}
twoButton.onclick = function(){
    setter(2);
}
threeButton.onclick = function(){
    setter(3);
}
fourButton.onclick = function(){
    setter(4);
}
fiveButton.onclick = function(){
    setter(5);
}
sixButton.onclick = function(){
    setter(6);
}
sevenButton.onclick = function(){
    setter(7);
}
eightButton.onclick = function(){
    setter(8);
}
nineButton.onclick = function(){
    setter(9);
}

function setter(num){
    if(numberDisplay.textContent.length <= 23){
        numberDisplay.textContent = numberDisplay.textContent + num;
    }
}
addButton.onclick = function(){
    operatorSetter('+');
}
minusButton.onclick = function(){
    operatorSetter('-');
}
multiplyButton.onclick = function(){
    operatorSetter('x');
}
divideButton.onclick = function(){
    operatorSetter('/');
}
function operatorSetter(operator){
    operatorDisplay.textContent = operator;
}
clearButton.onclick = function(){
    numberDisplay.textContent = '';
    operatorDisplay.textContent = '';
    containerDisplay.textContent = '';
}

eraseButton.onclick = function(){
    numberDisplay.textContent = numberDisplay.textContent.slice(0, -1);
}

