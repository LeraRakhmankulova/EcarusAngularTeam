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
import { DialogModule } from '@angular/cdk-experimental/dialog';
import {EcoMarketComponent} from "./pages/EcoMarket/EcoMarket.component";
import {PromoCardComponent} from "./components/cards/promo-card/PromoCard.component";
import {ModalButtonComponent} from "./components/ui/modal-button/button.component";
import {CheckboxComponent} from "./components/ui/checkbox/checkbox.component";
import {ProductCardComponent} from "./components/cards/product-card/product-card.component";
import {MapComponent} from "./components/map/Map.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapPageComponent} from "./pages/MapPage/MapPage.component";
import {ModalContainerComponent} from "./components/modal/modal-container/modal-container.component";
import {SignModalComponent} from "./components/modal/sign-modal/sign-modal.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayModule} from "@angular/cdk/overlay";
import {PortalModule} from "@angular/cdk/portal";
import {InputComponent} from "./components/ui/input/input.component";
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
    MapPageComponent,
    ModalContainerComponent,
    SignModalComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule],
    LeafletModule,
    DialogModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
