import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  ready: boolean;
  statistics = [];

  data = {
    ovirtCompatibilityData:[]
  };

  labels = {
    ovirtCompatibilityLabels:[]
  };

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
    this.data.ovirtCompatibilityData = [];
    this.labels.ovirtCompatibilityLabels = [];
    this.statisticsService.getGeneralStatistics('clusters').subscribe(statistics => {

      this.statistics = statistics;


      this.chartOptions.legend.display = true;
      let keys = this.labels.ovirtCompatibilityLabels = Object.keys(statistics.ovirt_versions);
      this.labels.ovirtCompatibilityLabels = this.labels.ovirtCompatibilityLabels.map(label => "oVirt " + label);
      for (let key of keys) {
        this.data.ovirtCompatibilityData.push(statistics.ovirt_versions[key]);
      }

      this.ready = true;
    });
  }


}
