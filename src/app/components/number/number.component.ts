import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @Input() value: string;

  @Output() getNumber = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendNumber() {
    this.getNumber.emit(this.value);
  }

}
