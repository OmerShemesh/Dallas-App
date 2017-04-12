import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HostComponent } from './host.component';

const hostRoutes: Routes = [
  { path: '', component: HostComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(hostRoutes);

