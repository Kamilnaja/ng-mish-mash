import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/Weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent implements OnInit {

    private _weatherApiResponse: any;
    private _listItems = [];

    constructor(
        private _weatherService: WeatherService) {
        this._weatherApiResponse = this._weatherService.requestData('warszawa', 'pl', 'metric');
    }

    ngOnInit(): void {
        this._weatherService.listItems$.subscribe(t => {
            this._listItems = t;
        });
        this._weatherService.requestData('warszawa', 'pl', 'dolor');
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }
}
