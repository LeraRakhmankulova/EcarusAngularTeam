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
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component.';
import { MainComponent } from '@pages/main-page/main.component';
import { SwiperBannerComponent } from '@components/swiper-banner/swiper-banner.component';
import { ProductCardComponent } from '@components/cards/eco-market-page/product-card/product-card.component';
import { ModalButtonComponent } from '@components/ui/modal-button/button.component';
import { CheckboxComponent } from '@components/ui/checkbox/checkbox.component';
import { EcoMarketComponent } from '@pages/eco-market-page/eco-market.component';
import { ServiceComponent } from '@pages/service-page/service.component';
import { UserCardComponent } from '@components/cards/profile-page/user-card/user-card.component';
import { MapCardComponent } from '@components/cards/map-page/map-card/map-card.component';
import { HistoryCardComponent } from '@components/cards/profile-page/history-card/history-card.component';
import { UserpromoCardComponent } from '@components/cards/profile-page/userPromo-card/userPromo-card.component';
import { InputComponent } from '@components/ui/input/input.component';
import { QRCodeModalComponent } from '@components/modal/modal-content/qr-code-modal/qr-code-modal.component';
import { SignCompanyModalComponent } from '@components/modal/modal-content/sign-company-modal/sign-company-modal.component';
import { RegisterCompanyModalComponent } from '@components/modal/modal-content/register-company-modal/register-company-modal.component';
import { SignModalComponent } from '@components/modal/modal-content/sign-modal/sign-modal.component';
import { RegisterModalComponent } from '@components/modal/modal-content/register-modal/register-modal.component';
import { ModalContainerComponent } from '@components/modal/modal-containers/modal-container/modal-container.component';
import { MapPageComponent } from '@pages/map-page/map.component';
import { ProfileComponent } from '@pages/profile-page/profile.component';
import { MenuComponent } from '@components/modal/modal-content/menu-modal/menu.component';
import { FullMapCardComponent } from '@components/cards/map-page/full-map-card/full-map-card.component';
import { FiltersComponent } from '@components/modal/modal-content/filters-modal/filters.component';
import { BottomSheetComponent } from '@components/modal/modal-containers/bottom-sheet/bottom-sheet.component';
import { MaterialsComponent } from '@components/modal/modal-content/materials-modal/materials.component';
import { SideBarComponent } from '@components/modal/modal-containers/side-bar-modal/side-bar.component';
import { RecyclingComponent } from '@components/modal/modal-content/recycling-modal/recycling.component';
import { BannerCardComponent } from '@components/cards/main-page/banner-card/banner-card.component';
import { SwiperCardComponent } from '@components/cards/main-page/swiper-card/swiper-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from '@components/map/map.component';
import { PromoCardComponent } from '@components/cards/eco-market-page/promo-card/promoCard.component';
import { SkeletonLoaderModule } from '@components/skeleton-loader/skeleton-loader.module';

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
    ToastContainerModule,
    SkeletonLoaderModule
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
