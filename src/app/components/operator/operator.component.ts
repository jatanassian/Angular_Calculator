import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
