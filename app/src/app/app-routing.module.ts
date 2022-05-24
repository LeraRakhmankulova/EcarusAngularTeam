import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "@pages/main/main.component";
import { EcoMarketComponent } from "@pages/ecoMarket/ecoMarket.component";
import { FooterComponent } from "@components/footer/footer.component.";
import { MapPageComponent } from '@pages/mapPage/mapPage.component';
import { HistoryCardComponent } from '@components/cards/history-card/history-card.component';
import { UserpromoCardComponent } from '@components/cards/userPromo-card/userPromo-card.component';
import { ProfilComponent } from '@pages/profil/ProfilPage.component';
import { AuthGuard } from '@guards/auth.guard';



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
    component: FooterComponent,
    pathMatch: 'full'
  },
  {
    path: 'profil',
    component: ProfilComponent,
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
