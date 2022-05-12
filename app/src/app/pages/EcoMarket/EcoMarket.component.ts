import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DataItems} from '../../mocks/productMock'
import {DialogService} from "../../services/dialog.service";
import {QRCodeModalComponent} from "../../components/modal/qr-code-modal/qr-code-modal.component";

@Component({
  selector: 'app-eco-market',
  templateUrl: './EcoMarket.component.html',
  styleUrls: ['./EcoMarket.component.sass', './scroll_custom.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EcoMarketComponent implements OnInit {

  @Input() data_cards: Array<any>;
  @Input() gender: Array<any>;
  @Input() type: Array<any>;
  @Input() brand: Array<any>;
  @Input() allTp: Array<any>;
  @Input() allBr: Array<any>;

  constructor(private dialog: DialogService) {
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
  openActionDialog() {
    const dialog = this.dialog.openDialog(QRCodeModalComponent, {});
  }
}
