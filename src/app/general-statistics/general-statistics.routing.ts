import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { GeneralStatisticsComponent } from './general-statistics.component';

const generalRoutes: Routes = [
    {
        path: '',
        component: GeneralStatisticsComponent,
        children: [
            { path: '', redirectTo: 'setup', pathMatch: 'full' },
            { path: 'setup', loadChildren: './setup/setup.module#SetupModule' },
            { path: 'dc', loadChildren: './data-center/data-center.module#DataCenterModule' },
            { path: 'cluster', loadChildren: './cluster/cluster.module#ClusterModule' },
            { path: 'host', loadChildren: './host/host.module#HostModule' },
            { path: 'vm', loadChildren: './virtual-machine/virtual-machine.module#VirtualMachineModule' },
            { path: 'storage', loadChildren: './storage/storage.module#StorageModule' },
            

        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(generalRoutes)],
    exports:[RouterModule]
})
export class GeneralStatisticsRoutingModule{}


