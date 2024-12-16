import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priceFormatting'
})
export class PriceFormattingPipe implements PipeTransform {
    transform(value: number, currency: string = 'USD', locale: string = 'en-US'): string {
        if (value == null) return ''; // Return empty string if value is null or undefined

        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2, // To ensure 2 decimal places
            maximumFractionDigits: 2
        });

        return formatter.format(value); // Format and return the price
    }

}