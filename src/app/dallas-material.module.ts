import { NgModule } from '@angular/core';
import {
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
  ],
  exports: [
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  declarations: []
})
export class DallasMaterialModule { }
