import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './WeatherService';

@Component({
    selector: 'app-result',
    templateUrl: './result.html'
})

export class ResultComponent implements OnInit {

    @Input() showResults: boolean;

    private _weatherApiResponse: any;
    private result = [];

    constructor(private _weatherService: WeatherService) { }

    ngOnInit(): void {
        this._weatherService.listItems$.subscribe(t => {
            this.result = t;
        });
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }
}
