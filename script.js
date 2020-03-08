let buttonSum = document.getElementById("buttonSum");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function operation(operationCode){
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    
    if (operationCode === '+') {
        var result = number1 + number2;  
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert("the operation is unknown");
    }
    window.alert(result);
}

function onbuttonOperationClick(eventObject) {
    let clickElement = eventObject.currentTarget;
    let makeOperation = clickElement.innerHTML;
    operation(makeOperation);
}

let buttons = [buttonSum, buttonMinus, buttonMultiply, buttonDevide];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onbuttonOperationClick); 
}