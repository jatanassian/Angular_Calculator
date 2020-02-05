import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equal',
  templateUrl: './equal.component.html',
  styleUrls: ['./equal.component.css']
})
export class EqualComponent implements OnInit {
  @Input() value: any;

  constructor() { }

  ngOnInit() {
  }

}
