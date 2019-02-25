import { Component, Input } from '@angular/core';
import { Result } from 'src/app/interfaces/Result';

@Component({
    selector: 'app-city-not-found',
    templateUrl: './cityNotFound.html',
    styleUrls: ['./../../result.css']
})

export class CityNotFoundComponent {
    @Input() result: Result;
}
