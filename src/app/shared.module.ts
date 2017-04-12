import { NgModule } from '@angular/core';

import { DallasMaterialModule } from './dallas-material.module';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatisticsService } from './statistics.service';

@NgModule({
    imports: [
        CommonModule,
        DallasMaterialModule,
        FlexLayoutModule,
        ChartsModule
    ],
    exports: [
        CommonModule,
        DallasMaterialModule,
        FlexLayoutModule,
        ChartsModule
    ],

    providers: [StatisticsService]

})
export class SharedModule { }  