import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
//routes
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GeneralStatisticsModule } from './general-statistics/general-statistics.module';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    routing,
    BrowserAnimationsModule,
    GeneralStatisticsModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
