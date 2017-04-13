import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../statistics.service';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  labels = {

  };
  ready: boolean;
  data = {

  };
  statistics = {
    average_clusters_count: {},
    average_dcs_count: {},
    average_hosts_count: {},
    average_vms_count: {},
    max_clusters_count: {},
    max_dcs_count: {},
    max_hosts_count: {},
    max_vms_count: {},
    setups_count: {}
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
    this.data = [];
    this.labels = [];
    this.statisticsService.getGeneralStatistics('setups').subscribe(statistics => {

      this.statistics = statistics;
      this.ready = true;
    });
  }

}
