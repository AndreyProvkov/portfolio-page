export default class Calculator {
    inputDisplay = document.querySelector('.calculator__history');
    outputDisplay = document.querySelector('.calculator__result');
    allClearButton = document.querySelector("[data-all-clear]");
    backspaceButton = document.querySelector("[data-backspace]");
    percentButton = document.querySelector("[data-percent]");
    operationButtons = document.querySelectorAll("[data-operator]");
    numberButtons = document.querySelectorAll("[data-number]");
    negationButton = document.querySelector("[data-negation]");
    decimalButton = document.querySelector("[data-decimal]");
    equalsButton = document.querySelector("[data-equals]");

    inputHistory = [];

    clearAllHistory() {
        this.inputHistory = [];
        this.updateInputDisplay();
        this.updateOutputDisplay('0');
    }

    backspace() {
        switch (this.getLastInputType()) {
            case 'number':
                if (this.getLastInputValue().length > 1) {
                    this.editLastInput(this.getLastInputValue().slice(0, -1), 'number');
                } else {
                    this.deleteLastInput();
                }
                break;
            case 'operator':
                this.deleteLastInput();
                break;
            default:
                return;
        }
    }

    changePercentToDecimal() {
        if (this.getLastInputType() === 'number') {
            this.editLastInput(this.getLastInputValue() / 100, 'number');
        }
    }

    insertNumber(value) {
        if (this.getLastInputType() === 'number') {
            this.appendToLastInput(value);
        } else if (this.getLastInputType() === 'operator' || this.getLastInputType() === null) {
            this.addNewInput(value, 'number');
        }
    }

    insertOperation(value) {
        switch (this.getLastInputType()) {
            case 'number':
                this.addNewInput(value, 'operator');
                break;
            case 'operator':
                this.editLastInput(value, 'operator');
                break;
            case 'equals':
                let output = this.getOutputValue();
                this.clearAllHistory();
                this.addNewInput(output, 'number');
                this.addNewInput(value, 'operator');
                break;
            default:
                return;
        }
    }

    negateNumber() {
        if (this.getLastInputType() === 'number') {
            this.editLastInput(parseFloat(this.getLastInputValue()) * -1, 'number');
        }
    }

    insertDecimalPoint() {
        if (this.getLastInputType() === 'number' && !this.getLastInputValue().includes('.')) {
            this.appendToLastInput('.');
        } else if (this.getLastInputType() === 'operator' || this.getLastInputType() === null) {
            this.addNewInput('0.', 'number');
        }
    }

    generateResult() {
        if (this.getLastInputType() === 'number') {
            const self = this;
            const simplifyExpression = function (currentExpression, operator) {
                if (currentExpression.findIndex(token => operator.includes(token)) === -1) {
                    return currentExpression;
                } else {
                    let operatorIdx = currentExpression.findIndex(token => operator.includes(token));
                    let leftOperandIdx = operatorIdx - 1;
                    let rightOperandIdx = operatorIdx + 1;
                    
                    let partialSolution = self.performOperation(...currentExpression.slice(leftOperandIdx, rightOperandIdx + 1));
                    console.log(partialSolution);
                    console.log('sss')
                    console.log(currentExpression);
                    currentExpression.splice(leftOperandIdx, 3, partialSolution.toString());
                    console.log(currentExpression)
                    return simplifyExpression(currentExpression, operator);
                }
            }

            let result = [['x', '/'], ['-', '+']].reduce(simplifyExpression, this.getAllInputValues());

            this.addNewInput('=', 'equals');
            this.updateOutputDisplay(result.toString());
        }
    }

    getLastInputType() {
        return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].type;
    }

    getLastInputValue() {
        return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].value;
    }

    getAllInputValues() {
        return this.inputHistory.map(entry => entry.value);
    }

    getOutputValue() {
        return this.outputDisplay.value;
    }

    addNewInput(value, type) {
        this.inputHistory.push({'type': type, 'value': value.toString()});
        this.updateInputDisplay();
    }

    appendToLastInput(value) {
        this.inputHistory[this.inputHistory.length - 1].value += value.toString();
        this.updateInputDisplay();
    }

    editLastInput(value, type) {
        this.inputHistory.pop();
        this.addNewInput(value, type);
    }

    deleteLastInput() {
        this.inputHistory.pop();
        this.updateInputDisplay();
    }

    updateInputDisplay() {
        this.inputDisplay.value = this.getAllInputValues().join('');
    }

    updateOutputDisplay(value) {
        this.outputDisplay.value = value;
    }

    performOperation(leftOperand, operation, rightOperand) {
        leftOperand = parseFloat(leftOperand);
        rightOperand = parseFloat(rightOperand);

        if (Number.isNaN(leftOperand) || Number.isNaN(rightOperand)) {
            return;
        }

        switch (operation) {
            case 'x':
                return leftOperand * rightOperand;
            case '/':
                return leftOperand / rightOperand;
            case '-':
                return leftOperand - rightOperand;
            case '+':
                return leftOperand + rightOperand;
            default:
                return; 
        }
    }

    init() {
        this.allClearButton.addEventListener('click', () => {
            this.clearAllHistory();
        });
        
        this.backspaceButton.addEventListener('click', () => {
            this.backspace();
        });
        
        this.percentButton.addEventListener('click', () => {
            this.changePercentToDecimal();
        });
        
        this.operationButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                let {target} = e;
                this.insertOperation(target.dataset.operator);
            });
        });
        
        this.numberButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                let {target} = e;
                this.insertNumber(target.dataset.number);
            });
        });
        
        this.negationButton.addEventListener('click', () => {
            this.negateNumber();
        });
        
        this.decimalButton.addEventListener('click', () => {
            this.insertDecimalPoint();
        });
        
        this.equalsButton.addEventListener('click', () => {
            this.generateResult();
        });
    }
}