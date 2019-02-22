import { Injectable } from '@angular/core';
import { UserSettings } from '../models/UserSettings';
import { UnitSystem } from '../models/unit-system.enum';
import { WeatherService } from '../components/result/WeatherService';

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
