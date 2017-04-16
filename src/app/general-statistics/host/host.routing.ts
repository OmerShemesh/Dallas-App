import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HostComponent } from './host.component';

const hostRoutes: Routes = [
  { path: '', component: HostComponent }
];

@NgModule({
    imports:[RouterModule.forChild(hostRoutes)],
    exports:[RouterModule]
})
export class HostRoutingModule{}


