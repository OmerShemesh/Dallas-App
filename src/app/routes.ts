import { Routes } from '@angular/router';
import { GeneralStatisticsComponent, GeneralStatisticsResolver } from './general-statistics';

export const appRoutes : Routes = [
    {path : 'general-statistics', component: GeneralStatisticsComponent, resolve: {statistics:GeneralStatisticsResolver}},
    {path : '', redirectTo:'/general-statistics', pathMatch:'full'}
]

