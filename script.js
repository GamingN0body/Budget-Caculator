
document.addEventListener("DOMContentLoaded", function () {


    document.getElementById('income').addEventListener('change', function (eventData) {
// it work and stuff, add more stuff according to this stuff to make the website better and stuff. code look bad but it work.
    
let federalTax = 0.1175;
let stateTax = 0.075;
let stateDis = .01;
let afterTax = 0;
    let income = document.getElementById('income').value;
    let credit = document.getElementById('creditCard').value;
    stateTax = stateTax*income;
    stateDis = stateDis*income;
    federalTax = federalTax*income;
    console.log(federalTax);
    console.log(stateTax);
    console.log(stateDis);
    loannum.innerText = federalTax + stateTax + stateDis;


    credit = credit-loannum.innerText;


});


});


