import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NumberComponent } from './components/number/number.component';
import { OperatorComponent } from './components/operator/operator.component';
import { EqualComponent } from './components/equal/equal.component';
import { DecimalComponent } from './components/decimal/decimal.component';
import { ClearComponent } from './components/clear/clear.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumberComponent,
    OperatorComponent,
    EqualComponent,
    DecimalComponent,
    ClearComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
