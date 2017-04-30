import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSetup'
})
export class SearchSetupPipe implements PipeTransform {

  transform(setups: any[], prefix: string): any {
    if(!setups){
      return [];
    }
    return setups.filter((item)=>{
      if(prefix == ""){
        return item;
      }
      else
        return item._id.includes(prefix);
    });
  }

}
