import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-calculator';

  currentNumber: string = "0"; // What's displayed in the input element
  firstOperand: number = null; // Value of the first operand of the operation
  operator: string = null; // Value of the operator
  waitingForSecondNumber: boolean = false; // Value indicating if the user has finished typing the first operand and is ready to type the second operand

  getNumber(nb: string) {
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

  divideByHundred() {
    this.currentNumber = String(Number(this.currentNumber)/100);
  }

  oppositeSign() {
    this.currentNumber = String(-this.currentNumber);
  }

  getOperation(operator: string) {
    // Switch the operator. Needs to add that you can change operator as long as there's no second operand
    // if (this.operator !== null) {
    //   this.operator = operator;
    // }
    if (this.operator) {
      this.getResult();
    }

    this.firstOperand = Number(this.currentNumber);
    this.operator = operator;
    this.waitingForSecondNumber = true;
  }

  getResult() {
    // The if statement prevents to trigger an undefined being displayed just by pressing the equal button
    if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
      this.operator = null;
    }
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

  clear() {
    this.currentNumber = "0";
    this.operator = null;
    this.firstOperand = null;
    this.waitingForSecondNumber = false;
  }
}
