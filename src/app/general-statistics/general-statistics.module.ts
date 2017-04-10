import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {routing} from './general-statistics.routing';
import { SharedModule } from '../shared.module';

 
import {
  GeneralStatisticsComponent,
  SetupComponent,
  DataCenterComponent,
  ClusterComponent,
  HostComponent,
  VirtualMachineComponent,
  StorageComponent
} from '.';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule

  ],
  declarations: [
    GeneralStatisticsComponent,
    SetupComponent,
    DataCenterComponent,
    ClusterComponent,
    HostComponent,
    VirtualMachineComponent,
    StorageComponent
  ],
})
export class GeneralStatisticsModule { }
