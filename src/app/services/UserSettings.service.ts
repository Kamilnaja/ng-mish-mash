import { Injectable } from '@angular/core';
import { WeatherService } from './Weather.service';
import { UserSettings } from '../models/UserSettings';

@Injectable()
export class UserSettingsService {

    constructor(public weatherService: WeatherService) { }

    loadAll() {
        this.changeData(new UserSettings('warszawa', 'pl', 'metric'));
    }

    changeData(userSettings) {
        this.weatherService.requestData(userSettings);
    }
}
