import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routes
import { RouterModule } from '@angular/router';
import { appRoutes} from './routes';

import { AppComponent } from './app.component';

import { StatisticsService } from './statistics.service';
import { GeneralStatisticsComponent, GeneralStatisticsResolver } from './general-statistics';

@NgModule({
  declarations: [
    AppComponent,
    GeneralStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StatisticsService,GeneralStatisticsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
