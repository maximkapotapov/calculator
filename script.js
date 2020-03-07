let buttonSum = document.getElementById("buttonSum");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return Number(input2.value);
}

function operation(operationCode){
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();  
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert("the operation is unknown");
    }
    window.alert(result);
}

function onbuttonSumClick() {
    operation('+');
}

function onbuttonMinusClick() {
    operation('-');
}

function onbuttonMultiplyClick() {
    operation('*');
}

function onbuttonDevideClick() {
    operation('/');
}

buttonSum.addEventListener('click', onbuttonSumClick);
buttonMinus.addEventListener('click', onbuttonMinusClick);
buttonMultiply.addEventListener('click', onbuttonMultiplyClick);
buttonDevide.addEventListener('click', onbuttonDevideClick);