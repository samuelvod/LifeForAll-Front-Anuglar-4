import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( datas : any[], term: string ): any[] {
    if (!term ) { return datas; }

    return datas.filter(function (data){

      return data.fullname.toLowerCase().includes(term.toLowerCase());
    })

  }

}
