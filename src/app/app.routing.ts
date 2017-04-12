import { Routes, RouterModule } from '@angular/router';
import { GeneralStatisticsComponent } from './general-statistics';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/general-statistics', pathMatch: 'full' },
    {
        path: 'general-statistics',
        loadChildren:'./general-statistics/general-statistics.module#GeneralStatisticsModule'
    },
    { path: '**', component: NotFoundComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);