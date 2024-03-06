
document.addEventListener("DOMContentLoaded", function () {


    document.getElementById('income').addEventListener('change', function (eventData) {
// it work and stuff, add more stuff according to this stuff to make the website better and stuff. code look bad but it work.
    
let federalTax = 0.1175;

    let income = document.getElementById('income').value;

    federalTax = federalTax*income;
    console.log(federalTax)
    loannum.innerText = federalTax;

    })





});


