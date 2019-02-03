import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-city-not-found',
    templateUrl: './cityNotFound.html'
})

export class CityNotFoundComponent {
    @Input() result: object;
}
