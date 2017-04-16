import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "../../statistics.service";
import { flyIn } from '../../animations';

@Component({
  selector: 'cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css'],
  animations: [flyIn]
})
export class ClusterComponent implements OnInit {

  ready: boolean;
  statistics = {
    average_hosts_count: {},
    average_vms_count: {},
    max_hosts_count:{},
    max_vms_count: {},
    clusters_count: {},
    ovirt_versions: {},
    cpu_families: {}
  };

  data = {
    ovirtCompatibilityData: [],
    cpuFamiliesData: []
  };

  labels = {
    ovirtCompatibilityLabels: [],
    cpuFamiliesLabels: []
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

      keys = this.labels.cpuFamiliesLabels = Object.keys(statistics.cpu_families);
      for(let key of keys){
        this.data.cpuFamiliesData.push(statistics.cpu_families[key]);
      }

      this.ready = true;
    });
  }


}
