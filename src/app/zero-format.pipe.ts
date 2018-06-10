import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroFormat'
})
export class ZeroFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) {
      return 'N/A';
    }
    return value.toString();
  }

}
