import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-decimal',
  templateUrl: './decimal.component.html',
  styleUrls: ['./decimal.component.scss']
})
export class DecimalComponent implements OnInit {

  @Output() getDecimal = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  sendDecimal() {
    this.getDecimal.emit(".");
  }

}
