import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'virtual-machine',
  templateUrl: './virtual-machine.component.html',
  styleUrls: ['./virtual-machine.component.css']
})
export class VirtualMachineComponent implements OnInit {

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
    this.statisticsService.getGeneralStatistics('vms').subscribe(statistics => {

      this.statistics = statistics;


      this.chartOptions.legend.display = false;
      let keys = this.labels = Object.keys(statistics.os_types);
      for (let key of keys) {
        this.data.push(statistics.os_types[key]);
      }




      this.ready = true;
    });
  }

}
