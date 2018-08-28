import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const values = {
      0.25: 'un quart' + (args.of ? ' de' :  ''),
      0.5: 'un' + (!args.masculine ? '' : 'e') + ' demi',
      0.75: 'trois quarts' + (args.of ? ' de' :  ''),
    }

    if (isNaN(value)) {
      console.error('Error in ' + this.constructor.name + ': ' + value + ' is not a number.');
      return null;
    } else {
      return values[value] || value;
    }
  }
}
