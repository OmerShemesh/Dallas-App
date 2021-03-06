import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";
import { flyIn } from '../../animations';



@Component({
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
  animations:[
    flyIn
  ]
})
export class StorageComponent implements OnInit {

  labels = {
    storageTypesLabels: []
  };
  ready: boolean;
  data = {
    storageTypesData: []
  };
  statistics = {
    average_disk_usage: {},
    max_disk_usage:{},
    storage_count: {},
    storage_types: {}
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
    this.data.storageTypesData = [];
    this.labels.storageTypesLabels = [];
    this.statisticsService.getGeneralStatistics('storage').subscribe(statistics => {

      this.statistics = statistics;


      this.chartOptions.legend.display = true;
      let keys = this.labels.storageTypesLabels = Object.keys(statistics.storage_types);
      for (let key of keys) {
        this.data.storageTypesData.push(statistics.storage_types[key]);
      }




      this.ready = true;
    });
  }

}
