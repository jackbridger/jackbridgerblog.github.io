class Calculator {
    constructor() {
        this.mainDisplay = '0';
    }

    update_calc() {
        document.getElementsByClassName('display-main')[0].innerHTML = this.mainDisplay;
    }
    append_number(buttonPressed) {
        if (this.mainDisplay === '0'){
            this.mainDisplay = buttonPressed;}
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