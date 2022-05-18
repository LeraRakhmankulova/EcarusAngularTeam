import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'userPromo-card',
  templateUrl: './userPromo-card.component.html',
  styleUrls: ['./userPromo-card.component.sass']
})
export class UserpromoCardComponent {

  @Input() image: string;
  @Input() button: string;

  constructor() {
    this.image ="";
    this.button ="";
   }

}
