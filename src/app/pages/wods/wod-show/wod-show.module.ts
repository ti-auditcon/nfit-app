import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WodShowPageRoutingModule } from './wod-show-routing.module';

import { WodShowPage } from './wod-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WodShowPageRoutingModule
  ],
  declarations: [WodShowPage]
})
export class WodShowPageModule {}
