import { Routes } from '@angular/router';
import { GeneralStatisticsComponent } from './general-statistics';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes : Routes = [
    {path : 'general-statistics', component: GeneralStatisticsComponent},
    {path : '', redirectTo:'/general-statistics', pathMatch:'full'},
    {path: '**', component:NotFoundComponent}
]


