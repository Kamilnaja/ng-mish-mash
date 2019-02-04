import { Injectable } from '@angular/core';
import { UserSettings } from '../models/UserSettings';
import { WeatherService } from '../result/WeatherService';
import { UnitSystem } from '../models/unit-system.enum';

@Injectable()
export class UserSettingsService {

    constructor(public weatherService: WeatherService) { }

    loadAll() {
        this.changeData(new UserSettings('warsaw', 'pl', UnitSystem.metric));
    }

    changeData(userSettings) {
        this.weatherService.requestData(userSettings);
    }
}
