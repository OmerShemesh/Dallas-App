import { Component, OnInit, Inject } from '@angular/core';
import { StatisticsService } from '../statistics.service';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'setups',
  templateUrl: './setups.component.html',
  styleUrls: ['./setups.component.css'],
})
export class SetupsComponent implements OnInit {

    setups:any[];
    ready: boolean;
    searchText: string = "";

    constructor(private statisticsService:StatisticsService, public dialog: MdDialog) { }

    ngOnInit() {
        this.ready = false;
        this.statisticsService.getSetups().subscribe(setups => {
            this.setups = setups;
            this.ready = true;
        });
    }

    displaySetupDetails(setup){
        this.dialog.open(SetupDetailComponent,{
            data: {
                setup:setup
            }
        });
    }

}


@Component({
    templateUrl:'./setup-details.component.html',
    styleUrls:['./setup-details.component.css']
})
export class SetupDetailComponent{
    setup:any;
    constructor(@Inject(MD_DIALOG_DATA) private data){
        this.setup = this.data.setup;

    }
}

