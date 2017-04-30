import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SetupsComponent } from './setups.component';

const setupsRoutes: Routes = [
    {
        path: '',component: SetupsComponent,
    }
];

@NgModule({
    imports:[RouterModule.forChild(setupsRoutes)],
    exports:[RouterModule]
})
export class SetupsRoutingModule{}


