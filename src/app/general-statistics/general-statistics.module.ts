import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';

import { GeneralStatisticsComponent } from './general-statistics.component';
import { GeneralStatisticsRoutingModule } from './general-statistics.routing';

import { SetupModule } from './setup/setup.module';
import { DataCenterModule } from './data-center/data-center.module';
import { ClusterModule } from './cluster/cluster.module';
import { HostModule } from './host/host.module';
import { VirtualMachineModule } from './virtual-machine/virtual-machine.module';
import { StorageModule } from './storage/storage.module';


@NgModule({
  imports: [
    SharedModule,
    GeneralStatisticsRoutingModule,
    SetupModule,
    DataCenterModule,
    ClusterModule,
    HostModule,
    VirtualMachineModule,
    StorageModule
  ],
  declarations: [
    GeneralStatisticsComponent,
  ],
})
export class GeneralStatisticsModule { }
