import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GeneralStatisticsComponent } from './general-statistics.component';

const generalRoutes: Routes = [
    {
        path: '',
        component: GeneralStatisticsComponent,
        children: [
            { path: '', redirectTo: '/general-statistics/dc', pathMatch: 'full' },
            { path: 'setup', loadChildren: './setup/setup.module#SetupModule' },
            { path: 'dc', loadChildren: './data-center/data-center.module#DataCenterModule' },
            { path: 'cluster', loadChildren: './cluster/cluster.module#ClusterModule' },
            { path: 'host', loadChildren: './host/host.module#HostModule' },
            { path: 'vm', loadChildren: './virtual-machine/virtual-machine.module#VirtualMachineModule' },
            { path: 'storage', loadChildren: './storage/storage.module#StorageModule' },

        ]
    }
];


export const routing: ModuleWithProviders = RouterModule.forChild(generalRoutes);

