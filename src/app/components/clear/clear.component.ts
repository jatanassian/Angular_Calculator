import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clear',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.css']
})
export class ClearComponent implements OnInit {
  @Output() clear = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendClear() {
    this.clear.emit();
  }

}
