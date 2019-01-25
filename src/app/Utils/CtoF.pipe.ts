import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CtoF' })

export class CtoF implements PipeTransform {
    transform(temperature: number): number {
        return ((temperature - 32) * 5) / 9;
    }
}
