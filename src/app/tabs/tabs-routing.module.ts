import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
            {
              path: '',
              loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
            },
            {
              path: 'wods/:id',
              loadChildren: () => import('../pages/wods/wod-show/wod-show.module').then( m => m.WodShowPageModule)
            },
        ]
      },
      {
        path: 'clases',
        children: [
            {
              path: '',
              loadChildren: () => import('../pages/clases/clase-index/clase-index.module').then( m => m.ClaseIndexPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../pages/clases/clase-show/clase-show.module').then( m => m.ClaseShowPageModule)
            },
        ]
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
