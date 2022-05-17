import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./pages/Main/main.component";
import { EcoMarketComponent } from "./pages/EcoMarket/EcoMarket.component";
import { FooterComponent } from "./components/footer/footer.component.";
import { ProfilComponent } from './pages/Profil/ProfilPage.component';
import { MapPageComponent } from './pages/MapPage/MapPage.component';
import { HistoryCardComponent } from './components/cards/history-card/history-card.component';
import { UserpromoCardComponent } from './components/cards/userPromo-card/userPromo-card.component';


const profileRoutes: Routes = [
  {
    path: 'promocode',
    component: UserpromoCardComponent
  },
  {
    path: 'history',
    component: HistoryCardComponent
  }
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
    children: profileRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
