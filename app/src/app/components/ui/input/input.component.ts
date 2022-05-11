import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  // @Input() onChange: string;
  // @Input() onBlur: string;
  // @Input() value: string;

  constructor() {
    this.placeholder = "";
    this.type = "";
    this.name = "";
    // this.onChange="";
    // this.onBlur="";
    // this.value='';
  }

  ngOnInit(): void {
  }

}
