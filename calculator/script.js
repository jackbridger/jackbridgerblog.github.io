class Calculator {
    constructor() {
        this.mainDisplay = '0';
        this.historyDisplay = null;
        this.firstDigits = null;
        this.operator = null;
        this.SecondDigits = null;
    }

    update_calc() {
        document.getElementsByClassName('display-main')[0].innerHTML = this.mainDisplay;
        document.getElementsByClassName('display-history')[0].innerHTML = this.history;
    }
    append_number(buttonPressed) {
        if (this.mainDisplay === '0'){
            this.mainDisplay = buttonPressed;}
        else if (this.mainDisplay === 'X'|| this.mainDisplay === '-'|| this.mainDisplay === '+'|| this.mainDisplay === '/'){
                this.mainDisplay = buttonPressed;
            }
        else if (buttonPressed === '.' && this.mainDisplay.includes('.')) {
            this.mainDisplay = this.mainDisplay;
        }
            else {
            this.mainDisplay += buttonPressed;
        }
        this.update_calc();
    }
    clear() {
        this.mainDisplay = '0';
        this.update_calc();
    }

    append_operator(buttonPressed) {
        if (buttonPressed === '0'||buttonPressed === 'X'|| buttonPressed === '-'|| buttonPressed === '+'|| buttonPressed === '/'){
            this.mainDisplay = buttonPressed;
            this.update_calc();
        }
        else {
            this.firstDigits = this.mainDisplay;
            this.mainDisplay = buttonPressed;
            this.update_calc();
        }

    }


}

var calculator = new Calculator();

window.onload = calculator.update_calc();

const allNumberBtns = document.querySelectorAll('.btn-number');
allNumberBtns.forEach(btn =>{
    btn.addEventListener('click', () => { 
        calculator.append_number(btn.innerHTML);
        calculator.update_calc();
    });
});


const clearBtn = document.querySelector('.btn-ac');
clearBtn.addEventListener('click', 
    () => {
        calculator.clear();
    }
);

const allOperatorBtns = document.querySelectorAll('.btn-operator');
allOperatorBtns.forEach(btn =>{
    btn.addEventListener('click', () => { 
        calculator.append_operator(btn.innerHTML);
    });
});