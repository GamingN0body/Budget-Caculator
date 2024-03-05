
document.addEventListener("DOMContentLoaded", function () {
    //Gobal variables
    let income = 0;
    let totalIncome = document.getElementById("totalIncome");


    document.getElementById('income').addEventListener('change', function (eventData) {


    income = document.getElementById("income");// it dosent keep this value for the other functions

    console.log(income.value)

    })

    document.getElementById('federalTax').addEventListener('change', function (eventData) {
        income= income-federalTax;
        console.log(income.value)
        totalIncome.innerText = `$ ${income.value}`;
    })



});
