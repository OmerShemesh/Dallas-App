import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { SharedModule } from '../../shared.module';
import { StorageComponent } from './storage.component';
import { StorageRoutingModule } from './storage.routing';

@NgModule({
  imports: [
    SharedModule,
    StorageRoutingModule
  ],
  declarations: [
    StorageComponent,
  ],
})
export class StorageModule { }
