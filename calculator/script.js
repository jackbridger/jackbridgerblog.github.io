class Calculator {
    constructor() {
        this.mainDisplay = '0';
    }

    update_calc() {
        document.getElementsByClassName('display-main')[0].innerHTML = this.mainDisplay;
    }



}

var calculator = new Calculator();

window.onload = calculator.update_calc();