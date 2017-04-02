import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'data-center',
  templateUrl: './data-center.component.html',
  styleUrls: ['./data-center.component.css']
})
export class DataCenterComponent implements OnInit {

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
    this.statisticsService.getGeneralStatistics('datacenters').subscribe(statistics => {

      this.statistics = statistics;
      this.ready = true;
    });
  }


}