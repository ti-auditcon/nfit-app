import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseIndexPageRoutingModule } from './clase-index-routing.module';

import { ClaseIndexPage } from './clase-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseIndexPageRoutingModule
  ],
  declarations: [ClaseIndexPage]
})
export class ClaseIndexPageModule {}
