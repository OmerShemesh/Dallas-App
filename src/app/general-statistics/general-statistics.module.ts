import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';

import { GeneralStatisticsComponent } from './general-statistics.component';
import { GeneralStatisticsRoutingModule } from './general-statistics.routing';



@NgModule({
  imports: [
    SharedModule,
    GeneralStatisticsRoutingModule,
  ],
  declarations: [
    GeneralStatisticsComponent,
  ],
})
export class GeneralStatisticsModule { }
