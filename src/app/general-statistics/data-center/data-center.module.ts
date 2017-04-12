import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { DataCenterComponent } from './data-center.component';
import { routing } from './data-center.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DataCenterComponent,
  ],
})
export class DataCenterModule { }
