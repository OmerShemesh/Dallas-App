import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { DataCenterComponent } from './data-center.component';
import { DataCenterRoutingModule } from './data-center.routing';

@NgModule({
  imports: [
    SharedModule,
    DataCenterRoutingModule
  ],
  declarations: [
    DataCenterComponent,
  ],
})
export class DataCenterModule { }
