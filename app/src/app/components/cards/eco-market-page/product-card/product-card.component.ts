import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {

  @Input() price: string;
  @Input() brand: string;
  @Input() name: string;
  @Input() category: string;
  @Input() picture: string;

  constructor() {
    this.price = "";
    this.brand = "";
    this.name = "";
    this.category = "";
    this.picture = "";
  }

}
