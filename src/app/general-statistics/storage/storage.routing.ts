import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StorageComponent } from './storage.component';

const storageRoutes: Routes = [
  { path: '', component: StorageComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(storageRoutes);

