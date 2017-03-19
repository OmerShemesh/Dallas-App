import { Routes } from '@angular/router';
import { GeneralStatisticsComponent, GeneralStatisticsResolver } from './general-statistics';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes : Routes = [
    {path : 'general-statistics', component: GeneralStatisticsComponent, resolve: {statistics:GeneralStatisticsResolver}},
    {path : '', redirectTo:'/general-statistics', pathMatch:'full'},
    {path: '**', component:NotFoundComponent}
]

