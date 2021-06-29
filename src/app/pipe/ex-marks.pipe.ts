import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  // ng g p ex-marks
  transform(str: string): string {
    return `${str.trim()}!!!`;
  }

}
