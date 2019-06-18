import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(employees: any[], field: string): any {
    debugger;
    if(!employees)
      return null;

      if(field) employees.sort((a, b) => a[field] > b[field] ? 1 : -1)
      else employees.sort((a, b) => a > b ? 1 : -1);

      return employees;
  }

}
