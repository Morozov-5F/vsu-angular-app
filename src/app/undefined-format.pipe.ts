import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'undefinedFormat'
})
export class UndefinedFormatPipe implements PipeTransform {

  transform(value: any, text?: string): any {
    if (!text) {
      text = 'N/A';
    }

    if (!value) {
      value = text;
    }

    return value;
  }

}
