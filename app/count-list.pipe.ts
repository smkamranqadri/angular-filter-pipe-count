import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countList',
  pure: false,
})
export class CountListPipe implements PipeTransform {
  transform(items: any[], key: string): any {
    let count = 0;
    if (!items) return count;
    if (!key) return count;
    items.forEach((item) => {
      if (item[key]) count++;
    });
    return count;
  }
}
