// Area of a Triangle Calculator
'use strict'

// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal);

//Event Function
function calcTotal() {
    //INPUT - Get two numbers
    let b = Number(document.getElementById('num1').value);
    let h = Number(document.getElementById('num2').value);

    console.log(num1);
    console.log(typeof(num1));
    console.log(num2);
    console.log(typeof(num2));

    //PROCESS - sub in numbers into area formula
    let area = (b*h)/2 ;

    //OUTPUT - Display the area
    document.getElementById('result').innerHTML = area;
}