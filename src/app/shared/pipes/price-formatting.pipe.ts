import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatting',
  standalone: true,
})
export class PriceFormattingPipe implements PipeTransform {
  transform(value: string | number | null | undefined, currency: string = '$'): string {
    if (value == null || value === '') {
      // Handle null, undefined, or empty strings
      return `0.00 ${currency}`;
    }

    // Convert string to number if necessary
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;

    // Return formatted price
    return `${numericValue.toFixed(2)} ${currency}`;
  }
}