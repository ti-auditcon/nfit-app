import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseIndexPage } from './clase-index.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseIndexPageRoutingModule {}
