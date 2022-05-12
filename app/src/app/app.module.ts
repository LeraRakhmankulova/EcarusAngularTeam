import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { UrlInterceptorService } from './services/url-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
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
import {RegisterModalComponent} from "./components/modal/register-modal/register-modal.component";
import {SignCompanyModalComponent} from "./components/modal/sign-company-modal/sign-company-modal.component";
import {RegisterCompanyModalComponent} from "./components/modal/register-company-modal/register-company-modal.component";
import {QRCodeModalComponent} from "./components/modal/qr-code-modal/qr-code-modal.component";
import { ProfilComponent } from './pages/Profil/ProfilPage.component';
import { UserpromoCardComponent } from './components/cards/userPromo-card/userpromo-card.component';
import { HistoryCardComponent } from './components/cards/history-card/history-card.component';


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
    RegisterModalComponent,
    SignModalComponent,
    RegisterCompanyModalComponent,
    SignCompanyModalComponent,
    QRCodeModalComponent,
    InputComponent,
    ProfilComponent,
    UserpromoCardComponent,
    HistoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule],
    LeafletModule,
    DialogModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressBar: true,
      positionClass: 'toast-bottom-center'
    }),
    BrowserAnimationsModule,
    ToastContainerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
