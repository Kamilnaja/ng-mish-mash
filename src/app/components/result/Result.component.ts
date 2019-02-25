import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from './WeatherService';
import { Result } from 'src/app/interfaces/Result';

@Component({
    selector: 'app-result',
    templateUrl: './result.html'
})

export class ResultComponent implements OnInit {

    @Input() showResults: boolean;

    private _weatherApiResponse: any;
    private _result: Result;

    constructor(private _weatherService: WeatherService) { }

    ngOnInit(): void {
        this._weatherService.listItems$
            .subscribe(t => {
                this._result = t;
            });
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }

    get result(): Result {
        return this._result;
    }
}
