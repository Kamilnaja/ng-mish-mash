import { Component } from '@angular/core';
import { WeatherEntry } from './model';
import { WeatherService } from './app.weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent {
    _data: WeatherEntry;

    constructor(private weatherService: WeatherService) {
        this._data = weatherService.data;
    }

    get data() {
        return this._data;
    }
}
