import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component.";
import { MainComponent } from './pages/main/main.component';
import { BannerCardComponent } from './components/cards/banner-card/banner-card.component';
import { SwiperCardComponent } from './components/cards/swiper-card/swiper-card.component';
import { SwiperBannerComponent } from './components/swiper-banner/swiper-banner.component';
import { SwiperModule } from 'swiper/angular';
import {EcoMarketComponent} from "./pages/EcoMarket/EcoMarket.component";
import 'swiper/css/navigation'
import 'swiper/css'
import {PromoCardComponent} from "./components/cards/promo-card/PromoCard.component";
import {ModalButtonComponent} from "./ui/modal-button/button.component";
import {CheckboxComponent} from "./ui/checkbox/checkbox.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BannerCardComponent,
    SwiperCardComponent,
    SwiperBannerComponent,
    PromoCardComponent,
    ModalButtonComponent,
    CheckboxComponent,
    EcoMarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
