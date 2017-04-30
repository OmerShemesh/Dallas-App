import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';

import { FormsModule } from '@angular/forms';

import { SetupsComponent, SetupDetailComponent } from './setups.component';
import { SetupsRoutingModule } from './setups.routing';
import { SearchSetupPipe } from './search-setup.pipe';




@NgModule({
  imports: [
    SharedModule,
    SetupsRoutingModule,
    FormsModule
  ],
  declarations: [
    SetupsComponent,
    SetupDetailComponent,
    SearchSetupPipe
  ],
  entryComponents:[
    SetupDetailComponent
  ]
})
export class SetupsModule { }
