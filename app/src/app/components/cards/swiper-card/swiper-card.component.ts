import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiperCard',
  templateUrl: './swiper-card.component.html',
  styleUrls: ['./swiper-card.component.scss']
})
export class SwiperCardComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() btnText: string;
  @Input() background: string;
  @Input() image: string;

  constructor() {
    this.title = "";
    this.text = "";
    this.btnText = "";
    this.background ="";
    this.image = "";
  }

  ngOnInit(): void {
  }

}
