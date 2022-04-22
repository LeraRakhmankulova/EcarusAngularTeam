import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ModalButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() background: string;
  @Input() width: string;

  constructor() {
    this.text = "";
    this.color = "";
    this.background = "";
    this.width ="";
  }

  ngOnInit(): void {
  }

}
