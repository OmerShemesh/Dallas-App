import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SetupComponent } from './setup.component';

const setupRoutes: Routes = [
  { path: '', component: SetupComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(setupRoutes);

