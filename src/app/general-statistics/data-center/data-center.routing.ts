import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { DataCenterComponent } from './data-center.component';

const dataCentersRoutes: Routes = [
  { path: '', component: DataCenterComponent }
];

@NgModule({
    imports:[RouterModule.forChild(dataCentersRoutes)],
    exports:[RouterModule]
})
export class DataCenterRoutingModule{}


