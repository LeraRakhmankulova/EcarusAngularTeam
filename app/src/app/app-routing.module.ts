import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./pages/main/main.component";
import {EcoMarketComponent} from "./pages/EcoMarket/EcoMarket.component";
import {MapComponent} from "./components/map/Map.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch:'full'
  },
  {
    path:'collection_points',
    component: MapComponent,
    pathMatch:'full'
  },
  {
    path:'eco_market',
    component: EcoMarketComponent,
    pathMatch:'full'
  },
  {
    path:'about_service',
    component: HeaderComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
