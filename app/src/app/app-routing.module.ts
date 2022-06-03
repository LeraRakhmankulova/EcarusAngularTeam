import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "@pages/main-page/main.component";
import { EcoMarketComponent } from "@pages/eco-market-page/eco-market.component";
import { MapPageComponent } from '@pages/map-page/map.component';
import { HistoryCardComponent } from '@components/cards/profile-page/history-card/history-card.component';
import { UserpromoCardComponent } from '@components/cards/profile-page/userPromo-card/userPromo-card.component';
import { ProfileComponent } from '@pages/profile-page/profile.component';
import { AuthGuard } from '@guards/auth.guard';
import { FullMapCardComponent } from '@components/cards/map-page/full-map-card/full-map-card.component';

const childrenProfileRoutes: Routes = [
	{ path: 'promocode', component: UserpromoCardComponent },
	{ path: 'history', component: HistoryCardComponent }
]
const childrenMapRoute: Routes = [
	{ path: ':id', component: FullMapCardComponent }
]

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'collection_points',
    component: MapPageComponent,
    children: childrenMapRoute
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
    children: childrenProfileRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
