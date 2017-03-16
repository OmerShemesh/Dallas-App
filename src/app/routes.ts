import { Routes } from '@angular/router';
import { GeneralStatisticsComponent, GeneralStatisticsResolver } from './general-statistics';

export const appRoutes : Routes = [
    {path : '', component: GeneralStatisticsComponent, resolve: {statistics:GeneralStatisticsResolver}}
]

