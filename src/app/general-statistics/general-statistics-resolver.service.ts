import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StatisticsService } from '../statistics.service';

@Injectable()
export class GeneralStatisticsResolver implements Resolve<any>{

    constructor(private statisticsService: StatisticsService){}

    resolve() {
        return this.statisticsService.getGeneralStatistics("setups");
    }

}