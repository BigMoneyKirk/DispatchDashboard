import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SelectAVendorPageComponent } from './components/pages/select-a-vendor-page/select-a-vendor-page.component';
import { AppRoutingConstants } from './constants/app-routing-constants';


const routes: Routes = [
  {
    path: AppRoutingConstants.Home,
    component: HomeComponent
  },
  {
    path: AppRoutingConstants.SelectAVendor,
    component: SelectAVendorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
