import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  labels = [];
  ready: boolean;
  data = [];
  statistics = [];

  chartOptions = {
    legend: {
      display: true
    },
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

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.ready = false;
    this.data = [];
    this.labels = [];
    this.statisticsService.getGeneralStatistics('clusters').subscribe(statistics => {

      this.statistics = statistics;


      this.chartOptions.legend.display = true;
      let keys = this.labels = Object.keys(statistics.ovirt_versions);
      this.labels = this.labels.map(label => "oVirt " + label);
      for (let key of keys) {
        this.data.push(statistics.ovirt_versions[key]);
      }

      this.ready = true;
    });
  }


}
