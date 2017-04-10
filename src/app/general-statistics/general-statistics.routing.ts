import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { GeneralStatisticsComponent } from './general-statistics.component';

const generalStatisticsRoutes: Routes = [
  { path: '', component: GeneralStatisticsComponent }
];


export const routing:ModuleWithProviders = RouterModule.forChild(generalStatisticsRoutes);

