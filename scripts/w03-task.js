/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
// Event listener for adding numbers
document.querySelector('#addNumbers').addEventListener('click', function() {
    let addNumber1 = parseFloat(document.querySelector('#add1').value);
    let addNumber2 = parseFloat(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
});

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};
// Event listener for subtracting numbers
document.querySelector('#subtractNumbers').addEventListener('click', function() {
    let subtractNumber1 = parseFloat(document.querySelector('#subtract1').value);
    let subtractNumber2 = parseFloat(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
});

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
// Event listener for multiplying numbers
document.querySelector('#multiplyNumbers').addEventListener('click', () => {
    let multiplyNumber1 = parseFloat(document.querySelector('#factor1').value);
    let multiplyNumber2 = parseFloat(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
});

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}
// Event listener for dividing numbers
document.querySelector('#divideNumbers').addEventListener('click', function() {
    let divideNumber1 = parseFloat(document.querySelector('#dividend').value);
    let divideNumber2 = parseFloat(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
});

/* Decision Structure */
// Event listener for calculating total with discount
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let applyDiscount = document.querySelector('#member').checked;

    if (applyDiscount) {
        subtotal *= 0.8; // Apply 20% discount
    }

    document.querySelector('#total').textContent = `Total Due: $${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);

