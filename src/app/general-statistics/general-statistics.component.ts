import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.css']
})
export class GeneralStatisticsComponent implements OnInit {

  statistics:any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.statistics = this.route.snapshot.data['statistics'];
    console.log(this.statistics);
  } 

  onChange(val: string){
    console.log(val);
  }

}
