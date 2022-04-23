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
  @Input() data: Array<any>;

  constructor() {
    this.data = DataItems;
  }

  ngOnInit(): void {
  }

}
