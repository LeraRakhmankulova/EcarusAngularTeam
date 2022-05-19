import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() formName: string;

  constructor() {
    this.placeholder = "";
    this.type = "";
    this.name = "";
    this.formName="";
  }

}
