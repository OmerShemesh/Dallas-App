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
  ];

  selectedOption: string = "setups";

  constructor(private route: ActivatedRoute, private statisticsService: StatisticsService) { }

  onOptionChange() {

    this.statisticsService.getGeneralStatistics(this.selectedOption).subscribe(statistics => {
      this.statistics = statistics;
      if (this.selectedOption == "clusters") {
        this.labels = [];
        this.data = [];
        for (let version of statistics.ovirt_versions) {
          this.labels.push("oVirt " + version['_id']);
          this.data.push(version['percentage']);
        }
      }
    });
  }

  ngOnInit() {
    this.statistics = this.route.snapshot.data['statistics'];
  }


}