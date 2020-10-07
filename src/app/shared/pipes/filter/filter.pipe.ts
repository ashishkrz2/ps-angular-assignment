import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): unknown {
    if (!value) { return null; }
    if (!args) { return value; }

    const field = args[0]; // field for sorting
    const filter = args[1]; // filter value
    const isMinMaxFilter = args[2]; // filter based on min max value or regex

    if (filter === 'null' || !filter) { return value; }

    if (isMinMaxFilter) {
      const [min, max] = filter.split('.');
      return value.filter(val => (val[field] >= min && val[field] <= max));
    } else {
      // regex match filter
    }
    return value;
  }
}
