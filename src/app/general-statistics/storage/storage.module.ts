import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { StorageComponent } from './storage.component';
import { routing } from './storage.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    StorageComponent,
  ],
})
export class StorageModule { }
