import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { HostComponent } from './host.component';
import { HostRoutingModule } from './host.routing';

@NgModule({
  imports: [
    SharedModule,
    HostRoutingModule
  ],
  declarations: [
    HostComponent,
  ],
})
export class HostModule { }
