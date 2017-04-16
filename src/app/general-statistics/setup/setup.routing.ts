import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SetupComponent } from './setup.component';

const setupRoutes: Routes = [
  { path: '', component: SetupComponent }
];


@NgModule({
    imports:[RouterModule.forChild(setupRoutes)],
    exports:[RouterModule]
})
export class SetupRoutingModule{}

