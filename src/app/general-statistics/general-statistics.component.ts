import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../statistics.service';


@Component({
  selector: 'general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css']
})
export class GeneralStatisticsComponent implements OnInit {

  options = [
    { value: 'setups', viewValue: "Setups", url:"setup" },
    { value: 'datacenters', viewValue: "Data Centers", url:"dc" },
    { value: 'clusters', viewValue: "Clusters", url:"cluster" },
    { value: 'hosts', viewValue: "Hosts", url:"host" },
    { value: 'vms', viewValue: "Virtual Machines", url:"vm" },
    { value: 'storage', viewValue: "Storage", url:"storage" }
  ];


  constructor() { }

  ngOnInit() {
    
  }


}