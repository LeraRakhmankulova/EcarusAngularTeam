import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "@pages/main-page/main.component";
import { EcoMarketComponent } from "@pages/eco-market-page/eco-market.component";
import { MapPageComponent } from '@pages/map-page/map.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { UserpromoCardComponent } from '@components/cards/userPromo-card/userPromo-card.component';
import { ProfileComponent } from '@pages/profile-page/profile.component';
import { AuthGuard } from '@guards/auth.guard';
import { ServiceComponent } from '@pages/service-page/service';
import { MenuComponent } from '@components/modal/menu-modal/menu.component';



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
    path: 'collection_points',
    component: ServiceComponent,
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: MenuComponent,
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
