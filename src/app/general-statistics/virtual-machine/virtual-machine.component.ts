import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";
import { flyIn } from '../../animations';


@Component({
  selector: 'virtual-machine',
  templateUrl: './virtual-machine.component.html',
  styleUrls: ['./virtual-machine.component.css'],
  animations: [
    flyIn
  ]

})
export class VirtualMachineComponent implements OnInit {


  labels = {
    osTypesLabels: [],
    displayTypesLabels: [],
    numOfCpusLabels: []
  };
  ready: boolean;
  data = {
    osTypesData: [],
    displayTypesData: [],
    numOfCpusData: []
  };
  statistics = {
    average_cpu_usage: {},
    average_mem_size: {},
    average_mem_usage: {},
    max_mem_size: {},
    display_types: {},
    os_types: {},
    vms_count: {},
    num_of_cpus: {}
  };

  osTypesChartOptions = {
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

  displayTypesChartOptions = {
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

      this.osTypesChartOptions.legend.display = false;
      let keys = this.labels.osTypesLabels = Object.keys(statistics.os_types);
      for (let key of keys) {
        this.data.osTypesData.push(statistics.os_types[key]);
      }


      keys = this.labels.displayTypesLabels = Object.keys(statistics.display_types);
      for (let key of keys) {
        this.data.displayTypesData.push(statistics.display_types[key]);
      }

      keys = this.labels.numOfCpusLabels = Object.keys(statistics.num_of_cpus)
      for (let key of keys) {
        this.data.numOfCpusData.push(statistics.num_of_cpus[key]);
      }
      this.labels.numOfCpusLabels = this.labels.numOfCpusLabels.map(label => label + " vCPUs");

      this.ready = true;
    });
  }

}
