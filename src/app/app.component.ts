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
  waitingForSecondNumber = false; // Value indicating if the user has finished typing the first operand

  getNumber(nb) {
    console.log(nb);
  }
}
