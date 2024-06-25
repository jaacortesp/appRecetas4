import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpoonacularPageRoutingModule } from './spoonacular-routing.module';
import { SpoonacularPage } from './spoonacular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpoonacularPageRoutingModule
  ],
  declarations: [SpoonacularPage]
})
export class SpoonacularPageModule {}
