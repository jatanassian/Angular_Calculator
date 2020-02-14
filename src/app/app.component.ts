import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  currentNumber = "0"; // What's displayed in the input element
  firstOperand = null; // Value of the first operand of the operation
  operator = null; // Value of the operator
  waitingForSecondNumber = false; // Value indicating if the user has finished typing the first operand and is ready to type the second operand

  getNumber(nb: string) {
    console.log(nb);

    if (this.waitingForSecondNumber) {
      this.currentNumber = nb;
      this.waitingForSecondNumber = false;
    } else {
      this.currentNumber === "0" ? this.currentNumber = nb : this.currentNumber += nb; // Prevents displaying "012" instead of "12"
    }
  }

  getDecimal(d: string) {
    // Adds the decimal symbol only if it's not already there
    if (!this.currentNumber.includes(d)) {
      this.currentNumber += d;
    }
  }

  getOperation(operator: string) {
    console.log(operator);
  }

  doCalculation(operator: string, secondOperand: number) {
    switch(operator) {
      case "+":
        return this.firstOperand += secondOperand;
      case "-":
        return this.firstOperand -= secondOperand;
      case "*":
        return this.firstOperand *= secondOperand;
      case "/":
        return this.firstOperand /= secondOperand;
    }
  }
}
