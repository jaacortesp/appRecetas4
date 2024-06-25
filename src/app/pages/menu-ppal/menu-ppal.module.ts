import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPpalPageRoutingModule } from './menu-ppal-routing.module';

import { MenuPpalPage } from './menu-ppal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPpalPageRoutingModule
  ],
  declarations: [MenuPpalPage]
})
export class MenuPpalPageModule {}
