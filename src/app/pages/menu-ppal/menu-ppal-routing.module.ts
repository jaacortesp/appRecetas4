import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MenuPpalPage } from './menu-ppal.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPpalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPpalPageRoutingModule {}
