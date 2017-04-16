import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ClusterComponent } from './cluster.component';

const clusterRoutes: Routes = [
  { path: '', component: ClusterComponent }
];

@NgModule({
    imports:[RouterModule.forChild(clusterRoutes)],
    exports:[RouterModule]
})
export class ClusterRoutingModule{}



