class Calculator {
    // set the initial display values.
    // just returned is if it just performed a calculation (i.e. equals pressed)
    constructor(mainDisplay, historyDisplay, justReturned) {
        this.mainDisplay = mainDisplay || '0';
        this.historyDisplay = historyDisplay || '';
        this.justReturned = justReturned || false;
    }
    
    // update the view
    update_view(main, history) {
        document.getElementsByClassName('display-main')[0].innerHTML = this.mainDisplay;
        document.getElementsByClassName('display-history')[0].innerHTML = this.historyDisplay;
    }
    // Add numbers (incl. '.') to the display strings
    append_number(buttonPressed) {
        if (this.mainDisplay === '0' && this.historyDisplay === ''){
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
    }
    // clear the display - reset
    clear() {
        this.historyDisplay = '';
        this.mainDisplay = '0';
    }
    // append operators pressed. Why did I include zero? 
    append_operator(buttonPressed) {
        if ((buttonPressed === '×'|| buttonPressed === '-'|| buttonPressed === '+'|| buttonPressed === '÷') && (this.historyDisplay.includes('+') || this.historyDisplay.includes('-')  || this.historyDisplay.includes('×')  || this.historyDisplay.includes('÷')   )) {
            this.equals();
            this.mainDisplay = buttonPressed;
        }
        else if (buttonPressed === '×'|| buttonPressed === '-'|| buttonPressed === '+'|| buttonPressed === '÷'){
            
            this.mainDisplay = buttonPressed;
        }
        else {
            this.firstDigits = this.mainDisplay;
            this.mainDisplay = buttonPressed;
        }

    }
    // evaluate the calc, update the view 
    equals() {
        if (this.historyDisplay === '') {
            return;}
        
        var toBeCalculated = this.historyDisplay;
        toBeCalculated = toBeCalculated.replace('×','*').replace('÷','/');
        var return_val = eval(toBeCalculated);
        return_val = Math.round(return_val * 100000000000)/100000000000;
        return_val = return_val.toString()
        this.mainDisplay = return_val;
        this.historyDisplay = return_val;
        this.justReturned = true;
    }
}

const allNumberBtns = document.querySelectorAll('.btn-number');
allNumberBtns.forEach(btn =>{
    btn.addEventListener('click', () => { 
        calculator.append_number(btn.innerHTML);
        calculator.update_view();
    });
});


const clearBtn = document.querySelector('.btn-ac');
clearBtn.addEventListener('click', 
    () => {
        calculator.clear();
        calculator.update_view();
    }
);

const allOperatorBtns = document.querySelectorAll('.btn-operator');
allOperatorBtns.forEach(btn =>{
    btn.addEventListener('click', () => { 
        calculator.append_operator(btn.innerHTML);
        calculator.update_view();
    });
});

const equalsBtn = document.querySelector('.btn-equals');
equalsBtn.addEventListener('click', 
    () => {
        calculator.equals()
        calculator.update_view();
    }
);

// initiate the calc onload
var calculator = new Calculator();
window.onload = calculator.update_view();