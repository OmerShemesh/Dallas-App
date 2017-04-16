import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { VirtualMachineComponent } from './virtual-machine.component';
import { VirtualMachineRoutingModule } from './virtual-machine.routing';


@NgModule({
  imports: [
    SharedModule,
    VirtualMachineRoutingModule
  ],
  declarations: [
    VirtualMachineComponent,
  ],
})
export class VirtualMachineModule { }
