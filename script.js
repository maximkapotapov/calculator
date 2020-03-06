let buttonSum = document.getElementById("buttonSum");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

function onbuttonSumClick() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let sum = number1 + number2;

    alert(sum);
}

function onbuttonMinusClick() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let minus = number1 - number2;

    alert(minus);
}

function onbuttonMultiplyClick() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let multiply = number1 * number2;

    alert(multiply);
}

function onbuttonDevideClick() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    let devide = number1 / number2;

    alert(devide);
}

buttonSum.addEventListener('click', onbuttonSumClick);
buttonMinus.addEventListener('click', onbuttonMinusClick);
buttonMultiply.addEventListener('click', onbuttonMultiplyClick);
buttonDevide.addEventListener('click', onbuttonDevideClick);