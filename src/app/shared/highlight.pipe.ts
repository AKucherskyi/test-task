import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, predicate: string): any {
    if (predicate && value) {
      value = String(value);
      for (let predicateWord of predicate.split(' ')) {
        const startIndex = value
          .toLowerCase()
          .indexOf(predicateWord.toLowerCase());
        if (startIndex !== -1) {
          const matchingString = value.substr(startIndex, predicateWord.length);
          value = value.replace(
            matchingString,
            '<mark>' + matchingString + '</mark>'
          );
        }
      }
    }
    return value;
  }
}
