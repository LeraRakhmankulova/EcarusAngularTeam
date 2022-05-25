import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "@pages/main-page/main.component";
import { EcoMarketComponent } from "@pages/eco-market-page/eco-market.component";
import { MapPageComponent } from '@pages/map-page/map.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { UserpromoCardComponent } from '@components/cards/userPromo-card/userPromo-card.component';
import { ProfileComponent } from '@pages/profile-page/profile.component';
import { AuthGuard } from '@guards/auth.guard';
import { MenuComponent } from '@components/modal/menu-modal/menu.component';
import { ServiceComponent } from '@pages/service-page/service.component';
import { FullMapCardComponent } from '@components/cards/full-map-card/full-map-card.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'collection_points',
    component: MapPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'eco_market',
    component: EcoMarketComponent,
    pathMatch: 'full'
  },
  {
    path: 'about_service',
    component: FullMapCardComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'promocode',
        component: UserpromoCardComponent
      },
      {
        path: 'history',
        component: HistoryCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
