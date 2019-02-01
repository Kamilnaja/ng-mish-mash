import { Component, Input, OnInit } from '@angular/core';
import { UserSettings } from './models/UserSettings';
import { WeatherService } from './services/Weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent implements OnInit {
    @Input() city: string;
    @Input() country: string;

    private _weatherApiResponse: any;
    private _listItems = [];

    constructor(private _weatherService: WeatherService) { }

    ngOnInit(): void {
        this._weatherService.listItems$.subscribe(t => {
            this._listItems = t;
        });
        this._weatherService.requestData(new UserSettings(this.city, this.country, 'metric'));
    }

    get weatherResponse() {
        return this._weatherApiResponse;
    }
}
