import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxSelectPage } from './box-select.page';

const routes: Routes = [
  {
    path: '',
    component: BoxSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxSelectPageRoutingModule {}
