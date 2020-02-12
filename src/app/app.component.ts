import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  currentNumber = 0; // What's displayed in the input element
  firstOperand = null; // Value of the first operand of the operation
  operator = null; // Value of the operator
  waitingForSecondNumber = false; // Value indicating if the user has finished typing the first operand and is ready to type the second operand

  getNumber(nb: number) {
    console.log(nb);

    if (this.waitingForSecondNumber) {
      this.currentNumber = nb;
      this.waitingForSecondNumber = false;
    } else {
      this.currentNumber += nb;
    }
  }
}
