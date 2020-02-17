import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-equal',
  templateUrl: './equal.component.html',
  styleUrls: ['./equal.component.scss']
})
export class EqualComponent implements OnInit {
  @Input() value: any;

  @Output() getResult = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  result() {
    this.getResult.emit();
  }

}
