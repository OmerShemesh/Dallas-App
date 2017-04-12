import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { HostComponent } from './host.component';
import { routing } from './host.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    HostComponent,
  ],
})
export class HostModule { }
