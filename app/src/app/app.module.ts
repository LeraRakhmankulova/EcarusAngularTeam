import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component.";
import { MainComponent } from './pages/Main/main.component';
import { BannerCardComponent } from './components/cards/banner-card/banner-card.component';
import { SwiperCardComponent } from './components/cards/swiper-card/swiper-card.component';
import { SwiperBannerComponent } from './components/swiper-banner/swiper-banner.component';
import { SwiperModule } from 'swiper/angular';
import {EcoMarketComponent} from "./pages/EcoMarket/EcoMarket.component";
import {PromoCardComponent} from "./components/cards/promo-card/PromoCard.component";
import {ModalButtonComponent} from "./ui/modal-button/button.component";
import {CheckboxComponent} from "./ui/checkbox/checkbox.component";
import {ProductCardComponent} from "./components/cards/product-card/product-card.component";
import {MapComponent} from "./components/map/Map.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapPageComponent} from "./pages/MapPage/MapPage.component";
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
    ProductCardComponent,
    ModalButtonComponent,
    CheckboxComponent,
    EcoMarketComponent,
    MapComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule],
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
