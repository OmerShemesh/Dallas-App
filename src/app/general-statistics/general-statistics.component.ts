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
  options = [
    {value:'setups', viewValue:"Setups"},
    {value:'datacenters', viewValue:"Data Centers"},
    {value:'clusters', viewValue:"Clusters"},
    {value:'hosts', viewValue:"Hosts"},
  ];

  selectedOption: string = "setups";
  
  constructor(private route: ActivatedRoute, private statisticsService: StatisticsService) { }

  onOptionChange(){

   this.statisticsService.getGeneralStatistics(this.selectedOption).subscribe(statistics => {
     this.statistics = statistics;
     console.log(this.statistics);
   });

  }

  ngOnInit() {
    this.statistics = this.route.snapshot.data['statistics'];
  } 



}
