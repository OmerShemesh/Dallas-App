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
  chartOptions =  {
          tooltips: {
            mode: 'label',
            callbacks: {
              label: function (tooltipItem, data) {
                var tooltipLabel = data.labels[tooltipItem.index];

                return tooltipLabel + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
              }
            }
          }
  };


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

  onOptionChange() {
      this.ready = false;
      this.data = [];
      this.labels = [];
      this.statisticsService.getGeneralStatistics(this.selectedOption).subscribe(statistics => {
       
        this.statistics = statistics;

        if(this.selectedOption == 'clusters'){
          let keys = this.labels = Object.keys(statistics.ovirt_versions);
          this.labels = this.labels.map(label => "oVirt " + label);
          for(let key of keys){
            this.data.push(statistics.ovirt_versions[key]);
          }
          this.ready = true;
        }

        else if(this.selectedOption == 'storage'){
          let keys = this.labels = Object.keys(statistics.storage_types);
          for(let key of keys){
            this.data.push(statistics.storage_types[key]);
          }
          this.ready = true;
        }

        else if(this.selectedOption == 'hosts'){
           let keys = this.labels = Object.keys(statistics.cpus);
          for(let key of keys){
            this.data.push(statistics.cpus[key]);
          }
          this.ready = true;
        }
      });
    
  }

  ngOnInit() {
    this.statistics = this.route.snapshot.data['statistics'];
  }


}