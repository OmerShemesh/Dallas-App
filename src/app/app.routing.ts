import { Routes, RouterModule } from '@angular/router';
import { GeneralStatisticsComponent } from './general-statistics';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
   
    { path: '', redirectTo: '/general-statistics/setup', pathMatch: 'full' },
    {
        path: 'general-statistics',
        loadChildren:'./general-statistics/general-statistics.module#GeneralStatisticsModule'
    },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}


