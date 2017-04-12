import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ClusterComponent } from './cluster.component';

const clusterRoutes: Routes = [
  { path: '', component: ClusterComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(clusterRoutes);

