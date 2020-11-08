class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = ''
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) { 
        if (this.currentOperand === '') return
        // multi 
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let result
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                result = previous + current
                break
            case '-':
                result = previous - current
                break
            case '*':
                result = previous * current
                break
            case '÷':
                result = previous / current
                break
            default:
                return
        }
        this.currentOperand = result
        this.operation = undefined
        this.previousOperand = ''
    }

    chooseSingleOperation(operation) {
        let x = null
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') return
        this.operation = operation
        x = this.computeSingleOperation()
    }

    computeSingleOperation() {
        let result
        const current = parseFloat(this.currentOperand)
        if (isNaN(current)) return
        switch (this.operation) {
            case 'sin':
                result = Math.sin(current)
                break
            case 'cos':
                result = Math.cos(current)
                break
            case 'tan':
                result = Math.tan(current)
                break
            case 'cot':
                result = 1/Math.tan(current)
                break
            case 'sqrt':
                result = Math.sqrt(current)
                break
            case 'sqr':
                result = Math.pow(current,2)
                break
            default:
                return
        }
        this.previousOperand = current
        this.currentOperand = result

        return result
    }

    update() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if (listOfSingleButtonsId.includes(this.operation)){
            this.previousOperandTextElement.innerText = `${this.operation}(${this.previousOperand})`
        }
        else if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const operationSingleButtons = document.querySelectorAll('[data-single-operation]')

const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const menuButton = document.querySelector('[data-menu]')

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calc = new Calculator(previousOperandTextElement, currentOperandTextElement)

const listOfSingleButtonsId = [].slice.call(operationSingleButtons).map(function(e) { return e.id; })

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.update()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText)
        calc.update()
    })
})

operationSingleButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseSingleOperation(button.id)
        calc.update()
    })
})

equalsButton.addEventListener('click', () => {
    calc.compute()
    calc.update()
})

clearButton.addEventListener('click', () => {
    calc.clear()
    calc.update()
})

deleteButton.addEventListener('click', () => {
    calc.delete()
    calc.update()
})

$('#menu').click(function() {
    var text = jQuery(this).text();
    if (text === '<<') {
        $('.calculator-grid').css({
            'display': 'grid',
            'justify-content': 'center',
            'align-content': 'center',
            'min-height': '100vh',
            'grid-template-columns': 'repeat(5, 100px)',
            'grid-template-rows': 'minmax(100px, auto) repeat(5, 100px)'
        });
        $('.span-column').css({
            'grid-column': '5',
            'grid-row-start': '2',
            'grid-row-end': '7'
        });
        $('#sin').css({
            'display': 'none'
        });
        $('#cos').css({
            'display': 'none'
        });
        $('#tan').css({
            'display': 'none'
        });
        $('#tan').css({
            'display': 'none'
        });
        $('#cot').css({
            'display': 'none'
        });
        $('#sqr').css({
            'display': 'none'
        });
        $('#sqrt').css({
            'display': 'none'
        });
        $('#pi').css({
            'display': 'none'
        });
        $('.output').css({
            'grid-column': '1 / -2',
            'background-color':  'rgba(3, 2, 2, 0.705)',
            'display': 'flex',
            'align-items': 'flex-end',
            'justify-content': 'space-around',
            'flex-direction': 'column'
        });
        $(this).html('>>')
    } else {
        $('.calculator-grid').css({
            'display': 'grid',
            'justify-content': 'center',
            'align-content': 'center',
            'min-height': '100vh',
            'grid-template-columns': 'repeat(6, 100px)',
            'grid-template-rows': 'minmax(100px, auto) repeat(6, 100px)'
        });
        $('#sin').css({
            'display': 'block'
        });
        $('#cos').css({
            'display': 'block'
        });
        $('#tan').css({
            'display': 'block'
        });
        $('#tan').css({
            'display': 'block'
        });
        $('#cot').css({
            'display': 'block'
        });
        $('#sqr').css({
            'display': 'block'
        });
        $('#sqrt').css({
            'display': 'block'
        });
        $('#pi').css({
            'display': 'block'
        });
        $('.span-column').css({
            'grid-column': '6',
            'grid-row-start': '4',
            'grid-row-end': '7'
        });
        $('.output').css({
            'grid-column': '1 / -3',
            'background-color':  'rgba(3, 2, 2, 0.705)',
            'display': 'flex',
            'align-items': 'flex-end',
            'justify-content': 'space-around',
            'flex-direction': 'column'
        });
        $(this).html('<<')
    }
});
