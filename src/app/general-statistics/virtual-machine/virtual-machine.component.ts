import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";

@Component({
  selector: 'virtual-machine',
  templateUrl: './virtual-machine.component.html',
  styleUrls: ['./virtual-machine.component.css']
})
export class VirtualMachineComponent implements OnInit {


  labels = {
    osTypesLabels: [],
    displayTypesLabels: []
  };
  ready: boolean;
  data = {
    osTypesData: [],
    displayTypesData: []
  };
  statistics = {
    average_cpu_usage: {},
    average_mem_size: {},
    average_mem_usage: {},
    display_types: {},
    os_types: {},
    vms_count: {}
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
    this.data.osTypesData = [];
    this.labels.osTypesLabels = [];
    this.statisticsService.getGeneralStatistics('vms').subscribe(statistics => {

      this.statistics = statistics;

      this.chartOptions.legend.display = false;
      let keys = this.labels.osTypesLabels = Object.keys(statistics.os_types);
      for (let key of keys) {
        this.data.osTypesData.push(statistics.os_types[key]);
      }


      keys = this.labels.displayTypesLabels = Object.keys(statistics.display_types);
      for (let key of keys) {
        this.data.displayTypesData.push(statistics.display_types[key]);
      }



      this.ready = true;
    });
  }

}
