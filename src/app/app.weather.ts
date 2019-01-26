import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from './app.weather.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent {
    _data: any;

    constructor(private weatherService: WeatherService) {
        this._data = this.weatherService.data
            .subscribe(
                resp => {
                    this._data = { ...resp.body };
                }
            );
    }

    get data() {
        return this._data;
    }
}
