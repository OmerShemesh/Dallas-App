import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from '../statistics.service';


@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css']
})
export class GeneralStatisticsComponent implements OnInit {

  statistics: any;
  labels = [];
  data = [];
  ready: boolean = false;

  options = [
    { value: 'setups', viewValue: "Setups" },
    { value: 'datacenters', viewValue: "Data Centers" },
    { value: 'clusters', viewValue: "Clusters" },
    { value: 'hosts', viewValue: "Hosts" },
    { value: 'vms', viewValue: "Virtual Machines" },
    { value: 'storage', viewValue: "Storage" }
  ];

  selectedOption: string = "setups";

  constructor(private route: ActivatedRoute, private statisticsService: StatisticsService) { }



  onSelect(val) {
    this.selectedOption = val;
  }

  ngOnInit() {
    
  }


}