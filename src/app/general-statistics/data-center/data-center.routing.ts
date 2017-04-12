import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DataCenterComponent } from './data-center.component';

const dataCentersRoutes: Routes = [
  { path: '', component: DataCenterComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(dataCentersRoutes);

