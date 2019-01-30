import { Component } from '@angular/core';
import { UserSettings } from './models/UserSettings';
import { WeatherService } from './services/Weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent {
    _weatherApiResponse: any;

    constructor(
        private weatherService: WeatherService) {
        this._weatherApiResponse = this.weatherService.requestData()
            .subscribe(
                resp => { this._weatherApiResponse = { ...resp.body }; }
            );
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }
}
