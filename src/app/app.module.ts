import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

//routes
import { RouterModule } from '@angular/router';
import { appRoutes} from './routes';

import { AppComponent } from './app.component';

import { StatisticsService } from './statistics.service';
import { GeneralStatisticsComponent, GeneralStatisticsResolver } from './general-statistics';
import { NotFoundComponent } from './not-found/not-found.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    GeneralStatisticsComponent,
    NotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    ChartsModule
  ],
  providers: [StatisticsService,GeneralStatisticsResolver],
  bootstrap: [AppComponent]
})

export class AppModule { }
