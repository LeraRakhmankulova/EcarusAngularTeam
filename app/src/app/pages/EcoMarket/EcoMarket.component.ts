import './scroll_custom.css'
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-eco-market',
  templateUrl: './EcoMarket.component.html',
  styleUrls: ['./EcoMarket.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EcoMarketComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
