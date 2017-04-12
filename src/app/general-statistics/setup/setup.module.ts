import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { SetupComponent } from './setup.component';
import { routing } from './setup.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    SetupComponent,
  ],
})
export class SetupModule { }
