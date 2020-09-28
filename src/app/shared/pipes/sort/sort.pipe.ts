import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): unknown {
    if (!value) return null;
    if (!args) return value;

    const data: any[] = [...value]; // avoid changing original value
    const field = args[0]; // field for sorting
    const order = args[1]; // sort order

    switch (order) {
      case 'asc': {
        data.sort((a,b)=> (a[field] > b[field] ? 1 : -1))
        break;
      }
      case 'desc': {
        data.sort((a,b)=> (a[field] < b[field] ? 1 : -1))
        break;
      }
      default:
        return data;
    }

    return data;
  }
}
