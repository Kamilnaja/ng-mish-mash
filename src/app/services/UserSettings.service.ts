import { Injectable } from '@angular/core';
import { WeatherService } from './Weather.service';

@Injectable()
export class UserSettingsService {

    constructor(public weatherService: WeatherService) { }

    loadAll() {
        this.changeData('warszawa', 'pl', 'metric');
    }

    changeData(city, country, unitSystem) {
        this.weatherService.requestData(city, country, unitSystem);
    }
}
