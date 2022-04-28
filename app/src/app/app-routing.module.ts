import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/Main/main.component";
import {EcoMarketComponent} from "./pages/EcoMarket/EcoMarket.component";
import {MapComponent} from "./components/map/Map.component";
import {FooterComponent} from "./components/footer/footer.component.";

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
    component: FooterComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
