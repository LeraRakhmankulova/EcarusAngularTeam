import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './PromoCard.component.html',
  styleUrls: ['./PromoCard.component.sass']
})
export class PromoCardComponent {

  @Input() price: string;

  constructor() {
    this.price ="";
  }

}
