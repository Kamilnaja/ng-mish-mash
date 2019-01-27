import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/app.weather.service';
import { UserDataService } from './services/UserData.service';
import { UserSettings } from './models/UserSettings';

@Component({
    selector: 'app-weather',
    templateUrl: './app.weather.html'
})

export class AppWeatherComponent implements OnInit {
    _weatherApiResponse: any;
    _userData: UserSettings;

    constructor(
        private weatherService: WeatherService,
        private userConfigService: UserDataService
    ) {
        this._weatherApiResponse = this.weatherService.data
            .subscribe(
                resp => {
                    this._weatherApiResponse = { ...resp.body };
                }
            );
    }

    ngOnInit(): void {
        this.userConfigService.currentData.subscribe(data => this._userData = data);
    }

    get userData() {
        return this._userData;
    }

    get weatherDataResponse() {
        return this._weatherApiResponse;
    }
}
