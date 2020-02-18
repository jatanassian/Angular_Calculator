import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent implements OnInit {
  @Input() value: string;
  @Output() getOperation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendOperator() {
    this.getOperation.emit(this.value);
  }

}
