import './scroll_custom.css'
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DataItems} from '../../stores/productStore'

@Component({
  selector: 'app-eco-market',
  templateUrl: './EcoMarket.component.html',
  styleUrls: ['./EcoMarket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EcoMarketComponent implements OnInit {

  @Input() data_cards: Array<any>;
  @Input() gender: Array<any>;
  @Input() type: Array<any>;
  @Input() brand: Array<any>;
  @Input() allTp: Array<any>;
  @Input() allBr: Array<any>;

  constructor() {
    this.data_cards = DataItems;
    this.gender = [
      {title: "Мужской", checked: false},
      {title: "Женский", checked: false},
    ];
    this.type = [
      {title: "Одежда", checked: false},
      {title: "Обувь", checked: false},
      {title: "Аксессуары", checked: false},
    ];
    this.brand = [
      {title: "H&M", checked: false},
      {title: "P&B", checked: false},
      {title: "Adidas", checked: false},
      {title: "Nike", checked: false},
      {title: "Reebok", checked: false},
      {title: "Puma", checked: false},
    ];
    this.allTp = [
      {title: "Выбрать все", checked: false}
    ];
    this.allBr = [
      {title: "Выбрать все", checked: false}
    ]

  }
  ngOnInit(): void {
  }
}
