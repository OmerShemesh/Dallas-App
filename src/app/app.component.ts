import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StatisticsService]
})
export class AppComponent implements OnInit {


  private hostsStatsitics = {}
  constructor(private statisticsService:StatisticsService){}
  
  ngOnInit() {
    this.statisticsService.getHostsStatistics().subscribe(statistics => {
      this.hostsStatsitics = statistics;  
    })
  }


  title = 'app works!';


}
