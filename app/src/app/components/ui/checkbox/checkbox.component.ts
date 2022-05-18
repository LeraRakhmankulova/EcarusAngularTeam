import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent {

  @Input() id: string;
  @Input() label: string;

  constructor() {
    this.id = "";
    this.label = "";
  }
}
