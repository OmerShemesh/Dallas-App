import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup.routing';

@NgModule({
  imports: [
    SharedModule,
    SetupRoutingModule
  ],
  declarations: [
    SetupComponent,
  ],
})
export class SetupModule { }
