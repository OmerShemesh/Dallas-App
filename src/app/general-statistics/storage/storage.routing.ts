import { Routes, RouterModule } from '@angular/router';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { StorageComponent } from './storage.component';

const storageRoutes: Routes = [
  { path: '', component: StorageComponent }
];

@NgModule({
    imports:[RouterModule.forChild(storageRoutes)],
    exports:[RouterModule]
})
export class StorageRoutingModule{}



