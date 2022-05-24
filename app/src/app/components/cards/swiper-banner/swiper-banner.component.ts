import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper-banner.component.html',
  styleUrls: ['./swiper-banner.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class SwiperBannerComponent {
  config: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
		navigation: true,
		loop: true,
		autoplay: true,
	}
}