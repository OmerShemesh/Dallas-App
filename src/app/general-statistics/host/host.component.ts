import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  ready: boolean;
  cpuLabels = [];
  cpuData = [];
  coresLables = [];
  coresData = [];
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
    this.cpuData = [];
    this.cpuLabels = [];
    this.coresData = [];
    this.coresLables = [];


    this.statisticsService.getGeneralStatistics('hosts').subscribe(statistics => {

      this.statistics = statistics;
      this.chartOptions.legend.display = true;
      let keys = this.cpuLabels = Object.keys(statistics.cpus);
      for (let key of keys) {
        this.cpuData.push(statistics.cpus[key]);
      }

      keys = this.coresLables = Object.keys(statistics.cpu_cores);
      for (let key of keys) {
        this.coresData.push(statistics.cpu_cores[key]);
      }

      this.coresLables = this.coresLables.map(label => label + " Cores");

      this.ready = true;
    });
  }

}
