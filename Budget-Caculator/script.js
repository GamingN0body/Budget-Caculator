document.addEventListener("DOMContentLoaded", function () {

    function roundHundreth(value) {
        return Number(value.toFixed(2));
    }

    document.body.addEventListener('click', function (eventData) {
        // it work and stuff, add more stuff according to this stuff to make the website better and stuff. code look bad but it work.

        let income = (document.getElementById('income').value) / 12;
        let federalTax = income * 0.12;
        let stateTax = income * 0.07;
        let stateDis = income * .01;
        let socialSecurity = income * 0.062;
        let medicare = income * 0.0145;
        let retirement = income * 0.05;

        let afterTax = roundHundreth(income - (federalTax + stateDis + stateTax + medicare + socialSecurity + retirement));

        let ceditCard = parseFloat(document.getElementById('ceditCard').value) || 0;
        let studentLoan = parseFloat(document.getElementById('studentLoan').value) || 0;
        let debt = parseFloat(document.getElementById('debt').value) || 0;
        let tolls = parseFloat(document.getElementById('tolls').value) || 0;
        let childCare = parseFloat(document.getElementById('childCare').value) || 0;
        let utilities = parseFloat(document.getElementById('utilities').value) || 0;
        let food = parseFloat(document.getElementById('food').value) || 0;
        let clothing = parseFloat(document.getElementById('clothing').value) || 0;
        let gas = parseFloat(document.getElementById('gas').value) || 0;
        let maintenance = parseFloat(document.getElementById('maintenance').value) || 0;
        let healthcare = parseFloat(document.getElementById('healthcare').value) || 0;
        let investments = parseFloat(document.getElementById('investments').value) || 0;
        let pet = parseFloat(document.getElementById('pet').value) || 0;
        let savings = parseFloat(document.getElementById('savings').value) || 0;

        let minus = (savings + pet + investments + healthcare + maintenance + gas + clothing + food + ceditCard + studentLoan + debt + tolls + childCare + utilities) || 0;

        // because you need it to make it a value

        medicare = medicare * income
        retirement = retirement * income
        socialSecurity = socialSecurity * income
        stateTax = stateTax * income;
        stateDis = stateDis * income;
        federalTax = federalTax * income;

        console.log(stateTax);
        console.log(stateDis);
        console.log(federalTax);
        console.log(retirement, medicare, socialSecurity);
        console.log(afterTax);

        totalIncome.innerText = '$' + (roundHundreth(afterTax - minus))
        console.log('$' + (roundHundreth(afterTax - minus)))

    });

    document.getElementById('income').addEventListener('change', function (eventData) {
        console.log(eventData.target.value);
    });
});


