import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  ready: boolean;

  statistics = [];

  data = {
    cpuData: [],
    coresData: []
  }

  labels = {
    cpuLabels: [],
    coresLables: []
  }

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
    this.data.cpuData = [];
    this.labels.cpuLabels = [];
    this.data.coresData = [];
    this.labels.coresLables = [];


    this.statisticsService.getGeneralStatistics('hosts').subscribe(statistics => {

      this.statistics = statistics;
      this.chartOptions.legend.display = true;
      let keys = this.labels.cpuLabels = Object.keys(statistics.cpus);
      for (let key of keys) {
        this.data.cpuData.push(statistics.cpus[key]);
      }

      keys = this.labels.coresLables = Object.keys(statistics.cpu_cores);
      for (let key of keys) {
        this.data.coresData.push(statistics.cpu_cores[key]);
      }

      this.labels.coresLables = this.labels.coresLables.map(label => label + " Cores");

      this.ready = true;
    });
  }

}
