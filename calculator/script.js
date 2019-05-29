class Calculator {
    constructor() {
        this.mainDisplay = '0';
        this.historyDisplay = '';
        this.justReturned = false;
    }
    update_calc() {
        document.getElementsByClassName('display-main')[0].innerHTML = this.mainDisplay;
        document.getElementsByClassName('display-history')[0].innerHTML = this.historyDisplay;
    }
    append_number(buttonPressed) {
        if (this.mainDisplay === '0'){
            this.historyDisplay = buttonPressed;
            this.mainDisplay = buttonPressed;
        }
        else if (this.mainDisplay === '-' && !this.justReturned) {
            this.mainDisplay += buttonPressed;
        }
        else if (this.mainDisplay === '×'|| this.mainDisplay === '+'|| this.mainDisplay === '÷'){
            this.historyDisplay = this.historyDisplay + ' ' + this.mainDisplay + ' ' + buttonPressed;    
            this.mainDisplay = buttonPressed;
            }
        else if (buttonPressed === '.' && this.mainDisplay.includes('.')) {
            this.mainDisplay = this.mainDisplay;
        }
        else if (this.justReturned === true && this.mainDisplay.includes('-')) {
            this.mainDisplay += buttonPressed;
            this.historyDisplay += this.mainDisplay;
            this.justReturned = false;
        }
        else {
            this.historyDisplay += buttonPressed; 
            this.mainDisplay += buttonPressed;
        }
        this.update_calc();
    }
    clear() {
        this.historyDisplay = '';
        this.mainDisplay = '0';
        this.update_calc();
    }
    append_operator(buttonPressed) {
        if ((buttonPressed === '0'||buttonPressed === '×'|| buttonPressed === '-'|| buttonPressed === '+'|| buttonPressed === '÷') && (this.historyDisplay.includes('+') || this.historyDisplay.includes('-')  || this.historyDisplay.includes('×')  || this.historyDisplay.includes('÷')   )) {
            this.equals();
            this.mainDisplay = buttonPressed;
            this.update_calc();
        }
        else if (buttonPressed === '0'||buttonPressed === '×'|| buttonPressed === '-'|| buttonPressed === '+'|| buttonPressed === '÷'){
            this.mainDisplay = buttonPressed;
            this.update_calc();
        }
        else {
            this.firstDigits = this.mainDisplay;
            this.mainDisplay = buttonPressed;
            this.update_calc();
        }

    }
    equals() {
        if (this.historyDisplay === '') {
            return;}
        
        var toBeCalculated = this.historyDisplay;
        toBeCalculated = toBeCalculated.replace('×','*');
        toBeCalculated = toBeCalculated.replace('÷','/');
        var return_val = eval(toBeCalculated);
        this.mainDisplay = return_val;
        this.historyDisplay = return_val;
        this.justReturned = true;
        this.update_calc();
    }
}

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

const equalsBtn = document.querySelector('.btn-equals');
equalsBtn.addEventListener('click', 
    () => {
        calculator.equals()
    }
);

var calculator = new Calculator();
window.onload = calculator.update_calc();