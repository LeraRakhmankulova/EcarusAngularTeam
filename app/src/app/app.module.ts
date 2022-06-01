import { NgModule } from '@angular/core';
import { OverlayModule } from "@angular/cdk/overlay";
import { PortalModule } from "@angular/cdk/portal";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from '@services/auth-interceptor.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { UrlInterceptorService } from '@services/url-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { DialogModule } from '@angular/cdk-experimental/dialog';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { HeaderComponent } from "@components/header/header.component";
import { FooterComponent } from "@components/footer/footer.component.";
import { MainComponent } from '@pages/main-page/main.component';
import { BannerCardComponent } from '@components/cards/banner-card/banner-card.component';
import { SwiperCardComponent } from '@components/cards/swiper-card/swiper-card.component';
import { SwiperBannerComponent } from '@components/swiper-banner/swiper-banner.component';
import { EcoMarketComponent } from "@pages/eco-market-page/eco-market.component";
import { PromoCardComponent } from "@components/cards/promo-card/promoCard.component";
import { ModalButtonComponent } from "@components/ui/modal-button/button.component";
import { CheckboxComponent } from "@components/ui/checkbox/checkbox.component";
import { ProductCardComponent } from "@components/cards/product-card/product-card.component";
import { MapComponent } from "@components/map/map.component";
import { MapPageComponent } from "@pages/map-page/map.component";
import { ModalContainerComponent } from "@components/modal/modal-container/modal-container.component";
import { SignModalComponent } from "@components/modal/sign-modal/sign-modal.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputComponent } from "@components/ui/input/input.component";
import { RegisterModalComponent } from "@components/modal/register-modal/register-modal.component";
import { SignCompanyModalComponent } from "@components/modal/sign-company-modal/sign-company-modal.component";
import { RegisterCompanyModalComponent } from "@components/modal/register-company-modal/register-company-modal.component";
import { QRCodeModalComponent } from "@components/modal/qr-code-modal/qr-code-modal.component";
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { MapCardComponent } from '@components/cards/map-card/map-card.component';
import { UserpromoCardComponent } from '@components/cards/userPromo-card/userPromo-card.component';
import {UserCardComponent} from "@components/cards/user-card/user-card.component";
import {ProfileComponent } from '@pages/profile-page/profile.component';
import { MenuComponent } from '@components/modal/menu-modal/menu.component';
import { ServiceComponent } from '@pages/service-page/service.component';
import { FullMapCardComponent } from '@components/cards/full-map-card/full-map-card.component';
import { FiltersComponent } from '@components/modal/filters-modal/filters.component';
import { BottomSheetComponent } from '@components/modal/bottom-sheet/bottom-sheet.component';
import { MaterialsComponent } from '@components/modal/materials-modal/materials.component';
import { RecyclingComponent } from '@components/modal/recycling-modal/recycling.component';
import { SideBarComponent } from '@components/modal/side-bar-modal/side-bar.component';


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
    UserpromoCardComponent,
    HistoryCardComponent,
    MapCardComponent,
    UserCardComponent,
    ProfileComponent,
    MenuComponent,
    ServiceComponent,
    FullMapCardComponent,
    FiltersComponent,
    BottomSheetComponent,
    MaterialsComponent,
    RecyclingComponent,
    SideBarComponent,
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
