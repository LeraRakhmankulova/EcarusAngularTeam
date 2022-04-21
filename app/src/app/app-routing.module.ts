import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch:'full'
  },
  {
    path:'collection_points',
    component: HeaderComponent,
    pathMatch:'full'
  },
  {
    path:'eco_market',
    component: HeaderComponent,
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
