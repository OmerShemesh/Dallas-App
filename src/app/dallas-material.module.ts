import { NgModule } from '@angular/core';
import {
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdRippleModule,
  MdDialogModule,
  MdInputModule
} from '@angular/material';


@NgModule({
  imports: [
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdRippleModule,
    MdDialogModule,
    MdInputModule
  ],
  exports: [
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdRippleModule,
    MdDialogModule,
    MdInputModule
  ],
  declarations: []
})
export class DallasMaterialModule { }
