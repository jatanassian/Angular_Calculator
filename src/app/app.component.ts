import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  currentNumber = 0;
  firstOperand = null;
  operator = null;
  waitingForSecondNumber = false;

}
