import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { ClusterComponent } from './cluster.component';
import { routing } from './cluster.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    ClusterComponent,
  ],
})
export class ClusterModule { }
