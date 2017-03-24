import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../statistics.service';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

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
    this.statisticsService.getGeneralStatistics('setups').subscribe(statistics => {

      this.statistics = statistics;
      this.ready = true;
    });
  }

}
