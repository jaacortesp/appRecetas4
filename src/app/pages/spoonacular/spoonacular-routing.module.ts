import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpoonacularPage } from './spoonacular.page';

const routes: Routes = [
  {
    path: '',
    component: SpoonacularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpoonacularPageRoutingModule {}
