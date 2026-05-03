import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null || isNaN(value)) return '';

    const totalMinutes = Math.floor(value);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours && minutes) {
      return `${hours}h ${minutes}min`;
    }

    if (hours) {
      return `${hours}h`;
    }

    return `${minutes}min`;
  }
}
