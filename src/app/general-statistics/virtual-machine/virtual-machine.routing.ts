import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualMachineComponent } from './virtual-machine.component';



const virtualMachineRoutes: Routes = [
  { path: '', component: VirtualMachineComponent }
];


@NgModule({
    imports:[RouterModule.forChild(virtualMachineRoutes)],
    exports:[RouterModule]
})
export class VirtualMachineRoutingModule{}

