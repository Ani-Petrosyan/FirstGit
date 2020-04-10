let historyCalculator = document.querySelector("#history-value");
let historyNew;
let outputValue = document.querySelector("#answer");
let outputValueNew;
let persent;
let divide;
let multiplay;
let reduce;
let add;
let addRed;
let point;
let equal;
let result;
let NoBackspase = document.querySelector("#NO");
let OffBackspase = document.querySelector("#OFF");
let persentOperator = document.querySelector("#%");
let divideOperator = document.querySelector("#/");
let multiplyOperator = document.querySelector("#*");
let reduceOperator = document.querySelector("#-");
let addOperator = document.querySelector("#+");
let addReduceOperators = document.querySelector("#+/-");
let pointOperator = document.querySelector(".");
let equalOperator = document.querySelector("#=");
let number0 = document.querySelector("#0");
let number1 = document.querySelector("#1");
let number2 = document.querySelector("#2");
let number3 = document.querySelector("#3");
let number4 = document.querySelector("#4");
let number5 = document.querySelector("#5");
let number6 = document.querySelector("#6");
let number7 = document.querySelector("#7");
let number8 = document.querySelector("#8");
let number9 = document.querySelector("#9");


number0.addEventListener("click", function () {
    answer.value += "0";
});

number1.addEventListener("click", function () {
    answer.value += "1";
});

number2.addEventListener("click", function () {
    answer.value += "2";
});

number3.addEventListener("click", function () {
    answer.value += "3";
});

number4.addEventListener("click", function () {
    answer.value += "4";
});

number5.addEventListener("click", function () {
    answer.value += "5";
});

number6.addEventListener("click", function () {
    answer.value += "6";
});

number7.addEventListener("click", function () {
    answer.value += "7";
});

number8.addEventListener("click", function () {
    answer.value += "8";
});

number9.addEventListener("click", function () {
    answer.value += "9";
});

pointOperator.addEventListener("click", function () {
    answer.value += ".";
});

NoBackspase.addEventListener("click", function () {
    answer.value = "";
});

OffBackspase.addEventListener("click", function () {
    answer.value = "";
});

divideOperator.addEventListener("click", function () {
    divide = +answer.value;
    answer.value = "";
    multiplay = null;
    reduce = null;
    add = null;
});

multiplyOperator.addEventListener("click", function () {
    multiplay = +answer.value;
    answer.value = "";
    divide = null;
    reduce = null;
    add = null;
});

reduceOperator.addEventListener("click", function () {
    reduce = +answer.value;
    answer.value = "";
    divide = null;
    multiplay = null;
    add = null;
});

addOperator.addEventListener("click", function () {
    add = +answer.value;
    answer.value = "";
    divide = null;
    multiplay = null;
    reduce = null;
});

//Կիսատ:(





