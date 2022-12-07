import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
       return value.filter((value: string | any[]) => value.indexOf(input)) >= 0;
     } else {
       return value;
     }
    }
}
