import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promoCard.component.html',
  styleUrls: ['./promoCard.component.sass']
})
export class PromoCardComponent {

  @Input() price: string;

  constructor() {
    this.price ="";
  }
}
