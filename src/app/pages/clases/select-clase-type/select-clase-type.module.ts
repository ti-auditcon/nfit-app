import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectClaseTypePage } from './select-clase-type.page';

const routes: Routes = [
    {
        path: '',
        component: SelectClaseTypePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [SelectClaseTypePage]
})
export class SelectClaseTypePageModule {}
