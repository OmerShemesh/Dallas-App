import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { ClusterComponent } from './cluster.component';
import { ClusterRoutingModule } from './cluster.routing';

@NgModule({
  imports: [
    SharedModule,
    ClusterRoutingModule
  ],
  declarations: [
    ClusterComponent,
  ],
})
export class ClusterModule { }
