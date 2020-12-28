const clear_button = document.querySelector(".clear");
const number_button = document.querySelectorAll(".number.standard");
const calculation = document.querySelector(".calculation");
const backspace = document.getElementById("backspace");
const operators = document.querySelectorAll(".command");
const enter = document.getElementById("enter");
var operator_id = null;
var result = 0;
clear_button.addEventListener("click", function() {
    calculation.innerText = "0"
    result = 0;
});
for (let i = 0; i < number_button.length; i++) {
    number_button[i].addEventListener("click", function() {
        if (calculation.innerText === "0") {
            calculation.innerText = number_button[i].innerText;
        }
        else {
            calculation.innerText = calculation.innerText + number_button[i].innerText;
        }
    });
}

backspace.addEventListener("click", function() {
    if (calculation.innerText != "0") {
        calculation.innerText = calculation.innerText.slice(0, calculation.innerText.length-1);
        if (calculation.innerText === "") {
            calculation.innerText = "0";
        }
    }
})

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        if (operator_id) {
            if (operator_id === "add") {
                result += parseInt(calculation.innerText);
            }
            else if (operator_id === "subtract") {
                result -= parseInt(calculation.innerText);
            }
            else if (operator_id === "multiply") {
                result *= parseInt(calculation.innerText);
            }
            else {
                result /= parseInt(calculation.innerText);
            }
        }
        else {
            result = parseInt(calculation.innerText)
        }
        calculation.innerText = "0";
        operator_id = operators[i].id;
    })
}

enter.addEventListener("click", function() {
    if (operator_id) {
        if (operator_id === "add") {
            result += parseInt(calculation.innerText);
        }
        else if (operator_id === "subtract") {
            result -= parseInt(calculation.innerText);
        }
        else if (operator_id === "multiply") {
            result *= parseInt(calculation.innerText);
        }
        else {
            result /= parseInt(calculation.innerText);
        }
        calculation.innerText = result.toString();
        
    }
    
    operator_id = null;

});