import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { DallasMaterialModule } from './dallas-material.module';

//routes
import { RouterModule } from '@angular/router';
import { appRoutes} from './routes';

import { AppComponent } from './app.component';

import { StatisticsService } from './statistics.service';

import { NotFoundComponent } from './not-found/not-found.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import {
  GeneralStatisticsComponent, 
  SetupComponent,
  DataCenterComponent,
  ClusterComponent,
  HostComponent,
  VirtualMachineComponent,
  StorageComponent} from './general-statistics/';




@NgModule({
  declarations: [
    AppComponent,
    GeneralStatisticsComponent,
    NotFoundComponent,
    SetupComponent,
    DataCenterComponent,
    ClusterComponent,
    HostComponent,
    VirtualMachineComponent,
    StorageComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DallasMaterialModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [StatisticsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
