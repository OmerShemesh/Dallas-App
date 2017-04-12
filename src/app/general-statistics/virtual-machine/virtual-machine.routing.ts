import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { VirtualMachineComponent } from './virtual-machine.component';

const virtualMachineRoutes: Routes = [
  { path: '', component: VirtualMachineComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(virtualMachineRoutes);

