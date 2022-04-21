import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Navigation, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper-banner.component.html',
  styleUrls: ['./swiper-banner.component.scss']
})
export class SwiperBannerComponent implements OnInit {

  config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
	};
  constructor() { }

  ngOnInit(): void {
  }

}