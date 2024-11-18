import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
 transform(value: number, separator: string = ','): string {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
 }
}

