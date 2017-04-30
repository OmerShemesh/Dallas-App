import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StatisticsService {

  private API_URL = 'http://localhost:5000/api';
  constructor(private http:Http) { }

  getGeneralStatistics(statsFor: string):Observable<any>{

    let params: URLSearchParams = new URLSearchParams();
    let requestOptions: RequestOptions = new RequestOptions();

    // if(statsFor === "")
    // {
    //   return this.http.get(this.API_URL + '/statistics/general')
    //             .map((response:Response) => response.json())
    //             .catch(this.handleError);
    // }
    // else
    // {
      params.set('stats_for',statsFor);

      requestOptions.search = params;

      return this.http.get(this.API_URL + '/statistics/general',requestOptions)
                .map((response:Response) => response.json())
                .catch(this.handleError);
   // }

    
  }

  getSetups():Observable<any>{
    return this.http.get(this.API_URL + '/statistics/setups')
              .map((response:Response)=>response.json())
              .catch(this.handleError); 
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
