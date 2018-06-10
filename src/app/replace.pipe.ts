import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, src: string, dst: string): string {
    return value.replace(new RegExp(src, 'g'), dst);;
  }

}
