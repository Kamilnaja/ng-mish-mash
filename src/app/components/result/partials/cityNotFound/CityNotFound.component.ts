import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-city-not-found',
    templateUrl: './cityNotFound.html',
    styleUrls: ['./../../result.css']
})

export class CityNotFoundComponent {
    @Input() result: object;
}
