import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { VirtualMachineComponent } from './virtual-machine.component';
import { routing } from './virtual-machine.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    VirtualMachineComponent,
  ],
})
export class VirtualMachineModule { }
